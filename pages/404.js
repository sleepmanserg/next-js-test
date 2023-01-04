import Head from 'next/head'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Heading from "./components/Heading";

const Error = () => {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.push('/');
		}, 3000)
	}, [router]);
	return (
		<div>
			<Head>
				<title>Error</title>
			</Head>
			<Heading text="404" />
			<Heading tag="h2" text="something went wrong" />
			<Heading tag="h3" text="Redirecting to home page..." />
		</div>
	);
};

export default Error;