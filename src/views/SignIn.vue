<template>
  <div class="home">
    <SignIn/>
  </div>
</template>

<script>
// @ is an alias to /src
import SignIn from '@/components/SignIn'

export default {
  name: 'home',
  components: {
    SignIn
  }
}
</script>
