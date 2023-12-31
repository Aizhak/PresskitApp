import { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import QRLogo from '../assets/Logo_60x60.png'

export default function DefaultNavbar () {
  const [toggle, setToggle] = useState(false)

  return (
    <nav
      className='bg-black-medium text-xl flex justify-between items-center px-4 py-2'
    >
      <div className='hidden md:block text-white'>
        <a href='/login' className='p-5'>
          Login
        </a>
        <a href='/register' className='p-5'>
          Regístrate
        </a>
        <a href='/CreateCardGeneral' className='p-5'>
          Crear Tarjeta (General)
        </a>
        <a href='/CreateCardSNS' className='p-5'>
          Crear Tarjeta (SNS)
        </a>
        <a href='/ShareCard' className='p-5'>
          Compartir Tarjeta
        </a>
        <a href='/Presskit' className='p-5'>
          Presskit
        </a>

      </div>
      <div className='md:hidden flex align-middle justify-center p-1'>
        <BiMenu onClick={(e) => setToggle(!toggle)} className='text-white text-6xl cursor-pointer' />
      </div>
      {toggle
        ? (
          <div className='bg-grey rounded-md absolute top-[80px] flex flex-col'>
            <a href='/login' className='px-5 py-2 flex justify-center items-center text-center'>
              Login
            </a>
            <a href='/register' className='px-5 py-2 flex justify-center items-center text-center'>
              Regístrate
            </a>
            <a href='/CreateCardGeneral' className='px-5 py-2 flex justify-center items-center text-center'>
              Crear Tarjeta (General)
            </a>
            <a href='/CreateCardSNS' className='px-5 py-2 flex justify-center items-center text-center'>
              Crear Tarjeta (SNS)
            </a>
            <a href='/ShareCard' className='px-5 py-2 flex justify-center items-center text-center'>
              Compartir Tarjeta
            </a>
            <a href='/Presskit' className='px-5 py-2 flex justify-center items-center text-center'>
              Presskit
            </a>
          </div>
          )
        : null}
      <a href='/'>
        <img
          alt='Presskit Logo'
          className='mr-3 w-[55px]'
          src={QRLogo}
        />
      </a>
    </nav>
  )
}
