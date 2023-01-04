import PostInfo from '../components/PostInfo';

export const getServerSideProps = async (context) => {
	const { id } = context.query;
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	const data = await response.json();

	if (!data) {
		return {
			notFound: true
		}
	}

	return {
		props: {
			post: data
		}
	};

}

const post = ({ post }) => {
	return (
		<div>
			<PostInfo post={post} />
		</div>
	);
};

export default post;