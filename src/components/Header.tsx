import React from 'react'
import { HeartOutlined } from '@ant-design/icons'
type Props = {}

export default function Header({ }: Props) {
    return (
        <header className='header'>
            <img src="https://cdn.leonardo.ai/users/ac0a2dde-445c-4723-af7c-3d669913ecb6/generations/60f99aeb-4835-4e41-9423-15499a1bacc4/DreamShaper_v5_Anime_web_aplication_logo_3.jpg" alt="logo" />
            <div className='right'>
                <HeartOutlined  style={{ fontSize: 40, color: 'pink' }} />
            </div>
        </header>
    )
}