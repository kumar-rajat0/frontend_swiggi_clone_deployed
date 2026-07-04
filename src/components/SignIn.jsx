import { useState } from "react";
import Login from "./Login";

function SignIn() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      {showLogin && (
        <Login
          isVisible={showLogin}
          onClose={() => setShowLogin(false)}
        />
      )}
    </>
  );
}

export default SignIn;