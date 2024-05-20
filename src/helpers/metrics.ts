export const getNumberSummary = (number: number) => {
    if (isNaN(number) || !isFinite(number))
        return '0'

    number = Math.floor(number);

    if (Math.abs(number) < 1000)
        return number.toString()

    if (Math.abs(number) < 1_000_000)
        return +(number / 1000).toFixed(Math.abs(number) > 10_000 ? 0 : 1) + 'K'

    return +(number / 1_000_000).toFixed(Math.abs(number) > 10_000_000 ? 0 : 1) + 'M'  // just in case this happens somehow
}

export const formatUnit = (quantity: number, unit: string) => `${quantity} ${unit}${quantity === 1 ? '' : 's'}`