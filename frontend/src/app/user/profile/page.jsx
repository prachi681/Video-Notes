'use client';
import Navbar from "@/app/(main)/navbar";
import { Button, Container, FileButton, Grid, Group, Image, TextInput, Title, rem } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconAt, IconLock, IconUpload, IconUserSquareRounded } from "@tabler/icons-react";
import { useState } from "react";
import toast from "react-hot-toast";

const UserProfile = () => {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const profileForm = useForm({
    initialValues: currentUser
  });

  const handleSubmitForm = async (values) => {
    console.log(values);
    // console.log(import.meta.env.VITE_API_URL);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/update/${currentUser._id}`, {
      method: 'PUT',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log(res.status);

    if (res.status === 200) {
      toast.success('Profile Updated');
      const data = await res.json();
      console.log(data);
      setCurrentUser(data);
      sessionStorage.setItem('user', JSON.stringify(data));

    } else {
      toast.error('Failed to update profile');
    }

  }

  const handleFileUpload = async (file) => {
    // const file = e.target.files[0];
    const fd = new FormData();
    fd.append("myfile", file);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/util/uploadfile`, {
      method: "POST",
      body: fd,
    });
    if (res.status === 200) {
      console.log("file uploaded");
      // enqueueSnackbar('Profile Image Uploaded', { variant: 'success' });

      await handleSubmitForm({ avatar: file.name });
    }
  }

  return (
    <div>
      <Navbar />
      <Container size="xl">

        <Title order={1} mb="lg">Manage Profile</Title>
        <form onSubmit={profileForm.onSubmit(handleSubmitForm)}>
          <Grid gutter={{ base: 'xl' }}>
            <Grid.Col span={{ base: 12, md: 4 }}>

              <Image w="100%" h={300}
                fit="contain" src={`${process.env.NEXT_PUBLIC_API_URL}/${currentUser.avatar}`} alt="" />

            </Grid.Col>
            <Grid.Col my="auto" h="100%" span={{ base: 12, md: 8 }}>

              <TextInput
                mb="lg"
                required
                label="Name"
                leftSection={<IconUserSquareRounded style={{ width: rem(16), height: rem(16) }} />}
                {...profileForm.getInputProps('name')}
                radius="md"
              />
              <TextInput
                mb="lg"
                required
                label="Email Address"
                leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
                {...profileForm.getInputProps('email')}
                radius="md"
              />
              <TextInput
                mb="lg"
                required
                label="Password"
                leftSection={<IconLock style={{ width: rem(16), height: rem(16) }} />}
                {...profileForm.getInputProps('password')}
                radius="md"
              />
              <Group mt="lg">
                <FileButton accept="image/png,image/jpeg" onChange={handleFileUpload}>
                  {(props) => <Button color="red" radius="md" {...props} leftSection={<IconUpload size={14} />}> Upload Profile Image</Button>}
                </FileButton>
                <Button

                  radius="md"
                  type='submit'
                >Submit</Button>

              </Group>


            </Grid.Col>
          </Grid>
        </form>
      </Container>
    </div>
  )
}

export default UserProfile;