import React from 'react'

    import AutomaticTokenizationDemo from './AutomaticTokenizationDemo.js'
import BasicUsageDemo from './BasicUsageDemo.js'
import AutomaticCompletionDemo from './AutomaticCompletionDemo.js'
import CoordinateDemo from './CoordinateDemo.js'
import GetValueOfSelectedItemDemo from './GetValueOfSelectedItemDemo.js'
import MultipleSelectionDemo from './MultipleSelectionDemo.js'
import OptionGroupDemo from './OptionGroupDemo.js'
import SelectWithSearchFieldDemo from './SelectWithSearchFieldDemo.js'
import SearchBoxDemo from './SearchBoxDemo.js'
import SizesDemo from './SizesDemo.js'
import SearchAndSelectUsersDemo from './SearchAndSelectUsersDemo.js'
import TagsDemo from './TagsDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

Select component to select value from options.

## When To Use

- A dropdown menu for displaying choices - an elegant alternative to the native \`\`\`&lt;select&gt;\`\`\` element.
- Utilizing <a href="/components/radio/">Radio</a> is recommended when there are fewer total options (less than 5).

## API

\`\`\`html &lt;Select&gt; &lt;Option value=&quot;lucy&quot;&gt;lucy&lt;/Option&gt; &lt;/Select&gt;\`\`\`

### Select props

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| allowClear | Show clear button. | boolean | false |
| autoFocus | Get focus by default | boolean | false |
| defaultActiveFirstOption | Whether active first option by default | boolean | true |
| defaultValue | Initial selected option. | string|number|string[]|number[] | - |
| disabled | Whether disabled select | boolean | false |
| dropdownClassName | className of dropdown menu | string | - |
| dropdownMatchSelectWidth | Whether dropdown's with is same with select. | boolean | true |
| dropdownStyle | style of dropdown menu | object | - |
| filterOption | If true, filter options by input, if function, filter options against it. The function will receive two arguments, \`\`\`inputValue\`\`\` and \`\`\`option\`\`\`, if the function returns \`\`\`true\`\`\`, the option will be included in the filtered set; Otherwise, it will be excluded. | boolean or function(inputValue, option) | true |
| firstActiveValue | Value of action option by default | string|string[] | - |
| getPopupContainer | Parent Node which the selector should be rendered to. Default to \`\`\`body\`\`\`. When position issues happen, try to modify it into scrollable content and position it relative. <a href="https://codesandbox.io/s/4j168r7jw0">Example</a> | function(triggerNode) | () =&gt; document.body |
| labelInValue | whether to embed label in value, turn the format of value from \`\`\`string\`\`\` to \`\`\`{key: string, label: ReactNode}\`\`\` | boolean | false |
| maxTagCount | Max tag count to show | number | - |
| maxTagPlaceholder | Placeholder for not showing tags | ReactNode/function(omittedValues) | - |
| mode | Set mode of Select (Support after 2.9) | 'default' | 'multiple' | 'tags' | 'combobox' | 'default' |
| notFoundContent | Specify content to show when no result matches.. | string | 'Not Found' |
| optionFilterProp | Which prop value of option will be used for filter if filterOption is true | string | value |
| optionLabelProp | Which prop value of option will render as content of select. | string | \`\`\`value\`\`\` for \`\`\`combobox\`\`\`, \`\`\`children\`\`\` for other modes |
| placeholder | Placeholder of select | string|ReactNode | - |
| showSearch | Whether show search input in single mode. | boolean | false |
| showArrow | Whether to show the drop-down arrow | boolean |  true |
| size | Size of Select input. \`\`\`default\`\`\` \`\`\`large\`\`\` \`\`\`small\`\`\` | string | default |
| tokenSeparators | Separator used to tokenize on tag/multiple mode | string[] |  |
| value | Current selected option. | string|number|string[]|number[] | - |
| onBlur | Called when blur | function | - |
| onChange | Called when select an option or input value change, or value of input is changed in combobox mode | function(value, option:Option/Array&lt;Option&gt;) | - |
| onDeselect | Called when a option is deselected, the params are option's value (or key) . only called for multiple or tags, effective in multiple or tags mode only. | function(value, option:Option) | - |
| onFocus | Called when focus | function | - |
| onInputKeyDown | Called when key pressed | function | - |
| onMouseEnter | Called when mouse enter | function | - |
| onMouseLeave | Called when mouse leave | function | - |
| onPopupScroll | Called when dropdown scrolls | function | - |
| onSearch | Callback function that is fired when input changed. | function(value: string) |  |
| onSelect | Called when a option is selected, the params are option's value (or key) and option instance. | function(value, option:Option) | - |

### Select Methods

| Name | Description |
| ---- | ----------- |
| blur() | Remove focus |
| focus() | Get focus |

### Option props

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| disabled | Disable this option | boolean | false |
| key | Same usage as \`\`\`value\`\`\`. If React request you to set this property, you can set it to value of option, and then omit value property. | string |  |
| title | \`\`\`title\`\`\` of Select after select this Option | string | - |
| value | default to filter with this property | string|number | - |

### OptGroup props

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| key |  | string | - |
| label | Group label | string|React.Element | - |
`
const expComponent = () => (
        <div>
            <h4>Select</h4>
            <p>

Select component to select value from options.

</p>

            <Card bordered={false}>
                <Row gutter={16}>
        <Col span={12}>
        <Card title="Automatic Tokenization" bordered={true}><AutomaticTokenizationDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Basic Usage" bordered={true}><BasicUsageDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Automatic Completion" bordered={true}><AutomaticCompletionDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Coordinate" bordered={true}><CoordinateDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Get Value Of Selected Item" bordered={true}><GetValueOfSelectedItemDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Multiple Selection" bordered={true}><MultipleSelectionDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Option Group" bordered={true}><OptionGroupDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Select With Search Field" bordered={true}><SelectWithSearchFieldDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Search Box" bordered={true}><SearchBoxDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Sizes" bordered={true}><SizesDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Search And Select Users" bordered={true}><SearchAndSelectUsersDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Tags" bordered={true}><TagsDemo /></Card>
        </Col>
</Row>

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        