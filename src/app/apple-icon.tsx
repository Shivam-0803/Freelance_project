import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1c1815",
        }}
      >
        <div
          style={{
            color: "#e8b23f",
            fontSize: 72,
            fontWeight: 900,
            letterSpacing: -2,
          }}
        >
          N&amp;S
        </div>
      </div>
    ),
    { ...size }
  );
}
