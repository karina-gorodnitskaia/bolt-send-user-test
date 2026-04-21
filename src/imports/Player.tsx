import svgPaths from "./svg-eolx5ogv72";

function Spacing() {
  return <div className="h-[12px] shrink-0 w-full" data-name=".Spacing" />;
}

function Content1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="[content]">
      <div className="relative shrink-0 size-[20px]" data-name="user">
        <div className="absolute inset-[8.33%_14.58%]" data-name="shape">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1669 16.6667">
            <g id="shape">
              <path d={svgPaths.p31369b00} fill="var(--fill-0, #191F1C)" />
              <path d={svgPaths.p29ec8400} fill="var(--fill-0, #191F1C)" />
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
      <p className="font-['Inter_Variable:Regular',sans-serif] font-[450] leading-[20px] relative shrink-0 text-[#191f1c] text-[16px] tracking-[-0.176px] w-full" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
        Sender
      </p>
    </div>
  );
}

function Secondary() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="[secondary]">
      <p className="font-['Inter_Variable:Regular',sans-serif] font-[450] leading-[20px] relative shrink-0 text-[14px] text-[rgba(0,10,7,0.63)] tracking-[-0.084px] w-full" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
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
              <path d={svgPaths.p31b1ab00} fill="var(--fill-0, #007042)" fillOpacity="0.92" />
              <path clipRule="evenodd" d={svgPaths.p1cc75600} fill="var(--fill-0, #007042)" fillOpacity="0.92" fillRule="evenodd" />
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
      <div className="flex flex-col font-['Inter_Variable:SemiBold',sans-serif] font-[650] justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(0,112,66,0.92)] whitespace-nowrap" style={{ fontFeatureSettings: "'cv03', 'cv04'" }}>
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
      <div className="absolute bg-[rgba(0,160,64,0.09)] inset-0 rounded-[4px]" data-name="Shape">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
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
            <div className="absolute bg-[rgba(0,45,30,0.07)] inset-0 overflow-clip rounded-[9600px]" data-name="Background" />
            <Content1 />
          </div>
        </div>
        <Text />
        <div className="content-stretch flex items-start justify-end pl-[12px] relative shrink-0" data-name="End Slot">
          <div className="relative shrink-0 size-[24px]" data-name="End Icon">
            <div className="absolute inset-[35.08%_16.65%_29.16%_16.68%]" data-name="shape">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8.582">
                <path clipRule="evenodd" d={svgPaths.p14a2aa00} fill="var(--fill-0, #191F1C)" fillRule="evenodd" id="shape" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Spacing1() {
  return <div className="h-[12px] shrink-0 w-full" data-name=".Spacing" />;
}

export default function Player() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Player">
      <div className="bg-white content-stretch flex flex-col items-start justify-center px-[24px] relative shrink-0 w-[375px]" data-name="Ⓖ List Item">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Top padding">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Vertical spacing">
            <Spacing />
          </div>
        </div>
        <Content />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Bottom padding">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Vertical spacing">
            <Spacing1 />
          </div>
        </div>
      </div>
    </div>
  );
}