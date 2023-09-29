interface NavLinkProps {
    children: string
}

export function NavLink({ children } : NavLinkProps) {
    return(
        <a className="px-4 py-1.5 border-l border-white/5 text-zinc-400 
        hover:text-white transition-colors" href="">
            { children }
        </a>
                        
    )
}