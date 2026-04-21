import svgPaths from "./svg-lldci6fbus";
import imgScreenshot20251218At1355141 from "figma:asset/20177326a978c401b42714427931b246f7839f1e.png";

function Bubble() {
  return (
    <div className="bg-[#32bb78] content-stretch flex items-center overflow-clip relative rounded-[8px] shrink-0 z-[2]" data-name="Bubble">
      <div className="content-stretch flex flex-col gap-px items-start justify-center overflow-clip pb-[8px] pt-[7px] px-[8px] relative shrink-0" data-name="PinBubbleLabels">
        <p className="font-['Inter_Variable:SemiBold',sans-serif] font-[650] leading-[15px] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontFeatureSettings: "'cv03', 'cv04'" }}>
          Pickup
        </p>
      </div>
    </div>
  );
}

function Pillar() {
  return (
    <div className="h-[20px] relative shrink-0 w-full z-[1]" data-name="Pillar">
      <div className="-translate-x-1/2 absolute flex items-center justify-center left-1/2 size-[18px] top-[11px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[18px]" data-name="Ellipse">
            <div className="absolute inset-[-38.89%_-50%_-61.11%_-50%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
                <g filter="url(#filter0_d_1_17943)" id="Ellipse">
                  <circle cx="18" cy="16" fill="var(--fill-0, #32BB78)" r="9" />
                  <circle cx="18" cy="16" r="10.5" stroke="var(--stroke-0, white)" strokeWidth="3" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="36" id="filter0_d_1_17943" width="36" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="3" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_17943" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_17943" mode="normal" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute left-1/2 size-[6px] top-[17px]" data-name="Target">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, white)" id="Target" r="3" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute h-[21px] left-1/2 top-[-21px] w-[4px]" data-name="Pile">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 21">
          <path d={svgPaths.p275e9100} fill="var(--fill-0, #114F31)" id="Pile" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute h-[8.1px] left-1/2 top-[-0.1px] w-[20px]" data-name="Pointer">
        <div className="absolute inset-[0_0_14.85%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 6.89697">
            <path d={svgPaths.p3eca7a00} fill="var(--fill-0, #32BB78)" id="Pointer" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AnchorShadown() {
  return (
    <div className="absolute inset-[90.67%_38.89%_4%_38.89%]" data-name="Anchor shadown">
      <div className="absolute inset-[-50%_-12.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 8">
          <g id="Anchor shadown">
            <g filter="url(#filter0_f_1_17934)" id="anchor-shadow-lg" opacity="0.16">
              <ellipse cx="10" cy="4" fill="var(--fill-0, #2A313C)" rx="8" ry="2" />
            </g>
            <g filter="url(#filter1_f_1_17934)" id="anchor-shadow" opacity="0.16">
              <ellipse cx="10" cy="4" fill="var(--fill-0, #2A313C)" rx="4" ry="1" />
            </g>
            <g filter="url(#filter2_f_1_17934)" id="anchor-shadow-sm" opacity="0.32">
              <ellipse cx="10" cy="4" fill="var(--fill-0, #2A313C)" rx="2" ry="0.5" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="8" id="filter0_f_1_17934" width="20" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_17934" stdDeviation="1" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="6" id="filter1_f_1_17934" width="12" x="4" y="1">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_17934" stdDeviation="1" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2.5" id="filter2_f_1_17934" width="5.5" x="7.25" y="2.75">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_17934" stdDeviation="0.375" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function TimeStyle() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Time Style">
      <div className="flex flex-col font-['SF_Pro_Text:Semibold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[17px] text-black text-center tracking-[-0.34px] whitespace-nowrap">
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
          <path d={svgPaths.p3961ee80} fill="var(--fill-0, black)" id="Mobile Signal" />
          <path d={svgPaths.p2f93e340} fill="var(--fill-0, black)" id="Wifi" />
          <g id="Battery">
            <path d={svgPaths.p11cc2e80} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.p18d48500} fill="var(--fill-0, black)" id="Combined Shape" opacity="0.4" />
            <path d={svgPaths.p17c5df00} fill="var(--fill-0, black)" id="Rectangle_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IcNear() {
  return (
    <div className="absolute inset-[28.57%]" data-name="ic_near">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic_near">
          <path d="M4 11L20 4L13 20L11 13L4 11Z" fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ColRightSideFabControls() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-end relative shrink-0 w-[72px]" data-name="col right side FAB controls">
      <div className="relative shrink-0 size-[48px]" data-name="FAB safety">
        <div className="absolute bg-white inset-0 rounded-[100px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.2)]" data-name="Basis" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-name="call fill">
          <div className="absolute inset-[0.85%_6.33%_1.01%_6.33%]" data-name="Subtract">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.9607 23.5538">
              <path clipRule="evenodd" d={svgPaths.p3b9a7b80} fill="var(--fill-0, #5D6B7E)" fillRule="evenodd" id="Subtract" />
            </svg>
          </div>
          <div className="absolute bottom-[21.4%] left-[23.8%] right-1/2 top-[20.09%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.28821 14.0437">
              <path d={svgPaths.p3c6703c0} fill="var(--fill-0, #5D6B7E)" id="Vector" />
            </svg>
          </div>
          <div className="absolute bottom-[21.4%] flex items-center justify-center left-1/2 right-[23.8%] top-[20.09%]" style={{ containerType: "size" }}>
            <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
              <div className="relative size-full" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.28821 14.0437">
                  <path d={svgPaths.p3c6703c0} fill="var(--fill-0, #A5B0C0)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 size-[56px]" data-name="FAB/Navigation/Default">
        <div className="absolute bg-white inset-0 rounded-[100px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.2)]" data-name="Basis" />
        <div className="absolute inset-[7.14%]" data-name="Ellipse">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
            <circle cx="24" cy="24" fill="var(--fill-0, #4F7BD1)" id="Ellipse" r="24" />
          </svg>
        </div>
        <IcNear />
      </div>
    </div>
  );
}

function RowTopContent() {
  return (
    <div className="content-stretch flex h-[120px] items-start justify-between px-[24px] relative shrink-0 w-[375px]" data-name="row top content">
      <div className="relative shrink-0 size-[48px]" data-name="FAB">
        <div className="absolute bg-white inset-0 rounded-[100px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.2)]" data-name="Basis" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="call fill">
          <div className="absolute inset-[20.83%_12.5%]" data-name="shape">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 14">
              <g id="shape">
                <path d={svgPaths.p1ed66800} fill="var(--fill-0, #2A313C)" />
                <path d={svgPaths.p49c8f00} fill="var(--fill-0, #2A313C)" />
                <path d={svgPaths.p2c114600} fill="var(--fill-0, #2A313C)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <ColRightSideFabControls />
    </div>
  );
}

function Col() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="col">
      <RowTopContent />
    </div>
  );
}

