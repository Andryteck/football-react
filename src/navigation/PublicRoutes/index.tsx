import {route} from "../../consts/routes";
import {Route, Switch, Redirect} from "react-router-dom";
import {TeamsList} from "../../features/TeamsList/TeamsList";
import {getFetching} from "../../selectors";
import {RootState} from "../../redux/store";
import {useSelector} from "react-redux";
import {Profile} from "../../features/Profile/Profile";
import {PlayersList} from "../../features/PlayersList/PlayersList";


export const PublicRoutes = () => {
    const fetching = useSelector<RootState, boolean>(getFetching)

    const publicRoutes = [
        {
            Component: TeamsList,
            path: route.TEAMS,
            props: {
                fetching
            },
        },
        {
            Component: PlayersList,
            path: route.PLAYERS,
            props: {
                fetching
            },
        },
        {Component: Profile, path: route.USER},
        {Component: () => <Redirect to={route.TEAMS}/>, path: "*"},
    ];

    return (
        <Switch>
            {publicRoutes.map(({Component, path, props}) => {
                return (
                    <Route exact path={path} key={path}>
                        <Component {...props}/>
                    </Route>
                );
            })}
        </Switch>
    );
};
