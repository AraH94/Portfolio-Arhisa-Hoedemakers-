import React from "react";
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

import Image from '../images/Ara1.jpg';

function About() {
	return (
		<section>
			<div className="container mx-auto">
				<div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
					<motion.div
						variants={fadeIn('right', 0.3)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className='flex-1 bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
					>
						<img src={Image} alt="" />
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default About;
