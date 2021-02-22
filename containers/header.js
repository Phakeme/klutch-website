import React from 'react'
import { Header } from '../components'

export function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Inner>
                    {children}
            </Header.Inner>
        </Header>
    )
}