import { motion } from "motion/react";
import svgPaths from "./svg-xhm6oyo19e";
import StatusBarIOs from "./StatusBarIOs-5-1464";
import imgScreenshot20251218At1610051 from "figma:asset/392c6152d984c893b80513632d946d4b154d85d2.png";
import imgCardboardBox from "figma:asset/759932a51064a500584acb8ecf6e34a84745d9d9.png";

function FabStandardExtendedInactive() {
  return (
    <div
      className="flex items-center gap-[8px] rounded-full bg-[#2a313c] mr-[12px] h-[48px] pl-[14px] pr-[20px]"
      data-name="FAB/Standard/Extended/Inactive"
    >
      <svg width="16" height="16" viewBox="0 0 14 14" fill="none" className="shrink-0">
        <path d={svgPaths.p142f0e00} fill="#FAFAFB" />
      </svg>
      <span
        className="font-['Euclid_Circular_B:Regular',sans-serif] text-[#fafafb] text-[16px] leading-[24px]"
        style={{ fontFeatureSettings: "'lnum', 'tnum'" }}
      >
        Decline
      </span>
    </div>
  );
}

function Category() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Category">
      <div className="bg-[#5966f3] content-stretch flex gap-[4px] items-center overflow-clip pl-[4px] pr-[8px] py-[3px] relative rounded-[4px] shrink-0" data-name="Label">
        <div className="relative shrink-0 size-[16px]" data-name="package">
          <div className="absolute inset-[4.83%_10.42%_5.95%_10.42%]" data-name="shape">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6667 14.2745">
              <g id="shape">
                <path d={svgPaths.p2e30ce00} fill="var(--fill-0, #ECEEED)" />
                <path d={svgPaths.pe5c0800} fill="var(--fill-0, #ECEEED)" />
                <path d={svgPaths.p334987f0} fill="var(--fill-0, #ECEEED)" />
                <path d={svgPaths.p1cec76c0} fill="var(--fill-0, #ECEEED)" />
              </g>
            </svg>
          </div>
        </div>
        <p className="font-['Inter_Variable:SemiBold',sans-serif] font-[650] leading-[20px] relative shrink-0 text-[#eceeed] text-[16px] tracking-[-0.176px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
          Send
        </p>
      </div>
    </div>
  );
}

function PaymentMethod() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Payment Method">
      <div className="bg-[#E0FFF0] content-stretch flex gap-[4px] items-center overflow-clip pl-[4px] pr-[8px] py-[3px] relative rounded-[4px] shrink-0" data-name="Label">
        <div className="relative shrink-0 size-[16px]" data-name="cash_driver">
          <div className="absolute inset-[4.17%]" data-name="shape">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
              <g id="shape">
                <path d={svgPaths.p31b1ab00} fill="var(--fill-0, #1D965C)" />
                <path clipRule="evenodd" d={svgPaths.p1cc75600} fill="var(--fill-0, #1D965C)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
        <p className="font-['Inter_Variable:SemiBold',sans-serif] font-[650] leading-[20px] relative shrink-0 text-[#1D965C] text-[16px] tracking-[-0.176px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
          Cash
        </p>
      </div>
    </div>
  );
}

function Price({ priceText = "18.92 €" }: { priceText?: string }) {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="price">
      <div className="flex flex-col font-['Inter_Variable:SemiBold',sans-serif] font-[650] justify-center leading-[0] relative shrink-0 text-[#2a313c] text-[24px] tracking-[-0.48px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
        <p className="leading-[30px]">{priceText}</p>
      </div>
    </div>
  );
}

function MainInfo({ priceText }: { priceText?: string }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="main info">
      <Price priceText={priceText} />
    </div>
  );
}

function MainTripInfo({ priceText }: { priceText?: string }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="main trip info">
      <MainInfo priceText={priceText} />
      <motion.div
        className="absolute bg-[#32bb78] bottom-[-12px] h-[4px] left-[-18px] right-[-16px] rounded-br-[10px] rounded-tr-[10px]"
        animate={{ scaleX: [0, 1] }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "loop" }}
        style={{ transformOrigin: 'left center' }}
      />
      <div className="absolute bg-[rgba(73,93,122,0.08)] bottom-[-12px] h-[4px] left-[-16px] right-[-16px]" />
    </div>
  );
}

