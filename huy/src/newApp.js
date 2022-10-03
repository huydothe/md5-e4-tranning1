const React = require('react');
const ReactDOM = require('react-dom/client');

const name = "your_name";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1 style={{textAlign:"center"}}>
    {name}
</h1>)