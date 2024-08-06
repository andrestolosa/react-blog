import React from "react";

export default function Button({ buttonText, indice, readMore }) {
  return <button className="btn btn-danger mx-1" onClick={() => readMore(indice)}>{buttonText}</button>;
}
