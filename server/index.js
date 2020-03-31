const express = require('express')
const messagesCtrl = require('./controllers/messages_controller')
const app = express()

const port = 3001

app.use(express.json())

const messagesUrl = "/api/messages"
app.post(messagesUrl, messagesCtrl.create)
app.get(messagesUrl, messagesCtrl.read)
app.put(`${messagesUrl}/:id`, messagesCtrl.update)
app.delete(`${messagesUrl}/:id`, messagesCtrl.delete)

app.listen(port, () => console.log(`Server listening on port ${port}`))