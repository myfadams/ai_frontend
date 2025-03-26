
import './index.css'

import App from "./App.jsx";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import ChatScreen from './screens/ChatScreen.jsx';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
	<BrowserRouter>
		{/* <App /> */}
		<Routes>
			{/* <Route path="/" element={<App />} /> */}
			<Route index element={<App />} />
			<Route path='fakenewsAi' element={<ChatScreen/>}/>
		</Routes>
	</BrowserRouter>
);
