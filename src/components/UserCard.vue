<template>
  <div class="user-card">
    <router-link :to="`user/${user.login.uuid}`">
        <div>
          <img :src="user.picture.large" alt="">
          <h3>{{getFullName(user)}}</h3>
          <p>Age:{{user.dob.age}}</p>
        </div>
    </router-link>
  </div>
</template>
<script>
  export default {
    props: ["user"],
    methods: {
      getFullName: function(user){
        return user.name.first + " " + user.name.last;
      }
    }
  }
</script>
<style scoped>
.user-card{
  text-align:center;
  width: 25%;
  margin:2.0rem 0;
}
</style>
