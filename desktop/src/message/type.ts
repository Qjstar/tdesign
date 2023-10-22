/* eslint-disable */


 import { TNode, AttachNode,Styles } from '@src/common';
 
 export interface MessageProps {
   /**
    * 关闭按钮，可以自定义。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string 则直接显示值，如：“关闭”。也可以完全自定义按钮
    */
   closeBtn?: TNode;
   /**
    * 用于自定义消息弹出内容
    */
   content?: TNode;
   /**
    * 消息内置计时器，计时到达时会触发 duration-end 事件。单位：毫秒。值为 0 则表示没有计时器。
    * @default false
    */
   duration?: number;
   /**
    * 用于自定义消息前面的图标，优先级大于 theme 设定的图标。值为 false 则不显示图标，值为 true 显示 theme 设定图标
    * @default 3000
    */
   icon?: TNode;
   /**
    * 消息组件风格
    * @default true
    */
   theme?: MessageThemeList;
   /**
    * 关闭消息时触发
    */
   onClose?: (context: { trigger: 'close-click' | 'duration-end'; e?: MouseEvent }) => void;
   /**
    * 当关闭按钮存在时，用户点击关闭按钮触发
    */
   onCloseBtnClick?: (context: { e: MouseEvent }) => void;
   /**
    * 计时结束后触发
    */
   onDurationEnd?: () => void;
 }
 
 export interface MessageOptions extends MessageProps {
   /**
    * 指定弹框挂载的父节点。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body
    * @default 'body'
    */
   attach?: AttachNode;
   /**
    * 类名
    * @default ''
    */
   className?: string;
   /**
    * 相对于 placement 的偏移量，示例：[-10, 20] 或 ['10em', '8rem']
    */
   offset?: Array<string | number>;
   /**
    * 弹出消息位置
    * @default top
    */
   placement?: MessagePlacementList;
   /**
    * 内敛样式
    */
   style?: Styles;
   /**
    * 消息层级
    * @default 5000
    */
   zIndex?: number;
 }
 
 export type MessageThemeList = 'info' | 'success' | 'warning' | 'error' | 'question' | 'loading';
 
 export type MessagePlacementList =
   | 'center'
   | 'top'
   | 'left'
   | 'right'
   | 'bottom'
   | 'top-left'
   | 'top-right'
   | 'bottom-left'
   | 'bottom-right';
 
 export interface MessageInstance {
   close: () => void;
 }
 
 export type MessageMethod = (
   theme: MessageThemeList,
   message: string | MessageOptions,
   duration?: number,
 ) => Promise<MessageInstance>;
 
 export type MessageInfoOptions = Omit<MessageOptions, 'theme'>;
 
 export type MessageInfoMethod = (message: string | MessageInfoOptions, duration?: number) => Promise<MessageInstance>;
 
 export type MessageErrorMethod = (message: string | MessageInfoOptions, duration?: number) => Promise<MessageInstance>;
 
 export type MessageWarningMethod = (
   message: string | MessageInfoOptions,
   duration?: number,
 ) => Promise<MessageInstance>;
 
 export type MessageSuccessMethod = (
   message: string | MessageInfoOptions,
   duration?: number,
 ) => Promise<MessageInstance>;
 
 export type MessageLoadingMethod = (
   message: string | MessageInfoOptions,
   duration?: number,
 ) => Promise<MessageInstance>;
 
 export type MessageQuestionMethod = (
   message: string | MessageInfoOptions,
   duration?: number,
 ) => Promise<MessageInstance>;
 
 export type MessageCloseAllMethod = () => void;
 
 export type MessageConfigMethod = (message: MessageOptions) => void;
 