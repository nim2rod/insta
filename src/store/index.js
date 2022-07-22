import { createStore } from 'vuex'
import { storyService } from '../services/story.service.js'

const store = createStore({
    strict: true,
    state: {
        stories: null,
        filterBy: null,
        suggestions: null,
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
        }
    },
    modules: {
    },
})

export default store