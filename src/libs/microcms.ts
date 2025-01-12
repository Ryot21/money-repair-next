
// カテゴリー
export type Category = {
  name: string;
};

// ご利用者インタビュー
export type Interview = {
    id: string;        // ID
    company: string;   // 企業名
    date: string;      // 更新日（yyyy/mm/dd）
    mainTitle: string; // メインタイトル
    subTitle: string;  // サブタイトル
    category: {        // カテゴリー
        name: string;  // カテゴリー名
    };
    client: {          // 取引先情報
      name: string;    // __取引先名
      address: string; // __住所
      logo: string;    // __企業ロゴ
      link: string;    // __URL
    };
    article: string;     // 本文
    publishedAt: string; // 更新日
    createdAt: string;   // 作成日
};

// お役立ち情報
export type Information = {
  id: string; // ID
  date: string; // 更新日（yyyy/mm/dd）
  mainTitle: string; // メインタイトル
  subTitle: string; // サブタイトル
  category: {
    name: string; // カテゴリー
  };
  captionLists: {
    // 見出しリスト
    captionTitle01: string;
    captionTitle02: string;
    captionTitle03: string;
    captionTitle04: string;
    captionTitle05: string;
  };
  poster: {
    // 投稿者
    name: string;
    officialPosition: string;
    description: string;
    profilePicture: string;
    url: string;
  };
  read: string; // 導入文
  article: string; // 本文
  ctaOnOff: boolean; // CTA切り替え

  publishedAt: string; // 更新日
  createdAt: string; // 作成日
};