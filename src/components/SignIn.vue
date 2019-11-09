<template>
  <div class="login">
  <div class="login-triangle"></div>
  
  <h2 class="login-header">Log in</h2>

  <form class="login-container">
    <p><input type="text" placeholder="Email"></p>
    <p><input type="password" placeholder="Password"></p>
    <button @click="submit()">Log in</button>
  </form>
</div>
</template>
<script>
    export default {
      data () {
        return {

        }
      },
      methods: {
        submit() {
          localStorage.setItem('token_wallet', 'test')
          localStorage.setItem('userAddress', 'userAddress')
          console.log('Login');
          this.$router.replace({name: 'Wallet'})
        }
      }
    }
</script>