import { UnstyledButton, Group, Avatar, Text, rem } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import classes from './UserButton.module.css';
import useAppContext from '@/context/AppContext';

export function UserButton({ currentUser }) {

  return (
    <UnstyledButton className={classes.user}>
      <Group>
        <Avatar
          src={`${process.env.NEXT_PUBLIC_API_URL}/${currentUser.avatar}`}
          radius="xl"
        />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            {currentUser.name}
          </Text>

          <Text c="dimmed" size="xs">
            {currentUser.email}
          </Text>
        </div>

        <IconChevronRight style={{ width: rem(14), height: rem(14) }} stroke={1.5} />
      </Group>
    </UnstyledButton>
  );
}