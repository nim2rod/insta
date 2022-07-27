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
            const idx = state.stories.findIndex((t) => t._id === editedStory._id)
            state.stories.splice(idx, 1, editedStory)
        },
        addStory(state, { newStory }) {
            console.log('mutate- newStory', newStory);
            state.stories.unshift(newStory)
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

            const liked = editedStory.likedBy.some((e) => e._id === user._id) ? true : false

            if (!liked) {

                editedStory.likedBy.push(user)
            } else {

                const idx = editedStory.likedBy.findIndex(x => x._id === user._id)

                editedStory.likedBy.splice(idx, 1)
            }
            return storyService.save(editedStory)
                .then((savedStory) => {

                    commit({ type: 'updateStory', editedStory: savedStory })
                    return savedStory
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    },
    modules: {},

})

export default store