import type { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
	providers: [
		GitHubProvider({
			clientId: process.env.GITHUB_CLIENT_ID as string,
			clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
		}),
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(
				credentials: Record<'username' | 'password', string> | undefined
			) {
				const user = {
					id: '1',
					name: 'John Smith',
					email: 'jsmith@email.com',
					password: 'nextauth',
				};

				if (credentials?.username === user?.name) {
					return user;
				} else {
					return null;
				}
			},
		}),
	],
};
