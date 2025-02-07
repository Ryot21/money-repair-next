"use server";

export async function createContactDate(_prevState: any, formData: FormData) {
    const rawFormData = {
        purpose: formData.get("purpose") as string,// 目的
        company: formData.get("company") as string,// 会社名
        name:    formData.get("name") as string,// ご担当者名
        phone:   formData.get("phone") as string,// 電話番号
        email:   formData.get("email") as string,// メールアドレス
        message: formData.get("message") as string,// お問い合わせ
    };
    if (!rawFormData.purpose) {
        return {
            status: "error",
            message: "目的を選択してください。",
        };
    }
    if (!rawFormData.company) {
        return {
            status: "error",
            message: "会社名を入力してください。",
        };
    }
    if (!rawFormData.name) {
        return {
            status: "error",
            message: "ご担当者名を入力してください。",
        };
    }
    if (!rawFormData.phone) {
        return {
            status: "error",
            message: "電話番号を入力してください。",
        };
    }
    if (!rawFormData.email) {
        return {
            status: "error",
            message: "メールアドレスを入力してください。",
        };
    }
    if (!rawFormData.message) {
        return {
            status: "error",
            message: "メッセージを入力してください。",
        };
    }

    try {
        const result = await fetch(
            `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.HUBSPOT_PORTAL_ID}/${process.env.HUBSPOT_FORM_ID}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fields: [
                        {
                            name: "purpose",
                            value: rawFormData.purpose,
                        },
                        {
                            name: "company",
                            value: rawFormData.company,
                            },
                        {
                            name: "manager_name",       
                            value: rawFormData.name,
                        },
                        {
                            name: "phone",
                            value: rawFormData.phone,
                        },
                        {
                            name: "email",
                            value: rawFormData.email,
                        },
                        {
                            name: "message",
                            value: rawFormData.message,
                        },
                    ],
                    context: {
                        pageUri: process.env.NEXT_PUBLIC_SITE_URL,
                        pageName: "Contact Form"
                    }
                }),
            }
        );

        const data = await result.json();
        
        if (!result.ok) {
            throw new Error(data.message || 'API request failed');
        }

        return { 
            status: "success", 
            message: "お問い合わせを受け付けました。" 
        };

    } catch (e) {
        console.error(e);
        return {
            status: "error",
            message: "エラーが発生しました。しばらく時間をおいて再度お試しください。",
        };
    }
}