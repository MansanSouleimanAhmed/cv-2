import React from "react";
import ReactDOM from "react-dom";
import "./css/app.min.css";
import App from "./app.js";
export default function Index() {
    return (
        <React.Fragment>
            <App />
        </React.Fragment>
    );
}

ReactDOM.render(<Index />, document.querySelector("#app"));
