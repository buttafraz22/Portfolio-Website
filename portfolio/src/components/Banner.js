import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/apni.png'

export const Banner = () =>{
    const [loopNum, setLoopNum] = useState(0) // which word to display at the start
    const [isDeleted, setDeleted] = useState(false) // clear displayed word
    const toRotate = [ 'Desktop Developer' , 'Web Developer' ] // list of fields (to be modified later on)
    const [text,setText] = useState('') // this is to give the start of the block of word we are showing
    const [delta,setDelta] = useState(300 - Math.random() * 100) // state to manage transition between each letter part
    const period=1500

    useEffect(()=>{
        let ticker = setInterval( () => {
            tick()
        },delta)

        return ()=>{clearInterval(ticker)}
    },[text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        /*
            this logic deals with concatenating parts of incoming text. If the word is not to be
            deleted, we add each letter one by one, else delete it.
        */
        let updatedText = isDeleted ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        
        setText(updatedText)

        if(isDeleted){
            setDelta(prevDelta => prevDelta/2)
        }
        if(!isDeleted && updatedText === fullText){
            setDeleted(true)
            setDelta(period)
        } else if(isDeleted && updatedText === ''){
            setDeleted(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col  xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Image"  style={{ height: '70%', width: '70%', padding: 40,marginTop:80 }}/>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Welcome to my Portfolio Website!
                        </span>
                        <h1>I am Afraz Butt <span className="wrap"><p><h3>{text}</h3></p></span></h1>
                        <p> I am (currently) a second year student at the prestigious
                            University of Engineering and Technology (UET), Lahore's 
                            Computer Science Department. Having grown up halfway in Jeddah 
                            and halfway in Gujranwala, I have a proven track-record of doing things before
                            deadlines. 
                        </p>
                        <button onClick = {() => console.log('connect')}>Let's Connect! <ArrowRightCircle size={25}/></button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}