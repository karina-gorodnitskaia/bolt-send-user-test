import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import StatusBarIOs from "../imports/StatusBarIOs-5-1464";
import svgPaths from "../imports/svg-yt0hfw9plf";
import ActiveDelivery from "../imports/ActiveDelivery-5-1129";
import DeliveryDetails from "../imports/DeliveryDetails";
import WaitingDeliveryDetails from "../imports/DeliveryDetails-10-11425";
import AcceptanceScreen from "../imports/AcceptanceScreen20";
import InlineNotification from "../imports/ⒼInlineNotification";
import walletAlertImg from "../assets/Wallet with Alert.png";
import rideDetailsImg from "../Ride details.png";

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
        {titleText || "Pickup in 3 min"}
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

function Row() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="row">
      <p className="font-['Inter_Variable:Regular',sans-serif] font-[450] leading-[24px] relative shrink-0 text-[#2a313c] text-[18px] tracking-[-0.252px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
        Chandra Krishnamurthy
      </p>
      <Rating />
      <RidesCount />
    </div>
  );
}

function Frame1({ isOpen }: { isOpen?: boolean }) {
  if (isOpen) return null;

  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full overflow-hidden">
      <p className="font-['Inter_Variable:Regular',sans-serif] font-[450] leading-[24px] min-w-full relative shrink-0 text-[#2a313c] text-[18px] tracking-[-0.252px] w-[min-content]" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
        Karl-Liebknecht-Str. 29, 10178 Berlin
      </p>
      <Row />
    </div>
  );
}

function Frame2({ onToggle, isOpen, isScrolled, titleText }: { onToggle: () => void; isOpen?: boolean; isScrolled?: boolean; titleText?: string }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className={`content-stretch flex flex-col items-start px-[24px] relative size-full transition-all duration-300 ${isOpen ? 'gap-0' : 'gap-[4px]'} ${isScrolled ? 'pb-[8px]' : ''}`}>
        <Frame onToggle={onToggle} isOpen={isOpen} titleText={titleText} />
        <Frame1 isOpen={isOpen} />
      </div>
    </div>
  );
}

function Spacing1() {
  return null;
}

function Status({ onToggle, isOpen, isScrolled, titleText }: { onToggle: () => void; isOpen?: boolean; isScrolled?: boolean; titleText?: string }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-start rounded-tl-[16px] rounded-tr-[16px] shrink-0 sticky top-0 w-full z-[7]" data-name="Status">
      <div className="relative shrink-0 w-full" data-name="Ⓖ Section Header">
        <div className="content-stretch flex flex-col items-start px-[24px] relative size-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Top padding">
            <Spacing />
          </div>
        </div>
      </div>
      <Frame2 onToggle={onToggle} isOpen={isOpen} isScrolled={isScrolled} titleText={titleText} />

    </div>
  );
}

