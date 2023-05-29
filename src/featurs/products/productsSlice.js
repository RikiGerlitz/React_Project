import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

export const fetchAllProducts = createAsyncThunk(
    'product/getAllProducts', async(thunkAPI) => {
        const response = await axios.get("http://localhost:4001/product");
        return response.data;
    }
   
) 
export const addProductToServer = createAsyncThunk(
    'product/addProductToServe', async(product,thunkAPI) => {
        const response = await axios.post("http://localhost:4001/product",product);
        return response.data;
    }
   
)
export const deleteProductFromServer = createAsyncThunk(
    'product/deleteProductFromServer', async(product,thunkAPI) => {
            const response = await axios.delete("http://localhost:4001/product/"+product.id);
        return response.data;
    }
   
)
export const upDateProductToServer = createAsyncThunk(   
    'product/upDateProduct' , async(product,thunkAPI)=> {
        console.log("updateSlice");
        console.log("!!!!!!!!",product);
        debugger
        const response = await axios.put('http://localhost:4001/product',product);
        return response.data;
    }
) 



const initialState = {
    status: 'idle',
    savingStatus:'idle',
    deleteStatus:'idle',
    message:undefined,
    productsArr: []
}

const productsSlice= createSlice({
    name:"productsrr",
    initialState,
    
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.productsArr=action.payload
        }).addCase(fetchAllProducts.rejected, (state, action) => {
            state.status="error";
            
        }).addCase(fetchAllProducts.pending, (state, action) => {
            state.status="pending"
    
        }).addCase(addProductToServer.pending, (state, action) => {
             state.status="pending"
        }).addCase(addProductToServer.fulfilled, (state, action) => {
            state.productsArr.push(action.payload)
            state.status="fulfilled";
             console.log(action.payload)
    
        }).addCase(addProductToServer.rejected, (state, action) => {
              state.status="error";
              state.message="saving in server failed"
                  
        })
       .addCase(deleteProductFromServer.pending, (state, action) => {
            state.status="pending"
       })
       .addCase(deleteProductFromServer.fulfilled, (state, action) => {
           console.log(action.payload)
        let index = state.productsArr.findIndex(item=>item.id===action.payload);
        console.log(index)
        state.productsArr.splice(index,1);
        state.status="fulfilled";
       })
       .addCase(deleteProductFromServer.rejected, (state, action) => {
             state.status="error";
             state.message="delete from server failed"
       }).addCase(upDateProductToServer.fulfilled,(state,action) => {
        state.status="fulfilled"
        console.log("updateFall",action.payload);
        state.productsArr=action.payload;
    }).addCase(upDateProductToServer.rejected ,(state,action)=>{
        state.status="error"
    }).addCase(upDateProductToServer.pending,(state , action)=>{
        state.status="pending"
    })

    },
     
});


export default productsSlice.reducer;
