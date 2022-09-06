import React, { ReactNode, useContext } from 'react';
import cs from 'classnames';
import { ConfigContext } from '../ConfigProvider';
import './index.less';

interface ButtonProps {
  type?: 'highlight' | 'default';
  text?: string;
  children?: ReactNode;
  disabled?: boolean;
  style?: object;
  className?: string;
  icon?: ReactNode;
  orderType?: number;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default (props: ButtonProps) => {
  const {
    type = 'default',
    text,
    children,
    disabled,
    style,
    className,
    icon,
    onClick,
    orderType,
  } = props;
  // const prefix = 'heima-ui'
  const { prefix } = useContext(ConfigContext);

  const btnPrefix = prefix + '-btn';

  const classes = cs(
    btnPrefix,
    {
      [`${btnPrefix}-${type}`]: type,
      [`${btnPrefix}-disabled`]: disabled,
    },
    className,
  );

  //添加 订单文案  getTextByType 函数
  const getTextByType = (orderType: number) => {
    if (orderType == 1) {
      return '已完成';
    }
    if (orderType == 2) {
      return '已超时';
    }
    return '未完成';
  };

  return (
    <div
      className={classes}
      style={style}
      onClick={(e) => {
        if (disabled) {
          return;
        }
        onClick && onClick(e);
      }}
    >
      {icon}
      {getTextByType(orderType)}
      {children}
    </div>
  );
};
