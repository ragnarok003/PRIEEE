import React from "react";
import { Card, Row, Col } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import photo from "./arecanut.jpeg"
import './result.css';
import CropImage from "./CropImage";

const Result = () => {
  const location = useLocation();
  const back = "<"

  return (
    <>
    <a href = "/"><button id = "back">{back}</button></a>
    
    <div className="result-grid">
      <Row>
        <Col md={4}>
          <Card id = "card1">
            <Card.Body>
              <Card.Title>Entered Details</Card.Title>
              <br/>
              <Card.Text>
                <strong>Season:</strong> {location.state.values.Season||'N/A'}<br />
                <strong>State:</strong> {location.state.values.State||'N/A'}<br />
                <strong>Area:</strong> {location.state.values.Area||'N/A'}<br />
                <strong>Production:</strong> {location.state.values.Production||'N/A'}<br/>
                <strong>Annual Rainfall:</strong> {location.state.values.Annual_Rainfall||'N/A'}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>My Recommendations</Card.Title>
              <strong>Crop recommendation : </strong> {location.state.response.Crop|| 'N/A'}<br />
              
              <strong>Farming Practices :</strong>
              <ol>
                <li>Fertilizer :{Math.round(location.state.response.Fertilizer)}</li>
                <li>Pesticide:{Math.round(location.state.response.Pesticide,2)}</li>
              </ol>

              <strong>Yield :</strong> {location.state.response.Yield|| 'N/A'}<br />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <CropImage crop={location.state.response.Crop} />
            <Card.Body>
              <Card.Title>{location.state.response.Crop}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
    </div>
    </>
  );
};

export default Result;
