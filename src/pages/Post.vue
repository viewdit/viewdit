<template>
  <PostTile
    v-if="!postLoading && post"
    :postId="post.id"
    :subview="`${post.subview}`"
    :title="`${post.title}`"
    :date="timestampToDate(post.created)!"
    :author="`${post.author}`"
    :body="`${post.content}`"
    :score="post.score || 0"
    :vote="
      user && userData.id
        ? getUserVote(post.up || [], post.down || [], userData.id)
        : null
    "
  >
    <button v-if="user" @click="() => openCommentForm(null)" class="btn btn-primary mx-2">
      Comment
    </button>
    <button v-if="user && post.author === userData.id" @click="() => editPostModal?.show()" class="btn btn-secondary mx-2">
      Edit
    </button>
    <button
      v-if="user && post.author === userData.id"
      @click="() => deletePost()"
      class="btn btn-danger mx-2"
    >
      Delete
    </button>
  </PostTile>
  <AppTile v-else-if="!postLoading && !post">
    <h1>Post not found</h1>
  </AppTile>
  <Loading v-if="postLoading || commentsLoading" />
  <AppTile
    v-if="!commentsLoading && post && nestedComments"
    v-for="c in nestedComments"
    class="overflow-x-auto"
  >
    <Comment
      @reply="(id: string) => openCommentForm(id)"
      @edit="(id: string, body: string) => openCommentForm(null, id, body)"
      @delete="(id: string) => deleteComment(id)"
      :id="c.id"
      :author="c.author"
      :isPoster="c.isPoster"
      :date="c.date"
      :body="c.body"
      :comments="c.comments || []"
      :score="c.score"
      :vote="user ? c.vote : null"
    />
  </AppTile>
  <AppModal id="postEditModal" title="Edit post">
    <form @submit.prevent="editPost" novalidate>
      <div class="form-group">
        <label for="postName">Post Title</label>
        <input v-model="postTitleEdit" id="postName" class="form-control" name="postName" placeholder="Post Title">
        <small v-if="postTitleEditError" class="form-text text-danger">{{ postTitleEditError }}</small>
      </div>
      <div class="form-group">
        <label for="postBody">Post Body</label>
        <textarea v-model="postContentEdit" id="postBody" class="form-control" name="postBody" placeholder="What are your thoughts?"></textarea>
        <small v-if="postContentEditError" class="form-text text-danger">{{ postContentEditError }}</small>
      </div>
      <button class="btn btn-primary my-2" type="submit">Continue</button>
    </form>
  </AppModal>
  <AppModal id="commentModal" :title="commentFormTitle">
    <form @submit.prevent="createComment" novalidate>
      <div class="form-group">
        <label for="commentBody">Comment</label>
        <textarea
          v-model="commentBody"
          class="form-control"
          id="commentBody"
          name="commentBody"
          placeholder="What do you think?"
        ></textarea>
        <small v-if="commentBodyError" class="form-text text-danger">{{
          commentBodyError
        }}</small>
      </div>
      <button class="btn btn-primary my-2" type="submit">Continue</button>
    </form>
  </AppModal>
</template>

<script lang="ts" setup>
import AppTile from "../components/AppTile.vue";
import AppModal from "../components/AppModal.vue";
import PostTile from "../components/PostTile.vue";
import Comment from "../components/Comment.vue";
import Loading from "../components/Loading.vue";

