import { Sidebar } from '@/components/sidebar';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-screen bg-background">
      <div className="flex w-screen">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
