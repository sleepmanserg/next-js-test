import Link from 'next/link'
import ContactInfo from '../components/ContactInfo';
import Head from 'next/head'
import Heading from "../components/Heading";

export const getServerSideProps = async (context) => {
	const { id } = context.query;
	const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
	const data = await response.json();

	if (!data) {
		return {
			notFound: true
		}
	}

	return {
		props: {
			contact: data
		}
	};
}

const contact = ({ contact }) => {
	return (
		<div>
			<Head>
				<title>Contact page</title>
			</Head>
			<ContactInfo contact={contact} />
		</div>
	);
};

export default contact;