// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect, useState, FC, ReactNode } from 'react';
import styled from 'styled-components';
import { toast, Toaster } from 'sonner';
import { Button, Cross, VideoCameraFilled } from '../../blocks';

type NotificationProps = {
  image?: ReactNode;
  /* Title of the notification */
  firstTitle?: string;
  /* Title of the notification */
  secondTitle?: string;
  /* Description of the notification */
  description?: string;
  /* Optional onClose action for the notification */
  onClose?: () => void;
  /* Custom React component to be passed as the image. */
  overlay?: ReactNode;
  /* Optional onClick event for the notification */
  onClick?: () => void;
  /* Position of the notification */
  position?: 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
  /* Optional duration of the notification component */
  duration?: number;
};

// Custom Hook
export const useChainNotification = () => {
  const [hasMounted, setHasMounted] = useState(false);

  const showNotification = () => {
    const toastId = toast.custom(
      () => (
        <NotificationItem
          firstTitle="Vote for"
          secondTitle="Push Devnet"
          description="Governance proposal is live! Vote today to make Push Chain a reality"
          position="bottom-left"
          onClose={() => {
            localStorage.setItem('chainNotificationShown', 'true');
            toast.dismiss(toastId);
          }}
        />
      ),
      {
        duration: Infinity,
        position: 'bottom-left',
      }
    );
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const notificationAlreadyShown =
        localStorage.getItem('chainNotificationShown') === 'true';

      if (!notificationAlreadyShown && !hasMounted) {
        showNotification();
        setHasMounted(true);
      } else {
        toast.dismiss();
        setHasMounted(false);
      }
    }
  }, []);
};

export const Notification = () => {
  return <StyledToaster offset={13} visibleToasts={5} />;
};

// Notification Item Component
const NotificationItem: FC<NotificationProps> = ({
  firstTitle,
  secondTitle,
  description,
  onClick,
  onClose,
}) => {
  const handleNotificationClick = () => onClick?.();
  const handleNotificationClose = () => {
    onClose?.();
    toast.dismiss();
  };

  return (
    <NotificationContainer onClick={handleNotificationClick}>
      <CloseButton
        onClick={(e) => {
          e.stopPropagation();
          handleNotificationClose();
        }}
      >
        <Cross size={24} color="icon-primary" />
      </CloseButton>
      <TextContainer>
        <VideoCameraFilled size={72} color="icon-primary" />
        <NotificationTitle>
          {firstTitle}
          <br />
          {secondTitle}
        </NotificationTitle>
        <Button
          onClick={() => {
            localStorage.setItem('chainNotificationShown', 'true');
            window.open('https://gov.push.org', '_blank');
            toast.dismiss();
          }}
        >
          Learn More
        </Button>
        <NotificationDescription>{description}</NotificationDescription>
      </TextContainer>
    </NotificationContainer>
  );
};

// Notification Container
const NotificationContainer = styled.div`
  position: relative;
  border-radius: var(--radius-md, 24px);
  border: 1px solid var(--stroke-secondary, #313338);
  background: var(--surface-primary, #202124);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 368px;
  width: 320px;
  cursor: pointer;
  box-sizing: border-box;
  font-family: var(--font-family);
  overflow: hidden;

  @media (max-width: 425px) {
    width: 100%;
  }

  img {
    width: 72px;
    height: auto;
    margin: 0 auto;
  }
`;

const StyledToaster = styled(Toaster)`
  width: 397px;

  @media (max-width: 425px) {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 24px;
  flex: 1;
  box-sizing: border-box;
  gap: 16px;
  align-items: center;
`;

const NotificationTitle = styled.span`
  font-family: 'FK Grotesk Neue', sans-serif;
  color: var(--text-primary);
  text-align: center;
  font-family: var(--font-family);
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px; /* 138.462% */
`;

const NotificationDescription = styled.span`
  font-family: 'FK Grotesk Neue', sans-serif;
  color: var(--text-primary);
  text-align: center;
  font-family: var(--font-family);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.32px;
  overflow: hidden;
`;

const CloseButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  color: #fff;
  padding: 0px;
  position: absolute;
  right: 8px;
  top: 8px;
  border: none;
`;
