import React from "react";

const Button = ({disabled, className, onClick, children}) => {
    return (
        <button className={className} onClick={onClick} disabled={disabled}>{children}</button>
    )
}

export default Button;