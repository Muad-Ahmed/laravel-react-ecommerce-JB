import { ReactNode } from 'react';
import ShopFooter from '../components/frontend/ShopFooter';
import ShopHeader from '../components/frontend/ShopHeader';
import { ThemeProvider } from '../components/theme-provider';

export default function ShopFrontLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <ShopHeader />
                {children}
                <ShopFooter />
            </ThemeProvider>
        </div>
    );
}
