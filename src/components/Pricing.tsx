import React, { useState } from "react";
import { SectionLabel } from "./Features";

const freeTier = {
  name: "Free",
  price: "$0",
  period: "forever",
  description: "Everything you need to get started coaching smarter.",
  features: [
    "Up to 20 players per roster",
    "Unlimited lineup generation",
    "Game calendar",
    "Basic rules configuration",
    "Export to PDF & Excel",
    "Standard support",
  ],
  cta: "Get Started Free",
  highlight: false,
};

const proTierMonthly = {
  price: "$6.99",
  period: "/month",
  annualPrice: "$69.99",
  annualPeriod: "/year",
  annualSaving: "Save 17%",
};

const proFeatures = [
  "Unlimited players",
  "AI-powered lineup generation",
  "Advanced rules & position locks",
  "Gender balance enforcement",
  "Priority support",
  "Early access to new features",
  "Remove ads",
  "Everything in Free",
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section
      id="pricing"
      style={{
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(126,207,157,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <SectionLabel text="PRICING" />
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-1.5px",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Simple, transparent{" "}
            <span style={{ color: "#f2a63b" }}>pricing</span>
          </h2>
          <p style={{ color: "#c9c0ab", fontSize: 17, marginBottom: 32 }}>
            Start for free. Upgrade when you're ready.
          </p>

          {/* Toggle */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              background: "rgba(24,49,41,0.8)",
              border: "1px solid rgba(42,74,61,0.6)",
              borderRadius: 40,
              padding: "4px 6px",
            }}
          >
            <ToggleButton
              active={!annual}
              onClick={() => setAnnual(false)}
              label="Monthly"
            />
            <ToggleButton
              active={annual}
              onClick={() => setAnnual(true)}
              label="Annual"
              badge="Save 17%"
            />
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
            alignItems: "stretch",
          }}
        >
          {/* Free tier */}
          <PricingCard
            name={freeTier.name}
            price={freeTier.price}
            period={freeTier.period}
            description={freeTier.description}
            features={freeTier.features}
            cta={freeTier.cta}
            highlight={false}
          />

          {/* Pro tier */}
          <PricingCard
            name="Pro"
            price={annual ? proTierMonthly.annualPrice : proTierMonthly.price}
            period={
              annual ? proTierMonthly.annualPeriod : proTierMonthly.period
            }
            description="For coaches who want the full Coachr experience."
            features={proFeatures}
            cta="Start Pro Free Trial"
            highlight={true}
            badge="Most Popular"
          />
        </div>

        <p
          style={{
            textAlign: "center",
            color: "#c9c0ab",
            fontSize: 13,
            marginTop: 32,
            opacity: 0.7,
          }}
        >
          No credit card required for free tier · Cancel anytime · 7-day Pro
          trial included
        </p>
      </div>
    </section>
  );
}

function ToggleButton({
  active,
  onClick,
  label,
  badge,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  badge?: string;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "8px 16px",
        borderRadius: 32,
        background: active ? "#f2a63b" : "transparent",
        color: active ? "#1c1205" : "#c9c0ab",
        fontWeight: 600,
        fontSize: 13,
        border: "none",
        transition: "all 0.2s",
        display: "flex",
        alignItems: "center",
        gap: 8,
        cursor: "pointer",
      }}
    >
      {label}
      {badge && (
        <span
          style={{
            background: active ? "rgba(28,18,5,0.2)" : "rgba(126,207,157,0.2)",
            color: active ? "#1c1205" : "#7ecf9d",
            border: `1px solid ${active ? "rgba(28,18,5,0.2)" : "rgba(126,207,157,0.3)"}`,
            borderRadius: 10,
            padding: "1px 6px",
            fontSize: 10,
            fontWeight: 700,
          }}
        >
          {badge}
        </span>
      )}
    </button>
  );
}

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlight: boolean;
  badge?: string;
}

function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  highlight,
  badge,
}: PricingCardProps) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: highlight
          ? "linear-gradient(160deg, rgba(30,59,49,0.95) 0%, rgba(24,49,41,0.95) 100%)"
          : "rgba(24,49,41,0.5)",
        border: `1px solid ${highlight ? "rgba(242,166,59,0.4)" : "rgba(42,74,61,0.6)"}`,
        borderRadius: 20,
        padding: "36px 32px",
        position: "relative",
        transition: "transform 0.2s, box-shadow 0.2s",
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: highlight
          ? "0 0 40px rgba(242,166,59,0.12), 0 16px 40px rgba(0,0,0,0.2)"
          : hovered
            ? "0 16px 40px rgba(0,0,0,0.2)"
            : "none",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {badge && (
        <div
          style={{
            position: "absolute",
            top: -14,
            left: "50%",
            transform: "translateX(-50%)",
            background: "#f2a63b",
            color: "#1c1205",
            padding: "4px 16px",
            borderRadius: 20,
            fontSize: 12,
            fontWeight: 700,
            whiteSpace: "nowrap",
          }}
        >
          {badge}
        </div>
      )}

      <div style={{ marginBottom: 8 }}>
        <span
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: highlight ? "#f2a63b" : "#7ecf9d",
            letterSpacing: "0.5px",
          }}
        >
          {name.toUpperCase()}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 4,
          marginBottom: 8,
        }}
      >
        <span
          style={{
            fontSize: 44,
            fontWeight: 900,
            color: "#f6f1e7",
            letterSpacing: "-2px",
          }}
        >
          {price}
        </span>
        <span style={{ color: "#c9c0ab", fontSize: 14 }}>{period}</span>
      </div>

      <p
        style={{
          color: "#c9c0ab",
          fontSize: 14,
          marginBottom: 28,
          lineHeight: 1.6,
        }}
      >
        {description}
      </p>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 12,
          marginBottom: 32,
        }}
      >
        {features.map((feat, i) => (
          <div
            key={i}
            style={{ display: "flex", alignItems: "flex-start", gap: 10 }}
          >
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: "50%",
                background: highlight
                  ? "rgba(242,166,59,0.2)"
                  : "rgba(126,207,157,0.15)",
                border: `1px solid ${highlight ? "rgba(242,166,59,0.4)" : "rgba(126,207,157,0.3)"}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginTop: 1,
              }}
            >
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path
                  d="M1 4l2 2 4-3.5"
                  stroke={highlight ? "#f2a63b" : "#7ecf9d"}
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span style={{ fontSize: 14, color: "#c9c0ab", lineHeight: 1.5 }}>
              {feat}
            </span>
          </div>
        ))}
      </div>

      <a
        href="#download"
        style={{
          display: "block",
          textAlign: "center",
          padding: "14px 24px",
          borderRadius: 12,
          fontWeight: 700,
          fontSize: 15,
          background: highlight ? "#f2a63b" : "transparent",
          color: highlight ? "#1c1205" : "#f6f1e7",
          border: highlight ? "none" : "1px solid rgba(42,74,61,0.8)",
          transition: "all 0.2s",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          if (!highlight) el.style.background = "rgba(42,74,61,0.5)";
          else el.style.background = "#d4882a";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          if (!highlight) el.style.background = "transparent";
          else el.style.background = "#f2a63b";
        }}
      >
        {cta}
      </a>
    </div>
  );
}
