import styled from "styled-components";
import { device } from "../assets/device";

export const GalleryDiv = styled.div`
    width: 80%;
    margin: auto;
    flex-direction: column;
`

export const GalleryTitle = styled.h2`
    text-align: center;
    font-family: Constantia;
    color: #5b5b5b;
    height: 100px;
`

export const GalleryImgDiv = styled.div`
    position: relative;
    padding: 10px;
    margin: 0;
`

export const GalleryImgUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(50px, auto));
    grid-auto-flow: dense;
    grid-gap: 2px;
    justify-content: center;
    margin: 0 auto;
    padding: 0;
`

export const GalleryImgList = styled.li`
    position: relative;
`

export const GalleryImages = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`