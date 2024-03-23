import { atom } from 'recoil';

export const selectedTeam = atom({
    key: 'selectedTeam',
    default: '聖光Esports同好会',
});

export const loginState = atom({
    key: 'loginState',
    default: false,
});

export const userState = atom({
    key: 'userState',
    default: null,
});