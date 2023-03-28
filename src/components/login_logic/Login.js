import React, { useState } from "react";

import gmx_img from "../../img/gmx_loginn.jpeg";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ password, email });
  };
  return (
    <div className="login_container">
      <div className="login_items">
        <div className="email">
          <div className="envelopeLogo mt-5 color-white">
            <i className="fa-solid fa-envelope"></i>
          </div>
          <p className="email-paragraph mt-4">E-Mail</p>
          <div>
            <input
              type="text"
              className="rounded border py-1 border-gray-300 w-full bg-white pl-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="paragraph">Kostenlos registrieren!</p>
          </div>
        </div>

        <div className="passwort-group relative">
          <div className="">
            <div>
              <input
                className="rounded border py-1 border-gray-300 w-full bg-white pl-2"
                type={showPassword ? "text" : "password"}
                label="Password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
              />

              <button
                className="absolute top-1 background-red-500 left-40"
                type="button"
                onClick={togglePasswordVisibility}
                aria-label="Toggle password visibility"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
            <p className="paragraph">Passwort Vergessen?</p>
          </div>

          <div>
            <button className="passwordBtn" onClick={handleSubmit}>
              Login
            </button>
          </div>
        </div>

        <div>
          <img src={gmx_img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
