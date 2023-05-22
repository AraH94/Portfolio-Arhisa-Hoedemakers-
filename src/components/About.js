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
		<section className="section" id='about' ref={ref}>
			<div className="container mx-auto">
				<div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen ">
					{/* image */}
					<motion.div
						variants={fadeIn('right', 0.3)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className='flex-1 bg-about bg-contain bg-no-repeat h-[640px]
						 bg-top'
					>
					</motion.div>
					{/* text */}
					<motion.div
						variants={fadeIn('left', 0.5)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className='flex-1'>
						<h2 className='h2 text-accent'>About me.</h2>
						<h3 className='h3 mb-4'>
							I'm a Front-end Developer with 1 year of experience.
						</h3>
						<p className='mb-6'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, amet dolorum error repudiandae molestias accusamus quo culpa necessitatibus nesciunt eos, sed cum nemo debitis quae unde explicabo? Est, enim ex!
						</p>
						{/* stats */}
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
						</div>
						<div className='flex gap-x-8 items-center'>
							<Link to="works" className='text-gradient btn-link'>
								<button className='btn btn-lg'>My works</button>
							</Link>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default About;