function BottomContent() {
  return <div className="flex-[1_0_0] min-h-px w-full" data-name="bottom content" />;
}

function ActiveDelivery1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[812px] items-start justify-end left-0 overflow-clip top-0 w-[375px]" data-name="active delivery">
      <div className="absolute h-[812px] left-0 overflow-clip top-0 w-[375px]" data-name="Map Area">
        <div className="absolute flex h-[1356.202px] items-center justify-center left-[-766.51px] top-[-83.44px] w-[1896.536px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="-rotate-3 flex-none">
            <div className="h-[1262px] relative w-[1833px]" data-name="Screenshot 2025-12-18 at 13.55.14 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20251218At1355141} />
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col isolate items-center justify-end left-[252.77px] top-[335px] w-[36px]" data-name="PU Pin">
          <Bubble />
          <Pillar />
        </div>
        <div className="-translate-x-1/2 absolute flex items-center justify-center left-[calc(50%+5.18px)] size-[81.775px] top-[359.13px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "76" } as React.CSSProperties}>
          <div className="flex-none rotate-[1.29deg]">
            <div className="relative size-[80px]" data-name="Pin">
              <div className="-translate-x-1/2 absolute h-[49px] left-1/2 top-[23.89px] w-[55px]" data-name="Shadow">
                <div className="absolute inset-[-6.12%_-5.45%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61 55">
                    <g filter="url(#filter0_f_1_17703)" id="Shadow" opacity="0.16">
                      <ellipse cx="30.5" cy="27.5" fill="var(--fill-0, #2A313C)" rx="27.5" ry="24.5" />
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="55" id="filter0_f_1_17703" width="61" x="0" y="0">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feGaussianBlur result="effect1_foregroundBlur_1_17703" stdDeviation="1.5" />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="absolute h-[47px] left-[13px] top-[24.36px] w-[54px]" data-name="Border">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 47">
                  <ellipse cx="27" cy="23.5" fill="var(--fill-0, #2A313C)" id="Border" rx="27" ry="23.5" />
                </svg>
              </div>
              <div className="absolute h-[41px] left-[16px] top-[26.36px] w-[48px]" data-name="Background">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 41">
                  <ellipse cx="24" cy="20.5" fill="var(--fill-0, white)" id="Background" rx="24" ry="20.5" />
                </svg>
              </div>
              <div className="-translate-x-1/2 absolute flex items-center justify-center left-1/2 size-[33.941px] top-[33.03px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
                <div className="-rotate-135 -scale-y-100 flex-none">
                  <div className="relative size-[24px]" data-name="Arrow">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path clipRule="evenodd" d={svgPaths.p244e9600} fill="var(--fill-0, #2A313C)" fillRule="evenodd" id="Arrow" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[75px] left-[177px] top-[313px] w-[72px]" data-name="Rider Location Pin">
          <AnchorShadown />
          <div className="-translate-x-1/2 absolute h-[70.003px] left-1/2 top-0 w-[64px]" data-name="Union">
            <div className="absolute inset-[-5.71%_-9.38%_-11.43%_-9.38%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76 82.0034">
                <g filter="url(#filter0_d_1_17949)" id="Union">
                  <path d={svgPaths.p1ab77400} fill="var(--fill-0, white)" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="82.0034" id="filter0_d_1_17949" width="76" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="3" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_17949" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_17949" mode="normal" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div className="absolute inset-[4.08%_9.72%_18.58%_9.72%]" data-name="Photo">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 58">
              <circle cx="29" cy="29" fill="var(--fill-0, #495D7A)" fillOpacity="0.16" id="Photo" r="29" />
            </svg>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[28px] top-[calc(50%-5.44px)]" data-name="user">
            <div className="absolute inset-[8.33%_14.58%]" data-name="shape">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8337 23.3333">
                <g id="shape">
                  <path d={svgPaths.p2a03e700} fill="var(--fill-0, #808C9F)" />
                  <path d={svgPaths.p3f371780} fill="var(--fill-0, #808C9F)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Status Bar iOS">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between pb-[12px] pl-[37px] pr-[27px] pt-[10px] relative size-full">
            <TimeStyle />
            <Icons />
          </div>
        </div>
      </div>
      <Col />
      <BottomContent />
    </div>
  );
}

function Spacing() {
  return <div className="h-[24px] shrink-0 w-full" data-name=".Spacing" />;
}

function Frame() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter_Variable:SemiBold',sans-serif] font-[650] leading-[30px] min-w-px relative text-[#2a313c] text-[24px] tracking-[-0.48px]" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
        Pickup in 1 min
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[24px] relative size-full">
        <Frame />
      </div>
    </div>
  );
}

function Spacing1() {
  return <div className="h-[8px] shrink-0 w-full" data-name=".Spacing" />;
}

