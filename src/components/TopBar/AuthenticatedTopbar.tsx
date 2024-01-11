'use client';
import Button from '@stryberventures/gaia-react.button';
import { useStyles } from './TopBar.styles';
import LogoIcon from '@/components/Icons/logo.svg';
import AccountIcon from '@/assets/icons/account_circle.svg';
import BellIcon from '@/assets/icons/notifications.svg';
import LogoutIcon from '@/assets/icons/logout.svg';
import BoardIcon from '@/assets/icons/board.svg';
import Text from '@stryberventures/gaia-react.text';
import { useState } from 'react';
import { useOutsideClick } from '@/hooks/useOutsideClick';

// TODO: implement mobile version when design is complete
export const AuthenticatedTopbar = () => {
  const classes = useStyles({ dashboard: true });
  const [menuVisible, setMenuVisible] = useState(false);
  const profileMenuRef = useOutsideClick(() => {
    toggleMenuVisible();
  });

  const toggleMenuVisible = () => {
    setMenuVisible((menuVisible) => !menuVisible);
  };

  return (
    <nav className={classes.navigation}>
      <LogoIcon />
      <div className={classes.userInfoLabel}>
        <Text className={classes.userName}>عبد الله محمد</Text>
        <Text className={classes.userDateOfBirth}>19 جماد الاول 1445</Text>
      </div>
      <div className={classes.navigationItems}>
        <div className={classes.userProfileButton}>
          <Button
            icon={<AccountIcon />}
            shape='circle'
            variant='ghost'
            onClick={toggleMenuVisible}
          />
          {menuVisible ? (
            <div className={classes.userProfileMenu} ref={profileMenuRef}>
              <Button
                variant='ghost'
                className={classes.userProfileMenuButton}
                icon={<AccountIcon className={classes.userProfileMenuIcon} />}
              >
                تعديل المعلومات
              </Button>
              <Button
                variant='ghost'
                className={classes.userProfileMenuButton}
                icon={<BoardIcon className={classes.userProfileMenuIcon} />}
              >
                لوحة التحكم
              </Button>
              <Button
                variant='ghost'
                className={classes.userProfileMenuButton}
                icon={<LogoutIcon className={classes.userProfileMenuIcon} />}
              >
                تسجيل الخروج
              </Button>
            </div>
          ) : null}
        </div>
        <div className={classes.notificationsButton}>
          <Button icon={<BellIcon />} shape='circle' variant='ghost' />
          {/* TODO: display number of pending notifications */}
          <div className={classes.notificationsLabel}>2</div>
        </div>
      </div>
    </nav>
  );
};
