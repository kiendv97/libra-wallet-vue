<template>
  <div class="login">
  <div class="login-triangle"></div>
  
  <h2 class="login-header">Log in</h2>

  <form class="login-container">
    <p><input type="password" v-model="password" placeholder="Password"></p>
    <p><input type="text" v-model="token_wallet" placeholder="Token"></p>

    <button @click="submit()">Log in</button>
  </form>
</div>
</template>
<script>
import Authenticated from '@/service/authenticated'
    export default {
      data () {
        return {
          password: '',
          token_wallet: '',
          authen: new Authenticated()
        }
      },
      methods: {
        async submit() {
          const {data} = await this.authen.signIn(this.password,this.token_wallet)
          localStorage.setItem('token_wallet', this.token_wallet)
          localStorage.setItem('userAddress', data.data.address)
          console.log('Login', data);
          this.$router.replace({name: 'Wallet'})
        }
      }
    }
</script>