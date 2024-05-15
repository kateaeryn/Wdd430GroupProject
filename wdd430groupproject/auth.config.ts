import NextAuthConfig from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  providers: [
    // added later in auth.ts since it requires bcrypt 
  ],
callbacks: {
    async authorized({ request }: { request: any }) {
        const { auth, nextUrl } = request; 
        const isLoggedIn = !!auth?.user;
        const isOnDashboard = nextUrl?.pathname.startsWith('/dashboard'); 
        if (isOnDashboard) {
            if (isLoggedIn) return true;
            return false; 
        } else if (isLoggedIn) {
            return Response.redirect(new URL('/dashboard', nextUrl));
        }
        return true;
    },
},
};