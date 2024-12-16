import Header from "../Header"
import SimpleSlider from '../Carousel'
import './index.css'
const Home = () => {

    return (
        <div className="homeContainerDIV">
        <Header />
        <ul className="tabsContainerUL">
            <li className="tabOptionLI">HOME</li>
            <li className="tabOptionLI">CATEGORIES</li>
            <li className="tabOptionLI">MEN'S</li>
            <li className="tabOptionLI">WOMEN'S</li>
            <li className="tabOptionLI">JEWELLERY</li>
            <li className="tabOptionLI">PERFUME</li>
            <li className="tabOptionLI">BLOG</li>
            <li className="tabOptionLI">HOT OFFERS</li>
        </ul>
        <SimpleSlider />
        {/* <ul className="fashionCategoryOptionsContainerUL">
            <li>
                
            </li>
        </ul> */}
        </div>
    )
}

export default Home