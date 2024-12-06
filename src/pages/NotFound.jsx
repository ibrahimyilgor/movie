import React from "react";

import { useNavigate } from "react-router-dom";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f9f9f9",
    margin: 0,
  },
  message: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#89A8B2",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.message}>Record could not be found</h1>
      <button style={styles.button} onClick={() => navigate(`/`)}>
        Back to the list
      </button>
    </div>
  );
};

export default NotFoundPage;
