import { useState, useEffect } from "react";
import svgPaths from "./svg-xgjv9h4rc8";
import DeliveryDetailsContent from "./DeliveryDetails";

export default function DeliveryDetails() {
  const [timeLeft, setTimeLeft] = useState(119);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  const formattedTime = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

  return (
    <div className="bg-white content-stretch flex flex-col isolate items-start relative rounded-tl-[16px] rounded-tr-[16px] w-full" data-name="Delivery details">
      <div className="absolute top-0 left-0 w-full pointer-events-none z-[10]">
        <div className="content-stretch flex flex-col items-center pointer-events-auto py-[6px] rounded-tl-[16px] rounded-tr-[16px]" data-name=".Bottom Sheet / Drag Handle">
          <div className="bg-[rgba(73,93,122,0.08)] h-[6px] rounded-[100px] shrink-0 w-[40px]" data-name="Bar" />
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col items-start rounded-tl-[16px] rounded-tr-[16px] shrink-0 sticky top-0 w-full z-[7]" data-name="Status">
        <div className="relative shrink-0 w-full" data-name="Ⓖ Section Header">
          <div className="content-stretch flex flex-col items-start px-[24px] relative size-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Top padding">
              <div className="h-[24px] shrink-0 w-full" data-name=".Spacing" />
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start px-[24px] relative size-full">
            <div className="content-stretch flex items-start relative shrink-0 w-full">
              <p className="flex-[1_0_0] font-['Inter_Variable:SemiBold',sans-serif] font-[650] leading-[30px] min-w-px relative text-[#2a313c] text-[24px] tracking-[-0.48px]" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
                {formattedTime} Waiting
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col h-[8px] items-start shrink-0 sticky top-0 w-full" data-name="Vertical spacing">
          <div className="h-[8px] shrink-0 w-full" data-name=".Spacing" />
        </div>
      </div>
      <DeliveryDetailsContent />
    </div>
  );
}