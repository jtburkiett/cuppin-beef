import React from 'react';
import './App.css';
import logo from "./cupp.png";

const Beef = () => {
    const [appLogoBounce2] = React.useState(0);
    return (
    <img
        src={logo}
        className="App-logo"
        alt="spinning ball of sweet, sweet beef"
        appLogoBounce2 = {'App-logo-bounce2'}
    />
    )
}

export default Beef
