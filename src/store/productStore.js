import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
    state: () => ({
        products: [
            {
                id: 1,
                name: 'Ноутбук Apple MacBook Air',
                description: 'Легкий та потужний ноутбук з дисплеєм Retina.',
                price: 999,
                image: 'https://via.placeholder.com/150'
            },
            {
                id: 2,
                name: 'Смартфон Samsung Galaxy S21',
                description: 'Флагманський смартфон з потрійною камерою.',
                price: 799,
                image: 'https://via.placeholder.com/150'
            },
            {
                id: 3,
                name: 'Навушники Sony WH-1000XM4',
                description: 'Бездротові навушники з шумозаглушенням.',
                price: 349,
                image: 'https://via.placeholder.com/150'
            },
            {
                id: 4,
                name: 'Планшет iPad Pro',
                description: 'Потужний планшет для роботи та творчості.',
                price: 1099,
                image: 'https://via.placeholder.com/150'
            }
        ]
    }),
    actions: {
        addProduct(newProduct) {
            this.products.push({ ...newProduct, id: this.products.length + 1 });
        },
        updateProduct(updatedProduct) {
            const index = this.products.findIndex(p => p.id === updatedProduct.id);
            if (index !== -1) {
                this.products[index] = { ...this.products[index], ...updatedProduct };
            }
        },
        deleteProduct(productId) {
            this.products = this.products.filter(p => p.id !== productId);
        }
    },
    getters: {
        getProductById: (state) => (id) => {
            return state.products.find(product => product.id === id);
        },
        totalProducts: (state) => {
            return state.products.length;
        }
    }
});