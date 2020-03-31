const messages = []
let id = 0

module.exports = {
    create: (req, res) => {
        const {text, time} = req.body
       
        messages.push({id, text, time})
        id++
        res.status(200).send(messages)
    },
    read: (req, res) => {
        res.status(200).send(messages)
    },
    update: (req, res) => {
        const {text} = req.body
        const {id} = req.params
        const index = messages.findIndex(message => {
            return message.id === +id})

            let oldMessage = messages[index]

            messages[index] = {
                id: oldMessage.id,
                text: text || oldMessage.text,
                time: oldMessage.time
            }
            res.status(200).send(messages)
        
    },
    delete: (req, res) => {
        const deleteId = req.params.id
        const index = messages.findIndex(message => {
            return message.id == deleteId})
            messages.splice(index, 1)
            
            res.status(200).send(messages)
        },
    
}