import { Shop } from './shop.model';

export class ShopService {
    shopProducts: Shop[] = [
        new Shop(0, 'Your product1', 19.99, 'img/pr-2-1.jpg', 'img/pr-2-3.jpg', [], 0, 0),
        new Shop(1, 'Your product2', 19.99, 'img/pr-3-1.jpg', 'img/pr-3-3.jpg', [], 0, 0),
        new Shop(2, 'Your product', 19.99, 'img/pr-4-3.jpg', 'img/pr-4-3.jpg', [], 0, 0),
        new Shop(3, 'Your product', 19.99, 'img/pr-2-1.jpg', 'img/pr-2-3.jpg', [], 0, 0),
        new Shop(4, 'Your product', 19.99, 'img/pr-3-1.jpg', 'img/pr-3-3.jpg', [], 0, 0),
        new Shop(5, 'Your product', 19.99, 'img/pr-4-3.jpg', 'img/pr-4-3.jpg', [], 0, 0)
    ];
    getShopProducts() {
        return this.shopProducts.slice();
    }
    getShopProduct(id: number) {
        return this.shopProducts[id];
    }
}
