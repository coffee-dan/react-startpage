import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseProvider } from './context/firebase';
import './index.css';

ReactDOM.render(
	<FirebaseProvider>
		<App />
	</FirebaseProvider>,
	document.getElementById('root')
);
