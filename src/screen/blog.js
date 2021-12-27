import '../App.less'
import { Carousel } from "antd";
import CaraImage from '../components/imageCarousel';


const Blog=(props)=>{
    const contentStyle = {
        height: '400px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };

    return (
        <CaraImage/>
    )
}

export default Blog;