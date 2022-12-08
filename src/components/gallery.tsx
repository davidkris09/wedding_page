import {GalleryDiv, GalleryTitle, GalleryImages, GalleryImgDiv, GalleryImgUl, GalleryImgList} from '../styles/Gallery.styled'
import {Images} from '../images/gallery'

export const Gallery: React.FC = () => {
  return (
    <GalleryDiv>
        <GalleryTitle>OUR - WEDDING - GALLERY</GalleryTitle>
        <GalleryImgDiv>
          <GalleryImgUl>
            {
              Images.map((v,i) => {
                return(
                  <GalleryImgList key={i}>
                    <GalleryImages alt='' src={v}/>
                  </GalleryImgList>
                )
              })
            }
          </GalleryImgUl>
        </GalleryImgDiv>
    </GalleryDiv>
  )
}
