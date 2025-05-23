import ChatBot from "./components/ChatBot"
import { NormalButton } from "./shared/Buttons"



function App() {
  return (
    <>
      <div className="trigger-button">
        <NormalButton text="💬" className="chabot-trgger-btn" onClick={() => { }} />
      </div>
      <div className="chat-container">
        <ChatBot />
      </div>
    </>
  )
}

export default App
