import Link from 'next/link';

export default function Navbar() {
	return (
		<div className='p-6 flex flex-col justify-center items-center mx-auto bg-blue-800'>
			<ul className='flex gap-6'>
				<Link href={'/'}>Home</Link>
				<Link href={'/api/auth/signin'}>Sign In</Link>
				<Link href={'/api/auth/signout'}>Sign Out</Link>
				<Link href={'/server'}>Server</Link>
				<Link href={'/client'}>Client</Link>
				<Link href={'/extra'}>Extra</Link>
			</ul>
		</div>
	);
}
