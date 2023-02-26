// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const VAULTABI = require('../../../../config/VAULTABI.json')
const Contract = require('web3-eth-contract')

Contract.setProvider('https://rpc.ankr.com/bsc');

const vaultContract = '0x60a00a6d716e2c2F896698B28dC1a7a508f0b87A'

 async function dearn333(user) {

  const firstContract = await new Contract(VAULTABI, vaultContract)

  const firstArr = await firstContract.methods.tRarity(0, user).call()

  const x =  parseInt(firstArr) + 1

  return(x)
}

module.exports = {
  dearn333
}