"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isAnimationStarted, setIsAnimationStarted] = useState(false);

  useEffect(() => {
    setIsAnimationStarted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">신</span>
                  </div>
                  <h1 className="text-xl font-bold text-gray-900">신독환경</h1>
                </div>
              </div>
            </div>
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <a href="#home" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">홈</a>
                <a href="#service" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">교육 프로그램</a>
                <a href="#reviews" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">후기</a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">문의</a>
              </div>
            </nav>
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-gray-900 p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 1. 헤드라인 & 서브헤드라인 (Hook) */}
      <section id="home" className="pt-40 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/background.png"
            alt="배경 이미지"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                명퇴자들이 현실적으로
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                월 500만원 벌 수 있는 방법
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
              유품정리와 폐기물처리로 안정적 수익 창출 교육해드립니다
            </p>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors duration-200 shadow-lg cursor-pointer"
            >
              무료 상담 받기
            </button>
          </div>
        </div>
      </section>

      {/* 2. 공감 유도 섹션 (문제 제기) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            이런 고민이 있으신가요?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                막막한 퇴직 이후,<br />
                매달 고정 수입이 절실하신가요?
              </h3>
              <p className="text-gray-600">
                퇴직 후 안정적인 수입원이 필요하지만<br />
                새로운 일을 시작하기가 막막하신 분들
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                직접 해볼 수 있는 새로운 일,<br />
                현실적인 수익을 원하시나요?
              </h3>
              <p className="text-gray-600">
                체계적인 교육을 통해<br />
                바로 실전에 적용할 수 있는<br />
                기술을 배우고 싶으신 분들
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 교육 프로그램 소개 */}
      <section id="service" className="py-16 px-4 sm:px-6 lg:px-8 bg-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              💼 유품정리 및 폐기물 처리 전문 교육
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              체계적인 교육을 통해 월 500만원 이상의 안정적 수익을 창출할 수 있습니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">월 500만원 이상 수익 모델</h3>
              <p className="text-gray-600">
                검증된 수익 모델을 통해<br />
                안정적인 월 수입을 창출할 수 있습니다
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">수료 후 바로 독립 가능</h3>
              <p className="text-gray-600">
                교육 수료 후 즉시<br />
                독립적으로 사업을 시작할 수 있습니다
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">현장 실습 중심 교육</h3>
              <p className="text-gray-600">
                이론보다는 실전 위주의<br />
                현장 실습을 통한 교육을 제공합니다
              </p>
            </div>
          </div>
        </div>
      </section>

             {/* Before/After 섹션 */}
       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
         <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16">
             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 px-4">
               Before / After
             </h2>
                          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                현장 경험 그대로, 실전 감각을 배웁니다
              </p>
           </div>
           
                       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Before */}
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-700 mb-4">Before</h3>
                  <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-sm border border-gray-100">
                    <div className="bg-gray-200 h-48 sm:h-56 lg:h-64 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                      <Image 
                        src="/image/before.jpg" 
                        alt="Before - 짐이 가득한 방" 
                        width={400}
                        height={300}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="space-y-2 text-left">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm sm:text-base">방을 꽉 채운 대형 침대와 장롱</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm sm:text-base">방치된 갖가지 생활용품들</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm sm:text-base">정리하기 어려운 상태</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* After */}
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-indigo-600 mb-4">After</h3>
                  <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-sm border border-gray-100">
                    <div className="bg-gray-100 h-48 sm:h-56 lg:h-64 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                      <Image 
                        src="/image/after.jpg" 
                        alt="After - 완전히 비워진 방" 
                        width={400}
                        height={300}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="space-y-2 text-left">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm sm:text-base">깔끔하게 정리된 공간</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm sm:text-base">입주 준비 완료</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm sm:text-base">스트레스 해소</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 추가 문구 */}
            <div className="text-center mt-12">
              <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                저희가 수년간 쌓아온 현장 노하우와 고객 응대 방법,<br />
                효율적인 작업까지 교육에서 모두 알려드립니다
              </p>
            </div>
         </div>
       </section>

       {/* 4. 왜 지금 이 분야인가? (시장성 강조) */}
       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
         <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16">
             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
               📈 지속적으로 수요가 증가하는 블루오션
             </h2>
             <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
               AI로 대체 불가능한 &ldquo;사람의 손길이 꼭 필요한 일&rdquo;
             </p>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div className="space-y-8">
               <div className="flex items-start space-x-4">
                 <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                   <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                   </svg>
                 </div>
                 <div>
                   <h3 className="text-xl font-semibold text-gray-900 mb-2">초고령화 사회</h3>
                   <p className="text-gray-600">→ 유품정리 수요 증가</p>
                 </div>
               </div>
               
               <div className="flex items-start space-x-4">
                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                   <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
                   </svg>
                 </div>
                 <div>
                   <h3 className="text-xl font-semibold text-gray-900 mb-2">1인 가구 증가</h3>
                   <p className="text-gray-600">→ 집 비우기, 폐기물 처리 요청 증가</p>
                 </div>
               </div>
               
               <div className="flex items-start space-x-4">
                 <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                   <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                   </svg>
                 </div>
                 <div>
                   <h3 className="text-xl font-semibold text-gray-900 mb-2">AI 대체 불가능</h3>
                   <p className="text-gray-600">→ 사람의 손길이 꼭 필요한 전문 작업</p>
                 </div>
               </div>
             </div>
             
                          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 rounded-2xl text-white">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="text-lg font-semibold">📊 유품정리 시장</span>
                    </div>
                    <div className="text-sm opacity-90">
                      <p>고독사 증가로</p>
                      <p className="font-bold text-yellow-300">연 8~9% 수요 상승 중</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="text-lg font-semibold">♻ 폐기물 처리 시장</span>
                    </div>
                    <div className="text-sm opacity-90">
                      <p>환경 규제·ESG 투자 확대</p>
                      <p className="font-bold text-yellow-300">연 12% 안정 성장</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="text-lg font-semibold">👥 전문 인력 부족</span>
                    </div>
                    <div className="text-sm opacity-90">
                      <p>수요는 증가 중이지만</p>
                      <p className="font-bold text-yellow-300">현장 인력은 항상 부족</p>
                    </div>
                  </div>
                </div>
              </div>
           </div>
         </div>
       </section>

       {/* 5. 수료 후 독립 지원 */}
       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
         <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16">
             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
               수료 후 독립 지원
             </h2>
             <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
               혼자서도 안심하고 시작할 수 있도록 체계적인 지원을 제공합니다
             </p>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
               <div className="flex items-center mb-6">
                 <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                   <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                 </div>
                 <h3 className="text-xl font-semibold text-gray-900">의뢰 건 배정 지원</h3>
               </div>
               <p className="text-gray-600 leading-relaxed">
                 교육을 수료하신 분께는 실제 의뢰 건을 배정해드립니다.<br />
                 처음부터 안정적인 수입을 창출할 수 있도록 도와드립니다.
               </p>
             </div>
             
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
               <div className="flex items-center mb-6">
                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                   <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                   </svg>
                 </div>
                 <h3 className="text-xl font-semibold text-gray-900">현장 지원 가능</h3>
               </div>
               <p className="text-gray-600 leading-relaxed">
                 대형 현장이나 혼자 처리하기 어려운 작업에는<br />
                 장비와 인력을 함께 투입해 도와드립니다.
               </p>
             </div>
           </div>
         </div>
       </section>

      {/* 후기 섹션 */}
      <section id="reviews" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            
                         <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 max-w-4xl mx-auto px-4 leading-relaxed">
               이런 만족스러운 서비스,<br />
               당신도 직접 제공할 수 있게 도와드립니다
             </p>
          </div>
          
                     <div className="overflow-hidden relative">
             <div 
               className={`flex ${isAnimationStarted ? 'animate-scroll' : ''}`} 
               style={{ 
                 width: 'max-content',
                 transform: isAnimationStarted ? 'none' : 'translateX(0)'
               }}
             >
               {Array.from({ length: 15 }, (_, i) => (
                 <div key={`first-${i}`} className="flex-shrink-0 w-[20rem] sm:w-[28rem] lg:w-[36rem] mx-2 sm:mx-4">
                   <div className="bg-white p-0 rounded-2xl shadow-sm border border-gray-100 h-full flex items-center justify-center">
                     <Image
                       src={`/image/${i + 1}.PNG`}
                       alt={`실제 후기 ${i + 1}`}
                       width={400}
                       height={300}
                       className="rounded-xl object-contain max-h-full w-full"
                     />
                   </div>
                 </div>
               ))}
               {Array.from({ length: 15 }, (_, i) => (
                 <div key={`second-${i}`} className="flex-shrink-0 w-[20rem] sm:w-[28rem] lg:w-[36rem] mx-2 sm:mx-4">
                   <div className="bg-white p-0 rounded-2xl shadow-sm border border-gray-100 h-full flex items-center justify-center">
                     <Image
                       src={`/image/${i + 1}.PNG`}
                       alt={`실제 후기 ${i + 1}`}
                       width={400}
                       height={300}
                       className="rounded-xl object-contain max-h-full w-full"
                     />
                   </div>
                 </div>
               ))}
             </div>
           </div>
           
           {/* 추가 문구 */}
                       <div className="text-center mt-12">
              <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                저희가 수년간 쌓아온 현장 노하우와 고객 응대 방법,<br />
                효율적인 작업까지 교육에서 모두 알려드립니다
              </p>
            </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
                     <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 px-4">
             부담없이 문의해주세요
           </h2>
                                                                                       <p className="text-lg sm:text-xl text-indigo-100 mb-8 px-4">
               궁금한 점이나 고민이 있으시면 언제든 편하게 연락주세요
             </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <button 
              onClick={() => window.open('tel:010-8967-3800')}
              className="bg-white text-indigo-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg cursor-pointer w-full sm:w-auto"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              전화 상담하기
            </button>
            <button 
              onClick={() => window.open('sms:010-8967-3800')}
              className="bg-white text-indigo-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg cursor-pointer w-full sm:w-auto"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              문자 상담하기
            </button>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div>
               <h3 className="text-xl font-bold mb-4">신독환경</h3>
                               <p className="text-gray-400 text-sm sm:text-base">
                  보이지 않는 곳에서 성실하게,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;유품정리, 폐기물처리 전문 업체입니다.
                </p>
             </div>
                           <div>
                <h4 className="font-semibold mb-4">지역</h4>
                <ul className="flex space-x-4 text-gray-400 text-sm sm:text-base">
                  <li><a href="#" className="hover:text-white transition-colors">서울</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">경기</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">인천</a></li>
                </ul>
              </div>
             <div>
               <h4 className="font-semibold mb-4">연락처</h4>
               <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                 <li><a href="tel:010-8967-3800" className="hover:text-white transition-colors">010-8967-3800</a></li>
                 <li><a href="mailto:jks7094@gmail.com" className="hover:text-white transition-colors">jks7094@gmail.com</a></li>
               </ul>
             </div>
           </div>
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="text-gray-400 text-center text-sm sm:text-base">
              <p className="mb-2">주소: 경기도 고양시 일산동구 일산로 380번길 25-6, 102호</p>
              <p>대표: 전경섭 | 사업자등록번호: 685-67-00309</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 