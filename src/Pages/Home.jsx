import Layout from '../Layout/Layout'
import Category from '../Components/Category'
import HomePageProductCard from '../Components/HomePageProductCard'
import Track from '../Components/Track'
import Testimonial from '../Components/Testimonial'

const Home = () => {
    return (
        <Layout>

            <Category />
            <HomePageProductCard />
            <Track />
            <Testimonial />
        </Layout>
    )
}

export default Home