import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

import Swal from "sweetalert2";

import { BiEnvelope, BiPhone } from 'react-icons/bi';

import { GoLocation } from 'react-icons/go';

import { useLoadScript } from 'react-google-maps';

function Contact() {
const {} = useLoadScript({googleMapsApiKey: ""});

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
				<div className="row">
					<div>
						<div className="email">
							<BiEnvelope />
							<a href="mailto:arahoedemakers@gmail.com">
								<p>Email: <br /> arahoedemakers@gmail.com</p>
							</a>
						</div>

						<div className="phone">
							<BiPhone />
							<a href="tel:+32471081257">
								<p>Call:<br /> +32471081257 </p>
							</a>
						</div>

						<div className="location">
							<GoLocation />




						</div>
					</div>









					{/* Form */}
					<motion.form
						variants={fadeIn('left', 0.3)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className='flex-1 border rounded-2xl flex-col gap-y-6 pb-24 p-6 items-start'
						ref={form} onSubmit={sendEmail}>
						<input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' name="from_name" type="text" placeholder='Your name' />
						<input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' name="from_email" type="text" placeholder='Your email' />
						<textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' name="message" placeholder='Your message'></textarea>
						<button className='btn btn-lg'>Send message</button>
					</motion.form>
				</div>
			</div>

		</section>

	)
}

export default Contact;
