'use client';
import { Container, Text, Title } from '@mantine/core'
import React, { useState } from 'react'
import YouTubePlayer from './YoutubePlayer';

const Notes = ({ selNote, setSelNote, notesList }) => {

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

    return (
        <div>
            {
                notesList.map(note => (
                    <div key={note._id}>
                        <Title order={3}>{note.note}</Title>
                        <Text>{note.time}</Text>
                        <button onClick={() => setSelNote(note)}>Open</button>
                    </div>
                ))
            }
            <Container>

                {
                    selNote && <>
                        {displayNote()}
                        <button onClick={seekTime}>Open</button>
                        {/* {displayVideoFrame()} */}
                        <YouTubePlayer note={selNote} />
                    </>
                }

            </Container>
        </div>
    )
}

export default Notes