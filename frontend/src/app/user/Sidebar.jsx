import { Group, Code, ScrollArea, rem, Title } from '@mantine/core';
import { UserButton } from './notes/UserButton/UserButton';
import { LinksGroup } from './notes/NavbarLinksGroup/NavbarLinksGroup';
import classes from './sidebar.module.css';
import useAppContext from '@/context/AppContext';


export function Sidebar({ notesList, setSelNote }) {

  const links = notesList.map((category) => <LinksGroup {...category} key={category} setSelNote={setSelNote} />);

  const { currentUser, loggedIn } = useAppContext();

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

      {
        loggedIn &&
        <div className={classes.footer}>
          <UserButton currentUser={currentUser} />
        </div>
      }
    </nav>
  );
}