import { useData } from '../../contexts/DataContext';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ROUTES } from '../../utils/constants';

const RequiresAuth = ({ children }: { children: any }) => {
  const { isLoggedIn } = useData();

  const router = useRouter();
  useEffect(() => {
    if (!isLoggedIn) {
      router.push(ROUTES.LOGIN);
    }
  }, [isLoggedIn, router]);

  return children;
};

export default RequiresAuth;
