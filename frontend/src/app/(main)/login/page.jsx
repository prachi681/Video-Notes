'use client';
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';
import classes from './AuthenticationTitle.module.css';
import { useRouter } from 'next/navigation';
import { useForm } from '@mantine/form';
import useAppContext from '@/context/AppContext';
import Link from 'next/link';
import toast from 'react-hot-toast';

function Login() {

  const router = useRouter();

  const { setCurrentUser, setLoggedIn } = useAppContext();

  const loginForm = useForm({
    initialValues: {
      email: '',
      password: ''
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => value.trim().length > 0 ? null : 'Password is required'
    }
  });

  const formSubmit = (values) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/authenticate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
      .then(response => {
        if (response.status === 200) {
          toast.success('User created successfully');
          response.json()
            .then((data) => {
              setCurrentUser(data);
              setLoggedIn(true);
              sessionStorage.setItem('user', JSON.stringify(data));
              router.push('/');
            })
        } else {
          toast.error('Failed to create user');
        }
      })
      .catch(err => {
        console.error(err);
        toast.error('Failed to create user');

      });

  }

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome back!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{' '}
        <Anchor size="sm" component={Link} href='/signup'>
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={loginForm.onSubmit(formSubmit)}>

          <TextInput label="Email Address" placeholder="you@mail.com" {...loginForm.getInputProps('email')} />
          <PasswordInput label="Password" placeholder="Your password" mt="md" {...loginForm.getInputProps('password')} />
          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component={Link} href='/reset-password' size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button type='submit' fullWidth mt="xl">
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Login;