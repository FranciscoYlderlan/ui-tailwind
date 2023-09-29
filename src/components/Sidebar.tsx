import { NavLink } from "./NavLink"
import { Logo } from "./icons/Logo"

export function Sidebar() {
    return (
        <aside className="border-r border-white/10 w-80 fixed left-0 top-0 bottom-0 p-6">
            <Logo className="text-white h-4 w-auto"/>
            <nav className="mt-10 flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                    <strong className="text-zinc-100 font-medium text-sm">
                        Guides
                    </strong>
                    <div className="text-sm flex flex-col pl-2">
                    <NavLink>Introduction</NavLink>
                    <NavLink>Quick Start</NavLink>
                    <NavLink>SDKs</NavLink>
                    <NavLink>Authentication</NavLink>
                    <NavLink>Pagination</NavLink>
                    <NavLink>Errors</NavLink>
                    <NavLink>Webhooks</NavLink>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <strong className="text-zinc-100 font-medium text-sm">
                        Resources
                    </strong>
                    <div className="text-sm flex flex-col pl-2">
                    <NavLink>Contacts</NavLink>
                    <NavLink>Conversations</NavLink>
                    <NavLink>Messages</NavLink>
                    <NavLink>Groups</NavLink>
                    <NavLink>Attachments</NavLink>

                    </div>
                </div>
            </nav>
        </aside>
    )
}