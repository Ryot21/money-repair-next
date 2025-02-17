import { getClientList } from "@/libs/microcms";
import ClientLogoSwiper from "@/components/Slider/Logo";

// メインの非同期コンポーネント
export default async function LogoSlider() {
    try {
        const response = await getClientList();
        if (response.contents.length === 0) {
            return <p>クライアントデータが見つかりません...</p>;
        }
        return <ClientLogoSwiper clients={response.contents} />;

    } catch (error) {
        console.error("クライアントデータの取得に失敗しました:", error);
        return <p>クライアントデータの取得に失敗しました。</p>;
    }
}