import axios from "axios";

const state = {
  // ユーザー一覧を保持します。
  // 今回は id からユーザーを取得できるように、Object 型として key に id, value にユーザー Object を格納するようにします。
  users : []
};
const mutations = {
  setUsers(state,users){
    state.users = users
  }
  // state.users に値をセットします。
};
const actions = {
  async fetchUsers ({commit}){
    await axios.get('/?results=50')
    .then(res => {
      let usersData = res.data.results;
      const usersArray = []
      for(const key in usersData){
        usersArray.push({...usersData[key]})
      }
      commit('setUsers',usersArray)
    })
    .catch(error => console.log(error));
  }
  // API にアクセスしてユーザー情報一覧を取得し、setUsers を commit します。
  // payload.searchParams からクエリパラメータの key と value を受け取れるようにします。
  // このアクションをユーザー一覧ページから dispatch します。
};
const getters = {
  getUserById(state,id){
    let result = state.users.find(user => (
      console.log(user),
      user.login.uuid === id
    ));
    return result;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
