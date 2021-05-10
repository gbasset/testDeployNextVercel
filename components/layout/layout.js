import React from 'react'
import MainHeader from './main-header'
export default function layout({ children }) {
    return (
        <>
            <MainHeader />
            <main>
                {children}
            </main>
        </>
    )
}
