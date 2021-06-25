import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 无load刷新
if (module && module.hot) {
  module.hot.accept();
}
ReactDOM.render(<App />, document.getElementById('root'));

