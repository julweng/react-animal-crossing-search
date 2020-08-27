import React from "react"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { shape, string } from "prop-types"
import "./Villager.css"

export const Villager = ({ data }) => {
	return (
		<Card className="Villager__Container">
			<Card.Img src={data?.image_uri} className="villager-image center-block" />
			<Card.Body className="villager-body">
				<Card.Title>{data?.name["name-USen"] ?? "unknown"}</Card.Title>
				<Row className="villager-data">
					<Col>
						<Card.Text>Personality: {data?.personality ?? "unknown"}</Card.Text>
						<Card.Text>Birthday: {data?.birthday ?? "unknown"}</Card.Text>
					</Col>
					<Col>
						<Card.Text>Species: {data?.species ?? "unknown"}</Card.Text>
						<Card.Text>Gender: {data?.gender ?? "unknown"}</Card.Text>
					</Col>
					<Col>
						<Card.Text>Subtype: {data?.subtype ?? "unknown"}</Card.Text>
						<Card.Text>Hobby: {data?.hobby ?? "unknown"}</Card.Text>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	)
}

Villager.propTypes = {
	data: shape({
		personality: string,
		birthday: string,
		species: string,
		gender: string,
		subtype: string,
		hobby: string
	})
}
