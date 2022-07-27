import React, { useState } from "react";

const Like = () => {
  const [like, setLike] = useState(false);
  let count = 0;

  return (
    <div className="like-div">
      <button
        className="button-49"
        role="button"
        onClick={() => {
          setLike((prevLike) => !prevLike);
        }}
      >
        Like:{like ? "❤️" : "♡"}
      </button>
    </div>
  );
};

export default Like;
