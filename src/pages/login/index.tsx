import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuthorization } from "../../Application/authorization-context";
import { LoginCard, LoginTitle } from "./style";

const Login: React.FC = () => {
    const [uname, setUname] = useState("");
    const [pswd, setPswd] = useState("");
    const [error, setError] = useState("");
    let history = useHistory();
    const { handleAuthentication } = useAuthorization();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (uname === "foo" && pswd === "bar") {
            setError("");
            handleAuthentication(true);
            history.push("./home");
        } else setError("Please enter correct Username and Password");
    };

    return (
        <div className="d-flex justify-content-center">
            <LoginCard className="card d-flex justify-content-center">
                <LoginTitle>
                    <h2>Login</h2>
                </LoginTitle>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            className="form-control-sm"
                            type="text"
                            name={"username"}
                            id="uname"
                            autoComplete="off"
                            value={uname}
                            onChange={(e) => setUname(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            className="form-control-sm"
                            type="password"
                            name={"password"}
                            autoComplete="off"
                            id="pswd"
                            value={pswd}
                            onChange={(e) => setPswd(e.target.value)}
                        />
                    </div>
                    {error && (
                        <div className="alert alert-danger mx-5" role="alert">
                            {error}
                        </div>
                    )}
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={!(uname && pswd)}
                    >
                        Submit
                    </button>
                </form>
            </LoginCard>
        </div>
    );
};

export default Login;
