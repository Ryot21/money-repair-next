import ContactSheet from "@/components/Sheet/contact";

type Props = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
    return (
        <ContactSheet title="お問い合わせ" mvClass="-contact">
            {children}
        </ContactSheet>
    )
}