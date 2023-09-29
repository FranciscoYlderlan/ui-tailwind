import { Search, Moon } from 'lucide-react'

export function Header() {
    return (
    <header className="fixed top-0 left-80 right-0 px-8 py-3 border-b border-white/10 ">
        <button>
            <Search size={14}/>
            <span>Find something ...</span>
        </button>
        <div>
            <nav>
                <a href=""> API</a>
                <a href=""> Documentation</a>
                <a href=""> Support</a>
            </nav>
            <div>
                <button>
                    <Moon size={14}/>
                </button>
                <button>
                    Sign in
                </button>
            </div>
        </div>
    </header>
    )
}