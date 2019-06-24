import axios from 'axios';

const state = {
    todoItems : []
}
const getters = {
    getTodoItems(state) {
        return state.todoItems;
    }
}
const baseUrl = 'http://localhost:4500/api/todos';

const actions = {
    loadTodoItems(context) {
       axios
       .get(`${baseUrl}`)
       .then(r => r.data)
       .then(items => {
           context.commit('setTodoItems',items);
       }); 
    },
    removeTodoItems(context, payload) {
        axios.delete(`${baseUrl}/${payload.id}`)
        .then(r => r.data)
        .then(items => {
            context.commit('setTodoItems',items);
        })
    },
    addTodoItems(context, payload) {
        axios
        .post(`${baseUrl}`,payload)
        .then(r => r.data)
        .then(items => {
            context.commit('setTodoItems',items);
        })
    },
    removeAllTodoItems(context) {
        axios
        .delete(`${baseUrl}`)
        .then(r => r.data)
        .then(items => {
            context.commit('setTodoItems',items);
        }); 
     },
     toggleTodoItems(context, payload) {
        axios
         .put(`${baseUrl}/${payload.id}`,payload)
         .then(r => r.data)
         .then(items => {
             context.commit('setTodoItems',items)
         })
     }
}
const mutations = {
    setTodoItems(state, items) {
        state.todoItems = items;
    },
}
export default {
    state,
    getters,
    mutations,
    actions
}