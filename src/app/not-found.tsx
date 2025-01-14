// import styles from "@/app/not-found.module.scss";
import SingleMainVisual from "@/components/MainVisual/single";
import PageButtonLink from "@/components/Parts/Button/PageButton";

export default function NotFound() {
  return (
    <main>
      <SingleMainVisual title="ページが見つかりませんでした" customClass="-notFound"/>
      <div className="c-contents--inner pdt10 pdt10s pdb20 pdb20s">
        <p className="s-ML -s14 -center -ls-2 -lh-1_5 mgb1 mgb3s">指定されたURLのページは存在しません。<br />URLを再度ご確認ください。</p>
        <p className="s-SS -s10 -center -ls-2 -lh-1_5 mgb5 mgb10s">The page with specified URL does not exist.</p>
        <p className="s-s -s14 -center -ls-2 -lh-1_5 mgb1 mgb3s">ページが移動または削除されたか、<br className="sp"/>URLが間違っている可能性があります。<br />恐れ入りますが、再度ご確認ください。</p>
        <p className="s-SS -s10 -center -ls-2 -lh-1_5 mgb10 mgb20s">The page may have been moved or deleted, <br className="sp"/>or the URL may be incorrect. <br />We apologize for the inconvenience, but please check again.</p>
        {/* ボタン */}
        <div className={"c-contents--btnArea"}>
          <PageButtonLink href="/">トップへ戻る</PageButtonLink>
        </div>
      </div>
    </main>
  );
}