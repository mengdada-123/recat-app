import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './assets/css/reset.css'
import './assets/js/rem'
// 路由配置，hashrouter 
import {HashRouter} from 'react-router-dom'

ReactDOM.render(
  // 我们使用的是hashrouter 因为后面有#号，前进后退刷新都可以 
  <HashRouter>
    <App />
  </HashRouter>,

  document.getElementById('root')
);
