import React from "react";

// intersection observer
import { useInView } from 'react-intersection-observer';

// motion
import { motion } from 'framer-motion';

// variant
import { fadeIn } from '../variants';

import CountUp from 'react-countup'

import { Link } from "react-scroll";

function About() {
	const [ref, inView] = useInView({
		threshold: 0.5
	});

	return (
		<section id='about' ref={ref}>
			<div className="container mx-auto">
				<div className="flex flex-col gap-y-10 lg:flex-row lg:gap-x-20 lg:gap-y-0 h-screen ">
					{/* image */}
					<motion.div
						variants={fadeIn('right', 0.3)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className='flex-1 bg-about bg-contain bg-no-repeat bg-top lg:h-[600px]'
					>
					</motion.div>
					{/* text */}
					<motion.div
						variants={fadeIn('left', 0.5)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className='flex-1 mt-20'>
						<h2 className='h2 text-accent'>About me</h2>
						<p className='mb-6 font-titillium leading-8 tracking-wide text-lg'>
							I'm a beginning Front-end Developer. <br/>
							In 2021 I started with a Programming course. I wanted to specialise myself more in the front-end and started in November 2022 with the course Front-end Developer at Intec Brussels. <br />
							I'm eager to expand my knowledge and realise more projects to develop myself even more into a coder. <br />
							If I could combine my love for travelling and creating websites for a living, that would surely be a big plus.
						</p>
						{/* stats
						<div className='flex gap-x-6 lg:gap-x-10 mb-12'>
							<div>
								<div className='text-[40px] font-tertiary text-gradient mb-2'>
									{inView ? <CountUp start={0} end={13} duration={3} /> : null}
								</div>
								<div className='font-primary text-sm tracking-[2px]'>
									Years of <br />
									Experience
								</div>
							</div>
							<div>
								<div className='text-[40px] font-tertiary text-gradient mb-2'>
									{inView ? <CountUp start={0} end={15} duration={3} /> : null}
									k+
								</div>
								<div className='font-primary text-sm tracking-[2px]'>
									Projects <br />
									Completed
								</div>
							</div>
							<div>
								<div className='text-[40px] font-tertiary text-gradient mb-2'>
									{inView ? <CountUp start={0} end={12} duration={3} /> : null}
									k+
								</div>
								<div className='font-primary text-sm tracking-[2px]'>
									Statisfied<br />
									Clients
								</div>
							</div>
						</div> */}
						<div className='flex gap-x-8 items-center'>
							<Link to="works" className='text-gradient btn-link'>
								<button className='btn btn-lg duration-500'>My works</button>
							</Link>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default About;
