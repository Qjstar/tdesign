import { tag, render, h, WeElement, OmiProps } from 'omi'

import "../message"
import "../../space"

@tag("message-base")
export default class MessageBase extends WeElement{
  render(){
    return(
      <t-space direction="vertical">
        <t-message duration={0} theme="info" content="用户表示普通操作信息提示" >
          用户表示普通操作信息提示
        </t-message>
        <t-message duration={0} theme="success" content="用户表示操作引起一定后果">
          用户表示操作引起一定后果
        </t-message>
        <t-message duration={0} theme="warning" content="用户表示操作引起一定后果">
          用于表示操作顺利达成
        </t-message>
        <t-message duration={0} theme="error" content="用于表示操作引起严重的后果">
          用于表示操作引起严重的后果
        </t-message>
        <t-message duration={0} theme="question" content="用于帮助用户操作的信息提示">
          用于帮助用户操作的信息提示
        </t-message>
      </t-space>
    )
  };
}