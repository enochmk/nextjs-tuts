import { getServerSession } from 'next-auth';
import { options } from './api/auth/[...nextauth]/options';
import UserCard from './components/UserCard';

export default async function Home() {
	const session = await getServerSession(options);

	if (!session) {
		return <h1>You Shall Not Pass!</h1>;
	}

	return <UserCard user={session?.user} pagetype={'home'} />;
}
