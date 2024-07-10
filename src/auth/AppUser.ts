import { redirect } from 'next/navigation';

export const isUserLoggedIn = () => {
    console.log('redirect working')
    redirect('/protectedRoutes/dashboard');
}


