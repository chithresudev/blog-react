import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    AuthService.login(email, password).then((data) => {
      if (data.success) navigate("/admin-portal/dashboard");
    });
  };

  useEffect(() => {
    if (AuthService.getCurrentUser()?.token) {
      navigate("/admin-portal/dashboard");
    }
  });

  return (
    <section className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: "27%" }}>
        <div className="card-body ">
          <h3 className="card-title mb-3">Login</h3>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              onChange={(element) => setEmail(element.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="inputPassword5" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="inputPassword5"
              className="form-control"
              aria-describedby="passwordHelpBlock"
              onChange={(element) => setPassword(element.target.value)}
            />
          </div>

          <div className="mb-3 d-flex mx-auto">
            <button
              onClick={() => handleSubmit()}
              className="btn btn-info btn-sm"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
