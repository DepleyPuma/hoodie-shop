import { Link, NavLink } from 'react-router-dom';
import LOGO from '/images/hoodie_logo-1.jpg';
import { Wrapper } from './Wrapper';
import { FaOpencart } from 'react-icons/fa6';

export function Navigation({ products }: { products: string[] }) {
	return (
		<nav className='hidden fixed md:flex justify-center items-center h-[130px] w-full bg-black text-white z-50'>
			<Wrapper>
				<div className='flex justify-between items-center px-4'>
					<div className='w-20 rounded-md bg-black overflow-hidden'>
						<Link to={'/'}>
							<img
								className='w-full hover:scale-110 transition-transform duration-300'
								src={LOGO}
								alt='logo'
							/>
						</Link>
					</div>
					<ul className='flex justify-center items-center gap-10 uppercase text-xl font-bold'>
						<li>
							<NavLink to='/products/all'>
								{({ isActive }) => (
									<div className='flex flex-col justify-center items-center group'>
										All
										<div
											className={`h-[3px] w-[120%] ${
												isActive
													? 'bg-white'
													: 'group-hover:bg-white transition-colors duration-200'
											}`}
										></div>
									</div>
								)}
							</NavLink>
						</li>
						<li>
							<NavLink to='/products/basics'>
								{({ isActive }) => (
									<div className='flex flex-col justify-center items-center group'>
										Basics
										<div
											className={`h-[3px] w-[120%] ${
												isActive
													? 'bg-white'
													: 'group-hover:bg-white transition-colors duration-200'
											}`}
										></div>
									</div>
								)}
							</NavLink>
						</li>
						<li>
							<NavLink to='/products/patterned'>
								{({ isActive }) => (
									<div className='flex flex-col justify-center items-center group'>
										Patterned
										<div
											className={`h-[3px] w-[120%] ${
												isActive
													? 'bg-white'
													: 'group-hover:bg-white transition-colors duration-200'
											}`}
										></div>
									</div>
								)}
							</NavLink>
						</li>
						<li>
							<NavLink to='/products/limited'>
								{({ isActive }) => (
									<div className='flex flex-col justify-center items-center group'>
										Limited
										<div
											className={`h-[3px] w-[120%] ${
												isActive
													? 'bg-white'
													: 'group-hover:bg-white transition-colors duration-200'
											}`}
										></div>
									</div>
								)}
							</NavLink>
						</li>
					</ul>
					<div>
						<Link className='relative' to={'/cart'}>
							<FaOpencart className='text-6xl' />
							{products.length > 0 && (
								<span className='absolute -top-4 -right-2 px-2 bg-white text-black rounded-full'>
									{products.length}
								</span>
							)}
						</Link>
					</div>
				</div>
			</Wrapper>
		</nav>
	);
}
