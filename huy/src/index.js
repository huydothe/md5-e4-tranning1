const React = require('react');
const ReactDOM = require('react-dom/client');

const name = "huy";
let element = React.createElement(
    "h1",
    {
        style : {
            textAlign:"center"
        }
    },
    name
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);

