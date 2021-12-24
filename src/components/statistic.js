import { Statistic, Row, Col,Card } from 'antd';

const StatisticData=()=>{
    return(
      <Card style={{ alignSelf:'center'  ,backgroundColor: 'lightyellow' }}>
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Total Visitors" value={112893} />
    </Col>
  </Row>
  </Card>)
}
export default StatisticData;