import { httpService } from './http.service.js'

const ENDPOINT = 'auth'

async function login(cred) {
    return await httpService.post(ENDPOINT + '/login', cred)
}
async function signup(cred) {
    return await httpService.post(ENDPOINT + '/signup', cred)
}
async function logout() {
    return await httpService.post(ENDPOINT + '/logout')
}

export const userService = {
    login,
    signup,
    logout,
}
