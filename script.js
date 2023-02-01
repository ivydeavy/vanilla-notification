let notificationElement = document.querySelector("#notification");
let notificationLoadingElement = document.querySelector("#notification-loader");

const holdNotification = 5000;
const duration = 2000;

const keyframes = [
  { transform: "translateX(-30vw)" },
  { transform: "translateX(0vw)" },
];
const inOptions = {
  duration: duration,
  iterations: 1,
  easing: "ease-out",
  fill: "forwards",
  direction: "alternate",
};
const outOptions = {
  duration: duration,
  iterations: 1,
  easing: "ease-out",
  fill: "forwards",
  direction: "reverse",
};

const loaderKeyframes = [
{width: "0"},
{width: "100%"}
];

const loaderOptions = {
    duration: holdNotification,
    iterations: 1,
}

function callNotification() {
  callNotificationLoader()
  notificationElement.animate(keyframes, inOptions);
  setTimeout(() => notificationElement.animate(keyframes, outOptions), holdNotification);
}

function callNotificationLoader(){
    notificationLoadingElement.animate(loaderKeyframes, loaderOptions)
}


callNotification();