function Frame3({ onConfirm, text, confirmedText, resetKey }: { onConfirm: () => void, text: string, confirmedText: string, resetKey?: string }) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [maxDrag, setMaxDrag] = useState(327 - 80);

  useEffect(() => {
    setIsConfirmed(false);
    setIsDragging(false);
  }, [resetKey]);

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
      setIsConfirmed(true);
      onConfirm();
    }
  };

  return (
    <div className="relative shrink-0 w-full overflow-hidden">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <div ref={containerRef} className="bg-positive-primary h-[64px] relative rounded-[8px] shrink-0 w-full overflow-hidden" data-name="Swipeable buttons">
          <motion.div
            animate={{ opacity: isConfirmed || isDragging ? 0 : 1 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <p className="font-['Inter_Variable:SemiBold',sans-serif] font-semibold h-[24px] leading-[25px] text-[20px] text-center text-white tracking-[-0.34px]" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
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

          {!isConfirmed && (
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: maxDrag }}
              dragElastic={0.1}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
              className="absolute left-0 top-0 h-full w-[80px] flex items-center justify-center cursor-grab active:cursor-grabbing z-10"
            >
              <div className="w-[18.667px] h-[18.672px] relative ml-[28px] mr-[33px]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6667 18.6721">
                  <g id="arrows">
                    <path d={svgPaths.p1a759b80} fill="var(--fill-0, white)" id="Vector" />
                    <path d={svgPaths.p39e3cdc0} fill="var(--fill-0, white)" id="Vector_2" />
                  </g>
                </svg>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

function Frame5({ onConfirm, text, confirmedText, resetKey }: { onConfirm: () => void, text: string, confirmedText: string, resetKey?: string }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full z-[30]">
      <Frame3 onConfirm={onConfirm} text={text} confirmedText={confirmedText} resetKey={resetKey} />
    </div>
  );
}

function WalletAlertIllustration() {
  return (
    <img src={walletAlertImg} alt="" style={{ width: 200, height: 'auto', display: 'block' }} />
  );
}

function PaymentIssueSheet({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
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
                If the sender doesn't pay, you can ask the receiver to pay instead. If they refuse, you can cancel the delivery without consequences.
              </p>

              {/* Ask receiver button */}
              <button style={{
                width: '100%', height: 56, borderRadius: 100,
                background: '#EBEBEB', border: 'none', cursor: 'pointer',
                marginBottom: 12,
                fontFamily: "'Inter Variable:SemiBold', sans-serif",
                fontSize: 18, fontWeight: 650,
                lineHeight: '22px',
                letterSpacing: '-0.252px',
                color: '#2A313C',
                fontFeatureSettings: "'cv03' on, 'cv04' on",
              }}>
                Ask receiver to pay
              </button>

              {/* Cancel delivery button */}
              <button style={{
                width: '100%', height: 56, borderRadius: 100,
                background: '#EE3333', border: 'none', cursor: 'pointer',
                fontFamily: "'Inter Variable', Inter, sans-serif",
                fontSize: 17, fontWeight: 600,
                letterSpacing: '-0.2px',
                color: '#fff',
                fontFeatureSettings: "'cv03', 'cv04'",
              }}>
                Cancel delivery
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
          Parcel and <strong style={{ fontWeight: 650 }}>29.79 €</strong> payment collected
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

function BottomSheetS({ isOpen, setIsOpen, isArrived, isPaymentCollected, isDelivering }: { isOpen: boolean; setIsOpen: (open: boolean) => void; isArrived: boolean; isPaymentCollected: boolean; isDelivering: boolean }) {
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
  const titleText = isDelivering ? `Delivery in ${formattedDeliveryTime}` : isArrived ? `${formattedTime} Waiting` : undefined;

  const DRAG_TOP = 44;
  const DRAG_BOTTOM = isDelivering ? containerHeight - 210 : isPaymentCollected ? containerHeight - 280 : isArrived ? containerHeight - 308 : containerHeight - 210;

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
          <Status onToggle={() => setIsOpen(!isOpen)} isOpen={isOpen} isScrolled={isScrolled} titleText={titleText} />
        </div>

        <div
          className="bg-white flex-1 w-full relative pointer-events-auto overflow-y-auto overflow-x-hidden z-[2]"
          onScroll={(e) => setIsScrolled(e.currentTarget.scrollTop > 0)}
        >
          <div className={`sticky top-0 left-0 w-full h-[1px] -mt-[1px] pointer-events-none z-[50] transition-shadow duration-300 ${isScrolled ? 'shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)]' : 'shadow-none'}`} />
          {isOpen && (
            <div className="w-full" style={{ paddingBottom: isPaymentCollected ? 'calc(160px + env(safe-area-inset-bottom))' : isArrived ? 'calc(180px + env(safe-area-inset-bottom))' : 'calc(96px + env(safe-area-inset-bottom))' }}>
              <DeliveryDetails />
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
  const [restartKey, setRestartKey] = useState(0);

  if (!unlocked) return <PasswordGate onUnlock={() => setUnlocked(true)} />;

  return (
    <div className="flex h-[100dvh] w-full sm:items-center sm:justify-center bg-gray-100 relative">
      <button 
        onClick={() => {
          setIsAccepted(false);
          setIsOpen(false);
          setIsArrived(false);
          setIsPaymentIssueOpen(false);
          setIsPaymentCollected(false);
          setIsDelivering(false);
          setRestartKey(k => k + 1);
        }}
        className="fixed top-4 right-4 z-[999] bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-gray-200 font-medium text-sm text-gray-700 hover:bg-white hover:text-black transition-colors"
      >
        Restart
      </button>

      <div id="app-container" className="relative h-full w-full sm:h-[812px] sm:w-[375px] overflow-hidden bg-black sm:shadow-xl sm:rounded-[40px] sm:border-[8px] sm:border-black">
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

        <motion.div 
          className="relative size-full bg-[#f3f4f6] origin-center" 
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
            {isDelivering ? (
              <motion.img
                key="map-area"
                src={rideDetailsImg}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <motion.div
                key="active-delivery"
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <ActiveDelivery isOpen={isOpen} />
              </motion.div>
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
            <BottomSheetS key={restartKey} isOpen={isOpen} setIsOpen={setIsOpen} isArrived={isArrived} isPaymentCollected={isPaymentCollected} isDelivering={isDelivering} />
            
            <div 
              className={`absolute bottom-0 left-0 w-full z-[20] pointer-events-none transition-shadow duration-300 ${isOpen ? 'shadow-[0px_-4px_12px_0px_rgba(0,0,0,0.12)]' : ''}`}
            >
              <div className="bg-white content-stretch flex flex-col items-start shrink-0 w-full pointer-events-auto" data-name="Active Ride Sheet">
                <div className="bg-white content-stretch flex flex-col gap-[4px] items-center justify-end relative w-full" style={{ paddingBottom: 'calc(12px + env(safe-area-inset-bottom))' }} data-name="Active Ride Sheet/Pickup">
                  {isDelivering ? (
                    <Frame5
                      resetKey="delivering"
                      text="Arrived"
                      confirmedText="Arrived!"
                      onConfirm={() => {}}
                    />
                  ) : isPaymentCollected ? (
                    <PaymentCollectedContent onStartDelivery={() => { setIsDelivering(true); setIsOpen(false); }} />
                  ) : (
                    <>
                      {isArrived && (
                        <div className="w-full">
                          <InlineNotification onPaymentIssue={() => setIsPaymentIssueOpen(true)} />
                        </div>
                      )}
                      <Frame5
                        resetKey={isArrived ? 'arrived' : 'pickup'}
                        text={isArrived ? "Payment collected" : "Arrived"}
                        confirmedText="Confirmed"
                        onConfirm={() => {
                          if (!isArrived) {
                            setIsArrived(true);
                            setIsOpen(true);
                          } else {
                            setIsPaymentCollected(true);
                            setIsOpen(false);
                          }
                        }}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          <PaymentIssueSheet isOpen={isPaymentIssueOpen} onClose={() => setIsPaymentIssueOpen(false)} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
