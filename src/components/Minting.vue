<template>
  <div class="Wallet">
    <VueElementLoading
      :active="isTransfering"
      spinner="bar-fade-scale"
      color="#9b67df"
      :text="$t('mint')"
      is-full-screen
    />
    <section class="wallet-container hero is-medium is-primary is-bold">
      <div class="wallet-body">
        <div class="input-box">
          <b-field :label="$t('amount')">
            <b-input
              v-model="amount"
              step="0.000001"
              :placeholder="$t('amount')"
              type="number"
            />
          </b-field>
        </div>
        <div class="button-box">
          <b-button type="is-success" @click="minting">{{ $t('confirm') }}</b-button>
          <b-button @click="back">{{ $t('cancel') }}</b-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import VueElementLoading from 'vue-element-loading'
import LibraService from '@/service/libra_service'
export default {
  name: "Minting",
  data() {
    return {
      address: "",
      amount: "10",
      isTransfering: false,
      libra: new LibraService()
    };
  },
  components: {
    VueElementLoading
  },
  created() {},
  computed: {
    ...mapState({
      userAddress: state => state.userAddress
    })
  },
  methods: {
    ...mapActions({
      updateUserAddress: "updateUserAddress"
    }),
    back() {
      this.$router.push({ name: "Wallet" });
    },
    async minting () {
        this.isTransfering = true;
        const {status, error} = await this.libra.mint(this.userAddress, this.amount)
        if(status) {
            this.isTransfering = false;
            this. $router.push('/')
        } else {
            alert(error)
        }
    }
  }
};
</script>

<style lang="scss">
.input-box {
  text-align: left;
  margin-bottom: 20px;
  .field {
    label {
      color: #fff;
    }
  }
}
</style>

<style>
.input[disabled] {
  color: #1f1f1f !important;
  background-color: white !important;
  opacity: 0.9;
}
</style>

<style lang="scss" scoped>
.wallet-container {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  min-height: calc(100vh - 170px);
  width: 100%;
  margin: 0 auto;
}
.wallet-body {
  padding: 20px;
}
.button-box {
  margin-top: 55px;
  button {
    width: 100%;
    height: 60px;
    margin-bottom: 20px;
  }
}
/* on desktop */
@media only screen and (min-width: 1025px) {
  .wallet-container {
    margin: 10px auto;
    width: 70%;
    border-radius: 3px;
  }
  .wallet-body {
    padding: 50px;
  }
  .button-box {
    button {
      width: 40%;
      height: 60px;
      max-width: 300px;
    }
    button:first-child {
      margin-right: 15px;
    }
    button:last-child {
      margin-left: 15px;
    }
  }
}
</style>
