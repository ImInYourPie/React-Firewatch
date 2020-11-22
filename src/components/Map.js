import { renderToStaticMarkup } from "react-dom/server";
import mapOptions from "../config/map-options";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Leaflet, { divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { AiTwotoneFire } from "react-icons/ai";
import moment from "moment";

// Style
import "../styles/map.css";

const Map = ({ events }) => {
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
		const date = moment(event.geometries[0].date).format("LLL");
		const lat = event.geometries[0].coordinates[1];
		const lng = event.geometries[0].coordinates[0];
		const source = {
			id: event.sources[0].id,
			url: event.sources[0].url
		};

		return (
			event.categories[0].id === 8 && (
				<Marker
					className="marker"
					key={index}
					position={[lat, lng]}
					icon={customMarkerIcon}
				>
					<Popup>
						<h3>{event["title"]}</h3>
						<p className="popup-text">{date}</p>
						<p className="popup-text">
							Source:{" "}
							<a href={source.url} target="_blank" rel="noreferrer">
								{source.id}
							</a>
						</p>
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
			maxBoundsViscosity={1.0}
			maxBounds={bounds}
			scrollWheelZoom={mapOptions.isScrollZoom}
		>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}"
				accessToken={process.env.REACT_APP_MAPS_KEY}
			/>
			{markers}
		</MapContainer>
	);
};

export default Map;
