

import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
    render() {
        return (
        	<div>
				<h2>This is the new App !!! </h2>
            	<h3>It Works really fine !!! </h3>
            	<h4>Last Title !! </h4>
            	<h4>Gustavo Martinez  </h4>
            </div>
        );
    }
}

ReactDOM.render( <Layout/>,
    document.getElementById("app") );