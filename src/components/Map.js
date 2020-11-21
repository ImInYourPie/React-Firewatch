import { renderToStaticMarkup } from "react-dom/server";
import mapOptions from "../config/map-options";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { AiTwotoneFire } from "react-icons/ai";

const Map = ({ events }) => {
	const iconMarkup = renderToStaticMarkup(
		<AiTwotoneFire className="event-icon" size="2rem" color="#ff9a00" />
	);
	const customMarkerIcon = divIcon({
		html: iconMarkup
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
					<Popup></Popup>
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
