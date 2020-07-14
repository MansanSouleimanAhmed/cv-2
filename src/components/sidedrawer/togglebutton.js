import React from "react";

const ToggleButton = (props) => {
    return (
        <React.Fragment>
            <button className={"toggle-button"} type={"button"} onClick={props.click}>
                <div className={"toggle-button-line"} />
                <div className={"toggle-button-line"} />
                <div className={"toggle-button-line"} />
            </button>
        </React.Fragment>
    );
};
export default ToggleButton;
