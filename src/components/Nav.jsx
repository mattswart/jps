import Link from 'next/link'

export default function Nav ({ pages, showHome }){
    return (
        !!pages?.length && (
            <nav>
                <ol>
                    { pages.map(( page, index) => (
                        page.url == "/" && showHome == false ?
                            false
                        : (
                            <li key={ index } className={ !!page.subPages?.length && "has-subpages" }>
                                { !!page.url?.length && (
                                    <Link href={ page.url }>{ page.name }</Link>
                                ) || (
                                    <a>{page.name}</a>
                                )}
                                { !!page.subPages?.length && (
                                    <ol>
                                        { page.subPages.map(( subPage, index) => (
                                            <li key={ index }>
                                                <Link href={ subPage.url }>{ subPage.name }</Link>
                                            </li>
                                        ))}
                                    </ol>
                                )}
                            </li>
                        )
                    ))}
                </ol>
            </nav>
        )
    )
}