import React from 'react'
import "./workflow.css"
function WorkFlow() {
  return (
		<div className="mainWork-body">
			<div className="d2">
				<div className="s1">
					<h3>GTM AI Platform</h3>
					<p>
						Secure, vertical AI-native platform for business-critical operations
					</p>
					<div>
						<img src="./security logos.png" alt="" className="img-t" />
					</div>
				</div>
				<div className="s2">
					<h3>2,000+ Integrations</h3>
					<div>
						<img src="./Integration logos.png" alt="" className="img-t" />
					</div>
				</div>

				<div className="d3">
					<a href="#" className="t1">
						<div>
							<h3>Workflows</h3>
							<p>
								AI-powered codifications of your processes, plays, and best
								practices. Unifying cross-functional teams, systems, and GTM
								strategies.
							</p>
						</div>
					</a>
					<a href="#" className="t2">
						<div>
							<h3>Actions</h3>
							<p>
								Building blocks that allow users to harness the power of AI
								without being AI experts.
							</p>
						</div>
					</a>
					<a href="#" className="t3">
						<div>
							<h3>Agents</h3>
							<p>
								Automate targeted tasks by combining AI decision-making with
								proper guardrails.
							</p>
						</div>
					</a>
					<a href="#" className="t4">
						<div>
							<h3>Tables</h3>
							<p>
								A queryable data foundation that consolidates disparate sources
								to power AI automation.
							</p>
						</div>
					</a>
					<a href="#" className="t5">
						<div>
							<h3>Brand Voice</h3>
							<p>
								The definition of your brand’s unique personality that ensures
								consistent, authentic content outputs.
							</p>
						</div>
					</a>
					<a href="#" className="t6">
						<div>
							<h3>Chat</h3>
							<p>
								A prompting interface that allows users to rapidly complete
								one-off tasks and to-dos.
							</p>
						</div>
					</a>
					<a href="#" className="t7">
						<div>
							<h3>Infobase</h3>
							<p>
								A centralized repository for your company's essential
								information to inform content generation.
							</p>
						</div>
					</a>
				</div>
			</div>
			<div className="d4">
				<div className="subt-d4">
					<h3>LLM Model Agnostic</h3>
				</div>
				<div className="d4-logo-div">
					<div className="border-d4">
						<img src="./openai logo.svg" alt="openai logo" />
					</div>
					<div className="border-d4">
						<img src="./anthropic logo.svg" alt="anthropic logo" />
					</div>
					<div className="border-d4">
						<img src="Meta logo.svg" alt="Meta logo" />
					</div>
					<div className="border-d4">
						<img src="Perplexity logo.svg" alt="Perplexity logo" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default WorkFlow
