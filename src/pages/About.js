import React from 'react';

// ABOUT PAGE COMPONENT - link to repo and link to portfolio website
function About() {
	return (
		<div className="body-container">
			<p className="text">
				Startpages are a number of things.{' '}
				<a
					className="text--link"
					href="https://github.com/coffee-dan/react-startpage"
					target="_blank"
					rel="noopener noreferrer"
				>
					This
				</a>{' '}
				one is a website that houses my bookmarks remotely and
				accomplishes any task I see fit to program into it. Startpages
				are fundamentally personal and come from DIY philosophy.
				Generally they contain a collection of links to frequently
				visited websites as the main element along with search bars,
				clocks, calendars, or other imbedded items that improve
				productivity.
			</p>

			<p className="text">
				For more information about me, check out my{' '}
				<a
					className="text--link"
					href="https://danielramirez.xyz"
					target="_blank"
					rel="noopener noreferrer"
				>
					portfolio
				</a>
				.
			</p>
		</div>
	);
}

export default About;
