// React, NextJS imports
import Link from 'next/link';

// External Library imports
import { Box } from '@mui/material';

export default function Logo({
  sx,
  disabledLink = false,
  src = '/static/push.svg',
}: {
  sx: any;
  disabledLink?: boolean;
  src?: string;
}) {
  const logo = (
    <Box component="img" src={src} sx={{ width: 80, height: 80, ...sx }} />
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <Link href="/">{logo}</Link>;
}
