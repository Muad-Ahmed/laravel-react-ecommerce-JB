import { ReactNode } from 'react';
import ShopFooter from '../components/frontend/ShopFooter';
import ShopHeader from '../components/frontend/ShopHeader';
import GlobalLayout from './global-layout';

export default function ShopFrontLayout({ children }: { children: ReactNode }) {
    return (
        <GlobalLayout>
            <ShopHeader />
            {children}
            <ShopFooter />
        </GlobalLayout>
    );
}
