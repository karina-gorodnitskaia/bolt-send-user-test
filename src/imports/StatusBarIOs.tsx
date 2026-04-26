import svgPaths from "./svg-9zc06jx79b";

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

export default function StatusBarIOs() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[12px] pl-[37px] pr-[27px] pt-[10px] relative size-full status-bar-ios" data-name="Status Bar iOS">
      <TimeStyle />
      <Icons />
    </div>
  );
}