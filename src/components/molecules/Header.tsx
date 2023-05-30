import React from 'react'
import { HeartOutlined } from '@ant-design/icons'
import Link from 'next/link'

type Props = {}

export default function Header({ }: Props) {
    return (
        <header className='header'>
            <Link href={'/'}>
                <h1>Comfama</h1>
            </Link>
            <Link href={'/Favorites'} className='right'>
                <HeartOutlined style={{ fontSize: 40, color: 'blue' }} />
            </Link>
        </header>
    )
}