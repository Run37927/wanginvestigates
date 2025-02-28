import Link from 'next/link'
import UserAuthForm from './UserAuthForm'
import CloseModalButton from './ui/close-modal-btn'

function SignIn() {
    return (
        <div className='fixed inset-0 bg-[#121212] backdrop-blur-sm z-50'>
            <div className='container flex items-center h-full max-w-lg mx-auto'>
                <div className='relative bg-white w-full h-fit rounded-2xl py-20 px-2'>
                    <div className='absolute top-6 right-6'>
                        <CloseModalButton />
                    </div>
                    <div className='flex flex-col items-center justify-center px-3 md:px-10 relative'>
                        <h1 className='text-center text-3xl font-bold py-8'>登录<span className='text-red-600'>王志安</span>·不妥协真相基地</h1>

                        <div className='flex items-center justify-center mb-20'>
                            <p className='text-center text-xs max-w-[300px]'>
                                继续操作即表示您同意创建账号（如果您还没有账号），并且同意我们的<Link href='/user-agreement' className='underline cursor-pointer' target="_blank" rel="noopener noreferrer">用户协议</Link>
                            </p>
                        </div>

                        <UserAuthForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn