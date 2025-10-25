"use client";

import React, { useState, useEffect, ReactNode, FC } from "react";

interface FolderProps {
  color?: string;
  size?: number;
  items?: React.ReactNode[];
  className?: string;
  onOpenChange?: (open: boolean) => void;
}

const darkenColor = (hex: string, percent: number): string => {
  let color = hex.startsWith("#") ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color.split("").map((c) => c + c).join("");
  }
  if (color.length !== 6) return hex;

  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;

  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));

  const rr = r.toString(16).padStart(2, '0');
  const gg = g.toString(16).padStart(2, '0');
  const bb = b.toString(16).padStart(2, '0');

  return `#${rr}${gg}${bb}`.toUpperCase();
};

export const Folder: FC<FolderProps> = ({
  color = "#00d8ff",
  size = 1,
  items = [],
  className = "",
  onOpenChange,
}) => {
  const maxItems = 12;
  const papers = Array(maxItems).fill(null).map((_, i) => items[i] || null);

  const [open, setOpen] = useState(false);
  const [paperOffsets, setPaperOffsets] = useState<{ x: number; y: number }[]>(
    Array.from({ length: maxItems }, () => ({ x: 0, y: 0 }))
  );

  const folderBackColor = darkenColor(color, 0.08);
  const paperColors = [
    darkenColor("#FFFFFF", 0.22),
    darkenColor("#FFFFFF", 0.19),
    darkenColor("#FFFFFF", 0.16),
    darkenColor("#FFFFFF", 0.13),
    darkenColor("#FFFFFF", 0.10),
    darkenColor("#FFFFFF", 0.07),
    darkenColor("#FFFFFF", 0.05),
    darkenColor("#FFFFFF", 0.04),
    darkenColor("#FFFFFF", 0.03),
    darkenColor("#FFFFFF", 0.02),
    darkenColor("#FFFFFF", 0.01),
    "#FFFFFF"
  ];

  const handleClick = () => {
    setOpen((prev) => {
      const newOpen = !prev;
      if (prev) {
        setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
      }
      onOpenChange?.(newOpen);
      return newOpen;
    });
  };

  const handlePaperMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    if (!open) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.1;
    const offsetY = (e.clientY - centerY) * 0.1;
    setPaperOffsets((prev) => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: offsetX, y: offsetY };
      return newOffsets;
    });
  };

  const handlePaperMouseLeave = (
    _e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setPaperOffsets((prev) => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: 0, y: 0 };
      return newOffsets;
    });
  };

  const folderBaseStyle: React.CSSProperties = {
    transform: `scale(${size})`,
    transformOrigin: 'center center',
    display: 'inline-block'
  };

  const folderInteractiveStyle: React.CSSProperties = {
    transform: open ? "translateY(-8px)" : undefined,
  };

  const getOpenTransform = (index: number) => {
    // Dispersos con buen espaciado entre cada uno
    const baseTransforms = [
        "translate(-200%, -200%) rotate(-18deg)",
        "translate(-350%, -180%) rotate(12deg)",
        "translate(-500%, -160%) rotate(-8deg)",
        "translate(-200%, -40%) rotate(22deg)",
        "translate(-350%, -20%) rotate(-14deg)",
        "translate(-500%, 0%) rotate(16deg)",
        "translate(-200%, 120%) rotate(-24deg)",
        "translate(-350%, 140%) rotate(10deg)",
        "translate(-500%, 160%) rotate(-12deg)",
        "translate(-650%, -180%) rotate(20deg)",
        "translate(-650%, -20%) rotate(-16deg)",
        "translate(-650%, 140%) rotate(14deg)"
    ];
    const mouseTransform = `translate(${paperOffsets[index].x}px, ${paperOffsets[index].y}px)`;
    return `${baseTransforms[index] || ""} ${mouseTransform}`;
  };

  return (
    <div style={folderBaseStyle} className={className}>
      <div className="flex flex-col items-center gap-3">
        <div
          className={`group relative transition-all duration-300 ease-in-out cursor-pointer
                      ${!open ? "hover:-translate-y-1" : ""}`}
          style={folderInteractiveStyle}
          onClick={handleClick}
        >
          <div
            className="relative w-[100px] h-[80px] rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px]"
            style={{ backgroundColor: folderBackColor }}
          >
          <span
            className="absolute z-0 bottom-[99%] left-0 w-[30px] h-[10px]
                       rounded-tl-[5px] rounded-tr-[5px]"
            style={{ backgroundColor: folderBackColor }}
          ></span>
          {papers.map((_itemContent, i) => {
            let sizeClasses = "";
            if (!open) {
              // Cerrado - tamaños apilados
              const closedSizes = [
                "w-[60%] h-[70%]",
                "w-[62.5%] h-[67.5%]",
                "w-[65%] h-[65%]",
                "w-[67.5%] h-[62.5%]",
                "w-[70%] h-[60%]",
                "w-[72.5%] h-[57.5%]",
                "w-[75%] h-[55%]",
                "w-[77.5%] h-[52.5%]",
                "w-[80%] h-[50%]",
                "w-[82.5%] h-[47.5%]",
                "w-[85%] h-[45%]",
                "w-[87.5%] h-[42.5%]"
              ];
              sizeClasses = closedSizes[i] || "w-[85%] h-[45%]";
            } else {
              // Abierto - 30% más grandes que el tamaño original
              const sizes = [
                "w-[156px] h-[182px]",
                "w-[169px] h-[195px]",
                "w-[162px] h-[188px]",
                "w-[176px] h-[202px]",
                "w-[166px] h-[192px]",
                "w-[172px] h-[198px]",
                "w-[159px] h-[185px]",
                "w-[165px] h-[191px]",
                "w-[173px] h-[199px]",
                "w-[164px] h-[190px]",
                "w-[170px] h-[196px]",
                "w-[168px] h-[194px]"
              ];
              sizeClasses = sizes[i] || "w-[169px] h-[195px]";
            }
            const paperBaseTransform = !open ? "translate(-50%, 10%)" : "";
            const paperHoverTransform = !open ? "group-hover:translate-y-0" : "hover:scale-105";
            const paperZIndex = open ? 50 + i : 10 + i;
            return (
              <div
                key={i}
                onMouseMove={(e) => handlePaperMouseMove(e, i)}
                onMouseLeave={(e) => handlePaperMouseLeave(e, i)}
                className={`absolute bottom-[10%] left-1/2
                            transition-all duration-300 ease-in-out transform
                            ${paperHoverTransform} ${sizeClasses} overflow-hidden`}
                style={{
                  backgroundColor: paperColors[i],
                  borderRadius: "6px",
                  boxShadow: "0px 1px 3px rgba(0,0,0,0.08)",
                  border: "0.5px solid rgba(0,0,0,0.1)",
                  transform: open ? getOpenTransform(i) : paperBaseTransform,
                  zIndex: paperZIndex,
                }}
              >
                {papers[i] && open && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '3px',
                      left: '3px',
                      right: '3px',
                      bottom: '3px',
                      overflow: 'hidden',
                      borderRadius: '4px',
                    }}
                  >
                    {papers[i]}
                  </div>
                )}
              </div>
            );
          })}
          <div
            className={`absolute z-[40] w-full h-full origin-bottom transition-all duration-300 ease-in-out`}
            style={{
              backgroundColor: color,
              borderRadius: "0px 10px 10px 10px",
              transform: open ? "translateY(20%) skewX(25deg) scaleY(0.5)" : "skewX(0deg) scaleY(1)",
            }}
          ></div>
          <div
            className={`absolute z-[41] w-full h-full origin-bottom transition-all duration-300 ease-in-out`}
            style={{
              backgroundColor: color,
              borderRadius: "0px 10px 10px 10px",
              transform: open ? "translateY(20%) skewX(-25deg) scaleY(0.5)" : "skewX(0deg) scaleY(1)",
            }}
          ></div>
          </div>
        </div>

        {/* Label */}
        <span className="font-poppins text-white font-extralight text-xs tracking-[0.15em] uppercase">
          Dirección Creativa
        </span>
      </div>
    </div>
  );
};
