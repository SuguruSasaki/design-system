import React from "react";
import extendable from "extendable-style";

interface BaseTitleProps {
  label: string;
  className?: string;
}

const BaseTitle: React.FC<BaseTitleProps> = ({ label, className }) => {
  return <h1 className={className}>{label}</h1>;
};

export default extendable(BaseTitle, () => ({
  color: "#FF0000",
  "font-size": "0.875rem",
  "font-weight": "200",
}));
