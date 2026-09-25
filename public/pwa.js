const manifestLink =
  document.createElement("link");

manifestLink.rel = "manifest";
manifestLink.href = "./manifest.json";

document.head.appendChild(
  manifestLink
);


const themeMeta =
  document.createElement("meta");

themeMeta.name =
  "theme-color";

themeMeta.content =
  "#f5f5f7";

document.head.appendChild(
  themeMeta
);


const appleMeta =
  document.createElement("meta");

appleMeta.name =
  "apple-mobile-web-app-capable";

appleMeta.content =
  "yes";

document.head.appendChild(
  appleMeta
);


const appleStatusMeta =
  document.createElement("meta");

appleStatusMeta.name =
  "apple-mobile-web-app-status-bar-style";

appleStatusMeta.content =
  "default";

document.head.appendChild(
  appleStatusMeta
);


if ("serviceWorker" in navigator) {

  window.addEventListener(
    "load",
    function() {

      navigator.serviceWorker
        .register(
          "./service-worker.js",
          {
            scope: "./"
          }
        )
        .catch(
          function(error) {
            console.error(
              "Service Worker error:",
              error
            );
          }
        );

    }
  );

}
