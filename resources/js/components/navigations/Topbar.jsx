import React, { useEffect, useRef, useState } from 'react';
import {
  Menu,
  Bell,
  Search,
  ChevronDownCircle,
  Settings,
  Info,
  UserCircle,
  LogOutIcon,
} from 'lucide-react';
import { useSidebarStore } from '../../stores/sidebarStore';

const placeholderTexts = [
  'Cari barang yang dibutuhkan...',
  'Ajukan permintaan barang...',
  'Lihat permintaan terakhir...',
  'Filter berdasarkan nama...',
];

const Topbar = () => {
  const { toggleSidebar } = useSidebarStore();
  const [showProfile, setShowProfile] = useState(false);
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setCurrentPlaceholderIndex((prev) => (prev + 1) % placeholderTexts.length);
        setAnimate(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }

      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setShowProfile(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <header className="h-16 flex items-center justify-between px-4 z-50 shadow-sm bg-white border-b border-gray-200">
      {/* Sidebar Toggle + Search */}
      <div className="flex items-center gap-2">
        <button
          className="lg:hidden active:scale-95 transition-all duration-200"
          onClick={toggleSidebar}
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5 text-gray-500" />
        </button>

        {/* Custom Search */}
        <div className="relative w-72">
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 text-sm rounded-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
          <span
            className={`absolute left-10 top-2 transform -translate-y-1/2 text-sm text-gray-400 pointer-events-none transition-all duration-300 ${
              animate || isFocused ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
            }`}
          >
            {placeholderTexts[currentPlaceholderIndex]}
          </span>
        </div>
      </div>

      {/* Notification + Profile */}
      <div className="flex items-center gap-4">
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative focus:outline-none"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5 text-gray-500" />
            <span className="absolute -top-1 -right-1 flex">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
          </button>

          {/* Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-md shadow-lg z-50">
              <div className="px-4 py-3 border-b border-gray-100 font-medium text-gray-800">
                Notifikasi
              </div>
              <ul className="max-h-64 overflow-y-auto text-sm text-gray-700">
                {/* Example Notification Items */}
                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
                  Permintaan barang baru dari Budi
                </li>
                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
                  Persetujuan pengadaan diterima
                </li>
                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
                  Barang masuk ke gudang
                </li>
                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-blue-600 text-center">
                  Lihat semua notifikasi
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="relative" ref={profileRef}>
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-2 focus:outline-none active:scale-95 transition-all duration-200"
          >
            <img
              src="/images/avatar.jpg"
              alt="User Avatar"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="text-left text-sm leading-tight hidden sm:block">
              <div className="font-medium text-gray-800">Raihan Rifandi</div>
              <div className="text-gray-500 text-xs">Admin</div>
            </div>
            <ChevronDownCircle
              className={`w-4 h-4 text-gray-600 transform transition-transform duration-200 ml-1 ${
                showProfile ? 'rotate-180' : ''
              }`}
            />
          </button>

          {showProfile && (
            <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-md z-50 overflow-hidden">
              {/* User Info */}
              <div className="px-4 py-3 border-b border-gray-100">
                <div className="font-medium text-gray-800 text-sm">Raihan Rifandi</div>
                <div className="text-xs text-gray-500">raihanrifandi@unila.ac.id</div>
              </div>

              {/* Menu */}
              <ul className="text-sm text-gray-700">
                <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 cursor-pointer transition-all">
                  <UserCircle className="w-4 h-4 text-gray-500" /> Edit profil
                </li>
                <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 cursor-pointer transition-all">
                  <Settings className="w-4 h-4 text-gray-500" /> Pengaturan akun
                </li>
                <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 cursor-pointer transition-all">
                  <Info className="w-4 h-4 text-gray-500" /> Bantuan
                </li>
              </ul>

              {/* Divider */}
              <div className="border-t border-gray-100" />

              {/* Sign Out */}
              <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 cursor-pointer text-red-600 transition-all">
                <LogOutIcon className="w-4 h-4" /> Keluar
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;
