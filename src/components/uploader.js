import {Spin,Typography} from 'antd'
import '../App.less'
const UpLoader=()=>{

    return(
    <div className='loader'>

    <Spin style={{color:'#666666'}}/>
    <Typography.Title level={3}>Uploading data...</Typography.Title>
    </div>
    )
}
export default UpLoader;