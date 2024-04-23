'use client';
import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
} from '@mantine/core';
import classes from './signup.module.css';
import { useForm } from '@mantine/form';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Link from 'next/link';

function Signup() {

  const router = useRouter();

  const signupForm = useForm({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },

    validate: {
      name: (value) => value.trim().length > 0 ? null : 'Name is required',
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => value.trim().length >= 4 ? null : 'Password is too short',
    }
  });

  const formSubmit = (values) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
      .then(response => {
        if (response.status === 200) {
          toast.success('User created successfully');
          router.push('/login');
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
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Start Your Journey with Us!
        </Title>

        <form onSubmit={signupForm.onSubmit(formSubmit)}>


          <TextInput label="Name"
            placeholder="your name"
            size="md"
            {...signupForm.getInputProps('name')}
          />

          <TextInput label="Email address"
            placeholder="address@gmail.com"
            size="md"
            {...signupForm.getInputProps('email')}
          />
          <PasswordInput label="Password" placeholder="Your password" mt="md" size="md"
            {...signupForm.getInputProps('password')}
          />

          <Button type='submit' fullWidth mt="xl" size="md">
            Signup
          </Button>

        </form>
        <Text ta="center" mt="md">
          Already Registered?
          <Anchor component={Link} href="/login" fw={700} >
            Login Now
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
}

export default Signup;