import { GlintAvatar } from "@glintjs/react";
import type { CSSProperties, ReactNode } from "react";

const t = {
  bg: "#0a0a0a",
  surface: "#111111",
  border: "rgba(255,255,255,0.08)",
  fg: "#ededed",
  muted: "rgba(237,237,237,0.4)",
  label: "rgba(237,237,237,0.28)",
} as const;

function Card({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        background: t.surface,
        border: `1px solid ${t.border}`,
        borderRadius: 12,
        padding: "20px 24px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p
      style={{
        margin: "0 0 16px",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: t.label,
      }}
    >
      {children}
    </p>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: 10,
        fontWeight: 500,
        letterSpacing: "0.04em",
        color: t.muted,
        background: "rgba(255,255,255,0.05)",
        border: `1px solid ${t.border}`,
        borderRadius: 4,
        padding: "2px 6px",
      }}
    >
      {children}
    </span>
  );
}

function AvatarWithLabel({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
      }}
    >
      {children}
      <Tag>{label}</Tag>
    </div>
  );
}

export default function App() {
  return (
    <div
      style={{
        maxWidth: 640,
        margin: "0 auto",
        padding: "48px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <div style={{ marginBottom: 32 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 6,
          }}
        >
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: t.fg,
              letterSpacing: "-0.01em",
            }}
          >
            @glintjs/react
          </span>
          <span
            style={{
              fontSize: 11,
              color: t.muted,
              background: "rgba(255,255,255,0.05)",
              border: `1px solid ${t.border}`,
              borderRadius: 4,
              padding: "2px 6px",
            }}
          >
            test
          </span>
        </div>
        <p style={{ margin: 0, fontSize: 13, color: t.muted, lineHeight: 1.6 }}>
          Visual test for the GlintAvatar component.
        </p>
      </div>

      <Card>
        <SectionLabel>Sizes</SectionLabel>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 16 }}>
          <AvatarWithLabel label="sm / 32">
            <GlintAvatar seed="size-sm" size="sm" rounded />
          </AvatarWithLabel>
          <AvatarWithLabel label="md / 48">
            <GlintAvatar seed="size-md" size="md" rounded />
          </AvatarWithLabel>
          <AvatarWithLabel label="lg / 64">
            <GlintAvatar seed="size-lg" size="lg" rounded />
          </AvatarWithLabel>
          <AvatarWithLabel label="96">
            <GlintAvatar seed="size-96" size={96} rounded />
          </AvatarWithLabel>
        </div>
      </Card>

      <Card>
        <SectionLabel>Rounded vs square</SectionLabel>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <AvatarWithLabel label="rounded">
            <GlintAvatar seed="shape-round" size={56} rounded />
          </AvatarWithLabel>
          <AvatarWithLabel label="square">
            <GlintAvatar seed="shape-square" size={56} rounded={false} />
          </AvatarWithLabel>
          <AvatarWithLabel label="rounded">
            <GlintAvatar seed="shape-round-2" size={56} rounded />
          </AvatarWithLabel>
          <AvatarWithLabel label="square">
            <GlintAvatar seed="shape-square-2" size={56} rounded={false} />
          </AvatarWithLabel>
        </div>
      </Card>

      <Card>
        <SectionLabel>Initials</SectionLabel>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <AvatarWithLabel label="Jane Doe">
            <GlintAvatar seed="jane.doe" name="Jane Doe" size={56} rounded />
          </AvatarWithLabel>
          <AvatarWithLabel label="John Smith">
            <GlintAvatar
              seed="john.smith"
              name="John Smith"
              size={56}
              rounded
            />
          </AvatarWithLabel>
          <AvatarWithLabel label="Adebayo">
            <GlintAvatar seed="adebayo" name="Adebayo" size={56} rounded />
          </AvatarWithLabel>
          <AvatarWithLabel label="Mary Jane Watson">
            <GlintAvatar
              seed="mary.watson"
              name="Mary Jane Watson"
              size={56}
              rounded
            />
          </AvatarWithLabel>
        </div>
      </Card>

      <Card>
        <SectionLabel>Effects</SectionLabel>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <AvatarWithLabel label="noise + blur">
            <GlintAvatar seed="fx-seed" size={56} noise blur rounded />
          </AvatarWithLabel>
          <AvatarWithLabel label="noise only">
            <GlintAvatar seed="fx-seed" size={56} noise blur={false} rounded />
          </AvatarWithLabel>
          <AvatarWithLabel label="blur only">
            <GlintAvatar seed="fx-seed" size={56} noise={false} blur rounded />
          </AvatarWithLabel>
          <AvatarWithLabel label="none">
            <GlintAvatar
              seed="fx-seed"
              size={56}
              noise={false}
              blur={false}
              rounded
            />
          </AvatarWithLabel>
        </div>
      </Card>

      <Card>
        <SectionLabel>Determinism</SectionLabel>
        <p
          style={{
            margin: "0 0 16px",
            fontSize: 12,
            color: t.muted,
            lineHeight: 1.6,
          }}
        >
          Same seed always produces the same avatar.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {["glintjs", "charmingdc", "vercel"].map((seed) => (
            <div
              key={seed}
              style={{ display: "flex", alignItems: "center", gap: 12 }}
            >
              {[0, 1, 2].map((i) => (
                <GlintAvatar key={i} seed={seed} size={36} rounded />
              ))}
              <span style={{ fontSize: 12, color: t.muted, marginLeft: 4 }}>
                seed:{" "}
                <span style={{ color: t.fg, fontFamily: "monospace" }}>
                  {seed}
                </span>
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
