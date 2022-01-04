import conceptimg from "../assets/image/IMG 2.1.png";
import '../App.less'
import { Carousel,Image } from "antd";

const CaraImage=()=>{
    const contentStyle = {
        height: '400px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
    return (
        <div style={{marginTop:100,justifyContent:'center',alignItems:'center'}}>
            <div>
                <h1>Hello orld</h1>
            </div>
        <Carousel autoplay>
        <div>
          <Image  src={conceptimg}/>
        </div>
        <div>
        <Image  src={conceptimg}/>
        </div>
        <div>
        <Image  src={conceptimg}/>
        </div>
        <div>
        <Image  src={conceptimg}/>
        </div>
      </Carousel>
      </div>
    )
}
export default CaraImage