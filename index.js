document.addEventListener("DOMContentLoaded", function () {
  // Get HTML head element
  let head = document.getElementsByTagName("HEAD")[0];
  let body = document.querySelector("body");

  // Create new link Element
  let link = document.createElement("link");

  // set the attributes for link element
  link.rel = "stylesheet";

  link.type = "text/css";

  link.href = "https://testing-widget-next.vercel.app/style.css";
  // link.href = "/style.css";

  // Append link element to HTML head
  head.appendChild(link);

  const widgetModalInnerHtml = `<div class="widget_header">
  <span class="widget_header_img_circle"> </span>
  <div class="widget_header_titles">
    <span class="widget_header_title">ChatBot Support</span>
    <span class="widget_header_title_status">Online</span>
  </div>
</div>
<div class="widget_main">
  <div class="user_chat chat_box">
    <span class="chat_person">Visitor</span>
    <span class="chat_message"
      >Hello, I want to fuck you what are the possiblities?</span
    >
  </div>
  <div class="bot_chat chat_box">
    <span class="chat_person">Bot</span>
    <span class="chat_message"
      >Hello, I want to fuck you what are the possiblities?</span
    >
  </div>
</div>
<form class="widget_message">
  <textarea type="text" placeholder="Type Here..."></textarea>
  <button>
    <svg
      class="sendBtn"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      fill="#000000"
      height="800px"
      width="800px"
      version="1.1"
      id="Capa_1"
      viewBox="0 0 495.003 495.003"
      xml:space="preserve"
    >
      <g id="XMLID_51_">
        <path
          id="XMLID_53_"
          d="M164.711,456.687c0,2.966,1.647,5.686,4.266,7.072c2.617,1.385,5.799,1.207,8.245-0.468l55.09-37.616   l-67.6-32.22V456.687z"
        />
        <path
          id="XMLID_52_"
          d="M492.431,32.443c-1.513-1.395-3.466-2.125-5.44-2.125c-1.19,0-2.377,0.264-3.5,0.816L7.905,264.422   c-4.861,2.389-7.937,7.353-7.904,12.783c0.033,5.423,3.161,10.353,8.057,12.689l125.342,59.724l250.62-205.99L164.455,364.414   l156.145,74.4c1.918,0.919,4.012,1.376,6.084,1.376c1.768,0,3.519-0.322,5.186-0.977c3.637-1.438,6.527-4.318,7.97-7.956   L494.436,41.257C495.66,38.188,494.862,34.679,492.431,32.443z"
        />
      </g>
    </svg>
  </button>
</form>`;

  const widgetModal = document.createElement("div");
  widgetModal.classList.add("widget_modal");
  const handleClose = () => {
    widgetModal.classList.remove("show");
  };
  widgetModal.innerHTML = widgetModalInnerHtml;

  const widgetCircle = document.createElement("div");
  widgetCircle.classList.add("widget_circle");
  widgetCircle.innerHTML = ` <svg
  class="chatIcon"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  fill="#000000"
  version="1.1"
  id="Capa_1"
  viewBox="0 0 60 60"
  xml:space="preserve"
>
  <g>
    <path
      d="M44.348,12.793H2.652C1.189,12.793,0,13.982,0,15.445v43.762l9.414-9.414h34.934c1.463,0,2.652-1.19,2.652-2.653V15.445   C47,13.982,45.811,12.793,44.348,12.793z M10,35.777c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S12.206,35.777,10,35.777z    M23,35.777c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S25.206,35.777,23,35.777z M36,35.777c-2.206,0-4-1.794-4-4s1.794-4,4-4   s4,1.794,4,4S38.206,35.777,36,35.777z"
    />
    <path
      d="M57.348,0.793H12.652C11.189,0.793,10,1.982,10,3.445v7.348h34.348c2.565,0,4.652,2.087,4.652,4.652v25.332h11V3.445   C60,1.982,58.811,0.793,57.348,0.793z"
    />
  </g>
</svg>`;
  const handleWidgetCircleClick = () => {
    widgetModal.classList.add("show");
  };
  widgetCircle.addEventListener("click", handleWidgetCircleClick);

  setTimeout(() => {
    body.appendChild(widgetModal);
    document
      .querySelector(".widget_modal svg")
      .addEventListener("click", handleClose);
    body.appendChild(widgetCircle);

    const widgetForm = document.querySelector(".widget_message");
    const widgetMain = document.querySelector(".widget_main");
    const messageInput = document.querySelector(".widget_message textarea");
    const createMessage = () => {
      let isLastMessageFromUser = false;
      widgetMain.querySelectorAll(".chat_box").forEach((item, index) => {
        if (index == widgetMain.querySelectorAll(".chat_box").length - 1) {
          if (item.classList.contains("user_chat")) {
            isLastMessageFromUser = true;
          }
        }
      });
      const chatBox = document.createElement("div");
      const chatPerson = document.createElement("span");
      const chatMessage = document.createElement("span");
      chatBox.classList.add("chat_box", "user_chat");
      chatPerson.classList.add("chat_person");
      chatMessage.classList.add("chat_message");
      chatPerson.innerHTML = "Visitor";
      chatMessage.innerHTML = messageInput.value;
      isLastMessageFromUser || chatBox.appendChild(chatPerson);
      chatBox.appendChild(chatMessage);
      widgetMain.appendChild(chatBox);
      widgetMain.scrollTo({
        top: widgetMain.scrollHeight,
        behavior: "smooth", // Optional: adds smooth scrolling
      });
    };
    const handleMessageSubmit = (e) => {
      e?.preventDefault();
      createMessage();
      messageInput.value = "";
    };
    widgetForm.addEventListener("submit", handleMessageSubmit);

    messageInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleMessageSubmit(); // Submits the form
      }
    });
  }, 1000);
});
