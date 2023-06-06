import React from 'react'
import '../style/timeline.css'

export const Timeline = () => {
    return (
        <div id='timeline'>
            <div className='timelineBox'>
                    <TimelineItem heading='Sr. Ops Officer' text='Aug 2022-May-2023' index={1}/>
                    <TimelineItem heading='Social Media Cord.' text='Aug 2022-May-2023' index={2}/>
                    <TimelineItem heading='Placement Cord.' text='Jan 2023-April-2024' index={3}/>
                    <TimelineItem heading='Business Analyst' text='Jan 2023-April-2023' index={4}/>
            </div>
        </div>
    )
}

const TimelineItem = ({ heading, text, index }) => (
    <div className={`timelineItem ${index % 2 === 0 ? 'leftTimeline' : 'rightTimeline'}`}>
        <div>
            <h2>{heading}</h2>
            <p>{text}</p>
        </div>
    </div >
);