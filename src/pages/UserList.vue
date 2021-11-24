<template>
  <div class="user-list">
    <UserCard v-for="(user,index) in getUsers" :key="index" :user="user"/>
  </div>
</template>
<script>
import UserCard from '../components/UserCard.vue';
import {mapActions} from 'vuex';
export default {
  components : {
    UserCard
  },
  methods : {
    ...mapActions(['fetchUsers']),
  },
  computed : {
    getUsers: function(){
      return this.$store.state.users.users;
    }
  },
  created : function() {
    this.fetchUsers();
  }
}
</script>
<style scoped>
.user-list{
  display: flex;
  flex-wrap: wrap;
}
</style>
