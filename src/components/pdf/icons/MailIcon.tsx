import { G, Polyline, Rect, Svg } from "@react-pdf/renderer";

export function MailIcon() {
  return (
    <Svg viewBox="0 0 24 24" fill="#fff">
      <G stroke-width="0"></G>
      <G stroke-linecap="round" stroke-linejoin="round"></G>
      <G>
        <G>
          <G>
            <G>
              <Polyline
                fill="none"
                points="4 8.2 12 14.1 20 8.2"
                stroke="#fff"
                strokeLineCap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></Polyline>
              <Rect
                fill="none"
                height="14"
                rx="2"
                ry="2"
                stroke="#fff"
                strokeLineCap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                width="18"
                x="3"
                y="6.5"
              ></Rect>
            </G>
          </G>
        </G>
      </G>
    </Svg>
  );
}
