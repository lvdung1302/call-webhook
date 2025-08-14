import axios from "axios";

// URL webhook n8n của bạn
const WEBHOOK_URL = "https://n8n.dimori.net/webhook/6717a71a-f7b6-4c47-8ecd-0eedde31014d";

async function sendToWebhook() {
  try {
    const payload = {
      title: "Bài viết từ TypeScript",
      content: "Đây là nội dung gửi từ Axios tới webhook n8n.",
      imageUrl: "https://picsum.photos/600/400"
    };

    const response = await axios.post(WEBHOOK_URL, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Webhook Response:", response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
    } else {
      console.error("Unknown error:", error);
    }
  }
}

sendToWebhook();
