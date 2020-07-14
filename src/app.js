import React, { useState } from "react";
import Toolbar from "./components/toolbar";
import SideDrawer from "./components/sidedrawer/sidedrawer";
import Backdrop from "./components/backdrop/backdrop";
import CV from "./components/cv";

function App() {
    const [state, setState] = useState(false);


    const drawerToggleClickHandler = () => {
        setState({ state: !state });
    };
    const backDropClickHandler = () => {
        setState(() => { state: false });
        // alert("success")
    };




    // let sideDrawer; No need anymore.I keep in case I need to understand code later.
    let backdrop;

    if (state) {

        backdrop = <Backdrop click={backDropClickHandler} />;
        // console.log(state)

    }

    return (
        <div style={{ height: "100 %" }}>
            <Toolbar drawerToggleClickHandler={drawerToggleClickHandler} />
            {/*sideDrawer No need anymore.I keep in case I need to understand code later.*/}
            {backdrop}
            <SideDrawer show={state} />;

            <main style={{ marginTop: "41px" }}>
                <CV />
            </main>

        </ div>
    );
}

export default App;

