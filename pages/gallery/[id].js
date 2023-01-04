import Photo from "../../components/Photo";

export const getServerSideProps = async (context) => {
	const { id } = context.query;
	const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
	const data = await response.json();

	if (!data) {
		return {
			notFound: true
		}
	}

	return {
		props: {
			photo: data
		}
	};

}

const photo = ({ photo }) => {
	return (
		<div>
			<Photo photo={photo} />
		</div>
	);
};

export default photo;