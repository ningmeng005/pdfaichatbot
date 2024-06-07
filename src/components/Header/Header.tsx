import Link from "next/link";
import Image from 'next/image'

// components
import siteMetadata from '@/data/siteMetadata'

const Header = () => {
    return (
        <header className="flex items-center justify-between w-full">
            <div>
                <Link href="/" aria-label={siteMetadata.headerTitle}>
                    <div className="flex items-center justify-between">
                        <div className="mr-3">
                            <Image
                                src="/images/WhatsApp Gold-logo.png" // 图片路径
                                alt="WhatsApp Gold logo"
                                width={60}
                                height={60}
                                className='inline-block'
                            />
                        </div>
                        {typeof siteMetadata.headerTitle === 'string' ? (
                            <div className="hidden sm:block">
                                <p className="text-2xl font-bold">{siteMetadata.headerTitle}</p>
                                <small>MBwhats.app</small>
                            </div>
                        ) : (
                            siteMetadata.headerTitle
                        )}
                    </div>
                </Link>
            </div>
            <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
                {headerNavLinks
                    .map((link) => (
                        <Link
                            key={link.title}
                            href={link.href || '#'}
                            className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
                        >
                            {link.title}
                        </Link>
                    ))
                }
                {/*<SearchButton />*/}
                {/*<MobileNav />*/}
            </div>
        </header>
    )
}

export default Header
