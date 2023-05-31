import React from 'react'
import { Button } from 'antd'
import { HeartOutlined, AppstoreOutlined } from '@ant-design/icons'
import Link from 'next/link'

type Props = {}

export default function Header({ }: Props) {
    return (
        <header className='header'>
            
                <Button type='primary' href={'/'}>
                <AppstoreOutlined style={{ fontSize: 25 }} />
                </Button>
                
           
            
            <Button type='primary' href={'/Favorites'} >
            <HeartOutlined style={{ fontSize: 27, color: 'pink' }} />
                </Button>
                
            
        </header>
    )
}