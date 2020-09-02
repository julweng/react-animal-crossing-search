import React from "react"
import { bool, number, shape, string } from "prop-types"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

export const Creature = ({ data }) => {
	const hasLocationData = data?.availability?.location
	const hasSpeedData = data?.speed
	const hasShadowData = data?.shadow
	const hasRarityData = data?.availability?.rarity
console.log(data)
	return (
		<Card className="Creature__Container" data-testid="creature-container">
			<Card.Img src={data?.image_uri} className="creature-image" />
			<Card.Body className="creature-body">
				<Card.Title>{data?.name["name-USen"] ?? "unknown"}</Card.Title>
			</Card.Body>
			<Row className="creature-data">
				<Col>
					<Card.Text>Sell Price: {data?.price ?? "unknown"}</Card.Text>
				</Col>
				{hasLocationData && (
					<Col>
						<Card.Text>Location: {data?.availability?.location ?? "unknown"}</Card.Text>
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
						<Card.Text>Rarity: {data?.availability?.rarity ?? "unknown"}</Card.Text>
					</Col>
				)}
			</Row>
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
