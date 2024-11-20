import express from 'express'
import router from './routes/main_routes'


const app = express()
app.use(express.json()) // middleware que transforma el request.body a un json

app.get('/ping', (_, res) => {
  console.log('ping ok ' + new Date().toLocaleDateString())
  res.send('pong')
})

app.use('/api', router)
const PORT = 3241

app.listen(PORT, () => {
  console.log(`Server running at localhost:${PORT}`)
})
