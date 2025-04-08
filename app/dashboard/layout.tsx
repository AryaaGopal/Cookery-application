import SideMenu from "@/components/layout/side-menu.component";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideMenu isSideMenuOpen={false}>
          {children}
        </SideMenu>
      </div>
    </div>
  );
}
