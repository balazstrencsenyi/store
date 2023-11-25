import createHeader from "./controllers/createHeader.js";

export async function main() {
  const root = document.getElementById("root");

  const header = createHeader(); 
  root.appendChild(header);
}

window.onload = async () => {
  await main();
};
