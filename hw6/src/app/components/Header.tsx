import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
	return (
		<header className="header">
			<nav className="navigation">
				<ul>
					<li>
						<Link href="/#info">About</Link>
					</li>
					<li>
						<Link href="/#skills">Skills</Link>
					</li>
					<li>
						<Link href="/#projects">Projects</Link>
					</li>
					<li>
						<Link href="/#contacts">Contacts</Link>
					</li>
					<li>
						<Link href="/comic">Comic</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
