import styled from "styled-components";
import {Images} from '../images/images'

export const EngagementDiv = styled.div`
    width: 100%;
    height: 50vh;
    background-image: url(${Images.engagement});
    top: 0;
    left: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: relative;
    background-position: center center;
    z-index: -1;
`

export const EngagementTitle = styled.h1`
    width: 100%;
    height: 50vh;
    position: absolute;
    text-align: center;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Goudy Old Style;
    color: #ffffff;
`