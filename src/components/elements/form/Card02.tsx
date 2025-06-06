"use client";
// LPに使用するカード型のフォーム（目的あり）

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { formatPhoneNumber, validateField } from "@/utils/validation";
import type {
  ContactState,
  FormStep,
  LpFormData,
  FormErrors,
  Props as FormProps,
} from "@/types/form";

export default function CardContactForm({ customClass }: FormProps) {
  const router = useRouter();
  // フォームの状態管理
  const [step, setStep] = useState<FormStep>("input");
  // 送信状態の管理
  const [submitStatus, setSubmitStatus] = useState<ContactState>(null);

  // フォームデータの状態管理を簡素化
  const [formData, setFormData] = useState<LpFormData>({
    company: "",
    name: "",
    phone: "",
    email: "",
  });

  // プライバシーポリシーの同意状態
  const [isAgreed, setIsAgreed] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({
    phone: "",
    email: "",
  });

  // メモ化されたフォーム変更ハンドラー
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const formattedValue = formatPhoneNumber(value);
      setFormData((prev) => ({ ...prev, phone: formattedValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  }, []);

  // メモ化されたバリデーション処理
  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  }, []);

  // メモ化されたチェックボックス処理
  const handleCheckboxChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsAgreed(e.target.checked);
    },
    []
  );

  // フォームの有効性をメモ化
  const isFormValidMemo = useMemo(() => {
    const { company, name, phone, email } = formData;
    return (
      company.trim() !== "" &&
      name.trim() !== "" &&
      phone.trim() !== "" &&
      email.trim() !== "" &&
      isAgreed &&
      !errors.phone &&
      !errors.email
    );
  }, [formData, isAgreed, errors]);

  // フォームの有効性を更新
  useEffect(() => {
    setIsFormValid(isFormValidMemo);
  }, [isFormValidMemo]);

  // メモ化された送信処理を簡素化
  const handleSubmit = useCallback(async () => {
    if (!isFormValid) return;

    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append("company", formData.company);
      formDataToSubmit.append("name", formData.name);
      formDataToSubmit.append("phone", formData.phone);
      formDataToSubmit.append("email", formData.email);

      const response = await fetch(
        "https://money-repair-media.form.newt.so/v1/F8CLJ-h_T",
        {
          method: "POST",
          body: formDataToSubmit,
        }
      );

      if (!response.ok) {
        throw new Error("送信に失敗しました");
      }

      setSubmitStatus({
        status: "success",
        message: "お問い合わせを受け付けました。",
      });

      setFormData({
        company: "",
        name: "",
        phone: "",
        email: "",
      });
      setIsAgreed(false);

      router.push("/lp/thanks");
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus({
        status: "error",
        message:
          "エラーが発生しました。しばらく時間をおいて再度お試しください。",
      });
    }
  }, [formData, isFormValid, router]);

  // メモ化された確認画面遷移処理
  const handleConfirm = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (isFormValid) {
        setStep("confirm");
      }
    },
    [isFormValid]
  );

  // メモ化された戻る処理
  const handleBack = useCallback(() => {
    setStep("input");
  }, []);

  // 確認画面
  if (step === "confirm") {
    return (
      <div className="c-card -t05">
        <div className="imgBox">
          <Image
            src="/images/SVG/Lp/ver02/contact-label.svg"
            alt="3分でわかる資料ダウンロード"
            width={334}
            height={50}
          />
        </div>
        <div className="c-card--inner">
          <div className={`c-form ${customClass}`}>
            <table className="c-form--inner mgb5 mgb5s">
              <tbody>
                <tr>
                  <th className="s-S -s16 -b -ls-2">会社名</th>
                  <td>
                    <p className="s-SS -s12 -ls-2">{formData.company}</p>
                  </td>
                </tr>
                <tr>
                  <th className="s-S -s16 -b -ls-2">会社名</th>
                  <td>
                    <p className="s-SS -s12 -ls-2">{formData.company}</p>
                  </td>
                </tr>
                <tr>
                  <th className="s-S -s16 -b -ls-2">ご担当者名</th>
                  <td>
                    <p className="s-SS -s12 -ls-2">{formData.name}</p>
                  </td>
                </tr>
                <tr>
                  <th className="s-S -s16 -b -ls-2">電話番号</th>
                  <td>
                    <p className="s-SS -s12 -ls-2">{formData.phone}</p>
                  </td>
                </tr>
                <tr>
                  <th className="s-S -s16 -b -ls-2">メールアドレス</th>
                  <td>
                    <p className="s-SS -s12 -ls-2">{formData.email}</p>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="c-form--btn">
              <button
                type="button"
                onClick={handleBack}
                className="c-link -btn -maru -gray -center s-M -s14 -b -ls-2 mgr2 mgr2s"
              >
                修正する
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="c-link -btn -maru -orange -icon -arrow -center s-M -s14 -b -ls-2 primary mgl2 mgl2s"
              >
                送信する
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 入力画面
  return (
    <div className="c-card -t05  a-fade -tm05 -sp05">
      <Image
        src="/images/SVG/Lp/ver02/contact-label.svg"
        alt="3分でわかる資料ダウンロード"
        width={334}
        height={50}
      />
      <div className="c-card--inner">
        {/* <p className="-b -color03 mgb3 mgb5s">1分でわかる資料ダウンロード</p> */}
        <form
          className={`c-form ${customClass}`}
          onSubmit={handleConfirm}
          method="POST"
        >
          {/* 会社名 */}
          <div className="c-form--item">
            <input
              id="company"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder=" "
            />
            <span>会社名</span>
          </div>
          {/* ご担当者名 */}
          <div className="c-form--item">
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder=" "
            />
            <span>ご担当者名</span>
          </div>
          {/* 電話番号 */}
          <div className="c-form--item">
            <input
              id="phone"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder=" "
              className={errors.phone ? "-error" : ""}
            />
            <span>電話番号</span>
            {errors.phone && (
              <p className="s-SS -error mgt1 mgt1s">{errors.phone}</p>
            )}
          </div>
          {/* メールアドレス */}
          <div className="c-form--item">
            <input
              id="email"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder=" "
              className={errors.email ? "-error" : ""}
            />
            <span>メールアドレス</span>
            {errors.email && (
              <p className="s-SS -error mgt1 mgt1s">{errors.email}</p>
            )}
          </div>
          {/* 送信ボタン */}
          <div id="chk_policy" className="c-form--consent">
            <p id="error" className={!isAgreed ? "visible" : "hidden"}>
              同意するにチェックを入れてください。
            </p>
            {/* 同意 */}
            <div className="policyBox">
              <input
                type="checkbox"
                id="checkbox"
                name="policy_doui"
                checked={isAgreed}
                onChange={handleCheckboxChange}
                value="1"
              />
              <label htmlFor="checkbox">個人情報の取り扱いに同意します*</label>
            </div>

            {/* エラーテキスト */}
            {submitStatus?.status === "error" && (
              <p className="s-M -center -red -ls-2">{submitStatus.message}</p>
            )}

            {/* 送信 */}
            <div className="c-form--btn mgb5 mgb5s">
              <button
                type="submit"
                value="確認する"
                className={`ver01 ${!isFormValid ? "disabled" : ""}`}
                id="submit"
                disabled={!isFormValid}
              >
                資料ダウンロード（無料）
              </button>
            </div>
          </div>
          {/* プライバシーポリシー */}
          <p className="c-form--consentText -lh-2 -ls-2">
            ※お客様にお求めのコンテンツを提供するために、上記で送信された個人情報についてインプレームが<Link href="/privacy-policy" className="-color03 b-text">プライバシーポリシー</Link>に基づき利用することに同意します。
          </p>
        </form>
      </div>
    </div>
  );
}
