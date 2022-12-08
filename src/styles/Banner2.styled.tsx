import styled from "styled-components";
import {Images} from '../images/images'

export const Banner2Div = styled.div`
    width: 100%;
    height: 60vh;
    background-image: url(${Images.banner2});
    top: 0;
    left: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    z-index: -1;
`

export const Banner2Content = styled.h1`
    width: 100%;
    height: 60vh;
    position: absolute;
    text-align: center;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Constantia;
    color: #f9f6f6;
`