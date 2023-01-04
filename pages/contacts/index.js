import Link from 'next/link'
import Head from 'next/head'
import Heading from "../../components/Heading";

export const getStaticProps = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await response.json();

	if (!data) {
		return {
			notFound: true
		}
	}

	return {
		props: {
			contacts: data
		}
	};
}

const Contacts = ({ contacts }) => {
	return (
		<div>
			<Head>
				<title>Contacts</title>
			</Head>
			<Heading text="Contact list:" />
			<ul>
				{
					contacts && contacts.map(({ id, name, email }) => (
						<li key={id}>
							<Link href={`/contacts/${(id)}`}>{name}</Link>
						</li>
					))
				}
			</ul>
		</div>
	);
};

export default Contacts;