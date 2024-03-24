import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';
import { Header } from './-components/Header';
import { useRecoilState } from 'recoil';
import { loginState, userState, selectedTeam } from '../state';

import { onAuthStateChanged } from 'firebase/auth';
import { auth, signInWithGoogle } from '../firebase/auth';

import { useEffect } from 'react';

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    const [login, setLogin] = useRecoilState(loginState);
    const [user, setUser] = useRecoilState(userState);
    const [team] = useRecoilState(selectedTeam);

    const navigate = useNavigate();

    const onclick = () => {
        signInWithGoogle();
    }

    onAuthStateChanged(auth, (user) => {
        if(user) {
            setLogin(true);
            const id: string = user.email!.slice(0, 5);
            if(Number(id)) {
                setUser(Number(id));
            }
            navigate({
                to: '/select',
            });
        } else {
            setLogin(false);
            setUser(null);
            navigate({
                to: '/',
            });
        }
    });

    useEffect(() => {
        if(login) {
            if(team !== null) {
                navigate({
                    to: '/input',
                });
            } else {
                navigate({
                    to: '/select',
                });
            }
        }
    },[login, team, navigate]);

    return (
        <>
            <Header />
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full space-y-8">
                <h3 className='flex items-center justify-center text-xl'>展示団体チーフのアカウントでのみログインできます。</h3>
                    <div className="flex justify-center">
                        <button onClick={onclick} className="group relative w-28 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                            ログイン
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
