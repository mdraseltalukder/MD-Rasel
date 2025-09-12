import { createChat } from "@n8n/chat";
import "@n8n/chat/style.css";
import { useEffect } from "react";

export default function ChatWidget() {
  useEffect(() => {
    const chatInstance = createChat({
      webhookUrl:
        "https://n8n.srv915514.hstgr.cloud/webhook/4e90b920-7b0c-41ac-b12c-b92f16968c5b/chat",
      webhookConfig: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      },
      mode: "window",
      showWelcomeScreen: false,
      enableStreaming: false,
      loadPreviousSession: true,
      chatSessionKey: "sessionId",
      initialMessages: ["Hello! How can I assist you today?"],
      i18n: {
        en: {
          title: "Chatbot",
          subtitle: "We’re here to help 24/7",
          inputPlaceholder: "Type your message...",
          footer: "",
          getStarted: "New Conversation",
        },
      },
    });

    return () => {
      if (chatInstance && chatInstance.destroy) {
        chatInstance.destroy();
      }
    };
  }, []);

  return null;
}
