import type { Client } from "@/types/microcms";

type Props = {
    client: Client | Client[];
};

export default function LpClient({ client }: Props) {
    const clients = Array.isArray(client) ? client : [client];
    
    return (
        <div className={"c-post--data"}>{/* テキストエリア */}
            {clients.map((item, index) => (
                <div key={index} className={"c-card-lists"}>
                    {/* 企業名 */}
                    <h3 className={"c-post--title s-ML -s16 -left -b -ls-2 -lh-1_5 mgb2 mgb2s"}>{item.name}</h3>
                    {/* 説明 */}
                    <p className={"c-post--text s-S -s12 -left -b -ls-2 -lh-1_5"}>{item.description}</p>
                </div>
            ))}
        </div>
    );
}