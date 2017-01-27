/**
 * Created by eltonjhony on 1/27/17.
 */
export const selectUser = (user) => {
    return {
        type: "USER_SELECTED",
        payload: user
    }
}
