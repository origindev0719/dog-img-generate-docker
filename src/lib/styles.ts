export const DISPLAY = {
  center: "flex justify-between items-center",
  between: "flex justify-between",
  end: "flex justify-end",
  itemCenter: "flex items-center",
  fullCenter: "flex justify-center items-center",
}

export const BREED_LIST = {
  default:
    "col-span-4 md:col-span-3 md:p-8 p-4 bg-slate-200 overflow-y-scroll max-h-custom",
  item: "md:text-[1rem] text-[0.8rem] md:font-sans font-mono p-2 cursor-pointer border-b border-gray-50 rounded-md",
  itemSelected: "bg-slate-900 text-white",
}

export const DOG_IMAGE = {
  container: "md:col-span-7 col-span-6 flex-col",
  title: "py-4 text-center text-3xl underline font-Sans",
  body: "md:w-1/3 w-5/6 md:h-[400px] h-[350px] shadow-lg overflow-hidden rounded-md",
  img: "min-w-full min-h-full object-cover",
  customBtn:
    "bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded mt-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105",
}

export const VARIABLE = {
  cellWidth: "min-w-[120px]",
}

export const FOOTER = {
  container: "p-5 bg-basic",
  title: "text-md text-white font-primary",
}

export const HEADER = {
  container: "bg-basic px-8 py-4 border-opacity-70",
}

export const LAYOUT = {
  container:
    "w-full min-h-screen flex flex-col bg-slate-100 text-basic font-sans",
  main: "grid grid-cols-10 w-full flex-grow",
}
