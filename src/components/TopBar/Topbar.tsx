'use client';
import React, { useCallback } from 'react';

import LogoIcon from '@/components/Icons/logo.svg';
import LoginIcon from '@/components/Icons/login.svg';
import { useStyles } from './TopBar.styles';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { ToggleButton } from '@/components/TopBar/ToggleButton';
import classNames from 'classnames';
import { usePathname, useRouter } from 'next/navigation';
import { AuthenticatedTopbar } from './AuthenticatedTopbar';
import Link from 'next/link';

type MenuItem = {
  title: string;
  link: string;
};

const menuItems: MenuItem[] = [
  { title: 'مدونة', link: '/blog' },
  { title: 'اسئلة شائعة', link: '/faq' },
  { title: 'عن تمويلي', link: '/about-us' },
];

export const TopBar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const classes = useStyles();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const renderMenuItems = useCallback(
    () =>
      menuItems.map((item, index) => {
        return (
          <CustomButton
            size='small'
            onClick={() => router.push(item.link)}
            key={index}
            variant='ghost'
            active={pathName === item.link}
          >
            {item.title}
          </CustomButton>
        );
      }),
    [pathName, router]
  );

  const renderNavigationActions = useCallback(
    () => (
      <>
        <CustomButton
          mode='dark'
          variant='outlined'
          iconLeft={<LoginIcon />}
          onClick={() => router.push('/login')}
        >
          تسجيل الدخول
        </CustomButton>
        <Link href='/apply'>
          <CustomButton>قدّم الآن</CustomButton>
        </Link>
      </>
    ),
    []
  );

  const renderMobileMenu = () => {
    return (
      <div
        className={classNames(classes.mobileMenu, {
          [classes.mobileOpen]: isOpen,
        })}
      >
        {renderMenuItems()}
        <div className={classes.navigationActions}>
          {renderNavigationActions()}
        </div>
      </div>
    );
  };

  // TODO: authenticated topbar should be visible if user is logged in
  if (pathName === '/dashboard') {
    return <AuthenticatedTopbar />;
  }

  return (
    <nav className={classes.navigation}>
      <LogoIcon />
      <ToggleButton isOpen={isOpen} onClick={handleToggle} />
      <div className={classes.navigationItems}>
        {renderNavigationActions()}
        {renderMenuItems()}
      </div>
      {renderMobileMenu()}
    </nav>
  );
};
