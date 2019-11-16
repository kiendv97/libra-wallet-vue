<template>
  <div class="login">
  <div class="login-triangle"></div>
  
  <h2 class="login-header">Sing up</h2>

  <form class="login-container">
    <p><input type="password" placeholder="Password" v-model="password"></p>
    
    <a :href="encodeURI('data:application/json;charset=utf-8,' + JSON.stringify(message))" download="key_store.json"><h3>{{message}}</h3></a>
    <p><input type="button" @click="submit()" value="Sign Up"></p>
  </form>
</div>
</template>
<script>
import Authenticated from '@/service/authenticated'
export default {
    data() {
        return {
            password: '',
            message: '',
            data: {},
            authen: new Authenticated()
        }
    },
    methods: {
        async submit() {
          const {data} = await this.authen.signUp(this.password)
          console.log(data);
          this.message = data.data
          
        }
    }
    
} 
</script>