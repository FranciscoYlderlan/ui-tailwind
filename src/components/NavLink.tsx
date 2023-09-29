"use client"
import Link from "next/link"
import {usePathname, activeHref} from 'next/navigation'
interface NavLinkProps {
    children: string
    href: string
}

export function NavLink({ children, href } : NavLinkProps) {
    const activeHref = usePathname()

    return(
        <Link
        data-active={activeHref == href} 
        className="px-4 py-1.5 border-l border-white/5 text-zinc-400 
        hover:text-white transition-colors data-[active=true]:border-cyan-400
        " href={href}>
            { children }
        </Link>
                        
    )
}