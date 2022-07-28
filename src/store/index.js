import { createStore } from 'vuex'
import { storyService } from '../services/story.service.js'

const store = createStore({
    strict: true,
    state: {
        stories: null,
        filterBy: null,
        suggestions: null,
        users: null,
    },
    getters: {
        storiesToDisplay(state) {
            return state.stories
        },
        suggestionsToDisplay(state) {
            return state.suggestions
        }
    },
    mutations: {
        setStories(state, { stories }) {
            state.stories = stories
        },
        setSuggettions(state, { suggestions }) {
            state.suggestions = suggestions
        },
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
        }
    },
    actions: {
        loadStories({ commit }) {
            storyService
                .query()
                .then((stories) => {
                    commit({ type: 'setStories', stories })
                    return stories
                })
                .catch((err) => {
                    console.log('index- catch');
                    console.log(err)
                })
        },
        loadSuggest4u({ commit }) {
            storyService.querySuggestions().then((suggestions) => {
                commit({ type: 'setSuggettions', suggestions })
                return suggestions
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
        // addComment: ({ commit }, { editedStory, newComment }) => commit('addComment', editedStory, newComment),

        addComment({ commit }, { editedStory, newComment }) {
            const user = storyService.getUser()
            newComment.by = { ...user }
            editedStory.comments.push(newComment)
            return storyService.save(editedStory)
                .then((savedStory) => {
                    commit({ type: 'updateStory', editedStory: savedStory })
                    return savedStory
                })
                .catch((err) => {
                    console.log(err)
                })

        },
        addNewStory({ commit }, { newStory }) {
            console.log('addNewStory - action', newStory);
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
            console.log('storyId - action', storyId);
            const saved = editedUser.savedStoryIds.find((id) => id === storyId)

            if (!saved) {
                console.log('PUSHHHH');
                editedUser.savedStoryIds.push(storyId)
                console.log('editedUser Saved', editedUser);
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
        }
    },
    modules: {},

})

export default store