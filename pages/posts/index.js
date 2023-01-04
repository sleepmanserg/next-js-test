import Head from 'next/head'
import Heading from "../components/Heading";
import Link from "next/link";
import styles from "../../styles/Posts.module.scss";

export const getStaticProps = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=9');
	const data = await response.json();

	if (!data) {
		return {
			notFound: true
		}
	}

	return {
		props: {
			posts: data
		}
	};
}

const Posts = ({ posts }) => {
	console.log(posts)
	return (
		<div className={styles.posts}>
			<Head>
				<title>Posts</title>
			</Head>
			<Heading text="Posts list:"></Heading>
			<ul>
				{posts && posts.map(({ id, title }) => (
					<li key={id}>
						<Link href={`/posts/${id}`}>{title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Posts;