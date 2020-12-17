import {RootState} from "../redux/store";

export const getPlayers = (state: RootState) => state.teamInfoReducer.players
export const getTeams = (state: RootState) => state.teamInfoReducer.teams
export const getFavouriteTeams = (state: RootState) => state.profile.favoriteTeams
export const getFavouritePlayers = (state: RootState) => state.profile.favoritePlayers
export const getFetching = (state: RootState) => state.appReducer.fetching
