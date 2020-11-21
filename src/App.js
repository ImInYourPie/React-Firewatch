import axios from "axios";
import { useState, useEffect } from "react";

// Components
import Map from "./components/Map";

function App() {
	const [events, setEvents] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchEvents = async () => {
			setLoading(true);
			const res = await axios.get(
				"https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
			);
			const { events } = res.data;
			setEvents(events);
			console.log(events);
			setLoading(false);
		};

		fetchEvents();
	}, []);

	return (
		<div className="App">
			{loading ? <h1>Loading...</h1> : <Map events={events} />}
		</div>
	);
}

export default App;
