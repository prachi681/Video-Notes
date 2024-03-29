'use client';
import { Container, Text, Button, Group, Title, Grid } from '@mantine/core';
// import { GithubIcon } from '@mantinex/dev-icons';
import classes from './page.module.css';
import { Icon3dRotate } from '@tabler/icons-react';
import Navbar from './(main)/navbar';

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
          React components and hooks library
        </h1>

        <Text className={classes.description} color="dimmed">
          Build fully functional accessible web applications with ease – Mantine includes more than
          100 customizable components and hooks to cover you in any situation
        </Text>

        <Group className={classes.controls}>
          <Button
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
              <Title order={1}>Wait a minute...</Title>
              <Text fw={500} fz="lg" mb={5}>
                Subscribe to our newsletter!
              </Text>
              <Text fz="sm" c="dimmed">
                You will never miss important product updates, latest news and community QA sessions. Our
                newsletter is once a week, every Sunday.
              </Text>
            </div>

          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <img style={{ width: '100%' }} src="/feature-image.svg" />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <img style={{ width: '100%' }} src="/feature-image.svg" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 8 }} my={'auto'}>
            <div className={classes.body}>
              <Title order={1}>Wait a minute...</Title>
              <Text fw={500} fz="lg" mb={5}>
                Subscribe to our newsletter!
              </Text>
              <Text fz="sm" c="dimmed">
                You will never miss important product updates, latest news and community QA sessions. Our
                newsletter is once a week, every Sunday.
              </Text>
            </div>

          </Grid.Col>


        </Grid>

        <Grid>
          <Grid.Col span={{ base: 12, md: 8 }} my={'auto'}>
            <div className={classes.body}>
              <Title order={1}>Wait a minute...</Title>
              <Text fw={500} fz="lg" mb={5}>
                Subscribe to our newsletter!
              </Text>
              <Text fz="sm" c="dimmed">
                You will never miss important product updates, latest news and community QA sessions. Our
                newsletter is once a week, every Sunday.
              </Text>
            </div>

          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <img style={{ width: '100%' }} src="/feature-image.svg" />
          </Grid.Col>
        </Grid>
      </Container>


    </div>

  );
}