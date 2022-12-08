import Banner from '../images/banner.jpg'
import Banner2 from '../images/banner2.jpg'
import Groom from '../images/groom.jpg'
import Bride from '../images/bride.jpg'
import Engagement from '../images/engagement.jpg'

interface Props {
    banner: string,
    banner2: string,
    groom: string,
    bride: string,
    engagement: string,
}

export const Images: Props = ({
    banner: Banner, 
    banner2: Banner2,
    groom: Groom,
    bride: Bride,
    engagement: Engagement
})