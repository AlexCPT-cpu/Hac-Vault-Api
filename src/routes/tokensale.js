// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const Contract = require('web3-eth-contract')
const TokenSaleJson = require('../../config/TokenSaleJson.json')

Contract.setProvider('https://rpc.ankr.com/bsc');

async function tokensale() {

  const firstContract = await new Contract(TokenSaleJson, '0x56628775730cA381557b6B73Cf7CC54f981bB722')

  const firstArr = await firstContract.methods.getLatestPrice().call()

  const x =  await parseInt(firstArr[0])

  return (x)
}

module.exports = {
  tokensale
}