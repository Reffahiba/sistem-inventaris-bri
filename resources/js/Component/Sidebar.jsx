export default function Sidebar() {
    return (
        <aside className="w-64 bg-gray-100 h-full top-0 left-0 z-10 p-4 flex flex-col justify-start">
            <ul className="space-y-2">
                <li>
                    <a href="/dashboard" className="block hover:text-blue-500">
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="/permintaan" className="block hover:text-blue-500">
                        Permintaan
                    </a>
                </li>
                <li>
                    <a href="/distribusi" className="block hover:text-blue-500">
                        Distribusi
                    </a>
                </li>
            </ul>
        </aside>
    );
}
