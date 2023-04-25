import { AdminUsersInitialState, UserFindBy } from "@/types/users";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { getUsers } from "@/app/api/user/usersAdmin";


export const getUsersAdmin = createAsyncThunk('users/admin/getUsersAdmin', 
    async function (arg, {getState}) {
        let {userAdmin} = getState() as RootState
        let data = getUsers({findBy: userAdmin.findBy, findString: userAdmin.findString})
        return data        
    }
)



let initialState: AdminUsersInitialState = {
    users:[],
    findBy: UserFindBy.unset,
    findString: '',
    isLoading: false,
    message: '',
    error: ''

}

export const adminUsersSlice = createSlice({
    name: 'adminUsers',
    initialState: initialState,
    reducers: {
        setFindBy: (state, action) => {
            state.findBy = action.payload
        },
        setFindString: (state, action)=> {
            state.findString = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(getUsersAdmin.pending, (state)=> {
            state.isLoading = true
        }),
        builder.addCase(getUsersAdmin.fulfilled, (state, action)=> {
            state.users = action.payload.message?[...state.users]:[...action.payload]
            state.message = action.payload.message?action.payload.message:''
            state.isLoading = false
        })

    },

})

//export the reducer
export default adminUsersSlice.reducer
// export the action
export const {setFindBy,setFindString} = adminUsersSlice.actions
export const adminUserAction = adminUsersSlice.actions