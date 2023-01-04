import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../../styles/Navbar.module.scss'

const navigation = [
	{ id: 1, title: 'Home', path: '/' },
	{ id: 2, title: 'Posts', path: '/posts' },
	{ id: 3, title: 'Contacts', path: '/contacts' },
	{ id: 4, title: 'Gallery', path: '/gallery' },
];

const Navbar = () => {
	const { pathname } = useRouter();
	console.log(pathname)
	return (
		<nav className={styles.nav}>
			<Link href="/" className={styles.logo}>
				<Image src="/logo.svg" alt="Next" width={160} height={64} />
			</Link>
			<div className={styles.links}>
				{navigation.map(({ id, title, path }) => {
					return <Link key={id} href={path} className={pathname === path ? styles.active : null}>{title}</Link>
				})}
			</div>
		</nav>
	);
};

export default Navbar;