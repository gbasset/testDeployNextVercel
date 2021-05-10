import React from 'react';
import Eventitem from './EventItem'
import classes from './EventList.module.css';
export default function EventList({ items }) {
    return (
        <ul className={classes.list}>
            {items.map(event =>
                <Eventitem key={event.id} item={event} />
            )}
        </ul>
    )
}
