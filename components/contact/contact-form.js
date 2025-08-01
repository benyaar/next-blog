import { useEffect, useState } from 'react'
import classes from './contact-form.module.css'
import Notification from '../../ui/notification'

async function setContactData({ enteredEmail, enteredName, enteredMessage }) {
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
            email: enteredEmail,
            name: enteredName,
            message: enteredMessage
        }),
        headers: {
            'Content-type': 'application/json'
        }
    })
    const data = await response.json()
    if (!response.ok) {
        throw new Error(data.message || 'Something went wrong!')
    }


}


function ContactForm() {
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredName, setEnteredName] = useState('')
    const [enteredMessage, setEnteredMessage] = useState('')
    const [requestStatus, setRequestStatus] = useState('')
    const [requestError, setRequestError] = useState('')

    useEffect(() => {
        if (requestStatus === 'success' || requestStatus === 'error') {
            const timer = setTimeout(() => {
                setRequestStatus(null)
                setRequestError(null)
            }, 3000);
            return ()=> clearTimeout(timer)
        }
    }, [requestStatus])

    async function sendMessageHandler(event) {
        event.preventDefault()
        setRequestStatus('pending')
        try {
            await setContactData({ enteredEmail, enteredName, enteredMessage })
            setRequestStatus('success')
            setEnteredEmail('')
            setEnteredName('')
            setEnteredMessage('')
        } catch (error) {
            setRequestError(error.message)
            setRequestStatus('error')
        }
    }

    let notification;
    if (requestStatus === 'pending') {
        notification = {
            status: 'pending',
            title: 'something message',
            message: 'wait'
        }
    }
    if (requestStatus === 'success') {
        notification = {
            status: 'success',
            title: 'something success',
            message: 'success'
        }
    }
    if (requestStatus === 'error') {
        notification = {
            status: 'error',
            title: 'something error',
            message: requestError
        }
    }
    return (
        <section className={classes.contact}>
            <h1>How can I help you?</h1>
            <form className={classes.form} onSubmit={sendMessageHandler} >
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor='email'>Your email</label>
                        <input type='email' id='email' required value={enteredEmail} onChange={
                            (event) => setEnteredEmail(event.target.value)
                        } />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='name'>Your name</label>
                        <input type='text' id='name' required value={enteredName} onChange={
                            (event) => setEnteredName(event.target.value)} />
                    </div>
                </div>
                <div className={classes.control}>
                    <label htmlFor='message'>Your message</label>
                    <textarea rows='5' id='message' required value={enteredMessage} onChange={
                        (event) => setEnteredMessage(event.target.value)} />
                </div>
                <div className={classes.actions}>
                    <button>Send message</button>
                </div>
            </form>
            {notification && <Notification
                status={notification.status}
                title={notification.title}
                message={notification.message}
            />}

        </section>
    )
}
export default ContactForm