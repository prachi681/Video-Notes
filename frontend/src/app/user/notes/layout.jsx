'use client'
import { AppShell, Burger, Group, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Sidebar } from '../Sidebar';
import { useEffect, useState } from 'react';
import Notes from './Notes';

export default function Layout({children}) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const [notesList, setNotesList] = useState([]);
  const [selNote, setSelNote] = useState(null);

  const [uniqueCategories, setUniqueCategories] = useState([]);

  const fetchUserNotes = () => {
    fetch('http://localhost:5000/note/getall')
    .then((response) => {
        if(response.status === 200){
            response.json()
            .then((data) => {
                console.log(data);  
                setNotesList(data);
                setUniqueCategories(
                  [...new Set(data.map(item => item.category))]
                )
                console.log([...new Set(data.map(item => item.category))]);
                setSelNote(data[0]);
            })
        }
    }).catch((err) => {
        console.log(err);
    });
  }

  useEffect(() => {
    fetchUserNotes();
  }, [])
  

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
          <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
          
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
            <Sidebar notesList={notesList} />
      </AppShell.Navbar>
      <AppShell.Main>
        <Notes selNote={selNote} notesList={notesList}/>
      </AppShell.Main>
    </AppShell>
  );
}