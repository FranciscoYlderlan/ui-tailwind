import { NavLink } from "./NavLink"
import { Logo } from "./icons/Logo"

export function Sidebar() {
    return (
        <aside className="border-r border-white/10 fixed left-0 top-0 bottom-0 p-6 hidden lg:block lg:w-80">
            <Logo className="text-white h-4 w-auto"/>
            <nav className="mt-10 flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                    <strong className="text-zinc-100 font-medium text-sm">
                        Guides
                    </strong>
                    <div className="text-sm flex flex-col pl-2">
                    <NavLink href="/test/a">Introduction</NavLink>
                    <NavLink href="/test/b">Quick Start</NavLink>
                    <NavLink href="/test/c">SDKs</NavLink>
                    <NavLink href="/test/d">Authentication</NavLink>
                    <NavLink href="/test/e">Pagination</NavLink>
                    <NavLink href="/test/f">Errors</NavLink>
                    <NavLink href="/test/g">Webhooks</NavLink>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <strong className="text-zinc-100 font-medium text-sm">
                        Resources
                    </strong>
                    <div className="text-sm flex flex-col pl-2">
                    <NavLink href="/test/h">Contacts</NavLink>
                    <NavLink href="/test/i">Conversations</NavLink>
                    <NavLink href="/test/j">Messages</NavLink>
                    <NavLink href="/test/k">Groups</NavLink>
                    <NavLink href="/test/l">Attachments</NavLink>

                    </div>
                </div>
            </nav>
        </aside>
    )
}