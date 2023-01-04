import Heading from "./Heading";
import Image from "next/image";


const Photo = ({ photo }) => {
	const { title, id, thumbnailUrl } = photo || {};

	if (!photo) {
		return <Heading tag="h3" text="Empty photo" />
	}
	return (
		<div>
			<Heading tag="h4" text={photo.title} />
			<img src={thumbnailUrl} alt={photo.title} loading="lazy" layout="responsive" />
		</div>
	);
};

export default Photo;