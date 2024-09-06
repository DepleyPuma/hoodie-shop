import { LuMenu } from 'react-icons/lu';
import { FaOpencart } from 'react-icons/fa6';
import { IoCloseOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import LOGO from '/images/hoodie_logo-1.jpg';
import { useState } from 'react';

export function MobileNavigation({ products }: { products: string[] }) {
	const [isShown, setIsShown] = useState<boolean>(false);

	return (
		<>
			<div className='md:hidden fixed flex justify-between items-center px-4 h-[100px] w-full bg-black text-white z-50'>
				{isShown ? (
					<button onClick={() => setIsShown(false)}>
						<IoCloseOutline className='opacity-0 text-5xl animate-dropin' />
					</button>
				) : (
					<button onClick={() => setIsShown(true)}>
						<LuMenu className='opacity-0 text-5xl animate-dropin' />
					</button>
				)}
				<div className='w-16 rounded-md bg-black overflow-hidden'>
					<Link to={'/'}>
						<img className='w-full' src={LOGO} alt='logo' />
					</Link>
				</div>
				<Link className='relative' to={'/cart'}>
					<FaOpencart className='text-6xl' />
					{products.length > 0 && (
						<span className='absolute -top-3 -right-1 px-2 bg-white text-black rounded-full'>
							{products.length}
						</span>
					)}
				</Link>
			</div>
			<nav
				className={`md:hidden fixed flex justify-center items-center min-h-screen w-full bg-black text-white z-40 ${
					isShown ? 'translate-x-0' : '-translate-x-full'
				} transition-transform duration-300`}
			>
				<ul className='flex flex-col justify-center items-center text-4xl gap-12 uppercase'>
					<li>
						<Link
							className='bg-gray-500'
							onClick={() => setIsShown(false)}
							to={'/products/all'}
						>
							All
						</Link>
					</li>
					<li>
						<Link
							className='bg-gray-500'
							onClick={() => setIsShown(false)}
							to={'/products/basics'}
						>
							Basics
						</Link>
					</li>
					<li>
						<Link
							className='bg-gray-500'
							onClick={() => setIsShown(false)}
							to={'/products/patterned'}
						>
							Patterned
						</Link>
					</li>
					<li>
						<Link
							className='bg-gray-500'
							onClick={() => setIsShown(false)}
							to={'/products/limited'}
						>
							Limited
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}
