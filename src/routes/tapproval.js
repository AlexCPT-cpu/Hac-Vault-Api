// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const TOKENABI = require('../../config/TOKENABI.json')
const Contract = require('web3-eth-contract')

const _333Tokencontract = '0xceA4195AeCc3622179334e346cF526312F32D836'
const _3333Tokencontract = '0xD48c2F6Cd0554b32C90E70C4C493Ce253299dC68'
const alienTokencontract = '0x120A9664D35031691eC7ee98B81F1A87ebbD1217'
const _333Lotterycontract = '0xB8e9e90cc512184082E8512a61C07206E8030C6d'
const _3333Lotterycontract = '0x38a5100E72805F35F7D014d2Ef7c69e8D24c6D81'
const alienLotterycontract = '0x760ED02d9407372416155A5962092ba95ebc1290'

Contract.setProvider('https://rpc.ankr.com/bsc');

 async function tapproval(user) {
  const firstContract = await new Contract(TOKENABI, _333Tokencontract)
  const secondContract = await new Contract(TOKENABI, _3333Tokencontract)
  const thirdContract = await new Contract(TOKENABI, alienTokencontract)

  const firstArr = await firstContract.methods.allowance(user, _333Lotterycontract).call()
  const secondArr = await secondContract.methods.allowance(user, _3333Lotterycontract).call()
  const thirdArr = await thirdContract.methods.allowance(user, alienLotterycontract).call()

  const x = [parseInt(firstArr), parseInt(secondArr), parseInt(thirdArr)]

  return(x)
}

module.exports = {
  tapproval
}