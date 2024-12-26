// import React, { useState } from "react";

// function Task1() {
//   const [colors, setColors] = useState({
//     red: false,
//     blue: false,
//     yellow: false,
//   });

//   const handleColorChange = (color) => {
//     setColors((prevColors) => ({
//       ...prevColors,
//       [color]: !prevColors[color],
//     }));
//   };

//   const getMixedColor = () => {
//     const activeColors = Object.keys(colors).filter((color) => colors[color]);
//     if (activeColors.length === 0) return "white";
//     if (activeColors.length === 1) return activeColors[0];
//     return linear-gradient(45deg, ${activeColors.join(", ")});
//   };
  

//   return (
//     <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
//       <h1>Color Mixer</h1>
//       <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
//         <label>
//           <input
//             type="checkbox"
//             checked={colors.red}
//             onChange={() => handleColorChange("red")}
//           />
//           <span style={{ marginLeft: "5px" }}>Red</span>
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             checked={colors.blue}
//             onChange={() => handleColorChange("blue")}
//           />
//           <span style={{ marginLeft: "5px" }}>Blue</span>
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             checked={colors.yellow}
//             onChange={() => handleColorChange("yellow")}
//           />
//           <span style={{ marginLeft: "5px" }}>Yellow</span>
//         </label>
//       </div>
//       <div
//         style={{
//           marginTop: "20px",
//           width: "200px",
//           height: "100px",
//           border: "1px solid black",
//           background: getMixedColor(),
//         }}
//       ></div>
//     </div>
//   );
// }

// export default Task1;

import React, { useState } from "react";

function Task1() {
  const [colors, setColors] = useState({
    red: false,
    blue: false,
    yellow: false,
  });

  const colorRGBValues = {
    red: [255, 0, 0],
    blue: [0, 0, 255],
    yellow: [255, 255, 0],
  };

  const handleColorChange = (color) => {
    setColors((prevColors) => ({
      ...prevColors,
      [color]: !prevColors[color],
    }));
  };

  const getMixedColor = () => {
    const activeColors = Object.keys(colors).filter((color) => colors[color]);

    if (activeColors.length === 0) return "white"; 

    const totalColors = activeColors.length;
    const blendedRGB = activeColors
      .map((color) => colorRGBValues[color])
      .reduce(
        (acc, rgb) => acc.map((value, index) => value + rgb[index]),
        [0, 0, 0]
      )
      .map((value) => Math.round(value / totalColors));

    return `rgb(${blendedRGB.join(",")})`;
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Color Mixer</h1>
      <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
        <label>
          <input
            type="checkbox"
            checked={colors.red}
            onChange={() => handleColorChange("red")}
          />
          <span style={{ marginLeft: "5px" }}>Red</span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={colors.blue}
            onChange={() => handleColorChange("blue")}
          />
          <span style={{ marginLeft: "5px" }}>Blue</span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={colors.yellow}
            onChange={() => handleColorChange("yellow")}
          />
          <span style={{ marginLeft: "5px" }}>Yellow</span>
        </label>
      </div>
      <div
        style={{
          marginTop: "20px",
          width: "200px",
          height: "100px",
          border: "1px solid black",
          background: getMixedColor(),
        }}
      ></div>
    </div>
  );
}

export default Task1;
