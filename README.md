![Vuedit website logo](/src/assets/logo.svg)

# Vuedit 

**URL: https://vuedit.github.io/**

## Contents

- [Vuedit](#vuedit)
  - [Contents](#contents)
  - [Installation](#installation)
  - [Overview](#overview)
  - [Functionality and features](#functionality-and-features)
    - [Navigation](#navigation)
    - [Login/registration](#loginregistration)
    - [Subviews](#subviews)
    - [Posts](#posts)
    - [Comments](#comments)
    - [Voting](#voting)
    - [Dark/light theme](#darklight-theme)
    - [User profiles](#user-profiles)
  - [Innovative features](#innovative-features)
    - [Markdown content](#markdown-content)
    - [Endless comment chains](#endless-comment-chains)
    - [](#)
  - [Challenges](#challenges)
    - [Firebase searching](#firebase-searching)
  - [References](#references)


## Installation

1. Make a .env file corresponding to `.env.example` (You will need a provisioned Firebase Firestore database)
2. Run the following:

```
npm install
npm start
```
3. You will need to build many Firestore indexes for searches

## Overview

This project is basically a clone of [reddit.com](https://www.reddit.com/), offering a subset of core features available, such as making communities, posting, commenting, voting, etc.

The app is implemented in Vue (in case you couldn't guess) TypeScript, and utilises Firebase's client-side SDK to store data remotely, allowing for a static site.

## Functionality and features

### Navigation

- All users can:
  - Browse posts on the homepage
  - Go to a subview and browse the posts scoped to that subview
  - Go to a user profile
  - Go to a post and browse comments
  - Search for posts starting with a phrase, on the home page and within a given subview (which is scoped to the subview posts)
    - Sort by New, (default) Top, or Bottom
    - Search by post title, or post body

### Login/registration

- Users can sign up/log in using their Google account

### Subviews

- All users can navigate to subviews and view posts and their comments

- Authenticated users can:
  - Create subviews from the home page (which are communities intended for specific types of posts)
  - Subscribe/unsubscribe to communities (Join/leave button)

### Posts

- All users can view posts and any post comments from the home page or a subview page

- Authenticated users can:
  - Create posts under subviews
  - Edit their posts
  - Delete their posts

### Comments

- All users can view comments on post pages

- Authenticated users can:
  - Comment on posts
  - Edit their comments
  - Delete their comments
  - Reply to other comments (to any depth)

### Voting

- All users can view the score of a post/comment
- Authenticated users can upvote/downvote a post/comment
  - Click on the arrow toggles the vote
  - Clicking on the opposite arrow will also revoke the previous vote (if there was one)

### Dark/light theme

- All users can toggle between a light and dark theme, which utilises Bootstrap's built-in dark theme classes.
- The theme preference persists between browser refreshes and sessions, as the preference is stored in a cookie.
- Defaults to the browser's dark theme preference
  
### User profiles

- All users can view user pages, which just lists the username

## Innovative features

### Markdown content

All content in user posts will be interpreted as markdown, allowing users to embed online imagery, tables, custom links, etc. in their posts. This was accomplished by using marked.js to convert markdown into HTML. Care was taken to prevent XSS attacks by sanitising the resulting HTML using DomPurify before rendering it.

If the user opts to just use plain text in the post, there is no difference in appearance.

### Endless comment chains

Users can endlessly reply to comments, similarly to Reddit.

This was achieved using a recursive component, `Comment`, which will render any child comments specified in props as their own `Comment` component. The reply, edit, and delete comment events are manually bubbled up to the `Post` component, which handles them appropriately.

### 

## Challenges

### Firebase searching

Firebase does not offer a way to search for substrings within fields, which is an intentional decision to ensure query performance.

Thus, the workaround was for searching to be only functional for the starting phrase (case-sensitive), achieved by using two query conditions, `>= "[term]"` and `<= "[term] + \uf8ff"`. `\uf8ff` is a very high Unicode code point, thus this ensures that it will only match on strings that start with `[term]`.

## References

- https://stackoverflow.com/questions/46568142/google-firestore-query-on-substring-of-a-property-value-text-search/52715590
- 

