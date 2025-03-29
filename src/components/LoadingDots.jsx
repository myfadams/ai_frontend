import { motion } from "framer-motion";

const LoadingDots = () => {
	return (
		<div style={{ display: "flex", gap: "4px" }}>
			{[0, 1, 2].map((i) => (
				<motion.span
					key={i}
					style={{
						width: "8px",
						height: "8px",
						backgroundColor: "black",
						borderRadius: "50%",
					}}
					animate={{ opacity: [0.3, 1, 0.3] }}
					transition={{
						duration: 1,
						repeat: Infinity,
						ease: "easeInOut",
						delay: i * 0.2,
					}}
				/>
			))}
		</div>
	);
};

export default LoadingDots;
