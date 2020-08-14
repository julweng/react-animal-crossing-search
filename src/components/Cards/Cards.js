import React from "react"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import { useDataValue, useReqValue } from "context"
import { getData } from "actions"
import "./Cards.css"

export const Cards = () => {
	const {
		useDataState: { data, category },
		useDataDispatch
	} = useDataValue()
  
  const {
		useReqState: { isLoading },
		useReqDispatch
	} = useReqValue()

	const handleClick = id => {
    getData(useDataDispatch, useReqDispatch, {
      currentData: data,
      prevCategory: category,
      selectedCategory: null,
      term: "",
      id
    })
  }

	return (
		<Container className="Card__Container">
			{!isLoading &&
				data.length > 0 &&
				data.map(d => (
					<Card key={d.id} onClick={() => handleClick(d.id)}>
						<Card.Img src={d.icon_uri} />
						<Card.Title>{d.name["name-USen"]}</Card.Title>
					</Card>
				))}
		</Container>
	)
}
