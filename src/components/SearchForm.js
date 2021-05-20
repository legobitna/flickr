import React, { useState, useEffect } from "react";
import { Form, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SearchForm = () => {
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    dispatch({ action: "SET_KEYWORD", payload: event.target.value });
  };

  return (
    <Form className="mb-4">
      <Form.Row>
        <Col>
          <Form.Control
            id="search-input"
            type="text"
            placeholder="Search.."
            onChange={handleInputChange}
          />
        </Col>
      </Form.Row>
    </Form>
  );
};

export default SearchForm;
