import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const CopyFilled: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="CopyFilled"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="inherit"
          height="inherit"
          viewBox="0 0 22 22"
          fill="none"
          {...props}
        >
          <rect
            y="7.33325"
            width="14.6667"
            height="14.6667"
            rx="1.4"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.73337 0C7.96018 0 7.33337 0.6268 7.33337 1.4V4.81306H15.1481C16.2527 4.81306 17.1481 5.70849 17.1481 6.81306V14.6667H20.6C21.3732 14.6667 22 14.0399 22 13.2667V1.4C22 0.626801 21.3732 0 20.6 0H8.73337Z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default CopyFilled;