function Status() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start rounded-tl-[16px] rounded-tr-[16px] shrink-0 sticky top-0 w-full z-[7]" data-name="Status">
      <div className="relative shrink-0 w-full" data-name="Ⓖ Section Header">
        <div className="content-stretch flex flex-col items-start px-[24px] relative size-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Top padding">
            <Spacing />
          </div>
        </div>
      </div>
      <Frame1 />
      <div className="bg-white content-stretch flex flex-col h-[8px] items-start shrink-0 sticky top-0 w-full" data-name="Vertical spacing">
        <Spacing1 />
      </div>
    </div>
  );
}

function Spacing2() {
  return <div className="h-[12px] shrink-0 w-full" data-name=".Spacing" />;
}

function Content1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="[content]">
      <div className="relative shrink-0 size-[20px]" data-name="user">
        <div className="absolute inset-[8.33%_14.58%]" data-name="shape">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1669 16.6667">
            <g id="shape">
              <path d={svgPaths.p31369b00} fill="var(--fill-0, #2A313C)" />
              <path d={svgPaths.p29ec8400} fill="var(--fill-0, #2A313C)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Primary() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[2px] relative shrink-0 w-full" data-name="[primary]">
      <p className="font-['Inter_Variable:Regular',sans-serif] font-[450] leading-[20px] relative shrink-0 text-[#2a313c] text-[16px] tracking-[-0.176px] w-full" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
        Sender
      </p>
    </div>
  );
}

function Secondary() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="[secondary]">
      <p className="font-['Inter_Variable:Regular',sans-serif] font-[450] leading-[20px] relative shrink-0 text-[#808c9f] text-[14px] tracking-[-0.084px] w-full" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
        Chandra Krishnamurthy
      </p>
    </div>
  );
}

function StartIcons() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Start icons">
      <div className="relative shrink-0 size-[16px]" data-name="1st">
        <div className="absolute inset-[4.17%]" data-name="shape">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
            <g id="shape">
              <path d={svgPaths.p31b1ab00} fill="var(--fill-0, #1D965C)" />
              <path clipRule="evenodd" d={svgPaths.p1cc75600} fill="var(--fill-0, #1D965C)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Inter_Variable:SemiBold',sans-serif] font-[650] justify-center leading-[0] relative shrink-0 text-[#1d965c] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv03', 'cv04'" }}>
        <p className="leading-[15px]">Paying cash</p>
      </div>
    </div>
  );
}

function ActionText() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="[action-text]">
      <Label />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[24px] min-w-[24px] px-[6px] py-[4px] relative shrink-0" data-name="Content">
      <div className="absolute bg-[#e0fff0] inset-0 rounded-[4px]" data-name="Shape">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <StartIcons />
      <ActionText />
    </div>
  );
}

function BadgeArray() {
  return (
    <div className="content-start flex flex-wrap gap-y-[4px] items-start relative shrink-0 w-full" data-name="[badge-array]">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Badge">
        <Content2 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
        <Primary />
        <Secondary />
      </div>
      <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="Bottom Slot">
        <BadgeArray />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex items-center min-h-[32px] relative shrink-0 w-full" data-name="[content]">
      <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Content">
        <div className="content-stretch flex items-start pr-[16px] relative shrink-0" data-name="Start Slot">
          <div className="content-stretch flex items-start relative shrink-0" data-name="Start IconView">
            <div className="absolute bg-[rgba(73,93,122,0.08)] inset-0 overflow-clip rounded-[9600px]" data-name="Background" />
            <Content1 />
          </div>
        </div>
        <Text />
        <div className="content-stretch flex items-start justify-end pl-[12px] relative shrink-0" data-name="End Slot">
          <button className="block cursor-pointer relative shrink-0 size-[24px]" data-name="End Icon">
            <div className="absolute inset-[29.17%_16.65%_35.07%_16.68%]" data-name="shape">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8.582">
                <path clipRule="evenodd" d={svgPaths.p23241420} fill="var(--fill-0, #2A313C)" fillRule="evenodd" id="shape" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function Spacing3() {
  return <div className="h-[12px] shrink-0 w-full" data-name=".Spacing" />;
}

function Spacing4() {
  return <div className="h-[8px] shrink-0 w-full" data-name=".Spacing" />;
}

function LIcon() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-[20px]" data-name="l_icon">
      <div className="relative shrink-0 size-[24px]" data-name="call">
        <div className="absolute inset-[13.43%]" data-name="shape">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5559 17.556">
            <path d={svgPaths.p6dcc600} fill="var(--fill-0, #2A313C)" id="shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ActionMeta() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="action + meta">
      <div className="flex flex-col font-['Inter_Variable:SemiBold',sans-serif] font-[650] justify-center leading-[0] relative shrink-0 text-[#2a313c] text-[16px] tracking-[-0.176px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
        <p className="leading-[24px]">Call</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(73,93,122,0.08)] min-h-[48px] relative rounded-[9600px] shrink-0 w-full" data-name="button">
      <div className="flex flex-row items-center justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center min-h-[inherit] px-[20px] py-[8px] relative size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Content">
            <LIcon />
            <ActionMeta />
          </div>
        </div>
      </div>
    </div>
  );
}

function LIcon1() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-[20px]" data-name="l_icon">
      <div className="relative shrink-0 size-[24px]" data-name="comment">
        <div className="absolute inset-[4.17%]" data-name="shape">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <path clipRule="evenodd" d={svgPaths.p37cb2e00} fill="var(--fill-0, #2A313C)" fillRule="evenodd" id="shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ActionMeta1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="action + meta">
      <div className="flex flex-col font-['Inter_Variable:SemiBold',sans-serif] font-[650] justify-center leading-[0] relative shrink-0 text-[#2a313c] text-[16px] tracking-[-0.176px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
        <p className="leading-[24px]">Message</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(73,93,122,0.08)] min-h-[48px] relative rounded-[9600px] shrink-0 w-full" data-name="button">
      <div className="flex flex-row items-center justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center min-h-[inherit] px-[20px] py-[8px] relative size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Content">
            <LIcon1 />
            <ActionMeta1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[24px] relative shrink-0 w-[375px]">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Secondary Main Button">
        <Button />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="2nd Icon Button">
        <Button1 />
      </div>
    </div>
  );
}

