export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-screen bg-background">
      <div className="flex w-screen">{children}</div>
    </div>
  );
}
