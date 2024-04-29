'use client';
import { Container, Text, Button, Group, Title, Grid } from '@mantine/core';
// import { GithubIcon } from '@mantinex/dev-icons';
import classes from './page.module.css';
import { Icon3dRotate } from '@tabler/icons-react';
import Navbar from './(main)/navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Container size={'xl'} className={classes.inner}>
        <h1 className={classes.title}>
          A{' '}
          <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
            fully featured
          </Text>{' '}
          visual notes for videos
        </h1>

        <Text className={classes.description} color="dimmed">
          Take screenshots and capture slides automatically on videos on YouTube, Udemy, Coursera & more!
          Capturing Information from videos Made Easy
        </Text>

        <Group className={classes.controls}>
          <Button
            component={Link}
            href="/user/notes"
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan' }}
          >
            Get started
          </Button>

          <Button
            component="a"
            href="https://github.com/mantinedev/mantine"
            size="xl"
            variant="default"
            className={classes.control}
            leftSection={<Icon3dRotate size={20} />}
          >
            GitHub
          </Button>
        </Group>
      </Container>

      <Container size={'xl'}>
        <Grid>
          <Grid.Col span={{ base: 12, md: 8 }} my={'auto'}>
            <div className={classes.body}>
              <Title order={1}>javascripts...</Title>
              <Text fw={500} fz="lg" mb={5}>
                javascripts loops!
              </Text>
              <Text fz="sm" c="dimmed">
                review your screenshots, notes and bookmarks for any video in web app. click on a note to play the video from the right point.
              </Text>
            </div>

          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <img style={{ width: '100%' }} src="/img3.png" />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <img style={{ width: '100%' }} src="/img2.png" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 8 }} my={'auto'}>
            <div className={classes.body}>
              <Title order={1}>javascripts...</Title>
              <Text fw={500} fz="lg" mb={5}>
                compact view!
              </Text>
              <Text fz="sm" c="dimmed">
                organise your videos into notebooks and search across all notes and transcripts
              </Text>
            </div>

          </Grid.Col>


        </Grid>

        <Grid>
          <Grid.Col span={{ base: 12, md: 8 }} my={'auto'}>
            <div className={classes.body}>
              <Title order={1}>javascripts...</Title>
              <Text fw={500} fz="lg" mb={5}>
                lectures!
              </Text>
              <Text fz="sm" c="dimmed">
                your screenshots and notes on any web video become bookmark into that video
              </Text>
            </div>

          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <img style={{ width: '100%' }} src="/img1.png" />
          </Grid.Col>
        </Grid>
      </Container>


    </div>

  );
}