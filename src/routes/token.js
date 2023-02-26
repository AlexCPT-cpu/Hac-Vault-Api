// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const TOKENABI = require('../../config/TOKENABI.json')
const Contract = require('web3-eth-contract')


Contract.setProvider('https://rpc.ankr.com/bsc');

 async function token(user) {

  const firstContract = await new Contract(TOKENABI, '0xceA4195AeCc3622179334e346cF526312F32D836')
  const secondContract = await new Contract(TOKENABI, '0xD48c2F6Cd0554b32C90E70C4C493Ce253299dC68')
  const thirdContract = await new Contract(TOKENABI, '0x120A9664D35031691eC7ee98B81F1A87ebbD1217')

  const firstArr = await firstContract.methods.balanceOf(user).call()
  const secondArr = await secondContract.methods.balanceOf(user).call()
  const thirdArr = await thirdContract.methods.balanceOf(user).call()

  const x = await [parseInt(firstArr), parseInt(secondArr), parseInt(thirdArr)]

  return (x)
}


module.exports = {
  token
}