import { AdminUsersInitialState, UserFindBy } from "@/types/users";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { changeUserRole, getUsers } from "@/app/api/user/user";
import { Roles } from "@/app/api/user/userTypes";



export const getUsersAdmin = createAsyncThunk('users/admin/getUsersAdmin', 
    async function (arg, {getState}) {
        let {userAdmin} = getState() as RootState
        let data = getUsers({findBy: userAdmin.findBy, findString: userAdmin.findString})
        return data        
    }
)

export const changeRole = createAsyncThunk('users/admin/changeRole', 
    //tip: передаваемые аргументы лучше типизировать тут, тогда asyncThunk будет знать что делать
    // https://stackoverflow.com/questions/72079461/expected-0-arguments-but-got-1-while-passing-arguments-to-the-async-func-in-red

    async function (obj: {id: number, role: Roles}) {
        const data = await changeUserRole(obj)     
        return data
    }
)



let initialState: AdminUsersInitialState = {
    users:[],
    findBy: UserFindBy.name,
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
        builder.addCase(changeRole.fulfilled, (state, action)=>{
            console.log(action.payload);
            
        })

    },

})

//export the reducer
export default adminUsersSlice.reducer
// export the action
export const {setFindBy,setFindString} = adminUsersSlice.actions
export const adminUserAction = adminUsersSlice.actions