import { computed, ref, defineEmits } from "vue";
import { commentsRef, postsRef, Comment as CommentType, subviewsRef } from "../firebase";
import { useRoute } from "vue-router";
import {
  doc,
  query,
  setDoc,
  where,
  Timestamp,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { useCollection, useCurrentUser, useDocument } from "vuefire";

import { getElapsedDescription, timestampToDate } from "../helpers/datetime";
import { userData } from "../stores/userData";
import { Modal } from "bootstrap";
import { router } from "../routes";
import { getUserVote, setUserVote } from "../helpers/user";
import { CommentProps } from "../components/Comment.vue";

const route = useRoute();

const postLoading = ref<boolean>(true);
const commentsLoading = ref<boolean>(true);

const user = useCurrentUser();

const commentFormTitle = ref<string>("Write a comment");
const commentModal = computed(() => user.value ? new Modal("#commentModal") : null);

const editPostModal = computed(() => user.value ? new Modal("#postEditModal") : null);

const postTitleEdit = ref<string>()
const postTitleEditError = ref<string>()
const postContentEdit = ref<string>()
const postContentEditError = ref<string>()

const postId = computed(() =>
  route.params.post && typeof route.params.post === "string" ? route.params.post : null
);

const { data: post, promise } = useDocument(
  postId.value ? doc(postsRef, postId.value) : null
);

promise.value.then(() => 
{
  postLoading.value = false
  postTitleEdit.value = post.value.title
  postContentEdit.value = post.value.content
});

const { data: comments, promise: commentPromise } = useCollection(
  postId.value ? query(commentsRef, where("post", "==", postId.value)) : null
);

commentPromise.value.then(() => (commentsLoading.value = false));

// transform array of comments into tree of comments
const nestedComments = computed(() =>
  comments.value ? getComments(comments.value) : null
);

const getComments = (array: Partial<CommentType>[], parent?: string): CommentProps[] => {
  const parents: CommentProps[] = array
    .filter((t) => (parent ? t.parent === parent : !t.parent))
    .map((c) => ({
      id: c.id,
      author: c.author,
      isPoster: c.author === post.value?.author,
      date: timestampToDate(c.created) || new Date(),
      body: c.content,
      score: c.score || 0,
      vote:
        user && userData.id ? getUserVote(c.up || [], c.down || [], userData.id) : null,
      comments: getComments(array, c.id),
    }));

  parents.sort((a, b) => (a.date > b.date ? -1 : 1))
  return parents
};

const editPost = async () => {
  if (!postId.value) return

  if (!postTitleEdit.value || postTitleEdit.value.trim().length === 0) {
      postTitleEditError.value = 'Post name required.'
      return
  }

  try {
    await updateDoc(doc(postsRef, postId.value), {
      title: postTitleEdit.value,
      content: postContentEdit.value
    })

    editPostModal.value?.hide()
  }
  catch (e) {
    console.error(e)
    postTitleEditError.value = 'Something went wrong. Please try again later.'
  }
}

const parentCommentId = ref<string | null>(null)
const commentId = ref<string | null>(null)
const commentBody = ref<string>()
const commentBodyError = ref<string>()

const openCommentForm = (parentId: string | null, id?: string, body?: string) => {
  parentCommentId.value = parentId
  commentId.value = id ? id : null

  if (body) {
    commentFormTitle.value = 'Edit comment'
    commentBody.value = body
  }
  else {
    commentFormTitle.value = 'Write a comment'
    commentBody.value = ''
  }

  commentModal.value?.show()
};

const createComment = async () => {
  if (!user.value || !userData.id || !postId.value) return;

  if (!commentBody.value || commentBody.value.trim().length === 0) {
    commentBodyError.value = "Comment required.";
    return;
  }

  try {
    if (commentId.value) {
      await updateDoc(doc(commentsRef, commentId.value), {
        content: commentBody.value
      })
    }
    else {
      await setDoc(doc(commentsRef), {
        author: userData.id,
        uid: userData.uid,
        created: Timestamp.fromDate(new Date()),
        post: postId.value,
        content: commentBody.value,
        parent: parentCommentId.value,
      })
    }

    commentModal.value?.hide();
    //router.push({path: `/v/${postName.value}`})
  } catch (e) {
    commentBodyError.value = "Something went wrong. Please try again later.";
    console.error(e);
  } finally {
    commentBody.value = "";
    commentBodyError.value = "";
  }
};



const deletePost = async () => {
  if (!post.value) return;

  try {
    await deleteDoc(doc(postsRef, post.value.id));
    // delete comments?
  } catch (e) {
    console.error(e);
  }
};

const deleteComment = async (id: string) => {
  try {
    await deleteDoc(doc(commentsRef, id));
  } catch (e) {
    console.error(e);
  }
};
</script>
