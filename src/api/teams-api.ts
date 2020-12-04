import axios from 'axios';

const settings = {
    headers: {
        'X-Auth-Token': '15a24cc3edfb4c64a66c0214e356ebe7',
    },
};

const instance = axios.create({
    baseURL: 'https://api.football-data.org/v2/',
    ...settings,
});

export const TeamsAPI = {
    getTeams() {
        return instance.get<TeamsInfo>('competitions/2017/teams')
    },
    getPlayersOfCurrentTeam(teamId: number) {
        return instance.get<PlayersInfo>(`teams/${teamId}`)
    },
}


//types

export type TeamsInfo = {
    count: number,
    filters: {},
    competition: {
        id: number,
        area: {
            id: number, name: string
        },
        name: string,
        code: string,
        plan: string,
        lastUpdated: string
    },
    season: {
        id: number,
        startDate: string,
        endDate: string,
        currentMatchday: number,
        winner: null
    },
    teams: ITeam[]
}

export interface ITeam {
    id: number,
    area: {
        id: number,
        name: string
    },
    name: string,
    shortName: string,
    tla: string,
    crestUrl: string,
    address: string,
    phone: string,
    website: string,
    email: string,
    founded: number,
    clubColors: string,
    venue: string,
    lastUpdated: string
}

export type PlayersInfo = {
    id: number,
    area: {
        id: number,
        name: string
    },
    activeCompetitions: [
        {
            id: number,
            area: {
                id: number,
                name: string
            },
            name: string,
            code: string,
            plan: string,
            lastUpdated: string
        }
    ],
    name: string,
    shortName: string,
    tla: string,
    crestUrl: string,
    address: string,
    phone: string,
    website: string,
    email: string,
    founded: number,
    clubColors: string,
    venue: string,
    squad: IPlayer
}

export interface IPlayer {
    id: number,
    name: string,
    position: string,
    dateOfBirth: string,
    countryOfBirth: string,
    nationality: string,
    shirtNumber: null,
    role: string
}
