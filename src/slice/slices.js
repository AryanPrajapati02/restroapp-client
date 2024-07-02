import { createSlice  ,createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from "../helper/axios";
import { toast } from "react-hot-toast";
// import { GetCookie, RemoveCookie, SetCookie } from "../helper/cookie";

const initialState = {
   userid: '',
isLoggedIn:localStorage.getItem('isLoggedIn')|| false,
   token: localStorage.getItem('token') || null,
   isVerified: false,
   loggedInUser: null, 
 menu:[],
 domainStatus: false,
 domain:null,



};

export const registerAsync = createAsyncThunk('register' , 
  async(data)=>{
  try{
      const response = await axiosInstance.post('/register' , data)
     return response
    }catch(e){
      console.log(e?.response?.data?.keyValue)
    return toast.error(e?.response?.data)
    }
    }
)
export const sendOtpAsync = createAsyncThunk('send' , 
  async( {id  ,data})=>{
  
    const response = await axiosInstance.post(`/send-otp/${id}` , data)
    return response.data
  }
)

export const verifyOtpAsync =createAsyncThunk('verify/otp' , 
  async( data)=>{
    console.log(data)
    const response = await axiosInstance.post(`/verify-otp`,data)
     const res = response.data

   
     if(res.success){
      toast.success('Phone Number Verified Successfully')
     return response

    }
    else{
      toast.error('Failed to Verify Phone Number')
      return toast.error(e?.response?.data)
    }
    
  }
)

export const getUserDataAsync = createAsyncThunk("/user/details", async () => {
  try {
      const res = await axiosInstance.get('/get-detail');
      return res.data
  } catch(error) {
      toast.error(error.message);
  }
})

export const deleteMenuAsync =createAsyncThunk('delete/menu', async(data)=>{
  try{
      const response = await axiosInstance.post('/delete/menu', data)
    
     return response
    }catch(e){
      console.log(e?.response?.data)
    return toast.error(e?.response?.data)
    }
    
})

export const uploadMenuAsync = createAsyncThunk('upload/menu' , async(data)=>{
  try{
      const response = await axiosInstance.post('/upload/menu', data)
      
     return response
    }catch(e){
      console.log(e?.response?.data)
    return toast.error(e?.response?.data)
    }
    }
)

export const loginAsync = createAsyncThunk('login', 
  async(data)=>{
    try{
      const response = await axiosInstance.post('/login', data)
     return response
    }catch(e){
      console.log(e?.response?.data?.keyValue)
    return toast.error(e?.response?.data)
    }
    
  }
)

export const getDomainAsync =createAsyncThunk('get/domain' , async(data)=>{
  try {
    const response = await axiosInstance.post('/choose/domain' ,data)
    return response
    
  } catch (error) {
    console.log(e?.response?.data?.keyValue)
    return toast.error(e?.response?.data)
  }
})

const Slices =  createSlice({
    name: 'counter',
    initialState,
    reducers: {
     
    },
    extraReducers: (builder)=>{
      builder
       .addCase(registerAsync.fulfilled, (state, action) => {
         state.userid = action.payload?.data?.user?._id
         state.userData = action?.payload?.data?.user
         localStorage.setItem("userData" ,JSON.stringify(action?.payload?.data?.user))
         localStorage.setItem("token", JSON.stringify(action?.payload?.data?.token));
    
        state.isLoggedIn = true;

        })
        .addCase(registerAsync.rejected, (state, action) => {
          console.log(action.message);
        });
    builder
        .addCase(sendOtpAsync.fulfilled, (state, action) => {
  
          state.phone = action.payload.phone
        });
        builder
        .addCase(verifyOtpAsync.fulfilled , (state ,action)=>{
      state.isVerified = true
     })   ;
     builder.addCase(getUserDataAsync.fulfilled, (state, action) => {
      // if(!action?.payload?.userDetail) return;

      // GetCookie('token')
      state.loggedInUser = action?.payload
      state.menu =(action?.payload?.menuImg)
      state.domainStatus = action?.payload?.domainStatus
      state.domain = (action?.payload?.domain);
      state.isLoggedIn = true
      
   
      
      
    });
    builder.addCase(uploadMenuAsync.fulfilled , (state ,action)=>{
      // state?.menu[0]?.push(action?.payload?.data?.menu)
      toast.success('Menu Uploaded Successfully')
    });
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      //  RemoveCookie('token')
      //  SetCookie('token', JSON.stringify(action?.payload?.data?.token))
    
      localStorage.setItem("isLoggedIn", true);
      state.loggedInUser = action?.payload?.userDetail;
      localStorage.setItem("token", JSON.stringify(action?.payload?.data?.token));


      
      state.isLoggedIn = true;
    
    state.userid = action.payload?.data?.user?._id
    state.userData = action?.payload?.data?.user
    // localStorage.setItem("userData" ,JSON.stringify(action?.payload?.data?.user))
    localStorage.setItem("token", JSON.stringify(action?.payload?.data?.token));
   
    toast.success('Login Successfull')
    });
 builder.addCase(deleteMenuAsync.fulfilled , (state ,action)=>{
  state.menu = state?.menu?.filter((item, index) => item?.public_id !== action?.payload?.data?.public_id  );
   toast.success('Menu Deleted Successfully')
 });
  builder.addCase(getDomainAsync.fulfilled, (state, action) => {
    // if(!action?.payload?.domain) return;
    state.domain = action?.payload?.data?.domain;
    state.domainStatus = true;

    toast.success('Domain Selected Successfully')
    });


    }
  });

  
  export const { } = Slices.actions;
  export default Slices.reducer;