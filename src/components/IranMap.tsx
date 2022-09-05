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
  const numb = num>21?21:num<=1?1:Math.floor(num)
  return (
    <svg
      style={{ position: "fixed", top: "143px", left: "154px" }}
      width="726"
      height="435"
      viewBox="0 0 726 435"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id={`iran${numb}`}>
        {paths[numb].map((data, index) => (
          <path
              key={index}
            id={`path${numb}-${index}`}
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
