import { useState } from "react";
import { toast } from "react-toastify";
import {
  Label,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
  Button,
} from "reactstrap";
import { doLogin } from "./auth";
import { useNavigate } from "react-router-dom";


import axios from "axios"; // Import Axios

const Login = () => {
  
  const navigate = useNavigate();

  const [loginDetail, setLoginDetail] = useState({
    username: "",
    password: "",
  });

  const handleClick = () => {
    navigate(`/`);
  };

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setLoginDetail({
      ...loginDetail,
      [field]: actualValue,
    });
  };

  const handleReset = () => {
    setLoginDetail({
      email: "",
      password: "",
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetail);
    // validation
    if (loginDetail.email.trim() === "" || loginDetail.password.trim() === "") {
      toast.error("Username or Password is required !!");
      return;
    }

    // submit the data to server to generate token
    axios
      .post("http://localhost:8080/users/signIn", loginDetail)
      .then((response) => {
        const data = response.data;
        console.log(data);

        localStorage.setItem("userData", JSON.stringify(data.user));
        if (data.role === "ADMIN") {
          localStorage.setItem("auth", "admin");
          
        } else {
          localStorage.setItem("auth", "1");
        }
        localStorage.setItem("name",data.name);
        //localStorage.setItem("auth", "1");
        // save the data to localstorage
        doLogin(data, () => {
          console.log("login detail is saved to localstorage");
          
          toast.success("Login Success");
          handleClick(); // Navigate to home upon successful login
          window.location.reload();
        });
      })
      .catch((error) => {
        console.error(error);
        if (error.response && (error.response.status === 500 || error.response.status === 404)) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong on the server !!");
        }
      });
    handleReset();
  };

  return (
    <div>
      <Container>
        <Row className="mt-4">
          <Col
            sm={{
              size: 6,
              offset: 3,
            }}
          >
            <Card color="dark" inverse>
              <CardHeader>
                <h3>Login Here !!</h3>
              </CardHeader>

              <CardBody>
                <Form onSubmit={handleFormSubmit}>
                  {/* Email field */}
                  <FormGroup>
                    <Label for="email">Enter Email</Label>
                    <Input
                      type="text"
                      id="email"
                      name="email"
                      value={loginDetail.email}
                      onChange={(e) => handleChange(e, "email")}
                    />
                  </FormGroup>

                  {/* Password field */}
                  <FormGroup>
                    <Label for="password">Enter password</Label>
                    <Input
                      type="password"
                      id="password"
                      name="password"
                      value={loginDetail.password}
                      onChange={(e) => handleChange(e, "password")}
                    />
                  </FormGroup>

                  <Container className="text-center">
                    <Button
                      onClick={handleFormSubmit}
                      className="ms-2"
                      outline
                      color="secondary"
                    >
                      Login
                    </Button>
                    <Button
                      onClick={handleReset}
                      className="ms-2"
                      outline
                      color="secondary"
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

export default Login;
