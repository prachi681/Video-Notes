'use client'
import { AppShell, Burger, Group, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Sidebar } from '../Sidebar';
import { useEffect, useState } from 'react';
import Notes from './Notes';

export default function Layout({ children }) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const [notesList, setNotesList] = useState([]);
  const [selNote, setSelNote] = useState(null);

  const [uniqueCategories, setUniqueCategories] = useState([]);

  const [categoryData, setCategoryData] = useState([]);

  const fetchUserNotes = () => {
    fetch('http://localhost:5000/note/getall')
      .then((response) => {
        if (response.status === 200) {
          response.json()
            .then((data) => {
              // console.log(data);
              setNotesList(data);
              const categories = [...new Set(data.map(item => item.category))];
              setUniqueCategories(categories);
              // console.log(categories);
              const temp = categories.map(category => {
                return {
                  category: category,
                  notes: data.filter(note => note.category === category)
                }
              });
              console.log(temp);
              setCategoryData(temp)
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
        <Sidebar setSelNote={setSelNote} notesList={categoryData} />
      </AppShell.Navbar>
      <AppShell.Main>
        <Notes
        selNote={selNote}
        notesList={notesList}
        setSelNote={setSelNote}
        fetchUserNotes={fetchUserNotes}
        />
      </AppShell.Main>
    </AppShell>
  );
}