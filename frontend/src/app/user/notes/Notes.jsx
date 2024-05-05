'use client';
import { Button, Container, Text, Title } from '@mantine/core'
import React, { useState } from 'react'
import YouTubePlayer from './YoutubePlayer';
import toast from 'react-hot-toast';
import { IconTrash } from '@tabler/icons-react';

const Notes = ({ selNote, setSelNote, notesList, fetchUserNotes }) => {

    const displayNote = () => {
        return <div>
            <Title order={3}>{selNote.note}</Title>
            <Text>{selNote.time}</Text>
        </div>
    }

    const displayVideoFrame = () => {
        if (selNote.type === 'youtube') {
            return <iframe width="914" height="514" src={`https://www.youtube.com/embed/${selNote.videoId ? selNote.videoId : 'UKF91_m_B2Q'}`} title="Cracked Amazon as Data Analyst | List of companies hiring for Data Analyst profile" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        }
    }

    const seekTime = () => {
        console.log(document.getElementsByTagName('video'));
        document.querySelector('.video-stream')
            .currentTime = selNote.videoTime;
    }

    const deleteNote = () => {
        fetch(`http://localhost:5000/note/delete/${selNote._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (response.status === 200) {
                console.log('Note deleted');
                toast.success('Note deleted');
                // setSelNote(null);
                fetchUserNotes();
            }
        }
        ).catch((err) => {
            console.log(err);
            toast.error('Failed to delete note');
        });
    }

    return (
        <div>
            <Container size="xl">
                {
                    selNote && <>
                        <Button onClick={deleteNote} color='red' leftSection={
                            <IconTrash size={16} />
                        }>Delete</Button>
                        {displayNote()}
                        <YouTubePlayer note={selNote} />
                    </>
                }

            </Container>
        </div>
    )
}

export default Notes