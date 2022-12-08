import styled from "styled-components";
import {Images} from '../images/images'

export const BannerDiv = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${Images.banner});
    top: 0;
    left: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    z-index: -1;
`

export const BannerContent = styled.h1`
    width: 100%;
    height: 100vh;
    position: absolute;
    text-align: center;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Constantia;
    color: #5b5b5b;
`