function Frame1({ priceText }: { priceText?: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Acceptance labels">
        <Category />
        <PaymentMethod />
      </div>
      <MainTripInfo priceText={priceText} />
    </div>
  );
}

function Frame10({ senderName = "Chandra Krishnamurthy" }: { senderName?: string }) {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[16px]" data-name="verified_original">
        <div className="absolute inset-[4.43%_5.18%_7.42%_5.19%]" data-name="shape">
          <div className="absolute inset-[-14.18%_-13.96%_-14.22%_-13.94%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3431 18.1094">
              <path d={svgPaths.p292c1380} fill="var(--fill-0, #007042)" fillOpacity="0.92" id="shape" stroke="var(--stroke-0, white)" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[35.42%_29.17%]" data-name="checkmark">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 4.66666">
            <path d={svgPaths.p1da59980} fill="var(--fill-0, white)" id="checkmark" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter_Variable:SemiBold',sans-serif] font-[650] leading-[20px] relative shrink-0 text-[#2a313c] text-[14px] tracking-[-0.084px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
        {senderName}
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[2px] items-center overflow-clip relative shrink-0">
      <div className="flex flex-col font-['Inter_Variable:SemiBold',sans-serif] font-[650] justify-end leading-[0] relative shrink-0 text-[#2a313c] text-[14px] tracking-[-0.084px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
        <p className="leading-[20px]">5.0</p>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="star">
        <div className="absolute inset-[0_2.08%_8.33%_2.08%]" data-name="shape">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11">
            <path clipRule="evenodd" d={svgPaths.p28955780} fill="var(--fill-0, #2A313C)" fillRule="evenodd" id="shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame9({ senderName }: { senderName?: string }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame10 senderName={senderName} />
      <Frame />
    </div>
  );
}

function Frame20() {
  return (
    <div className="h-full relative shrink-0 w-[12px]">
      <div className="-translate-x-1/2 absolute bottom-[-16px] left-1/2 top-[6px] w-0" data-name="Vector">
        <div className="absolute inset-[-1.32%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 54">
            <path d="M1 1V53" id="Vector" stroke="var(--stroke-0, #CCD2DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute left-0 size-[12px] top-0" data-name="Markers">
        <div className="absolute left-[3px] size-[6px] top-[3px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <circle cx="3" cy="3" fill="var(--fill-0, white)" id="Ellipse" r="3" />
          </svg>
        </div>
        <div className="-translate-x-1/2 absolute left-1/2 size-[12px] top-0" data-name="Subtract">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path clipRule="evenodd" d={svgPaths.p2b6b7b00} fill="var(--fill-0, #32BB78)" fillRule="evenodd" id="Subtract" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative self-stretch shrink-0">
      <div className="content-stretch flex items-start pt-[6px] relative size-full">
        <Frame20 />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap items-start min-w-px relative">
      <div className="flex flex-col font-['Inter_Variable:SemiBold',sans-serif] font-[650] justify-end leading-[0] relative shrink-0 text-[#2a313c] text-[0px] tracking-[-0.252px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
        <p className="text-[18px]">
          <span className="leading-[24px]">1</span>
          <span className="leading-[24px]">{` min`}</span>
          <span className="leading-[24px] text-[#808c9f]">{` • `}</span>
          <span className="leading-[24px]">255</span>
          <span className="leading-[24px]">{` m`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-start flex flex-wrap gap-y-[5px] items-start relative shrink-0 w-full">
      <Frame6 />
    </div>
  );
}

function Frame8({ pickupAddress = "Karl-Liebknecht-Str. 29, 10178 Berlin" }: { pickupAddress?: string }) {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap items-start min-w-px relative">
      <div className="flex flex-[1_0_0] flex-col font-['Inter_Variable:Regular',sans-serif] font-[450] justify-end leading-[0] min-w-px relative text-[#2a313c] text-[16px] tracking-[-0.176px]" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
        <p className="leading-[24px]">{pickupAddress}</p>
      </div>
    </div>
  );
}

function Frame7({ pickupAddress }: { pickupAddress?: string }) {
  return (
    <div className="content-start flex flex-wrap gap-y-[5px] items-start relative shrink-0 w-full">
      <Frame8 pickupAddress={pickupAddress} />
    </div>
  );
}

function Frame14({ pickupAddress }: { pickupAddress?: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
      <Frame2 />
      <Frame7 pickupAddress={pickupAddress} />
    </div>
  );
}

