import Banner from "../BAnner/Banner";
import CategoryList from "../Category List/CategoryList";
import FeaturedJobs from "../Featured Jobs/FeaturedJobs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;