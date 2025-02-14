"use client";

import Link from "next/link";
import { useActionState } from "react";
import { createContactDate } from "@/actions/contact";
import { useState, useEffect } from "react";

import { useSearchParams } from 'next/navigation';

type Props = {
    customClass: string;
}
// 状態の型定義
type ContactState = {
    status: "success" | "error";
    message: string;
  } | null;

// 【バリデーション関数】
const validatePhoneNumber = (phoneNumber: string) => {
  const digitsOnly = phoneNumber.replace(/[-ー\s]/g, "");

  if (!/^\d+$/.test(digitsOnly) || !digitsOnly.startsWith("0")) {
    return false;
  }

  if (digitsOnly.length < 10 || digitsOnly.length > 11) {
    return false;
  }

  const areaCodePatterns = [
    "^0[1-9]0",
    "^0[1-9]{2}",
    "^0[1-9]{3}",
    "^0[1-9]{4}",
  ];

  return areaCodePatterns.some((pattern) =>
    new RegExp(pattern).test(digitsOnly)
  );
};
const validateEmail = (email: string) => {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
};

export default function ContactForm({ customClass }: Props) {
    // useActionStateの型を明示的に指定
    const [state, formAction] = useActionState<ContactState, FormData>(createContactDate, null);

    // パラメーター取得
    const searchParams = useSearchParams();
    const type = searchParams.get('type');

    const [formData, setFormData] = useState({
        purpose: type === 'download' ? '資料ダウンロード' : type === 'contact' ? 'お問い合わせ' : '',
        company: "",
        name: "",
        phone: "",
        email: "",
        message: "",
    });
    const [isAgreed, setIsAgreed] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [errors, setErrors] = useState({
        phone: "",
        email: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // 電話番号のフォーマット
        if (name === "phone") {
            let formattedValue = value.replace(/[^\d]/g, "");
            if (formattedValue.length > 2) {
                if (formattedValue.startsWith("0")) {
                    if (
                        ["090", "080", "070", "050"].some((prefix) =>
                        formattedValue.startsWith(prefix)
                        )
                    ) {
                        formattedValue = formattedValue.replace(
                        /^(\d{3})(\d{4})(\d{4}).*/,
                        "$1-$2-$3"
                        );
                    } else if (
                        ["03", "04", "06"].some((prefix) =>
                        formattedValue.startsWith(prefix)
                        )
                    ) {
                        formattedValue = formattedValue.replace(
                        /^(\d{2})(\d{4})(\d{4}).*/,
                        "$1-$2-$3"
                        );
                    } else {
                        formattedValue = formattedValue.replace(
                        /^(\d{3,4})(\d{2,3})(\d{4}).*/,
                        "$1-$2-$3"
                        );
                    }
                }
            }
            if (formattedValue.length > 13) {
                formattedValue = formattedValue.slice(0, 13);
            }
            setFormData((prev) => ({
                ...prev,
                phone: formattedValue,
            }));
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === "phone") {
        if (!value) {
            setErrors((prev) => ({ ...prev, phone: "電話番号を入力してください" }));
        } else if (!validatePhoneNumber(value)) {
            setErrors((prev) => ({
            ...prev,
            phone: "正しい電話番号を入力してください",
            }));
        } else {
            setErrors((prev) => ({ ...prev, phone: "" }));
        }
        }

        if (name === "email") {
        if (!value) {
            setErrors((prev) => ({
            ...prev,
            email: "メールアドレスを入力してください",
            }));
        } else if (!validateEmail(value)) {
            setErrors((prev) => ({
            ...prev,
            email: "正しいメールアドレスを入力してください",
            }));
        } else {
            setErrors((prev) => ({ ...prev, email: "" }));
        }
        }
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsAgreed(e.target.checked);
    };

    // フォームのバリデーションチェック
    useEffect(() => {
        const isValid =
            formData.purpose.trim() !== "" &&
            formData.company.trim() !== "" &&
            formData.name.trim() !== "" &&
            formData.phone.trim() !== "" &&
            validatePhoneNumber(formData.phone) &&
            formData.email.trim() !== "" &&
            validateEmail(formData.email) &&
            formData.message.trim() !== "" &&
            isAgreed &&
            !errors.phone &&
            !errors.email;

        setIsFormValid(isValid);
    }, [formData, isAgreed, errors]);

    console.log(state);

    // 送信完了
    if (state?.status === "success") {
        return (
        <p className="s-ML -center -ls-1 -lh-2">
            ご回答後はできる限り早急に
            <br />
            <span className="s-ML -b">
            『<span className="s-ML -b -red">03-6264-7047</span>』
            </span>
            よりご連絡いたします。
            <br />
            <br />
            また、弊社営業時間外の場合、
            <br />
            <span className="s-ML -b">担当者の携帯番号</span>から
            <br className="sp" />
            お電話する場合がございます。
            <br />
            <br />
            お忙しい中、
            <br />
            お時間を割いてご回答いただきましたこと、
            <br />
            心より感謝申し上げます。
            <br />
            <br />
        </p>
        );
    }

    // Frist Access
    return (
        <form className={`c-form ${customClass}`} action={formAction}>
            <table className="mgb5 mgb5s">
                <tbody>
                    {/* 目的 */}
                    <tr>
                        <th className="required s-M -s14 -b -ls-2">目的</th>
                        <td>
                            <select
                                id="purpose"
                                className="s-S"
                                name="purpose"
                                value={formData.purpose}
                                onChange={handleChange}
                                required
                            >
                                <option value="">選択して下さい</option>
                                <option value="資料ダウンロード">資料ダウンロード</option>
                                <option value="お問い合わせ">お問い合わせ</option>
                            </select>
                        </td>
                    </tr>
                    {/* 会社名 */}
                    <tr>
                        <th className="required s-M -s14 -b -ls-2">会社名</th>
                        <td>
                        <input
                            id="company"
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="株式会社インプレーム"
                        />
                        </td>
                    </tr>
                    {/* ご担当者名 */}
                    <tr>
                        <th className="required s-M -s14 -b -ls-2">ご担当者名</th>
                        <td>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="インプレーム 太郎"
                        />
                        </td>
                    </tr>
                    {/* 電話番号 */}
                    <tr>
                        <th className="required s-M -s14 -b -ls-2">電話番号</th>
                        <td>
                        <input
                            id="phone"
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="03-1234-5678"
                            className={errors.phone ? "-error" : ""}
                        />
                        {errors.phone && (
                            <span className="s-SS -error">{errors.phone}</span>
                        )}
                        </td>
                    </tr>
                    {/* メールアドレス */}
                    <tr>
                        <th className="required s-M -s14 -b -ls-2">メールアドレス</th>
                        <td>
                        <input
                            id="email"
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="sample@impreme.jp"
                            className={errors.email ? "-error" : ""}
                        />
                        {errors.email && (
                            <span className="s-SS -error">{errors.email}</span>
                        )}
                        </td>
                    </tr>
                    {/* 内容 */}
                    <tr>
                        <th className="required s-M -s14 -b -ls-2 -lh-1_5">
                        お問い合わせや
                        <br />
                        ご質問など
                        </th>
                        <td>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            cols={30}
                            rows={10}
                            placeholder="お問い合わせ内容を入力してください。"
                        />
                        </td>
                    </tr>
                </tbody>
            </table>
            {/* プライバシーポリシー */}
            <p className="-center -lh-2 -ls-2 mgb5 mgb5s">
                ※<Link href="/privacy-policy" className="-color03 b-text ">プライバシーポリシー</Link>をお読みいただき、同意の上お問い合わせください。
            </p>

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
                    <label className="required" htmlFor="checkbox">
                        <span>同意する</span>
                    </label>
                </div>
                <p className="mgb5 mgb10s">入力内容をご確認のうえ、次の画面へ進んでください。</p>

                {/* エラーテキスト */}
                {state?.status === "error" && (
                    <p className="s-M -center -red -ls-2">{state.message}</p>
                )}

                {/* 送信 */}
                <div className="c-form--btn">
                    <button
                        type="submit"
                        value="送信する"
                        className={!isFormValid ? "disabled" : ""}
                        id="submit"
                        disabled={!isFormValid}
                    >
                        内容確認画面へ
                    </button>
                </div>
            </div>
        </form>
    );
}
