// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const NFTABI = require('../../../../config/NFTABI.json')
const Contract = require('web3-eth-contract')

Contract.setProvider('https://rpc.ankr.com/bsc');

const _333contract = '0x7E82F54578f03ad922F2bA61674C46b9dBdCE61d'
const _3333contract = '0xAFc7647b584730694B9606511F11F423A0816eFf'
const alienContract = '0xE33cc98d90975Ad42e56251B0A1cd8bda9FAF003'

async function imagealiens(id) {
  const firstContract = await new Contract(NFTABI, alienContract)

    const raw = await firstContract.methods.tokenURI(id).call()
    const x = raw.replace(
      "ipfs://",
      "https://gateway.ipfscdn.io/ipfs/"
    )

  return(x)
}

module.exports = {
  imagealiens
}