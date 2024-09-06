export function Wrapper({ children }: { children: React.ReactNode }) {
	return <div className='w-full mx-auto max-w-[1400px]'>{children}</div>;
}
