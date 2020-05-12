const express = require('express')

const routes = express.Router()

const messageController = require('./controllers/messageController')

routes.get('/message', messageController.index)
routes.post('/message', messageController.create)
routes.put('/message/:id', messageController.update)
routes.delete('/message/:id', messageController.delete)

module.exports = routes
