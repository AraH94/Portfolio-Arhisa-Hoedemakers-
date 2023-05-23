import React, { useRef } from 'react';

// download cv
import emailjs from '@emailjs/browser';

// motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

// alert when email send
import Swal from "sweetalert2";

// icons
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';


function Contact() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_ddmqcwf', 'template_wayy0u9', form.current, 'euy9XDwDTldkX1fRm')
			.then((result) => {
				console.log("result" + result.text);
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: "Your mail has been sent",
					showConfirmButton: false,
					timer: 1500
				})
			}, (error) => {
				console.log(error.text);
			});
		e.target.reset();
	};

	return (
		<section className='py-16 lg:section' id='contact'>
			<div className="container mx-auto">
				<h2 className='h2'>Contact me</h2>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-x-14">

					{/* Form */}
					<motion.form
						variants={fadeIn('left', 0.3)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className='lg:row-span-2 lg:col-span-2'
						ref={form} onSubmit={sendEmail}>
						<input className='bg-white border rounded p-3 border-white py-3 mb-3 outline-none w-full placeholder:text-[#cb1178]  focus:border-[#8475A9] transition-all' name="from_name" type="text" placeholder='Your name' />
						<input className='bg-white border rounded p-3 border-white py-3 mb-3 outline-none w-full placeholder:text-[#cb1178]  focus:border-[#8475A9] transition-all' name="from_email" type="text" placeholder='Your email' />
						<textarea className='bg-white border rounded p-3 h-64 border-white outline-none w-full placeholder:text-[#cb1178] focus:border-[#8475A9] transition-all resize-none mb-2' name="message" placeholder='Your message'></textarea>
						<button className='btn btn-sm mb-5 ml-44 lg:m-0 md:ml-[300px]'>Send message</button>
					</motion.form>

					{/* Info */}
					<motion.div
						variants={fadeIn('right', 0.3)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className='p-6 text-center info text-white border rounded'>

						<div className="email pb-6 ">
							<a href="mailto:arahoedemakers@gmail.com" >
								<h4 className='font-bold'>Email:</h4>
								<p>arahoedemakers@gmail.com</p>
							</a>
						</div>

						<div className="phone pb-6">
							<a href="tel:+32471081257">
								<h4 className='font-bold'>Call:</h4>
								<p>+32 471 08 12 57 </p>
							</a>
						</div>

						<div className="location ">
							<div>
								<h4 className='font-bold'>Location:</h4>
								<p>3680 Maaseik, Limburg, Belgium</p>
							</div>
						</div>

						<motion.div
							variants={fadeIn('up', 0.7)}
							initial="hidden"
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 mt-5 lg:pl-24'>
							<a href="https://www.facebook.com/ara.hoedemakers/" target='_blank'>
								<FaFacebook />
							</a>
							<a href="https://www.linkedin.com/in/arhisa-hoedemakers-839423226/" target='_blank'>
								<FaLinkedin />
							</a>
							<a href="https://github.com/AraH94" target='_blank'>
								<FaGithub />
							</a>
						</motion.div>

					</motion.div>


				</div>
			</div>
			<iframe className='mt-8' width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=3680%20Maaseik+(My%20place)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a></iframe>
		</section>

	)
}

export default Contact;
