import React, { useEffect } from "react"
import Form from "react-bootstrap/Form"
import { useFishValue, useReqValue  } from "context"
import { getFish } from "helpers"

export const SearchBar = () => {
  const { useFishState, useFishDispatch } = useFishValue()
const { useReqState, useReqDispatch } = useReqValue()
  

console.log(useFishState, useReqState)
  useEffect(() => {
    getFish(useFishDispatch, useReqDispatch, null)
  }, [])

  return(<div>search bar</div>)
}