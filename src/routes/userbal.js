// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const NFTABI = require('../../config/NFTABI.json')
const Contract = require('web3-eth-contract')


const  _333contract = '0x7E82F54578f03ad922F2bA61674C46b9dBdCE61d'
const _3333contract = '0xAFc7647b584730694B9606511F11F423A0816eFf'
const alienContract = '0xE33cc98d90975Ad42e56251B0A1cd8bda9FAF003'

Contract.setProvider('https://rpc.ankr.com/bsc');

async function userbal(user) {
  const firstContract = await new Contract(NFTABI, _333contract)
  const secondContract = await new Contract(NFTABI, _3333contract)
  const thirdContract = await new Contract(NFTABI, alienContract)

  const firstArr = await firstContract.methods.balanceOf(user).call()
  const secondArr = await secondContract.methods.balanceOf(user).call()
  const thirdArr = await thirdContract.methods.balanceOf(user).call()

  const x = await [parseInt(firstArr), parseInt(secondArr), parseInt(thirdArr)]

  return(x)
}

module.exports = {
  userbal
}