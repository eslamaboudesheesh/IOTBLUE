
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
interface MyFormValues {
    firstName: string;
    lastName: string,
    email: string,
}
export async function AddUserInfo(userData: MyFormValues, resultsCallback: any) {
    const baseURL = publicRuntimeConfig.baseURL
    const res = await fetch(`${baseURL}/user/create `, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'app-id': '6189ca1f1622ebc2c184efa1'

        },
        body: JSON.stringify({
            "email": userData.email,
            "firstName":  userData.firstName,
            "lastName":  userData.lastName    })
    }).then(response =>  response.json())
        .then(result => resultsCallback(result))
}