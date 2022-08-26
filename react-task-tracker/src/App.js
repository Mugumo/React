import React from 'react';
import Header from './components/Headers';
import Tasks from './components/Tasks';

const App = () => {
 
    return (
      <div className="container">
      <Header name='Zack' />
      <div className='list'>
        <Tasks />
      </div>
      </div>
    );
  
}

export default App;
