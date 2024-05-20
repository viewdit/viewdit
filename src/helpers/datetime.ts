import { Timestamp } from "firebase/firestore";
import { formatUnit } from './metrics'

const SECOND_MS = 1000

export const getCurrentYear = () => new Date().getFullYear();

export const nowUTC = () => new Date().toISOString();

export const utcMilliseconds = (dateTime: Date) => Date.UTC(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDate())

export const getElapsedDescription = (utcDateTime: Date) => {
    const now = new Date()
    const diffMs = now - utcDateTime

    if (diffMs < SECOND_MS)
        return 'Just now'

    if (diffMs < 60 * SECOND_MS)
        return formatUnit(Math.floor(diffMs / SECOND_MS), 'second') + ' ago'

    if (diffMs < 60 * 60 * SECOND_MS)
        return formatUnit(Math.floor(diffMs / (60 * SECOND_MS)), 'minute') + ' ago'

    if (diffMs < 24 * 60 * 60 * SECOND_MS)
        return formatUnit(Math.floor(diffMs / (60 * 60 * SECOND_MS)), 'hour') + ' ago'

    if (diffMs < 30 * 24 * 60 * 60 * SECOND_MS)
        return formatUnit(Math.floor(diffMs / (24 * 60 * 60 * SECOND_MS)), 'day') + ' ago'

    if (diffMs < 365 * 30 * 24 * 60 * 60 * SECOND_MS)
        return formatUnit(Math.floor(diffMs / (30 * 24 * 60 * 60 * SECOND_MS)), 'month') + ' ago'

    return formatUnit(Math.floor(diffMs / (365 * 30 * 24 * 60 * 60 * SECOND_MS)), 'year') + ' ago'
}

export const dateToTimestamp = (date: Date | null | undefined) => date ? Timestamp.fromDate(date) : null

export const timestampToDate = (timestamp: Timestamp | null | undefined) => timestamp ? new Date(timestamp.seconds * 1000) : null