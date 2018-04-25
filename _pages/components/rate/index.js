import React from 'react'

    import BasicDemo from './BasicDemo.js'
import OtherCharacterDemo from './OtherCharacterDemo.js'
import ClearStarDemo from './ClearStarDemo.js'
import ReadOnlyDemo from './ReadOnlyDemo.js'
import HalfStarDemo from './HalfStarDemo.js'
import ShowCopywritingDemo from './ShowCopywritingDemo.js'
    import { Card } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

Rate component.

## When To Use

- Show evaluation.
- A quick rating operation on something.

## API

| Property | Description | type | Default |
| -------- | ----------- | ---- | ------- |
| allowClear | whether to allow clear when click again | boolean | true |
| allowHalf | whether to allow semi selection | boolean | false |
| autoFocus | get focus when component mounted | boolean | false |
| character | custom character of rate | ReactNode | \`\`\`&lt;Icon type=&quot;star&quot; /&gt;\`\`\` |
| className | custom class name of rate | string | - |
| count | star count | number | 5 |
| defaultValue | default value | number | 0 |
| disabled | read only, unable to interact | boolean | false |
| style | custom style object of rate | object | - |
| value | current value | number | - |
| onBlur | callback when component lose focus | Function() | - |
| onChange | callback when select value | Function(value: number) | - |
| onFocus | callback when component get focus | Function() | - |
| onHoverChange | callback when hover item | Function(value: number) | - |
| onKeyDown | callback when keydown on component | Function(event) | - |

## Methods

| Name | Description |
| ---- | ----------- |
| blur() | remove focus |
| focus() | get focus |
`
const expComponent = () => (
        <div>
            <h4>Rate</h4>

            <Card bordered={false}>
                        <BasicDemo />
        <OtherCharacterDemo />
        <ClearStarDemo />
        <ReadOnlyDemo />
        <HalfStarDemo />
        <ShowCopywritingDemo />

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        