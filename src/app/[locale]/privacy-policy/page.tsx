import React from 'react';
import { getSEOTags } from "@/lib/seo";
import {getTranslations} from "next-intl/server";

export const runtime = "edge";

export const generateMetadata = async () => {
    const t = await getTranslations('PrivacyPolicy.metaData');
    return await getSEOTags({
        title: t('title'),
        path: "/privacy-policy",
        description: t('description'),
    });
};

export default async function PrivacyPolicy() {
    const t = await getTranslations('PrivacyPolicy');

    return (
        <div className="space-y-6">
            <section className="text-center">
                <h1 className="text-2xl font-bold mb-2 text-blue-600">{t('title')}</h1>
            </section>

            <section className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold m-4 text-blue-600">{t('informationCollectionTitle')}</h2>
                <p>{t('informationCollectionContent')}</p>
                <h2 className="text-2xl font-semibold m-4 text-blue-600">{t('userAccountTitle')}</h2>
                <p>{t('userAccountContent')}</p>
                <h2 className="text-2xl font-semibold m-4 text-blue-600">{t('dataSecurityTitle')}</h2>
                <p>{t('dataSecurityContent')}</p>
                <h2 className="text-2xl font-semibold m-4 text-blue-600">{t('cookieUsageTitle')}</h2>
                <p>{t('cookieUsageContent')}</p>
                <h2 className="text-2xl font-semibold m-4 text-blue-600">{t('policyUpdateTitle')}</h2>
                <p>{t('policyUpdateContent')}</p>
            </section>
        </div>
    );
}