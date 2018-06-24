import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducer/reducer';
import DevTools from './DevTools';
import App from './App';

const store = createStore(reducer, DevTools.instrument());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	,document.getElementById('root'));
