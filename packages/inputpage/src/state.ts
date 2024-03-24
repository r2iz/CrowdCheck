import { atom } from 'recoil';

export const selectedTeam = atom({
    key: 'selectedTeam',
    default: null as string | null,
});

export const selectedTeamIdState = atom({
    key: 'selectedTeamId',
    default: null as number | null,

});

export const loginState = atom({
    key: 'loginState',
    default: false as boolean,
});

export const userState = atom({
    key: 'userState',
    default: null as number | null,
});

export const congestionState = atom({
    key: 'congestionState',
    default: null as string | null,
});

export const lastSubmittedDateState = atom({
    key: 'lastSubmittedDateState',
    default: null as Date | null,
});