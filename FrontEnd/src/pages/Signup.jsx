import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
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
    role: "" // Added role field to the state
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  // handle change
  const handleChange = (event, property) => {
    //dynamic setting the values
    setData({ ...data, [property]: event.target.value });
  };

  //reseting the form
  const resetData = () => {
    setData({
      name: "",
      email: "",
      password: "",
      contact: "",
      about: "",
      role: ""
    });
  };

  //submit the form
  const submitForm = (event) => {
    event.preventDefault();

    axios.post("http://localhost:8080/users", data)
      .then((resp) => {
        console.log(resp);
        console.log("success log");
        toast.success("User is registered successfully !! user id " + resp.data.id);
        resetData(); // Reset form data
      })
      .catch((error) => {
        console.log(error);
        console.log("Error log");
        //handle errors in proper way
        setError({
          errors: error.response.data,
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
                      name="name"
                      onChange={(e) => handleChange(e, "name")}
                      value={data.name}
                      invalid={
                        error.errors?.response?.data?.name ? true : false
                      }
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
                      name="email"
                      onChange={(e) => handleChange(e, "email")}
                      value={data.email}
                      invalid={
                        error.errors?.response?.data?.email ? true : false
                      }
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
                      name="password"
                      onChange={(e) => handleChange(e, "password")}
                      value={data.password}
                      invalid={
                        error.errors?.response?.data?.password ? true : false
                      }
                    />

                    <FormFeedback>
                      {error.errors?.response?.data?.password}
                    </FormFeedback>
                  </FormGroup>

                  {/* contact field */}
                  <FormGroup>
                    <Label for="password">Enter Contact</Label>
                    <Input
                      type="number"
                      placeholder="Enter here"
                      id="contact"
                      name="contact"
                      onChange={(e) => handleChange(e, "contact")}
                      value={data.contact}
                      invalid={
                        error.errors?.response?.data?.contact ? true : false
                      }
                    />

                    <FormFeedback>
                      {error.errors?.response?.data?.contact}
                    </FormFeedback>
                  </FormGroup>
                  
                  

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
    <option value="secretary">Secretary</option>
    <option value="user">User</option>
  </Input>
</FormGroup>



                  <Container className="text-center">
                    <Button onClick={submitForm}
                      color="secondary"
                      type="submit"
                      className="ms-2">
                      Register
                    </Button>
                    <Button
                      onClick={resetData}
                      color="secondary"
                      type="reset"
                      className="ms-2"
                    >
                      Reset
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;

