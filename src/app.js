import React from 'react';
import ReactDOM from 'react-dom';

console.log("App is running...");

const appGateway = () => {
  return (
    <div>
      <h1>This is the app.</h1>
      <p>It's using Babel and React. Feel free to do what you want with it now.</p>
    </div>
  );
};

ReactDOM.render(appGateway, document.getElementById('app'));