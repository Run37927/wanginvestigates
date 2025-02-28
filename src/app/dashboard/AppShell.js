"use client"

import { useState } from "react"
import { BarChart3, FileText, Users, CreditCard, Settings, Menu, Bell, Search, LogOut, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent } from "@/components/ui/sheet"

export function AppShell({ children, currentView, onNavigate, onCreateContent }) {
    const [open, setOpen] = useState(false)

    const navigation = [
        { name: "总览", icon: BarChart3, view: "dashboard" },
        { name: "内容", icon: FileText, view: "content" },
        { name: "会员", icon: Users, view: "members" },
        { name: "支付", icon: CreditCard, view: "payments" },
        { name: "设置", icon: Settings, view: "settings" },
    ]

    return (
        <div className="flex h-screen bg-muted/40">
            {/* Sidebar for desktop */}
            <div className="hidden md:flex md:w-64 md:flex-col">
                <div className="flex flex-col flex-grow border-r border-gray-200 bg-white pt-5">
                    <div className="flex items-center flex-shrink-0 px-4">
                        <div className="h-8 w-8 rounded-full bg-primary"></div>
                        <span className="ml-2 text-xl font-semibold">创作者中心</span>
                    </div>
                    <div className="mt-8 flex flex-grow flex-col">
                        <nav className="flex-1 space-y-1 px-2">
                            {navigation.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => onNavigate(item.view)}
                                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full ${currentView === item.view ? "bg-primary text-primary-foreground" : "text-gray-600 hover:bg-gray-100"
                                        }`}
                                >
                                    <item.icon
                                        className={`mr-3 h-5 w-5 ${currentView === item.view ? "text-primary-foreground" : "text-gray-400 group-hover:text-gray-500"
                                            }`}
                                        aria-hidden="true"
                                    />
                                    {item.name}
                                </button>
                            ))}
                        </nav>
                    </div>
                    {onCreateContent && (
                        <div className="p-4">
                            <Button onClick={onCreateContent} className="w-full">
                                创建内容
                            </Button>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile menu */}
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetContent side="left" className="w-64 p-0">
                    <div className="flex flex-col flex-grow bg-white pt-5 h-full">
                        <div className="flex items-center flex-shrink-0 px-4">
                            <div className="h-8 w-8 rounded-full bg-primary"></div>
                            <span className="ml-2 text-xl font-semibold">创作者中心</span>
                        </div>
                        <div className="mt-8 flex flex-grow flex-col">
                            <nav className="flex-1 space-y-1 px-2">
                                {navigation.map((item) => (
                                    <button
                                        key={item.name}
                                        onClick={() => {
                                            onNavigate(item.view)
                                            setOpen(false)
                                        }}
                                        className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full ${currentView === item.view
                                            ? "bg-primary text-primary-foreground"
                                            : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                    >
                                        <item.icon
                                            className={`mr-3 h-5 w-5 ${currentView === item.view
                                                ? "text-primary-foreground"
                                                : "text-gray-400 group-hover:text-gray-500"
                                                }`}
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                    </button>
                                ))}
                            </nav>
                        </div>
                        {onCreateContent && (
                            <div className="p-4">
                                <Button
                                    onClick={() => {
                                        onCreateContent()
                                        setOpen(false)
                                    }}
                                    className="w-full"
                                >
                                    创建内容
                                </Button>
                            </div>
                        )}
                    </div>
                </SheetContent>
            </Sheet>

            {/* Main content */}
            <div className="flex flex-1 flex-col">
                <div className="border-b border-gray-200 bg-white">
                    <div className="flex h-16 items-center justify-between px-4">
                        <div className="flex items-center md:hidden">
                            <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">打开侧边栏</span>
                            </Button>
                        </div>
                        <div className="flex flex-1 justify-center px-2 md:ml-6 md:justify-end">
                            <div className="w-full max-w-lg lg:max-w-xs">
                                <div className="relative">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <Input type="text" placeholder="搜索" className="block w-full rounded-md pl-10" />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Button variant="ghost" size="icon">
                                <Bell className="h-5 w-5" />
                                <span className="sr-only">查看通知</span>
                            </Button>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="rounded-full">
                                        <img className="h-8 w-8 rounded-full" src="/users/user-1.png" alt="用户头像" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>我的账户</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <User className="mr-2 h-4 w-4" />
                                        <span>个人资料</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Settings className="mr-2 h-4 w-4" />
                                        <span>设置</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <LogOut className="mr-2 h-4 w-4" />
                                        <span>退出登录</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>
                <main className="flex-1 overflow-y-auto bg-muted/40 p-6">{children}</main>
            </div>
        </div>
    )
}

