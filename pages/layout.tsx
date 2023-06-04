import './global.css';
import React, { ReactNode } from 'react'
import Header from "../src/app/Components/Header"
import Footer from "../src/app/Components/Footer"

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