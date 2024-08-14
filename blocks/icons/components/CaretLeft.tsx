import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const CaretLeft: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="CaretLeft"
      icon={
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 8C0 3.58172 3.58172 0 8 0H16C20.4183 0 24 3.58172 24 8V16C24 20.4183 20.4183 24 16 24H8C3.58172 24 0 20.4183 0 16V8Z" fill="#757D8D"/>
            <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" fill="#202124"/>
        </svg>
      }
      {...restProps}
    />
  );
};

export default CaretLeft;
