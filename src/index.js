import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Header from './Header';

const App = () => {
  return (
    <div>
      <Header />
      <h1>My React Application</h1>
      <h2>My Second Application</h2>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));