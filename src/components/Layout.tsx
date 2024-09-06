import { MobileNavigation } from './MobileNaviagtion';
import { Navigation } from './Navigation';

const products: string[] = [];

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<MobileNavigation products={products} />
			<Navigation products={products} />
			<div>{children}</div>
		</>
	);
}
