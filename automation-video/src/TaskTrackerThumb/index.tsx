import { AbsoluteFill } from "remotion";
import { theme } from "../theme";
import { headingFont, monoFont } from "../fonts";
import { COLUMNS, ROSTER, SIDEBAR_WIDTH, TEAMS } from "./constants";

const Avatar: React.FC<{
  initials: string;
  role: "owner" | "member";
  size?: number;
  overlap?: boolean;
}> = ({ initials, role, size = 26, overlap = false }) => (
  <div style={{ position: "relative", flex: "none", marginLeft: overlap ? -10 : 0 }}>
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: `linear-gradient(135deg, ${theme.azure}, ${theme.spark})`,
        border: overlap ? `2px solid ${theme.ink}` : "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: monoFont,
        fontSize: size > 30 ? 12 : 10,
        fontWeight: 600,
        color: theme.ink,
      }}
    >
      {initials}
    </div>
    <div
      style={{
        position: "absolute",
        right: -2,
        bottom: -2,
        width: 9,
        height: 9,
        borderRadius: "50%",
        background: role === "owner" ? theme.spark : theme.azure,
        border: `1.5px solid ${theme.panel2}`,
      }}
    />
  </div>
);

export const TaskTrackerThumb: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: theme.ink }}>
      <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: SIDEBAR_WIDTH, background: theme.panel, borderRight: `1px solid ${theme.line}`, padding: "36px 24px", boxSizing: "border-box" }}>
        <div style={{ fontFamily: headingFont, fontSize: 22, fontWeight: 600, color: theme.paper, marginBottom: 26 }}>
          Task Tracker
        </div>
        <div style={{ fontFamily: monoFont, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.dim2, marginBottom: 14 }}>
          Teams
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {TEAMS.map((team) => (
            <div
              key={team.name}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: 10,
                padding: "12px 14px",
                background: team.active ? theme.panel2 : "transparent",
                border: `1px solid ${team.active ? theme.line : "transparent"}`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: team.active ? theme.spark : theme.dim2,
                  }}
                />
                <span
                  style={{
                    fontFamily: monoFont,
                    fontSize: 14,
                    color: team.active ? theme.paper : theme.dim,
                  }}
                >
                  {team.name}
                </span>
              </div>
              <span style={{ fontFamily: monoFont, fontSize: 12, color: theme.dim2 }}>{team.members}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: "absolute", top: 0, left: SIDEBAR_WIDTH, right: 0, bottom: 0, padding: 40, boxSizing: "border-box" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 22 }}>
          <div>
            <div style={{ fontFamily: headingFont, fontSize: 28, fontWeight: 600, color: theme.paper }}>
              Engineering Team
            </div>
            <div style={{ fontFamily: monoFont, fontSize: 13, color: theme.dim2, marginTop: 4 }}>
              6 members &middot; role-based permissions
            </div>
          </div>
          <div
            style={{
              fontFamily: monoFont,
              fontSize: 12,
              color: theme.dim,
              border: `1px solid ${theme.line}`,
              borderRadius: 999,
              padding: "8px 16px",
            }}
          >
            + Invite
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 26 }}>
          <div style={{ display: "flex" }}>
            {ROSTER.map((member) => (
              <Avatar key={member.initials} initials={member.initials} role={member.role} size={32} overlap />
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: monoFont, fontSize: 11, color: theme.dim2 }}>
            <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: theme.spark }} />
              Owner
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: theme.azure }} />
              Member
            </span>
          </div>
        </div>

        <div style={{ display: "flex", gap: 20 }}>
          {COLUMNS.map((col) => (
            <div
              key={col.label}
              style={{
                flex: 1,
                background: theme.panel,
                border: `1px solid ${theme.line}`,
                borderRadius: 14,
                padding: 16,
                boxSizing: "border-box",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                <span style={{ fontFamily: headingFont, fontSize: 16, fontWeight: 600, color: theme.paper }}>
                  {col.label}
                </span>
                <span
                  style={{
                    fontFamily: monoFont,
                    fontSize: 11,
                    color: theme.dim2,
                    background: theme.panel2,
                    borderRadius: 999,
                    padding: "2px 8px",
                  }}
                >
                  {col.cards.length}
                </span>
              </div>

              {col.cards.map((card) => {
                const done = card.tag === "Done";
                return (
                  <div
                    key={card.title}
                    style={{
                      background: theme.panel2,
                      border: `1px solid ${theme.lineSoft}`,
                      borderRadius: 10,
                      padding: 12,
                      marginBottom: 10,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: monoFont,
                        fontSize: 13,
                        lineHeight: 1.4,
                        color: done ? theme.dim : theme.paper,
                        textDecoration: done ? "line-through" : "none",
                        textDecorationColor: theme.dim2,
                        marginBottom: 10,
                      }}
                    >
                      {card.title}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <Avatar initials={card.initials} role={card.role} />
                      {done ? (
                        <svg width={16} height={16} viewBox="0 0 24 24" fill="none">
                          <circle cx={12} cy={12} r={11} fill={theme.spark} />
                          <path
                            d="M7 12.5L10.2 15.7L17 8.5"
                            stroke={theme.ink}
                            strokeWidth={2.4}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <span
                          style={{
                            fontFamily: monoFont,
                            fontSize: 11,
                            letterSpacing: "0.04em",
                            color: card.tag === "High" ? theme.spark : theme.azure,
                            border: `1px solid ${card.tag === "High" ? theme.spark : theme.azure}`,
                            borderRadius: 999,
                            padding: "3px 10px",
                          }}
                        >
                          {card.tag.toUpperCase()}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
