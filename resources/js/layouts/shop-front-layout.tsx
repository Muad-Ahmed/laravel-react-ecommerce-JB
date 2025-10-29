import { ReactNode } from 'react';
import ShopFooter from '../components/frontend/ShopFooter';
import ShopHeader from '../components/frontend/ShopHeader';

export default function ShopFrontLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <ShopHeader />
            {children}
            <ShopFooter />
        </div>
    );
}
