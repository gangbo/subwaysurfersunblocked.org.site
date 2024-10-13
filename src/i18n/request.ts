import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {localeDetails} from './routing';

export default getRequestConfig(async ({locale}) => {
    // 确保 routing.locales 是一个索引签名类型
    if (!Object.keys(localeDetails).includes(locale)) notFound()

    return {
        messages: (
            await (locale === 'en'
                ? // When using Turbopack, this will enable HMR for `en`
                import('../../messages/en.json')
                : import(`../../messages/${locale}.json`))
        ).default
    };
});