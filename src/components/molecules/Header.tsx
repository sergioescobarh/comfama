import React from 'react'
import { HeartOutlined } from '@ant-design/icons'
import Link from 'next/link'

type Props = {}

export default function Header({ }: Props) {
    return (
        <header className='header'>
            <Link href={'/'}>
            <h2>Comfama</h2>
            </Link>
            <div>
            <Link href={'/Favorites'} className='right'>
                <HeartOutlined  style={{ fontSize: 40, color: 'blue' }} />
            </Link>
            </div>
            
        </header>
    )
}