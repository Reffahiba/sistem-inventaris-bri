import React from 'react';
import { useSidebarStore } from '../../stores/sidebarStore';
import { Home, FilePlus, ClipboardList, History } from 'lucide-react';

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useSidebarStore();

  return (
    <>
      {/* Overlay untuk layar kecil */}
      <div
        className={`fixed inset-0 z-20 bg-black/30 transition-opacity duration-200 lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed z-30 h-full w-60 bg-white shadow-lg border-r border-gray-200 transition-transform duration-200 transform lg:static lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Sidebar"
      >
        {/* Logo atau Judul */}
        <div className="p-[17.5px] text-lg text-center font-semibold text-gray-700 border-b border-gray-200">
          Dashboard
        </div>

        {/* Navigasi */}
        <nav className="h-full p-4 overflow-y-auto">
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="py-2.5 px-4 rounded-lg flex items-center gap-2 bg-blue-50 text-blue-600">
              <Home className="w-4 h-4" /> Home
            </li>
            <li className="py-2.5 px-4 flex items-center gap-2 hover:bg-gray-50 cursor-pointer transition-all duration-200 rounded-l-lg active:scale-95">
              <FilePlus className="w-4 h-4 text-gray-500" /> Ajukan Permintaan
            </li>
            <li className="py-2.5 px-4 flex items-center gap-2 hover:bg-gray-50 cursor-pointer transition-all duration-200 rounded-l-lg active:scale-95">
              <ClipboardList className="w-4 h-4 text-gray-500" /> Daftar Permintaan
            </li>
            <li className="py-2.5 px-4 flex items-center gap-2 hover:bg-gray-50 cursor-pointer transition-all duration-200 rounded-l-lg active:scale-95">
              <History className="w-4 h-4 text-gray-500" /> Riwayat Permintaan
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
