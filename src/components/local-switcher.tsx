'use client';
import { useRouter } from 'next/navigation';
import React, { useTransition, ChangeEvent } from 'react'
import { useLocale } from 'use-intl';


function LocalSwitcher() {
    const [isPending,startTransition] = useTransition()
    const router = useRouter();
    const ActiveLocale = useLocale()


    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value
        console.log(nextLocale)
        startTransition(() => {
            router.replace(`/${nextLocale}`);
        })
    }

    return (
        <label>
            <p>
                <select defaultValue={ActiveLocale}  style={{ backgroundColor: "red" }} onChange={onSelectChange}>
                    <option value="en">english</option>
                    <option value="fr">frnsh</option>
                    <option value="ar">frnsh</option>
                </select>
            </p>
        </label>
    )
}

export default LocalSwitcher;