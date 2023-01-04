import Link from 'next/link'
import Head from 'next/head'
import Heading from "../../components/Heading";
import Image from "next/image";

export const getStaticProps = async () => {
	const response = await fetch("http://jsonplaceholder.typicode.com/photos?_start=0&_limit=9");
	const data = await response.json();

	if (!data) {
		return {
			notFound: true
		}
	}
	return {
		props: {
			photos: data
		}
	}
}

const Gallery = ({ photos }) => {
	return (
		<div>
			<Head>
				<title>Gallery</title>
			</Head>
			<Heading tag="h2" text="Gallery" />
			<div className="row">
				{
					photos && photos.map(({ thumbnailUrl, title, albumId, id }) => {
						return <div className="col" key={id}>
							<Link href="/gallery/[id]" as={`/gallery/${id}`}>
								<Heading tag="h3" text={title} />
								<img src={thumbnailUrl} alt={title} loading="lazy" layout="responsive" />
							</Link>
						</div>
					})
				}
			</div>
		</div>
	);
};

export default Gallery;