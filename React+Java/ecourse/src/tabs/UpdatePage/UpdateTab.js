import axios from "axios";
import { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { BASE_URL } from "../../services/helpers";

function UpdateTab() {
  let [page, setPage] = useState(0);
  const [data, setData] = useState({});
  const setField = (field, value) => {
    setData({
      ...data,
      [field]: value,
    });
  };
  

  const findById = (id) =>{
    axios.get(`${BASE_URL}/course/${id}`).then((response) => {
      setData(response.data)
       //console.log(data)
      setPage(1)
    });
  
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`${BASE_URL}/update`, data).then((response) => {
      //console.log(form);
    });
  };

  return (
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <div className=""></div>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-4">
                <h3 className="fw-bold mb-2">Knowledge Express</h3>
                <p className=" mb-2">Please Enter the Id and update fields</p>
                <Form className="mb-3">
                  {page === 0 && (
                    <>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Course Id
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Course ID"
                          onChange={(e) => setField("id", e.target.value)}
                        />
                      </Form.Group>
                      <div className="d-grid">
                        <Button
                          variant="primary"
                          type="button"
                          onClick={()=> findById(data.id)}
                        >
                          Proceed
                        </Button>
                      </div>
                    </>
                  )}

                  {page === 1 && (
                    <>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Course Title
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Course Title"
                          defaultValue= {data.title}
                          onChange={(e) => setField("title", e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Image Url
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Thumbnail Url"
                          defaultValue= {data.imageUrl}
                          onChange={(e) => setField("imageUrl", e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Description
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Description"
                          defaultValue= {data.description}
                          onChange={(e) => setField("description", e.target.value)}
                          
                        />
                      </Form.Group>
                      <div className="d-flex">
                        <Button
                          variant="secondary"
                          type="button"
                          onClick={() => setPage(0)}
                          className="me-auto"
                        >
                          Go Back
                        </Button>
                        <Button
                          variant="primary"
                          type="button"
                          onClick={handleSubmit}
                        >
                          Update Details
                        </Button>
                      </div>
                    </>
                  )}
                </Form>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default UpdateTab;
