import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

export function SettingsView() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">设置</h1>
                <p className="text-muted-foreground">管理您的平台设置和偏好。</p>
            </div>

            <Tabs defaultValue="general">
                <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="general">常规</TabsTrigger>
                    <TabsTrigger value="account">账户</TabsTrigger>
                    <TabsTrigger value="payments">支付</TabsTrigger>
                    <TabsTrigger value="notifications">通知</TabsTrigger>
                    <TabsTrigger value="advanced">高级</TabsTrigger>
                </TabsList>

                <TabsContent value="general" className="space-y-6 pt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>网站信息</CardTitle>
                            <CardDescription>关于您平台的基本信息</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="site-name">网站名称</Label>
                                <Input id="site-name" defaultValue="创作者中心" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="site-description">网站描述</Label>
                                <Textarea
                                    id="site-description"
                                    defaultValue="一个供调查记者与订阅者分享高级内容的平台。"
                                    className="resize-none h-20"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="site-logo">网站标志</Label>
                                <div className="flex items-center gap-4">
                                    <div className="h-16 w-16 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                                        创作
                                    </div>
                                    <Button variant="outline">上传新标志</Button>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="site-language">默认语言</Label>
                                <Input id="site-language" defaultValue="中文" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>会员等级</CardTitle>
                            <CardDescription>配置您的会员选项</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label>标准等级</Label>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="standard-monthly">月费&#40;$&#41;</Label>
                                        <Input id="standard-monthly" type="number" defaultValue="10" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="standard-annual">年费&#40;$&#41;</Label>
                                        <Input id="standard-annual" type="number" defaultValue="100" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label>高级等级</Label>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="premium-monthly">月费&#40;$&#41;</Label>
                                        <Input id="premium-monthly" type="number" defaultValue="20" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="premium-annual">年费&#40;$&#41;</Label>
                                        <Input id="premium-annual" type="number" defaultValue="200" />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="flex justify-end">
                        <Button>保存更改</Button>
                    </div>
                </TabsContent>

                <TabsContent value="account" className="space-y-6 pt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>账户安全</CardTitle>
                            <CardDescription>管理您的账户安全设置</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">电子邮箱</Label>
                                <Input id="email" type="email" defaultValue="admin@creatorhub.com" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="current-password">当前密码</Label>
                                <Input id="current-password" type="password" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="new-password">新密码</Label>
                                <Input id="new-password" type="password" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="confirm-password">确认新密码</Label>
                                <Input id="confirm-password" type="password" />
                            </div>

                            <div className="flex items-center justify-between pt-2">
                                <div className="space-y-0.5">
                                    <Label htmlFor="two-factor">双重认证</Label>
                                    <p className="text-sm text-muted-foreground">为您的账户添加额外的安全层</p>
                                </div>
                                <Switch id="two-factor" />
                            </div>
                        </CardContent>
                    </Card>

                    <div className="flex justify-end">
                        <Button>更新账户</Button>
                    </div>
                </TabsContent>

                <TabsContent value="payments" className="space-y-6 pt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>支付处理器</CardTitle>
                            <CardDescription>配置您的支付处理设置</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="stripe-key">Stripe API密钥</Label>
                                <Input id="stripe-key" type="password" defaultValue="sk_test_••••••••••••••••••••••••" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="stripe-webhook">Stripe Webhook网址</Label>
                                <Input id="stripe-webhook" defaultValue="https://creatorhub.com/api/webhooks/stripe" />
                            </div>

                            <div className="flex items-center justify-between pt-2">
                                <div className="space-y-0.5">
                                    <Label htmlFor="paypal-enabled">支付宝集成</Label>
                                    <p className="text-sm text-muted-foreground">启用支付宝作为支付选项</p>
                                </div>
                                <Switch id="paypal-enabled" defaultChecked />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="paypal-client">支付宝客户端ID</Label>
                                <Input id="paypal-client" defaultValue="client_id_••••••••••••••••••••••••" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="paypal-secret">支付宝密钥</Label>
                                <Input id="paypal-secret" type="password" defaultValue="client_secret_••••••••••••••••••••••••" />
                            </div>
                        </CardContent>
                    </Card>

                    <div className="flex justify-end">
                        <Button>保存支付设置</Button>
                    </div>
                </TabsContent>

                <TabsContent value="notifications" className="space-y-6 pt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>通知偏好</CardTitle>
                            <CardDescription>配置您接收通知的方式和时间</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label htmlFor="new-member">新会员通知</Label>
                                    <p className="text-sm text-muted-foreground">当新会员加入时接收通知</p>
                                </div>
                                <Switch id="new-member" defaultChecked />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label htmlFor="payment-notification">支付通知</Label>
                                    <p className="text-sm text-muted-foreground">接收新支付的通知</p>
                                </div>
                                <Switch id="payment-notification" defaultChecked />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label htmlFor="comment-notification">评论通知</Label>
                                    <p className="text-sm text-muted-foreground">
                                        当会员评论您的内容时接收通知
                                    </p>
                                </div>
                                <Switch id="comment-notification" defaultChecked />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label htmlFor="email-digest">每周电子邮件摘要</Label>
                                    <p className="text-sm text-muted-foreground">接收平台活动的每周摘要</p>
                                </div>
                                <Switch id="email-digest" />
                            </div>

                            <div className="space-y-2 pt-2">
                                <Label htmlFor="notification-email">通知邮箱</Label>
                                <Input id="notification-email" type="email" defaultValue="admin@creatorhub.com" />
                            </div>
                        </CardContent>
                    </Card>

                    <div className="flex justify-end">
                        <Button>保存通知设置</Button>
                    </div>
                </TabsContent>

                <TabsContent value="advanced" className="space-y-6 pt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>高级设置</CardTitle>
                            <CardDescription>配置高级平台设置</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="custom-domain">自定义域名</Label>
                                <Input id="custom-domain" defaultValue="creatorhub.com" />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label htmlFor="maintenance-mode">维护模式</Label>
                                    <p className="text-sm text-muted-foreground">暂时禁用对您平台的访问</p>
                                </div>
                                <Switch id="maintenance-mode" />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label htmlFor="analytics">百度统计</Label>
                                    <p className="text-sm text-muted-foreground">启用百度统计跟踪</p>
                                </div>
                                <Switch id="analytics" defaultChecked />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="analytics-id">百度统计ID</Label>
                                <Input id="analytics-id" defaultValue="UA-123456789-1" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="custom-css">自定义CSS</Label>
                                <Textarea
                                    id="custom-css"
                                    placeholder="在此处添加自定义CSS样式"
                                    className="font-mono text-sm resize-none h-32"
                                />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-destructive">
                        <CardHeader>
                            <CardTitle className="text-destructive">危险区域</CardTitle>
                            <CardDescription>平台的不可逆操作</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-medium">删除所有内容</h4>
                                    <p className="text-sm text-muted-foreground">永久删除平台上的所有内容</p>
                                </div>
                                <Button variant="destructive">删除所有内容</Button>
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-medium">删除平台</h4>
                                    <p className="text-sm text-muted-foreground">
                                        永久删除您的平台和所有相关数据
                                    </p>
                                </div>
                                <Button variant="destructive">删除平台</Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

