import svgPaths from "./svg-42cnhbil3r";

function Secondary() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[2px] relative shrink-0 w-full" data-name="[secondary]">
      <p className="font-['Inter_Variable:Regular',sans-serif] font-[450] leading-[0] relative shrink-0 text-[#191f1c] text-[0px] tracking-[-0.084px] w-full" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
        <span className="leading-[20px] text-[14px]">{`Collect the parcel and `}</span>
        <span className="font-['Inter_Variable:SemiBold',sans-serif] font-[650] leading-[20px] text-[14px]" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>{`29.79 € `}</span>
        <span className="leading-[20px] text-[14px]">payment</span>
      </p>
    </div>
  );
}

function Actions({ onPaymentIssue }: { onPaymentIssue?: () => void }) {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[2px] relative shrink-0 w-full" data-name="[actions]">
      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="_action-1">
        <button
          onClick={onPaymentIssue}
          className="flex flex-col font-['Inter_Variable:SemiBold',sans-serif] font-[650] justify-center leading-[0] relative shrink-0 text-[#F58300] text-[14px] tracking-[-0.084px] whitespace-nowrap bg-transparent border-none p-0 cursor-pointer active:opacity-70"
          style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}
        >
          <p className="leading-[20px]">Payment issue?</p>
        </button>
      </div>
    </div>
  );
}

function Content({ onPaymentIssue }: { onPaymentIssue?: () => void }) {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="[content]">
      <div className="relative shrink-0 size-[24px]" data-name="Start Asset">
        <div className="absolute inset-[16.67%_8.33%_18.73%_8.33%]" data-name="shape">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 15.5039">
            <path clipRule="evenodd" d={svgPaths.pb681100} fill="var(--fill-0, #F58300)" fillRule="evenodd" id="shape" />
          </svg>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text + Actions">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name=".Ⓖ Label Stack / preset: Banners">
          <Secondary />
        </div>
        <Actions onPaymentIssue={onPaymentIssue} />
      </div>
    </div>
  );
}

function BgWrapper({ onPaymentIssue }: { onPaymentIssue?: () => void }) {
  return (
    <div className="bg-[rgba(255,190,0,0.23)] min-h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="[bg-wrapper]">
      <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[16px] py-[12px] relative size-full">
        <Content onPaymentIssue={onPaymentIssue} />
      </div>
    </div>
  );
}

export default function InlineNotification({ onPaymentIssue }: { onPaymentIssue?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] px-[12px] relative size-full" data-name="Ⓖ Inline Notification">
      <BgWrapper onPaymentIssue={onPaymentIssue} />
    </div>
  );
}