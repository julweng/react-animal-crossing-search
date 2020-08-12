import React, { useEffect, useState } from "react"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Jumbotron from "react-bootstrap/Jumbotron"

import { useFishValue, useReqValue } from "context"
import { getFish } from "actions"

import "./SearchBar.css"

const CATEGORY = [
	"Fish",
	"Sea Creatures",
	"Bugs",
	"Fossils",
	"Villagers",
	"Icons",
  "Art",
  "Items"
]

export const SearchBar = () => {
	/*const { useFishState, useFishDispatch } = useFishValue()
	const { useReqState, useReqDispatch } = useReqValue()

  console.log(useFishState, useReqState)
	useEffect(() => {
		getFish(useFishDispatch, useReqDispatch, null)
	}, [])
*/
	const [searchText, setSearchText] = useState("")
	const [searchCategory, setSearchCategory] = useState("Fish")

	const handleChange = e => {
		setSearchText(e.target.value)
	}
	const handleSelect = e => {
		setSearchCategory(e.target.value)
	}
	return (
		<Jumbotron>
			<Container className="Title__Container">
				<h1>Search Animal Crossing 🌱</h1>
			</Container>
			<Container className="Form__Container">
				<Form>
					<Form.Row>
						<Form.Group as={Col} controlId="formSearchText">
							<Form.Label>Search</Form.Label>
							<Form.Control
								size="lg"
								type="text"
								placeholder="Enter your search"
								value={searchText}
								onChange={e => handleChange(e)}
							/>
						</Form.Group>
						<Form.Group as={Col} controlId="formSearchCategory">
							<Form.Label>Category</Form.Label>
							<Form.Control
								as="select"
								size="lg"
								value={searchCategory}
								onChange={e => handleSelect(e)}
							>
								{CATEGORY.map(cat => (
									<option key={cat}>{cat}</option>
								))}
							</Form.Control>
						</Form.Group>
					</Form.Row>
				</Form>
			</Container>
		</Jumbotron>
	)
}
