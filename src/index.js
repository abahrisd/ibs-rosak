import {render} from 'react-dom';
import './index.css';
import routes from './routes'
//import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap!
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(routes, document.getElementById('root'));

if (module.hot) {
    module.hot.accept('./routes', () => {
        render(routes, document.getElementById('root'))
    })
}

//registerServiceWorker();