function Spacing5() {
  return <div className="h-[20px] shrink-0 w-full" data-name=".Spacing" />;
}

function Primary1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative self-stretch" data-name="[primary]">
      <p className="font-['Inter_Variable:SemiBold',sans-serif] font-[650] leading-[20px] relative shrink-0 text-[#2a313c] text-[16px] tracking-[-0.176px] w-full" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
        Instructions
      </p>
    </div>
  );
}

function TitleAddon() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-start relative shrink-0 w-full" data-name="[title + addon]">
      <Primary1 />
    </div>
  );
}

function Spacing6() {
  return <div className="h-[4px] shrink-0 w-full" data-name=".Spacing" />;
}

function Text1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[327px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter_Variable:Regular',sans-serif] font-[450] leading-[24px] min-w-px relative text-[#2a313c] text-[16px] tracking-[-0.176px]" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
        Call me when you are there
      </p>
    </div>
  );
}

function Instructions() {
  return (
    <div className="relative shrink-0 w-full" data-name="Instructions">
      <div className="content-stretch flex flex-col items-start px-[24px] py-[8px] relative size-full">
        <Text1 />
        <div className="content-stretch flex items-center overflow-clip py-[8px] relative shrink-0" data-name="Ⓖ Ghost Button / Text">
          <div className="flex flex-col font-['Inter_Variable:SemiBold',sans-serif] font-[650] justify-center leading-[0] relative shrink-0 text-[#1d965c] text-[14px] tracking-[-0.084px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
            <p className="leading-[18px]">Translate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DeliveryInstructions() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[375px]" data-name="delivery instructions">
      <div className="relative shrink-0 w-full" data-name="Ⓖ Section Header">
        <div className="content-stretch flex flex-col items-start px-[24px] relative size-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section Header: PaddingTop">
            <Spacing5 />
          </div>
          <TitleAddon />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Bottom padding">
            <Spacing6 />
          </div>
        </div>
      </div>
      <Instructions />
    </div>
  );
}

function Spacing7() {
  return <div className="h-[8px] shrink-0 w-full" data-name=".Spacing" />;
}

function Spacing8() {
  return <div className="h-[8px] shrink-0 w-full" data-name=".Spacing" />;
}

function Spacing9() {
  return <div className="h-[12px] shrink-0 w-full" data-name=".Spacing" />;
}

function Content4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="[content]">
      <div className="relative shrink-0 size-[20px]" data-name="user">
        <div className="absolute inset-[8.33%_14.58%]" data-name="shape">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1669 16.6667">
            <g id="shape">
              <path d={svgPaths.p31369b00} fill="var(--fill-0, #2A313C)" />
              <path d={svgPaths.p29ec8400} fill="var(--fill-0, #2A313C)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Primary2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[2px] relative shrink-0 w-full" data-name="[primary]">
      <p className="font-['Inter_Variable:Regular',sans-serif] font-[450] leading-[20px] relative shrink-0 text-[#2a313c] text-[16px] tracking-[-0.176px] w-full" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
        Receiver
      </p>
    </div>
  );
}

function Secondary1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="[secondary]">
      <p className="font-['Inter_Variable:Regular',sans-serif] font-[450] leading-[20px] relative shrink-0 text-[#808c9f] text-[14px] tracking-[-0.084px] w-full" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
        Flington Doe
      </p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
        <Primary2 />
        <Secondary1 />
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex items-center min-h-[32px] relative shrink-0 w-full" data-name="[content]">
      <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Content">
        <div className="content-stretch flex items-start pr-[16px] relative shrink-0" data-name="Start Slot">
          <div className="content-stretch flex items-start relative shrink-0" data-name="Start IconView">
            <div className="absolute bg-[rgba(73,93,122,0.08)] inset-0 overflow-clip rounded-[9600px]" data-name="Background" />
            <Content4 />
          </div>
        </div>
        <Text2 />
        <div className="content-stretch flex items-start justify-end pl-[12px] relative shrink-0" data-name="End Slot">
          <button className="block cursor-pointer relative shrink-0 size-[24px]" data-name="End Icon">
            <div className="absolute inset-[35.08%_16.65%_29.16%_16.68%]" data-name="shape">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8.582">
                <path clipRule="evenodd" d={svgPaths.p14a2aa00} fill="var(--fill-0, #2A313C)" fillRule="evenodd" id="shape" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function Spacing10() {
  return <div className="h-[12px] shrink-0 w-full" data-name=".Spacing" />;
}

function Spacing11() {
  return <div className="h-[8px] shrink-0 w-full" data-name=".Spacing" />;
}

function Spacing12() {
  return <div className="h-[24px] shrink-0 w-full" data-name=".Spacing" />;
}

function Primary3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative self-stretch" data-name="[primary]">
      <p className="font-['Inter_Variable:SemiBold',sans-serif] font-[650] leading-[25px] relative shrink-0 text-[#2a313c] text-[20px] tracking-[-0.34px] w-full" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
        Route details
      </p>
    </div>
  );
}

function TitleAddon1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[25px] items-start relative shrink-0 w-full" data-name="[title + addon]">
      <Primary3 />
    </div>
  );
}

function Spacing13() {
  return <div className="h-[8px] shrink-0 w-full" data-name=".Spacing" />;
}

function Spacing14() {
  return <div className="h-[12px] shrink-0 w-full" data-name=".Spacing" />;
}

function Primary4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[2px] relative shrink-0 w-full" data-name="[primary]">
      <p className="font-['Inter_Variable:Regular',sans-serif] font-[450] leading-[20px] relative shrink-0 text-[#2a313c] text-[16px] tracking-[-0.176px] w-full" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
        Oranienburger Str. 12
      </p>
    </div>
  );
}

