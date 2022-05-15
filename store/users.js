export const state = () => ({
  users: [],
});

export const mutations = {
  setUsers(state, users) {
    state.users = users;
  },
  addPhoto(state, url) {
    state.users.push(url)
  }
};

export const actions = {
  async fetch({ commit }) {
    const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users');
    commit('setUsers', users);
  },
  addPhoto(context, url) {
    context.commit(url)
  }
};

export const getters = {
  users: (s) => s.users,
};