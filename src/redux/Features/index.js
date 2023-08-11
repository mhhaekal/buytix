import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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

export const onRegisterAsync = (email, username, pwd) => async (dispatch) => {
  const data = {
    username: username,
    email: email,
    password: pwd,
  };
  try {
    const checkEmail = await axios.get(`http://localhost:4123/user?email=${data.email}`);

    if (checkEmail.data.length) {
      alert("email telah digunakan");
    } else {
      const res = await axios.post(`http://localhost:4123/user`, data);
      console.log(res.data);
      const getId = await axios.get(`http://localhost:4123/user?email=${data.email}`);
      localStorage.setItem("idLogin", getId.data[0].id);
      dispatch(setFirstName(data.username));
      alert(`${data.username} selamat bergabung`);
    }
    // if(res.data.length) return alert('email telah digunakan')
  } catch (error) {
    console.log(error);
  }
};

export const onLoginAsync = (inputEmail, inputPassword) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:4123/user?email=${inputEmail}&password=${inputPassword}`
    );
    if (!res.data.length) return alert("akun tidak ditemukan");

    localStorage.setItem("idLogin", res.data[0].id);
    dispatch(setFirstName(res.data[0].username));
    alert(`Selamat bergabung kembali ${res.data[0].username}`);
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
    console.log(res.data.username);
    dispatch(setFirstName(res.data.username));
  } catch (error) {
    console.log(error);
  }
};

export const { setFirstName } = userSlice.actions;
export default userSlice.reducer;
