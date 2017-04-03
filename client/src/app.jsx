// import React from 'react';
// import ReactDom from 'react-dom';
// import HomePage from './components/HomePage.jsx';

// //ReactDom.render(<h1>Hello from React</h1>, document.getElementById('react-app'));

// ReactDom.render(React.createElement(<HomePage/>, document.getElementById('react-app')));


import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory, Router } from 'react-router';
import routes from './routes.js';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

ReactDom.render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router history={browserHistory} routes={routes} />
  </MuiThemeProvider>), document.getElementById('react-app'));