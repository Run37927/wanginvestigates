"use client"

import { useState } from "react"
import { Save, X, ImageIcon, Link, Bold, Italic, List, ListOrdered, VideoIcon, Eye, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"

export function ContentEditor({ content, onClose }) {
    const isEditing = !!content

    const [title, setTitle] = useState(content?.title || "")
    const [contentType, setContentType] = useState(content?.type || "article")
    const [isPremium, setIsPremium] = useState(content?.access === "premium" || false)
    const [status, setStatus] = useState(content?.status || "draft")

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">{isEditing ? "编辑内容" : "创建新内容"}</h1>
                    <p className="text-muted-foreground">
                        {isEditing ? "更新您现有的内容" : "为您的会员创建并发布新内容"}
                    </p>
                </div>
                <Button variant="ghost" size="icon" onClick={onClose}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">关闭</span>
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-6">
                <div className="md:col-span-4 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>内容详情</CardTitle>
                            <CardDescription>关于您内容的基本信息</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="title">标题</Label>
                                <Input
                                    id="title"
                                    placeholder="为您的内容输入标题"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="content-type">内容类型</Label>
                                <Select value={contentType} onValueChange={setContentType}>
                                    <SelectTrigger id="content-type">
                                        <SelectValue placeholder="选择内容类型" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="article">文章</SelectItem>
                                        <SelectItem value="video">视频</SelectItem>
                                        <SelectItem value="audio">音频</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {contentType === "video" && (
                                <div className="space-y-2">
                                    <Label htmlFor="video-url">视频链接</Label>
                                    <Input id="video-url" placeholder="输入YouTube或Vimeo链接" />
                                    <p className="text-sm text-muted-foreground">粘贴YouTube或Vimeo链接以嵌入视频</p>
                                </div>
                            )}

                            <div className="space-y-2">
                                <Label htmlFor="excerpt">摘要</Label>
                                <Textarea id="excerpt" placeholder="写一段简短的摘要或总结" className="resize-none h-20" />
                                <p className="text-sm text-muted-foreground">
                                    这将显示在内容预览和搜索结果中
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>内容编辑器</CardTitle>
                            <CardDescription>编写和格式化您的内容</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Tabs defaultValue="write">
                                <TabsList className="mb-4">
                                    <TabsTrigger value="write">编写</TabsTrigger>
                                    <TabsTrigger value="preview">预览</TabsTrigger>
                                </TabsList>
                                <TabsContent value="write">
                                    <div className="border rounded-md p-2 mb-4">
                                        <div className="flex items-center gap-1 border-b pb-2 mb-2">
                                            <Button variant="ghost" size="icon" title="粗体">
                                                <Bold className="h-4 w-4" />
                                            </Button>
                                            <Button variant="ghost" size="icon" title="斜体">
                                                <Italic className="h-4 w-4" />
                                            </Button>
                                            <Button variant="ghost" size="icon" title="链接">
                                                <Link className="h-4 w-4" />
                                            </Button>
                                            <Button variant="ghost" size="icon" title="无序列表">
                                                <List className="h-4 w-4" />
                                            </Button>
                                            <Button variant="ghost" size="icon" title="有序列表">
                                                <ListOrdered className="h-4 w-4" />
                                            </Button>
                                            <Button variant="ghost" size="icon" title="插入图片">
                                                <ImageIcon className="h-4 w-4" />
                                            </Button>
                                            <Button variant="ghost" size="icon" title="插入视频">
                                                <VideoIcon className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        <Textarea
                                            placeholder="在此处编写您的内容..."
                                            className="min-h-[400px] border-0 focus-visible:ring-0 resize-none p-2"
                                        />
                                    </div>
                                </TabsContent>
                                <TabsContent value="preview">
                                    <div className="border rounded-md p-4 min-h-[400px]">
                                        <h2 className="text-2xl font-bold mb-4">{title || "您的内容标题"}</h2>
                                        <p className="text-muted-foreground mb-4">
                                            这是您的内容对读者显示的预览。实际内容将显示在此处。
                                        </p>
                                        <div className="prose max-w-none">
                                            <p>
                                                这里是示例文本，用于展示您的内容将如何呈现。实际发布时，这里将显示您编写的内容。
                                                这段文字仅作为占位符，帮助您了解文章的排版和外观。
                                            </p>
                                            <p>
                                                在实际编辑中，您可以添加段落、标题、列表和其他格式化内容。预览功能让您在发布前
                                                看到最终效果，确保一切按照您的期望呈现。
                                            </p>
                                        </div>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                </div>

                <div className="md:col-span-2 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>发布选项</CardTitle>
                            <CardDescription>配置您的内容如何发布</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label htmlFor="premium-content">高级内容</Label>
                                        <p className="text-sm text-muted-foreground">仅限付费会员访问</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Switch id="premium-content" checked={isPremium} onCheckedChange={setIsPremium} />
                                        {isPremium ? (
                                            <Lock className="h-4 w-4 text-amber-500" />
                                        ) : (
                                            <Eye className="h-4 w-4 text-green-500" />
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="status">发布状态</Label>
                                    <Select value={status} onValueChange={setStatus}>
                                        <SelectTrigger id="status">
                                            <SelectValue placeholder="选择状态" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="draft">草稿</SelectItem>
                                            <SelectItem value="published">已发布</SelectItem>
                                            <SelectItem value="scheduled">已计划</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {status === "scheduled" && (
                                    <div className="space-y-2">
                                        <Label htmlFor="publish-date">发布日期</Label>
                                        <Input id="publish-date" type="datetime-local" />
                                    </div>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="tags">标签</Label>
                                <Input id="tags" placeholder="输入标签，用逗号分隔" />
                                <p className="text-sm text-muted-foreground">标签帮助会员发现您的内容</p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="featured-image">特色图片</Label>
                                <div className="border-2 border-dashed rounded-md p-4 text-center cursor-pointer hover:bg-muted/50">
                                    <ImageIcon className="h-8 w-8 mx-auto text-muted-foreground" />
                                    <p className="text-sm text-muted-foreground mt-2">点击上传或拖放文件</p>
                                    <p className="text-xs text-muted-foreground">PNG、JPG或GIF格式，最大2MB</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="flex gap-2">
                        <Button className="flex-1" onClick={onClose}>
                            取消
                        </Button>
                        <Button className="flex-1" variant="default">
                            <Save className="mr-2 h-4 w-4" />
                            {status === "draft" ? "保存草稿" : "发布"}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

