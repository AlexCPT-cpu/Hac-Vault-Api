const express = require('express')
const vBal = require('./routes/vaultbal')
const uBal = require('./routes/userbal')
const tSale = require('./routes/tokensale')
const token = require('./routes/token')
const tApp = require('./routes/tapproval')
const apprvd = require('./routes/approved')
const stake333 = require('./routes/staking/333/stake')
const stake3333 = require('./routes/staking/3333/stake')
const stakeAliens = require('./routes/staking/aliens/stake')
const image333 = require('./routes/image/one/image')
const image3333 = require('./routes/image/two/image')
const imageAliens = require('./routes/image/three/image')
const details333 = require('./routes/details/333/details')
const details3333 = require('./routes/details/3333/details')
const detailsAliens = require('./routes/details/aliens/details')
const dearn333 = require('./routes/dailyEarn/333/dearn')
const dearn3333 = require('./routes/dailyEarn/3333/dearn')
const dearnAliens = require('./routes/dailyEarn/aliens/dearn')
var Contract = require('web3-eth-contract');

Contract.setProvider("https://bsc-dataseed1.binance.org")

const PORT = process.env.API_PORT || 4000

const app = express()

app.use(express.json())

const vaultbal = vBal.vaultbal
const userbal = uBal.userbal
const tknsale = tSale.tokensale
const tkn = token.token
const tknAppr = tApp.tapproval
const appr = apprvd.approved
const stk333 = stake333.stake333
const stk3333 = stake3333.stake3333
const stkaliens = stakeAliens.stakealiens
const img333 = image333.image333
const img3333 = image3333.image3333
const imgaliens = imageAliens.imagealiens
const dtls333 = details333.details333
const dtls3333 = details3333.details3333
const dtlsaliens = detailsAliens.detailsaliens
const dern333 = dearn333.dearn333
const dern3333 = dearn3333.dearn3333
const dernaliens = dearnAliens.dearnaliens

app.get('/', async (req, res) => {
    res.send('Vault Api is Live')
})

app.get('/balances/vaultbal', async (req, res) => {
    let bal = await vaultbal()
    res.json(bal)
})

app.get('/balances/userbal/:address', async (req, res) => {
    const address = req.params.address
    let bal = await userbal(address)
    res.json(bal)
})

app.get('/balances/tokensale', async (req, res) => {
    let ts = await tknsale()
    res.json(ts)
})

app.get('/token/:address', async (req, res) => {
    const address = req.params.address
    let ts = await tkn(address)
    res.json(ts)
})

app.get('/tokenappr/:address', async (req, res) => {
    const address = req.params.address
    let ta = await tknAppr(address)
    res.json(ta)
})

app.get('/approved/:address', async (req, res) => {
    const address = req.params.address
    let ar = await appr(address)
    res.json(ar)
})

app.get('/staking/333/:address', async (req, res) => {
    const address = req.params.address
    let stk = await stk333(address)
    res.json(stk)
})

app.get('/staking/3333/:address', async (req, res) => {
    const address = req.params.address
    let stk = await stk3333(address)
    res.json(stk)
})

app.get('/staking/aliens/:address', async (req, res) => {
    const address = req.params.address
    let stk = await stkaliens(address)
    res.json(stk)
})

app.get('/image/333/:id', async (req, res) => {
    const id = req.params.id
    let img = await img333(id)
    res.json(img)
})

app.get('/image/3333/:id', async (req, res) => {
    const id = req.params.id
    let img = await img3333(id)
    res.json(img)
})

app.get('/image/aliens/:id', async (req, res) => {
    const id = req.params.id
    let img = await imgaliens(id)
    res.json(img)
})

app.get('/details/333/:address', async (req, res) => {
    const address = req.params.address
    let dtl = await dtls333(address)
    res.json(dtl)
})

app.get('/details/3333/:address', async (req, res) => {
    const address = req.params.address
    let dtl = await dtls3333(address)
    res.json(dtl)
})

app.get('/details/aliens/:address', async (req, res) => {
    const address = req.params.address
    let dtl = await dtlsaliens(address)
    res.json(dtl)
})

app.get('/dearn/333/:address', async (req, res) => {
    const address = req.params.address
    let drn = await dern333(address)
    res.json(drn)
})

app.get('/dearn/3333/:address', async (req, res) => {
    const address = req.params.address
    let drn = await dern3333(address)
    res.json(drn)
})

app.get('/dearn/aliens/:address', async (req, res) => {
    const address = req.params.address
    let drn = await dernaliens(address)
    res.json(drn)
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})