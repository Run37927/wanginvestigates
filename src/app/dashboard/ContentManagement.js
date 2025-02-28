"use client"

import { useState } from "react"
import { FileText, Video, MoreHorizontal, Eye, Lock, Plus, Search, Filter, AudioLines } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export function ContentManagement({ onEditContent, onCreateContent }) {
    const [searchQuery, setSearchQuery] = useState("")
    const [contentType, setContentType] = useState("all")
    const [accessType, setAccessType] = useState("all")

    const contentItems = [
        {
            id: 1,
            title: "调查报告：气候危机",
            type: "article",
            status: "published",
            access: "premium",
            date: "2023-06-15",
            views: 2456,
        },
        {
            id: 2,
            title: "科技CEO专访",
            type: "video",
            status: "published",
            access: "premium",
            date: "2023-06-10",
            views: 1832,
        },
        {
            id: 3,
            title: "分析：经济影响",
            type: "article",
            status: "published",
            access: "free",
            date: "2023-06-05",
            views: 1654,
        },
        {
            id: 4,
            title: "幕后：调查过程",
            type: "audio",
            status: "published",
            access: "premium",
            date: "2023-05-28",
            views: 1245,
        },
        {
            id: 5,
            title: "即将发布：政治分析",
            type: "article",
            status: "draft",
            access: "premium",
            date: "2023-06-18",
            views: 0,
        },
        {
            id: 6,
            title: "六月月度总结",
            type: "article",
            status: "draft",
            access: "free",
            date: "2023-06-30",
            views: 0,
        },
    ]

    const filteredContent = contentItems.filter((item) => {
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesType = contentType === "all" || item.type === contentType
        const matchesAccess = accessType === "all" || item.access === accessType

        return matchesSearch && matchesType && matchesAccess
    })

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">内容管理</h1>
                    <p className="text-muted-foreground">管理您的文章、视频和其他内容。</p>
                </div>
                <Button onClick={onCreateContent}>
                    <Plus className="mr-2 h-4 w-4" />
                    创建内容
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>内容库</CardTitle>
                    <CardDescription>浏览、搜索和管理您的所有内容</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 mb-4">
                        <div className="flex items-center space-x-2 w-full md:w-1/2">
                            <div className="relative w-full">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="搜索内容..."
                                    className="w-full pl-8"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Select value={contentType} onValueChange={setContentType}>
                                <SelectTrigger className="w-[130px]">
                                    <Filter className="mr-2 h-4 w-4" />
                                    <SelectValue placeholder="内容类型" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">所有类型</SelectItem>
                                    <SelectItem value="article">文章</SelectItem>
                                    <SelectItem value="video">视频</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select value={accessType} onValueChange={setAccessType}>
                                <SelectTrigger className="w-[130px]">
                                    <SelectValue placeholder="访问类型" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">所有访问</SelectItem>
                                    <SelectItem value="free">免费</SelectItem>
                                    <SelectItem value="premium">高级</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>标题</TableHead>
                                    <TableHead>类型</TableHead>
                                    <TableHead>状态</TableHead>
                                    <TableHead>访问</TableHead>
                                    <TableHead>日期</TableHead>
                                    <TableHead>浏览量</TableHead>
                                    <TableHead className="text-right">操作</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredContent.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell className="font-medium">{item.title}</TableCell>
                                        <TableCell>
                                            <div className="flex items-center">
                                                {item.type === "article" ? (
                                                    <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
                                                ) : item.type === "video" ? (
                                                    <Video className="mr-2 h-4 w-4 text-muted-foreground" />
                                                ) : (
                                                    <AudioLines className="mr-2 h-4 w-4 text-muted-foreground" />
                                                )}
                                                {item.type === "article" ? "文章" : item.type === "video" ? "视频" : "音频"}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant={item.status === "published" ? "default" : "secondary"}>
                                                {item.status === "published" ? "已发布" : "草稿"}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center">
                                                {item.access === "premium" ? (
                                                    <Lock className="mr-2 h-4 w-4 text-amber-500" />
                                                ) : (
                                                    <Eye className="mr-2 h-4 w-4 text-green-500" />
                                                )}
                                                {item.access === "premium" ? "高级" : "免费"}
                                            </div>
                                        </TableCell>
                                        <TableCell>{item.date}</TableCell>
                                        <TableCell>{item.views.toLocaleString()}</TableCell>
                                        <TableCell className="text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="icon">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                        <span className="sr-only">操作</span>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuLabel>操作</DropdownMenuLabel>
                                                    <DropdownMenuItem onClick={() => onEditContent(item)}>编辑</DropdownMenuItem>
                                                    <DropdownMenuItem>查看分析</DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem className="text-destructive">删除</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

