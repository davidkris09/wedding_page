import { 
  ContentUs, 
  Title, 
  Years, 
  TitleStoryLeftSide, 
  StoryLineRightSide, 
  TitleStoryRightSide,
  StoryLineLeftSide
} from "../styles/Timeline.styled";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Gallery } from "./gallery";

const Timeline = () => {
  return (
    <>
      <ContentUs>
          <Title>LOVE - STORY - TIMELINE</Title>
          <Container className="containerTimeline">
            <Row className="justify-content-md-center rowStoryLine">
              <Col xs lg="3">
                <Years>2021</Years>
              </Col>
              <Col xs lg="1">
              </Col>
              <Col xs lg="3">
                <Row>
                  <TitleStoryLeftSide>FIRST DATE</TitleStoryLeftSide>
                </Row>
                <Row>
                  <StoryLineRightSide>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</StoryLineRightSide>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-md-center rowStoryLine">
              <Col xs lg="3">
                <Row>
                  <TitleStoryRightSide>MOVING IN</TitleStoryRightSide>
                </Row>
                <Row>
                  <StoryLineLeftSide>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</StoryLineLeftSide>
                </Row>
              </Col>
              <Col xs lg="1">
              </Col>
              <Col xs lg="3">
                <Years>2022</Years>
              </Col>
            </Row>
            <Row className="justify-content-md-center rowStoryLine">
              <Col xs lg="3">
                <Years>2024</Years>
              </Col>
              <Col xs lg="1">
              </Col>
              <Col xs lg="3">
                <Row>
                  <TitleStoryLeftSide>ENGAGEMENT</TitleStoryLeftSide>
                </Row>
                <Row>
                  <StoryLineRightSide>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</StoryLineRightSide>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-md-center rowStoryLine">
              <Col xs lg="3">
                <Row>
                  <TitleStoryRightSide>WEDDING DAY</TitleStoryRightSide>
                </Row>
                <Row>
                  <StoryLineLeftSide>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</StoryLineLeftSide>
                </Row>
              </Col>
              <Col xs lg="1">
              </Col>
              <Col xs lg="3">
                <Years>2025</Years>
              </Col>
            </Row>
          </Container>
          <Gallery/>
      </ContentUs>
    </>
  )
}

export default Timeline;