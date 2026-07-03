import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 14,
        }}
      >
        <div
          style={{
            color: "#e8b23f",
            fontSize: 26,
            fontWeight: 900,
            letterSpacing: -1,
          }}
        >
          N&amp;S
        </div>
      </div>
    ),
    { ...size }
  );
}
