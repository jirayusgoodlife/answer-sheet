import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const mergeByProperty = (target, source, prop) => {
    source.forEach(sourceElement => {
        let targetElement = target.find(targetElement => {
            return sourceElement[prop] === targetElement[prop];
        })
        targetElement ? Object.assign(targetElement, sourceElement) : target.push(sourceElement);
    })
}

export default new Vuex.Store({
    state: {
        is_show_back: false,
        back_url: '',
        title: '',

        you_choice: [],
        you_start_time: new Date()
    },
    getters: {
        getYouChoice(state) {
            return (start = 1, end = 200) => {
                return state.you_choice.filter((item) => {
                    return item.num >= start && item.num <= end
                }).sort((a, b) => {
                    if (a.num < b.num) {
                        return -1;
                    }
                    if (a.num > b.num) {
                        return 1;
                    }
                    return 0;
                })
            }
        },
        getYouChoicePick(state) {
            return (num) => {
                return state.you_choice.filter((item) => {
                    return item.num === num
                })[0].pick
            }
        }
    },
    mutations: {
        SET_YOU_CHOICE(state, payload) {
            state.you_choice = payload
        },
        SET_YOU_CHOICE_NUMBER_PICK(state, payload) {
            mergeByProperty(state.you_choice, [{num: payload.num, pick: payload.pick}], 'num');
        }
    },
    actions: {
        setDefaultYouChoice(context) {
            var default_data = []
            for (let i = 1; i <= 200; i++) {
                default_data.push({num: i, pick: ''})
            }
            context.commit('SET_YOU_CHOICE', default_data);
        },
        pickYouChoice(context, payload) {
            context.commit('SET_YOU_CHOICE_NUMBER_PICK', payload)
        }
    }
})
