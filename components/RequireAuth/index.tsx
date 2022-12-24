// React, NextJS imports
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

// Internal Components imports
import { useData } from '../../contexts/DataContext';
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
