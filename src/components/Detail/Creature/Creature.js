import React from "react"
import { bool, number, shape, string } from "prop-types"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import "./Creature.css"

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

export const Creature = ({ data }) => {
	const hasLocationData = data?.availability?.location
	const hasSpeedData = data?.speed
	const hasShadowData = data?.shadow
	const hasRarityData = data?.availability?.rarity
	const hasTimeData = data?.availability?.time || data?.availability?.isAllDay
	console.log(hasTimeData)
	return (
		<Card className="Creature__Container" data-testid="creature-container">
			<Card.Img src={data?.image_uri} className="creature-image" />

			<Card.Body className="creature-body">
				<Card.Title>{data?.name["name-USen"] ?? "unknown"}</Card.Title>

				<Row className="creature-data">
					<Col>
						<Card.Text>Sell Price: {data?.price ?? "unknown"}</Card.Text>
					</Col>
					{hasLocationData && (
						<Col>
							<Card.Text>
								Location: {data?.availability?.location ?? "unknown"}
							</Card.Text>
						</Col>
					)}
					{hasSpeedData && (
						<Col>
							<Card.Text>Speed: {data?.speed ?? "unknown"}</Card.Text>
						</Col>
					)}
					{hasShadowData && (
						<Col>
							<Card.Text>Shadow: {data?.shadow ?? "unknown"}</Card.Text>
						</Col>
					)}
					{hasRarityData && (
						<Col>
							<Card.Text>
								Rarity: {data?.availability?.rarity ?? "unknown"}
							</Card.Text>
						</Col>
					)}
					{hasTimeData && (
						<Col>
							<Card.Text>
								Time:{" "}
								{data?.availability?.isAllDay
									? "AM & PM"
									: data?.availability?.time ?? "unknown"}
							</Card.Text>
						</Col>
					)}
				</Row>
        {["month-array-northern", "month-array-southern"].map(hemisphere => (
					<Row className="months-container" key={hemisphere}>
						<h5>North: </h5>
						{MONTHS.map((m, i) => (
							<span
								data-testid="item-months"
								key={`${hemisphere}_${i + 1}`}
								className={
									data?.availability[`${hemisphere}`].includes(i + 1)
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

Creature.propTypes = {
	data: shape({
		price: number,
		location: string,
		speed: string,
		availability: shape({
			isAllDay: bool,
			time: string,
			rarity: string
		})
	})
}
