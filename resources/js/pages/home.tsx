import ShopBanner from '../components/frontend/ShopBanner';
import ShopCategories from '../components/frontend/ShopCategories';
import ShopFrontLayout from '../layouts/shop-front-layout';

export default function home() {
    return (
        <div>
            <ShopFrontLayout>
                <div className="min-h-screen">
                    <div className="container mx-auto max-w-6xl">
                        <ShopBanner />
                        <div className="py-16">
                            <ShopCategories />
                        </div>
                    </div>
                </div>
            </ShopFrontLayout>
        </div>
    );
}
