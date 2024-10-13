import {getSEOTags} from "@/lib/seo"
import Script from 'next/script'
import FullscreenIframe from "./FullscreenIframe";
import {getTranslations} from "next-intl/server";
import Image from "next/image";

export const runtime = "edge";

export const generateMetadata = async () => {
    const t = await getTranslations('Home.Metadata');
    return await getSEOTags({
        title: t('title'),
        path: "/",
        description: t('description'),
        keywords: t.raw('keywords'),
    })
}

export default async function Home() {
    const t = await getTranslations('Home');

    return (
        <div className="space-y-6">
            <Script
                id="subway-surfers-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "VideoGame",
                        "name": t('schemaData.name'),
                        "description": t('schemaData.description'),
                        "genre": t.raw('schemaData.genre'),
                        "playMode": "SinglePlayer",
                        "applicationCategory": "Browser Game",
                        "inLanguage": [t('schemaData.language')]
                    })
                }}
            />
            <section className="text-center">
                <h1 className="text-2xl font-bold mb-2 text-blue-600">{t('hero.title')}</h1>
                <p className="mb-4">{t('hero.subtitle')}</p>
            </section>

            <section id="play" className="bg-white p-6 rounded-xl shadow-lg">
                <FullscreenIframe
                    thumbnailSrc="/static/subway-surfers-san-francisco/screenshots/11.webp"
                    src="/static/subway-surfers-san-francisco/index.html"
                    title="Subway Surfers Unblocked"
                />
            </section>

            <section className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-blue-600">{t('whyChooseUs.title')}</h2>
                <ul className="list-disc list-inside space-y-2">
                    {t.raw('whyChooseUs.reasons').map((reason: string, index: number) => (
                        <li key={index}>{reason}</li>
                    ))}
                </ul>
            </section>

            <section className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-blue-600">{t('gameGuide.title')}</h2>
                <ul className="list-disc list-inside space-y-2">
                    {t.raw('gameGuide.instructions').map((instruction: string, index: number) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </ul>
            </section>

            <section className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-blue-600">{t('gameTips.title')}</h2>
                <ul className="list-disc list-inside space-y-2">
                    {t.raw('gameTips.tips').map((tip: string, index: number) => (
                        <li key={index}>{tip}</li>
                    ))}
                </ul>
            </section>
            <section className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-blue-600">{t('gameScreen')}</h2>
                <div className="flex flex-col items-center gap-4">
                    <div className="w-full max-w-[640px]">
                        <Image src="/static/subway-surfers-san-francisco/screenshots/22.webp"
                               width={640}
                               height={360}
                               alt="Subway Surfers Unblocked"
                               className="w-full h-auto"
                        />
                    </div>
                    <div className="w-full max-w-[640px]">
                        <Image src="/static/subway-surfers-san-francisco/screenshots/33.webp"
                               width={640}
                               height={360}
                               alt="Subway Surfers Unblocked"
                               className="w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            <section className="text-center">
                <h2 className="text-3xl font-bold text-blue-600 mb-4">{t('callToAction.title')}</h2>
                <a href="/#play"
                   className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-xl transition duration-300">
                    {t('callToAction.button')}
                </a>

            </section>
        </div>
    );
}