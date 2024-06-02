import { initializeApp } from 'firebase/app'
import { getFirestore, collection, doc, PartialWithFieldValue, QueryDocumentSnapshot, Timestamp } from 'firebase/firestore'
import { Auth, UserCredential, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'

export const firebaseApp = initializeApp({
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY!,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN!,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID!,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET!,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID!,
    appId: import.meta.env.VITE_FIREBASE_APP_ID!
})

export const googleAuthProvider = new GoogleAuthProvider()

export const db = getFirestore(firebaseApp)

export const googleSignIn = (auth: Auth, onError?: (reason: string) => void) => {
    signInWithPopup(auth, googleAuthProvider)
        .catch(reason => !onError || onError(reason))
}

export const googleSignOut = (auth: Auth) => {
    signOut(auth)
}

// this will convert firestore data to and from the defined interfaces
// it will add/remove the id of the document, allowing read acess to it
const converter = <T extends Document>() => ({
    toFirestore: (data: Partial<Omit<T, 'id'>>) => data,
    fromFirestore: (snap: QueryDocumentSnapshot) => ({ id: snap.id, ...snap.data() } as T)
})

interface Document {
    id: string
}

interface Content {
    author: string,
    uid: string,
    created: Timestamp,
    content?: string
}

interface Votable {
    score: number,
    up: string[],
    down: string[]
}

// collection exports

export interface User extends Document, Content {

}

export interface Subview extends Document, Content {
    members: number,
    subscriptions: string[]
}

export interface Post extends Document, Content, Votable {
    subview: string,
    title: string
}

export interface Comment extends Document, Content, Votable {
    post: string,
    parent?: string | null
}

export const usersRef = collection(db, 'users').withConverter(converter<User>())

export const subviewsRef = collection(db, 'subviews').withConverter(converter<Subview>())

export const postsRef = collection(db, 'posts').withConverter(converter<Post>())

export const commentsRef = collection(db, 'comments').withConverter(converter<Comment>())