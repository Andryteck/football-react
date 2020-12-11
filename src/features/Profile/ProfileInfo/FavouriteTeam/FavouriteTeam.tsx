import React from 'react';
import {useDispatch} from "react-redux";
import {removeTeam} from "../../../../redux/actions/actions";


interface IProps {
    name: string
    id: number
}

export const FavouriteTeam = ({name, id}: IProps) => {
    const dispatch = useDispatch()

    const onRemove = () => {
        dispatch(removeTeam(id, name))
    }

    return (
        <div>
            <p>{name}</p>
            <button onClick={onRemove}>Remove</button>
        </div>
    );
};

