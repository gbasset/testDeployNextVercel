
import Link from 'next/link'
import React from 'react'
import classes from './btn.module.css'
export default function Btn({ link, children, onclick }) {
    if (link) {
        return (
            <Link href={link}>
                <a className={classes.btn}>{children}</a>
            </Link>
        )
    }
    else {
        return (
            <button onClick={onclick} className={classes.btn}>
                {children}
            </button>
        )
    }
}
