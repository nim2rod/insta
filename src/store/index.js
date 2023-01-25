import { createStore } from 'vuex'
import { userService } from '../services/user.service.js'
import { storyService } from '../services/story.service.js'
import userStore from './modules/user.module.js'
import { socketService } from '../services/socket.service.js'

const store = createStore({
    strict: true,
    modules: {
        userStore
    },
    state: {
        stories: null,
        filterBy: null,
        users: null,
        loggedinUser: null
    },
    getters: {
        storiesToDisplay(state) {
            return state.stories
        },
        usersToDisplay(state) {
            return state.users
        },
        getUser(state) {
            return state.loggedinUser;
        }
    },
    mutations: {
        setStories(state, { stories }) {
            console.log('mutations-setStories', stories);
            state.stories = stories
        },
        setUsers(state, { users }) {
            console.log('mutations-setUsers', users);
            state.users = users
        },
        updateStory(state, { editedStory }) {
            const idx = state.stories.findIndex((s) => s._id === editedStory._id)
            state.stories.splice(idx, 1, editedStory)
        },
        addStory(state, { newStory }) {
            state.stories.unshift(newStory)
        },
        updateUser(state, { editedUser }) {
            userService.saveLocalUser(editedUser)
            const idx = state.users.findIndex((u) => u._id === editedUser._id)
            state.users.splice(idx, 1, editedUser)
            state.loggedinUser = editedUser
        },
        setUser(state, { loggedinUser }) {
            state.loggedinUser = { ...loggedinUser }
        },
    },
    actions: {
        async loadStories({ commit }) {
            try {
                const stories = await storyService.query()
                commit({ type: 'setStories', stories })
                return stories
            } catch (err) {
                console.log(err)
                throw err
            }
        },
        async loadUsers({ commit }) {
            try {
                const users = await storyService.queryUsers()
                commit({ type: 'setUsers', users })
                return users
            } catch (err) {
                console.log(err)
                throw err
            }
        },
        async loadLoggedinUser({ commit }) {
            try {
                const loggedinUser = userService.getLoggedInUser()
                commit({ type: 'setUser', loggedinUser })
                return loggedinUser
            } catch (err) {
                console.log(err)
                throw err
            }
        },
        async addComment({ commit }, { editedStory, newComment }) {
            try {
                // const user = storyService.getUser()
                const user = { ...this.state.loggedinUser }
                const by = {}
                by.username = user.username
                by.profileImgUrl = user.profileImgUrl
                by._id = user._id
                newComment.by = by
                editedStory.comments.push(newComment)

                const story = await storyService.save(editedStory)

                socketService.emit('this-user-add-comment', story)

                commit({ type: 'updateStory', editedStory: story })
                return story
            } catch (err) {
                console.log(err);
                throw err
            }
        },
        async addNewStory({ commit }, { newStory }) {
            try {
                const savedStory = await storyService.save(newStory)
                commit({ type: 'addStory', newStory: savedStory })
                return savedStory
            } catch (err) {
                console.log(err)
                throw err
            }
        },
        async addLike({ commit }, { editedStory }) {
            // const user = storyService.getUser()
            const user = this.state.loggedinUser

            const liked = editedStory.likedBy.find((u) => u._id === user._id)
            if (!liked) {
                editedStory.likedBy.push(user)
            } else {
                const idx = editedStory.likedBy.findIndex(x => x._id === user._id)
                editedStory.likedBy.splice(idx, 1)
            }
            try {
                const savedStory = await storyService.save(editedStory)
                commit({ type: 'updateStory', editedStory: savedStory })
                return savedStory
            } catch (err) {
                console.log(err);
                throw err
            }
        },
        async addStoryToSavedUser({ commit }, { storyId, editedUser }) {
            const saved = editedUser.savedStoryIds.find((id) => id === storyId)
            if (!saved) {
                console.log('PUSH');
                editedUser.savedStoryIds.push(storyId)
            } else {
                console.log('SPLICE!');
                const idx = editedUser.savedStoryIds.findIndex(id => id === storyId)
                editedUser.savedStoryIds.splice(idx, 1)
            }

            try {
                const savedUser = await storyService.save(editedUser, 'user_db')
                commit({ type: 'updateUser', editedUser: savedUser })
                return savedUser
            } catch (err) {
                console.log(err)
                throw err
            }
        },
        async changeFollowStatus({ commit }, { storyBy, editedUser }) {
            const follow = editedUser.following.find((by) => by._id === storyBy._id)
            if (!follow) {
                editedUser.following.push(storyBy)
            } else {
                const idx = editedUser.following.findIndex(by => by._id === storyBy._id)
                editedUser.following.splice(idx, 1)
            }
            try {
                const savedUser = await storyService.save(editedUser, 'user_db')
                console.log('savedUser', savedUser);
                commit({ type: 'updateUser', editedUser: savedUser })
                return savedUser
            } catch (err) {
                console.log(err)
                throw err
            }
        },
        async login({ commit }, { cred }) {
            try {
                const user = await userService.login(cred);
                commit({ type: 'setUser', loggedinUser: user });
            } catch (err) {
                console.log(err);
            }
        },

    },
    modules: {},
})

export default store