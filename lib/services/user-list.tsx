
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export async function GetUserList() {
    const baseURL = publicRuntimeConfig.baseURL

    const res = await fetch(`${baseURL}/user `, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'app-id': '6189ca1f1622ebc2c184efa1'

        }
    }).then(response => response.json())
    return res
}