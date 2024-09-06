import { Outlet } from 'react-router-dom';
import { Layout } from './components/Layout';

function App() {
	return (
		<Layout>
			<Outlet />
			<div className='min-h-screen bg-white'></div>
			<div className='min-h-screen bg-slate-300'></div>
		</Layout>
	);
}

export default App;
