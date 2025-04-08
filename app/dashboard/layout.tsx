'use client';

import SideMenu from "@/components/layout/side-menu.component";
import AppHeader from "@/components/layout/app-header.component";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-64 flex-shrink-0 border-r border-gray-200">
        <SideMenu isSideMenuOpen={false} />
      </div>

      <div className="flex-1 flex flex-col overflow-auto bg-gray-50">
        <div className="w-full border-b border-gray-200 bg-white p-4 shadow-sm">
          <AppHeader />
        </div>

        <div className="p-6 flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
