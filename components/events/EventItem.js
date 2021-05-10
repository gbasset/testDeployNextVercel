import React from 'react';
import Image from 'next/image';
import classes from './EventItem.module.css';
import Btn from '../UI/Btn'
import DateIcon from '../icons/date-icon';
import AdressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
export default function EventItem({ item }) {
    console.log(item);
    let humanReadableDate = new Date(item.date).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const formatedAdresse = item.location.replace(', ', '/n');
    const exploreLink = `/events/${item.id}`
    return (
        <li className={classes.item}>
            <Image src={'/' + item.image} alt={item.title} width={250} height={160} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{item.title}</h2>
                    <div className={classes.date}>
                        <DateIcon />
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AdressIcon />
                        <address>{formatedAdresse}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Btn link={exploreLink}>
                        <span>
                            Event
                    </span>
                        <span className={classes.icon}>
                            <ArrowRightIcon />
                        </span>
                    </Btn>
                </div>
            </div>
        </li>
    )
}
