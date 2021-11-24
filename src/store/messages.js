

const state = {
  // - state.messages
  // ユーザーID ごとのメッセージを保持します。
  // 今回は id からユーザーごとのメッセージを取得できるように、Object 型として key に id, value にメッセージ一覧を Array.<Object> で保持します。
  messages: []
};
const mutations = {
// - setMessages (state, payload)
// state.messages に指定 id の messages の配列を push します。payload.id にユーザーID、payload.messages に追加するメッセージの配列を保持しておきます。
  setMessages(state,payload){
    state.messages.push({
      id: payload.id,
      value: payload.msgs
    });
  }
};
const actions = {

};
const getters = {
  // - getMessagesById (id)
  // id を引数として state.messages の中から id に一致するメッセージ一覧を取得します。
  getMessagesById(id){
    let results = state.messages.filter(message => message.id === id);
    return results;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
