import Link from "next/link";

export default function Page() {
    return (
        <>
            <div className="p-company__body">
                <dl>
                    <div className="p-company__list">
                        <dt>会社名</dt>
                        <dd><Link className="c-link s-S -ls-2 -ws-n -color03" href="https://impreme.jp/" target="_blank">株式会社インプレーム</Link></dd>
                    </div>
                    <div className="p-company__list">
                        <dt>代表取締役</dt>
                        <dd>江本 一郎</dd>
                    </div>
                    <div className="p-company__list">
                        <dt>所在地</dt>
                        <dd>〒101-0032<br />東京都千代田区岩本町2-19-9　丸栄ビル5階</dd>
                    </div>
                    <div className="p-company__list">
                        <dt>TEL / <br className="sp" />FAX</dt>
                        <dd>03-6264-7047 / 03-6264-7048</dd>
                    </div>
                    
                    {/* <div className="p-company__list">
                        <dt>メール<br className="sp" />アドレス</dt>
                        <dd>info@impreme.jp</dd>
                    </div> */}
                    <div className="p-company__list">
                        <dt>事業内容</dt>
                        <dd>
                            総合金融コンサルタント<br />
                            生命保険代理店<br />
                            不動産業<br />
                            FP業
                        </dd>
                    </div>
                    <div className="p-company__list">
                        <dt>免許番号</dt>
                        <dd>
                            関東財務局長（金仲）第1017号<br />
                            東京都知事（2）第103870号
                        </dd>
                    </div>
                    <div className="p-company__list">
                        <dt>所属金融商品<br className="sp" />取引業者</dt>
                        <dd>
                            東海東京証券株式会社　東海財務局長（金商）第140号<br />
                            加入協会：<Link className="c-link s-S -ls-2 -ws-n -color03" href="https://www.jsda.or.jp/" target="_blank">日本証券業協会</Link>、
                            <Link className="c-link s-S -ls-2 -ws-n -color03" href="https://www.ffaj.or.jp/" target="_blank">一般社団法人金融先物取引業協会</Link>、
                            <Link className="c-link s-S -ls-2 -ws-n -color03" href="https://www.t2fifa.or.jp/" target="_blank">一般社団法人第二種金融商品取引業協会</Link>、
                            <Link className="c-link s-S -ls-2 -ws-n -color03" href="https://www.jiaa.or.jp/" target="_blank">一般社団法人日本投資顧問業協会</Link>、
                            <Link className="c-link s-S -ls-2 -ws-n -color03" href="https://jstoa.or.jp/" target="_blank">一般社団法人日本STO協会</Link>
                        </dd>
                    </div>
                </dl>
            </div>
        </>
    )
}