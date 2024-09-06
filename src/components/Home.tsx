import VIDEO from '/video/video.mp4';

export function Home() {
	return (
		<header className='relative max-h-screen flex justify-center items-center overflow-hidden'>
			<div className='hidden lg:block lg:absolute -top-[700px] -z-20 xl:-top-[1300px]'>
				<video src={VIDEO} autoPlay muted loop></video>
				<div className='absolute top-0 left-0 right-0 bottom-0 min-h-screen bg-black opacity-50'></div>
			</div>
			<div className='absolute top-0 left-0 right-0 bottom-0 min-h-screen bg-black -z-50'></div>
			<video className='h-[100svh] w-full self-end' src={VIDEO} autoPlay muted loop></video>
			<div className='absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold lg:left-[35%]'>
				<h1 className='uppercase'>The best</h1>
				<h1 className='uppercase'>Hoodies</h1>
				<h3 className='font-normal'>in the</h3>
				<h1 className='uppercase text-[#B93D3D]'>World</h1>
			</div>
		</header>
	);
}
