import React from "react";
import Logo from '../images/logo.png';

// import icons
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare, BsChatSquareText } from 'react-icons/bs';
// link
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header className="py-8">
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					<a href="#" className="logo">
						<img src={Logo} alt="" />
					</a>

					<nav>
						<div class="hidden w-full md:block md:w-auto" id="navbar-default">
							<ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
								<li>
									<a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
								</li>
								<li>
									<a href="/About" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
								</li>
								<li>
									<a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
								</li>
								<li>
									<a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact Me</a>
								</li>
							</ul>
						</div>
					</nav>

					<button className="btn btn-sm">
						My resume
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;


