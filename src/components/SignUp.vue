<template>
  <div class="login">
  <div class="login-triangle"></div>
  
  <h2 class="login-header">Log in</h2>

  <form class="login-container">
    <p><input type="password" placeholder="Password" v-model="password"></p>
    <p><input @click="submit" value="Sign Up"></p>
  </form>
</div>
</template>
<script>
    
export default {
    data() {
        return {
            password: ''
        }
    },
    methods: {
        submit() {
        
        }
    }
    
} 
</script>