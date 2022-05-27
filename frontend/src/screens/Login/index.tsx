import React from "react";

const Login: React.FC = () => {
    return (
        <div>
            <div>
                <label>Login:</label>
                <input
                    type={"email"}
                />
            </div>
            <div>
                <label>Senha:</label>
                <input
                    type={"password"}
                />
                <div>
                    <button onClick={() => {}}>
                        Logar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login;