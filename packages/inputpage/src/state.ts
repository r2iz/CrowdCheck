import { atom } from 'recoil';

export const selectedTeam = atom({
    key: 'selectedTeam',
    default: null,
});

export const loginState = atom({
    key: 'loginState',
    default: false,
});

export const userState = atom({
    key: 'userState',
    default: null,
});