import React from 'react'
import ReactDOM from 'react-dom'
const App = () => {
    return React.createElement("div", {},"hey");
}
ReactDOM.render(React.createElement(App),document.querySelector('#root'));