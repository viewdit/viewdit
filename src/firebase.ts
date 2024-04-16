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

const googleAuthProvider = new GoogleAuthProvider()

export const db = getFirestore(firebaseApp)

export const googleSignIn = (auth: Auth, onError?: (reason: string) => void) => {
    signInWithPopup(auth, googleAuthProvider)
        .catch(reason => !onError || onError(reason))
}

export const googleSignOut = (auth: Auth) => {
    signOut(auth)
}

export const converter = <T extends Document>() => ({
    toFirestore: (data: PartialWithFieldValue<Omit<T, 'id'>>) => data,
    fromFirestore: (snap: QueryDocumentSnapshot) => ({ id: snap.id, ...snap.data() } as T)
})

// collection exports

interface Document {
    id: string
}

export interface User extends Document {
    uid: string,
    about: string
}

interface SiteContent extends Document {
    author: string,
    created: Timestamp,
    content?: string
}

export interface Subview extends Document, SiteContent {
    
}

export interface Post extends Document, SiteContent {
    subview: string,
    title: string,
    score: number
}

export interface Comment extends Document, SiteContent {
    post: string,
    parent?: string,
    score: number
}

export const usersRef = collection(db, 'users').withConverter(converter<User>())

export const subviewsRef = collection(db, 'subviews').withConverter(converter<Subview>())

export const postsRef = collection(db, 'posts').withConverter(converter<Post>())

export const commentsRef = collection(db, 'comments').withConverter(converter<Comment>())