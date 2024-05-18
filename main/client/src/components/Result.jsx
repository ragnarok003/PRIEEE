import React from "react";
import { Card, Row, Col } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import photo from "./arecanut.jpeg"
import './result.css';

const Result = () => {
  const location = useLocation();
  const data = location.state.values || {};
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
                <strong>Season:</strong> {data.season || 'N/A'}<br />
                <strong>State:</strong> {data.state || 'N/A'}<br />
                <strong>Area:</strong> {data.area || 'N/A'}<br />
                <strong>Production:</strong> {data.production || 'N/A'}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>My Recommendations</Card.Title>
              <strong>Crop recommendation : </strong> {data.season || 'N/A'}<br />
              
              <strong>Farming Practices :</strong>
              <ol>
                <li>abc</li>
                <li>abc</li>
              </ol>

              <strong>Yield :</strong> {data.area || 'N/A'}<br />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <img src = {photo}/>
            <Card.Body>
              <Card.Title>Crop Image</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
    </div>
    </>
  );
};

export default Result;
