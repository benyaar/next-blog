async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, name, message } = req.body
        if (!email || !email.includes('@') || name.trim() === '' || !name || !message || message.trim === '') {
            res.status(422).json({ message: 'Invalid input' })
        }
        const newMessage = {
            email, name, message
        }
        const result = await db.collection('messages').insertOne(newMessage)
        res.status(201).json({ message: 'Added message', message: result.insertedId })
        return
    }
}

export default handler