const app = Vue.createApp({
    data() {
        return {
            product: 'Socks'
            ,desc: 'Good for your toes'
            ,image: './assets/images/socks_green.jpg'
            ,inStock: true,
            inventory: 100
            ,details: ['50% cotton', '30% wool', '20% polyester']
            ,variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue' , image: './assets/images/socks_blue.jpg'}
            ],
            cart: 0
            ,sizes: ['S' , 'M' , 'L']
            ,sales : true
            ,link: 'https://www.camt.cmu.ac.th'
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        changeStock() {
            this.inventory = 0
        }
    }
})
