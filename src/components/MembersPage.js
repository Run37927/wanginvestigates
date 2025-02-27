import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Shield, Star, Calendar, MessageSquare, Video } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function MembersPage() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Header */}
      <header className="bg-black/80 backdrop-blur-md border-b border-gray-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <Link href="/" className="text-gray-400 hover:text-white flex items-center font-bold">
              <ArrowLeft className="mr-2" size={16} />
              返回首页
            </Link>
            <h1 className="text-xl font-bold mx-auto">
              <span className="text-red-600">会员专区</span>
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-lg p-6 mb-8 border border-gray-800">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-red-600 flex items-center justify-center text-2xl font-bold">
                WZ
              </div>
              <div className="absolute bottom-0 right-0 bg-green-500 rounded-full p-1">
                <Shield size={16} />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">欢迎回来，创始会员</h2>
              <p className="text-gray-400">您的会员有效期至：2025年12月31日</p>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="exclusive" className="mb-8">
          <TabsList className="grid grid-cols-3 mb-8 bg-[#1a1a1a] border border-gray-800">
            <TabsTrigger value="exclusive"
            >
              独家内容
            </TabsTrigger>
            <TabsTrigger
              value="upcoming"

            >
              即将发布
            </TabsTrigger>
            <TabsTrigger
              value="community"

            >
              会员社区
            </TabsTrigger>
          </TabsList>

          <TabsContent value="exclusive">
            <div className="grid md:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} className="bg-[#1a1a1a] border-gray-800 overflow-hidden hover:border-red-900 transition-all duration-200">
                  <div className="relative">
                    <Image
                      src={`/noise.png?height=200&width=400&text=独家调查${i + 1}`}
                      alt={`独家调查${i + 1}`}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                      独家
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-red-600">深度调查：{["权力黑幕", "资本真相", "社会事件", "人物揭秘", "历史解密", "舆论分析"][i % 6]}</CardTitle>
                    <CardDescription className="text-gray-400 flex items-center">
                      <Calendar size={14} className="mr-1" />
                      2025年{2 + i}月{1 + i}日
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm">
                      这是一段关于该调查报道的简短描述，点击查看完整内容...
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                      观看完整内容
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="upcoming">
            <div className="space-y-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <Card key={i} className="bg-[#1a1a1a] border-gray-800 transition-transform duration-200 hover:scale-[1.02]">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-red-600">即将发布：{["重大调查", "系列报道", "深度访谈"][i]}</CardTitle>
                      <div className="bg-blue-900/30 text-blue-400 text-xs px-2 py-1 rounded flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {i + 3}天后
                      </div>
                    </div>
                    <CardDescription className="text-gray-400">
                      制作进度：{["收集资料中", "调查进行中", "后期制作中"][i]}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
                      <p className="text-gray-300 mb-4">
                        这是一个即将发布的重要调查，我们正在{["收集关键证据", "进行深入调查", "整理最终报告"][i]}...
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Star className="text-yellow-500 mr-1" size={16} />
                          <span className="text-sm text-gray-400">会员优先观看</span>
                        </div>
                        <Button variant="outline" size="sm" className="border-gray-700 text-gray-400 hover:bg-gray-800">
                          设置提醒
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="community">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-[#1a1a1a] border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-600">
                    <MessageSquare className="mr-2" size={20} />
                    会员讨论区
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    与其他会员和王志安本人讨论最新调查和社会热点
                  </p>
                  <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors duration-200">进入讨论区</Button>
                </CardContent>
              </Card>

              <Card className="bg-[#1a1a1a] border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-600">
                    <Video className="mr-2" size={20} />
                    直播互动
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    每周五晚8点，王志安与会员在线互动，回答问题
                  </p>
                  <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors duration-200">查看直播安排</Button>
                </CardContent>
              </Card>

              <Card className="bg-[#1a1a1a] border-gray-800 md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-red-600">会员投票</CardTitle>
                  <CardDescription className="text-gray-400">
                    您想让王志安接下来调查哪个方向？
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {["社会热点事件深挖", "权力腐败调查", "资本运作黑幕", "历史事件真相"].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-gray-800 hover:border-red-900 cursor-pointer">
                        <span className="text-gray-500">{item}</span>
                        <span className="text-gray-400">{[42, 38, 27, 19][i]}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors duration-200">提交投票</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-black py-6 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} 王志安·不妥协真相基地. 保留所有权利.
        </div>
      </footer>
    </div>
  )
}