import React from "react";
import { Form, FloatingLabel, Row, Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./myform.css"

const Myform = () => {
  const { handleSubmit, register } = useForm();
  const navigate=useNavigate();
  const onSubmit = (values) =>{navigate('/result',{state:{values}})};
  return (
    <div class = "card">
      <h6 style={{ textAlign: "center" }} className="display-6">
        Myform
      </h6>
      <Form className = "form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <FloatingLabel controlId="season" label="Season" className="mb-4">
            <Form.Control
              type="text"
              {...register("season")}
              placeholder="Season"
            />
          </FloatingLabel>
        </div>
        <div>
          <FloatingLabel controlId="state" label="State"  className="mb-4">
            <Form.Control
              type="text"
              {...register("state")}
              placeholder="State"
            />
          </FloatingLabel>
        </div>
        <div>
          <FloatingLabel controlId="area" label="Area" className="mb-4">
            <Form.Control
              type="text"
              {...register("area")}
              placeholder="Area"
            />
          </FloatingLabel>
        </div>
        <div>
          <FloatingLabel controlId="production" label="Production" className="mb-4">
            <Form.Control
              type="text"
              {...register("production")}
              placeholder="Production"
            />
          </FloatingLabel>
        </div>
        <div>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Myform;
