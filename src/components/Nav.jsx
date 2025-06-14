import Link from 'next/link'

export default function Nav ({ pages }){
    return (
        !!pages?.length && (
            <nav>
                <ul>
                    { pages.map(( page, index) => (
                        <li key={ index }>
                            { !!page.url?.length && (
                                <Link href={ page.url }>{ page.name }</Link>
                            ) || (
                                page.name
                            )}
                            { !!page.subPages?.length && (
                                <ul>
                                    { page.subPages.map(( subPage, index) => (
                                        <li key={ index }>
                                            <Link href={ subPage.url }>{ subPage.name }</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        )
        
    )
}