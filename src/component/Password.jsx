import React, { useState } from "react";

export const Password = () => {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState(false);

  const hideShow = () => {
    setPassword(!password);
  };

  return (
    <div className="TogglePassword">
    <div className="innertoggle">
      <input
        type={password ? "text" : "password"}
        value={input}
        placeholder="enter text"
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={hideShow}>{password ? 'Hide Password' : 'Show Password'}</button>
      </div>
      </div>
  );
};
