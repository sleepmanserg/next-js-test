import Heading from "./Heading";

const PostInfo = ({ post }) => {
	const { title, body } = post || {};
	if (!post) {
		return <Heading tag="h3" text="Empty post" />
	}
	return (
		<div>
			<Heading tag="h3" text={title} />
			<p>{body}</p>
		</div>
	);
};

export default PostInfo;