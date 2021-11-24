<template>
  <div>
    <Header />
    <div class="user-detail">
      <div class="user-detail__inner">
        <div class="user-img__wrapper">
          <img src="" alt="">
          <button>Message</button>
        </div>
        <table class="user-info">
          <tbody>
            <tr>
              <td>Name</td>
              <td></td>
            </tr>
            <tr>
              <td>gender</td>
              <td></td>
            </tr>
            <tr>
              <td>age</td>
              <td></td>
            </tr>
            <tr>
              <td>country</td>
              <td></td>
            </tr>
            <tr>
              <td>state</td>
              <td></td>
            </tr>
            <tr>
              <td>city</td>
              <td></td>
            </tr>
            <tr>
              <td>email</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
import Header from '../components/Header.vue';
export default {
  components:{
    Header
  },
  data(){
    return {
      currentUser : ''
    }
  },
  methods: {
    ...mapGetters(['getUserById']),
  },
  created: function(){
    this.getUserById(this.$route.params.id);
  }
}
</script>
<style scoped>

</style>
