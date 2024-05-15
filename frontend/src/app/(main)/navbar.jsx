'use client';
import { useState } from 'react';
import { Container, Group, Burger, Title, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './navbar.module.css';
import Link from 'next/link';

const links = [
  { link: '/user/notes', label: 'View Notes' }
];

function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        // event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Title order={3}>Video Notes</Title>
        <Group gap={3} visibleFrom="xs">
          {items}
        </Group>

         <Group>
        <Button component={Link} href="/signup" variant="filled" color="indigo">Signup</Button>
        <Button component={Link} href="/login" variant="filled" color="indigo">Login</Button>
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}

export default Navbar;