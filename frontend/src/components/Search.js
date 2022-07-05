import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} >
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search products..."
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <InputGroup.Text id="basic-addon2">
          <i className="fas fa-search"></i>
        </InputGroup.Text>
      </InputGroup>
    </Form>
  );
};

export default Search;
