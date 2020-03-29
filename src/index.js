import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Header from './header';

const App = () => {
  return (
    <div>
      <Header />
      <hr/>
      <h1>My React Application</h1>
      <h2>My Second Application</h2>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));