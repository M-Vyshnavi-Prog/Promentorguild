"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./ChatWidget.module.css";

const AUTO_CLOSE_MS = 3500;

// your uploaded avatar — replace with /chat-avatar.png if moved to public/
const BOT_AVATAR =
  "/chat-avatar.png";

type Msg = { id: string; from: "bot" | "user"; text: string };

export default function ChatWidget() {
  const [open, setOpen] = useState(true);
  const [minimized, setMinimized] = useState(false);

  const [showChatUI, setShowChatUI] = useState(false); // chat window mode
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      setOpen(false);
      setMinimized(true);
    }, AUTO_CLOSE_MS);
    return () => clearTimeout(t);
  }, []);

  function push(m: Msg) {
    setMessages((prev) => [...prev, m]);
    scrollToBottom();
  }

  function scrollToBottom() {
    setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop =
          scrollRef.current.scrollHeight + 9999;
      }
    }, 80);
  }

  function startChat() {
    setShowChatUI(true);
    setOpen(true);
    setMinimized(false);

    setMessages([]);
    push({
      id: "1",
      from: "bot",
      text: "Welcome! How can I help you today?",
    });

    setTimeout(() => {
      push({
        id: "2",
        from: "bot",
        text: "Hello! May I please know your name 😊?",
      });
    }, 500);
  }

  function sendMessage(e: any) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    push({ id: Date.now() + "", from: "user", text });
    setInput("");
    setSending(true);

    setTimeout(() => {
      push({
        id: "b-" + Date.now(),
        from: "bot",
        text: `Thanks! I received: "${text}".`,
      });
      setSending(false);
    }, 700);
  }

  function minimize() {
    setOpen(false);
    setMinimized(true);
    setShowChatUI(false);
  }

  function restore() {
    setOpen(true);
    setMinimized(false);
    setShowChatUI(false);
  }

  return (
    <div className={styles.container}>
      {/* PANEL */}
      <div
        className={`${styles.panel} ${open ? styles.open : ""}`}
      >
        <button className={styles.close} onClick={minimize}>
          ×
        </button>

        {/* BEFORE CHAT STARTS */}
        {!showChatUI && (
          <div className={styles.content}>
            <img
              src={BOT_AVATAR}
              className={styles.avatar}
              alt="bot"
            />

            <div className={styles.copy}>
              <div className={styles.title}>We're Online!</div>
              <div className={styles.subtitle}>
                How may I help you today?
              </div>

              <button className={styles.cta} onClick={startChat}>
                Chat now
              </button>
            </div>
          </div>
        )}

        {/* AFTER CHAT STARTS */}
        {showChatUI && (
          <div>
            <div ref={scrollRef} className={styles.chatWindow}>
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={styles.chatRow}
                  style={{
                    alignSelf:
                      m.from === "bot"
                        ? "flex-start"
                        : "flex-end",
                  }}
                >
                  {m.from === "bot" && (
                    <img
                      src={BOT_AVATAR}
                      className={styles.chatAvatar}
                    />
                  )}

                  <div
                    className={
                      m.from === "bot"
                        ? styles.botBubble
                        : styles.userBubble
                    }
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {sending && (
                <div className={styles.chatRow}>
                  <img
                    src={BOT_AVATAR}
                    className={styles.chatAvatar}
                  />
                  <div className={styles.botBubble}>
                    Typing…
                  </div>
                </div>
              )}
            </div>

            {/* INPUT BAR */}
            <form
              onSubmit={sendMessage}
              className={styles.chatInputBar}
            >
              <input
                className={styles.chatInput}
                placeholder="Type a message…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button className={styles.chatSendBtn}>
                Send
              </button>
            </form>
          </div>
        )}
      </div>

      {/* MINIMIZED BAR */}
      {minimized && !open && (
        <button className={styles.minBar} onClick={restore}>
          <img
            src={BOT_AVATAR}
            className={styles.minAvatar}
          />
          <div className={styles.minText}>
            <div className={styles.minTitle}>EcoSoch Bot</div>
          </div>
        </button>
      )}
    </div>
  );
}
