import { tag, render, h, WeElement } from 'omi'

import "../message"
import "../../space"
@tag("message-close")
export default class MessageClose extends WeElement{
    render(){
        return (
            <t-space direction="vertical">
                <t-message duration={0} theme="info" closeBtn={true} content='默认关闭按钮'>
                    默认关闭按钮
                </t-message>
                <t-message duration={0} theme="info" content=" 自定义关闭按钮（文字）" closeBtn={'关闭'}>
                    自定义关闭按钮（文字）
                </t-message>
                <t-message duration={0} theme="info" content="自定义关闭按钮（函数）" closeBtn={"x"}>
                    自定义关闭按钮（函数）
                </t-message>
                <t-message duration={0} theme="info" content="自定义关闭按钮（TNode）" closeBtn={<div onClick={() => console.log('close')}>x</div>}>
                    自定义关闭按钮（ReactNode）
                </t-message>
            </t-space>
        )
    }
}
render(<message-close></message-close>, 'body')