import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Sidebar from "./sidebar";
import './dashboard.css'

const Dashboard = props => {
    return (
        <>
         <Container fluid>
                <Row>
                    <Col xs="2" id="sidebar-wrapper">      
                      <Sidebar />
                    </Col>
                    <Col xs="10" id="page-content-wrapper">
                        Details Column
                    </Col> 
                </Row>

            </Container>
        </>
        );
  };
  
  export default Dashboard