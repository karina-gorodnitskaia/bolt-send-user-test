import svgPaths from "./svg-gwd4hwqv1s";
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
                <g filter="url(#filter0_d_5_1235)" id="Ellipse">
                  <circle cx="18" cy="16" fill="var(--fill-0, #32BB78)" r="9" />
                  <circle cx="18" cy="16" r="10.5" stroke="var(--stroke-0, white)" strokeWidth="3" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="36" id="filter0_d_5_1235" width="36" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="3" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_1235" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_1235" mode="normal" result="shape" />
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
        <p className="leading-[22px] font-semibold" style={{ fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>9:41</p>
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
    <div className="content-stretch flex h-[120px] items-start justify-between px-[24px] relative shrink-0 w-full" data-name="row top content">
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
    <div className="content-stretch flex flex-col items-start w-full relative shrink-0 pointer-events-none" data-name="col">
      <div className="pointer-events-auto w-full">
        <RowTopContent />
      </div>
    </div>
  );
}

function BottomContent() {
  return <div className="flex-[1_0_0] min-h-px w-full pointer-events-none" data-name="bottom content" />;
}

function ActiveDelivery1({ isOpen }: { isOpen?: boolean }) {
  return (
    <div className="absolute content-stretch flex flex-col h-full items-start justify-end left-0 overflow-clip top-0 w-full" data-name="active delivery">
      <div className="absolute h-full left-0 overflow-clip top-0 w-full" data-name="Map Area">
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
                <g filter="url(#filter0_d_5_1229)" id="Union">
                  <path d={svgPaths.p1ab77400} fill="var(--fill-0, white)" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="82.0034" id="filter0_d_5_1229" width="76" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="3" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_1229" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_1229" mode="normal" result="shape" />
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
      {!isOpen && <Col />}
      <BottomContent />
    </div>
  );
}

export default function ActiveDelivery({ isOpen }: { isOpen?: boolean }) {
  return (
    <div className="relative size-full" data-name="Active delivery">
      <ActiveDelivery1 isOpen={isOpen} />
    </div>
  );
}