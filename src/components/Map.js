import { renderToStaticMarkup } from "react-dom/server";
import mapOptions from "../config/map-options";
import { MapContainer, TileLayer } from "react-leaflet";
import Leaflet, { divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { AiTwotoneFire } from "react-icons/ai";
import moment from "moment";
import Marker from "./Marker";

// Style
import "../styles/map.css";

const Map = ({ events, center, zoom, selectedIndex }) => {
	const corner1 = Leaflet.latLng(-90, -200);
	const corner2 = Leaflet.latLng(90, 200);
	const bounds = Leaflet.latLngBounds(corner1, corner2);

	const iconMarkup = renderToStaticMarkup(
		<AiTwotoneFire className="event-icon" size="1.5rem" color="#ff9a00" />
	);
	const customMarkerIcon = divIcon({
		html: iconMarkup,
		popupAnchor: [5, 0]
	});

	const markers = events.map((event, index) => {
		const { id, title } = event;
		const date = moment(event.geometries[0].date).format("LLL");
		const lat = event.geometries[0].coordinates[1];
		const lng = event.geometries[0].coordinates[0];
		const source = {
			id: event.sources[0].id,
			url: event.sources[0].url
		};

		return (
			<Marker
				key={index}
				id={id}
				title={title}
				date={date}
				lat={lat}
				lng={lng}
				source={source}
				customMarkerIcon={customMarkerIcon}
				openPopup={selectedIndex === index}
			/>
		);
	});

	return (
		<MapContainer
			className="map"
			center={center}
			zoom={zoom}
			maxBoundsViscosity={1.0}
			maxBounds={bounds}
			scrollWheelZoom={mapOptions.isScrollZoom}
		>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}"
				accessToken={mapOptions.key}
			/>
			{markers}
		</MapContainer>
	);
};

export default Map;
