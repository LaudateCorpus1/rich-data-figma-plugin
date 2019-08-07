import "./ui.css";

document.querySelector("form").onsubmit = handleSubmit;

async function handleSubmit(event) {
  // Prevent form submission
  event.preventDefault();

  const textbox = document.getElementById("url") as HTMLInputElement;
  const url = String(textbox.value);

  const res = await fetch(url);
  if (!res.ok) return; // TODO: Handle error

  const body = await res.json();

  parent.postMessage({ pluginMessage: { type: "populate", body } }, "*");

  const jsonPreview = document.getElementById("json-preview");
  jsonPreview.innerText = JSON.stringify(body);
}
