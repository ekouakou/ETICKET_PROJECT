import { useEffect } from "react";

const LoadScripts = () => {
  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => {
          console.log(`${src} chargé`);
          resolve();
        };
        script.onerror = () => reject(new Error(`Erreur de chargement du script ${src}`));
        document.body.appendChild(script);
      });
    };

    const loadAllScripts = async () => {
      try {
        await loadScript("assets/plugins/global/plugins.bundle.js");
        await loadScript("assets/js/scripts.bundle.js");

        await loadScript("assets/js/widgets.bundle.js");
        await loadScript("assets/js/custom/apps/chat/chat.js");
        await loadScript("assets/js/custom/utilities/modals/upgrade-plan.js");
        await loadScript("assets/js/custom/utilities/modals/create-campaign.js");
        await loadScript("assets/js/custom/utilities/modals/users-search.js");


        await loadScript("assets/plugins/custom/fullcalendar/fullcalendar.bundle.js");
        await loadScript("https://cdn.amcharts.com/lib/5/index.js");
        await loadScript("https://cdn.amcharts.com/lib/5/xy.js");
        await loadScript("https://cdn.amcharts.com/lib/5/percent.js");


        // <script src="https://cdn.amcharts.com/lib/5/radar.js"></script>
        // <script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>
        // <script src="https://cdn.amcharts.com/lib/5/map.js"></script>
        // <script src="https://cdn.amcharts.com/lib/5/geodata/worldLow.js"></script>
        // <script src="https://cdn.amcharts.com/lib/5/geodata/continentsLow.js"></script>
        // <script src="https://cdn.amcharts.com/lib/5/geodata/usaLow.js"></script>
        // <script src="https://cdn.amcharts.com/lib/5/geodata/worldTimeZonesLow.js"></script>
        // <script src="https://cdn.amcharts.com/lib/5/geodata/worldTimeZoneAreasLow.js"></script>
        // <script src="assets/plugins/custom/datatables/datatables.bundle.js"></script>

        console.log("Scripts chargés, vérification de window.init...");

        // Attendre et vérifier plusieurs fois si window.init est défini
       /* let attempts = 0;
        const checkInit = setInterval(() => {
          if (window.init && typeof window.init === "function") {
            console.log("window.init() trouvé et exécuté !");
            window.init();
            clearInterval(checkInit);
          } else {
            attempts++;
            console.warn(`Tentative ${attempts}: window.init est toujours undefined`);
          }

          if (attempts >= 5) {
            clearInterval(checkInit);
            console.error("window.init reste undefined après plusieurs tentatives.");
          }
        }, 500); */// Vérifie toutes les 500ms, max 5 fois

      } catch (error) {
        console.error("Erreur lors du chargement des scripts", error);
      }
    };

    loadAllScripts();
  }, []);

  return null;
};

export default LoadScripts;
