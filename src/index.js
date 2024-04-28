import './styles/variables.css';
import './index.css';

import adapter from 'webrtc-adapter';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

console.log(adapter.browserDetails.browser);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
reportWebVitals();
