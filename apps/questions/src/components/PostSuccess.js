import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

/**
 * Indication when the form has been successfully submitted
 */

library.add(faCheck);

const PostSuccess = () => {
  return (
    <div className="container">
      <div className="animated fadeIn faster">
        <div className="text-center alert alert-success alert-dismissible">
          <FontAwesomeIcon icon="check" /> Thanks! Your information was
          successfully saved.
        </div>
      </div>
    </div>
  );
};

export default PostSuccess;