function Frame18({ pickupAddress }: { pickupAddress?: string }) {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame17 />
      <Frame14 pickupAddress={pickupAddress} />
    </div>
  );
}

function Frame22() {
  return (
    <div className="h-full relative shrink-0 w-[12px]">
      <div className="absolute left-0 size-[12px] top-0" data-name="Markers">
        <div className="absolute left-[3px] size-[6px] top-[3px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <circle cx="3" cy="3" fill="var(--fill-0, white)" id="Ellipse" r="3" />
          </svg>
        </div>
        <div className="-translate-x-1/2 absolute left-1/2 size-[12px] top-0" data-name="Subtract">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path clipRule="evenodd" d={svgPaths.p2b6b7b00} fill="var(--fill-0, #EB4755)" fillRule="evenodd" id="Subtract" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative self-stretch shrink-0">
      <div className="content-stretch flex items-start pt-[6px] relative size-full">
        <Frame22 />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap items-start min-w-px relative">
      <div className="flex flex-col font-['Inter_Variable:SemiBold',sans-serif] font-[650] justify-end leading-[0] relative shrink-0 text-[#2a313c] text-[0px] tracking-[-0.252px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
        <p className="text-[18px]">
          <span className="leading-[24px]">10</span>
          <span className="leading-[24px]">{` min`}</span>
          <span className="leading-[24px] text-[#808c9f]">{` • `}</span>
          <span className="leading-[24px]">1.4 km</span>
        </p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-start flex flex-wrap gap-y-[5px] items-start relative shrink-0 w-full">
      <Frame11 />
    </div>
  );
}

function Frame13({ dropoffAddress = "Oranienburger Straße 12A, 13642 Berlin" }: { dropoffAddress?: string }) {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap items-start min-w-px relative">
      <div className="flex flex-[1_0_0] flex-col font-['Inter_Variable:Regular',sans-serif] font-[450] justify-end leading-[0] min-w-px relative text-[#2a313c] text-[16px] tracking-[-0.176px]" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
        <p className="leading-[24px]">{dropoffAddress}</p>
      </div>
    </div>
  );
}

function Frame12({ dropoffAddress }: { dropoffAddress?: string }) {
  return (
    <div className="content-start flex flex-wrap gap-y-[5px] items-start relative shrink-0 w-full">
      <Frame13 dropoffAddress={dropoffAddress} />
    </div>
  );
}

function Frame15({ dropoffAddress }: { dropoffAddress?: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
      <Frame4 />
      <Frame12 dropoffAddress={dropoffAddress} />
    </div>
  );
}

function Frame21({ dropoffAddress }: { dropoffAddress?: string }) {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame19 />
      <Frame15 dropoffAddress={dropoffAddress} />
    </div>
  );
}

function Frame3({ pickupAddress, dropoffAddress }: { pickupAddress?: string; dropoffAddress?: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
      <Frame18 pickupAddress={pickupAddress} />
      <Frame21 dropoffAddress={dropoffAddress} />
    </div>
  );
}

function Frame5({ pickupAddress, dropoffAddress }: { pickupAddress?: string; dropoffAddress?: string }) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame3 pickupAddress={pickupAddress} dropoffAddress={dropoffAddress} />
    </div>
  );
}

function Frame16({ senderName, pickupAddress, dropoffAddress }: { senderName?: string; pickupAddress?: string; dropoffAddress?: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="bg-[rgba(73,93,122,0.08)] content-stretch flex h-[28px] items-center overflow-clip px-[8px] py-[3px] relative rounded-[24px] shrink-0" data-name="Acceptance User Info">
        <Frame9 senderName={senderName} />
      </div>
      <Frame5 pickupAddress={pickupAddress} dropoffAddress={dropoffAddress} />
    </div>
  );
}

function Top({ priceText, senderName, pickupAddress, dropoffAddress }: { priceText?: string; senderName?: string; pickupAddress?: string; dropoffAddress?: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start px-[16px] relative self-stretch shrink-0 w-full" data-name="Top">
      <Frame1 priceText={priceText} />
      <Frame16 senderName={senderName} pickupAddress={pickupAddress} dropoffAddress={dropoffAddress} />
    </div>
  );
}

function TimeStyle() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Time Style">
      <div className="flex flex-col font-['SF_Pro_Text:Semibold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#191f1c] text-[17px] text-center tracking-[-0.34px] whitespace-nowrap">
        <p className="leading-[22px]">9:41</p>
      </div>
    </div>
  );
}

