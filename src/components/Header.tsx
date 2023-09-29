import { Search, Moon } from 'lucide-react'

export function Header() {
    return (
    <header className="fixed top-0 left-0 lg:left-80 
    right-0 px-8 py-3 border-b border-white/10 backdrop-blur flex itens-center justify-between">
        <button className='whitespace-nowrap w-full max-w-md flex items-center text-xs text-zinc-400 bg-white/5
        gap-3 px-3 py-1.5 border border-white/10 rounded-full'>
            <Search size={14}/>
            <span>Find something ...</span>
        </button>
        <div className='flex items-center'>
            <nav className='text-sm hidden items-center gap-6 xl:flex'>
                <a className="text-zinc-400 hover:text-zinc-100 transition-colors" href=""> API</a>
                <a className="text-zinc-400 hover:text-zinc-100 transition-colors" href=""> Documentation</a>
                <a className="text-zinc-400 hover:text-zinc-100 transition-colors" href=""> Support</a>
            </nav>
            <div className='flex items-center border-l border-white/10 pl-6 ml-6 gap-6'>
                <button className='hidden sm:flex'>
                    <Moon size={16} className='text-zinc-100'/>
                </button>
                <button className=' whitespace-nowrap border border-cyan-800 
                bg-cyan-400/10 text-cyan-400 px-4 py-1 rounded-full text-sm font-medium
                hover:border-cyan-600 transition-colors
                '>
                    Sign in
                </button>
            </div>
        </div>
    </header>
    )
}