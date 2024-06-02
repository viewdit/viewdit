import { collection, query, orderBy, or, startAfter, limit, getDocs, where, QueryConstraint, DocumentSnapshot } from "firebase/firestore"
import { SortOptions, FilterOptions } from "../components/PostSearch.vue"
import { postsRef } from "../firebase"

const getPrefixSearch = (field: string, term: string) => {
    // this is a bit of a workaround, since Firebase does not offer substring search
    // https://stackoverflow.com/questions/46568142/google-firestore-query-on-substring-of-a-property-value-text-search/52715590
    return [
        where(field, '>=', term),
        where(field, '<=', term + '\uf8ff')
    ]
}

export const getPostQueryConstraints = (term: string, sort: SortOptions, filter: FilterOptions, subview: string | null) => {
    const constraints: QueryConstraint[] = []

    if (term) {
        if (filter === 'Post title only')
            constraints.push(...getPrefixSearch('title', term))
        if (filter === 'Post body only') {
            constraints.push(...getPrefixSearch('content', term))
        }
    }

    if (subview)
        constraints.push(where('subview', '==', subview))

    switch (sort) {
        case 'New':
            constraints.push(orderBy('created', 'desc'))
            break
        case 'Top':
            constraints.push(orderBy('score', 'desc'))
            break
        case 'Bottom':
            constraints.push(orderBy('score', 'asc'))
            break
    }

    return constraints
}

const batch = 5;

export const getNumPages = <T>(items: T[]) => {
    if (items.length === 0) return 0

    return Math.ceil(items.length / batch)
}

export const getPage = <T>(items: T[], page: number) => {
    if (page < 1 || batch < 1 || !items.length) return [];

    const start = batch * (page - 1)
    return items.slice(start, start + batch)
}