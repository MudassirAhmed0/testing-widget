// Get HTML head element
let head = document.getElementsByTagName("HEAD")[0];
let body = document.querySelector("body");

// Create new link Element
let link = document.createElement("link");

// set the attributes for link element
link.rel = "stylesheet";

link.type = "text/css";

link.href = "https://testing-widget.vercel.app/style.css";

// Append link element to HTML head
head.appendChild(link);

const widgetModal = document.createElement("div");
widgetModal.classList.add("widget_modal");
const handleClose = () => {
  widgetModal.classList.remove("show");
};
widgetModal.innerHTML = `<svg
onclick="handleClose()"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 101 101"
id="cross"
>
<path
  d="M83.9 17.1c-.9-.9-2.5-.9-3.4 0l-30 30-30-30c-.9-.9-2.5-.9-3.4 0s-.9 2.5 0 3.4l30 30-30 30c-.9.9-.9 2.5 0 3.4.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7l30-30 30 30c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4l-30-30 30-30c.9-.9.9-2.4 0-3.4z"
></path>
</svg>`;

const widgetCircle = document.createElement("div");
widgetCircle.classList.add("widget_circle");
const handleWidgetCircleClick = () => {
  widgetModal.classList.add("show");
};
widgetCircle.addEventListener("click", handleWidgetCircleClick);

body.appendChild(widgetModal);
body.appendChild(widgetCircle);
