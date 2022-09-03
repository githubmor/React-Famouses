import { paths } from "./mapPathes";

function IranMap({
  num = 1,
  fill = "green",
  stroke = "black",
}: {
  num: number;
  fill?: string;
  stroke?: string;
}) {
  return (
    <svg
      style={{ position: "fixed", top: "151px", left: "162px" }}
      width="726"
      height="435"
      viewBox="0 0 726 435"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id={`iran${num}`}>
        {paths[num].map((data, index) => (
          <path
            id={`path${num}-${index}`}
            d={data}
            fill={fill}
            opacity={0.6}
            stroke={stroke}
          />
        ))}
      </g>
    </svg>
  );
}

export default IranMap;
