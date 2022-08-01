import { createStore } from 'vuex'
import { userService } from '../services/user.service.js'
import { storyService } from '../services/story.service.js'
import userStore from './modules/user.module.js'

const store = createStore({
    strict: true,
    modules: {
        userStore
    },
    state: {
        stories: null,
        filterBy: null,
        suggestions: null,
        users: null,
        loggedinUser: null
    },
    getters: {
        storiesToDisplay(state) {
            return state.stories
        },
        suggestionsToDisplay(state) {
            return state.suggestions
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
        // setSuggettions(state, { suggestions }) {
        //     state.suggestions = suggestions
        // },
        setUsers(state, { users }) {
            state.users = users
        },
        updateStory(state, { editedStory }) {
            const idx = state.stories.findIndex((s) => s._id === editedStory._id)
            state.stories.splice(idx, 1, editedStory)
        },
        addStory(state, { newStory }) {
            console.log('mutate- newStory', newStory);
            state.stories.unshift(newStory)
        },
        updateUser(state, { editedUser }) {
            const idx = state.users.findIndex((u) => u._id === editedUser._id)
            state.users.splice(idx, 1, editedUser)
        },
        setUser(state, { user }) {
            state.loggedinUser = user;
        }
    },
    actions: {
        loadStories({ commit }) {
            storyService
                .query()
                .then((stories) => {
                    console.log('store-action-loadStories', stories);
                    commit({ type: 'setStories', stories })
                    return stories
                })
                .catch((err) => {
                    console.log('index- catch');
                    console.log(err)
                })
        },
        loadUsers({ commit }) {
            storyService.queryUsers().then((users) => {
                commit({ type: 'setUsers', users })
                return users
            })
                .catch((err) => {
                    console.log('index- catch');
                    console.log(err)
                })
        },
        async addComment({ commit }, { editedStory, newComment }) {
            try {

                const user = storyService.getUser()
                newComment.by = { ...user }
                editedStory.comments.push(newComment)

                const story = await storyService.save(editedStory)

                console.log('index-store-then-savedStory', story);
                commit({ type: 'updateStory', editedStory: story })
                return story
            } catch (err) {
                console.log(err);
                throw err
            }


        },
        addNewStory({ commit }, { newStory }) {
            return storyService.save(newStory)
                .then((savedStory) => {
                    console.log('thennn- action');
                    commit({ type: 'addStory', newStory: savedStory })
                    return savedStory
                })
                .catch((err) => {
                    console.log(err, 'problem with addNewStory - action')
                })
        },
        addLike({ commit }, { editedStory }) {
            const user = storyService.getUser()

            const liked = editedStory.likedBy.find((e) => e._id === user._id)
            console.log('isLike ?? ', liked);
            if (!liked) {
                console.log('PUSHHHH');
                editedStory.likedBy.push(user)
                console.log('editedStory Like by', editedStory.likedBy);
            } else {
                console.log('SPLICE!!!!!');
                const idx = editedStory.likedBy.findIndex(x => x._id === user._id)
                editedStory.likedBy.splice(idx, 1)
                console.log('editedStory Like by', editedStory.likedBy);

            }
            return storyService.save(editedStory)
                .then((savedStory) => {

                    commit({ type: 'updateStory', editedStory: savedStory })
                    return savedStory
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        addStoryToSavedUser({ commit }, { storyId, editedUser }) {
            const saved = editedUser.savedStoryIds.find((id) => id === storyId)

            if (!saved) {
                console.log('PUSHHHH');
                editedUser.savedStoryIds.push(storyId)
                console.log('editedUser Saved before storage and backend', editedUser);
            } else {
                console.log('SPLICE!!!!!');
                const idx = editedUser.savedStoryIds.findIndex(id => id === storyId)
                editedUser.savedStoryIds.splice(idx, 1)
                console.log('editedUser Saved', editedUser);
            }
            return storyService.save(editedUser, 'user_db')
                .then((savedUser) => {
                    commit({ type: 'updateUser', editedUser: savedUser })
                    return savedUser
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        changeFollowStatus({ commit }, { storyBy, editedUser }) {
            console.log('storyBy/suggestBy', storyBy);
            console.log('editedUser', editedUser);
            const follow = editedUser.following.find((by) => by._id === storyBy._id)
            console.log('index-store-follow', follow);
            if (!follow) {
                console.log('PUSHHHH');
                editedUser.following.push(storyBy)
                console.log('editedUser Saved', editedUser);
            } else {
                console.log('SPLICE!!!!!');
                const idx = editedUser.following.findIndex(by => by._id === storyBy._id)
                editedUser.following.splice(idx, 1)
                console.log('editedUser Saved', editedUser);
            }
            return storyService.save(editedUser, 'user_db')
                .then((savedUser) => {
                    commit({ type: 'updateUser', editedUser: savedUser })
                    return savedUser
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        //log user
        async login({ commit }, { cred }) {
            try {
                console.log('login-user-module', cred);
                const user = await userService.login(cred);
                commit({ type: 'setUser', user });
            } catch (err) {
                console.log(err);
            }
        },

    },
    modules: {},

})

export default store