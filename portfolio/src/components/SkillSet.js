import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import meter1 from "../assets/img/meter1.svg"
import meter3 from "../assets/img/meter3.svg"
import meter2 from "../assets/img/meter2.svg"
import colorSharp from "../assets/img/color-sharp.png"
// import { useRef } from "react"

export const Skills = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      }
    //   const lastAddedElement = useRef(null)
    //   const scrollToLastAddedElement = () => {
    //     lastAddedElementRef.current.scrollIntoView({ behavior: "smooth" });
    //   }
      
    
      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <div className="skill-bx">
                        <Col>
                        <h2>Skills</h2>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className="item">
                                <img src={meter1} alt={'Image'}/>
                                <h5>Desktop Development In .NET</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt={'Image'}/>
                                <h5>Web Development In React</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt={'Image'}/>
                                <h5>Programming and Problem Solving</h5>
                            </div>
                        </Carousel>
                        </Col>
                    </div>
                </Row>
            </Container>
           {/* <img src={colorSharp} className="background-img-left"/> */}
        </section>
      );
}