<template>
  <div class="login">
    <div class="login-triangle"></div>

    <form class="login-container">
      <b-input v-model="password" placeholder="Password" />
      <b-input v-model="token_wallet" placeholder="Token Wallet" />
      <b-button icon-left="login" @click="submit()">{{$t('signin')}}</b-button>
    </form>
    <a href="/#/auth/signup"><i>{{$t('directRegister')}}</i></a>
  </div>
</template>
<script>
import Authenticated from "@/service/authenticated";
export default {
  data() {
    return {
      password: "",
      token_wallet: "",
      authen: new Authenticated()
    };
  },
  methods: {
    async submit() {
      const { data } = await this.authen.signIn(
        this.password,
        this.token_wallet
      );
      localStorage.setItem("token_wallet", this.token_wallet);
      localStorage.setItem("userAddress", data.data.address);
      console.log("Login", data);
      this.$router.replace({ name: "Wallet" });
    }
  }
};
</script>
<style scoped>
.control.is-clearfix {
    width: 30%;
    margin: auto;
    margin-bottom: 20px;
}

</style>