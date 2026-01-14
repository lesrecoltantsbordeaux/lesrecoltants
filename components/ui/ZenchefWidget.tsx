"use client";

import { useEffect } from "react";

/**
 * Widget Zenchef pour les réservations
 * Charge le SDK Zenchef et configure le widget
 */
export default function ZenchefWidget() {
  useEffect(() => {
    // Code exact fourni par Zenchef
    ;(function (d, s, id) {
      const el = d.getElementsByTagName(s)[0];
      if (d.getElementById(id) || el.parentNode == null) return;
      const js = d.createElement(s) as HTMLScriptElement;
      js.id = id;
      js.src = "https://sdk.zenchef.com/v1/sdk.min.js";
      el.parentNode.insertBefore(js, el);
    })(document, "script", "zenchef-sdk");

    // Créer le div de configuration si il n'existe pas déjà
    if (!document.querySelector(".zc-widget-config")) {
      const widgetDiv = document.createElement("div");
      widgetDiv.className = "zc-widget-config";
      widgetDiv.setAttribute("data-restaurant", "362106");
      widgetDiv.setAttribute("data-open", "2000");
      document.body.appendChild(widgetDiv);
    }
  }, []);

  return null;
}

