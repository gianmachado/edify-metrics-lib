const BASE_URL = 'http://localhost:3000'

const getHealth = async () => {
    const resp = await fetch(`${BASE_URL}/health`)

    return await resp.json()
}


const sendAction = async (action) => {

    const resp = await fetch(`${BASE_URL}/sendAction`, {
        method: "POST",
        body: action,
        headers: {
            'Content-Type': 'application/json',
        }
    })

    return await resp.json()

}


export { getHealth, sendAction }