const BigNumber = require('bignumber.js')
const { LibraClient, LibraWallet, LibraAdmissionControlStatus } = require('kulap-libra')
const axios = require('axios')
const moment = require('moment')
const apiLocal = 'http://localhost:3000'
class Libra {
  // libraClient () {
  //   return new LibraClient({
  //     transferProtocol: 'https',
  //     host: 'ac-libra-testnet.kulap.io',
  //     port: '443',
  //     dataProtocol: 'grpc-web-text'
  //   })
  // }

  async queryBalance (address) {
    try {
      const response = await axios.get(`${apiLocal}/api/${address}`)
    if(response.status !== 200) return ''
    if(!response || !response.data) return 'failed'
    return response.data.data.result
    } catch (error) {
      return error
    }
    
  }

  async createWallet () {
    // Generate account
    try {
      const response = await axios.get(`${apiLocal}/api/createWallet`)
    if(response.status !== 200) return {}
    if(!response || !response.data) return {status: 'failed'}
    const account = response.data.data

    return {
      address: account.address,
      mnemonic: account.mnemonic
    }
    } catch (error) {
      return error
    }
    
   
  }

  async transfer (mnemonic, toAddress, amount) {
    try {
      const response = await axios.get(`${apiLocal}/api/transfer`)
    if(response !== 200) return {}
    return {
      response: response.data,
      // address: account.getAddress().toHex()
    }
    } catch (error) {
      return error
    }
    
  }

  // async mint (address, amount) {
  //   const client = this.libraClient()

  //   // Mint 100 Libra coins
  //   const result = await client.mintWithFaucetService(address, BigNumber(amount).times(1e6).toString(10))

  //   return {
  //     result: result,
  //     address: address,
  //     amount: BigNumber(amount).toString(10)
  //   }
  // }

  async queryTransactionHistory (address) {
    try {
    const response = await axios.get(`${apiLocal}/api/queryTransactionHistory`)
    if(!response.status !== 200) return ''
    return response.data
    } catch (error) {
      return error
    }
    
    // Get transaction histories from libexplorer
    // const url = `https://api-test.libexplorer.com/api?module=account&action=txlist&address=${address}`
    // console.log(`calling ${url}`)
    // const response = await axios.get(url, { timeout: 10000 }).then(resp => resp).catch(error => ({ error: error.message }))

    // // Valdiate response
    // if (response.error || response.data.status !== '1') {
    //   if (response.data.status === '0') {
    //     // Case of Invalid address format
    //     if (response.data.message === 'NOTOK') {
    //       throw new Error(response.data.result)

    //     // Case of No transactions found
    //     } else if (response.data.message === 'No transactions found') {
    //       return []
    //     }
    //   }

    //   const msg = response.error ? response.error : JSON.stringify(response.data)
    //   console.error(`Failed response ${msg}`)
    //   throw new Error(`Internal server error`)
    // }

    // // console.log(response.data.result)

    // // Transform data
    // let transactions = response.data.result.map(transaction => {
    //   // Convert from micro libras
    //   const amountInBaseUnit = BigNumber(transaction.value).div(1e6)
    //   let output = {
    //     amount: amountInBaseUnit.toString(10),
    //     fromAddress: transaction.from,
    //     toAddress: transaction.to,
    //     date: moment.utc(parseInt(transaction.expirationTime) * 1000).format(),
    //     transactionVersion: parseInt(transaction.version),
    //     explorerLink: `https://libexplorer.com/version/${transaction.version}`
    //   }
    //   // Mint
    //   if (transaction.from === '0000000000000000000000000000000000000000000000000000000000000000') {
    //     output.event = 'mint'
    //     output.type = 'mint_transaction'
    //     // Sent
    //   } else if (transaction.from.toLowerCase() === address.toLowerCase()) {
    //     output.event = 'sent'
    //     output.type = 'peer_to_peer_transaction'
    //     // Received
    //   } else {
    //     output.event = 'received'
    //     output.type = 'peer_to_peer_transaction'
    //   }
    //   return output
    // })

    // // Sort by transaction version desc
    // transactions = transactions.sort((a, b) => {
    //   return b.transactionVersion - a.transactionVersion
    // })

    // return transactions
  }

  async accountState (address) {
    const client = this.libraClient()

    const accountState = await client.getAccountState(address)

    const { sentEventsCount, receivedEventsCount } = accountState

    return { sentEventsCount, receivedEventsCount }
  }
}

export default Libra
