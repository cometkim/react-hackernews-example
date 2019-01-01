const API_ENDPOINT = 'https://hacker-news.firebaseio.com/v0/'

export async function fetchTopStories() {
    const response = await fetch(`${API_ENDPOINT}/topstories.json`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await response.json()
    return data
}

export async function fetchStory(id) {
    const response = await fetch(`${API_ENDPOINT}/item/${id}.json`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await response.json()
    return data
}
