import { httpService } from './http.service.js'
import { storyService } from './story.service.js'

const ENDPOINT = 'auth'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
    login,
    signup,
    logout,
    getLoggedInUser,
}

async function login(cred) {
    const user = await httpService.post(ENDPOINT + '/login', cred)
    console.log('user: userService0login:', user);
    if (user) {
        // socketService.login(user._id)
        return saveLocalUser(user)
    }
    return user
}
async function signup(cred) {
    return await httpService.post(ENDPOINT + '/signup', cred)
}
async function logout() {
    return await httpService.post(ENDPOINT + '/logout')
}


function saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedInUser() {
    const defultUser = storyService.getUser()
    const user = JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER)) || defultUser
    console.log("service", user);
    return user
}