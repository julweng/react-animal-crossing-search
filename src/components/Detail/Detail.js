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

const MOCK_DATA = {
	data: [
		{
			id: 1,
			"file-name": "bitterling",
			name: {
				"name-USen": "bitterling",
				"name-EUen": "bitterling",
				"name-EUde": "Bitterling",
				"name-EUes": "amarguillo",
				"name-USes": "amarguillo",
				"name-EUfr": "bouvière",
				"name-USfr": "bouvière",
				"name-EUit": "rodeo",
				"name-EUnl": "bittervoorn",
				"name-CNzh": "红目鲫",
				"name-TWzh": "紅目鯽",
				"name-JPja": "タナゴ",
				"name-KRko": "납줄개",
				"name-EUru": "горчак"
			},
			availability: {
				"month-northern": "11-3",
				"month-southern": "5-9",
				time: "",
				isAllDay: true,
				isAllYear: false,
				location: "River",
				rarity: "Common",
				"month-array-northern": [11, 12, 1, 2, 3],
				"month-array-southern": [5, 6, 7, 8, 9],
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
			shadow: "Smallest (1)",
			price: 900,
			"price-cj": 1350,
			"catch-phrase":
				"I caught a bitterling! It's mad at me, but only a little.",
			"museum-phrase":
				"Bitterlings hide their eggs inside large bivalves—like clams—where the young can stay safe until grown. The bitterling isn't being sneaky. No, their young help keep the bivalve healthy by eating invading parasites! It's a wonderful bit of evolutionary deal making, don't you think? Each one keeping the other safe... Though eating parasites does not sound like a happy childhood... Is that why the fish is so bitter?",
			image_uri: "https://acnhapi.com/v1/images/fish/1",
			icon_uri: "https://acnhapi.com/v1/icons/fish/1"
		}
	]
}

const mockCategory = "fish"

export const Detail = () => {
	/*(const {
		useDataState: { data, category }
	} = useDataValue()*/
	const [info] = MOCK_DATA.data

	return (
		<Card className="Detail__Container" data-testid="detail-container">
			<Card.Body className="detail">
				<h3 className="item-name">{info.name["name-USen"]}</h3>

				<Row>
					<Col className="center-image">
						<Card.Img src={info.icon_uri} />
					</Col>

					<Col className="align-self-center info">
						<Col>
							<p className="align-text-left">
								Sell Price: {info.price ?? "unknown"}
							</p>
						</Col>
						<Col>
							<p className="align-text-left">
								Location: {info.availability?.location ?? "unknown"}
							</p>
						</Col>
						<Col>
							<p className="align-text-left">
								Time:{" "}
								{info.availability?.isAllDay
									? "AM & PM"
									: info.availability?.time}
							</p>
						</Col>
						<Col>
							<p className="align-text-left">
								Rarity: {info.availability?.rarity ?? "unknown"}
							</p>
						</Col>
					</Col>
					</Row>
						<Row className="months-container">
							<h5>North</h5>
							{MONTHS.map((m, i) => (
								<span
									key={`north_${i + 1}`}
									className={
										info.availability["month-array-northern"].includes(i + 1)
											? "active-month"
											: ""
									}
								>
									{m[`${i + 1}`]}
								</span>
							))}
						</Row>

						<Row className="months-container">
							<h5>South</h5>
							{MONTHS.map((m, i) => (
								<span
									key={`south_${i + 1}`}
									className={
										info.availability["month-array-southern"].includes(i + 1)
											? "active-month"
											: ""
									}
								>
									{m[`${i + 1}`]}
								</span>
							))}
						</Row>

			
			</Card.Body>
		</Card>
	)
}

export default Detail
