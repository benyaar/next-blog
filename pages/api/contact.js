function handler(req, res) {
    if(req.method === 'POST'){
        const {email, name, message} = req.body
        if(!email || !email.includes('@') || name.trim() === '' || !name || !message || message.trim === ''){
            res.status(422).json({message: 'Invalid input'})
        }
        const newMessage = {
            email, name, message
        }
        res.status(201).json({message: 'Success', newMessage})
    }
}

export default handler