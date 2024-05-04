// Base Url
const URL = import.meta.env.VITE_BASE_URL
console.log(URL)

export const concertLoader = async () => {
    const response = await fetch(`${URL}concerts`)
    const allConcerts = await response.json()
    return allConcerts
}

// Show Loader
export const showLoader = async ({ params }) => {
    const response = await fetch(`${URL}concerts/${params.id}`)
    const aConcert = await response.json()
    return aConcert
}