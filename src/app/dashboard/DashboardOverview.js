import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, Users, FileText, DollarSign, TrendingUp, Eye } from "lucide-react"
import { RecentActivityList } from "./RecentActivityList"
import { MemberGrowthChart } from "./MemberGrowthChart"
import { RevenueChart } from "./RevenueChart"

export function DashboardOverview() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">后台管理</h1>
                <p className="text-muted-foreground">平台性能和活动概览。</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">会员总数</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,248</div>
                        <p className="text-xs text-muted-foreground flex items-center">
                            <span className="text-green-500 flex items-center mr-1">
                                <ArrowUpRight className="h-3 w-3 mr-1" />
                                12%
                            </span>
                            较上月
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">新增订阅者</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">145</div>
                        <p className="text-xs text-muted-foreground flex items-center">
                            <span className="text-green-500 flex items-center mr-1">
                                <ArrowUpRight className="h-3 w-3 mr-1" />
                                18%
                            </span>
                            较上月
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">月收入</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$8,942</div>
                        <p className="text-xs text-muted-foreground flex items-center">
                            <span className="text-green-500 flex items-center mr-1">
                                <ArrowUpRight className="h-3 w-3 mr-1" />
                                7%
                            </span>
                            较上月
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">已发布内容</CardTitle>
                        <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">87</div>
                        <p className="text-xs text-muted-foreground">24篇文章，63个视频</p>
                    </CardContent>
                </Card>
            </div>

            <Tabs defaultValue="growth">
                <TabsList>
                    <TabsTrigger value="growth">会员增长</TabsTrigger>
                    <TabsTrigger value="revenue">收入</TabsTrigger>
                </TabsList>
                <TabsContent value="growth" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>会员增长</CardTitle>
                            <CardDescription>过去6个月的新订阅者</CardDescription>
                        </CardHeader>
                        <CardContent className="h-[300px]">
                            <MemberGrowthChart />
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="revenue" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>收入趋势</CardTitle>
                            <CardDescription>过去6个月的月收入</CardDescription>
                        </CardHeader>
                        <CardContent className="h-[300px]">
                            <RevenueChart />
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>

            <div className="grid gap-6 md:grid-cols-2">
                <Card className="col-span-1">
                    <CardHeader>
                        <CardTitle>最近活动</CardTitle>
                        <CardDescription>最新平台活动和更新</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <RecentActivityList />
                    </CardContent>
                </Card>

                <Card className="col-span-1">
                    <CardHeader>
                        <CardTitle>热门内容</CardTitle>
                        <CardDescription>本月最多观看的内容</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                { title: "调查报道：气候危机", views: 2456, type: "文章" },
                                { title: "科技CEO专访", views: 1832, type: "视频" },
                                { title: "分析：经济影响", views: 1654, type: "文章" },
                                { title: "幕后：调查过程", views: 1245, type: "视频" },
                            ].map((content, i) => (
                                <div key={i} className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium">{content.title}</p>
                                        <p className="text-sm text-muted-foreground">{content.type}</p>
                                    </div>
                                    <div className="flex items-center text-muted-foreground">
                                        <Eye className="h-4 w-4 mr-1" />
                                        <span>{content.views}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

