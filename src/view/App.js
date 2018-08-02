import React from 'react';
import ReactDOM from 'react-dom';
import CoursesPage from './course/CoursesPage';

class App extends React.Component{

  render(){
    return(
      <div>
        <h1>Hello</h1>
        <CoursesPage />
      </div>
    )
  }
}

export default App;