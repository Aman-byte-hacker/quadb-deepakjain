import React from "react";
import { useHistory } from "react-router-dom";

const Main = ({ name, type, lang, img }) => {
  const width = {
    width: "18rem",
  };
  let history = useHistory();
  const Change = () => {
    history.push("/summary");
  };
  
  return (
    <>
      <div className="card" style={width}>
        <img src={img} alt="image" />
        <div className="card-body">
          <h5 className="card-title"> {name} </h5>{" "}
          <div className="detail">
            <p className="card-text "> type: {type} </p>{" "}
            <p className="card-text"> language: {lang} </p>{" "}
          </div>{" "}
          <button className="btn" onClick={Change}>
            {" "}
            Go somewhere{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default Main;
