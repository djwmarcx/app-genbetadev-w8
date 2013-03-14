﻿(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/itemDetail/itemDetail.html", {
        // Se llama a esta función cuando un usuario navega a esta página. Esta
        // rellena los elementos de la página con los datos de la aplicación.
        ready: function (element, options) {
            var item = options.item;
            //element.querySelector(".titlearea .pagetitle").textContent = item.group.title;
            element.querySelector("article .item-title").textContent = item.title;
            element.querySelector("article .item-subtitle").textContent = "subtitulo";
            element.querySelector("article .item-image").src = item.thumbnails[0].src;
            element.querySelector("article .item-image").alt = item.thumbnails[0].alt;
            element.querySelector("article .item-content").innerHTML = window.toStaticHTML(item.description);
            element.querySelector(".content").focus();
        }
    });
})();
