import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';
import { loginState } from '../../state';
import { useRecoilState } from 'recoil';

import { InputHeader } from './-components/InputHeader';
import { InputBody } from './-components/Input';

export const Route = createLazyFileRoute('/input')({
    component: Input,
});

function Input() {
    const [login] = useRecoilState(loginState);
    const navigate = useNavigate();
    if (!login) {
        navigate({
            to: '/',
        });
    }
    return(
        <>
            <InputHeader />
            <InputBody />
        </>
    );
}