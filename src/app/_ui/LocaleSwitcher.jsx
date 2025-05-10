"use client";

import {useLocale, useTranslations} from 'next-intl';
import {usePathname, useRouter} from 'next/navigation';
import {routing} from '@/i18n/routing';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function onSelectChange(event) {
    const nextLocale = event.target.value;
    router.push(pathname.replace(`/${locale}`, `/${nextLocale}`));
  }

  return (
    <div className="relative text-gray-400">
      <select
        className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6 uppercase"
        defaultValue={locale}
        onChange={onSelectChange}
      >
        {routing.locales.map((cur) => (
          <option key={cur} value={cur}>
            {cur.toUpperCase()}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-2 top-[8px]">⌄</span>
    </div>
  );
}
