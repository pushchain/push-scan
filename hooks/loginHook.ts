import { useData } from "contexts/DataContext";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";
import { CREDENTIALS, ROUTES, STORAGEKEY } from "utils/constants";

export default function useLogin() {
  const router = useRouter();
  const { setIsLoggedIn } = useData();
  const [values, setValues] = React.useState({
    username: "",
    password: "",
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

  const Login = (e: any) => {
    e.preventDefault();
    const { username, password } = e.target.elements;
    if (
      username.value === CREDENTIALS.USERNAME &&
      password.value === CREDENTIALS.PASSWORD
    ) {
      setIsLoggedIn(true);
      sessionStorage.setItem(STORAGEKEY, "" + true);
      router.push(ROUTES.ADMIN);
    } else {
      toast.error("Please enter the correct Username and Password");
      setValues({ username: "", password: "", showPassword: false });
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
