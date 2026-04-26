import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, animate } from "motion/react";
import StatusBarIOs from "../imports/StatusBarIOs-5-1464";
import svgPaths from "../imports/svg-yt0hfw9plf";
import ActiveDelivery from "../imports/ActiveDelivery-5-1129";
import DeliveryDetails from "../imports/DeliveryDetails";
import WaitingDeliveryDetails from "../imports/DeliveryDetails-10-11425";
import AcceptanceScreen from "../imports/AcceptanceScreen20";
import InlineNotification from "../imports/ⒼInlineNotification";
import walletAlertImg from "../assets/Wallet with Alert.png";
import starImg from "../star.png";
import pinHandTopImg from "../assets/row.png";
import rideDetailsImg from "../Ride details.png";
import activeDeliveryImg from "../Active delivery.png";

function Spacing() {
  return <div className="h-[24px] shrink-0 w-full" data-name=".Spacing" />;
}

function Frame4({ onClick, isOpen }: { onClick: () => void; isOpen?: boolean }) {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.2 } }}
          exit={{ opacity: 0, scale: 0.8, transition: { duration: 0 } }}
          className="content-stretch flex gap-[12px] items-start relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity p-2 -m-2"
          onClick={onClick}
        >
          <div className="relative shrink-0 size-[32px]" data-name="list">
            <div className="absolute inset-[20.83%_14.58%_18.75%_8.33%]" data-name="shape">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.6667 19.3333">
                <g id="shape">
                  <path d={svgPaths.p2d64d580} fill="var(--fill-0, #2A313C)" />
                  <path d={svgPaths.p15c45b00} fill="var(--fill-0, #2A313C)" />
                  <path d={svgPaths.pfc31f80} fill="var(--fill-0, #2A313C)" />
                  <path d={svgPaths.p469e870} fill="var(--fill-0, #2A313C)" />
                  <path d={svgPaths.p30102200} fill="var(--fill-0, #2A313C)" />
                  <path d={svgPaths.p35b44200} fill="var(--fill-0, #2A313C)" />
                </g>
              </svg>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Frame({ onToggle, isOpen, titleText }: { onToggle: () => void; isOpen?: boolean; titleText?: string }) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter_Variable:SemiBold',sans-serif] font-[650] leading-[30px] min-w-px relative text-[#2a313c] text-[24px] tracking-[-0.48px]" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
        {titleText || "Pickup in 1 min"}
      </p>
      <Frame4 onClick={onToggle} isOpen={isOpen} />
    </div>
  );
}

function Rating() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="rating">
      <div className="flex flex-col font-['Inter_Variable:SemiBold',sans-serif] font-[650] justify-end leading-[0] relative shrink-0 text-[#f58300] text-[18px] tracking-[-0.252px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
        <p className="leading-[24px]">5.0</p>
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="star">
        <div className="absolute inset-[0_2.08%_8.33%_2.08%]" data-name="shape">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3333 14.6667">
            <path clipRule="evenodd" d={svgPaths.p3fb85380} fill="var(--fill-0, #F58300)" fillRule="evenodd" id="shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function RidesCount() {
  return <div className="content-stretch flex gap-[6px] h-[24px] items-center shrink-0 w-[92px]" data-name="rides count" />;
}

function Row({ name = "Chandra Krishnamurthy" }: { name?: string }) {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="row">
      <p className="font-['Inter_Variable:Regular',sans-serif] font-[450] leading-[24px] relative shrink-0 text-[#2a313c] text-[18px] tracking-[-0.252px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
        {name}
      </p>
      <Rating />
      <RidesCount />
    </div>
  );
}

function Frame1({ isOpen, name }: { isOpen?: boolean; name?: string }) {
  if (isOpen) return null;

  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full overflow-hidden gap-[8px]">
      <p className="font-['Inter_Variable:Regular',sans-serif] font-[450] leading-[24px] min-w-full relative shrink-0 text-[#2a313c] text-[18px] tracking-[-0.252px] w-[min-content]" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
        Karl-Liebknecht-Str. 29, 10178 Berlin
      </p>
      <Row name={name} />
    </div>
  );
}

function Frame2({ onToggle, isOpen, isScrolled, titleText, name }: { onToggle: () => void; isOpen?: boolean; isScrolled?: boolean; titleText?: string; name?: string }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className={`content-stretch flex flex-col items-start px-[24px] relative size-full transition-all duration-300 ${isOpen ? 'gap-0' : 'gap-[4px]'} ${isScrolled ? 'pb-[8px]' : ''}`}>
        <Frame onToggle={onToggle} isOpen={isOpen} titleText={titleText} />
        <Frame1 isOpen={isOpen} name={name} />
      </div>
    </div>
  );
}

function Spacing1() {
  return null;
}

function Status({ onToggle, isOpen, isScrolled, titleText, name }: { onToggle: () => void; isOpen?: boolean; isScrolled?: boolean; titleText?: string; name?: string }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-start rounded-tl-[16px] rounded-tr-[16px] shrink-0 sticky top-0 w-full z-[7]" data-name="Status">
      <div className="relative shrink-0 w-full" data-name="Ⓖ Section Header">
        <div className="content-stretch flex flex-col items-start px-[24px] relative size-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Top padding">
            <Spacing />
          </div>
        </div>
      </div>
      <Frame2 onToggle={onToggle} isOpen={isOpen} isScrolled={isScrolled} titleText={titleText} name={name} />

    </div>
  );
}

