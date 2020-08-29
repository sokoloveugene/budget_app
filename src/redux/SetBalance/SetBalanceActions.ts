import ActionTypes from "../ActionTypes";

export const BalanceAction  = (someValue: number) => ({
    type : ActionTypes.SET_BALANCE,
    payload: someValue
});

export const updateBalanceAfterDelete = (operationType: string, amount: number) => ({
    type: ActionTypes.UPDATE_BALANCE_AFTER_DELETE,
    payload: {
        operationType,
        amount
    }
})
