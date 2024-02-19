export const ROUTES = {
    main: '/',
    auth: {
        login: 'auth/login',
        register: 'auth/register'
    },
    games: {
        roulette: 'games/roulette',
        slots: 'games/slots',
        hammer: 'games/hammer',
    }
}

export const generateURL = (url: string) => {
    return url
}