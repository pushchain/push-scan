import React from 'react';
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
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import useLogin from 'hooks/useLogin';

export default function LoginView() {
  const {
    Login,
    handleChange,
    handleClickShowPassword,
    handleMouseDownPassword,
    values,
  } = useLogin();

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '60vh',
        }}
      >
        <Paper>
          <Typography variant="h4" textAlign={'center'} mt={3}>
            Admin Sign In
          </Typography>
          <form onSubmit={Login}>
            <Grid
              container
              spacing={2}
              direction={'column'}
              alignItems={'center'}
              padding={5}
            >
              <Grid item xs={12} lg={6} md={6}>
                <TextField
                  id="outlined-basic"
                  name="username"
                  value={values.username}
                  onChange={handleChange('username')}
                  label="Username"
                  variant="outlined"
                  autoComplete="off"
                  style={{ width: 257 }}
                />
              </Grid>
              <Grid item xs={12} lg={6} md={6} sx={{ width: '100%' }}>
                <FormControl sx={{ width: 257 }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>

                  <OutlinedInput
                    id="outlined-adornment-password"
                    name="password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    autoComplete="off"
                    onChange={handleChange('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
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
