"use client";

import { useEffect, useState, useRef, useCallback } from "react";
// import { useSearchParams } from "next/navigation";

const BANNER_STORAGE_KEY = "lp02_browser_back_btm_banner_shown";

const CONFIG = {
  MIN_TIME_ON_PAGE: 0,
  MIN_SCROLL_PERCENT: 0,
  // ENABLE_TEST_MODE: false,
  INIT_DELAY: 500,
};

export default function ExitIntentBtmBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const hasShownRef = useRef<boolean>(false);
  const timeRequirementMetRef = useRef<boolean>(false);
  const scrollRequirementMetRef = useRef<boolean>(false);
  const historyBlockActiveRef = useRef<boolean>(false);
  const isInitializedRef = useRef<boolean>(false);
  // const searchParams = useSearchParams();
  
  // const isTestMode = CONFIG.ENABLE_TEST_MODE || searchParams?.get('test') === 'true';

  // デバッグログ用のヘルパー（本番では動作しない）
  // const debugLog = useCallback((message: string, data?: unknown) => {
  //   if (process.env.NODE_ENV === 'development' || isTestMode) {
  //     console.log(`[BtmBanner] ${message}`, data || '');
  //   }
  // }, [isTestMode]);

  const checkReadyState = useCallback(() => {
    const timeOk = CONFIG.MIN_TIME_ON_PAGE === 0 || timeRequirementMetRef.current;
    const scrollOk = CONFIG.MIN_SCROLL_PERCENT === 0 || scrollRequirementMetRef.current;
    
    // debugLog('Ready state check', { 
    //   timeOk, 
    //   scrollOk,
    //   timeRequired: CONFIG.MIN_TIME_ON_PAGE,
    //   scrollRequired: CONFIG.MIN_SCROLL_PERCENT
    // });
    
    if (timeOk && scrollOk) {
      setIsReady(true);
      // debugLog('✅ バナー表示可能になりました');
    }
  }, []);

  // 滞在時間チェック
  useEffect(() => {
    if (CONFIG.MIN_TIME_ON_PAGE === 0) {
      timeRequirementMetRef.current = true;
      // debugLog('⏱️ 滞在時間条件: 即座にクリア (0秒設定)');
      checkReadyState();
      return;
    }

    const timeoutId = setTimeout(() => {
      timeRequirementMetRef.current = true;
      // debugLog(`⏱️ 滞在時間条件クリア: ${CONFIG.MIN_TIME_ON_PAGE}秒経過`);
      checkReadyState();
    }, CONFIG.MIN_TIME_ON_PAGE * 1000);

    return () => clearTimeout(timeoutId);
  }, [checkReadyState]);

  // スクロールチェック
  useEffect(() => {
    if (CONFIG.MIN_SCROLL_PERCENT === 0) {
      scrollRequirementMetRef.current = true;
      // debugLog('📜 スクロール条件: 即座にクリア (0%設定)');
      checkReadyState();
      return;
    }

    const handleScroll = () => {
      if (scrollRequirementMetRef.current) return;

      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercent >= CONFIG.MIN_SCROLL_PERCENT) {
        scrollRequirementMetRef.current = true;
        // debugLog(`📜 スクロール条件クリア: ${Math.round(scrollPercent)}%`);
        checkReadyState();
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初回チェック

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [checkReadyState]);

  // ブラウザバックの検知
  useEffect(() => {
    if (isInitializedRef.current) {
      // debugLog('⚠️ 既に初期化済みのため、重複初期化をスキップ');
      return;
    }

    // セッションストレージチェック
    // if (!isTestMode) {
      const hasShown = sessionStorage.getItem(BANNER_STORAGE_KEY);
      if (hasShown) {
        hasShownRef.current = true;
        // debugLog('ℹ️ セッション内で既に表示済みのためスキップ');
        return;
      }
    // }

    // debugLog('🔧 初期化開始...', { 
    //   delay: CONFIG.INIT_DELAY,
    //   testMode: isTestMode 
    // });

    // 初期化遅延
    const initTimeout = setTimeout(() => {
      window.history.pushState(null, "", window.location.href);
      historyBlockActiveRef.current = true;
      isInitializedRef.current = true;
      // debugLog('✅ ブラウザバック検知を初期化しました');
    }, CONFIG.INIT_DELAY);

    const handlePopState = () => {
      // debugLog('🔙 popstate イベント発火', {
      //   initialized: isInitializedRef.current,
      //   ready: isReady,
      //   shown: hasShownRef.current,
      //   active: historyBlockActiveRef.current,
      //   testMode: isTestMode
      // });

      if (!isInitializedRef.current) {
        // debugLog('⚠️ まだ初期化されていません');
        return;
      }

      const shouldShow = isReady && 
                        !hasShownRef.current && 
                        historyBlockActiveRef.current;

      if (shouldShow) {
        // debugLog('🎉 バナー表示条件を満たしました');
        setShowBanner(true);
        
        // if (!isTestMode) {
          hasShownRef.current = true;
          sessionStorage.setItem(BANNER_STORAGE_KEY, "true");
          // debugLog('💾 セッションストレージに記録しました');
        // }
        
        // 履歴を再度追加してバックを防ぐ
        window.history.pushState(null, "", window.location.href);
      } else {
        // debugLog('❌ バナー表示条件を満たしていません');
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      clearTimeout(initTimeout);
      window.removeEventListener("popstate", handlePopState);
      // debugLog('🧹 クリーンアップ完了');
    };
  }, [isReady]);

  // 設定情報をログ出力（本番では無効）
  // useEffect(() => {
  //   debugLog('🔧 ExitIntentBtmBanner 設定:', {
  //     最低滞在時間: `${CONFIG.MIN_TIME_ON_PAGE}秒`,
  //     最低スクロール: `${CONFIG.MIN_SCROLL_PERCENT}%`,
  //     初期化遅延: `${CONFIG.INIT_DELAY}ms`,
  //     テストモード: isTestMode,
  //   });
  // }, [isTestMode, debugLog]);

  const handleClose = () => {
    // debugLog('❌ バナーを閉じました');
    setShowBanner(false);
    historyBlockActiveRef.current = false;
    
    if (isInitializedRef.current) {
      window.history.back();
    }
  };

  const handleStay = () => {
    // debugLog('✨ 特別オファーを見るボタンをクリック');
    setShowBanner(false);
    historyBlockActiveRef.current = false;
    
    if (isInitializedRef.current) {
      window.history.back();
    }
    
    // CTAセクションへスクロール
    const ctaSection = document.getElementById('sc02');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!showBanner) return null;

  return (
    <div className={`c-browserBackModal -bottom ${showBanner ? "is-visible" : ""}`}>
      {/* 背景オーバーレイ */}
      <div className="c-browserBackModal__bg" onClick={handleClose} />
      {/* コンテンツ */}
      <div className="c-browserBackModal__content">
        <div className="c-browserBackModal__main">
          <div className="c-browserBackModal__header">
            <span className="c-browserBackModal__icon">⚠️</span>
            <h3>ちょっと待って!</h3>
          </div>

          <p className="c-browserBackModal__text">
            お帰りになる前に、
            <strong className="c-browserBackModal__highlight">特別なご案内</strong>
            があります!
            <br />
            今だけの限定キャンペーンをご確認ください。
          </p>

          <div className="c-browserBackModal__btnArea">
            <button
              onClick={handleStay}
              className="c-browserBackModal__btn c-browserBackModal__primary"
            >
              🎁 特別オファーを見る
            </button>
          </div>
        </div>

        {/* 閉じるボタン */}
        <button
          type="button"
          className="c-browserBackModal__close"
          onClick={handleClose}
          aria-label="閉じる"
        >
          ✕
        </button>
      </div>
    </div>
  );
}