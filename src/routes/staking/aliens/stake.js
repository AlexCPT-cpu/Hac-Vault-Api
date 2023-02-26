// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const Contract = require('web3-eth-contract')
const VAULTABI = require('../../../../config/VAULTABI.json')

Contract.setProvider('https://rpc.ankr.com/bsc');

const vaultContract = '0x60a00a6d716e2c2F896698B28dC1a7a508f0b87A'

async function stakealiens(user) {
  const Y = []
  const firstContract = await new Contract(VAULTABI, vaultContract)

  const firstArr = await firstContract.methods.getStakedTokens(user, 2).call()

  firstArr.map((item) => {
    Y.push(parseInt(item.tokenId))
  })

  return(Y)
}


module.exports = {
  stakealiens
}