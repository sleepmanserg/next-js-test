import Heading from "./Heading";

const ContactInfo = ({ contact }) => {
	const { name, email, phone } = contact || {};
	const { street, city, suite, zipcode } = contact.address || {};
	if (!contact) {
		return <Heading tag="h3" text="Empty contact" />
	}
	return (
		<div>
			<Heading tag="h4" text={name} />
			<div>
				<strong>Email: </strong>
				{email}
			</div>
			<div>
				<strong>Address: </strong>
				{`${street} ${city}, ${suite} ${zipcode}`}
			</div>
		</div>
	);
};

export default ContactInfo;