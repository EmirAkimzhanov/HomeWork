import React, { useState } from "react";

const Pass = () => {
  const [password, setPassword] = useState("fdsafdsafasfdsa");
  let strong;
  //   if (password.length > 6) {
  //     strong = <div>strong password</div>;
  //   } else {
  //     strong = <div>weak password</div>;
  //   }
  return (
    <div className="pass">
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
      />

      {password.length < 6 && password.length > 0 && <div>weak password</div>}
      {password.length > 6 && <div>strong password</div>}
      {/* {strong} */}
    </div>
  );
};

export default Pass;
