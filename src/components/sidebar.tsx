'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  FileText,
  Menu,
  Package,
  Store,
  Tag,
  Target,
  TrendingUp,
  Users,
  X,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { href: '/', label: 'Dashboard', icon: Store },
    { href: '/sales', label: 'Sales Analytics', icon: TrendingUp },
    { href: '/inventory', label: 'Inventory', icon: Package },
    { href: '/stores', label: 'Stores & Staff', icon: Users },
    { href: '/promotions', label: 'Promotions', icon: Tag },
    { href: '/predictions', label: 'Predictions', icon: Target },
    { href: '/reports', label: 'Reports', icon: FileText },
  ];

  return (
    <aside
      className={`${isCollapsed ? 'w-20' : 'w-64'} border-r bg-sidebar min-h-screen transition-all duration-300`}
    >
      <div className={`p-4 w-full sticky top-0 ${!isCollapsed && 'w-56'}`}>
        <div
          className={cn(
            'flex items-center mb-4 w-full',
            isCollapsed ? 'justify-center' : 'justify-between',
          )}
        >
          {!isCollapsed && (
            <h2 className="text-lg font-semibold text-sidebar-foreground">
              Market Data
            </h2>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-accent"
          >
            {isCollapsed ? (
              <Menu className="h-4 w-4" />
            ) : (
              <X className="h-4 w-4" />
            )}
          </Button>
        </div>
        <nav className="space-y-2 flex flex-col w-full">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link key={item.href} href={item.href} className="w-full">
                <Button
                  variant="ghost"
                  className={`flex w-full ${isCollapsed ? 'justify-center items-center' : 'justify-start'} ${
                    isActive
                      ? 'bg-accent text-white'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                  }`}
                  title={isCollapsed ? item.label : undefined}
                >
                  <Icon
                    className={cn('h-4 w-4', isCollapsed ? 'mr-0' : 'mr-3')}
                  />
                  {!isCollapsed && item.label}
                </Button>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
