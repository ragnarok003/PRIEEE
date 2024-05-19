import React from "react";
import { Form, FloatingLabel, Row, Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./myform.css"

const Myform = () => {
  const { handleSubmit, register } = useForm();
  const navigate=useNavigate();
  const onSubmit = (values) =>{
    console.log(values)
    axios.post('http://127.0.0.1:5000/api/recommend',
      values,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    .then(response => {
      console.log(response.data);
      navigate('/result', { state: { response: response.data,values } });
    })
    .catch(error => {
      console.error("There was an error!", error);
    });
    
  };
  return (
    <div className= "card">
      <h6 style={{ textAlign: "center",}} className="display-6">
        Myform
      </h6>
      <Form className = "form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <FloatingLabel controlId="Crop_Year" label="Crop Year" className="mb-4">
            <Form.Control
              type="text"
              {...register("Crop_Year")}
              placeholder="Crop_Year"
            />
          </FloatingLabel>
        </div>
        <div>
          <FloatingLabel controlId="season" label="Season" className="mb-4">
            <Form.Control
              type="text"
              {...register("Season")}
              placeholder="Season"
            />
          </FloatingLabel>
        </div>
        <div>
          <FloatingLabel controlId="state" label="State"  className="mb-4">
            <Form.Control
              type="text"
              {...register("State")}
              placeholder="State"
            />
          </FloatingLabel>
        </div>
        <div>
          <FloatingLabel controlId="area" label="Area" className="mb-4">
            <Form.Control
              type="text"
              {...register("Area")}
              placeholder="Area"
            />
          </FloatingLabel>
        </div>
        <div>
          <FloatingLabel controlId="production" label="Production" className="mb-4">
            <Form.Control
              type="text"
              {...register("Production")}
              placeholder="Production"
            />
          </FloatingLabel>
        </div>
        <div>
          <FloatingLabel controlId="Annual_Rainfall" label="Annual Rainfall" className="mb-4">
            <Form.Control
              type="text"
              {...register("Annual_Rainfall")}
              placeholder="Annual_Rainfall"
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
