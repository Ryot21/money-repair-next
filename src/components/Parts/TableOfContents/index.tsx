"use client"

import { useEffect, useState } from "react";
import Link from "next/link";

type TableOfContentsProps = {
    content: string;
    isSidebar?: boolean;
};

type TocItem = {
    id: string;
    text: string;
    h3: { id: string; text: string }[];
};

export default function TableOfContents({ content, isSidebar = false }: TableOfContentsProps) {
    const [tocItems, setTocItems] = useState<TocItem[]>([]);

    useEffect(() => {
        const generateToc = () => {
            const div = document.createElement('div');
            div.innerHTML = content;

            const headings = div.querySelectorAll('h2, h3');
            const items: TocItem[] = [];
            let currentH2: TocItem | null = null;

            headings.forEach((heading, index) => {
                const id = `detail${index + 1}`;
                heading.id = id;

                if (heading.tagName === 'H2') {
                    currentH2 = {
                        id,
                        text: heading.textContent || '',
                        h3: []
                    };
                    items.push(currentH2);
                } else if (heading.tagName === 'H3' && currentH2) {
                    currentH2.h3.push({
                        id,
                        text: heading.textContent || ''
                    });
                }
            });

            setTocItems(items);

            // 実際のコンテンツにIDを反映
            const contentDiv = document.querySelector('.p-single--detail');
            if (contentDiv) {
                contentDiv.innerHTML = div.innerHTML;
            }
        };

        generateToc();
    }, [content]);

    const containerClass = isSidebar 
        ? "mgt7 tb-pc"
        : "sp";

    return (
        <div className={`c-card -t03 ${containerClass}`}>
            <h2>目次</h2>
            <ul className={"c-card-lists -h2-lists"}>
                {tocItems.map((h2Item) => (
                    <li key={h2Item.id} className={"c-card-item"}>
                        <Link 
                            href={`#${h2Item.id}`} 
                            className={"c-link -mokuji -b -ls-1 -lh-1_5"}
                        >
                            {h2Item.text}
                        </Link>
                        {h2Item.h3.length > 0 && (
                            <ul className={"c-card-lists -h3-lists"}>
                                {h2Item.h3.map((h3Item) => (
                                    <li key={h3Item.id} className={"c-card-item"}>
                                        <Link 
                                            href={`#${h3Item.id}`} 
                                            className={"c-link -mokuji -ls-1 -lh-1_5"}
                                        >
                                            {h3Item.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}