import "../styles/card.css";

const Card = ({ index, title, date, source, onItemClick }) => {
	return (
		<div className="event-card" onClick={(e) => onItemClick(index)}>
			<h4 className="card-title">{title}</h4>
			<p className="card-text">{date}</p>
			<p className="card-text">
				Source:{" "}
				<a href={source.url} target="_blank" rel="noreferrer">
					{source.id}
				</a>
			</p>
		</div>
	);
};

export default Card;
