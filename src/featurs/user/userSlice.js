import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { getUserFromStorage } from "../../app/services/serviceStorege";
import { saveInLocalStorage } from "../../app/services/serviceStorege";
import { removeFromStorage } from "../../app/services/serviceStorege";




export const getUser = createAsyncThunk(
    'getUser/getUserFromServer', async (user, thunkAPI) => {
        console.log("slice");
        let response = await axios.get('http://localhost:4001/user/login?userName=' + user.userName + '&&password=' + user.password);
        console.log(response.data);
        return response.data;
    }
)
export const addUserToServer = createAsyncThunk(
    'addUser/addUserToServer', async (user, thunkAPI) => {
        console.log(user);
        const response = await axios.post('http://localhost:4001/user', user);
        return response.data;
    }
)


const initialState={
    status:'idle',
    user: "undefined",
    role: "0"
}

 const userSlice=createSlice({
    name: "userNameInSlice",
    initialState,
    reducers:{
    
    // },
     reloadUserFromStorage: (state, action) => {
        console.log("reload");
        state.user = getUserFromStorage();
        console.log("user", state.user);
        if (state.user != undefined) {
            state.role = state.user.role;

            console.log("rol", state.role);
        }
        else {
            state.role = '0';
            console.log("rol", state.role);
        }
    },
    logOut: (state, action) => {
        removeFromStorage();
        state.user = "undefined"
        state.role = "0"
        state.status = "idle"
    }

     },
    extraReducers: (builder) => {
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.user = action.payload
            console.log("user " + action.payload.name);
            state.status = "fulfilled"
            state.role = action.payload !== "undefined" ? action.payload.role : "0";
            saveInLocalStorage(action.payload)
            console.log("status " + state.status);
        }).addCase(getUser.rejected, (state, action) => {
            state.status = "error"
            state.user = action.payload
            console.log(state.status);
        }).addCase(getUser.pending, (state, action) => {
            state.status = "pending"
            state.user = action.payload
            console.log(state.status);

        });
        builder.addCase(addUserToServer.rejected, (state, action) => {
            state.status = "error"
        }).addCase(addUserToServer.pending, (state, action) => {
            state.status = "pending";
        }).addCase(addUserToServer.fulfilled, (state, action) => {
            // let navigate = useNavigate();
            state.status = "fullfiled";
            state.user = action.payload;
            state.role = action.payload.role;
            saveInLocalStorage(state.user);
        });



    }

})





 export const { reloadUserFromStorage, logOut } = userSlice.actions;
 export default userSlice.reducer;

