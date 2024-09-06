import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Test } from './components/Test.tsx';
import { Home } from './components/Home.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
		],
	},
	{
		path: '/products',
		element: <App />,
		children: [
			{
				path: 'all',
				element: <Test />,
			},
			{
				path: 'basics',
				element: <Test />,
			},
			{
				path: 'patterned',
				element: <Test />,
			},
			{
				path: 'limited',
				element: <Test />,
			},
		],
	},
]);

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