function Secondary2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="[secondary]">
      <p className="font-['Inter_Variable:Regular',sans-serif] font-[450] leading-[20px] relative shrink-0 text-[#808c9f] text-[14px] tracking-[-0.084px] w-full" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
        Berlin
      </p>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
        <Primary4 />
        <Secondary2 />
      </div>
    </div>
  );
}

function LIcon2() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 size-[20px]" data-name="l_icon">
      <div className="relative shrink-0 size-[20px]" data-name="call">
        <div className="absolute inset-[13.43%]" data-name="shape">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6299 14.63">
            <path d={svgPaths.p306f80} fill="var(--fill-0, #2A313C)" id="shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(73,93,122,0.08)] content-stretch flex items-center justify-center min-h-[36px] min-w-[36px] overflow-clip relative rounded-[9600px] shrink-0" data-name="button">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Content">
        <LIcon2 />
      </div>
    </div>
  );
}

function ButtonBadge() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="button + badge">
      <Button2 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex items-center min-h-[32px] relative shrink-0 w-full" data-name="[content]">
      <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Content">
        <div className="content-stretch flex items-start pr-[16px] relative shrink-0" data-name="Start Slot">
          <div className="relative shrink-0 size-[24px]" data-name="[start] Dummy">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Ellipse">
              <div className="absolute inset-[-33.33%_-44.44%_-55.56%_-44.44%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
                  <g filter="url(#filter0_d_1_17866)" id="Ellipse">
                    <circle cx="17" cy="15" fill="var(--fill-0, #32BB78)" r="9" />
                    <circle cx="17" cy="15" r="10.5" stroke="var(--stroke-0, white)" strokeWidth="3" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="34" id="filter0_d_1_17866" width="34" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dy="2" />
                      <feGaussianBlur stdDeviation="2.5" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_17866" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_17866" mode="normal" result="shape" />
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
        </div>
        <Text3 />
        <div className="content-stretch flex items-start justify-end pl-[12px] relative shrink-0" data-name="End Slot">
          <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="End button">
            <ButtonBadge />
          </div>
        </div>
      </div>
    </div>
  );
}

function Spacing15() {
  return <div className="h-[12px] shrink-0 w-full" data-name=".Spacing" />;
}

function Spacing16() {
  return <div className="h-[12px] shrink-0 w-full" data-name=".Spacing" />;
}

function Primary5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[2px] relative shrink-0 w-full" data-name="[primary]">
      <p className="font-['Inter_Variable:Regular',sans-serif] font-[450] leading-[20px] relative shrink-0 text-[#2a313c] text-[16px] tracking-[-0.176px] w-full" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
        Berliner Str. 22
      </p>
    </div>
  );
}

function Secondary3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="[secondary]">
      <p className="font-['Inter_Variable:Regular',sans-serif] font-[450] leading-[20px] relative shrink-0 text-[#808c9f] text-[14px] tracking-[-0.084px] w-full" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
        Berlin
      </p>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
        <Primary5 />
        <Secondary3 />
      </div>
    </div>
  );
}

function LIcon3() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 size-[20px]" data-name="l_icon">
      <div className="relative shrink-0 size-[20px]" data-name="call">
        <div className="absolute inset-[13.43%]" data-name="shape">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6299 14.63">
            <path d={svgPaths.p306f80} fill="var(--fill-0, #2A313C)" id="shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[rgba(73,93,122,0.08)] content-stretch flex items-center justify-center min-h-[36px] min-w-[36px] overflow-clip relative rounded-[9600px] shrink-0" data-name="button">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Content">
        <LIcon3 />
      </div>
    </div>
  );
}

function ButtonBadge1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="button + badge">
      <Button3 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex items-center min-h-[32px] relative shrink-0 w-full" data-name="[content]">
      <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Content">
        <div className="content-stretch flex items-start pr-[16px] relative shrink-0" data-name="Start Slot">
          <div className="relative shrink-0 size-[24px]" data-name="[start] Dummy">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Ellipse">
              <div className="absolute inset-[-33.33%_-44.44%_-55.56%_-44.44%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
                  <g filter="url(#filter0_d_1_17761)" id="Ellipse">
                    <circle cx="17" cy="15" fill="var(--fill-0, #EB4755)" r="9" />
                    <circle cx="17" cy="15" r="10.5" stroke="var(--stroke-0, white)" strokeWidth="3" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="34" id="filter0_d_1_17761" width="34" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dy="2" />
                      <feGaussianBlur stdDeviation="2.5" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_17761" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_17761" mode="normal" result="shape" />
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
        </div>
        <Text4 />
        <div className="content-stretch flex items-start justify-end pl-[12px] relative shrink-0" data-name="End Slot">
          <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="End button">
            <ButtonBadge1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Spacing17() {
  return <div className="h-[12px] shrink-0 w-full" data-name=".Spacing" />;
}

function Spacing18() {
  return <div className="h-[8px] shrink-0 w-full" data-name=".Spacing" />;
}

function Spacing19() {
  return <div className="h-[24px] shrink-0 w-full" data-name=".Spacing" />;
}

function Primary6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative self-stretch" data-name="[primary]">
      <p className="font-['Inter_Variable:SemiBold',sans-serif] font-[650] leading-[25px] relative shrink-0 text-[#2a313c] text-[20px] tracking-[-0.34px] w-full" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
        Need help?
      </p>
    </div>
  );
}

function TitleAddon2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[25px] items-start relative shrink-0 w-full" data-name="[title + addon]">
      <Primary6 />
    </div>
  );
}

function Spacing20() {
  return <div className="h-[8px] shrink-0 w-full" data-name=".Spacing" />;
}

function Spacing21() {
  return <div className="h-[12px] shrink-0 w-full" data-name=".Spacing" />;
}

function Primary7() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[2px] relative shrink-0 w-full" data-name="[primary]">
      <p className="font-['Inter_Variable:Regular',sans-serif] font-[450] leading-[20px] relative shrink-0 text-[#2a313c] text-[16px] tracking-[-0.176px] w-full" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
        Contact support
      </p>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
        <Primary7 />
      </div>
    </div>
  );
}

