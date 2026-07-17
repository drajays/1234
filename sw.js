/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-7e5eb42b'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "registerSW.js",
    "revision": "03940f167dfb93879703c11c3b4f8ccb"
  }, {
    "url": "index.html",
    "revision": "d8fc66ed6fe28c96576260eee4b8d88f"
  }, {
    "url": "assets/titrationLabels-Bi9Wd5yh.js",
    "revision": null
  }, {
    "url": "assets/targetPeriods-Cy9_jljZ.js",
    "revision": null
  }, {
    "url": "assets/patientLink-D-nuvp0m.js",
    "revision": null
  }, {
    "url": "assets/index-CXU8ePuJ.js",
    "revision": null
  }, {
    "url": "assets/index-C4Sp2rcR.css",
    "revision": null
  }, {
    "url": "assets/i18n-CeMJvEvs.js",
    "revision": null
  }, {
    "url": "assets/doctorApi-D1zNwR4h.js",
    "revision": null
  }, {
    "url": "assets/cohort.module-DYX0O3dY.js",
    "revision": null
  }, {
    "url": "assets/cohort-mblpX9PD.js",
    "revision": null
  }, {
    "url": "assets/cohort-Cm-E2yFr.css",
    "revision": null
  }, {
    "url": "assets/charts.module-ButQ9Be_.js",
    "revision": null
  }, {
    "url": "assets/charts-CR8nA5wR.css",
    "revision": null
  }, {
    "url": "assets/analyticsWindow-DAyycPLk.js",
    "revision": null
  }, {
    "url": "assets/analytics.module-CSTLdLJB.js",
    "revision": null
  }, {
    "url": "assets/analytics-Br_nYtZm.css",
    "revision": null
  }, {
    "url": "assets/TitrationExplorerPage-Cul37Spl.css",
    "revision": null
  }, {
    "url": "assets/TitrationExplorerPage-3aFx7sE_.js",
    "revision": null
  }, {
    "url": "assets/RirStackedBar-COsFmlEw.js",
    "revision": null
  }, {
    "url": "assets/PatientGlucoseCharts-kDHPKRDh.js",
    "revision": null
  }, {
    "url": "assets/PatientDetailPage-7hckUNh5.js",
    "revision": null
  }, {
    "url": "assets/PatientAnalytics-tpYLt1Ww.css",
    "revision": null
  }, {
    "url": "assets/PatientAnalytics-CfrEevRL.js",
    "revision": null
  }, {
    "url": "assets/OnboardPage-DZYlzuVi.js",
    "revision": null
  }, {
    "url": "assets/EnrollEducatorPage-Dgp-t-FI.js",
    "revision": null
  }, {
    "url": "assets/EducatorsPage-Bd2tLt4L.js",
    "revision": null
  }, {
    "url": "assets/EducatorPage-Dp79WlsN.js",
    "revision": null
  }, {
    "url": "assets/Educator.module-BLfTgXHL.js",
    "revision": null
  }, {
    "url": "assets/Educator-BpWDQVvx.css",
    "revision": null
  }, {
    "url": "assets/DoctorShell-D8jQPKbq.js",
    "revision": null
  }, {
    "url": "assets/DoctorShell-CgfZNfUt.css",
    "revision": null
  }, {
    "url": "assets/DoctorSettingsPage-B3YUZLnz.js",
    "revision": null
  }, {
    "url": "assets/DoctorReportsPage-DausKC1w.js",
    "revision": null
  }, {
    "url": "assets/DoctorPatientsPage-Sq62vHDL.js",
    "revision": null
  }, {
    "url": "assets/DoctorDashboardPage-BXdr_QyL.js",
    "revision": null
  }, {
    "url": "assets/DoctorDashboard.module-DZtMDRdJ.js",
    "revision": null
  }, {
    "url": "assets/DoctorDashboard-DIUYqZVn.css",
    "revision": null
  }, {
    "url": "assets/DoctorClinicPage-Dk7QSyeJ.js",
    "revision": null
  }, {
    "url": "assets/Doctor.module-DlnrupE6.js",
    "revision": null
  }, {
    "url": "assets/Doctor-BeEs5TxH.css",
    "revision": null
  }, {
    "url": "assets/DigestPage-B-F3P08t.js",
    "revision": null
  }, {
    "url": "assets/ComparePatients-DbIW70Me.css",
    "revision": null
  }, {
    "url": "assets/ComparePatients-BEtIruNv.js",
    "revision": null
  }, {
    "url": "assets/CohortRirTrend-DoYWXa6S.js",
    "revision": null
  }, {
    "url": "assets/CohortDashboard-CBy-BWFo.js",
    "revision": null
  }, {
    "url": "assets/ApprovalsSection-QofugBKq.js",
    "revision": null
  }, {
    "url": "assets/AdminPage-CYsE_7o1.js",
    "revision": null
  }, {
    "url": "icon-192.png",
    "revision": "f8a898683b2250066988e9aa2d00722f"
  }, {
    "url": "icon-512.png",
    "revision": "93d3c16b71601cb8a994c54bc016cb2a"
  }, {
    "url": "icon.svg",
    "revision": "43d4572a404fea891fc7396f1a0cf31c"
  }, {
    "url": "manifest.webmanifest",
    "revision": "8119adbb742c1d7e65ee28bc75deedd7"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
