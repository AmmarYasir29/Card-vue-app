<template>
    <main id="app">
        <section class="product">
            <Product
                v-for="product in product"
                :key="product.color"
                :product="product"
            >
            </Product>
        </section>
    </main>
</template>

<script>
export default {
    name: "app",
    data() {
        return {
            product: [
                {
                    title: "Nike Air Max",
                    color: "green",
                    bgtext: "NIKE",
                    src: require("./assets/green-shoe.png")
                },
                {
                    title: "Nike flex",
                    color: "blue",
                    bgtext: "AIR",
                    src: require("./assets/blue-shoe.png")
                },
                {
                    title: "Nike Roche Runs",
                    color: "pink",
                    bgtext: "MAX",
                    src: require("./assets/pink-shoe.png")
                }
            ]
        };
    }
};
</script>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

main {
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
}

.products {
    display: flex;
    max-width: 1280px;
    padding: 25px;
    margin: 0 auto;
}
</style>