import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { useDispatch } from "react-redux";

const initialState = {
  firstName: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFirstName: (initialState, action) => {
      console.log(action.payload);
      initialState.firstName = action.payload;
    },
  },
});

export const onLoginAsync = (inputEmail, inputPassword) => async (dispatch) => {
  console.log(inputEmail);
  console.log(inputPassword);
  try {
    const res = await axios.get(
      `http://localhost:4123/user?email=${inputEmail}&password=${inputPassword}`
    );
    console.log(res.data);
    console.log(inputEmail);
    console.log(inputPassword);
    console.log(res.data[0].email);
    if (!res.data.length) return alert("akun tidak ditemukan");

    localStorage.setItem("idLogin", res.data[0].id);
    alert(`Selamat bergabung kembali ${res.data[0].firstName}`);
    // setTimeout(() => {
    dispatch(setFirstName(res.data[0].firstName));
    // }, 3000);
    if (res.data.length) return true;
  } catch (error) {
    console.log(error);
  }
};

export const onCheckisLogin = () => async (dispatch) => {
  try {
    const id = localStorage.getItem("idLogin");
    const res = await axios.get(`http://localhost:4123/user/${id}`);
    console.log(res);
    console.log(res.data.firstName);
    dispatch(setFirstName(res.data.firstName));
  } catch (error) {
    console.log(error);
  }
};

export const { setFirstName } = userSlice.actions;
export default userSlice.reducer;
