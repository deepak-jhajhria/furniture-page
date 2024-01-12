import OurProducts from "../components/OurProducts"
import TrendingProducts from "../components/TrendingProducts"
import Welcome from "../components/Welcome"

const Home = () => {
    return (
        <div>
            <Welcome />
            <TrendingProducts />
            <OurProducts />
        </div>
    )
}

export default Home
