import React, { ReactNode } from 'react'
import Header from "../Components/Header"
import Footer from "../Components/Footer"

interface Props {
    children?: ReactNode
}

export default function MainLayout({ children }: Props) {
    return <>
        <Header />
        {children}
        <Footer />
    </>
}