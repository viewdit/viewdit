const adjectives = ['Funny', 'Mysterious', 'Annoying', 'Witful', 'Big', 'Crazy', 'Scary', 'Small']
const nouns = ['Bread', 'Town', 'House', 'Sandwich', 'Gamer']

const randChoose = <T>(choices: T[]) => choices[Math.round(Math.random() * (choices.length - 1))]!

export const generateUsername = () => randChoose(adjectives) + randChoose(nouns) +  Math.round(Math.random() * 10000)