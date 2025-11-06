"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";

const STORAGE_KEY = "lp02_exit_intent_shown";

// ポップアップ画像をクリックした時の遷移先URL（変更が必要な場合はここを編集）
const POPUP_CLICK_URL = "https://www.money-repair.jp/news/008"; // ここに実際のリンクURLを設定してください

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const hasShownRef = useRef<boolean>(false);
  const pendingUrlRef = useRef<string | null>(null); // クリックされたリンクのURLを保持

  // ドメイン外のURLかどうかを判定
  const isExternalUrl = useCallback((url: string): boolean => {
    if (!url) return false;

    // アンカーリンク（#）の場合は除外
    if (url.startsWith("#")) return false;

    // 相対パス（/で始まる）の場合は同一ドメイン内
    if (url.startsWith("/")) return false;

    // 絶対URLの場合
    if (url.startsWith("http://") || url.startsWith("https://")) {
      try {
        const urlObj = new URL(url);
        const currentDomain =
          typeof window !== "undefined" ? window.location.hostname : "";
        const targetDomain = urlObj.hostname;

        // ドメインが異なる場合は外部リンク
        return (
          targetDomain !== currentDomain &&
          !targetDomain.includes("money-repair.jp")
        );
      } catch {
        return false;
      }
    }

    return false;
  }, []);

  // ポップアップを閉じる（遷移をキャンセル）
  const handleClose = useCallback(() => {
    setIsVisible(false);
    // ポップアップを閉じた時もセッションストレージに記録（初回のみ表示するため）
    if (typeof window !== "undefined") {
      sessionStorage.setItem(STORAGE_KEY, "true");
      hasShownRef.current = true;
      document.body.style.overflow = "";
      // 元のリンクへの遷移は行わない（ユーザーが閉じた場合は遷移をキャンセル）
      pendingUrlRef.current = null;
    }
  }, []);

  // ポップアップ画像をクリックした時の処理
  const handleBannerClick = useCallback(() => {
    setIsVisible(false);
    if (typeof window !== "undefined") {
      // ポップアップ画像をクリックした場合はセッションストレージに記録
      sessionStorage.setItem(STORAGE_KEY, "true");
      hasShownRef.current = true;
      document.body.style.overflow = "";
      // 設定されたURLに遷移
      window.location.href = POPUP_CLICK_URL;
      pendingUrlRef.current = null;
    }
  }, []);

  // ポップアップを表示
  const showPopup = useCallback(
    (url?: string) => {
      // 既に表示中の場合は何もしない
      if (isVisible) {
        return;
      }

      // セッション内で既にポップアップを表示したことがあるかチェック
      const hasShown = sessionStorage.getItem(STORAGE_KEY);
      if (hasShown) {
        hasShownRef.current = true;
        return;
      }

      setIsVisible(true);
      if (url) {
        pendingUrlRef.current = url; // クリックされたリンクのURLを保持
      }
      document.body.style.overflow = "hidden";
    },
    [isVisible]
  );

  // ポップアップを閉じた時にスクロールを復元
  useEffect(() => {
    if (!isVisible) {
      document.body.style.overflow = "";
    }
  }, [isVisible]);

  // ドメイン外へのリンククリック時の検知
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");

      if (!link) return;

      // ポップアップ内のリンクは除外
      if (link.closest(".c-closeModal")) {
        return;
      }

      const href = link.getAttribute("href");
      if (!href) return;

      // ドメイン外のURLかどうかを判定
      if (isExternalUrl(href)) {
        // セッション内で既にポップアップ画像をクリックしたことがある場合は通常通り遷移
        const hasShown = sessionStorage.getItem(STORAGE_KEY);
        if (hasShown) {
          return; // 通常通りリンクを実行
        }

        // ページ遷移を一時的に止める
        e.preventDefault();
        e.stopPropagation();

        // ポップアップを表示
        showPopup(href);
      }
    };

    // イベントリスナーを追加（キャプチャフェーズで検知）
    document.addEventListener("click", handleLinkClick, true);

    // クリーンアップ
    return () => {
      document.removeEventListener("click", handleLinkClick, true);
    };
  }, [isExternalUrl, showPopup]);

  return (
    <div className={`c-closeModal ${isVisible ? "is-visible" : ""}`}>
      <div className="c-closeModal__bg" onClick={handleClose} />
      <div className="c-closeModal__content">
        <button
          type="button"
          className="c-closeModal__backLink"
          onClick={handleClose}
          aria-label="閉じる"
        />
        <div className="bannerBox">
          <div
            onClick={handleBannerClick}
            className="bannerLink"
            style={{ cursor: "pointer" }}
          >
            <Image
              src="/images/banner/ExpoInTokyo2025.png"
              alt="ビジネスチャンスEXPO IN TOKYO 2025に出展します!!"
              width={900}
              height={750}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
