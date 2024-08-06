import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function LikeDislikeButton({ like }) {
  const [counts, setCounts] = useState(0);

  const ldcounter = () => {
    setCounts(counts + 1);
  };

  let customClass;
  let customIcon;
  if (like) {
    customClass = "btn btn-success mx-1";
    customIcon = faThumbsUp;
  } else {
    customClass = "btn btn-dark mx-1";
    customIcon = faThumbsDown;
  }

  return (
    <>
      <button className={customClass} onClick={ldcounter}>
        <FontAwesomeIcon icon={customIcon} /> {counts}
      </button>
    </>
  );
}
