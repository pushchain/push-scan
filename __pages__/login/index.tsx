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
import styled, { useTheme } from 'styled-components';
import { ItemHV2, ItemVV2, ButtonV2 } from '../../theme/SharedStyling';
import { Text } from '../dashboard/dashboard.styled';

export default function LoginView() {
  const {
    Login,
    handleChange,
    handleClickShowPassword,
    handleMouseDownPassword,
    values,
  } = useLogin();
  const theme = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <ItemHV2 minHeight="80vh">
      <ItemVV2
        maxWidth="300px"
        height="350px"
        background={theme.background.secondary}
        margin="100px 0px 0px"
        borderRadius="10px"
      >
        <Text size="24px" weight="400" marginBottom="25px">
          Admin Login
        </Text>
        <form onSubmit={Login}>
          <ItemVV2 height="100%" justifyContent="space-around">
            <InputContainer>
              <Input
                type="text"
                name="username"
                onChange={handleChange('username')}
                autoComplete="off"
                placeholder="Username"
              />
            </InputContainer>

            <InputContainer>
              <Input
                type={showPassword ? 'text' : 'password'}
                name="password"
                autoComplete="off"
                placeholder="Password"
                onChange={handleChange('password')}
              />
              {showPassword ? (
                <Visibility onClick={() => setShowPassword(false)} />
              ) : (
                <VisibilityOff onClick={() => setShowPassword(true)} />
              )}
            </InputContainer>

            <ButtonV2
              fontSize="18px"
              fontWeight="600"
              borderRadius="10px"
              padding="15px 10px"
              type="submit"
              background={theme.background.default}
              border="1px solid #DF4FA3"
              color={theme.text.primary}
            >
              Sign In
            </ButtonV2>
          </ItemVV2>
        </form>
      </ItemVV2>
    </ItemHV2>
  );
}

const Input = styled.input`
  outline: none;
  border: none;
  width: 85%;
  font-size: 18px;
  font-family: 'Strawford', Helvetica, sans-serif;
  padding: 15px 10px;
  margin: 5px 0px;
  background-color: ${(props) => props.theme.background.secondary};
  color: ${(props) => props.theme.text.primary};
`;

const InputContainer = styled(ItemHV2)`
  border: 1px solid ${(props) => props.theme.background.border};
  justify-content: space-between;
  border-radius: 10px;
  width: 250px;
  padding: 0px 5px;
  margin-bottom: 15px;
`;
