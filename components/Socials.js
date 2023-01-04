import Head from 'next/head'

const Socials = ({ socials }) => {
	if (!socials) {
		return null;
	}
	return (
		<div>
			<ul className="socials">
				{
					socials && socials.map(({ id, icon, path }) => {
						return <li key={id}>
							<a href={path} target="_blank" rel="noopener noreferrer" aria-label={path}>
								<i className={`fab fa-${icon}`} aria-hidden="true"></i>
							</a>
						</li>
					})
				}
			</ul>
		</div>
	);
};

export default Socials;