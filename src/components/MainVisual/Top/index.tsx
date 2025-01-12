
import Image  from "next/image";
import Script from "next/script";
import "@/styles/globals.scss";

export default function TopMainVisual() {
    return (
        <div className={"c-contents -imgBg -fv -top"}>

            {/* ボード */}
            <div className={"imgBox"}></div>
        
            {/* 画像 */}
            <div className={"c-contentsBox -pic16_9 -pic3_4_s -p01"}>
                <Image 
                    src="/images/item/480-320.png"
                    alt=""
                    width={480}
                    height={320}
                />
            </div>{/* // 中央 */}
            <div className={"c-contentsBox -pic9_16 -pic4_3_s -p02"}>
                <Image 
                    src="/images/item/480-320.png"
                    alt=""
                    width={480}
                    height={320}
                />
            </div>{/* // 右01 */}
            <div className={"c-contentsBox -pic4_3 -p03 -blur-b02"}>
                <Image 
                    src="/images/item/480-320.png"
                    alt=""
                    width={480}
                    height={320}
                />
            </div>{/* // 右02 */}
            <div className={"c-contentsBox -pic9_16 -pic4_3_s -p04"}>
                <Image 
                    src="/images/item/480-320.png"
                    alt=""
                    width={480}
                    height={320}
                />
            </div>{/* // 左01 */}
            <div className={"c-contentsBox -pic4_3 -p05 -blur-b03"}>
                <Image 
                    src="/images/item/480-320.png"
                    alt=""
                    width={480}
                    height={320}
                />
            </div>{/* // 左02 */}

            {/* キーワード */}
            <div className={"c-contentsBox -catchCopy01"}>
                <span>キャッチコピーはここに入ります。</span>
            </div>
            <div className={"c-contentsBox -catchCopy02"}>
                <span>キャッチコピーはここに入ります。</span>
            </div>

            {/* 注釈 */}
            <Script src="/js/typing.js"/>
            <div className={"c-contentsBox -comments01"}>
                <p>その判断が、</p>
                <p className={"a-typing"}></p>
            </div>
        </div>
    );
}