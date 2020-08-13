import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import { useDataValue, useReqValue } from "context"
import { getData } from "actions"
import { getKeyByValue } from "helpers"
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
  
  const { useDataState, useDataDispatch } = useDataValue()
	const { useReqDispatch } = useReqValue()

  const data = {
    currentData: useDataState.data,
    prevCategory: useDataState.category,
    id: null
  }

	const handleChange = e => {
		setSearchText(e.target.value.trim())
	}
	const handleSelect = e => {
    setSearchCategory(e.target.value.trim())
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    const selectedCategory = getKeyByValue(CATEGORY, searchCategory)
    data.selectedCategory = selectedCategory
    data.term = searchText

    getData(useDataDispatch, useReqDispatch, data)
  }

	return (
		<Form onSubmit={handleSubmit} data-testid="search-form">
			<Form.Row>
				<Form.Group as={Col} controlId="formSearchText">
					<Form.Label>Search</Form.Label>
					<Form.Control
						size="lg"
						type="text"
						placeholder="Enter your search"
						value={searchText}
						onChange={handleChange}
            data-testid="search-input"
					/>
				</Form.Group>
				<Form.Group as={Col} controlId="formSearchCategory">
					<Form.Label>Category</Form.Label>
					<Form.Control
						as="select"
						size="lg"
						value={searchCategory}
						onChange={handleSelect}
            data-testid="category-select"
					>
						{Object.values(CATEGORY).map(cat => (
							<option key={cat} data-testid={cat}>{cat}</option>
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
