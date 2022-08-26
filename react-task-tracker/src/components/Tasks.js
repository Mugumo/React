import React from 'react';

const tasks=[
    {
        id:1,
        text:"finish react course",
        date:"Aug 26th at 10:50am",
        done:false,
    },
    {
        id:2,
        text:"nhif registration",
        date:"Sep 2nd at 9:00am",
        done:false,
    },
    {
        id:3,
        text:"research power apps",
        date:"Sep 4th at 14:00pm",
        done:false,
    },
    {
        id:4,
        text:"find next js course",
        date:"Sep 5th at 11:00am",
        done:false,
    },
]

const Tasks = () => {
    return (
        tasks.map(
            (task)=>(
            <h3>{task.text}</h3>)
            )
        )
}

export default Tasks;