function Chevron() {
  return (
    <div className="content-stretch flex items-start justify-end pl-[8px] py-[2px] relative shrink-0" data-name="Chevron">
      <div className="relative shrink-0 size-[20px]" data-name="chevron_forward">
        <div className="absolute inset-[16.68%_24.99%_16.65%_39.25%]" data-name="shape">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.15167 13.3333">
            <path clipRule="evenodd" d={svgPaths.p4c6af80} fill="var(--fill-0, #CCD2DC)" fillRule="evenodd" id="shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex items-center min-h-[32px] relative shrink-0 w-full" data-name="[content]">
      <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Content">
        <Text5 />
        <div className="content-stretch flex items-start justify-end pl-[12px] relative shrink-0" data-name="End Slot">
          <div className="relative shrink-0 size-[24px]" data-name="End Icon">
            <div className="absolute inset-[16.67%]" data-name="shape">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgPaths.p306c4c00} fill="var(--fill-0, #2A313C)" id="shape" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Chevron />
    </div>
  );
}

function Spacing22() {
  return <div className="h-[12px] shrink-0 w-full" data-name=".Spacing" />;
}

function Spacing23() {
  return <div className="h-[8px] shrink-0 w-full" data-name=".Spacing" />;
}

function NeedHelp() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[3]" data-name="Need help">
      <div className="relative shrink-0 w-full" data-name="Ⓖ Section Header">
        <div className="content-stretch flex flex-col items-start px-[24px] relative size-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Top padding">
            <Spacing19 />
          </div>
          <TitleAddon2 />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Bottom padding">
            <Spacing20 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Ⓖ List Item">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[24px] relative size-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Top padding">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Vertical spacing">
                <Spacing21 />
              </div>
            </div>
            <Content7 />
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Bottom padding">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Vertical spacing">
                <Spacing22 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[8px] items-start relative shrink-0 w-full" data-name="Vertical spacing">
        <Spacing23 />
      </div>
    </div>
  );
}

function Spacing24() {
  return <div className="h-[24px] shrink-0 w-full" data-name=".Spacing" />;
}

function Primary8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative self-stretch" data-name="[primary]">
      <p className="font-['Inter_Variable:SemiBold',sans-serif] font-[650] leading-[25px] relative shrink-0 text-[#2a313c] text-[20px] tracking-[-0.34px] w-full" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
        Settings
      </p>
    </div>
  );
}

function TitleAddon3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[25px] items-start relative shrink-0 w-full" data-name="[title + addon]">
      <Primary8 />
    </div>
  );
}

function Spacing25() {
  return <div className="h-[8px] shrink-0 w-full" data-name=".Spacing" />;
}

function Spacing26() {
  return <div className="h-[12px] shrink-0 w-full" data-name=".Spacing" />;
}

function Primary9() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[2px] relative shrink-0 w-full" data-name="[primary]">
      <p className="font-['Inter_Variable:Regular',sans-serif] font-[450] leading-[20px] relative shrink-0 text-[#2a313c] text-[16px] tracking-[-0.176px] w-full" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
        Bolt Navigation
      </p>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
        <Primary9 />
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex items-center min-h-[32px] relative shrink-0 w-full" data-name="[content]">
      <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Content">
        <div className="content-stretch flex items-start pr-[16px] relative shrink-0" data-name="Start Slot">
          <div className="relative shrink-0 size-[24px]" data-name="Start Icon">
            <div className="absolute inset-[10.61%_10.61%_0_0]" data-name="shape">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.4526 21.4526">
                <path clipRule="evenodd" d={svgPaths.p15961e00} fill="var(--fill-0, #808C9F)" fillRule="evenodd" id="shape" />
              </svg>
            </div>
          </div>
        </div>
        <Text6 />
        <div className="content-stretch flex items-start justify-end pl-[12px] relative shrink-0" data-name="End Slot">
          <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="End GhostButton">
            <div className="flex flex-col font-['Inter_Variable:SemiBold',sans-serif] font-[650] justify-center leading-[0] relative shrink-0 text-[#1d965c] text-[14px] tracking-[-0.084px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
              <p className="leading-[18px]">Change</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Spacing27() {
  return <div className="h-[12px] shrink-0 w-full" data-name=".Spacing" />;
}

function Spacing28() {
  return <div className="h-[12px] shrink-0 w-full" data-name=".Spacing" />;
}

function Primary10() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[2px] relative shrink-0 w-full" data-name="[primary]">
      <p className="font-['Inter_Variable:Regular',sans-serif] font-[450] leading-[20px] relative shrink-0 text-[#2a313c] text-[16px] tracking-[-0.176px] w-full" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
        Stop new requests
      </p>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
        <Primary10 />
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex items-center min-h-[32px] relative shrink-0 w-full" data-name="[content]">
      <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Content">
        <div className="content-stretch flex items-start pr-[16px] relative shrink-0" data-name="Start Slot">
          <div className="relative shrink-0 size-[24px]" data-name="Start Icon">
            <div className="absolute inset-[8.33%_8.33%_8.33%_16.67%]" data-name="shape">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
                <path d={svgPaths.p2bf3e400} fill="var(--fill-0, #808C9F)" id="shape" />
              </svg>
            </div>
          </div>
        </div>
        <Text7 />
        <div className="content-stretch flex items-start justify-end pl-[12px] relative shrink-0" data-name="End Slot">
          <div className="relative shrink-0 size-[24px]" data-name="End Icon">
            <div className="absolute inset-[16.67%]" data-name="shape">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgPaths.p306c4c00} fill="var(--fill-0, #2A313C)" id="shape" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Spacing29() {
  return <div className="h-[12px] shrink-0 w-full" data-name=".Spacing" />;
}

function Spacing30() {
  return <div className="h-[12px] shrink-0 w-full" data-name=".Spacing" />;
}

