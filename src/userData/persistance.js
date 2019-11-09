import lcstore from 'store'

class UserDataPersistance {
  constructor () {
    // Load from local storage
    if (lcstore.get('userAddress') !== undefined) {
      this.userAddress = lcstore.get('userAddress')
      this.balance = lcstore.get('balance')
    } else {
      this.userAddress = ''
      this.balance = ''
    }
  }

  update (userAddress, balance) {
    this.userAddress = userAddress
    this.balance = balance
  }

  save () {
    lcstore.set('userAddress', this.userAddress)
    lcstore.set('balance', this.balance)
  }

  updateUserBalance (balance) {
    this.balance = balance
    lcstore.set('balance', this.balance)
  }
}

export default UserDataPersistance
