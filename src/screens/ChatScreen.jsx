import React, { useEffect, useRef, useState } from "react";
import TopComponent from "../components/NavBar/TopComponent";
import NavBar from "../components/NavBar/NavBar";
import "./ChatScreen.css";
import LoadingDots from "../components/LoadingDots";

function ChatScreen() {
	const [enteredText, setEnteredText] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	// const[userMessage,setUserMessage]=useState({text:"",sender:"user"})
	const [messages, setMessages] = useState([
		{ text: "Hello! How can I help you today?", sender: "bot" },
	]);

	const fetchData = async (text) => {
		setIsLoading(true);
		try {
			const response = await fetch("http://127.0.0.1:5000/predict", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ text: text }),
			});
			if (!response.ok) throw new Error("Failed to fetch prediction");
			const data = await response.json();
			return data;
		} catch (error) {
			console.error("Error:", error);
			return { error: "Something went wrong!" };
		} finally {
			setIsLoading(false);
		}
	};
	const handleSend = async () => {
		if (enteredText.trim() === "") return;
		setMessages([...messages, { text: enteredText, sender: "user" }]);
		setEnteredText("");

		const data = await fetchData(enteredText);
		setMessages((prevMessages) => [...prevMessages, data]);
	};
	const chatContainerRef=useRef(null)
	useEffect(() => {
		// Auto-scroll to the bottom when messages update
		if (chatContainerRef.current) {
			chatContainerRef.current.scrollTop =
				chatContainerRef.current.scrollHeight;
		}
	}, [messages]); // Runs whenever messages change
	return (
		<div>
			{/* <TopComponent /> */}
			<NavBar />
			<div className="main-chatBody">
				<div className="chat-container" ref={chatContainerRef}>
					{messages.map((msg, index) => (
						<div key={index} className={`chat-bubble ${msg.sender}`}>
							{msg.text}
						</div>
					))}
					{isLoading&&<div className={`chat-bubble bot`}>
						<LoadingDots />
					</div>}
				</div>
				<div className="input-sect">
					<textarea
						onChange={(e) => {
							setEnteredText(e.target.value);
							e.target.style.height = "auto"; // Reset height
							e.target.style.height = `${Math.min(
								e.target.scrollHeight,
								120
							)}px`; // Cap at max-height (6rem = 96px)
						}}
						value={enteredText}
						placeholder="Type a message..."
					/>
					<button className="button1" onClick={handleSend} disabled={isLoading}>
						<img src={isLoading ? "/stop.png" : "/send.png"} alt="" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default ChatScreen;
