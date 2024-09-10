'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaX } from 'react-icons/fa6'

const HeaderGlobal = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    return (
        <>
            <header className="fixed flex bg-primary-200 justify-between items-center flex-row w-screen z-40 ">
                <Image src="/icon.png" alt="icon" width={100} height={100} />
                <button
                    onClick={() => {
                        setOpenMenu(!openMenu)
                    }}
                    className={
                        'flex w-8 h-8 mr-7 justify-center items-center sm:hidden'
                    }
                >
                    {openMenu ? (
                        <FaX className="h-full w-full" />
                    ) : (
                        <FaBars className="h-full w-full" />
                    )}
                </button>
                <nav className="hidden sm:flex justify-center items-center mr-10 ">
                    <ul className="flex justify-center items-center text-primary-400 gap-10  text-3xl">
                        <li>
                            <Link
                                href="/about"
                                className="font-fredoka transition ease-in-out delay-50 hover:text-primary-300 hover:bg-white rounded-md p-2"
                            >
                                Sobre Nós
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/menu"
                                className="font-fredoka transition ease-in-out delay-50 hover:text-primary-300 hover:bg-white rounded-md p-2"
                            >
                                Menu
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contacts"
                                className="font-fredoka transition ease-in-out delay-50 hover:text-primary-300 hover:bg-white rounded-md p-2"
                            >
                                Contatos
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            {openMenu && (
                <div className="absolute inset-0 bg-primary-200  flex flex-col items-center justify-center z-30">
                    <nav className="flex flex-col space-y-6 text-primary-400 text-3xl">
                        <Link className="font-fredoka " href="/about">
                            Sobre Nós
                        </Link>
                        <Link className="font-fredoka " href="/menu">
                            Menu
                        </Link>
                        <Link className="font-fredoka " href="/contacts">
                            Contatos
                        </Link>
                    </nav>
                </div>
            )}
        </>
    )
}

export default HeaderGlobal
