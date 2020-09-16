import React from "react";
import { Nav } from "react-bootstrap";

import './dashboard.css'

const Sidebar = props => {
    return (
        <>
          <div className="sidebar-sticky">

            <Nav className="col-md-12 d-md-block sidebar"
                activeKey="/home"
                onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
              <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
              </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="disabled" disabled>
                    Disabled
                  </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
        </>
    );
  };

  export default Sidebar