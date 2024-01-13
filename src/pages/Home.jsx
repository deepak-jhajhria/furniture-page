import DealProduct from "../components/DealProduct"
import FestivalOffer from "../components/FestivalOffer"
import Footer from "../components/Footer"
import OurProducts from "../components/OurProducts"
import Testimonial from "../components/Testimonial"
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
            <FestivalOffer />
            <Testimonial />
            <Footer />
        </div>
    )
}

export default Home
