import React, { useState } from "react"

import { Form, FormControl, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const SearchBox = () => {
  const history = useNavigate()
  const [keyword, setKeyword] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history(`/search/${keyword}`)
    } else {
      history("/")
    }
  }
  return (
    <Form onSubmit={submitHandler} inline>
      <FormControl
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Найти товар..."
        className="mr-sm-2 ml-sm-5"
      ></FormControl>
    </Form>
  )
}

export default SearchBox
