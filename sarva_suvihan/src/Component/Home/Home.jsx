import { Banner } from "./Banner"
import { Partners } from "./Partners"
import { WhoWeAre } from "./WhoWeAre"
import {Solutions} from "./Solutions"
import { Automation } from "./Automation"
import { Testimonials } from "./Testimonials"
import { Accolades } from "./Accolades"
import { GetInTouch } from "./GetInTouch"
export const Home = () => {
    return(
        <>
        <Banner/>
        <Partners/>
        <WhoWeAre/>
        <Solutions/>
        <Testimonials/>
        <Accolades/>
        <GetInTouch/>
        <Automation/>
        </>
       
    )
}