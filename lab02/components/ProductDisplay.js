app.component('product-display',{
    props:{
        premium: {
            type: Boolean,
            required: true
        }
    },

    template:
        /*html*/
        `<div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img :src="image">
                </div>
                <div class="product-info">
                    <h1>{{ title }}</h1>
                    
                    <p v-if="inventory > 10">In Stock</p>
                    <p v-else>Out of Stock</p>
                    <p>Shipping: {{shipping}}</p>
                    <product-details :details="details"></product-details>
                    <div v-for="(variant,index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle" :style="{backgroundColor: variant.color}"></div>
                    <button class="button" :disabled='!inStock' :class="{disabledButton: !inStock}" @click="addToCart ">Add to Cart</button>
                    <button class="button" :disabled='!inStock' :class="{disabledButton: !inStock}" @click="removeCart">Remove Cart</button>
                </div>
            </div>
            <review-list v-if="reviews.length" :reviews="reviews"></review-list>
            <review-form @review-submitted="addReview"></review-form>
        </div>`,
    data(){
        return {
            product: 'Shoes',
            brand: 'SE 331',

            inventory: 100,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 50}
            ],
            activeClass: true,
            selectedVariant: 0,
            reviews:[]

        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        updateVariant(index){
            this.selectedVariant = index;
        },
        removeCart() {
            this.$emit('remove-cart', this.variants[this.selectedVariant].id)
        },
        addReview(review){
            this.reviews.push(review)
        }
    },
    computed: {
        title(){
            return this.brand+' '+this.product
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },
        shipping() {
            if (this.premium){
                return 'Free'
            }
            return 30
        }
    }
        
})