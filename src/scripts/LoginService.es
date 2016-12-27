export default async function LoginService(loginId, password) {
    try {
        const response = await fetch(`/api/auth`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                name: loginId,
                address: password
            })
        });
        const json = await response.json();
        return json.AccessToken;
    } catch (e) {
        console.error(e);
    }
}
