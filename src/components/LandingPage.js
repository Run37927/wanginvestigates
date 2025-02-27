"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Shield, Lock, Users, ArrowRight, Menu, X, Twitter, Youtube } from 'lucide-react'
import { Button, buttonVariants } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function LandingPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [progress, setProgress] = useState(65)
    const [timeLeft, setTimeLeft] = useState({
        hours: 47,
        minutes: 59,
        seconds: 59
    })

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 }
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
                } else if (prev.hours > 0) {
                    return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
                }
                return prev
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const formatTime = (value) => value.toString().padStart(2, '0')

    return (
        <div className="min-h-screen bg-[#121212] text-white">
            {/* Navigation */}
            <nav className="fixed z-50 transition-all duration-300 backdrop-blur-md border-gray-800 bg-black/90 shadow-lg border mx-auto rounded-full w-fit max-w-3xl left-0 right-0 top-8">
                <div className="container mx-auto px-8 py-3 flex justify-between items-center">
                    <div className="hidden md:flex items-center space-x-14 font-bold">
                        <Link href="/" className="hover:text-red-500 transition">首页</Link>
                        <Link href="/members" className="hover:text-red-500 transition">会员专区</Link>
                        <Link href="/censored" className="hover:text-red-500 transition">被封杀内容</Link>
                        <Link href="/tech" className="hover:text-red-500 transition">技术架构</Link>
                        <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                            登录
                        </Button>
                    </div>

                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-black/95 border-b border-gray-800">
                        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                            <Link href="/" className="hover:text-red-500 transition py-2">首页</Link>
                            <Link href="/members" className="hover:text-red-500 transition py-2">会员专区</Link>
                            <Link href="/censored" className="hover:text-red-500 transition py-2">被封杀内容</Link>
                            <Link href="/about" className="hover:text-red-500 transition py-2">关于王志安</Link>
                            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-full">
                                登录
                            </Button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden hero-gradient">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="glitch-text text-[20vw] font-display opacity-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        404
                    </div>
                </div>
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#121212] z-10"></div>
                    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-30"></div>

                    {/* Animated censored fragments */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                    >
                        {Array.from({ length: 20 }).map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute text-red-600 font-bold opacity-20"
                                initial={{
                                    x: Math.random() * 1000 - 500,
                                    y: Math.random() * 1000 - 500,
                                    rotate: Math.random() * 180,
                                    opacity: 0
                                }}
                                animate={{
                                    x: Math.random() * 200 - 100,
                                    y: Math.random() * 200 - 100,
                                    rotate: Math.random() * 30 - 15,
                                    opacity: 0.2
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 5,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                                style={{
                                    fontSize: `${Math.random() * 30 + 20}px`,
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                            >
                                {["404", "已删除", "审查", "封号", "违规", "敏感", "禁止访问"][Math.floor(Math.random() * 7)]}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className="container mx-auto px-4 z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 via-white to-teal-600 bg-clip-text text-transparent">
                            <span className="">王志安</span>·不妥协真相基地
                        </h1>

                        <motion.p
                            className="text-xl md:text-2xl mb-8 text-gray-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            100%独立 · 0%平台抽成 · 不再担心封号
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.8 }}
                        >
                            <Button className="bg-gradient-to-r font-bold from-red-700 to-red-500 hover:from-red-600 hover:to-red-400 text-white px-8 py-6 text-lg shadow-lg shadow-red-900/20 group">
                                立即加入创始会员
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition" />
                            </Button>
                            <Link
                                href="/censored"
                                className={cn(
                                    buttonVariants({ variant: "outline" }),
                                    "backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors px-8 py-6 text-lg font-bold"
                                )}
                            >
                                查看被封杀内容
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-[#0a0a0a]">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-16">为什么选择<span className="text-red-600">不妥协真相基地</span></h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 hover:border-red-900 transition">
                            <div className="bg-red-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                                <Lock className="text-red-500 w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">内容永不消失</h3>
                            <p className="text-gray-400 mb-4">采用IPFS分布式存储、CDN防屏蔽技术和海外服务器，确保内容永久保存。</p>
                            <div className="flex items-center text-red-500 font-bold">
                                <span className="text-2xl mr-2">0%</span> 删帖率
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 hover:border-red-900 transition">
                            <div className="bg-red-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                                <Shield className="text-red-500 w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">收益100%归创作者</h3>
                            <p className="text-gray-400 mb-4">告别平台抽成，所有会员费用直接支持调查报道，无中间商赚差价。</p>
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-gray-500">YouTube</span>
                                    <span className="text-red-500 font-bold">抽成30%</span>
                                </div>
                                <div className="text-2xl">vs</div>
                                <div className="flex flex-col">
                                    <span className="text-gray-500">真相基地</span>
                                    <span className="text-green-500 font-bold">抽成0%</span>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 hover:border-red-900 transition">
                            <div className="bg-red-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                                <Users className="text-red-500 w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">粉丝深度互动</h3>
                            <p className="text-gray-400 mb-4">专属会员社群、直播互动、调查方向投票，共同参与真相探索。</p>
                            <div className="flex items-center text-red-500 font-bold">
                                <span className="text-2xl mr-2">2000+</span> 会员社群
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Countdown Section */}
            <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#121212]">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">成为前1000名创始会员，解锁永久特权</h2>
                        <p className="text-gray-400 mb-12">永久9折优惠、独家内测访问权、线上线下VIP活动席位</p>

                        <div className="mb-6">
                            <div className="flex justify-between mb-2">
                                <span>已售出 {progress * 10} 席位</span>
                                <span>剩余 {1000 - progress * 10} 席位</span>
                            </div>
                            <Progress value={progress} className="h-2 bg-gray-800" />
                        </div>

                        <div className="mb-12">
                            <p className="text-gray-400 mb-4">创始会员名额倒计时</p>
                            <div className="flex justify-center gap-4">
                                <div className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-800 w-20">
                                    <div className="text-3xl font-bold">{formatTime(timeLeft.hours)}</div>
                                    <div className="text-xs text-gray-500">小时</div>
                                </div>
                                <div className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-800 w-20">
                                    <div className="text-3xl font-bold">{formatTime(timeLeft.minutes)}</div>
                                    <div className="text-xs text-gray-500">分钟</div>
                                </div>
                                <div className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-800 w-20">
                                    <div className="text-3xl font-bold">{formatTime(timeLeft.seconds)}</div>
                                    <div className="text-xs text-gray-500">秒</div>
                                </div>
                            </div>
                        </div>

                        <Button className="bg-gradient-to-r from-red-700 to-red-500 hover:from-red-600 hover:to-red-400 text-white px-8 py-6 text-lg shadow-lg shadow-red-900/20">
                            立即锁定创始会员资格
                        </Button>
                    </div>
                </div>
            </section>

            {/* Censored Content Preview */}
            <section className="py-20 bg-[#0a0a0a]">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-6">这些可能随时消失的调查视频，仅在此基地永久留存</h2>
                    <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                        这些内容已在主流平台被删除或限流，在这里您可以无限制访问所有真相调查
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <div key={i} className="group relative overflow-hidden rounded-lg aspect-video cursor-pointer">
                                <Image
                                    src={`/noise.png?height=200&width=350&text=被封视频${i + 1}`}
                                    alt={`被封视频${i + 1}`}
                                    width={350}
                                    height={200}
                                    className="w-full h-full object-cover filter blur-sm brightness-50 group-hover:blur-none group-hover:brightness-75 transition-all duration-300"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <div className="bg-red-600/80 px-3 py-1 rounded text-sm mb-2">已被删除</div>
                                    <div className="text-center px-4">
                                        <h3 className="font-bold mb-1 text-sm md:text-base">
                                            {["揭露黑幕", "调查真相", "深度访谈", "现场直击"][i % 4]} #{i + 1}
                                        </h3>
                                    </div>
                                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="text-center p-4">
                                            <p className="text-sm mb-2">此内容需要会员权限</p>
                                            <Button variant="outline" size="sm" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                                                解锁观看
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href="/censored"
                            className={cn(
                                buttonVariants({ variant: "outline" }),
                                "backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors px-8 py-6 text-lg font-bold"
                            )}
                        >
                            查看更多被封杀内容
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black py-12 border-t border-gray-800">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="font-bold text-xl mb-4">
                                <span className="text-red-600">王志安</span>·不妥协真相基地
                            </h3>
                            <p className="text-gray-400 text-sm">
                                100%独立 · 0%平台抽成 · 不再担心封号
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold mb-4">快速链接</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li><Link href="/" className="hover:text-red-500 transition">首页</Link></li>
                                <li><Link href="/members" className="hover:text-red-500 transition">会员专区</Link></li>
                                <li><Link href="/censored" className="hover:text-red-500 transition">被封杀内容</Link></li>
                                <li><Link href="/about" className="hover:text-red-500 transition">关于王志安</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-4">会员服务</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li><Link href="/pricing" className="hover:text-red-500 transition">会员价格</Link></li>
                                <li><Link href="/faq" className="hover:text-red-500 transition">常见问题</Link></li>
                                <li><Link href="/terms" className="hover:text-red-500 transition">服务条款</Link></li>
                                <li><Link href="/privacy" className="hover:text-red-500 transition">隐私政策</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-4">关注我们</h4>
                            <div className="flex space-x-4">
                                <Link href="https://twitter.com" className="text-gray-400 hover:text-red-500 transition">
                                    <FaXTwitter className="size-4" />
                                </Link>
                                <Link href="https://youtube.com" className="text-gray-400 hover:text-red-500 transition">
                                    <FaYoutube className="size-4" />
                                </Link>
                            </div>
                            <p className="text-gray-500 text-sm mt-4">
                                <Link href="/tech" className="text-gray-500 hover:text-red-500 transition">
                                    查看技术架构图
                                </Link>
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 text-center text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} 王志安·不妥协真相基地. 保留所有权利.
                    </div>
                </div>
            </footer>
        </div>
    )
}