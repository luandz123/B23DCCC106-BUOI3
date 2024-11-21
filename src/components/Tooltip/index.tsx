import React, { useState, ReactNode } from "react";
import "./index.css";

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  position?: "top" | "right" | "bottom" | "left";
}

const Tooltip: React.FC<TooltipProps> = ({ children, content, position = "top" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {isVisible && content && (
        <div className={`tooltip-box ${position}`}>{content}</div>
      )}
    </div>
  );
};

export default Tooltip;