import React from "react"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import { useDataValue, useReqValue } from "context"
import "./Cards.css"

export const Cards = () => {
  const { useDataState: { data } } = useDataValue()
  const {
		useReqState: { isLoading }
  } = useReqValue()
  
	const handleClick = () => console.log("card clicked")
  
  return (
		<Container className="Card__Container">
			{!isLoading && data.length > 0 && (
				data.map(d => (
          <Card key={d.id} onClick={handleClick}>
            <Card.Img src={d.icon_uri} />
            <Card.Title>{d.name["name-USen"]}</Card.Title>
          </Card>))
			)}
		</Container>
	)
}
