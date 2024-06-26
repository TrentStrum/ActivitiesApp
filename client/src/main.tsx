import React from 'react'
import ReactDOM from 'react-dom/client'
import 'semantic-ui-css/semantic.min.css';
import './app/layout/styles.css';
import ActivityContextProvider from './app/stores/ActivityContext';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router/Routes';


ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ActivityContextProvider>
			<RouterProvider router={router} />
		</ActivityContextProvider>
	</React.StrictMode>
);
