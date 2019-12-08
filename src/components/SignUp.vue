<template>
  <div class="login">
    <div class="login-triangle"></div>

    <form class="login-container">
      <b-input v-model="password" placeholder="Password" />
      <b-button v-if="!message" icon-left="login" @click="submit()">{{ $t('signup') }}</b-button>
      <a
        v-else
        :href="encodeURI('data:application/json;charset=utf-8,' + JSON.stringify(message))"
        download="key_store.json"
      >
        <b-button icon-left="download">{{ $t('download') }}</b-button>
      </a>
    </form>
    <a href="/#/auth/signin"><i>{{$t('directLogin')}}</i></a>
  </div>
</template>
<script>
import Authenticated from "@/service/authenticated";
export default {
  data() {
    return {
      password: "",
      message: "",
      data: {},
      authen: new Authenticated()
    };
  },
  methods: {
    convertInfoToDownloadText(object) {
      return `[Thông tin đăng nhập]:      Token wallet: ${object.token}      Địa chỉ ví: ${object.info.address}       Mật khẩu chuyển tiền (mk2): ${object.info.mnemonic}      Password: ${object.info.password} `
    },
    async submit() {
      try {
        const { data } = await this.authen.signUp(this.password);
        this.message = this.convertInfoToDownloadText(data.data)
        alert("Success, download file to login");
      } catch (error) {
        alert(`Error, ${error}`);
      }
    }
  }
};
</script>
<style scoped>
.control.is-clearfix {
  width: 40%;
  margin: auto;
  margin-bottom: 50px;
}
</style>