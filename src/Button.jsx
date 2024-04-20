import React from "react";

function Button(props) {
    return (
        <button className="register-btn">
            {props.link}
        </button>
    );
}

export default Button;