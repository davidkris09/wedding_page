import { ContentUs, Title, CoupleName, AboutCouple } from "../styles/Content.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faTiktok } from "@fortawesome/free-brands-svg-icons"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import { Images } from "../images/images";

const Content = () => {
  return (
    <>
      <ContentUs>
          <Title>ABOUT - US</Title>
          <Container className="containerCouple">
            <Row>
              <Col className="colCouple">
                <Image src={Images.groom} roundedCircle={true} width={300} height={400} className='imageCouple'/>
                <Row>
                  <CoupleName>Groom</CoupleName>
                </Row>
                <Row className="rowAboutCouple">
                  <AboutCouple>Today I'm 28 Years Old</AboutCouple>
                  <AboutCouple>"For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God not by works, so that no one can boast." EFESUS 2:8-9</AboutCouple>
                  <Row>
                      <span>
                        <FontAwesomeIcon icon={faFacebook} className='icon'/>
                        <FontAwesomeIcon icon={faInstagram} className='icon'/>
                        <FontAwesomeIcon icon={faTwitter} className='icon'/>
                        <FontAwesomeIcon icon={faTiktok} className='icon'/>
                      </span>
                  </Row>
                </Row>
              </Col>
              <Col className="colCouple">
                <Image src={Images.bride} roundedCircle={true} width={300} height={400} className='imageCouple'/>
                <Row>
                  <CoupleName>Bride</CoupleName>
                </Row>
                <Row className="rowAboutCouple">
                  <AboutCouple>Today I'm 26 Years Old</AboutCouple>
                  <AboutCouple>"For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God not by works, so that no one can boast." EFESUS 2:8-9</AboutCouple>
                  <Row>
                      <span>
                        <FontAwesomeIcon icon={faFacebook} className='icon'/>
                        <FontAwesomeIcon icon={faInstagram} className='icon'/>
                        <FontAwesomeIcon icon={faTwitter} className='icon'/>
                        <FontAwesomeIcon icon={faTiktok} className='icon'/>
                      </span>
                  </Row>
                </Row>
              </Col>
            </Row>
        </Container>
      </ContentUs>
    </>
  )
}

export default Content;