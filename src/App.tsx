import axios from "axios"
import ChatBot from "./components/ChatBot"
import { NormalButton } from "./shared/Buttons"
import "axios"
import { environment } from "./assets/environments/environments"
import { useState } from "react"


function App() {

  const [isChatOpen, setIsChatOpen] = useState(false);

  const openChat = () => { setIsChatOpen(true) }

  const closeChat = () => setIsChatOpen(false);


  const handleSessionId = async () => {
    const api_url = environment.API_URL

    try {

      await openChat()

      const response = await axios.post(`${api_url}/chat`)

      console.log("Datat", response.data)

      localStorage.setItem("sessiion_id", response.data)

    } catch (error) {
      console.error("Error", error)
    }


  }

  return (
    <>
      <div className="trigger-button">
        <NormalButton text="💬" className="chabot-trgger-btn" onClick={() => handleSessionId()} />
      </div>
      <div className="chat-container hidden">
        <ChatBot />
      </div>
    </>
  )
}

export default App
