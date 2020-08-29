import * as React from "react";

interface SubmitButtonProps {
  title: string;
  style: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ title, style }) => (
  <button className={style} type="submit">
    {title}
  </button>
);

export default SubmitButton;
