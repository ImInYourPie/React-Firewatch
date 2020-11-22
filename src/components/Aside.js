// Style
import "../styles/aside.css";

// Components
import Brand from "./Brand";
import Card from "./Card";

// Libraries
import moment from "moment";

const Aside = ({ events, onItemClick }) => {
	const cards = events.map((event, index) => {
		const { id, title } = event;
		const date = moment(event.geometries[0].date).format("LLL");
		const lat = event.geometries[0].coordinates[1];
		const lng = event.geometries[0].coordinates[0];
		const source = {
			id: event.sources[0].id,
			url: event.sources[0].url
		};
		return (
			<Card
				key={index}
				index={index}
				id={id}
				lat={lat}
				lng={lng}
				title={title}
				date={date}
				source={source}
				onItemClick={onItemClick}
			/>
		);
	});

	return (
		<div className="aside">
			<Brand />
			<hr className="ruler" />
			<div className="event-feed">{cards}</div>
		</div>
	);
};

export default Aside;
