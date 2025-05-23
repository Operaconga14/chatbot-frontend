import { useRef, useState } from 'react'
import styles from '../css/chatbot.module.css'
import { NormalButton } from '../shared/Buttons'
import { Post } from '../services/apiService'

const ChatBot = () => {

    const [messages, setMessages] = useState<Array<{ text: String, isUser: boolean }>>([])
    const [isBotTyping, setIsBotTyping] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const handleEndConversation = async () => {
        const sessionId = localStorage.getItem("session_id")

        try {
            const result = await Post({
                endpoint: "chat/end",
                body: { session_id: sessionId }
            })

            const message = result.message
            alert(message)
            setMessages([])
            deleteSessionId()

        } catch (error: any) {
            if (error.response?.status === 422) {
                console.error('Invalid session or missing data.');
                alert('Could not end conversation: invalid session.');
            } else {
                console.error('Unexpected error:', error);
                alert('Something went wrong. Try again.');
            }
        }


    }

    const handleSubmit = () => {
        if (inputRef.current && inputRef.current.value.trim()) {
            const userMessage = inputRef.current.value
            setMessages(prevMessages => [...prevMessages, { text: userMessage, isUser: true }])

            inputRef.current.focus()
            setIsBotTyping(true)
            inputRef.current.value = ''
            const sessionId = localStorage.getItem("session_id")
            getBotResponse({ message: userMessage, session_id: sessionId })
        }
    }

    const getBotResponse = async (body: any) => {
        try {

            const result = await Post({ endpoint: "/chat/conversation", body: body })
            const botReply = result.bot_response
            const newSessionId = result.session_id

            if (newSessionId) {
                storeSessionId(newSessionId)
            }

            setMessages((prevMessages) => [...prevMessages, { text: botReply, isUser: false }])
        } catch (error) {
            console.error("Error fetching bot response:", error);
            throw error
        } finally {
            setIsBotTyping(false)
        }
    }

    const storeSessionId = (sessionId: any) => {
        localStorage.setItem("session_id", sessionId)
    }

    const deleteSessionId = () => {
        localStorage.removeItem("session_id")
        alert("Session Deleted succefully")
    }

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.chatHeader}`}>
                <h3>ChatBot</h3>
                <NormalButton text='✖️' className={`${styles.closeButton}`} onClick={() => { }} />
            </div>
            <div className={`${styles.chatBody}`}>
                {messages.map((msg, index) => (
                    <div key={index} className={`${styles.message}`}>
                        <div className={msg.isUser ? styles.userMessage : styles.botMessage}>
                            <p>{msg.text}</p>
                        </div>
                    </div>
                ))}

                {isBotTyping && (
                    <div className={`${styles.message}`}>
                        <div className={styles.botMessage}>
                            <div className={styles.messageContent}><p>Typing...</p></div>
                        </div>
                    </div>
                )}

            </div>
            <div>
                <div className={`${styles.endConversationContainer}`}>
                    <hr />
                    <NormalButton text='end Conversation' className={`${styles.endConversationButton}`} onClick={() => handleEndConversation()} />
                    <hr />
                </div>
                <div className={`${styles.chatInputContainer}`}>
                    <input ref={inputRef} type="text" className={`${styles.textInput}`} placeholder='Type here...' />
                    <NormalButton text='Send' className={`${styles.sendButton}`} onClick={() => handleSubmit()} />
                </div>
            </div>

        </div>
    )
}

export default ChatBot