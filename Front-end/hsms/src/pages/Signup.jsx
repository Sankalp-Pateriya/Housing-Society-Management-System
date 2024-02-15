import React, { useState } from "react";
import axios from "axios"; // Import axios
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    user_contact: "",
    about: "",
    role: "User", // Default role
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  // handle change
  const handleChange = (event, property) => {
    let actualValue = event.target.value;
    setData({ ...data, [property]: actualValue });
  };

  //reseting the form
  const resetData = () => {
    setData({
      name: "",
      email: "",
      password: "",
      user_contact: "",
      about: "",
      role: "User", // Reset role to default
    });
  };

  //submit the form
const submitForm = (event) => {
  event.preventDefault();

  // Call the backend API for user registration
  axios.post("http://localhost:8080/users", data) // Adjust the URL to match your backend endpoint
    .then((resp) => {
      toast.success("User is registered successfully !! user id " + resp.data.id);
      // Reset the form after successful registration
      resetData();
    })
    .catch((error) => {
      toast.error("Failed to register user: " + error.message);
      setError({
        errors: error,
        isError: true,
      });
    });
};


  return (
    <div>
      <Container>
        <Row className="mt-4">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" inverse>
              <CardHeader>
                <h3> Fill Information to Register !!</h3>
              </CardHeader>

              <CardBody>
                <Form onSubmit={submitForm}>
                  {/* Name field */}
                  <FormGroup>
                    <Label for="name">Enter Name</Label>
                    <Input
                      type="text"
                      placeholder="Enter here"
                      id="name"
                      onChange={(e) => handleChange(e, "name")}
                      value={data.name}
                      invalid={error.errors?.response?.data?.name ? true : false}
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.name}
                    </FormFeedback>
                  </FormGroup>

                  {/* email field */}
                  <FormGroup>
                    <Label for="email">Enter Email</Label>
                    <Input
                      type="email"
                      placeholder="Enter here"
                      id="email"
                      onChange={(e) => handleChange(e, "email")}
                      value={data.email}
                      invalid={error.errors?.response?.data?.email ? true : false}
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.email}
                    </FormFeedback>
                  </FormGroup>

                  {/* password field */}
                  <FormGroup>
                    <Label for="password">Enter password</Label>
                    <Input
                      type="password"
                      placeholder="Enter here"
                      id="password"
                      onChange={(e) => handleChange(e, "password")}
                      value={data.password}
                      invalid={error.errors?.response?.data?.password ? true : false}
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.password}
                    </FormFeedback>
                  </FormGroup>

                  {/* contact field */}
                  {/* <FormGroup>
                    <Label for="user_contact">Enter phone</Label>
                    <Input
                      type="number"
                      placeholder="Enter here"
                      id="user_contact"
                      onChange={(e) => handleChange(e, "user_contact")}
                      value={data.phone}
                      invalid={error.errors?.response?.data?.user_contact ? true : false}
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.phone}
                    </FormFeedback>
                  </FormGroup> */}

                  {/* about field */}
                  {/* <FormGroup>
                    <Label for="about">Write something about yourself</Label>
                    <Input
                      type="textarea"
                      placeholder="Enter here"
                      id="about"
                      style={{ height: "250px" }}
                      onChange={(e) => handleChange(e, "about")}
                      value={data.about}
                      invalid={error.errors?.response?.data?.about ? true : false}
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.about}
                    </FormFeedback>
                  </FormGroup> */}

                  {/* Role field */}
                  <FormGroup>
                    <Label for="role">Select Role</Label>
                    <Input
                      type="select"
                      name="role"
                      id="role"
                      value={data.role}
                      onChange={(e) => handleChange(e, "role")}
                    >
                      <option value="User">User</option>
                      <option value="Secretary">Secretary</option>
                    </Input>
                  </FormGroup>

                  <Container className="text-center">
                    <Button outline color="light" type="submit">Register</Button>
                    <Button onClick={resetData} color="secondary" type="reset" className="ms-2">Reset</Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <ToastContainer position="bottom-left" autoClose={3000} />
    </div>
  );
};

export default Signup;
