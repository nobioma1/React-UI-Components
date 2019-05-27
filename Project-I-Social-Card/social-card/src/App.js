import React from 'react';
import './App.css';
import Header from './components/HeaderComponents/HeaderContainer';

const App = () => {
  let avatar = {
    link:
      'https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png',
    alt: 'lambda logo'
  };
  let content = {
    title: 'Lambda School',
    handle: '@LambdaSchool',
    text: `Let's learn React by building simple interfaces with components. Don't to overthink it, 
      just keep it simple and have fun. Once you are comfortable using components you are well on 
      your way mastering React.`
  };

  return (
    <div className="main-container">
      <h3>Welcome to React Social Card!</h3>
      {/*<p>
        Begin by exploring the `components` directory. You'll notice we have a
        few files that we've already included in there to get you started right
        away building components. You'll need to make sure you include your
        components that you build in this file to watch your app come to life
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>*/}
      <div className="container">
        <Header avatar={avatar} content={content} />
      </div>
    </div>
  );
};

export default App;
