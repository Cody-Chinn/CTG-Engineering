import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styling/Home.css';
import { useMediaQuery } from 'react-responsive';

// Media Queries from https://github.com/contra/react-responsive
const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }
const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
}

const Home = () => {
        return(
            <Carousel className="caro">
                <Carousel.Item>
                    <Desktop>
                        <img
                            className="d-block w-100"
                            src="./assets/Cory In Studio Cropped.jpg"
                            alt="First slide"
                        />
                    </Desktop>
                    <Tablet>
                        <img
                            className="d-block w-100"
                            src="./assets/Cory In Studio one to one Cropped.png"
                            alt="First slide"
                        />
                    </Tablet>
                    <Mobile>
                        <img
                            className="d-block w-100"
                            src="./assets/Cory In Studio one to one Cropped.png"
                            alt="First slide"
                        />
                    </Mobile>
                    <Carousel.Caption>
                    <h3 className="caro-headings">Professional Grade Mixing & Production</h3>
                    <p>Years of experience giving music a professional grade quality</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Desktop>
                        <img
                            className="d-block w-100"
                            src="./assets/aSthEtiC Cropped.jpg"
                            alt="First slide"
                        />
                    </Desktop>
                    <Tablet>
                        <img
                            className="d-block w-100"
                            src="./assets/aSthEtiC.jpg"
                            alt="First slide"
                        />
                    </Tablet>
                    <Mobile>
                        <img
                            className="d-block w-100"
                            src="./assets/aSthEtiC.jpg"
                            alt="First slide"
                        />
                    </Mobile>
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <Desktop>
                        <img
                            className="d-block w-100"
                            src="./assets/LA Cropped.jpg"
                            alt="First slide"
                        />
                    </Desktop>
                    <Tablet>
                        <img
                            className="d-block w-100"
                            src="./assets/LA one to one Cropped.jpg"
                            alt="First slide"
                        />
                    </Tablet>
                    <Mobile>
                        <img
                            className="d-block w-100"
                            src="./assets/LA one to one Cropped.jpg"
                            alt="First slide"
                        />
                    </Mobile>
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
}

export default Home;