import Home from './pages/UserList.vue';
import UserDetail from './pages/UserDetail.vue';
import Chat from './pages/Chat.vue';
import MessageList from './pages/MessageList.vue';
export const routes = [
  {path:'/',component: Home},
  {path:'/user/:id',component: UserDetail},
  {path:'/user/:id/chat',component:Chat},
  {path:'/message-list',component:MessageList}
]
