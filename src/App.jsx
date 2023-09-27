import React from 'react';
import {initAxiosInterceptors} from './helpers/auth/auth'

//style
import 'css/index.css'
import 'scss/style.scss'
import '@fortawesome/fontawesome-free/css/all.css'
import 'css/bulma-switch.min.css'
import '@creativebulma/bulma-divider/dist/bulma-divider.min.css'

//redux
import { Provider } from 'react-redux';
import store from 'store';
//Routes
import Routes from 'routes/Routes'

//necesario para agregar automaticamente al axios, el token de authenticacion (se agrega a todas las peticiones que se hagan por http)
initAxiosInterceptors()

function App() {
  return (    
    <Provider store = {store}> 
        <Routes/>
      </Provider>
  );
}

export default App;