function Primary11() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[2px] relative shrink-0 w-full" data-name="[primary]">
      <p className="font-['Inter_Variable:Regular',sans-serif] font-[450] leading-[20px] relative shrink-0 text-[#c91d2b] text-[16px] tracking-[-0.176px] w-full" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
        Cancel delivery
      </p>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
        <Primary11 />
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex items-center min-h-[32px] relative shrink-0 w-full" data-name="[content]">
      <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Content">
        <div className="content-stretch flex items-start pr-[16px] relative shrink-0" data-name="Start Slot">
          <div className="relative shrink-0 size-[24px]" data-name="Start Icon">
            <div className="absolute flex inset-[20.83%] items-center justify-center" style={{ containerType: "size" }}>
              <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                <div className="relative size-full" data-name="shape">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                    <path d={svgPaths.p142f0e00} fill="var(--fill-0, #C91D2B)" id="shape" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Text8 />
        <div className="content-stretch flex items-start justify-end pl-[12px] relative shrink-0" data-name="End Slot">
          <div className="relative shrink-0 size-[24px]" data-name="End Icon">
            <div className="absolute inset-[16.67%]" data-name="shape">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgPaths.p306c4c00} fill="var(--fill-0, #2A313C)" id="shape" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Spacing31() {
  return <div className="h-[12px] shrink-0 w-full" data-name=".Spacing" />;
}

function Spacing32() {
  return <div className="h-[24px] shrink-0 w-full" data-name=".Spacing" />;
}

function Spacing33() {
  return <div className="h-[24px] shrink-0 w-full" data-name=".Spacing" />;
}

function Spacing34() {
  return <div className="h-[24px] shrink-0 w-full" data-name=".Spacing" />;
}

function Spacing35() {
  return <div className="h-[24px] shrink-0 w-full" data-name=".Spacing" />;
}

function Settings() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[1]" data-name="Settings">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Settings">
        <div className="relative shrink-0 w-full" data-name="Ⓖ Section Header">
          <div className="content-stretch flex flex-col items-start px-[24px] relative size-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Top padding">
              <Spacing24 />
            </div>
            <TitleAddon3 />
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Bottom padding">
              <Spacing25 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start justify-center px-[24px] relative shrink-0 w-[375px]" data-name="Ⓖ List Item">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Top padding">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Vertical spacing">
            <Spacing26 />
          </div>
        </div>
        <Content8 />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Bottom padding">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Vertical spacing">
            <Spacing27 />
          </div>
        </div>
        <div className="absolute bottom-0 content-stretch flex flex-col items-start left-0 px-[24px] right-0" data-name="Ⓖ Item Separator">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="PaddingTop">
            <div className="h-0 relative shrink-0 w-full" data-name=".Spacing">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <g id=".Spacing" />
              </svg>
            </div>
          </div>
          <div className="bg-[rgba(73,93,122,0.08)] h-px shrink-0 w-full" data-name="separator" />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="PaddingBottom">
            <div className="h-0 relative shrink-0 w-full" data-name=".Spacing">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <g id=".Spacing" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col items-start justify-center px-[24px] relative shrink-0 w-[375px]" data-name="Ⓖ List Item">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Top padding">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Vertical spacing">
            <Spacing28 />
          </div>
        </div>
        <Content9 />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Bottom padding">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Vertical spacing">
            <Spacing29 />
          </div>
        </div>
        <div className="absolute bottom-0 content-stretch flex flex-col items-start left-0 px-[24px] right-0" data-name="Ⓖ Item Separator">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="PaddingTop">
            <div className="h-0 relative shrink-0 w-full" data-name=".Spacing">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <g id=".Spacing" />
              </svg>
            </div>
          </div>
          <div className="bg-[rgba(73,93,122,0.08)] h-px shrink-0 w-full" data-name="separator" />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="PaddingBottom">
            <div className="h-0 relative shrink-0 w-full" data-name=".Spacing">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <g id=".Spacing" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col items-start justify-center px-[24px] relative shrink-0 w-[375px]" data-name="Ⓖ List Item">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Top padding">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Vertical spacing">
            <Spacing30 />
          </div>
        </div>
        <Content10 />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Bottom padding">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Vertical spacing">
            <Spacing31 />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[24px] items-start relative shrink-0 w-full" data-name="Vertical spacing">
        <Spacing32 />
      </div>
      <div className="content-stretch flex flex-col h-[24px] items-start relative shrink-0 w-full" data-name="Vertical spacing">
        <Spacing33 />
      </div>
      <div className="content-stretch flex flex-col h-[24px] items-start relative shrink-0 w-full" data-name="Vertical spacing">
        <Spacing34 />
      </div>
      <div className="content-stretch flex flex-col h-[24px] items-start relative shrink-0 w-full" data-name="Vertical spacing">
        <Spacing35 />
      </div>
    </div>
  );
}

