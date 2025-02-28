'use client'
import { LayoutDashboard, LineChart, LogOutIcon, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react'
import { signOut } from 'next-auth/react';

function UserAccountNav({ session }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    function toggleDropDownMenu() {
        setShowDropdown(!showDropdown);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    function showDropDownMenu() {
        return (
            <div
                ref={dropdownRef}
                className='min-w-[200px] bg-[#1a1a1a] shadow-xl border border-gray-800 absolute top-10 left-0 z-50 rounded-lg overflow-hidden'
            >
                <div className='flex flex-col'>
                    <div className='flex items-center border-b-[1px] border-gray-800 px-4 py-3'>
                        <div className='flex-1 min-w-0'>
                            <p className='text-sm font-semibold text-white'>{session.user.name}</p>
                            <p className='text-xs text-gray-400 text-ellipsis overflow-hidden'>{session.user.email}</p>
                            {session.user.role === 'admin' ? (
                                <p className='text-xs font-semibold rounded-md py-1 mt-1 text-red-100 bg-red-900 bg-opacity-50 max-w-16 text-center'>Admin</p>
                            ) : null}
                        </div>
                    </div>

                    <div className='cursor-pointer'>
                        <div className='hover:bg-[#252525] px-4 py-2.5'>
                            <Link href='/profile' className='flex items-center'>
                                <User className='h-4 w-4 mr-2 text-gray-400' />
                                <p className='text-sm text-gray-200'>个人资料</p>
                            </Link>
                        </div>

                        <div className='hover:bg-[#252525] px-4 py-2.5'>
                            <Link href='/dashboard' className='flex items-center'>
                                <LayoutDashboard className='h-4 w-4 mr-2 text-gray-400' />
                                <p className='text-sm text-gray-200'>控制面板</p>
                            </Link>
                        </div>

                        {session.user.role === 'admin' ? (
                            <div className='hover:bg-[#252525] px-4 py-2.5'>
                                <div className='flex items-center'>
                                    <LineChart className='h-4 w-4 mr-2 text-gray-400' />
                                    <p className='text-sm text-gray-200'>数据分析</p>
                                </div>
                            </div>) : null}

                        <div className='hover:bg-red-900/30 px-4 py-2.5 border-t border-gray-800' onClick={() => signOut()}>
                            <div className='flex items-center'>
                                <LogOutIcon className='h-4 w-4 mr-2 text-red-500' />
                                <p className='text-sm text-red-400'>退出登录</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div
            className='relative'
            onClick={toggleDropDownMenu}
        >
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-800 hover:border-red-900 transition-colors cursor-pointer">
                <Image
                    width={32}
                    height={32}
                    className='w-full h-full object-cover'
                    src={session?.user?.image || '/default_avatar.png'}
                    alt='profile pic'
                    referrerPolicy='no-referrer'
                />
            </div>
            {showDropdown && showDropDownMenu()}
        </div>
    )
}

export default UserAccountNav