"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Server, Database, Shield, Globe, Lock, Cloud } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TechArchitecture() {
  const [showDetails, setShowDetails] = useState(false)

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
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">不妥协真相基地技术架构</h2>
          <p className="text-gray-400 mb-8 text-center">
            我们如何确保内容永不消失，抵抗审查与封锁
          </p>

          <Tabs defaultValue="overview" className="mb-8">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="overview">架构概览</TabsTrigger>
              <TabsTrigger value="security">安全防护</TabsTrigger>
              <TabsTrigger value="content">内容分发</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-6 mb-6">
                <div className="flex flex-col items-center">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8">
                    <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-900/30 flex flex-col items-center text-center">
                      <Globe className="text-blue-500 mb-2" size={32} />
                      <h3 className="font-bold mb-2">全球分布式架构</h3>
                      <p className="text-sm text-gray-400">
                        多区域服务器部署，确保内容永不下线
                      </p>
                    </div>

                    <div className="bg-red-900/20 p-4 rounded-lg border border-red-900/30 flex flex-col items-center text-center">
                      <Shield className="text-red-500 mb-2" size={32} />
                      <h3 className="font-bold mb-2">多层防护系统</h3>
                      <p className="text-sm text-gray-400">
                        DDoS防护、内容加密、访问控制
                      </p>
                    </div>

                    <div className="bg-green-900/20 p-4 rounded-lg border border-green-900/30 flex flex-col items-center text-center">
                      <Database className="text-green-500 mb-2" size={32} />
                      <h3 className="font-bold mb-2">IPFS分布式存储</h3>
                      <p className="text-sm text-gray-400">
                        内容永久保存，无法被单点删除
                      </p>
                    </div>
                  </div>

                  <div className="w-full bg-[#1a1a1a] rounded-lg p-6 border border-gray-800">
                    <div className="flex flex-col items-center">
                      <div className="w-full max-w-3xl h-80 relative bg-black rounded-lg border border-gray-700 overflow-hidden">
                        {/* Architecture Diagram */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative w-full h-full">
                            {/* User Layer */}
                            <div className="absolute top-4 left-0 right-0 flex justify-center">
                              <div className="bg-blue-900/30 px-4 py-2 rounded-lg border border-blue-900/50 text-blue-400 text-sm">
                                用户访问层
                              </div>
                            </div>

                            {/* CDN Layer */}
                            <div className="absolute top-16 left-0 right-0 flex justify-center">
                              <div className="bg-green-900/30 px-4 py-2 rounded-lg border border-green-900/50 text-green-400 text-sm flex items-center">
                                <Globe className="mr-2" size={14} />
                                全球CDN加速
                              </div>
                            </div>

                            {/* Security Layer */}
                            <div className="absolute top-28 left-0 right-0 flex justify-center">
                              <div className="bg-red-900/30 px-4 py-2 rounded-lg border border-red-900/50 text-red-400 text-sm flex items-center">
                                <Shield className="mr-2" size={14} />
                                安全防护层
                              </div>
                            </div>

                            {/* Server Layer */}
                            <div className="absolute bottom-24 left-0 right-0 flex justify-center space-x-4">
                              <div className="bg-gray-800 px-4 py-2 rounded-lg border border-gray-700 text-gray-300 text-sm flex items-center">
                                <Server className="mr-2" size={14} />
                                美国节点
                              </div>
                              <div className="bg-gray-800 px-4 py-2 rounded-lg border border-gray-700 text-gray-300 text-sm flex items-center">
                                <Server className="mr-2" size={14} />
                                欧洲节点
                              </div>
                              <div className="bg-gray-800 px-4 py-2 rounded-lg border border-gray-700 text-gray-300 text-sm flex items-center">
                                <Server className="mr-2" size={14} />
                                亚太节点
                              </div>
                            </div>

                            {/* Storage Layer */}
                            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                              <div className="bg-purple-900/30 px-4 py-2 rounded-lg border border-purple-900/50 text-purple-400 text-sm flex items-center">
                                <Database className="mr-2" size={14} />
                                IPFS分布式存储
                              </div>
                            </div>

                            {/* Connection Lines */}
                            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                              {/* User Layer to CDN Layer - vertical blue line */}
                              <line x1="50%" y1="40" x2="50%" y2="70" stroke="#4299e1" strokeWidth="2" strokeDasharray="4" />

                              {/* CDN Layer to Security Layer - vertical green line */}
                              <line x1="50%" y1="100" x2="50%" y2="130" stroke="#48bb78" strokeWidth="2" strokeDasharray="4" />

                              {/* Security Layer to Server Nodes - diagonal lines */}
                              <line x1="50%" y1="160" x2="30%" y2="200" stroke="#f56565" strokeWidth="2" strokeDasharray="4" />
                              <line x1="50%" y1="160" x2="50%" y2="200" stroke="#f56565" strokeWidth="2" strokeDasharray="4" />
                              <line x1="50%" y1="160" x2="70%" y2="200" stroke="#f56565" strokeWidth="2" strokeDasharray="4" />

                              {/* Server Nodes to IPFS Storage - diagonal lines */}
                              <line x1="30%" y1="230" x2="50%" y2="280" stroke="#9f7aea" strokeWidth="2" strokeDasharray="4" />
                              <line x1="50%" y1="230" x2="50%" y2="280" stroke="#9f7aea" strokeWidth="2" strokeDasharray="4" />
                              <line x1="70%" y1="230" x2="50%" y2="280" stroke="#9f7aea" strokeWidth="2" strokeDasharray="4" />

                              {/* Optional: Horizontal connection between CDN and edges */}
                              <line x1="30%" y1="85" x2="70%" y2="85" stroke="#48bb78" strokeWidth="2" strokeDasharray="4" />

                              {/* Optional: Horizontal connection between Security and edges */}
                              <line x1="30%" y1="145" x2="70%" y2="145" stroke="#f56565" strokeWidth="2" strokeDasharray="4" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        className="mt-4 border-blue-900/50 text-blue-400 hover:bg-blue-900/20"
                        onClick={() => setShowDetails(!showDetails)}
                      >
                        {showDetails ? "隐藏技术细节" : "查看技术细节"}
                      </Button>

                      {showDetails && (
                        <div className="mt-6 text-sm text-gray-400 space-y-2">
                          <p>• 前端采用Next.js框架，确保SEO友好与高性能</p>
                          <p>• 视频内容采用HLS加密流式传输，防止直接下载</p>
                          <p>• 全站HTTPS加密，DNS over HTTPS防止DNS污染</p>
                          <p>• 会员系统采用JWT无状态认证，支持多设备登录</p>
                          <p>• 支付系统支持加密货币，确保匿名支付</p>
                          <p>• 备用域名自动切换系统，应对域名被封锁情况</p>
                          <p>• 内容备份采用IPFS协议，确保去中心化存储</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="security">
              <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-6 text-center">多层安全防护系统</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-800">
                    <div className="flex items-center mb-3">
                      <Shield className="text-red-500 mr-2" size={20} />
                      <h4 className="font-bold">DDoS防护</h4>
                    </div>
                    <p className="text-sm text-gray-400">
                      采用Cloudflare企业级DDoS防护，可抵御400Gbps以上的攻击流量，确保网站在遭受攻击时仍能正常访问。
                    </p>
                  </div>

                  <div className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-800">
                    <div className="flex items-center mb-3">
                      <Lock className="text-red-500 mr-2" size={20} />
                      <h4 className="font-bold">内容加密</h4>
                    </div>
                    <p className="text-sm text-gray-400">
                      所有敏感内容采用AES-256加密存储，视频内容使用HLS加密传输，确保内容不被未授权访问或下载。
                    </p>
                  </div>

                  <div className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-800">
                    <div className="flex items-center mb-3">
                      <Globe className="text-red-500 mr-2" size={20} />
                      <h4 className="font-bold">域名保护</h4>
                    </div>
                    <p className="text-sm text-gray-400">
                      多备用域名自动切换系统，当主域名被封锁时，系统自动切换到备用域名，确保用户始终能够访问网站。
                    </p>
                  </div>

                  <div className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-800">
                    <div className="flex items-center mb-3">
                      <Cloud className="text-red-500 mr-2" size={20} />
                      <h4 className="font-bold">访问控制</h4>
                    </div>
                    <p className="text-sm text-gray-400">
                      基于JWT的无状态认证系统，支持多因素认证，确保只有授权用户能够访问会员内容。
                    </p>
                  </div>
                </div>

                <div className="bg-black p-4 rounded-lg border border-gray-800">
                  <h4 className="font-bold mb-3 text-center">安全响应流程</h4>
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="bg-red-900/20 p-3 rounded-lg border border-red-900/30 text-center flex-1">
                      <p className="text-sm font-bold mb-1">检测</p>
                      <p className="text-xs text-gray-400">24/7安全监控</p>
                    </div>
                    <div className="text-gray-600">→</div>
                    <div className="bg-orange-900/20 p-3 rounded-lg border border-orange-900/30 text-center flex-1">
                      <p className="text-sm font-bold mb-1">分析</p>
                      <p className="text-xs text-gray-400">威胁评估</p>
                    </div>
                    <div className="text-gray-600">→</div>
                    <div className="bg-yellow-900/20 p-3 rounded-lg border border-yellow-900/30 text-center flex-1">
                      <p className="text-sm font-bold mb-1">响应</p>
                      <p className="text-xs text-gray-400">自动防御</p>
                    </div>
                    <div className="text-gray-600">→</div>
                    <div className="bg-green-900/20 p-3 rounded-lg border border-green-900/30 text-center flex-1">
                      <p className="text-sm font-bold mb-1">恢复</p>
                      <p className="text-xs text-gray-400">服务保障</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="content">
              <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-6 text-center">内容分发与存储系统</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-800">
                    <div className="flex items-center mb-3">
                      <Database className="text-green-500 mr-2" size={20} />
                      <h4 className="font-bold">IPFS分布式存储</h4>
                    </div>
                    <p className="text-sm text-gray-400">
                      所有内容通过IPFS（星际文件系统）存储，确保内容分布在全球节点，无法被单点删除，实现真正的去中心化存储。
                    </p>
                  </div>

                  <div className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-800">
                    <div className="flex items-center mb-3">
                      <Globe className="text-green-500 mr-2" size={20} />
                      <h4 className="font-bold">全球CDN加速</h4>
                    </div>
                    <p className="text-sm text-gray-400">
                      内容通过全球CDN网络分发，确保用户无论在哪里访问都能获得最佳体验，同时分散流量防止单点故障。
                    </p>
                  </div>

                  <div className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-800">
                    <div className="flex items-center mb-3">
                      <Server className="text-green-500 mr-2" size={20} />
                      <h4 className="font-bold">多区域服务器</h4>
                    </div>
                    <p className="text-sm text-gray-400">
                      在美国、欧洲、亚太等多个区域部署服务器，确保内容在全球范围内的高可用性，防止区域性封锁。
                    </p>
                  </div>

                  <div className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-800">
                    <div className="flex items-center mb-3">
                      <Lock className="text-green-500 mr-2" size={20} />
                      <h4 className="font-bold">内容备份策略</h4>
                    </div>
                    <p className="text-sm text-gray-400">
                      所有内容自动备份到多个独立存储系统，包括加密云存储、物理离线存储和IPFS网络，确保内容永不丢失。
                    </p>
                  </div>
                </div>

                <div className="bg-black p-4 rounded-lg border border-gray-800">
                  <h4 className="font-bold mb-3 text-center">内容可用性保障</h4>
                  <div className="flex justify-center items-center gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-500">99.99%</div>
                      <p className="text-xs text-gray-400">服务可用性</p>
                    </div>
                    <div className="h-12 border-l border-gray-700"></div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-500">100%</div>
                      <p className="text-xs text-gray-400">内容保存率</p>
                    </div>
                    <div className="h-12 border-l border-gray-700"></div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-500">0%</div>
                      <p className="text-xs text-gray-400">内容审查率</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center">
            <p className="text-gray-400 mb-6">
              我们的技术架构确保王志安的调查报道永不消失，无惧任何形式的封锁和审查。
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              了解更多技术细节
            </Button>
          </div>
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