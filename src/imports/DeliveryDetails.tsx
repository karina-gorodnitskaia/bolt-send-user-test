import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "./svg-iqn7xswld4";

export default function DeliveryDetails({ isDelivering = false, senderName = "Chandra Krishnamurthy", receiverName = "Flington Doe", pickupAddress = "Oranienburger Str. 12", dropoffAddress = "Berliner Str. 22", cityName = "Berlin", onCancelDelivery, onSenderCall, onReceiverCall, onSenderMessage, onReceiverMessage }: { isDelivering?: boolean; senderName?: string; receiverName?: string; pickupAddress?: string; dropoffAddress?: string; cityName?: string; onCancelDelivery?: () => void; onSenderCall?: () => void; onReceiverCall?: () => void; onSenderMessage?: () => void; onReceiverMessage?: () => void } = {}) {
  const [isSenderExpanded, setIsSenderExpanded] = useState(!isDelivering);

  return (
    <div className="bg-white flex flex-col items-start w-full relative">
      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full z-[6]" data-name="Sender + Comms">
        <div 
          className="content-stretch flex flex-col items-start relative shrink-0 w-full cursor-pointer" 
          data-name="Player"
          onClick={() => setIsSenderExpanded(!isSenderExpanded)}
        >
          <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full px-[24px]" data-name="Ⓖ List Item">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Top padding">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Vertical spacing">
                <div className="h-[12px] shrink-0 w-full" data-name=".Spacing" />
              </div>
            </div>
            <div className="content-stretch flex items-center min-h-[32px] relative shrink-0 w-full" data-name="[content]">
              <div className="content-stretch flex w-full items-center relative" data-name="Content">
                <div className="content-stretch flex items-start pr-[16px] relative shrink-0" data-name="Start Slot">
                  <div className="content-stretch flex items-start relative shrink-0" data-name="Start IconView">
                    <div className={`absolute inset-0 overflow-clip rounded-[9600px] transition-colors duration-300 ${isSenderExpanded ? 'bg-[rgba(73,93,122,0.08)]' : 'bg-[rgba(0,45,30,0.07)]'}`} data-name="Background" />
                    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="[content]">
                      <div className="relative shrink-0 size-[20px]" data-name="user">
                        <div className="absolute inset-[8.33%_14.58%]" data-name="shape">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1669 16.6667">
                            <g id="shape">
                              <path d={svgPaths.p31369b00} fill={isSenderExpanded ? "var(--fill-0, #2A313C)" : "var(--fill-0, #191F1C)"} className="transition-colors duration-300" />
                              <path d={svgPaths.p29ec8400} fill={isSenderExpanded ? "var(--fill-0, #2A313C)" : "var(--fill-0, #191F1C)"} className="transition-colors duration-300" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
                    <div className="content-stretch flex flex-col items-start overflow-clip py-[2px] relative shrink-0 w-full" data-name="[primary]">
                      <p className={`font-['Inter_Variable:Regular',sans-serif] font-[450] leading-[20px] relative shrink-0 text-[16px] tracking-[-0.176px] w-full transition-colors duration-300 ${isSenderExpanded ? 'text-[#2a313c]' : 'text-[#191f1c]'}`} style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
                        Sender
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="[secondary]">
                      <p className={`font-['Inter_Variable:Regular',sans-serif] font-[450] leading-[20px] relative shrink-0 text-[14px] tracking-[-0.084px] w-full transition-colors duration-300 ${isSenderExpanded ? 'text-[#808c9f]' : 'text-[rgba(0,10,7,0.63)]'}`} style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
                        {senderName}
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="Bottom Slot">
                    <div className="content-start flex flex-wrap gap-y-[4px] items-start relative shrink-0 w-full" data-name="[badge-array]">
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Badge">
                        <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[24px] min-w-[24px] px-[6px] py-[4px] relative shrink-0" data-name="Content">
                          <div className="absolute inset-0 rounded-[4px] bg-[#e0fff0]" data-name="Shape">
                            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                          </div>
                          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Start icons">
                            <div className="relative shrink-0 size-[16px]" data-name="1st">
                              <div className="absolute inset-[4.17%]" data-name="shape">
                                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
                                  <g id="shape">
                                    <path d={svgPaths.p31b1ab00} fill="var(--fill-0, #1D965C)" fillOpacity="1" className="transition-all duration-300" />
                                    <path clipRule="evenodd" d={svgPaths.p1cc75600} fill="var(--fill-0, #1D965C)" fillRule="evenodd" fillOpacity="1" className="transition-all duration-300" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex items-center relative shrink-0" data-name="[action-text]">
                            <div className="content-stretch flex items-center relative shrink-0" data-name="Label">
                              <div className="flex flex-col font-['Inter_Variable:SemiBold',sans-serif] font-[650] justify-center leading-[0] relative shrink-0 text-[12px] whitespace-nowrap transition-colors duration-300 text-[#1d965c]" style={{ fontFeatureSettings: "'cv03', 'cv04'" }}>
                                <p className="leading-[15px]">Paying cash</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-start justify-end pl-[12px] relative shrink-0" data-name="End Slot">
                  <button className="block cursor-pointer relative shrink-0 size-[24px]" data-name="End Icon" onClick={(e) => { e.stopPropagation(); setIsSenderExpanded(!isSenderExpanded); }}>
                    <motion.div 
                      className={isSenderExpanded ? "absolute inset-[29.17%_16.65%_35.07%_16.68%]" : "absolute inset-[35.08%_16.65%_29.16%_16.68%]"} 
                      data-name="shape"
                      animate={{ rotate: isSenderExpanded ? 0 : 180 }}
                      transition={{ duration: 0.3 }}
                      style={{ originX: 0.5, originY: 0.5 }}
                    >
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8.582">
                        {/* We use the same path to ensure clean rotation without shape jump, or fall back to the dynamic one if they are different icons */}
                        <path clipRule="evenodd" d={svgPaths.p23241420} fill={isSenderExpanded ? "var(--fill-0, #2A313C)" : "var(--fill-0, #191F1C)"} fillRule="evenodd" id="shape" className="transition-colors duration-300" />
                      </svg>
                    </motion.div>
                  </button>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Bottom padding">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Vertical spacing">
                <div className="h-[12px] shrink-0 w-full" data-name=".Spacing" />
              </div>
            </div>
          </div>
        </div>
        
        {/* The Animated Dropdown Area */}
        <AnimatePresence initial={false}>
          {isSenderExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full overflow-hidden"
            >
              <div className="content-stretch flex flex-col h-[8px] items-start relative shrink-0 w-full" data-name="Vertical spacing">
                <div className="h-[8px] shrink-0 w-full" data-name=".Spacing" />
              </div>
              <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Contact party">
                <div className="content-stretch flex gap-[8px] items-center px-[24px] relative shrink-0 w-full">
            <div
              onClick={onSenderCall}
              className={`content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative ${onSenderCall ? 'cursor-pointer active:opacity-70' : ''}`}
              data-name="Secondary Main Button"
            >
              <div className="bg-[rgba(73,93,122,0.08)] min-h-[48px] relative rounded-[9600px] shrink-0 w-full" data-name="button">
                <div className="flex flex-row items-center justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex items-center justify-center min-h-[inherit] px-[20px] py-[8px] relative size-full">
                    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Content">
                      <div className="content-stretch flex items-center justify-end relative shrink-0 w-[20px]" data-name="l_icon">
                        <div className="relative shrink-0 size-[24px]" data-name="call">
                          <div className="absolute inset-[13.43%]" data-name="shape">
                            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5559 17.556">
                              <path d={svgPaths.p6dcc600} fill="var(--fill-0, #2A313C)" id="shape" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="action + meta">
                        <div className="flex flex-col font-['Inter_Variable:SemiBold',sans-serif] font-[650] justify-center leading-[0] relative shrink-0 text-[#2a313c] text-[16px] tracking-[-0.176px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
                          <p className="leading-[24px]">Call</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={onSenderMessage}
              className={`content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative ${onSenderMessage ? 'cursor-pointer active:opacity-70' : ''}`}
              data-name="2nd Icon Button"
            >
              <div className="bg-[rgba(73,93,122,0.08)] min-h-[48px] relative rounded-[9600px] shrink-0 w-full" data-name="button">
                <div className="flex flex-row items-center justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex items-center justify-center min-h-[inherit] px-[20px] py-[8px] relative size-full">
                    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Content">
                      <div className="content-stretch flex items-center justify-end relative shrink-0 w-[20px]" data-name="l_icon">
                        <div className="relative shrink-0 size-[24px]" data-name="comment">
                          <div className="absolute inset-[4.17%]" data-name="shape">
                            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                              <path clipRule="evenodd" d={svgPaths.p37cb2e00} fill="var(--fill-0, #2A313C)" fillRule="evenodd" id="shape" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="action + meta">
                        <div className="flex flex-col font-['Inter_Variable:SemiBold',sans-serif] font-[650] justify-center leading-[0] relative shrink-0 text-[#2a313c] text-[16px] tracking-[-0.176px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
                          <p className="leading-[24px]">Message</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="delivery instructions">
          <div className="relative shrink-0 w-full" data-name="Ⓖ Section Header">
            <div className="content-stretch flex flex-col items-start px-[24px] relative size-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section Header: PaddingTop">
                <div className="h-[20px] shrink-0 w-full" data-name=".Spacing" />
              </div>
              <div className="content-stretch flex gap-[8px] h-[24px] items-start relative shrink-0 w-full" data-name="[title + addon]">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative self-stretch" data-name="[primary]">
                  <p className="font-['Inter_Variable:SemiBold',sans-serif] font-[650] leading-[20px] relative shrink-0 text-[#2a313c] text-[16px] tracking-[-0.176px] w-full" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
                    Instructions
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Bottom padding">
                <div className="h-[4px] shrink-0 w-full" data-name=".Spacing" />
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Instructions">
            <div className="content-stretch flex flex-col items-start px-[24px] py-[8px] relative size-full">
              <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Text">
                <p className="flex-[1_0_0] font-['Inter_Variable:Regular',sans-serif] font-[450] leading-[24px] min-w-px relative text-[#2a313c] text-[16px] tracking-[-0.176px]" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
                  Call me when you are there
                </p>
              </div>
              <div className="content-stretch flex items-center overflow-clip py-[8px] relative shrink-0" data-name="Ⓖ Ghost Button / Text">
                <div className="flex flex-col font-['Inter_Variable:SemiBold',sans-serif] font-[650] justify-center leading-[0] relative shrink-0 text-[#1d965c] text-[14px] tracking-[-0.084px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
                  <p className="leading-[18px]">Translate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
  
  <div className="content-stretch flex flex-col h-[8px] items-start relative shrink-0 w-full" data-name="Vertical spacing">
          <div className="h-[8px] shrink-0 w-full" data-name=".Spacing" />
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
          <div className="h-[8px] shrink-0 w-full" data-name=".Spacing" />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Player">
          <div className="w-full group">
            <input type="checkbox" id="receiver-toggle" className="hidden peer" defaultChecked={isDelivering} />
            <label htmlFor="receiver-toggle" className="bg-white content-stretch flex flex-col items-start justify-center px-[24px] relative shrink-0 w-full cursor-pointer block" data-name="Ⓖ List Item">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Top padding">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Vertical spacing">
                  <div className="h-[12px] shrink-0 w-full" data-name=".Spacing" />
                </div>
              </div>
              <div className="content-stretch flex items-center min-h-[32px] relative shrink-0 w-full" data-name="[content]">
                <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Content">
                  <div className="content-stretch flex items-start pr-[16px] relative shrink-0" data-name="Start Slot">
                    <div className="content-stretch flex items-start relative shrink-0" data-name="Start IconView">
                      <div className="absolute inset-0 overflow-clip rounded-[9600px] transition-colors duration-300 bg-[rgba(73,93,122,0.08)] group-has-[:checked]:bg-[rgba(0,45,30,0.07)]" data-name="Background" />
                      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="[content]">
                        <div className="relative shrink-0 size-[20px]" data-name="user">
                          <div className="absolute inset-[8.33%_14.58%]" data-name="shape">
                            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1669 16.6667">
                              <g id="shape">
                                <path d={svgPaths.p31369b00} className="fill-[#2A313C] transition-colors duration-300 group-has-[:checked]:fill-[#191F1C]" />
                                <path d={svgPaths.p29ec8400} className="fill-[#2A313C] transition-colors duration-300 group-has-[:checked]:fill-[#191F1C]" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
                      <div className="content-stretch flex flex-col items-start overflow-clip py-[2px] relative shrink-0 w-full" data-name="[primary]">
                        <p className="font-['Inter_Variable:Regular',sans-serif] font-[450] leading-[20px] relative shrink-0 text-[16px] tracking-[-0.176px] w-full transition-colors duration-300 text-[#2a313c] group-has-[:checked]:text-[#191f1c]" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
                          Receiver
                        </p>
                      </div>
                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="[secondary]">
                        <p className="font-['Inter_Variable:Regular',sans-serif] font-[450] leading-[20px] relative shrink-0 text-[14px] tracking-[-0.084px] w-full transition-colors duration-300 text-[#808c9f] group-has-[:checked]:text-[rgba(0,10,7,0.63)]" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
                          {receiverName}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-start justify-end pl-[12px] relative shrink-0" data-name="End Slot">
                    <div className="block relative shrink-0 size-[24px]" data-name="End Icon">
                      <div className="absolute inset-[35.08%_16.65%_29.16%_16.68%] transition-transform duration-300 group-has-[:checked]:rotate-180 flex items-center justify-center origin-center" data-name="shape">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8.582">
                          <path clipRule="evenodd" d={svgPaths.p14a2aa00} fillRule="evenodd" id="shape" className="fill-[#2A313C] transition-colors duration-300 group-has-[:checked]:fill-[#191F1C]" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Bottom padding">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Vertical spacing">
                  <div className="h-[12px] shrink-0 w-full" data-name=".Spacing" />
                </div>
              </div>
            </label>
            <div className="grid grid-rows-[0fr] peer-checked:grid-rows-[1fr] transition-[grid-template-rows] duration-300 overflow-hidden w-full">
              <div className="min-h-0 w-full flex flex-col">
                <div className="h-[8px] shrink-0 w-full" data-name=".Spacing" />
                <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Contact party">
                  <div className="content-stretch flex gap-[8px] items-center px-[24px] relative shrink-0 w-full">
                    <div
                      onClick={onReceiverCall}
                      className={`content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative ${onReceiverCall ? 'cursor-pointer active:opacity-70' : ''}`}
                      data-name="Secondary Main Button"
                    >
                      <div className="bg-[rgba(0,45,30,0.07)] min-h-[48px] relative rounded-[9600px] shrink-0 w-full" data-name="button">
                        <div className="flex flex-row items-center justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex items-center justify-center min-h-[inherit] px-[20px] py-[8px] relative size-full">
                            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Content">
                              <div className="content-stretch flex items-center justify-end relative shrink-0 w-[20px]" data-name="l_icon">
                                <div className="relative shrink-0 size-[24px]" data-name="call">
                                  <div className="absolute inset-[13.43%]" data-name="shape">
                                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5559 17.556">
                                      <path d={svgPaths.p6dcc600} fill="var(--fill-0, #191F1C)" id="shape" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="action + meta">
                                <div className="flex flex-col font-['Inter_Variable:SemiBold',sans-serif] font-[650] justify-center leading-[0] relative shrink-0 text-[#191f1c] text-[16px] tracking-[-0.176px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
                                  <p className="leading-[24px]">Call</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      onClick={onReceiverMessage}
                      className={`content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative ${onReceiverMessage ? 'cursor-pointer active:opacity-70' : ''}`}
                      data-name="2nd Icon Button"
                    >
                      <div className="bg-[rgba(0,45,30,0.07)] min-h-[48px] relative rounded-[9600px] shrink-0 w-full" data-name="button">
                        <div className="flex flex-row items-center justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex items-center justify-center min-h-[inherit] px-[20px] py-[8px] relative size-full">
                            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Content">
                              <div className="content-stretch flex items-center justify-end relative shrink-0 w-[20px]" data-name="l_icon">
                                <div className="relative shrink-0 size-[24px]" data-name="comment">
                                  <div className="absolute inset-[4.17%]" data-name="shape">
                                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                                      <path clipRule="evenodd" d={svgPaths.p37cb2e00} fill="var(--fill-0, #191F1C)" fillRule="evenodd" id="shape" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="action + meta">
                                <div className="flex flex-col font-['Inter_Variable:SemiBold',sans-serif] font-[650] justify-center leading-[0] relative shrink-0 text-[#191f1c] text-[16px] tracking-[-0.176px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
                                  <p className="leading-[24px]">Message</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="delivery instructions">
                  <div className="relative shrink-0 w-full" data-name="Ⓖ Section Header">
                    <div className="content-stretch flex flex-col items-start px-[24px] relative size-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section Header: PaddingTop">
                        <div className="h-[24px] shrink-0 w-full" data-name=".Spacing" />
                      </div>
                      <div className="content-stretch flex gap-[8px] h-[24px] items-start relative shrink-0 w-full" data-name="[title + addon]">
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative self-stretch" data-name="[primary]">
                          <p className="font-['Inter_Variable:SemiBold',sans-serif] font-[650] leading-[20px] relative shrink-0 text-[#191f1c] text-[16px] tracking-[-0.176px] w-full" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
                            Instructions
                          </p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Bottom padding">
                        <div className="h-[4px] shrink-0 w-full" data-name=".Spacing" />
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full" data-name="Instructions">
                    <div className="content-stretch flex flex-col items-start px-[24px] py-[8px] relative size-full">
                      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Text">
                        <p className="flex-[1_0_0] font-['Inter_Variable:Regular',sans-serif] font-[450] leading-[24px] min-w-px relative text-[#191f1c] text-[16px] tracking-[-0.176px]" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
                          If they don’t answer the phone, please call the sender instead
                        </p>
                      </div>
                      <div className="content-stretch flex items-center overflow-clip py-[8px] relative shrink-0" data-name="Ⓖ Ghost Button / Text">
                        <div className="flex flex-col font-['Inter_Variable:SemiBold',sans-serif] font-[650] justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,112,66,0.92)] tracking-[-0.084px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
                          <p className="leading-[18px]">Translate</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[8px] items-start relative shrink-0 w-full" data-name="Vertical spacing">
          <div className="h-[8px] shrink-0 w-full" data-name=".Spacing" />
        </div>
        <div className="h-[8px] relative shrink-0 w-full" data-name="Divider">
          <div className="-translate-y-1/2 absolute h-[40px] left-0 right-0 top-1/2" data-name="Subtract">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 40">
              <path d={svgPaths.p7f1f200} fill="var(--fill-0, #F0F2F5)" id="Subtract" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-full z-[4]" data-name="Route">
        <div className="relative shrink-0 w-full" data-name="Ⓖ Section Header">
          <div className="content-stretch flex flex-col items-start px-[24px] relative size-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Top padding">
              <div className="h-[24px] shrink-0 w-full" data-name=".Spacing" />
            </div>
            <div className="content-stretch flex gap-[8px] h-[25px] items-start relative shrink-0 w-full" data-name="[title + addon]">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative self-stretch" data-name="[primary]">
                <p className="font-['Inter_Variable:SemiBold',sans-serif] font-[650] leading-[25px] relative shrink-0 text-[#2a313c] text-[20px] tracking-[-0.34px] w-full" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
                  Route details
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Bottom padding">
              <div className="h-[8px] shrink-0 w-full" data-name=".Spacing" />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start justify-center px-[24px] relative shrink-0 w-full" data-name="Ⓖ List Item">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Top padding">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Vertical spacing">
              <div className="h-[12px] shrink-0 w-full" data-name=".Spacing" />
            </div>
          </div>
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
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
                  <div className="content-stretch flex flex-col items-start overflow-clip py-[2px] relative shrink-0 w-full" data-name="[primary]">
                    <p className="font-['Inter_Variable:Regular',sans-serif] font-[450] leading-[20px] relative shrink-0 text-[#2a313c] text-[16px] tracking-[-0.176px] w-full" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
                      {pickupAddress}
                    </p>
                  </div>
                  {cityName && (
                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="[secondary]">
                      <p className="font-['Inter_Variable:Regular',sans-serif] font-[450] leading-[20px] relative shrink-0 text-[#808c9f] text-[14px] tracking-[-0.084px] w-full" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
                        {cityName}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="content-stretch flex items-start justify-end pl-[12px] relative shrink-0" data-name="End Slot">
                <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="End button">
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Bottom padding">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Vertical spacing">
              <div className="h-[12px] shrink-0 w-full" data-name=".Spacing" />
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
        <div className="content-stretch flex flex-col items-start justify-center px-[24px] relative shrink-0 w-full" data-name="Ⓖ List Item">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Top padding">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Vertical spacing">
              <div className="h-[12px] shrink-0 w-full" data-name=".Spacing" />
            </div>
          </div>
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
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
                  <div className="content-stretch flex flex-col items-start overflow-clip py-[2px] relative shrink-0 w-full" data-name="[primary]">
                    <p className="font-['Inter_Variable:Regular',sans-serif] font-[450] leading-[20px] relative shrink-0 text-[#2a313c] text-[16px] tracking-[-0.176px] w-full" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
                      {dropoffAddress}
                    </p>
                  </div>
                  {cityName && (
                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="[secondary]">
                      <p className="font-['Inter_Variable:Regular',sans-serif] font-[450] leading-[20px] relative shrink-0 text-[#808c9f] text-[14px] tracking-[-0.084px] w-full" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
                        {cityName}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="content-stretch flex items-start justify-end pl-[12px] relative shrink-0" data-name="End Slot">
                <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="End button">
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Bottom padding">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Vertical spacing">
              <div className="h-[12px] shrink-0 w-full" data-name=".Spacing" />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[8px] items-start relative shrink-0 w-full" data-name="Vertical spacing">
          <div className="h-[8px] shrink-0 w-full" data-name=".Spacing" />
        </div>
        <div className="h-[8px] relative shrink-0 w-full" data-name="Divider">
          <div className="-translate-y-1/2 absolute h-[40px] left-0 right-0 top-1/2" data-name="Subtract">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 40">
              <path d={svgPaths.p7f1f200} fill="var(--fill-0, #F0F2F5)" id="Subtract" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[3]" data-name="Need help">
        <div className="relative shrink-0 w-full" data-name="Ⓖ Section Header">
          <div className="content-stretch flex flex-col items-start px-[24px] relative size-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Top padding">
              <div className="h-[24px] shrink-0 w-full" data-name=".Spacing" />
            </div>
            <div className="content-stretch flex gap-[8px] h-[25px] items-start relative shrink-0 w-full" data-name="[title + addon]">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative self-stretch" data-name="[primary]">
                <p className="font-['Inter_Variable:SemiBold',sans-serif] font-[650] leading-[25px] relative shrink-0 text-[#2a313c] text-[20px] tracking-[-0.34px] w-full" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
                  Need help?
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Bottom padding">
              <div className="h-[8px] shrink-0 w-full" data-name=".Spacing" />
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name="Ⓖ List Item">
          <div className="flex flex-col justify-center size-full">
            <div className="content-stretch flex flex-col items-start justify-center px-[24px] relative size-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Top padding">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Vertical spacing">
                  <div className="h-[12px] shrink-0 w-full" data-name=".Spacing" />
                </div>
              </div>
              <div className="content-stretch flex items-center min-h-[32px] relative shrink-0 w-full" data-name="[content]">
                <div className="content-stretch flex w-full items-center relative" data-name="Content">
                  <div className="content-stretch flex w-full flex-col items-start relative" data-name="Text">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
                      <div className="content-stretch flex flex-col items-start overflow-clip py-[2px] relative shrink-0 w-full" data-name="[primary]">
                        <p className="font-['Inter_Variable:Regular',sans-serif] font-[450] leading-[20px] relative shrink-0 text-[#2a313c] text-[16px] tracking-[-0.176px] w-full" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
                          Contact support
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-start justify-end pl-[12px] relative shrink-0" data-name="End Slot">
                    <div className="relative shrink-0 size-[24px]" data-name="End Icon">
                      <div className="absolute inset-[16.67%]" data-name="shape">
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-start justify-end pl-[8px] py-[2px] relative shrink-0" data-name="Chevron">
                  <div className="relative shrink-0 size-[20px]" data-name="chevron_forward">
                    <div className="absolute inset-[16.68%_24.99%_16.65%_39.25%]" data-name="shape">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.15167 13.3333">
                        <path clipRule="evenodd" d={svgPaths.p4c6af80} fill="var(--fill-0, #CCD2DC)" fillRule="evenodd" id="shape" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Bottom padding">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Vertical spacing">
                  <div className="h-[12px] shrink-0 w-full" data-name=".Spacing" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[8px] items-start relative shrink-0 w-full" data-name="Vertical spacing">
          <div className="h-[8px] shrink-0 w-full" data-name=".Spacing" />
        </div>
      </div>
      <div className="h-[8px] relative shrink-0 w-full z-[2]" data-name="Divider">
        <div className="-translate-y-1/2 absolute h-[40px] left-0 right-0 top-1/2" data-name="Subtract">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 40">
            <path d={svgPaths.p7f1f200} fill="var(--fill-0, #F0F2F5)" id="Subtract" />
          </svg>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[1]" data-name="Settings">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Settings">
          <div className="relative shrink-0 w-full" data-name="Ⓖ Section Header">
            <div className="content-stretch flex flex-col items-start px-[24px] relative size-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Top padding">
                <div className="h-[24px] shrink-0 w-full" data-name=".Spacing" />
              </div>
              <div className="content-stretch flex gap-[8px] h-[25px] items-start relative shrink-0 w-full" data-name="[title + addon]">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative self-stretch" data-name="[primary]">
                  <p className="font-['Inter_Variable:SemiBold',sans-serif] font-[650] leading-[25px] relative shrink-0 text-[#2a313c] text-[20px] tracking-[-0.34px] w-full" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
                    Settings
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Bottom padding">
                <div className="h-[8px] shrink-0 w-full" data-name=".Spacing" />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start justify-center px-[24px] relative shrink-0 w-full" data-name="Ⓖ List Item">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Top padding">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Vertical spacing">
              <div className="h-[12px] shrink-0 w-full" data-name=".Spacing" />
            </div>
          </div>
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
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
                  <div className="content-stretch flex flex-col items-start overflow-clip py-[2px] relative shrink-0 w-full" data-name="[primary]">
                    <p className="font-['Inter_Variable:Regular',sans-serif] font-[450] leading-[20px] relative shrink-0 text-[#2a313c] text-[16px] tracking-[-0.176px] w-full" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
                      Bolt Navigation
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-start justify-end pl-[12px] relative shrink-0" data-name="End Slot">
                <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="End GhostButton">
                  <div className="flex flex-col font-['Inter_Variable:SemiBold',sans-serif] font-[650] justify-center leading-[0] relative shrink-0 text-[#1d965c] text-[14px] tracking-[-0.084px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
                    <p className="leading-[18px]">Change</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Bottom padding">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Vertical spacing">
              <div className="h-[12px] shrink-0 w-full" data-name=".Spacing" />
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
        <div className="bg-white content-stretch flex flex-col items-start justify-center px-[24px] relative shrink-0 w-full" data-name="Ⓖ List Item">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Top padding">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Vertical spacing">
              <div className="h-[12px] shrink-0 w-full" data-name=".Spacing" />
            </div>
          </div>
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
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
                  <div className="content-stretch flex flex-col items-start overflow-clip py-[2px] relative shrink-0 w-full" data-name="[primary]">
                    <p className="font-['Inter_Variable:Regular',sans-serif] font-[450] leading-[20px] relative shrink-0 text-[#2a313c] text-[16px] tracking-[-0.176px] w-full" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
                      Stop new requests
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-start justify-end pl-[12px] relative shrink-0" data-name="End Slot">
                <div className="relative shrink-0 size-[24px]" data-name="End Icon">
                  <div className="absolute inset-[16.67%]" data-name="shape">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Bottom padding">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Vertical spacing">
              <div className="h-[12px] shrink-0 w-full" data-name=".Spacing" />
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
        <div
          onClick={onCancelDelivery}
          className={`bg-white content-stretch flex flex-col items-start justify-center px-[24px] relative shrink-0 w-full ${onCancelDelivery ? 'cursor-pointer active:bg-[rgba(0,0,0,0.04)]' : ''}`}
          data-name="Ⓖ List Item"
        >
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Top padding">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Vertical spacing">
              <div className="h-[12px] shrink-0 w-full" data-name=".Spacing" />
            </div>
          </div>
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
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
                  <div className="content-stretch flex flex-col items-start overflow-clip py-[2px] relative shrink-0 w-full" data-name="[primary]">
                    <p className="font-['Inter_Variable:Regular',sans-serif] font-[450] leading-[20px] relative shrink-0 text-[#c91d2b] text-[16px] tracking-[-0.176px] w-full" style={{ fontFeatureSettings: "'cv03', 'cv04', 'lnum', 'pnum'" }}>
                      Cancel delivery
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-start justify-end pl-[12px] relative shrink-0" data-name="End Slot">
                <div className="relative shrink-0 size-[24px]" data-name="End Icon">
                  <div className="absolute inset-[16.67%]" data-name="shape">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Bottom padding">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Vertical spacing">
              <div className="h-[12px] shrink-0 w-full" data-name=".Spacing" />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}