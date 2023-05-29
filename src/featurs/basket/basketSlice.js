import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export const addOrderToServer = createAsyncThunk(
    'basketSlice/postOrders', async (order, thunkAPI) => {
        const response = await axios.post('http://localhost:4001/order', order);
        return response.data;
    }
)

const initialState = {
    basketArr: [],
    totalQty:0,
    totalPrice: 0


}

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addOrder: (state, action) => {
            console.log(action.payload);
            let index = state.basketArr.findIndex(item => item.id == action.payload.id);
            console.log(index);
            let s = action.payload.qty * action.payload.price
            if (index === -1) {
                let p = { ...action.payload, sum: s }
                let arr = [...state.basketArr, p]
                state.basketArr = arr;
                state.totalPrice += s;
                state.totalQty += action.payload.qty;
            }
            else {
                state.basketArr[index].qty++;
            }
        },
        addProduct: (state, action) => {
            let index = state.basketArr.findIndex(item => item.id == action.payload.id)
            if (index === -1){
                state.basketArr.push({ ...action.payload,qty: 1});
                state.totalQty++;
                let index2 = state.basketArr.findIndex(item => item.id == action.payload.id)
                state.totalPrice+=state.basketArr[index2].price
            }
            else{
                 state.basketArr[index].qty++;
                 state.totalQty++;
                 state.totalPrice+=state.basketArr[index].price
               
            }
               
        },
        deletProduct: (state, action) => {
            let index = state.basketArr.findIndex(item => item.id === action.payload.id);
            // let price=action.payload.price/action.payload.qty;
            if (state.basketArr[index].qty ===1){
                state.totalPrice-=state.basketArr[index].price;
                state.basketArr.splice(index, 1);
                state.totalQty--;
                  
            }
              
            else{state.totalQty--;
                state.basketArr[index].qty--;
                state.totalPrice-=state.basketArr[index].price;
                
                
            }
                
        },
        extraReducers: (builder) => {
            builder.addCase(addOrderToServer.fulfilled, (state, action) => {
                state.status = "fulfilled"
            }).addCase(addOrderToServer.rejected, (state, action) => {
                state.status = "error"
            }).addCase(addOrderToServer.pending, (state, action) => {
                state.status = "pending"
            })
        }

    }
})
export const { addProduct, deletProduct } = basketSlice.actions;
export default basketSlice.reducer;