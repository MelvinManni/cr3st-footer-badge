window.onload = function () {
  console.log("CR3ST Digital Agency footer badge loaded");
  const wrapper = document.createElement("div");
  const div = document.createElement("div");
  div.setAttribute("aria-label", "CR3ST Digital Agency footer badge");
  div.style.background = "#202020";
  div.style.maxHeight = "100px";
  div.style.padding = "15px 20px";
  div.style.display = "flex";
  div.style.justifyContent = "center";
  const a = document.createElement("a");
  a.style.textDecoration = "none";
  a.style.width = "fit-content";
  a.style.color = "#f5f7f9";
  a.style.fontFamily = "'Gotham Rounded Book', sans-serif";
  a.style.fontWeight = "400";
  a.style.fontSize = "18px";
  a.style.cursor = "pointer";
  a.style.textAlign = "center";
  a.style.margin = "0";
  a.style.padding = "0";
  a.href = "https://www.cr3st.com";
  a.target = "_blank";
  a.innerText = "Design and development by ";
  const span = document.createElement("span");
  span.style.backgroundImage = "linear-gradient(84deg, #2a04e5 -1.66%, #ff38d7 43.95%, #ffbc7b 88.88%)";
  span.style.webkitBackgroundClip = "text";
  span.style.webkitTextFillColor = "transparent";
  span.style.backgroundClip = "text";
  span.style.textFillColor = "transparent";
  span.style.fontFamily = "'Gotham Rounded', sans-serif";
  span.style.fontSize = "20px";
  span.innerText = "CR3ST";
  a.appendChild(span);
  div.appendChild(a);
  wrapper.innerHTML = `
  <style>
  @import url("https://cdn.jsdelivr.net/npm/gotham-fonts@1.0.3/css/gotham-rounded.min.css");
</style>`;
  wrapper.appendChild(div);
  document.body.appendChild(wrapper);
};
