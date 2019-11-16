const axios = require('axios');
const apiLocal = 'http://localhost:3000';

class Authenticated {
    constructor() {

    }
    async signUp(password) {
        try {
            const response = await axios.request({
                url: `${apiLocal}/auth/signup`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    password: password
                }
            })
            return response
            
        } catch (error) {
            alert('error signup url', error)
        }

    }
    async signIn(password,token) {
        try {
            const response = await axios.request({
                url: `${apiLocal}/auth/signin`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    password: password,
                    token: token
                }
            })
            return response
            
        } catch (error) {
            alert('error singin url', error)
        }
    }
}
export default Authenticated