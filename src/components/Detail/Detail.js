import React from "react"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
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

const mockData = {
	id: 1,
	"file-name": "seaweed",
	name: {
		"name-USen": "seaweed",
		"name-EUen": "seaweed",
		"name-EUnl": "zeewier",
		"name-EUde": "Wakame-Alge",
		"name-EUes": "alga wakame",
		"name-USes": "alga wakame",
		"name-EUfr": "wakame",
		"name-USfr": "wakamé",
		"name-EUit": "alga wakame",
		"name-CNzh": "裙带菜",
		"name-TWzh": "裙帶菜",
		"name-JPja": "ワカメ",
		"name-KRko": "미역",
		"name-EUru": "морские водоросли"
	},
	availability: {
		"month-northern": "10-7",
		"month-southern": "4-1",
		time: "",
		isAllDay: true,
		isAllYear: false,
		"month-array-northern": [10, 11, 12, 1, 2, 3, 4, 5, 6, 7],
		"month-array-southern": [4, 5, 6, 7, 8, 9, 10, 11, 12, 1],
		"time-array": [
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23
		]
	},
	speed: "Stationary",
	shadow: "Large",
	price: 600,
	"catch-phrase": "I got some seaweed! I couldn't kelp myself.",
	image_uri: "https://acnhapi.com/v1/images/sea/1",
	icon_uri: "https://acnhapi.com/v1/icons/sea/1",
	"museum-phrase":
		"Let it be known that seaweed is a misnomer of the highest order! That is, it is not a noxious weed so much as it is a marine algae most beneficial to life on land and sea. Seaweed, you see, provides essential habitat and food for all manner of marine creatures. And it creates a great deal of the oxygen we land lovers love to breath too, hoo! And yet, I can't help but shudder when the slimy stuff touches my toes during a swim. Hoot! The horror!"
}

export const Detail = () => {
	const {
		useDataState: { data, category }
	} = useDataValue()

	const [info] = data

	const hasLocationData = category === "Fish" || category === "Buts" 
    
  

	return (
		<Card className="Detail__Container" data-testid="detail-container">
			<Card.Body className="detail">
				<h3 className="item-name" data-testid="item-name">
					{info?.name["name-USen"] ?? "unknown"}
				</h3>

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
							{hasLocationData && (
								<p className="align-text-center" data-testid="item-period">
									Time:{" "}
									{info?.availability?.isAllDay
										? "AM & PM"
										: info?.availability?.time ?? "unknown"}
								</p>
							)}
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
