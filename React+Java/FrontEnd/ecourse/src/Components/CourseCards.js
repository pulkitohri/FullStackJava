import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import './CourseCards.css'
function CourseCards(props) {
  // coursedata = props.courses;
  return (
      <Card style={{ width: "18rem" }} key={props.id} className="bsCard col-lg-3 me-2 ms-1 shadow" >
        <Card.Img variant="top" src={props.imageUrl} height={240} className="m-1 ms-0 me-0 ps-0 pe-0"/>
        <Card.Body className="d-flex flex-column">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <a href="/course" className="btn btn-outline-dark stretched-link mt-auto">
            View Details
          </a>
        </Card.Body>
      </Card>
  );
}
export default CourseCards;
