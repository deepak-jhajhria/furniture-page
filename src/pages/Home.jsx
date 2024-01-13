import DealProduct from "../components/DealProduct"
import Footer from "../components/Footer"
import OurProducts from "../components/OurProducts"
import TrendingProducts from "../components/TrendingProducts"
import Welcome from "../components/Welcome"
import WoodenSofa from "../components/WoodenSofa"

const Home = () => {
    return (
        <div>
            <Welcome />
            <TrendingProducts />
            <OurProducts />
            <WoodenSofa />
            <DealProduct />
            <Footer />
        </div>
    )
}

export default Home
