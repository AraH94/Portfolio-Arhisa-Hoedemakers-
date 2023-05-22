import React, { useRef } from "react";
import WorkCards from "./WorkCards";
import worksData from "./worksData";

function Works() {
	// const cardsRef = useRef([])
	return (
		<section id="works" >
			<div className="container mx-auto">
			<h2 className='h2 text-accent'>Works</h2>
				<div>
					{worksData.map((card, index) => (
						<WorkCards
							key={index}
							title={card.title}
							content={card.content}
							image={card.image}
							url={card.url}
						// ref={(element) => (cardsRef.current[index] = element)}
						/>
					))}
				</div>
			</div>

		</section>
	)
}

export default Works;
