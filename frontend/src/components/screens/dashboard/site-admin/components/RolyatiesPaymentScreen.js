// import React, { useState } from 'react';
// import { Card, Row, Col, Container, Button, Form, Nav } from 'react-bootstrap';
// import { FaDollarSign, FaRegListAlt, FaFileInvoiceDollar } from 'react-icons/fa';

// const RoyaltiesPaymentScreen = () => {
//   // State to control active tab
//   const [activeTab, setActiveTab] = useState('summary');

//   // Render content based on active tab
//   const renderContent = () => {
//     switch (activeTab) {
//       case 'summary':
//         return (
//           <Row>
//             <Col md={4}>
//               <Card className="shadow-sm mb-4">
//                 <Card.Body>
//                   <Card.Title className="text-primary mb-4">
//                     <FaDollarSign size={24} className="me-2" />
//                     Total Royalties Due
//                   </Card.Title>
//                   <Card.Text className="text-success">
//                     <strong>$500,000</strong>
//                   </Card.Text>
//                   <Button variant="primary">View Details</Button>
//                 </Card.Body>
//               </Card>
//             </Col>

//             <Col md={4}>
//               <Card className="shadow-sm mb-4">
//                 <Card.Body>
//                   <Card.Title className="text-warning mb-4">
//                     <FaRegListAlt size={24} className="me-2" />
//                     Pending Payments
//                   </Card.Title>
//                   <Card.Text>
//                     <strong>3 Payments</strong>
//                   </Card.Text>
//                   <Button variant="warning">Review Pending</Button>
//                 </Card.Body>
//               </Card>
//             </Col>

//             <Col md={4}>
//               <Card className="shadow-sm mb-4">
//                 <Card.Body>
//                   <Card.Title className="text-info mb-4">
//                     <FaFileInvoiceDollar size={24} className="me-2" />
//                     Recent Invoices
//                   </Card.Title>
//                   <Card.Text>
//                     <strong>5 Invoices</strong>
//                   </Card.Text>
//                   <Button variant="info">View Invoices</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         );
//       case 'payment':
//         return (
//           <Card className="shadow-sm">
//             <Card.Body>
//               <Card.Title>Make a Payment</Card.Title>
//               <Form>
//                 <Form.Group controlId="formMineralName">
//                   <Form.Label>Mineral Name</Form.Label>
//                   <Form.Control type="text" placeholder="Enter mineral name" />
//                 </Form.Group>

//                 <Form.Group controlId="formAmount">
//                   <Form.Label>Amount</Form.Label>
//                   <Form.Control type="number" placeholder="Enter amount" />
//                 </Form.Group>

//                 <Form.Group controlId="formPaymentDate">
//                   <Form.Label>Payment Date</Form.Label>
//                   <Form.Control type="date" />
//                 </Form.Group>

//                 <Form.Group controlId="formPaymentMethod">
//                   <Form.Label>Payment Method</Form.Label>
//                   <Form.Control as="select">
//                     <option>National Bank</option>
//                     <option>FDH Bank</option>
//                     <option>Standard Bank</option>
//                   </Form.Control>
//                 </Form.Group>

//                 <Button variant="primary" className="mt-3" type="submit">
//                   Submit Payment
//                 </Button>
//               </Form>
//             </Card.Body>
//           </Card>
//         );
//       default:
//         return <div>Select an option</div>;
//     }
//   };

//   return (
//     <div className="royalties-payment-screen">
//       <Container fluid>
//         <Card>
//           <h3 className="text-center mb-4">Mineral Royalties Payment Management</h3>
//         </Card>

//         {/* Horizontal Navigation */}
//         <Nav variant="tabs" defaultActiveKey="summary" className="mb-4">
//           <Nav.Item>
//             <Nav.Link eventKey="summary" onClick={() => setActiveTab('summary')}>
//               Summary
//             </Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link eventKey="payment" onClick={() => setActiveTab('payment')}>
//               Make a Payment
//             </Nav.Link>
//           </Nav.Item>
//         </Nav>

