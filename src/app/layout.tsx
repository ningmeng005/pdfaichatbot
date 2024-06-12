import type { Metadata } from "next";
import { Space_Grotesk } from 'next/font/google';
import { Analytics, AnalyticsConfig } from 'pliny/analytics';
import React from "react";
import "./globals.css";

// components
import siteMetadata from '@/data/siteMetadata';
import SectionContainer from '@/components/SectionContainer';

// 配置Google字体Space Grotesk
const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

// 定义站点的元数据
export const metadata: Metadata = {
  // metadataBase: new URL(siteMetadata.siteUrl),  // 这是可选的，用于设置元数据的基URL
  title: {
    default: siteMetadata.title,  // 站点的默认标题
    template: `%s | ${siteMetadata.title}`,  // 页面标题的模板
  },
  description: siteMetadata.description,  // 站点描述
  openGraph: {
    title: siteMetadata.title,  // Open Graph协议中的站点标题
    description: siteMetadata.description,  // Open Graph协议中的站点描述
    url: './',  // 站点URL
    siteName: siteMetadata.title,  // 站点名称
    images: [siteMetadata.socialBanner],  // 站点的社交媒体横幅图像
    locale: 'en_US',  // 站点的语言环境
    type: 'website',  // 站点类型
  },
  alternates: {
    canonical: './',  // 规范URL
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,  // RSS feed的URL
    },
  },
  robots: {
    index: false,  // 不允许索引页面
    follow: false,  // 不允许跟随链接
    googleBot: {
      index: false,  // 不允许Google爬虫索引页面
      follow: false,  // 不允许Google爬虫跟随链接
      'max-video-preview': -1,  // 不限制视频预览
      'max-image-preview': 'large',  // 允许大尺寸图片预览
      'max-snippet': -1,  // 不限制摘要长度
    },
  },
  twitter: {
    title: siteMetadata.title,  // Twitter卡片的标题
    card: 'summary_large_image',  // Twitter卡片类型
    images: [siteMetadata.socialBanner],  // Twitter卡片的图片
  },
}

// 定义根布局组件
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html
          lang={siteMetadata.language}  // 设置页面语言
          className={`${space_grotesk.variable} scroll-smooth`}  // 应用字体和滚动样式
          suppressHydrationWarning  // 抑制水合警告
      >
      <head>
        {/* 设置favicon.ico */}
        <link rel="icon" href="\favicon\favicon.ico" />
      </head>
      <body className="antialiased">
      {/* 集成分析工具 */}
      <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
      <SectionContainer>
        <div className="flex h-screen flex-col justify-between font-sans">
          {/* 渲染页面内容 */}
          <main className="mb-auto">{children}</main>
        </div>
      </SectionContainer>
      </body>
      </html>
  )
}
