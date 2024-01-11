'use client';
import React from 'react';

import * as yup from 'yup';
import { useStyles } from './LoginForm.styles';
import Text from '@stryberventures/gaia-react.text';
import Form from '@stryberventures/gaia-react.form';
import Input from '@stryberventures/gaia-react.input';
import InputPassword from '@stryberventures/gaia-react.input-password';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import Image from 'next/image';
import Link from 'next/link';
import { useLoginMutation } from '@/services/api/auth';

const validationSchema = yup.object().shape({
  username: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

type TFormData = {
  username: string;
  password: string;
};

export const LoginForm = () => {
  const { mutate: getAccessToken } = useLoginMutation();

  const onFormSubmit = (formData: TFormData) => {
    const { username, password } = formData;
    getAccessToken({
      username,
      password,
    });
  };

  const classes = useStyles();
  return (
    <main className={classes.container}>
      <div className={classes.formWrapper}>
        <Form
          className={classes.form}
          validationSchema={validationSchema}
          onSubmit={onFormSubmit}
        >
          <div className={classes.formTitleWrapper}>
            <Text className={classes.title} component='h3' weight='bold'>
              يا مرحبا بيك
            </Text>
            <Text className={classes.subtitle} variant='body2'>
              قم بتسجيل الدخول بادخال بياناتك
            </Text>
          </div>
          <Input
            name='username'
            className={classes.input}
            fullWidth
            label='البريد الالكتروني'
            placeholder='البريد الالكتروني'
          />
          <InputPassword
            name='password'
            className={classes.input}
            fullWidth
            label='كلمة المرور'
            placeholder='كلمة المرور'
          />
          <Link href='#' className={classes.link}>
            <Text>هل نسيت كلمة المرور؟</Text>
          </Link>
          <CustomButton fullWidth type='submit'>
            تسجيل الدخول
          </CustomButton>
        </Form>
        <div className={classes.image}>
          <Image
            objectPosition='center'
            objectFit='cover'
            fill
            sizes='100vw'
            src='/header.png'
            alt='تواصل مع مستشار التمويل'
          />
        </div>
      </div>
    </main>
  );
};
