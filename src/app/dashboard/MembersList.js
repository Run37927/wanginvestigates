"use client"

import { useState } from "react"
import { Search, Filter, UserCheck, UserX, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function MembersList() {
    const [searchQuery, setSearchQuery] = useState("")
    const [statusFilter, setStatusFilter] = useState("all")
    const [selectedMember, setSelectedMember] = useState(null)
    const [showMemberDetails, setShowMemberDetails] = useState(false)

    const members = [
        {
            id: 1,
            name: "sarah",
            email: "sarah.j@example.com",
            avatar: "/users/user-1.png",
            initials: "SJ",
            status: "active",
            plan: "premium",
            joined: "2023-01-15",
            expires: "2024-01-15",
            payments: 12,
            recentContent: [
                { title: "调查报告：气候危机", date: "2023-06-10" },
                { title: "科技CEO专访", date: "2023-06-05" },
            ],
            paymentHistory: [{ id: "INV-001", amount: 120, date: "2023-01-15", method: "信用卡" }],
        },
        {
            id: 2,
            name: "mike",
            email: "michael.c@example.com",
            avatar: "/users/user-2.png",
            initials: "MC",
            status: "active",
            plan: "premium",
            joined: "2022-11-20",
            expires: "2023-11-20",
            payments: 8,
            recentContent: [{ title: "分析：经济影响", date: "2023-06-08" }],
            paymentHistory: [{ id: "INV-002", amount: 120, date: "2022-11-20", method: "支付宝" }],
        },
        {
            id: 3,
            name: "elena",
            email: "elena.r@example.com",
            avatar: "/users/user-3.png",
            initials: "ER",
            status: "active",
            plan: "standard",
            joined: "2023-03-05",
            expires: "2023-09-05",
            payments: 3,
            recentContent: [{ title: "幕后：调查过程", date: "2023-06-12" }],
            paymentHistory: [{ id: "INV-003", amount: 60, date: "2023-03-05", method: "信用卡" }],
        },
        {
            id: 4,
            name: "david",
            email: "david.k@example.com",
            avatar: "/users/user-1.png",
            initials: "DK",
            status: "active",
            plan: "standard",
            joined: "2023-05-18",
            expires: "2023-11-18",
            payments: 1,
            recentContent: [],
            paymentHistory: [{ id: "INV-004", amount: 60, date: "2023-05-18", method: "支付宝" }],
        },
        {
            id: 5,
            name: "jessica",
            email: "jessica.t@example.com",
            avatar: "/users/user-2.png",
            initials: "JT",
            status: "expired",
            plan: "premium",
            joined: "2022-08-10",
            expires: "2023-02-10",
            payments: 6,
            recentContent: [],
            paymentHistory: [{ id: "INV-005", amount: 120, date: "2022-08-10", method: "信用卡" }],
        },
        {
            id: 6,
            name: "robert",
            email: "robert.w@example.com",
            avatar: "/users/user-3.png",
            initials: "RW",
            status: "cancelled",
            plan: "standard",
            joined: "2022-12-01",
            expires: "2023-03-01",
            payments: 3,
            recentContent: [],
            paymentHistory: [{ id: "INV-006", amount: 60, date: "2022-12-01", method: "信用卡" }],
        },
    ]

    const filteredMembers = members.filter((member) => {
        const matchesSearch =
            member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            member.email.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesStatus = statusFilter === "all" || member.status === statusFilter

        return matchesSearch && matchesStatus
    })

    const handleViewMember = (member) => {
        setSelectedMember(member)
        setShowMemberDetails(true)
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">会员</h1>
                <p className="text-muted-foreground">管理您的订阅者和会员。</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>会员列表</CardTitle>
                    <CardDescription>查看和管理所有平台会员</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 mb-4">
                        <div className="flex items-center space-x-2 w-full md:w-1/2">
                            <div className="relative w-full">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="搜索会员..."
                                    className="w-full pl-8"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Select value={statusFilter} onValueChange={setStatusFilter}>
                                <SelectTrigger className="w-[180px]">
                                    <Filter className="mr-2 h-4 w-4" />
                                    <SelectValue placeholder="订阅状态" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">所有会员</SelectItem>
                                    <SelectItem value="active">活跃</SelectItem>
                                    <SelectItem value="expired">已过期</SelectItem>
                                    <SelectItem value="cancelled">已取消</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>会员</TableHead>
                                    <TableHead>状态</TableHead>
                                    <TableHead>套餐</TableHead>
                                    <TableHead>加入日期</TableHead>
                                    <TableHead>到期日期</TableHead>
                                    <TableHead>付款次数</TableHead>
                                    <TableHead className="text-right">操作</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredMembers.map((member) => (
                                    <TableRow key={member.id}>
                                        <TableCell>
                                            <div className="flex items-center space-x-3">
                                                <Avatar>
                                                    <AvatarImage src={member.avatar} alt={member.name} />
                                                    <AvatarFallback>{member.initials}</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <p className="font-medium">{member.name}</p>
                                                    <p className="text-sm text-muted-foreground">{member.email}</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge
                                                variant={
                                                    member.status === "active"
                                                        ? "default"
                                                        : member.status === "expired"
                                                            ? "destructive"
                                                            : "outline"
                                                }
                                                className="flex items-center gap-1 w-fit"
                                            >
                                                {member.status === "active" ? (
                                                    <UserCheck className="h-3 w-3" />
                                                ) : member.status === "expired" ? (
                                                    <Clock className="h-3 w-3" />
                                                ) : (
                                                    <UserX className="h-3 w-3" />
                                                )}
                                                {member.status === "active" ? "活跃" :
                                                    member.status === "expired" ? "已过期" : "已取消"}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="secondary">
                                                {member.plan === "premium" ? "高级" : "标准"}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>{member.joined}</TableCell>
                                        <TableCell>{member.expires}</TableCell>
                                        <TableCell>{member.payments}</TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="sm" onClick={() => handleViewMember(member)}>
                                                查看详情
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>

            {selectedMember && (
                <Dialog open={showMemberDetails} onOpenChange={setShowMemberDetails}>
                    <DialogContent className="max-w-3xl">
                        <DialogHeader>
                            <DialogTitle>会员详情</DialogTitle>
                            <DialogDescription>关于{selectedMember.name}的详细信息</DialogDescription>
                        </DialogHeader>

                        <div className="flex items-center space-x-4 py-4">
                            <Avatar className="h-16 w-16">
                                <AvatarImage src={selectedMember.avatar} alt={selectedMember.name} />
                                <AvatarFallback className="text-lg">{selectedMember.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                                <h3 className="text-xl font-bold">{selectedMember.name}</h3>
                                <p className="text-muted-foreground">{selectedMember.email}</p>
                                <div className="flex items-center gap-2 mt-1">
                                    <Badge
                                        variant={
                                            selectedMember.status === "active"
                                                ? "default"
                                                : selectedMember.status === "expired"
                                                    ? "destructive"
                                                    : "outline"
                                        }
                                    >
                                        {selectedMember.status === "active" ? "活跃" :
                                            selectedMember.status === "expired" ? "已过期" : "已取消"}
                                    </Badge>
                                    <Badge variant="secondary">
                                        {selectedMember.plan === "premium" ? "高级" : "标准"}套餐
                                    </Badge>
                                </div>
                            </div>
                        </div>

                        <Tabs defaultValue="subscription">
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="subscription">订阅</TabsTrigger>
                                <TabsTrigger value="content">内容活动</TabsTrigger>
                                <TabsTrigger value="payments">支付历史</TabsTrigger>
                            </TabsList>

                            <TabsContent value="subscription" className="space-y-4 pt-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium">加入日期</p>
                                        <p>{selectedMember.joined}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium">到期日期</p>
                                        <p>{selectedMember.expires}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium">订阅套餐</p>
                                        <p>{selectedMember.plan === "premium" ? "高级" : "标准"}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium">总付款次数</p>
                                        <p>{selectedMember.payments}</p>
                                    </div>
                                </div>

                                <div className="flex gap-2 pt-4">
                                    <Button variant="outline">延长订阅</Button>
                                    <Button variant="outline">Extend Subscription</Button>
                                    <Button variant="destructive">Cancel Subscription</Button>
                                </div>
                            </TabsContent>

                            <TabsContent value="content" className="pt-4">
                                {selectedMember.recentContent.length > 0 ? (
                                    <div className="space-y-4">
                                        <h4 className="font-medium">Recently Accessed Content</h4>
                                        <div className="rounded-md border">
                                            <Table>
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead>Content Title</TableHead>
                                                        <TableHead>Access Date</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    {selectedMember.recentContent.map((content, i) => (
                                                        <TableRow key={i}>
                                                            <TableCell>{content.title}</TableCell>
                                                            <TableCell>{content.date}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center py-8 text-muted-foreground">No content activity recorded yet.</div>
                                )}
                            </TabsContent>

                            <TabsContent value="payments" className="pt-4">
                                <div className="rounded-md border">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Invoice</TableHead>
                                                <TableHead>Amount</TableHead>
                                                <TableHead>Date</TableHead>
                                                <TableHead>Payment Method</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {selectedMember.paymentHistory.map((payment) => (
                                                <TableRow key={payment.id}>
                                                    <TableCell>{payment.id}</TableCell>
                                                    <TableCell>${payment.amount}</TableCell>
                                                    <TableCell>{payment.date}</TableCell>
                                                    <TableCell>{payment.method}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    )
}

