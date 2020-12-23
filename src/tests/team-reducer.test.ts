import {teamInfoReducer} from "../redux/reducers/teamInfo";
import {actions} from "../redux/actions/actions";


let startState = {
    teams: [],
    players: []
}

beforeEach(() => {
    startState = {
        teams: [],
        players: []
    }
})

test('correct teams should be added', () => {
    let team = [{
        id: 496,
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
    }]

    const action = actions.getTeams(team)

    const endState = teamInfoReducer(startState, action)

    expect(endState.teams.length).toBe(1)
})

test('correct players should be added', () => {
    let player = [{
        "id": 1504,
        "name": "Aderllan Santos",
        "position": "Defender",
        "dateOfBirth": "1989-04-09T00:00:00Z",
        "countryOfBirth": "Brazil",
        "nationality": "Brazil",
        "shirtNumber": null,
        "role": "PLAYER"
    }]

    const action = actions.getPlayers(player)

    const endState = teamInfoReducer(startState, action)

    expect(endState.players.length).toBe(1)
})

test('teams should be added', () => {

    const action = actions.getTeams(startState.teams)

    const endState = teamInfoReducer([], action)

    expect(endState.teams.length).toBe(1)
})

test('players should be added', () => {

    const action = actions.getPlayers(startState.players)

    const endState = teamInfoReducer([], action)

    expect(endState.players.length).toBe(1)
})

