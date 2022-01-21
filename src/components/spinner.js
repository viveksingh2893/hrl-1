import {Spin,Typography} from 'antd'
import '../App.less'
const Loader=()=>{

    return(
    <div className='loader'>

    <Spin style={{color:'#666666'}}/>
    <Typography.Title level={3}>Loading.............</Typography.Title>
    </div>
    )
}
export default Loader;