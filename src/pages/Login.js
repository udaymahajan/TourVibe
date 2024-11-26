import React, { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div style={styles.container}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Sign In</button>
      </form>
    </div>
  );
};

const styles = {
  container: { padding: "20px", maxWidth: "400px", margin: "auto" },
  form: { display: "flex", flexDirection: "column" },
  input: { margin: "10px 0", padding: "10px", fontSize: "16px" },
  button: { padding: "10px", background: "#2980b9", color: "#fff", border: "none", cursor: "pointer" },
};

export default SignIn;
