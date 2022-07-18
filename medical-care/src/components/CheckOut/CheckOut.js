import React from "react";
import { Form, Button } from "react-bootstrap";

const CheckOut = () => {
  return (
    <div>
      <Form className="w-50 mx-auto p-5 rounded mt-5 bg-success p-2 text-dark bg-opacity-10 ">
        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" placeholder="phone number" />
        </Form.Group>
        <Button variant="primary" type="submit">
          CheckOut
        </Button>
      </Form>
    </div>
  );
};

export default CheckOut;
