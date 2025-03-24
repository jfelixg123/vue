const app = Vue.createApp({
  data() {
    return {
        cart: 0,
        totalPrice: 0,
        product: 'Socks',
        image: './assets/img/sock_green.webp',
        url: 'https://www.google.com/imgres?q=socks&imgurl=https%3A%2F%2Fridersboutique.com%2Fcdn%2Fshop%2Fproducts%2FCapturadepantalla2020-11-10alas19.49.13_1080x.png%3Fv%3D1605034733&imgrefurl=https%3A%2F%2Fridersboutique.com%2Fproducts%2Fcalcetines-american-socks&docid=rui0pXZR0rK_rM&tbnid=5U_vN_uyFBvk0M&vet=12ahUKEwjG_abt96KMAxXBcvEDHWuOHgwQM3oECGUQAA..i&w=1080&h=1078&hcb=2&ved=2ahUKEwjG_abt96KMAxXBcvEDHWuOHgwQM3oECGUQAA',
        inStock: false,
        inventory: 10,
        onSale: true,
        details: ['50% cotton', '30% wool', '20% polyester'],
        variants: [
          { id: 2234, color: 'green', image: './assets/img/sock_green.webp', price: 5},
          { id: 2235, color: 'black', image: './assets/img/socks.webp', price: 2},
        ],
        sizes: ['S', 'M', 'L', 'XL'],
        selectedVariant: 0
      }
  },
  methods: {
    addToCart() {
      this.cart += 1
      this.totalPrice += this.variants[this.selectedVariant].price;
    },
    updateImage(variantImage, variantIndex) {
      this.image = variantImage;
      this.selectedVariant = variantIndex;
    },
    decreasseToCart() {
      this.cart -= 1;
    }
  }
})