function Icons() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[67.1px]" data-name="Icons">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67.1005 13.3333">
        <g id="Icons">
          <path d={svgPaths.p3961ee80} fill="var(--fill-0, #191F1C)" id="Mobile Signal" />
          <path d={svgPaths.p2f93e340} fill="var(--fill-0, #191F1C)" id="Wifi" />
          <g id="Battery">
            <path d={svgPaths.p11cc2e80} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, #191F1C)" />
            <path d={svgPaths.p18d48500} fill="var(--fill-0, #191F1C)" id="Combined Shape" opacity="0.4" />
            <path d={svgPaths.p17c5df00} fill="var(--fill-0, #191F1C)" id="Rectangle_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Bubble() {
  return (
    <div className="bg-white content-stretch flex items-center overflow-clip relative rounded-[8px] shrink-0 z-[2]" data-name="Bubble">
      <div className="content-stretch flex flex-col h-[48px] items-start justify-center overflow-clip pb-[5px] pt-[4px] px-[8px] shrink-0 w-[50px]" data-name="PinBubbleLabels" />
    </div>
  );
}

function Pillar() {
  return (
    <div className="h-[20px] relative shrink-0 w-full z-[1]" data-name="Pillar">
      <div className="-translate-x-1/2 absolute left-1/2 size-[6px] top-[17px]" data-name="Target">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, white)" id="Ellipse" r="3" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute h-[21px] left-1/2 top-[-21px] w-[4px]" data-name="Pile">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 21">
          <path d={svgPaths.p275e9100} fill="var(--fill-0, #114F31)" id="Pile" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute h-[8.1px] left-1/2 top-[-0.1px] w-[20px]" data-name="Pointer">
        <div className="absolute inset-[0_0_15.99%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 6.80512">
            <path d={svgPaths.p2cb01b80} fill="var(--fill-0, white)" id="Pointer" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function AcceptanceScreen({ onAccept, priceText, senderName, pickupAddress, dropoffAddress }: { onAccept?: () => void; priceText?: string; senderName?: string; pickupAddress?: string; dropoffAddress?: string }) {
  return (
    <div className="bg-white relative size-full" data-name="Acceptance Screen 2.0">
      <div className="absolute h-[812px] inset-x-0 overflow-clip top-0" data-name="Map Area">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[831px] left-[calc(50%+68.75px)] top-[calc(50%-1.52px)] w-[1376px]" data-name="Screenshot 2025-12-18 at 16.10.05 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20251218At1610051} />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[375px] h-full pointer-events-none" data-name="Overlay Anchor">
        <div className="absolute flex h-[288.041px] items-center justify-center left-[34.61px] top-[95.47px] w-[314.151px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-[-87.83deg]">
            <div className="h-[303.88px] relative w-[276.721px]" data-name="Route background">
              <div className="absolute inset-[-1.97%_-2.15%_-1.28%_-2.17%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 288.677 313.773">
                  <path d={svgPaths.p16eb2e80} id="Route background" stroke="var(--stroke-0, #191F1C)" strokeLinecap="round" strokeWidth="12" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[288.041px] items-center justify-center left-[34.61px] top-[95.47px] w-[314.151px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-[-87.83deg]">
            <div className="h-[303.88px] relative w-[276.721px]" data-name="Route blue">
              <div className="absolute inset-[-1.32%_-1.43%_-0.62%_-1.45%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 284.677 309.772">
                  <path d={svgPaths.p242d5780} id="Route blue" stroke="var(--stroke-0, #5B68F6)" strokeLinecap="round" strokeWidth="8" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-[292.25px] size-[36px] top-[223px]" data-name="Markers pickup">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Ellipse">
            <div className="absolute inset-[-33.33%_-44.44%_-55.56%_-44.44%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
                <g filter="url(#filter0_d_1_17664)" id="Ellipse">
                  <circle cx="17" cy="15" fill="var(--fill-0, #32BB78)" r="9" />
                  <circle cx="17" cy="15" r="10.5" stroke="var(--stroke-0, white)" strokeWidth="3" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="34" id="filter0_d_1_17664" width="34" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="2.5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_17664" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_17664" mode="normal" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[6px] top-1/2" data-name="Ellipse">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
              <circle cx="3" cy="3" fill="var(--fill-0, white)" id="Ellipse" r="3" />
            </svg>
          </div>
        </div>
        <div className="absolute left-[24.25px] size-[36px] top-[141px]" data-name="Markers delivery">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Ellipse">
            <div className="absolute inset-[-33.33%_-44.44%_-55.56%_-44.44%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
                <g filter="url(#filter0_d_1_17660)" id="Ellipse">
                  <circle cx="17" cy="15" fill="var(--fill-0, #EB4755)" r="9" />
                  <circle cx="17" cy="15" r="10.5" stroke="var(--stroke-0, white)" strokeWidth="3" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="34" id="filter0_d_1_17660" width="34" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="2.5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_17660" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_17660" mode="normal" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[6px] top-1/2" data-name="Ellipse">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
              <circle cx="3" cy="3" fill="var(--fill-0, white)" id="Ellipse" r="3" />
            </svg>
          </div>
        </div>
        <div className="absolute flex items-center justify-center left-[141px] size-[103.43px] top-[317px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "76" } as React.CSSProperties}>
          <div className="flex-none rotate-[-158.91deg]">
            <div className="relative size-[80px]" data-name="Pin">
              <div className="-translate-x-1/2 absolute left-1/2 size-[56px] top-[18px]" data-name="Shadow">
                <div className="absolute inset-[-5.36%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 62">
                    <g filter="url(#filter0_f_10_3852)" id="Shadow" opacity="0.16">
                      <circle cx="31" cy="31" fill="var(--fill-0, #2A313C)" r="28" />
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="62" id="filter0_f_10_3852" width="62" x="0" y="0">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feGaussianBlur result="effect1_foregroundBlur_10_3852" stdDeviation="1.5" />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="absolute left-[13px] size-[54px] top-[19px]" data-name="Border">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
                  <circle cx="27" cy="27" fill="var(--fill-0, #191F1C)" id="Border" r="27" />
                </svg>
              </div>
              <div className="absolute left-[16px] size-[48px] top-[22px]" data-name="Background">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                  <circle cx="24" cy="24" fill="var(--fill-0, white)" id="Background" r="24" />
                </svg>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[23.66px] left-1/2 top-[calc(50%+4px)] w-[26.086px]" data-name="Arrow">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.0863 23.6598">
                  <path clipRule="evenodd" d={svgPaths.p2556ec80} fill="var(--fill-0, #191F1C)" fillRule="evenodd" id="Arrow" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="absolute bg-gradient-to-b from-[50.373%] from-[rgba(0,0,0,0)] inset-0 to-[rgba(0,0,0,0.2)]" />
      <div className="absolute content-stretch flex flex-col gap-[12px] items-end left-0 pt-[36px] right-0 top-[16px]" data-name="Acceptance Top">
        <FabStandardExtendedInactive />
      </div>
      <div className="absolute bg-white bottom-[84px] left-[12px] right-[12px] rounded-[16px]" data-name="Acceptance Trip Card">
        <div className="content-stretch flex items-start overflow-clip py-[16px] relative rounded-[inherit] w-full">
          <Top priceText={priceText} senderName={senderName} pickupAddress={pickupAddress} dropoffAddress={dropoffAddress} />
        </div>
        <div aria-hidden="true" className="absolute border-3 border-[#32bb78] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_6px_24px_0px_rgba(0,0,0,0.24)]" />
      </div>
      <div
        className="absolute bg-[#32bb78] bottom-[16px] content-stretch flex items-center justify-center left-[12px] px-[24px] py-[16px] right-[12px] rounded-[28px] cursor-pointer active:scale-[0.98] transition-all"
        data-name="Buttons"
        onClick={onAccept}
      >
        <div className="flex flex-col font-['Inter_Variable:SemiBold',sans-serif] font-[650] justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white tracking-[-0.252px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
          <p className="leading-[24px]">Accept</p>
        </div>
      </div>
      <div className="absolute left-0 top-0 w-full pointer-events-none">
        <StatusBarIOs />
      </div>
      <div className="absolute content-stretch flex flex-col isolate items-center justify-end left-[24px] top-[91px] w-[36px]" data-name="Pin">
        <Bubble />
        <Pillar />
      </div>
      <div className="absolute h-[42px] left-[13px] top-[93px] w-[57px]" data-name="Cardboard Box">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardboardBox} />
      </div>
    </div>
  );
}