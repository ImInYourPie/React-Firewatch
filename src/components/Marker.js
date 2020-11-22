import { useRef, useEffect } from "react";
import { Marker, Popup } from "react-leaflet";

// Style
import "../styles/marker.css";

const MapMarker = ({
	index,
	lat,
	lng,
	customMarkerIcon,
	title,
	date,
	source,
	openPopup
}) => {
	const markerRef = useRef(null);

	useEffect(() => {
		if (markerRef.current.leafletElement && openPopup)
			markerRef.current.leafletElement.openPopup();
	}, [openPopup]);

	return (
		<Marker
			className="marker"
			key={index}
			position={[lat, lng]}
			icon={customMarkerIcon}
			ref={markerRef}
		>
			<Popup className="popup">
				<h3 cl>{title}</h3>
				<p className="popup-text">{date}</p>
				<p className="popup-text">
					Source:{" "}
					<a href={source.url} target="_blank" rel="noreferrer">
						{source.id}
					</a>
				</p>
			</Popup>
		</Marker>
	);
};

export default MapMarker;
