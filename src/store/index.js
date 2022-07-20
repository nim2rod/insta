import { createStore } from 'vuex'
import { storyService } from '../services/story.service.js'

const store = createStore({
    strict: true,
    state: {
        stories: null,
        filterBy: null,
    },
    getters: {
        storiesToDisplay(state) {
            return state.stories
        }
    },
    mutations: {
        setStories(state, { stories }) {
            state.stories = stories
        }

    },
    actions: {
        loadStories({ commit }) {
            console.log('index front - action load stories');
            storyService
                .query()
                .then((stories) => {
                    console.log('load story -then');
                    commit({ type: 'setStories', stories })
                    return stories
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