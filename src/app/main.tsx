import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App, App1 } from './app'

ReactDOM.render(<App1 txt="this is the prop text1" cat={11} />, document.getElementById('root'));