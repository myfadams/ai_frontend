import React, { useState } from 'react'
import TopComponent from '../components/NavBar/TopComponent';
import "./ChatScreen.css"
function ChatScreen() {
  const [enteredText,setEnteredText]=useState("");
  const [isloading,setIsloading]=useState(false);
  const [results,setResults]=useState();
  const checkNews = async (newsText) => {
    setIsloading(true)
		try {
			const response = await fetch("http://127.0.0.1:5000/predict", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ text: newsText }),
			});
      

			if (!response.ok) {
				throw new Error("Failed to fetch prediction");
			}

			const data = await response.json();
      console.log(data);
			return data; // Assuming the API returns { result: "Real" } or { result: "Fake" }
      
		} catch (error) {
			console.error("Error:", error);
			return { error: "Something went wrong!" };
		}finally {
      setIsloading(false)
    }
	};

	// Example usage
	

  return (
		<div>
			<TopComponent />

			<div className="main-chatBody">
				<div style={{ flex: 1, padding: "1rem" }}>
					<div className="sub-text-big">
						{results ? <p>Results</p> : <p>Hello</p>}
						{!results ? (
							<h3>
								GTM AI <br />
								Platform
							</h3>
						) : (
							<h3>{results?.prediction}</h3>
						)}
					</div>
				</div>
				<div className="input-sect">
					<textarea
						onChange={(e) => {
							setEnteredText(e.target.value);
						}}
						value={enteredText}
					/>
					<button
						className="button1"
						onClick={() => {
							if (enteredText.trim() == "") return;

							setIsloading(true);
							checkNews(enteredText)
								.then((data) => {
									console.log(data?.predictions);
									setResults(data);
								})
								.catch((err) => console.log(err))
								.finally(() => {
									setIsloading(false);
									setEnteredText("");
								});
						}}
						disabled={isloading}
					>
						{isloading ? "loading" : "Verify"}
					</button>
				</div>
			</div>
		</div>
	);
}

export default ChatScreen
