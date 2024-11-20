import { useState } from "react";
import { MdContentCopy } from "react-icons/md";
const ColorPaletteGen = () => {
  const [colors, setColors] = useState([]);
  const [copied, setCopied] = useState("");

  const generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  };

  const generatePalette = () => {
    const newColors = [];
    for (let i = 0; i < 10; i++) {
      newColors.push(generateRandomColor());
    }
    setColors(newColors);
    setCopied("");
  };
  const copyToClipboard = (color) => {
    navigator.clipboard
      .writeText(color)
      .then(() => {
        setCopied(color);
        setTimeout(() => setCopied(""), 1000);
      })
      .catch((err) => alert("Failed to copy the color:" + err));
  };

  return (
    <>
      <section>
        <div className="text-center">
          <h1 className="text-4xl mt-5 font-serif max-sm:text-2xl">
            Color Palette Generator
          </h1>
          <p className="text-2xl font-extralight mt-3 px-6 max-sm:text-xl">
            Simple generation of{" "}
            <span className="opacity-50 font-semibold text-2xl">
              color palette{" "}
            </span>
            with hex codes,
            <br className="max-sm:hidden " /> click to copy them instantly for
            your design or coding projects!
          </p>
        </div>
        <div className="flex justify-center gap-9 mt-10 flex-wrap flex-auto xl:mx-40 max-sm:px-2">
          {colors.map((color, index) => (
            <div key={index} className="p-3 bg-white rounded-sm max-sm:p-1">
              <div
                className="h-40 w-40 flex items-center justify-center rounded-lg shadow-md max-sm:h-28 max-sm:w-28 "
                style={{ backgroundColor: color }}
              ></div>
              <p className={`font-mono flex items-center justify-between ${copied === color ? "text-blue-500 font-bold" : "text-black"}`}>
                {copied === color ? "Copied!" : color}
                <MdContentCopy
                  onClick={() => copyToClipboard(color)}
                  className="hover:text-blue-500 cursor-pointer"
                  aria-label={`Copy ${color} to clipboard`}
                />
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={generatePalette}
            className="text-2xl font-semibold bg-orange-400 px-20 py-4 rounded-md mb-6 hover:bg-orange-500 transition-colors max-sm:px-16"
          >
            Generate
          </button>
        </div>
      </section>
    </>
  );
};

export default ColorPaletteGen;
