import React from 'react'
import { LinkedinOutlined, GithubOutlined } from '@ant-design/icons'
import Link from 'next/link'

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className='footer'>
        <div className='col1' >
            <h4>Reto técnico Front-end realizado para Comfama</h4>
        </div>
        <div className='col2' >
            <Link href={'https://www.linkedin.com/in/sergio-andr%C3%A9s-escobar-henao-9b099a21a/'}>
                <div className='ln'>
                <LinkedinOutlined />
            <h6>Sergio Andrés Escobar Henao</h6>
                </div>
            </Link>
            <Link href={'https://github.com/sergioescobarh'}>
                <div className='ln'>
                <GithubOutlined />
            <h6>Perfil de GitHub</h6>
                </div>
            </Link>

            
        </div>
        <div className='col3' >Prueba el proyecto desplegado y la selección de favoritos que se guarda en tu navegador!</div>
    </footer>
  )
}