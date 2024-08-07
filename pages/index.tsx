// React, NextJS imports
import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Internal Components imports
import { ROUTES } from '../utils/constants';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push(ROUTES.DASHBOARD, undefined, { shallow: true });
    router.push(ROUTES.HOME, undefined, { shallow: true });

    router.push(ROUTES.TRANSACTIONS, undefined, { shallow: true });
    router.push(ROUTES.TRANSACTIONS_DETAILS, undefined, { shallow: true });

    router.push(ROUTES.BLOCKS, undefined, { shallow: true });
    router.push(ROUTES.BLOCKS_DETAILS, undefined, { shallow: true });

  }, [router]);
}
