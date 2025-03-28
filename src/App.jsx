import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Card from "./components/card/Card";
import Carousell from "./components/carousell/Carousell";
import WorkFlow from "./components/workFlow/WorkFlow";

import AnotherCard from "./components/card/AnotherCard";
import CarousellCardSection from "./components/sections/CarousellCardSection";
import SmallButton from "./components/smallButton/SmallButton";
import { useNavigate } from "react-router";
import TopComponent from "./components/NavBar/TopComponent";

function App() {
	const navigate = useNavigate();
	const [disable,setDisable]=useState(false)

	const footerlinks = [
		"./siemens logo.svg",
		"rubrick logo.svg",
		"gong.svg",
		"servicenow.svg",
		"termofisher logo.svg",
		"Lenovo logo.svg",
		"juniper logo.svg",
		"urban logo.svg",
	];

	return (
		<>
			<TopComponent/>
			<main>
				
					<NavBar />
				{/* </section> */}
				<section className="main-f">
					<div className="first-part">
						<div className="first-part-body">
							<div className="f-part">
								<p>
									Goodbye <span>AI Copilots</span>
								</p>
								<p>
									{" "}
									Goodbye <span>Point Solutions</span>
								</p>
							</div>
							<div className="img-width"></div>
							<img
								src="mobile-hero.png"
								alt="background"
								className="mobile-bg"
							/>
							<div className="s-part">
								<div className="sub-text-big">
									<p>Hello</p>
									<h3>
										GTM AI <br />
										Platform
									</h3>
								</div>

								<div className=" para">
									<p>
										Infuse AI across your go-to-market engine with a single
										platform — not dozens of copilots and point solutions.
										Codify best practices, unify data, connect teams, and
										eliminate GTM bloat. Power all key GTM use cases and realize
										the full value of AI.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="testMessage-box">
						<form action="">
							<input
								type="text"
								placeholder="What's your email"
								className="text-input"
							/>
							<button type="button" className="button ib" onClick={()=>{
								setDisable(true)
								//do something
								navigate("/fakenewsAi");
								setDisable(false)
							}} disabled={disable}>Get a demo</button>
						</form>
					</div>
					{/* ./section-bg.png */}
					<img src="./hero-temp.png" alt="background" className="section-bg" />
				</section>
				<div className="company">
					<div>
						<p className="footer-para">
							Trusted by 17 million users at leading companies
						</p>
					</div>
					<div className="car">
						<div className="footer-img-div">
							{footerlinks.map((link, index) => (
								<img src={link} alt="" className="footer-logo" key={index} />
							))}
						</div>
					</div>
				</div>
			</main>
			<section className="sect-2">
				<div className="top-sect-2">
					<h3 className="global-h3">Design Your GTM AI Playbook</h3>
					<div className="p">
						<p className="p1">
							You can’t rely on dozens of disconnected AI copilots, narrow point
							solutions, or unconstrained AI agents.
						</p>
						<p>
							Your GTM AI strategy deserves a platform that drives every use
							case and connects every team.
						</p>
					</div>
				</div>
				<div className="card-section">
					<Card
						title={"Prospecting Cockpit"}
						button1Text={"Get Demo"}
						button2Text={"Learn more"}
						bodyText={
							"Deeply research accounts + contacts to draft high-quality sales outreach. Drive deep customer relationships while you double your pipegen per rep"
						}
						imagesArray={["./sales tag.svg", "./operations tag.svg"]}
					/>
					<Card
						title={"Content Creation"}
						button1Text={"Get Demo"}
						button2Text={"Learn more"}
						bodyText={
							"Power your content engine with AI — SEO, thought leadership, use cases, social, and more. Drafts delivered in seconds, not weeks"
						}
						imagesArray={["./marketing tag.svg"]}
					/>
					<Card
						title={"Inbound Lead Processing"}
						button1Text={"Get Demo"}
						button2Text={"Learn more"}
						bodyText={
							"Automatically enrich, research, and engage your marketing generated leads in seconds. Minimize speed-to-lead, maximize conversions"
						}
						imagesArray={["./sales tag.svg", "./operations tag.svg"]}
					/>
					<Card
						title={"Account Based Marketing"}
						button1Text={"Get Demo"}
						button2Text={"Learn more"}
						bodyText={
							"Get rich insights on accounts, industries, and personas to inform ABM plays. Then, have AI create hyper-relevant, high-context assets at scale."
						}
						imagesArray={["./sales tag.svg", "./marketing tag.svg"]}
					/>
					<Card
						title={"Translation + Localization"}
						button1Text={"Get Demo"}
						button2Text={"Learn more"}
						bodyText={
							"Produce native speaker level translations for any language. All in real-time, for a fraction of the cost of translation agencies."
						}
						imagesArray={["./marketing tag.svg"]}
					/>
					<Card
						title={"Deal Coaching + Forecasting"}
						button1Text={"Get Demo"}
						button2Text={"Learn more"}
						bodyText={
							"Get meaningful, customizable insights from sales transcripts. Put AI to work to score deals, suggest strategies, and predict close dates."
						}
						imagesArray={["./sales tag.svg", "./operations tag.svg"]}
					/>
				</div>
			</section>
			<section className="carou-section">
				<Carousell
					carouInfo={[
						{
							image: "./tempHero Image-min.png",
							text: '"Copy.ai has been phenomenal in transforming the way we develop marketing content. By automating workflows that would typically take weeks and cost thousands of dollars through agencies, they\'ve saved us $16 million dollars this year alone."',
							author: "Roman Olney",
							role: "Head of Global Digital Experience @ Lenovo",
							footerLogo: "./Lenovo logo.svg",
						},
						{
							image: "./tempHero Image-min.png",
							text: "“I didn't even know AI workflows were something that I was lacking until someone said, “Did you know you could do all of this with Copy.ai?”",
							author: "Ashley Levesque",
							role: "VP of Marketing @ Banzai",
							footerLogo: "./Banzai.png",
						},
						{
							image: "./tempHero Image-min.png",
							text: "“Thanks to Copy.ai, we’re generating 5x more meetings with our personalized, AI-powered GTM strategy.”",
							author: "Jean English",
							role: "Chief Marketing Officer @ Juniper Networks",
							footerLogo: "./juniper logo.svg",
						},
					]}
				/>
			</section>
			<section className="work-flows">
				<h3 className="global-h3">The anti-point solution platform</h3>
				<div className="p">
					<p className="p1">
						Don’t end up with a bloated set of AI point solutions.
					</p>
					<p>Our platform architecture helps you solve any GTM use case.</p>
				</div>

				<WorkFlow />
				<div className="paragaph-footer">
					<p>
						For every page in your playbook,
						<strong>“There’s a workflow for that.”</strong>
					</p>
				</div>
			</section>
			<section className="strategy">
				
				{/* <div className="strat-div-flex"> */}
				<CarousellCardSection
					carouInfo={[
						{
							image: "./homepage1-p-500.png",
							bodyText:
								"How a purpose-built platform accelerates your AI strategy for a competitive edge.",
							title: "Invest in Purpose-Built Solution, or DIY?",
						},
						{
							image: "./homepage1-p-500.png",
							bodyText:
								"How a purpose-built platform accelerates your AI strategy for a competitive edge.",
							title: "Invest in Purpose-Built Solution, or DIY?",
						},
						{
							image: "./homepage1-p-500.png",
							bodyText:
								"How a purpose-built platform accelerates your AI strategy for a competitive edge.",
							title: "Invest in Purpose-Built Solution, or DIY?",
						},
						{
							image: "./homepage1-p-500.png",
							bodyText:
								"How a purpose-built platform accelerates your AI strategy for a competitive edge.",
							title: "Invest in Purpose-Built Solution, or DIY?",
						},
						{
							image: "./homepage1-p-500.png",
							bodyText:
								"How a purpose-built platform accelerates your AI strategy for a competitive edge.",
							title: "Invest in Purpose-Built Solution, or DIY?",
						},
						{
							image: "./homepage1-p-500.png",
							bodyText:
								"How a purpose-built platform accelerates your AI strategy for a competitive edge.",
							title: "Invest in Purpose-Built Solution, or DIY?",
						},
					]}
				/>
				{/* </div> */}
			</section>
		</>
	);
}

export default App;
