import React from "react"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import { useDataValue } from "context"
import "./Detail.css"

const MONTHS = [
	{ 1: "Jan" },
	{ 2: "Feb" },
	{ 3: "Mar" },
	{ 4: "Apr" },
	{ 5: "May" },
	{ 6: "Jun" },
	{ 7: "Jul" },
	{ 8: "Aug" },
	{ 9: "Sep" },
	{ 10: "Oct" },
	{ 11: "Nov" },
	{ 12: "Dec" }
]

export const Detail = () => {
	const {
		useDataState: { data, category }
  } = useDataValue()
  
	const [info] = data

	return (
		<Card className="Detail__Container" data-testid="detail-container">
			<Card.Body className="detail">
				<h3 className="item-name" data-testid="item-name">{info?.name["name-USen"] ?? "unknown"}</h3>

				<Row>
					<Col>
						<Card.Img src={info?.icon_uri} className="center-image" />
					</Col>

					<Col className="align-self-center info">
						<Col>
							<p className="align-text-center" data-testid="item-price">
								Sell Price: {info?.price ?? "unknown"}
							</p>
						</Col>
						<Col>
							<p className="align-text-center" data-testid="item-location">
								Location: {info?.availability?.location ?? "unknown"}
							</p>
						</Col>
					</Col>
					<Col className="align-self-center info">
						<Col>
							<p className="align-text-center" data-testid="item-period">
								Time:{" "}
								{info?.availability?.isAllDay
									? "AM & PM"
									: info?.availability?.time ?? "unknown"}
							</p>
						</Col>
						<Col>
							<p className="align-text-center" data-testid="item-rarity">
								Rarity: {info?.availability?.rarity ?? "unknown"}
							</p>
						</Col>
					</Col>
				</Row>
				{["month-array-northern", "month-array-southern"].map(hemisphere => (
					<Row className="months-container" key={hemisphere}>
						<h5>North: </h5>
						{MONTHS.map((m, i) => (
							<span
                data-testid="item-months"
								key={`${hemisphere}_${i + 1}`}
								className={
									info?.availability[`${hemisphere}`].includes(i + 1)
										? "active-month"
										: "non-active-month"
								}
							>
								{m[`${i + 1}`]}
							</span>
						))}
					</Row>
				))}
			</Card.Body>
		</Card>
	)
}

export default Detail
