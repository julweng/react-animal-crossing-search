import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import { useDataValue, useReqValue } from "context"
import { getData } from "actions"

import "./SearchBar.css"

const CATEGORY = {
	fish: "Fish",
	sea: "Sea Creatures",
	bugs: "Bugs",
	fossils: "Fossils",
	villagers: "Villagers",
	art: "Art",
	houseware: "Houseware"
}

export const SearchBar = () => {
	const [searchText, setSearchText] = useState("")
	const [searchCategory, setSearchCategory] = useState("Fish")

  /*
  const { useDataDispatch } = useDataValue()
	const { useReqDispatch } = useReqValue()

	useEffect(() => {
		getData(useDataDispatch, useReqDispatch, searchCategory)
  }, [])
  */

	const handleChange = e => {
		setSearchText(e.target.value)
	}
	const handleSelect = e => {
    setSearchCategory(e.target.value)
	}

	return (
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
						{Object.values(CATEGORY).map(cat => (
							<option key={cat}>{cat}</option>
						))}
					</Form.Control>
				</Form.Group>
			</Form.Row>
      <Button type="submit" size="lg">
    Submit
  </Button>
		</Form>
	)
}