function Arrows() {
  return (
    <div className="-translate-y-1/2 absolute h-[18.672px] left-[28px] top-1/2 w-[18.667px]" data-name="arrows">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6667 18.6721">
        <g id="arrows">
          <path d={svgPaths.p1a759b80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p39e3cdc0} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pt-[12px] px-[12px] relative size-full">
        <div className="h-[64px] relative rounded-[8px] shrink-0 w-full" data-name="Swipeable buttons">
          <div className="absolute h-[64px] left-0 right-0 top-0">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 351 64">
              <path d={svgPaths.p114f4bc1} fill="var(--fill-0, #2B8659)" id="Rectangle 2" />
            </svg>
          </div>
          <p className="absolute font-['Inter_Variable:SemiBold',sans-serif] font-[650] h-[24px] leading-[25px] left-[72px] right-[71px] text-[20px] text-center text-white top-[calc(50%-12px)] tracking-[-0.34px]" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
            Arrived
          </p>
          <Arrows />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

export default function ActiveDelivery() {
  return (
    <div className="relative size-full" data-name="Active delivery">
      <ActiveDelivery1 />
      <div className="absolute bg-[rgba(0,0,0,0.28)] h-[812px] left-0 top-0 w-[375px]" />
      <div className="absolute bg-white content-stretch flex flex-col h-[768px] isolate items-start left-0 overflow-x-clip overflow-y-auto right-0 rounded-tl-[16px] rounded-tr-[16px] top-[44px]" data-name="Delivery details">
        <div className="absolute h-[768px] inset-0 pointer-events-none">
          <div className="content-stretch flex flex-col items-center pointer-events-auto py-[6px] rounded-tl-[16px] rounded-tr-[16px] sticky top-0 z-[10]" data-name=".Bottom Sheet / Drag Handle">
            <div className="bg-[rgba(73,93,122,0.08)] h-[6px] rounded-[100px] shrink-0 w-[40px]" data-name="Bar" />
          </div>
        </div>
        <Status />
        <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full z-[6]" data-name="Sender + Comms">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Player">
            <div className="bg-white content-stretch flex flex-col items-start justify-center px-[24px] relative shrink-0 w-[375px]" data-name="Ⓖ List Item">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Top padding">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Vertical spacing">
                  <Spacing2 />
                </div>
              </div>
              <Content />
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Bottom padding">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Vertical spacing">
                  <Spacing3 />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col h-[8px] items-start relative shrink-0 w-full" data-name="Vertical spacing">
            <Spacing4 />
          </div>
          <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[375px]" data-name="Contact party">
            <Frame4 />
          </div>
          <DeliveryInstructions />
          <div className="content-stretch flex flex-col h-[8px] items-start relative shrink-0 w-full" data-name="Vertical spacing">
            <Spacing7 />
          </div>
          <div className="h-[8px] relative shrink-0 w-full" data-name="Divider">
            <div className="-translate-y-1/2 absolute h-[40px] left-0 right-0 top-1/2" data-name="Subtract">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 40">
                <path d={svgPaths.p7f1f200} fill="var(--fill-0, #F0F2F5)" id="Subtract" />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full z-[5]" data-name="Receiver">
          <div className="content-stretch flex flex-col h-[8px] items-start relative shrink-0 w-full" data-name="Vertical spacing">
            <Spacing8 />
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Player">
            <div className="bg-white content-stretch flex flex-col items-start justify-center px-[24px] relative shrink-0 w-[375px]" data-name="Ⓖ List Item">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Top padding">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Vertical spacing">
                  <Spacing9 />
                </div>
              </div>
              <Content3 />
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Bottom padding">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Vertical spacing">
                  <Spacing10 />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col h-[8px] items-start relative shrink-0 w-full" data-name="Vertical spacing">
            <Spacing11 />
          </div>
          <div className="h-[8px] relative shrink-0 w-full" data-name="Divider">
            <div className="-translate-y-1/2 absolute h-[40px] left-0 right-0 top-1/2" data-name="Subtract">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 40">
                <path d={svgPaths.p7f1f200} fill="var(--fill-0, #F0F2F5)" id="Subtract" />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[375px] z-[4]" data-name="Route">
          <div className="relative shrink-0 w-full" data-name="Ⓖ Section Header">
            <div className="content-stretch flex flex-col items-start px-[24px] relative size-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Top padding">
                <Spacing12 />
              </div>
              <TitleAddon1 />
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Bottom padding">
                <Spacing13 />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start justify-center px-[24px] relative shrink-0 w-[375px]" data-name="Ⓖ List Item">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Top padding">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Vertical spacing">
                <Spacing14 />
              </div>
            </div>
            <Content5 />
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Bottom padding">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Vertical spacing">
                <Spacing15 />
              </div>
            </div>
            <div className="absolute bottom-0 content-stretch flex flex-col items-start left-0 px-[24px] right-0" data-name="Ⓖ Item Separator">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="PaddingTop">
                <div className="h-0 relative shrink-0 w-full" data-name=".Spacing">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <g id=".Spacing" />
                  </svg>
                </div>
              </div>
              <div className="bg-[rgba(73,93,122,0.08)] h-px shrink-0 w-full" data-name="separator" />
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="PaddingBottom">
                <div className="h-0 relative shrink-0 w-full" data-name=".Spacing">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <g id=".Spacing" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start justify-center px-[24px] relative shrink-0 w-[375px]" data-name="Ⓖ List Item">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Top padding">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Vertical spacing">
                <Spacing16 />
              </div>
            </div>
            <Content6 />
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Bottom padding">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Vertical spacing">
                <Spacing17 />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col h-[8px] items-start relative shrink-0 w-full" data-name="Vertical spacing">
            <Spacing18 />
          </div>
          <div className="h-[8px] relative shrink-0 w-full" data-name="Divider">
            <div className="-translate-y-1/2 absolute h-[40px] left-0 right-0 top-1/2" data-name="Subtract">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 40">
                <path d={svgPaths.p7f1f200} fill="var(--fill-0, #F0F2F5)" id="Subtract" />
              </svg>
            </div>
          </div>
        </div>
        <NeedHelp />
        <div className="h-[8px] relative shrink-0 w-full z-[2]" data-name="Divider">
          <div className="-translate-y-1/2 absolute h-[40px] left-0 right-0 top-1/2" data-name="Subtract">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 40">
              <path d={svgPaths.p7f1f200} fill="var(--fill-0, #F0F2F5)" id="Subtract" />
            </svg>
          </div>
        </div>
        <Settings />
      </div>
      <div className="absolute bottom-0 h-[88px] left-0 pointer-events-none top-[724px]">
        <div className="content-stretch flex flex-col items-start pointer-events-auto sticky top-0 w-[375px]" data-name="Active Ride Sheet">
          <div className="bg-white content-stretch flex flex-col gap-[4px] items-center justify-end pb-[12px] relative rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_6px_24px_0px_rgba(0,0,0,0.24)] shrink-0 w-[375px]" data-name="Active Ride Sheet/Pickup">
            <Frame3 />
          </div>
        </div>
      </div>
    </div>
  );
}