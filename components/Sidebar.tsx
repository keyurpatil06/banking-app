'use client'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = ({ user }: SiderbarProps) => {
    const pathname = usePathname();

    return (
        <section className='sidebar'>
            <nav className="flex flex-col gap-4">
                <Link href='/' className='flex mb-12 cursor-pointer items-center gap-2'>
                    <Image
                        src='/icons/logo.svg'
                        width={34}
                        height={34}
                        alt='Horizon logo'
                        className='size-[24px] max-xl:size-14'
                    />
                    <h1 className="sidebar-logo">Horizon</h1>
                </Link>

                {sidebarLinks.map(({ imgURL, route, label }) => {
                    const isActive = pathname === route || pathname.startsWith(`${route}/`)

                    return (
                        <Link href={route} key={label} className={cn('sidebar-link', { 'bg-bankGradient': isActive })}>
                            <div className="relative size-6">
                                <Image
                                    src={imgURL}
                                    alt={label}
                                    fill
                                    className={cn({ 'brightness-[3] invert-0': isActive })}
                                />
                            </div>
                            <p className={cn('sidebar-label', { '!text-white': isActive })}>{label}</p>
                        </Link>
                    )
                })}

                USER
            </nav>
            
            FOOTER
        </section >
    )
}

export default Sidebar
