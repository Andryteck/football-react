interface ICommonState {
    fetching: boolean
}

const initState = {
    fetching: false,
}

export const appReducer = (state: ICommonState = initState, action: ActionsType): ICommonState => {
    switch (action.type) {
        case 'APP/START_FETCHING': {
            return {
                ...state, fetching: true,
            }
        }
        case 'APP/STOP_FETCHING': {
            return {
                ...state, fetching: false,
            }
        }
        default:
            return state
    }
}


// export const setAppError = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
// export const setAppStatus = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)
// export const setAppInitialized = (value: boolean) => ({type: 'APP/SET-IS-INITIALIED', value} as const)


export const startFetching = () => ({type: 'APP/START_FETCHING'} as const)
export const stopFetching = () => ({type: 'APP/STOP_FETCHING'} as const)

export type StartFetchingActionType = ReturnType<typeof startFetching>
export type StopFetchingActionType = ReturnType<typeof stopFetching>

type ActionsType =
    | StartFetchingActionType
    | StopFetchingActionType

