import React from "react";
import { useRouter } from "next/router";
import {
  Box,
  Paper,
  Grid,
  TextField,
  IconButton,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  FormControl,
  Button,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { toast } from "react-toastify";

import { useData } from "contexts/DataContext";
import { ROUTES, CREDENTIALS } from "utils/constants";

export default function LoginView() {
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
      router.push(ROUTES.ADMIN);
    } else {
      toast.error("Please enter the correct Username and Password");
      setValues({ username: "", password: "", showPassword: false });
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <Paper>
          <Typography variant="h4" textAlign={"center"} mt={3}>
            Admin Sign In
          </Typography>
          <form onSubmit={Login}>
            <Grid
              container
              spacing={2}
              direction={"column"}
              alignItems={"center"}
              padding={5}
            >
              <Grid item xs={12} lg={6} md={6}>
                <TextField
                  id="outlined-basic"
                  name="username"
                  value={values.username}
                  onChange={handleChange("username")}
                  label="Username"
                  variant="outlined"
                  autoComplete="off"
                  style={{ width: 257 }}
                />
              </Grid>
              <Grid item xs={12} lg={6} md={6} sx={{ width: "100%" }}>
                <FormControl sx={{ width: "100%" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>

                  <OutlinedInput
                    id="outlined-adornment-password"
                    name="password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    autoComplete="off"
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} lg={6} md={6}>
                <Button variant="outlined" type="submit">
                  Sign In
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Box>
    </>
  );
}
