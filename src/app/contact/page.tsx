import ContactForm from "@/components/Form";

export default function Page(){
    return (
        <>
            {/* 導入部分 */}
            <div className="c-contents pdt5 pdt10s pdb10 pdb10s">
                <div className="c-contents--inner">
                    <p className="s-ML -s14 -center -ls-2 -lh-2 pdb10 pdb10s">
                        こちらのフォームから必要事項をご入力ください。<br className="tb-pc" />
                        お問い合わせの内容を確認後、<br className="tb-pc" />
                        担当者より3営業日以内にご連絡いたします。
                    </p>
                    {/* STEP */}
                    <div className="c-contact--step">
                        <ul className="step-ttl c-flex -col3 -jc-sb pdb2 pdb2s">
                            <li className="flexItem -active"><p className="s-M -center -b -ls-3">STEP01</p></li>
                            <li className="flexItem"><p className="s-M -center -b -ls-3">STEP02</p></li>
                            <li className="flexItem"><p className="s-M -center -b -ls-3">STEP03</p></li>
                        </ul>
                        <ul className="step-des c-flex -col3 -jc-sb pdt2 pdt3s">
                            <li className="flexItem -active"><p className="s-M -center -b -ls-2">情報入力</p></li>
                            <li className="flexItem"><p className="s-M -center -b -ls-2">内容確認</p></li>
                            <li className="flexItem"><p className="s-M -center -b -ls-2">送信完了</p></li>
                        </ul>
                    </div>

                </div>
            </div>
            {/* お問い合わせフォーム */}
            <div className="c-contents mgb10 mgb20s">
                <div className="c-contents--inner -bg-white -card">
                    <ContactForm />
                </div>
            </div>
        </>
    )
}