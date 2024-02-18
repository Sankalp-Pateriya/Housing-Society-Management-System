import { useState } from "react";
import { Link } from "react-router-dom";
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
import { doLogin } from "./auth";
import { useNavigate } from "react-router-dom";
import userContext from "./context/userContext";
import { useContext } from "react";
import { faAlignRight } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const userContxtData = useContext(userContext);
  const navigate = useNavigate();

  const [loginDetail, setLoginDetail] = useState({
    email: "",
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

        sessionStorage.setItem("userData", JSON.stringify(data));
        if (data.role === "ADMIN") {
          sessionStorage.setItem("auth", "admin");
          
        }else if (data.role === "SECRETARY") {
          sessionStorage.setItem("auth", "secretary");
          
        }
        
        else {
          sessionStorage.setItem("auth", "user");
        }
        sessionStorage.setItem("name",data.name);
        //sessionStorage.setItem("auth", "1");
        // save the data to sessionStorage
        doLogin(data, () => {
          console.log("login detail is saved to sessionStorage");
          
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
    <div style={{ backgroundColor: "beige" }}>
      <Container style={{ backgroundColor: "beige" }}>
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
                <Form >
                  {/* Email field */}
                  <FormGroup>
                    <Label for="email">Enter Email</Label>
                    <Input
                      type="text"
                      id="email"
                      value={loginDetail.email}
                      onChange={(e) => handleChange(e, "email")}
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
                    <Button onClick={handleFormSubmit} className="btn btn-secondary ms-2"  type="submit">
                      Login
                    </Button>
                    <Button
                      onClick={handleReset}
                      className="ms-2"
                      backgroundColor="secondary"
                    >
                      Reset
                    </Button>
                  </Container>
                  <div style={{ textAlign: "right", marginTop: "10px" }}> {/* Add margin-top for spacing */}
    <a href="/signup">Register User</a>
  </div>
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
