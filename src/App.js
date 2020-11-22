import axios from "axios";
import { useState, useEffect } from "react";
import Aside from "./components/Aside";
import Loader from "./components/Loader";

// Components
import Map from "./components/Map";
import mapOptions from "./config/map-options";

function App() {
	const [events, setEvents] = useState([]);
	const [loading, setLoading] = useState(false);
	const [center, setCenter] = useState(mapOptions.center);
	const [zoom, setZoom] = useState(mapOptions.zoom);
	const [selected, setSelected] = useState(null);

	useEffect(() => {
		const fetchEvents = async () => {
			setLoading(true);
			const res = await axios.get(
				"https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/8"
			);
			const { events } = res.data;
			setEvents(events);
			setLoading(false);
		};

		fetchEvents();
	}, []);

	function handleItemClick(index) {
		setSelected(index);
	}

	return (
		<div className="App">
			<Aside
				className="Aside"
				events={events}
				loading={loading}
				onItemClick={handleItemClick}
			/>
			{loading ? (
				<Loader />
			) : (
				<Map
					className="Map"
					events={events}
					center={center}
					zoom={zoom}
					selectedIndex={selected}
				/>
			)}
		</div>
	);
}

export default App;
