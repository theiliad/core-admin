import React from 'react'

    import CustomizeDurationDemo from './CustomizeDurationDemo.js'
import NormalPromptDemo from './NormalPromptDemo.js'
import MessageOfLoadingDemo from './MessageOfLoadingDemo.js'
import OtherTypesOfMessageDemo from './OtherTypesOfMessageDemo.js'
    import { Card } from 'antd';
    const ReactMarkdown = require('react-markdown')
    require('./styles.scss')
const markDownInput = `---

Display global messages as feedback in response to user operations.

## When To Use

- To provide feedback such as success, warning, error etc.
- A message is displayed at top and center and will be dismissed automatically, as a non-interrupting light-weighted prompt.

## API

This components provides some static methods, with usage and arguments as following:

- \`\`\`message.success(content, [duration], onClose)\`\`\`
- \`\`\`message.error(content, [duration], onClose)\`\`\`
- \`\`\`message.info(content, [duration], onClose)\`\`\`
- \`\`\`message.warning(content, [duration], onClose)\`\`\`
- \`\`\`message.warn(content, [duration], onClose)\`\`\` // alias of warning
- \`\`\`message.loading(content, [duration], onClose)\`\`\`

| Argument | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| content | content of the message | string|ReactNode | - |
| duration | time(seconds) before auto-dismiss, don't dismiss if set to 0 | number | 1.5 |
| onClose | Specify a function that will be called when the message is closed | Function | - |

Methods for global configuration and destruction are also provided:

- \`\`\`message.config(options)\`\`\`
- \`\`\`message.destroy()\`\`\`

### message.config

\`\`\`js message.config({ top: 100, duration: 2, });\`\`\`

| Argument | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| duration | time before auto-dismiss, in seconds | number | 1.5 |
| getContainer | Return the mount node for Message | () =&gt; HTMLElement | () =&gt; document.body |
| top | distance from top | number | 24px |
`
const expComponent = () => (
        <div>
            <h4>Message</h4>

            <Card bordered={false}>
                        <CustomizeDurationDemo />
        <NormalPromptDemo />
        <MessageOfLoadingDemo />
        <OtherTypesOfMessageDemo />

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        