import {actions, fetchTeamsSaga} from "../redux/actions/actions";
import {TeamsAPI} from "../api/teams-api";
import {call, put} from "redux-saga/effects";

let TeamsMock = [
    {id: 496,
        area: {
            id: 2187,
            name: 'Portugal'
        },
        name: "Rio Ave FC",
        shortName: "Rio Ave",
        tla: "RIO",
        crestUrl: "https://crests.football-data.org/496.svg",
        address: "Praça da República, n.º35, Apartado 42 Vila do Conde 4481-909",
        phone: "+351 (252) 640590",
        website: "http://www.rioave-fc.pt",
        email: "geral@rioave-fc.pt",
        founded: 1939,
        clubColors: "Green / White",
        venue: "Estádio do Rio Ave Futebol Clube",
        lastUpdated: "2020-11-26T02:23:31Z"
    }
]



describe('getCharacters', () => {
    it('success triggers success action with teams', () => {
        const generator = fetchTeamsSaga();
        const response = { data: { results: TeamsMock } };

        expect(generator.next().value)
            .toEqual(call(TeamsAPI.getTeams));

        let a = actions.getTeams(TeamsMock)
        expect(generator.next(response).value)
            .toEqual(put(a));

        expect(generator.next())
            .toEqual({ done: true, value: undefined });
    });
});


