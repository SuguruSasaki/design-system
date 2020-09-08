/**
 * BaseButtonコンポーネント
 *
 * @description
 * 全てのボタンコンポーネントはBaseButtonコンポーネントに依存します。
 * スタイル、機能を変更するときは、BaseButtonのスタイルを変更するのではなく、
 * 別コンポーネントに移譲してください。
 *
 * スタイルの変更方法
 * BorderButton コンポーネントを参考にしてください。
 *
 */
import React from "react";
import { styled } from "@material-ui/core/styles";
import * as MUI from "@material-ui/core";

type ButtonProps = {
  handler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactElement
  className?: string;
  disabled?: boolean
  variant?: 'text' | 'outlined' | 'contained';
};

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  handler,
  variant = "text",
  disabled = false
}) => (
  <MUI.Button className={className} onClick={handler} variant={variant} disabled={disabled}>
    {children}
  </MUI.Button>
);

// 注意
// ボタンコンポーネントの基本スタイルは変更しないでください。
export default styled(Button)({
  padding: "11px 12px",
  "box-sizing": "border-box",
  "font-family": "Noto Sans CJK JP",
  "font-size": "0.875rem",
  "font-weight": "bold",
  "line-height": "1",
});
