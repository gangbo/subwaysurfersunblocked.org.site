import { getSEOTags } from "@/lib/seo";
import {getTranslations} from "next-intl/server";

export const runtime = "edge";

export const generateMetadata = async () => {
    const t = await getTranslations('TermsOfUse.metaData');
    return await getSEOTags({
        title: t('title'),
        path: "/terms-of-use",
        description: t('description'),
    });
};

export default async function TermsOfUse() {
    const t = await getTranslations('TermsOfUse');

    return (
        <div className="space-y-6">
            <section className="text-center">
                <h1 className="text-2xl font-bold mb-2 text-blue-600">{t('title')}</h1>
            </section>

            <section className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold m-4 text-blue-600">{t('acceptanceTitle')}</h2>
                <p>{t('acceptanceContent')}</p>
                <h2 className="text-2xl font-semibold m-4 text-blue-600">{t('userBehaviorTitle')}</h2>
                <p>{t('userBehaviorContent')}</p>
                <h2 className="text-2xl font-semibold m-4 text-blue-600">{t('disclaimerTitle')}</h2>
                <p>{t('disclaimerContent')}</p>
                <h2 className="text-2xl font-semibold m-4 text-blue-600">{t('modificationTitle')}</h2>
                <p>{t('modificationContent')}</p>
            </section>
        </div>
    );
}