import type {Metadata} from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import {getLocaleDetails, Link} from "@/i18n/routing"
import {LocaleSwitch} from "@/components/LocaleSwitch";
import {getTranslations} from 'next-intl/server';
import Image from "next/image";
import Logo from "@/app/icon.png"
import StatCounterScript from "@/components/StatCounterScript";

const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "地铁跑酷解锁版",
    description: "在线免费畅玩地铁跑酷（Subway Surfers）",
};

export default async function I18nLayout({
                                             children,

                                             params: {locale}
                                         }: Readonly<{
    children: React.ReactNode;
    params: { locale: string};
}>) {
    const t = await getTranslations('menu');
    const localeInfo = getLocaleDetails(locale)
    return (
        <html lang={localeInfo?.code}>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-800`}
        >
        <header className="bg-blue-600 py-4 text-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold flex">
                        <Image src={Logo} alt={"logo"} width={32} height={32}/>
                        Subway Surfers Unblocked
                    </Link>
                    <LocaleSwitch/>
                </div>
            </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-8">
            {children}
        </main>
        <footer className="bg-gray-200 py-6 text-gray-600">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <Link href={'/'} className="text-lg font-semibold text-blue-600">
                            SubwaySurfersUnblocked.org
                        </Link>
                        <p className="text-sm">{t('copyright', {year: new Date().getFullYear()})}</p>
                    </div>
                    <nav className="flex space-x-4 text-sm">
                        <Link href="/privacy-policy" prefetch={false} className="hover:text-blue-600 transition-colors">
                            {t('privacyPolicy')}
                        </Link>
                        <Link href="/terms-of-use" prefetch={false} className="hover:text-blue-600 transition-colors">
                            {t('termsOfUse')}
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
        <StatCounterScript/>
        </body>
        </html>
    );
}
