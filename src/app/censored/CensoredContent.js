import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Filter, Search, AlertTriangle, Lock } from 'lucide-react'
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function CensoredContent() {
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
              <span className="text-red-600">禁播内容</span>
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Warning Banner */}
        <div className="bg-red-900/20 border border-red-900/50 rounded-lg p-4 mb-8 flex items-center">
          <AlertTriangle className="text-red-500 mr-3 flex-shrink-0" />
          <p className="text-sm">
            以下内容已在各大平台被删除或限流，在这里您可以无限制访问所有真相调查。部分内容需要会员权限才能查看。
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
            <Input
              placeholder="搜索被封杀内容..."
              className="pl-10 bg-[#1a1a1a] border-gray-800 focus:border-red-900"
            />
          </div>
          <Button variant="outline" className="border-gray-700 text-gray-300 flex items-center gap-2">
            <Filter size={16} />
            筛选
          </Button>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Badge variant="outline" className="bg-red-900/20 hover:bg-red-900/30 text-red-400 border-red-900/50">
            全部内容
          </Badge>
          {["政治调查", "社会事件", "人物揭秘", "历史解密", "资本黑幕", "舆论分析"].map((category, i) => (
            <Badge key={i} variant="outline" className="bg-transparent hover:bg-gray-800 border-gray-700 text-white/80">
              {category}
            </Badge>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {Array.from({ length: 9 }).map((_, i) => (
            <Card key={i} className="bg-[#1a1a1a] border-gray-800 overflow-hidden hover:border-red-900 transition-all duration-200">
              <div className="relative">
                <Image
                  src={`/noise.png?height=200&width=400&text=被封内容${i + 1}`}
                  alt={`被封内容${i + 1}`}
                  width={400}
                  height={200}
                  className={`w-full h-48 object-cover ${i % 3 === 0 ? '' : 'filter blur-sm brightness-75'}`}
                />
                {i % 3 !== 0 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/70 p-3 rounded-full">
                      <Lock className="text-red-500" size={24} />
                    </div>
                  </div>
                )}
                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  已被删除
                </div>
                <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {["政治调查", "社会事件", "人物揭秘", "历史解密", "资本黑幕", "舆论分析", "深度访谈", "现场直击", "数据分析"][i]}
                </div>
              </div>
              <CardContent className="py-4">
                <h3 className="font-bold mb-2 line-clamp-1 text-white">
                  {i % 3 === 0 ? '公开：' : '会员专享：'}
                  {["权力黑幕调查", "资本运作内幕", "社会事件真相", "人物深度揭秘", "历史事件解密", "舆论操控分析", "深度访谈实录", "现场调查报道", "数据背后的真相"][i]}
                </h3>
                <p className="text-gray-400 text-sm mb-2">
                  发布于：2025年{1 + (i % 12)}月{1 + (i % 28)}日
                </p>
                <p className="text-gray-300 text-sm line-clamp-2">
                  这是一段关于该调查报道的简短描述，这些内容已在各大平台被删除...
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant={i % 3 === 0 ? "default" : "outline"}
                  className={i % 3 === 0
                    ? "w-full bg-red-600 hover:bg-red-700"
                    : "w-full border-red-900/50 text-red-500 hover:bg-red-900/20"
                  }
                >
                  {i % 3 === 0 ? '立即观看' : '解锁会员内容'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Link
            href="/censored"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors px-8 py-6 text-lg font-bold"
            )}
          >
            加载更多内容
          </Link>
        </div>
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