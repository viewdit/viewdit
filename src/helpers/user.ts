const adjectives = ['Funny', 'Mysterious', 'Annoying', 'Witful', 'Big', 'Crazy', 'Scary', 'Small', 'Lazy']
const nouns = ['Bread', 'Town', 'House', 'Sandwich', 'Gamer']

const randChoose = <T>(choices: T[]) => choices[Math.round(Math.random() * (choices.length - 1))]!

export const generateUsername = () => randChoose(adjectives) + randChoose(nouns) + Math.round(Math.random() * 10000)

export const getUserVote = (ups: string[], downs: string[], username: string) => {
    if (ups.indexOf(username) > -1) return true;
    if (downs.indexOf(username) > -1) return false;
    return null;
}

export const setUserVote = (upvote: boolean, ups: string[], downs: string[], score: number, username: string) => {
    const existingVote = getUserVote(ups, downs, username)

    if (existingVote !== null) {  // revert any existing vote
        const userList = existingVote ? ups : downs

        userList.splice(userList.indexOf(username), 1)
        score += existingVote ? -1 : 1
    }

    if (upvote && upvote !== existingVote) {  // upvote if not toggling existing upvote
        ups.push(username)
        score += 1
    }
    else if (!upvote && upvote !== existingVote) {  // downvote if not toggling existing downvote
        downs.push(username)
        score -= 1
    }

    return {
        score: score,
        ups: ups,
        downs: downs
    }
}