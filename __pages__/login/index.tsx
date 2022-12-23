// React, NextJS imports
import React from 'react';

// External Library imports
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useTheme } from 'styled-components';

// Internal Components imports
import useLogin from '../../hooks/useLogin';
import { ItemHV2, ItemVV2, ButtonV2 } from '../../theme/SharedStyling';
import { Text } from '../dashboard/dashboard.styled';
import { Input, InputContainer } from './login.styled';

export default function LoginView() {
  const { Login, handleChange, values } = useLogin();
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
                <Visibility
                  onClick={() => setShowPassword(false)}
                  style={{ color: theme.text.secondary }}
                />
              ) : (
                <VisibilityOff
                  onClick={() => setShowPassword(true)}
                  style={{ color: theme.text.secondary }}
                />
              )}
            </InputContainer>

            <ButtonV2
              fontSize="16px"
              fontWeight="600"
              borderRadius="10px"
              padding="15px 10px"
              type="submit"
              background="transparent"
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
