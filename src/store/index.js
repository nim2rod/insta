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
        addComment: ({ commit }, { editedStory, newComment }) => commit('addComment', editedStory, newComment),

        addComment({ commit }, { editedStory, newComment }) {
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
    },
    modules: {},

})

export default store