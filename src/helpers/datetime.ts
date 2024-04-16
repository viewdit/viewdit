const SECOND = 1000

export const getCurrentYear = () => new Date().getFullYear();

export const nowUTC = () => new Date().toISOString();

export const utcMilliseconds = (dateTime: Date) => Date.UTC(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDate())

const formatUnit = (quantity: number, unit: string) => `${quantity} ${unit}${quantity === 1 ? '' : 's'} ago`

export const getElapsedDescription = (utcDateTime: Date) => {
    const now = new Date()
    const diffMs = now - utcDateTime

    if (diffMs < SECOND)
        return 'Just now'

    if (diffMs < 60 * SECOND)
        return formatUnit(Math.floor(diffMs / SECOND), 'second')

    if (diffMs < 60 * 60 * SECOND)
        return formatUnit(Math.floor(diffMs / (60 * SECOND)), 'minute')

    if (diffMs < 24 * 60 * 60 * SECOND)
        return formatUnit(Math.floor(diffMs / (60 * 60 * SECOND)), 'hour')

    if (diffMs < 30 * 24 * 60 * 60 * SECOND)
        return formatUnit(Math.floor(diffMs / (24 * 60 * 60 * SECOND)), 'day')

    if (diffMs < 365 * 30 * 24 * 60 * 60 * SECOND)
        return formatUnit(Math.floor(diffMs / (30 * 24 * 60 * 60 * SECOND)), 'month')

    return formatUnit(Math.floor(diffMs / (365 * 30 * 24 * 60 * 60 * SECOND)), 'year')
}