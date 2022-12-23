import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-toastify';
import { useData } from '../contexts/DataContext';
import { ROUTES, CREDENTIALKEYS } from '../utils/constants';
import { login } from '../utils/api';

export default function useLogin() {
  const router = useRouter();
  const { setIsLoggedIn, setToken } = useData();
  const [values, setValues] = React.useState({
    username: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop: any) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const Login = async (e: any) => {
    e.preventDefault();
    const { username, password } = e.target.elements;
    const res = await login({ user: username.value, pass: password.value });
    if (res?.token) {
      sessionStorage.setItem(CREDENTIALKEYS.LOGINCHECK, '' + true);
      sessionStorage.setItem(CREDENTIALKEYS.TOKEN, res.token);
      setIsLoggedIn(true);
      router.push(ROUTES.DASHBOARD);
    } else {
      toast.error('Please enter the correct Username and Password');
      setValues({ username: '', password: '', showPassword: false });
    }
  };

  return {
    Login,
    handleChange,
    handleClickShowPassword,
    handleMouseDownPassword,
    values,
  };
}
