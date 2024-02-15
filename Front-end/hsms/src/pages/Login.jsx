import { useState } from "react";
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer from react-toastify
import axios from "axios"; // Import Axios
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
import { loginUser } from "../services/user-service";
import { doLogin } from "./auth";
import { useNavigate } from "react-router-dom";
import userContext from "./context/userContext";
import { useContext } from "react";

const Login = () => {
  const userContxtData = useContext(userContext);
  const navigate = useNavigate();

  const [loginDetail, setLoginDetail] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setLoginDetail({
      ...loginDetail,
      [field]: actualValue,
    });
  };

  const handleReset = () => {
    setLoginDetail({
      username: "",
      password: "",
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetail);
    //validation
    if (
      loginDetail.username.trim() === "" ||
      loginDetail.password.trim() === ""
    ) {
      toast.error("Username or Password is required !!");
      return;
    }

    //submit the data to server to generate token
    axios
      .post("http://localhost:8080/login", loginDetail) // Adjust the URL to match your backend endpoint
      .then((response) => {
        console.log(response.data);

        // Save the data to localStorage
        doLogin(response.data, () => {
          console.log("Login detail is saved to localStorage");
          // Redirect to user dashboard page
          userContxtData.setUser({
            data: response.data.user,
            login: true,
          });
          navigate("/user/dashboard");
        });

        toast.success("Login Success");
      })
      .catch((error) => {
        console.error("Login error:", error);
        if (error.response && (error.response.status === 400 || error.response.status === 404)) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong on server!!");
        }
      });
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
                      value={loginDetail.username}
                      onChange={(e) => handleChange(e, "username")}
                    />
                  </FormGroup>

                  {/* password field */}
                  <FormGroup>
                    <Label for="password">Enter password</Label>
                    <Input
                      type="password"
                      id="password"
                      value={loginDetail.password}
                      onChange={(e) => handleChange(e, "password")}
                    />
                  </FormGroup>

                  <Container className="text-center">
                    <Button color="light" outline type="submit">
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
      {/* ToastContainer for displaying notifications */}
      <ToastContainer position="bottom-left" autoClose={3000} />
    </div>
  );
};

export default Login;
