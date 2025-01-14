
type Props = {
    title: string;
    customClass?: string;
}

export default function SingleMainVisual({ title, customClass } : Props){
    return(
        <div className={"c-contents -imgBg -fv -single"}>
            <div className={"imgBox"}></div>
            <div className={"c-contents--inner"}>
                {/* ページタイトル */}
                <h1 className={`c-page-title s-L -s20 -center -b -ls-2 ${customClass || ''} `}>{title}</h1>
                {/* パンくず 今後実装予定 */}

            </div>
        </div>
    );
}