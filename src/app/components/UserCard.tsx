import Image from 'next/image';

type User =
	| {
			name?: string | null | undefined;
			email?: string | null | undefined;
			image?: string | null | undefined;
	  }
	| undefined;

type UserCardProps = {
	user: User;
	pagetype: string;
};

export default function UserCard({ user, pagetype }: UserCardProps) {
	const greetings = user?.name ? (
		<div className='flex flex-col items-center p-6 bg-white rounded-lg font-bold text-5xl text-black'>
			Hello {user?.name}
		</div>
	) : null;

	const emailDisplay = user?.email ? (
		<div className='flex flex-col items-center p-6 bg-white rounded-lg font-bold text-5xl text-black'>
			{user?.email}
		</div>
	) : null;

	const userImage = user?.image ? (
		<Image
			className='border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8'
			src={user?.image}
			width={200}
			height={200}
			alt={user?.name ?? 'Profile Picture'}
			priority={true}
		/>
	) : null;

	return (
		<section>
			{greetings}
			{emailDisplay}
			{userImage}
			<p className='text-2xl text-center'>{pagetype} Page!</p>
		</section>
	);
}