//         {/* Rendered Content */}
//         {renderContent()}
//       </Container>
//     </div>
//   );
// };

// export default RoyaltiesPaymentScreen;

import React, { useState } from 'react';
import { Card, Row, Col, Container, Button, Form, Nav, Table } from 'react-bootstrap';
import { FaDollarSign, FaRegListAlt, FaFileInvoiceDollar } from 'react-icons/fa';

const RoyaltiesPaymentScreen = () => {
  // State to control active tab
  const [activeTab, setActiveTab] = useState('summary');

  // Sample payment history data
  const paymentHistoryData = [
    { id: 1, mineral: 'Gold', amount: '$150,000', date: '2024-01-15', method: 'National Bank' },
    { id: 2, mineral: 'Copper', amount: '$75,000', date: '2024-02-10', method: 'FDH Bank' },
    { id: 3, mineral: 'Nickel', amount: '$100,000', date: '2024-03-22', method: 'Standard Bank' }
  ];

  // Render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'summary':
        return (
          <Row>
            <Col md={4}>
              <Card className="shadow-sm mb-4">
                <Card.Body>
                  <Card.Title className="text-primary mb-4">
                    <FaDollarSign size={24} className="me-2" />
                    Total Royalties Due
                  </Card.Title>
                  <Card.Text className="text-success">
                    <strong>$500,000</strong>
                  </Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="shadow-sm mb-4">
                <Card.Body>
                  <Card.Title className="text-warning mb-4">
                    <FaRegListAlt size={24} className="me-2" />
                    Pending Payments
                  </Card.Title>
                  <Card.Text>
                    <strong>3 Payments</strong>
                  </Card.Text>
                  <Button variant="warning">Review Pending</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="shadow-sm mb-4">
                <Card.Body>
                  <Card.Title className="text-info mb-4">
                    <FaFileInvoiceDollar size={24} className="me-2" />
                    Recent Invoices
                  </Card.Title>
                  <Card.Text>
                    <strong>5 Invoices</strong>
                  </Card.Text>
                  <Button variant="info">View Invoices</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        );
      case 'payment':
        return (
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Make a Payment</Card.Title>
              <Form>
                <Form.Group controlId="formMineralName">
                  <Form.Label>Mineral Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter mineral name" />
                </Form.Group>

                <Form.Group controlId="formAmount">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control type="number" placeholder="Enter amount" />
                </Form.Group>

                <Form.Group controlId="formPaymentDate">
                  <Form.Label>Payment Date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>

                <Form.Group controlId="formPaymentMethod">
                  <Form.Label>Payment Method</Form.Label>
                  <Form.Control as="select">
                    <option>National Bank</option>
                    <option>FDH Bank</option>
                    <option>Standard Bank</option>
                  </Form.Control>
                </Form.Group>

                <Button variant="primary" className="mt-3" type="submit">
                  Submit Payment
                </Button>
              </Form>
            </Card.Body>
          </Card>
        );
      case 'history':
        return (
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Payment History</Card.Title>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Mineral</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Payment Method</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentHistoryData.map((payment) => (
                    <tr key={payment.id}>
                      <td>{payment.id}</td>
                      <td>{payment.mineral}</td>
                      <td>{payment.amount}</td>
                      <td>{payment.date}</td>
                      <td>{payment.method}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        );
      default:
        return <div>Select an option</div>;
    }
  };

  return (
    <div className="royalties-payment-screen">
      <Container fluid>
        <Card>
          <h3 className="text-center mb-4">Mineral Royalties Payment Management</h3>
        </Card>

        {/* Horizontal Navigation */}
        <Nav variant="tabs" defaultActiveKey="summary" className="mb-4">
          <Nav.Item>
            <Nav.Link eventKey="summary" onClick={() => setActiveTab('summary')}>
              Summary
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="payment" onClick={() => setActiveTab('payment')}>
              Make a Payment
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="history" onClick={() => setActiveTab('history')}>
              Payment History
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {/* Rendered Content */}
        {renderContent()}
      </Container>
    </div>
  );
};

export default RoyaltiesPaymentScreen;