function Frame3({ onConfirm, text, confirmedText, resetKey, disabled, validate }: { onConfirm: () => void, text: string, confirmedText: string, resetKey?: string, disabled?: boolean, validate?: () => boolean }) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [justEnabled, setJustEnabled] = useState(false);
  const prevDisabledRef = useRef(disabled);
  const containerRef = useRef<HTMLDivElement>(null);
  const [maxDrag, setMaxDrag] = useState(327 - 80);
  const x = useMotionValue(0);

  useEffect(() => {
    setIsConfirmed(false);
    setIsDragging(false);
    animate(x, 0, { duration: 0.2 });
  }, [resetKey]);

  useEffect(() => {
    if (prevDisabledRef.current === true && disabled === false) {
      setJustEnabled(true);
      const t = setTimeout(() => setJustEnabled(false), 900);
      prevDisabledRef.current = disabled;
      return () => clearTimeout(t);
    }
    prevDisabledRef.current = disabled;
  }, [disabled]);

  useEffect(() => {
    if (containerRef.current) {
      setMaxDrag(containerRef.current.offsetWidth - 80);
    }
    const handleResize = () => {
      if (containerRef.current) setMaxDrag(containerRef.current.offsetWidth - 80);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDragEnd = (event: any, info: any) => {
    setIsDragging(false);
    if (info.offset.x > maxDrag * 0.5) {
      if (validate && !validate()) {
        animate(x, 0, { type: 'spring', stiffness: 420, damping: 32 });
        return;
      }
      setIsConfirmed(true);
      onConfirm();
    } else {
      animate(x, 0, { type: 'spring', stiffness: 420, damping: 32 });
    }
  };

  return (
    <div className="relative shrink-0 w-full overflow-hidden">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <div ref={containerRef} className={`${disabled ? 'bg-[#BEE4CE]' : 'bg-positive-primary'} h-[64px] relative rounded-[8px] shrink-0 w-full overflow-hidden transition-colors duration-200`} data-name="Swipeable buttons">
          <motion.div
            animate={{ opacity: isConfirmed || isDragging ? 0 : 1 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <p className={`font-['Inter_Variable:SemiBold',sans-serif] font-semibold h-[24px] leading-[25px] text-[20px] text-center tracking-[-0.34px] ${disabled ? 'text-white/80' : 'text-white'}`} style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
              {text}
            </p>
          </motion.div>

          <motion.div
            animate={{ opacity: isConfirmed ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <p className="font-['Inter_Variable:SemiBold',sans-serif] font-medium h-[24px] leading-[25px] text-[20px] text-center text-white tracking-[-0.34px]" style={{ fontFamily: "'Inter_Variable:SemiBold', sans-serif", fontWeight: 500, fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
              {confirmedText}
            </p>
          </motion.div>

          {!isConfirmed && !disabled && (
            <motion.div
              drag="x"
              style={{ x }}
              dragConstraints={{ left: 0, right: maxDrag }}
              dragElastic={0.1}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
              className="absolute left-0 top-0 h-full w-[80px] flex items-center justify-center cursor-grab active:cursor-grabbing z-10"
            >
              <motion.div
                className="w-[18.667px] h-[18.672px] relative ml-[28px] mr-[33px]"
                animate={justEnabled ? { x: [0, 10, 0, 6, 0] } : { x: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              >
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6667 18.6721">
                  <g id="arrows">
                    <path d={svgPaths.p1a759b80} fill="var(--fill-0, white)" id="Vector" />
                    <path d={svgPaths.p39e3cdc0} fill="var(--fill-0, white)" id="Vector_2" />
                  </g>
                </svg>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

function Frame5({ onConfirm, text, confirmedText, resetKey, disabled, validate }: { onConfirm: () => void, text: string, confirmedText: string, resetKey?: string, disabled?: boolean, validate?: () => boolean }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full z-[30]">
      <Frame3 onConfirm={onConfirm} text={text} confirmedText={confirmedText} resetKey={resetKey} disabled={disabled} validate={validate} />
    </div>
  );
}

function WalletAlertIllustration() {
  return (
    <img src={walletAlertImg} alt="" style={{ width: 200, height: 'auto', display: 'block' }} />
  );
}

function PaymentIssueSheet({ isOpen, onClose, onAskReceiver, onCancelDelivery, isDropoff }: { isOpen: boolean; onClose: () => void; onAskReceiver: () => void; onCancelDelivery: () => void; isDropoff?: boolean }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 z-[60] pointer-events-auto"
            style={{ background: 'rgba(0,0,0,0.5)' }}
            onClick={onClose}
          />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.38, ease: [0.32, 0.72, 0, 1] }}
            className="absolute bottom-0 left-0 w-full z-[61] pointer-events-auto"
            style={{
              display: 'flex',
              width: '100%',
              paddingTop: 48,
              flexDirection: 'column',
              alignItems: 'flex-start',
              borderRadius: '16px 16px 0 0',
              background: '#FFF',
              boxShadow: '0 6px 24px 0 rgba(0,0,0,0.24)',
              position: 'absolute',
            }}
          >
            {/* Drag handle — absolute so it sits above the 48px padding area */}
            <div style={{ position: 'absolute', top: 8, left: 0, right: 0, display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: 36, height: 5, borderRadius: 100, background: 'rgba(73,93,122,0.14)' }} />
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              style={{
                position: 'absolute', top: 16, right: 16,
                width: 36, height: 36, borderRadius: '50%',
                background: '#EBEBEB', border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1L13 13M13 1L1 13" stroke="#6B7280" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>

            {/* Content — full width, centred children */}
            <div style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              width: '100%',
              padding: '0 24px',
              paddingBottom: 16,
            }}>
              {/* Illustration */}
              <div style={{ marginBottom: 32 }}>
                <WalletAlertIllustration />
              </div>

              {/* Title */}
              <p style={{
                fontFamily: "'Inter Variable', Inter, sans-serif",
                fontSize: 26,
                fontWeight: 700,
                lineHeight: '34px',
                letterSpacing: '-0.5px',
                color: '#191F1C',
                textAlign: 'center',
                margin: '0 0 12px',
                fontFeatureSettings: "'cv03', 'cv04'",
              }}>
                No payment received?
              </p>

              {/* Body */}
              <p style={{
                fontFamily: "'Inter Variable', Inter, sans-serif",
                fontSize: 15,
                fontWeight: 400,
                lineHeight: '22px',
                letterSpacing: '-0.1px',
                color: '#6B7A8D',
                textAlign: 'center',
                margin: '0 0 32px',
                fontFeatureSettings: "'cv03', 'cv04'",
              }}>
                {isDropoff
                  ? 'If the receiver doesn\'t pay, contact the support'
                  : 'If the sender doesn\'t pay, you can ask the receiver to pay instead. If they refuse, you can cancel the delivery without consequences.'}
              </p>

              {!isDropoff && (
                <button
                  onClick={onAskReceiver}
                  style={{
                    width: '100%', height: 56, borderRadius: 100,
                    background: '#EBEBEB', border: 'none', cursor: 'pointer',
                    marginBottom: 12,
                    fontFamily: "'Inter Variable:SemiBold', sans-serif",
                    fontSize: 18, fontWeight: 650,
                    lineHeight: '22px',
                    letterSpacing: '-0.252px',
                    color: '#2A313C',
                    fontFeatureSettings: "'cv03' on, 'cv04' on",
                  }}
                >
                  Continue delivery
                </button>
              )}

              <button
                onClick={isDropoff ? onClose : onCancelDelivery}
                style={{
                  width: '100%', height: 56, borderRadius: 100,
                  background: '#EE3333', border: 'none', cursor: 'pointer',
                  fontFamily: "'Inter Variable', Inter, sans-serif",
                  fontSize: 17, fontWeight: 600,
                  letterSpacing: '-0.2px',
                  color: '#fff',
                  fontFeatureSettings: "'cv03', 'cv04'",
                }}
              >
                {isDropoff ? 'Contact support' : 'Cancel delivery'}
              </button>
            </div>

            {/* Home indicator */}
            <div style={{ display: 'flex', width: '100%', justifyContent: 'center', paddingTop: 12, paddingBottom: 8 }}>
              <div style={{ width: 134, height: 5, borderRadius: 100, background: '#191F1C' }} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

const PAYMENT_CANCEL_REASONS = [
  'Sender refused to pay',
  'Wrong cash amount given by sender',
  'Sender asked to cancel the delivery',
  "Can't reach sender",
  'Other',
];

const PICKUP_CANCEL_REASONS = [
  'Sender asked to cancel the delivery',
  "Can't reach sender",
  'Receiver asked to cancel the delivery',
  'Traffic jam',
  'There is an issue with the vehicle',
  'Other',
];

const WAITING_CANCEL_REASONS = [
  "This parcel isn't suitable for delivery",
  'Sender asked to cancel the delivery',
  "Can't reach sender",
  'Sender is not at pickup location',
  'Receiver asked to cancel the delivery',
  'There is an issue with the vehicle',
  'Other',
];

const PARCEL_NOT_SUITABLE_REASONS = [
  "Package is too large or too heavy",
  "Item is fragile or poorly packaged",
  "Contains prohibited or restricted items",
  "Packaging is damaged or unsafe",
  "Parcel not ready for pickup",
];

const ARRIVED_CANCEL_REASONS = [
  "Can't reach receiver",
  "Recipient refuses to accept the parcel",
  "Incorrect or incomplete address",
  "Cash not ready (for cash deliveries)",
  "Excessive waiting time",
  "Can't reach sender",
  "Safety concerns at dropoff location",
];

function CancelDeliverySheet({ isOpen, onClose, onReasonSelected, reasons = PAYMENT_CANCEL_REASONS, title = 'Why do you need to cancel?', onBack }: { isOpen: boolean; onClose: () => void; onReasonSelected: (reason: string) => void; reasons?: string[]; title?: string; onBack?: () => void }) {

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 z-[70] pointer-events-auto"
            style={{ background: 'rgba(0,0,0,0.5)' }}
            onClick={onClose}
          />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.38, ease: [0.32, 0.72, 0, 1] }}
            className="absolute bottom-0 left-0 w-full z-[71] pointer-events-auto"
            style={{
              display: 'flex',
              width: '100%',
              paddingTop: 36,
              flexDirection: 'column',
              alignItems: 'stretch',
              borderRadius: '16px 16px 0 0',
              background: '#FFF',
              boxShadow: '0 6px 24px 0 rgba(0,0,0,0.24)',
              position: 'absolute',
            }}
          >
            <div style={{ position: 'absolute', top: 8, left: 0, right: 0, display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: 36, height: 5, borderRadius: 100, background: 'rgba(73,93,122,0.14)' }} />
            </div>

            <button
              onClick={onClose}
              aria-label="Close"
              style={{
                position: 'absolute', top: 16, right: 16,
                width: 36, height: 36, borderRadius: '50%',
                background: '#EBEBEB', border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1L13 13M13 1L1 13" stroke="#6B7280" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>

            <div style={{ padding: '0 24px' }}>
              <p style={{
                fontFamily: "'Inter Variable', Inter, sans-serif",
                fontSize: 24,
                fontWeight: 700,
                lineHeight: '30px',
                letterSpacing: '-0.48px',
                color: '#191F1C',
                margin: 0,
                fontFeatureSettings: "'cv03', 'cv04'",
              }}>
                {title}
              </p>
            </div>

            <div style={{ padding: '8px 12px 8px', display: 'flex', flexDirection: 'column' }}>
              {reasons.map((r, i) => (
                <button
                  key={r}
                  onClick={() => onReasonSelected(r)}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '16px 12px',
                    background: 'transparent', border: 'none',
                    borderBottom: i < reasons.length - 1 ? '1px solid #EDEFF2' : 'none',
                    cursor: 'pointer',
                    borderRadius: 0,
                    textAlign: 'left',
                    fontFamily: "'Inter Variable', Inter, sans-serif",
                    fontSize: 16,
                    fontWeight: 500,
                    lineHeight: '22px',
                    letterSpacing: '-0.15px',
                    color: '#191F1C',
                    fontFeatureSettings: "'cv03', 'cv04'",
                  }}
                >
                  <span>{r}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M9 6 L15 12 L9 18" stroke="#6B7A8D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              ))}
            </div>

            {onBack && (
              <div style={{ padding: '12px 24px 12px' }}>
                <button
                  onClick={onBack}
                  style={{
                    width: '100%', height: 56, borderRadius: 100,
                    background: '#EBEBEB', border: 'none', cursor: 'pointer',
                    fontFamily: "'Inter Variable:SemiBold', sans-serif",
                    fontSize: 18, fontWeight: 650,
                    lineHeight: '22px',
                    letterSpacing: '-0.252px',
                    color: '#2A313C',
                    fontFeatureSettings: "'cv03' on, 'cv04' on",
                  }}
                >
                  Back
                </button>
              </div>
            )}

            <style>{`@media (pointer: coarse), (max-width: 639px) { .cancel-sheet-home-indicator { display: none !important; } }`}</style>
            <div className="cancel-sheet-home-indicator" style={{ display: 'flex', width: '100%', justifyContent: 'center', paddingTop: 8, paddingBottom: 8 }}>
              <div style={{ width: 134, height: 5, borderRadius: 100, background: '#191F1C' }} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function KeypadButton({ digit, letters, onPress }: { digit: string; letters?: string; onPress: (d: string) => void }) {
  return (
    <button
      onClick={() => onPress(digit)}
      className="relative bg-white rounded-[5px] h-[46px] flex flex-col items-center justify-center cursor-pointer border-none active:bg-[#B4BEC8] transition-colors"
      style={{
        boxShadow: '0 1px 0 rgba(0,0,0,0.35)',
        fontFamily: "-apple-system, 'SF Pro Display', 'SF Pro', 'Inter Variable', Inter, sans-serif",
      }}
    >
      <span
        style={{
          fontSize: 25,
          fontWeight: 400,
          lineHeight: letters ? '28px' : '30px',
          color: '#000000',
          letterSpacing: '-0.3px',
        }}
      >
        {digit}
      </span>
      {letters && (
        <span
          style={{
            fontSize: 10,
            fontWeight: 500,
            lineHeight: '10px',
            color: '#000000',
            letterSpacing: '2px',
            marginTop: 1,
          }}
        >
          {letters}
        </span>
      )}
    </button>
  );
}

function CantFindCodeScreen({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
      className="absolute inset-0 z-[160] bg-[#F3F4F6] flex flex-col pointer-events-auto overflow-hidden"
    >
      <div className="relative w-full shrink-0">
        <img src={pinHandTopImg} alt="" className="block w-full h-auto" />
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute bg-transparent border-none cursor-pointer active:opacity-70"
          style={{
            top: '11%',
            left: '5%',
            width: '18%',
            aspectRatio: '1 / 1',
            borderRadius: '50%',
          }}
        />
      </div>

      <div className="px-6 mt-5">
        <h1
          className="m-0 mb-6"
          style={{
            fontFamily: "'Inter Variable', Inter, sans-serif",
            fontSize: 30,
            fontWeight: 700,
            lineHeight: '36px',
            letterSpacing: '-0.6px',
            color: '#191F1C',
            fontFeatureSettings: "'cv03', 'cv04'",
          }}
        >
          Ask the receiver to check the tracking link
        </h1>
        <p
          className="m-0"
          style={{
            fontFamily: "'Inter Variable', Inter, sans-serif",
            fontSize: 16,
            fontWeight: 400,
            lineHeight: '22px',
            letterSpacing: '-0.15px',
            color: '#191F1C',
            fontFeatureSettings: "'cv03', 'cv04'",
          }}
        >
          The PIN code was sent to both the sender and receiver. If the receiver can't find it, ask the sender to share the delivery details again.
        </p>
      </div>

      <div className="flex-1" />

      <div
        className="px-4 pt-4 bg-[#F3F4F6]"
        style={{
          paddingBottom: 'calc(16px + env(safe-area-inset-bottom))',
          boxShadow: '0 -4px 12px rgba(0,0,0,0.06)',
        }}
      >
        <button
          onClick={onClose}
          className="w-full h-[56px] rounded-[100px] bg-[rgba(73,93,122,0.08)] border-none cursor-pointer active:opacity-85"
          style={{
            fontFamily: "'Inter Variable', Inter, sans-serif",
            fontSize: 17,
            fontWeight: 650,
            color: '#191F1C',
            letterSpacing: '-0.2px',
            fontFeatureSettings: "'cv03', 'cv04'",
          }}
        >
          Close
        </button>
      </div>
    </motion.div>
  );
}

function QwertyKeyboard({ onKey, onBackspace, onSpace, onReturn }: { onKey: (ch: string) => void; onBackspace: () => void; onSpace: () => void; onReturn: () => void }) {
  const [shiftOn, setShiftOn] = useState(false);
  const row1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  const row2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
  const row3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
  const keyStyle = {
    boxShadow: '0 1px 0 rgba(0,0,0,0.35)',
    fontFamily: "-apple-system, 'SF Pro Display', 'SF Pro', 'Inter Variable', Inter, sans-serif",
    fontSize: 22,
    fontWeight: 400,
    color: '#000000',
    border: 'none',
    cursor: 'pointer',
  } as const;
  const modKeyStyle = {
    boxShadow: '0 1px 0 rgba(0,0,0,0.35)',
    fontFamily: "-apple-system, 'SF Pro Display', 'SF Pro', 'Inter Variable', Inter, sans-serif",
    fontSize: 16,
    fontWeight: 500,
    color: '#000000',
    border: 'none',
    cursor: 'pointer',
  } as const;

  const handleLetterClick = (k: string) => {
    onKey(shiftOn ? k.toUpperCase() : k);
    if (shiftOn) setShiftOn(false);
  };

  // Prevent input from blurring when tapping a key
  const preventBlur = (e: React.PointerEvent | React.MouseEvent) => e.preventDefault();

  const label = (k: string) => (shiftOn ? k.toUpperCase() : k);

  return (
    <motion.div
      key="qwerty"
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
      className="absolute bottom-0 left-0 right-0 z-[190] bg-[#CCD0D6]"
      style={{ padding: '32px 3px 0', paddingBottom: 'env(safe-area-inset-bottom)' }}
      onPointerDown={preventBlur}
      onMouseDown={preventBlur}
    >
      <div className="grid grid-cols-10 gap-[6px]">
        {row1.map((k) => (
          <button
            key={k}
            onClick={() => handleLetterClick(k)}
            onPointerDown={preventBlur}
            onMouseDown={preventBlur}
            className="bg-white rounded-[5px] h-[42px] flex items-center justify-center active:bg-[#B4BEC8] transition-colors"
            style={keyStyle}
          >
            {label(k)}
          </button>
        ))}
      </div>
      <div className="flex gap-[6px] mt-[8px]" style={{ paddingLeft: '5%', paddingRight: '5%' }}>
        {row2.map((k) => (
          <button
            key={k}
            onClick={() => handleLetterClick(k)}
            onPointerDown={preventBlur}
            onMouseDown={preventBlur}
            className="flex-1 bg-white rounded-[5px] h-[42px] flex items-center justify-center active:bg-[#B4BEC8] transition-colors"
            style={keyStyle}
          >
            {label(k)}
          </button>
        ))}
      </div>
      <div className="flex gap-[6px] mt-[8px]">
        <button
          onClick={() => setShiftOn((s) => !s)}
          onPointerDown={preventBlur}
          onMouseDown={preventBlur}
          className="rounded-[5px] h-[42px] flex items-center justify-center active:opacity-80 transition-colors"
          style={{ ...modKeyStyle, width: '13%', background: shiftOn ? '#FFFFFF' : '#ADB3BC' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 4 L4 12 L8 12 L8 20 L16 20 L16 12 L20 12 Z" stroke="#000" strokeWidth="1.6" fill="none" strokeLinejoin="round" />
          </svg>
        </button>
        {row3.map((k) => (
          <button
            key={k}
            onClick={() => handleLetterClick(k)}
            onPointerDown={preventBlur}
            onMouseDown={preventBlur}
            className="flex-1 bg-white rounded-[5px] h-[42px] flex items-center justify-center active:bg-[#B4BEC8] transition-colors"
            style={keyStyle}
          >
            {label(k)}
          </button>
        ))}
        <button
          onClick={onBackspace}
          onPointerDown={preventBlur}
          onMouseDown={preventBlur}
          className="bg-[#ADB3BC] rounded-[5px] h-[42px] flex items-center justify-center active:bg-[#95999F] transition-colors"
          style={{ ...modKeyStyle, width: '13%' }}
          aria-label="Backspace"
        >
          <svg width="20" height="14" viewBox="0 0 26 20" fill="none">
            <path d="M9 0.5 L23.5 0.5 Q25.5 0.5 25.5 2.5 L25.5 17.5 Q25.5 19.5 23.5 19.5 L9 19.5 L0.7 10 Z" stroke="#000" strokeWidth="1.3" fill="none" strokeLinejoin="round" />
            <path d="M13 6.5 L19 13.5 M19 6.5 L13 13.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <div className="flex gap-[6px] mt-[8px]">
        <button
          onPointerDown={preventBlur}
          onMouseDown={preventBlur}
          className="bg-[#ADB3BC] rounded-[5px] h-[42px] flex items-center justify-center"
          style={{ ...modKeyStyle, width: '16%' }}
        >
          123
        </button>
        <button
          onPointerDown={preventBlur}
          onMouseDown={preventBlur}
          className="bg-[#ADB3BC] rounded-[5px] h-[42px] flex items-center justify-center"
          style={{ ...modKeyStyle, width: '10%' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="#000" strokeWidth="1.5" fill="none" />
          </svg>
        </button>
        <button
          onClick={onSpace}
          onPointerDown={preventBlur}
          onMouseDown={preventBlur}
          className="flex-1 bg-white rounded-[5px] h-[42px] flex items-center justify-center active:bg-[#B4BEC8] transition-colors"
          style={keyStyle}
        >
          <span style={{ fontSize: 14, color: '#000' }}>space</span>
        </button>
        <button
          onClick={onReturn}
          onPointerDown={preventBlur}
          onMouseDown={preventBlur}
          className="bg-[#ADB3BC] rounded-[5px] h-[42px] flex items-center justify-center active:bg-[#95999F] transition-colors"
          style={{ ...modKeyStyle, width: '18%' }}
        >
          return
        </button>
      </div>
      <div className="flex justify-center pt-[32px] pb-[8px]">
        <div className="w-[134px] h-[5px] rounded-full bg-black" />
      </div>
    </motion.div>
  );
}

function ChatScreen({ contactName, onClose }: { contactName: string; onClose: () => void }) {
  const firstName = contactName.split(' ')[0];
  const initials = contactName.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase();
  const messages = [
    { from: 'them', text: `Hi! This is ${firstName} 👋` },
    { from: 'me', text: "Hey! I'm on my way to pick up the parcel" },
    { from: 'them', text: 'Great, thanks! Give me a call when you are close.' },
    { from: 'me', text: 'Sure, see you soon!' },
  ];

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
      className="absolute inset-0 z-[220] flex flex-col bg-white pointer-events-auto"
    >
      <div className="pt-[44px] px-4 pb-3 flex items-center gap-3 border-b border-[rgba(73,93,122,0.12)]">
        <button
          onClick={onClose}
          aria-label="Close"
          className="size-9 rounded-full flex items-center justify-center bg-[rgba(73,93,122,0.08)] border-none cursor-pointer active:opacity-70"
        >
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
            <path d="M4 4 L16 16 M16 4 L4 16" stroke="#191F1C" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <div
          className="size-9 rounded-full flex items-center justify-center shrink-0"
          style={{ background: 'rgba(73,93,122,0.14)' }}
        >
          <span
            style={{
              fontFamily: "'Inter Variable', Inter, sans-serif",
              fontSize: 13,
              fontWeight: 650,
              color: '#2A313C',
            }}
          >
            {initials}
          </span>
        </div>
        <div className="flex flex-col min-w-0">
          <p
            className="m-0 truncate"
            style={{
              fontFamily: "'Inter Variable', Inter, sans-serif",
              fontSize: 16,
              fontWeight: 650,
              lineHeight: '20px',
              color: '#191F1C',
            }}
          >
            {contactName}
          </p>
          <p
            className="m-0"
            style={{
              fontFamily: "'Inter Variable', Inter, sans-serif",
              fontSize: 12,
              fontWeight: 400,
              lineHeight: '16px',
              color: '#6B7A8D',
            }}
          >
            online
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-2" style={{ touchAction: 'pan-y', overscrollBehavior: 'contain' }}>
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.from === 'me' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[78%] px-3 py-2 rounded-[18px] ${m.from === 'me' ? 'bg-[#32BB78] text-white' : 'bg-[rgba(73,93,122,0.08)] text-[#191F1C]'}`}
              style={{
                fontFamily: "'Inter Variable', Inter, sans-serif",
                fontSize: 15,
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '-0.1px',
              }}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>

      <div
        className="px-3 pt-2 border-t border-[rgba(73,93,122,0.12)] bg-white"
        style={{ paddingBottom: 'calc(12px + env(safe-area-inset-bottom))' }}
      >
        <div className="flex items-center gap-2">
          <div
            className="flex-1 rounded-[20px] bg-[rgba(73,93,122,0.08)] px-4 py-2"
            style={{
              fontFamily: "'Inter Variable', Inter, sans-serif",
              fontSize: 15,
              color: '#6B7A8D',
              minHeight: 40,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Message…
          </div>
          <button
            aria-label="Send"
            className="size-10 rounded-full bg-[#32BB78] flex items-center justify-center border-none cursor-pointer active:opacity-80"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M2 21L23 12 2 3v7l15 2-15 2z" fill="white" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function CallScreen({ contactName, onEnd }: { contactName: string; onEnd: () => void }) {
  const initials = contactName.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase();

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
      className="absolute inset-0 z-[220] flex flex-col items-center pointer-events-auto"
      style={{ background: 'linear-gradient(180deg, #4A5362 0%, #1E2634 100%)' }}
    >
      <div className="pt-[88px] flex flex-col items-center text-white">
        <p
          style={{
            fontFamily: "'Inter Variable', Inter, sans-serif",
            fontSize: 17,
            fontWeight: 400,
            lineHeight: '22px',
            letterSpacing: '-0.2px',
            color: 'rgba(255,255,255,0.7)',
            margin: 0,
          }}
        >
          calling…
        </p>
        <h1
          style={{
            fontFamily: "'Inter Variable', Inter, sans-serif",
            fontSize: 32,
            fontWeight: 600,
            lineHeight: '38px',
            letterSpacing: '-0.5px',
            color: '#FFFFFF',
            margin: '12px 0 0',
          }}
        >
          {contactName}
        </h1>
      </div>

      <div
        className="mt-[56px] size-[140px] rounded-full flex items-center justify-center"
        style={{ background: 'rgba(255,255,255,0.12)' }}
      >
        <span
          style={{
            fontFamily: "'Inter Variable', Inter, sans-serif",
            fontSize: 52,
            fontWeight: 500,
            color: '#FFFFFF',
            letterSpacing: '-1px',
          }}
        >
          {initials}
        </span>
      </div>

      <div className="flex-1" />

      <div className="flex flex-col items-center" style={{ paddingBottom: 'calc(60px + env(safe-area-inset-bottom))' }}>
        <motion.button
          onClick={onEnd}
          whileTap={{ scale: 0.94 }}
          className="size-[72px] rounded-full flex items-center justify-center cursor-pointer border-none active:opacity-80"
          style={{ background: '#FF3B30' }}
          aria-label="End call"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" style={{ transform: 'rotate(135deg)' }}>
            <path
              d="M5.12 2.78a2 2 0 0 1 1.92 1.44l.57 1.92a2 2 0 0 1-.5 2L5.97 9.32a14 14 0 0 0 6.7 6.7l1.18-1.18a2 2 0 0 1 2-.5l1.92.57a2 2 0 0 1 1.44 1.92v2.52a2 2 0 0 1-2.13 2 19 19 0 0 1-17.5-17.5 2 2 0 0 1 2-2.13h2.52z"
              fill="white"
            />
          </svg>
        </motion.button>
        <span
          style={{
            fontFamily: "'Inter Variable', Inter, sans-serif",
            fontSize: 14,
            fontWeight: 400,
            color: '#FFFFFF',
            marginTop: 10,
          }}
        >
          End
        </span>
      </div>
    </motion.div>
  );
}

function RatingScreen({ onConfirm }: { onConfirm: () => void }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [fieldError, setFieldError] = useState(false);
  const [isCommentFocused, setIsCommentFocused] = useState(false);
  const commentRequired = rating > 0 && rating < 5;
  const enabled = rating > 0;

  const handleConfirm = () => {
    if (!enabled) return;
    if (commentRequired && comment.trim().length === 0) {
      setFieldError(true);
      return;
    }
    onConfirm();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
      className="absolute inset-0 z-[180] bg-white flex flex-col pointer-events-auto"
    >
      <div className="pointer-events-none absolute top-0 left-0 w-full z-[1]">
        <StatusBarIOs />
      </div>

      <div className="pt-[72px] px-6">
        <h1
          className="m-0 text-center"
          style={{
            fontFamily: "'Inter Variable', Inter, sans-serif",
            fontSize: 28,
            fontWeight: 700,
            lineHeight: '34px',
            letterSpacing: '-0.56px',
            color: '#191F1C',
            fontFeatureSettings: "'cv03', 'cv04'",
          }}
        >
          How was the delivery?
        </h1>
      </div>

      <div className="flex justify-center gap-[10px] mt-8">
        {[1, 2, 3, 4, 5].map((i) => (
          <button
            key={i}
            onClick={() => { setRating(i); if (fieldError) setFieldError(false); }}
            aria-label={`Rate ${i} star${i > 1 ? 's' : ''}`}
            className="bg-transparent border-none cursor-pointer active:opacity-70 p-0"
          >
            <motion.div
              animate={{
                scale: i <= rating ? 1.08 : 1,
                backgroundColor: i <= rating ? '#F58300' : '#D1D5D9',
              }}
              transition={{ scale: { type: 'spring', stiffness: 400, damping: 18 }, backgroundColor: { duration: 0.15 } }}
              style={{
                width: 48,
                height: 48,
                WebkitMaskImage: `url(${starImg})`,
                maskImage: `url(${starImg})`,
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
              }}
            />
          </button>
        ))}
      </div>

      <div className="px-6 mt-8">
        <input
          type="text"
          value={comment}
          onChange={(e) => { setComment(e.target.value); if (fieldError) setFieldError(false); }}
          onFocus={() => setIsCommentFocused(true)}
          onBlur={() => setIsCommentFocused(false)}
          placeholder="Add a comment"
          className="w-full h-[60px] rounded-[12px] bg-[rgba(73,93,122,0.08)] px-4 outline-none transition-colors duration-150"
          style={{
            fontFamily: "'Inter Variable', Inter, sans-serif",
            fontSize: 17,
            lineHeight: '24px',
            color: '#191F1C',
            border: fieldError ? '2px solid #EB4755' : '2px solid transparent',
          }}
        />
        <AnimatePresence initial={false}>
          {fieldError && (
            <motion.div
              key="rating-err"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
              className="mt-3 flex items-center gap-2"
              role="alert"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
                <path
                  d="M7.71 2.31 L0.82 14.25 C0.18 15.36 0.98 16.75 2.26 16.75 L15.74 16.75 C17.02 16.75 17.82 15.36 17.18 14.25 L10.29 2.31 C9.65 1.2 8.35 1.2 7.71 2.31 Z"
                  fill="#C91D2B"
                />
                <rect x="8.1" y="6.2" width="1.8" height="5.4" rx="0.9" fill="white" />
                <circle cx="9" cy="13.5" r="1" fill="white" />
              </svg>
              <p
                className="m-0"
                style={{
                  fontFamily: "'Inter Variable', Inter, sans-serif",
                  fontSize: 14,
                  fontWeight: 500,
                  lineHeight: '20px',
                  letterSpacing: '-0.1px',
                  color: '#C91D2B',
                  fontFeatureSettings: "'cv03', 'cv04'",
                }}
              >
                Required
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex-1" />

      <div
        className="px-3"
        style={{
          paddingTop: 16,
          paddingBottom: 'calc(16px + env(safe-area-inset-bottom))',
          boxShadow: enabled ? 'none' : '0 -4px 12px rgba(0,0,0,0.04)',
        }}
      >
        <motion.button
          onClick={handleConfirm}
          whileTap={enabled ? { scale: 0.98 } : undefined}
          animate={{
            backgroundColor: enabled ? '#32BB78' : 'rgba(73,93,122,0.08)',
            color: enabled ? '#FFFFFF' : 'rgba(25,31,28,0.35)',
          }}
          transition={{ duration: 0.2 }}
          className="w-full h-[56px] rounded-[100px] border-none"
          style={{
            cursor: enabled ? 'pointer' : 'default',
            fontFamily: "'Inter Variable', Inter, sans-serif",
            fontSize: 17,
            fontWeight: 650,
            letterSpacing: '-0.2px',
            fontFeatureSettings: "'cv03', 'cv04'",
          }}
        >
          Confirm
        </motion.button>
      </div>

      <style>{`@media (pointer: coarse), (max-width: 639px) { .rating-custom-keyboard { display: none !important; } }`}</style>
      <div className="rating-custom-keyboard">
        <AnimatePresence>
          {isCommentFocused && (
            <QwertyKeyboard
              onKey={(ch) => { setComment((c) => c + ch); if (fieldError) setFieldError(false); }}
              onSpace={() => { setComment((c) => c + ' '); }}
              onBackspace={() => { setComment((c) => c.slice(0, -1)); }}
              onReturn={() => { setIsCommentFocused(false); }}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function PinCodeScreen({ onClose, onComplete }: { onClose: () => void; onComplete: () => void }) {
  const [pin, setPin] = useState('');
  const [errorShown, setErrorShown] = useState(false);
  const [isCantFindCodeOpen, setIsCantFindCodeOpen] = useState(false);
  const hiddenInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    hiddenInputRef.current?.focus();
  }, []);

  const commitPin = (next: string) => {
    setPin(next);
    if (next.length === 4) {
      if (next === '0000') {
        setErrorShown(true);
      } else {
        setTimeout(() => onComplete(), 280);
      }
    }
  };

  const handleDigit = (d: string) => {
    if (pin.length >= 4) return;
    if (errorShown) return;
    commitPin(pin + d);
  };

  const handleBackspace = () => {
    if (errorShown) {
      setPin('');
      setErrorShown(false);
      return;
    }
    setPin((p) => p.slice(0, -1));
  };

  const letters = ['', 'ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
      className="absolute inset-0 z-[150] bg-white flex flex-col pointer-events-auto overflow-hidden"
      style={{ boxShadow: '-8px 0 24px rgba(0,0,0,0.12)' }}
    >
      <div className="pointer-events-none absolute top-0 left-0 w-full z-[1]">
        <StatusBarIOs />
      </div>

      <style>{`@media (pointer: coarse), (max-width: 639px) { .pin-screen-top { padding-top: 30px !important; } }`}</style>
      <>
        <div className="pin-screen-top pt-[54px] px-6">
          <button
            onClick={onClose}
            aria-label="Back"
            className="size-10 -ml-2 flex items-center justify-center bg-transparent border-none cursor-pointer active:opacity-60"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M15 6 L9 12 L15 18" stroke="#191F1C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <h1
            className="m-0 mt-2"
            style={{
              fontFamily: "'Inter Variable', Inter, sans-serif",
              fontSize: 28,
              fontWeight: 700,
              lineHeight: '34px',
              letterSpacing: '-0.56px',
              color: '#191F1C',
              fontFeatureSettings: "'cv03', 'cv04'",
            }}
          >
            Enter PIN code
          </h1>
        </div>

        <motion.div
          className="px-6 mt-6 flex gap-3 cursor-text"
          animate={errorShown ? { x: [0, -8, 8, -6, 6, -3, 3, 0] } : { x: 0 }}
          transition={errorShown ? { duration: 0.5, ease: 'easeInOut' } : { duration: 0 }}
          onClick={() => hiddenInputRef.current?.focus()}
        >
          {[0, 1, 2, 3].map((i) => {
            const isActive = !errorShown && i === pin.length;
            const isError = errorShown;
            return (
              <div
                key={i}
                className="flex-1 h-[72px] rounded-[14px] flex items-center justify-center transition-colors duration-150"
                style={{
                  background: isError ? '#FFFFFF' : isActive ? '#FFFFFF' : '#F1F3F5',
                  border: isError ? '3px solid #EB4755' : isActive ? '3px solid #1D965C' : '3px solid transparent',
                  fontFamily: "'Inter Variable', Inter, sans-serif",
                  fontSize: 28,
                  fontWeight: 650,
                  color: '#191F1C',
                }}
              >
                {pin[i] ?? ''}
              </div>
            );
          })}
        </motion.div>

        <AnimatePresence initial={false}>
          {errorShown && (
            <motion.div
              key="pin-error"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
              className="px-6 mt-3 flex items-center gap-2"
              role="alert"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
                <path
                  d="M7.71 2.31 L0.82 14.25 C0.18 15.36 0.98 16.75 2.26 16.75 L15.74 16.75 C17.02 16.75 17.82 15.36 17.18 14.25 L10.29 2.31 C9.65 1.2 8.35 1.2 7.71 2.31 Z"
                  fill="#C91D2B"
                />
                <rect x="8.1" y="6.2" width="1.8" height="5.4" rx="0.9" fill="white" />
                <circle cx="9" cy="13.5" r="1" fill="white" />
              </svg>
              <p
                className="m-0"
                style={{
                  fontFamily: "'Inter Variable', Inter, sans-serif",
                  fontSize: 14,
                  fontWeight: 500,
                  lineHeight: '20px',
                  letterSpacing: '-0.1px',
                  color: '#C91D2B',
                  fontFeatureSettings: "'cv03', 'cv04'",
                }}
              >
                Incorrect code
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-center mt-5">
          <button
            onClick={() => setIsCantFindCodeOpen(true)}
            className="bg-transparent border-none cursor-pointer active:opacity-70"
            style={{
              fontFamily: "'Inter Variable', Inter, sans-serif",
              fontSize: 16,
              fontWeight: 650,
              lineHeight: '22px',
              letterSpacing: '-0.2px',
              color: '#1D965C',
              fontFeatureSettings: "'cv03', 'cv04'",
            }}
          >
            Can't find code?
          </button>
        </div>

        <div className="flex-1" />

        <input
          ref={hiddenInputRef}
          type="tel"
          inputMode="numeric"
          pattern="[0-9]*"
          autoComplete="one-time-code"
          maxLength={4}
          value={pin}
          onChange={(e) => {
            const v = e.target.value.replace(/[^0-9]/g, '').slice(0, 4);
            if (errorShown) setErrorShown(false);
            commitPin(v);
          }}
          className="absolute opacity-0 pointer-events-none"
          style={{ left: -9999, top: -9999, fontSize: 16 }}
          aria-label="PIN code"
        />

        <style>{`@media (pointer: coarse), (max-width: 639px) { .pin-custom-keypad { display: none !important; } }`}</style>
        <div className="pin-custom-keypad bg-[#CCD0D6] pt-[6px] px-[3px]" style={{ paddingBottom: 'calc(48px + env(safe-area-inset-bottom))' }}>
          <div className="grid grid-cols-3 gap-[6px]">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((d, i) => (
              <KeypadButton key={d} digit={d} letters={letters[i] || undefined} onPress={handleDigit} />
            ))}
            <div />
            <KeypadButton digit="0" onPress={handleDigit} />
            <button
              onClick={handleBackspace}
              aria-label="Backspace"
              className="bg-transparent rounded-[5px] h-[46px] flex items-center justify-center cursor-pointer border-none active:bg-[rgba(0,0,0,0.1)] transition-colors"
            >
              <svg width="26" height="20" viewBox="0 0 26 20" fill="none">
                <path
                  d="M9 0.5 L23.5 0.5 Q25.5 0.5 25.5 2.5 L25.5 17.5 Q25.5 19.5 23.5 19.5 L9 19.5 L0.7 10 Z"
                  stroke="#191F1C"
                  strokeWidth="1.3"
                  fill="none"
                  strokeLinejoin="round"
                />
                <path d="M13 6.5 L19 13.5 M19 6.5 L13 13.5" stroke="#191F1C" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </>

      <AnimatePresence>
        {isCantFindCodeOpen && <CantFindCodeScreen onClose={() => setIsCantFindCodeOpen(false)} />}
      </AnimatePresence>
    </motion.div>
  );
}

function CashChipBanner({ collected, error, collectedLabel, headerText, actionLabel, errorMessage, onToggle, onActionClick, onPaymentIssue }: { collected: boolean; error?: boolean; collectedLabel?: string; headerText?: string; actionLabel?: string; errorMessage?: string; onToggle: () => void; onActionClick?: () => void; onPaymentIssue?: () => void }) {
  const bg = error ? 'rgba(224,85,85,0.12)' : collected ? 'rgba(50,187,120,0.14)' : 'rgba(255,190,0,0.20)';
  const boxStroke = error ? '#E05555' : collected ? '#32BB78' : '#F58300';

  const isLocked = Boolean(actionLabel && collected);

  return (
    <div className="w-full px-3 pt-3 flex flex-col gap-2">
      <motion.div
        role={isLocked ? undefined : 'button'}
        tabIndex={isLocked ? undefined : 0}
        onClick={isLocked ? undefined : onToggle}
        onKeyDown={isLocked ? undefined : (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onToggle(); } }}
        whileTap={isLocked ? undefined : { scale: 0.985 }}
        animate={error
          ? { backgroundColor: bg, x: [0, -8, 8, -6, 6, -3, 3, 0] }
          : { backgroundColor: bg, x: 0 }
        }
        transition={error
          ? { backgroundColor: { duration: 0.2 }, x: { duration: 0.5, ease: 'easeInOut' } }
          : { backgroundColor: { duration: 0.25, ease: 'easeOut' } }
        }
        className={`w-full rounded-[14px] px-4 py-3 flex items-center gap-4 text-left select-none outline-none ${isLocked ? 'cursor-default' : 'cursor-pointer'}`}
      >
        {/* Left: hero amount + inline action */}
        <div className="flex-1 flex flex-col min-w-0">
          <p
            className={`font-['Inter_Variable:SemiBold',sans-serif] font-[650] text-[#191F1C] m-0 tracking-[-0.4px] ${headerText ? 'text-[16px] leading-[22px]' : 'text-[18px] leading-[22px]'}`}
            style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}
          >
            {headerText ?? (collected ? '18.92 € collected' : 'Collect 18.92 €')}
          </p>
          <AnimatePresence mode="wait" initial={false}>
            {collected && collectedLabel !== '' ? (
              <motion.p
                key="done"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18 }}
                className="font-['Inter_Variable:Regular',sans-serif] font-[450] text-[13px] leading-[18px] text-[#6B7A8D] m-0 mt-0.5"
                style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}
              >
                {collectedLabel ?? "You're all set"}
              </motion.p>
            ) : !collected && onPaymentIssue ? (
              <motion.button
                key="issue"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0, color: error ? '#E05555' : '#F58300' }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18, color: { duration: 0.18 } }}
                onClick={(e) => { e.stopPropagation(); onPaymentIssue(); }}
                onPointerDown={(e) => e.stopPropagation()}
                className="self-start font-['Inter_Variable:SemiBold',sans-serif] text-[13px] font-[650] active:opacity-70 bg-transparent border-none cursor-pointer p-0 mt-0.5"
                style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}
              >
                Payment issue?
              </motion.button>
            ) : null}
          </AnimatePresence>
        </div>

        {/* Right: action button or checkbox affordance */}
        {actionLabel && !collected ? (
          <motion.button
            onClick={(e) => { e.stopPropagation(); (onActionClick ?? onToggle)(); }}
            onPointerDown={(e) => e.stopPropagation()}
            whileTap={{ scale: 0.96 }}
            animate={{ color: error ? '#E05555' : '#32BB78' }}
            transition={{ duration: 0.2 }}
            className="shrink-0 h-[36px] rounded-[100px] px-4 flex items-center justify-center bg-transparent border-none cursor-pointer active:opacity-70"
            style={{ fontFamily: "'Inter_Variable:SemiBold', sans-serif", fontWeight: 650, fontSize: 14, lineHeight: '18px', fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}
          >
            {actionLabel}
          </motion.button>
        ) : actionLabel && collected ? null : (
          <motion.div
            className="shrink-0 size-[32px] rounded-[8px] flex items-center justify-center"
            animate={{
              backgroundColor: collected ? '#32BB78' : 'rgba(255,255,255,0)',
              borderColor: collected ? '#32BB78' : boxStroke,
            }}
            transition={{ duration: 0.2 }}
            style={{ borderWidth: error ? 2.5 : 2, borderStyle: 'solid' }}
          >
            <motion.svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              initial={false}
              animate={{ opacity: collected ? 1 : 0, scale: collected ? 1 : 0.6 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <motion.path
                d="M3 9.5 L7.5 14 L15 5.5"
                stroke="white"
                strokeWidth={2.6}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={false}
                animate={{ pathLength: collected ? 1 : 0 }}
                transition={{ duration: 0.28, ease: 'easeOut', delay: collected ? 0.06 : 0 }}
              />
            </motion.svg>
          </motion.div>
        )}
      </motion.div>

      <AnimatePresence initial={false}>
        {error && !collected && (
          <motion.div
            key="err"
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden flex items-center gap-1.5 px-1"
            role="alert"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
              <circle cx="8" cy="8" r="7.3" stroke="#E05555" strokeWidth="1.4" fill="none" />
              <path d="M8 4.5v4" stroke="#E05555" strokeWidth="1.6" strokeLinecap="round" />
              <circle cx="8" cy="11" r="0.9" fill="#E05555" />
            </svg>
            <p
              className="font-['Inter_Variable:SemiBold',sans-serif] font-[650] text-[13px] leading-[18px] text-[#E05555] m-0"
              style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}
            >
              {errorMessage ?? 'Confirm cash collected before starting delivery'}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function LongPressAmount({ confirmed, onConfirm, onPaymentIssue }: { confirmed: boolean; onConfirm: () => void; onPaymentIssue: () => void }) {
  const [progress, setProgress] = useState(confirmed ? 1 : 0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const HOLD_MS = 650;

  useEffect(() => {
    if (confirmed) setProgress(1);
  }, [confirmed]);

  const cancel = () => {
    if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    startRef.current = null;
    if (!confirmed) setProgress(0);
  };

  const begin = () => {
    if (confirmed) return;
    startRef.current = performance.now();
    const tick = () => {
      const now = performance.now();
      const p = Math.min((now - (startRef.current ?? now)) / HOLD_MS, 1);
      setProgress(p);
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        rafRef.current = null;
        startRef.current = null;
        onConfirm();
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  const R = 26;
  const C = 2 * Math.PI * R;

  return (
    <div className="w-full px-3 pt-3 flex flex-col gap-2 items-center">
      <div
        onPointerDown={begin}
        onPointerUp={cancel}
        onPointerLeave={cancel}
        onPointerCancel={cancel}
        className={`relative w-full rounded-[14px] px-4 py-3 flex items-center gap-4 border-none cursor-pointer select-none transition-colors duration-200 ${
          confirmed ? 'bg-[rgba(50,187,120,0.14)]' : 'bg-[rgba(245,131,0,0.12)]'
        }`}
        style={{ touchAction: 'none' }}
      >
        <div className="relative size-[64px] shrink-0 flex items-center justify-center">
          <svg width="64" height="64" viewBox="0 0 64 64" className="absolute inset-0 -rotate-90">
            <circle cx="32" cy="32" r={R} stroke={confirmed ? '#32BB78' : '#F5B54D'} strokeWidth="3" fill="none" opacity={0.25} />
            <circle
              cx="32" cy="32" r={R}
              stroke={confirmed ? '#32BB78' : '#F58300'}
              strokeWidth="3"
              fill="none"
              strokeDasharray={C}
              strokeDashoffset={C * (1 - progress)}
              strokeLinecap="round"
              style={{ transition: confirmed ? 'stroke-dashoffset 0.2s ease' : 'none' }}
            />
          </svg>
          <AnimatePresence mode="wait" initial={false}>
            {confirmed ? (
              <motion.svg key="chk" width="24" height="24" viewBox="0 0 24 24" fill="none"
                initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.22 }}
              >
                <path d="M5 12.5 L10 17.5 L19 7.5" stroke="#32BB78" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>
            ) : (
              <motion.p key="amt"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="font-['Inter_Variable:SemiBold',sans-serif] font-[650] text-[#191F1C] text-[13px] tracking-[-0.2px] m-0"
                style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}
              >
                18.92€
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <div className="flex-1">
          <p className="font-['Inter_Variable:SemiBold',sans-serif] font-[650] text-[15px] leading-[20px] text-[#191F1C] m-0" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
            {confirmed ? 'Cash collected' : 'Hold to mark collected'}
          </p>
          <p className="font-['Inter_Variable:Regular',sans-serif] text-[12px] leading-[16px] text-[#6B7A8D] m-0 mt-0.5">
            {confirmed ? 'Optional · already recorded' : 'Optional feedback · you can also just swipe'}
          </p>
        </div>
      </div>
      {!confirmed && (
        <button
          onClick={onPaymentIssue}
          className="font-['Inter_Variable:SemiBold',sans-serif] text-[#F58300] text-[14px] font-[650] active:opacity-70 bg-transparent border-none cursor-pointer py-1"
          style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}
        >
          Payment issue?
        </button>
      )}
    </div>
  );
}

function PaymentCollectedContent({ onStartDelivery }: { onStartDelivery?: () => void }) {
  return (
    <div style={{ width: '100%', paddingTop: 12 }}>
      <div style={{
        margin: '0 12px',
        background: '#E0FFF0', borderRadius: 12,
        padding: '12px 16px',
        display: 'flex', gap: 12, alignItems: 'center',
      }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
          <circle cx="12" cy="12" r="12" fill="#32BB78" />
          <path d="M7 12.5L10.5 16L17 8.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p style={{ fontFamily: "'Inter Variable', sans-serif", fontSize: 14, lineHeight: '20px', color: '#191F1C', margin: 0, fontFeatureSettings: "'cv03', 'cv04'" }}>
          Parcel and <strong style={{ fontWeight: 650 }}>18.92 €</strong> payment collected
        </p>
      </div>
      <Frame5
        resetKey="start-delivery"
        text="Start delivery"
        confirmedText="Starting..."
        onConfirm={() => onStartDelivery?.()}
      />
    </div>
  );
}

type Variant = 'current' | 'tapChip' | 'longPress';

function BottomSheetS({ isOpen, setIsOpen, isArrived, isPaymentCollected, isDelivering, isArrivedAtDropoff, isCollectingFromReceiver, variant, onCancelDelivery, onSenderCall, onReceiverCall, onSenderMessage, onReceiverMessage }: { isOpen: boolean; setIsOpen: (open: boolean) => void; isArrived: boolean; isPaymentCollected: boolean; isDelivering: boolean; isArrivedAtDropoff: boolean; isCollectingFromReceiver: boolean; variant: Variant; onCancelDelivery?: () => void; onSenderCall?: () => void; onReceiverCall?: () => void; onSenderMessage?: () => void; onReceiverMessage?: () => void }) {
  const [containerHeight, setContainerHeight] = useState(812);
  const [isScrolled, setIsScrolled] = useState(false);
  const [timeLeft, setTimeLeft] = useState(119);
  const [deliveryTimeLeft, setDeliveryTimeLeft] = useState(15 * 60);

  useEffect(() => {
    const updateHeight = () => {
      const el = document.getElementById('app-container');
      if (el) {
        setContainerHeight(el.clientHeight);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  useEffect(() => {
    if (isArrived) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isArrived]);

  useEffect(() => {
    if (isDelivering) {
      const timer = setInterval(() => {
        setDeliveryTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isDelivering]);

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  const formattedTime = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  const deliveryMins = Math.floor(deliveryTimeLeft / 60);
  const deliverySecs = deliveryTimeLeft % 60;
  const formattedDeliveryTime = `${deliveryMins.toString().padStart(2, '0')}:${deliverySecs.toString().padStart(2, '0')}`;
  const titleText = isArrivedAtDropoff ? 'Arrived' : isDelivering ? 'Delivery in 15 min' : isArrived ? `${formattedTime} Waiting` : undefined;
  const statusName = isDelivering || isArrivedAtDropoff ? 'Flington Doe' : 'Chandra Krishnamurthy';

  const DRAG_TOP = 44;
  const arrivedBottom =
    variant === 'current' ? containerHeight - 302 :
    variant === 'tapChip' ? containerHeight - 322 :
    containerHeight - 330;
  const DRAG_BOTTOM = isArrivedAtDropoff && isCollectingFromReceiver ? containerHeight - 406 : isArrivedAtDropoff ? containerHeight - 322 : isDelivering ? containerHeight - 218 : isPaymentCollected ? containerHeight - 274 : isArrived ? arrivedBottom : containerHeight - 218;

  const handleDrag = (event: any, info: any) => {
    // only used when dragging to close
    if (isOpen && info.offset.y > 50 && info.velocity.y > 100) {
      setIsOpen(false);
    }
  };

  const handleDragEnd = (event: any, info: any) => {
    if (isOpen && (info.velocity.y > 200 || info.offset.y > 50)) {
      setIsOpen(false);
    }
  };

  return (
    <motion.div 
      className="absolute content-stretch flex flex-col items-start left-0 top-0 w-full touch-none pointer-events-auto z-[10]" 
      style={{ height: `calc(100% - ${DRAG_TOP}px)` }}
      data-name="Bottom sheet / S"
      initial={{ y: DRAG_BOTTOM }}
      animate={{ y: isOpen ? DRAG_TOP : DRAG_BOTTOM }}
      transition={{ 
        y: { duration: 0.3, ease: "easeInOut" } 
      }}
      drag={isOpen ? "y" : false}
      dragConstraints={{ top: DRAG_TOP, bottom: DRAG_BOTTOM }}
      dragElastic={0.1}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      onPan={(event, info) => {
        if (!isOpen && info.offset.y < -10) {
          setIsOpen(true);
        }
      }}
    >
      <>
        <div
          className="bg-white content-stretch flex flex-col isolate items-start relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full shadow-[0px_-4px_12px_0px_rgba(0,0,0,0.12)] z-[1]"
          data-name="Delivery details"
        >
          <div className="absolute top-0 left-0 w-full pointer-events-none z-[10]">
            <div className="content-stretch flex flex-col items-center pointer-events-auto py-[6px] rounded-tl-[16px] rounded-tr-[16px]" data-name=".Bottom Sheet / Drag Handle">
              <div className="bg-[rgba(73,93,122,0.08)] h-[6px] rounded-[100px] shrink-0 w-[40px]" data-name="Bar" />
            </div>
          </div>
          <Status onToggle={() => setIsOpen(!isOpen)} isOpen={isOpen} isScrolled={isScrolled} titleText={titleText} name={statusName} />
        </div>

        <div
          className="bg-white flex-1 w-full relative pointer-events-auto overflow-y-auto overflow-x-hidden z-[2]"
          onScroll={(e) => setIsScrolled(e.currentTarget.scrollTop > 0)}
          style={{ touchAction: 'pan-y', overscrollBehavior: 'contain' }}
        >
          <div className={`sticky top-0 left-0 w-full h-[1px] -mt-[1px] pointer-events-none z-[50] transition-shadow duration-300 ${isScrolled ? 'shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)]' : 'shadow-none'}`} />
          {isOpen && (
            <div className="w-full" style={{ paddingBottom:
              isArrivedAtDropoff && isCollectingFromReceiver ? 'calc(290px + env(safe-area-inset-bottom))' :
              isArrivedAtDropoff ? 'calc(200px + env(safe-area-inset-bottom))' :
              isDelivering ? 'calc(96px + env(safe-area-inset-bottom))' :
              isPaymentCollected ? 'calc(160px + env(safe-area-inset-bottom))' :
              isArrived ? (
                variant === 'current' ? 'calc(180px + env(safe-area-inset-bottom))' :
                variant === 'tapChip' ? 'calc(200px + env(safe-area-inset-bottom))' :
                'calc(220px + env(safe-area-inset-bottom))'
              ) :
              'calc(104px + env(safe-area-inset-bottom))'
            }}>
              <DeliveryDetails
                isDelivering={isDelivering}
                onCancelDelivery={onCancelDelivery}
                onSenderCall={onSenderCall}
                onReceiverCall={onReceiverCall}
                onSenderMessage={onSenderMessage}
                onReceiverMessage={onReceiverMessage}
              />
            </div>
          )}
        </div>
      </>
    </motion.div>
  );
}

function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const submit = () => {
    if (value === "bolt2026") {
      try { localStorage.setItem("bolt-send-unlocked", "1"); } catch {}
      onUnlock();
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex h-[100dvh] w-full items-center justify-center bg-gray-100 p-6">
      <div className="flex flex-col gap-4 w-full max-w-[320px]">
        <h1 style={{ fontFamily: "'Inter Variable', sans-serif", fontWeight: 650, fontSize: 22, color: "#191F1C", margin: 0, textAlign: "center" }}>
          Bolt Send prototype
        </h1>
        <input
          type="password"
          value={value}
          autoFocus
          onChange={(e) => { setValue(e.target.value); setError(false); }}
          onKeyDown={(e) => { if (e.key === "Enter") submit(); }}
          placeholder="Password"
          style={{
            width: "100%", height: 48, borderRadius: 12,
            border: error ? "1px solid #EE3333" : "1px solid #D1D5DB",
            padding: "0 16px", fontSize: 16, outline: "none",
            fontFamily: "'Inter Variable', sans-serif",
          }}
        />
        {error && (
          <p style={{ color: "#EE3333", fontSize: 13, margin: 0, textAlign: "center", fontFamily: "'Inter Variable', sans-serif" }}>
            Incorrect password
          </p>
        )}
        <button
          onClick={submit}
          style={{
            width: "100%", height: 48, borderRadius: 12,
            background: "#32BB78", color: "white", border: "none", cursor: "pointer",
            fontFamily: "'Inter Variable', sans-serif", fontWeight: 650, fontSize: 16,
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [unlocked, setUnlocked] = useState(() => {
    try { return localStorage.getItem("bolt-send-unlocked") === "1"; } catch { return false; }
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [isArrived, setIsArrived] = useState(false);
  const [isPaymentIssueOpen, setIsPaymentIssueOpen] = useState(false);
  const [isPaymentCollected, setIsPaymentCollected] = useState(false);
  const [isDelivering, setIsDelivering] = useState(false);
  const [cashCollected, setCashCollected] = useState(false);
  const [chipError, setChipError] = useState(false);
  const [receiverPaying, setReceiverPaying] = useState(false);
  const [isCancelDeliveryOpen, setIsCancelDeliveryOpen] = useState(false);
  const [cancelReasons, setCancelReasons] = useState<string[]>(PAYMENT_CANCEL_REASONS);
  const [isParcelNotSuitableOpen, setIsParcelNotSuitableOpen] = useState(false);
  const [showCancelledBanner, setShowCancelledBanner] = useState(false);
  const [isArrivedAtDropoff, setIsArrivedAtDropoff] = useState(false);
  const [pinEntered, setPinEntered] = useState(false);
  const [isPinScreenOpen, setIsPinScreenOpen] = useState(false);
  const pinWarmupRef = useRef<HTMLInputElement | null>(null);
  const openPinScreen = () => {
    pinWarmupRef.current?.focus();
    setIsPinScreenOpen(true);
  };
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [isCollectingFromReceiver, setIsCollectingFromReceiver] = useState(false);
  const [receiverCashCollected, setReceiverCashCollected] = useState(false);
  const [callContact, setCallContact] = useState<string | null>(null);
  const [messagingContact, setMessagingContact] = useState<string | null>(null);
  const [variant, setVariant] = useState<Variant>('tapChip');
  const [restartKey, setRestartKey] = useState(0);

  useEffect(() => {
    if (!chipError) return;
    const t = setTimeout(() => setChipError(false), 2500);
    return () => clearTimeout(t);
  }, [chipError]);

  useEffect(() => {
    if (!showCancelledBanner) return;
    const t = setTimeout(() => setShowCancelledBanner(false), 10000);
    return () => clearTimeout(t);
  }, [showCancelledBanner]);

  const [bannerBottom, setBannerBottom] = useState(420);
  useEffect(() => {
    if (!showCancelledBanner || isAccepted) return;
    const measure = () => {
      const card = document.querySelector('[data-name="Acceptance Trip Card"]') as HTMLElement | null;
      const container = document.getElementById('app-container');
      if (card && container) {
        const cardRect = card.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        setBannerBottom(containerRect.bottom - cardRect.top + 4);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [showCancelledBanner, isAccepted]);

  const resetFlow = () => {
    setIsAccepted(false);
    setIsOpen(false);
    setIsArrived(false);
    setIsPaymentIssueOpen(false);
    setIsPaymentCollected(false);
    setIsDelivering(false);
    setCashCollected(false);
    setChipError(false);
    setReceiverPaying(false);
    setIsCancelDeliveryOpen(false);
    setIsParcelNotSuitableOpen(false);
    setShowCancelledBanner(false);
    setIsArrivedAtDropoff(false);
    setPinEntered(false);
    setIsPinScreenOpen(false);
    setIsRatingOpen(false);
    setIsCollectingFromReceiver(false);
    setReceiverCashCollected(false);
    setCallContact(null);
    setMessagingContact(null);
    setRestartKey(k => k + 1);
  };

  if (!unlocked) return <PasswordGate onUnlock={() => setUnlocked(true)} />;

  return (
    <div className="flex h-[100dvh] w-full sm:items-center sm:justify-center bg-white sm:bg-gray-100 relative">
      <input
        ref={pinWarmupRef}
        type="tel"
        inputMode="numeric"
        pattern="[0-9]*"
        aria-hidden="true"
        tabIndex={-1}
        className="absolute opacity-0 pointer-events-none"
        style={{ left: -9999, top: -9999, fontSize: 16 }}
      />
      {import.meta.env.DEV && (
        <>
          <button
            onClick={resetFlow}
            className="fixed top-4 right-4 z-[999] bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-gray-200 font-medium text-sm text-gray-700 hover:bg-white hover:text-black transition-colors"
          >
            Restart
          </button>

          <div className="fixed top-4 left-4 z-[999] max-w-[calc(100vw-140px)] flex flex-wrap gap-1 bg-white/85 backdrop-blur-md p-1 rounded-2xl shadow-sm border border-gray-200">
            {([
              ['current', 'Current'],
              ['tapChip', 'Tap'],
              ['longPress', 'Hold'],
            ] as const).map(([v, label]) => (
              <button
                key={v}
                onClick={() => { setVariant(v); resetFlow(); }}
                className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-colors ${
                  variant === v ? 'bg-black text-white' : 'text-gray-600 hover:text-black'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </>
      )}

      <div id="app-container" className="relative h-full w-full sm:h-[812px] sm:w-[375px] overflow-hidden bg-black sm:shadow-xl sm:rounded-[40px] sm:border-[8px] sm:border-black" style={{ touchAction: 'none', overscrollBehavior: 'none' }}>
        <AnimatePresence>
          {!isAccepted && (
            <motion.div
              key="acceptance"
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="absolute inset-0 size-full z-[100] bg-white origin-center pointer-events-auto"
            >
              <AcceptanceScreen onAccept={() => setIsAccepted(true)} />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showCancelledBanner && !isAccepted && (
            <motion.div
              key="cancelled-banner"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="absolute left-3 right-3 z-[200] pointer-events-none"
              style={{ bottom: bannerBottom }}
            >
              <div className="bg-[#1A1F27] rounded-[12px] px-5 py-3.5 flex items-center">
                <p
                  className="font-['Inter_Variable:SemiBold',sans-serif] font-[650] text-[16px] leading-[22px] text-white m-0 tracking-[-0.2px]"
                  style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}
                >
                  Delivery cancelled
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="relative size-full bg-white origin-center"
          data-name="Active delivery"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: isAccepted ? 1 : 0,
            scale: isAccepted ? 1 : 0.95
          }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        >
          <div className="absolute top-0 left-0 w-full z-[50] pointer-events-none">
            <StatusBarIOs />
          </div>
          <AnimatePresence mode="wait">
            {(isDelivering || isArrivedAtDropoff) ? (
              <motion.img
                key="map-area"
                src={rideDetailsImg}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            ) : (
              <motion.img
                key="active-delivery"
                src={activeDeliveryImg}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/50 z-[5] cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            )}
          </AnimatePresence>
          
          <motion.div
            initial={{ y: 224 }}
            animate={{ y: isAccepted ? 0 : 224 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0 size-full pointer-events-none z-[10]"
          >
            <BottomSheetS key={restartKey} isOpen={isOpen} setIsOpen={setIsOpen} isArrived={isArrived} isPaymentCollected={isPaymentCollected} isDelivering={isDelivering} isArrivedAtDropoff={isArrivedAtDropoff} isCollectingFromReceiver={isCollectingFromReceiver} variant={variant} onCancelDelivery={() => { setCancelReasons(isArrivedAtDropoff ? ARRIVED_CANCEL_REASONS : isArrived && !isDelivering && !isPaymentCollected ? WAITING_CANCEL_REASONS : PICKUP_CANCEL_REASONS); setIsCancelDeliveryOpen(true); }} onSenderCall={() => setCallContact('Chandra Krishnamurthy')} onReceiverCall={() => setCallContact('Flington Doe')} onSenderMessage={() => setMessagingContact('Chandra Krishnamurthy')} onReceiverMessage={() => setMessagingContact('Flington Doe')} />
            
            <div 
              className={`absolute bottom-0 left-0 w-full z-[20] pointer-events-none transition-shadow duration-300 ${isOpen ? 'shadow-[0px_-4px_12px_0px_rgba(0,0,0,0.12)]' : ''}`}
            >
              <div className="bg-white content-stretch flex flex-col items-start shrink-0 w-full pointer-events-auto" data-name="Active Ride Sheet">
                <div className="bg-white content-stretch flex flex-col gap-[4px] items-center justify-end relative w-full" style={{ paddingBottom: 'calc(12px + env(safe-area-inset-bottom))' }} data-name="Active Ride Sheet/Pickup">
                  {isArrivedAtDropoff && isCollectingFromReceiver ? (
                    <>
                      <CashChipBanner
                        collected
                        collectedLabel=""
                        headerText="Receiver verified"
                        actionLabel="Enter PIN"
                        onToggle={() => {}}
                      />
                      <CashChipBanner
                        collected={receiverCashCollected}
                        error={chipError}
                        headerText={receiverCashCollected ? '18.92 € collected' : 'Collect 18.92 €'}
                        onToggle={() => {
                          setReceiverCashCollected(c => !c);
                          if (chipError) setChipError(false);
                        }}
                        onPaymentIssue={() => setIsPaymentIssueOpen(true)}
                      />
                      <Frame5
                        resetKey="receiver-cash"
                        text="Complete delivery"
                        confirmedText="Completing…"
                        validate={() => {
                          if (!receiverCashCollected) { setChipError(true); return false; }
                          return true;
                        }}
                        onConfirm={() => { setIsRatingOpen(true); }}
                      />
                    </>
                  ) : isArrivedAtDropoff ? (
                    <>
                      <CashChipBanner
                        collected={pinEntered}
                        error={chipError}
                        collectedLabel="Give the parcel to the receiver"
                        headerText={pinEntered ? 'Receiver verified' : 'Verify receiver'}
                        actionLabel="Enter PIN"
                        errorMessage="Enter PIN code to complete delivery"
                        onToggle={() => {
                          setPinEntered(p => !p);
                          if (chipError) setChipError(false);
                        }}
                        onActionClick={() => {
                          if (chipError) setChipError(false);
                          openPinScreen();
                        }}
                      />
                      <Frame5
                        resetKey="dropoff-pin"
                        text="Complete delivery"
                        confirmedText="Completing…"
                        validate={() => {
                          if (!pinEntered) { setChipError(true); return false; }
                          return true;
                        }}
                        onConfirm={() => {
                          if (receiverPaying) {
                            setChipError(false);
                            setIsCollectingFromReceiver(true);
                          } else {
                            setIsRatingOpen(true);
                          }
                        }}
                      />
                    </>
                  ) : isDelivering ? (
                    <Frame5
                      resetKey="delivering"
                      text="Arrived"
                      confirmedText="Arrived!"
                      onConfirm={() => { setIsArrivedAtDropoff(true); setIsOpen(true); }}
                    />
                  ) : isPaymentCollected ? (
                    <PaymentCollectedContent onStartDelivery={() => { setIsDelivering(true); setIsOpen(false); }} />
                  ) : !isArrived ? (
                    <Frame5
                      resetKey="pickup"
                      text="Arrived"
                      confirmedText="Confirmed"
                      onConfirm={() => { setIsArrived(true); setIsOpen(true); }}
                    />
                  ) : variant === 'current' ? (
                    <>
                      <div className="w-full">
                        <InlineNotification onPaymentIssue={() => setIsPaymentIssueOpen(true)} />
                      </div>
                      <Frame5
                        resetKey={`arrived-${variant}`}
                        text="Payment collected"
                        confirmedText="Confirmed"
                        onConfirm={() => { setIsPaymentCollected(true); setIsOpen(false); }}
                      />
                    </>
                  ) : variant === 'tapChip' ? (
                    <>
                      <CashChipBanner
                        collected={cashCollected}
                        error={chipError}
                        collectedLabel=""
                        headerText={cashCollected && receiverPaying ? 'Ask receiver to pay at the dropoff' : undefined}
                        onToggle={() => {
                          setCashCollected(c => !c);
                          if (chipError) setChipError(false);
                          if (receiverPaying) setReceiverPaying(false);
                        }}
                        onPaymentIssue={() => setIsPaymentIssueOpen(true)}
                      />
                      <Frame5
                        resetKey={`arrived-${variant}`}
                        text="Start delivery"
                        confirmedText="Confirmed"
                        validate={() => {
                          if (!cashCollected) { setChipError(true); return false; }
                          return true;
                        }}
                        onConfirm={() => { setIsDelivering(true); setIsOpen(false); }}
                      />
                    </>
                  ) : (
                    <>
                      <LongPressAmount
                        confirmed={cashCollected}
                        onConfirm={() => setCashCollected(true)}
                        onPaymentIssue={() => setIsPaymentIssueOpen(true)}
                      />
                      <Frame5
                        resetKey={`arrived-${variant}`}
                        text="Start delivery"
                        confirmedText="Confirmed"
                        onConfirm={() => { setIsDelivering(true); setIsOpen(false); }}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          <PaymentIssueSheet
            isOpen={isPaymentIssueOpen}
            isDropoff={isCollectingFromReceiver}
            onClose={() => setIsPaymentIssueOpen(false)}
            onAskReceiver={() => {
              setCashCollected(true);
              setReceiverPaying(true);
              setChipError(false);
              setIsPaymentIssueOpen(false);
            }}
            onCancelDelivery={() => {
              setIsPaymentIssueOpen(false);
              setCancelReasons(PAYMENT_CANCEL_REASONS);
              setIsCancelDeliveryOpen(true);
            }}
          />
          <CancelDeliverySheet
            isOpen={isCancelDeliveryOpen}
            reasons={cancelReasons}
            onClose={() => setIsCancelDeliveryOpen(false)}
            onReasonSelected={(reason) => {
              if (reason === "This parcel isn't suitable for delivery") {
                setIsCancelDeliveryOpen(false);
                setIsParcelNotSuitableOpen(true);
                return;
              }
              setIsCancelDeliveryOpen(false);
              resetFlow();
              setShowCancelledBanner(true);
            }}
          />
          <CancelDeliverySheet
            isOpen={isParcelNotSuitableOpen}
            reasons={PARCEL_NOT_SUITABLE_REASONS}
            title="Why isn't the parcel suitable?"
            onClose={() => setIsParcelNotSuitableOpen(false)}
            onBack={() => { setIsParcelNotSuitableOpen(false); setIsCancelDeliveryOpen(true); }}
            onReasonSelected={() => {
              setIsParcelNotSuitableOpen(false);
              resetFlow();
              setShowCancelledBanner(true);
            }}
          />
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {isPinScreenOpen && (
            <PinCodeScreen
              onClose={() => setIsPinScreenOpen(false)}
              onComplete={() => {
                setPinEntered(true);
                setChipError(false);
                setIsPinScreenOpen(false);
                if (receiverPaying) setIsCollectingFromReceiver(true);
              }}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isRatingOpen && <RatingScreen onConfirm={() => { resetFlow(); }} />}
        </AnimatePresence>

        <AnimatePresence>
          {callContact && <CallScreen contactName={callContact} onEnd={() => setCallContact(null)} />}
        </AnimatePresence>

        <AnimatePresence>
          {messagingContact && <ChatScreen contactName={messagingContact} onClose={() => setMessagingContact(null)} />}
        </AnimatePresence>
      </div>
    </div>
  );
}
