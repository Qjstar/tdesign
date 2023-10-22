import { OmiProps, WeElement, h, tag, classNames } from 'omi'
import style from './style'

// import { MessageProps, MessageThemeList } from './type'
import {
    MessageProps,
    MessageCloseAllMethod,
    MessageErrorMethod,
    MessageInfoMethod,
    MessageInstance,
    MessageLoadingMethod,
    MessageMethod,
    MessageOptions,
    MessageQuestionMethod,
    MessageSuccessMethod,
    MessageWarningMethod,
    MessageThemeList,
    MessageConfigMethod,
    MessagePlacementList,
  } from './type';
import { TdClassNamePrefix } from '../utils'
import { AttachNodeReturnValue } from '../common';
import noop from '../utils/noop';
import { PlacementOffset } from './const';
// import MessageComponent from './messageComponent';

export interface MessagePlugin {
    (theme: MessageThemeList, message: string | MessageOptions, duration?: number): Promise<MessageInstance>;
    info: MessageInfoMethod;
    success: MessageSuccessMethod;
    warning: MessageWarningMethod;
    error: MessageErrorMethod;
    question: MessageQuestionMethod;
    loading: MessageLoadingMethod;
    closeAll: MessageCloseAllMethod;
    close: (message: Promise<MessageInstance>) => void;
    config: MessageConfigMethod;
  }



@tag('t-message')
export default class Message extends WeElement<MessageProps> {
  static css = style

  static defaultProps = {
    content: 'my message',
    icon: true,
    theme: 'info',
    duration: 3000,
  }

  static propTypes = {
    className: String,
    style: String,
    content: WeElement,
    duration: Number,
    icon: WeElement,
    theme: String,
    onClose: Function,
    onCloseBtnClick: Function,
    onDurationEnd: Function,
  }

  getMessageTheme(theme: MessageThemeList) {
    return TdClassNamePrefix(`is-${theme || 'success'}`)
  }

  onCloseBtnClick = () => {
    this.parentElement.removeChild(this)
  }

  onDurationEnd = (duration: number) => {
    if (duration !== 0) {
      setTimeout(() => this.parentElement.removeChild(this), duration)
    }else{
        return false;
    }
  }


  render(props: OmiProps<MessageProps, any>, store: any) {
    const { theme, icon, content, closeBtn, duration } = props
    const t = theme || 'success'
    return (
      <>
        <div
          style={style}
          class={classNames(
            TdClassNamePrefix('reset'),
            TdClassNamePrefix('message'),
            TdClassNamePrefix('is-closable'),
            this.getMessageTheme(theme),
            this.onDurationEnd(duration),
            classNames,
          )}
        >
          {/*图标  */}
          {icon && (
            <svg
              fill="none"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              class={classNames(TdClassNamePrefix('icon'), TdClassNamePrefix('icon-check-circle-filled'))}
            >
              <path
                fill="currentColor"
                d="M12 23a11 11 0 100-22 11 11 0 000 22zM11 8.5v-2h2v2h-2zm2 1.5v7.5h-2V10h2z"
              ></path>
            </svg>
          )}
          {/* 文字内容 */}
          {/* {children ?? content} */}

          {content && <div>{content}</div>}
          {/* 关闭按钮 */}
          {closeBtn && (
            <svg
              onClick={this.onCloseBtnClick}
              fill="none"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              class={classNames(
                TdClassNamePrefix('icon'),
                TdClassNamePrefix('icon-close'),
                TdClassNamePrefix('message__close'),
              )}
            >
              <path
                fill="currentColor"
                d="M7.05 5.64L12 10.59l4.95-4.95 1.41 1.41L13.41 12l4.95 4.95-1.41 1.41L12 13.41l-4.95 4.95-1.41-1.41L10.59 12 5.64 7.05l1.41-1.41z"
              ></path>
            </svg>
          )}
        </div>

      </>
    )
  }
}
