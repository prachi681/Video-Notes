'use client';
import { Container, Text, Title } from '@mantine/core'
import React, { useState } from 'react'

const Notes = ({ selNote, notesList }) => {

    const displayNote = () => {
        return <div>
            <Title order={3}>{selNote.note}</Title>
            <Text>{selNote.time}</Text>
        </div>
    }

    const displayVideoFrame = () => {
        if (selNote.type === 'youtube') {
            return <iframe width="914" height="514" src={`https://www.youtube.com/embed/${selNote.videoId}`} title="Cracked Amazon as Data Analyst | List of companies hiring for Data Analyst profile" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        }
    }

    const seekTime = () => {
        console.log(document.getElementsByTagName('video'));
        document.querySelector('.video-stream')
        .currentTime = selNote.videoTime;
    }

    return (
        <div>
            <Container>

                {/* {
                    selNote && <>
                        {displayNote()}
                        <button onClick={seekTime}>Open</button>
                        {displayVideoFrame()}
                    </>
                } */}

            </Container>
        </div>
    )
}

export default Notes