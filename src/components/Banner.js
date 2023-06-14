import React from "react";

// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from '../variants';

import Image from '../images/Ara.jpg';

import { Link } from "react-scroll";



function Banner() {
	return (
		<section className='flex items-center' id='home'>
			<div className="container mx-auto">
				<div className="flex gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'">
					<div className='bg-banner flex flex-col items-center lg:gap-x-12'></div>
					<div className='flex-1 text-center lg:text-left'>
						<motion.h1
							variants={fadeIn('up', 0.3)}
							initial="hidden"
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className='text-[55px] font-silkscreen lg:text-[25px] text-[#592762] '>
							<span className="text-[#cb1077] lg:text-[65px] name text-[55px] leading-4">ARHISA HOEDEMAKERS</span> <br />
							<span className="text-center font-tertiary text-[30px]">a.k.a</span> <br/>
							<span className="text-[#cb1077] lg:text-[60px] name text-[55px]">Ara</span>
						</motion.h1>

						<motion.div
							variants={fadeIn('up', 0.4)}
							initial="hidden"
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className='mb-6 text-[36px] lg:text-[45px] font-tertiary uppercase leading-[1] mt-4'>
							<span className='text-white mr-4'>I am a</span>
							<TypeAnimation
								sequence={[
									'Front-end Developer',
									2000,

								]}
								speed={50}
								className='text-accent'
								wrapper='span'
								repeat={Infinity}
							/>
						</motion.div>

						<motion.p
							variants={fadeIn('up', 0.5)}
							initial="hidden"
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className='mb-6 max-w-lg mx-auto lg:mx-0' ></motion.p>
					</div>

					<motion.div
						variants={fadeIn('down', 0.2)}
						initial="hidden"
						whileInView={'show'}
						className="hidden lg:flex flex-1 max-w-[400px] lg:max-h-[420px] justify-center items-center relative box mt-[50px]">
						<div className="content pointer-events-none">
							<img src={Image} alt="" />
							<h2 className="pb-3 font-titillium">HII THERE! 🙋<br />Want to work together? </h2>
							<Link to='contact' activeClass='active' className='pointer-events-auto cursor-pointer'>Hire me</Link>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default Banner;
