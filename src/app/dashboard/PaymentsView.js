"use client"

import { useState } from "react"
import { Search, Filter, Download, CreditCard, DollarSign, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RevenueChart } from "./RevenueChart"

export function PaymentsView() {
    const [searchQuery, setSearchQuery] = useState("")
    const [timeRange, setTimeRange] = useState("month")

    const payments = [
        {
            id: "INV-001",
            customer: "莎拉·约翰逊",
            email: "sarah.j@example.com",
            amount: 120,
            date: "2023-06-15",
            status: "completed",
            method: "信用卡",
            plan: "高级（年度）",
        },
        {
            id: "INV-002",
            customer: "陈明",
            email: "michael.c@example.com",
            amount: 120,
            date: "2023-06-10",
            status: "completed",
            method: "支付宝",
            plan: "高级（年度）",
        },
        {
            id: "INV-003",
            customer: "艾琳娜·罗德里格斯",
            email: "elena.r@example.com",
            amount: 60,
            date: "2023-06-05",
            status: "completed",
            method: "信用卡",
            plan: "标准（半年）",
        },
        {
            id: "INV-004",
            customer: "金大卫",
            email: "david.k@example.com",
            amount: 60,
            date: "2023-05-18",
            status: "completed",
            method: "支付宝",
            plan: "标准（半年）",
        },
        {
            id: "INV-005",
            customer: "杰西卡·泰勒",
            email: "jessica.t@example.com",
            amount: 120,
            date: "2023-02-10",
            status: "refunded",
            method: "信用卡",
            plan: "高级（年度）",
        },
        {
            id: "INV-006",
            customer: "罗伯特·威尔逊",
            email: "robert.w@example.com",
            amount: 60,
            date: "2023-01-01",
            status: "completed",
            method: "信用卡",
            plan: "标准（半年）",
        },
    ]

    const filteredPayments = payments.filter((payment) => {
        const matchesSearch =
            payment.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
            payment.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            payment.id.toLowerCase().includes(searchQuery.toLowerCase())

        return matchesSearch
    })

    const totalRevenue = payments
        .filter((payment) => payment.status !== "refunded")
        .reduce((sum, payment) => sum + payment.amount, 0)

    const monthlyRevenue = payments
        .filter((payment) => {
            const paymentDate = new Date(payment.date)
            const currentDate = new Date()
            return (
                payment.status !== "refunded" &&
                paymentDate.getMonth() === currentDate.getMonth() &&
                paymentDate.getFullYear() === currentDate.getFullYear()
            )
        })
        .reduce((sum, payment) => sum + payment.amount, 0)

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">支付</h1>
                <p className="text-muted-foreground">管理您的收入和支付交易。</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">总收入</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground">终身收益</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">月收入</CardTitle>
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">¥{monthlyRevenue.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground">当前月份</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">活跃订阅</CardTitle>
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">4</div>
                        <p className="text-xs text-muted-foreground">经常性收入</p>
                    </CardContent>
                </Card>
            </div>

            <Tabs defaultValue="transactions">
                <TabsList>
                    <TabsTrigger value="transactions">交易</TabsTrigger>
                    <TabsTrigger value="analytics">分析</TabsTrigger>
                </TabsList>
                <TabsContent value="transactions" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>支付历史</CardTitle>
                            <CardDescription>查看和管理所有支付交易</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 mb-4">
                                <div className="flex items-center space-x-2 w-full md:w-1/2">
                                    <div className="relative w-full">
                                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            type="search"
                                            placeholder="搜索交易..."
                                            className="w-full pl-8"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Select value={timeRange} onValueChange={setTimeRange}>
                                        <SelectTrigger className="w-[180px]">
                                            <Filter className="mr-2 h-4 w-4" />
                                            <SelectValue placeholder="时间范围" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="week">本周</SelectItem>
                                            <SelectItem value="month">本月</SelectItem>
                                            <SelectItem value="quarter">本季度</SelectItem>
                                            <SelectItem value="year">今年</SelectItem>
                                            <SelectItem value="all">所有时间</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Button variant="outline" size="icon">
                                        <Download className="h-4 w-4" />
                                        <span className="sr-only">下载CSV</span>
                                    </Button>
                                </div>
                            </div>

                            <div className="rounded-md border">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>发票</TableHead>
                                            <TableHead>客户</TableHead>
                                            <TableHead>金额</TableHead>
                                            <TableHead>日期</TableHead>
                                            <TableHead>状态</TableHead>
                                            <TableHead>支付方式</TableHead>
                                            <TableHead>套餐</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {filteredPayments.map((payment) => (
                                            <TableRow key={payment.id}>
                                                <TableCell className="font-medium">{payment.id}</TableCell>
                                                <TableCell>
                                                    <div>
                                                        <p>{payment.customer}</p>
                                                        <p className="text-sm text-muted-foreground">{payment.email}</p>
                                                    </div>
                                                </TableCell>
                                                <TableCell>¥{payment.amount}</TableCell>
                                                <TableCell>{payment.date}</TableCell>
                                                <TableCell>
                                                    <Badge variant={payment.status === "completed" ? "default" : "destructive"}>
                                                        {payment.status === "completed" ? "已完成" : "已退款"}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell>{payment.method}</TableCell>
                                                <TableCell>{payment.plan}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="analytics" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>收入趋势</CardTitle>
                            <CardDescription>过去6个月的月收入</CardDescription>
                        </CardHeader>
                        <CardContent className="h-[400px]">
                            <RevenueChart />
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

