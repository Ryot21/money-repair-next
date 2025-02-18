// 電話番号のバリデーション関数
export const validatePhoneNumber = (phoneNumber: string) => {
  // ハイフンと空白を除去
  const digitsOnly = phoneNumber.replace(/[-ー\s]/g, "");

  // 数字のみで、0から始まることを確認
  if (!/^\d+$/.test(digitsOnly) || !digitsOnly.startsWith("0")) {
    return false;
  }

  // 電話番号の桁数チェック（10-11桁）
  if (digitsOnly.length < 10 || digitsOnly.length > 11) {
    return false;
  }

  // 市外局番のパターンチェック
  const areaCodePatterns = [
    "^0[1-9]0", // 携帯電話など
    "^0[1-9]{2}", // 市外局番2桁
    "^0[1-9]{3}", // 市外局番3桁
    "^0[1-9]{4}", // 市外局番4桁
  ];

  return areaCodePatterns.some((pattern) =>
    new RegExp(pattern).test(digitsOnly)
  );
};

// メールアドレスのバリデーション関数
export const validateEmail = (email: string) => {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
};
