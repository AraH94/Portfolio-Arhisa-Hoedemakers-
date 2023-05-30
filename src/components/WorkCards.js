import React from "react";

function WorkCards({ title, image, content, url }) {
	const handleCLick = () => {
		window.open(url, "_blank");
	}

	return (
			<div>
				<div className='cursor-pointer'>
					{/* image */}
					<div className='group relative overflow-hidden border-2 border-white/50'>
						{/* overlay */}
						<div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300' onClick={handleCLick} ></div>
						{/* img */}
						<img className='group-hover:scale-105 transition-all duration-500' src={image} alt="" />
						{/* title */}
						<div className='absolute -bottom-full group-hover:bottom-12 transition-all duration-500 z-50 text-[12px] lg:text-[22px] text-center text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
							<span className='text-gradient'>{title}</span>
						</div>
						{/* content */}
						<div className='absolute -bottom-full group-hover:bottom-72 transition-all duration-700 z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[150%] text-center'>
							<span className='text-1xl text-white'>{content}</span>
						</div>
					</div>
				</div>
			</div>
	)}

export default WorkCards;
