

// require("./module1");
// require("./module2");


import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
    render() {
        return (
            <h2>It Works really fine!!! </h2>
        );
    }
}

ReactDOM.render( <Layout/>,
    document.getElementById("app") );