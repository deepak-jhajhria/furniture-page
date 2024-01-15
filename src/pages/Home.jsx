import DealProduct from "../components/DealProduct"
import FestivalOffer from "../components/FestivalOffer"
import Footer from "../components/Footer"
import OurProducts from "../components/OurProducts"
import Testimonial from "../components/Testimonial"
import TrendingProducts from "../components/TrendingProducts"
import Welcome from "../components/Welcome"
import WoodenSofa from "../components/WoodenSofa"
import gsap, { Power3 } from 'gsap';

const Home = () => {
    let tl = new gsap.timeline();
    let ease = Power3.easeOut();
    return (
        <div>
            <Welcome timeline={tl} ease={ease}/>
            <TrendingProducts timeline={tl} ease={ease}/>
            <OurProducts timeline={tl} ease={ease}/>
            <WoodenSofa timeline={tl} ease={ease}/>
            <DealProduct timeline={tl} ease={ease}/>
            <FestivalOffer timeline={tl} ease={ease}/>
            <Testimonial timeline={tl} ease={ease}/>
            <Footer timeline={tl} ease={ease}/>
        </div>
    )
}

export default Home
