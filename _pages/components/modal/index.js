import React from 'react'

    import AsynchronouslyCloseDemo from './AsynchronouslyCloseDemo.js'
import BasicDemo from './BasicDemo.js'
import ConfirmationModalDialogDemo from './ConfirmationModalDialogDemo.js'
import ConfirmationModalDialogDemo from './ConfirmationModalDialogDemo.js'
import CustomizedFooterDemo from './CustomizedFooterDemo.js'
import InformationModalDialogDemo from './InformationModalDialogDemo.js'
import InternationalizationDemo from './InternationalizationDemo.js'
import ManualToDestroyDemo from './ManualToDestroyDemo.js'
import ToCustomizeThePositionOfModalDemo from './ToCustomizeThePositionOfModalDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    require('./styles.scss')
const markDownInput = `---

Modal dialogs.

## When To Use

When requiring users to interact with the application, but without jumping to a new page and interrupting
the user's workflow, you can use \`\`\`Modal\`\`\` to create a new floating layer over the current page to get user
feedback or display information.
Additionally, if you need show a simple confirmation dialog, you can use \`\`\`antd.Modal.confirm()\`\`\`,
and so on.

## API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| afterClose | Specify a function that will be called when modal is closed completely. | function | - |
| bodyStyle | Body style for modal body element. Such as height, padding etc. | object | {} |
| cancelText | Text of the Cancel button | string | \`\`\`Cancel\`\`\` |
| closable | Whether a close (x) button is visible on top right of the modal dialog or not | boolean | true |
| confirmLoading | Whether to apply loading visual effect for OK button or not | boolean | false |
| destroyOnClose | Whether to unmount child compenents on onClose | boolean | false |
| footer | Footer content, set as \`\`\`footer={null}\`\`\` when you don't need default buttons | string|ReactNode | OK and Cancel buttons |
| getContainer | Return the mount node for Modal | (instance): HTMLElement | () =&gt; document.body |
| mask | Whether show mask or not. | Boolean | true |
| maskClosable | Whether to close the modal dialog when the mask (area outside the modal) is clicked | boolean | true |
| maskStyle | Style for modal's mask element. | object | {} |
| okText | Text of the OK button | string | \`\`\`OK\`\`\` |
| okType | Button \`\`\`type\`\`\` of the OK button | string | \`\`\`primary\`\`\` |
| style | Style of floating layer, typically used at least for adjusting the position. | object | - |
| title | The modal dialog's title | string|ReactNode | - |
| visible | Whether the modal dialog is visible or not | boolean | false |
| width | Width of the modal dialog | string|number | 520 |
| wrapClassName | The class name of the container of the modal dialog | string | - |
| zIndex | The \`\`\`z-index\`\`\` of the Modal | Number | 1000 |
| onCancel | Specify a function that will be called when a user clicks mask, close button on top right or Cancel button | function(e) | - |
| onOk | Specify a function that will be called when a user clicks the OK button | function(e) | - |

#### Note

&gt; The state of Modal will be preserved at it's component lifecycle by default, if you wish to open it with a brand new state everytime, set \`\`\`destroyOnClose\`\`\` on it.

### Modal.method()

There are five ways to display the information based on the content's nature:

- \`\`\`Modal.info\`\`\`
- \`\`\`Modal.success\`\`\`
- \`\`\`Modal.error\`\`\`
- \`\`\`Modal.warning\`\`\`
- \`\`\`Modal.confirm\`\`\`

The items listed above are all functions, expecting a settings object as parameter.
The properties of the object are follows:

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| cancelText | Text of the Cancel button | string | \`\`\`Cancel\`\`\` |
| className | className of container | string | - |
| content | Content | string|ReactNode | - |
| iconType | Icon \`\`\`type\`\`\` of the Icon component | string | \`\`\`question-circle\`\`\` |
| maskClosable | Whether to close the modal dialog when the mask (area outside the modal) is clicked | Boolean | \`\`\`false\`\`\` |
| okText | Text of the OK button | string | \`\`\`OK\`\`\` |
| okType | Button \`\`\`type\`\`\` of the OK button | string | \`\`\`primary\`\`\` |
| title | Title | string|ReactNode | - |
| width | Width of the modal dialog | string|number | 416 |
| zIndex | The \`\`\`z-index\`\`\` of the Modal | Number | 1000 |
| keyboard | Whether support press esc to close | Boolean | true |
| onCancel | Specify a function that will be called when the user clicks the Cancel button. The parameter of this function is a function whose execution should include closing the dialog. You can also just return a promise and when the promise is resolved, the modal dialog will also be closed | function | - |
| onOk | Specify a function that will be called when the user clicks the OK button. The parameter of this function is a function whose execution should include closing the dialog. You can also just return a promise and when the promise is resolved, the modal dialog will also be closed | function | - |

All the \`\`\`Modal.method\`\`\`s will return a reference, and then we can close the modal dialog by the reference.

\`\`\`jsx const ref = Modal.info(); ref.destroy();\`\`\`

&lt;style&gt;
.code-box-demo .ant-btn {
margin-right: 8px;
}
&lt;/style&gt;
`
const expComponent = () => (
        <div>
            <h4>Modal</h4>
            <p>

Modal dialogs.

</p>

            <Card bordered={false}>
                <Row gutter={16}>
        <Col span={12}>
        <Card title="Asynchronously Close" bordered={true}><AsynchronouslyCloseDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Basic" bordered={true}><BasicDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Confirmation Modal Dialog" bordered={true}><ConfirmationModalDialogDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Confirmation Modal Dialog" bordered={true}><ConfirmationModalDialogDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Customized Footer" bordered={true}><CustomizedFooterDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Information Modal Dialog" bordered={true}><InformationModalDialogDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Internationalization" bordered={true}><InternationalizationDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Manual To Destroy" bordered={true}><ManualToDestroyDemo /></Card>
        </Col>
</Row>
<Row gutter={30}>
        <Col span={12}>
        <Card title="To Customize The Position Of Modal" bordered={true}><ToCustomizeThePositionOfModalDemo /></Card>
        </Col>
</Row>

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        