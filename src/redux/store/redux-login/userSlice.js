import { createSlice } from '@reduxjs/toolkit';

//const [userName, setUserName] = userState(null); <-- Same Analogy we are doing with the help of redux
//const [userEmail, setUserEmail] = userState(null);

const initialState = {
    userName: null,   // <-- username
    userEmail: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
      setActiveUser: ((state, action) => {
          state.userName = action.payload.userName   // <-- setUserName 
          state.userEmail = action.payload.userEmail    
      }),

      setUserLogOutState: ((state) => {
          state.userName = null
          state.userEmail = null
      })
  },
});

export const { setActiveUser,setUserLogOutState  } = userSlice.actions;

export const selectUserName = state => state.user.userName;   // <-- Modified value of userName export
export const selectUserEmail = state => state.user.userEmail;

export default userSlice.reducer;
