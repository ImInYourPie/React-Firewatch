import { renderToStaticMarkup } from "react-dom/server";
import mapOptions from "../config/map-options";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { AiTwotoneFire } from "react-icons/ai";
import moment from "moment";

const Map = ({ events }) => {
	const iconMarkup = renderToStaticMarkup(
		<AiTwotoneFire className="event-icon" size="1.5rem" color="#ff9a00" />
	);
	const customMarkerIcon = divIcon({
		html: iconMarkup,
		popupAnchor: [5, 0]
	});

	const markers = events.map((event, index) => {
		return (
			event.categories[0].id === 8 && (
				<Marker
					className="marker"
					key={index}
					position={[
						event.geometries[0].coordinates[1],
						event.geometries[0].coordinates[0]
					]}
					icon={customMarkerIcon}
				>
					<Popup>
						<h3>{event.title}</h3>
						<h5>{moment(event.geometries[0].date).format("LLL")}</h5>
					</Popup>
				</Marker>
			)
		);
	});

	return (
		<MapContainer
			className="map"
			center={mapOptions.center}
			zoom={mapOptions.zoom}
			scrollWheelZoom={mapOptions.isScrollZoom}
		>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{markers}
		</MapContainer>
	);
};

export default Map;
