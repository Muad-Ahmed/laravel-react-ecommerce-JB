'use client';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { ChevronDown, Menu, Search, ShoppingCart, User, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const NAVIGATION_LINKS = [
    { href: '/mens', label: "Men's" },
    { href: '/womens', label: "Women's" },
    { href: '/accessories', label: 'Accessories' },
    { href: '/kids', label: 'Kids' },
];

const CATEGORIES = [
    'Electronics',
    'Clothing',
    'Home & Garden',
    'Sports & Outdoor',
    'Beauty & Health',
    'Toys & Games',
];

export default function ShopHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchMobileOpen, setSearchMobileOpen] = useState(false);

    // Cart and notification examples
    const cartCount = 2;
    const cartTotal = '$299.00';
    const accountNotifications = 1;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        // Add scroll listener
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close search overlay when Escape key is pressed
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && searchMobileOpen) {
                setSearchMobileOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [searchMobileOpen]);

    return (
        <header className="w-full">
            <nav
                className={cn(
                    'flex w-full flex-col bg-white transition-all duration-300',
                    isScrolled && 'shadow-md',
                )}
            >
                {/* Main navigation bar */}
                <div className="border-b border-gray-200">
                    <div
                        className={cn(
                            'container mx-auto flex items-center justify-between px-4 py-3 transition-all duration-300',
                            isScrolled && 'py-2',
                        )}
                    >
                        {/* Mobile menu button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-black hover:bg-gray-100 md:hidden"
                            onClick={() => setIsMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <Menu className="h-5 w-5" />
                        </Button>

                        {/* Logo */}
                        <Link
                            href="/"
                            className="group flex items-center"
                            aria-label="TailGrids home"
                        >
                            <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-black p-1 transition-transform group-hover:scale-110">
                                <span className="text-xl font-bold text-white">
                                    SU
                                </span>
                            </div>
                            <span className="text-xl font-bold">Simple UI</span>
                        </Link>

                        {/* Desktop search bar */}
                        <div className="mx-6 hidden max-w-xl flex-1 md:flex">
                            <div className="flex w-full overflow-hidden rounded-md border border-gray-300">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            className="flex h-10 items-center rounded-r-none border-r border-gray-300 bg-gray-50 px-4 text-gray-700 hover:bg-gray-100"
                                        >
                                            All categories
                                            <ChevronDown className="ml-2 h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        align="start"
                                        className="w-[200px]"
                                    >
                                        {CATEGORIES.map((category) => (
                                            <DropdownMenuItem key={category}>
                                                {category}
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <div className="relative flex-1">
                                    <Input
                                        placeholder="I'm shopping for..."
                                        className="h-10 rounded-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                                    />
                                    <Button
                                        className="absolute top-0 right-0 h-full rounded-l-none bg-black transition-colors hover:bg-gray-800"
                                        aria-label="Search"
                                    >
                                        <Search className="h-4 w-4 text-white" />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Right icons */}
                        <div className="flex items-center gap-5">
                            <Link
                                href="/account"
                                className="group relative flex items-center"
                                aria-label="My account"
                            >
                                <div className="relative">
                                    <User className="h-5 w-5 transition-transform group-hover:scale-110" />
                                    {accountNotifications > 0 && (
                                        <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                                            {accountNotifications}
                                        </span>
                                    )}
                                </div>
                                <div className="ml-2 hidden flex-col md:flex">
                                    <span className="text-xs">Login</span>
                                    <span className="text-xs font-medium">
                                        My Account
                                    </span>
                                </div>
                            </Link>

                            <Link
                                href="/cart"
                                className="group flex items-center"
                                aria-label="Shopping cart"
                            >
                                <div className="relative">
                                    <ShoppingCart className="h-5 w-5 transition-transform group-hover:scale-110" />
                                    {cartCount > 0 && (
                                        <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                                            {cartCount}
                                        </span>
                                    )}
                                </div>
                                <span className="ml-2 hidden text-xs font-medium md:block">
                                    {cartTotal}
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Category links - desktop */}
                <div
                    className={cn(
                        'border-b border-gray-200 bg-white px-4 py-2 transition-all duration-300',
                        isScrolled ? 'md:hidden' : 'block',
                    )}
                >
                    <div className="container mx-auto">
                        {/* Mobile search bar */}
                        <div className="relative mb-1 w-full md:hidden">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="flex w-full justify-start rounded-md py-1.5 pr-4 pl-3 text-gray-600 hover:bg-gray-100 hover:text-black"
                                onClick={() => setSearchMobileOpen(true)}
                            >
                                <Search className="mr-2 h-4 w-4" />
                                <span className="text-sm">
                                    Search products...
                                </span>
                            </Button>
                        </div>

                        {/* Desktop category navigation */}
                        <div className="hidden items-center justify-between md:flex">
                            <div className="flex items-center space-x-8">
                                {NAVIGATION_LINKS.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="group relative py-1 text-sm font-medium transition-colors hover:text-gray-600"
                                    >
                                        {link.label}
                                        <span className="absolute -bottom-[2px] left-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                ))}
                            </div>

                            <div className="text-sm">
                                <span className="text-gray-600">
                                    Free shipping on orders over $50
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile search overlay */}
            {searchMobileOpen && (
                <div className="fixed inset-0 z-50 animate-in bg-black/30 fade-in-0 md:hidden">
                    <div className="fixed top-0 right-0 left-0 animate-in bg-white p-4 shadow-lg duration-300 slide-in-from-top">
                        <div className="relative">
                            <Input
                                placeholder="Search products..."
                                className="border-gray-300 pr-16 focus:border-black"
                                autoFocus
                            />
                            <div className="absolute top-0 right-0 flex h-full items-center pr-2">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="mr-1 h-8 w-8 text-gray-500 hover:bg-gray-100 hover:text-black"
                                    onClick={() => setSearchMobileOpen(false)}
                                    aria-label="Close search"
                                >
                                    <X className="h-4 w-4" />
                                </Button>
                                <Button
                                    className="h-8 w-8 rounded-md bg-black hover:bg-gray-800"
                                    aria-label="Search"
                                >
                                    <Search className="h-4 w-4 text-white" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile menu drawer */}
            {isMenuOpen && (
                <>
                    <div
                        className="fixed inset-0 z-50 animate-in bg-black/50 fade-in md:hidden"
                        onClick={() => setIsMenuOpen(false)}
                    />
                    <div className="fixed inset-y-0 left-0 z-50 w-[280px] animate-in overflow-auto bg-white shadow-xl duration-300 slide-in-from-left md:hidden">
                        <div className="flex h-full flex-col">
                            <div className="flex items-center justify-between border-b border-gray-200 p-4">
                                <div className="text-xl font-bold">
                                    Simple UI
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-black hover:bg-gray-100"
                                    onClick={() => setIsMenuOpen(false)}
                                    aria-label="Close menu"
                                >
                                    <X className="h-5 w-5" />
                                </Button>
                            </div>

                            <div className="border-b border-gray-200 p-4">
                                <div className="relative">
                                    <Input
                                        placeholder="Search products..."
                                        className="border-gray-300 pr-10"
                                    />
                                    <Button
                                        className="absolute top-0 right-0 h-full rounded-l-none bg-black hover:bg-gray-800"
                                        aria-label="Search"
                                    >
                                        <Search className="h-4 w-4 text-white" />
                                    </Button>
                                </div>
                            </div>

                            <div className="flex flex-col p-2">
                                {NAVIGATION_LINKS.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="rounded-md px-4 py-3 font-medium transition-colors hover:bg-gray-50"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>

                            <div className="mt-auto border-t border-gray-200 p-4">
                                <div className="flex flex-col space-y-3">
                                    <Link
                                        href="/account"
                                        className="flex items-center rounded-md px-4 py-2 transition-colors hover:bg-gray-50"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <User className="mr-3 h-5 w-5" />
                                        <span>My Account</span>
                                    </Link>
                                    <Link
                                        href="/orders"
                                        className="flex items-center rounded-md px-4 py-2 transition-colors hover:bg-gray-50"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="mr-3"
                                        >
                                            <rect
                                                width="16"
                                                height="20"
                                                x="4"
                                                y="2"
                                                rx="2"
                                            />
                                            <path d="M9 22v-4h6v4" />
                                            <path d="M8 6h.01" />
                                            <path d="M16 6h.01" />
                                            <path d="M12 6h.01" />
                                            <path d="M12 10h.01" />
                                            <path d="M12 14h.01" />
                                            <path d="M16 10h.01" />
                                            <path d="M16 14h.01" />
                                            <path d="M8 10h.01" />
                                            <path d="M8 14h.01" />
                                        </svg>
                                        <span>My Orders</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* Space to prevent content from being hidden under the navbar */}
            <div className="h-[80px] sm:h-[80px] md:h-[130px]"></div>
        </header>
    );
}
