import React from "react";

function Header() {
	return (
		<header className="py-8">
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					<a href="#">Ara H.</a>
					<button className="btn btn-sm">
						Work with me
					</button>
				</div>
			</div>
		</header>
		);
};

export default Header;
