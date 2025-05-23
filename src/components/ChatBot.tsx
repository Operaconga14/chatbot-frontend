// import { useState } from 'react'
import styles from '../css/chatbot.module.css'
import { NormalButton } from '../shared/Buttons'

const ChatBot = () => {

    // const [isBotTyping, setIsTyping] = useState(false)
    // const [message, setMessage] = useState<Array<{ text: string, isUser: boolean }>>([])
    // const [isChatOpen, setIsChatOpen] = useState(true)

    // const closChat = () => {
    //     setIsChatOpen(false)
    // }

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.chatHeader}`}>
                <h3>ChatBot</h3>
                <NormalButton text='✖️' className={`${styles.closeButton}`} onClick={() => { }} />
            </div>
            <div className={`${styles.chatBody}`}>
                <div className={`${styles.message} ${styles.botMessage}`}>
                    <div className={`${styles.messageContent}`}>
                        Hi RodBot, how are you today?
                    </div>
                </div>

                <div className={`${styles.message} ${styles.userMessage}`}>
                    <div className={`${styles.messageContent}`}>
                        Hello! I'm doing great, thanks for asking. How can I help you today?
                    </div>
                </div>
            </div>
            <div className={`${styles.chatInputContainer}`}>
                <input type="text" className={`${styles.textInput}`} />
                <NormalButton text='Send' className={`${styles.sendButton}`} />
            </div>
        </div>
    )
}

export default ChatBot