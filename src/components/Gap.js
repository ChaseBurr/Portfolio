import React from "react";

export default function Gap({ height, color }) {
     const defaultColor = "#171715";
     return (
          <div
               style={{
                    height: `${height}`,
                    width: "100%",
                    backgroundColor: `${color ? color : defaultColor}`,
               }}
          />
     );
}
