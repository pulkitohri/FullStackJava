import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTextArea,
} from "mdb-react-ui-kit";
import './AddNew.css'
import axios from "axios";
import { BASE_URL } from "../../services/helpers";

function AddNew() {
    const [form , setForm] = useState({})
    const setField = (field , value) => {
         setForm({
            ...form,
            [field]:value
         })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${BASE_URL}/add`,form).then((response) => {
            console.log(response)})


    }




  return (
    <div className="containerBG">
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol lg="9" className="my-5">
            <h3 class="mb-4">Add a new course</h3>
            <MDBCard>
              <MDBCardBody className="px-4">
                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Course Title</h6>
                  </MDBCol>

                  <MDBCol md="9" className="pe-5">
                    <MDBInput
                      label="Course Title"
                      size="lg"
                      id="form1"
                      type="text"
                      onChange={(e) => setField('title' , e.target.value)}
                    />
                  </MDBCol>
                </MDBRow>

                <hr className="mx-n3" />

                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Link of Image</h6>
                  </MDBCol>

                  <MDBCol md="9" className="pe-5">
                    <MDBInput
                      label="Image link"
                      size="lg"
                      id="form2"
                      type="text"
                      onChange={(e) => setField('imageUrl' , e.target.value)}
                    />
                  </MDBCol>
                </MDBRow>

                <hr className="mx-n3" />

                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Course Description</h6>
                  </MDBCol>

                  <MDBCol md="9" className="pe-5">
                    <MDBTextArea
                      label="Description"
                      id="textAreaExample"
                      rows={3}
                      onChange={(e) => setField('description' , e.target.value)}
                    />
                  </MDBCol>
                </MDBRow>

                <hr className="mx-n3" />

                <MDBBtn className="mx-auto" size="lg" 
                onClick={handleSubmit}
                a href="/home"
                >
                  Add to Database
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
export default AddNew;
