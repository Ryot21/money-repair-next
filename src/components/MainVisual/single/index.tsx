
type Props = {
    title: string;
}

export default function SingleMainVisual({ title } : Props){
    return(
        <div className={"c-contents -imgBg -fv -single"}>
            <div className={"imgBox"}></div>
            <div className={"c-contents--inner"}>
                {/* ページタイトル */}
                <h1 className={"c-page-title -interview s-L -s20 -center -b -ls-2"}>{title}</h1>
                {/* パンくず 今後実装予定 */}

            </div>
        </div>
    );
}