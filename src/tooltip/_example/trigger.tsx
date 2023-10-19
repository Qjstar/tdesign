import { h, tag, WeElement } from 'omi'

import '../index'
import '../../button'
import '../../input'
import '../../space'

@tag('tooltip-trigger')
export default class TooltipTrigger extends WeElement {
  installed() {}
  render() {
    return (
      <t-space>
        <t-tooltip content="文字提示仅展示文本内容">
          <t-button variant="outline">悬浮时触发（默认）</t-button>
        </t-tooltip>
        <t-tooltip content="文字提示仅展示文本内容" trigger="focus">
          <t-input placeholder="获得焦点时触发" />
        </t-tooltip>
        <t-tooltip content="文字提示仅展示文本内容" trigger="click">
          <t-button
            variant="outline"
            onClick={() => {
              console.log('onClick')
            }}
          >
            点击时触发
          </t-button>
        </t-tooltip>
        <t-tooltip content="文字提示仅展示文本内容" trigger="context-menu">
          <t-button variant="outline">右击时触发</t-button>
        </t-tooltip>
      </t-space>
    )
  }
}
