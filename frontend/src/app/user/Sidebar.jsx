import { Group, Code, ScrollArea, rem, Title } from '@mantine/core';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from '@tabler/icons-react';
import { UserButton } from './notes/UserButton/UserButton';
import { LinksGroup } from './notes/NavbarLinksGroup/NavbarLinksGroup';
import classes from './sidebar.module.css';

const mockdata = [
  { label: 'Dashboard', icon: IconGauge },
  {
    label: 'Market news',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'Overview', link: '/' },
      { label: 'Forecasts', link: '/' },
      { label: 'Outlook', link: '/' },
      { label: 'Real time', link: '/' },
    ],
  },
  {
    label: 'Releases',
    icon: IconCalendarStats,
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  },
  { label: 'Analytics', icon: IconPresentationAnalytics },
  { label: 'Contracts', icon: IconFileAnalytics },
  { label: 'Settings', icon: IconAdjustments },
  {
    label: 'Security',
    icon: IconLock,
    links: [
      { label: 'Enable 2FA', link: '/' },
      { label: 'Change password', link: '/' },
      { label: 'Recovery codes', link: '/' },
    ],
  },
];

export function Sidebar({ notesList, setSelNote }) {
  const links = notesList.map((category) => <LinksGroup {...category} key={category} setSelNote={setSelNote} />);

  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>

      </div>

      <ScrollArea className={classes.links}>
        {notesList.length === 0 ? (
          <Title align="center" c="dimmed" order={3} style={{ marginTop: rem(20) }}>
            No notes yet
          </Title>
        ) : (
          <div className={classes.linksInner}>{links}</div>
        )}
      </ScrollArea>

      <div className={classes.footer}>
        <UserButton />
      </div>
    </nav>
  );
}