const app = require('express')()
const bodyParser = require('body-parser')


app.use(bodyParser.json())

// Requisição simples (http://localhost:3000/)
app.get('/', (req, res) => {
    res.status(200).send('Meu Backend!')
})

// Requisição com valor simples no corpo (http://localhost:3000/params/{valor simples})
app.get('/params/:test', (req, res) => {
    res.status(200).send('Meu Backend!  ' + req.params.test)
})

// Requisição com valor simples no corpo (http://localhost:3000/query/?{nomeDaVariavel=valor}&?{segundaVariavel=valor}...)
app.get('/query/:nome', (req, res) => {
    res.status(200).send('Meu Backend! ' + req.query.nome)
})

// post simples que deve esperar a recpção de dados 
app.post('/malone/', (req, res) => {
    res.status(200).send('Meu recebimento ' + req.body.nome)
})


app.listen(3000, () => {
    console.log("Executando ...")
})