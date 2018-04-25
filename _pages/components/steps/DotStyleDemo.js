import React from 'react'
import { Steps } from 'antd';
const Step = Steps.Step;


const expComponent = () => (
  <Steps progressDot current={1}>
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps>
)
export default expComponent