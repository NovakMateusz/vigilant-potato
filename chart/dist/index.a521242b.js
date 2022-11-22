// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1lGe4":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "933d9c51a521242b";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"7Jfkl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _auto = require("chart.js/auto");
var _outputJson = require("../../job_scrapper/output.json");
var _outputJsonDefault = parcelHelpers.interopDefault(_outputJson);
(async function() {
    //console.log('my data - ', newData)
    let data = [];
    (0, _outputJsonDefault.default).forEach((job)=>{
        if (data.find((x)=>x?.company === job?.company)) {
            let position = data.findIndex((x)=>x?.company === job?.company);
            data[position].numberOfOffers += 1;
        } else data.push({
            company: job.company,
            numberOfOffers: 1
        });
    });
    data.sort((a, b)=>b.numberOfOffers - a.numberOfOffers);
    const slicedData = data.slice(0, 20);
    // const data = [
    //   { year: 2010, count: 10 },
    //   { year: 2011, count: 20 },
    //   { year: 2012, count: 15 },
    //   { year: 2013, count: 25 },
    //   { year: 2014, count: 22 },
    //   { year: 2015, count: 30 },
    //   { year: 2016, count: 28 },
    // ];
    new (0, _auto.Chart)(document.getElementById("acquisitions"), {
        type: "bar",
        data: {
            labels: slicedData.map((row)=>row.company),
            datasets: [
                {
                    label: "Number of Jobs",
                    data: slicedData.map((row)=>row.numberOfOffers)
                }
            ]
        }
    });
})();

},{"chart.js/auto":"d8NN9","../../job_scrapper/output.json":"h82lJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d8NN9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _chartJs = require("../dist/chart.js");
parcelHelpers.exportAll(_chartJs, exports);
(0, _chartJs.Chart).register(...(0, _chartJs.registerables));
exports.default = (0, _chartJs.Chart);

},{"../dist/chart.js":"ipU8D","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ipU8D":[function(require,module,exports) {
/*!
 * Chart.js v4.0.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Ticks", ()=>(0, _helpersSegmentJs.aL));
parcelHelpers.export(exports, "defaults", ()=>(0, _helpersSegmentJs.d));
parcelHelpers.export(exports, "Animation", ()=>Animation);
parcelHelpers.export(exports, "Animations", ()=>Animations);
parcelHelpers.export(exports, "ArcElement", ()=>ArcElement);
parcelHelpers.export(exports, "BarController", ()=>BarController);
parcelHelpers.export(exports, "BarElement", ()=>BarElement);
parcelHelpers.export(exports, "BasePlatform", ()=>BasePlatform);
parcelHelpers.export(exports, "BasicPlatform", ()=>BasicPlatform);
parcelHelpers.export(exports, "BubbleController", ()=>BubbleController);
parcelHelpers.export(exports, "CategoryScale", ()=>CategoryScale);
parcelHelpers.export(exports, "Chart", ()=>Chart$1);
parcelHelpers.export(exports, "Colors", ()=>plugin_colors);
parcelHelpers.export(exports, "DatasetController", ()=>DatasetController);
parcelHelpers.export(exports, "Decimation", ()=>plugin_decimation);
parcelHelpers.export(exports, "DomPlatform", ()=>DomPlatform);
parcelHelpers.export(exports, "DoughnutController", ()=>DoughnutController);
parcelHelpers.export(exports, "Element", ()=>Element);
parcelHelpers.export(exports, "Filler", ()=>index);
parcelHelpers.export(exports, "Interaction", ()=>Interaction);
parcelHelpers.export(exports, "Legend", ()=>plugin_legend);
parcelHelpers.export(exports, "LineController", ()=>LineController);
parcelHelpers.export(exports, "LineElement", ()=>LineElement);
parcelHelpers.export(exports, "LinearScale", ()=>LinearScale);
parcelHelpers.export(exports, "LogarithmicScale", ()=>LogarithmicScale);
parcelHelpers.export(exports, "PieController", ()=>PieController);
parcelHelpers.export(exports, "PointElement", ()=>PointElement);
parcelHelpers.export(exports, "PolarAreaController", ()=>PolarAreaController);
parcelHelpers.export(exports, "RadarController", ()=>RadarController);
parcelHelpers.export(exports, "RadialLinearScale", ()=>RadialLinearScale);
parcelHelpers.export(exports, "Scale", ()=>Scale);
parcelHelpers.export(exports, "ScatterController", ()=>ScatterController);
parcelHelpers.export(exports, "SubTitle", ()=>plugin_subtitle);
parcelHelpers.export(exports, "TimeScale", ()=>TimeScale);
parcelHelpers.export(exports, "TimeSeriesScale", ()=>TimeSeriesScale$1);
parcelHelpers.export(exports, "Title", ()=>plugin_title);
parcelHelpers.export(exports, "Tooltip", ()=>plugin_tooltip);
parcelHelpers.export(exports, "_adapters", ()=>adapters);
parcelHelpers.export(exports, "_detectPlatform", ()=>_detectPlatform);
parcelHelpers.export(exports, "animator", ()=>animator);
parcelHelpers.export(exports, "controllers", ()=>controllers);
parcelHelpers.export(exports, "elements", ()=>elements);
parcelHelpers.export(exports, "layouts", ()=>layouts);
parcelHelpers.export(exports, "plugins", ()=>plugins);
parcelHelpers.export(exports, "registerables", ()=>registerables);
parcelHelpers.export(exports, "registry", ()=>registry);
parcelHelpers.export(exports, "scales", ()=>scales);
var _helpersSegmentJs = require("./chunks/helpers.segment.js");
class Animator {
    constructor(){
        this._request = null;
        this._charts = new Map();
        this._running = false;
        this._lastDate = undefined;
    }
    _notify(chart, anims, date, type) {
        const callbacks = anims.listeners[type];
        const numSteps = anims.duration;
        callbacks.forEach((fn)=>fn({
                chart,
                initial: anims.initial,
                numSteps,
                currentStep: Math.min(date - anims.start, numSteps)
            }));
    }
    _refresh() {
        if (this._request) return;
        this._running = true;
        this._request = (0, _helpersSegmentJs.r).call(window, ()=>{
            this._update();
            this._request = null;
            if (this._running) this._refresh();
        });
    }
    _update(date = Date.now()) {
        let remaining = 0;
        this._charts.forEach((anims, chart)=>{
            if (!anims.running || !anims.items.length) return;
            const items = anims.items;
            let i = items.length - 1;
            let draw = false;
            let item;
            for(; i >= 0; --i){
                item = items[i];
                if (item._active) {
                    if (item._total > anims.duration) anims.duration = item._total;
                    item.tick(date);
                    draw = true;
                } else {
                    items[i] = items[items.length - 1];
                    items.pop();
                }
            }
            if (draw) {
                chart.draw();
                this._notify(chart, anims, date, "progress");
            }
            if (!items.length) {
                anims.running = false;
                this._notify(chart, anims, date, "complete");
                anims.initial = false;
            }
            remaining += items.length;
        });
        this._lastDate = date;
        if (remaining === 0) this._running = false;
    }
    _getAnims(chart) {
        const charts = this._charts;
        let anims = charts.get(chart);
        if (!anims) {
            anims = {
                running: false,
                initial: true,
                items: [],
                listeners: {
                    complete: [],
                    progress: []
                }
            };
            charts.set(chart, anims);
        }
        return anims;
    }
    listen(chart, event, cb) {
        this._getAnims(chart).listeners[event].push(cb);
    }
    add(chart, items) {
        if (!items || !items.length) return;
        this._getAnims(chart).items.push(...items);
    }
    has(chart) {
        return this._getAnims(chart).items.length > 0;
    }
    start(chart) {
        const anims = this._charts.get(chart);
        if (!anims) return;
        anims.running = true;
        anims.start = Date.now();
        anims.duration = anims.items.reduce((acc, cur)=>Math.max(acc, cur._duration), 0);
        this._refresh();
    }
    running(chart) {
        if (!this._running) return false;
        const anims = this._charts.get(chart);
        if (!anims || !anims.running || !anims.items.length) return false;
        return true;
    }
    stop(chart) {
        const anims = this._charts.get(chart);
        if (!anims || !anims.items.length) return;
        const items = anims.items;
        let i = items.length - 1;
        for(; i >= 0; --i)items[i].cancel();
        anims.items = [];
        this._notify(chart, anims, Date.now(), "complete");
    }
    remove(chart) {
        return this._charts.delete(chart);
    }
}
var animator = /* #__PURE__ */ new Animator();
const transparent = "transparent";
const interpolators = {
    boolean (from, to, factor) {
        return factor > 0.5 ? to : from;
    },
    color (from, to, factor) {
        const c0 = (0, _helpersSegmentJs.c)(from || transparent);
        const c1 = c0.valid && (0, _helpersSegmentJs.c)(to || transparent);
        return c1 && c1.valid ? c1.mix(c0, factor).hexString() : to;
    },
    number (from, to, factor) {
        return from + (to - from) * factor;
    }
};
class Animation {
    constructor(cfg, target, prop, to){
        const currentValue = target[prop];
        to = (0, _helpersSegmentJs.a)([
            cfg.to,
            to,
            currentValue,
            cfg.from
        ]);
        const from = (0, _helpersSegmentJs.a)([
            cfg.from,
            currentValue,
            to
        ]);
        this._active = true;
        this._fn = cfg.fn || interpolators[cfg.type || typeof from];
        this._easing = (0, _helpersSegmentJs.e)[cfg.easing] || (0, _helpersSegmentJs.e).linear;
        this._start = Math.floor(Date.now() + (cfg.delay || 0));
        this._duration = this._total = Math.floor(cfg.duration);
        this._loop = !!cfg.loop;
        this._target = target;
        this._prop = prop;
        this._from = from;
        this._to = to;
        this._promises = undefined;
    }
    active() {
        return this._active;
    }
    update(cfg, to, date) {
        if (this._active) {
            this._notify(false);
            const currentValue = this._target[this._prop];
            const elapsed = date - this._start;
            const remain = this._duration - elapsed;
            this._start = date;
            this._duration = Math.floor(Math.max(remain, cfg.duration));
            this._total += elapsed;
            this._loop = !!cfg.loop;
            this._to = (0, _helpersSegmentJs.a)([
                cfg.to,
                to,
                currentValue,
                cfg.from
            ]);
            this._from = (0, _helpersSegmentJs.a)([
                cfg.from,
                currentValue,
                to
            ]);
        }
    }
    cancel() {
        if (this._active) {
            this.tick(Date.now());
            this._active = false;
            this._notify(false);
        }
    }
    tick(date) {
        const elapsed = date - this._start;
        const duration = this._duration;
        const prop = this._prop;
        const from = this._from;
        const loop = this._loop;
        const to = this._to;
        let factor;
        this._active = from !== to && (loop || elapsed < duration);
        if (!this._active) {
            this._target[prop] = to;
            this._notify(true);
            return;
        }
        if (elapsed < 0) {
            this._target[prop] = from;
            return;
        }
        factor = elapsed / duration % 2;
        factor = loop && factor > 1 ? 2 - factor : factor;
        factor = this._easing(Math.min(1, Math.max(0, factor)));
        this._target[prop] = this._fn(from, to, factor);
    }
    wait() {
        const promises = this._promises || (this._promises = []);
        return new Promise((res, rej)=>{
            promises.push({
                res,
                rej
            });
        });
    }
    _notify(resolved) {
        const method = resolved ? "res" : "rej";
        const promises = this._promises || [];
        for(let i = 0; i < promises.length; i++)promises[i][method]();
    }
}
class Animations {
    constructor(chart, config){
        this._chart = chart;
        this._properties = new Map();
        this.configure(config);
    }
    configure(config) {
        if (!(0, _helpersSegmentJs.i)(config)) return;
        const animationOptions = Object.keys((0, _helpersSegmentJs.d).animation);
        const animatedProps = this._properties;
        Object.getOwnPropertyNames(config).forEach((key)=>{
            const cfg = config[key];
            if (!(0, _helpersSegmentJs.i)(cfg)) return;
            const resolved = {};
            for (const option of animationOptions)resolved[option] = cfg[option];
            ((0, _helpersSegmentJs.b)(cfg.properties) && cfg.properties || [
                key
            ]).forEach((prop)=>{
                if (prop === key || !animatedProps.has(prop)) animatedProps.set(prop, resolved);
            });
        });
    }
    _animateOptions(target, values) {
        const newOptions = values.options;
        const options = resolveTargetOptions(target, newOptions);
        if (!options) return [];
        const animations = this._createAnimations(options, newOptions);
        if (newOptions.$shared) awaitAll(target.options.$animations, newOptions).then(()=>{
            target.options = newOptions;
        }, ()=>{});
        return animations;
    }
    _createAnimations(target, values) {
        const animatedProps = this._properties;
        const animations = [];
        const running = target.$animations || (target.$animations = {});
        const props = Object.keys(values);
        const date = Date.now();
        let i;
        for(i = props.length - 1; i >= 0; --i){
            const prop = props[i];
            if (prop.charAt(0) === "$") continue;
            if (prop === "options") {
                animations.push(...this._animateOptions(target, values));
                continue;
            }
            const value = values[prop];
            let animation = running[prop];
            const cfg = animatedProps.get(prop);
            if (animation) {
                if (cfg && animation.active()) {
                    animation.update(cfg, value, date);
                    continue;
                } else animation.cancel();
            }
            if (!cfg || !cfg.duration) {
                target[prop] = value;
                continue;
            }
            running[prop] = animation = new Animation(cfg, target, prop, value);
            animations.push(animation);
        }
        return animations;
    }
    update(target, values) {
        if (this._properties.size === 0) {
            Object.assign(target, values);
            return;
        }
        const animations = this._createAnimations(target, values);
        if (animations.length) {
            animator.add(this._chart, animations);
            return true;
        }
    }
}
function awaitAll(animations, properties) {
    const running = [];
    const keys = Object.keys(properties);
    for(let i = 0; i < keys.length; i++){
        const anim = animations[keys[i]];
        if (anim && anim.active()) running.push(anim.wait());
    }
    return Promise.all(running);
}
function resolveTargetOptions(target, newOptions) {
    if (!newOptions) return;
    let options = target.options;
    if (!options) {
        target.options = newOptions;
        return;
    }
    if (options.$shared) target.options = options = Object.assign({}, options, {
        $shared: false,
        $animations: {}
    });
    return options;
}
function scaleClip(scale, allowedOverflow) {
    const opts = scale && scale.options || {};
    const reverse = opts.reverse;
    const min = opts.min === undefined ? allowedOverflow : 0;
    const max = opts.max === undefined ? allowedOverflow : 0;
    return {
        start: reverse ? max : min,
        end: reverse ? min : max
    };
}
function defaultClip(xScale, yScale, allowedOverflow) {
    if (allowedOverflow === false) return false;
    const x = scaleClip(xScale, allowedOverflow);
    const y = scaleClip(yScale, allowedOverflow);
    return {
        top: y.end,
        right: x.end,
        bottom: y.start,
        left: x.start
    };
}
function toClip(value) {
    let t, r, b, l;
    if ((0, _helpersSegmentJs.i)(value)) {
        t = value.top;
        r = value.right;
        b = value.bottom;
        l = value.left;
    } else t = r = b = l = value;
    return {
        top: t,
        right: r,
        bottom: b,
        left: l,
        disabled: value === false
    };
}
function getSortedDatasetIndices(chart, filterVisible) {
    const keys = [];
    const metasets = chart._getSortedDatasetMetas(filterVisible);
    let i, ilen;
    for(i = 0, ilen = metasets.length; i < ilen; ++i)keys.push(metasets[i].index);
    return keys;
}
function applyStack(stack, value, dsIndex, options = {}) {
    const keys = stack.keys;
    const singleMode = options.mode === "single";
    let i, ilen, datasetIndex, otherValue;
    if (value === null) return;
    for(i = 0, ilen = keys.length; i < ilen; ++i){
        datasetIndex = +keys[i];
        if (datasetIndex === dsIndex) {
            if (options.all) continue;
            break;
        }
        otherValue = stack.values[datasetIndex];
        if ((0, _helpersSegmentJs.g)(otherValue) && (singleMode || value === 0 || (0, _helpersSegmentJs.s)(value) === (0, _helpersSegmentJs.s)(otherValue))) value += otherValue;
    }
    return value;
}
function convertObjectDataToArray(data) {
    const keys = Object.keys(data);
    const adata = new Array(keys.length);
    let i, ilen, key;
    for(i = 0, ilen = keys.length; i < ilen; ++i){
        key = keys[i];
        adata[i] = {
            x: key,
            y: data[key]
        };
    }
    return adata;
}
function isStacked(scale, meta) {
    const stacked = scale && scale.options.stacked;
    return stacked || stacked === undefined && meta.stack !== undefined;
}
function getStackKey(indexScale, valueScale, meta) {
    return `${indexScale.id}.${valueScale.id}.${meta.stack || meta.type}`;
}
function getUserBounds(scale) {
    const { min , max , minDefined , maxDefined  } = scale.getUserBounds();
    return {
        min: minDefined ? min : Number.NEGATIVE_INFINITY,
        max: maxDefined ? max : Number.POSITIVE_INFINITY
    };
}
function getOrCreateStack(stacks, stackKey, indexValue) {
    const subStack = stacks[stackKey] || (stacks[stackKey] = {});
    return subStack[indexValue] || (subStack[indexValue] = {});
}
function getLastIndexInStack(stack, vScale, positive, type) {
    for (const meta of vScale.getMatchingVisibleMetas(type).reverse()){
        const value = stack[meta.index];
        if (positive && value > 0 || !positive && value < 0) return meta.index;
    }
    return null;
}
function updateStacks(controller, parsed) {
    const { chart , _cachedMeta: meta  } = controller;
    const stacks = chart._stacks || (chart._stacks = {});
    const { iScale , vScale , index: datasetIndex  } = meta;
    const iAxis = iScale.axis;
    const vAxis = vScale.axis;
    const key = getStackKey(iScale, vScale, meta);
    const ilen = parsed.length;
    let stack;
    for(let i = 0; i < ilen; ++i){
        const item = parsed[i];
        const { [iAxis]: index , [vAxis]: value  } = item;
        const itemStacks = item._stacks || (item._stacks = {});
        stack = itemStacks[vAxis] = getOrCreateStack(stacks, key, index);
        stack[datasetIndex] = value;
        stack._top = getLastIndexInStack(stack, vScale, true, meta.type);
        stack._bottom = getLastIndexInStack(stack, vScale, false, meta.type);
    }
}
function getFirstScaleId(chart, axis) {
    const scales = chart.scales;
    return Object.keys(scales).filter((key)=>scales[key].axis === axis).shift();
}
function createDatasetContext(parent, index) {
    return (0, _helpersSegmentJs.j)(parent, {
        active: false,
        dataset: undefined,
        datasetIndex: index,
        index,
        mode: "default",
        type: "dataset"
    });
}
function createDataContext(parent, index, element) {
    return (0, _helpersSegmentJs.j)(parent, {
        active: false,
        dataIndex: index,
        parsed: undefined,
        raw: undefined,
        element,
        index,
        mode: "default",
        type: "data"
    });
}
function clearStacks(meta, items) {
    const datasetIndex = meta.controller.index;
    const axis = meta.vScale && meta.vScale.axis;
    if (!axis) return;
    items = items || meta._parsed;
    for (const parsed of items){
        const stacks = parsed._stacks;
        if (!stacks || stacks[axis] === undefined || stacks[axis][datasetIndex] === undefined) return;
        delete stacks[axis][datasetIndex];
    }
}
const isDirectUpdateMode = (mode)=>mode === "reset" || mode === "none";
const cloneIfNotShared = (cached, shared)=>shared ? cached : Object.assign({}, cached);
const createStack = (canStack, meta, chart)=>canStack && !meta.hidden && meta._stacked && {
        keys: getSortedDatasetIndices(chart, true),
        values: null
    };
class DatasetController {
    static defaults = {};
    static datasetElementType = null;
    static dataElementType = null;
    constructor(chart, datasetIndex){
        this.chart = chart;
        this._ctx = chart.ctx;
        this.index = datasetIndex;
        this._cachedDataOpts = {};
        this._cachedMeta = this.getMeta();
        this._type = this._cachedMeta.type;
        this.options = undefined;
        this._parsing = false;
        this._data = undefined;
        this._objectData = undefined;
        this._sharedOptions = undefined;
        this._drawStart = undefined;
        this._drawCount = undefined;
        this.enableOptionSharing = false;
        this.supportsDecimation = false;
        this.$context = undefined;
        this._syncList = [];
        this.datasetElementType = new.target.datasetElementType;
        this.dataElementType = new.target.dataElementType;
        this.initialize();
    }
    initialize() {
        const meta = this._cachedMeta;
        this.configure();
        this.linkScales();
        meta._stacked = isStacked(meta.vScale, meta);
        this.addElements();
        if (this.options.fill && !this.chart.isPluginEnabled("filler")) console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
    }
    updateIndex(datasetIndex) {
        if (this.index !== datasetIndex) clearStacks(this._cachedMeta);
        this.index = datasetIndex;
    }
    linkScales() {
        const chart = this.chart;
        const meta = this._cachedMeta;
        const dataset = this.getDataset();
        const chooseId = (axis, x, y, r)=>axis === "x" ? x : axis === "r" ? r : y;
        const xid = meta.xAxisID = (0, _helpersSegmentJs.v)(dataset.xAxisID, getFirstScaleId(chart, "x"));
        const yid = meta.yAxisID = (0, _helpersSegmentJs.v)(dataset.yAxisID, getFirstScaleId(chart, "y"));
        const rid = meta.rAxisID = (0, _helpersSegmentJs.v)(dataset.rAxisID, getFirstScaleId(chart, "r"));
        const indexAxis = meta.indexAxis;
        const iid = meta.iAxisID = chooseId(indexAxis, xid, yid, rid);
        const vid = meta.vAxisID = chooseId(indexAxis, yid, xid, rid);
        meta.xScale = this.getScaleForId(xid);
        meta.yScale = this.getScaleForId(yid);
        meta.rScale = this.getScaleForId(rid);
        meta.iScale = this.getScaleForId(iid);
        meta.vScale = this.getScaleForId(vid);
    }
    getDataset() {
        return this.chart.data.datasets[this.index];
    }
    getMeta() {
        return this.chart.getDatasetMeta(this.index);
    }
    getScaleForId(scaleID) {
        return this.chart.scales[scaleID];
    }
    _getOtherScale(scale) {
        const meta = this._cachedMeta;
        return scale === meta.iScale ? meta.vScale : meta.iScale;
    }
    reset() {
        this._update("reset");
    }
    _destroy() {
        const meta = this._cachedMeta;
        if (this._data) (0, _helpersSegmentJs.u)(this._data, this);
        if (meta._stacked) clearStacks(meta);
    }
    _dataCheck() {
        const dataset = this.getDataset();
        const data = dataset.data || (dataset.data = []);
        const _data = this._data;
        if ((0, _helpersSegmentJs.i)(data)) this._data = convertObjectDataToArray(data);
        else if (_data !== data) {
            if (_data) {
                (0, _helpersSegmentJs.u)(_data, this);
                const meta = this._cachedMeta;
                clearStacks(meta);
                meta._parsed = [];
            }
            if (data && Object.isExtensible(data)) (0, _helpersSegmentJs.l)(data, this);
            this._syncList = [];
            this._data = data;
        }
    }
    addElements() {
        const meta = this._cachedMeta;
        this._dataCheck();
        if (this.datasetElementType) meta.dataset = new this.datasetElementType();
    }
    buildOrUpdateElements(resetNewElements) {
        const meta = this._cachedMeta;
        const dataset = this.getDataset();
        let stackChanged = false;
        this._dataCheck();
        const oldStacked = meta._stacked;
        meta._stacked = isStacked(meta.vScale, meta);
        if (meta.stack !== dataset.stack) {
            stackChanged = true;
            clearStacks(meta);
            meta.stack = dataset.stack;
        }
        this._resyncElements(resetNewElements);
        if (stackChanged || oldStacked !== meta._stacked) updateStacks(this, meta._parsed);
    }
    configure() {
        const config = this.chart.config;
        const scopeKeys = config.datasetScopeKeys(this._type);
        const scopes = config.getOptionScopes(this.getDataset(), scopeKeys, true);
        this.options = config.createResolver(scopes, this.getContext());
        this._parsing = this.options.parsing;
        this._cachedDataOpts = {};
    }
    parse(start, count) {
        const { _cachedMeta: meta , _data: data  } = this;
        const { iScale , _stacked  } = meta;
        const iAxis = iScale.axis;
        let sorted = start === 0 && count === data.length ? true : meta._sorted;
        let prev = start > 0 && meta._parsed[start - 1];
        let i, cur, parsed;
        if (this._parsing === false) {
            meta._parsed = data;
            meta._sorted = true;
            parsed = data;
        } else {
            if ((0, _helpersSegmentJs.b)(data[start])) parsed = this.parseArrayData(meta, data, start, count);
            else if ((0, _helpersSegmentJs.i)(data[start])) parsed = this.parseObjectData(meta, data, start, count);
            else parsed = this.parsePrimitiveData(meta, data, start, count);
            const isNotInOrderComparedToPrev = ()=>cur[iAxis] === null || prev && cur[iAxis] < prev[iAxis];
            for(i = 0; i < count; ++i){
                meta._parsed[i + start] = cur = parsed[i];
                if (sorted) {
                    if (isNotInOrderComparedToPrev()) sorted = false;
                    prev = cur;
                }
            }
            meta._sorted = sorted;
        }
        if (_stacked) updateStacks(this, parsed);
    }
    parsePrimitiveData(meta, data, start, count) {
        const { iScale , vScale  } = meta;
        const iAxis = iScale.axis;
        const vAxis = vScale.axis;
        const labels = iScale.getLabels();
        const singleScale = iScale === vScale;
        const parsed = new Array(count);
        let i, ilen, index;
        for(i = 0, ilen = count; i < ilen; ++i){
            index = i + start;
            parsed[i] = {
                [iAxis]: singleScale || iScale.parse(labels[index], index),
                [vAxis]: vScale.parse(data[index], index)
            };
        }
        return parsed;
    }
    parseArrayData(meta, data, start, count) {
        const { xScale , yScale  } = meta;
        const parsed = new Array(count);
        let i, ilen, index, item;
        for(i = 0, ilen = count; i < ilen; ++i){
            index = i + start;
            item = data[index];
            parsed[i] = {
                x: xScale.parse(item[0], index),
                y: yScale.parse(item[1], index)
            };
        }
        return parsed;
    }
    parseObjectData(meta, data, start, count) {
        const { xScale , yScale  } = meta;
        const { xAxisKey ="x" , yAxisKey ="y"  } = this._parsing;
        const parsed = new Array(count);
        let i, ilen, index, item;
        for(i = 0, ilen = count; i < ilen; ++i){
            index = i + start;
            item = data[index];
            parsed[i] = {
                x: xScale.parse((0, _helpersSegmentJs.f)(item, xAxisKey), index),
                y: yScale.parse((0, _helpersSegmentJs.f)(item, yAxisKey), index)
            };
        }
        return parsed;
    }
    getParsed(index) {
        return this._cachedMeta._parsed[index];
    }
    getDataElement(index) {
        return this._cachedMeta.data[index];
    }
    applyStack(scale, parsed, mode) {
        const chart = this.chart;
        const meta = this._cachedMeta;
        const value = parsed[scale.axis];
        const stack = {
            keys: getSortedDatasetIndices(chart, true),
            values: parsed._stacks[scale.axis]
        };
        return applyStack(stack, value, meta.index, {
            mode
        });
    }
    updateRangeFromParsed(range, scale, parsed, stack) {
        const parsedValue = parsed[scale.axis];
        let value = parsedValue === null ? NaN : parsedValue;
        const values = stack && parsed._stacks[scale.axis];
        if (stack && values) {
            stack.values = values;
            value = applyStack(stack, parsedValue, this._cachedMeta.index);
        }
        range.min = Math.min(range.min, value);
        range.max = Math.max(range.max, value);
    }
    getMinMax(scale, canStack) {
        const meta = this._cachedMeta;
        const _parsed = meta._parsed;
        const sorted = meta._sorted && scale === meta.iScale;
        const ilen = _parsed.length;
        const otherScale = this._getOtherScale(scale);
        const stack = createStack(canStack, meta, this.chart);
        const range = {
            min: Number.POSITIVE_INFINITY,
            max: Number.NEGATIVE_INFINITY
        };
        const { min: otherMin , max: otherMax  } = getUserBounds(otherScale);
        let i, parsed;
        function _skip() {
            parsed = _parsed[i];
            const otherValue = parsed[otherScale.axis];
            return !(0, _helpersSegmentJs.g)(parsed[scale.axis]) || otherMin > otherValue || otherMax < otherValue;
        }
        for(i = 0; i < ilen; ++i){
            if (_skip()) continue;
            this.updateRangeFromParsed(range, scale, parsed, stack);
            if (sorted) break;
        }
        if (sorted) for(i = ilen - 1; i >= 0; --i){
            if (_skip()) continue;
            this.updateRangeFromParsed(range, scale, parsed, stack);
            break;
        }
        return range;
    }
    getAllParsedValues(scale) {
        const parsed = this._cachedMeta._parsed;
        const values = [];
        let i, ilen, value;
        for(i = 0, ilen = parsed.length; i < ilen; ++i){
            value = parsed[i][scale.axis];
            if ((0, _helpersSegmentJs.g)(value)) values.push(value);
        }
        return values;
    }
    getMaxOverflow() {
        return false;
    }
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const iScale = meta.iScale;
        const vScale = meta.vScale;
        const parsed = this.getParsed(index);
        return {
            label: iScale ? "" + iScale.getLabelForValue(parsed[iScale.axis]) : "",
            value: vScale ? "" + vScale.getLabelForValue(parsed[vScale.axis]) : ""
        };
    }
    _update(mode) {
        const meta = this._cachedMeta;
        this.update(mode || "default");
        meta._clip = toClip((0, _helpersSegmentJs.v)(this.options.clip, defaultClip(meta.xScale, meta.yScale, this.getMaxOverflow())));
    }
    update(mode) {}
    draw() {
        const ctx = this._ctx;
        const chart = this.chart;
        const meta = this._cachedMeta;
        const elements = meta.data || [];
        const area = chart.chartArea;
        const active = [];
        const start = this._drawStart || 0;
        const count = this._drawCount || elements.length - start;
        const drawActiveElementsOnTop = this.options.drawActiveElementsOnTop;
        let i;
        if (meta.dataset) meta.dataset.draw(ctx, area, start, count);
        for(i = start; i < start + count; ++i){
            const element = elements[i];
            if (element.hidden) continue;
            if (element.active && drawActiveElementsOnTop) active.push(element);
            else element.draw(ctx, area);
        }
        for(i = 0; i < active.length; ++i)active[i].draw(ctx, area);
    }
    getStyle(index, active) {
        const mode = active ? "active" : "default";
        return index === undefined && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(mode) : this.resolveDataElementOptions(index || 0, mode);
    }
    getContext(index, active, mode) {
        const dataset = this.getDataset();
        let context;
        if (index >= 0 && index < this._cachedMeta.data.length) {
            const element = this._cachedMeta.data[index];
            context = element.$context || (element.$context = createDataContext(this.getContext(), index, element));
            context.parsed = this.getParsed(index);
            context.raw = dataset.data[index];
            context.index = context.dataIndex = index;
        } else {
            context = this.$context || (this.$context = createDatasetContext(this.chart.getContext(), this.index));
            context.dataset = dataset;
            context.index = context.datasetIndex = this.index;
        }
        context.active = !!active;
        context.mode = mode;
        return context;
    }
    resolveDatasetElementOptions(mode) {
        return this._resolveElementOptions(this.datasetElementType.id, mode);
    }
    resolveDataElementOptions(index, mode) {
        return this._resolveElementOptions(this.dataElementType.id, mode, index);
    }
    _resolveElementOptions(elementType, mode = "default", index) {
        const active = mode === "active";
        const cache = this._cachedDataOpts;
        const cacheKey = elementType + "-" + mode;
        const cached = cache[cacheKey];
        const sharing = this.enableOptionSharing && (0, _helpersSegmentJs.h)(index);
        if (cached) return cloneIfNotShared(cached, sharing);
        const config = this.chart.config;
        const scopeKeys = config.datasetElementScopeKeys(this._type, elementType);
        const prefixes = active ? [
            `${elementType}Hover`,
            "hover",
            elementType,
            ""
        ] : [
            elementType,
            ""
        ];
        const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
        const names = Object.keys((0, _helpersSegmentJs.d).elements[elementType]);
        const context = ()=>this.getContext(index, active);
        const values = config.resolveNamedOptions(scopes, names, context, prefixes);
        if (values.$shared) {
            values.$shared = sharing;
            cache[cacheKey] = Object.freeze(cloneIfNotShared(values, sharing));
        }
        return values;
    }
    _resolveAnimations(index, transition, active) {
        const chart = this.chart;
        const cache = this._cachedDataOpts;
        const cacheKey = `animation-${transition}`;
        const cached = cache[cacheKey];
        if (cached) return cached;
        let options;
        if (chart.options.animation !== false) {
            const config = this.chart.config;
            const scopeKeys = config.datasetAnimationScopeKeys(this._type, transition);
            const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
            options = config.createResolver(scopes, this.getContext(index, active, transition));
        }
        const animations = new Animations(chart, options && options.animations);
        if (options && options._cacheable) cache[cacheKey] = Object.freeze(animations);
        return animations;
    }
    getSharedOptions(options) {
        if (!options.$shared) return;
        return this._sharedOptions || (this._sharedOptions = Object.assign({}, options));
    }
    includeOptions(mode, sharedOptions) {
        return !sharedOptions || isDirectUpdateMode(mode) || this.chart._animationsDisabled;
    }
    _getSharedOptions(start, mode) {
        const firstOpts = this.resolveDataElementOptions(start, mode);
        const previouslySharedOptions = this._sharedOptions;
        const sharedOptions = this.getSharedOptions(firstOpts);
        const includeOptions = this.includeOptions(mode, sharedOptions) || sharedOptions !== previouslySharedOptions;
        this.updateSharedOptions(sharedOptions, mode, firstOpts);
        return {
            sharedOptions,
            includeOptions
        };
    }
    updateElement(element, index, properties, mode) {
        if (isDirectUpdateMode(mode)) Object.assign(element, properties);
        else this._resolveAnimations(index, mode).update(element, properties);
    }
    updateSharedOptions(sharedOptions, mode, newOptions) {
        if (sharedOptions && !isDirectUpdateMode(mode)) this._resolveAnimations(undefined, mode).update(sharedOptions, newOptions);
    }
    _setStyle(element, index, mode, active) {
        element.active = active;
        const options = this.getStyle(index, active);
        this._resolveAnimations(index, mode, active).update(element, {
            options: !active && this.getSharedOptions(options) || options
        });
    }
    removeHoverStyle(element, datasetIndex, index) {
        this._setStyle(element, index, "active", false);
    }
    setHoverStyle(element, datasetIndex, index) {
        this._setStyle(element, index, "active", true);
    }
    _removeDatasetHoverStyle() {
        const element = this._cachedMeta.dataset;
        if (element) this._setStyle(element, undefined, "active", false);
    }
    _setDatasetHoverStyle() {
        const element = this._cachedMeta.dataset;
        if (element) this._setStyle(element, undefined, "active", true);
    }
    _resyncElements(resetNewElements) {
        const data = this._data;
        const elements = this._cachedMeta.data;
        for (const [method, arg1, arg2] of this._syncList)this[method](arg1, arg2);
        this._syncList = [];
        const numMeta = elements.length;
        const numData = data.length;
        const count = Math.min(numData, numMeta);
        if (count) this.parse(0, count);
        if (numData > numMeta) this._insertElements(numMeta, numData - numMeta, resetNewElements);
        else if (numData < numMeta) this._removeElements(numData, numMeta - numData);
    }
    _insertElements(start, count, resetNewElements = true) {
        const meta = this._cachedMeta;
        const data = meta.data;
        const end = start + count;
        let i;
        const move = (arr)=>{
            arr.length += count;
            for(i = arr.length - 1; i >= end; i--)arr[i] = arr[i - count];
        };
        move(data);
        for(i = start; i < end; ++i)data[i] = new this.dataElementType();
        if (this._parsing) move(meta._parsed);
        this.parse(start, count);
        if (resetNewElements) this.updateElements(data, start, count, "reset");
    }
    updateElements(element, start, count, mode) {}
    _removeElements(start, count) {
        const meta = this._cachedMeta;
        if (this._parsing) {
            const removed = meta._parsed.splice(start, count);
            if (meta._stacked) clearStacks(meta, removed);
        }
        meta.data.splice(start, count);
    }
    _sync(args) {
        if (this._parsing) this._syncList.push(args);
        else {
            const [method, arg1, arg2] = args;
            this[method](arg1, arg2);
        }
        this.chart._dataChanges.push([
            this.index,
            ...args
        ]);
    }
    _onDataPush() {
        const count = arguments.length;
        this._sync([
            "_insertElements",
            this.getDataset().data.length - count,
            count
        ]);
    }
    _onDataPop() {
        this._sync([
            "_removeElements",
            this._cachedMeta.data.length - 1,
            1
        ]);
    }
    _onDataShift() {
        this._sync([
            "_removeElements",
            0,
            1
        ]);
    }
    _onDataSplice(start, count) {
        if (count) this._sync([
            "_removeElements",
            start,
            count
        ]);
        const newCount = arguments.length - 2;
        if (newCount) this._sync([
            "_insertElements",
            start,
            newCount
        ]);
    }
    _onDataUnshift() {
        this._sync([
            "_insertElements",
            0,
            arguments.length
        ]);
    }
}
function getAllScaleValues(scale, type) {
    if (!scale._cache.$bar) {
        const visibleMetas = scale.getMatchingVisibleMetas(type);
        let values = [];
        for(let i = 0, ilen = visibleMetas.length; i < ilen; i++)values = values.concat(visibleMetas[i].controller.getAllParsedValues(scale));
        scale._cache.$bar = (0, _helpersSegmentJs._)(values.sort((a, b)=>a - b));
    }
    return scale._cache.$bar;
}
function computeMinSampleSize(meta) {
    const scale = meta.iScale;
    const values = getAllScaleValues(scale, meta.type);
    let min = scale._length;
    let i, ilen, curr, prev;
    const updateMinAndPrev = ()=>{
        if (curr === 32767 || curr === -32768) return;
        if ((0, _helpersSegmentJs.h)(prev)) min = Math.min(min, Math.abs(curr - prev) || min);
        prev = curr;
    };
    for(i = 0, ilen = values.length; i < ilen; ++i){
        curr = scale.getPixelForValue(values[i]);
        updateMinAndPrev();
    }
    prev = undefined;
    for(i = 0, ilen = scale.ticks.length; i < ilen; ++i){
        curr = scale.getPixelForTick(i);
        updateMinAndPrev();
    }
    return min;
}
function computeFitCategoryTraits(index, ruler, options, stackCount) {
    const thickness = options.barThickness;
    let size, ratio;
    if ((0, _helpersSegmentJs.k)(thickness)) {
        size = ruler.min * options.categoryPercentage;
        ratio = options.barPercentage;
    } else {
        size = thickness * stackCount;
        ratio = 1;
    }
    return {
        chunk: size / stackCount,
        ratio,
        start: ruler.pixels[index] - size / 2
    };
}
function computeFlexCategoryTraits(index, ruler, options, stackCount) {
    const pixels = ruler.pixels;
    const curr = pixels[index];
    let prev = index > 0 ? pixels[index - 1] : null;
    let next = index < pixels.length - 1 ? pixels[index + 1] : null;
    const percent = options.categoryPercentage;
    if (prev === null) prev = curr - (next === null ? ruler.end - ruler.start : next - curr);
    if (next === null) next = curr + curr - prev;
    const start = curr - (curr - Math.min(prev, next)) / 2 * percent;
    const size = Math.abs(next - prev) / 2 * percent;
    return {
        chunk: size / stackCount,
        ratio: options.barPercentage,
        start
    };
}
function parseFloatBar(entry, item, vScale, i) {
    const startValue = vScale.parse(entry[0], i);
    const endValue = vScale.parse(entry[1], i);
    const min = Math.min(startValue, endValue);
    const max = Math.max(startValue, endValue);
    let barStart = min;
    let barEnd = max;
    if (Math.abs(min) > Math.abs(max)) {
        barStart = max;
        barEnd = min;
    }
    item[vScale.axis] = barEnd;
    item._custom = {
        barStart,
        barEnd,
        start: startValue,
        end: endValue,
        min,
        max
    };
}
function parseValue(entry, item, vScale, i) {
    if ((0, _helpersSegmentJs.b)(entry)) parseFloatBar(entry, item, vScale, i);
    else item[vScale.axis] = vScale.parse(entry, i);
    return item;
}
function parseArrayOrPrimitive(meta, data, start, count) {
    const iScale = meta.iScale;
    const vScale = meta.vScale;
    const labels = iScale.getLabels();
    const singleScale = iScale === vScale;
    const parsed = [];
    let i, ilen, item, entry;
    for(i = start, ilen = start + count; i < ilen; ++i){
        entry = data[i];
        item = {};
        item[iScale.axis] = singleScale || iScale.parse(labels[i], i);
        parsed.push(parseValue(entry, item, vScale, i));
    }
    return parsed;
}
function isFloatBar(custom) {
    return custom && custom.barStart !== undefined && custom.barEnd !== undefined;
}
function barSign(size, vScale, actualBase) {
    if (size !== 0) return (0, _helpersSegmentJs.s)(size);
    return (vScale.isHorizontal() ? 1 : -1) * (vScale.min >= actualBase ? 1 : -1);
}
function borderProps(properties) {
    let reverse, start, end, top, bottom;
    if (properties.horizontal) {
        reverse = properties.base > properties.x;
        start = "left";
        end = "right";
    } else {
        reverse = properties.base < properties.y;
        start = "bottom";
        end = "top";
    }
    if (reverse) {
        top = "end";
        bottom = "start";
    } else {
        top = "start";
        bottom = "end";
    }
    return {
        start,
        end,
        reverse,
        top,
        bottom
    };
}
function setBorderSkipped(properties, options, stack, index) {
    let edge = options.borderSkipped;
    const res = {};
    if (!edge) {
        properties.borderSkipped = res;
        return;
    }
    if (edge === true) {
        properties.borderSkipped = {
            top: true,
            right: true,
            bottom: true,
            left: true
        };
        return;
    }
    const { start , end , reverse , top , bottom  } = borderProps(properties);
    if (edge === "middle" && stack) {
        properties.enableBorderRadius = true;
        if ((stack._top || 0) === index) edge = top;
        else if ((stack._bottom || 0) === index) edge = bottom;
        else {
            res[parseEdge(bottom, start, end, reverse)] = true;
            edge = top;
        }
    }
    res[parseEdge(edge, start, end, reverse)] = true;
    properties.borderSkipped = res;
}
function parseEdge(edge, a, b, reverse) {
    if (reverse) {
        edge = swap(edge, a, b);
        edge = startEnd(edge, b, a);
    } else edge = startEnd(edge, a, b);
    return edge;
}
function swap(orig, v1, v2) {
    return orig === v1 ? v2 : orig === v2 ? v1 : orig;
}
function startEnd(v, start, end) {
    return v === "start" ? start : v === "end" ? end : v;
}
function setInflateAmount(properties, { inflateAmount  }, ratio) {
    properties.inflateAmount = inflateAmount === "auto" ? ratio === 1 ? 0.33 : 0 : inflateAmount;
}
class BarController extends DatasetController {
    static id = "bar";
    static defaults = {
        datasetElementType: false,
        dataElementType: "bar",
        categoryPercentage: 0.8,
        barPercentage: 0.9,
        grouped: true,
        animations: {
            numbers: {
                type: "number",
                properties: [
                    "x",
                    "y",
                    "base",
                    "width",
                    "height"
                ]
            }
        }
    };
    static overrides = {
        scales: {
            _index_: {
                type: "category",
                offset: true,
                grid: {
                    offset: true
                }
            },
            _value_: {
                type: "linear",
                beginAtZero: true
            }
        }
    };
    parsePrimitiveData(meta, data, start, count) {
        return parseArrayOrPrimitive(meta, data, start, count);
    }
    parseArrayData(meta, data, start, count) {
        return parseArrayOrPrimitive(meta, data, start, count);
    }
    parseObjectData(meta, data, start, count) {
        const { iScale , vScale  } = meta;
        const { xAxisKey ="x" , yAxisKey ="y"  } = this._parsing;
        const iAxisKey = iScale.axis === "x" ? xAxisKey : yAxisKey;
        const vAxisKey = vScale.axis === "x" ? xAxisKey : yAxisKey;
        const parsed = [];
        let i, ilen, item, obj;
        for(i = start, ilen = start + count; i < ilen; ++i){
            obj = data[i];
            item = {};
            item[iScale.axis] = iScale.parse((0, _helpersSegmentJs.f)(obj, iAxisKey), i);
            parsed.push(parseValue((0, _helpersSegmentJs.f)(obj, vAxisKey), item, vScale, i));
        }
        return parsed;
    }
    updateRangeFromParsed(range, scale, parsed, stack) {
        super.updateRangeFromParsed(range, scale, parsed, stack);
        const custom = parsed._custom;
        if (custom && scale === this._cachedMeta.vScale) {
            range.min = Math.min(range.min, custom.min);
            range.max = Math.max(range.max, custom.max);
        }
    }
    getMaxOverflow() {
        return 0;
    }
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const { iScale , vScale  } = meta;
        const parsed = this.getParsed(index);
        const custom = parsed._custom;
        const value = isFloatBar(custom) ? "[" + custom.start + ", " + custom.end + "]" : "" + vScale.getLabelForValue(parsed[vScale.axis]);
        return {
            label: "" + iScale.getLabelForValue(parsed[iScale.axis]),
            value
        };
    }
    initialize() {
        this.enableOptionSharing = true;
        super.initialize();
        const meta = this._cachedMeta;
        meta.stack = this.getDataset().stack;
    }
    update(mode) {
        const meta = this._cachedMeta;
        this.updateElements(meta.data, 0, meta.data.length, mode);
    }
    updateElements(bars, start, count, mode) {
        const reset = mode === "reset";
        const { index , _cachedMeta: { vScale  }  } = this;
        const base = vScale.getBasePixel();
        const horizontal = vScale.isHorizontal();
        const ruler = this._getRuler();
        const { sharedOptions , includeOptions  } = this._getSharedOptions(start, mode);
        for(let i = start; i < start + count; i++){
            const parsed = this.getParsed(i);
            const vpixels = reset || (0, _helpersSegmentJs.k)(parsed[vScale.axis]) ? {
                base,
                head: base
            } : this._calculateBarValuePixels(i);
            const ipixels = this._calculateBarIndexPixels(i, ruler);
            const stack = (parsed._stacks || {})[vScale.axis];
            const properties = {
                horizontal,
                base: vpixels.base,
                enableBorderRadius: !stack || isFloatBar(parsed._custom) || index === stack._top || index === stack._bottom,
                x: horizontal ? vpixels.head : ipixels.center,
                y: horizontal ? ipixels.center : vpixels.head,
                height: horizontal ? ipixels.size : Math.abs(vpixels.size),
                width: horizontal ? Math.abs(vpixels.size) : ipixels.size
            };
            if (includeOptions) properties.options = sharedOptions || this.resolveDataElementOptions(i, bars[i].active ? "active" : mode);
            const options = properties.options || bars[i].options;
            setBorderSkipped(properties, options, stack, index);
            setInflateAmount(properties, options, ruler.ratio);
            this.updateElement(bars[i], i, properties, mode);
        }
    }
    _getStacks(last, dataIndex) {
        const { iScale  } = this._cachedMeta;
        const metasets = iScale.getMatchingVisibleMetas(this._type).filter((meta)=>meta.controller.options.grouped);
        const stacked = iScale.options.stacked;
        const stacks = [];
        const skipNull = (meta)=>{
            const parsed = meta.controller.getParsed(dataIndex);
            const val = parsed && parsed[meta.vScale.axis];
            if ((0, _helpersSegmentJs.k)(val) || isNaN(val)) return true;
        };
        for (const meta of metasets){
            if (dataIndex !== undefined && skipNull(meta)) continue;
            if (stacked === false || stacks.indexOf(meta.stack) === -1 || stacked === undefined && meta.stack === undefined) stacks.push(meta.stack);
            if (meta.index === last) break;
        }
        if (!stacks.length) stacks.push(undefined);
        return stacks;
    }
    _getStackCount(index) {
        return this._getStacks(undefined, index).length;
    }
    _getStackIndex(datasetIndex, name1, dataIndex) {
        const stacks = this._getStacks(datasetIndex, dataIndex);
        const index = name1 !== undefined ? stacks.indexOf(name1) : -1;
        return index === -1 ? stacks.length - 1 : index;
    }
    _getRuler() {
        const opts = this.options;
        const meta = this._cachedMeta;
        const iScale = meta.iScale;
        const pixels = [];
        let i, ilen;
        for(i = 0, ilen = meta.data.length; i < ilen; ++i)pixels.push(iScale.getPixelForValue(this.getParsed(i)[iScale.axis], i));
        const barThickness = opts.barThickness;
        const min = barThickness || computeMinSampleSize(meta);
        return {
            min,
            pixels,
            start: iScale._startPixel,
            end: iScale._endPixel,
            stackCount: this._getStackCount(),
            scale: iScale,
            grouped: opts.grouped,
            ratio: barThickness ? 1 : opts.categoryPercentage * opts.barPercentage
        };
    }
    _calculateBarValuePixels(index) {
        const { _cachedMeta: { vScale , _stacked  } , options: { base: baseValue , minBarLength  }  } = this;
        const actualBase = baseValue || 0;
        const parsed = this.getParsed(index);
        const custom = parsed._custom;
        const floating = isFloatBar(custom);
        let value = parsed[vScale.axis];
        let start = 0;
        let length = _stacked ? this.applyStack(vScale, parsed, _stacked) : value;
        let head, size;
        if (length !== value) {
            start = length - value;
            length = value;
        }
        if (floating) {
            value = custom.barStart;
            length = custom.barEnd - custom.barStart;
            if (value !== 0 && (0, _helpersSegmentJs.s)(value) !== (0, _helpersSegmentJs.s)(custom.barEnd)) start = 0;
            start += value;
        }
        const startValue = !(0, _helpersSegmentJs.k)(baseValue) && !floating ? baseValue : start;
        let base = vScale.getPixelForValue(startValue);
        if (this.chart.getDataVisibility(index)) head = vScale.getPixelForValue(start + length);
        else head = base;
        size = head - base;
        if (Math.abs(size) < minBarLength) {
            size = barSign(size, vScale, actualBase) * minBarLength;
            if (value === actualBase) base -= size / 2;
            const startPixel = vScale.getPixelForDecimal(0);
            const endPixel = vScale.getPixelForDecimal(1);
            const min = Math.min(startPixel, endPixel);
            const max = Math.max(startPixel, endPixel);
            base = Math.max(Math.min(base, max), min);
            head = base + size;
        }
        if (base === vScale.getPixelForValue(actualBase)) {
            const halfGrid = (0, _helpersSegmentJs.s)(size) * vScale.getLineWidthForValue(actualBase) / 2;
            base += halfGrid;
            size -= halfGrid;
        }
        return {
            size,
            base,
            head,
            center: head + size / 2
        };
    }
    _calculateBarIndexPixels(index, ruler) {
        const scale = ruler.scale;
        const options = this.options;
        const skipNull = options.skipNull;
        const maxBarThickness = (0, _helpersSegmentJs.v)(options.maxBarThickness, Infinity);
        let center, size;
        if (ruler.grouped) {
            const stackCount = skipNull ? this._getStackCount(index) : ruler.stackCount;
            const range = options.barThickness === "flex" ? computeFlexCategoryTraits(index, ruler, options, stackCount) : computeFitCategoryTraits(index, ruler, options, stackCount);
            const stackIndex = this._getStackIndex(this.index, this._cachedMeta.stack, skipNull ? index : undefined);
            center = range.start + range.chunk * stackIndex + range.chunk / 2;
            size = Math.min(maxBarThickness, range.chunk * range.ratio);
        } else {
            center = scale.getPixelForValue(this.getParsed(index)[scale.axis], index);
            size = Math.min(maxBarThickness, ruler.min * ruler.ratio);
        }
        return {
            base: center - size / 2,
            head: center + size / 2,
            center,
            size
        };
    }
    draw() {
        const meta = this._cachedMeta;
        const vScale = meta.vScale;
        const rects = meta.data;
        const ilen = rects.length;
        let i = 0;
        for(; i < ilen; ++i)if (this.getParsed(i)[vScale.axis] !== null) rects[i].draw(this._ctx);
    }
}
class BubbleController extends DatasetController {
    static id = "bubble";
    static defaults = {
        datasetElementType: false,
        dataElementType: "point",
        animations: {
            numbers: {
                type: "number",
                properties: [
                    "x",
                    "y",
                    "borderWidth",
                    "radius"
                ]
            }
        }
    };
    static overrides = {
        scales: {
            x: {
                type: "linear"
            },
            y: {
                type: "linear"
            }
        }
    };
    initialize() {
        this.enableOptionSharing = true;
        super.initialize();
    }
    parsePrimitiveData(meta, data, start, count) {
        const parsed = super.parsePrimitiveData(meta, data, start, count);
        for(let i = 0; i < parsed.length; i++)parsed[i]._custom = this.resolveDataElementOptions(i + start).radius;
        return parsed;
    }
    parseArrayData(meta, data, start, count) {
        const parsed = super.parseArrayData(meta, data, start, count);
        for(let i = 0; i < parsed.length; i++){
            const item = data[start + i];
            parsed[i]._custom = (0, _helpersSegmentJs.v)(item[2], this.resolveDataElementOptions(i + start).radius);
        }
        return parsed;
    }
    parseObjectData(meta, data, start, count) {
        const parsed = super.parseObjectData(meta, data, start, count);
        for(let i = 0; i < parsed.length; i++){
            const item = data[start + i];
            parsed[i]._custom = (0, _helpersSegmentJs.v)(item && item.r && +item.r, this.resolveDataElementOptions(i + start).radius);
        }
        return parsed;
    }
    getMaxOverflow() {
        const data = this._cachedMeta.data;
        let max = 0;
        for(let i = data.length - 1; i >= 0; --i)max = Math.max(max, data[i].size(this.resolveDataElementOptions(i)) / 2);
        return max > 0 && max;
    }
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const labels = this.chart.data.labels || [];
        const { xScale , yScale  } = meta;
        const parsed = this.getParsed(index);
        const x = xScale.getLabelForValue(parsed.x);
        const y = yScale.getLabelForValue(parsed.y);
        const r = parsed._custom;
        return {
            label: labels[index] || "",
            value: "(" + x + ", " + y + (r ? ", " + r : "") + ")"
        };
    }
    update(mode) {
        const points = this._cachedMeta.data;
        this.updateElements(points, 0, points.length, mode);
    }
    updateElements(points, start, count, mode) {
        const reset = mode === "reset";
        const { iScale , vScale  } = this._cachedMeta;
        const { sharedOptions , includeOptions  } = this._getSharedOptions(start, mode);
        const iAxis = iScale.axis;
        const vAxis = vScale.axis;
        for(let i = start; i < start + count; i++){
            const point = points[i];
            const parsed = !reset && this.getParsed(i);
            const properties = {};
            const iPixel = properties[iAxis] = reset ? iScale.getPixelForDecimal(0.5) : iScale.getPixelForValue(parsed[iAxis]);
            const vPixel = properties[vAxis] = reset ? vScale.getBasePixel() : vScale.getPixelForValue(parsed[vAxis]);
            properties.skip = isNaN(iPixel) || isNaN(vPixel);
            if (includeOptions) {
                properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? "active" : mode);
                if (reset) properties.options.radius = 0;
            }
            this.updateElement(point, i, properties, mode);
        }
    }
    resolveDataElementOptions(index, mode) {
        const parsed = this.getParsed(index);
        let values = super.resolveDataElementOptions(index, mode);
        if (values.$shared) values = Object.assign({}, values, {
            $shared: false
        });
        const radius = values.radius;
        if (mode !== "active") values.radius = 0;
        values.radius += (0, _helpersSegmentJs.v)(parsed && parsed._custom, radius);
        return values;
    }
}
function getRatioAndOffset(rotation, circumference, cutout) {
    let ratioX = 1;
    let ratioY = 1;
    let offsetX = 0;
    let offsetY = 0;
    if (circumference < (0, _helpersSegmentJs.T)) {
        const startAngle = rotation;
        const endAngle = startAngle + circumference;
        const startX = Math.cos(startAngle);
        const startY = Math.sin(startAngle);
        const endX = Math.cos(endAngle);
        const endY = Math.sin(endAngle);
        const calcMax = (angle, a, b)=>(0, _helpersSegmentJs.p)(angle, startAngle, endAngle, true) ? 1 : Math.max(a, a * cutout, b, b * cutout);
        const calcMin = (angle, a, b)=>(0, _helpersSegmentJs.p)(angle, startAngle, endAngle, true) ? -1 : Math.min(a, a * cutout, b, b * cutout);
        const maxX = calcMax(0, startX, endX);
        const maxY = calcMax((0, _helpersSegmentJs.H), startY, endY);
        const minX = calcMin((0, _helpersSegmentJs.P), startX, endX);
        const minY = calcMin((0, _helpersSegmentJs.P) + (0, _helpersSegmentJs.H), startY, endY);
        ratioX = (maxX - minX) / 2;
        ratioY = (maxY - minY) / 2;
        offsetX = -(maxX + minX) / 2;
        offsetY = -(maxY + minY) / 2;
    }
    return {
        ratioX,
        ratioY,
        offsetX,
        offsetY
    };
}
class DoughnutController extends DatasetController {
    static id = "doughnut";
    static defaults = {
        datasetElementType: false,
        dataElementType: "arc",
        animation: {
            animateRotate: true,
            animateScale: false
        },
        animations: {
            numbers: {
                type: "number",
                properties: [
                    "circumference",
                    "endAngle",
                    "innerRadius",
                    "outerRadius",
                    "startAngle",
                    "x",
                    "y",
                    "offset",
                    "borderWidth",
                    "spacing"
                ]
            }
        },
        cutout: "50%",
        rotation: 0,
        circumference: 360,
        radius: "100%",
        spacing: 0,
        indexAxis: "r"
    };
    static descriptors = {
        _scriptable: (name1)=>name1 !== "spacing",
        _indexable: (name1)=>name1 !== "spacing"
    };
    static overrides = {
        aspectRatio: 1,
        plugins: {
            legend: {
                labels: {
                    generateLabels (chart) {
                        const data = chart.data;
                        if (data.labels.length && data.datasets.length) {
                            const { labels: { pointStyle , color  }  } = chart.legend.options;
                            return data.labels.map((label, i)=>{
                                const meta = chart.getDatasetMeta(0);
                                const style = meta.controller.getStyle(i);
                                return {
                                    text: label,
                                    fillStyle: style.backgroundColor,
                                    strokeStyle: style.borderColor,
                                    fontColor: color,
                                    lineWidth: style.borderWidth,
                                    pointStyle: pointStyle,
                                    hidden: !chart.getDataVisibility(i),
                                    index: i
                                };
                            });
                        }
                        return [];
                    }
                },
                onClick (e, legendItem, legend) {
                    legend.chart.toggleDataVisibility(legendItem.index);
                    legend.chart.update();
                }
            }
        }
    };
    constructor(chart, datasetIndex){
        super(chart, datasetIndex);
        this.enableOptionSharing = true;
        this.innerRadius = undefined;
        this.outerRadius = undefined;
        this.offsetX = undefined;
        this.offsetY = undefined;
    }
    linkScales() {}
    parse(start, count) {
        const data = this.getDataset().data;
        const meta = this._cachedMeta;
        if (this._parsing === false) meta._parsed = data;
        else {
            let getter = (i)=>+data[i];
            if ((0, _helpersSegmentJs.i)(data[start])) {
                const { key ="value"  } = this._parsing;
                getter = (i)=>+(0, _helpersSegmentJs.f)(data[i], key);
            }
            let i, ilen;
            for(i = start, ilen = start + count; i < ilen; ++i)meta._parsed[i] = getter(i);
        }
    }
    _getRotation() {
        return (0, _helpersSegmentJs.t)(this.options.rotation - 90);
    }
    _getCircumference() {
        return (0, _helpersSegmentJs.t)(this.options.circumference);
    }
    _getRotationExtents() {
        let min = (0, _helpersSegmentJs.T);
        let max = -(0, _helpersSegmentJs.T);
        for(let i = 0; i < this.chart.data.datasets.length; ++i)if (this.chart.isDatasetVisible(i) && this.chart.getDatasetMeta(i).type === this._type) {
            const controller = this.chart.getDatasetMeta(i).controller;
            const rotation = controller._getRotation();
            const circumference = controller._getCircumference();
            min = Math.min(min, rotation);
            max = Math.max(max, rotation + circumference);
        }
        return {
            rotation: min,
            circumference: max - min
        };
    }
    update(mode) {
        const chart = this.chart;
        const { chartArea  } = chart;
        const meta = this._cachedMeta;
        const arcs = meta.data;
        const spacing = this.getMaxBorderWidth() + this.getMaxOffset(arcs) + this.options.spacing;
        const maxSize = Math.max((Math.min(chartArea.width, chartArea.height) - spacing) / 2, 0);
        const cutout = Math.min((0, _helpersSegmentJs.m)(this.options.cutout, maxSize), 1);
        const chartWeight = this._getRingWeight(this.index);
        const { circumference , rotation  } = this._getRotationExtents();
        const { ratioX , ratioY , offsetX , offsetY  } = getRatioAndOffset(rotation, circumference, cutout);
        const maxWidth = (chartArea.width - spacing) / ratioX;
        const maxHeight = (chartArea.height - spacing) / ratioY;
        const maxRadius = Math.max(Math.min(maxWidth, maxHeight) / 2, 0);
        const outerRadius = (0, _helpersSegmentJs.n)(this.options.radius, maxRadius);
        const innerRadius = Math.max(outerRadius * cutout, 0);
        const radiusLength = (outerRadius - innerRadius) / this._getVisibleDatasetWeightTotal();
        this.offsetX = offsetX * outerRadius;
        this.offsetY = offsetY * outerRadius;
        meta.total = this.calculateTotal();
        this.outerRadius = outerRadius - radiusLength * this._getRingWeightOffset(this.index);
        this.innerRadius = Math.max(this.outerRadius - radiusLength * chartWeight, 0);
        this.updateElements(arcs, 0, arcs.length, mode);
    }
    _circumference(i, reset) {
        const opts = this.options;
        const meta = this._cachedMeta;
        const circumference = this._getCircumference();
        if (reset && opts.animation.animateRotate || !this.chart.getDataVisibility(i) || meta._parsed[i] === null || meta.data[i].hidden) return 0;
        return this.calculateCircumference(meta._parsed[i] * circumference / (0, _helpersSegmentJs.T));
    }
    updateElements(arcs, start, count, mode) {
        const reset = mode === "reset";
        const chart = this.chart;
        const chartArea = chart.chartArea;
        const opts = chart.options;
        const animationOpts = opts.animation;
        const centerX = (chartArea.left + chartArea.right) / 2;
        const centerY = (chartArea.top + chartArea.bottom) / 2;
        const animateScale = reset && animationOpts.animateScale;
        const innerRadius = animateScale ? 0 : this.innerRadius;
        const outerRadius = animateScale ? 0 : this.outerRadius;
        const { sharedOptions , includeOptions  } = this._getSharedOptions(start, mode);
        let startAngle = this._getRotation();
        let i;
        for(i = 0; i < start; ++i)startAngle += this._circumference(i, reset);
        for(i = start; i < start + count; ++i){
            const circumference = this._circumference(i, reset);
            const arc = arcs[i];
            const properties = {
                x: centerX + this.offsetX,
                y: centerY + this.offsetY,
                startAngle,
                endAngle: startAngle + circumference,
                circumference,
                outerRadius,
                innerRadius
            };
            if (includeOptions) properties.options = sharedOptions || this.resolveDataElementOptions(i, arc.active ? "active" : mode);
            startAngle += circumference;
            this.updateElement(arc, i, properties, mode);
        }
    }
    calculateTotal() {
        const meta = this._cachedMeta;
        const metaData = meta.data;
        let total = 0;
        let i;
        for(i = 0; i < metaData.length; i++){
            const value = meta._parsed[i];
            if (value !== null && !isNaN(value) && this.chart.getDataVisibility(i) && !metaData[i].hidden) total += Math.abs(value);
        }
        return total;
    }
    calculateCircumference(value) {
        const total = this._cachedMeta.total;
        if (total > 0 && !isNaN(value)) return (0, _helpersSegmentJs.T) * (Math.abs(value) / total);
        return 0;
    }
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const chart = this.chart;
        const labels = chart.data.labels || [];
        const value = (0, _helpersSegmentJs.o)(meta._parsed[index], chart.options.locale);
        return {
            label: labels[index] || "",
            value
        };
    }
    getMaxBorderWidth(arcs) {
        let max = 0;
        const chart = this.chart;
        let i, ilen, meta, controller, options;
        if (!arcs) {
            for(i = 0, ilen = chart.data.datasets.length; i < ilen; ++i)if (chart.isDatasetVisible(i)) {
                meta = chart.getDatasetMeta(i);
                arcs = meta.data;
                controller = meta.controller;
                break;
            }
        }
        if (!arcs) return 0;
        for(i = 0, ilen = arcs.length; i < ilen; ++i){
            options = controller.resolveDataElementOptions(i);
            if (options.borderAlign !== "inner") max = Math.max(max, options.borderWidth || 0, options.hoverBorderWidth || 0);
        }
        return max;
    }
    getMaxOffset(arcs) {
        let max = 0;
        for(let i = 0, ilen = arcs.length; i < ilen; ++i){
            const options = this.resolveDataElementOptions(i);
            max = Math.max(max, options.offset || 0, options.hoverOffset || 0);
        }
        return max;
    }
    _getRingWeightOffset(datasetIndex) {
        let ringWeightOffset = 0;
        for(let i = 0; i < datasetIndex; ++i)if (this.chart.isDatasetVisible(i)) ringWeightOffset += this._getRingWeight(i);
        return ringWeightOffset;
    }
    _getRingWeight(datasetIndex) {
        return Math.max((0, _helpersSegmentJs.v)(this.chart.data.datasets[datasetIndex].weight, 1), 0);
    }
    _getVisibleDatasetWeightTotal() {
        return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
    }
}
class LineController extends DatasetController {
    static id = "line";
    static defaults = {
        datasetElementType: "line",
        dataElementType: "point",
        showLine: true,
        spanGaps: false
    };
    static overrides = {
        scales: {
            _index_: {
                type: "category"
            },
            _value_: {
                type: "linear"
            }
        }
    };
    initialize() {
        this.enableOptionSharing = true;
        this.supportsDecimation = true;
        super.initialize();
    }
    update(mode) {
        const meta = this._cachedMeta;
        const { dataset: line , data: points = [] , _dataset  } = meta;
        const animationsDisabled = this.chart._animationsDisabled;
        let { start , count  } = (0, _helpersSegmentJs.q)(meta, points, animationsDisabled);
        this._drawStart = start;
        this._drawCount = count;
        if ((0, _helpersSegmentJs.w)(meta)) {
            start = 0;
            count = points.length;
        }
        line._chart = this.chart;
        line._datasetIndex = this.index;
        line._decimated = !!_dataset._decimated;
        line.points = points;
        const options = this.resolveDatasetElementOptions(mode);
        if (!this.options.showLine) options.borderWidth = 0;
        options.segment = this.options.segment;
        this.updateElement(line, undefined, {
            animated: !animationsDisabled,
            options
        }, mode);
        this.updateElements(points, start, count, mode);
    }
    updateElements(points, start, count, mode) {
        const reset = mode === "reset";
        const { iScale , vScale , _stacked , _dataset  } = this._cachedMeta;
        const { sharedOptions , includeOptions  } = this._getSharedOptions(start, mode);
        const iAxis = iScale.axis;
        const vAxis = vScale.axis;
        const { spanGaps , segment  } = this.options;
        const maxGapLength = (0, _helpersSegmentJs.x)(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
        const directUpdate = this.chart._animationsDisabled || reset || mode === "none";
        const end = start + count;
        const pointsCount = points.length;
        let prevParsed = start > 0 && this.getParsed(start - 1);
        for(let i = 0; i < pointsCount; ++i){
            const point = points[i];
            const properties = directUpdate ? point : {};
            if (i < start || i >= end) {
                properties.skip = true;
                continue;
            }
            const parsed = this.getParsed(i);
            const nullData = (0, _helpersSegmentJs.k)(parsed[vAxis]);
            const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i);
            const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i);
            properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
            properties.stop = i > 0 && Math.abs(parsed[iAxis] - prevParsed[iAxis]) > maxGapLength;
            if (segment) {
                properties.parsed = parsed;
                properties.raw = _dataset.data[i];
            }
            if (includeOptions) properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? "active" : mode);
            if (!directUpdate) this.updateElement(point, i, properties, mode);
            prevParsed = parsed;
        }
    }
    getMaxOverflow() {
        const meta = this._cachedMeta;
        const dataset = meta.dataset;
        const border = dataset.options && dataset.options.borderWidth || 0;
        const data = meta.data || [];
        if (!data.length) return border;
        const firstPoint = data[0].size(this.resolveDataElementOptions(0));
        const lastPoint = data[data.length - 1].size(this.resolveDataElementOptions(data.length - 1));
        return Math.max(border, firstPoint, lastPoint) / 2;
    }
    draw() {
        const meta = this._cachedMeta;
        meta.dataset.updateControlPoints(this.chart.chartArea, meta.iScale.axis);
        super.draw();
    }
}
class PolarAreaController extends DatasetController {
    static id = "polarArea";
    static defaults = {
        dataElementType: "arc",
        animation: {
            animateRotate: true,
            animateScale: true
        },
        animations: {
            numbers: {
                type: "number",
                properties: [
                    "x",
                    "y",
                    "startAngle",
                    "endAngle",
                    "innerRadius",
                    "outerRadius"
                ]
            }
        },
        indexAxis: "r",
        startAngle: 0
    };
    static overrides = {
        aspectRatio: 1,
        plugins: {
            legend: {
                labels: {
                    generateLabels (chart) {
                        const data = chart.data;
                        if (data.labels.length && data.datasets.length) {
                            const { labels: { pointStyle , color  }  } = chart.legend.options;
                            return data.labels.map((label, i)=>{
                                const meta = chart.getDatasetMeta(0);
                                const style = meta.controller.getStyle(i);
                                return {
                                    text: label,
                                    fillStyle: style.backgroundColor,
                                    strokeStyle: style.borderColor,
                                    fontColor: color,
                                    lineWidth: style.borderWidth,
                                    pointStyle: pointStyle,
                                    hidden: !chart.getDataVisibility(i),
                                    index: i
                                };
                            });
                        }
                        return [];
                    }
                },
                onClick (e, legendItem, legend) {
                    legend.chart.toggleDataVisibility(legendItem.index);
                    legend.chart.update();
                }
            }
        },
        scales: {
            r: {
                type: "radialLinear",
                angleLines: {
                    display: false
                },
                beginAtZero: true,
                grid: {
                    circular: true
                },
                pointLabels: {
                    display: false
                },
                startAngle: 0
            }
        }
    };
    constructor(chart, datasetIndex){
        super(chart, datasetIndex);
        this.innerRadius = undefined;
        this.outerRadius = undefined;
    }
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const chart = this.chart;
        const labels = chart.data.labels || [];
        const value = (0, _helpersSegmentJs.o)(meta._parsed[index].r, chart.options.locale);
        return {
            label: labels[index] || "",
            value
        };
    }
    parseObjectData(meta, data, start, count) {
        return (0, _helpersSegmentJs.y).bind(this)(meta, data, start, count);
    }
    update(mode) {
        const arcs = this._cachedMeta.data;
        this._updateRadius();
        this.updateElements(arcs, 0, arcs.length, mode);
    }
    getMinMax() {
        const meta = this._cachedMeta;
        const range = {
            min: Number.POSITIVE_INFINITY,
            max: Number.NEGATIVE_INFINITY
        };
        meta.data.forEach((element, index)=>{
            const parsed = this.getParsed(index).r;
            if (!isNaN(parsed) && this.chart.getDataVisibility(index)) {
                if (parsed < range.min) range.min = parsed;
                if (parsed > range.max) range.max = parsed;
            }
        });
        return range;
    }
    _updateRadius() {
        const chart = this.chart;
        const chartArea = chart.chartArea;
        const opts = chart.options;
        const minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
        const outerRadius = Math.max(minSize / 2, 0);
        const innerRadius = Math.max(opts.cutoutPercentage ? outerRadius / 100 * opts.cutoutPercentage : 1, 0);
        const radiusLength = (outerRadius - innerRadius) / chart.getVisibleDatasetCount();
        this.outerRadius = outerRadius - radiusLength * this.index;
        this.innerRadius = this.outerRadius - radiusLength;
    }
    updateElements(arcs, start, count, mode) {
        const reset = mode === "reset";
        const chart = this.chart;
        const opts = chart.options;
        const animationOpts = opts.animation;
        const scale = this._cachedMeta.rScale;
        const centerX = scale.xCenter;
        const centerY = scale.yCenter;
        const datasetStartAngle = scale.getIndexAngle(0) - 0.5 * (0, _helpersSegmentJs.P);
        let angle = datasetStartAngle;
        let i;
        const defaultAngle = 360 / this.countVisibleElements();
        for(i = 0; i < start; ++i)angle += this._computeAngle(i, mode, defaultAngle);
        for(i = start; i < start + count; i++){
            const arc = arcs[i];
            let startAngle = angle;
            let endAngle = angle + this._computeAngle(i, mode, defaultAngle);
            let outerRadius = chart.getDataVisibility(i) ? scale.getDistanceFromCenterForValue(this.getParsed(i).r) : 0;
            angle = endAngle;
            if (reset) {
                if (animationOpts.animateScale) outerRadius = 0;
                if (animationOpts.animateRotate) startAngle = endAngle = datasetStartAngle;
            }
            const properties = {
                x: centerX,
                y: centerY,
                innerRadius: 0,
                outerRadius,
                startAngle,
                endAngle,
                options: this.resolveDataElementOptions(i, arc.active ? "active" : mode)
            };
            this.updateElement(arc, i, properties, mode);
        }
    }
    countVisibleElements() {
        const meta = this._cachedMeta;
        let count = 0;
        meta.data.forEach((element, index)=>{
            if (!isNaN(this.getParsed(index).r) && this.chart.getDataVisibility(index)) count++;
        });
        return count;
    }
    _computeAngle(index, mode, defaultAngle) {
        return this.chart.getDataVisibility(index) ? (0, _helpersSegmentJs.t)(this.resolveDataElementOptions(index, mode).angle || defaultAngle) : 0;
    }
}
class PieController extends DoughnutController {
    static id = "pie";
    static defaults = {
        cutout: 0,
        rotation: 0,
        circumference: 360,
        radius: "100%"
    };
}
class RadarController extends DatasetController {
    static id = "radar";
    static defaults = {
        datasetElementType: "line",
        dataElementType: "point",
        indexAxis: "r",
        showLine: true,
        elements: {
            line: {
                fill: "start"
            }
        }
    };
    static overrides = {
        aspectRatio: 1,
        scales: {
            r: {
                type: "radialLinear"
            }
        }
    };
    getLabelAndValue(index) {
        const vScale = this._cachedMeta.vScale;
        const parsed = this.getParsed(index);
        return {
            label: vScale.getLabels()[index],
            value: "" + vScale.getLabelForValue(parsed[vScale.axis])
        };
    }
    parseObjectData(meta, data, start, count) {
        return (0, _helpersSegmentJs.y).bind(this)(meta, data, start, count);
    }
    update(mode) {
        const meta = this._cachedMeta;
        const line = meta.dataset;
        const points = meta.data || [];
        const labels = meta.iScale.getLabels();
        line.points = points;
        if (mode !== "resize") {
            const options = this.resolveDatasetElementOptions(mode);
            if (!this.options.showLine) options.borderWidth = 0;
            const properties = {
                _loop: true,
                _fullLoop: labels.length === points.length,
                options
            };
            this.updateElement(line, undefined, properties, mode);
        }
        this.updateElements(points, 0, points.length, mode);
    }
    updateElements(points, start, count, mode) {
        const scale = this._cachedMeta.rScale;
        const reset = mode === "reset";
        for(let i = start; i < start + count; i++){
            const point = points[i];
            const options = this.resolveDataElementOptions(i, point.active ? "active" : mode);
            const pointPosition = scale.getPointPositionForValue(i, this.getParsed(i).r);
            const x = reset ? scale.xCenter : pointPosition.x;
            const y = reset ? scale.yCenter : pointPosition.y;
            const properties = {
                x,
                y,
                angle: pointPosition.angle,
                skip: isNaN(x) || isNaN(y),
                options
            };
            this.updateElement(point, i, properties, mode);
        }
    }
}
class ScatterController extends DatasetController {
    static id = "scatter";
    static defaults = {
        datasetElementType: false,
        dataElementType: "point",
        showLine: false,
        fill: false
    };
    static overrides = {
        interaction: {
            mode: "point"
        },
        scales: {
            x: {
                type: "linear"
            },
            y: {
                type: "linear"
            }
        }
    };
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const labels = this.chart.data.labels || [];
        const { xScale , yScale  } = meta;
        const parsed = this.getParsed(index);
        const x = xScale.getLabelForValue(parsed.x);
        const y = yScale.getLabelForValue(parsed.y);
        return {
            label: labels[index] || "",
            value: "(" + x + ", " + y + ")"
        };
    }
    update(mode) {
        const meta = this._cachedMeta;
        const { data: points = []  } = meta;
        const animationsDisabled = this.chart._animationsDisabled;
        let { start , count  } = (0, _helpersSegmentJs.q)(meta, points, animationsDisabled);
        this._drawStart = start;
        this._drawCount = count;
        if ((0, _helpersSegmentJs.w)(meta)) {
            start = 0;
            count = points.length;
        }
        if (this.options.showLine) {
            const { dataset: line , _dataset  } = meta;
            line._chart = this.chart;
            line._datasetIndex = this.index;
            line._decimated = !!_dataset._decimated;
            line.points = points;
            const options = this.resolveDatasetElementOptions(mode);
            options.segment = this.options.segment;
            this.updateElement(line, undefined, {
                animated: !animationsDisabled,
                options
            }, mode);
        }
        this.updateElements(points, start, count, mode);
    }
    addElements() {
        const { showLine  } = this.options;
        if (!this.datasetElementType && showLine) this.datasetElementType = this.chart.registry.getElement("line");
        super.addElements();
    }
    updateElements(points, start, count, mode) {
        const reset = mode === "reset";
        const { iScale , vScale , _stacked , _dataset  } = this._cachedMeta;
        const firstOpts = this.resolveDataElementOptions(start, mode);
        const sharedOptions = this.getSharedOptions(firstOpts);
        const includeOptions = this.includeOptions(mode, sharedOptions);
        const iAxis = iScale.axis;
        const vAxis = vScale.axis;
        const { spanGaps , segment  } = this.options;
        const maxGapLength = (0, _helpersSegmentJs.x)(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
        const directUpdate = this.chart._animationsDisabled || reset || mode === "none";
        let prevParsed = start > 0 && this.getParsed(start - 1);
        for(let i = start; i < start + count; ++i){
            const point = points[i];
            const parsed = this.getParsed(i);
            const properties = directUpdate ? point : {};
            const nullData = (0, _helpersSegmentJs.k)(parsed[vAxis]);
            const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i);
            const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i);
            properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
            properties.stop = i > 0 && Math.abs(parsed[iAxis] - prevParsed[iAxis]) > maxGapLength;
            if (segment) {
                properties.parsed = parsed;
                properties.raw = _dataset.data[i];
            }
            if (includeOptions) properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? "active" : mode);
            if (!directUpdate) this.updateElement(point, i, properties, mode);
            prevParsed = parsed;
        }
        this.updateSharedOptions(sharedOptions, mode, firstOpts);
    }
    getMaxOverflow() {
        const meta = this._cachedMeta;
        const data = meta.data || [];
        if (!this.options.showLine) {
            let max = 0;
            for(let i = data.length - 1; i >= 0; --i)max = Math.max(max, data[i].size(this.resolveDataElementOptions(i)) / 2);
            return max > 0 && max;
        }
        const dataset = meta.dataset;
        const border = dataset.options && dataset.options.borderWidth || 0;
        if (!data.length) return border;
        const firstPoint = data[0].size(this.resolveDataElementOptions(0));
        const lastPoint = data[data.length - 1].size(this.resolveDataElementOptions(data.length - 1));
        return Math.max(border, firstPoint, lastPoint) / 2;
    }
}
var controllers = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    BarController: BarController,
    BubbleController: BubbleController,
    DoughnutController: DoughnutController,
    LineController: LineController,
    PolarAreaController: PolarAreaController,
    PieController: PieController,
    RadarController: RadarController,
    ScatterController: ScatterController
});
/**
 * @namespace Chart._adapters
 * @since 2.8.0
 * @private
 */ function abstract() {
    throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
/**
 * Date adapter (current used by the time scale)
 * @namespace Chart._adapters._date
 * @memberof Chart._adapters
 * @private
 */ class DateAdapterBase {
    /**
   * Override default date adapter methods.
   * Accepts type parameter to define options type.
   * @example
   * Chart._adapters._date.override<{myAdapterOption: string}>({
   *   init() {
   *     console.log(this.options.myAdapterOption);
   *   }
   * })
   */ static override(members) {
        Object.assign(DateAdapterBase.prototype, members);
    }
    constructor(options){
        this.options = options || {};
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    init() {}
    formats() {
        return abstract();
    }
    parse() {
        return abstract();
    }
    format() {
        return abstract();
    }
    add() {
        return abstract();
    }
    diff() {
        return abstract();
    }
    startOf() {
        return abstract();
    }
    endOf() {
        return abstract();
    }
}
var adapters = {
    _date: DateAdapterBase
};
function binarySearch(metaset, axis, value, intersect) {
    const { controller , data , _sorted  } = metaset;
    const iScale = controller._cachedMeta.iScale;
    if (iScale && axis === iScale.axis && axis !== "r" && _sorted && data.length) {
        const lookupMethod = iScale._reversePixels ? (0, _helpersSegmentJs.A) : (0, _helpersSegmentJs.B);
        if (!intersect) return lookupMethod(data, axis, value);
        else if (controller._sharedOptions) {
            const el = data[0];
            const range = typeof el.getRange === "function" && el.getRange(axis);
            if (range) {
                const start = lookupMethod(data, axis, value - range);
                const end = lookupMethod(data, axis, value + range);
                return {
                    lo: start.lo,
                    hi: end.hi
                };
            }
        }
    }
    return {
        lo: 0,
        hi: data.length - 1
    };
}
function evaluateInteractionItems(chart, axis, position, handler, intersect) {
    const metasets = chart.getSortedVisibleDatasetMetas();
    const value = position[axis];
    for(let i = 0, ilen = metasets.length; i < ilen; ++i){
        const { index , data  } = metasets[i];
        const { lo , hi  } = binarySearch(metasets[i], axis, value, intersect);
        for(let j = lo; j <= hi; ++j){
            const element = data[j];
            if (!element.skip) handler(element, index, j);
        }
    }
}
function getDistanceMetricForAxis(axis) {
    const useX = axis.indexOf("x") !== -1;
    const useY = axis.indexOf("y") !== -1;
    return function(pt1, pt2) {
        const deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
        const deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
        return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    };
}
function getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) {
    const items = [];
    if (!includeInvisible && !chart.isPointInArea(position)) return items;
    const evaluationFunc = function(element, datasetIndex, index) {
        if (!includeInvisible && !(0, _helpersSegmentJs.C)(element, chart.chartArea, 0)) return;
        if (element.inRange(position.x, position.y, useFinalPosition)) items.push({
            element,
            datasetIndex,
            index
        });
    };
    evaluateInteractionItems(chart, axis, position, evaluationFunc, true);
    return items;
}
function getNearestRadialItems(chart, position, axis, useFinalPosition) {
    let items = [];
    function evaluationFunc(element, datasetIndex, index) {
        const { startAngle , endAngle  } = element.getProps([
            "startAngle",
            "endAngle"
        ], useFinalPosition);
        const { angle  } = (0, _helpersSegmentJs.D)(element, {
            x: position.x,
            y: position.y
        });
        if ((0, _helpersSegmentJs.p)(angle, startAngle, endAngle)) items.push({
            element,
            datasetIndex,
            index
        });
    }
    evaluateInteractionItems(chart, axis, position, evaluationFunc);
    return items;
}
function getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
    let items = [];
    const distanceMetric = getDistanceMetricForAxis(axis);
    let minDistance = Number.POSITIVE_INFINITY;
    function evaluationFunc(element, datasetIndex, index) {
        const inRange = element.inRange(position.x, position.y, useFinalPosition);
        if (intersect && !inRange) return;
        const center = element.getCenterPoint(useFinalPosition);
        const pointInArea = !!includeInvisible || chart.isPointInArea(center);
        if (!pointInArea && !inRange) return;
        const distance = distanceMetric(position, center);
        if (distance < minDistance) {
            items = [
                {
                    element,
                    datasetIndex,
                    index
                }
            ];
            minDistance = distance;
        } else if (distance === minDistance) items.push({
            element,
            datasetIndex,
            index
        });
    }
    evaluateInteractionItems(chart, axis, position, evaluationFunc);
    return items;
}
function getNearestItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
    if (!includeInvisible && !chart.isPointInArea(position)) return [];
    return axis === "r" && !intersect ? getNearestRadialItems(chart, position, axis, useFinalPosition) : getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible);
}
function getAxisItems(chart, position, axis, intersect, useFinalPosition) {
    const items = [];
    const rangeMethod = axis === "x" ? "inXRange" : "inYRange";
    let intersectsItem = false;
    evaluateInteractionItems(chart, axis, position, (element, datasetIndex, index)=>{
        if (element[rangeMethod](position[axis], useFinalPosition)) {
            items.push({
                element,
                datasetIndex,
                index
            });
            intersectsItem = intersectsItem || element.inRange(position.x, position.y, useFinalPosition);
        }
    });
    if (intersect && !intersectsItem) return [];
    return items;
}
var Interaction = {
    evaluateInteractionItems,
    modes: {
        index (chart, e, options, useFinalPosition) {
            const position = (0, _helpersSegmentJs.z)(e, chart);
            const axis = options.axis || "x";
            const includeInvisible = options.includeInvisible || false;
            const items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) : getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
            const elements = [];
            if (!items.length) return [];
            chart.getSortedVisibleDatasetMetas().forEach((meta)=>{
                const index = items[0].index;
                const element = meta.data[index];
                if (element && !element.skip) elements.push({
                    element,
                    datasetIndex: meta.index,
                    index
                });
            });
            return elements;
        },
        dataset (chart, e, options, useFinalPosition) {
            const position = (0, _helpersSegmentJs.z)(e, chart);
            const axis = options.axis || "xy";
            const includeInvisible = options.includeInvisible || false;
            let items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) : getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
            if (items.length > 0) {
                const datasetIndex = items[0].datasetIndex;
                const data = chart.getDatasetMeta(datasetIndex).data;
                items = [];
                for(let i = 0; i < data.length; ++i)items.push({
                    element: data[i],
                    datasetIndex,
                    index: i
                });
            }
            return items;
        },
        point (chart, e, options, useFinalPosition) {
            const position = (0, _helpersSegmentJs.z)(e, chart);
            const axis = options.axis || "xy";
            const includeInvisible = options.includeInvisible || false;
            return getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible);
        },
        nearest (chart, e, options, useFinalPosition) {
            const position = (0, _helpersSegmentJs.z)(e, chart);
            const axis = options.axis || "xy";
            const includeInvisible = options.includeInvisible || false;
            return getNearestItems(chart, position, axis, options.intersect, useFinalPosition, includeInvisible);
        },
        x (chart, e, options, useFinalPosition) {
            const position = (0, _helpersSegmentJs.z)(e, chart);
            return getAxisItems(chart, position, "x", options.intersect, useFinalPosition);
        },
        y (chart, e, options, useFinalPosition) {
            const position = (0, _helpersSegmentJs.z)(e, chart);
            return getAxisItems(chart, position, "y", options.intersect, useFinalPosition);
        }
    }
};
const STATIC_POSITIONS = [
    "left",
    "top",
    "right",
    "bottom"
];
function filterByPosition(array, position) {
    return array.filter((v)=>v.pos === position);
}
function filterDynamicPositionByAxis(array, axis) {
    return array.filter((v)=>STATIC_POSITIONS.indexOf(v.pos) === -1 && v.box.axis === axis);
}
function sortByWeight(array, reverse) {
    return array.sort((a, b)=>{
        const v0 = reverse ? b : a;
        const v1 = reverse ? a : b;
        return v0.weight === v1.weight ? v0.index - v1.index : v0.weight - v1.weight;
    });
}
function wrapBoxes(boxes) {
    const layoutBoxes = [];
    let i, ilen, box, pos, stack, stackWeight;
    for(i = 0, ilen = (boxes || []).length; i < ilen; ++i){
        box = boxes[i];
        ({ position: pos , options: { stack , stackWeight =1  }  } = box);
        layoutBoxes.push({
            index: i,
            box,
            pos,
            horizontal: box.isHorizontal(),
            weight: box.weight,
            stack: stack && pos + stack,
            stackWeight
        });
    }
    return layoutBoxes;
}
function buildStacks(layouts) {
    const stacks = {};
    for (const wrap of layouts){
        const { stack , pos , stackWeight  } = wrap;
        if (!stack || !STATIC_POSITIONS.includes(pos)) continue;
        const _stack = stacks[stack] || (stacks[stack] = {
            count: 0,
            placed: 0,
            weight: 0,
            size: 0
        });
        _stack.count++;
        _stack.weight += stackWeight;
    }
    return stacks;
}
function setLayoutDims(layouts, params) {
    const stacks = buildStacks(layouts);
    const { vBoxMaxWidth , hBoxMaxHeight  } = params;
    let i, ilen, layout;
    for(i = 0, ilen = layouts.length; i < ilen; ++i){
        layout = layouts[i];
        const { fullSize  } = layout.box;
        const stack = stacks[layout.stack];
        const factor = stack && layout.stackWeight / stack.weight;
        if (layout.horizontal) {
            layout.width = factor ? factor * vBoxMaxWidth : fullSize && params.availableWidth;
            layout.height = hBoxMaxHeight;
        } else {
            layout.width = vBoxMaxWidth;
            layout.height = factor ? factor * hBoxMaxHeight : fullSize && params.availableHeight;
        }
    }
    return stacks;
}
function buildLayoutBoxes(boxes) {
    const layoutBoxes = wrapBoxes(boxes);
    const fullSize = sortByWeight(layoutBoxes.filter((wrap)=>wrap.box.fullSize), true);
    const left = sortByWeight(filterByPosition(layoutBoxes, "left"), true);
    const right = sortByWeight(filterByPosition(layoutBoxes, "right"));
    const top = sortByWeight(filterByPosition(layoutBoxes, "top"), true);
    const bottom = sortByWeight(filterByPosition(layoutBoxes, "bottom"));
    const centerHorizontal = filterDynamicPositionByAxis(layoutBoxes, "x");
    const centerVertical = filterDynamicPositionByAxis(layoutBoxes, "y");
    return {
        fullSize,
        leftAndTop: left.concat(top),
        rightAndBottom: right.concat(centerVertical).concat(bottom).concat(centerHorizontal),
        chartArea: filterByPosition(layoutBoxes, "chartArea"),
        vertical: left.concat(right).concat(centerVertical),
        horizontal: top.concat(bottom).concat(centerHorizontal)
    };
}
function getCombinedMax(maxPadding, chartArea, a, b) {
    return Math.max(maxPadding[a], chartArea[a]) + Math.max(maxPadding[b], chartArea[b]);
}
function updateMaxPadding(maxPadding, boxPadding) {
    maxPadding.top = Math.max(maxPadding.top, boxPadding.top);
    maxPadding.left = Math.max(maxPadding.left, boxPadding.left);
    maxPadding.bottom = Math.max(maxPadding.bottom, boxPadding.bottom);
    maxPadding.right = Math.max(maxPadding.right, boxPadding.right);
}
function updateDims(chartArea, params, layout, stacks) {
    const { pos , box  } = layout;
    const maxPadding = chartArea.maxPadding;
    if (!(0, _helpersSegmentJs.i)(pos)) {
        if (layout.size) chartArea[pos] -= layout.size;
        const stack = stacks[layout.stack] || {
            size: 0,
            count: 1
        };
        stack.size = Math.max(stack.size, layout.horizontal ? box.height : box.width);
        layout.size = stack.size / stack.count;
        chartArea[pos] += layout.size;
    }
    if (box.getPadding) updateMaxPadding(maxPadding, box.getPadding());
    const newWidth = Math.max(0, params.outerWidth - getCombinedMax(maxPadding, chartArea, "left", "right"));
    const newHeight = Math.max(0, params.outerHeight - getCombinedMax(maxPadding, chartArea, "top", "bottom"));
    const widthChanged = newWidth !== chartArea.w;
    const heightChanged = newHeight !== chartArea.h;
    chartArea.w = newWidth;
    chartArea.h = newHeight;
    return layout.horizontal ? {
        same: widthChanged,
        other: heightChanged
    } : {
        same: heightChanged,
        other: widthChanged
    };
}
function handleMaxPadding(chartArea) {
    const maxPadding = chartArea.maxPadding;
    function updatePos(pos) {
        const change = Math.max(maxPadding[pos] - chartArea[pos], 0);
        chartArea[pos] += change;
        return change;
    }
    chartArea.y += updatePos("top");
    chartArea.x += updatePos("left");
    updatePos("right");
    updatePos("bottom");
}
function getMargins(horizontal, chartArea) {
    const maxPadding = chartArea.maxPadding;
    function marginForPositions(positions) {
        const margin = {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        };
        positions.forEach((pos)=>{
            margin[pos] = Math.max(chartArea[pos], maxPadding[pos]);
        });
        return margin;
    }
    return horizontal ? marginForPositions([
        "left",
        "right"
    ]) : marginForPositions([
        "top",
        "bottom"
    ]);
}
function fitBoxes(boxes, chartArea, params, stacks) {
    const refitBoxes = [];
    let i, ilen, layout, box, refit, changed;
    for(i = 0, ilen = boxes.length, refit = 0; i < ilen; ++i){
        layout = boxes[i];
        box = layout.box;
        box.update(layout.width || chartArea.w, layout.height || chartArea.h, getMargins(layout.horizontal, chartArea));
        const { same , other  } = updateDims(chartArea, params, layout, stacks);
        refit |= same && refitBoxes.length;
        changed = changed || other;
        if (!box.fullSize) refitBoxes.push(layout);
    }
    return refit && fitBoxes(refitBoxes, chartArea, params, stacks) || changed;
}
function setBoxDims(box, left, top, width, height) {
    box.top = top;
    box.left = left;
    box.right = left + width;
    box.bottom = top + height;
    box.width = width;
    box.height = height;
}
function placeBoxes(boxes, chartArea, params, stacks) {
    const userPadding = params.padding;
    let { x , y  } = chartArea;
    for (const layout of boxes){
        const box = layout.box;
        const stack = stacks[layout.stack] || {
            count: 1,
            placed: 0,
            weight: 1
        };
        const weight = layout.stackWeight / stack.weight || 1;
        if (layout.horizontal) {
            const width = chartArea.w * weight;
            const height = stack.size || box.height;
            if ((0, _helpersSegmentJs.h)(stack.start)) y = stack.start;
            if (box.fullSize) setBoxDims(box, userPadding.left, y, params.outerWidth - userPadding.right - userPadding.left, height);
            else setBoxDims(box, chartArea.left + stack.placed, y, width, height);
            stack.start = y;
            stack.placed += width;
            y = box.bottom;
        } else {
            const height1 = chartArea.h * weight;
            const width1 = stack.size || box.width;
            if ((0, _helpersSegmentJs.h)(stack.start)) x = stack.start;
            if (box.fullSize) setBoxDims(box, x, userPadding.top, width1, params.outerHeight - userPadding.bottom - userPadding.top);
            else setBoxDims(box, x, chartArea.top + stack.placed, width1, height1);
            stack.start = x;
            stack.placed += height1;
            x = box.right;
        }
    }
    chartArea.x = x;
    chartArea.y = y;
}
var layouts = {
    addBox (chart, item) {
        if (!chart.boxes) chart.boxes = [];
        item.fullSize = item.fullSize || false;
        item.position = item.position || "top";
        item.weight = item.weight || 0;
        item._layers = item._layers || function() {
            return [
                {
                    z: 0,
                    draw (chartArea) {
                        item.draw(chartArea);
                    }
                }
            ];
        };
        chart.boxes.push(item);
    },
    removeBox (chart, layoutItem) {
        const index = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;
        if (index !== -1) chart.boxes.splice(index, 1);
    },
    configure (chart, item, options) {
        item.fullSize = options.fullSize;
        item.position = options.position;
        item.weight = options.weight;
    },
    update (chart, width, height, minPadding) {
        if (!chart) return;
        const padding = (0, _helpersSegmentJs.E)(chart.options.layout.padding);
        const availableWidth = Math.max(width - padding.width, 0);
        const availableHeight = Math.max(height - padding.height, 0);
        const boxes = buildLayoutBoxes(chart.boxes);
        const verticalBoxes = boxes.vertical;
        const horizontalBoxes = boxes.horizontal;
        (0, _helpersSegmentJs.F)(chart.boxes, (box)=>{
            if (typeof box.beforeLayout === "function") box.beforeLayout();
        });
        const visibleVerticalBoxCount = verticalBoxes.reduce((total, wrap)=>wrap.box.options && wrap.box.options.display === false ? total : total + 1, 0) || 1;
        const params = Object.freeze({
            outerWidth: width,
            outerHeight: height,
            padding,
            availableWidth,
            availableHeight,
            vBoxMaxWidth: availableWidth / 2 / visibleVerticalBoxCount,
            hBoxMaxHeight: availableHeight / 2
        });
        const maxPadding = Object.assign({}, padding);
        updateMaxPadding(maxPadding, (0, _helpersSegmentJs.E)(minPadding));
        const chartArea = Object.assign({
            maxPadding,
            w: availableWidth,
            h: availableHeight,
            x: padding.left,
            y: padding.top
        }, padding);
        const stacks = setLayoutDims(verticalBoxes.concat(horizontalBoxes), params);
        fitBoxes(boxes.fullSize, chartArea, params, stacks);
        fitBoxes(verticalBoxes, chartArea, params, stacks);
        if (fitBoxes(horizontalBoxes, chartArea, params, stacks)) fitBoxes(verticalBoxes, chartArea, params, stacks);
        handleMaxPadding(chartArea);
        placeBoxes(boxes.leftAndTop, chartArea, params, stacks);
        chartArea.x += chartArea.w;
        chartArea.y += chartArea.h;
        placeBoxes(boxes.rightAndBottom, chartArea, params, stacks);
        chart.chartArea = {
            left: chartArea.left,
            top: chartArea.top,
            right: chartArea.left + chartArea.w,
            bottom: chartArea.top + chartArea.h,
            height: chartArea.h,
            width: chartArea.w
        };
        (0, _helpersSegmentJs.F)(boxes.chartArea, (layout)=>{
            const box = layout.box;
            Object.assign(box, chart.chartArea);
            box.update(chartArea.w, chartArea.h, {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            });
        });
    }
};
class BasePlatform {
    acquireContext(canvas, aspectRatio) {}
    releaseContext(context) {
        return false;
    }
    addEventListener(chart, type, listener) {}
    removeEventListener(chart, type, listener) {}
    getDevicePixelRatio() {
        return 1;
    }
    getMaximumSize(element, width, height, aspectRatio) {
        width = Math.max(0, width || element.width);
        height = height || element.height;
        return {
            width,
            height: Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height)
        };
    }
    isAttached(canvas) {
        return true;
    }
    updateConfig(config) {}
}
class BasicPlatform extends BasePlatform {
    acquireContext(item) {
        return item && item.getContext && item.getContext("2d") || null;
    }
    updateConfig(config) {
        config.options.animation = false;
    }
}
const EXPANDO_KEY = "$chartjs";
const EVENT_TYPES = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout"
};
const isNullOrEmpty = (value)=>value === null || value === "";
function initCanvas(canvas, aspectRatio) {
    const style = canvas.style;
    const renderHeight = canvas.getAttribute("height");
    const renderWidth = canvas.getAttribute("width");
    canvas[EXPANDO_KEY] = {
        initial: {
            height: renderHeight,
            width: renderWidth,
            style: {
                display: style.display,
                height: style.height,
                width: style.width
            }
        }
    };
    style.display = style.display || "block";
    style.boxSizing = style.boxSizing || "border-box";
    if (isNullOrEmpty(renderWidth)) {
        const displayWidth = (0, _helpersSegmentJs.J)(canvas, "width");
        if (displayWidth !== undefined) canvas.width = displayWidth;
    }
    if (isNullOrEmpty(renderHeight)) {
        if (canvas.style.height === "") canvas.height = canvas.width / (aspectRatio || 2);
        else {
            const displayHeight = (0, _helpersSegmentJs.J)(canvas, "height");
            if (displayHeight !== undefined) canvas.height = displayHeight;
        }
    }
    return canvas;
}
const eventListenerOptions = (0, _helpersSegmentJs.K) ? {
    passive: true
} : false;
function addListener(node, type, listener) {
    node.addEventListener(type, listener, eventListenerOptions);
}
function removeListener(chart, type, listener) {
    chart.canvas.removeEventListener(type, listener, eventListenerOptions);
}
function fromNativeEvent(event, chart) {
    const type = EVENT_TYPES[event.type] || event.type;
    const { x , y  } = (0, _helpersSegmentJs.z)(event, chart);
    return {
        type,
        chart,
        native: event,
        x: x !== undefined ? x : null,
        y: y !== undefined ? y : null
    };
}
function nodeListContains(nodeList, canvas) {
    for (const node of nodeList){
        if (node === canvas || node.contains(canvas)) return true;
    }
}
function createAttachObserver(chart, type, listener) {
    const canvas = chart.canvas;
    const observer = new MutationObserver((entries)=>{
        let trigger = false;
        for (const entry of entries){
            trigger = trigger || nodeListContains(entry.addedNodes, canvas);
            trigger = trigger && !nodeListContains(entry.removedNodes, canvas);
        }
        if (trigger) listener();
    });
    observer.observe(document, {
        childList: true,
        subtree: true
    });
    return observer;
}
function createDetachObserver(chart, type, listener) {
    const canvas = chart.canvas;
    const observer = new MutationObserver((entries)=>{
        let trigger = false;
        for (const entry of entries){
            trigger = trigger || nodeListContains(entry.removedNodes, canvas);
            trigger = trigger && !nodeListContains(entry.addedNodes, canvas);
        }
        if (trigger) listener();
    });
    observer.observe(document, {
        childList: true,
        subtree: true
    });
    return observer;
}
const drpListeningCharts = new Map();
let oldDevicePixelRatio = 0;
function onWindowResize() {
    const dpr = window.devicePixelRatio;
    if (dpr === oldDevicePixelRatio) return;
    oldDevicePixelRatio = dpr;
    drpListeningCharts.forEach((resize, chart)=>{
        if (chart.currentDevicePixelRatio !== dpr) resize();
    });
}
function listenDevicePixelRatioChanges(chart, resize) {
    if (!drpListeningCharts.size) window.addEventListener("resize", onWindowResize);
    drpListeningCharts.set(chart, resize);
}
function unlistenDevicePixelRatioChanges(chart) {
    drpListeningCharts.delete(chart);
    if (!drpListeningCharts.size) window.removeEventListener("resize", onWindowResize);
}
function createResizeObserver(chart, type, listener) {
    const canvas = chart.canvas;
    const container = canvas && (0, _helpersSegmentJs.I)(canvas);
    if (!container) return;
    const resize = (0, _helpersSegmentJs.L)((width, height)=>{
        const w = container.clientWidth;
        listener(width, height);
        if (w < container.clientWidth) listener();
    }, window);
    const observer = new ResizeObserver((entries)=>{
        const entry = entries[0];
        const width = entry.contentRect.width;
        const height = entry.contentRect.height;
        if (width === 0 && height === 0) return;
        resize(width, height);
    });
    observer.observe(container);
    listenDevicePixelRatioChanges(chart, resize);
    return observer;
}
function releaseObserver(chart, type, observer) {
    if (observer) observer.disconnect();
    if (type === "resize") unlistenDevicePixelRatioChanges(chart);
}
function createProxyAndListen(chart, type, listener) {
    const canvas = chart.canvas;
    const proxy = (0, _helpersSegmentJs.L)((event)=>{
        if (chart.ctx !== null) listener(fromNativeEvent(event, chart));
    }, chart);
    addListener(canvas, type, proxy);
    return proxy;
}
class DomPlatform extends BasePlatform {
    acquireContext(canvas, aspectRatio) {
        const context = canvas && canvas.getContext && canvas.getContext("2d");
        if (context && context.canvas === canvas) {
            initCanvas(canvas, aspectRatio);
            return context;
        }
        return null;
    }
    releaseContext(context) {
        const canvas = context.canvas;
        if (!canvas[EXPANDO_KEY]) return false;
        const initial = canvas[EXPANDO_KEY].initial;
        [
            "height",
            "width"
        ].forEach((prop)=>{
            const value = initial[prop];
            if ((0, _helpersSegmentJs.k)(value)) canvas.removeAttribute(prop);
            else canvas.setAttribute(prop, value);
        });
        const style = initial.style || {};
        Object.keys(style).forEach((key)=>{
            canvas.style[key] = style[key];
        });
        canvas.width = canvas.width;
        delete canvas[EXPANDO_KEY];
        return true;
    }
    addEventListener(chart, type, listener) {
        this.removeEventListener(chart, type);
        const proxies = chart.$proxies || (chart.$proxies = {});
        const handlers = {
            attach: createAttachObserver,
            detach: createDetachObserver,
            resize: createResizeObserver
        };
        const handler = handlers[type] || createProxyAndListen;
        proxies[type] = handler(chart, type, listener);
    }
    removeEventListener(chart, type) {
        const proxies = chart.$proxies || (chart.$proxies = {});
        const proxy = proxies[type];
        if (!proxy) return;
        const handlers = {
            attach: releaseObserver,
            detach: releaseObserver,
            resize: releaseObserver
        };
        const handler = handlers[type] || removeListener;
        handler(chart, type, proxy);
        proxies[type] = undefined;
    }
    getDevicePixelRatio() {
        return window.devicePixelRatio;
    }
    getMaximumSize(canvas, width, height, aspectRatio) {
        return (0, _helpersSegmentJs.G)(canvas, width, height, aspectRatio);
    }
    isAttached(canvas) {
        const container = (0, _helpersSegmentJs.I)(canvas);
        return !!(container && container.isConnected);
    }
}
function _detectPlatform(canvas) {
    if (!(0, _helpersSegmentJs.M)() || typeof OffscreenCanvas !== "undefined" && canvas instanceof OffscreenCanvas) return BasicPlatform;
    return DomPlatform;
}
class Element {
    static defaults = {};
    static defaultRoutes = undefined;
    active = false;
    tooltipPosition(useFinalPosition) {
        const { x , y  } = this.getProps([
            "x",
            "y"
        ], useFinalPosition);
        return {
            x,
            y
        };
    }
    hasValue() {
        return (0, _helpersSegmentJs.x)(this.x) && (0, _helpersSegmentJs.x)(this.y);
    }
    getProps(props, final) {
        const anims = this.$animations;
        if (!final || !anims) // let's not create an object, if not needed
        return this;
        const ret = {};
        props.forEach((prop)=>{
            ret[prop] = anims[prop] && anims[prop].active() ? anims[prop]._to : this[prop];
        });
        return ret;
    }
}
function autoSkip(scale, ticks) {
    const tickOpts = scale.options.ticks;
    const determinedMaxTicks = determineMaxTicks(scale);
    const ticksLimit = Math.min(tickOpts.maxTicksLimit || determinedMaxTicks, determinedMaxTicks);
    const majorIndices = tickOpts.major.enabled ? getMajorIndices(ticks) : [];
    const numMajorIndices = majorIndices.length;
    const first = majorIndices[0];
    const last = majorIndices[numMajorIndices - 1];
    const newTicks = [];
    if (numMajorIndices > ticksLimit) {
        skipMajors(ticks, newTicks, majorIndices, numMajorIndices / ticksLimit);
        return newTicks;
    }
    const spacing = calculateSpacing(majorIndices, ticks, ticksLimit);
    if (numMajorIndices > 0) {
        let i, ilen;
        const avgMajorSpacing = numMajorIndices > 1 ? Math.round((last - first) / (numMajorIndices - 1)) : null;
        skip(ticks, newTicks, spacing, (0, _helpersSegmentJs.k)(avgMajorSpacing) ? 0 : first - avgMajorSpacing, first);
        for(i = 0, ilen = numMajorIndices - 1; i < ilen; i++)skip(ticks, newTicks, spacing, majorIndices[i], majorIndices[i + 1]);
        skip(ticks, newTicks, spacing, last, (0, _helpersSegmentJs.k)(avgMajorSpacing) ? ticks.length : last + avgMajorSpacing);
        return newTicks;
    }
    skip(ticks, newTicks, spacing);
    return newTicks;
}
function determineMaxTicks(scale) {
    const offset = scale.options.offset;
    const tickLength = scale._tickSize();
    const maxScale = scale._length / tickLength + (offset ? 0 : 1);
    const maxChart = scale._maxLength / tickLength;
    return Math.floor(Math.min(maxScale, maxChart));
}
function calculateSpacing(majorIndices, ticks, ticksLimit) {
    const evenMajorSpacing = getEvenSpacing(majorIndices);
    const spacing = ticks.length / ticksLimit;
    if (!evenMajorSpacing) return Math.max(spacing, 1);
    const factors = (0, _helpersSegmentJs.N)(evenMajorSpacing);
    for(let i = 0, ilen = factors.length - 1; i < ilen; i++){
        const factor = factors[i];
        if (factor > spacing) return factor;
    }
    return Math.max(spacing, 1);
}
function getMajorIndices(ticks) {
    const result = [];
    let i, ilen;
    for(i = 0, ilen = ticks.length; i < ilen; i++)if (ticks[i].major) result.push(i);
    return result;
}
function skipMajors(ticks, newTicks, majorIndices, spacing) {
    let count = 0;
    let next = majorIndices[0];
    let i;
    spacing = Math.ceil(spacing);
    for(i = 0; i < ticks.length; i++)if (i === next) {
        newTicks.push(ticks[i]);
        count++;
        next = majorIndices[count * spacing];
    }
}
function skip(ticks, newTicks, spacing, majorStart, majorEnd) {
    const start = (0, _helpersSegmentJs.v)(majorStart, 0);
    const end = Math.min((0, _helpersSegmentJs.v)(majorEnd, ticks.length), ticks.length);
    let count = 0;
    let length, i, next;
    spacing = Math.ceil(spacing);
    if (majorEnd) {
        length = majorEnd - majorStart;
        spacing = length / Math.floor(length / spacing);
    }
    next = start;
    while(next < 0){
        count++;
        next = Math.round(start + count * spacing);
    }
    for(i = Math.max(start, 0); i < end; i++)if (i === next) {
        newTicks.push(ticks[i]);
        count++;
        next = Math.round(start + count * spacing);
    }
}
function getEvenSpacing(arr) {
    const len = arr.length;
    let i, diff;
    if (len < 2) return false;
    for(diff = arr[0], i = 1; i < len; ++i){
        if (arr[i] - arr[i - 1] !== diff) return false;
    }
    return diff;
}
const reverseAlign = (align)=>align === "left" ? "right" : align === "right" ? "left" : align;
const offsetFromEdge = (scale, edge, offset)=>edge === "top" || edge === "left" ? scale[edge] + offset : scale[edge] - offset;
function sample(arr, numItems) {
    const result = [];
    const increment = arr.length / numItems;
    const len = arr.length;
    let i = 0;
    for(; i < len; i += increment)result.push(arr[Math.floor(i)]);
    return result;
}
function getPixelForGridLine(scale, index, offsetGridLines) {
    const length = scale.ticks.length;
    const validIndex = Math.min(index, length - 1);
    const start = scale._startPixel;
    const end = scale._endPixel;
    const epsilon = 1e-6;
    let lineValue = scale.getPixelForTick(validIndex);
    let offset;
    if (offsetGridLines) {
        if (length === 1) offset = Math.max(lineValue - start, end - lineValue);
        else if (index === 0) offset = (scale.getPixelForTick(1) - lineValue) / 2;
        else offset = (lineValue - scale.getPixelForTick(validIndex - 1)) / 2;
        lineValue += validIndex < index ? offset : -offset;
        if (lineValue < start - epsilon || lineValue > end + epsilon) return;
    }
    return lineValue;
}
function garbageCollect(caches, length) {
    (0, _helpersSegmentJs.F)(caches, (cache)=>{
        const gc = cache.gc;
        const gcLen = gc.length / 2;
        let i;
        if (gcLen > length) {
            for(i = 0; i < gcLen; ++i)delete cache.data[gc[i]];
            gc.splice(0, gcLen);
        }
    });
}
function getTickMarkLength(options) {
    return options.drawTicks ? options.tickLength : 0;
}
function getTitleHeight(options, fallback) {
    if (!options.display) return 0;
    const font = (0, _helpersSegmentJs.a0)(options.font, fallback);
    const padding = (0, _helpersSegmentJs.E)(options.padding);
    const lines = (0, _helpersSegmentJs.b)(options.text) ? options.text.length : 1;
    return lines * font.lineHeight + padding.height;
}
function createScaleContext(parent, scale) {
    return (0, _helpersSegmentJs.j)(parent, {
        scale,
        type: "scale"
    });
}
function createTickContext(parent, index, tick) {
    return (0, _helpersSegmentJs.j)(parent, {
        tick,
        index,
        type: "tick"
    });
}
function titleAlign(align, position, reverse) {
    let ret = (0, _helpersSegmentJs.a1)(align);
    if (reverse && position !== "right" || !reverse && position === "right") ret = reverseAlign(ret);
    return ret;
}
function titleArgs(scale, offset, position, align) {
    const { top , left , bottom , right , chart  } = scale;
    const { chartArea , scales  } = chart;
    let rotation = 0;
    let maxWidth, titleX, titleY;
    const height = bottom - top;
    const width = right - left;
    if (scale.isHorizontal()) {
        titleX = (0, _helpersSegmentJs.a2)(align, left, right);
        if ((0, _helpersSegmentJs.i)(position)) {
            const positionAxisID = Object.keys(position)[0];
            const value = position[positionAxisID];
            titleY = scales[positionAxisID].getPixelForValue(value) + height - offset;
        } else if (position === "center") titleY = (chartArea.bottom + chartArea.top) / 2 + height - offset;
        else titleY = offsetFromEdge(scale, position, offset);
        maxWidth = right - left;
    } else {
        if ((0, _helpersSegmentJs.i)(position)) {
            const positionAxisID1 = Object.keys(position)[0];
            const value1 = position[positionAxisID1];
            titleX = scales[positionAxisID1].getPixelForValue(value1) - width + offset;
        } else if (position === "center") titleX = (chartArea.left + chartArea.right) / 2 - width + offset;
        else titleX = offsetFromEdge(scale, position, offset);
        titleY = (0, _helpersSegmentJs.a2)(align, bottom, top);
        rotation = position === "left" ? -(0, _helpersSegmentJs.H) : (0, _helpersSegmentJs.H);
    }
    return {
        titleX,
        titleY,
        maxWidth,
        rotation
    };
}
class Scale extends Element {
    constructor(cfg){
        super();
        this.id = cfg.id;
        this.type = cfg.type;
        this.options = undefined;
        this.ctx = cfg.ctx;
        this.chart = cfg.chart;
        this.top = undefined;
        this.bottom = undefined;
        this.left = undefined;
        this.right = undefined;
        this.width = undefined;
        this.height = undefined;
        this._margins = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        };
        this.maxWidth = undefined;
        this.maxHeight = undefined;
        this.paddingTop = undefined;
        this.paddingBottom = undefined;
        this.paddingLeft = undefined;
        this.paddingRight = undefined;
        this.axis = undefined;
        this.labelRotation = undefined;
        this.min = undefined;
        this.max = undefined;
        this._range = undefined;
        this.ticks = [];
        this._gridLineItems = null;
        this._labelItems = null;
        this._labelSizes = null;
        this._length = 0;
        this._maxLength = 0;
        this._longestTextCache = {};
        this._startPixel = undefined;
        this._endPixel = undefined;
        this._reversePixels = false;
        this._userMax = undefined;
        this._userMin = undefined;
        this._suggestedMax = undefined;
        this._suggestedMin = undefined;
        this._ticksLength = 0;
        this._borderValue = 0;
        this._cache = {};
        this._dataLimitsCached = false;
        this.$context = undefined;
    }
    init(options) {
        this.options = options.setContext(this.getContext());
        this.axis = options.axis;
        this._userMin = this.parse(options.min);
        this._userMax = this.parse(options.max);
        this._suggestedMin = this.parse(options.suggestedMin);
        this._suggestedMax = this.parse(options.suggestedMax);
    }
    parse(raw, index) {
        return raw;
    }
    getUserBounds() {
        let { _userMin , _userMax , _suggestedMin , _suggestedMax  } = this;
        _userMin = (0, _helpersSegmentJs.O)(_userMin, Number.POSITIVE_INFINITY);
        _userMax = (0, _helpersSegmentJs.O)(_userMax, Number.NEGATIVE_INFINITY);
        _suggestedMin = (0, _helpersSegmentJs.O)(_suggestedMin, Number.POSITIVE_INFINITY);
        _suggestedMax = (0, _helpersSegmentJs.O)(_suggestedMax, Number.NEGATIVE_INFINITY);
        return {
            min: (0, _helpersSegmentJs.O)(_userMin, _suggestedMin),
            max: (0, _helpersSegmentJs.O)(_userMax, _suggestedMax),
            minDefined: (0, _helpersSegmentJs.g)(_userMin),
            maxDefined: (0, _helpersSegmentJs.g)(_userMax)
        };
    }
    getMinMax(canStack) {
        let { min , max , minDefined , maxDefined  } = this.getUserBounds();
        let range;
        if (minDefined && maxDefined) return {
            min,
            max
        };
        const metas = this.getMatchingVisibleMetas();
        for(let i = 0, ilen = metas.length; i < ilen; ++i){
            range = metas[i].controller.getMinMax(this, canStack);
            if (!minDefined) min = Math.min(min, range.min);
            if (!maxDefined) max = Math.max(max, range.max);
        }
        min = maxDefined && min > max ? max : min;
        max = minDefined && min > max ? min : max;
        return {
            min: (0, _helpersSegmentJs.O)(min, (0, _helpersSegmentJs.O)(max, min)),
            max: (0, _helpersSegmentJs.O)(max, (0, _helpersSegmentJs.O)(min, max))
        };
    }
    getPadding() {
        return {
            left: this.paddingLeft || 0,
            top: this.paddingTop || 0,
            right: this.paddingRight || 0,
            bottom: this.paddingBottom || 0
        };
    }
    getTicks() {
        return this.ticks;
    }
    getLabels() {
        const data = this.chart.data;
        return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels || [];
    }
    beforeLayout() {
        this._cache = {};
        this._dataLimitsCached = false;
    }
    beforeUpdate() {
        (0, _helpersSegmentJs.Q)(this.options.beforeUpdate, [
            this
        ]);
    }
    update(maxWidth, maxHeight, margins) {
        const { beginAtZero , grace , ticks: tickOpts  } = this.options;
        const sampleSize = tickOpts.sampleSize;
        this.beforeUpdate();
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
        this._margins = margins = Object.assign({
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }, margins);
        this.ticks = null;
        this._labelSizes = null;
        this._gridLineItems = null;
        this._labelItems = null;
        this.beforeSetDimensions();
        this.setDimensions();
        this.afterSetDimensions();
        this._maxLength = this.isHorizontal() ? this.width + margins.left + margins.right : this.height + margins.top + margins.bottom;
        if (!this._dataLimitsCached) {
            this.beforeDataLimits();
            this.determineDataLimits();
            this.afterDataLimits();
            this._range = (0, _helpersSegmentJs.R)(this, grace, beginAtZero);
            this._dataLimitsCached = true;
        }
        this.beforeBuildTicks();
        this.ticks = this.buildTicks() || [];
        this.afterBuildTicks();
        const samplingEnabled = sampleSize < this.ticks.length;
        this._convertTicksToLabels(samplingEnabled ? sample(this.ticks, sampleSize) : this.ticks);
        this.configure();
        this.beforeCalculateLabelRotation();
        this.calculateLabelRotation();
        this.afterCalculateLabelRotation();
        if (tickOpts.display && (tickOpts.autoSkip || tickOpts.source === "auto")) {
            this.ticks = autoSkip(this, this.ticks);
            this._labelSizes = null;
            this.afterAutoSkip();
        }
        if (samplingEnabled) this._convertTicksToLabels(this.ticks);
        this.beforeFit();
        this.fit();
        this.afterFit();
        this.afterUpdate();
    }
    configure() {
        let reversePixels = this.options.reverse;
        let startPixel, endPixel;
        if (this.isHorizontal()) {
            startPixel = this.left;
            endPixel = this.right;
        } else {
            startPixel = this.top;
            endPixel = this.bottom;
            reversePixels = !reversePixels;
        }
        this._startPixel = startPixel;
        this._endPixel = endPixel;
        this._reversePixels = reversePixels;
        this._length = endPixel - startPixel;
        this._alignToPixels = this.options.alignToPixels;
    }
    afterUpdate() {
        (0, _helpersSegmentJs.Q)(this.options.afterUpdate, [
            this
        ]);
    }
    beforeSetDimensions() {
        (0, _helpersSegmentJs.Q)(this.options.beforeSetDimensions, [
            this
        ]);
    }
    setDimensions() {
        if (this.isHorizontal()) {
            this.width = this.maxWidth;
            this.left = 0;
            this.right = this.width;
        } else {
            this.height = this.maxHeight;
            this.top = 0;
            this.bottom = this.height;
        }
        this.paddingLeft = 0;
        this.paddingTop = 0;
        this.paddingRight = 0;
        this.paddingBottom = 0;
    }
    afterSetDimensions() {
        (0, _helpersSegmentJs.Q)(this.options.afterSetDimensions, [
            this
        ]);
    }
    _callHooks(name1) {
        this.chart.notifyPlugins(name1, this.getContext());
        (0, _helpersSegmentJs.Q)(this.options[name1], [
            this
        ]);
    }
    beforeDataLimits() {
        this._callHooks("beforeDataLimits");
    }
    determineDataLimits() {}
    afterDataLimits() {
        this._callHooks("afterDataLimits");
    }
    beforeBuildTicks() {
        this._callHooks("beforeBuildTicks");
    }
    buildTicks() {
        return [];
    }
    afterBuildTicks() {
        this._callHooks("afterBuildTicks");
    }
    beforeTickToLabelConversion() {
        (0, _helpersSegmentJs.Q)(this.options.beforeTickToLabelConversion, [
            this
        ]);
    }
    generateTickLabels(ticks) {
        const tickOpts = this.options.ticks;
        let i, ilen, tick;
        for(i = 0, ilen = ticks.length; i < ilen; i++){
            tick = ticks[i];
            tick.label = (0, _helpersSegmentJs.Q)(tickOpts.callback, [
                tick.value,
                i,
                ticks
            ], this);
        }
    }
    afterTickToLabelConversion() {
        (0, _helpersSegmentJs.Q)(this.options.afterTickToLabelConversion, [
            this
        ]);
    }
    beforeCalculateLabelRotation() {
        (0, _helpersSegmentJs.Q)(this.options.beforeCalculateLabelRotation, [
            this
        ]);
    }
    calculateLabelRotation() {
        const options = this.options;
        const tickOpts = options.ticks;
        const numTicks = this.ticks.length;
        const minRotation = tickOpts.minRotation || 0;
        const maxRotation = tickOpts.maxRotation;
        let labelRotation = minRotation;
        let tickWidth, maxHeight, maxLabelDiagonal;
        if (!this._isVisible() || !tickOpts.display || minRotation >= maxRotation || numTicks <= 1 || !this.isHorizontal()) {
            this.labelRotation = minRotation;
            return;
        }
        const labelSizes = this._getLabelSizes();
        const maxLabelWidth = labelSizes.widest.width;
        const maxLabelHeight = labelSizes.highest.height;
        const maxWidth = (0, _helpersSegmentJs.S)(this.chart.width - maxLabelWidth, 0, this.maxWidth);
        tickWidth = options.offset ? this.maxWidth / numTicks : maxWidth / (numTicks - 1);
        if (maxLabelWidth + 6 > tickWidth) {
            tickWidth = maxWidth / (numTicks - (options.offset ? 0.5 : 1));
            maxHeight = this.maxHeight - getTickMarkLength(options.grid) - tickOpts.padding - getTitleHeight(options.title, this.chart.options.font);
            maxLabelDiagonal = Math.sqrt(maxLabelWidth * maxLabelWidth + maxLabelHeight * maxLabelHeight);
            labelRotation = (0, _helpersSegmentJs.U)(Math.min(Math.asin((0, _helpersSegmentJs.S)((labelSizes.highest.height + 6) / tickWidth, -1, 1)), Math.asin((0, _helpersSegmentJs.S)(maxHeight / maxLabelDiagonal, -1, 1)) - Math.asin((0, _helpersSegmentJs.S)(maxLabelHeight / maxLabelDiagonal, -1, 1))));
            labelRotation = Math.max(minRotation, Math.min(maxRotation, labelRotation));
        }
        this.labelRotation = labelRotation;
    }
    afterCalculateLabelRotation() {
        (0, _helpersSegmentJs.Q)(this.options.afterCalculateLabelRotation, [
            this
        ]);
    }
    afterAutoSkip() {}
    beforeFit() {
        (0, _helpersSegmentJs.Q)(this.options.beforeFit, [
            this
        ]);
    }
    fit() {
        const minSize = {
            width: 0,
            height: 0
        };
        const { chart , options: { ticks: tickOpts , title: titleOpts , grid: gridOpts  }  } = this;
        const display = this._isVisible();
        const isHorizontal = this.isHorizontal();
        if (display) {
            const titleHeight = getTitleHeight(titleOpts, chart.options.font);
            if (isHorizontal) {
                minSize.width = this.maxWidth;
                minSize.height = getTickMarkLength(gridOpts) + titleHeight;
            } else {
                minSize.height = this.maxHeight;
                minSize.width = getTickMarkLength(gridOpts) + titleHeight;
            }
            if (tickOpts.display && this.ticks.length) {
                const { first , last , widest , highest  } = this._getLabelSizes();
                const tickPadding = tickOpts.padding * 2;
                const angleRadians = (0, _helpersSegmentJs.t)(this.labelRotation);
                const cos = Math.cos(angleRadians);
                const sin = Math.sin(angleRadians);
                if (isHorizontal) {
                    const labelHeight = tickOpts.mirror ? 0 : sin * widest.width + cos * highest.height;
                    minSize.height = Math.min(this.maxHeight, minSize.height + labelHeight + tickPadding);
                } else {
                    const labelWidth = tickOpts.mirror ? 0 : cos * widest.width + sin * highest.height;
                    minSize.width = Math.min(this.maxWidth, minSize.width + labelWidth + tickPadding);
                }
                this._calculatePadding(first, last, sin, cos);
            }
        }
        this._handleMargins();
        if (isHorizontal) {
            this.width = this._length = chart.width - this._margins.left - this._margins.right;
            this.height = minSize.height;
        } else {
            this.width = minSize.width;
            this.height = this._length = chart.height - this._margins.top - this._margins.bottom;
        }
    }
    _calculatePadding(first, last, sin, cos) {
        const { ticks: { align , padding  } , position  } = this.options;
        const isRotated = this.labelRotation !== 0;
        const labelsBelowTicks = position !== "top" && this.axis === "x";
        if (this.isHorizontal()) {
            const offsetLeft = this.getPixelForTick(0) - this.left;
            const offsetRight = this.right - this.getPixelForTick(this.ticks.length - 1);
            let paddingLeft = 0;
            let paddingRight = 0;
            if (isRotated) {
                if (labelsBelowTicks) {
                    paddingLeft = cos * first.width;
                    paddingRight = sin * last.height;
                } else {
                    paddingLeft = sin * first.height;
                    paddingRight = cos * last.width;
                }
            } else if (align === "start") paddingRight = last.width;
            else if (align === "end") paddingLeft = first.width;
            else if (align !== "inner") {
                paddingLeft = first.width / 2;
                paddingRight = last.width / 2;
            }
            this.paddingLeft = Math.max((paddingLeft - offsetLeft + padding) * this.width / (this.width - offsetLeft), 0);
            this.paddingRight = Math.max((paddingRight - offsetRight + padding) * this.width / (this.width - offsetRight), 0);
        } else {
            let paddingTop = last.height / 2;
            let paddingBottom = first.height / 2;
            if (align === "start") {
                paddingTop = 0;
                paddingBottom = first.height;
            } else if (align === "end") {
                paddingTop = last.height;
                paddingBottom = 0;
            }
            this.paddingTop = paddingTop + padding;
            this.paddingBottom = paddingBottom + padding;
        }
    }
    _handleMargins() {
        if (this._margins) {
            this._margins.left = Math.max(this.paddingLeft, this._margins.left);
            this._margins.top = Math.max(this.paddingTop, this._margins.top);
            this._margins.right = Math.max(this.paddingRight, this._margins.right);
            this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom);
        }
    }
    afterFit() {
        (0, _helpersSegmentJs.Q)(this.options.afterFit, [
            this
        ]);
    }
    isHorizontal() {
        const { axis , position  } = this.options;
        return position === "top" || position === "bottom" || axis === "x";
    }
    isFullSize() {
        return this.options.fullSize;
    }
    _convertTicksToLabels(ticks) {
        this.beforeTickToLabelConversion();
        this.generateTickLabels(ticks);
        let i, ilen;
        for(i = 0, ilen = ticks.length; i < ilen; i++)if ((0, _helpersSegmentJs.k)(ticks[i].label)) {
            ticks.splice(i, 1);
            ilen--;
            i--;
        }
        this.afterTickToLabelConversion();
    }
    _getLabelSizes() {
        let labelSizes = this._labelSizes;
        if (!labelSizes) {
            const sampleSize = this.options.ticks.sampleSize;
            let ticks = this.ticks;
            if (sampleSize < ticks.length) ticks = sample(ticks, sampleSize);
            this._labelSizes = labelSizes = this._computeLabelSizes(ticks, ticks.length);
        }
        return labelSizes;
    }
    _computeLabelSizes(ticks, length) {
        const { ctx , _longestTextCache: caches  } = this;
        const widths = [];
        const heights = [];
        let widestLabelSize = 0;
        let highestLabelSize = 0;
        let i, j, jlen, label, tickFont, fontString, cache, lineHeight, width, height, nestedLabel;
        for(i = 0; i < length; ++i){
            label = ticks[i].label;
            tickFont = this._resolveTickFontOptions(i);
            ctx.font = fontString = tickFont.string;
            cache = caches[fontString] = caches[fontString] || {
                data: {},
                gc: []
            };
            lineHeight = tickFont.lineHeight;
            width = height = 0;
            if (!(0, _helpersSegmentJs.k)(label) && !(0, _helpersSegmentJs.b)(label)) {
                width = (0, _helpersSegmentJs.V)(ctx, cache.data, cache.gc, width, label);
                height = lineHeight;
            } else if ((0, _helpersSegmentJs.b)(label)) for(j = 0, jlen = label.length; j < jlen; ++j){
                nestedLabel = label[j];
                if (!(0, _helpersSegmentJs.k)(nestedLabel) && !(0, _helpersSegmentJs.b)(nestedLabel)) {
                    width = (0, _helpersSegmentJs.V)(ctx, cache.data, cache.gc, width, nestedLabel);
                    height += lineHeight;
                }
            }
            widths.push(width);
            heights.push(height);
            widestLabelSize = Math.max(width, widestLabelSize);
            highestLabelSize = Math.max(height, highestLabelSize);
        }
        garbageCollect(caches, length);
        const widest = widths.indexOf(widestLabelSize);
        const highest = heights.indexOf(highestLabelSize);
        const valueAt = (idx)=>({
                width: widths[idx] || 0,
                height: heights[idx] || 0
            });
        return {
            first: valueAt(0),
            last: valueAt(length - 1),
            widest: valueAt(widest),
            highest: valueAt(highest),
            widths,
            heights
        };
    }
    getLabelForValue(value) {
        return value;
    }
    getPixelForValue(value, index) {
        return NaN;
    }
    getValueForPixel(pixel) {}
    getPixelForTick(index) {
        const ticks = this.ticks;
        if (index < 0 || index > ticks.length - 1) return null;
        return this.getPixelForValue(ticks[index].value);
    }
    getPixelForDecimal(decimal) {
        if (this._reversePixels) decimal = 1 - decimal;
        const pixel = this._startPixel + decimal * this._length;
        return (0, _helpersSegmentJs.W)(this._alignToPixels ? (0, _helpersSegmentJs.X)(this.chart, pixel, 0) : pixel);
    }
    getDecimalForPixel(pixel) {
        const decimal = (pixel - this._startPixel) / this._length;
        return this._reversePixels ? 1 - decimal : decimal;
    }
    getBasePixel() {
        return this.getPixelForValue(this.getBaseValue());
    }
    getBaseValue() {
        const { min , max  } = this;
        return min < 0 && max < 0 ? max : min > 0 && max > 0 ? min : 0;
    }
    getContext(index) {
        const ticks = this.ticks || [];
        if (index >= 0 && index < ticks.length) {
            const tick = ticks[index];
            return tick.$context || (tick.$context = createTickContext(this.getContext(), index, tick));
        }
        return this.$context || (this.$context = createScaleContext(this.chart.getContext(), this));
    }
    _tickSize() {
        const optionTicks = this.options.ticks;
        const rot = (0, _helpersSegmentJs.t)(this.labelRotation);
        const cos = Math.abs(Math.cos(rot));
        const sin = Math.abs(Math.sin(rot));
        const labelSizes = this._getLabelSizes();
        const padding = optionTicks.autoSkipPadding || 0;
        const w = labelSizes ? labelSizes.widest.width + padding : 0;
        const h = labelSizes ? labelSizes.highest.height + padding : 0;
        return this.isHorizontal() ? h * cos > w * sin ? w / cos : h / sin : h * sin < w * cos ? h / cos : w / sin;
    }
    _isVisible() {
        const display = this.options.display;
        if (display !== "auto") return !!display;
        return this.getMatchingVisibleMetas().length > 0;
    }
    _computeGridLineItems(chartArea) {
        const axis = this.axis;
        const chart = this.chart;
        const options = this.options;
        const { grid , position , border  } = options;
        const offset = grid.offset;
        const isHorizontal = this.isHorizontal();
        const ticks = this.ticks;
        const ticksLength = ticks.length + (offset ? 1 : 0);
        const tl = getTickMarkLength(grid);
        const items = [];
        const borderOpts = border.setContext(this.getContext());
        const axisWidth = borderOpts.display ? borderOpts.width : 0;
        const axisHalfWidth = axisWidth / 2;
        const alignBorderValue = function(pixel) {
            return (0, _helpersSegmentJs.X)(chart, pixel, axisWidth);
        };
        let borderValue, i, lineValue, alignedLineValue;
        let tx1, ty1, tx2, ty2, x1, y1, x2, y2;
        if (position === "top") {
            borderValue = alignBorderValue(this.bottom);
            ty1 = this.bottom - tl;
            ty2 = borderValue - axisHalfWidth;
            y1 = alignBorderValue(chartArea.top) + axisHalfWidth;
            y2 = chartArea.bottom;
        } else if (position === "bottom") {
            borderValue = alignBorderValue(this.top);
            y1 = chartArea.top;
            y2 = alignBorderValue(chartArea.bottom) - axisHalfWidth;
            ty1 = borderValue + axisHalfWidth;
            ty2 = this.top + tl;
        } else if (position === "left") {
            borderValue = alignBorderValue(this.right);
            tx1 = this.right - tl;
            tx2 = borderValue - axisHalfWidth;
            x1 = alignBorderValue(chartArea.left) + axisHalfWidth;
            x2 = chartArea.right;
        } else if (position === "right") {
            borderValue = alignBorderValue(this.left);
            x1 = chartArea.left;
            x2 = alignBorderValue(chartArea.right) - axisHalfWidth;
            tx1 = borderValue + axisHalfWidth;
            tx2 = this.left + tl;
        } else if (axis === "x") {
            if (position === "center") borderValue = alignBorderValue((chartArea.top + chartArea.bottom) / 2 + 0.5);
            else if ((0, _helpersSegmentJs.i)(position)) {
                const positionAxisID = Object.keys(position)[0];
                const value = position[positionAxisID];
                borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
            }
            y1 = chartArea.top;
            y2 = chartArea.bottom;
            ty1 = borderValue + axisHalfWidth;
            ty2 = ty1 + tl;
        } else if (axis === "y") {
            if (position === "center") borderValue = alignBorderValue((chartArea.left + chartArea.right) / 2);
            else if ((0, _helpersSegmentJs.i)(position)) {
                const positionAxisID1 = Object.keys(position)[0];
                const value1 = position[positionAxisID1];
                borderValue = alignBorderValue(this.chart.scales[positionAxisID1].getPixelForValue(value1));
            }
            tx1 = borderValue - axisHalfWidth;
            tx2 = tx1 - tl;
            x1 = chartArea.left;
            x2 = chartArea.right;
        }
        const limit = (0, _helpersSegmentJs.v)(options.ticks.maxTicksLimit, ticksLength);
        const step = Math.max(1, Math.ceil(ticksLength / limit));
        for(i = 0; i < ticksLength; i += step){
            const context = this.getContext(i);
            const optsAtIndex = grid.setContext(context);
            const optsAtIndexBorder = border.setContext(context);
            const lineWidth = optsAtIndex.lineWidth;
            const lineColor = optsAtIndex.color;
            const borderDash = optsAtIndexBorder.dash || [];
            const borderDashOffset = optsAtIndexBorder.dashOffset;
            const tickWidth = optsAtIndex.tickWidth;
            const tickColor = optsAtIndex.tickColor;
            const tickBorderDash = optsAtIndex.tickBorderDash || [];
            const tickBorderDashOffset = optsAtIndex.tickBorderDashOffset;
            lineValue = getPixelForGridLine(this, i, offset);
            if (lineValue === undefined) continue;
            alignedLineValue = (0, _helpersSegmentJs.X)(chart, lineValue, lineWidth);
            if (isHorizontal) tx1 = tx2 = x1 = x2 = alignedLineValue;
            else ty1 = ty2 = y1 = y2 = alignedLineValue;
            items.push({
                tx1,
                ty1,
                tx2,
                ty2,
                x1,
                y1,
                x2,
                y2,
                width: lineWidth,
                color: lineColor,
                borderDash,
                borderDashOffset,
                tickWidth,
                tickColor,
                tickBorderDash,
                tickBorderDashOffset
            });
        }
        this._ticksLength = ticksLength;
        this._borderValue = borderValue;
        return items;
    }
    _computeLabelItems(chartArea) {
        const axis = this.axis;
        const options = this.options;
        const { position , ticks: optionTicks  } = options;
        const isHorizontal = this.isHorizontal();
        const ticks = this.ticks;
        const { align , crossAlign , padding , mirror  } = optionTicks;
        const tl = getTickMarkLength(options.grid);
        const tickAndPadding = tl + padding;
        const hTickAndPadding = mirror ? -padding : tickAndPadding;
        const rotation = -(0, _helpersSegmentJs.t)(this.labelRotation);
        const items = [];
        let i, ilen, tick, label, x, y, textAlign, pixel, font, lineHeight, lineCount, textOffset;
        let textBaseline = "middle";
        if (position === "top") {
            y = this.bottom - hTickAndPadding;
            textAlign = this._getXAxisLabelAlignment();
        } else if (position === "bottom") {
            y = this.top + hTickAndPadding;
            textAlign = this._getXAxisLabelAlignment();
        } else if (position === "left") {
            const ret = this._getYAxisLabelAlignment(tl);
            textAlign = ret.textAlign;
            x = ret.x;
        } else if (position === "right") {
            const ret1 = this._getYAxisLabelAlignment(tl);
            textAlign = ret1.textAlign;
            x = ret1.x;
        } else if (axis === "x") {
            if (position === "center") y = (chartArea.top + chartArea.bottom) / 2 + tickAndPadding;
            else if ((0, _helpersSegmentJs.i)(position)) {
                const positionAxisID = Object.keys(position)[0];
                const value = position[positionAxisID];
                y = this.chart.scales[positionAxisID].getPixelForValue(value) + tickAndPadding;
            }
            textAlign = this._getXAxisLabelAlignment();
        } else if (axis === "y") {
            if (position === "center") x = (chartArea.left + chartArea.right) / 2 - tickAndPadding;
            else if ((0, _helpersSegmentJs.i)(position)) {
                const positionAxisID1 = Object.keys(position)[0];
                const value1 = position[positionAxisID1];
                x = this.chart.scales[positionAxisID1].getPixelForValue(value1);
            }
            textAlign = this._getYAxisLabelAlignment(tl).textAlign;
        }
        if (axis === "y") {
            if (align === "start") textBaseline = "top";
            else if (align === "end") textBaseline = "bottom";
        }
        const labelSizes = this._getLabelSizes();
        for(i = 0, ilen = ticks.length; i < ilen; ++i){
            tick = ticks[i];
            label = tick.label;
            const optsAtIndex = optionTicks.setContext(this.getContext(i));
            pixel = this.getPixelForTick(i) + optionTicks.labelOffset;
            font = this._resolveTickFontOptions(i);
            lineHeight = font.lineHeight;
            lineCount = (0, _helpersSegmentJs.b)(label) ? label.length : 1;
            const halfCount = lineCount / 2;
            const color = optsAtIndex.color;
            const strokeColor = optsAtIndex.textStrokeColor;
            const strokeWidth = optsAtIndex.textStrokeWidth;
            let tickTextAlign = textAlign;
            if (isHorizontal) {
                x = pixel;
                if (textAlign === "inner") {
                    if (i === ilen - 1) tickTextAlign = !this.options.reverse ? "right" : "left";
                    else if (i === 0) tickTextAlign = !this.options.reverse ? "left" : "right";
                    else tickTextAlign = "center";
                }
                if (position === "top") {
                    if (crossAlign === "near" || rotation !== 0) textOffset = -lineCount * lineHeight + lineHeight / 2;
                    else if (crossAlign === "center") textOffset = -labelSizes.highest.height / 2 - halfCount * lineHeight + lineHeight;
                    else textOffset = -labelSizes.highest.height + lineHeight / 2;
                } else {
                    if (crossAlign === "near" || rotation !== 0) textOffset = lineHeight / 2;
                    else if (crossAlign === "center") textOffset = labelSizes.highest.height / 2 - halfCount * lineHeight;
                    else textOffset = labelSizes.highest.height - lineCount * lineHeight;
                }
                if (mirror) textOffset *= -1;
                if (rotation !== 0 && !optsAtIndex.showLabelBackdrop) x += lineHeight / 2 * Math.sin(rotation);
            } else {
                y = pixel;
                textOffset = (1 - lineCount) * lineHeight / 2;
            }
            let backdrop;
            if (optsAtIndex.showLabelBackdrop) {
                const labelPadding = (0, _helpersSegmentJs.E)(optsAtIndex.backdropPadding);
                const height = labelSizes.heights[i];
                const width = labelSizes.widths[i];
                let top = textOffset - labelPadding.top;
                let left = 0 - labelPadding.left;
                switch(textBaseline){
                    case "middle":
                        top -= height / 2;
                        break;
                    case "bottom":
                        top -= height;
                        break;
                }
                switch(textAlign){
                    case "center":
                        left -= width / 2;
                        break;
                    case "right":
                        left -= width;
                        break;
                }
                backdrop = {
                    left,
                    top,
                    width: width + labelPadding.width,
                    height: height + labelPadding.height,
                    color: optsAtIndex.backdropColor
                };
            }
            items.push({
                rotation,
                label,
                font,
                color,
                strokeColor,
                strokeWidth,
                textOffset,
                textAlign: tickTextAlign,
                textBaseline,
                translation: [
                    x,
                    y
                ],
                backdrop
            });
        }
        return items;
    }
    _getXAxisLabelAlignment() {
        const { position , ticks  } = this.options;
        const rotation = -(0, _helpersSegmentJs.t)(this.labelRotation);
        if (rotation) return position === "top" ? "left" : "right";
        let align = "center";
        if (ticks.align === "start") align = "left";
        else if (ticks.align === "end") align = "right";
        else if (ticks.align === "inner") align = "inner";
        return align;
    }
    _getYAxisLabelAlignment(tl) {
        const { position , ticks: { crossAlign , mirror , padding  }  } = this.options;
        const labelSizes = this._getLabelSizes();
        const tickAndPadding = tl + padding;
        const widest = labelSizes.widest.width;
        let textAlign;
        let x;
        if (position === "left") {
            if (mirror) {
                x = this.right + padding;
                if (crossAlign === "near") textAlign = "left";
                else if (crossAlign === "center") {
                    textAlign = "center";
                    x += widest / 2;
                } else {
                    textAlign = "right";
                    x += widest;
                }
            } else {
                x = this.right - tickAndPadding;
                if (crossAlign === "near") textAlign = "right";
                else if (crossAlign === "center") {
                    textAlign = "center";
                    x -= widest / 2;
                } else {
                    textAlign = "left";
                    x = this.left;
                }
            }
        } else if (position === "right") {
            if (mirror) {
                x = this.left + padding;
                if (crossAlign === "near") textAlign = "right";
                else if (crossAlign === "center") {
                    textAlign = "center";
                    x -= widest / 2;
                } else {
                    textAlign = "left";
                    x -= widest;
                }
            } else {
                x = this.left + tickAndPadding;
                if (crossAlign === "near") textAlign = "left";
                else if (crossAlign === "center") {
                    textAlign = "center";
                    x += widest / 2;
                } else {
                    textAlign = "right";
                    x = this.right;
                }
            }
        } else textAlign = "right";
        return {
            textAlign,
            x
        };
    }
    _computeLabelArea() {
        if (this.options.ticks.mirror) return;
        const chart = this.chart;
        const position = this.options.position;
        if (position === "left" || position === "right") return {
            top: 0,
            left: this.left,
            bottom: chart.height,
            right: this.right
        };
        if (position === "top" || position === "bottom") return {
            top: this.top,
            left: 0,
            bottom: this.bottom,
            right: chart.width
        };
    }
    drawBackground() {
        const { ctx , options: { backgroundColor  } , left , top , width , height  } = this;
        if (backgroundColor) {
            ctx.save();
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(left, top, width, height);
            ctx.restore();
        }
    }
    getLineWidthForValue(value) {
        const grid = this.options.grid;
        if (!this._isVisible() || !grid.display) return 0;
        const ticks = this.ticks;
        const index = ticks.findIndex((t)=>t.value === value);
        if (index >= 0) {
            const opts = grid.setContext(this.getContext(index));
            return opts.lineWidth;
        }
        return 0;
    }
    drawGrid(chartArea) {
        const grid = this.options.grid;
        const ctx = this.ctx;
        const items = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(chartArea));
        let i, ilen;
        const drawLine = (p1, p2, style)=>{
            if (!style.width || !style.color) return;
            ctx.save();
            ctx.lineWidth = style.width;
            ctx.strokeStyle = style.color;
            ctx.setLineDash(style.borderDash || []);
            ctx.lineDashOffset = style.borderDashOffset;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.restore();
        };
        if (grid.display) for(i = 0, ilen = items.length; i < ilen; ++i){
            const item = items[i];
            if (grid.drawOnChartArea) drawLine({
                x: item.x1,
                y: item.y1
            }, {
                x: item.x2,
                y: item.y2
            }, item);
            if (grid.drawTicks) drawLine({
                x: item.tx1,
                y: item.ty1
            }, {
                x: item.tx2,
                y: item.ty2
            }, {
                color: item.tickColor,
                width: item.tickWidth,
                borderDash: item.tickBorderDash,
                borderDashOffset: item.tickBorderDashOffset
            });
        }
    }
    drawBorder() {
        const { chart , ctx , options: { border , grid  }  } = this;
        const borderOpts = border.setContext(this.getContext());
        const axisWidth = border.display ? borderOpts.width : 0;
        if (!axisWidth) return;
        const lastLineWidth = grid.setContext(this.getContext(0)).lineWidth;
        const borderValue = this._borderValue;
        let x1, x2, y1, y2;
        if (this.isHorizontal()) {
            x1 = (0, _helpersSegmentJs.X)(chart, this.left, axisWidth) - axisWidth / 2;
            x2 = (0, _helpersSegmentJs.X)(chart, this.right, lastLineWidth) + lastLineWidth / 2;
            y1 = y2 = borderValue;
        } else {
            y1 = (0, _helpersSegmentJs.X)(chart, this.top, axisWidth) - axisWidth / 2;
            y2 = (0, _helpersSegmentJs.X)(chart, this.bottom, lastLineWidth) + lastLineWidth / 2;
            x1 = x2 = borderValue;
        }
        ctx.save();
        ctx.lineWidth = borderOpts.width;
        ctx.strokeStyle = borderOpts.color;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.restore();
    }
    drawLabels(chartArea) {
        const optionTicks = this.options.ticks;
        if (!optionTicks.display) return;
        const ctx = this.ctx;
        const area = this._computeLabelArea();
        if (area) (0, _helpersSegmentJs.Y)(ctx, area);
        const items = this._labelItems || (this._labelItems = this._computeLabelItems(chartArea));
        let i, ilen;
        for(i = 0, ilen = items.length; i < ilen; ++i){
            const item = items[i];
            const tickFont = item.font;
            const label = item.label;
            let y = item.textOffset;
            (0, _helpersSegmentJs.Z)(ctx, label, 0, y, tickFont, item);
        }
        if (area) (0, _helpersSegmentJs.$)(ctx);
    }
    drawTitle() {
        const { ctx , options: { position , title , reverse  }  } = this;
        if (!title.display) return;
        const font = (0, _helpersSegmentJs.a0)(title.font);
        const padding = (0, _helpersSegmentJs.E)(title.padding);
        const align = title.align;
        let offset = font.lineHeight / 2;
        if (position === "bottom" || position === "center" || (0, _helpersSegmentJs.i)(position)) {
            offset += padding.bottom;
            if ((0, _helpersSegmentJs.b)(title.text)) offset += font.lineHeight * (title.text.length - 1);
        } else offset += padding.top;
        const { titleX , titleY , maxWidth , rotation  } = titleArgs(this, offset, position, align);
        (0, _helpersSegmentJs.Z)(ctx, title.text, 0, 0, font, {
            color: title.color,
            maxWidth,
            rotation,
            textAlign: titleAlign(align, position, reverse),
            textBaseline: "middle",
            translation: [
                titleX,
                titleY
            ]
        });
    }
    draw(chartArea) {
        if (!this._isVisible()) return;
        this.drawBackground();
        this.drawGrid(chartArea);
        this.drawBorder();
        this.drawTitle();
        this.drawLabels(chartArea);
    }
    _layers() {
        const opts = this.options;
        const tz = opts.ticks && opts.ticks.z || 0;
        const gz = (0, _helpersSegmentJs.v)(opts.grid && opts.grid.z, -1);
        const bz = (0, _helpersSegmentJs.v)(opts.border && opts.border.z, 0);
        if (!this._isVisible() || this.draw !== Scale.prototype.draw) return [
            {
                z: tz,
                draw: (chartArea)=>{
                    this.draw(chartArea);
                }
            }
        ];
        return [
            {
                z: gz,
                draw: (chartArea)=>{
                    this.drawBackground();
                    this.drawGrid(chartArea);
                    this.drawTitle();
                }
            },
            {
                z: bz,
                draw: ()=>{
                    this.drawBorder();
                }
            },
            {
                z: tz,
                draw: (chartArea)=>{
                    this.drawLabels(chartArea);
                }
            }
        ];
    }
    getMatchingVisibleMetas(type) {
        const metas = this.chart.getSortedVisibleDatasetMetas();
        const axisID = this.axis + "AxisID";
        const result = [];
        let i, ilen;
        for(i = 0, ilen = metas.length; i < ilen; ++i){
            const meta = metas[i];
            if (meta[axisID] === this.id && (!type || meta.type === type)) result.push(meta);
        }
        return result;
    }
    _resolveTickFontOptions(index) {
        const opts = this.options.ticks.setContext(this.getContext(index));
        return (0, _helpersSegmentJs.a0)(opts.font);
    }
    _maxDigits() {
        const fontSize = this._resolveTickFontOptions(0).lineHeight;
        return (this.isHorizontal() ? this.width : this.height) / fontSize;
    }
}
class TypedRegistry {
    constructor(type, scope, override){
        this.type = type;
        this.scope = scope;
        this.override = override;
        this.items = Object.create(null);
    }
    isForType(type) {
        return Object.prototype.isPrototypeOf.call(this.type.prototype, type.prototype);
    }
    register(item) {
        const proto = Object.getPrototypeOf(item);
        let parentScope;
        if (isIChartComponent(proto)) parentScope = this.register(proto);
        const items = this.items;
        const id = item.id;
        const scope = this.scope + "." + id;
        if (!id) throw new Error("class does not have id: " + item);
        if (id in items) return scope;
        items[id] = item;
        registerDefaults(item, scope, parentScope);
        if (this.override) (0, _helpersSegmentJs.d).override(item.id, item.overrides);
        return scope;
    }
    get(id) {
        return this.items[id];
    }
    unregister(item) {
        const items = this.items;
        const id = item.id;
        const scope = this.scope;
        if (id in items) delete items[id];
        if (scope && id in (0, _helpersSegmentJs.d)[scope]) {
            delete (0, _helpersSegmentJs.d)[scope][id];
            if (this.override) delete (0, _helpersSegmentJs.a3)[id];
        }
    }
}
function registerDefaults(item, scope, parentScope) {
    const itemDefaults = (0, _helpersSegmentJs.a4)(Object.create(null), [
        parentScope ? (0, _helpersSegmentJs.d).get(parentScope) : {},
        (0, _helpersSegmentJs.d).get(scope),
        item.defaults
    ]);
    (0, _helpersSegmentJs.d).set(scope, itemDefaults);
    if (item.defaultRoutes) routeDefaults(scope, item.defaultRoutes);
    if (item.descriptors) (0, _helpersSegmentJs.d).describe(scope, item.descriptors);
}
function routeDefaults(scope, routes) {
    Object.keys(routes).forEach((property)=>{
        const propertyParts = property.split(".");
        const sourceName = propertyParts.pop();
        const sourceScope = [
            scope
        ].concat(propertyParts).join(".");
        const parts = routes[property].split(".");
        const targetName = parts.pop();
        const targetScope = parts.join(".");
        (0, _helpersSegmentJs.d).route(sourceScope, sourceName, targetScope, targetName);
    });
}
function isIChartComponent(proto) {
    return "id" in proto && "defaults" in proto;
}
class Registry {
    constructor(){
        this.controllers = new TypedRegistry(DatasetController, "datasets", true);
        this.elements = new TypedRegistry(Element, "elements");
        this.plugins = new TypedRegistry(Object, "plugins");
        this.scales = new TypedRegistry(Scale, "scales");
        this._typedRegistries = [
            this.controllers,
            this.scales,
            this.elements
        ];
    }
    add(...args) {
        this._each("register", args);
    }
    remove(...args) {
        this._each("unregister", args);
    }
    addControllers(...args) {
        this._each("register", args, this.controllers);
    }
    addElements(...args) {
        this._each("register", args, this.elements);
    }
    addPlugins(...args) {
        this._each("register", args, this.plugins);
    }
    addScales(...args) {
        this._each("register", args, this.scales);
    }
    getController(id) {
        return this._get(id, this.controllers, "controller");
    }
    getElement(id) {
        return this._get(id, this.elements, "element");
    }
    getPlugin(id) {
        return this._get(id, this.plugins, "plugin");
    }
    getScale(id) {
        return this._get(id, this.scales, "scale");
    }
    removeControllers(...args) {
        this._each("unregister", args, this.controllers);
    }
    removeElements(...args) {
        this._each("unregister", args, this.elements);
    }
    removePlugins(...args) {
        this._each("unregister", args, this.plugins);
    }
    removeScales(...args) {
        this._each("unregister", args, this.scales);
    }
    _each(method, args, typedRegistry) {
        [
            ...args
        ].forEach((arg)=>{
            const reg = typedRegistry || this._getRegistryForType(arg);
            if (typedRegistry || reg.isForType(arg) || reg === this.plugins && arg.id) this._exec(method, reg, arg);
            else (0, _helpersSegmentJs.F)(arg, (item)=>{
                const itemReg = typedRegistry || this._getRegistryForType(item);
                this._exec(method, itemReg, item);
            });
        });
    }
    _exec(method, registry, component) {
        const camelMethod = (0, _helpersSegmentJs.a5)(method);
        (0, _helpersSegmentJs.Q)(component["before" + camelMethod], [], component);
        registry[method](component);
        (0, _helpersSegmentJs.Q)(component["after" + camelMethod], [], component);
    }
    _getRegistryForType(type) {
        for(let i = 0; i < this._typedRegistries.length; i++){
            const reg = this._typedRegistries[i];
            if (reg.isForType(type)) return reg;
        }
        return this.plugins;
    }
    _get(id, typedRegistry, type) {
        const item = typedRegistry.get(id);
        if (item === undefined) throw new Error('"' + id + '" is not a registered ' + type + ".");
        return item;
    }
}
var registry = /* #__PURE__ */ new Registry();
class PluginService {
    constructor(){
        this._init = [];
    }
    notify(chart, hook, args, filter) {
        if (hook === "beforeInit") {
            this._init = this._createDescriptors(chart, true);
            this._notify(this._init, chart, "install");
        }
        const descriptors = filter ? this._descriptors(chart).filter(filter) : this._descriptors(chart);
        const result = this._notify(descriptors, chart, hook, args);
        if (hook === "afterDestroy") {
            this._notify(descriptors, chart, "stop");
            this._notify(this._init, chart, "uninstall");
        }
        return result;
    }
    _notify(descriptors, chart, hook, args) {
        args = args || {};
        for (const descriptor of descriptors){
            const plugin = descriptor.plugin;
            const method = plugin[hook];
            const params = [
                chart,
                args,
                descriptor.options
            ];
            if ((0, _helpersSegmentJs.Q)(method, params, plugin) === false && args.cancelable) return false;
        }
        return true;
    }
    invalidate() {
        if (!(0, _helpersSegmentJs.k)(this._cache)) {
            this._oldCache = this._cache;
            this._cache = undefined;
        }
    }
    _descriptors(chart) {
        if (this._cache) return this._cache;
        const descriptors = this._cache = this._createDescriptors(chart);
        this._notifyStateChanges(chart);
        return descriptors;
    }
    _createDescriptors(chart, all) {
        const config = chart && chart.config;
        const options = (0, _helpersSegmentJs.v)(config.options && config.options.plugins, {});
        const plugins = allPlugins(config);
        return options === false && !all ? [] : createDescriptors(chart, plugins, options, all);
    }
    _notifyStateChanges(chart) {
        const previousDescriptors = this._oldCache || [];
        const descriptors = this._cache;
        const diff = (a, b)=>a.filter((x)=>!b.some((y)=>x.plugin.id === y.plugin.id));
        this._notify(diff(previousDescriptors, descriptors), chart, "stop");
        this._notify(diff(descriptors, previousDescriptors), chart, "start");
    }
}
function allPlugins(config) {
    const localIds = {};
    const plugins = [];
    const keys = Object.keys(registry.plugins.items);
    for(let i = 0; i < keys.length; i++)plugins.push(registry.getPlugin(keys[i]));
    const local = config.plugins || [];
    for(let i1 = 0; i1 < local.length; i1++){
        const plugin = local[i1];
        if (plugins.indexOf(plugin) === -1) {
            plugins.push(plugin);
            localIds[plugin.id] = true;
        }
    }
    return {
        plugins,
        localIds
    };
}
function getOpts(options, all) {
    if (!all && options === false) return null;
    if (options === true) return {};
    return options;
}
function createDescriptors(chart, { plugins , localIds  }, options, all) {
    const result = [];
    const context = chart.getContext();
    for (const plugin of plugins){
        const id = plugin.id;
        const opts = getOpts(options[id], all);
        if (opts === null) continue;
        result.push({
            plugin,
            options: pluginOpts(chart.config, {
                plugin,
                local: localIds[id]
            }, opts, context)
        });
    }
    return result;
}
function pluginOpts(config, { plugin , local  }, opts, context) {
    const keys = config.pluginScopeKeys(plugin);
    const scopes = config.getOptionScopes(opts, keys);
    if (local && plugin.defaults) scopes.push(plugin.defaults);
    return config.createResolver(scopes, context, [
        ""
    ], {
        scriptable: false,
        indexable: false,
        allKeys: true
    });
}
function getIndexAxis(type, options) {
    const datasetDefaults = (0, _helpersSegmentJs.d).datasets[type] || {};
    const datasetOptions = (options.datasets || {})[type] || {};
    return datasetOptions.indexAxis || options.indexAxis || datasetDefaults.indexAxis || "x";
}
function getAxisFromDefaultScaleID(id, indexAxis) {
    let axis = id;
    if (id === "_index_") axis = indexAxis;
    else if (id === "_value_") axis = indexAxis === "x" ? "y" : "x";
    return axis;
}
function getDefaultScaleIDFromAxis(axis, indexAxis) {
    return axis === indexAxis ? "_index_" : "_value_";
}
function axisFromPosition(position) {
    if (position === "top" || position === "bottom") return "x";
    if (position === "left" || position === "right") return "y";
}
function determineAxis(id, scaleOptions) {
    if (id === "x" || id === "y" || id === "r") return id;
    id = scaleOptions.axis || axisFromPosition(scaleOptions.position) || id.length > 1 && determineAxis(id[0].toLowerCase(), scaleOptions);
    if (id) return id;
    throw new Error(`Cannot determine type of '${name}' axis. Please provide 'axis' or 'position' option.`);
}
function mergeScaleConfig(config, options) {
    const chartDefaults = (0, _helpersSegmentJs.a3)[config.type] || {
        scales: {}
    };
    const configScales = options.scales || {};
    const chartIndexAxis = getIndexAxis(config.type, options);
    const scales = Object.create(null);
    Object.keys(configScales).forEach((id)=>{
        const scaleConf = configScales[id];
        if (!(0, _helpersSegmentJs.i)(scaleConf)) return console.error(`Invalid scale configuration for scale: ${id}`);
        if (scaleConf._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${id}`);
        const axis = determineAxis(id, scaleConf);
        const defaultId = getDefaultScaleIDFromAxis(axis, chartIndexAxis);
        const defaultScaleOptions = chartDefaults.scales || {};
        scales[id] = (0, _helpersSegmentJs.ab)(Object.create(null), [
            {
                axis
            },
            scaleConf,
            defaultScaleOptions[axis],
            defaultScaleOptions[defaultId]
        ]);
    });
    config.data.datasets.forEach((dataset)=>{
        const type = dataset.type || config.type;
        const indexAxis = dataset.indexAxis || getIndexAxis(type, options);
        const datasetDefaults = (0, _helpersSegmentJs.a3)[type] || {};
        const defaultScaleOptions = datasetDefaults.scales || {};
        Object.keys(defaultScaleOptions).forEach((defaultID)=>{
            const axis = getAxisFromDefaultScaleID(defaultID, indexAxis);
            const id = dataset[axis + "AxisID"] || axis;
            scales[id] = scales[id] || Object.create(null);
            (0, _helpersSegmentJs.ab)(scales[id], [
                {
                    axis
                },
                configScales[id],
                defaultScaleOptions[defaultID]
            ]);
        });
    });
    Object.keys(scales).forEach((key)=>{
        const scale = scales[key];
        (0, _helpersSegmentJs.ab)(scale, [
            (0, _helpersSegmentJs.d).scales[scale.type],
            (0, _helpersSegmentJs.d).scale
        ]);
    });
    return scales;
}
function initOptions(config) {
    const options = config.options || (config.options = {});
    options.plugins = (0, _helpersSegmentJs.v)(options.plugins, {});
    options.scales = mergeScaleConfig(config, options);
}
function initData(data) {
    data = data || {};
    data.datasets = data.datasets || [];
    data.labels = data.labels || [];
    return data;
}
function initConfig(config) {
    config = config || {};
    config.data = initData(config.data);
    initOptions(config);
    return config;
}
const keyCache = new Map();
const keysCached = new Set();
function cachedKeys(cacheKey, generate) {
    let keys = keyCache.get(cacheKey);
    if (!keys) {
        keys = generate();
        keyCache.set(cacheKey, keys);
        keysCached.add(keys);
    }
    return keys;
}
const addIfFound = (set, obj, key)=>{
    const opts = (0, _helpersSegmentJs.f)(obj, key);
    if (opts !== undefined) set.add(opts);
};
class Config {
    constructor(config){
        this._config = initConfig(config);
        this._scopeCache = new Map();
        this._resolverCache = new Map();
    }
    get platform() {
        return this._config.platform;
    }
    get type() {
        return this._config.type;
    }
    set type(type) {
        this._config.type = type;
    }
    get data() {
        return this._config.data;
    }
    set data(data) {
        this._config.data = initData(data);
    }
    get options() {
        return this._config.options;
    }
    set options(options) {
        this._config.options = options;
    }
    get plugins() {
        return this._config.plugins;
    }
    update() {
        const config = this._config;
        this.clearCache();
        initOptions(config);
    }
    clearCache() {
        this._scopeCache.clear();
        this._resolverCache.clear();
    }
    datasetScopeKeys(datasetType) {
        return cachedKeys(datasetType, ()=>[
                [
                    `datasets.${datasetType}`,
                    ""
                ]
            ]);
    }
    datasetAnimationScopeKeys(datasetType, transition) {
        return cachedKeys(`${datasetType}.transition.${transition}`, ()=>[
                [
                    `datasets.${datasetType}.transitions.${transition}`,
                    `transitions.${transition}`
                ],
                [
                    `datasets.${datasetType}`,
                    ""
                ]
            ]);
    }
    datasetElementScopeKeys(datasetType, elementType) {
        return cachedKeys(`${datasetType}-${elementType}`, ()=>[
                [
                    `datasets.${datasetType}.elements.${elementType}`,
                    `datasets.${datasetType}`,
                    `elements.${elementType}`,
                    ""
                ]
            ]);
    }
    pluginScopeKeys(plugin) {
        const id = plugin.id;
        const type = this.type;
        return cachedKeys(`${type}-plugin-${id}`, ()=>[
                [
                    `plugins.${id}`,
                    ...plugin.additionalOptionScopes || []
                ]
            ]);
    }
    _cachedScopes(mainScope, resetCache) {
        const _scopeCache = this._scopeCache;
        let cache = _scopeCache.get(mainScope);
        if (!cache || resetCache) {
            cache = new Map();
            _scopeCache.set(mainScope, cache);
        }
        return cache;
    }
    getOptionScopes(mainScope, keyLists, resetCache) {
        const { options , type  } = this;
        const cache = this._cachedScopes(mainScope, resetCache);
        const cached = cache.get(keyLists);
        if (cached) return cached;
        const scopes = new Set();
        keyLists.forEach((keys)=>{
            if (mainScope) {
                scopes.add(mainScope);
                keys.forEach((key)=>addIfFound(scopes, mainScope, key));
            }
            keys.forEach((key)=>addIfFound(scopes, options, key));
            keys.forEach((key)=>addIfFound(scopes, (0, _helpersSegmentJs.a3)[type] || {}, key));
            keys.forEach((key)=>addIfFound(scopes, (0, _helpersSegmentJs.d), key));
            keys.forEach((key)=>addIfFound(scopes, (0, _helpersSegmentJs.a6), key));
        });
        const array = Array.from(scopes);
        if (array.length === 0) array.push(Object.create(null));
        if (keysCached.has(keyLists)) cache.set(keyLists, array);
        return array;
    }
    chartOptionScopes() {
        const { options , type  } = this;
        return [
            options,
            (0, _helpersSegmentJs.a3)[type] || {},
            (0, _helpersSegmentJs.d).datasets[type] || {},
            {
                type
            },
            (0, _helpersSegmentJs.d),
            (0, _helpersSegmentJs.a6)
        ];
    }
    resolveNamedOptions(scopes, names, context, prefixes = [
        ""
    ]) {
        const result = {
            $shared: true
        };
        const { resolver , subPrefixes  } = getResolver(this._resolverCache, scopes, prefixes);
        let options = resolver;
        if (needContext(resolver, names)) {
            result.$shared = false;
            context = (0, _helpersSegmentJs.a7)(context) ? context() : context;
            const subResolver = this.createResolver(scopes, context, subPrefixes);
            options = (0, _helpersSegmentJs.a8)(resolver, context, subResolver);
        }
        for (const prop of names)result[prop] = options[prop];
        return result;
    }
    createResolver(scopes, context, prefixes = [
        ""
    ], descriptorDefaults) {
        const { resolver  } = getResolver(this._resolverCache, scopes, prefixes);
        return (0, _helpersSegmentJs.i)(context) ? (0, _helpersSegmentJs.a8)(resolver, context, undefined, descriptorDefaults) : resolver;
    }
}
function getResolver(resolverCache, scopes, prefixes) {
    let cache = resolverCache.get(scopes);
    if (!cache) {
        cache = new Map();
        resolverCache.set(scopes, cache);
    }
    const cacheKey = prefixes.join();
    let cached = cache.get(cacheKey);
    if (!cached) {
        const resolver = (0, _helpersSegmentJs.a9)(scopes, prefixes);
        cached = {
            resolver,
            subPrefixes: prefixes.filter((p)=>!p.toLowerCase().includes("hover"))
        };
        cache.set(cacheKey, cached);
    }
    return cached;
}
const hasFunction = (value)=>(0, _helpersSegmentJs.i)(value) && Object.getOwnPropertyNames(value).reduce((acc, key)=>acc || (0, _helpersSegmentJs.a7)(value[key]), false);
function needContext(proxy, names) {
    const { isScriptable , isIndexable  } = (0, _helpersSegmentJs.aa)(proxy);
    for (const prop of names){
        const scriptable = isScriptable(prop);
        const indexable = isIndexable(prop);
        const value = (indexable || scriptable) && proxy[prop];
        if (scriptable && ((0, _helpersSegmentJs.a7)(value) || hasFunction(value)) || indexable && (0, _helpersSegmentJs.b)(value)) return true;
    }
    return false;
}
var version = "4.0.1";
const KNOWN_POSITIONS = [
    "top",
    "bottom",
    "left",
    "right",
    "chartArea"
];
function positionIsHorizontal(position, axis) {
    return position === "top" || position === "bottom" || KNOWN_POSITIONS.indexOf(position) === -1 && axis === "x";
}
function compare2Level(l1, l2) {
    return function(a, b) {
        return a[l1] === b[l1] ? a[l2] - b[l2] : a[l1] - b[l1];
    };
}
function onAnimationsComplete(context) {
    const chart = context.chart;
    const animationOptions = chart.options.animation;
    chart.notifyPlugins("afterRender");
    (0, _helpersSegmentJs.Q)(animationOptions && animationOptions.onComplete, [
        context
    ], chart);
}
function onAnimationProgress(context) {
    const chart = context.chart;
    const animationOptions = chart.options.animation;
    (0, _helpersSegmentJs.Q)(animationOptions && animationOptions.onProgress, [
        context
    ], chart);
}
function getCanvas(item) {
    if ((0, _helpersSegmentJs.M)() && typeof item === "string") item = document.getElementById(item);
    else if (item && item.length) item = item[0];
    if (item && item.canvas) item = item.canvas;
    return item;
}
const instances = {};
const getChart = (key)=>{
    const canvas = getCanvas(key);
    return Object.values(instances).filter((c)=>c.canvas === canvas).pop();
};
function moveNumericKeys(obj, start, move) {
    const keys = Object.keys(obj);
    for (const key of keys){
        const intKey = +key;
        if (intKey >= start) {
            const value = obj[key];
            delete obj[key];
            if (move > 0 || intKey > start) obj[intKey + move] = value;
        }
    }
}
function determineLastEvent(e, lastEvent, inChartArea, isClick) {
    if (!inChartArea || e.type === "mouseout") return null;
    if (isClick) return lastEvent;
    return e;
}
function getDatasetArea(meta) {
    const { xScale , yScale  } = meta;
    if (xScale && yScale) return {
        left: xScale.left,
        right: xScale.right,
        top: yScale.top,
        bottom: yScale.bottom
    };
}
class Chart {
    static defaults = (0, _helpersSegmentJs.d);
    static instances = instances;
    static overrides = (0, _helpersSegmentJs.a3);
    static registry = registry;
    static version = version;
    static getChart = getChart;
    static register(...items) {
        registry.add(...items);
        invalidatePlugins();
    }
    static unregister(...items) {
        registry.remove(...items);
        invalidatePlugins();
    }
    constructor(item, userConfig){
        const config = this.config = new Config(userConfig);
        const initialCanvas = getCanvas(item);
        const existingChart = getChart(initialCanvas);
        if (existingChart) throw new Error("Canvas is already in use. Chart with ID '" + existingChart.id + "'" + " must be destroyed before the canvas with ID '" + existingChart.canvas.id + "' can be reused.");
        const options = config.createResolver(config.chartOptionScopes(), this.getContext());
        this.platform = new (config.platform || _detectPlatform(initialCanvas))();
        this.platform.updateConfig(config);
        const context = this.platform.acquireContext(initialCanvas, options.aspectRatio);
        const canvas = context && context.canvas;
        const height = canvas && canvas.height;
        const width = canvas && canvas.width;
        this.id = (0, _helpersSegmentJs.ac)();
        this.ctx = context;
        this.canvas = canvas;
        this.width = width;
        this.height = height;
        this._options = options;
        this._aspectRatio = this.aspectRatio;
        this._layers = [];
        this._metasets = [];
        this._stacks = undefined;
        this.boxes = [];
        this.currentDevicePixelRatio = undefined;
        this.chartArea = undefined;
        this._active = [];
        this._lastEvent = undefined;
        this._listeners = {};
        this._responsiveListeners = undefined;
        this._sortedMetasets = [];
        this.scales = {};
        this._plugins = new PluginService();
        this.$proxies = {};
        this._hiddenIndices = {};
        this.attached = false;
        this._animationsDisabled = undefined;
        this.$context = undefined;
        this._doResize = (0, _helpersSegmentJs.ad)((mode)=>this.update(mode), options.resizeDelay || 0);
        this._dataChanges = [];
        instances[this.id] = this;
        if (!context || !canvas) {
            console.error("Failed to create chart: can't acquire context from the given item");
            return;
        }
        animator.listen(this, "complete", onAnimationsComplete);
        animator.listen(this, "progress", onAnimationProgress);
        this._initialize();
        if (this.attached) this.update();
    }
    get aspectRatio() {
        const { options: { aspectRatio , maintainAspectRatio  } , width , height , _aspectRatio  } = this;
        if (!(0, _helpersSegmentJs.k)(aspectRatio)) return aspectRatio;
        if (maintainAspectRatio && _aspectRatio) return _aspectRatio;
        return height ? width / height : null;
    }
    get data() {
        return this.config.data;
    }
    set data(data) {
        this.config.data = data;
    }
    get options() {
        return this._options;
    }
    set options(options) {
        this.config.options = options;
    }
    get registry() {
        return registry;
    }
    _initialize() {
        this.notifyPlugins("beforeInit");
        if (this.options.responsive) this.resize();
        else (0, _helpersSegmentJs.ae)(this, this.options.devicePixelRatio);
        this.bindEvents();
        this.notifyPlugins("afterInit");
        return this;
    }
    clear() {
        (0, _helpersSegmentJs.af)(this.canvas, this.ctx);
        return this;
    }
    stop() {
        animator.stop(this);
        return this;
    }
    resize(width, height) {
        if (!animator.running(this)) this._resize(width, height);
        else this._resizeBeforeDraw = {
            width,
            height
        };
    }
    _resize(width, height) {
        const options = this.options;
        const canvas = this.canvas;
        const aspectRatio = options.maintainAspectRatio && this.aspectRatio;
        const newSize = this.platform.getMaximumSize(canvas, width, height, aspectRatio);
        const newRatio = options.devicePixelRatio || this.platform.getDevicePixelRatio();
        const mode = this.width ? "resize" : "attach";
        this.width = newSize.width;
        this.height = newSize.height;
        this._aspectRatio = this.aspectRatio;
        if (!(0, _helpersSegmentJs.ae)(this, newRatio, true)) return;
        this.notifyPlugins("resize", {
            size: newSize
        });
        (0, _helpersSegmentJs.Q)(options.onResize, [
            this,
            newSize
        ], this);
        if (this.attached) {
            if (this._doResize(mode)) this.render();
        }
    }
    ensureScalesHaveIDs() {
        const options = this.options;
        const scalesOptions = options.scales || {};
        (0, _helpersSegmentJs.F)(scalesOptions, (axisOptions, axisID)=>{
            axisOptions.id = axisID;
        });
    }
    buildOrUpdateScales() {
        const options = this.options;
        const scaleOpts = options.scales;
        const scales = this.scales;
        const updated = Object.keys(scales).reduce((obj, id)=>{
            obj[id] = false;
            return obj;
        }, {});
        let items = [];
        if (scaleOpts) items = items.concat(Object.keys(scaleOpts).map((id)=>{
            const scaleOptions = scaleOpts[id];
            const axis = determineAxis(id, scaleOptions);
            const isRadial = axis === "r";
            const isHorizontal = axis === "x";
            return {
                options: scaleOptions,
                dposition: isRadial ? "chartArea" : isHorizontal ? "bottom" : "left",
                dtype: isRadial ? "radialLinear" : isHorizontal ? "category" : "linear"
            };
        }));
        (0, _helpersSegmentJs.F)(items, (item)=>{
            const scaleOptions = item.options;
            const id = scaleOptions.id;
            const axis = determineAxis(id, scaleOptions);
            const scaleType = (0, _helpersSegmentJs.v)(scaleOptions.type, item.dtype);
            if (scaleOptions.position === undefined || positionIsHorizontal(scaleOptions.position, axis) !== positionIsHorizontal(item.dposition)) scaleOptions.position = item.dposition;
            updated[id] = true;
            let scale = null;
            if (id in scales && scales[id].type === scaleType) scale = scales[id];
            else {
                const scaleClass = registry.getScale(scaleType);
                scale = new scaleClass({
                    id,
                    type: scaleType,
                    ctx: this.ctx,
                    chart: this
                });
                scales[scale.id] = scale;
            }
            scale.init(scaleOptions, options);
        });
        (0, _helpersSegmentJs.F)(updated, (hasUpdated, id)=>{
            if (!hasUpdated) delete scales[id];
        });
        (0, _helpersSegmentJs.F)(scales, (scale)=>{
            layouts.configure(this, scale, scale.options);
            layouts.addBox(this, scale);
        });
    }
    _updateMetasets() {
        const metasets = this._metasets;
        const numData = this.data.datasets.length;
        const numMeta = metasets.length;
        metasets.sort((a, b)=>a.index - b.index);
        if (numMeta > numData) {
            for(let i = numData; i < numMeta; ++i)this._destroyDatasetMeta(i);
            metasets.splice(numData, numMeta - numData);
        }
        this._sortedMetasets = metasets.slice(0).sort(compare2Level("order", "index"));
    }
    _removeUnreferencedMetasets() {
        const { _metasets: metasets , data: { datasets  }  } = this;
        if (metasets.length > datasets.length) delete this._stacks;
        metasets.forEach((meta, index)=>{
            if (datasets.filter((x)=>x === meta._dataset).length === 0) this._destroyDatasetMeta(index);
        });
    }
    buildOrUpdateControllers() {
        const newControllers = [];
        const datasets = this.data.datasets;
        let i, ilen;
        this._removeUnreferencedMetasets();
        for(i = 0, ilen = datasets.length; i < ilen; i++){
            const dataset = datasets[i];
            let meta = this.getDatasetMeta(i);
            const type = dataset.type || this.config.type;
            if (meta.type && meta.type !== type) {
                this._destroyDatasetMeta(i);
                meta = this.getDatasetMeta(i);
            }
            meta.type = type;
            meta.indexAxis = dataset.indexAxis || getIndexAxis(type, this.options);
            meta.order = dataset.order || 0;
            meta.index = i;
            meta.label = "" + dataset.label;
            meta.visible = this.isDatasetVisible(i);
            if (meta.controller) {
                meta.controller.updateIndex(i);
                meta.controller.linkScales();
            } else {
                const ControllerClass = registry.getController(type);
                const { datasetElementType , dataElementType  } = (0, _helpersSegmentJs.d).datasets[type];
                Object.assign(ControllerClass, {
                    dataElementType: registry.getElement(dataElementType),
                    datasetElementType: datasetElementType && registry.getElement(datasetElementType)
                });
                meta.controller = new ControllerClass(this, i);
                newControllers.push(meta.controller);
            }
        }
        this._updateMetasets();
        return newControllers;
    }
    _resetElements() {
        (0, _helpersSegmentJs.F)(this.data.datasets, (dataset, datasetIndex)=>{
            this.getDatasetMeta(datasetIndex).controller.reset();
        }, this);
    }
    reset() {
        this._resetElements();
        this.notifyPlugins("reset");
    }
    update(mode) {
        const config = this.config;
        config.update();
        const options = this._options = config.createResolver(config.chartOptionScopes(), this.getContext());
        const animsDisabled = this._animationsDisabled = !options.animation;
        this._updateScales();
        this._checkEventBindings();
        this._updateHiddenIndices();
        this._plugins.invalidate();
        if (this.notifyPlugins("beforeUpdate", {
            mode,
            cancelable: true
        }) === false) return;
        const newControllers = this.buildOrUpdateControllers();
        this.notifyPlugins("beforeElementsUpdate");
        let minPadding = 0;
        for(let i = 0, ilen = this.data.datasets.length; i < ilen; i++){
            const { controller  } = this.getDatasetMeta(i);
            const reset = !animsDisabled && newControllers.indexOf(controller) === -1;
            controller.buildOrUpdateElements(reset);
            minPadding = Math.max(+controller.getMaxOverflow(), minPadding);
        }
        minPadding = this._minPadding = options.layout.autoPadding ? minPadding : 0;
        this._updateLayout(minPadding);
        if (!animsDisabled) (0, _helpersSegmentJs.F)(newControllers, (controller)=>{
            controller.reset();
        });
        this._updateDatasets(mode);
        this.notifyPlugins("afterUpdate", {
            mode
        });
        this._layers.sort(compare2Level("z", "_idx"));
        const { _active , _lastEvent  } = this;
        if (_lastEvent) this._eventHandler(_lastEvent, true);
        else if (_active.length) this._updateHoverStyles(_active, _active, true);
        this.render();
    }
    _updateScales() {
        (0, _helpersSegmentJs.F)(this.scales, (scale)=>{
            layouts.removeBox(this, scale);
        });
        this.ensureScalesHaveIDs();
        this.buildOrUpdateScales();
    }
    _checkEventBindings() {
        const options = this.options;
        const existingEvents = new Set(Object.keys(this._listeners));
        const newEvents = new Set(options.events);
        if (!(0, _helpersSegmentJs.ag)(existingEvents, newEvents) || !!this._responsiveListeners !== options.responsive) {
            this.unbindEvents();
            this.bindEvents();
        }
    }
    _updateHiddenIndices() {
        const { _hiddenIndices  } = this;
        const changes = this._getUniformDataChanges() || [];
        for (const { method , start , count  } of changes){
            const move = method === "_removeElements" ? -count : count;
            moveNumericKeys(_hiddenIndices, start, move);
        }
    }
    _getUniformDataChanges() {
        const _dataChanges = this._dataChanges;
        if (!_dataChanges || !_dataChanges.length) return;
        this._dataChanges = [];
        const datasetCount = this.data.datasets.length;
        const makeSet = (idx)=>new Set(_dataChanges.filter((c)=>c[0] === idx).map((c, i)=>i + "," + c.splice(1).join(",")));
        const changeSet = makeSet(0);
        for(let i = 1; i < datasetCount; i++){
            if (!(0, _helpersSegmentJs.ag)(changeSet, makeSet(i))) return;
        }
        return Array.from(changeSet).map((c)=>c.split(",")).map((a)=>({
                method: a[1],
                start: +a[2],
                count: +a[3]
            }));
    }
    _updateLayout(minPadding) {
        if (this.notifyPlugins("beforeLayout", {
            cancelable: true
        }) === false) return;
        layouts.update(this, this.width, this.height, minPadding);
        const area = this.chartArea;
        const noArea = area.width <= 0 || area.height <= 0;
        this._layers = [];
        (0, _helpersSegmentJs.F)(this.boxes, (box)=>{
            if (noArea && box.position === "chartArea") return;
            if (box.configure) box.configure();
            this._layers.push(...box._layers());
        }, this);
        this._layers.forEach((item, index)=>{
            item._idx = index;
        });
        this.notifyPlugins("afterLayout");
    }
    _updateDatasets(mode) {
        if (this.notifyPlugins("beforeDatasetsUpdate", {
            mode,
            cancelable: true
        }) === false) return;
        for(let i = 0, ilen = this.data.datasets.length; i < ilen; ++i)this.getDatasetMeta(i).controller.configure();
        for(let i1 = 0, ilen1 = this.data.datasets.length; i1 < ilen1; ++i1)this._updateDataset(i1, (0, _helpersSegmentJs.a7)(mode) ? mode({
            datasetIndex: i1
        }) : mode);
        this.notifyPlugins("afterDatasetsUpdate", {
            mode
        });
    }
    _updateDataset(index, mode) {
        const meta = this.getDatasetMeta(index);
        const args = {
            meta,
            index,
            mode,
            cancelable: true
        };
        if (this.notifyPlugins("beforeDatasetUpdate", args) === false) return;
        meta.controller._update(mode);
        args.cancelable = false;
        this.notifyPlugins("afterDatasetUpdate", args);
    }
    render() {
        if (this.notifyPlugins("beforeRender", {
            cancelable: true
        }) === false) return;
        if (animator.has(this)) {
            if (this.attached && !animator.running(this)) animator.start(this);
        } else {
            this.draw();
            onAnimationsComplete({
                chart: this
            });
        }
    }
    draw() {
        let i;
        if (this._resizeBeforeDraw) {
            const { width , height  } = this._resizeBeforeDraw;
            this._resize(width, height);
            this._resizeBeforeDraw = null;
        }
        this.clear();
        if (this.width <= 0 || this.height <= 0) return;
        if (this.notifyPlugins("beforeDraw", {
            cancelable: true
        }) === false) return;
        const layers = this._layers;
        for(i = 0; i < layers.length && layers[i].z <= 0; ++i)layers[i].draw(this.chartArea);
        this._drawDatasets();
        for(; i < layers.length; ++i)layers[i].draw(this.chartArea);
        this.notifyPlugins("afterDraw");
    }
    _getSortedDatasetMetas(filterVisible) {
        const metasets = this._sortedMetasets;
        const result = [];
        let i, ilen;
        for(i = 0, ilen = metasets.length; i < ilen; ++i){
            const meta = metasets[i];
            if (!filterVisible || meta.visible) result.push(meta);
        }
        return result;
    }
    getSortedVisibleDatasetMetas() {
        return this._getSortedDatasetMetas(true);
    }
    _drawDatasets() {
        if (this.notifyPlugins("beforeDatasetsDraw", {
            cancelable: true
        }) === false) return;
        const metasets = this.getSortedVisibleDatasetMetas();
        for(let i = metasets.length - 1; i >= 0; --i)this._drawDataset(metasets[i]);
        this.notifyPlugins("afterDatasetsDraw");
    }
    _drawDataset(meta) {
        const ctx = this.ctx;
        const clip = meta._clip;
        const useClip = !clip.disabled;
        const area = getDatasetArea(meta) || this.chartArea;
        const args = {
            meta,
            index: meta.index,
            cancelable: true
        };
        if (this.notifyPlugins("beforeDatasetDraw", args) === false) return;
        if (useClip) (0, _helpersSegmentJs.Y)(ctx, {
            left: clip.left === false ? 0 : area.left - clip.left,
            right: clip.right === false ? this.width : area.right + clip.right,
            top: clip.top === false ? 0 : area.top - clip.top,
            bottom: clip.bottom === false ? this.height : area.bottom + clip.bottom
        });
        meta.controller.draw();
        if (useClip) (0, _helpersSegmentJs.$)(ctx);
        args.cancelable = false;
        this.notifyPlugins("afterDatasetDraw", args);
    }
    isPointInArea(point) {
        return (0, _helpersSegmentJs.C)(point, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(e, mode, options, useFinalPosition) {
        const method = Interaction.modes[mode];
        if (typeof method === "function") return method(this, e, options, useFinalPosition);
        return [];
    }
    getDatasetMeta(datasetIndex) {
        const dataset = this.data.datasets[datasetIndex];
        const metasets = this._metasets;
        let meta = metasets.filter((x)=>x && x._dataset === dataset).pop();
        if (!meta) {
            meta = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: dataset && dataset.order || 0,
                index: datasetIndex,
                _dataset: dataset,
                _parsed: [],
                _sorted: false
            };
            metasets.push(meta);
        }
        return meta;
    }
    getContext() {
        return this.$context || (this.$context = (0, _helpersSegmentJs.j)(null, {
            chart: this,
            type: "chart"
        }));
    }
    getVisibleDatasetCount() {
        return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(datasetIndex) {
        const dataset = this.data.datasets[datasetIndex];
        if (!dataset) return false;
        const meta = this.getDatasetMeta(datasetIndex);
        return typeof meta.hidden === "boolean" ? !meta.hidden : !dataset.hidden;
    }
    setDatasetVisibility(datasetIndex, visible) {
        const meta = this.getDatasetMeta(datasetIndex);
        meta.hidden = !visible;
    }
    toggleDataVisibility(index) {
        this._hiddenIndices[index] = !this._hiddenIndices[index];
    }
    getDataVisibility(index) {
        return !this._hiddenIndices[index];
    }
    _updateVisibility(datasetIndex, dataIndex, visible) {
        const mode = visible ? "show" : "hide";
        const meta = this.getDatasetMeta(datasetIndex);
        const anims = meta.controller._resolveAnimations(undefined, mode);
        if ((0, _helpersSegmentJs.h)(dataIndex)) {
            meta.data[dataIndex].hidden = !visible;
            this.update();
        } else {
            this.setDatasetVisibility(datasetIndex, visible);
            anims.update(meta, {
                visible
            });
            this.update((ctx)=>ctx.datasetIndex === datasetIndex ? mode : undefined);
        }
    }
    hide(datasetIndex, dataIndex) {
        this._updateVisibility(datasetIndex, dataIndex, false);
    }
    show(datasetIndex, dataIndex) {
        this._updateVisibility(datasetIndex, dataIndex, true);
    }
    _destroyDatasetMeta(datasetIndex) {
        const meta = this._metasets[datasetIndex];
        if (meta && meta.controller) meta.controller._destroy();
        delete this._metasets[datasetIndex];
    }
    _stop() {
        let i, ilen;
        this.stop();
        animator.remove(this);
        for(i = 0, ilen = this.data.datasets.length; i < ilen; ++i)this._destroyDatasetMeta(i);
    }
    destroy() {
        this.notifyPlugins("beforeDestroy");
        const { canvas , ctx  } = this;
        this._stop();
        this.config.clearCache();
        if (canvas) {
            this.unbindEvents();
            (0, _helpersSegmentJs.af)(canvas, ctx);
            this.platform.releaseContext(ctx);
            this.canvas = null;
            this.ctx = null;
        }
        delete instances[this.id];
        this.notifyPlugins("afterDestroy");
    }
    toBase64Image(...args) {
        return this.canvas.toDataURL(...args);
    }
    bindEvents() {
        this.bindUserEvents();
        if (this.options.responsive) this.bindResponsiveEvents();
        else this.attached = true;
    }
    bindUserEvents() {
        const listeners = this._listeners;
        const platform = this.platform;
        const _add = (type, listener)=>{
            platform.addEventListener(this, type, listener);
            listeners[type] = listener;
        };
        const listener = (e, x, y)=>{
            e.offsetX = x;
            e.offsetY = y;
            this._eventHandler(e);
        };
        (0, _helpersSegmentJs.F)(this.options.events, (type)=>_add(type, listener));
    }
    bindResponsiveEvents() {
        if (!this._responsiveListeners) this._responsiveListeners = {};
        const listeners = this._responsiveListeners;
        const platform = this.platform;
        const _add = (type, listener)=>{
            platform.addEventListener(this, type, listener);
            listeners[type] = listener;
        };
        const _remove = (type, listener)=>{
            if (listeners[type]) {
                platform.removeEventListener(this, type, listener);
                delete listeners[type];
            }
        };
        const listener = (width, height)=>{
            if (this.canvas) this.resize(width, height);
        };
        let detached;
        const attached = ()=>{
            _remove("attach", attached);
            this.attached = true;
            this.resize();
            _add("resize", listener);
            _add("detach", detached);
        };
        detached = ()=>{
            this.attached = false;
            _remove("resize", listener);
            this._stop();
            this._resize(0, 0);
            _add("attach", attached);
        };
        if (platform.isAttached(this.canvas)) attached();
        else detached();
    }
    unbindEvents() {
        (0, _helpersSegmentJs.F)(this._listeners, (listener, type)=>{
            this.platform.removeEventListener(this, type, listener);
        });
        this._listeners = {};
        (0, _helpersSegmentJs.F)(this._responsiveListeners, (listener, type)=>{
            this.platform.removeEventListener(this, type, listener);
        });
        this._responsiveListeners = undefined;
    }
    updateHoverStyle(items, mode, enabled) {
        const prefix = enabled ? "set" : "remove";
        let meta, item, i, ilen;
        if (mode === "dataset") {
            meta = this.getDatasetMeta(items[0].datasetIndex);
            meta.controller["_" + prefix + "DatasetHoverStyle"]();
        }
        for(i = 0, ilen = items.length; i < ilen; ++i){
            item = items[i];
            const controller = item && this.getDatasetMeta(item.datasetIndex).controller;
            if (controller) controller[prefix + "HoverStyle"](item.element, item.datasetIndex, item.index);
        }
    }
    getActiveElements() {
        return this._active || [];
    }
    setActiveElements(activeElements) {
        const lastActive = this._active || [];
        const active = activeElements.map(({ datasetIndex , index  })=>{
            const meta = this.getDatasetMeta(datasetIndex);
            if (!meta) throw new Error("No dataset found at index " + datasetIndex);
            return {
                datasetIndex,
                element: meta.data[index],
                index
            };
        });
        const changed = !(0, _helpersSegmentJs.ah)(active, lastActive);
        if (changed) {
            this._active = active;
            this._lastEvent = null;
            this._updateHoverStyles(active, lastActive);
        }
    }
    notifyPlugins(hook, args, filter) {
        return this._plugins.notify(this, hook, args, filter);
    }
    isPluginEnabled(pluginId) {
        return this._plugins._cache.filter((p)=>p.plugin.id === pluginId).length === 1;
    }
    _updateHoverStyles(active, lastActive, replay) {
        const hoverOptions = this.options.hover;
        const diff = (a, b)=>a.filter((x)=>!b.some((y)=>x.datasetIndex === y.datasetIndex && x.index === y.index));
        const deactivated = diff(lastActive, active);
        const activated = replay ? active : diff(active, lastActive);
        if (deactivated.length) this.updateHoverStyle(deactivated, hoverOptions.mode, false);
        if (activated.length && hoverOptions.mode) this.updateHoverStyle(activated, hoverOptions.mode, true);
    }
    _eventHandler(e, replay) {
        const args = {
            event: e,
            replay,
            cancelable: true,
            inChartArea: this.isPointInArea(e)
        };
        const eventFilter = (plugin)=>(plugin.options.events || this.options.events).includes(e.native.type);
        if (this.notifyPlugins("beforeEvent", args, eventFilter) === false) return;
        const changed = this._handleEvent(e, replay, args.inChartArea);
        args.cancelable = false;
        this.notifyPlugins("afterEvent", args, eventFilter);
        if (changed || args.changed) this.render();
        return this;
    }
    _handleEvent(e, replay, inChartArea) {
        const { _active: lastActive = [] , options  } = this;
        const useFinalPosition = replay;
        const active = this._getActiveElements(e, lastActive, inChartArea, useFinalPosition);
        const isClick = (0, _helpersSegmentJs.ai)(e);
        const lastEvent = determineLastEvent(e, this._lastEvent, inChartArea, isClick);
        if (inChartArea) {
            this._lastEvent = null;
            (0, _helpersSegmentJs.Q)(options.onHover, [
                e,
                active,
                this
            ], this);
            if (isClick) (0, _helpersSegmentJs.Q)(options.onClick, [
                e,
                active,
                this
            ], this);
        }
        const changed = !(0, _helpersSegmentJs.ah)(active, lastActive);
        if (changed || replay) {
            this._active = active;
            this._updateHoverStyles(active, lastActive, replay);
        }
        this._lastEvent = lastEvent;
        return changed;
    }
    _getActiveElements(e, lastActive, inChartArea, useFinalPosition) {
        if (e.type === "mouseout") return [];
        if (!inChartArea) return lastActive;
        const hoverOptions = this.options.hover;
        return this.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions, useFinalPosition);
    }
}
function invalidatePlugins() {
    return (0, _helpersSegmentJs.F)(Chart.instances, (chart)=>chart._plugins.invalidate());
}
var Chart$1 = Chart;
function clipArc(ctx, element, endAngle) {
    const { startAngle , pixelMargin , x , y , outerRadius , innerRadius  } = element;
    let angleMargin = pixelMargin / outerRadius;
    // Draw an inner border by clipping the arc and drawing a double-width border
    // Enlarge the clipping arc by 0.33 pixels to eliminate glitches between borders
    ctx.beginPath();
    ctx.arc(x, y, outerRadius, startAngle - angleMargin, endAngle + angleMargin);
    if (innerRadius > pixelMargin) {
        angleMargin = pixelMargin / innerRadius;
        ctx.arc(x, y, innerRadius, endAngle + angleMargin, startAngle - angleMargin, true);
    } else ctx.arc(x, y, pixelMargin, endAngle + (0, _helpersSegmentJs.H), startAngle - (0, _helpersSegmentJs.H));
    ctx.closePath();
    ctx.clip();
}
function toRadiusCorners(value) {
    return (0, _helpersSegmentJs.ak)(value, [
        "outerStart",
        "outerEnd",
        "innerStart",
        "innerEnd"
    ]);
}
/**
 * Parse border radius from the provided options
 */ function parseBorderRadius$1(arc, innerRadius, outerRadius, angleDelta) {
    const o = toRadiusCorners(arc.options.borderRadius);
    const halfThickness = (outerRadius - innerRadius) / 2;
    const innerLimit = Math.min(halfThickness, angleDelta * innerRadius / 2);
    // Outer limits are complicated. We want to compute the available angular distance at
    // a radius of outerRadius - borderRadius because for small angular distances, this term limits.
    // We compute at r = outerRadius - borderRadius because this circle defines the center of the border corners.
    //
    // If the borderRadius is large, that value can become negative.
    // This causes the outer borders to lose their radius entirely, which is rather unexpected. To solve that, if borderRadius > outerRadius
    // we know that the thickness term will dominate and compute the limits at that point
    const computeOuterLimit = (val)=>{
        const outerArcLimit = (outerRadius - Math.min(halfThickness, val)) * angleDelta / 2;
        return (0, _helpersSegmentJs.S)(val, 0, Math.min(halfThickness, outerArcLimit));
    };
    return {
        outerStart: computeOuterLimit(o.outerStart),
        outerEnd: computeOuterLimit(o.outerEnd),
        innerStart: (0, _helpersSegmentJs.S)(o.innerStart, 0, innerLimit),
        innerEnd: (0, _helpersSegmentJs.S)(o.innerEnd, 0, innerLimit)
    };
}
/**
 * Convert (r, 𝜃) to (x, y)
 */ function rThetaToXY(r, theta, x, y) {
    return {
        x: x + r * Math.cos(theta),
        y: y + r * Math.sin(theta)
    };
}
/**
 * Path the arc, respecting border radius by separating into left and right halves.
 *
 *   Start      End
 *
 *    1--->a--->2    Outer
 *   /           \
 *   8           3
 *   |           |
 *   |           |
 *   7           4
 *   \           /
 *    6<---b<---5    Inner
 */ function pathArc(ctx, element, offset, spacing, end, circular) {
    const { x , y , startAngle: start , pixelMargin , innerRadius: innerR  } = element;
    const outerRadius = Math.max(element.outerRadius + spacing + offset - pixelMargin, 0);
    const innerRadius = innerR > 0 ? innerR + spacing + offset + pixelMargin : 0;
    let spacingOffset = 0;
    const alpha = end - start;
    if (spacing) {
        // When spacing is present, it is the same for all items
        // So we adjust the start and end angle of the arc such that
        // the distance is the same as it would be without the spacing
        const noSpacingInnerRadius = innerR > 0 ? innerR - spacing : 0;
        const noSpacingOuterRadius = outerRadius > 0 ? outerRadius - spacing : 0;
        const avNogSpacingRadius = (noSpacingInnerRadius + noSpacingOuterRadius) / 2;
        const adjustedAngle = avNogSpacingRadius !== 0 ? alpha * avNogSpacingRadius / (avNogSpacingRadius + spacing) : alpha;
        spacingOffset = (alpha - adjustedAngle) / 2;
    }
    const beta = Math.max(0.001, alpha * outerRadius - offset / (0, _helpersSegmentJs.P)) / outerRadius;
    const angleOffset = (alpha - beta) / 2;
    const startAngle = start + angleOffset + spacingOffset;
    const endAngle = end - angleOffset - spacingOffset;
    const { outerStart , outerEnd , innerStart , innerEnd  } = parseBorderRadius$1(element, innerRadius, outerRadius, endAngle - startAngle);
    const outerStartAdjustedRadius = outerRadius - outerStart;
    const outerEndAdjustedRadius = outerRadius - outerEnd;
    const outerStartAdjustedAngle = startAngle + outerStart / outerStartAdjustedRadius;
    const outerEndAdjustedAngle = endAngle - outerEnd / outerEndAdjustedRadius;
    const innerStartAdjustedRadius = innerRadius + innerStart;
    const innerEndAdjustedRadius = innerRadius + innerEnd;
    const innerStartAdjustedAngle = startAngle + innerStart / innerStartAdjustedRadius;
    const innerEndAdjustedAngle = endAngle - innerEnd / innerEndAdjustedRadius;
    ctx.beginPath();
    if (circular) {
        // The first arc segments from point 1 to point a to point 2
        const outerMidAdjustedAngle = (outerStartAdjustedAngle + outerEndAdjustedAngle) / 2;
        ctx.arc(x, y, outerRadius, outerStartAdjustedAngle, outerMidAdjustedAngle);
        ctx.arc(x, y, outerRadius, outerMidAdjustedAngle, outerEndAdjustedAngle);
        // The corner segment from point 2 to point 3
        if (outerEnd > 0) {
            const pCenter = rThetaToXY(outerEndAdjustedRadius, outerEndAdjustedAngle, x, y);
            ctx.arc(pCenter.x, pCenter.y, outerEnd, outerEndAdjustedAngle, endAngle + (0, _helpersSegmentJs.H));
        }
        // The line from point 3 to point 4
        const p4 = rThetaToXY(innerEndAdjustedRadius, endAngle, x, y);
        ctx.lineTo(p4.x, p4.y);
        // The corner segment from point 4 to point 5
        if (innerEnd > 0) {
            const pCenter1 = rThetaToXY(innerEndAdjustedRadius, innerEndAdjustedAngle, x, y);
            ctx.arc(pCenter1.x, pCenter1.y, innerEnd, endAngle + (0, _helpersSegmentJs.H), innerEndAdjustedAngle + Math.PI);
        }
        // The inner arc from point 5 to point b to point 6
        const innerMidAdjustedAngle = (endAngle - innerEnd / innerRadius + (startAngle + innerStart / innerRadius)) / 2;
        ctx.arc(x, y, innerRadius, endAngle - innerEnd / innerRadius, innerMidAdjustedAngle, true);
        ctx.arc(x, y, innerRadius, innerMidAdjustedAngle, startAngle + innerStart / innerRadius, true);
        // The corner segment from point 6 to point 7
        if (innerStart > 0) {
            const pCenter2 = rThetaToXY(innerStartAdjustedRadius, innerStartAdjustedAngle, x, y);
            ctx.arc(pCenter2.x, pCenter2.y, innerStart, innerStartAdjustedAngle + Math.PI, startAngle - (0, _helpersSegmentJs.H));
        }
        // The line from point 7 to point 8
        const p8 = rThetaToXY(outerStartAdjustedRadius, startAngle, x, y);
        ctx.lineTo(p8.x, p8.y);
        // The corner segment from point 8 to point 1
        if (outerStart > 0) {
            const pCenter3 = rThetaToXY(outerStartAdjustedRadius, outerStartAdjustedAngle, x, y);
            ctx.arc(pCenter3.x, pCenter3.y, outerStart, startAngle - (0, _helpersSegmentJs.H), outerStartAdjustedAngle);
        }
    } else {
        ctx.moveTo(x, y);
        const outerStartX = Math.cos(outerStartAdjustedAngle) * outerRadius + x;
        const outerStartY = Math.sin(outerStartAdjustedAngle) * outerRadius + y;
        ctx.lineTo(outerStartX, outerStartY);
        const outerEndX = Math.cos(outerEndAdjustedAngle) * outerRadius + x;
        const outerEndY = Math.sin(outerEndAdjustedAngle) * outerRadius + y;
        ctx.lineTo(outerEndX, outerEndY);
    }
    ctx.closePath();
}
function drawArc(ctx, element, offset, spacing, circular) {
    const { fullCircles , startAngle , circumference  } = element;
    let endAngle = element.endAngle;
    if (fullCircles) {
        pathArc(ctx, element, offset, spacing, endAngle, circular);
        for(let i = 0; i < fullCircles; ++i)ctx.fill();
        if (!isNaN(circumference)) endAngle = startAngle + (circumference % (0, _helpersSegmentJs.T) || (0, _helpersSegmentJs.T));
    }
    pathArc(ctx, element, offset, spacing, endAngle, circular);
    ctx.fill();
    return endAngle;
}
function drawBorder(ctx, element, offset, spacing, circular) {
    const { fullCircles , startAngle , circumference , options  } = element;
    const { borderWidth , borderJoinStyle  } = options;
    const inner = options.borderAlign === "inner";
    if (!borderWidth) return;
    if (inner) {
        ctx.lineWidth = borderWidth * 2;
        ctx.lineJoin = borderJoinStyle || "round";
    } else {
        ctx.lineWidth = borderWidth;
        ctx.lineJoin = borderJoinStyle || "bevel";
    }
    let endAngle = element.endAngle;
    if (fullCircles) {
        pathArc(ctx, element, offset, spacing, endAngle, circular);
        for(let i = 0; i < fullCircles; ++i)ctx.stroke();
        if (!isNaN(circumference)) endAngle = startAngle + (circumference % (0, _helpersSegmentJs.T) || (0, _helpersSegmentJs.T));
    }
    if (inner) clipArc(ctx, element, endAngle);
    if (!fullCircles) {
        pathArc(ctx, element, offset, spacing, endAngle, circular);
        ctx.stroke();
    }
}
class ArcElement extends Element {
    static id = "arc";
    static defaults = {
        borderAlign: "center",
        borderColor: "#fff",
        borderJoinStyle: undefined,
        borderRadius: 0,
        borderWidth: 2,
        offset: 0,
        spacing: 0,
        angle: undefined,
        circular: true
    };
    static defaultRoutes = {
        backgroundColor: "backgroundColor"
    };
    constructor(cfg){
        super();
        this.options = undefined;
        this.circumference = undefined;
        this.startAngle = undefined;
        this.endAngle = undefined;
        this.innerRadius = undefined;
        this.outerRadius = undefined;
        this.pixelMargin = 0;
        this.fullCircles = 0;
        if (cfg) Object.assign(this, cfg);
    }
    inRange(chartX, chartY, useFinalPosition) {
        const point = this.getProps([
            "x",
            "y"
        ], useFinalPosition);
        const { angle , distance  } = (0, _helpersSegmentJs.D)(point, {
            x: chartX,
            y: chartY
        });
        const { startAngle , endAngle , innerRadius , outerRadius , circumference  } = this.getProps([
            "startAngle",
            "endAngle",
            "innerRadius",
            "outerRadius",
            "circumference"
        ], useFinalPosition);
        const rAdjust = this.options.spacing / 2;
        const _circumference = (0, _helpersSegmentJs.v)(circumference, endAngle - startAngle);
        const betweenAngles = _circumference >= (0, _helpersSegmentJs.T) || (0, _helpersSegmentJs.p)(angle, startAngle, endAngle);
        const withinRadius = (0, _helpersSegmentJs.aj)(distance, innerRadius + rAdjust, outerRadius + rAdjust);
        return betweenAngles && withinRadius;
    }
    getCenterPoint(useFinalPosition) {
        const { x , y , startAngle , endAngle , innerRadius , outerRadius  } = this.getProps([
            "x",
            "y",
            "startAngle",
            "endAngle",
            "innerRadius",
            "outerRadius",
            "circumference"
        ], useFinalPosition);
        const { offset , spacing  } = this.options;
        const halfAngle = (startAngle + endAngle) / 2;
        const halfRadius = (innerRadius + outerRadius + spacing + offset) / 2;
        return {
            x: x + Math.cos(halfAngle) * halfRadius,
            y: y + Math.sin(halfAngle) * halfRadius
        };
    }
    tooltipPosition(useFinalPosition) {
        return this.getCenterPoint(useFinalPosition);
    }
    draw(ctx) {
        const { options , circumference  } = this;
        const offset = (options.offset || 0) / 4;
        const spacing = (options.spacing || 0) / 2;
        const circular = options.circular;
        this.pixelMargin = options.borderAlign === "inner" ? 0.33 : 0;
        this.fullCircles = circumference > (0, _helpersSegmentJs.T) ? Math.floor(circumference / (0, _helpersSegmentJs.T)) : 0;
        if (circumference === 0 || this.innerRadius < 0 || this.outerRadius < 0) return;
        ctx.save();
        const halfAngle = (this.startAngle + this.endAngle) / 2;
        ctx.translate(Math.cos(halfAngle) * offset, Math.sin(halfAngle) * offset);
        const fix = 1 - Math.sin(Math.min((0, _helpersSegmentJs.P), circumference || 0));
        const radiusOffset = offset * fix;
        ctx.fillStyle = options.backgroundColor;
        ctx.strokeStyle = options.borderColor;
        drawArc(ctx, this, radiusOffset, spacing, circular);
        drawBorder(ctx, this, radiusOffset, spacing, circular);
        ctx.restore();
    }
}
function setStyle(ctx, options, style = options) {
    ctx.lineCap = (0, _helpersSegmentJs.v)(style.borderCapStyle, options.borderCapStyle);
    ctx.setLineDash((0, _helpersSegmentJs.v)(style.borderDash, options.borderDash));
    ctx.lineDashOffset = (0, _helpersSegmentJs.v)(style.borderDashOffset, options.borderDashOffset);
    ctx.lineJoin = (0, _helpersSegmentJs.v)(style.borderJoinStyle, options.borderJoinStyle);
    ctx.lineWidth = (0, _helpersSegmentJs.v)(style.borderWidth, options.borderWidth);
    ctx.strokeStyle = (0, _helpersSegmentJs.v)(style.borderColor, options.borderColor);
}
function lineTo(ctx, previous, target) {
    ctx.lineTo(target.x, target.y);
}
function getLineMethod(options) {
    if (options.stepped) return 0, _helpersSegmentJs.ar;
    if (options.tension || options.cubicInterpolationMode === "monotone") return 0, _helpersSegmentJs.as;
    return lineTo;
}
function pathVars(points, segment, params = {}) {
    const count = points.length;
    const { start: paramsStart = 0 , end: paramsEnd = count - 1  } = params;
    const { start: segmentStart , end: segmentEnd  } = segment;
    const start = Math.max(paramsStart, segmentStart);
    const end = Math.min(paramsEnd, segmentEnd);
    const outside = paramsStart < segmentStart && paramsEnd < segmentStart || paramsStart > segmentEnd && paramsEnd > segmentEnd;
    return {
        count,
        start,
        loop: segment.loop,
        ilen: end < start && !outside ? count + end - start : end - start
    };
}
function pathSegment(ctx, line, segment, params) {
    const { points , options  } = line;
    const { count , start , loop , ilen  } = pathVars(points, segment, params);
    const lineMethod = getLineMethod(options);
    let { move =true , reverse  } = params || {};
    let i, point, prev;
    for(i = 0; i <= ilen; ++i){
        point = points[(start + (reverse ? ilen - i : i)) % count];
        if (point.skip) continue;
        else if (move) {
            ctx.moveTo(point.x, point.y);
            move = false;
        } else lineMethod(ctx, prev, point, reverse, options.stepped);
        prev = point;
    }
    if (loop) {
        point = points[(start + (reverse ? ilen : 0)) % count];
        lineMethod(ctx, prev, point, reverse, options.stepped);
    }
    return !!loop;
}
function fastPathSegment(ctx, line, segment, params) {
    const points = line.points;
    const { count , start , ilen  } = pathVars(points, segment, params);
    const { move =true , reverse  } = params || {};
    let avgX = 0;
    let countX = 0;
    let i, point, prevX, minY, maxY, lastY;
    const pointIndex = (index)=>(start + (reverse ? ilen - index : index)) % count;
    const drawX = ()=>{
        if (minY !== maxY) {
            ctx.lineTo(avgX, maxY);
            ctx.lineTo(avgX, minY);
            ctx.lineTo(avgX, lastY);
        }
    };
    if (move) {
        point = points[pointIndex(0)];
        ctx.moveTo(point.x, point.y);
    }
    for(i = 0; i <= ilen; ++i){
        point = points[pointIndex(i)];
        if (point.skip) continue;
        const x = point.x;
        const y = point.y;
        const truncX = x | 0;
        if (truncX === prevX) {
            if (y < minY) minY = y;
            else if (y > maxY) maxY = y;
            avgX = (countX * avgX + x) / ++countX;
        } else {
            drawX();
            ctx.lineTo(x, y);
            prevX = truncX;
            countX = 0;
            minY = maxY = y;
        }
        lastY = y;
    }
    drawX();
}
function _getSegmentMethod(line) {
    const opts = line.options;
    const borderDash = opts.borderDash && opts.borderDash.length;
    const useFastPath = !line._decimated && !line._loop && !opts.tension && opts.cubicInterpolationMode !== "monotone" && !opts.stepped && !borderDash;
    return useFastPath ? fastPathSegment : pathSegment;
}
function _getInterpolationMethod(options) {
    if (options.stepped) return 0, _helpersSegmentJs.ao;
    if (options.tension || options.cubicInterpolationMode === "monotone") return 0, _helpersSegmentJs.ap;
    return 0, _helpersSegmentJs.aq;
}
function strokePathWithCache(ctx, line, start, count) {
    let path = line._path;
    if (!path) {
        path = line._path = new Path2D();
        if (line.path(path, start, count)) path.closePath();
    }
    setStyle(ctx, line.options);
    ctx.stroke(path);
}
function strokePathDirect(ctx, line, start, count) {
    const { segments , options  } = line;
    const segmentMethod = _getSegmentMethod(line);
    for (const segment of segments){
        setStyle(ctx, options, segment.style);
        ctx.beginPath();
        if (segmentMethod(ctx, line, segment, {
            start,
            end: start + count - 1
        })) ctx.closePath();
        ctx.stroke();
    }
}
const usePath2D = typeof Path2D === "function";
function draw(ctx, line, start, count) {
    if (usePath2D && !line.options.segment) strokePathWithCache(ctx, line, start, count);
    else strokePathDirect(ctx, line, start, count);
}
class LineElement extends Element {
    static id = "line";
    static defaults = {
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: "miter",
        borderWidth: 3,
        capBezierPoints: true,
        cubicInterpolationMode: "default",
        fill: false,
        spanGaps: false,
        stepped: false,
        tension: 0
    };
    static defaultRoutes = {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor"
    };
    static descriptors = {
        _scriptable: true,
        _indexable: (name1)=>name1 !== "borderDash" && name1 !== "fill"
    };
    constructor(cfg){
        super();
        this.animated = true;
        this.options = undefined;
        this._chart = undefined;
        this._loop = undefined;
        this._fullLoop = undefined;
        this._path = undefined;
        this._points = undefined;
        this._segments = undefined;
        this._decimated = false;
        this._pointsUpdated = false;
        this._datasetIndex = undefined;
        if (cfg) Object.assign(this, cfg);
    }
    updateControlPoints(chartArea, indexAxis) {
        const options = this.options;
        if ((options.tension || options.cubicInterpolationMode === "monotone") && !options.stepped && !this._pointsUpdated) {
            const loop = options.spanGaps ? this._loop : this._fullLoop;
            (0, _helpersSegmentJs.al)(this._points, options, chartArea, loop, indexAxis);
            this._pointsUpdated = true;
        }
    }
    set points(points) {
        this._points = points;
        delete this._segments;
        delete this._path;
        this._pointsUpdated = false;
    }
    get points() {
        return this._points;
    }
    get segments() {
        return this._segments || (this._segments = (0, _helpersSegmentJs.am)(this, this.options.segment));
    }
    first() {
        const segments = this.segments;
        const points = this.points;
        return segments.length && points[segments[0].start];
    }
    last() {
        const segments = this.segments;
        const points = this.points;
        const count = segments.length;
        return count && points[segments[count - 1].end];
    }
    interpolate(point, property) {
        const options = this.options;
        const value = point[property];
        const points = this.points;
        const segments = (0, _helpersSegmentJs.an)(this, {
            property,
            start: value,
            end: value
        });
        if (!segments.length) return;
        const result = [];
        const _interpolate = _getInterpolationMethod(options);
        let i, ilen;
        for(i = 0, ilen = segments.length; i < ilen; ++i){
            const { start , end  } = segments[i];
            const p1 = points[start];
            const p2 = points[end];
            if (p1 === p2) {
                result.push(p1);
                continue;
            }
            const t = Math.abs((value - p1[property]) / (p2[property] - p1[property]));
            const interpolated = _interpolate(p1, p2, t, options.stepped);
            interpolated[property] = point[property];
            result.push(interpolated);
        }
        return result.length === 1 ? result[0] : result;
    }
    pathSegment(ctx, segment, params) {
        const segmentMethod = _getSegmentMethod(this);
        return segmentMethod(ctx, this, segment, params);
    }
    path(ctx, start, count) {
        const segments = this.segments;
        const segmentMethod = _getSegmentMethod(this);
        let loop = this._loop;
        start = start || 0;
        count = count || this.points.length - start;
        for (const segment of segments)loop &= segmentMethod(ctx, this, segment, {
            start,
            end: start + count - 1
        });
        return !!loop;
    }
    draw(ctx, chartArea, start, count) {
        const options = this.options || {};
        const points = this.points || [];
        if (points.length && options.borderWidth) {
            ctx.save();
            draw(ctx, this, start, count);
            ctx.restore();
        }
        if (this.animated) {
            this._pointsUpdated = false;
            this._path = undefined;
        }
    }
}
function inRange$1(el, pos, axis, useFinalPosition) {
    const options = el.options;
    const { [axis]: value  } = el.getProps([
        axis
    ], useFinalPosition);
    return Math.abs(pos - value) < options.radius + options.hitRadius;
}
class PointElement extends Element {
    static id = "point";
    /**
   * @type {any}
   */ static defaults = {
        borderWidth: 1,
        hitRadius: 1,
        hoverBorderWidth: 1,
        hoverRadius: 4,
        pointStyle: "circle",
        radius: 3,
        rotation: 0
    };
    /**
   * @type {any}
   */ static defaultRoutes = {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor"
    };
    constructor(cfg){
        super();
        this.options = undefined;
        this.parsed = undefined;
        this.skip = undefined;
        this.stop = undefined;
        if (cfg) Object.assign(this, cfg);
    }
    inRange(mouseX, mouseY, useFinalPosition) {
        const options = this.options;
        const { x , y  } = this.getProps([
            "x",
            "y"
        ], useFinalPosition);
        return Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2) < Math.pow(options.hitRadius + options.radius, 2);
    }
    inXRange(mouseX, useFinalPosition) {
        return inRange$1(this, mouseX, "x", useFinalPosition);
    }
    inYRange(mouseY, useFinalPosition) {
        return inRange$1(this, mouseY, "y", useFinalPosition);
    }
    getCenterPoint(useFinalPosition) {
        const { x , y  } = this.getProps([
            "x",
            "y"
        ], useFinalPosition);
        return {
            x,
            y
        };
    }
    size(options) {
        options = options || this.options || {};
        let radius = options.radius || 0;
        radius = Math.max(radius, radius && options.hoverRadius || 0);
        const borderWidth = radius && options.borderWidth || 0;
        return (radius + borderWidth) * 2;
    }
    draw(ctx, area) {
        const options = this.options;
        if (this.skip || options.radius < 0.1 || !(0, _helpersSegmentJs.C)(this, area, this.size(options) / 2)) return;
        ctx.strokeStyle = options.borderColor;
        ctx.lineWidth = options.borderWidth;
        ctx.fillStyle = options.backgroundColor;
        (0, _helpersSegmentJs.at)(ctx, options, this.x, this.y);
    }
    getRange() {
        const options = this.options || {};
        // @ts-expect-error Fallbacks should never be hit in practice
        return options.radius + options.hitRadius;
    }
}
function getBarBounds(bar, useFinalPosition) {
    const { x , y , base , width , height  } = bar.getProps([
        "x",
        "y",
        "base",
        "width",
        "height"
    ], useFinalPosition);
    let left, right, top, bottom, half;
    if (bar.horizontal) {
        half = height / 2;
        left = Math.min(x, base);
        right = Math.max(x, base);
        top = y - half;
        bottom = y + half;
    } else {
        half = width / 2;
        left = x - half;
        right = x + half;
        top = Math.min(y, base);
        bottom = Math.max(y, base);
    }
    return {
        left,
        top,
        right,
        bottom
    };
}
function skipOrLimit(skip, value, min, max) {
    return skip ? 0 : (0, _helpersSegmentJs.S)(value, min, max);
}
function parseBorderWidth(bar, maxW, maxH) {
    const value = bar.options.borderWidth;
    const skip = bar.borderSkipped;
    const o = (0, _helpersSegmentJs.av)(value);
    return {
        t: skipOrLimit(skip.top, o.top, 0, maxH),
        r: skipOrLimit(skip.right, o.right, 0, maxW),
        b: skipOrLimit(skip.bottom, o.bottom, 0, maxH),
        l: skipOrLimit(skip.left, o.left, 0, maxW)
    };
}
function parseBorderRadius(bar, maxW, maxH) {
    const { enableBorderRadius  } = bar.getProps([
        "enableBorderRadius"
    ]);
    const value = bar.options.borderRadius;
    const o = (0, _helpersSegmentJs.aw)(value);
    const maxR = Math.min(maxW, maxH);
    const skip = bar.borderSkipped;
    const enableBorder = enableBorderRadius || (0, _helpersSegmentJs.i)(value);
    return {
        topLeft: skipOrLimit(!enableBorder || skip.top || skip.left, o.topLeft, 0, maxR),
        topRight: skipOrLimit(!enableBorder || skip.top || skip.right, o.topRight, 0, maxR),
        bottomLeft: skipOrLimit(!enableBorder || skip.bottom || skip.left, o.bottomLeft, 0, maxR),
        bottomRight: skipOrLimit(!enableBorder || skip.bottom || skip.right, o.bottomRight, 0, maxR)
    };
}
function boundingRects(bar) {
    const bounds = getBarBounds(bar);
    const width = bounds.right - bounds.left;
    const height = bounds.bottom - bounds.top;
    const border = parseBorderWidth(bar, width / 2, height / 2);
    const radius = parseBorderRadius(bar, width / 2, height / 2);
    return {
        outer: {
            x: bounds.left,
            y: bounds.top,
            w: width,
            h: height,
            radius
        },
        inner: {
            x: bounds.left + border.l,
            y: bounds.top + border.t,
            w: width - border.l - border.r,
            h: height - border.t - border.b,
            radius: {
                topLeft: Math.max(0, radius.topLeft - Math.max(border.t, border.l)),
                topRight: Math.max(0, radius.topRight - Math.max(border.t, border.r)),
                bottomLeft: Math.max(0, radius.bottomLeft - Math.max(border.b, border.l)),
                bottomRight: Math.max(0, radius.bottomRight - Math.max(border.b, border.r))
            }
        }
    };
}
function inRange(bar, x, y, useFinalPosition) {
    const skipX = x === null;
    const skipY = y === null;
    const skipBoth = skipX && skipY;
    const bounds = bar && !skipBoth && getBarBounds(bar, useFinalPosition);
    return bounds && (skipX || (0, _helpersSegmentJs.aj)(x, bounds.left, bounds.right)) && (skipY || (0, _helpersSegmentJs.aj)(y, bounds.top, bounds.bottom));
}
function hasRadius(radius) {
    return radius.topLeft || radius.topRight || radius.bottomLeft || radius.bottomRight;
}
function addNormalRectPath(ctx, rect) {
    ctx.rect(rect.x, rect.y, rect.w, rect.h);
}
function inflateRect(rect, amount, refRect = {}) {
    const x = rect.x !== refRect.x ? -amount : 0;
    const y = rect.y !== refRect.y ? -amount : 0;
    const w = (rect.x + rect.w !== refRect.x + refRect.w ? amount : 0) - x;
    const h = (rect.y + rect.h !== refRect.y + refRect.h ? amount : 0) - y;
    return {
        x: rect.x + x,
        y: rect.y + y,
        w: rect.w + w,
        h: rect.h + h,
        radius: rect.radius
    };
}
class BarElement extends Element {
    static id = "bar";
    static defaults = {
        borderSkipped: "start",
        borderWidth: 0,
        borderRadius: 0,
        inflateAmount: "auto",
        pointStyle: undefined
    };
    static defaultRoutes = {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor"
    };
    constructor(cfg){
        super();
        this.options = undefined;
        this.horizontal = undefined;
        this.base = undefined;
        this.width = undefined;
        this.height = undefined;
        this.inflateAmount = undefined;
        if (cfg) Object.assign(this, cfg);
    }
    draw(ctx) {
        const { inflateAmount , options: { borderColor , backgroundColor  }  } = this;
        const { inner , outer  } = boundingRects(this);
        const addRectPath = hasRadius(outer.radius) ? (0, _helpersSegmentJs.au) : addNormalRectPath;
        ctx.save();
        if (outer.w !== inner.w || outer.h !== inner.h) {
            ctx.beginPath();
            addRectPath(ctx, inflateRect(outer, inflateAmount, inner));
            ctx.clip();
            addRectPath(ctx, inflateRect(inner, -inflateAmount, outer));
            ctx.fillStyle = borderColor;
            ctx.fill("evenodd");
        }
        ctx.beginPath();
        addRectPath(ctx, inflateRect(inner, inflateAmount));
        ctx.fillStyle = backgroundColor;
        ctx.fill();
        ctx.restore();
    }
    inRange(mouseX, mouseY, useFinalPosition) {
        return inRange(this, mouseX, mouseY, useFinalPosition);
    }
    inXRange(mouseX, useFinalPosition) {
        return inRange(this, mouseX, null, useFinalPosition);
    }
    inYRange(mouseY, useFinalPosition) {
        return inRange(this, null, mouseY, useFinalPosition);
    }
    getCenterPoint(useFinalPosition) {
        const { x , y , base , horizontal  } = this.getProps([
            "x",
            "y",
            "base",
            "horizontal"
        ], useFinalPosition);
        return {
            x: horizontal ? (x + base) / 2 : x,
            y: horizontal ? y : (y + base) / 2
        };
    }
    getRange(axis) {
        return axis === "x" ? this.width / 2 : this.height / 2;
    }
}
var elements = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    ArcElement: ArcElement,
    LineElement: LineElement,
    PointElement: PointElement,
    BarElement: BarElement
});
const BORDER_COLORS = [
    "rgb(54, 162, 235)",
    "rgb(255, 99, 132)",
    "rgb(255, 159, 64)",
    "rgb(255, 205, 86)",
    "rgb(75, 192, 192)",
    "rgb(153, 102, 255)",
    "rgb(201, 203, 207)" // grey
];
// Border colors with 50% transparency
const BACKGROUND_COLORS = /* #__PURE__ */ BORDER_COLORS.map((color)=>color.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
function getBorderColor(i) {
    return BORDER_COLORS[i % BORDER_COLORS.length];
}
function getBackgroundColor(i) {
    return BACKGROUND_COLORS[i % BACKGROUND_COLORS.length];
}
function createDefaultDatasetColorizer() {
    return (dataset, i)=>{
        dataset.borderColor = getBorderColor(i);
        dataset.backgroundColor = getBackgroundColor(i);
    };
}
function createDoughnutDatasetColorizer() {
    let i = 0;
    return (dataset)=>{
        dataset.backgroundColor = dataset.data.map(()=>getBorderColor(i++));
    };
}
function createPolarAreaDatasetColorizer() {
    let i = 0;
    return (dataset)=>{
        dataset.backgroundColor = dataset.data.map(()=>getBackgroundColor(i++));
    };
}
function getColorizer(type) {
    if (type === "doughnut" || type === "pie") return createDoughnutDatasetColorizer();
    else if (type === "polarArea") return createPolarAreaDatasetColorizer();
    return createDefaultDatasetColorizer();
}
function containsColorsDefinitions(descriptors) {
    let k;
    for(k in descriptors){
        if (descriptors[k].borderColor || descriptors[k].backgroundColor) return true;
    }
    return false;
}
var plugin_colors = {
    id: "colors",
    defaults: {
        enabled: true
    },
    beforeLayout (chart, _args, options) {
        if (!options.enabled) return;
        const { type , options: { elements  } , data: { datasets  }  } = chart.config;
        if (containsColorsDefinitions(datasets) || elements && containsColorsDefinitions(elements)) return;
        const colorizer = getColorizer(type);
        datasets.forEach(colorizer);
    }
};
function lttbDecimation(data, start, count, availableWidth, options) {
    const samples = options.samples || availableWidth;
    if (samples >= count) return data.slice(start, start + count);
    const decimated = [];
    const bucketWidth = (count - 2) / (samples - 2);
    let sampledIndex = 0;
    const endIndex = start + count - 1;
    let a = start;
    let i, maxAreaPoint, maxArea, area, nextA;
    decimated[sampledIndex++] = data[a];
    for(i = 0; i < samples - 2; i++){
        let avgX = 0;
        let avgY = 0;
        let j;
        const avgRangeStart = Math.floor((i + 1) * bucketWidth) + 1 + start;
        const avgRangeEnd = Math.min(Math.floor((i + 2) * bucketWidth) + 1, count) + start;
        const avgRangeLength = avgRangeEnd - avgRangeStart;
        for(j = avgRangeStart; j < avgRangeEnd; j++){
            avgX += data[j].x;
            avgY += data[j].y;
        }
        avgX /= avgRangeLength;
        avgY /= avgRangeLength;
        const rangeOffs = Math.floor(i * bucketWidth) + 1 + start;
        const rangeTo = Math.min(Math.floor((i + 1) * bucketWidth) + 1, count) + start;
        const { x: pointAx , y: pointAy  } = data[a];
        maxArea = area = -1;
        for(j = rangeOffs; j < rangeTo; j++){
            area = 0.5 * Math.abs((pointAx - avgX) * (data[j].y - pointAy) - (pointAx - data[j].x) * (avgY - pointAy));
            if (area > maxArea) {
                maxArea = area;
                maxAreaPoint = data[j];
                nextA = j;
            }
        }
        decimated[sampledIndex++] = maxAreaPoint;
        a = nextA;
    }
    decimated[sampledIndex++] = data[endIndex];
    return decimated;
}
function minMaxDecimation(data, start, count, availableWidth) {
    let avgX = 0;
    let countX = 0;
    let i, point, x, y, prevX, minIndex, maxIndex, startIndex, minY, maxY;
    const decimated = [];
    const endIndex = start + count - 1;
    const xMin = data[start].x;
    const xMax = data[endIndex].x;
    const dx = xMax - xMin;
    for(i = start; i < start + count; ++i){
        point = data[i];
        x = (point.x - xMin) / dx * availableWidth;
        y = point.y;
        const truncX = x | 0;
        if (truncX === prevX) {
            if (y < minY) {
                minY = y;
                minIndex = i;
            } else if (y > maxY) {
                maxY = y;
                maxIndex = i;
            }
            avgX = (countX * avgX + point.x) / ++countX;
        } else {
            const lastIndex = i - 1;
            if (!(0, _helpersSegmentJs.k)(minIndex) && !(0, _helpersSegmentJs.k)(maxIndex)) {
                const intermediateIndex1 = Math.min(minIndex, maxIndex);
                const intermediateIndex2 = Math.max(minIndex, maxIndex);
                if (intermediateIndex1 !== startIndex && intermediateIndex1 !== lastIndex) decimated.push({
                    ...data[intermediateIndex1],
                    x: avgX
                });
                if (intermediateIndex2 !== startIndex && intermediateIndex2 !== lastIndex) decimated.push({
                    ...data[intermediateIndex2],
                    x: avgX
                });
            }
            if (i > 0 && lastIndex !== startIndex) decimated.push(data[lastIndex]);
            decimated.push(point);
            prevX = truncX;
            countX = 0;
            minY = maxY = y;
            minIndex = maxIndex = startIndex = i;
        }
    }
    return decimated;
}
function cleanDecimatedDataset(dataset) {
    if (dataset._decimated) {
        const data = dataset._data;
        delete dataset._decimated;
        delete dataset._data;
        Object.defineProperty(dataset, "data", {
            value: data
        });
    }
}
function cleanDecimatedData(chart) {
    chart.data.datasets.forEach((dataset)=>{
        cleanDecimatedDataset(dataset);
    });
}
function getStartAndCountOfVisiblePointsSimplified(meta, points) {
    const pointCount = points.length;
    let start = 0;
    let count;
    const { iScale  } = meta;
    const { min , max , minDefined , maxDefined  } = iScale.getUserBounds();
    if (minDefined) start = (0, _helpersSegmentJs.S)((0, _helpersSegmentJs.B)(points, iScale.axis, min).lo, 0, pointCount - 1);
    if (maxDefined) count = (0, _helpersSegmentJs.S)((0, _helpersSegmentJs.B)(points, iScale.axis, max).hi + 1, start, pointCount) - start;
    else count = pointCount - start;
    return {
        start,
        count
    };
}
var plugin_decimation = {
    id: "decimation",
    defaults: {
        algorithm: "min-max",
        enabled: false
    },
    beforeElementsUpdate: (chart, args, options)=>{
        if (!options.enabled) {
            cleanDecimatedData(chart);
            return;
        }
        const availableWidth = chart.width;
        chart.data.datasets.forEach((dataset, datasetIndex)=>{
            const { _data , indexAxis  } = dataset;
            const meta = chart.getDatasetMeta(datasetIndex);
            const data = _data || dataset.data;
            if ((0, _helpersSegmentJs.a)([
                indexAxis,
                chart.options.indexAxis
            ]) === "y") return;
            if (!meta.controller.supportsDecimation) return;
            const xAxis = chart.scales[meta.xAxisID];
            if (xAxis.type !== "linear" && xAxis.type !== "time") return;
            if (chart.options.parsing) return;
            let { start , count  } = getStartAndCountOfVisiblePointsSimplified(meta, data);
            const threshold = options.threshold || 4 * availableWidth;
            if (count <= threshold) {
                cleanDecimatedDataset(dataset);
                return;
            }
            if ((0, _helpersSegmentJs.k)(_data)) {
                dataset._data = data;
                delete dataset.data;
                Object.defineProperty(dataset, "data", {
                    configurable: true,
                    enumerable: true,
                    get: function() {
                        return this._decimated;
                    },
                    set: function(d) {
                        this._data = d;
                    }
                });
            }
            let decimated;
            switch(options.algorithm){
                case "lttb":
                    decimated = lttbDecimation(data, start, count, availableWidth, options);
                    break;
                case "min-max":
                    decimated = minMaxDecimation(data, start, count, availableWidth);
                    break;
                default:
                    throw new Error(`Unsupported decimation algorithm '${options.algorithm}'`);
            }
            dataset._decimated = decimated;
        });
    },
    destroy (chart) {
        cleanDecimatedData(chart);
    }
};
function _segments(line, target, property) {
    const segments = line.segments;
    const points = line.points;
    const tpoints = target.points;
    const parts = [];
    for (const segment of segments){
        let { start , end  } = segment;
        end = _findSegmentEnd(start, end, points);
        const bounds = _getBounds(property, points[start], points[end], segment.loop);
        if (!target.segments) {
            parts.push({
                source: segment,
                target: bounds,
                start: points[start],
                end: points[end]
            });
            continue;
        }
        const targetSegments = (0, _helpersSegmentJs.an)(target, bounds);
        for (const tgt of targetSegments){
            const subBounds = _getBounds(property, tpoints[tgt.start], tpoints[tgt.end], tgt.loop);
            const fillSources = (0, _helpersSegmentJs.ax)(segment, points, subBounds);
            for (const fillSource of fillSources)parts.push({
                source: fillSource,
                target: tgt,
                start: {
                    [property]: _getEdge(bounds, subBounds, "start", Math.max)
                },
                end: {
                    [property]: _getEdge(bounds, subBounds, "end", Math.min)
                }
            });
        }
    }
    return parts;
}
function _getBounds(property, first, last, loop) {
    if (loop) return;
    let start = first[property];
    let end = last[property];
    if (property === "angle") {
        start = (0, _helpersSegmentJs.ay)(start);
        end = (0, _helpersSegmentJs.ay)(end);
    }
    return {
        property,
        start,
        end
    };
}
function _pointsFromSegments(boundary, line) {
    const { x =null , y =null  } = boundary || {};
    const linePoints = line.points;
    const points = [];
    line.segments.forEach(({ start , end  })=>{
        end = _findSegmentEnd(start, end, linePoints);
        const first = linePoints[start];
        const last = linePoints[end];
        if (y !== null) {
            points.push({
                x: first.x,
                y
            });
            points.push({
                x: last.x,
                y
            });
        } else if (x !== null) {
            points.push({
                x,
                y: first.y
            });
            points.push({
                x,
                y: last.y
            });
        }
    });
    return points;
}
function _findSegmentEnd(start, end, points) {
    for(; end > start; end--){
        const point = points[end];
        if (!isNaN(point.x) && !isNaN(point.y)) break;
    }
    return end;
}
function _getEdge(a, b, prop, fn) {
    if (a && b) return fn(a[prop], b[prop]);
    return a ? a[prop] : b ? b[prop] : 0;
}
function _createBoundaryLine(boundary, line) {
    let points = [];
    let _loop = false;
    if ((0, _helpersSegmentJs.b)(boundary)) {
        _loop = true;
        points = boundary;
    } else points = _pointsFromSegments(boundary, line);
    return points.length ? new LineElement({
        points,
        options: {
            tension: 0
        },
        _loop,
        _fullLoop: _loop
    }) : null;
}
function _shouldApplyFill(source) {
    return source && source.fill !== false;
}
function _resolveTarget(sources, index, propagate) {
    const source = sources[index];
    let fill = source.fill;
    const visited = [
        index
    ];
    let target;
    if (!propagate) return fill;
    while(fill !== false && visited.indexOf(fill) === -1){
        if (!(0, _helpersSegmentJs.g)(fill)) return fill;
        target = sources[fill];
        if (!target) return false;
        if (target.visible) return fill;
        visited.push(fill);
        fill = target.fill;
    }
    return false;
}
function _decodeFill(line, index, count) {
    const fill = parseFillOption(line);
    if ((0, _helpersSegmentJs.i)(fill)) return isNaN(fill.value) ? false : fill;
    let target = parseFloat(fill);
    if ((0, _helpersSegmentJs.g)(target) && Math.floor(target) === target) return decodeTargetIndex(fill[0], index, target, count);
    return [
        "origin",
        "start",
        "end",
        "stack",
        "shape"
    ].indexOf(fill) >= 0 && fill;
}
function decodeTargetIndex(firstCh, index, target, count) {
    if (firstCh === "-" || firstCh === "+") target = index + target;
    if (target === index || target < 0 || target >= count) return false;
    return target;
}
function _getTargetPixel(fill, scale) {
    let pixel = null;
    if (fill === "start") pixel = scale.bottom;
    else if (fill === "end") pixel = scale.top;
    else if ((0, _helpersSegmentJs.i)(fill)) pixel = scale.getPixelForValue(fill.value);
    else if (scale.getBasePixel) pixel = scale.getBasePixel();
    return pixel;
}
function _getTargetValue(fill, scale, startValue) {
    let value;
    if (fill === "start") value = startValue;
    else if (fill === "end") value = scale.options.reverse ? scale.min : scale.max;
    else if ((0, _helpersSegmentJs.i)(fill)) value = fill.value;
    else value = scale.getBaseValue();
    return value;
}
function parseFillOption(line) {
    const options = line.options;
    const fillOption = options.fill;
    let fill = (0, _helpersSegmentJs.v)(fillOption && fillOption.target, fillOption);
    if (fill === undefined) fill = !!options.backgroundColor;
    if (fill === false || fill === null) return false;
    if (fill === true) return "origin";
    return fill;
}
function _buildStackLine(source) {
    const { scale , index , line  } = source;
    const points = [];
    const segments = line.segments;
    const sourcePoints = line.points;
    const linesBelow = getLinesBelow(scale, index);
    linesBelow.push(_createBoundaryLine({
        x: null,
        y: scale.bottom
    }, line));
    for(let i = 0; i < segments.length; i++){
        const segment = segments[i];
        for(let j = segment.start; j <= segment.end; j++)addPointsBelow(points, sourcePoints[j], linesBelow);
    }
    return new LineElement({
        points,
        options: {}
    });
}
function getLinesBelow(scale, index) {
    const below = [];
    const metas = scale.getMatchingVisibleMetas("line");
    for(let i = 0; i < metas.length; i++){
        const meta = metas[i];
        if (meta.index === index) break;
        if (!meta.hidden) below.unshift(meta.dataset);
    }
    return below;
}
function addPointsBelow(points, sourcePoint, linesBelow) {
    const postponed = [];
    for(let j = 0; j < linesBelow.length; j++){
        const line = linesBelow[j];
        const { first , last , point  } = findPoint(line, sourcePoint, "x");
        if (!point || first && last) continue;
        if (first) postponed.unshift(point);
        else {
            points.push(point);
            if (!last) break;
        }
    }
    points.push(...postponed);
}
function findPoint(line, sourcePoint, property) {
    const point = line.interpolate(sourcePoint, property);
    if (!point) return {};
    const pointValue = point[property];
    const segments = line.segments;
    const linePoints = line.points;
    let first = false;
    let last = false;
    for(let i = 0; i < segments.length; i++){
        const segment = segments[i];
        const firstValue = linePoints[segment.start][property];
        const lastValue = linePoints[segment.end][property];
        if ((0, _helpersSegmentJs.aj)(pointValue, firstValue, lastValue)) {
            first = pointValue === firstValue;
            last = pointValue === lastValue;
            break;
        }
    }
    return {
        first,
        last,
        point
    };
}
class simpleArc {
    constructor(opts){
        this.x = opts.x;
        this.y = opts.y;
        this.radius = opts.radius;
    }
    pathSegment(ctx, bounds, opts) {
        const { x , y , radius  } = this;
        bounds = bounds || {
            start: 0,
            end: (0, _helpersSegmentJs.T)
        };
        ctx.arc(x, y, radius, bounds.end, bounds.start, true);
        return !opts.bounds;
    }
    interpolate(point) {
        const { x , y , radius  } = this;
        const angle = point.angle;
        return {
            x: x + Math.cos(angle) * radius,
            y: y + Math.sin(angle) * radius,
            angle
        };
    }
}
function _getTarget(source) {
    const { chart , fill , line  } = source;
    if ((0, _helpersSegmentJs.g)(fill)) return getLineByIndex(chart, fill);
    if (fill === "stack") return _buildStackLine(source);
    if (fill === "shape") return true;
    const boundary = computeBoundary(source);
    if (boundary instanceof simpleArc) return boundary;
    return _createBoundaryLine(boundary, line);
}
function getLineByIndex(chart, index) {
    const meta = chart.getDatasetMeta(index);
    const visible = meta && chart.isDatasetVisible(index);
    return visible ? meta.dataset : null;
}
function computeBoundary(source) {
    const scale = source.scale || {};
    if (scale.getPointPositionForValue) return computeCircularBoundary(source);
    return computeLinearBoundary(source);
}
function computeLinearBoundary(source) {
    const { scale ={} , fill  } = source;
    const pixel = _getTargetPixel(fill, scale);
    if ((0, _helpersSegmentJs.g)(pixel)) {
        const horizontal = scale.isHorizontal();
        return {
            x: horizontal ? pixel : null,
            y: horizontal ? null : pixel
        };
    }
    return null;
}
function computeCircularBoundary(source) {
    const { scale , fill  } = source;
    const options = scale.options;
    const length = scale.getLabels().length;
    const start = options.reverse ? scale.max : scale.min;
    const value = _getTargetValue(fill, scale, start);
    const target = [];
    if (options.grid.circular) {
        const center = scale.getPointPositionForValue(0, start);
        return new simpleArc({
            x: center.x,
            y: center.y,
            radius: scale.getDistanceFromCenterForValue(value)
        });
    }
    for(let i = 0; i < length; ++i)target.push(scale.getPointPositionForValue(i, value));
    return target;
}
function _drawfill(ctx, source, area) {
    const target = _getTarget(source);
    const { line , scale , axis  } = source;
    const lineOpts = line.options;
    const fillOption = lineOpts.fill;
    const color = lineOpts.backgroundColor;
    const { above =color , below =color  } = fillOption || {};
    if (target && line.points.length) {
        (0, _helpersSegmentJs.Y)(ctx, area);
        doFill(ctx, {
            line,
            target,
            above,
            below,
            area,
            scale,
            axis
        });
        (0, _helpersSegmentJs.$)(ctx);
    }
}
function doFill(ctx, cfg) {
    const { line , target , above , below , area , scale  } = cfg;
    const property = line._loop ? "angle" : cfg.axis;
    ctx.save();
    if (property === "x" && below !== above) {
        clipVertical(ctx, target, area.top);
        fill(ctx, {
            line,
            target,
            color: above,
            scale,
            property
        });
        ctx.restore();
        ctx.save();
        clipVertical(ctx, target, area.bottom);
    }
    fill(ctx, {
        line,
        target,
        color: below,
        scale,
        property
    });
    ctx.restore();
}
function clipVertical(ctx, target, clipY) {
    const { segments , points  } = target;
    let first = true;
    let lineLoop = false;
    ctx.beginPath();
    for (const segment of segments){
        const { start , end  } = segment;
        const firstPoint = points[start];
        const lastPoint = points[_findSegmentEnd(start, end, points)];
        if (first) {
            ctx.moveTo(firstPoint.x, firstPoint.y);
            first = false;
        } else {
            ctx.lineTo(firstPoint.x, clipY);
            ctx.lineTo(firstPoint.x, firstPoint.y);
        }
        lineLoop = !!target.pathSegment(ctx, segment, {
            move: lineLoop
        });
        if (lineLoop) ctx.closePath();
        else ctx.lineTo(lastPoint.x, clipY);
    }
    ctx.lineTo(target.first().x, clipY);
    ctx.closePath();
    ctx.clip();
}
function fill(ctx, cfg) {
    const { line , target , property , color , scale  } = cfg;
    const segments = _segments(line, target, property);
    for (const { source: src , target: tgt , start , end  } of segments){
        const { style: { backgroundColor =color  } = {}  } = src;
        const notShape = target !== true;
        ctx.save();
        ctx.fillStyle = backgroundColor;
        clipBounds(ctx, scale, notShape && _getBounds(property, start, end));
        ctx.beginPath();
        const lineLoop = !!line.pathSegment(ctx, src);
        let loop;
        if (notShape) {
            if (lineLoop) ctx.closePath();
            else interpolatedLineTo(ctx, target, end, property);
            const targetLoop = !!target.pathSegment(ctx, tgt, {
                move: lineLoop,
                reverse: true
            });
            loop = lineLoop && targetLoop;
            if (!loop) interpolatedLineTo(ctx, target, start, property);
        }
        ctx.closePath();
        ctx.fill(loop ? "evenodd" : "nonzero");
        ctx.restore();
    }
}
function clipBounds(ctx, scale, bounds) {
    const { top , bottom  } = scale.chart.chartArea;
    const { property , start , end  } = bounds || {};
    if (property === "x") {
        ctx.beginPath();
        ctx.rect(start, top, end - start, bottom - top);
        ctx.clip();
    }
}
function interpolatedLineTo(ctx, target, point, property) {
    const interpolatedPoint = target.interpolate(point, property);
    if (interpolatedPoint) ctx.lineTo(interpolatedPoint.x, interpolatedPoint.y);
}
var index = {
    id: "filler",
    afterDatasetsUpdate (chart, _args, options) {
        const count = (chart.data.datasets || []).length;
        const sources = [];
        let meta, i, line, source;
        for(i = 0; i < count; ++i){
            meta = chart.getDatasetMeta(i);
            line = meta.dataset;
            source = null;
            if (line && line.options && line instanceof LineElement) source = {
                visible: chart.isDatasetVisible(i),
                index: i,
                fill: _decodeFill(line, i, count),
                chart,
                axis: meta.controller.options.indexAxis,
                scale: meta.vScale,
                line
            };
            meta.$filler = source;
            sources.push(source);
        }
        for(i = 0; i < count; ++i){
            source = sources[i];
            if (!source || source.fill === false) continue;
            source.fill = _resolveTarget(sources, i, options.propagate);
        }
    },
    beforeDraw (chart, _args, options) {
        const draw = options.drawTime === "beforeDraw";
        const metasets = chart.getSortedVisibleDatasetMetas();
        const area = chart.chartArea;
        for(let i = metasets.length - 1; i >= 0; --i){
            const source = metasets[i].$filler;
            if (!source) continue;
            source.line.updateControlPoints(area, source.axis);
            if (draw && source.fill) _drawfill(chart.ctx, source, area);
        }
    },
    beforeDatasetsDraw (chart, _args, options) {
        if (options.drawTime !== "beforeDatasetsDraw") return;
        const metasets = chart.getSortedVisibleDatasetMetas();
        for(let i = metasets.length - 1; i >= 0; --i){
            const source = metasets[i].$filler;
            if (_shouldApplyFill(source)) _drawfill(chart.ctx, source, chart.chartArea);
        }
    },
    beforeDatasetDraw (chart, args, options) {
        const source = args.meta.$filler;
        if (!_shouldApplyFill(source) || options.drawTime !== "beforeDatasetDraw") return;
        _drawfill(chart.ctx, source, chart.chartArea);
    },
    defaults: {
        propagate: true,
        drawTime: "beforeDatasetDraw"
    }
};
const getBoxSize = (labelOpts, fontSize)=>{
    let { boxHeight =fontSize , boxWidth =fontSize  } = labelOpts;
    if (labelOpts.usePointStyle) {
        boxHeight = Math.min(boxHeight, fontSize);
        boxWidth = labelOpts.pointStyleWidth || Math.min(boxWidth, fontSize);
    }
    return {
        boxWidth,
        boxHeight,
        itemHeight: Math.max(fontSize, boxHeight)
    };
};
const itemsEqual = (a, b)=>a !== null && b !== null && a.datasetIndex === b.datasetIndex && a.index === b.index;
class Legend extends Element {
    constructor(config){
        super();
        this._added = false;
        this.legendHitBoxes = [];
        this._hoveredItem = null;
        this.doughnutMode = false;
        this.chart = config.chart;
        this.options = config.options;
        this.ctx = config.ctx;
        this.legendItems = undefined;
        this.columnSizes = undefined;
        this.lineWidths = undefined;
        this.maxHeight = undefined;
        this.maxWidth = undefined;
        this.top = undefined;
        this.bottom = undefined;
        this.left = undefined;
        this.right = undefined;
        this.height = undefined;
        this.width = undefined;
        this._margins = undefined;
        this.position = undefined;
        this.weight = undefined;
        this.fullSize = undefined;
    }
    update(maxWidth, maxHeight, margins) {
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
        this._margins = margins;
        this.setDimensions();
        this.buildLabels();
        this.fit();
    }
    setDimensions() {
        if (this.isHorizontal()) {
            this.width = this.maxWidth;
            this.left = this._margins.left;
            this.right = this.width;
        } else {
            this.height = this.maxHeight;
            this.top = this._margins.top;
            this.bottom = this.height;
        }
    }
    buildLabels() {
        const labelOpts = this.options.labels || {};
        let legendItems = (0, _helpersSegmentJs.Q)(labelOpts.generateLabels, [
            this.chart
        ], this) || [];
        if (labelOpts.filter) legendItems = legendItems.filter((item)=>labelOpts.filter(item, this.chart.data));
        if (labelOpts.sort) legendItems = legendItems.sort((a, b)=>labelOpts.sort(a, b, this.chart.data));
        if (this.options.reverse) legendItems.reverse();
        this.legendItems = legendItems;
    }
    fit() {
        const { options , ctx  } = this;
        if (!options.display) {
            this.width = this.height = 0;
            return;
        }
        const labelOpts = options.labels;
        const labelFont = (0, _helpersSegmentJs.a0)(labelOpts.font);
        const fontSize = labelFont.size;
        const titleHeight = this._computeTitleHeight();
        const { boxWidth , itemHeight  } = getBoxSize(labelOpts, fontSize);
        let width, height;
        ctx.font = labelFont.string;
        if (this.isHorizontal()) {
            width = this.maxWidth;
            height = this._fitRows(titleHeight, fontSize, boxWidth, itemHeight) + 10;
        } else {
            height = this.maxHeight;
            width = this._fitCols(titleHeight, labelFont, boxWidth, itemHeight) + 10;
        }
        this.width = Math.min(width, options.maxWidth || this.maxWidth);
        this.height = Math.min(height, options.maxHeight || this.maxHeight);
    }
    _fitRows(titleHeight, fontSize, boxWidth, itemHeight) {
        const { ctx , maxWidth , options: { labels: { padding  }  }  } = this;
        const hitboxes = this.legendHitBoxes = [];
        const lineWidths = this.lineWidths = [
            0
        ];
        const lineHeight = itemHeight + padding;
        let totalHeight = titleHeight;
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        let row = -1;
        let top = -lineHeight;
        this.legendItems.forEach((legendItem, i)=>{
            const itemWidth = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width;
            if (i === 0 || lineWidths[lineWidths.length - 1] + itemWidth + 2 * padding > maxWidth) {
                totalHeight += lineHeight;
                lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = 0;
                top += lineHeight;
                row++;
            }
            hitboxes[i] = {
                left: 0,
                top,
                row,
                width: itemWidth,
                height: itemHeight
            };
            lineWidths[lineWidths.length - 1] += itemWidth + padding;
        });
        return totalHeight;
    }
    _fitCols(titleHeight, labelFont, boxWidth, _itemHeight) {
        const { ctx , maxHeight , options: { labels: { padding  }  }  } = this;
        const hitboxes = this.legendHitBoxes = [];
        const columnSizes = this.columnSizes = [];
        const heightLimit = maxHeight - titleHeight;
        let totalWidth = padding;
        let currentColWidth = 0;
        let currentColHeight = 0;
        let left = 0;
        let col = 0;
        this.legendItems.forEach((legendItem, i)=>{
            const { itemWidth , itemHeight  } = calculateItemSize(boxWidth, labelFont, ctx, legendItem, _itemHeight);
            if (i > 0 && currentColHeight + itemHeight + 2 * padding > heightLimit) {
                totalWidth += currentColWidth + padding;
                columnSizes.push({
                    width: currentColWidth,
                    height: currentColHeight
                });
                left += currentColWidth + padding;
                col++;
                currentColWidth = currentColHeight = 0;
            }
            hitboxes[i] = {
                left,
                top: currentColHeight,
                col,
                width: itemWidth,
                height: itemHeight
            };
            currentColWidth = Math.max(currentColWidth, itemWidth);
            currentColHeight += itemHeight + padding;
        });
        totalWidth += currentColWidth;
        columnSizes.push({
            width: currentColWidth,
            height: currentColHeight
        });
        return totalWidth;
    }
    adjustHitBoxes() {
        if (!this.options.display) return;
        const titleHeight = this._computeTitleHeight();
        const { legendHitBoxes: hitboxes , options: { align , labels: { padding  } , rtl  }  } = this;
        const rtlHelper = (0, _helpersSegmentJs.az)(rtl, this.left, this.width);
        if (this.isHorizontal()) {
            let row = 0;
            let left = (0, _helpersSegmentJs.a2)(align, this.left + padding, this.right - this.lineWidths[row]);
            for (const hitbox of hitboxes){
                if (row !== hitbox.row) {
                    row = hitbox.row;
                    left = (0, _helpersSegmentJs.a2)(align, this.left + padding, this.right - this.lineWidths[row]);
                }
                hitbox.top += this.top + titleHeight + padding;
                hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(left), hitbox.width);
                left += hitbox.width + padding;
            }
        } else {
            let col = 0;
            let top = (0, _helpersSegmentJs.a2)(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
            for (const hitbox1 of hitboxes){
                if (hitbox1.col !== col) {
                    col = hitbox1.col;
                    top = (0, _helpersSegmentJs.a2)(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
                }
                hitbox1.top = top;
                hitbox1.left += this.left + padding;
                hitbox1.left = rtlHelper.leftForLtr(rtlHelper.x(hitbox1.left), hitbox1.width);
                top += hitbox1.height + padding;
            }
        }
    }
    isHorizontal() {
        return this.options.position === "top" || this.options.position === "bottom";
    }
    draw() {
        if (this.options.display) {
            const ctx = this.ctx;
            (0, _helpersSegmentJs.Y)(ctx, this);
            this._draw();
            (0, _helpersSegmentJs.$)(ctx);
        }
    }
    _draw() {
        const { options: opts , columnSizes , lineWidths , ctx  } = this;
        const { align , labels: labelOpts  } = opts;
        const defaultColor = (0, _helpersSegmentJs.d).color;
        const rtlHelper = (0, _helpersSegmentJs.az)(opts.rtl, this.left, this.width);
        const labelFont = (0, _helpersSegmentJs.a0)(labelOpts.font);
        const { padding  } = labelOpts;
        const fontSize = labelFont.size;
        const halfFontSize = fontSize / 2;
        let cursor;
        this.drawTitle();
        ctx.textAlign = rtlHelper.textAlign("left");
        ctx.textBaseline = "middle";
        ctx.lineWidth = 0.5;
        ctx.font = labelFont.string;
        const { boxWidth , boxHeight , itemHeight  } = getBoxSize(labelOpts, fontSize);
        const drawLegendBox = function(x, y, legendItem) {
            if (isNaN(boxWidth) || boxWidth <= 0 || isNaN(boxHeight) || boxHeight < 0) return;
            ctx.save();
            const lineWidth = (0, _helpersSegmentJs.v)(legendItem.lineWidth, 1);
            ctx.fillStyle = (0, _helpersSegmentJs.v)(legendItem.fillStyle, defaultColor);
            ctx.lineCap = (0, _helpersSegmentJs.v)(legendItem.lineCap, "butt");
            ctx.lineDashOffset = (0, _helpersSegmentJs.v)(legendItem.lineDashOffset, 0);
            ctx.lineJoin = (0, _helpersSegmentJs.v)(legendItem.lineJoin, "miter");
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = (0, _helpersSegmentJs.v)(legendItem.strokeStyle, defaultColor);
            ctx.setLineDash((0, _helpersSegmentJs.v)(legendItem.lineDash, []));
            if (labelOpts.usePointStyle) {
                const drawOptions = {
                    radius: boxHeight * Math.SQRT2 / 2,
                    pointStyle: legendItem.pointStyle,
                    rotation: legendItem.rotation,
                    borderWidth: lineWidth
                };
                const centerX = rtlHelper.xPlus(x, boxWidth / 2);
                const centerY = y + halfFontSize;
                (0, _helpersSegmentJs.aD)(ctx, drawOptions, centerX, centerY, labelOpts.pointStyleWidth && boxWidth);
            } else {
                const yBoxTop = y + Math.max((fontSize - boxHeight) / 2, 0);
                const xBoxLeft = rtlHelper.leftForLtr(x, boxWidth);
                const borderRadius = (0, _helpersSegmentJs.aw)(legendItem.borderRadius);
                ctx.beginPath();
                if (Object.values(borderRadius).some((v)=>v !== 0)) (0, _helpersSegmentJs.au)(ctx, {
                    x: xBoxLeft,
                    y: yBoxTop,
                    w: boxWidth,
                    h: boxHeight,
                    radius: borderRadius
                });
                else ctx.rect(xBoxLeft, yBoxTop, boxWidth, boxHeight);
                ctx.fill();
                if (lineWidth !== 0) ctx.stroke();
            }
            ctx.restore();
        };
        const fillText = function(x, y, legendItem) {
            (0, _helpersSegmentJs.Z)(ctx, legendItem.text, x, y + itemHeight / 2, labelFont, {
                strikethrough: legendItem.hidden,
                textAlign: rtlHelper.textAlign(legendItem.textAlign)
            });
        };
        const isHorizontal = this.isHorizontal();
        const titleHeight = this._computeTitleHeight();
        if (isHorizontal) cursor = {
            x: (0, _helpersSegmentJs.a2)(align, this.left + padding, this.right - lineWidths[0]),
            y: this.top + padding + titleHeight,
            line: 0
        };
        else cursor = {
            x: this.left + padding,
            y: (0, _helpersSegmentJs.a2)(align, this.top + titleHeight + padding, this.bottom - columnSizes[0].height),
            line: 0
        };
        (0, _helpersSegmentJs.aA)(this.ctx, opts.textDirection);
        const lineHeight = itemHeight + padding;
        this.legendItems.forEach((legendItem, i)=>{
            ctx.strokeStyle = legendItem.fontColor;
            ctx.fillStyle = legendItem.fontColor;
            const textWidth = ctx.measureText(legendItem.text).width;
            const textAlign = rtlHelper.textAlign(legendItem.textAlign || (legendItem.textAlign = labelOpts.textAlign));
            const width = boxWidth + halfFontSize + textWidth;
            let x = cursor.x;
            let y = cursor.y;
            rtlHelper.setWidth(this.width);
            if (isHorizontal) {
                if (i > 0 && x + width + padding > this.right) {
                    y = cursor.y += lineHeight;
                    cursor.line++;
                    x = cursor.x = (0, _helpersSegmentJs.a2)(align, this.left + padding, this.right - lineWidths[cursor.line]);
                }
            } else if (i > 0 && y + lineHeight > this.bottom) {
                x = cursor.x = x + columnSizes[cursor.line].width + padding;
                cursor.line++;
                y = cursor.y = (0, _helpersSegmentJs.a2)(align, this.top + titleHeight + padding, this.bottom - columnSizes[cursor.line].height);
            }
            const realX = rtlHelper.x(x);
            drawLegendBox(realX, y, legendItem);
            x = (0, _helpersSegmentJs.aB)(textAlign, x + boxWidth + halfFontSize, isHorizontal ? x + width : this.right, opts.rtl);
            fillText(rtlHelper.x(x), y, legendItem);
            if (isHorizontal) cursor.x += width + padding;
            else if (typeof legendItem.text !== "string") {
                const fontLineHeight = labelFont.lineHeight;
                cursor.y += calculateLegendItemHeight(legendItem, fontLineHeight);
            } else cursor.y += lineHeight;
        });
        (0, _helpersSegmentJs.aC)(this.ctx, opts.textDirection);
    }
    drawTitle() {
        const opts = this.options;
        const titleOpts = opts.title;
        const titleFont = (0, _helpersSegmentJs.a0)(titleOpts.font);
        const titlePadding = (0, _helpersSegmentJs.E)(titleOpts.padding);
        if (!titleOpts.display) return;
        const rtlHelper = (0, _helpersSegmentJs.az)(opts.rtl, this.left, this.width);
        const ctx = this.ctx;
        const position = titleOpts.position;
        const halfFontSize = titleFont.size / 2;
        const topPaddingPlusHalfFontSize = titlePadding.top + halfFontSize;
        let y;
        let left = this.left;
        let maxWidth = this.width;
        if (this.isHorizontal()) {
            maxWidth = Math.max(...this.lineWidths);
            y = this.top + topPaddingPlusHalfFontSize;
            left = (0, _helpersSegmentJs.a2)(opts.align, left, this.right - maxWidth);
        } else {
            const maxHeight = this.columnSizes.reduce((acc, size)=>Math.max(acc, size.height), 0);
            y = topPaddingPlusHalfFontSize + (0, _helpersSegmentJs.a2)(opts.align, this.top, this.bottom - maxHeight - opts.labels.padding - this._computeTitleHeight());
        }
        const x = (0, _helpersSegmentJs.a2)(position, left, left + maxWidth);
        ctx.textAlign = rtlHelper.textAlign((0, _helpersSegmentJs.a1)(position));
        ctx.textBaseline = "middle";
        ctx.strokeStyle = titleOpts.color;
        ctx.fillStyle = titleOpts.color;
        ctx.font = titleFont.string;
        (0, _helpersSegmentJs.Z)(ctx, titleOpts.text, x, y, titleFont);
    }
    _computeTitleHeight() {
        const titleOpts = this.options.title;
        const titleFont = (0, _helpersSegmentJs.a0)(titleOpts.font);
        const titlePadding = (0, _helpersSegmentJs.E)(titleOpts.padding);
        return titleOpts.display ? titleFont.lineHeight + titlePadding.height : 0;
    }
    _getLegendItemAt(x, y) {
        let i, hitBox, lh;
        if ((0, _helpersSegmentJs.aj)(x, this.left, this.right) && (0, _helpersSegmentJs.aj)(y, this.top, this.bottom)) {
            lh = this.legendHitBoxes;
            for(i = 0; i < lh.length; ++i){
                hitBox = lh[i];
                if ((0, _helpersSegmentJs.aj)(x, hitBox.left, hitBox.left + hitBox.width) && (0, _helpersSegmentJs.aj)(y, hitBox.top, hitBox.top + hitBox.height)) return this.legendItems[i];
            }
        }
        return null;
    }
    handleEvent(e) {
        const opts = this.options;
        if (!isListened(e.type, opts)) return;
        const hoveredItem = this._getLegendItemAt(e.x, e.y);
        if (e.type === "mousemove" || e.type === "mouseout") {
            const previous = this._hoveredItem;
            const sameItem = itemsEqual(previous, hoveredItem);
            if (previous && !sameItem) (0, _helpersSegmentJs.Q)(opts.onLeave, [
                e,
                previous,
                this
            ], this);
            this._hoveredItem = hoveredItem;
            if (hoveredItem && !sameItem) (0, _helpersSegmentJs.Q)(opts.onHover, [
                e,
                hoveredItem,
                this
            ], this);
        } else if (hoveredItem) (0, _helpersSegmentJs.Q)(opts.onClick, [
            e,
            hoveredItem,
            this
        ], this);
    }
}
function calculateItemSize(boxWidth, labelFont, ctx, legendItem, _itemHeight) {
    const itemWidth = calculateItemWidth(legendItem, boxWidth, labelFont, ctx);
    const itemHeight = calculateItemHeight(_itemHeight, legendItem, labelFont.lineHeight);
    return {
        itemWidth,
        itemHeight
    };
}
function calculateItemWidth(legendItem, boxWidth, labelFont, ctx) {
    let legendItemText = legendItem.text;
    if (legendItemText && typeof legendItemText !== "string") legendItemText = legendItemText.reduce((a, b)=>a.length > b.length ? a : b);
    return boxWidth + labelFont.size / 2 + ctx.measureText(legendItemText).width;
}
function calculateItemHeight(_itemHeight, legendItem, fontLineHeight) {
    let itemHeight = _itemHeight;
    if (typeof legendItem.text !== "string") itemHeight = calculateLegendItemHeight(legendItem, fontLineHeight);
    return itemHeight;
}
function calculateLegendItemHeight(legendItem, fontLineHeight) {
    const labelHeight = legendItem.text ? legendItem.text.length + 0.5 : 0;
    return fontLineHeight * labelHeight;
}
function isListened(type, opts) {
    if ((type === "mousemove" || type === "mouseout") && (opts.onHover || opts.onLeave)) return true;
    if (opts.onClick && (type === "click" || type === "mouseup")) return true;
    return false;
}
var plugin_legend = {
    id: "legend",
    _element: Legend,
    start (chart, _args, options) {
        const legend = chart.legend = new Legend({
            ctx: chart.ctx,
            options,
            chart
        });
        layouts.configure(chart, legend, options);
        layouts.addBox(chart, legend);
    },
    stop (chart) {
        layouts.removeBox(chart, chart.legend);
        delete chart.legend;
    },
    beforeUpdate (chart, _args, options) {
        const legend = chart.legend;
        layouts.configure(chart, legend, options);
        legend.options = options;
    },
    afterUpdate (chart) {
        const legend = chart.legend;
        legend.buildLabels();
        legend.adjustHitBoxes();
    },
    afterEvent (chart, args) {
        if (!args.replay) chart.legend.handleEvent(args.event);
    },
    defaults: {
        display: true,
        position: "top",
        align: "center",
        fullSize: true,
        reverse: false,
        weight: 1000,
        onClick (e, legendItem, legend) {
            const index = legendItem.datasetIndex;
            const ci = legend.chart;
            if (ci.isDatasetVisible(index)) {
                ci.hide(index);
                legendItem.hidden = true;
            } else {
                ci.show(index);
                legendItem.hidden = false;
            }
        },
        onHover: null,
        onLeave: null,
        labels: {
            color: (ctx)=>ctx.chart.options.color,
            boxWidth: 40,
            padding: 10,
            generateLabels (chart) {
                const datasets = chart.data.datasets;
                const { labels: { usePointStyle , pointStyle , textAlign , color , useBorderRadius , borderRadius  }  } = chart.legend.options;
                return chart._getSortedDatasetMetas().map((meta)=>{
                    const style = meta.controller.getStyle(usePointStyle ? 0 : undefined);
                    const borderWidth = (0, _helpersSegmentJs.E)(style.borderWidth);
                    return {
                        text: datasets[meta.index].label,
                        fillStyle: style.backgroundColor,
                        fontColor: color,
                        hidden: !meta.visible,
                        lineCap: style.borderCapStyle,
                        lineDash: style.borderDash,
                        lineDashOffset: style.borderDashOffset,
                        lineJoin: style.borderJoinStyle,
                        lineWidth: (borderWidth.width + borderWidth.height) / 4,
                        strokeStyle: style.borderColor,
                        pointStyle: pointStyle || style.pointStyle,
                        rotation: style.rotation,
                        textAlign: textAlign || style.textAlign,
                        borderRadius: useBorderRadius && (borderRadius || style.borderRadius),
                        datasetIndex: meta.index
                    };
                }, this);
            }
        },
        title: {
            color: (ctx)=>ctx.chart.options.color,
            display: false,
            position: "center",
            text: ""
        }
    },
    descriptors: {
        _scriptable: (name1)=>!name1.startsWith("on"),
        labels: {
            _scriptable: (name1)=>![
                    "generateLabels",
                    "filter",
                    "sort"
                ].includes(name1)
        }
    }
};
class Title extends Element {
    constructor(config){
        super();
        this.chart = config.chart;
        this.options = config.options;
        this.ctx = config.ctx;
        this._padding = undefined;
        this.top = undefined;
        this.bottom = undefined;
        this.left = undefined;
        this.right = undefined;
        this.width = undefined;
        this.height = undefined;
        this.position = undefined;
        this.weight = undefined;
        this.fullSize = undefined;
    }
    update(maxWidth, maxHeight) {
        const opts = this.options;
        this.left = 0;
        this.top = 0;
        if (!opts.display) {
            this.width = this.height = this.right = this.bottom = 0;
            return;
        }
        this.width = this.right = maxWidth;
        this.height = this.bottom = maxHeight;
        const lineCount = (0, _helpersSegmentJs.b)(opts.text) ? opts.text.length : 1;
        this._padding = (0, _helpersSegmentJs.E)(opts.padding);
        const textSize = lineCount * (0, _helpersSegmentJs.a0)(opts.font).lineHeight + this._padding.height;
        if (this.isHorizontal()) this.height = textSize;
        else this.width = textSize;
    }
    isHorizontal() {
        const pos = this.options.position;
        return pos === "top" || pos === "bottom";
    }
    _drawArgs(offset) {
        const { top , left , bottom , right , options  } = this;
        const align = options.align;
        let rotation = 0;
        let maxWidth, titleX, titleY;
        if (this.isHorizontal()) {
            titleX = (0, _helpersSegmentJs.a2)(align, left, right);
            titleY = top + offset;
            maxWidth = right - left;
        } else {
            if (options.position === "left") {
                titleX = left + offset;
                titleY = (0, _helpersSegmentJs.a2)(align, bottom, top);
                rotation = (0, _helpersSegmentJs.P) * -0.5;
            } else {
                titleX = right - offset;
                titleY = (0, _helpersSegmentJs.a2)(align, top, bottom);
                rotation = (0, _helpersSegmentJs.P) * 0.5;
            }
            maxWidth = bottom - top;
        }
        return {
            titleX,
            titleY,
            maxWidth,
            rotation
        };
    }
    draw() {
        const ctx = this.ctx;
        const opts = this.options;
        if (!opts.display) return;
        const fontOpts = (0, _helpersSegmentJs.a0)(opts.font);
        const lineHeight = fontOpts.lineHeight;
        const offset = lineHeight / 2 + this._padding.top;
        const { titleX , titleY , maxWidth , rotation  } = this._drawArgs(offset);
        (0, _helpersSegmentJs.Z)(ctx, opts.text, 0, 0, fontOpts, {
            color: opts.color,
            maxWidth,
            rotation,
            textAlign: (0, _helpersSegmentJs.a1)(opts.align),
            textBaseline: "middle",
            translation: [
                titleX,
                titleY
            ]
        });
    }
}
function createTitle(chart, titleOpts) {
    const title = new Title({
        ctx: chart.ctx,
        options: titleOpts,
        chart
    });
    layouts.configure(chart, title, titleOpts);
    layouts.addBox(chart, title);
    chart.titleBlock = title;
}
var plugin_title = {
    id: "title",
    _element: Title,
    start (chart, _args, options) {
        createTitle(chart, options);
    },
    stop (chart) {
        const titleBlock = chart.titleBlock;
        layouts.removeBox(chart, titleBlock);
        delete chart.titleBlock;
    },
    beforeUpdate (chart, _args, options) {
        const title = chart.titleBlock;
        layouts.configure(chart, title, options);
        title.options = options;
    },
    defaults: {
        align: "center",
        display: false,
        font: {
            weight: "bold"
        },
        fullSize: true,
        padding: 10,
        position: "top",
        text: "",
        weight: 2000
    },
    defaultRoutes: {
        color: "color"
    },
    descriptors: {
        _scriptable: true,
        _indexable: false
    }
};
const map = new WeakMap();
var plugin_subtitle = {
    id: "subtitle",
    start (chart, _args, options) {
        const title = new Title({
            ctx: chart.ctx,
            options,
            chart
        });
        layouts.configure(chart, title, options);
        layouts.addBox(chart, title);
        map.set(chart, title);
    },
    stop (chart) {
        layouts.removeBox(chart, map.get(chart));
        map.delete(chart);
    },
    beforeUpdate (chart, _args, options) {
        const title = map.get(chart);
        layouts.configure(chart, title, options);
        title.options = options;
    },
    defaults: {
        align: "center",
        display: false,
        font: {
            weight: "normal"
        },
        fullSize: true,
        padding: 0,
        position: "top",
        text: "",
        weight: 1500
    },
    defaultRoutes: {
        color: "color"
    },
    descriptors: {
        _scriptable: true,
        _indexable: false
    }
};
const positioners = {
    average (items) {
        if (!items.length) return false;
        let i, len;
        let x = 0;
        let y = 0;
        let count = 0;
        for(i = 0, len = items.length; i < len; ++i){
            const el = items[i].element;
            if (el && el.hasValue()) {
                const pos = el.tooltipPosition();
                x += pos.x;
                y += pos.y;
                ++count;
            }
        }
        return {
            x: x / count,
            y: y / count
        };
    },
    nearest (items, eventPosition) {
        if (!items.length) return false;
        let x = eventPosition.x;
        let y = eventPosition.y;
        let minDistance = Number.POSITIVE_INFINITY;
        let i, len, nearestElement;
        for(i = 0, len = items.length; i < len; ++i){
            const el = items[i].element;
            if (el && el.hasValue()) {
                const center = el.getCenterPoint();
                const d = (0, _helpersSegmentJs.aE)(eventPosition, center);
                if (d < minDistance) {
                    minDistance = d;
                    nearestElement = el;
                }
            }
        }
        if (nearestElement) {
            const tp = nearestElement.tooltipPosition();
            x = tp.x;
            y = tp.y;
        }
        return {
            x,
            y
        };
    }
};
function pushOrConcat(base, toPush) {
    if (toPush) {
        if ((0, _helpersSegmentJs.b)(toPush)) Array.prototype.push.apply(base, toPush);
        else base.push(toPush);
    }
    return base;
}
function splitNewlines(str) {
    if ((typeof str === "string" || str instanceof String) && str.indexOf("\n") > -1) return str.split("\n");
    return str;
}
function createTooltipItem(chart, item) {
    const { element , datasetIndex , index  } = item;
    const controller = chart.getDatasetMeta(datasetIndex).controller;
    const { label , value  } = controller.getLabelAndValue(index);
    return {
        chart,
        label,
        parsed: controller.getParsed(index),
        raw: chart.data.datasets[datasetIndex].data[index],
        formattedValue: value,
        dataset: controller.getDataset(),
        dataIndex: index,
        datasetIndex,
        element
    };
}
function getTooltipSize(tooltip, options) {
    const ctx = tooltip.chart.ctx;
    const { body , footer , title  } = tooltip;
    const { boxWidth , boxHeight  } = options;
    const bodyFont = (0, _helpersSegmentJs.a0)(options.bodyFont);
    const titleFont = (0, _helpersSegmentJs.a0)(options.titleFont);
    const footerFont = (0, _helpersSegmentJs.a0)(options.footerFont);
    const titleLineCount = title.length;
    const footerLineCount = footer.length;
    const bodyLineItemCount = body.length;
    const padding = (0, _helpersSegmentJs.E)(options.padding);
    let height = padding.height;
    let width = 0;
    let combinedBodyLength = body.reduce((count, bodyItem)=>count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length, 0);
    combinedBodyLength += tooltip.beforeBody.length + tooltip.afterBody.length;
    if (titleLineCount) height += titleLineCount * titleFont.lineHeight + (titleLineCount - 1) * options.titleSpacing + options.titleMarginBottom;
    if (combinedBodyLength) {
        const bodyLineHeight = options.displayColors ? Math.max(boxHeight, bodyFont.lineHeight) : bodyFont.lineHeight;
        height += bodyLineItemCount * bodyLineHeight + (combinedBodyLength - bodyLineItemCount) * bodyFont.lineHeight + (combinedBodyLength - 1) * options.bodySpacing;
    }
    if (footerLineCount) height += options.footerMarginTop + footerLineCount * footerFont.lineHeight + (footerLineCount - 1) * options.footerSpacing;
    let widthPadding = 0;
    const maxLineWidth = function(line) {
        width = Math.max(width, ctx.measureText(line).width + widthPadding);
    };
    ctx.save();
    ctx.font = titleFont.string;
    (0, _helpersSegmentJs.F)(tooltip.title, maxLineWidth);
    ctx.font = bodyFont.string;
    (0, _helpersSegmentJs.F)(tooltip.beforeBody.concat(tooltip.afterBody), maxLineWidth);
    widthPadding = options.displayColors ? boxWidth + 2 + options.boxPadding : 0;
    (0, _helpersSegmentJs.F)(body, (bodyItem)=>{
        (0, _helpersSegmentJs.F)(bodyItem.before, maxLineWidth);
        (0, _helpersSegmentJs.F)(bodyItem.lines, maxLineWidth);
        (0, _helpersSegmentJs.F)(bodyItem.after, maxLineWidth);
    });
    widthPadding = 0;
    ctx.font = footerFont.string;
    (0, _helpersSegmentJs.F)(tooltip.footer, maxLineWidth);
    ctx.restore();
    width += padding.width;
    return {
        width,
        height
    };
}
function determineYAlign(chart, size) {
    const { y , height  } = size;
    if (y < height / 2) return "top";
    else if (y > chart.height - height / 2) return "bottom";
    return "center";
}
function doesNotFitWithAlign(xAlign, chart, options, size) {
    const { x , width  } = size;
    const caret = options.caretSize + options.caretPadding;
    if (xAlign === "left" && x + width + caret > chart.width) return true;
    if (xAlign === "right" && x - width - caret < 0) return true;
}
function determineXAlign(chart, options, size, yAlign) {
    const { x , width  } = size;
    const { width: chartWidth , chartArea: { left , right  }  } = chart;
    let xAlign = "center";
    if (yAlign === "center") xAlign = x <= (left + right) / 2 ? "left" : "right";
    else if (x <= width / 2) xAlign = "left";
    else if (x >= chartWidth - width / 2) xAlign = "right";
    if (doesNotFitWithAlign(xAlign, chart, options, size)) xAlign = "center";
    return xAlign;
}
function determineAlignment(chart, options, size) {
    const yAlign = size.yAlign || options.yAlign || determineYAlign(chart, size);
    return {
        xAlign: size.xAlign || options.xAlign || determineXAlign(chart, options, size, yAlign),
        yAlign
    };
}
function alignX(size, xAlign) {
    let { x , width  } = size;
    if (xAlign === "right") x -= width;
    else if (xAlign === "center") x -= width / 2;
    return x;
}
function alignY(size, yAlign, paddingAndSize) {
    let { y , height  } = size;
    if (yAlign === "top") y += paddingAndSize;
    else if (yAlign === "bottom") y -= height + paddingAndSize;
    else y -= height / 2;
    return y;
}
function getBackgroundPoint(options, size, alignment, chart) {
    const { caretSize , caretPadding , cornerRadius  } = options;
    const { xAlign , yAlign  } = alignment;
    const paddingAndSize = caretSize + caretPadding;
    const { topLeft , topRight , bottomLeft , bottomRight  } = (0, _helpersSegmentJs.aw)(cornerRadius);
    let x = alignX(size, xAlign);
    const y = alignY(size, yAlign, paddingAndSize);
    if (yAlign === "center") {
        if (xAlign === "left") x += paddingAndSize;
        else if (xAlign === "right") x -= paddingAndSize;
    } else if (xAlign === "left") x -= Math.max(topLeft, bottomLeft) + caretSize;
    else if (xAlign === "right") x += Math.max(topRight, bottomRight) + caretSize;
    return {
        x: (0, _helpersSegmentJs.S)(x, 0, chart.width - size.width),
        y: (0, _helpersSegmentJs.S)(y, 0, chart.height - size.height)
    };
}
function getAlignedX(tooltip, align, options) {
    const padding = (0, _helpersSegmentJs.E)(options.padding);
    return align === "center" ? tooltip.x + tooltip.width / 2 : align === "right" ? tooltip.x + tooltip.width - padding.right : tooltip.x + padding.left;
}
function getBeforeAfterBodyLines(callback) {
    return pushOrConcat([], splitNewlines(callback));
}
function createTooltipContext(parent, tooltip, tooltipItems) {
    return (0, _helpersSegmentJs.j)(parent, {
        tooltip,
        tooltipItems,
        type: "tooltip"
    });
}
function overrideCallbacks(callbacks, context) {
    const override = context && context.dataset && context.dataset.tooltip && context.dataset.tooltip.callbacks;
    return override ? callbacks.override(override) : callbacks;
}
const defaultCallbacks = {
    beforeTitle: (0, _helpersSegmentJs.aF),
    title (tooltipItems) {
        if (tooltipItems.length > 0) {
            const item = tooltipItems[0];
            const labels = item.chart.data.labels;
            const labelCount = labels ? labels.length : 0;
            if (this && this.options && this.options.mode === "dataset") return item.dataset.label || "";
            else if (item.label) return item.label;
            else if (labelCount > 0 && item.dataIndex < labelCount) return labels[item.dataIndex];
        }
        return "";
    },
    afterTitle: (0, _helpersSegmentJs.aF),
    beforeBody: (0, _helpersSegmentJs.aF),
    beforeLabel: (0, _helpersSegmentJs.aF),
    label (tooltipItem) {
        if (this && this.options && this.options.mode === "dataset") return tooltipItem.label + ": " + tooltipItem.formattedValue || tooltipItem.formattedValue;
        let label = tooltipItem.dataset.label || "";
        if (label) label += ": ";
        const value = tooltipItem.formattedValue;
        if (!(0, _helpersSegmentJs.k)(value)) label += value;
        return label;
    },
    labelColor (tooltipItem) {
        const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
        const options = meta.controller.getStyle(tooltipItem.dataIndex);
        return {
            borderColor: options.borderColor,
            backgroundColor: options.backgroundColor,
            borderWidth: options.borderWidth,
            borderDash: options.borderDash,
            borderDashOffset: options.borderDashOffset,
            borderRadius: 0
        };
    },
    labelTextColor () {
        return this.options.bodyColor;
    },
    labelPointStyle (tooltipItem) {
        const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
        const options = meta.controller.getStyle(tooltipItem.dataIndex);
        return {
            pointStyle: options.pointStyle,
            rotation: options.rotation
        };
    },
    afterLabel: (0, _helpersSegmentJs.aF),
    afterBody: (0, _helpersSegmentJs.aF),
    beforeFooter: (0, _helpersSegmentJs.aF),
    footer: (0, _helpersSegmentJs.aF),
    afterFooter: (0, _helpersSegmentJs.aF)
};
function invokeCallbackWithFallback(callbacks, name1, ctx, arg) {
    const result = callbacks[name1].call(ctx, arg);
    if (typeof result === "undefined") return defaultCallbacks[name1].call(ctx, arg);
    return result;
}
class Tooltip extends Element {
    static positioners = positioners;
    constructor(config){
        super();
        this.opacity = 0;
        this._active = [];
        this._eventPosition = undefined;
        this._size = undefined;
        this._cachedAnimations = undefined;
        this._tooltipItems = [];
        this.$animations = undefined;
        this.$context = undefined;
        this.chart = config.chart;
        this.options = config.options;
        this.dataPoints = undefined;
        this.title = undefined;
        this.beforeBody = undefined;
        this.body = undefined;
        this.afterBody = undefined;
        this.footer = undefined;
        this.xAlign = undefined;
        this.yAlign = undefined;
        this.x = undefined;
        this.y = undefined;
        this.height = undefined;
        this.width = undefined;
        this.caretX = undefined;
        this.caretY = undefined;
        this.labelColors = undefined;
        this.labelPointStyles = undefined;
        this.labelTextColors = undefined;
    }
    initialize(options) {
        this.options = options;
        this._cachedAnimations = undefined;
        this.$context = undefined;
    }
    _resolveAnimations() {
        const cached = this._cachedAnimations;
        if (cached) return cached;
        const chart = this.chart;
        const options = this.options.setContext(this.getContext());
        const opts = options.enabled && chart.options.animation && options.animations;
        const animations = new Animations(this.chart, opts);
        if (opts._cacheable) this._cachedAnimations = Object.freeze(animations);
        return animations;
    }
    getContext() {
        return this.$context || (this.$context = createTooltipContext(this.chart.getContext(), this, this._tooltipItems));
    }
    getTitle(context, options) {
        const { callbacks  } = options;
        const beforeTitle = invokeCallbackWithFallback(callbacks, "beforeTitle", this, context);
        const title = invokeCallbackWithFallback(callbacks, "title", this, context);
        const afterTitle = invokeCallbackWithFallback(callbacks, "afterTitle", this, context);
        let lines = [];
        lines = pushOrConcat(lines, splitNewlines(beforeTitle));
        lines = pushOrConcat(lines, splitNewlines(title));
        lines = pushOrConcat(lines, splitNewlines(afterTitle));
        return lines;
    }
    getBeforeBody(tooltipItems, options) {
        return getBeforeAfterBodyLines(invokeCallbackWithFallback(options.callbacks, "beforeBody", this, tooltipItems));
    }
    getBody(tooltipItems, options) {
        const { callbacks  } = options;
        const bodyItems = [];
        (0, _helpersSegmentJs.F)(tooltipItems, (context)=>{
            const bodyItem = {
                before: [],
                lines: [],
                after: []
            };
            const scoped = overrideCallbacks(callbacks, context);
            pushOrConcat(bodyItem.before, splitNewlines(invokeCallbackWithFallback(scoped, "beforeLabel", this, context)));
            pushOrConcat(bodyItem.lines, invokeCallbackWithFallback(scoped, "label", this, context));
            pushOrConcat(bodyItem.after, splitNewlines(invokeCallbackWithFallback(scoped, "afterLabel", this, context)));
            bodyItems.push(bodyItem);
        });
        return bodyItems;
    }
    getAfterBody(tooltipItems, options) {
        return getBeforeAfterBodyLines(invokeCallbackWithFallback(options.callbacks, "afterBody", this, tooltipItems));
    }
    getFooter(tooltipItems, options) {
        const { callbacks  } = options;
        const beforeFooter = invokeCallbackWithFallback(callbacks, "beforeFooter", this, tooltipItems);
        const footer = invokeCallbackWithFallback(callbacks, "footer", this, tooltipItems);
        const afterFooter = invokeCallbackWithFallback(callbacks, "afterFooter", this, tooltipItems);
        let lines = [];
        lines = pushOrConcat(lines, splitNewlines(beforeFooter));
        lines = pushOrConcat(lines, splitNewlines(footer));
        lines = pushOrConcat(lines, splitNewlines(afterFooter));
        return lines;
    }
    _createItems(options) {
        const active = this._active;
        const data = this.chart.data;
        const labelColors = [];
        const labelPointStyles = [];
        const labelTextColors = [];
        let tooltipItems = [];
        let i, len;
        for(i = 0, len = active.length; i < len; ++i)tooltipItems.push(createTooltipItem(this.chart, active[i]));
        if (options.filter) tooltipItems = tooltipItems.filter((element, index, array)=>options.filter(element, index, array, data));
        if (options.itemSort) tooltipItems = tooltipItems.sort((a, b)=>options.itemSort(a, b, data));
        (0, _helpersSegmentJs.F)(tooltipItems, (context)=>{
            const scoped = overrideCallbacks(options.callbacks, context);
            labelColors.push(invokeCallbackWithFallback(scoped, "labelColor", this, context));
            labelPointStyles.push(invokeCallbackWithFallback(scoped, "labelPointStyle", this, context));
            labelTextColors.push(invokeCallbackWithFallback(scoped, "labelTextColor", this, context));
        });
        this.labelColors = labelColors;
        this.labelPointStyles = labelPointStyles;
        this.labelTextColors = labelTextColors;
        this.dataPoints = tooltipItems;
        return tooltipItems;
    }
    update(changed, replay) {
        const options = this.options.setContext(this.getContext());
        const active = this._active;
        let properties;
        let tooltipItems = [];
        if (!active.length) {
            if (this.opacity !== 0) properties = {
                opacity: 0
            };
        } else {
            const position = positioners[options.position].call(this, active, this._eventPosition);
            tooltipItems = this._createItems(options);
            this.title = this.getTitle(tooltipItems, options);
            this.beforeBody = this.getBeforeBody(tooltipItems, options);
            this.body = this.getBody(tooltipItems, options);
            this.afterBody = this.getAfterBody(tooltipItems, options);
            this.footer = this.getFooter(tooltipItems, options);
            const size = this._size = getTooltipSize(this, options);
            const positionAndSize = Object.assign({}, position, size);
            const alignment = determineAlignment(this.chart, options, positionAndSize);
            const backgroundPoint = getBackgroundPoint(options, positionAndSize, alignment, this.chart);
            this.xAlign = alignment.xAlign;
            this.yAlign = alignment.yAlign;
            properties = {
                opacity: 1,
                x: backgroundPoint.x,
                y: backgroundPoint.y,
                width: size.width,
                height: size.height,
                caretX: position.x,
                caretY: position.y
            };
        }
        this._tooltipItems = tooltipItems;
        this.$context = undefined;
        if (properties) this._resolveAnimations().update(this, properties);
        if (changed && options.external) options.external.call(this, {
            chart: this.chart,
            tooltip: this,
            replay
        });
    }
    drawCaret(tooltipPoint, ctx, size, options) {
        const caretPosition = this.getCaretPosition(tooltipPoint, size, options);
        ctx.lineTo(caretPosition.x1, caretPosition.y1);
        ctx.lineTo(caretPosition.x2, caretPosition.y2);
        ctx.lineTo(caretPosition.x3, caretPosition.y3);
    }
    getCaretPosition(tooltipPoint, size, options) {
        const { xAlign , yAlign  } = this;
        const { caretSize , cornerRadius  } = options;
        const { topLeft , topRight , bottomLeft , bottomRight  } = (0, _helpersSegmentJs.aw)(cornerRadius);
        const { x: ptX , y: ptY  } = tooltipPoint;
        const { width , height  } = size;
        let x1, x2, x3, y1, y2, y3;
        if (yAlign === "center") {
            y2 = ptY + height / 2;
            if (xAlign === "left") {
                x1 = ptX;
                x2 = x1 - caretSize;
                y1 = y2 + caretSize;
                y3 = y2 - caretSize;
            } else {
                x1 = ptX + width;
                x2 = x1 + caretSize;
                y1 = y2 - caretSize;
                y3 = y2 + caretSize;
            }
            x3 = x1;
        } else {
            if (xAlign === "left") x2 = ptX + Math.max(topLeft, bottomLeft) + caretSize;
            else if (xAlign === "right") x2 = ptX + width - Math.max(topRight, bottomRight) - caretSize;
            else x2 = this.caretX;
            if (yAlign === "top") {
                y1 = ptY;
                y2 = y1 - caretSize;
                x1 = x2 - caretSize;
                x3 = x2 + caretSize;
            } else {
                y1 = ptY + height;
                y2 = y1 + caretSize;
                x1 = x2 + caretSize;
                x3 = x2 - caretSize;
            }
            y3 = y1;
        }
        return {
            x1,
            x2,
            x3,
            y1,
            y2,
            y3
        };
    }
    drawTitle(pt, ctx, options) {
        const title = this.title;
        const length = title.length;
        let titleFont, titleSpacing, i;
        if (length) {
            const rtlHelper = (0, _helpersSegmentJs.az)(options.rtl, this.x, this.width);
            pt.x = getAlignedX(this, options.titleAlign, options);
            ctx.textAlign = rtlHelper.textAlign(options.titleAlign);
            ctx.textBaseline = "middle";
            titleFont = (0, _helpersSegmentJs.a0)(options.titleFont);
            titleSpacing = options.titleSpacing;
            ctx.fillStyle = options.titleColor;
            ctx.font = titleFont.string;
            for(i = 0; i < length; ++i){
                ctx.fillText(title[i], rtlHelper.x(pt.x), pt.y + titleFont.lineHeight / 2);
                pt.y += titleFont.lineHeight + titleSpacing;
                if (i + 1 === length) pt.y += options.titleMarginBottom - titleSpacing;
            }
        }
    }
    _drawColorBox(ctx, pt, i, rtlHelper, options) {
        const labelColors = this.labelColors[i];
        const labelPointStyle = this.labelPointStyles[i];
        const { boxHeight , boxWidth , boxPadding  } = options;
        const bodyFont = (0, _helpersSegmentJs.a0)(options.bodyFont);
        const colorX = getAlignedX(this, "left", options);
        const rtlColorX = rtlHelper.x(colorX);
        const yOffSet = boxHeight < bodyFont.lineHeight ? (bodyFont.lineHeight - boxHeight) / 2 : 0;
        const colorY = pt.y + yOffSet;
        if (options.usePointStyle) {
            const drawOptions = {
                radius: Math.min(boxWidth, boxHeight) / 2,
                pointStyle: labelPointStyle.pointStyle,
                rotation: labelPointStyle.rotation,
                borderWidth: 1
            };
            const centerX = rtlHelper.leftForLtr(rtlColorX, boxWidth) + boxWidth / 2;
            const centerY = colorY + boxHeight / 2;
            ctx.strokeStyle = options.multiKeyBackground;
            ctx.fillStyle = options.multiKeyBackground;
            (0, _helpersSegmentJs.at)(ctx, drawOptions, centerX, centerY);
            ctx.strokeStyle = labelColors.borderColor;
            ctx.fillStyle = labelColors.backgroundColor;
            (0, _helpersSegmentJs.at)(ctx, drawOptions, centerX, centerY);
        } else {
            ctx.lineWidth = (0, _helpersSegmentJs.i)(labelColors.borderWidth) ? Math.max(...Object.values(labelColors.borderWidth)) : labelColors.borderWidth || 1;
            ctx.strokeStyle = labelColors.borderColor;
            ctx.setLineDash(labelColors.borderDash || []);
            ctx.lineDashOffset = labelColors.borderDashOffset || 0;
            const outerX = rtlHelper.leftForLtr(rtlColorX, boxWidth - boxPadding);
            const innerX = rtlHelper.leftForLtr(rtlHelper.xPlus(rtlColorX, 1), boxWidth - boxPadding - 2);
            const borderRadius = (0, _helpersSegmentJs.aw)(labelColors.borderRadius);
            if (Object.values(borderRadius).some((v)=>v !== 0)) {
                ctx.beginPath();
                ctx.fillStyle = options.multiKeyBackground;
                (0, _helpersSegmentJs.au)(ctx, {
                    x: outerX,
                    y: colorY,
                    w: boxWidth,
                    h: boxHeight,
                    radius: borderRadius
                });
                ctx.fill();
                ctx.stroke();
                ctx.fillStyle = labelColors.backgroundColor;
                ctx.beginPath();
                (0, _helpersSegmentJs.au)(ctx, {
                    x: innerX,
                    y: colorY + 1,
                    w: boxWidth - 2,
                    h: boxHeight - 2,
                    radius: borderRadius
                });
                ctx.fill();
            } else {
                ctx.fillStyle = options.multiKeyBackground;
                ctx.fillRect(outerX, colorY, boxWidth, boxHeight);
                ctx.strokeRect(outerX, colorY, boxWidth, boxHeight);
                ctx.fillStyle = labelColors.backgroundColor;
                ctx.fillRect(innerX, colorY + 1, boxWidth - 2, boxHeight - 2);
            }
        }
        ctx.fillStyle = this.labelTextColors[i];
    }
    drawBody(pt, ctx, options) {
        const { body  } = this;
        const { bodySpacing , bodyAlign , displayColors , boxHeight , boxWidth , boxPadding  } = options;
        const bodyFont = (0, _helpersSegmentJs.a0)(options.bodyFont);
        let bodyLineHeight = bodyFont.lineHeight;
        let xLinePadding = 0;
        const rtlHelper = (0, _helpersSegmentJs.az)(options.rtl, this.x, this.width);
        const fillLineOfText = function(line) {
            ctx.fillText(line, rtlHelper.x(pt.x + xLinePadding), pt.y + bodyLineHeight / 2);
            pt.y += bodyLineHeight + bodySpacing;
        };
        const bodyAlignForCalculation = rtlHelper.textAlign(bodyAlign);
        let bodyItem, textColor, lines, i, j, ilen, jlen;
        ctx.textAlign = bodyAlign;
        ctx.textBaseline = "middle";
        ctx.font = bodyFont.string;
        pt.x = getAlignedX(this, bodyAlignForCalculation, options);
        ctx.fillStyle = options.bodyColor;
        (0, _helpersSegmentJs.F)(this.beforeBody, fillLineOfText);
        xLinePadding = displayColors && bodyAlignForCalculation !== "right" ? bodyAlign === "center" ? boxWidth / 2 + boxPadding : boxWidth + 2 + boxPadding : 0;
        for(i = 0, ilen = body.length; i < ilen; ++i){
            bodyItem = body[i];
            textColor = this.labelTextColors[i];
            ctx.fillStyle = textColor;
            (0, _helpersSegmentJs.F)(bodyItem.before, fillLineOfText);
            lines = bodyItem.lines;
            if (displayColors && lines.length) {
                this._drawColorBox(ctx, pt, i, rtlHelper, options);
                bodyLineHeight = Math.max(bodyFont.lineHeight, boxHeight);
            }
            for(j = 0, jlen = lines.length; j < jlen; ++j){
                fillLineOfText(lines[j]);
                bodyLineHeight = bodyFont.lineHeight;
            }
            (0, _helpersSegmentJs.F)(bodyItem.after, fillLineOfText);
        }
        xLinePadding = 0;
        bodyLineHeight = bodyFont.lineHeight;
        (0, _helpersSegmentJs.F)(this.afterBody, fillLineOfText);
        pt.y -= bodySpacing;
    }
    drawFooter(pt, ctx, options) {
        const footer = this.footer;
        const length = footer.length;
        let footerFont, i;
        if (length) {
            const rtlHelper = (0, _helpersSegmentJs.az)(options.rtl, this.x, this.width);
            pt.x = getAlignedX(this, options.footerAlign, options);
            pt.y += options.footerMarginTop;
            ctx.textAlign = rtlHelper.textAlign(options.footerAlign);
            ctx.textBaseline = "middle";
            footerFont = (0, _helpersSegmentJs.a0)(options.footerFont);
            ctx.fillStyle = options.footerColor;
            ctx.font = footerFont.string;
            for(i = 0; i < length; ++i){
                ctx.fillText(footer[i], rtlHelper.x(pt.x), pt.y + footerFont.lineHeight / 2);
                pt.y += footerFont.lineHeight + options.footerSpacing;
            }
        }
    }
    drawBackground(pt, ctx, tooltipSize, options) {
        const { xAlign , yAlign  } = this;
        const { x , y  } = pt;
        const { width , height  } = tooltipSize;
        const { topLeft , topRight , bottomLeft , bottomRight  } = (0, _helpersSegmentJs.aw)(options.cornerRadius);
        ctx.fillStyle = options.backgroundColor;
        ctx.strokeStyle = options.borderColor;
        ctx.lineWidth = options.borderWidth;
        ctx.beginPath();
        ctx.moveTo(x + topLeft, y);
        if (yAlign === "top") this.drawCaret(pt, ctx, tooltipSize, options);
        ctx.lineTo(x + width - topRight, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + topRight);
        if (yAlign === "center" && xAlign === "right") this.drawCaret(pt, ctx, tooltipSize, options);
        ctx.lineTo(x + width, y + height - bottomRight);
        ctx.quadraticCurveTo(x + width, y + height, x + width - bottomRight, y + height);
        if (yAlign === "bottom") this.drawCaret(pt, ctx, tooltipSize, options);
        ctx.lineTo(x + bottomLeft, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - bottomLeft);
        if (yAlign === "center" && xAlign === "left") this.drawCaret(pt, ctx, tooltipSize, options);
        ctx.lineTo(x, y + topLeft);
        ctx.quadraticCurveTo(x, y, x + topLeft, y);
        ctx.closePath();
        ctx.fill();
        if (options.borderWidth > 0) ctx.stroke();
    }
    _updateAnimationTarget(options) {
        const chart = this.chart;
        const anims = this.$animations;
        const animX = anims && anims.x;
        const animY = anims && anims.y;
        if (animX || animY) {
            const position = positioners[options.position].call(this, this._active, this._eventPosition);
            if (!position) return;
            const size = this._size = getTooltipSize(this, options);
            const positionAndSize = Object.assign({}, position, this._size);
            const alignment = determineAlignment(chart, options, positionAndSize);
            const point = getBackgroundPoint(options, positionAndSize, alignment, chart);
            if (animX._to !== point.x || animY._to !== point.y) {
                this.xAlign = alignment.xAlign;
                this.yAlign = alignment.yAlign;
                this.width = size.width;
                this.height = size.height;
                this.caretX = position.x;
                this.caretY = position.y;
                this._resolveAnimations().update(this, point);
            }
        }
    }
    _willRender() {
        return !!this.opacity;
    }
    draw(ctx) {
        const options = this.options.setContext(this.getContext());
        let opacity = this.opacity;
        if (!opacity) return;
        this._updateAnimationTarget(options);
        const tooltipSize = {
            width: this.width,
            height: this.height
        };
        const pt = {
            x: this.x,
            y: this.y
        };
        opacity = Math.abs(opacity) < 1e-3 ? 0 : opacity;
        const padding = (0, _helpersSegmentJs.E)(options.padding);
        const hasTooltipContent = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
        if (options.enabled && hasTooltipContent) {
            ctx.save();
            ctx.globalAlpha = opacity;
            this.drawBackground(pt, ctx, tooltipSize, options);
            (0, _helpersSegmentJs.aA)(ctx, options.textDirection);
            pt.y += padding.top;
            this.drawTitle(pt, ctx, options);
            this.drawBody(pt, ctx, options);
            this.drawFooter(pt, ctx, options);
            (0, _helpersSegmentJs.aC)(ctx, options.textDirection);
            ctx.restore();
        }
    }
    getActiveElements() {
        return this._active || [];
    }
    setActiveElements(activeElements, eventPosition) {
        const lastActive = this._active;
        const active = activeElements.map(({ datasetIndex , index  })=>{
            const meta = this.chart.getDatasetMeta(datasetIndex);
            if (!meta) throw new Error("Cannot find a dataset at index " + datasetIndex);
            return {
                datasetIndex,
                element: meta.data[index],
                index
            };
        });
        const changed = !(0, _helpersSegmentJs.ah)(lastActive, active);
        const positionChanged = this._positionChanged(active, eventPosition);
        if (changed || positionChanged) {
            this._active = active;
            this._eventPosition = eventPosition;
            this._ignoreReplayEvents = true;
            this.update(true);
        }
    }
    handleEvent(e, replay, inChartArea = true) {
        if (replay && this._ignoreReplayEvents) return false;
        this._ignoreReplayEvents = false;
        const options = this.options;
        const lastActive = this._active || [];
        const active = this._getActiveElements(e, lastActive, replay, inChartArea);
        const positionChanged = this._positionChanged(active, e);
        const changed = replay || !(0, _helpersSegmentJs.ah)(active, lastActive) || positionChanged;
        if (changed) {
            this._active = active;
            if (options.enabled || options.external) {
                this._eventPosition = {
                    x: e.x,
                    y: e.y
                };
                this.update(true, replay);
            }
        }
        return changed;
    }
    _getActiveElements(e, lastActive, replay, inChartArea) {
        const options = this.options;
        if (e.type === "mouseout") return [];
        if (!inChartArea) return lastActive;
        const active = this.chart.getElementsAtEventForMode(e, options.mode, options, replay);
        if (options.reverse) active.reverse();
        return active;
    }
    _positionChanged(active, e) {
        const { caretX , caretY , options  } = this;
        const position = positioners[options.position].call(this, active, e);
        return position !== false && (caretX !== position.x || caretY !== position.y);
    }
}
var plugin_tooltip = {
    id: "tooltip",
    _element: Tooltip,
    positioners,
    afterInit (chart, _args, options) {
        if (options) chart.tooltip = new Tooltip({
            chart,
            options
        });
    },
    beforeUpdate (chart, _args, options) {
        if (chart.tooltip) chart.tooltip.initialize(options);
    },
    reset (chart, _args, options) {
        if (chart.tooltip) chart.tooltip.initialize(options);
    },
    afterDraw (chart) {
        const tooltip = chart.tooltip;
        if (tooltip && tooltip._willRender()) {
            const args = {
                tooltip
            };
            if (chart.notifyPlugins("beforeTooltipDraw", {
                ...args,
                cancelable: true
            }) === false) return;
            tooltip.draw(chart.ctx);
            chart.notifyPlugins("afterTooltipDraw", args);
        }
    },
    afterEvent (chart, args) {
        if (chart.tooltip) {
            const useFinalPosition = args.replay;
            if (chart.tooltip.handleEvent(args.event, useFinalPosition, args.inChartArea)) args.changed = true;
        }
    },
    defaults: {
        enabled: true,
        external: null,
        position: "average",
        backgroundColor: "rgba(0,0,0,0.8)",
        titleColor: "#fff",
        titleFont: {
            weight: "bold"
        },
        titleSpacing: 2,
        titleMarginBottom: 6,
        titleAlign: "left",
        bodyColor: "#fff",
        bodySpacing: 2,
        bodyFont: {},
        bodyAlign: "left",
        footerColor: "#fff",
        footerSpacing: 2,
        footerMarginTop: 6,
        footerFont: {
            weight: "bold"
        },
        footerAlign: "left",
        padding: 6,
        caretPadding: 2,
        caretSize: 5,
        cornerRadius: 6,
        boxHeight: (ctx, opts)=>opts.bodyFont.size,
        boxWidth: (ctx, opts)=>opts.bodyFont.size,
        multiKeyBackground: "#fff",
        displayColors: true,
        boxPadding: 0,
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 0,
        animation: {
            duration: 400,
            easing: "easeOutQuart"
        },
        animations: {
            numbers: {
                type: "number",
                properties: [
                    "x",
                    "y",
                    "width",
                    "height",
                    "caretX",
                    "caretY"
                ]
            },
            opacity: {
                easing: "linear",
                duration: 200
            }
        },
        callbacks: defaultCallbacks
    },
    defaultRoutes: {
        bodyFont: "font",
        footerFont: "font",
        titleFont: "font"
    },
    descriptors: {
        _scriptable: (name1)=>name1 !== "filter" && name1 !== "itemSort" && name1 !== "external",
        _indexable: false,
        callbacks: {
            _scriptable: false,
            _indexable: false
        },
        animation: {
            _fallback: false
        },
        animations: {
            _fallback: "animation"
        }
    },
    additionalOptionScopes: [
        "interaction"
    ]
};
var plugins = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    Colors: plugin_colors,
    Decimation: plugin_decimation,
    Filler: index,
    Legend: plugin_legend,
    SubTitle: plugin_subtitle,
    Title: plugin_title,
    Tooltip: plugin_tooltip
});
const addIfString = (labels, raw, index, addedLabels)=>{
    if (typeof raw === "string") {
        index = labels.push(raw) - 1;
        addedLabels.unshift({
            index,
            label: raw
        });
    } else if (isNaN(raw)) index = null;
    return index;
};
function findOrAddLabel(labels, raw, index, addedLabels) {
    const first = labels.indexOf(raw);
    if (first === -1) return addIfString(labels, raw, index, addedLabels);
    const last = labels.lastIndexOf(raw);
    return first !== last ? index : first;
}
const validIndex = (index, max)=>index === null ? null : (0, _helpersSegmentJs.S)(Math.round(index), 0, max);
function _getLabelForValue(value) {
    const labels = this.getLabels();
    if (value >= 0 && value < labels.length) return labels[value];
    return value;
}
class CategoryScale extends Scale {
    static id = "category";
    static defaults = {
        ticks: {
            callback: _getLabelForValue
        }
    };
    constructor(cfg){
        super(cfg);
        this._startValue = undefined;
        this._valueRange = 0;
        this._addedLabels = [];
    }
    init(scaleOptions) {
        const added = this._addedLabels;
        if (added.length) {
            const labels = this.getLabels();
            for (const { index , label  } of added)if (labels[index] === label) labels.splice(index, 1);
            this._addedLabels = [];
        }
        super.init(scaleOptions);
    }
    parse(raw, index) {
        if ((0, _helpersSegmentJs.k)(raw)) return null;
        const labels = this.getLabels();
        index = isFinite(index) && labels[index] === raw ? index : findOrAddLabel(labels, raw, (0, _helpersSegmentJs.v)(index, raw), this._addedLabels);
        return validIndex(index, labels.length - 1);
    }
    determineDataLimits() {
        const { minDefined , maxDefined  } = this.getUserBounds();
        let { min , max  } = this.getMinMax(true);
        if (this.options.bounds === "ticks") {
            if (!minDefined) min = 0;
            if (!maxDefined) max = this.getLabels().length - 1;
        }
        this.min = min;
        this.max = max;
    }
    buildTicks() {
        const min = this.min;
        const max = this.max;
        const offset = this.options.offset;
        const ticks = [];
        let labels = this.getLabels();
        labels = min === 0 && max === labels.length - 1 ? labels : labels.slice(min, max + 1);
        this._valueRange = Math.max(labels.length - (offset ? 0 : 1), 1);
        this._startValue = this.min - (offset ? 0.5 : 0);
        for(let value = min; value <= max; value++)ticks.push({
            value
        });
        return ticks;
    }
    getLabelForValue(value) {
        return _getLabelForValue.call(this, value);
    }
    configure() {
        super.configure();
        if (!this.isHorizontal()) this._reversePixels = !this._reversePixels;
    }
    getPixelForValue(value) {
        if (typeof value !== "number") value = this.parse(value);
        return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
    }
    getPixelForTick(index) {
        const ticks = this.ticks;
        if (index < 0 || index > ticks.length - 1) return null;
        return this.getPixelForValue(ticks[index].value);
    }
    getValueForPixel(pixel) {
        return Math.round(this._startValue + this.getDecimalForPixel(pixel) * this._valueRange);
    }
    getBasePixel() {
        return this.bottom;
    }
}
function generateTicks$1(generationOptions, dataRange) {
    const ticks = [];
    const MIN_SPACING = 1e-14;
    const { bounds , step , min , max , precision , count , maxTicks , maxDigits , includeBounds  } = generationOptions;
    const unit = step || 1;
    const maxSpaces = maxTicks - 1;
    const { min: rmin , max: rmax  } = dataRange;
    const minDefined = !(0, _helpersSegmentJs.k)(min);
    const maxDefined = !(0, _helpersSegmentJs.k)(max);
    const countDefined = !(0, _helpersSegmentJs.k)(count);
    const minSpacing = (rmax - rmin) / (maxDigits + 1);
    let spacing = (0, _helpersSegmentJs.aH)((rmax - rmin) / maxSpaces / unit) * unit;
    let factor, niceMin, niceMax, numSpaces;
    if (spacing < MIN_SPACING && !minDefined && !maxDefined) return [
        {
            value: rmin
        },
        {
            value: rmax
        }
    ];
    numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);
    if (numSpaces > maxSpaces) spacing = (0, _helpersSegmentJs.aH)(numSpaces * spacing / maxSpaces / unit) * unit;
    if (!(0, _helpersSegmentJs.k)(precision)) {
        factor = Math.pow(10, precision);
        spacing = Math.ceil(spacing * factor) / factor;
    }
    if (bounds === "ticks") {
        niceMin = Math.floor(rmin / spacing) * spacing;
        niceMax = Math.ceil(rmax / spacing) * spacing;
    } else {
        niceMin = rmin;
        niceMax = rmax;
    }
    if (minDefined && maxDefined && step && (0, _helpersSegmentJs.aI)((max - min) / step, spacing / 1000)) {
        numSpaces = Math.round(Math.min((max - min) / spacing, maxTicks));
        spacing = (max - min) / numSpaces;
        niceMin = min;
        niceMax = max;
    } else if (countDefined) {
        niceMin = minDefined ? min : niceMin;
        niceMax = maxDefined ? max : niceMax;
        numSpaces = count - 1;
        spacing = (niceMax - niceMin) / numSpaces;
    } else {
        numSpaces = (niceMax - niceMin) / spacing;
        if ((0, _helpersSegmentJs.aJ)(numSpaces, Math.round(numSpaces), spacing / 1000)) numSpaces = Math.round(numSpaces);
        else numSpaces = Math.ceil(numSpaces);
    }
    const decimalPlaces = Math.max((0, _helpersSegmentJs.aK)(spacing), (0, _helpersSegmentJs.aK)(niceMin));
    factor = Math.pow(10, (0, _helpersSegmentJs.k)(precision) ? decimalPlaces : precision);
    niceMin = Math.round(niceMin * factor) / factor;
    niceMax = Math.round(niceMax * factor) / factor;
    let j = 0;
    if (minDefined) {
        if (includeBounds && niceMin !== min) {
            ticks.push({
                value: min
            });
            if (niceMin < min) j++;
            if ((0, _helpersSegmentJs.aJ)(Math.round((niceMin + j * spacing) * factor) / factor, min, relativeLabelSize(min, minSpacing, generationOptions))) j++;
        } else if (niceMin < min) j++;
    }
    for(; j < numSpaces; ++j)ticks.push({
        value: Math.round((niceMin + j * spacing) * factor) / factor
    });
    if (maxDefined && includeBounds && niceMax !== max) {
        if (ticks.length && (0, _helpersSegmentJs.aJ)(ticks[ticks.length - 1].value, max, relativeLabelSize(max, minSpacing, generationOptions))) ticks[ticks.length - 1].value = max;
        else ticks.push({
            value: max
        });
    } else if (!maxDefined || niceMax === max) ticks.push({
        value: niceMax
    });
    return ticks;
}
function relativeLabelSize(value, minSpacing, { horizontal , minRotation  }) {
    const rad = (0, _helpersSegmentJs.t)(minRotation);
    const ratio = (horizontal ? Math.sin(rad) : Math.cos(rad)) || 0.001;
    const length = 0.75 * minSpacing * ("" + value).length;
    return Math.min(minSpacing / ratio, length);
}
class LinearScaleBase extends Scale {
    constructor(cfg){
        super(cfg);
        this.start = undefined;
        this.end = undefined;
        this._startValue = undefined;
        this._endValue = undefined;
        this._valueRange = 0;
    }
    parse(raw, index) {
        if ((0, _helpersSegmentJs.k)(raw)) return null;
        if ((typeof raw === "number" || raw instanceof Number) && !isFinite(+raw)) return null;
        return +raw;
    }
    handleTickRangeOptions() {
        const { beginAtZero  } = this.options;
        const { minDefined , maxDefined  } = this.getUserBounds();
        let { min , max  } = this;
        const setMin = (v)=>min = minDefined ? min : v;
        const setMax = (v)=>max = maxDefined ? max : v;
        if (beginAtZero) {
            const minSign = (0, _helpersSegmentJs.s)(min);
            const maxSign = (0, _helpersSegmentJs.s)(max);
            if (minSign < 0 && maxSign < 0) setMax(0);
            else if (minSign > 0 && maxSign > 0) setMin(0);
        }
        if (min === max) {
            let offset = max === 0 ? 1 : Math.abs(max * 0.05);
            setMax(max + offset);
            if (!beginAtZero) setMin(min - offset);
        }
        this.min = min;
        this.max = max;
    }
    getTickLimit() {
        const tickOpts = this.options.ticks;
        let { maxTicksLimit , stepSize  } = tickOpts;
        let maxTicks;
        if (stepSize) {
            maxTicks = Math.ceil(this.max / stepSize) - Math.floor(this.min / stepSize) + 1;
            if (maxTicks > 1000) {
                console.warn(`scales.${this.id}.ticks.stepSize: ${stepSize} would result generating up to ${maxTicks} ticks. Limiting to 1000.`);
                maxTicks = 1000;
            }
        } else {
            maxTicks = this.computeTickLimit();
            maxTicksLimit = maxTicksLimit || 11;
        }
        if (maxTicksLimit) maxTicks = Math.min(maxTicksLimit, maxTicks);
        return maxTicks;
    }
    computeTickLimit() {
        return Number.POSITIVE_INFINITY;
    }
    buildTicks() {
        const opts = this.options;
        const tickOpts = opts.ticks;
        let maxTicks = this.getTickLimit();
        maxTicks = Math.max(2, maxTicks);
        const numericGeneratorOptions = {
            maxTicks,
            bounds: opts.bounds,
            min: opts.min,
            max: opts.max,
            precision: tickOpts.precision,
            step: tickOpts.stepSize,
            count: tickOpts.count,
            maxDigits: this._maxDigits(),
            horizontal: this.isHorizontal(),
            minRotation: tickOpts.minRotation || 0,
            includeBounds: tickOpts.includeBounds !== false
        };
        const dataRange = this._range || this;
        const ticks = generateTicks$1(numericGeneratorOptions, dataRange);
        if (opts.bounds === "ticks") (0, _helpersSegmentJs.aG)(ticks, this, "value");
        if (opts.reverse) {
            ticks.reverse();
            this.start = this.max;
            this.end = this.min;
        } else {
            this.start = this.min;
            this.end = this.max;
        }
        return ticks;
    }
    configure() {
        const ticks = this.ticks;
        let start = this.min;
        let end = this.max;
        super.configure();
        if (this.options.offset && ticks.length) {
            const offset = (end - start) / Math.max(ticks.length - 1, 1) / 2;
            start -= offset;
            end += offset;
        }
        this._startValue = start;
        this._endValue = end;
        this._valueRange = end - start;
    }
    getLabelForValue(value) {
        return (0, _helpersSegmentJs.o)(value, this.chart.options.locale, this.options.ticks.format);
    }
}
class LinearScale extends LinearScaleBase {
    static id = "linear";
    static defaults = {
        ticks: {
            callback: (0, _helpersSegmentJs.aL).formatters.numeric
        }
    };
    determineDataLimits() {
        const { min , max  } = this.getMinMax(true);
        this.min = (0, _helpersSegmentJs.g)(min) ? min : 0;
        this.max = (0, _helpersSegmentJs.g)(max) ? max : 1;
        this.handleTickRangeOptions();
    }
    computeTickLimit() {
        const horizontal = this.isHorizontal();
        const length = horizontal ? this.width : this.height;
        const minRotation = (0, _helpersSegmentJs.t)(this.options.ticks.minRotation);
        const ratio = (horizontal ? Math.sin(minRotation) : Math.cos(minRotation)) || 0.001;
        const tickFont = this._resolveTickFontOptions(0);
        return Math.ceil(length / Math.min(40, tickFont.lineHeight / ratio));
    }
    getPixelForValue(value) {
        return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
    }
    getValueForPixel(pixel) {
        return this._startValue + this.getDecimalForPixel(pixel) * this._valueRange;
    }
}
const log10Floor = (v)=>Math.floor((0, _helpersSegmentJs.aM)(v));
const changeExponent = (v, m)=>Math.pow(10, log10Floor(v) + m);
function isMajor(tickVal) {
    const remain = tickVal / Math.pow(10, log10Floor(tickVal));
    return remain === 1;
}
function steps(min, max, rangeExp) {
    const rangeStep = Math.pow(10, rangeExp);
    const start = Math.floor(min / rangeStep);
    const end = Math.ceil(max / rangeStep);
    return end - start;
}
function startExp(min, max) {
    const range = max - min;
    let rangeExp = log10Floor(range);
    while(steps(min, max, rangeExp) > 10)rangeExp++;
    while(steps(min, max, rangeExp) < 10)rangeExp--;
    return Math.min(rangeExp, log10Floor(min));
}
function generateTicks(generationOptions, { min , max  }) {
    min = (0, _helpersSegmentJs.O)(generationOptions.min, min);
    const ticks = [];
    const minExp = log10Floor(min);
    let exp = startExp(min, max);
    let precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;
    const stepSize = Math.pow(10, exp);
    const base = minExp > exp ? Math.pow(10, minExp) : 0;
    const start = Math.round((min - base) * precision) / precision;
    const offset = Math.floor((min - base) / stepSize / 10) * stepSize * 10;
    let significand = Math.floor((start - offset) / Math.pow(10, exp));
    let value = (0, _helpersSegmentJs.O)(generationOptions.min, Math.round((base + offset + significand * Math.pow(10, exp)) * precision) / precision);
    while(value < max){
        ticks.push({
            value,
            major: isMajor(value),
            significand
        });
        if (significand >= 10) significand = significand < 15 ? 15 : 20;
        else significand++;
        if (significand >= 20) {
            exp++;
            significand = 2;
            precision = exp >= 0 ? 1 : precision;
        }
        value = Math.round((base + offset + significand * Math.pow(10, exp)) * precision) / precision;
    }
    const lastTick = (0, _helpersSegmentJs.O)(generationOptions.max, value);
    ticks.push({
        value: lastTick,
        major: isMajor(lastTick),
        significand
    });
    return ticks;
}
class LogarithmicScale extends Scale {
    static id = "logarithmic";
    static defaults = {
        ticks: {
            callback: (0, _helpersSegmentJs.aL).formatters.logarithmic,
            major: {
                enabled: true
            }
        }
    };
    constructor(cfg){
        super(cfg);
        this.start = undefined;
        this.end = undefined;
        this._startValue = undefined;
        this._valueRange = 0;
    }
    parse(raw, index) {
        const value = LinearScaleBase.prototype.parse.apply(this, [
            raw,
            index
        ]);
        if (value === 0) {
            this._zero = true;
            return undefined;
        }
        return (0, _helpersSegmentJs.g)(value) && value > 0 ? value : null;
    }
    determineDataLimits() {
        const { min , max  } = this.getMinMax(true);
        this.min = (0, _helpersSegmentJs.g)(min) ? Math.max(0, min) : null;
        this.max = (0, _helpersSegmentJs.g)(max) ? Math.max(0, max) : null;
        if (this.options.beginAtZero) this._zero = true;
        if (this._zero && this.min !== this._suggestedMin && !(0, _helpersSegmentJs.g)(this._userMin)) this.min = min === changeExponent(this.min, 0) ? changeExponent(this.min, -1) : changeExponent(this.min, 0);
        this.handleTickRangeOptions();
    }
    handleTickRangeOptions() {
        const { minDefined , maxDefined  } = this.getUserBounds();
        let min = this.min;
        let max = this.max;
        const setMin = (v)=>min = minDefined ? min : v;
        const setMax = (v)=>max = maxDefined ? max : v;
        if (min === max) {
            if (min <= 0) {
                setMin(1);
                setMax(10);
            } else {
                setMin(changeExponent(min, -1));
                setMax(changeExponent(max, 1));
            }
        }
        if (min <= 0) setMin(changeExponent(max, -1));
        if (max <= 0) setMax(changeExponent(min, 1));
        this.min = min;
        this.max = max;
    }
    buildTicks() {
        const opts = this.options;
        const generationOptions = {
            min: this._userMin,
            max: this._userMax
        };
        const ticks = generateTicks(generationOptions, this);
        if (opts.bounds === "ticks") (0, _helpersSegmentJs.aG)(ticks, this, "value");
        if (opts.reverse) {
            ticks.reverse();
            this.start = this.max;
            this.end = this.min;
        } else {
            this.start = this.min;
            this.end = this.max;
        }
        return ticks;
    }
    getLabelForValue(value) {
        return value === undefined ? "0" : (0, _helpersSegmentJs.o)(value, this.chart.options.locale, this.options.ticks.format);
    }
    configure() {
        const start = this.min;
        super.configure();
        this._startValue = (0, _helpersSegmentJs.aM)(start);
        this._valueRange = (0, _helpersSegmentJs.aM)(this.max) - (0, _helpersSegmentJs.aM)(start);
    }
    getPixelForValue(value) {
        if (value === undefined || value === 0) value = this.min;
        if (value === null || isNaN(value)) return NaN;
        return this.getPixelForDecimal(value === this.min ? 0 : ((0, _helpersSegmentJs.aM)(value) - this._startValue) / this._valueRange);
    }
    getValueForPixel(pixel) {
        const decimal = this.getDecimalForPixel(pixel);
        return Math.pow(10, this._startValue + decimal * this._valueRange);
    }
}
function getTickBackdropHeight(opts) {
    const tickOpts = opts.ticks;
    if (tickOpts.display && opts.display) {
        const padding = (0, _helpersSegmentJs.E)(tickOpts.backdropPadding);
        return (0, _helpersSegmentJs.v)(tickOpts.font && tickOpts.font.size, (0, _helpersSegmentJs.d).font.size) + padding.height;
    }
    return 0;
}
function measureLabelSize(ctx, font, label) {
    label = (0, _helpersSegmentJs.b)(label) ? label : [
        label
    ];
    return {
        w: (0, _helpersSegmentJs.aN)(ctx, font.string, label),
        h: label.length * font.lineHeight
    };
}
function determineLimits(angle, pos, size, min, max) {
    if (angle === min || angle === max) return {
        start: pos - size / 2,
        end: pos + size / 2
    };
    else if (angle < min || angle > max) return {
        start: pos - size,
        end: pos
    };
    return {
        start: pos,
        end: pos + size
    };
}
function fitWithPointLabels(scale) {
    const orig = {
        l: scale.left + scale._padding.left,
        r: scale.right - scale._padding.right,
        t: scale.top + scale._padding.top,
        b: scale.bottom - scale._padding.bottom
    };
    const limits = Object.assign({}, orig);
    const labelSizes = [];
    const padding = [];
    const valueCount = scale._pointLabels.length;
    const pointLabelOpts = scale.options.pointLabels;
    const additionalAngle = pointLabelOpts.centerPointLabels ? (0, _helpersSegmentJs.P) / valueCount : 0;
    for(let i = 0; i < valueCount; i++){
        const opts = pointLabelOpts.setContext(scale.getPointLabelContext(i));
        padding[i] = opts.padding;
        const pointPosition = scale.getPointPosition(i, scale.drawingArea + padding[i], additionalAngle);
        const plFont = (0, _helpersSegmentJs.a0)(opts.font);
        const textSize = measureLabelSize(scale.ctx, plFont, scale._pointLabels[i]);
        labelSizes[i] = textSize;
        const angleRadians = (0, _helpersSegmentJs.ay)(scale.getIndexAngle(i) + additionalAngle);
        const angle = Math.round((0, _helpersSegmentJs.U)(angleRadians));
        const hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
        const vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);
        updateLimits(limits, orig, angleRadians, hLimits, vLimits);
    }
    scale.setCenterPoint(orig.l - limits.l, limits.r - orig.r, orig.t - limits.t, limits.b - orig.b);
    scale._pointLabelItems = buildPointLabelItems(scale, labelSizes, padding);
}
function updateLimits(limits, orig, angle, hLimits, vLimits) {
    const sin = Math.abs(Math.sin(angle));
    const cos = Math.abs(Math.cos(angle));
    let x = 0;
    let y = 0;
    if (hLimits.start < orig.l) {
        x = (orig.l - hLimits.start) / sin;
        limits.l = Math.min(limits.l, orig.l - x);
    } else if (hLimits.end > orig.r) {
        x = (hLimits.end - orig.r) / sin;
        limits.r = Math.max(limits.r, orig.r + x);
    }
    if (vLimits.start < orig.t) {
        y = (orig.t - vLimits.start) / cos;
        limits.t = Math.min(limits.t, orig.t - y);
    } else if (vLimits.end > orig.b) {
        y = (vLimits.end - orig.b) / cos;
        limits.b = Math.max(limits.b, orig.b + y);
    }
}
function buildPointLabelItems(scale, labelSizes, padding) {
    const items = [];
    const valueCount = scale._pointLabels.length;
    const opts = scale.options;
    const extra = getTickBackdropHeight(opts) / 2;
    const outerDistance = scale.drawingArea;
    const additionalAngle = opts.pointLabels.centerPointLabels ? (0, _helpersSegmentJs.P) / valueCount : 0;
    for(let i = 0; i < valueCount; i++){
        const pointLabelPosition = scale.getPointPosition(i, outerDistance + extra + padding[i], additionalAngle);
        const angle = Math.round((0, _helpersSegmentJs.U)((0, _helpersSegmentJs.ay)(pointLabelPosition.angle + (0, _helpersSegmentJs.H))));
        const size = labelSizes[i];
        const y = yForAngle(pointLabelPosition.y, size.h, angle);
        const textAlign = getTextAlignForAngle(angle);
        const left = leftForTextAlign(pointLabelPosition.x, size.w, textAlign);
        items.push({
            x: pointLabelPosition.x,
            y,
            textAlign,
            left,
            top: y,
            right: left + size.w,
            bottom: y + size.h
        });
    }
    return items;
}
function getTextAlignForAngle(angle) {
    if (angle === 0 || angle === 180) return "center";
    else if (angle < 180) return "left";
    return "right";
}
function leftForTextAlign(x, w, align) {
    if (align === "right") x -= w;
    else if (align === "center") x -= w / 2;
    return x;
}
function yForAngle(y, h, angle) {
    if (angle === 90 || angle === 270) y -= h / 2;
    else if (angle > 270 || angle < 90) y -= h;
    return y;
}
function drawPointLabels(scale, labelCount) {
    const { ctx , options: { pointLabels  }  } = scale;
    for(let i = labelCount - 1; i >= 0; i--){
        const optsAtIndex = pointLabels.setContext(scale.getPointLabelContext(i));
        const plFont = (0, _helpersSegmentJs.a0)(optsAtIndex.font);
        const { x , y , textAlign , left , top , right , bottom  } = scale._pointLabelItems[i];
        const { backdropColor  } = optsAtIndex;
        if (!(0, _helpersSegmentJs.k)(backdropColor)) {
            const borderRadius = (0, _helpersSegmentJs.aw)(optsAtIndex.borderRadius);
            const padding = (0, _helpersSegmentJs.E)(optsAtIndex.backdropPadding);
            ctx.fillStyle = backdropColor;
            const backdropLeft = left - padding.left;
            const backdropTop = top - padding.top;
            const backdropWidth = right - left + padding.width;
            const backdropHeight = bottom - top + padding.height;
            if (Object.values(borderRadius).some((v)=>v !== 0)) {
                ctx.beginPath();
                (0, _helpersSegmentJs.au)(ctx, {
                    x: backdropLeft,
                    y: backdropTop,
                    w: backdropWidth,
                    h: backdropHeight,
                    radius: borderRadius
                });
                ctx.fill();
            } else ctx.fillRect(backdropLeft, backdropTop, backdropWidth, backdropHeight);
        }
        (0, _helpersSegmentJs.Z)(ctx, scale._pointLabels[i], x, y + plFont.lineHeight / 2, plFont, {
            color: optsAtIndex.color,
            textAlign: textAlign,
            textBaseline: "middle"
        });
    }
}
function pathRadiusLine(scale, radius, circular, labelCount) {
    const { ctx  } = scale;
    if (circular) ctx.arc(scale.xCenter, scale.yCenter, radius, 0, (0, _helpersSegmentJs.T));
    else {
        let pointPosition = scale.getPointPosition(0, radius);
        ctx.moveTo(pointPosition.x, pointPosition.y);
        for(let i = 1; i < labelCount; i++){
            pointPosition = scale.getPointPosition(i, radius);
            ctx.lineTo(pointPosition.x, pointPosition.y);
        }
    }
}
function drawRadiusLine(scale, gridLineOpts, radius, labelCount, borderOpts) {
    const ctx = scale.ctx;
    const circular = gridLineOpts.circular;
    const { color , lineWidth  } = gridLineOpts;
    if (!circular && !labelCount || !color || !lineWidth || radius < 0) return;
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.setLineDash(borderOpts.dash);
    ctx.lineDashOffset = borderOpts.dashOffset;
    ctx.beginPath();
    pathRadiusLine(scale, radius, circular, labelCount);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
}
function createPointLabelContext(parent, index, label) {
    return (0, _helpersSegmentJs.j)(parent, {
        label,
        index,
        type: "pointLabel"
    });
}
class RadialLinearScale extends LinearScaleBase {
    static id = "radialLinear";
    static defaults = {
        display: true,
        animate: true,
        position: "chartArea",
        angleLines: {
            display: true,
            lineWidth: 1,
            borderDash: [],
            borderDashOffset: 0.0
        },
        grid: {
            circular: false
        },
        startAngle: 0,
        ticks: {
            showLabelBackdrop: true,
            callback: (0, _helpersSegmentJs.aL).formatters.numeric
        },
        pointLabels: {
            backdropColor: undefined,
            backdropPadding: 2,
            display: true,
            font: {
                size: 10
            },
            callback (label) {
                return label;
            },
            padding: 5,
            centerPointLabels: false
        }
    };
    static defaultRoutes = {
        "angleLines.color": "borderColor",
        "pointLabels.color": "color",
        "ticks.color": "color"
    };
    static descriptors = {
        angleLines: {
            _fallback: "grid"
        }
    };
    constructor(cfg){
        super(cfg);
        this.xCenter = undefined;
        this.yCenter = undefined;
        this.drawingArea = undefined;
        this._pointLabels = [];
        this._pointLabelItems = [];
    }
    setDimensions() {
        const padding = this._padding = (0, _helpersSegmentJs.E)(getTickBackdropHeight(this.options) / 2);
        const w = this.width = this.maxWidth - padding.width;
        const h = this.height = this.maxHeight - padding.height;
        this.xCenter = Math.floor(this.left + w / 2 + padding.left);
        this.yCenter = Math.floor(this.top + h / 2 + padding.top);
        this.drawingArea = Math.floor(Math.min(w, h) / 2);
    }
    determineDataLimits() {
        const { min , max  } = this.getMinMax(false);
        this.min = (0, _helpersSegmentJs.g)(min) && !isNaN(min) ? min : 0;
        this.max = (0, _helpersSegmentJs.g)(max) && !isNaN(max) ? max : 0;
        this.handleTickRangeOptions();
    }
    computeTickLimit() {
        return Math.ceil(this.drawingArea / getTickBackdropHeight(this.options));
    }
    generateTickLabels(ticks) {
        LinearScaleBase.prototype.generateTickLabels.call(this, ticks);
        this._pointLabels = this.getLabels().map((value, index)=>{
            const label = (0, _helpersSegmentJs.Q)(this.options.pointLabels.callback, [
                value,
                index
            ], this);
            return label || label === 0 ? label : "";
        }).filter((v, i)=>this.chart.getDataVisibility(i));
    }
    fit() {
        const opts = this.options;
        if (opts.display && opts.pointLabels.display) fitWithPointLabels(this);
        else this.setCenterPoint(0, 0, 0, 0);
    }
    setCenterPoint(leftMovement, rightMovement, topMovement, bottomMovement) {
        this.xCenter += Math.floor((leftMovement - rightMovement) / 2);
        this.yCenter += Math.floor((topMovement - bottomMovement) / 2);
        this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(leftMovement, rightMovement, topMovement, bottomMovement));
    }
    getIndexAngle(index) {
        const angleMultiplier = (0, _helpersSegmentJs.T) / (this._pointLabels.length || 1);
        const startAngle = this.options.startAngle || 0;
        return (0, _helpersSegmentJs.ay)(index * angleMultiplier + (0, _helpersSegmentJs.t)(startAngle));
    }
    getDistanceFromCenterForValue(value) {
        if ((0, _helpersSegmentJs.k)(value)) return NaN;
        const scalingFactor = this.drawingArea / (this.max - this.min);
        if (this.options.reverse) return (this.max - value) * scalingFactor;
        return (value - this.min) * scalingFactor;
    }
    getValueForDistanceFromCenter(distance) {
        if ((0, _helpersSegmentJs.k)(distance)) return NaN;
        const scaledDistance = distance / (this.drawingArea / (this.max - this.min));
        return this.options.reverse ? this.max - scaledDistance : this.min + scaledDistance;
    }
    getPointLabelContext(index) {
        const pointLabels = this._pointLabels || [];
        if (index >= 0 && index < pointLabels.length) {
            const pointLabel = pointLabels[index];
            return createPointLabelContext(this.getContext(), index, pointLabel);
        }
    }
    getPointPosition(index, distanceFromCenter, additionalAngle = 0) {
        const angle = this.getIndexAngle(index) - (0, _helpersSegmentJs.H) + additionalAngle;
        return {
            x: Math.cos(angle) * distanceFromCenter + this.xCenter,
            y: Math.sin(angle) * distanceFromCenter + this.yCenter,
            angle
        };
    }
    getPointPositionForValue(index, value) {
        return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
    }
    getBasePosition(index) {
        return this.getPointPositionForValue(index || 0, this.getBaseValue());
    }
    getPointLabelPosition(index) {
        const { left , top , right , bottom  } = this._pointLabelItems[index];
        return {
            left,
            top,
            right,
            bottom
        };
    }
    drawBackground() {
        const { backgroundColor , grid: { circular  }  } = this.options;
        if (backgroundColor) {
            const ctx = this.ctx;
            ctx.save();
            ctx.beginPath();
            pathRadiusLine(this, this.getDistanceFromCenterForValue(this._endValue), circular, this._pointLabels.length);
            ctx.closePath();
            ctx.fillStyle = backgroundColor;
            ctx.fill();
            ctx.restore();
        }
    }
    drawGrid() {
        const ctx = this.ctx;
        const opts = this.options;
        const { angleLines , grid , border  } = opts;
        const labelCount = this._pointLabels.length;
        let i, offset, position;
        if (opts.pointLabels.display) drawPointLabels(this, labelCount);
        if (grid.display) this.ticks.forEach((tick, index)=>{
            if (index !== 0) {
                offset = this.getDistanceFromCenterForValue(tick.value);
                const context = this.getContext(index);
                const optsAtIndex = grid.setContext(context);
                const optsAtIndexBorder = border.setContext(context);
                drawRadiusLine(this, optsAtIndex, offset, labelCount, optsAtIndexBorder);
            }
        });
        if (angleLines.display) {
            ctx.save();
            for(i = labelCount - 1; i >= 0; i--){
                const optsAtIndex = angleLines.setContext(this.getPointLabelContext(i));
                const { color , lineWidth  } = optsAtIndex;
                if (!lineWidth || !color) continue;
                ctx.lineWidth = lineWidth;
                ctx.strokeStyle = color;
                ctx.setLineDash(optsAtIndex.borderDash);
                ctx.lineDashOffset = optsAtIndex.borderDashOffset;
                offset = this.getDistanceFromCenterForValue(opts.ticks.reverse ? this.min : this.max);
                position = this.getPointPosition(i, offset);
                ctx.beginPath();
                ctx.moveTo(this.xCenter, this.yCenter);
                ctx.lineTo(position.x, position.y);
                ctx.stroke();
            }
            ctx.restore();
        }
    }
    drawBorder() {}
    drawLabels() {
        const ctx = this.ctx;
        const opts = this.options;
        const tickOpts = opts.ticks;
        if (!tickOpts.display) return;
        const startAngle = this.getIndexAngle(0);
        let offset, width;
        ctx.save();
        ctx.translate(this.xCenter, this.yCenter);
        ctx.rotate(startAngle);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        this.ticks.forEach((tick, index)=>{
            if (index === 0 && !opts.reverse) return;
            const optsAtIndex = tickOpts.setContext(this.getContext(index));
            const tickFont = (0, _helpersSegmentJs.a0)(optsAtIndex.font);
            offset = this.getDistanceFromCenterForValue(this.ticks[index].value);
            if (optsAtIndex.showLabelBackdrop) {
                ctx.font = tickFont.string;
                width = ctx.measureText(tick.label).width;
                ctx.fillStyle = optsAtIndex.backdropColor;
                const padding = (0, _helpersSegmentJs.E)(optsAtIndex.backdropPadding);
                ctx.fillRect(-width / 2 - padding.left, -offset - tickFont.size / 2 - padding.top, width + padding.width, tickFont.size + padding.height);
            }
            (0, _helpersSegmentJs.Z)(ctx, tick.label, 0, -offset, tickFont, {
                color: optsAtIndex.color
            });
        });
        ctx.restore();
    }
    drawTitle() {}
}
const INTERVALS = {
    millisecond: {
        common: true,
        size: 1,
        steps: 1000
    },
    second: {
        common: true,
        size: 1000,
        steps: 60
    },
    minute: {
        common: true,
        size: 60000,
        steps: 60
    },
    hour: {
        common: true,
        size: 3600000,
        steps: 24
    },
    day: {
        common: true,
        size: 86400000,
        steps: 30
    },
    week: {
        common: false,
        size: 604800000,
        steps: 4
    },
    month: {
        common: true,
        size: 2.628e9,
        steps: 12
    },
    quarter: {
        common: false,
        size: 7.884e9,
        steps: 4
    },
    year: {
        common: true,
        size: 3.154e10
    }
};
const UNITS = /* #__PURE__ */ Object.keys(INTERVALS);
function sorter(a, b) {
    return a - b;
}
function parse(scale, input) {
    if ((0, _helpersSegmentJs.k)(input)) return null;
    const adapter = scale._adapter;
    const { parser , round , isoWeekday  } = scale._parseOpts;
    let value = input;
    if (typeof parser === "function") value = parser(value);
    if (!(0, _helpersSegmentJs.g)(value)) value = typeof parser === "string" ? adapter.parse(value, parser) : adapter.parse(value);
    if (value === null) return null;
    if (round) value = round === "week" && ((0, _helpersSegmentJs.x)(isoWeekday) || isoWeekday === true) ? adapter.startOf(value, "isoWeek", isoWeekday) : adapter.startOf(value, round);
    return +value;
}
function determineUnitForAutoTicks(minUnit, min, max, capacity) {
    const ilen = UNITS.length;
    for(let i = UNITS.indexOf(minUnit); i < ilen - 1; ++i){
        const interval = INTERVALS[UNITS[i]];
        const factor = interval.steps ? interval.steps : Number.MAX_SAFE_INTEGER;
        if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) return UNITS[i];
    }
    return UNITS[ilen - 1];
}
function determineUnitForFormatting(scale, numTicks, minUnit, min, max) {
    for(let i = UNITS.length - 1; i >= UNITS.indexOf(minUnit); i--){
        const unit = UNITS[i];
        if (INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= numTicks - 1) return unit;
    }
    return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
}
function determineMajorUnit(unit) {
    for(let i = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i < ilen; ++i){
        if (INTERVALS[UNITS[i]].common) return UNITS[i];
    }
}
function addTick(ticks, time, timestamps) {
    if (!timestamps) ticks[time] = true;
    else if (timestamps.length) {
        const { lo , hi  } = (0, _helpersSegmentJs.aP)(timestamps, time);
        const timestamp = timestamps[lo] >= time ? timestamps[lo] : timestamps[hi];
        ticks[timestamp] = true;
    }
}
function setMajorTicks(scale, ticks, map, majorUnit) {
    const adapter = scale._adapter;
    const first = +adapter.startOf(ticks[0].value, majorUnit);
    const last = ticks[ticks.length - 1].value;
    let major, index;
    for(major = first; major <= last; major = +adapter.add(major, 1, majorUnit)){
        index = map[major];
        if (index >= 0) ticks[index].major = true;
    }
    return ticks;
}
function ticksFromTimestamps(scale, values, majorUnit) {
    const ticks = [];
    const map = {};
    const ilen = values.length;
    let i, value;
    for(i = 0; i < ilen; ++i){
        value = values[i];
        map[value] = i;
        ticks.push({
            value,
            major: false
        });
    }
    return ilen === 0 || !majorUnit ? ticks : setMajorTicks(scale, ticks, map, majorUnit);
}
class TimeScale extends Scale {
    static id = "time";
    static defaults = {
        bounds: "data",
        adapters: {},
        time: {
            parser: false,
            unit: false,
            round: false,
            isoWeekday: false,
            minUnit: "millisecond",
            displayFormats: {}
        },
        ticks: {
            source: "auto",
            callback: false,
            major: {
                enabled: false
            }
        }
    };
    constructor(props){
        super(props);
        this._cache = {
            data: [],
            labels: [],
            all: []
        };
        this._unit = "day";
        this._majorUnit = undefined;
        this._offsets = {};
        this._normalized = false;
        this._parseOpts = undefined;
    }
    init(scaleOpts, opts = {}) {
        const time = scaleOpts.time || (scaleOpts.time = {});
        const adapter = this._adapter = new adapters._date(scaleOpts.adapters.date);
        adapter.init(opts);
        (0, _helpersSegmentJs.ab)(time.displayFormats, adapter.formats());
        this._parseOpts = {
            parser: time.parser,
            round: time.round,
            isoWeekday: time.isoWeekday
        };
        super.init(scaleOpts);
        this._normalized = opts.normalized;
    }
    parse(raw, index) {
        if (raw === undefined) return null;
        return parse(this, raw);
    }
    beforeLayout() {
        super.beforeLayout();
        this._cache = {
            data: [],
            labels: [],
            all: []
        };
    }
    determineDataLimits() {
        const options = this.options;
        const adapter = this._adapter;
        const unit = options.time.unit || "day";
        let { min , max , minDefined , maxDefined  } = this.getUserBounds();
        function _applyBounds(bounds) {
            if (!minDefined && !isNaN(bounds.min)) min = Math.min(min, bounds.min);
            if (!maxDefined && !isNaN(bounds.max)) max = Math.max(max, bounds.max);
        }
        if (!minDefined || !maxDefined) {
            _applyBounds(this._getLabelBounds());
            if (options.bounds !== "ticks" || options.ticks.source !== "labels") _applyBounds(this.getMinMax(false));
        }
        min = (0, _helpersSegmentJs.g)(min) && !isNaN(min) ? min : +adapter.startOf(Date.now(), unit);
        max = (0, _helpersSegmentJs.g)(max) && !isNaN(max) ? max : +adapter.endOf(Date.now(), unit) + 1;
        this.min = Math.min(min, max - 1);
        this.max = Math.max(min + 1, max);
    }
    _getLabelBounds() {
        const arr = this.getLabelTimestamps();
        let min = Number.POSITIVE_INFINITY;
        let max = Number.NEGATIVE_INFINITY;
        if (arr.length) {
            min = arr[0];
            max = arr[arr.length - 1];
        }
        return {
            min,
            max
        };
    }
    buildTicks() {
        const options = this.options;
        const timeOpts = options.time;
        const tickOpts = options.ticks;
        const timestamps = tickOpts.source === "labels" ? this.getLabelTimestamps() : this._generate();
        if (options.bounds === "ticks" && timestamps.length) {
            this.min = this._userMin || timestamps[0];
            this.max = this._userMax || timestamps[timestamps.length - 1];
        }
        const min = this.min;
        const max = this.max;
        const ticks = (0, _helpersSegmentJs.aO)(timestamps, min, max);
        this._unit = timeOpts.unit || (tickOpts.autoSkip ? determineUnitForAutoTicks(timeOpts.minUnit, this.min, this.max, this._getLabelCapacity(min)) : determineUnitForFormatting(this, ticks.length, timeOpts.minUnit, this.min, this.max));
        this._majorUnit = !tickOpts.major.enabled || this._unit === "year" ? undefined : determineMajorUnit(this._unit);
        this.initOffsets(timestamps);
        if (options.reverse) ticks.reverse();
        return ticksFromTimestamps(this, ticks, this._majorUnit);
    }
    afterAutoSkip() {
        if (this.options.offsetAfterAutoskip) this.initOffsets(this.ticks.map((tick)=>+tick.value));
    }
    initOffsets(timestamps = []) {
        let start = 0;
        let end = 0;
        let first, last;
        if (this.options.offset && timestamps.length) {
            first = this.getDecimalForValue(timestamps[0]);
            if (timestamps.length === 1) start = 1 - first;
            else start = (this.getDecimalForValue(timestamps[1]) - first) / 2;
            last = this.getDecimalForValue(timestamps[timestamps.length - 1]);
            if (timestamps.length === 1) end = last;
            else end = (last - this.getDecimalForValue(timestamps[timestamps.length - 2])) / 2;
        }
        const limit = timestamps.length < 3 ? 0.5 : 0.25;
        start = (0, _helpersSegmentJs.S)(start, 0, limit);
        end = (0, _helpersSegmentJs.S)(end, 0, limit);
        this._offsets = {
            start,
            end,
            factor: 1 / (start + 1 + end)
        };
    }
    _generate() {
        const adapter = this._adapter;
        const min = this.min;
        const max = this.max;
        const options = this.options;
        const timeOpts = options.time;
        const minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, this._getLabelCapacity(min));
        const stepSize = (0, _helpersSegmentJs.v)(options.ticks.stepSize, 1);
        const weekday = minor === "week" ? timeOpts.isoWeekday : false;
        const hasWeekday = (0, _helpersSegmentJs.x)(weekday) || weekday === true;
        const ticks = {};
        let first = min;
        let time, count;
        if (hasWeekday) first = +adapter.startOf(first, "isoWeek", weekday);
        first = +adapter.startOf(first, hasWeekday ? "day" : minor);
        if (adapter.diff(max, min, minor) > 100000 * stepSize) throw new Error(min + " and " + max + " are too far apart with stepSize of " + stepSize + " " + minor);
        const timestamps = options.ticks.source === "data" && this.getDataTimestamps();
        for(time = first, count = 0; time < max; time = +adapter.add(time, stepSize, minor), count++)addTick(ticks, time, timestamps);
        if (time === max || options.bounds === "ticks" || count === 1) addTick(ticks, time, timestamps);
        return Object.keys(ticks).sort((a, b)=>a - b).map((x)=>+x);
    }
    getLabelForValue(value) {
        const adapter = this._adapter;
        const timeOpts = this.options.time;
        if (timeOpts.tooltipFormat) return adapter.format(value, timeOpts.tooltipFormat);
        return adapter.format(value, timeOpts.displayFormats.datetime);
    }
    _tickFormatFunction(time, index, ticks, format) {
        const options = this.options;
        const formatter = options.ticks.callback;
        if (formatter) return (0, _helpersSegmentJs.Q)(formatter, [
            time,
            index,
            ticks
        ], this);
        const formats = options.time.displayFormats;
        const unit = this._unit;
        const majorUnit = this._majorUnit;
        const minorFormat = unit && formats[unit];
        const majorFormat = majorUnit && formats[majorUnit];
        const tick = ticks[index];
        const major = majorUnit && majorFormat && tick && tick.major;
        return this._adapter.format(time, format || (major ? majorFormat : minorFormat));
    }
    generateTickLabels(ticks) {
        let i, ilen, tick;
        for(i = 0, ilen = ticks.length; i < ilen; ++i){
            tick = ticks[i];
            tick.label = this._tickFormatFunction(tick.value, i, ticks);
        }
    }
    getDecimalForValue(value) {
        return value === null ? NaN : (value - this.min) / (this.max - this.min);
    }
    getPixelForValue(value) {
        const offsets = this._offsets;
        const pos = this.getDecimalForValue(value);
        return this.getPixelForDecimal((offsets.start + pos) * offsets.factor);
    }
    getValueForPixel(pixel) {
        const offsets = this._offsets;
        const pos = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
        return this.min + pos * (this.max - this.min);
    }
    _getLabelSize(label) {
        const ticksOpts = this.options.ticks;
        const tickLabelWidth = this.ctx.measureText(label).width;
        const angle = (0, _helpersSegmentJs.t)(this.isHorizontal() ? ticksOpts.maxRotation : ticksOpts.minRotation);
        const cosRotation = Math.cos(angle);
        const sinRotation = Math.sin(angle);
        const tickFontSize = this._resolveTickFontOptions(0).size;
        return {
            w: tickLabelWidth * cosRotation + tickFontSize * sinRotation,
            h: tickLabelWidth * sinRotation + tickFontSize * cosRotation
        };
    }
    _getLabelCapacity(exampleTime) {
        const timeOpts = this.options.time;
        const displayFormats = timeOpts.displayFormats;
        const format = displayFormats[timeOpts.unit] || displayFormats.millisecond;
        const exampleLabel = this._tickFormatFunction(exampleTime, 0, ticksFromTimestamps(this, [
            exampleTime
        ], this._majorUnit), format);
        const size = this._getLabelSize(exampleLabel);
        const capacity = Math.floor(this.isHorizontal() ? this.width / size.w : this.height / size.h) - 1;
        return capacity > 0 ? capacity : 1;
    }
    getDataTimestamps() {
        let timestamps = this._cache.data || [];
        let i, ilen;
        if (timestamps.length) return timestamps;
        const metas = this.getMatchingVisibleMetas();
        if (this._normalized && metas.length) return this._cache.data = metas[0].controller.getAllParsedValues(this);
        for(i = 0, ilen = metas.length; i < ilen; ++i)timestamps = timestamps.concat(metas[i].controller.getAllParsedValues(this));
        return this._cache.data = this.normalize(timestamps);
    }
    getLabelTimestamps() {
        const timestamps = this._cache.labels || [];
        let i, ilen;
        if (timestamps.length) return timestamps;
        const labels = this.getLabels();
        for(i = 0, ilen = labels.length; i < ilen; ++i)timestamps.push(parse(this, labels[i]));
        return this._cache.labels = this._normalized ? timestamps : this.normalize(timestamps);
    }
    normalize(values) {
        return (0, _helpersSegmentJs._)(values.sort(sorter));
    }
}
function interpolate(table, val, reverse) {
    let lo = 0;
    let hi = table.length - 1;
    let prevSource, nextSource, prevTarget, nextTarget;
    if (reverse) {
        if (val >= table[lo].pos && val <= table[hi].pos) ({ lo , hi  } = (0, _helpersSegmentJs.B)(table, "pos", val));
        ({ pos: prevSource , time: prevTarget  } = table[lo]);
        ({ pos: nextSource , time: nextTarget  } = table[hi]);
    } else {
        if (val >= table[lo].time && val <= table[hi].time) ({ lo , hi  } = (0, _helpersSegmentJs.B)(table, "time", val));
        ({ time: prevSource , pos: prevTarget  } = table[lo]);
        ({ time: nextSource , pos: nextTarget  } = table[hi]);
    }
    const span = nextSource - prevSource;
    return span ? prevTarget + (nextTarget - prevTarget) * (val - prevSource) / span : prevTarget;
}
class TimeSeriesScale extends TimeScale {
    static id = "timeseries";
    static defaults = TimeScale.defaults;
    constructor(props){
        super(props);
        this._table = [];
        this._minPos = undefined;
        this._tableRange = undefined;
    }
    initOffsets() {
        const timestamps = this._getTimestampsForTable();
        const table = this._table = this.buildLookupTable(timestamps);
        this._minPos = interpolate(table, this.min);
        this._tableRange = interpolate(table, this.max) - this._minPos;
        super.initOffsets(timestamps);
    }
    buildLookupTable(timestamps) {
        const { min , max  } = this;
        const items = [];
        const table = [];
        let i, ilen, prev, curr, next;
        for(i = 0, ilen = timestamps.length; i < ilen; ++i){
            curr = timestamps[i];
            if (curr >= min && curr <= max) items.push(curr);
        }
        if (items.length < 2) return [
            {
                time: min,
                pos: 0
            },
            {
                time: max,
                pos: 1
            }
        ];
        for(i = 0, ilen = items.length; i < ilen; ++i){
            next = items[i + 1];
            prev = items[i - 1];
            curr = items[i];
            if (Math.round((next + prev) / 2) !== curr) table.push({
                time: curr,
                pos: i / (ilen - 1)
            });
        }
        return table;
    }
    _getTimestampsForTable() {
        let timestamps = this._cache.all || [];
        if (timestamps.length) return timestamps;
        const data = this.getDataTimestamps();
        const label = this.getLabelTimestamps();
        if (data.length && label.length) timestamps = this.normalize(data.concat(label));
        else timestamps = data.length ? data : label;
        timestamps = this._cache.all = timestamps;
        return timestamps;
    }
    getDecimalForValue(value) {
        return (interpolate(this._table, value) - this._minPos) / this._tableRange;
    }
    getValueForPixel(pixel) {
        const offsets = this._offsets;
        const decimal = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
        return interpolate(this._table, decimal * this._tableRange + this._minPos, true);
    }
}
var TimeSeriesScale$1 = TimeSeriesScale;
var scales = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    CategoryScale: CategoryScale,
    LinearScale: LinearScale,
    LogarithmicScale: LogarithmicScale,
    RadialLinearScale: RadialLinearScale,
    TimeScale: TimeScale,
    TimeSeriesScale: TimeSeriesScale$1
});
const registerables = [
    controllers,
    elements,
    plugins,
    scales
];

},{"./chunks/helpers.segment.js":"7oQuk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7oQuk":[function(require,module,exports) {
/*!
 * Chart.js v4.0.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */ /**
 * @namespace Chart.helpers
 */ /**
 * An empty function that can be used, for example, for optional callback.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "$", ()=>unclipArea);
parcelHelpers.export(exports, "A", ()=>_rlookupByKey);
parcelHelpers.export(exports, "B", ()=>_lookupByKey);
parcelHelpers.export(exports, "C", ()=>_isPointInArea);
parcelHelpers.export(exports, "D", ()=>getAngleFromPoint);
parcelHelpers.export(exports, "E", ()=>toPadding);
parcelHelpers.export(exports, "F", ()=>each);
parcelHelpers.export(exports, "G", ()=>getMaximumSize);
parcelHelpers.export(exports, "H", ()=>HALF_PI);
parcelHelpers.export(exports, "I", ()=>_getParentNode);
parcelHelpers.export(exports, "J", ()=>readUsedSize);
parcelHelpers.export(exports, "K", ()=>supportsEventListenerOptions);
parcelHelpers.export(exports, "L", ()=>throttled);
parcelHelpers.export(exports, "M", ()=>_isDomSupported);
parcelHelpers.export(exports, "N", ()=>_factorize);
parcelHelpers.export(exports, "O", ()=>finiteOrDefault);
parcelHelpers.export(exports, "P", ()=>PI);
parcelHelpers.export(exports, "Q", ()=>callback);
parcelHelpers.export(exports, "R", ()=>_addGrace);
parcelHelpers.export(exports, "S", ()=>_limitValue);
parcelHelpers.export(exports, "T", ()=>TAU);
parcelHelpers.export(exports, "U", ()=>toDegrees);
parcelHelpers.export(exports, "V", ()=>_measureText);
parcelHelpers.export(exports, "W", ()=>_int16Range);
parcelHelpers.export(exports, "X", ()=>_alignPixel);
parcelHelpers.export(exports, "Y", ()=>clipArea);
parcelHelpers.export(exports, "Z", ()=>renderText);
parcelHelpers.export(exports, "_", ()=>_arrayUnique);
parcelHelpers.export(exports, "a", ()=>resolve);
parcelHelpers.export(exports, "a$", ()=>fontString);
parcelHelpers.export(exports, "a0", ()=>toFont);
parcelHelpers.export(exports, "a1", ()=>_toLeftRightCenter);
parcelHelpers.export(exports, "a2", ()=>_alignStartEnd);
parcelHelpers.export(exports, "a3", ()=>overrides);
parcelHelpers.export(exports, "a4", ()=>merge);
parcelHelpers.export(exports, "a5", ()=>_capitalize);
parcelHelpers.export(exports, "a6", ()=>descriptors);
parcelHelpers.export(exports, "a7", ()=>isFunction);
parcelHelpers.export(exports, "a8", ()=>_attachContext);
parcelHelpers.export(exports, "a9", ()=>_createResolver);
parcelHelpers.export(exports, "aA", ()=>overrideTextDirection);
parcelHelpers.export(exports, "aB", ()=>_textX);
parcelHelpers.export(exports, "aC", ()=>restoreTextDirection);
parcelHelpers.export(exports, "aD", ()=>drawPointLegend);
parcelHelpers.export(exports, "aE", ()=>distanceBetweenPoints);
parcelHelpers.export(exports, "aF", ()=>noop);
parcelHelpers.export(exports, "aG", ()=>_setMinAndMaxByKey);
parcelHelpers.export(exports, "aH", ()=>niceNum);
parcelHelpers.export(exports, "aI", ()=>almostWhole);
parcelHelpers.export(exports, "aJ", ()=>almostEquals);
parcelHelpers.export(exports, "aK", ()=>_decimalPlaces);
parcelHelpers.export(exports, "aL", ()=>Ticks);
parcelHelpers.export(exports, "aM", ()=>log10);
parcelHelpers.export(exports, "aN", ()=>_longestText);
parcelHelpers.export(exports, "aO", ()=>_filterBetween);
parcelHelpers.export(exports, "aP", ()=>_lookup);
parcelHelpers.export(exports, "aQ", ()=>isPatternOrGradient);
parcelHelpers.export(exports, "aR", ()=>getHoverColor);
parcelHelpers.export(exports, "aS", ()=>clone$1);
parcelHelpers.export(exports, "aT", ()=>_merger);
parcelHelpers.export(exports, "aU", ()=>_mergerIf);
parcelHelpers.export(exports, "aV", ()=>_deprecated);
parcelHelpers.export(exports, "aW", ()=>_splitKey);
parcelHelpers.export(exports, "aX", ()=>toFontString);
parcelHelpers.export(exports, "aY", ()=>splineCurve);
parcelHelpers.export(exports, "aZ", ()=>splineCurveMonotone);
parcelHelpers.export(exports, "a_", ()=>getStyle);
parcelHelpers.export(exports, "aa", ()=>_descriptors);
parcelHelpers.export(exports, "ab", ()=>mergeIf);
parcelHelpers.export(exports, "ac", ()=>uid);
parcelHelpers.export(exports, "ad", ()=>debounce);
parcelHelpers.export(exports, "ae", ()=>retinaScale);
parcelHelpers.export(exports, "af", ()=>clearCanvas);
parcelHelpers.export(exports, "ag", ()=>setsEqual);
parcelHelpers.export(exports, "ah", ()=>_elementsEqual);
parcelHelpers.export(exports, "ai", ()=>_isClickEvent);
parcelHelpers.export(exports, "aj", ()=>_isBetween);
parcelHelpers.export(exports, "ak", ()=>_readValueToProps);
parcelHelpers.export(exports, "al", ()=>_updateBezierControlPoints);
parcelHelpers.export(exports, "am", ()=>_computeSegments);
parcelHelpers.export(exports, "an", ()=>_boundSegments);
parcelHelpers.export(exports, "ao", ()=>_steppedInterpolation);
parcelHelpers.export(exports, "ap", ()=>_bezierInterpolation);
parcelHelpers.export(exports, "aq", ()=>_pointInLine);
parcelHelpers.export(exports, "ar", ()=>_steppedLineTo);
parcelHelpers.export(exports, "as", ()=>_bezierCurveTo);
parcelHelpers.export(exports, "at", ()=>drawPoint);
parcelHelpers.export(exports, "au", ()=>addRoundedRectPath);
parcelHelpers.export(exports, "av", ()=>toTRBL);
parcelHelpers.export(exports, "aw", ()=>toTRBLCorners);
parcelHelpers.export(exports, "ax", ()=>_boundSegment);
parcelHelpers.export(exports, "ay", ()=>_normalizeAngle);
parcelHelpers.export(exports, "az", ()=>getRtlAdapter);
parcelHelpers.export(exports, "b", ()=>isArray);
parcelHelpers.export(exports, "b0", ()=>toLineHeight);
parcelHelpers.export(exports, "b1", ()=>PITAU);
parcelHelpers.export(exports, "b2", ()=>INFINITY);
parcelHelpers.export(exports, "b3", ()=>RAD_PER_DEG);
parcelHelpers.export(exports, "b4", ()=>QUARTER_PI);
parcelHelpers.export(exports, "b5", ()=>TWO_THIRDS_PI);
parcelHelpers.export(exports, "b6", ()=>_angleDiff);
parcelHelpers.export(exports, "c", ()=>color);
parcelHelpers.export(exports, "d", ()=>defaults);
parcelHelpers.export(exports, "e", ()=>effects$1);
parcelHelpers.export(exports, "f", ()=>resolveObjectKey);
parcelHelpers.export(exports, "g", ()=>isNumberFinite);
parcelHelpers.export(exports, "h", ()=>defined);
parcelHelpers.export(exports, "i", ()=>isObject);
parcelHelpers.export(exports, "j", ()=>createContext);
parcelHelpers.export(exports, "k", ()=>isNullOrUndef);
parcelHelpers.export(exports, "l", ()=>listenArrayEvents);
parcelHelpers.export(exports, "m", ()=>toPercentage);
parcelHelpers.export(exports, "n", ()=>toDimension);
parcelHelpers.export(exports, "o", ()=>formatNumber);
parcelHelpers.export(exports, "p", ()=>_angleBetween);
parcelHelpers.export(exports, "q", ()=>_getStartAndCountOfVisiblePoints);
parcelHelpers.export(exports, "r", ()=>requestAnimFrame);
parcelHelpers.export(exports, "s", ()=>sign);
parcelHelpers.export(exports, "t", ()=>toRadians);
parcelHelpers.export(exports, "u", ()=>unlistenArrayEvents);
parcelHelpers.export(exports, "v", ()=>valueOrDefault);
parcelHelpers.export(exports, "w", ()=>_scaleRangesChanged);
parcelHelpers.export(exports, "x", ()=>isNumber);
parcelHelpers.export(exports, "y", ()=>_parseObjectDataRadialScale);
parcelHelpers.export(exports, "z", ()=>getRelativePosition);
function noop() {
/* noop */ }
/**
 * Returns a unique id, sequentially generated from a global variable.
 */ const uid = (()=>{
    let id = 0;
    return ()=>id++;
})();
/**
 * Returns true if `value` is neither null nor undefined, else returns false.
 * @param value - The value to test.
 * @since 2.7.0
 */ function isNullOrUndef(value) {
    return value === null || typeof value === "undefined";
}
/**
 * Returns true if `value` is an array (including typed arrays), else returns false.
 * @param value - The value to test.
 * @function
 */ function isArray(value) {
    if (Array.isArray && Array.isArray(value)) return true;
    const type = Object.prototype.toString.call(value);
    if (type.slice(0, 7) === "[object" && type.slice(-6) === "Array]") return true;
    return false;
}
/**
 * Returns true if `value` is an object (excluding null), else returns false.
 * @param value - The value to test.
 * @since 2.7.0
 */ function isObject(value) {
    return value !== null && Object.prototype.toString.call(value) === "[object Object]";
}
/**
 * Returns true if `value` is a finite number, else returns false
 * @param value  - The value to test.
 */ function isNumberFinite(value) {
    return (typeof value === "number" || value instanceof Number) && isFinite(+value);
}
/**
 * Returns `value` if finite, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is not finite.
 */ function finiteOrDefault(value, defaultValue) {
    return isNumberFinite(value) ? value : defaultValue;
}
/**
 * Returns `value` if defined, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is undefined.
 */ function valueOrDefault(value, defaultValue) {
    return typeof value === "undefined" ? defaultValue : value;
}
const toPercentage = (value, dimension)=>typeof value === "string" && value.endsWith("%") ? parseFloat(value) / 100 : +value / dimension;
const toDimension = (value, dimension)=>typeof value === "string" && value.endsWith("%") ? parseFloat(value) / 100 * dimension : +value;
/**
 * Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
 * value returned by `fn`. If `fn` is not a function, this method returns undefined.
 * @param fn - The function to call.
 * @param args - The arguments with which `fn` should be called.
 * @param [thisArg] - The value of `this` provided for the call to `fn`.
 */ function callback(fn, args, thisArg) {
    if (fn && typeof fn.call === "function") return fn.apply(thisArg, args);
}
function each(loopable, fn, thisArg, reverse) {
    let i, len, keys;
    if (isArray(loopable)) {
        len = loopable.length;
        if (reverse) for(i = len - 1; i >= 0; i--)fn.call(thisArg, loopable[i], i);
        else for(i = 0; i < len; i++)fn.call(thisArg, loopable[i], i);
    } else if (isObject(loopable)) {
        keys = Object.keys(loopable);
        len = keys.length;
        for(i = 0; i < len; i++)fn.call(thisArg, loopable[keys[i]], keys[i]);
    }
}
/**
 * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
 * @param a0 - The array to compare
 * @param a1 - The array to compare
 * @private
 */ function _elementsEqual(a0, a1) {
    let i, ilen, v0, v1;
    if (!a0 || !a1 || a0.length !== a1.length) return false;
    for(i = 0, ilen = a0.length; i < ilen; ++i){
        v0 = a0[i];
        v1 = a1[i];
        if (v0.datasetIndex !== v1.datasetIndex || v0.index !== v1.index) return false;
    }
    return true;
}
/**
 * Returns a deep copy of `source` without keeping references on objects and arrays.
 * @param source - The value to clone.
 */ function clone$1(source) {
    if (isArray(source)) return source.map(clone$1);
    if (isObject(source)) {
        const target = Object.create(null);
        const keys = Object.keys(source);
        const klen = keys.length;
        let k = 0;
        for(; k < klen; ++k)target[keys[k]] = clone$1(source[keys[k]]);
        return target;
    }
    return source;
}
function isValidKey(key) {
    return [
        "__proto__",
        "prototype",
        "constructor"
    ].indexOf(key) === -1;
}
/**
 * The default merger when Chart.helpers.merge is called without merger option.
 * Note(SB): also used by mergeConfig and mergeScaleConfig as fallback.
 * @private
 */ function _merger(key, target, source, options) {
    if (!isValidKey(key)) return;
    const tval = target[key];
    const sval = source[key];
    if (isObject(tval) && isObject(sval)) // eslint-disable-next-line @typescript-eslint/no-use-before-define
    merge(tval, sval, options);
    else target[key] = clone$1(sval);
}
function merge(target, source, options) {
    const sources = isArray(source) ? source : [
        source
    ];
    const ilen = sources.length;
    if (!isObject(target)) return target;
    options = options || {};
    const merger = options.merger || _merger;
    let current;
    for(let i = 0; i < ilen; ++i){
        current = sources[i];
        if (!isObject(current)) continue;
        const keys = Object.keys(current);
        for(let k = 0, klen = keys.length; k < klen; ++k)merger(keys[k], target, current, options);
    }
    return target;
}
function mergeIf(target, source) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return merge(target, source, {
        merger: _mergerIf
    });
}
/**
 * Merges source[key] in target[key] only if target[key] is undefined.
 * @private
 */ function _mergerIf(key, target, source) {
    if (!isValidKey(key)) return;
    const tval = target[key];
    const sval = source[key];
    if (isObject(tval) && isObject(sval)) mergeIf(tval, sval);
    else if (!Object.prototype.hasOwnProperty.call(target, key)) target[key] = clone$1(sval);
}
/**
 * @private
 */ function _deprecated(scope, value, previous, current) {
    if (value !== undefined) console.warn(scope + ': "' + previous + '" is deprecated. Please use "' + current + '" instead');
}
// resolveObjectKey resolver cache
const keyResolvers = {
    // Chart.helpers.core resolveObjectKey should resolve empty key to root object
    "": (v)=>v,
    // default resolvers
    x: (o)=>o.x,
    y: (o)=>o.y
};
/**
 * @private
 */ function _splitKey(key) {
    const parts = key.split(".");
    const keys = [];
    let tmp = "";
    for (const part of parts){
        tmp += part;
        if (tmp.endsWith("\\")) tmp = tmp.slice(0, -1) + ".";
        else {
            keys.push(tmp);
            tmp = "";
        }
    }
    return keys;
}
function _getKeyResolver(key) {
    const keys = _splitKey(key);
    return (obj)=>{
        for (const k of keys){
            if (k === "") break;
            obj = obj && obj[k];
        }
        return obj;
    };
}
function resolveObjectKey(obj, key) {
    const resolver = keyResolvers[key] || (keyResolvers[key] = _getKeyResolver(key));
    return resolver(obj);
}
/**
 * @private
 */ function _capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
const defined = (value)=>typeof value !== "undefined";
const isFunction = (value)=>typeof value === "function";
// Adapted from https://stackoverflow.com/questions/31128855/comparing-ecma6-sets-for-equality#31129384
const setsEqual = (a, b)=>{
    if (a.size !== b.size) return false;
    for (const item of a){
        if (!b.has(item)) return false;
    }
    return true;
};
/**
 * @param e - The event
 * @private
 */ function _isClickEvent(e) {
    return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu";
}
/**
 * @alias Chart.helpers.math
 * @namespace
 */ const PI = Math.PI;
const TAU = 2 * PI;
const PITAU = TAU + PI;
const INFINITY = Number.POSITIVE_INFINITY;
const RAD_PER_DEG = PI / 180;
const HALF_PI = PI / 2;
const QUARTER_PI = PI / 4;
const TWO_THIRDS_PI = PI * 2 / 3;
const log10 = Math.log10;
const sign = Math.sign;
function almostEquals(x, y, epsilon) {
    return Math.abs(x - y) < epsilon;
}
/**
 * Implementation of the nice number algorithm used in determining where axis labels will go
 */ function niceNum(range) {
    const roundedRange = Math.round(range);
    range = almostEquals(range, roundedRange, range / 1000) ? roundedRange : range;
    const niceRange = Math.pow(10, Math.floor(log10(range)));
    const fraction = range / niceRange;
    const niceFraction = fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 5 ? 5 : 10;
    return niceFraction * niceRange;
}
/**
 * Returns an array of factors sorted from 1 to sqrt(value)
 * @private
 */ function _factorize(value) {
    const result = [];
    const sqrt = Math.sqrt(value);
    let i;
    for(i = 1; i < sqrt; i++)if (value % i === 0) {
        result.push(i);
        result.push(value / i);
    }
    if (sqrt === (sqrt | 0)) result.push(sqrt);
    result.sort((a, b)=>a - b).pop();
    return result;
}
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function almostWhole(x, epsilon) {
    const rounded = Math.round(x);
    return rounded - epsilon <= x && rounded + epsilon >= x;
}
/**
 * @private
 */ function _setMinAndMaxByKey(array, target, property) {
    let i, ilen, value;
    for(i = 0, ilen = array.length; i < ilen; i++){
        value = array[i][property];
        if (!isNaN(value)) {
            target.min = Math.min(target.min, value);
            target.max = Math.max(target.max, value);
        }
    }
}
function toRadians(degrees) {
    return degrees * (PI / 180);
}
function toDegrees(radians) {
    return radians * (180 / PI);
}
/**
 * Returns the number of decimal places
 * i.e. the number of digits after the decimal point, of the value of this Number.
 * @param x - A number.
 * @returns The number of decimal places.
 * @private
 */ function _decimalPlaces(x) {
    if (!isNumberFinite(x)) return;
    let e = 1;
    let p = 0;
    while(Math.round(x * e) / e !== x){
        e *= 10;
        p++;
    }
    return p;
}
// Gets the angle from vertical upright to the point about a centre.
function getAngleFromPoint(centrePoint, anglePoint) {
    const distanceFromXCenter = anglePoint.x - centrePoint.x;
    const distanceFromYCenter = anglePoint.y - centrePoint.y;
    const radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
    let angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);
    if (angle < -0.5 * PI) angle += TAU; // make sure the returned angle is in the range of (-PI/2, 3PI/2]
    return {
        angle,
        distance: radialDistanceFromCenter
    };
}
function distanceBetweenPoints(pt1, pt2) {
    return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
}
/**
 * Shortest distance between angles, in either direction.
 * @private
 */ function _angleDiff(a, b) {
    return (a - b + PITAU) % TAU - PI;
}
/**
 * Normalize angle to be between 0 and 2*PI
 * @private
 */ function _normalizeAngle(a) {
    return (a % TAU + TAU) % TAU;
}
/**
 * @private
 */ function _angleBetween(angle, start, end, sameAngleIsFullCircle) {
    const a = _normalizeAngle(angle);
    const s = _normalizeAngle(start);
    const e = _normalizeAngle(end);
    const angleToStart = _normalizeAngle(s - a);
    const angleToEnd = _normalizeAngle(e - a);
    const startToAngle = _normalizeAngle(a - s);
    const endToAngle = _normalizeAngle(a - e);
    return a === s || a === e || sameAngleIsFullCircle && s === e || angleToStart > angleToEnd && startToAngle < endToAngle;
}
/**
 * Limit `value` between `min` and `max`
 * @param value
 * @param min
 * @param max
 * @private
 */ function _limitValue(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
/**
 * @param {number} value
 * @private
 */ function _int16Range(value) {
    return _limitValue(value, -32768, 32767);
}
/**
 * @param value
 * @param start
 * @param end
 * @param [epsilon]
 * @private
 */ function _isBetween(value, start, end, epsilon = 1e-6) {
    return value >= Math.min(start, end) - epsilon && value <= Math.max(start, end) + epsilon;
}
function _lookup(table, value, cmp) {
    cmp = cmp || ((index)=>table[index] < value);
    let hi = table.length - 1;
    let lo = 0;
    let mid;
    while(hi - lo > 1){
        mid = lo + hi >> 1;
        if (cmp(mid)) lo = mid;
        else hi = mid;
    }
    return {
        lo,
        hi
    };
}
/**
 * Binary search
 * @param table - the table search. must be sorted!
 * @param key - property name for the value in each entry
 * @param value - value to find
 * @param last - lookup last index
 * @private
 */ const _lookupByKey = (table, key, value, last)=>_lookup(table, value, last ? (index)=>{
        const ti = table[index][key];
        return ti < value || ti === value && table[index + 1][key] === value;
    } : (index)=>table[index][key] < value);
/**
 * Reverse binary search
 * @param table - the table search. must be sorted!
 * @param key - property name for the value in each entry
 * @param value - value to find
 * @private
 */ const _rlookupByKey = (table, key, value)=>_lookup(table, value, (index)=>table[index][key] >= value);
/**
 * Return subset of `values` between `min` and `max` inclusive.
 * Values are assumed to be in sorted order.
 * @param values - sorted array of values
 * @param min - min value
 * @param max - max value
 */ function _filterBetween(values, min, max) {
    let start = 0;
    let end = values.length;
    while(start < end && values[start] < min)start++;
    while(end > start && values[end - 1] > max)end--;
    return start > 0 || end < values.length ? values.slice(start, end) : values;
}
const arrayEvents = [
    "push",
    "pop",
    "shift",
    "splice",
    "unshift"
];
function listenArrayEvents(array, listener) {
    if (array._chartjs) {
        array._chartjs.listeners.push(listener);
        return;
    }
    Object.defineProperty(array, "_chartjs", {
        configurable: true,
        enumerable: false,
        value: {
            listeners: [
                listener
            ]
        }
    });
    arrayEvents.forEach((key)=>{
        const method = "_onData" + _capitalize(key);
        const base = array[key];
        Object.defineProperty(array, key, {
            configurable: true,
            enumerable: false,
            value (...args) {
                const res = base.apply(this, args);
                array._chartjs.listeners.forEach((object)=>{
                    if (typeof object[method] === "function") object[method](...args);
                });
                return res;
            }
        });
    });
}
function unlistenArrayEvents(array, listener) {
    const stub = array._chartjs;
    if (!stub) return;
    const listeners = stub.listeners;
    const index = listeners.indexOf(listener);
    if (index !== -1) listeners.splice(index, 1);
    if (listeners.length > 0) return;
    arrayEvents.forEach((key)=>{
        delete array[key];
    });
    delete array._chartjs;
}
/**
 * @param items
 */ function _arrayUnique(items) {
    const set = new Set();
    let i, ilen;
    for(i = 0, ilen = items.length; i < ilen; ++i)set.add(items[i]);
    if (set.size === ilen) return items;
    return Array.from(set);
}
function fontString(pixelSize, fontStyle, fontFamily) {
    return fontStyle + " " + pixelSize + "px " + fontFamily;
}
/**
* Request animation polyfill
*/ const requestAnimFrame = function() {
    if (typeof window === "undefined") return function(callback) {
        return callback();
    };
    return window.requestAnimationFrame;
}();
/**
 * Throttles calling `fn` once per animation frame
 * Latest arguments are used on the actual call
 */ function throttled(fn, thisArg) {
    let ticking = false;
    return function(...args) {
        if (!ticking) {
            ticking = true;
            requestAnimFrame.call(window, ()=>{
                ticking = false;
                fn.apply(thisArg, args);
            });
        }
    };
}
/**
 * Debounces calling `fn` for `delay` ms
 */ function debounce(fn, delay) {
    let timeout;
    return function(...args) {
        if (delay) {
            clearTimeout(timeout);
            timeout = setTimeout(fn, delay, args);
        } else fn.apply(this, args);
        return delay;
    };
}
/**
 * Converts 'start' to 'left', 'end' to 'right' and others to 'center'
 * @private
 */ const _toLeftRightCenter = (align)=>align === "start" ? "left" : align === "end" ? "right" : "center";
/**
 * Returns `start`, `end` or `(start + end) / 2` depending on `align`. Defaults to `center`
 * @private
 */ const _alignStartEnd = (align, start, end)=>align === "start" ? start : align === "end" ? end : (start + end) / 2;
/**
 * Returns `left`, `right` or `(left + right) / 2` depending on `align`. Defaults to `left`
 * @private
 */ const _textX = (align, left, right, rtl)=>{
    const check = rtl ? "left" : "right";
    return align === check ? right : align === "center" ? (left + right) / 2 : left;
};
/**
 * Return start and count of visible points.
 * @private
 */ function _getStartAndCountOfVisiblePoints(meta, points, animationsDisabled) {
    const pointCount = points.length;
    let start = 0;
    let count = pointCount;
    if (meta._sorted) {
        const { iScale , _parsed  } = meta;
        const axis = iScale.axis;
        const { min , max , minDefined , maxDefined  } = iScale.getUserBounds();
        if (minDefined) start = _limitValue(Math.min(_lookupByKey(_parsed, iScale.axis, min).lo, animationsDisabled ? pointCount : _lookupByKey(points, axis, iScale.getPixelForValue(min)).lo), 0, pointCount - 1);
        if (maxDefined) count = _limitValue(Math.max(_lookupByKey(_parsed, iScale.axis, max, true).hi + 1, animationsDisabled ? 0 : _lookupByKey(points, axis, iScale.getPixelForValue(max), true).hi + 1), start, pointCount) - start;
        else count = pointCount - start;
    }
    return {
        start,
        count
    };
}
/**
 * Checks if the scale ranges have changed.
 * @param {object} meta - dataset meta.
 * @returns {boolean}
 * @private
 */ function _scaleRangesChanged(meta) {
    const { xScale , yScale , _scaleRanges  } = meta;
    const newRanges = {
        xmin: xScale.min,
        xmax: xScale.max,
        ymin: yScale.min,
        ymax: yScale.max
    };
    if (!_scaleRanges) {
        meta._scaleRanges = newRanges;
        return true;
    }
    const changed = _scaleRanges.xmin !== xScale.min || _scaleRanges.xmax !== xScale.max || _scaleRanges.ymin !== yScale.min || _scaleRanges.ymax !== yScale.max;
    Object.assign(_scaleRanges, newRanges);
    return changed;
}
const atEdge = (t)=>t === 0 || t === 1;
const elasticIn = (t, s, p)=>-(Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * TAU / p));
const elasticOut = (t, s, p)=>Math.pow(2, -10 * t) * Math.sin((t - s) * TAU / p) + 1;
/**
 * Easing functions adapted from Robert Penner's easing equations.
 * @namespace Chart.helpers.easing.effects
 * @see http://www.robertpenner.com/easing/
 */ const effects = {
    linear: (t)=>t,
    easeInQuad: (t)=>t * t,
    easeOutQuad: (t)=>-t * (t - 2),
    easeInOutQuad: (t)=>(t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1),
    easeInCubic: (t)=>t * t * t,
    easeOutCubic: (t)=>(t -= 1) * t * t + 1,
    easeInOutCubic: (t)=>(t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
    easeInQuart: (t)=>t * t * t * t,
    easeOutQuart: (t)=>-((t -= 1) * t * t * t - 1),
    easeInOutQuart: (t)=>(t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2),
    easeInQuint: (t)=>t * t * t * t * t,
    easeOutQuint: (t)=>(t -= 1) * t * t * t * t + 1,
    easeInOutQuint: (t)=>(t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2),
    easeInSine: (t)=>-Math.cos(t * HALF_PI) + 1,
    easeOutSine: (t)=>Math.sin(t * HALF_PI),
    easeInOutSine: (t)=>-0.5 * (Math.cos(PI * t) - 1),
    easeInExpo: (t)=>t === 0 ? 0 : Math.pow(2, 10 * (t - 1)),
    easeOutExpo: (t)=>t === 1 ? 1 : -Math.pow(2, -10 * t) + 1,
    easeInOutExpo: (t)=>atEdge(t) ? t : t < 0.5 ? 0.5 * Math.pow(2, 10 * (t * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (t * 2 - 1)) + 2),
    easeInCirc: (t)=>t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
    easeOutCirc: (t)=>Math.sqrt(1 - (t -= 1) * t),
    easeInOutCirc: (t)=>(t /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
    easeInElastic: (t)=>atEdge(t) ? t : elasticIn(t, 0.075, 0.3),
    easeOutElastic: (t)=>atEdge(t) ? t : elasticOut(t, 0.075, 0.3),
    easeInOutElastic (t) {
        const s = 0.1125;
        const p = 0.45;
        return atEdge(t) ? t : t < 0.5 ? 0.5 * elasticIn(t * 2, s, p) : 0.5 + 0.5 * elasticOut(t * 2 - 1, s, p);
    },
    easeInBack (t) {
        const s = 1.70158;
        return t * t * ((s + 1) * t - s);
    },
    easeOutBack (t) {
        const s = 1.70158;
        return (t -= 1) * t * ((s + 1) * t + s) + 1;
    },
    easeInOutBack (t) {
        let s = 1.70158;
        if ((t /= 0.5) < 1) return 0.5 * (t * t * (((s *= 1.525) + 1) * t - s));
        return 0.5 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
    },
    easeInBounce: (t)=>1 - effects.easeOutBounce(1 - t),
    easeOutBounce (t) {
        const m = 7.5625;
        const d = 2.75;
        if (t < 1 / d) return m * t * t;
        if (t < 2 / d) return m * (t -= 1.5 / d) * t + 0.75;
        if (t < 2.5 / d) return m * (t -= 2.25 / d) * t + 0.9375;
        return m * (t -= 2.625 / d) * t + 0.984375;
    },
    easeInOutBounce: (t)=>t < 0.5 ? effects.easeInBounce(t * 2) * 0.5 : effects.easeOutBounce(t * 2 - 1) * 0.5 + 0.5
};
var effects$1 = effects;
/*!
 * @kurkle/color v0.2.1
 * https://github.com/kurkle/color#readme
 * (c) 2022 Jukka Kurkela
 * Released under the MIT License
 */ function round(v) {
    return v + 0.5 | 0;
}
const lim = (v, l, h)=>Math.max(Math.min(v, h), l);
function p2b(v) {
    return lim(round(v * 2.55), 0, 255);
}
function n2b(v) {
    return lim(round(v * 255), 0, 255);
}
function b2n(v) {
    return lim(round(v / 2.55) / 100, 0, 1);
}
function n2p(v) {
    return lim(round(v * 100), 0, 100);
}
const map$1 = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
};
const hex = [
    ..."0123456789ABCDEF"
];
const h1 = (b)=>hex[b & 0xF];
const h2 = (b)=>hex[(b & 0xF0) >> 4] + hex[b & 0xF];
const eq = (b)=>(b & 0xF0) >> 4 === (b & 0xF);
const isShort = (v)=>eq(v.r) && eq(v.g) && eq(v.b) && eq(v.a);
function hexParse(str) {
    var len = str.length;
    var ret;
    if (str[0] === "#") {
        if (len === 4 || len === 5) ret = {
            r: 255 & map$1[str[1]] * 17,
            g: 255 & map$1[str[2]] * 17,
            b: 255 & map$1[str[3]] * 17,
            a: len === 5 ? map$1[str[4]] * 17 : 255
        };
        else if (len === 7 || len === 9) ret = {
            r: map$1[str[1]] << 4 | map$1[str[2]],
            g: map$1[str[3]] << 4 | map$1[str[4]],
            b: map$1[str[5]] << 4 | map$1[str[6]],
            a: len === 9 ? map$1[str[7]] << 4 | map$1[str[8]] : 255
        };
    }
    return ret;
}
const alpha = (a, f)=>a < 255 ? f(a) : "";
function hexString(v) {
    var f = isShort(v) ? h1 : h2;
    return v ? "#" + f(v.r) + f(v.g) + f(v.b) + alpha(v.a, f) : undefined;
}
const HUE_RE = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function hsl2rgbn(h, s, l) {
    const a = s * Math.min(l, 1 - l);
    const f = (n, k = (n + h / 30) % 12)=>l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return [
        f(0),
        f(8),
        f(4)
    ];
}
function hsv2rgbn(h, s, v) {
    const f = (n, k = (n + h / 60) % 6)=>v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
    return [
        f(5),
        f(3),
        f(1)
    ];
}
function hwb2rgbn(h, w, b) {
    const rgb = hsl2rgbn(h, 1, 0.5);
    let i;
    if (w + b > 1) {
        i = 1 / (w + b);
        w *= i;
        b *= i;
    }
    for(i = 0; i < 3; i++){
        rgb[i] *= 1 - w - b;
        rgb[i] += w;
    }
    return rgb;
}
function hueValue(r, g, b, d, max) {
    if (r === max) return (g - b) / d + (g < b ? 6 : 0);
    if (g === max) return (b - r) / d + 2;
    return (r - g) / d + 4;
}
function rgb2hsl(v) {
    const range = 255;
    const r = v.r / range;
    const g = v.g / range;
    const b = v.b / range;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;
    let h, s, d;
    if (max !== min) {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        h = hueValue(r, g, b, d, max);
        h = h * 60 + 0.5;
    }
    return [
        h | 0,
        s || 0,
        l
    ];
}
function calln(f, a, b, c) {
    return (Array.isArray(a) ? f(a[0], a[1], a[2]) : f(a, b, c)).map(n2b);
}
function hsl2rgb(h, s, l) {
    return calln(hsl2rgbn, h, s, l);
}
function hwb2rgb(h, w, b) {
    return calln(hwb2rgbn, h, w, b);
}
function hsv2rgb(h, s, v) {
    return calln(hsv2rgbn, h, s, v);
}
function hue(h) {
    return (h % 360 + 360) % 360;
}
function hueParse(str) {
    const m = HUE_RE.exec(str);
    let a = 255;
    let v;
    if (!m) return;
    if (m[5] !== v) a = m[6] ? p2b(+m[5]) : n2b(+m[5]);
    const h = hue(+m[2]);
    const p1 = +m[3] / 100;
    const p2 = +m[4] / 100;
    if (m[1] === "hwb") v = hwb2rgb(h, p1, p2);
    else if (m[1] === "hsv") v = hsv2rgb(h, p1, p2);
    else v = hsl2rgb(h, p1, p2);
    return {
        r: v[0],
        g: v[1],
        b: v[2],
        a: a
    };
}
function rotate(v, deg) {
    var h = rgb2hsl(v);
    h[0] = hue(h[0] + deg);
    h = hsl2rgb(h);
    v.r = h[0];
    v.g = h[1];
    v.b = h[2];
}
function hslString(v) {
    if (!v) return;
    const a = rgb2hsl(v);
    const h = a[0];
    const s = n2p(a[1]);
    const l = n2p(a[2]);
    return v.a < 255 ? `hsla(${h}, ${s}%, ${l}%, ${b2n(v.a)})` : `hsl(${h}, ${s}%, ${l}%)`;
}
const map = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh"
};
const names$1 = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32"
};
function unpack() {
    const unpacked = {};
    const keys = Object.keys(names$1);
    const tkeys = Object.keys(map);
    let i, j, k, ok, nk;
    for(i = 0; i < keys.length; i++){
        ok = nk = keys[i];
        for(j = 0; j < tkeys.length; j++){
            k = tkeys[j];
            nk = nk.replace(k, map[k]);
        }
        k = parseInt(names$1[ok], 16);
        unpacked[nk] = [
            k >> 16 & 0xFF,
            k >> 8 & 0xFF,
            k & 0xFF
        ];
    }
    return unpacked;
}
let names;
function nameParse(str) {
    if (!names) {
        names = unpack();
        names.transparent = [
            0,
            0,
            0,
            0
        ];
    }
    const a = names[str.toLowerCase()];
    return a && {
        r: a[0],
        g: a[1],
        b: a[2],
        a: a.length === 4 ? a[3] : 255
    };
}
const RGB_RE = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function rgbParse(str) {
    const m = RGB_RE.exec(str);
    let a = 255;
    let r, g, b;
    if (!m) return;
    if (m[7] !== r) {
        const v = +m[7];
        a = m[8] ? p2b(v) : lim(v * 255, 0, 255);
    }
    r = +m[1];
    g = +m[3];
    b = +m[5];
    r = 255 & (m[2] ? p2b(r) : lim(r, 0, 255));
    g = 255 & (m[4] ? p2b(g) : lim(g, 0, 255));
    b = 255 & (m[6] ? p2b(b) : lim(b, 0, 255));
    return {
        r: r,
        g: g,
        b: b,
        a: a
    };
}
function rgbString(v) {
    return v && (v.a < 255 ? `rgba(${v.r}, ${v.g}, ${v.b}, ${b2n(v.a)})` : `rgb(${v.r}, ${v.g}, ${v.b})`);
}
const to = (v)=>v <= 0.0031308 ? v * 12.92 : Math.pow(v, 1.0 / 2.4) * 1.055 - 0.055;
const from = (v)=>v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
function interpolate(rgb1, rgb2, t) {
    const r = from(b2n(rgb1.r));
    const g = from(b2n(rgb1.g));
    const b = from(b2n(rgb1.b));
    return {
        r: n2b(to(r + t * (from(b2n(rgb2.r)) - r))),
        g: n2b(to(g + t * (from(b2n(rgb2.g)) - g))),
        b: n2b(to(b + t * (from(b2n(rgb2.b)) - b))),
        a: rgb1.a + t * (rgb2.a - rgb1.a)
    };
}
function modHSL(v, i, ratio) {
    if (v) {
        let tmp = rgb2hsl(v);
        tmp[i] = Math.max(0, Math.min(tmp[i] + tmp[i] * ratio, i === 0 ? 360 : 1));
        tmp = hsl2rgb(tmp);
        v.r = tmp[0];
        v.g = tmp[1];
        v.b = tmp[2];
    }
}
function clone(v, proto) {
    return v ? Object.assign(proto || {}, v) : v;
}
function fromObject(input) {
    var v = {
        r: 0,
        g: 0,
        b: 0,
        a: 255
    };
    if (Array.isArray(input)) {
        if (input.length >= 3) {
            v = {
                r: input[0],
                g: input[1],
                b: input[2],
                a: 255
            };
            if (input.length > 3) v.a = n2b(input[3]);
        }
    } else {
        v = clone(input, {
            r: 0,
            g: 0,
            b: 0,
            a: 1
        });
        v.a = n2b(v.a);
    }
    return v;
}
function functionParse(str) {
    if (str.charAt(0) === "r") return rgbParse(str);
    return hueParse(str);
}
class Color {
    constructor(input){
        if (input instanceof Color) return input;
        const type = typeof input;
        let v;
        if (type === "object") v = fromObject(input);
        else if (type === "string") v = hexParse(input) || nameParse(input) || functionParse(input);
        this._rgb = v;
        this._valid = !!v;
    }
    get valid() {
        return this._valid;
    }
    get rgb() {
        var v = clone(this._rgb);
        if (v) v.a = b2n(v.a);
        return v;
    }
    set rgb(obj) {
        this._rgb = fromObject(obj);
    }
    rgbString() {
        return this._valid ? rgbString(this._rgb) : undefined;
    }
    hexString() {
        return this._valid ? hexString(this._rgb) : undefined;
    }
    hslString() {
        return this._valid ? hslString(this._rgb) : undefined;
    }
    mix(color, weight) {
        if (color) {
            const c1 = this.rgb;
            const c2 = color.rgb;
            let w2;
            const p = weight === w2 ? 0.5 : weight;
            const w = 2 * p - 1;
            const a = c1.a - c2.a;
            const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
            w2 = 1 - w1;
            c1.r = 0xFF & w1 * c1.r + w2 * c2.r + 0.5;
            c1.g = 0xFF & w1 * c1.g + w2 * c2.g + 0.5;
            c1.b = 0xFF & w1 * c1.b + w2 * c2.b + 0.5;
            c1.a = p * c1.a + (1 - p) * c2.a;
            this.rgb = c1;
        }
        return this;
    }
    interpolate(color, t) {
        if (color) this._rgb = interpolate(this._rgb, color._rgb, t);
        return this;
    }
    clone() {
        return new Color(this.rgb);
    }
    alpha(a) {
        this._rgb.a = n2b(a);
        return this;
    }
    clearer(ratio) {
        const rgb = this._rgb;
        rgb.a *= 1 - ratio;
        return this;
    }
    greyscale() {
        const rgb = this._rgb;
        const val = round(rgb.r * 0.3 + rgb.g * 0.59 + rgb.b * 0.11);
        rgb.r = rgb.g = rgb.b = val;
        return this;
    }
    opaquer(ratio) {
        const rgb = this._rgb;
        rgb.a *= 1 + ratio;
        return this;
    }
    negate() {
        const v = this._rgb;
        v.r = 255 - v.r;
        v.g = 255 - v.g;
        v.b = 255 - v.b;
        return this;
    }
    lighten(ratio) {
        modHSL(this._rgb, 2, ratio);
        return this;
    }
    darken(ratio) {
        modHSL(this._rgb, 2, -ratio);
        return this;
    }
    saturate(ratio) {
        modHSL(this._rgb, 1, ratio);
        return this;
    }
    desaturate(ratio) {
        modHSL(this._rgb, 1, -ratio);
        return this;
    }
    rotate(deg) {
        rotate(this._rgb, deg);
        return this;
    }
}
function index_esm(input) {
    return new Color(input);
}
function isPatternOrGradient(value) {
    if (value && typeof value === "object") {
        const type = value.toString();
        return type === "[object CanvasPattern]" || type === "[object CanvasGradient]";
    }
    return false;
}
function color(value) {
    return isPatternOrGradient(value) ? value : index_esm(value);
}
function getHoverColor(value) {
    return isPatternOrGradient(value) ? value : index_esm(value).saturate(0.5).darken(0.1).hexString();
}
const numbers = [
    "x",
    "y",
    "borderWidth",
    "radius",
    "tension"
];
const colors = [
    "color",
    "borderColor",
    "backgroundColor"
];
function applyAnimationsDefaults(defaults) {
    defaults.set("animation", {
        delay: undefined,
        duration: 1000,
        easing: "easeOutQuart",
        fn: undefined,
        from: undefined,
        loop: undefined,
        to: undefined,
        type: undefined
    });
    defaults.describe("animation", {
        _fallback: false,
        _indexable: false,
        _scriptable: (name)=>name !== "onProgress" && name !== "onComplete" && name !== "fn"
    });
    defaults.set("animations", {
        colors: {
            type: "color",
            properties: colors
        },
        numbers: {
            type: "number",
            properties: numbers
        }
    });
    defaults.describe("animations", {
        _fallback: "animation"
    });
    defaults.set("transitions", {
        active: {
            animation: {
                duration: 400
            }
        },
        resize: {
            animation: {
                duration: 0
            }
        },
        show: {
            animations: {
                colors: {
                    from: "transparent"
                },
                visible: {
                    type: "boolean",
                    duration: 0
                }
            }
        },
        hide: {
            animations: {
                colors: {
                    to: "transparent"
                },
                visible: {
                    type: "boolean",
                    easing: "linear",
                    fn: (v)=>v | 0
                }
            }
        }
    });
}
function applyLayoutsDefaults(defaults) {
    defaults.set("layout", {
        autoPadding: true,
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    });
}
const intlCache = new Map();
function getNumberFormat(locale, options) {
    options = options || {};
    const cacheKey = locale + JSON.stringify(options);
    let formatter = intlCache.get(cacheKey);
    if (!formatter) {
        formatter = new Intl.NumberFormat(locale, options);
        intlCache.set(cacheKey, formatter);
    }
    return formatter;
}
function formatNumber(num, locale, options) {
    return getNumberFormat(locale, options).format(num);
}
const formatters = {
    values (value) {
        return isArray(value) ? value : "" + value;
    },
    numeric (tickValue, index, ticks) {
        if (tickValue === 0) return "0";
        const locale = this.chart.options.locale;
        let notation;
        let delta = tickValue;
        if (ticks.length > 1) {
            const maxTick = Math.max(Math.abs(ticks[0].value), Math.abs(ticks[ticks.length - 1].value));
            if (maxTick < 1e-4 || maxTick > 1e+15) notation = "scientific";
            delta = calculateDelta(tickValue, ticks);
        }
        const logDelta = log10(Math.abs(delta));
        const numDecimal = Math.max(Math.min(-1 * Math.floor(logDelta), 20), 0);
        const options = {
            notation,
            minimumFractionDigits: numDecimal,
            maximumFractionDigits: numDecimal
        };
        Object.assign(options, this.options.ticks.format);
        return formatNumber(tickValue, locale, options);
    },
    logarithmic (tickValue, index, ticks) {
        if (tickValue === 0) return "0";
        const remain = ticks[index].significand || tickValue / Math.pow(10, Math.floor(log10(tickValue)));
        if ([
            1,
            2,
            3,
            5,
            10,
            15
        ].includes(remain) || index > 0.8 * ticks.length) return formatters.numeric.call(this, tickValue, index, ticks);
        return "";
    }
};
function calculateDelta(tickValue, ticks) {
    let delta = ticks.length > 3 ? ticks[2].value - ticks[1].value : ticks[1].value - ticks[0].value;
    if (Math.abs(delta) >= 1 && tickValue !== Math.floor(tickValue)) delta = tickValue - Math.floor(tickValue);
    return delta;
}
var Ticks = {
    formatters
};
function applyScaleDefaults(defaults) {
    defaults.set("scale", {
        display: true,
        offset: false,
        reverse: false,
        beginAtZero: false,
        bounds: "ticks",
        grace: 0,
        grid: {
            display: true,
            lineWidth: 1,
            drawOnChartArea: true,
            drawTicks: true,
            tickLength: 8,
            tickWidth: (_ctx, options)=>options.lineWidth,
            tickColor: (_ctx, options)=>options.color,
            offset: false
        },
        border: {
            display: true,
            dash: [],
            dashOffset: 0.0,
            width: 1
        },
        title: {
            display: false,
            text: "",
            padding: {
                top: 4,
                bottom: 4
            }
        },
        ticks: {
            minRotation: 0,
            maxRotation: 50,
            mirror: false,
            textStrokeWidth: 0,
            textStrokeColor: "",
            padding: 3,
            display: true,
            autoSkip: true,
            autoSkipPadding: 3,
            labelOffset: 0,
            callback: Ticks.formatters.values,
            minor: {},
            major: {},
            align: "center",
            crossAlign: "near",
            showLabelBackdrop: false,
            backdropColor: "rgba(255, 255, 255, 0.75)",
            backdropPadding: 2
        }
    });
    defaults.route("scale.ticks", "color", "", "color");
    defaults.route("scale.grid", "color", "", "borderColor");
    defaults.route("scale.border", "color", "", "borderColor");
    defaults.route("scale.title", "color", "", "color");
    defaults.describe("scale", {
        _fallback: false,
        _scriptable: (name)=>!name.startsWith("before") && !name.startsWith("after") && name !== "callback" && name !== "parser",
        _indexable: (name)=>name !== "borderDash" && name !== "tickBorderDash" && name !== "dash"
    });
    defaults.describe("scales", {
        _fallback: "scale"
    });
    defaults.describe("scale.ticks", {
        _scriptable: (name)=>name !== "backdropPadding" && name !== "callback",
        _indexable: (name)=>name !== "backdropPadding"
    });
}
const overrides = Object.create(null);
const descriptors = Object.create(null);
function getScope$1(node, key) {
    if (!key) return node;
    const keys = key.split(".");
    for(let i = 0, n = keys.length; i < n; ++i){
        const k = keys[i];
        node = node[k] || (node[k] = Object.create(null));
    }
    return node;
}
function set(root, scope, values) {
    if (typeof scope === "string") return merge(getScope$1(root, scope), values);
    return merge(getScope$1(root, ""), scope);
}
class Defaults {
    constructor(_descriptors, _appliers){
        this.animation = undefined;
        this.backgroundColor = "rgba(0,0,0,0.1)";
        this.borderColor = "rgba(0,0,0,0.1)";
        this.color = "#666";
        this.datasets = {};
        this.devicePixelRatio = (context)=>context.chart.platform.getDevicePixelRatio();
        this.elements = {};
        this.events = [
            "mousemove",
            "mouseout",
            "click",
            "touchstart",
            "touchmove"
        ];
        this.font = {
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            size: 12,
            style: "normal",
            lineHeight: 1.2,
            weight: null
        };
        this.hover = {};
        this.hoverBackgroundColor = (ctx, options)=>getHoverColor(options.backgroundColor);
        this.hoverBorderColor = (ctx, options)=>getHoverColor(options.borderColor);
        this.hoverColor = (ctx, options)=>getHoverColor(options.color);
        this.indexAxis = "x";
        this.interaction = {
            mode: "nearest",
            intersect: true,
            includeInvisible: false
        };
        this.maintainAspectRatio = true;
        this.onHover = null;
        this.onClick = null;
        this.parsing = true;
        this.plugins = {};
        this.responsive = true;
        this.scale = undefined;
        this.scales = {};
        this.showLine = true;
        this.drawActiveElementsOnTop = true;
        this.describe(_descriptors);
        this.apply(_appliers);
    }
    set(scope, values) {
        return set(this, scope, values);
    }
    get(scope) {
        return getScope$1(this, scope);
    }
    describe(scope, values) {
        return set(descriptors, scope, values);
    }
    override(scope, values) {
        return set(overrides, scope, values);
    }
    route(scope, name, targetScope, targetName) {
        const scopeObject = getScope$1(this, scope);
        const targetScopeObject = getScope$1(this, targetScope);
        const privateName = "_" + name;
        Object.defineProperties(scopeObject, {
            [privateName]: {
                value: scopeObject[name],
                writable: true
            },
            [name]: {
                enumerable: true,
                get () {
                    const local = this[privateName];
                    const target = targetScopeObject[targetName];
                    if (isObject(local)) return Object.assign({}, target, local);
                    return valueOrDefault(local, target);
                },
                set (value) {
                    this[privateName] = value;
                }
            }
        });
    }
    apply(appliers) {
        appliers.forEach((apply)=>apply(this));
    }
}
var defaults = /* #__PURE__ */ new Defaults({
    _scriptable: (name)=>!name.startsWith("on"),
    _indexable: (name)=>name !== "events",
    hover: {
        _fallback: "interaction"
    },
    interaction: {
        _scriptable: false,
        _indexable: false
    }
}, [
    applyAnimationsDefaults,
    applyLayoutsDefaults,
    applyScaleDefaults
]);
function toFontString(font) {
    if (!font || isNullOrUndef(font.size) || isNullOrUndef(font.family)) return null;
    return (font.style ? font.style + " " : "") + (font.weight ? font.weight + " " : "") + font.size + "px " + font.family;
}
function _measureText(ctx, data, gc, longest, string) {
    let textWidth = data[string];
    if (!textWidth) {
        textWidth = data[string] = ctx.measureText(string).width;
        gc.push(string);
    }
    if (textWidth > longest) longest = textWidth;
    return longest;
}
function _longestText(ctx, font, arrayOfThings, cache) {
    cache = cache || {};
    let data = cache.data = cache.data || {};
    let gc = cache.garbageCollect = cache.garbageCollect || [];
    if (cache.font !== font) {
        data = cache.data = {};
        gc = cache.garbageCollect = [];
        cache.font = font;
    }
    ctx.save();
    ctx.font = font;
    let longest = 0;
    const ilen = arrayOfThings.length;
    let i, j, jlen, thing, nestedThing;
    for(i = 0; i < ilen; i++){
        thing = arrayOfThings[i];
        if (thing !== undefined && thing !== null && isArray(thing) !== true) longest = _measureText(ctx, data, gc, longest, thing);
        else if (isArray(thing)) for(j = 0, jlen = thing.length; j < jlen; j++){
            nestedThing = thing[j];
            if (nestedThing !== undefined && nestedThing !== null && !isArray(nestedThing)) longest = _measureText(ctx, data, gc, longest, nestedThing);
        }
    }
    ctx.restore();
    const gcLen = gc.length / 2;
    if (gcLen > arrayOfThings.length) {
        for(i = 0; i < gcLen; i++)delete data[gc[i]];
        gc.splice(0, gcLen);
    }
    return longest;
}
function _alignPixel(chart, pixel, width) {
    const devicePixelRatio = chart.currentDevicePixelRatio;
    const halfWidth = width !== 0 ? Math.max(width / 2, 0.5) : 0;
    return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
}
function clearCanvas(canvas, ctx) {
    ctx = ctx || canvas.getContext("2d");
    ctx.save();
    ctx.resetTransform();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
}
function drawPoint(ctx, options, x, y) {
    drawPointLegend(ctx, options, x, y, null);
}
function drawPointLegend(ctx, options, x, y, w) {
    let type, xOffset, yOffset, size, cornerRadius, width, xOffsetW, yOffsetW;
    const style = options.pointStyle;
    const rotation = options.rotation;
    const radius = options.radius;
    let rad = (rotation || 0) * RAD_PER_DEG;
    if (style && typeof style === "object") {
        type = style.toString();
        if (type === "[object HTMLImageElement]" || type === "[object HTMLCanvasElement]") {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rad);
            ctx.drawImage(style, -style.width / 2, -style.height / 2, style.width, style.height);
            ctx.restore();
            return;
        }
    }
    if (isNaN(radius) || radius <= 0) return;
    ctx.beginPath();
    switch(style){
        default:
            if (w) ctx.ellipse(x, y, w / 2, radius, 0, 0, TAU);
            else ctx.arc(x, y, radius, 0, TAU);
            ctx.closePath();
            break;
        case "triangle":
            width = w ? w / 2 : radius;
            ctx.moveTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
            rad += TWO_THIRDS_PI;
            ctx.lineTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
            rad += TWO_THIRDS_PI;
            ctx.lineTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
            ctx.closePath();
            break;
        case "rectRounded":
            cornerRadius = radius * 0.516;
            size = radius - cornerRadius;
            xOffset = Math.cos(rad + QUARTER_PI) * size;
            xOffsetW = Math.cos(rad + QUARTER_PI) * (w ? w / 2 - cornerRadius : size);
            yOffset = Math.sin(rad + QUARTER_PI) * size;
            yOffsetW = Math.sin(rad + QUARTER_PI) * (w ? w / 2 - cornerRadius : size);
            ctx.arc(x - xOffsetW, y - yOffset, cornerRadius, rad - PI, rad - HALF_PI);
            ctx.arc(x + yOffsetW, y - xOffset, cornerRadius, rad - HALF_PI, rad);
            ctx.arc(x + xOffsetW, y + yOffset, cornerRadius, rad, rad + HALF_PI);
            ctx.arc(x - yOffsetW, y + xOffset, cornerRadius, rad + HALF_PI, rad + PI);
            ctx.closePath();
            break;
        case "rect":
            if (!rotation) {
                size = Math.SQRT1_2 * radius;
                width = w ? w / 2 : size;
                ctx.rect(x - width, y - size, 2 * width, 2 * size);
                break;
            }
            rad += QUARTER_PI;
        case "rectRot":
            xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
            ctx.moveTo(x - xOffsetW, y - yOffset);
            ctx.lineTo(x + yOffsetW, y - xOffset);
            ctx.lineTo(x + xOffsetW, y + yOffset);
            ctx.lineTo(x - yOffsetW, y + xOffset);
            ctx.closePath();
            break;
        case "crossRot":
            rad += QUARTER_PI;
        case "cross":
            xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
            ctx.moveTo(x - xOffsetW, y - yOffset);
            ctx.lineTo(x + xOffsetW, y + yOffset);
            ctx.moveTo(x + yOffsetW, y - xOffset);
            ctx.lineTo(x - yOffsetW, y + xOffset);
            break;
        case "star":
            xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
            ctx.moveTo(x - xOffsetW, y - yOffset);
            ctx.lineTo(x + xOffsetW, y + yOffset);
            ctx.moveTo(x + yOffsetW, y - xOffset);
            ctx.lineTo(x - yOffsetW, y + xOffset);
            rad += QUARTER_PI;
            xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
            ctx.moveTo(x - xOffsetW, y - yOffset);
            ctx.lineTo(x + xOffsetW, y + yOffset);
            ctx.moveTo(x + yOffsetW, y - xOffset);
            ctx.lineTo(x - yOffsetW, y + xOffset);
            break;
        case "line":
            xOffset = w ? w / 2 : Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            ctx.moveTo(x - xOffset, y - yOffset);
            ctx.lineTo(x + xOffset, y + yOffset);
            break;
        case "dash":
            ctx.moveTo(x, y);
            ctx.lineTo(x + Math.cos(rad) * (w ? w / 2 : radius), y + Math.sin(rad) * radius);
            break;
    }
    ctx.fill();
    if (options.borderWidth > 0) ctx.stroke();
}
function _isPointInArea(point, area, margin) {
    margin = margin || 0.5;
    return !area || point && point.x > area.left - margin && point.x < area.right + margin && point.y > area.top - margin && point.y < area.bottom + margin;
}
function clipArea(ctx, area) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
    ctx.clip();
}
function unclipArea(ctx) {
    ctx.restore();
}
function _steppedLineTo(ctx, previous, target, flip, mode) {
    if (!previous) return ctx.lineTo(target.x, target.y);
    if (mode === "middle") {
        const midpoint = (previous.x + target.x) / 2.0;
        ctx.lineTo(midpoint, previous.y);
        ctx.lineTo(midpoint, target.y);
    } else if (mode === "after" !== !!flip) ctx.lineTo(previous.x, target.y);
    else ctx.lineTo(target.x, previous.y);
    ctx.lineTo(target.x, target.y);
}
function _bezierCurveTo(ctx, previous, target, flip) {
    if (!previous) return ctx.lineTo(target.x, target.y);
    ctx.bezierCurveTo(flip ? previous.cp1x : previous.cp2x, flip ? previous.cp1y : previous.cp2y, flip ? target.cp2x : target.cp1x, flip ? target.cp2y : target.cp1y, target.x, target.y);
}
function renderText(ctx, text, x, y, font, opts = {}) {
    const lines = isArray(text) ? text : [
        text
    ];
    const stroke = opts.strokeWidth > 0 && opts.strokeColor !== "";
    let i, line;
    ctx.save();
    ctx.font = font.string;
    setRenderOpts(ctx, opts);
    for(i = 0; i < lines.length; ++i){
        line = lines[i];
        if (opts.backdrop) drawBackdrop(ctx, opts.backdrop);
        if (stroke) {
            if (opts.strokeColor) ctx.strokeStyle = opts.strokeColor;
            if (!isNullOrUndef(opts.strokeWidth)) ctx.lineWidth = opts.strokeWidth;
            ctx.strokeText(line, x, y, opts.maxWidth);
        }
        ctx.fillText(line, x, y, opts.maxWidth);
        decorateText(ctx, x, y, line, opts);
        y += font.lineHeight;
    }
    ctx.restore();
}
function setRenderOpts(ctx, opts) {
    if (opts.translation) ctx.translate(opts.translation[0], opts.translation[1]);
    if (!isNullOrUndef(opts.rotation)) ctx.rotate(opts.rotation);
    if (opts.color) ctx.fillStyle = opts.color;
    if (opts.textAlign) ctx.textAlign = opts.textAlign;
    if (opts.textBaseline) ctx.textBaseline = opts.textBaseline;
}
function decorateText(ctx, x, y, line, opts) {
    if (opts.strikethrough || opts.underline) {
        const metrics = ctx.measureText(line);
        const left = x - metrics.actualBoundingBoxLeft;
        const right = x + metrics.actualBoundingBoxRight;
        const top = y - metrics.actualBoundingBoxAscent;
        const bottom = y + metrics.actualBoundingBoxDescent;
        const yDecoration = opts.strikethrough ? (top + bottom) / 2 : bottom;
        ctx.strokeStyle = ctx.fillStyle;
        ctx.beginPath();
        ctx.lineWidth = opts.decorationWidth || 2;
        ctx.moveTo(left, yDecoration);
        ctx.lineTo(right, yDecoration);
        ctx.stroke();
    }
}
function drawBackdrop(ctx, opts) {
    const oldColor = ctx.fillStyle;
    ctx.fillStyle = opts.color;
    ctx.fillRect(opts.left, opts.top, opts.width, opts.height);
    ctx.fillStyle = oldColor;
}
function addRoundedRectPath(ctx, rect) {
    const { x , y , w , h , radius  } = rect;
    ctx.arc(x + radius.topLeft, y + radius.topLeft, radius.topLeft, -HALF_PI, PI, true);
    ctx.lineTo(x, y + h - radius.bottomLeft);
    ctx.arc(x + radius.bottomLeft, y + h - radius.bottomLeft, radius.bottomLeft, PI, HALF_PI, true);
    ctx.lineTo(x + w - radius.bottomRight, y + h);
    ctx.arc(x + w - radius.bottomRight, y + h - radius.bottomRight, radius.bottomRight, HALF_PI, 0, true);
    ctx.lineTo(x + w, y + radius.topRight);
    ctx.arc(x + w - radius.topRight, y + radius.topRight, radius.topRight, 0, -HALF_PI, true);
    ctx.lineTo(x + radius.topLeft, y);
}
const LINE_HEIGHT = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/;
const FONT_STYLE = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
/**
 * @alias Chart.helpers.options
 * @namespace
 */ /**
 * Converts the given line height `value` in pixels for a specific font `size`.
 * @param value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
 * @param size - The font size (in pixels) used to resolve relative `value`.
 * @returns The effective line height in pixels (size * 1.2 if value is invalid).
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
 * @since 2.7.0
 */ function toLineHeight(value, size) {
    const matches = ("" + value).match(LINE_HEIGHT);
    if (!matches || matches[1] === "normal") return size * 1.2;
    value = +matches[2];
    switch(matches[3]){
        case "px":
            return value;
        case "%":
            value /= 100;
            break;
    }
    return size * value;
}
const numberOrZero = (v)=>+v || 0;
function _readValueToProps(value, props) {
    const ret = {};
    const objProps = isObject(props);
    const keys = objProps ? Object.keys(props) : props;
    const read = isObject(value) ? objProps ? (prop)=>valueOrDefault(value[prop], value[props[prop]]) : (prop)=>value[prop] : ()=>value;
    for (const prop of keys)ret[prop] = numberOrZero(read(prop));
    return ret;
}
/**
 * Converts the given value into a TRBL object.
 * @param value - If a number, set the value to all TRBL component,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 *  x / y are shorthands for same value for left/right and top/bottom.
 * @returns The padding values (top, right, bottom, left)
 * @since 3.0.0
 */ function toTRBL(value) {
    return _readValueToProps(value, {
        top: "y",
        right: "x",
        bottom: "y",
        left: "x"
    });
}
/**
 * Converts the given value into a TRBL corners object (similar with css border-radius).
 * @param value - If a number, set the value to all TRBL corner components,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 * @returns The TRBL corner values (topLeft, topRight, bottomLeft, bottomRight)
 * @since 3.0.0
 */ function toTRBLCorners(value) {
    return _readValueToProps(value, [
        "topLeft",
        "topRight",
        "bottomLeft",
        "bottomRight"
    ]);
}
/**
 * Converts the given value into a padding object with pre-computed width/height.
 * @param value - If a number, set the value to all TRBL component,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 *  x / y are shorthands for same value for left/right and top/bottom.
 * @returns The padding values (top, right, bottom, left, width, height)
 * @since 2.7.0
 */ function toPadding(value) {
    const obj = toTRBL(value);
    obj.width = obj.left + obj.right;
    obj.height = obj.top + obj.bottom;
    return obj;
}
/**
 * Parses font options and returns the font object.
 * @param options - A object that contains font options to be parsed.
 * @param fallback - A object that contains fallback font options.
 * @return The font object.
 * @private
 */ function toFont(options, fallback) {
    options = options || {};
    fallback = fallback || defaults.font;
    let size = valueOrDefault(options.size, fallback.size);
    if (typeof size === "string") size = parseInt(size, 10);
    let style = valueOrDefault(options.style, fallback.style);
    if (style && !("" + style).match(FONT_STYLE)) {
        console.warn('Invalid font style specified: "' + style + '"');
        style = undefined;
    }
    const font = {
        family: valueOrDefault(options.family, fallback.family),
        lineHeight: toLineHeight(valueOrDefault(options.lineHeight, fallback.lineHeight), size),
        size,
        style,
        weight: valueOrDefault(options.weight, fallback.weight),
        string: ""
    };
    font.string = toFontString(font);
    return font;
}
/**
 * Evaluates the given `inputs` sequentially and returns the first defined value.
 * @param inputs - An array of values, falling back to the last value.
 * @param context - If defined and the current value is a function, the value
 * is called with `context` as first argument and the result becomes the new input.
 * @param index - If defined and the current value is an array, the value
 * at `index` become the new input.
 * @param info - object to return information about resolution in
 * @param info.cacheable - Will be set to `false` if option is not cacheable.
 * @since 2.7.0
 */ function resolve(inputs, context, index, info) {
    let cacheable = true;
    let i, ilen, value;
    for(i = 0, ilen = inputs.length; i < ilen; ++i){
        value = inputs[i];
        if (value === undefined) continue;
        if (context !== undefined && typeof value === "function") {
            value = value(context);
            cacheable = false;
        }
        if (index !== undefined && isArray(value)) {
            value = value[index % value.length];
            cacheable = false;
        }
        if (value !== undefined) {
            if (info && !cacheable) info.cacheable = false;
            return value;
        }
    }
}
/**
 * @param minmax
 * @param grace
 * @param beginAtZero
 * @private
 */ function _addGrace(minmax, grace, beginAtZero) {
    const { min , max  } = minmax;
    const change = toDimension(grace, (max - min) / 2);
    const keepZero = (value, add)=>beginAtZero && value === 0 ? 0 : value + add;
    return {
        min: keepZero(min, -Math.abs(change)),
        max: keepZero(max, change)
    };
}
/**
 * Create a context inheriting parentContext
 * @param parentContext
 * @param context
 * @returns
 */ function createContext(parentContext, context) {
    return Object.assign(Object.create(parentContext), context);
}
function _createResolver(scopes, prefixes = [
    ""
], rootScopes = scopes, fallback, getTarget = ()=>scopes[0]) {
    if (!defined(fallback)) fallback = _resolve("_fallback", scopes);
    const cache = {
        [Symbol.toStringTag]: "Object",
        _cacheable: true,
        _scopes: scopes,
        _rootScopes: rootScopes,
        _fallback: fallback,
        _getTarget: getTarget,
        override: (scope)=>_createResolver([
                scope,
                ...scopes
            ], prefixes, rootScopes, fallback)
    };
    return new Proxy(cache, {
        deleteProperty (target, prop) {
            delete target[prop];
            delete target._keys;
            delete scopes[0][prop];
            return true;
        },
        get (target, prop) {
            return _cached(target, prop, ()=>_resolveWithPrefixes(prop, prefixes, scopes, target));
        },
        getOwnPropertyDescriptor (target, prop) {
            return Reflect.getOwnPropertyDescriptor(target._scopes[0], prop);
        },
        getPrototypeOf () {
            return Reflect.getPrototypeOf(scopes[0]);
        },
        has (target, prop) {
            return getKeysFromAllScopes(target).includes(prop);
        },
        ownKeys (target) {
            return getKeysFromAllScopes(target);
        },
        set (target, prop, value) {
            const storage = target._storage || (target._storage = getTarget());
            target[prop] = storage[prop] = value;
            delete target._keys;
            return true;
        }
    });
}
function _attachContext(proxy, context, subProxy, descriptorDefaults) {
    const cache = {
        _cacheable: false,
        _proxy: proxy,
        _context: context,
        _subProxy: subProxy,
        _stack: new Set(),
        _descriptors: _descriptors(proxy, descriptorDefaults),
        setContext: (ctx)=>_attachContext(proxy, ctx, subProxy, descriptorDefaults),
        override: (scope)=>_attachContext(proxy.override(scope), context, subProxy, descriptorDefaults)
    };
    return new Proxy(cache, {
        deleteProperty (target, prop) {
            delete target[prop];
            delete proxy[prop];
            return true;
        },
        get (target, prop, receiver) {
            return _cached(target, prop, ()=>_resolveWithContext(target, prop, receiver));
        },
        getOwnPropertyDescriptor (target, prop) {
            return target._descriptors.allKeys ? Reflect.has(proxy, prop) ? {
                enumerable: true,
                configurable: true
            } : undefined : Reflect.getOwnPropertyDescriptor(proxy, prop);
        },
        getPrototypeOf () {
            return Reflect.getPrototypeOf(proxy);
        },
        has (target, prop) {
            return Reflect.has(proxy, prop);
        },
        ownKeys () {
            return Reflect.ownKeys(proxy);
        },
        set (target, prop, value) {
            proxy[prop] = value;
            delete target[prop];
            return true;
        }
    });
}
function _descriptors(proxy, defaults = {
    scriptable: true,
    indexable: true
}) {
    const { _scriptable =defaults.scriptable , _indexable =defaults.indexable , _allKeys =defaults.allKeys  } = proxy;
    return {
        allKeys: _allKeys,
        scriptable: _scriptable,
        indexable: _indexable,
        isScriptable: isFunction(_scriptable) ? _scriptable : ()=>_scriptable,
        isIndexable: isFunction(_indexable) ? _indexable : ()=>_indexable
    };
}
const readKey = (prefix, name)=>prefix ? prefix + _capitalize(name) : name;
const needsSubResolver = (prop, value)=>isObject(value) && prop !== "adapters" && (Object.getPrototypeOf(value) === null || value.constructor === Object);
function _cached(target, prop, resolve) {
    if (Object.prototype.hasOwnProperty.call(target, prop)) return target[prop];
    const value = resolve();
    target[prop] = value;
    return value;
}
function _resolveWithContext(target, prop, receiver) {
    const { _proxy , _context , _subProxy , _descriptors: descriptors  } = target;
    let value = _proxy[prop];
    if (isFunction(value) && descriptors.isScriptable(prop)) value = _resolveScriptable(prop, value, target, receiver);
    if (isArray(value) && value.length) value = _resolveArray(prop, value, target, descriptors.isIndexable);
    if (needsSubResolver(prop, value)) value = _attachContext(value, _context, _subProxy && _subProxy[prop], descriptors);
    return value;
}
function _resolveScriptable(prop, value, target, receiver) {
    const { _proxy , _context , _subProxy , _stack  } = target;
    if (_stack.has(prop)) throw new Error("Recursion detected: " + Array.from(_stack).join("->") + "->" + prop);
    _stack.add(prop);
    value = value(_context, _subProxy || receiver);
    _stack.delete(prop);
    if (needsSubResolver(prop, value)) value = createSubResolver(_proxy._scopes, _proxy, prop, value);
    return value;
}
function _resolveArray(prop, value, target, isIndexable) {
    const { _proxy , _context , _subProxy , _descriptors: descriptors  } = target;
    if (defined(_context.index) && isIndexable(prop)) value = value[_context.index % value.length];
    else if (isObject(value[0])) {
        const arr = value;
        const scopes = _proxy._scopes.filter((s)=>s !== arr);
        value = [];
        for (const item of arr){
            const resolver = createSubResolver(scopes, _proxy, prop, item);
            value.push(_attachContext(resolver, _context, _subProxy && _subProxy[prop], descriptors));
        }
    }
    return value;
}
function resolveFallback(fallback, prop, value) {
    return isFunction(fallback) ? fallback(prop, value) : fallback;
}
const getScope = (key, parent)=>key === true ? parent : typeof key === "string" ? resolveObjectKey(parent, key) : undefined;
function addScopes(set, parentScopes, key, parentFallback, value) {
    for (const parent of parentScopes){
        const scope = getScope(key, parent);
        if (scope) {
            set.add(scope);
            const fallback = resolveFallback(scope._fallback, key, value);
            if (defined(fallback) && fallback !== key && fallback !== parentFallback) return fallback;
        } else if (scope === false && defined(parentFallback) && key !== parentFallback) return null;
    }
    return false;
}
function createSubResolver(parentScopes, resolver, prop, value) {
    const rootScopes = resolver._rootScopes;
    const fallback = resolveFallback(resolver._fallback, prop, value);
    const allScopes = [
        ...parentScopes,
        ...rootScopes
    ];
    const set = new Set();
    set.add(value);
    let key = addScopesFromKey(set, allScopes, prop, fallback || prop, value);
    if (key === null) return false;
    if (defined(fallback) && fallback !== prop) {
        key = addScopesFromKey(set, allScopes, fallback, key, value);
        if (key === null) return false;
    }
    return _createResolver(Array.from(set), [
        ""
    ], rootScopes, fallback, ()=>subGetTarget(resolver, prop, value));
}
function addScopesFromKey(set, allScopes, key, fallback, item) {
    while(key)key = addScopes(set, allScopes, key, fallback, item);
    return key;
}
function subGetTarget(resolver, prop, value) {
    const parent = resolver._getTarget();
    if (!(prop in parent)) parent[prop] = {};
    const target = parent[prop];
    if (isArray(target) && isObject(value)) return value;
    return target || {};
}
function _resolveWithPrefixes(prop, prefixes, scopes, proxy) {
    let value;
    for (const prefix of prefixes){
        value = _resolve(readKey(prefix, prop), scopes);
        if (defined(value)) return needsSubResolver(prop, value) ? createSubResolver(scopes, proxy, prop, value) : value;
    }
}
function _resolve(key, scopes) {
    for (const scope of scopes){
        if (!scope) continue;
        const value = scope[key];
        if (defined(value)) return value;
    }
}
function getKeysFromAllScopes(target) {
    let keys = target._keys;
    if (!keys) keys = target._keys = resolveKeysFromAllScopes(target._scopes);
    return keys;
}
function resolveKeysFromAllScopes(scopes) {
    const set = new Set();
    for (const scope of scopes)for (const key of Object.keys(scope).filter((k)=>!k.startsWith("_")))set.add(key);
    return Array.from(set);
}
function _parseObjectDataRadialScale(meta, data, start, count) {
    const { iScale  } = meta;
    const { key ="r"  } = this._parsing;
    const parsed = new Array(count);
    let i, ilen, index, item;
    for(i = 0, ilen = count; i < ilen; ++i){
        index = i + start;
        item = data[index];
        parsed[i] = {
            r: iScale.parse(resolveObjectKey(item, key), index)
        };
    }
    return parsed;
}
const EPSILON = Number.EPSILON || 1e-14;
const getPoint = (points, i)=>i < points.length && !points[i].skip && points[i];
const getValueAxis = (indexAxis)=>indexAxis === "x" ? "y" : "x";
function splineCurve(firstPoint, middlePoint, afterPoint, t) {
    // Props to Rob Spencer at scaled innovation for his post on splining between points
    // http://scaledinnovation.com/analytics/splines/aboutSplines.html
    // This function must also respect "skipped" points
    const previous = firstPoint.skip ? middlePoint : firstPoint;
    const current = middlePoint;
    const next = afterPoint.skip ? middlePoint : afterPoint;
    const d01 = distanceBetweenPoints(current, previous);
    const d12 = distanceBetweenPoints(next, current);
    let s01 = d01 / (d01 + d12);
    let s12 = d12 / (d01 + d12);
    // If all points are the same, s01 & s02 will be inf
    s01 = isNaN(s01) ? 0 : s01;
    s12 = isNaN(s12) ? 0 : s12;
    const fa = t * s01; // scaling factor for triangle Ta
    const fb = t * s12;
    return {
        previous: {
            x: current.x - fa * (next.x - previous.x),
            y: current.y - fa * (next.y - previous.y)
        },
        next: {
            x: current.x + fb * (next.x - previous.x),
            y: current.y + fb * (next.y - previous.y)
        }
    };
}
/**
 * Adjust tangents to ensure monotonic properties
 */ function monotoneAdjust(points, deltaK, mK) {
    const pointsLen = points.length;
    let alphaK, betaK, tauK, squaredMagnitude, pointCurrent;
    let pointAfter = getPoint(points, 0);
    for(let i = 0; i < pointsLen - 1; ++i){
        pointCurrent = pointAfter;
        pointAfter = getPoint(points, i + 1);
        if (!pointCurrent || !pointAfter) continue;
        if (almostEquals(deltaK[i], 0, EPSILON)) {
            mK[i] = mK[i + 1] = 0;
            continue;
        }
        alphaK = mK[i] / deltaK[i];
        betaK = mK[i + 1] / deltaK[i];
        squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
        if (squaredMagnitude <= 9) continue;
        tauK = 3 / Math.sqrt(squaredMagnitude);
        mK[i] = alphaK * tauK * deltaK[i];
        mK[i + 1] = betaK * tauK * deltaK[i];
    }
}
function monotoneCompute(points, mK, indexAxis = "x") {
    const valueAxis = getValueAxis(indexAxis);
    const pointsLen = points.length;
    let delta, pointBefore, pointCurrent;
    let pointAfter = getPoint(points, 0);
    for(let i = 0; i < pointsLen; ++i){
        pointBefore = pointCurrent;
        pointCurrent = pointAfter;
        pointAfter = getPoint(points, i + 1);
        if (!pointCurrent) continue;
        const iPixel = pointCurrent[indexAxis];
        const vPixel = pointCurrent[valueAxis];
        if (pointBefore) {
            delta = (iPixel - pointBefore[indexAxis]) / 3;
            pointCurrent[`cp1${indexAxis}`] = iPixel - delta;
            pointCurrent[`cp1${valueAxis}`] = vPixel - delta * mK[i];
        }
        if (pointAfter) {
            delta = (pointAfter[indexAxis] - iPixel) / 3;
            pointCurrent[`cp2${indexAxis}`] = iPixel + delta;
            pointCurrent[`cp2${valueAxis}`] = vPixel + delta * mK[i];
        }
    }
}
/**
 * This function calculates Bézier control points in a similar way than |splineCurve|,
 * but preserves monotonicity of the provided data and ensures no local extremums are added
 * between the dataset discrete points due to the interpolation.
 * See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation
 */ function splineCurveMonotone(points, indexAxis = "x") {
    const valueAxis = getValueAxis(indexAxis);
    const pointsLen = points.length;
    const deltaK = Array(pointsLen).fill(0);
    const mK = Array(pointsLen);
    // Calculate slopes (deltaK) and initialize tangents (mK)
    let i, pointBefore, pointCurrent;
    let pointAfter = getPoint(points, 0);
    for(i = 0; i < pointsLen; ++i){
        pointBefore = pointCurrent;
        pointCurrent = pointAfter;
        pointAfter = getPoint(points, i + 1);
        if (!pointCurrent) continue;
        if (pointAfter) {
            const slopeDelta = pointAfter[indexAxis] - pointCurrent[indexAxis];
            // In the case of two points that appear at the same x pixel, slopeDeltaX is 0
            deltaK[i] = slopeDelta !== 0 ? (pointAfter[valueAxis] - pointCurrent[valueAxis]) / slopeDelta : 0;
        }
        mK[i] = !pointBefore ? deltaK[i] : !pointAfter ? deltaK[i - 1] : sign(deltaK[i - 1]) !== sign(deltaK[i]) ? 0 : (deltaK[i - 1] + deltaK[i]) / 2;
    }
    monotoneAdjust(points, deltaK, mK);
    monotoneCompute(points, mK, indexAxis);
}
function capControlPoint(pt, min, max) {
    return Math.max(Math.min(pt, max), min);
}
function capBezierPoints(points, area) {
    let i, ilen, point, inArea, inAreaPrev;
    let inAreaNext = _isPointInArea(points[0], area);
    for(i = 0, ilen = points.length; i < ilen; ++i){
        inAreaPrev = inArea;
        inArea = inAreaNext;
        inAreaNext = i < ilen - 1 && _isPointInArea(points[i + 1], area);
        if (!inArea) continue;
        point = points[i];
        if (inAreaPrev) {
            point.cp1x = capControlPoint(point.cp1x, area.left, area.right);
            point.cp1y = capControlPoint(point.cp1y, area.top, area.bottom);
        }
        if (inAreaNext) {
            point.cp2x = capControlPoint(point.cp2x, area.left, area.right);
            point.cp2y = capControlPoint(point.cp2y, area.top, area.bottom);
        }
    }
}
/**
 * @private
 */ function _updateBezierControlPoints(points, options, area, loop, indexAxis) {
    let i, ilen, point, controlPoints;
    // Only consider points that are drawn in case the spanGaps option is used
    if (options.spanGaps) points = points.filter((pt)=>!pt.skip);
    if (options.cubicInterpolationMode === "monotone") splineCurveMonotone(points, indexAxis);
    else {
        let prev = loop ? points[points.length - 1] : points[0];
        for(i = 0, ilen = points.length; i < ilen; ++i){
            point = points[i];
            controlPoints = splineCurve(prev, point, points[Math.min(i + 1, ilen - (loop ? 0 : 1)) % ilen], options.tension);
            point.cp1x = controlPoints.previous.x;
            point.cp1y = controlPoints.previous.y;
            point.cp2x = controlPoints.next.x;
            point.cp2y = controlPoints.next.y;
            prev = point;
        }
    }
    if (options.capBezierPoints) capBezierPoints(points, area);
}
/**
 * Note: typedefs are auto-exported, so use a made-up `dom` namespace where
 * necessary to avoid duplicates with `export * from './helpers`; see
 * https://github.com/microsoft/TypeScript/issues/46011
 * @typedef { import("../core/core.controller").default } dom.Chart
 * @typedef { import('../../types').ChartEvent } ChartEvent
 */ /**
 * @private
 */ function _isDomSupported() {
    return typeof window !== "undefined" && typeof document !== "undefined";
}
/**
 * @private
 */ function _getParentNode(domNode) {
    let parent = domNode.parentNode;
    if (parent && parent.toString() === "[object ShadowRoot]") parent = parent.host;
    return parent;
}
/**
 * convert max-width/max-height values that may be percentages into a number
 * @private
 */ function parseMaxStyle(styleValue, node, parentProperty) {
    let valueInPixels;
    if (typeof styleValue === "string") {
        valueInPixels = parseInt(styleValue, 10);
        if (styleValue.indexOf("%") !== -1) // percentage * size in dimension
        valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
    } else valueInPixels = styleValue;
    return valueInPixels;
}
const getComputedStyle = (element)=>element.ownerDocument.defaultView.getComputedStyle(element, null);
function getStyle(el, property) {
    return getComputedStyle(el).getPropertyValue(property);
}
const positions = [
    "top",
    "right",
    "bottom",
    "left"
];
function getPositionedStyle(styles, style, suffix) {
    const result = {};
    suffix = suffix ? "-" + suffix : "";
    for(let i = 0; i < 4; i++){
        const pos = positions[i];
        result[pos] = parseFloat(styles[style + "-" + pos + suffix]) || 0;
    }
    result.width = result.left + result.right;
    result.height = result.top + result.bottom;
    return result;
}
const useOffsetPos = (x, y, target)=>(x > 0 || y > 0) && (!target || !target.shadowRoot);
/**
 * @param e
 * @param canvas
 * @returns Canvas position
 */ function getCanvasPosition(e, canvas) {
    const touches = e.touches;
    const source = touches && touches.length ? touches[0] : e;
    const { offsetX , offsetY  } = source;
    let box = false;
    let x, y;
    if (useOffsetPos(offsetX, offsetY, e.target)) {
        x = offsetX;
        y = offsetY;
    } else {
        const rect = canvas.getBoundingClientRect();
        x = source.clientX - rect.left;
        y = source.clientY - rect.top;
        box = true;
    }
    return {
        x,
        y,
        box
    };
}
/**
 * Gets an event's x, y coordinates, relative to the chart area
 * @param event
 * @param chart
 * @returns x and y coordinates of the event
 */ function getRelativePosition(event, chart) {
    if ("native" in event) return event;
    const { canvas , currentDevicePixelRatio  } = chart;
    const style = getComputedStyle(canvas);
    const borderBox = style.boxSizing === "border-box";
    const paddings = getPositionedStyle(style, "padding");
    const borders = getPositionedStyle(style, "border", "width");
    const { x , y , box  } = getCanvasPosition(event, canvas);
    const xOffset = paddings.left + (box && borders.left);
    const yOffset = paddings.top + (box && borders.top);
    let { width , height  } = chart;
    if (borderBox) {
        width -= paddings.width + borders.width;
        height -= paddings.height + borders.height;
    }
    return {
        x: Math.round((x - xOffset) / width * canvas.width / currentDevicePixelRatio),
        y: Math.round((y - yOffset) / height * canvas.height / currentDevicePixelRatio)
    };
}
function getContainerSize(canvas, width, height) {
    let maxWidth, maxHeight;
    if (width === undefined || height === undefined) {
        const container = _getParentNode(canvas);
        if (!container) {
            width = canvas.clientWidth;
            height = canvas.clientHeight;
        } else {
            const rect = container.getBoundingClientRect(); // this is the border box of the container
            const containerStyle = getComputedStyle(container);
            const containerBorder = getPositionedStyle(containerStyle, "border", "width");
            const containerPadding = getPositionedStyle(containerStyle, "padding");
            width = rect.width - containerPadding.width - containerBorder.width;
            height = rect.height - containerPadding.height - containerBorder.height;
            maxWidth = parseMaxStyle(containerStyle.maxWidth, container, "clientWidth");
            maxHeight = parseMaxStyle(containerStyle.maxHeight, container, "clientHeight");
        }
    }
    return {
        width,
        height,
        maxWidth: maxWidth || INFINITY,
        maxHeight: maxHeight || INFINITY
    };
}
const round1 = (v)=>Math.round(v * 10) / 10;
// eslint-disable-next-line complexity
function getMaximumSize(canvas, bbWidth, bbHeight, aspectRatio) {
    const style = getComputedStyle(canvas);
    const margins = getPositionedStyle(style, "margin");
    const maxWidth = parseMaxStyle(style.maxWidth, canvas, "clientWidth") || INFINITY;
    const maxHeight = parseMaxStyle(style.maxHeight, canvas, "clientHeight") || INFINITY;
    const containerSize = getContainerSize(canvas, bbWidth, bbHeight);
    let { width , height  } = containerSize;
    if (style.boxSizing === "content-box") {
        const borders = getPositionedStyle(style, "border", "width");
        const paddings = getPositionedStyle(style, "padding");
        width -= paddings.width + borders.width;
        height -= paddings.height + borders.height;
    }
    width = Math.max(0, width - margins.width);
    height = Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height - margins.height);
    width = round1(Math.min(width, maxWidth, containerSize.maxWidth));
    height = round1(Math.min(height, maxHeight, containerSize.maxHeight));
    if (width && !height) // https://github.com/chartjs/Chart.js/issues/4659
    // If the canvas has width, but no height, default to aspectRatio of 2 (canvas default)
    height = round1(width / 2);
    const maintainHeight = bbWidth !== undefined || bbHeight !== undefined;
    if (maintainHeight && aspectRatio && containerSize.height && height > containerSize.height) {
        height = containerSize.height;
        width = round1(Math.floor(height * aspectRatio));
    }
    return {
        width,
        height
    };
}
/**
 * @param chart
 * @param forceRatio
 * @param forceStyle
 * @returns True if the canvas context size or transformation has changed.
 */ function retinaScale(chart, forceRatio, forceStyle) {
    const pixelRatio = forceRatio || 1;
    const deviceHeight = Math.floor(chart.height * pixelRatio);
    const deviceWidth = Math.floor(chart.width * pixelRatio);
    chart.height = deviceHeight / pixelRatio;
    chart.width = deviceWidth / pixelRatio;
    const canvas = chart.canvas;
    // If no style has been set on the canvas, the render size is used as display size,
    // making the chart visually bigger, so let's enforce it to the "correct" values.
    // See https://github.com/chartjs/Chart.js/issues/3575
    if (canvas.style && (forceStyle || !canvas.style.height && !canvas.style.width)) {
        canvas.style.height = `${chart.height}px`;
        canvas.style.width = `${chart.width}px`;
    }
    if (chart.currentDevicePixelRatio !== pixelRatio || canvas.height !== deviceHeight || canvas.width !== deviceWidth) {
        chart.currentDevicePixelRatio = pixelRatio;
        canvas.height = deviceHeight;
        canvas.width = deviceWidth;
        chart.ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        return true;
    }
    return false;
}
/**
 * Detects support for options object argument in addEventListener.
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
 * @private
 */ const supportsEventListenerOptions = function() {
    let passiveSupported = false;
    try {
        const options = {
            get passive () {
                passiveSupported = true;
                return false;
            }
        };
        window.addEventListener("test", null, options);
        window.removeEventListener("test", null, options);
    } catch (e) {
    // continue regardless of error
    }
    return passiveSupported;
}();
/**
 * The "used" size is the final value of a dimension property after all calculations have
 * been performed. This method uses the computed style of `element` but returns undefined
 * if the computed style is not expressed in pixels. That can happen in some cases where
 * `element` has a size relative to its parent and this last one is not yet displayed,
 * for example because of `display: none` on a parent node.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
 * @returns Size in pixels or undefined if unknown.
 */ function readUsedSize(element, property) {
    const value = getStyle(element, property);
    const matches = value && value.match(/^(\d+)(\.\d+)?px$/);
    return matches ? +matches[1] : undefined;
}
/**
 * @private
 */ function _pointInLine(p1, p2, t, mode) {
    return {
        x: p1.x + t * (p2.x - p1.x),
        y: p1.y + t * (p2.y - p1.y)
    };
}
/**
 * @private
 */ function _steppedInterpolation(p1, p2, t, mode) {
    return {
        x: p1.x + t * (p2.x - p1.x),
        y: mode === "middle" ? t < 0.5 ? p1.y : p2.y : mode === "after" ? t < 1 ? p1.y : p2.y : t > 0 ? p2.y : p1.y
    };
}
/**
 * @private
 */ function _bezierInterpolation(p1, p2, t, mode) {
    const cp1 = {
        x: p1.cp2x,
        y: p1.cp2y
    };
    const cp2 = {
        x: p2.cp1x,
        y: p2.cp1y
    };
    const a = _pointInLine(p1, cp1, t);
    const b = _pointInLine(cp1, cp2, t);
    const c = _pointInLine(cp2, p2, t);
    const d = _pointInLine(a, b, t);
    const e = _pointInLine(b, c, t);
    return _pointInLine(d, e, t);
}
const getRightToLeftAdapter = function(rectX, width) {
    return {
        x (x) {
            return rectX + rectX + width - x;
        },
        setWidth (w) {
            width = w;
        },
        textAlign (align) {
            if (align === "center") return align;
            return align === "right" ? "left" : "right";
        },
        xPlus (x, value) {
            return x - value;
        },
        leftForLtr (x, itemWidth) {
            return x - itemWidth;
        }
    };
};
const getLeftToRightAdapter = function() {
    return {
        x (x) {
            return x;
        },
        setWidth (w) {},
        textAlign (align) {
            return align;
        },
        xPlus (x, value) {
            return x + value;
        },
        leftForLtr (x, _itemWidth) {
            return x;
        }
    };
};
function getRtlAdapter(rtl, rectX, width) {
    return rtl ? getRightToLeftAdapter(rectX, width) : getLeftToRightAdapter();
}
function overrideTextDirection(ctx, direction) {
    let style, original;
    if (direction === "ltr" || direction === "rtl") {
        style = ctx.canvas.style;
        original = [
            style.getPropertyValue("direction"),
            style.getPropertyPriority("direction")
        ];
        style.setProperty("direction", direction, "important");
        ctx.prevTextDirection = original;
    }
}
function restoreTextDirection(ctx, original) {
    if (original !== undefined) {
        delete ctx.prevTextDirection;
        ctx.canvas.style.setProperty("direction", original[0], original[1]);
    }
}
function propertyFn(property) {
    if (property === "angle") return {
        between: _angleBetween,
        compare: _angleDiff,
        normalize: _normalizeAngle
    };
    return {
        between: _isBetween,
        compare: (a, b)=>a - b,
        normalize: (x)=>x
    };
}
function normalizeSegment({ start , end , count , loop , style  }) {
    return {
        start: start % count,
        end: end % count,
        loop: loop && (end - start + 1) % count === 0,
        style
    };
}
function getSegment(segment, points, bounds) {
    const { property , start: startBound , end: endBound  } = bounds;
    const { between , normalize  } = propertyFn(property);
    const count = points.length;
    let { start , end , loop  } = segment;
    let i, ilen;
    if (loop) {
        start += count;
        end += count;
        for(i = 0, ilen = count; i < ilen; ++i){
            if (!between(normalize(points[start % count][property]), startBound, endBound)) break;
            start--;
            end--;
        }
        start %= count;
        end %= count;
    }
    if (end < start) end += count;
    return {
        start,
        end,
        loop,
        style: segment.style
    };
}
function _boundSegment(segment, points, bounds) {
    if (!bounds) return [
        segment
    ];
    const { property , start: startBound , end: endBound  } = bounds;
    const count = points.length;
    const { compare , between , normalize  } = propertyFn(property);
    const { start , end , loop , style  } = getSegment(segment, points, bounds);
    const result = [];
    let inside = false;
    let subStart = null;
    let value, point, prevValue;
    const startIsBefore = ()=>between(startBound, prevValue, value) && compare(startBound, prevValue) !== 0;
    const endIsBefore = ()=>compare(endBound, value) === 0 || between(endBound, prevValue, value);
    const shouldStart = ()=>inside || startIsBefore();
    const shouldStop = ()=>!inside || endIsBefore();
    for(let i = start, prev = start; i <= end; ++i){
        point = points[i % count];
        if (point.skip) continue;
        value = normalize(point[property]);
        if (value === prevValue) continue;
        inside = between(value, startBound, endBound);
        if (subStart === null && shouldStart()) subStart = compare(value, startBound) === 0 ? i : prev;
        if (subStart !== null && shouldStop()) {
            result.push(normalizeSegment({
                start: subStart,
                end: i,
                loop,
                count,
                style
            }));
            subStart = null;
        }
        prev = i;
        prevValue = value;
    }
    if (subStart !== null) result.push(normalizeSegment({
        start: subStart,
        end,
        loop,
        count,
        style
    }));
    return result;
}
function _boundSegments(line, bounds) {
    const result = [];
    const segments = line.segments;
    for(let i = 0; i < segments.length; i++){
        const sub = _boundSegment(segments[i], line.points, bounds);
        if (sub.length) result.push(...sub);
    }
    return result;
}
function findStartAndEnd(points, count, loop, spanGaps) {
    let start = 0;
    let end = count - 1;
    if (loop && !spanGaps) while(start < count && !points[start].skip)start++;
    while(start < count && points[start].skip)start++;
    start %= count;
    if (loop) end += start;
    while(end > start && points[end % count].skip)end--;
    end %= count;
    return {
        start,
        end
    };
}
function solidSegments(points, start, max, loop) {
    const count = points.length;
    const result = [];
    let last = start;
    let prev = points[start];
    let end;
    for(end = start + 1; end <= max; ++end){
        const cur = points[end % count];
        if (cur.skip || cur.stop) {
            if (!prev.skip) {
                loop = false;
                result.push({
                    start: start % count,
                    end: (end - 1) % count,
                    loop
                });
                start = last = cur.stop ? end : null;
            }
        } else {
            last = end;
            if (prev.skip) start = end;
        }
        prev = cur;
    }
    if (last !== null) result.push({
        start: start % count,
        end: last % count,
        loop
    });
    return result;
}
function _computeSegments(line, segmentOptions) {
    const points = line.points;
    const spanGaps = line.options.spanGaps;
    const count = points.length;
    if (!count) return [];
    const loop = !!line._loop;
    const { start , end  } = findStartAndEnd(points, count, loop, spanGaps);
    if (spanGaps === true) return splitByStyles(line, [
        {
            start,
            end,
            loop
        }
    ], points, segmentOptions);
    const max = end < start ? end + count : end;
    const completeLoop = !!line._fullLoop && start === 0 && end === count - 1;
    return splitByStyles(line, solidSegments(points, start, max, completeLoop), points, segmentOptions);
}
function splitByStyles(line, segments, points, segmentOptions) {
    if (!segmentOptions || !segmentOptions.setContext || !points) return segments;
    return doSplitByStyles(line, segments, points, segmentOptions);
}
function doSplitByStyles(line, segments, points, segmentOptions) {
    const chartContext = line._chart.getContext();
    const baseStyle = readStyle(line.options);
    const { _datasetIndex: datasetIndex , options: { spanGaps  }  } = line;
    const count = points.length;
    const result = [];
    let prevStyle = baseStyle;
    let start = segments[0].start;
    let i = start;
    function addStyle(s, e, l, st) {
        const dir = spanGaps ? -1 : 1;
        if (s === e) return;
        s += count;
        while(points[s % count].skip)s -= dir;
        while(points[e % count].skip)e += dir;
        if (s % count !== e % count) {
            result.push({
                start: s % count,
                end: e % count,
                loop: l,
                style: st
            });
            prevStyle = st;
            start = e % count;
        }
    }
    for (const segment of segments){
        start = spanGaps ? start : segment.start;
        let prev = points[start % count];
        let style;
        for(i = start + 1; i <= segment.end; i++){
            const pt = points[i % count];
            style = readStyle(segmentOptions.setContext(createContext(chartContext, {
                type: "segment",
                p0: prev,
                p1: pt,
                p0DataIndex: (i - 1) % count,
                p1DataIndex: i % count,
                datasetIndex
            })));
            if (styleChanged(style, prevStyle)) addStyle(start, i - 1, segment.loop, prevStyle);
            prev = pt;
            prevStyle = style;
        }
        if (start < i - 1) addStyle(start, i - 1, segment.loop, prevStyle);
    }
    return result;
}
function readStyle(options) {
    return {
        backgroundColor: options.backgroundColor,
        borderCapStyle: options.borderCapStyle,
        borderDash: options.borderDash,
        borderDashOffset: options.borderDashOffset,
        borderJoinStyle: options.borderJoinStyle,
        borderWidth: options.borderWidth,
        borderColor: options.borderColor
    };
}
function styleChanged(style, prevStyle) {
    return prevStyle && JSON.stringify(style) !== JSON.stringify(prevStyle);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"h82lJ":[function(require,module,exports) {
module.exports = JSON.parse('[{"company":"CREDIT SUISSE Poland","job_title":"Data Management Analyst","location":"Wrocław (Poland)","tags":[]},{"company":"Kyndryl Global Service Delivery Center Sp. z o.o.","job_title":"SAP Developer","location":"Multiple locations offer (16)","tags":["SQL","Docker","Python"]},{"company":"Danish Crown GBS Sp. z o.o. .","job_title":"Azure DevOps Engineer","location":"Krak\xf3w (Poland)","tags":["Jenkins","Ansible","Azure"]},{"company":"Danish Crown GBS Sp. z o.o. .","job_title":"SAP BW Business Consultant","location":"Krak\xf3w (Poland)","tags":["SAP","SQL"]},{"company":"Danish Crown GBS Sp. z o.o. .","job_title":"Azure Data Engineer","location":"Krak\xf3w (Poland)","tags":["Azure","Apache Spark","SQL"]},{"company":"ITBoom Sp. z o.o.","job_title":"Junior IT Project Manager","location":"Warszawa (Polska)","tags":[]},{"company":"Cyclad","job_title":"React Web Developer","location":"Wrocław (Poland)","tags":["React.js","JavaScript","HTML","CSS","Git"]},{"company":"ROHLIG SUUS Logistics S.A.","job_title":"BI Developer","location":"Oferta w wielu lokalizacjach (18)","tags":["Power BI","TSQL","SSAS","DAX"]},{"company":"ROHLIG SUUS Logistics S.A.","job_title":"Analityk BI","location":"Oferta w wielu lokalizacjach (18)","tags":["SQL","Excel","Power BI"]},{"company":"EPAM Systems (Poland) sp. z o.o.","job_title":"Lead Java Developer","location":"Multiple locations offer (16)","tags":["Java","Spring Boot","SQL","Eclipse","Git","Jira","Jenkins"]},{"company":"EPAM Systems (Poland) sp. z o.o.","job_title":"Senior Systems Engineer (MS /Azure)","location":"Multiple locations offer (16)","tags":["Azure","Python"]},{"company":"EPAM Systems (Poland) sp. z o.o.","job_title":"Senior Java Developer","location":"Multiple locations offer (16)","tags":["Java","AWS","Jira","Confluence"]},{"company":"Sabre Polska Sp. z o.o.","job_title":"Principal II C++ Software Architect - Offer Management team","location":"Krak\xf3w (Poland)","tags":["C++","Agile","Git"]},{"company":"Sabre Polska Sp. z o.o.","job_title":"Senior Principal Software Architect C++ - Offer Management team","location":"Krak\xf3w (Poland)","tags":["C++","Agile","Git","Java"]},{"company":"Sabre Polska Sp. z o.o.","job_title":"Principal Software Architect - Digital Connect API Team","location":"Krak\xf3w (Poland)","tags":["Java","Spring","Spring Boot"]},{"company":"Sabre Polska Sp. z o.o.","job_title":"Senior Software Engineer - Sabre Red 360","location":"Krak\xf3w (Poland)","tags":["Java","HTML","CSS","TypeScript","JavaScript","Git"]},{"company":"Atos Poland Global Services Sp. z o.o.","job_title":"Citrix Engineer","location":"Multiple locations offer (16)","tags":["PowerShell","Active Directory"]},{"company":"Currenda Sp. z o. o.","job_title":"Lead Developer","location":"Sopot (Polska)","tags":["Java","Spring Framework","REST","architektura modularnego monolitu","systemy kolejkowe","relacyjne i nierelacyjne bazy danych"]},{"company":"Booksy International Sp. z o.o.","job_title":"Data Protection Project Manager","location":"Multiple locations offer (16)","tags":[]},{"company":"KMD Poland Sp. z o.o.","job_title":"Vulnerability Management Analyst","location":"Warszawa (Poland)","tags":[]},{"company":"KMD Poland Sp. z o.o.","job_title":"Senior Penetration Tester","location":"Warszawa (Poland)","tags":[]},{"company":"Generali","job_title":"Młodszy Administrator Baz Danych","location":"Warszawa (Polska)","tags":["Oracle"]},{"company":"Compensa Towarzystwo Ubezpieczeń S.A. Vienna Insurance Group","job_title":"Tester","location":"Warszawa (Polska)","tags":["Jira"]},{"company":"Tectonic Interactive Ltd.","job_title":"Backend Software Engineer","location":"Rzesz\xf3w (Poland)","tags":["Node.js"]},{"company":"Tectonic Interactive Ltd.","job_title":"Senior Fullstack Software Engineer","location":"Rzesz\xf3w (Poland)","tags":["NodeJS","React","PostgreSQL","TypeScript"]},{"company":"ALIOR BANK","job_title":"Software Developer - Rozw\xf3j Bankowości Internetowej i Mobilnej","location":"Oferta w wielu lokalizacjach (3)","tags":["Java 11+","Spring Framework","ElasticSearch","Oracle","ActiveMQ","REST/SOAP","Maven","Git","Jenkins","IntelliJ IDEA","Confluence","Jira"]},{"company":"ALIOR BANK","job_title":"Specjalista ds. bezpieczeństwa IT w zespole rozwoju bezpieczeństwa IT","location":"Oferta w wielu lokalizacjach (3)","tags":[]},{"company":"ALIOR BANK","job_title":"Backend Java Developer","location":"Oferta w wielu lokalizacjach (4)","tags":["Spring Boot","Spring Security","Java 11/17","SQL Oracle","REST","Architektury mikroserwisowej","CI/CD","Scrum"]},{"company":"Media4U Sp. z o.o. ","job_title":"Inżynier IT","location":"Ł\xf3dź (Polska)","tags":["PHP","Docker","Unix","Symfony","SQL","Git"]},{"company":"ZF Group","job_title":"Software and Test Engineer - ADAS","location":"Częstochowa (Polska)","tags":["C++","Python","C#"]},{"company":"EUVIC Sp. z o.o","job_title":"Senior Java Developer","location":"Gliwice (Polska)","tags":["Kotlin","Java","Spring Boot","Docker","AWS","Git","Groovy"]},{"company":"SEB","job_title":"Data Analyst","location":"Warszawa (Poland)","tags":["FCP","Collibra"]},{"company":"LeanCode sp. z o.o.","job_title":"UX Designer","location":"Masovian (Poland)","tags":["Android","iOS","Figma","Adobe XD"]},{"company":"Montrose Software (Polska) Sp. z o.o.","job_title":"Remote Mid Java Developer","location":"Krak\xf3w (Poland)","tags":["Java","Unit testing","SQL","Git","SVN"]},{"company":"LSI Software S.A.","job_title":"Konsultant ds. wsparcia IT","location":"Ł\xf3dź (Polska)","tags":["SQL"]},{"company":"Vector Software Group","job_title":"Tester oprogramowania","location":"Krak\xf3w (Polska)","tags":["SQL"]},{"company":"Cyclad","job_title":"Cloud Security Engineer","location":"Oferta w wielu lokalizacjach (3)","tags":["Microsoft Azure"]},{"company":"Sii Sp. z o.o.","job_title":"R&D Engineer – Electronics Hardware Designer","location":"Multiple locations offer (2)","tags":[]},{"company":"DB Cargo Polska S.A.","job_title":"Specjalista ds. Projekt\xf3w IT","location":"Zabrze (Polska)","tags":[]},{"company":"UPM Kymmene Sp. z o.o.","job_title":"Expert, Source to Pay Solutions Development, Ariba Buying","location":"Wrocław (Poland)","tags":["SAP"]},{"company":"PKN ORLEN S.A.","job_title":"Specjalista w Dziale Rozwoju i Standaryzacji Logistyki","location":"Płock (Polska)","tags":["SAP"]},{"company":"Firma testowa PD","job_title":"Przedstawiciel klienta do sparw rozpatrywania feedu","location":"Oferta w wielu lokalizacjach (2)","tags":["SQL"]},{"company":"PKO Leasing S.A.","job_title":"Specjalista ds. Utrzymania Infrastruktury Sieciowej IT","location":"Oferta w wielu lokalizacjach (2)","tags":[]},{"company":"IT TOUCH Sp. z o.o.","job_title":"DevOps Engineer","location":"Warszawa (Polska)","tags":["Konteneryzacja Aplikacji","Kubernetes","Linux","Jenkins","Docker","SQL"]},{"company":"ARRIS AGENCY","job_title":"Junior PHP Developer","location":"Chorz\xf3w (Polska)","tags":["PHP","MySQL","Laravel","Symfony"]},{"company":"ARRIS AGENCY","job_title":"PHP Developer","location":"Chorz\xf3w (Polska)","tags":["PHP","Symfony","MySQL","Git"]},{"company":"ARRIS AGENCY","job_title":"Front-End Developer","location":"Chorz\xf3w (Polska)","tags":["CSS","HTML","JavaScript","Git"]},{"company":"Listonic","job_title":"Senior iOS Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["iOS","Swift"]},{"company":"Listonic","job_title":"iOS Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["iOS","Swift","Combine"]},{"company":"Smith&Nephew Sp. z o.o.","job_title":"Data Analyst","location":"Wrocław (Poland)","tags":["Power BI","Microsoft Office tools","SQL","Tableau"]},{"company":"Rossmann SDP","job_title":"Software Developer C#","location":"Oferta w wielu lokalizacjach (18)","tags":["C#","T-SQL","Winforms","Devexpress","Git","TFS"]},{"company":"Ośrodek Przetwarzania Informacji – Państwowy Instytut Badawczy","job_title":"Specjalista ds. administracji aplikacjami / Specjalistka ds. administracji aplikacjami","location":"Warszawa (Polska)","tags":["Windows Server","Active Directory","GPO","DNS","DHCP","Hyper - V","Azure","Office365","PowerShell"]},{"company":"Trimtab Arteria Management Sp. z o.o. Sp.k.","job_title":"Java Developer","location":"Warszawa (Polska)","tags":["Java","Framework Spring","JavaScript"]},{"company":"MDDV SP Z O. O.","job_title":"IT Support Specialist","location":"Warszawa (Polska)","tags":["Windows Server"]},{"company":"MDDV SP Z O. O.","job_title":"System Administrator","location":"Oferta w wielu lokalizacjach (16)","tags":["VMware","Hyper-V","XenServer","AWS","Microsoft Azure","Google Cloud Platform"]},{"company":"Faurecia Automotive Polska S.A.","job_title":"Młodszy Specjalista IT","location":"Gorz\xf3w Wielkopolski (Polska)","tags":["Vmware ESX"]},{"company":"ABB Business Services","job_title":"Project Management Office Lead – Technology & Innovation – Innovation Delivery","location":"Krak\xf3w (Poland)","tags":["Agile","ITIL"]},{"company":"Faurecia Automotive Polska S.A.","job_title":"Młodszy Specjalista IT","location":"Gr\xf3jec (Polska)","tags":["Vmware ESX"]},{"company":"Sii Sp. z o.o.","job_title":"Front-end Developer with Angular","location":"Multiple locations offer (14)","tags":["Angular","NodeJS","HTML5","CSS3","Saas","JavaScript","jQuery","Agile"]},{"company":"CREDIT SUISSE Poland","job_title":"Data Protection Product Owner/Capability Architecture","location":"Multiple locations offer (2)","tags":[]},{"company":"CREDIT SUISSE Poland","job_title":"Business Information Analyst","location":"Wrocław (Poland)","tags":["SQL","Jira"]},{"company":"StepStone Services Sp. z o.o.","job_title":"Software Engineer (.Net/Java+JS)","location":"Warszawa (Poland)","tags":["JavaScript",".NET","Java","Node.js","PHP","AWS"]},{"company":"MakoLab SA","job_title":"Inżynier wsparcia aplikacji","location":"Ł\xf3dź (Polska)","tags":["Linux","SQL","BASH","Sieci"]},{"company":"Columbus Energy S.A.","job_title":"Administrator IT","location":"Oferta w wielu lokalizacjach (2)","tags":[]},{"company":"Omnipack Sp. z o.o.","job_title":"Senior Full-Stack Java Developer","location":"Multiple locations offer (3)","tags":[]},{"company":"Faurecia Automotive Polska S.A.","job_title":"Młodszy Specjalista IT","location":"Wałbrzych (Polska)","tags":["Vmware ESX"]},{"company":"Capgemini Software Solutions Center","job_title":"Senior SAP ABAP Consultant","location":"Oferta w wielu lokalizacjach (3)","tags":["SAP ABAP"]},{"company":"PwC","job_title":"Cloud Data Architect - Middle East Projects","location":"Multiple locations offer (16)","tags":["AWS","Google Cloud Platform","Azure","SQL"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"IT Product Manager SAP Masterdata Governance","location":"Warszawa (Poland)","tags":["SAP","SAP MDG","Master Data"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Project & Product Quality Partner","location":"Warszawa (Poland)","tags":[]},{"company":"Samsung R&D Institute Poland","job_title":"JavaScript Developer","location":"Warszawa (Poland)","tags":["JavaScript","Angular","React.js","Vue.js"]},{"company":"Samsung R&D Institute Poland","job_title":"Django Backend Developer","location":"Warszawa (Poland)","tags":["Python (Django)","JavaScript (Vue.js)","PostgreSQL","DevOps (bash, Jenkins, Docker, AWS)"]},{"company":"Samsung R&D Institute Poland","job_title":"C++ Junior Developer","location":"Warszawa (Poland)","tags":["C++14","Python","JavaScript","Git","Perforce","Github","Atlassian Jira"]},{"company":"ITSG sp. z o.o.","job_title":"Senior JavaScript Developer","location":"Multiple locations offer (16)","tags":["JavaScript","TypeScript","Vue","React","Angular"]},{"company":"Schenker Technology Center Warsaw Sp. z o.o.","job_title":"ServiceNow Agility Master","location":"Warszawa (Poland)","tags":["ServiceNow"]},{"company":"DSV ISS ","job_title":"Junior IT Specialist (Hardware Procurement)","location":"Warszawa (Poland)","tags":["MSSQL query syntax"]},{"company":"ITSG sp. z o.o.","job_title":"Node.js Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["Node.js","TypeScript","Hapi.js","Sequlize","MySQL","PostgreSQL"]},{"company":"Samsung R&D Institute Poland","job_title":"UX/UI Designer for Cloud Services","location":"Warszawa (Poland)","tags":["Adobe XD","Sketch"]},{"company":"Samsung R&D Institute Poland","job_title":"C++ Software Engineer","location":"Warszawa (Poland)","tags":["C++14","Git","Jira"]},{"company":"PwC","job_title":"Senior Manager Cloud Strategy and Operating - Middle East Projects","location":"Multiple locations offer (3)","tags":[]},{"company":"JohnnyBros Sp. z o.o. ","job_title":"Ruby on Rails Developer","location":"Gdańsk (Polska)","tags":["Ruby on Rails","RSpec","SQL"]},{"company":"Rossmann SDP","job_title":"Frontend Developer React","location":"Oferta w wielu lokalizacjach (18)","tags":["React","JavaScript","Redux","HTML","CSS","Docker","Azure DevOps"]},{"company":"GGS GO GLOBAL SERVICES SP Z O O","job_title":"Solutions Architect","location":"Krak\xf3w (Poland)","tags":["SQL"]},{"company":"Acturis Poland Sp. z o.o.","job_title":"Junior Software Developer","location":"Wrocław (Polska)","tags":[]},{"company":"JohnnyBros Sp. z o.o. ","job_title":"Ruby on Rails Developer","location":"Gdańsk (Polska)","tags":["Ruby on Rails","RSpec","SQL"]},{"company":"TENNECO Inc.","job_title":"SAP IT Analyst","location":"Rybnik (Polska)","tags":[]},{"company":"CO.BRICK SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Product Owner","location":"Multiple locations offer (16)","tags":[]},{"company":"CO.BRICK SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"PHP Developer","location":"Multiple locations offer (16)","tags":["PHP","Symfony","MongoDB","Elasticsearch","RabbitMQ"]},{"company":"CO.BRICK SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Cloud Operator","location":"Multiple locations offer (16)","tags":["Bash","Python","PowerShell","Docker","Kubernetes","Ansible","Terraform"]},{"company":"CO.BRICK SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Cloudesk Manager","location":"Multiple locations offer (16)","tags":[]},{"company":"Polska Grupa Lotnicza","job_title":"Kierownik Działu Cyberbezpieczeństwa","location":"Warszawa (Polska)","tags":[]},{"company":"CO.BRICK SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Fullstack Developer (PHP, Angular)","location":"Multiple locations offer (16)","tags":["PHP","JavaScript"]},{"company":"CO.BRICK SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Web Scraping R&D Developer","location":"Multiple locations offer (16)","tags":["HTML","Fetch","Storage","Canvas","JavaScript","Puppeteer","Playwright"]},{"company":"Cyfrowy Polsat S.A.","job_title":"Programista - systemy wbudowane","location":"Wrocław (Polska)","tags":["C","C++","Java Script","HTML"]},{"company":"ASTEK Polska","job_title":"Analityk Biznesowo-Systemowy","location":"Warszawa (Polska)","tags":["UML","BPMN"]},{"company":"AstraZeneca Pharma","job_title":"Customer Service Support Team Lead - Finance Operations","location":"Warszawa (Poland)","tags":[]},{"company":"PwC","job_title":"Specjalista ds. wsparcia IT","location":"Warszawa (Polska)","tags":[]},{"company":"NOMINO sp. z o.o.","job_title":"Młodszy Specjalista ds. Service Desk","location":"Kolbuszowa (Polska)","tags":["LAN/WAN","UTM","VPN","Active Directory"]},{"company":"Bank Ochrony Środowiska S.A.","job_title":"Młodszy Specjalista (Junior) Oracle APEX","location":"Warszawa (Polska)","tags":["APEX","SQL","PL/SQL"]},{"company":"Montrose Software (Polska) Sp. z o.o.","job_title":"Remote Full Stack Developer","location":"Krak\xf3w (Poland)","tags":["React.js","Python","Git","SVN","Unit testing skills"]},{"company":"Ringier Axel Springer Polska Sp. z o.o.","job_title":"Agile Program Manager","location":"Oferta w wielu lokalizacjach (3)","tags":[]},{"company":"HCL Poland","job_title":"Lokalne Wsparcie Techniczne","location":"Września (Polska)","tags":[]},{"company":"PwC","job_title":"Data Governance Manager - Middle East Projects","location":"Multiple locations offer (3)","tags":["Tableau","SQL","Python"]},{"company":"CREDIT SUISSE Poland","job_title":"Automation and Integration Test Engineer","location":"Warszawa (Poland)","tags":["C#","SQL","Java"]},{"company":"Samsung R&D Institute Poland","job_title":"AI/ML Engineer for 6G","location":"Krak\xf3w (Poland)","tags":[]},{"company":"Samsung R&D Institute Poland","job_title":"Modem Engineer for 6G","location":"Krak\xf3w (Poland)","tags":[]},{"company":"Samsung R&D Institute Poland","job_title":"FPGA Engineer for 6G","location":"Krak\xf3w (Poland)","tags":[]},{"company":"Samsung R&D Institute Poland","job_title":"Protocol Software Engineer for 6G","location":"Krak\xf3w (Poland)","tags":[]},{"company":"Samsung R&D Institute Poland","job_title":"Antenna Design Engineer for 6G","location":"Krak\xf3w (Poland)","tags":[]},{"company":"Oktawave","job_title":"Project Manager","location":"Warszawa (Polska)","tags":[]},{"company":"Samsung R&D Institute Poland","job_title":"Core Technology Engineer for 6G","location":"Krak\xf3w (Poland)","tags":[]},{"company":"Schenker Technology Center Warsaw Sp. z o.o.","job_title":"Office 365 Engineer","location":"Warszawa (Poland)","tags":[]},{"company":"Schenker Technology Center Warsaw Sp. z o.o.","job_title":"Test Manager","location":"Warszawa (Poland)","tags":["Jira","Confluence","TestRail","HP Quality Center"]},{"company":"ING Hubs Poland","job_title":"Senior Specialist - Data Scientist","location":"Warszawa (Poland)","tags":["SQL","Python"]},{"company":"ING Hubs Poland","job_title":"Google Cloud Engineer","location":"Katowice (Poland)","tags":["Google Cloud Platform","Terraform","Python","Azure DevOps"]},{"company":"ING Hubs Poland","job_title":"Cloud Network Engineer","location":"Katowice (Poland)","tags":["Google Cloud Platform","Terraform","Python","Azure DevOps"]},{"company":"Schenker Technology Center Warsaw Sp. z o.o.","job_title":"Service Manager","location":"Warszawa (Poland)","tags":[]},{"company":"Schenker Technology Center Warsaw Sp. z o.o.","job_title":"Digital Experience Specialist","location":"Warszawa (Poland)","tags":[]},{"company":"Prime Force Sp. z o.o.","job_title":"DevOps (Operations) Engineer","location":"Oferta w wielu lokalizacjach (16)","tags":["Apache","SQL"]},{"company":"Prime Force Sp. z o.o.","job_title":"Tech Leader","location":"Warszawa (Polska)","tags":["Java","CI/CD","Kafka","Elasticsearch"]},{"company":"Prime Force Sp. z o.o.","job_title":"Java Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["Java","Spring Boot","REST","Git"]},{"company":"ING Hubs Poland","job_title":"Power BI Engineer","location":"Katowice (Polska)","tags":["PowerShell","C#","Python"]},{"company":"Decathlon sp. z o.o.","job_title":"Java Developer","location":"Warszawa (Polska)","tags":["Java","Spring Framework","PostgreSQL"]},{"company":"Decathlon sp. z o.o.","job_title":"Specjalista ds. Bezpieczeństwa IT","location":"Warszawa (Polska)","tags":[]},{"company":"Schenker Technology Center Warsaw Sp. z o.o.","job_title":"ServiceNow Business Analyst - Architect","location":"Warszawa (Poland)","tags":["ServiceNow"]},{"company":"Schenker Technology Center Warsaw Sp. z o.o.","job_title":"ServiceNow Engineer","location":"Warszawa (Poland)","tags":["ServiceNow"]},{"company":"ING Hubs Poland","job_title":"Quantitative Analyst – Pricing Model Validations","location":"Warszawa (Poland)","tags":["C++","Python"]},{"company":"Schenker Technology Center Warsaw Sp. z o.o.","job_title":"ServiceNow Administrator","location":"Warszawa (Poland)","tags":["ServiceNow"]},{"company":"Lidl Polska sp. z o. o.","job_title":"Frontend BI Developer","location":"Oferta w wielu lokalizacjach (2)","tags":[]},{"company":"Lidl Polska sp. z o. o.","job_title":"Backend BI Developer","location":"Oferta w wielu lokalizacjach (2)","tags":["SQL"]},{"company":"Verestro S.A. ","job_title":"PHP Developer","location":"lubelskie (Polska)","tags":["PHP","MySQL","PostgreSQL","SOLID","Git"]},{"company":"Verestro S.A. ","job_title":"Front-end Developer","location":"lubelskie (Polska)","tags":["HTML5","CSS3","JavaScript","Angular"]},{"company":"Verestro S.A. ","job_title":"Java Developer","location":"lubelskie (Polska)","tags":["Java","Spring Framework","Spring Boot","REST API"]},{"company":"STS S.A.","job_title":"UX/UI Designer","location":"Katowice (Polska)","tags":["Figma"]},{"company":"IT Connect Sp. z o.o.","job_title":"Konstruktor elektronik - Programista FPGA","location":"Warszawa (Polska)","tags":["Altium Designer"]},{"company":"DevsData LLC","job_title":"React Native Developer","location":"Multiple locations offer (16)","tags":["React.js","React Native","JavaScript","HTML","CSS","TypeScript"]},{"company":"Currenda Sp. z o. o.","job_title":"Programista Front-end","location":"Sopot (Polska)","tags":["Git","Vue.js","REST API","JSON","HTML5","CSS","Bootstrap","JavaScript","RWD"]},{"company":"Connectis_","job_title":"Fullstack Developer (Java + Angular)","location":"Warszawa (Polska)","tags":["Java","Spring","Spring Boot","SQL","Hibernate","JPA","RabbitMQ","REST","SOAP","JUnit"]},{"company":"ING Hubs Poland","job_title":"Senior Data Science Model Validator","location":"Warszawa (Poland)","tags":["Python","R","SAS","Scala"]},{"company":"ING Hubs Poland","job_title":"Data Science Model Validator","location":"Warszawa (Poland)","tags":["Python","R","SAS","Scala"]},{"company":"ING Hubs Poland","job_title":"Expert Data Science Model Validator","location":"Warszawa (Poland)","tags":["Python","R","SAS","Scala"]},{"company":"HCL Poland","job_title":"EDI Consultant","location":"Wrocław (Poland)","tags":[]},{"company":"Polkomtel Sp. z o.o.","job_title":"Programista BI (Big Data)","location":"Warszawa (Polska)","tags":["Hadoop","Apache Kafka","Apache NiFi","Apache Spark","Apache Ignite","Python","SQL"]},{"company":"Polkomtel Sp. z o.o.","job_title":"Architekt Hurtowni Danych","location":"Warszawa (Polska)","tags":["Oracle","Teradata","MS-SQL","ETL Informatica"]},{"company":"ING Hubs Poland","job_title":"Automation DevOps Engineer","location":"Katowice (Poland)","tags":["PowerShell","C#","Azure DevOps"]},{"company":"All for One Poland","job_title":"Konsultant IT - Virtualization Engineer","location":"Złotniki (pow. poznański) (Polska)","tags":[]},{"company":"Connectis_","job_title":"Node.js Developer","location":"Warszawa (Polska)","tags":["TypeScript","React","AWS Lambda"]},{"company":"HCL Poland","job_title":"Local IT Technician","location":"Warszawa (Poland)","tags":[]},{"company":"BlueSoft Sp. z o.o.","job_title":"Java Backend Developer","location":"Warszawa (Polska)","tags":["Spring","Oracle","Hibernate","Java","PostgreSQL"]},{"company":"BlueSoft Sp. z o.o.","job_title":"Fullstack Developer","location":"Warszawa (Polska)","tags":["Java","Docker","PostgreSQL","Kafka","Spring Framework","Angular","Kubernetes"]},{"company":"summ-it s.a.","job_title":"Azure Specialist","location":"Oferta w wielu lokalizacjach (16)","tags":["Microsoft Azure","Windows Server","M365"]},{"company":"summ-it s.a.","job_title":"Fullstack PHP Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["PHP","Laravel","T-SQL","Vue","TypeScript","Composer","JS","Solid"]},{"company":"Bank Pekao","job_title":"Programista Hurtowni Danych Ryzyka","location":"Warszawa (Polska)","tags":["MS SQL","T-SQL","PowerBI","SAS","Oracle"]},{"company":"Capgemini Software Solutions Center","job_title":"Java Developer","location":"Oferta w wielu lokalizacjach (2)","tags":["Java","Hibernate","Spring Boot"]},{"company":"Capgemini Software Solutions Center","job_title":"Cloud Data Engineer","location":"Gdańsk (Polska)","tags":["AWS","Azure","GCP","Python","PySpark","SQL"]},{"company":"Capgemini Software Solutions Center","job_title":"Test Automation Engineer","location":"Gdańsk (Polska)","tags":["JSON","CSV","XML","Selenium Webdriver"]},{"company":"Capgemini Software Solutions Center","job_title":"Data Engineer (with Python)","location":"Oferta w wielu lokalizacjach (2)","tags":["Python","Azure","AWS","Google Cloud","Scala"]},{"company":"Capgemini Software Solutions Center","job_title":"Salesforce Developer","location":"Oferta w wielu lokalizacjach (2)","tags":["App Cloud","Community Cloud","Sales Cloud","Apex","Lightning Experience"]},{"company":"Capgemini Software Solutions Center","job_title":"Senior Front-End Developer (focus React)","location":"Oferta w wielu lokalizacjach (3)","tags":["React","JavaScript","TypeScript","SASS","SCSS","HTML","CSS"]},{"company":"HICRON sp. z o.o.","job_title":"SAP Project Coordinator","location":"dolnośląskie (Polska)","tags":["Jira","Confluence"]},{"company":"Capgemini Software Solutions Center","job_title":"Senior Manual Tester","location":"Oferta w wielu lokalizacjach (3)","tags":[]},{"company":"Capgemini Software Solutions Center","job_title":"Senior Android Developer","location":"Oferta w wielu lokalizacjach (3)","tags":["Kotlin","Java","Android SDK","DevOps","CI","CD"]},{"company":"Capgemini Software Solutions Center","job_title":"Azure Data Engineer","location":"Oferta w wielu lokalizacjach (2)","tags":["Azure","Python","Scala","Java","Bash"]},{"company":"Capgemini Software Solutions Center","job_title":"Agile Test Lead","location":"Oferta w wielu lokalizacjach (3)","tags":["Agile"]},{"company":"Capgemini Software Solutions Center","job_title":"Senior Automation Tester","location":"Oferta w wielu lokalizacjach (2)","tags":[]},{"company":"Grupa Sp\xf3łek Danone Polska ","job_title":"Program Stażowy DAN One w Zespole IT&Data - (SAP SD)","location":"Warszawa (Poland)","tags":[]},{"company":"T-Mobile","job_title":"Transport and IP Network Specialist","location":"Warszawa (Poland)","tags":["DWDM","MetroEthernet","xDSL","IP technologies"]},{"company":"T-Mobile","job_title":"Administrator/-ka System\xf3w Specjalnych","location":"Warszawa (Polska)","tags":["TCP/IP"]},{"company":"Samsung R&D Institute Poland","job_title":"Radio Frequency Engineer for 6G","location":"Krak\xf3w (Poland)","tags":[]},{"company":"EY Global Delivery Services","job_title":"Senior .Net Developer with Artificial Intelligence","location":"Wrocław (Poland)","tags":["C#",".NET Core","Entity Framework Core","SQL"]},{"company":"EY Global Delivery Services","job_title":"Cloud Architect (Microsoft Azure)","location":"Wrocław (Poland)","tags":["Azure DevOps","Ansible","Puppet","Octopus","Chef","Salt","SQL Server","Azure SQL","Cosmos","Azure Data Lake","HD Insights","Hadoop","Neo4j"]},{"company":"EY Global Delivery Services","job_title":"Senior Automation Analyst","location":"Wrocław (Poland)","tags":["VBA","Power BI","Power Query","SharePoint"]},{"company":"Tenesys Sp. z o.o.","job_title":"Junior DevOps Engineer","location":"Poznań (Polska)","tags":["AWS","Microsoft Azure","Google Cloud Platform","Nginx","Apache","Docker","Python","Kubernetes","Terraform"]},{"company":"Tenesys Sp. z o.o.","job_title":"DevOps Engineer","location":"Oferta w wielu lokalizacjach (16)","tags":["AWS","Microsoft Azure","Google Cloud Platform","Nginx","Apache ActiveMQ","Docker","GitLab","Jenkins","Python","Kubernetes","databases"]},{"company":"Sente S.A.","job_title":"Programista C# .NET","location":"Wrocław (Polska)","tags":["C#",".NET"]},{"company":"Samsung R&D Institute Poland","job_title":"Java / Spring Backend Developer","location":"Warszawa (Poland)","tags":["Java","Spring Boot","SQL"]},{"company":"Wavin Shared Services","job_title":"Software Developer (Revit Addins)","location":"Multiple locations offer (16)","tags":["C#",".NET"]},{"company":"Polkomtel Sp. z o.o.","job_title":"Kierownik Zespołu Rozwoju BI/AI","location":"Warszawa (Polska)","tags":[]},{"company":"Connectis_","job_title":"Senior Java Developer","location":"Warszawa (Polska)","tags":["Java","AWS","Spring","Spring Boot"]},{"company":"Connectis_","job_title":"Senior Java Developer","location":"Warszawa (Polska)","tags":["Java","RESTful Web Services","Spring","Hibernate","Git"]},{"company":"DahliaMatic","job_title":"Konsultant Systemu Softlab ERP – obszar logistyka","location":"Warszawa (Polska)","tags":["SQL","ERP","SQL/T-SQL"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"Quant Developer","location":"Krak\xf3w (Poland)","tags":["Python","Git"]},{"company":"Grupa Sp\xf3łek Danone Polska ","job_title":"Program Stażowy DAN One w Zespole IT&Data - Invoice to Cash","location":"Warszawa (Poland)","tags":[]},{"company":"PIT-RADWAR S.A. ","job_title":"Projektant - Programista C/C++","location":"Warszawa (Polska)","tags":["C","C++"]},{"company":"Bank Millennium S.A.","job_title":"DevOps Database Specialist","location":"Oferta w wielu lokalizacjach (16)","tags":["SQL","SSIS","SSRS"]},{"company":"PIT-RADWAR S.A. ","job_title":"Programista Java","location":"Warszawa (Polska)","tags":["Java","UML"]},{"company":"QIAGEN BUSINESS SERVICES","job_title":"Data Engineer","location":"Wrocław (Poland)","tags":["Azure Databricks","Azure Data Factory","SQL Server"]},{"company":"KLG Solutions Sp. z o.o.","job_title":"React Native Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["React Native","React.js","JavaScript","TypeScript","Git","Jira"]},{"company":"NEXAI Sp. z o.o.","job_title":"JavaScript Software Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["JavaScript","TypeScript","Git"]},{"company":"NEXAI Sp. z o.o.","job_title":"PHP Software Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["PHP","MySQL","Laravel","Symfony","Git"]},{"company":"Connectis_","job_title":"IT Digital Consultant - CMS Specialist","location":"Warszawa (Poland)","tags":["Content Management Systems"]},{"company":"Capgemini Software Solutions Center","job_title":"DevOps Engineer","location":"Oferta w wielu lokalizacjach (3)","tags":[]},{"company":"Centrum Programowania T1 sp. z o.o.","job_title":"Front-End Developer Senior","location":"Oferta w wielu lokalizacjach (16)","tags":["JavaScript","HTML","CSS","React.js","jQuery"]},{"company":"Capgemini Software Solutions Center","job_title":"Cloud Data Architect","location":"Oferta w wielu lokalizacjach (2)","tags":["AWS","Azure","GCP","Python","Scala","Java","Bash"]},{"company":"Capgemini Software Solutions Center","job_title":"IT Business Analyst","location":"Oferta w wielu lokalizacjach (3)","tags":[]},{"company":"Capgemini Software Solutions Center","job_title":"Python Developer","location":"Oferta w wielu lokalizacjach (2)","tags":["Python","Azure","AWS","SQL","GCP"]},{"company":"Capgemini Software Solutions Center","job_title":"Full Stack Java Developer","location":"Oferta w wielu lokalizacjach (3)","tags":["Java","Spring Boot","Hibernate"]},{"company":"ING Bank Śląski S.A.","job_title":"Analityk Systemowo-Biznesowy - projekt - system rozrachunkowy SORBNET","location":"Oferta w wielu lokalizacjach (16)","tags":["BPMN","UML","Analiza log\xf3w","SQL"]},{"company":"Capgemini Software Solutions Center","job_title":"SAP BI Consultant","location":"Oferta w wielu lokalizacjach (2)","tags":["SAP BW","SAP HANA"]},{"company":"Capgemini Software Solutions Center","job_title":"Senior Java Developer","location":"Gdańsk (Polska)","tags":["Java","Spring","Hibernate","MS SQL","Maven","Git","Jenkins"]},{"company":"Capgemini Software Solutions Center","job_title":"Senior .NET Developer","location":"Gdańsk (Polska)","tags":["C#",".NET","Entity Framework","AWS","Google","Azure"]},{"company":"Capgemini Software Solutions Center","job_title":"Agile Coach","location":"Gdańsk (Polska)","tags":["Scrum","Agile"]},{"company":"Capgemini Polska","job_title":"Senior Big Data Expert","location":"Multiple locations offer (2)","tags":["Hadoop","nifi","spark","airflow","Kafka","HIVE","HDFS","atlas","ranger","Cloudera","Ansible"]},{"company":"Capgemini Polska","job_title":"Lead GCP Data Engineer - Consultant","location":"Multiple locations offer (5)","tags":["Big Data","GCP","Cloud","Scala","Python","Java"]},{"company":"Capgemini Polska","job_title":"Data Engineer with Scala","location":"Multiple locations offer (5)","tags":["Spark 5","Scala 5","Cloud","AWS","Azure","GCP 4","Python 3","SQL 3"]},{"company":"Asseco Business Solutions S.A.","job_title":"Specjalista ds. utrzymania system\xf3w ERP (moduł HR)","location":"Oferta w wielu lokalizacjach (2)","tags":["SQL"]},{"company":"ARP Ideas Sp. z o.o.","job_title":"Product Owner - Business Consultant","location":"Oferta w wielu lokalizacjach (16)","tags":["UML","BPMN","SQL","Jira/Azure DevOps"]},{"company":"Asseco Business Solutions S.A. ","job_title":"Project Manager","location":"Lublin (Polska)","tags":[]},{"company":"VIPERPRINT SP. Z O. O.","job_title":"Analityk Biznesowy","location":"Częstochowa (Polska)","tags":["BPMN","UML"]},{"company":"INFOR IT Sp. z o.o","job_title":"Programista PHP","location":"Warszawa (Polska)","tags":["Symfony","React.js","Node.js","Elasticsearch","Git"]},{"company":"INFOR IT Sp. z o.o","job_title":"UI/UX Designer","location":"Warszawa (Polska)","tags":["Axure","Adobe Illustrator","Adobe Photoshop"]},{"company":"Samsung R&D Institute Poland","job_title":"Java/C++ Developer (IMS)","location":"Warszawa (Poland)","tags":["Java","C++"]},{"company":"QIAGEN BUSINESS SERVICES","job_title":"IT Service Coordinator","location":"Wrocław (Poland)","tags":[]},{"company":"Sygnity S.A.","job_title":"Młodszy analityk biznesowy (rynek ubezpieczeń)","location":"Oferta w wielu lokalizacjach (3)","tags":[]},{"company":"PGS Software sp. z o.o","job_title":"HelpDesk Leader - Administrator","location":"Wrocław (Poland)","tags":["IT Service Delivery","Managing HelpDesk teams","Knowledge of IT hardware","Microsoft licensing","Technical maintenance","Networks"]},{"company":"Grupa Pracuj","job_title":"Product Owner Senior (Starszy Specjalista/ Starsza Specjalistka)","location":"Warszawa (Polska)","tags":["Jira"]},{"company":"Sii Sp. z o.o.","job_title":"Technical Writer","location":"Oferta w wielu lokalizacjach (17)","tags":[]},{"company":"NIVEA Polska Sp. z o.o.","job_title":"IT Service Engineer – Global Telephony (Teams, Skype Technologies)","location":"Oferta w wielu lokalizacjach (16)","tags":["SBC","AudioCodes","SIP Trunking"]},{"company":"Polkomtel Sp. z o.o.","job_title":"Młodszy Inżynier Machine Learning","location":"Warszawa (Polska)","tags":["Python","Apache Spark","Jupyter","Hive","Hadoop","Airflow"]},{"company":"SOMNIUS","job_title":"Senior Web Developer","location":"Warszawa (Poland)","tags":["Java","Python","TypeScript","Dart","React Native"]},{"company":"Samsung R&D Institute Poland","job_title":"Junior Telecommunication Test Engineer","location":"Warszawa (Poland)","tags":["Confluence","qTest Manager","Jira"]},{"company":"Sunscrapers Sp. z o.o.","job_title":"Senior Data Scientist","location":"Multiple locations offer (16)","tags":["Python","SQL","NLP","Pandas"]},{"company":"Samsung R&D Institute Poland","job_title":"Junior Test Engineer","location":"Warszawa (Poland)","tags":["JIRA","Confluence","qTest Manager"]},{"company":"MOLECULE ONE sp. z o.o.","job_title":"DevOps / SRE Engineer","location":"Warszawa (Poland)","tags":["Kubernetes","AWS","Rust","Golang","Python","JavaScript"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"Library Manager, Global Finance Analytics","location":"Krak\xf3w (Poland)","tags":["Python"]},{"company":"MicroStrategy Poland Sp. z o.o.","job_title":"Support Engineer with German language","location":"Warszawa (Poland)","tags":[]},{"company":"Asseco Poland S.A.","job_title":"Inżynier DevOps","location":"Oferta w wielu lokalizacjach (16)","tags":["Kubernetes","Docker","Ansible","Git","Azure DevOps","CI/CD","Linux"]},{"company":"Generali","job_title":"Java Developer w Zespole System\xf3w Ubezpieczeń Majątkowych","location":"Oferta w wielu lokalizacjach (3)","tags":[]},{"company":"Generali","job_title":"Java Developer w Zespole System\xf3w Wsparcia Likwidacji Szk\xf3d","location":"Oferta w wielu lokalizacjach (3)","tags":["Java","Spring Boot","Hibernate"]},{"company":"CD PROJEKT S.A.","job_title":"Koordynator ERP","location":"Warszawa (Polska)","tags":[]},{"company":"ArchiDoc S.A.","job_title":"Senior Solutions Developer","location":"Multiple locations offer (16)","tags":["SQL",".NET","C#","XML","JSON","BPA","RPA"]},{"company":"Bank Millennium S.A.","job_title":"Power Platform Developer","location":"Oferta w wielu lokalizacjach (2)","tags":["Power BI","Power Apps","Power Automate"]},{"company":"Bank Pekao","job_title":"Programista BPM w Obszarze System\xf3w Kredytowych","location":"Warszawa (Polska)","tags":["JavaScript","SQL"]},{"company":"Apator Rector Sp. z o.o.","job_title":"Kierownik Produktu","location":"Zielona G\xf3ra (Polska)","tags":["UML","BPMN","Jira","Confluence"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(Investment Banking Tech) Application Developer C# and Angular","location":"Krak\xf3w (Poland)","tags":[".NET",".NET Core","C#","Angular","SQL","DevOps"]},{"company":"SOLVEQ MARCIN KULAWIK SP\xd3ŁKA KOMANDYTOWO-AKCYJNA","job_title":"Senior React Native Developer","location":"Multiple locations offer (17)","tags":["React Native"]},{"company":"SOLVEQ MARCIN KULAWIK SP\xd3ŁKA KOMANDYTOWO-AKCYJNA","job_title":"Senior Node.js Developer","location":"Multiple locations offer (17)","tags":["Node.js"]},{"company":"CODEFUSION Sp. z o.o.","job_title":"Mid Software Developer","location":"Oferta w wielu lokalizacjach (10)","tags":["Angular",".NET","Agile","SQL"]},{"company":"CODEFUSION Sp. z o.o.","job_title":"Senior Software Developer","location":"Oferta w wielu lokalizacjach (10)","tags":[".NET","SQL","Angular","Agile"]},{"company":"SOLVEQ MARCIN KULAWIK SP\xd3ŁKA KOMANDYTOWO-AKCYJNA","job_title":"Node.js Developer","location":"Multiple locations offer (17)","tags":["Node.js"]},{"company":"CODEFUSION Sp. z o.o.","job_title":"IT Project Manager z językiem niemieckim","location":"Oferta w wielu lokalizacjach (10)","tags":["Jira"]},{"company":"Kontakt.io","job_title":"Senior Product Manager (Kio Cloud)","location":"Multiple locations offer (16)","tags":["Java","Python","AWS","Kubernetes","Angular","Android","iOS"]},{"company":"SOLVEQ MARCIN KULAWIK SP\xd3ŁKA KOMANDYTOWO-AKCYJNA","job_title":"React Native Developer","location":"Multiple locations offer (16)","tags":["React Native"]},{"company":"Bank Pekao","job_title":"Programista Apex","location":"Warszawa (Polska)","tags":["Oracle Apex","PL/SQL"]},{"company":"Bank Pekao","job_title":"Programista Oracle (ERP)","location":"Warszawa (Polska)","tags":["PL/SQL","Oracle"]},{"company":"Kontakt.io","job_title":"Senior QA Automation Engineer (web, Python)","location":"Multiple locations offer (16)","tags":["Python","Selenium","Jenkins","Playwright","Jira"]},{"company":"Kontakt.io","job_title":"Senior DevSecOps (AWS, Kubernetes, Terraform)","location":"Multiple locations offer (16)","tags":["AWS","Kubernetes","Terraform","Chef","Ansible","Python","Ruby","Bash","REST","Docker"]},{"company":"AXXIOME HEALTH POLSKA SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"SAP Basis Consultant","location":"Oferta w wielu lokalizacjach (2)","tags":["Bazy danych (Oracle / MSSQL / MaxDB lub DB2 / Sybase / HANA)","ITIL","Windows / Linux","SAP BASIS"]},{"company":"Spyrosoft S.A. ","job_title":"DevOps with Azure","location":"Multiple locations offer (16)","tags":["Kubernetes","Docker","CI/CD","Terraform","Azure"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(Cybersecurity) Cybersecurity Continuous Control Monitoring Manager","location":"Krak\xf3w (Poland)","tags":[]},{"company":"ITBoom Sp. z o.o.","job_title":"Angular Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["Angular","TypeScript","HTML","CSS","JS","REST API","Scrum"]},{"company":"WEBCON Sp. z o.o.","job_title":"Programista .NET","location":"Krak\xf3w (Polska)","tags":[".NET","C#","SQL"]},{"company":"Samsung R&D Institute Poland","job_title":"Internship - Natural Language Processing Intern in Artificial Intelligence Team","location":"Warszawa (Poland)","tags":["Python or Java or C++"]},{"company":"HCL Poland","job_title":"Service Desk Quality Analyst with English & Polish","location":"Krak\xf3w (Poland)","tags":[]},{"company":"LINK4 Towarzystwo Ubezpieczeń S.A.","job_title":"Inżynier Danych","location":"Oferta w wielu lokalizacjach (16)","tags":["Python","SQL"]},{"company":"LINK4 Towarzystwo Ubezpieczeń S.A.","job_title":"Administrator Jira","location":"Oferta w wielu lokalizacjach (16)","tags":["Jira"]},{"company":"Spyrosoft S.A. ","job_title":"Frontend Developer (Angular)","location":"Multiple locations offer (16)","tags":["JavaScript","Angular","TypeScript","HTML","CSS"]},{"company":"Spyrosoft S.A. ","job_title":"Senior Java Developer","location":"Multiple locations offer (16)","tags":["Git","Docker","Hibernate","Java","Spring Framework"]},{"company":"CodeTwo","job_title":"Inżynier Monitoringu Systemu Chmurowego/ Cloud Monitoring Engineer","location":"Oferta w wielu lokalizacjach (2)","tags":[]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"Digital Copywriter (Wealth & Personal Banking IT)","location":"Krak\xf3w (Poland)","tags":["Jira","Confluence"]},{"company":"HCL Poland","job_title":"Technical Support Agent with German & English","location":"Krak\xf3w (Poland)","tags":[]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(CTO ES) Senior Business Analyst (Distributed Compute)","location":"Krak\xf3w (Poland)","tags":[]},{"company":"EXATEL","job_title":"Analityk biznesowo-systemowy","location":"Warszawa (Polska)","tags":[]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(CTO ES – DigiBa PL) – Solution Architect","location":"Krak\xf3w (Poland)","tags":[]},{"company":"SimplicITy sp. z o.o.","job_title":"Starszy Analityk Systemowy","location":"Warszawa (Polska)","tags":[]},{"company":"General Logistics Systems Poland Sp. z o.o.","job_title":"UX Designer","location":"Głuchowo (pow. poznański) (Polska)","tags":["Android","iOS","UX","InVision","Figma","Sketch"]},{"company":"SimplicITy sp. z o.o.","job_title":"Tester automatyk","location":"Warszawa (Polska)","tags":["C","C++","C#","JAVA","JIRA","Visual Basic","Perl","Ruby","Python","MS SQL"]},{"company":"Ramp Network sp.z o.o.","job_title":"Senior UX Researcher","location":"Multiple locations offer (2)","tags":["Figma","Miro"]},{"company":"Ramp Network sp.z o.o.","job_title":"Lead Product Designer","location":"Multiple locations offer (2)","tags":["Figma","Miro"]},{"company":"SimplicITy sp. z o.o.","job_title":"Kierownik Test\xf3w","location":"Warszawa (Polska)","tags":[]},{"company":"SimplicITy sp. z o.o.","job_title":"Analityk Test\xf3w","location":"Warszawa (Polska)","tags":[]},{"company":"SimplicITy sp. z o.o.","job_title":"Architekt Test\xf3w","location":"Warszawa (Polska)","tags":[]},{"company":"Ramp Network sp.z o.o.","job_title":"Senior Product Designer","location":"Multiple locations offer (2)","tags":["Figma","Miro"]},{"company":"Samsung R&D Institute Poland","job_title":"NLP DataOps Engineer","location":"Multiple locations offer (2)","tags":["Python","DevOps (Linux, bash, git, Jenkins, Docker, Openstack, nginx, Ansible)","Databases (PostgreSQL, InfluxDB)","Data Engineering & Data Science","Data Visualization and dashboarding tools","Natural Language Processing"]},{"company":"T-Mobile","job_title":"Big Data Analyst","location":"Warszawa (Polska)","tags":["SQL","Oracle","PostgreSQL","Git"]},{"company":"T-Mobile","job_title":"Java Developer/ka","location":"Warszawa (Polska)","tags":["Java","Spring Boot","Spring","Hibernate","Kubernetes","Docker","RabbitMQ","ActiveMQ","SQL","MongoDB","PostgreSQL"]},{"company":"PwC","job_title":"Splunk Platform Support Engineer EMEA","location":"Warszawa (Polska)","tags":["Splunk"]},{"company":"PwC","job_title":"GIS / Geospatial Consultant","location":"Warszawa (Poland)","tags":["SQL"]},{"company":"PwC","job_title":"Senior .NET Developer","location":"Warszawa (Polska)","tags":["SQL","C#"]},{"company":"T-Mobile","job_title":"Area Product Owner","location":"Warszawa (Polska)","tags":["Jira","Confluence"]},{"company":"ZF Group","job_title":"Senior System Test Engineer","location":"Ł\xf3dź (Polska)","tags":["Python"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Management Tools Architect","location":"Warszawa (Poland)","tags":["Python","JavaScript","Jira","Node.js"]},{"company":"T-Mobile","job_title":"Java Developer","location":"Warszawa (Polska)","tags":["Java","Spring Framework","Kubernetes","SQL","Docker","Git","Maven","Gradle","JUnit","Sonar","Jenkins"]},{"company":"HCL Poland","job_title":"Technical Support Agent with Spanish & English","location":"Krak\xf3w (Poland)","tags":[]},{"company":"SEBx","job_title":"Backend Engineer","location":"Warszawa (Poland)","tags":["Java","Spring Boot","DI","NoSql","Kafka","JUnit","Mockito"]},{"company":"HCL Poland","job_title":"Technical Support Agent with Dutch & English","location":"Krak\xf3w (Poland)","tags":[]},{"company":"SEBx","job_title":"Product Owner - Scrum Master Financing","location":"Warszawa (Poland)","tags":["Java","GigaSpaces","gRPC","RestAPI"]},{"company":"SEBx","job_title":"Quality Assurance Engineer","location":"Warszawa (Poland)","tags":["Java","Linux","Jmeter","Karate","Cucumber","Git"]},{"company":"Luxoft Poland","job_title":"QA Automation Engineer","location":"Krak\xf3w (Poland)","tags":["Agile","Java","SQL"]},{"company":"Luxoft Poland","job_title":"Senior Full-stack Developer","location":"Wrocław (Poland)","tags":["Java","JavaScript","React","PostgreSQL","Microsoft Azure"]},{"company":"Luxoft Poland","job_title":"CLM Ops Project Manager","location":"Warszawa (Poland)","tags":[]},{"company":"Hitachi Energy Services Sp. z o.o. ","job_title":"Azure Pass Architect","location":"Krak\xf3w (Poland)","tags":["DevOps","Azure"]},{"company":"EXORIGO UPOS S.A.","job_title":"IT Project Manager","location":"Oferta w wielu lokalizacjach (3)","tags":[]},{"company":"Samsung R&D Institute Poland","job_title":"LTE/5G Mobile Telecommunication Engineer","location":"Warszawa (Poland)","tags":["5G","LTE","UMTS"]},{"company":"Symfonia sp. z o.o.","job_title":"Kierownik Zespołu Wsparcia Technicznego","location":"Oferta w wielu lokalizacjach (2)","tags":["Microsoft Office","Microsoft SQL Server"]},{"company":"DSV ISS","job_title":"SAP Developer","location":"Warszawa (Poland)","tags":["SAP"]},{"company":"ZF Group","job_title":"C Embedded Software Engineer (Radar)","location":"Ł\xf3dź (Poland)","tags":["C"]},{"company":"PRAGMAGO SA","job_title":"Analityk danych znajomością SQL","location":"Oferta w wielu lokalizacjach (2)","tags":["SQL","R","PostgreSQL","MS SQL"]},{"company":"ZF Group","job_title":"Programista MATLAB (Simulink)","location":"Częstochowa (Polska)","tags":["MATLAB","Simulink","C"]},{"company":"CKSource","job_title":"Senior Technical Content Writer","location":"Multiple locations offer (16)","tags":["JavaScript","HTML","CSS","SEO"]},{"company":"BitPeak Sp. z o.o.","job_title":"PMO Specialist","location":"Warszawa (Polska)","tags":[]},{"company":"KACZMARSKI GROUP","job_title":"Analityk Systemowy","location":"Wrocław (Polska)","tags":["UML","SQL","BPMN","Azure DevOps","Enterprise Architect","Jira","Confluence"]},{"company":"Samsung R&D Institute Poland","job_title":"Internship – JavaScript Intern in Enterprise Development Team","location":"Warszawa (Poland)","tags":["JavaScript"]},{"company":"Capgemini Polska","job_title":"Cloud Data Engineer","location":"Multiple locations offer (4)","tags":["Azure Cosmos DB","Cloud","AWS","Python","GCP 5","SQL 3","IaC"]},{"company":"Capgemini Polska","job_title":"Azure Data Engineer","location":"Multiple locations offer (5)","tags":["Azure Databricks 5","Python","PySpark 4","Azure Data Factory 3","SQL 3","Azure DevOps 3"]},{"company":"Ziflow Limited","job_title":"DevOps Engineer","location":"Multiple locations offer (3)","tags":["AWS","Bitbucket","Jenkins","Terraform","Ansible"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Identity & Access Management - Operations Specialist","location":"Ł\xf3dź (Poland)","tags":[]},{"company":"ANGRY NERDS","job_title":"React Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["JavaScript","React.js","HTML","CSS","Ajax","REST API","Redux","MobX","Context","Context API"]},{"company":"ANGRY NERDS","job_title":"Mid QA Specialist","location":"Oferta w wielu lokalizacjach (16)","tags":["Postman"]},{"company":"ANGRY NERDS","job_title":"Line Manager","location":"Oferta w wielu lokalizacjach (16)","tags":["Slack","Jira","Azure DevOps"]},{"company":"ANGRY NERDS","job_title":"Mid iOS Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["iOS","Swift","CocoaPods","Swift Package Manager","Carthage","REST API"]},{"company":"Systell sp\xf3łka z ograniczoną odpowiedzialnością sp.k.","job_title":"Project Manager / Kierownik Projektu","location":"Poznań (Polska)","tags":["MS Office (Teams, Outlook)","YouTrack"]},{"company":"Acturis Poland Sp. z o.o.","job_title":"Młodszy Analityk Wsparcia Aplikacji","location":"Wrocław (Polska)","tags":[]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(Global Transformation) Business Analyst – Wealth and Personal Banking","location":"Krak\xf3w (Poland)","tags":["Agile","Scrum"]},{"company":"Acturis Poland Sp. z o.o.","job_title":"Junior Frontend Developer","location":"Wrocław (Polska)","tags":["SQL","CSS","XSLT","XHTML"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(Global Transformation) Project Manager GP","location":"Krak\xf3w (Poland)","tags":["Agile","Prince 2"]},{"company":"Sunscrapers Sp. z o.o.","job_title":"Senior Data Engineer","location":"Multiple locations offer (16)","tags":["Python","SQL","AWS","Apache Airflow","Docker"]},{"company":"Sunscrapers Sp. z o.o.","job_title":"Fullstack Developer (Django & React)","location":"Multiple locations offer (16)","tags":["Python","Django","JavaScript","TypeScript","React.js","Redux","HTML","CSS","Tailwind","Heroku"]},{"company":"Cyclad","job_title":"Cybersecurity Tester","location":"Oferta w wielu lokalizacjach (3)","tags":["OWASP"]},{"company":"IT Connect Sp. z o.o.","job_title":"Analityk Biznesowy IT","location":"Warszawa (Polska)","tags":["Jira","Confluence","BigQuery","MS Excel","Powerpoint"]},{"company":"Ekoncept","job_title":"Angular Developer","location":"Sopot (Polska)","tags":["HTML","CSS","JavaScript","TypeScript","Angular"]},{"company":"Be in iT","job_title":"Senior GCP DevOps Engineer","location":"Oferta w wielu lokalizacjach (16)","tags":["Terraform","Kubernetes","CloudRun","Docker"]},{"company":"Keller Polska Sp. z o.o","job_title":"IT Service Desk Technician","location":"Ożar\xf3w Mazowiecki (Poland)","tags":["Windows 10"]},{"company":"eDokumenty sp. z o.o.","job_title":"Specjalista ds. Wdrożeń System\xf3w IT / IT Systems Implementation Specialist","location":"Warszawa (Polska)","tags":["PHP","HTML","CSS","PostgreSQL","JavaScript","Laravel"]},{"company":"Comarch SA","job_title":"Administrator Liferay","location":"Oferta w wielu lokalizacjach (5)","tags":[]},{"company":"Kontakt.io","job_title":"Java Software Engineer","location":"Krak\xf3w (Poland)","tags":["Java","Spring Framework","PostgreSQL","Kubernetes","AWS","Docker","Python"]},{"company":"Cyclad","job_title":"Senior Data Engineer","location":"Multiple locations offer (16)","tags":["Python","Apache Airflow","Spark","Glue","Data Warehousing","Data modeling","AWS"]},{"company":"Cyclad","job_title":"Senior Frontend Developer (React)","location":"Oferta w wielu lokalizacjach (16)","tags":["React.js","JavaScript","TypeScript"]},{"company":"Cyclad","job_title":"Senior Java Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["Java","Microsoft Azure","Hibernate","Spring Boot","SQL","Git","Kubernetes"]},{"company":"Cyclad","job_title":"IT Administrator with French","location":"Katowice (Poland)","tags":[]},{"company":"Biedronka (Jeronimo Martins Polska S.A.)","job_title":"Senior Security Expert","location":"Kostrzyn (Polska)","tags":["Cyberbezpieczeństwo"]},{"company":"N-IX POLAND sp. z o.o.","job_title":"Head of Design","location":"Multiple locations offer (20)","tags":["UX","UI"]},{"company":"N-IX POLAND sp. z o.o.","job_title":"Delivery Manager for Game & VR Studio","location":"Multiple locations offer (20)","tags":["Agile"]},{"company":"N-IX POLAND sp. z o.o.","job_title":"Senior Scala Engineer","location":"Multiple locations offer (20)","tags":["Scala","Ruby on Rails","Spark","Kafka","Elasticsearch","AWS"]},{"company":"N-IX POLAND sp. z o.o.","job_title":"Mobile QA Automation Engineer","location":"Multiple locations offer (2)","tags":["Kotlin","Swift"]},{"company":"Comarch SA","job_title":"Programista webMethods","location":"Oferta w wielu lokalizacjach (5)","tags":["SQL","Git"]},{"company":"TMS Group Europe sp. z o.o.","job_title":"Mid Full-Stack Developer","location":"Oferta w wielu lokalizacjach (2)","tags":[".NET","C#","JavaScript","HTML","CSS","SQL","T-SQL","Git","ASP.NET MVC","WPF","WinForms"]},{"company":"Polkomtel Sp. z o.o.","job_title":"Administrator Sieci LAN/WAN","location":"Warszawa (Polska)","tags":[]},{"company":"SGB-BANK S.A.","job_title":"ekspert ds. koordynacji wdrożeń","location":"Oferta w wielu lokalizacjach (3)","tags":["Jira","Confluence","ms project"]},{"company":"Comarch SA","job_title":"Programista Full stack Angular/ .NET","location":"Oferta w wielu lokalizacjach (3)","tags":[".NET","C#","JavaScript","Angular lub AngularJS"]},{"company":"ASTEK Polska","job_title":"Senior Full Stack Test Automation Engineer","location":"Gdynia (Poland)","tags":["SQL","Git","Python","SVC","AWS"]},{"company":"Decathlon sp. z o.o.","job_title":"Graphic Designer","location":"Warszawa (Polska)","tags":["Photoshop","Illustrator","Figma"]},{"company":"N-IX POLAND sp. z o.o.","job_title":"Senior AQA Engineer","location":"Multiple locations offer (2)","tags":["Java","Kotlin","JavaScript","Swift"]},{"company":"N-IX POLAND sp. z o.o.","job_title":"Senior Linux System Administrator","location":"Multiple locations offer (20)","tags":["Linux"]},{"company":"N-IX POLAND sp. z o.o.","job_title":"Middle DevOps Engineer","location":"Multiple locations offer (20)","tags":["AWS","Bash","Python","PowerShell","Chef","Ansible"]},{"company":"N-IX POLAND sp. z o.o.","job_title":"Senior .NET Engineer (with knowledge of German)","location":"Multiple locations offer (20)","tags":[".NET","SQL","Oracle","Jira","Git","Jenkins","Microsoft Visual Studio"]},{"company":"ING Bank Śląski S.A.","job_title":"Data Scientist","location":"Katowice (Polska)","tags":["Python","SQL"]},{"company":"DataFeedWatch by Cart.","job_title":"Senior Ruby Engineer","location":"Krak\xf3w (Poland)","tags":["Jenkins","Groovy","Ruby","Kubernetes"]},{"company":"CreateCtrl Polska Sp. z o.o.","job_title":"Junior .NET Developer","location":"Gliwice (Polska)","tags":["C#",".NET","RestApi","OracleDb","SQL","Git","CI/CD","AWS","JIRA"]},{"company":"Rockwell Automation","job_title":"Application Support Engineer","location":"Katowice (Poland)","tags":["PLC controlers","Knowledge of drive technology","Knowledge of AC induction motors, and DC motors"]},{"company":"Trans.eu Group S.A. ","job_title":"Scrum Master","location":"Wrocław (Polska)","tags":[]},{"company":"Reply Polska Sp. z o.o.","job_title":"AWS Architect","location":"Katowice (Poland)","tags":["AWS","Bash","Terraform","Ansible","Docker","Jenkins"]},{"company":"Reply Polska Sp. z o.o.","job_title":"Java Developer","location":"Katowice (Poland)","tags":["Spring Boot","JUnit","Java SPring","JavaEE","PostgreSQL","Oracle","MySQL","CI/CD","Git"]},{"company":"Reply Polska Sp. z o.o.","job_title":"Senior Cloud Consultant","location":"Katowice (Poland)","tags":["AWS","Azure","Code","Git","DevOps","REST"]},{"company":"Reply Polska Sp. z o.o.","job_title":"SAP Commerce Full Stack Web Developer","location":"Katowice (Poland)","tags":["SAP","Java","Kanban","Scrum","JavaScript","SAP Commerce"]},{"company":"Polska Grupa Lotnicza","job_title":"Administrator Bezpieczeństwa IT","location":"Warszawa (Polska)","tags":[]},{"company":"N-IX POLAND sp. z o.o.","job_title":"Senior .NET Full-stack Engineer","location":"Multiple locations offer (20)","tags":[".NET","TypeScript","JavaScript","Vue.js","C#","Microsoft SQL Server","Babel","webpack"]},{"company":"Samsung R&D Institute Poland","job_title":"Regular Android Developer","location":"Warszawa (Poland)","tags":["Git","Android","Android SDK"]},{"company":"ALDI Polska","job_title":"Koordynator Projekt\xf3w IT","location":"Katowice (Polska)","tags":["Jira","Confluence","ITIL"]},{"company":"N-IX POLAND sp. z o.o.","job_title":"Middle Java/Kotlin Engineer","location":"Multiple locations offer (2)","tags":["Java","Kotlin","Spring Boot","Google Cloud Platform","AWS","Docker","Kubernetes"]},{"company":"N-IX POLAND sp. z o.o.","job_title":"Senior C++ Audio Programmer","location":"Warszawa (Poland)","tags":["C++","Wwise"]},{"company":"N-IX POLAND sp. z o.o.","job_title":"Senior C++ Gameplay Programmer","location":"Warszawa (Poland)","tags":["Unreal Engine","C++"]},{"company":"Kyndryl Global Service Delivery Center Sp. z o.o.","job_title":"ServiceNow Developer","location":"Multiple locations offer (16)","tags":["JavaScript"]},{"company":"Kyndryl Global Service Delivery Center Sp. z o.o.","job_title":"Developer – Workday Integrations","location":"Multiple locations offer (16)","tags":[]},{"company":"Polkomtel Sp. z o.o.","job_title":"Architekt Rozwiązań","location":"Warszawa (Polska)","tags":[]},{"company":"Cloudity","job_title":"Senior Project Manager","location":"Warszawa (Poland)","tags":[]},{"company":"N-IX POLAND sp. z o.o.","job_title":"C++ Unreal Engine Tools Programmer","location":"Warszawa (Poland)","tags":["C++","Unreal Engine"]},{"company":"T-Mobile","job_title":"IT IoT Solution Designer","location":"Warszawa (Poland)","tags":[]},{"company":"T-Mobile","job_title":"Test Automation Developer","location":"Warszawa (Poland)","tags":["Soap","REST","SoapUI","Postman","Selenium","Jenkins","Maven","Ant","Ruby","SCRUM"]},{"company":"ABB Business Services","job_title":"UX/UI Designer - Web and mobile applications","location":"Krak\xf3w (Poland)","tags":["UX"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(CTO ES - Data Platforms) MDB Atlas Product Owner","location":"Krak\xf3w (Poland)","tags":["Jira","Confluence"]},{"company":"T-Mobile","job_title":"Cloud Architect (DT)","location":"Warszawa (Poland)","tags":["OpenStack","VMware","AWS","Azure","Python","Git","Terraform","Ansible","Bash","Jenkins"]},{"company":"T-Mobile","job_title":"Senior Mobile Access Architect","location":"Warszawa (Poland)","tags":[]},{"company":"T-Mobile","job_title":"API Developer","location":"Warszawa (Poland)","tags":["Java","Python","Django","Flask","Kafka","Kubemq"]},{"company":"T-Mobile","job_title":"Data Network Automation Engineer","location":"Warszawa (Poland)","tags":[]},{"company":"T-Mobile","job_title":"O-Cloud Test Engineer","location":"Warszawa (Poland)","tags":["GitLab","Docker"]},{"company":"ABB Business Services","job_title":"IS Technical Specialist for Audit Wave","location":"Krak\xf3w (Poland)","tags":["Azure","SQL"]},{"company":"Samsung R&D Institute Poland","job_title":"Junior Protocol Test Engineer","location":"Warszawa (Poland)","tags":["GSM","UMTS","LTE","5G"]},{"company":"HCL Poland","job_title":"Technical Support Agent with French & English & Polish","location":"Krak\xf3w (Poland)","tags":[]},{"company":"Screen9 Sp\xf3łka z ograniczoną odpowiedzialnością","job_title":"Python/Fullstack Developer","location":"Krak\xf3w (Poland)","tags":["Python","JavaScript","Flask","Falcon","SQL"]},{"company":"Cyclad","job_title":"Big Data Engineer","location":"Multiple locations offer (16)","tags":["PySpark","Databricks","Azure Data Factory","Apache Airflow","Kafka","Grafana"]},{"company":"ALIOR BANK","job_title":"Business and System Analyst","location":"Oferta w wielu lokalizacjach (3)","tags":["CASE","Agile","SCRUM","UML","BPMN"]},{"company":"ECOM SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Java Developer","location":"Toruń (Polska)","tags":["Java","Spring Boot","PostgreSQL","Git","IntelliJ"]},{"company":"Forte Digital Sp. z o.o.","job_title":"Senior React Developer","location":"Oferta w wielu lokalizacjach (2)","tags":["React.js","JavaScript","TypeScript","HTML","CSS","Git","Azure DevOps","GitLab","Jira"]},{"company":"CREDIT SUISSE Poland","job_title":"ASM Service Delivery Manager","location":"Warszawa (Poland)","tags":[]},{"company":"Forte Digital Sp. z o.o.","job_title":"Senior .NET Developer","location":"Oferta w wielu lokalizacjach (2)","tags":[".NET Core","Microsoft Azure","Git","Azure DevOps"]},{"company":"Forte Digital Sp. z o.o.","job_title":"Senior Full-Stack .NET Developer","location":"Oferta w wielu lokalizacjach (2)","tags":[".NET Core","JavaScript","TypeScript","React.js","Git","Azure DevOps","GitLab","Jira","Microsoft Azure"]},{"company":"Forte Digital Sp. z o.o.","job_title":".NET Developer","location":"Oferta w wielu lokalizacjach (2)","tags":["C#",".NET Core",".NET","Git"]},{"company":"G2A.COM Sp. z.o.o.","job_title":"Software Engineer/ DevOps Engineer","location":"Multiple locations offer (3)","tags":["Linux"]},{"company":"summ-it s.a.","job_title":"Tester Oprogramowania","location":"Oferta w wielu lokalizacjach (16)","tags":[]},{"company":"G2A.COM Sp. z.o.o.","job_title":"Software Engineer (React)","location":"Multiple locations offer (3)","tags":["React.js","TypeScript","HTML","CSS"]},{"company":"G2A.COM Sp. z.o.o.","job_title":"Regular/ Senior Fullstack Developer (React, Node.js)","location":"Multiple locations offer (3)","tags":["JavaScript","TypeScript","Node.js","Docker"]},{"company":"G2A.COM Sp. z.o.o.","job_title":"Regular/ Senior Software Engineer (TypeScript, Elasticsearch)","location":"Multiple locations offer (3)","tags":["TypeScript","MongoDB","Express"]},{"company":"G2A.COM Sp. z.o.o.","job_title":"Regular/ Senior Software Engineer (Kotlin)","location":"Multiple locations offer (3)","tags":["Java","Kotlin","Scala","Clojure","Docker","Kubernetes","Git"]},{"company":"Capgemini Polska","job_title":"Temenos Business Analyst","location":"Multiple locations offer (6)","tags":["Temenos","T24","SC","FX","AA","TPH","DX","analyst"]},{"company":"Pathfinder 23","job_title":"NLP Data Scientist","location":"Poznań (Poland)","tags":["Python","NLP"]},{"company":"WINCAN POLAND sp. z o.o.","job_title":"Data scientist","location":"Krak\xf3w (Polska)","tags":["Python","TensorFlow","Torch"]},{"company":"Benefit Systems S.A.","job_title":"Kierownik/czka Zespołu Architektury Korporacyjnej i IT","location":"Warszawa (Polska)","tags":["Architektura Korporacyjna","Architektura IT","frontend","backend","bazy danych"]},{"company":"LUX MED Sp. z o.o.","job_title":"Programista Magento2","location":"Warszawa (Polska)","tags":["PHP","Magento","MySQL","REST","Git"]},{"company":"Benefit Systems S.A.","job_title":"Analityk/czka System\xf3w Biznesowych","location":"Warszawa (Polska)","tags":["UML","BPMN","SQL","Jira","Confluence"]},{"company":"Benefit Systems S.A.","job_title":"Analityk/czka System\xf3w Biznesowych","location":"Warszawa (Polska)","tags":["UML","BPMN","SQL","Jira","Confluence"]},{"company":"Benefit Systems S.A.","job_title":"Java Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["Java 17","Spring Boot","Hibernate","Microservices","OOP","CI/CD","RabbitMQ","Docker","Kubernetes","PostgreSQL","Spring Cloud","Clean Code"]},{"company":"EXATEL","job_title":"Koordynator SOC L1 - Gł\xf3wny Analityk ds. monitorowania bezpieczeństwa","location":"Warszawa (Polska)","tags":[]},{"company":"Solid MCG Sp. z o.o.","job_title":"Java Developer","location":"Krak\xf3w (Polska)","tags":["Java","Jee"]},{"company":"Solid MCG Sp. z o.o.","job_title":"Administrator System\xf3w Linux","location":"Krak\xf3w (Polska)","tags":[]},{"company":"Huuuge Games Sp. z o.o.","job_title":"Game Developer","location":"Multiple locations offer (2)","tags":["C++","Git","Lua"]},{"company":"All for One Poland","job_title":"Konsultant Wdrożeniowy SAP EWM","location":"Oferta w wielu lokalizacjach (3)","tags":["SAP EWM"]},{"company":"ITIS Sp. z o.o.","job_title":"Senior Full Stack Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["C#",".NET","ASP.NET MVC","TypeScript","JavaScript","WCF"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"Audit Manager – Analytics","location":"Krak\xf3w (Poland)","tags":["Python","SQL","SAS","qlik","celonis","KNIME","Git","GitLab"]},{"company":"Printbox Sp. z o.o.","job_title":"Senior JavaScript Developer","location":"Krak\xf3w (Polska)","tags":["JavaScript","TypeScript","React.js","Git"]},{"company":"Printbox Sp. z o.o.","job_title":"Senior React Native Developer","location":"Krak\xf3w (Polska)","tags":["React Native","TypeScript","JavaScript"]},{"company":"Printbox Sp. z o.o.","job_title":"DevOps Engineer","location":"Krak\xf3w (Polska)","tags":["Azure DevOps","AWS","Git","Kubernetes"]},{"company":"Printbox Sp. z o.o.","job_title":"JavaScript Developer","location":"Krak\xf3w (Polska)","tags":["JavaScript","TypeScript","React.js","Git"]},{"company":"Centrum Rozwoju Szk\xf3ł Wyższych TEB Akademia","job_title":"Specjalista ds. wsparcia aplikacji","location":"Poznań (Polska)","tags":["ERP","CRM"]},{"company":"QIAGEN BUSINESS SERVICES","job_title":"Product Owner Digital Experience","location":"Wrocław (Poland)","tags":["SCRUM"]},{"company":"QIAGEN BUSINESS SERVICES","job_title":"Cloud Security Engineer","location":"Wrocław (Poland)","tags":["Azure Security Center","Python","PowerShell","Bash"]},{"company":"Sii Sp. z o.o.","job_title":"Architekt Rozwiązań – .NET","location":"Wrocław (Polska)","tags":[".NET"]},{"company":"BTC Software Systems Sp. z o.o","job_title":"Full Stack Developer","location":"Oferta w wielu lokalizacjach (16)","tags":[".NET (C#)","React.js","Vue.js"]},{"company":"BTC Software Systems Sp. z o.o","job_title":"Programista JAVA","location":"Oferta w wielu lokalizacjach (16)","tags":["Java","JavaScript","JSF","REST","EAI","BPM"]},{"company":"WINCAN POLAND sp. z o.o.","job_title":"C++ Developer","location":"Krak\xf3w (Polska)","tags":["C++","Jira","Git","Confluence","GitHub"]},{"company":"ASTEK Polska","job_title":"Senior Project Manager","location":"Warszawa (Poland)","tags":["ITIL","Scrum","CRM","Cloud computing","Jira"]},{"company":"ALM Services Technology Group Sp. z o.o.","job_title":"Full-Stack Developer (React.js/Node.js)","location":"Multiple locations offer (16)","tags":["React.js","JavaScript","Node.js","Docker","AWS"]},{"company":"ALM Services Technology Group Sp. z o.o.","job_title":"Database Engineer / DBA","location":"Multiple locations offer (16)","tags":["Microsoft SQL Server","Microsoft Azure","T-SQL","PowerShell"]},{"company":"Rockwell Automation","job_title":"Inżynier Oprogramowania System\xf3w Wbudowanych","location":"Katowice (Polska)","tags":["C","C++","Git","SVN"]},{"company":"ALM Services Technology Group Sp. z o.o.","job_title":"Senior PHP Developer","location":"Multiple locations offer (16)","tags":["PHP","GraphQL","Symfony","Docker","MySQL","Terraform","AWS"]},{"company":"Samsung R&D Institute Poland","job_title":"Data Engineer","location":"Warszawa (Poland)","tags":["Python (Pandas)","Java (Spring)","Microservices (Flask, Sanic and/or FastAPI)","Javascript (Typescript, Vue.js)","DevOps (Docker, Jenkins)","Databases (PostgreSQL)","TDD (unittest, pytest, junit)","Git"]},{"company":"9bits Sp. z o.o.","job_title":"Software Tester","location":"Białystok (Polska)","tags":["HTML","JS.","API","Postman","SoapUI","Charles","Jira"]},{"company":"DPD Polska","job_title":"Młodszy Informatyk","location":"Brwin\xf3w (Polska)","tags":[]},{"company":"Cyclad","job_title":"Data Engineer","location":"Multiple locations offer (16)","tags":["Amazon Redshift","Azure Synapse","Snowflake Data Cloud","Google BigQuery","SQL","Apache Airflow"]},{"company":"Netwise S.A.","job_title":"IT Administrator","location":"Warszawa (Polska)","tags":["Microsoft Azure"]},{"company":"Sonalake sp. z o.o.","job_title":"Senior Backend Engineer (Java)","location":"Multiple locations offer (16)","tags":["Java","Spring","Spring Boot","AWS","Docker","Jenkins"]},{"company":"BlueSoft Sp. z o.o.","job_title":"Tester Automatyzujący","location":"Warszawa (Polska)","tags":["TestNG","REST-assured","AssertJ","Allure","Selenium WebDriver","Gatling"]},{"company":"PwC","job_title":"SAP S/4HANA Functional Analyst","location":"Multiple locations offer (2)","tags":["SAP","SAP HANA"]},{"company":"VIG Polska Sp. z o.o., Vienna Insurance Group","job_title":"Specjalista Help Desk","location":"Warszawa (Polska)","tags":[]},{"company":"Sonalake sp. z o.o.","job_title":"Mid Backend Engineer (Java)","location":"Multiple locations offer (16)","tags":["Java","Spring","Spring Boot","AWS","Docker","Jenkins"]},{"company":"EUROELECTRONICS.EU sp. z o.o. SP\xd3ŁKA KOMANDYTOWA","job_title":"Programista - Developer PHP","location":"śląskie (Polska)","tags":["XML","SOAP/WSDL","REST","JSON","AJAX","JS","jQuery","Git","SQL"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"IT Development Lead Data Warehouse Automation","location":"Warszawa (Poland)","tags":["SQL","Python","Oracle","Azure DevOps"]},{"company":"EPAM Systems (Poland) sp. z o.o.","job_title":"SAP IBP Consultant","location":"Multiple locations offer (16)","tags":[]},{"company":"nazwa.pl","job_title":"Webmaster","location":"Krak\xf3w (Polska)","tags":["HTML","CSS","JavaScript","PHP","MySQL","WordPress","Linux"]},{"company":"KACZMARSKI GROUP","job_title":"Architekt Systemowy","location":"Wrocław (Polska)","tags":[".NET",".NET Core","C#"]},{"company":"Nationale-Nederlanden Usługi Finansowe Sp. z o.o.","job_title":"Specjalista w zespole Service Desk","location":"Warszawa (Polska)","tags":["Windows"]},{"company":"CREDIT SUISSE Poland","job_title":"2023 Risk Graduate Program in Wroclaw- June","location":"Wrocław (Poland)","tags":[]},{"company":"Rossmann SDP","job_title":"Fullstack Developer","location":"Oferta w wielu lokalizacjach (18)","tags":[".NET Core","C#","Visual Studio","Docker","Microsoft SQL Server","Git"]},{"company":"CREDIT SUISSE Poland","job_title":"2023 Information Technology Internship in Wroclaw - start: March","location":"Wrocław (Poland)","tags":[]},{"company":"Rossmann SDP","job_title":"Backend Developer","location":"Oferta w wielu lokalizacjach (18)","tags":[".NET Core","C#","Visual Studio","Docker","Microsoft SQL Server","Git"]},{"company":"HCL Poland","job_title":"Technical Support Agent with Swedish & English","location":"Wrocław (Poland)","tags":[]},{"company":"Robert Bosch Sp. z o.o.","job_title":"IT Application Specialist Data Warehouse Automation","location":"Warszawa (Poland)","tags":["Oracle","SQL","Python","Azure DevOps"]},{"company":"ING Hubs Poland","job_title":"Data Analyst in Model Validation Team","location":"Warszawa (Poland)","tags":["SQL"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"IT Product Manager Data Warehouse Automation","location":"Warszawa (Poland)","tags":["SQL","Oracle"]},{"company":"T-Mobile","job_title":"Analityk/-czka danych","location":"Warszawa (Polska)","tags":["SQL","Tableau","R","Python"]},{"company":"PwC","job_title":"SAP S/4 HANA Cloud Technical Analyst","location":"Multiple locations offer (2)","tags":["SAP","SAP HANA"]},{"company":"CREDIT SUISSE Poland","job_title":"2023 Information Technology Analyst - Full-Time Graduate Program in Wroclaw - start: June","location":"Wrocław (Poland)","tags":[]},{"company":"CREDIT SUISSE Poland","job_title":"2023 Quant Strats Internship in Wroclaw- June","location":"Wrocław (Poland)","tags":[]},{"company":"CREDIT SUISSE Poland","job_title":"2023 Risk Graduate Program in Warsaw- June","location":"Warszawa (Poland)","tags":[]},{"company":"CREDIT SUISSE Poland","job_title":"2023 Quant Strats Internship in Warsaw- June","location":"Warszawa (Poland)","tags":[]},{"company":"Santander Leasing S.A.","job_title":"Analityk systemowy","location":"Poznań (Polska)","tags":["SQL","RabbitMQ","WebApi","SoapUI"]},{"company":"Samsung R&D Institute Poland","job_title":"Senior Android Developer","location":"Warszawa (Poland)","tags":["Android"]},{"company":"Capgemini Polska","job_title":"Temenos Developer","location":"Multiple locations offer (6)","tags":["Temenos","SC","AA","TPH"]},{"company":"Capgemini Polska","job_title":"IT Analyst - Consultant for Temenos","location":"Multiple locations offer (6)","tags":["Temenos","T24","analyst"]},{"company":"Hitachi Energy Services Sp. z o.o. ","job_title":"IT SAP Test Manager","location":"Krak\xf3w (Poland)","tags":["SAP"]},{"company":"Decathlon sp. z o.o.","job_title":"Business Analyst","location":"Warszawa (Poland)","tags":["SQL"]},{"company":"HCL Poland","job_title":"Customer Service Specialist with German","location":"Krak\xf3w (Poland)","tags":[]},{"company":"PEKAO LEASING SP. Z O.O.","job_title":"Analityk Biznesowy","location":"Warszawa (Polska)","tags":["Jira","Confluence"]},{"company":"Capgemini Polska","job_title":"Senior C++ Developer","location":"Multiple locations offer (6)","tags":["C++","gcc","multi-threading","lockless structures","Python","Bash","CMake","GitLab","GTest","Robot Framework","Kafka"]},{"company":"Capgemini Polska","job_title":"Senior Java Developer","location":"Multiple locations offer (6)","tags":["Java","Spring","Cloud","MS SQL","No SQL","Maven","Linux","Git"]},{"company":"Capgemini Polska","job_title":"Cloud Platform DevOps Engineer","location":"Multiple locations offer (6)","tags":["AWS","Azure","Google Cloud Platform","Linux","Bash","Python","Jenkins","GitLab","TeamCity","Terraform","Docker","Kubernetes","OpenShift","Git"]},{"company":"Accenture Song","job_title":"Internship in SEO (Polish, English and German/Dutch)","location":"Multiple locations offer (16)","tags":[]},{"company":"JAMF","job_title":"Technical Support Specialist with French (2nd line)","location":"Multiple locations offer (18)","tags":[]},{"company":"JAMF","job_title":"Javascript Engineer","location":"Silesian (Poland)","tags":["JavaScript","CI/CD"]},{"company":"ALSTOM ZWUS sp. z o.o. ","job_title":"Software Designer C/C++ PLC","location":"Silesian (Poland)","tags":["C","C++","Git","SVN","Jira"]},{"company":"IFM ECOLINK","job_title":"Embedded Software Engineer","location":"Opole (Polska)","tags":["C"]},{"company":"Sii Sp. z o.o.","job_title":"Analityk Biznesowo-Systemowy – projekty publiczne","location":"Warszawa (Polska)","tags":["UML","BPMN","Enterprise Architect"]},{"company":"ZF Group","job_title":"PLM Solution Architect","location":"Multiple locations offer (3)","tags":[]},{"company":"Centralny Ośrodek Informatyki ","job_title":"Ekspert ds. sieci teleinformatycznych","location":"Warszawa (Polska)","tags":["Firewall","VPN","L2 Security","SSL"]},{"company":"Sii Sp. z o.o.","job_title":"Absolwent Elektroniki/Informatyki – branża motoryzacyjna","location":"Częstochowa (Polska)","tags":["C","C#","C++","Python"]},{"company":"Bank Pekao","job_title":"Data Scientist w CRM (Modelowanie & Analizy)","location":"Warszawa (Polska)","tags":["Python","SAS","R"]},{"company":"Sii Sp. z o.o.","job_title":"Technical Tester","location":"Multiple locations offer (8)","tags":["ISTQB","SQL","Git"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"IT SAP Consultant Customer Experience (SAP Commerce Cloud)","location":"Multiple locations offer (3)","tags":["SAP","SAP HANA","JavaScript","Python","HTML"]},{"company":"PwC","job_title":"Cloud DevOps Architect / Cloud DevOps Engineer","location":"Warszawa (Polska)","tags":["Microsoft Azure","Google Cloud Platform","AWS","Jenkins","GitLab"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"IT Development Lead","location":"Multiple locations offer (3)","tags":["SAP HANA","SAP"]},{"company":"SILENT EIGHT PTE. LTD.","job_title":"Senior JavaScript Developer","location":"Multiple locations offer (16)","tags":["JavaScript","TypeScript","Angular","RxJs","HTML","CSS","Git","Jenkins","Cypress"]},{"company":"SILENT EIGHT PTE. LTD.","job_title":"JavaScript Developer","location":"Multiple locations offer (16)","tags":["JavaScript","Angular","TypeScript","Cypress","NX"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Lead Developer S/4 HANA","location":"Multiple locations offer (3)","tags":["SAP","SAP HANA"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Senior MM Consultant","location":"Multiple locations offer (3)","tags":["SAP"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"IT Solution Architect for Master Data Applications","location":"Multiple locations offer (3)","tags":["SAP"]},{"company":"Colliers Poland Sp. z o.o.","job_title":"Salesforce Developer","location":"Warszawa (Polska)","tags":["HTML","CSS","JS"]},{"company":"Sii Sp. z o.o.","job_title":"Test Data Manager","location":"Multiple locations offer (6)","tags":[]},{"company":"eService Sp. z o.o.","job_title":"Administrator system\xf3w i aplikacji","location":"Warszawa (Polska)","tags":["MSSQL"]},{"company":"IT Connect Sp. z o.o.","job_title":"Service Desk Manager","location":"Białystok (Polska)","tags":["MS Excel","ISO 9001","ISO 45001"]},{"company":"IT Connect Sp. z o.o.","job_title":"Architekt System\xf3w IT","location":"Oferta w wielu lokalizacjach (16)","tags":["MS AZURE","Cloud Native","IaaS","PaaS","SaaS","UML","BPMN","Archimate","TOGAF","ITIL"]},{"company":"IT Connect Sp. z o.o.","job_title":"Developer IBM BPM","location":"Warszawa (Polska)","tags":["IBM BPM/BAW","JavaScript","Ajax","HTML","CSS","SASS","jQuery","Bootstrap","SOAP","REST.API","Webservice","SQL"]},{"company":"IT Connect Sp. z o.o.","job_title":"Administrator systemu MS Dynamics CRM 2015","location":"Warszawa (Polska)","tags":["Windows Server 2012R2","MS SQL Server 2012","SFTP","SSH","VMware","Firewall","Apache Tomcat","Postgresql"]},{"company":"Hitachi Energy Poland Sp. z o.o.","job_title":"IT Service Manager for Data Repository","location":"Ł\xf3dź (Poland)","tags":["ITIL","Microsoft Office","SQL","Microsoft Power BI","ServiceNow","Agile"]},{"company":"Capgemini Polska","job_title":"Java Developer","location":"Multiple locations offer (5)","tags":["Java","JavaScript","XML","JSON","Spring Boot","Struts","Hibernate","EJB","SOAP/REST","Oracle/SQL Server"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"Major Incident Manager (CTO SM – MIM)","location":"Krak\xf3w (Poland)","tags":[]},{"company":"BLAZITY sp. z o.o.","job_title":"Frontend Tech Lead","location":"Multiple locations offer (16)","tags":["JavaScript","TypeScript","React.js","Next.js"]},{"company":"Addepto","job_title":"Data Scientist","location":"Multiple locations offer (16)","tags":["Python","Pandas","scikit-learn","Keras","PyTorch","TensorFlow","AWS","SQL","Git"]},{"company":"Addepto","job_title":"Lead Data Scientist","location":"Multiple locations offer (16)","tags":["AWS","SQL","Git"]},{"company":"All for One Poland","job_title":"Frontend Developer (TypeScript/React)","location":"Poznań (Polska)","tags":["JavaScript","React.js","TypeScript"]},{"company":"Addepto","job_title":"Data Science Solution Architect","location":"Multiple locations offer (16)","tags":["Python","Pandas","scikit-learn","Keras","PyTorch","TensorFlow","AWS","SQL","Git"]},{"company":"Jobfinder Ewelina Hordyniec","job_title":"DevOps Engineer","location":"Oferta w wielu lokalizacjach (3)","tags":["DevOps","Azure SQL","Git","Jenkins","Artifactory","Docker","Kubernetes","PostgreSQL","Grafana","ELK","Google Cloud Platform"]},{"company":"Hitachi Energy Services Sp. z o.o. ","job_title":"IT Process Expert","location":"Krak\xf3w (Poland)","tags":["Agile","ServiceNOW","DevOps","Common Service Data Model"]},{"company":"Hitachi Energy Services Sp. z o.o. ","job_title":"IT Senior Project Manager","location":"Krak\xf3w (Poland)","tags":["StAR"]},{"company":"Unic Sp. z o.o.","job_title":"Senior Application Engineer .Net/C#","location":"Wrocław (Poland)","tags":["ASP.NET Core","ASP.NET Core MVC",".NET","C#","JavaScript","HTML","CSS"]},{"company":"Faurecia Automotive Polska S.A.","job_title":"Młodszy Specjalista w dziale IT - program rozwojowy","location":"Jelcz-Laskowice (Polska)","tags":[]},{"company":"Capgemini Polska","job_title":"Senior Pega Developer","location":"Multiple locations offer (4)","tags":["Pega","PRPC","Angular JS","Java"]},{"company":"Capgemini Polska","job_title":"Senior .NET Developer","location":"Multiple locations offer (4)","tags":["C#",".NET",".NET Core","Azure","MS SQL","Entity Framework","Git"]},{"company":"Capgemini Polska","job_title":"Senior Automation Tester","location":"Multiple locations offer (6)","tags":["Java","JavaScript","C#","Selenium","Jenkins","Kubernetes","Nexus","Artifactory","IBM UrbanCode","Docker Swarm","AWS","Azure","GCP"]},{"company":"Deloitte Polska","job_title":"Senior Consultant - Digital Strategy","location":"Warszawa (Poland)","tags":["VBA","SQL/databases","Python"]},{"company":"Apptension sp. z o.o.","job_title":"Senior Backend Developer","location":"Multiple locations offer (16)","tags":["Django","Flask","Python","PostgreSQL","Docker"]},{"company":"KLG Solutions Sp. z o.o.","job_title":"Tester oprogramowania","location":"Oferta w wielu lokalizacjach (16)","tags":["Postman","SoapUI","JIRA","SQL","WebServices","ISTQB","Swagger"]},{"company":"KLG Solutions Sp. z o.o.","job_title":"Remote Front-End Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["Angular 2+","Angular Material","git","TypeScript","JavaScript","HTML5","CSS3","Chrome DevTools"]},{"company":"KLG Solutions Sp. z o.o.","job_title":"Analityk Systemowy","location":"Oferta w wielu lokalizacjach (16)","tags":["UML","BPMN","CASE (Enterprise Architect)","MS Office","Agile","SQL"]},{"company":"KLG Solutions Sp. z o.o.","job_title":"Remote Java Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["JAVA","SQL","WebServices","Spring","Git","JUnit"]},{"company":"Capgemini Polska","job_title":"Guidewire Developer","location":"Multiple locations offer (6)","tags":["Java","Gosu","Angular JS","Guidewire"]},{"company":"Wunderman Thompson Technology","job_title":"Lead Engineer","location":"Multiple locations offer (3)","tags":["Java","Azure","Docker","Kubernetes"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(Cybersecurity) Cybersecurity MI Reporting - Technical Expert","location":"Krak\xf3w (Poland)","tags":[]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(Cybersecurity Operations) Incident Manager Lead","location":"Krak\xf3w (Poland)","tags":["AWS","Azure","Google"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Technical writer Software Documentation (with German)","location":"Multiple locations offer (3)","tags":["HTML"]},{"company":"PIT-RADWAR S.A. ","job_title":"Projektant urządzeń cyfrowych","location":"Gdańsk (Polska)","tags":["C","C++"]},{"company":"Sii Sp. z o.o.","job_title":"Programista C Embedded – obszar cyberbezpieczeństwa","location":"Oferta w wielu lokalizacjach (9)","tags":["C"]},{"company":"Pathfinder 23","job_title":"IT Project Manager","location":"Poznań (Poland)","tags":["Saas","Scrum"]},{"company":"Custommerce Sp. z o.o.","job_title":"IT Projects Manager / Koordynator projekt\xf3w","location":"Poznań (Polska)","tags":[]},{"company":"Cyfrowy Polsat S.A.","job_title":"Embedded Software Engineer","location":"Wrocław (Polska)","tags":["C","C++","Linux"]},{"company":"Addepto","job_title":"MLOps Engineer","location":"Multiple locations offer (16)","tags":["Python","Scala","Java","Google Cloud Platform","AWS","Microsoft Azure","Kubeflow","MLFlow"]},{"company":"Currenda Sp. z o. o.","job_title":"Młodszy konsultant helpdesk","location":"Sopot (Polska)","tags":[]},{"company":"Addepto","job_title":"Project Manager","location":"Multiple locations offer (16)","tags":[]},{"company":"Addepto","job_title":"Data Engineer","location":"Multiple locations offer (16)","tags":["Python","SQL","Spark","NiFi","Docker","AWS","Microsoft Azure","Splunk","Kubernetes","Google Cloud Platform"]},{"company":"Sonalake sp. z o.o.","job_title":"Test Automation Engineer","location":"Multiple locations offer (16)","tags":["Java","GitLab","GitHub","TeamCity","Jenkins","AWS","Microsoft Azure","Postman","Cucumber.js","Selenium","Git","SQL"]},{"company":"ITSG sp. z o.o.","job_title":"Analityk Systemowy","location":"Oferta w wielu lokalizacjach (16)","tags":["UML","BPMN","Enterprise Architect"]},{"company":"ITSG sp. z o.o.","job_title":"Senior Java Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["Java","Spring Framework","Hibernate","jUnit","Mockito","AssertJ","Git"]},{"company":"Ośrodek Przetwarzania Informacji – Państwowy Instytut Badawczy","job_title":"Specjalista ds. wsparcia użytkownik\xf3w / Specjalistka ds. wsparcia użytkownik\xf3w","location":"Warszawa (Polska)","tags":[]},{"company":"Asseco Business Solutions S.A.","job_title":"DevOps Engineer","location":"Lublin (Polska)","tags":["Linux","Kubernetes","CI/CD","Ansible","GitOps","Java"]},{"company":"KMD Poland Sp. z o.o.","job_title":".NET Developer (DutyPlan)","location":"Warszawa (Poland)","tags":[".NET","Azure","Git","Scrum"]},{"company":"VISSAVI SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Tester Manualny - Automatyzujący","location":"Wrocław (Polska)","tags":["Python","Git","Jira"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Data Analytics Logging and Monitoring Engineer","location":"Warszawa (Poland)","tags":["Oracle","Hadoop","Apache Airflow"]},{"company":"SPACEWALKERS sp. z o.o.","job_title":"Programista Game Developer Unreal Engine 4","location":"Oferta w wielu lokalizacjach (16)","tags":["C++","Unreal Engine"]},{"company":"ITBoom Sp. z o.o.","job_title":"Java Solutions Architect","location":"Oferta w wielu lokalizacjach (16)","tags":["Java","Oracle"]},{"company":"XTRF Management Systems S. A.","job_title":"Customer Support Specialist with English","location":"Krak\xf3w (Poland)","tags":[]},{"company":"Prime Engineering Poland","job_title":"IT Support","location":"dolnośląskie (Polska)","tags":[]},{"company":"PwC","job_title":"Cloud Security Engineer","location":"Oferta w wielu lokalizacjach (16)","tags":[]},{"company":"Cyclad","job_title":".NET Developer","location":"Oferta w wielu lokalizacjach (16)","tags":[".NET","C#","HTML","CSS","JavaScript","Microsoft Visual Studio","Microsoft SQL Server"]},{"company":"HARMAN ","job_title":"Embedded Test Automation Engineer - Cybersecurity","location":"Ł\xf3dź (Poland)","tags":[]},{"company":"HARMAN ","job_title":"Java SE Developer for Automotive","location":"Ł\xf3dź (Poland)","tags":["Java"]},{"company":"HARMAN ","job_title":"SW Engineer","location":"Ł\xf3dź (Poland)","tags":["C"]},{"company":"HARMAN ","job_title":"Autosar Security Specialist","location":"Ł\xf3dź (Poland)","tags":["C"]},{"company":"HARMAN ","job_title":"Senior Autosar Developer","location":"Ł\xf3dź (Poland)","tags":[]},{"company":"HARMAN ","job_title":"Autosar Developer","location":"Ł\xf3dź (Poland)","tags":["C"]},{"company":"HARMAN ","job_title":"Lead Embedded Test Automation Engineer - Cybersecurity","location":"Ł\xf3dź (Poland)","tags":[]},{"company":"HARMAN ","job_title":"Senior Embedded C++ Engineer - Cybersecurity","location":"Ł\xf3dź (Poland)","tags":["C++"]},{"company":"HARMAN ","job_title":"Embedded Software Test Engineer","location":"Ł\xf3dź (Poland)","tags":[]},{"company":"HARMAN ","job_title":"Functional Owner","location":"Ł\xf3dź (Poland)","tags":["C","C++"]},{"company":"Sii Sp. z o.o.","job_title":"Specjalista ds. Wsparcia IT z j. angielskim","location":"Ł\xf3dź (Polska)","tags":["Active Directory","Windows Server"]},{"company":"Sii Sp. z o.o.","job_title":"Młodszy Specjalista ds. Wsparcia IT","location":"Bydgoszcz (Polska)","tags":[]},{"company":"Uniteam Sp. z o.o.","job_title":"Atlassian Engineer - Jira Developer","location":"Warszawa (Polska)","tags":["Atlassian","Groovy","Java"]},{"company":"Uniteam Sp. z o.o.","job_title":"Java Developer","location":"Warszawa (Polska)","tags":["Java","Spring Boot","Spring Framework","Hibernate","SQL","Maven","Git"]},{"company":"PCMI SP. Z O.O.","job_title":"Business Analyst","location":"Krak\xf3w (Poland)","tags":["SQL","Jira","Confluence"]},{"company":"ING Hubs Poland","job_title":"Site Reliability Engineer - Linux","location":"Katowice (Poland)","tags":["Ansible","Azure DevOps"]},{"company":"ICEO LAB PL sp. z o.o.","job_title":"DeFi Analyst","location":"Krak\xf3w (Polska)","tags":["Web3","Defi","Metaverse"]},{"company":"Deloitte Polska","job_title":"Agile Transformation Manager - Consulting","location":"Warszawa (Poland)","tags":["Agile","DevOps","SDLC","ITSM","Scrum"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"UX/UI Designer (Wealth & Personal Banking IT)","location":"Krak\xf3w (Poland)","tags":["Visual","Digital Design","Sketch","Invision","Figma"]},{"company":"ex7 Sp. z o.o.","job_title":"ASP.NET Developer","location":"Skawina (Polska)","tags":["ASP.NET"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Frontend Developer (Angular)","location":"Warszawa (Poland)","tags":["Angular","TypeScript","Java","Spring Boot","OpenShift","Kubernetes"]},{"company":"DSV ISS","job_title":"Solution oriented with analytical mindset","location":"Warszawa (Polska)","tags":["MS Office"]},{"company":"CodeTwo","job_title":"IT Manager","location":"Oferta w wielu lokalizacjach (2)","tags":[]},{"company":"ex7 Sp. z o.o.","job_title":".NET Developer","location":"Skawina (Polska)","tags":[".NET","Entity Framework","SQL"]},{"company":"ING Hubs Poland","job_title":"Cyber Threat Analyst","location":"Katowice (Poland)","tags":[]},{"company":"ex7 Sp. z o.o.","job_title":".NET Mobile Developer (Xamarin / MAUI)","location":"Skawina (Polska)","tags":[".NET","C#","Xamarin","SOAP","REST","HTTP"]},{"company":"Samsung R&D Institute Poland","job_title":"Network Security Specialist","location":"Warszawa (Poland)","tags":["Linux","Python"]},{"company":"DSV ISS","job_title":"Excel Genius","location":"Warszawa (Polska)","tags":["MS Office"]},{"company":"DSV ISS ","job_title":"IT Specialist","location":"Warszawa (Poland)","tags":["SQL"]},{"company":"DSV ISS","job_title":"Junior Analyst D&I","location":"Warszawa (Polska)","tags":["MS Office"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Senior Frontend Developer (Angular)","location":"Warszawa (Poland)","tags":["Angular","TypeScript","Spring Boot","OpenShift","Kubernetes"]},{"company":"Avenga Poland","job_title":"Professional UX Designer","location":"Warszawa (Poland)","tags":["Sketch"]},{"company":"ING Bank Śląski S.A.","job_title":"Java Developer","location":"Multiple locations offer (16)","tags":["Java","Spring Boot","Maven","Kafka","PostgreSQL"]},{"company":"Samsung R&D Institute Poland","job_title":"Full Stack Developer","location":"Wrocław (Poland)","tags":["Python","REST API","JS"]},{"company":"ZF Group","job_title":"SAP SCM Consultant/Analyst - Sales & Distribution","location":"Multiple locations offer (4)","tags":["SAP"]},{"company":"Britenet Sp. z o.o.","job_title":"Analityk Biznesowo-Systemowy (z językiem ang.)","location":"Oferta w wielu lokalizacjach (16)","tags":["UML","BPMN","SQL"]},{"company":"Aspekt Sp. z o.o.","job_title":"Junior Software Developer","location":"Radzionk\xf3w (Polska)","tags":["C#","ASP.NET","Win Forms",".Net Core","Kotlin","LINQ","REST/SOAP","SQL","T-SQL","MSSQL"]},{"company":"DevsData LLC","job_title":"Senior PHP Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["PHP"]},{"company":"DevsData LLC","job_title":"QA Engineer","location":"Oferta w wielu lokalizacjach (16)","tags":["Python","PHP"]},{"company":"Przedsiębiorstwo Państwowe „Porty Lotnicze” ","job_title":"Programista Java","location":"Warszawa (Polska)","tags":["Java","JavaScript","TypeScript","Spring Boot","Git","CSS","HTML","Angular(2+)"]},{"company":"DevsData LLC","job_title":"Web Engineer","location":"Multiple locations offer (16)","tags":["PHP","Symfony"]},{"company":"Deloitte Polska","job_title":"Data Engineer | Cloud&Engineering","location":"Multiple locations offer (4)","tags":["SQL","Scala","Python","Azure SQL"]},{"company":"Affirm","job_title":"Senior Software Engineer (Service Infrastructure)","location":"Multiple locations offer (16)","tags":["Kubernetes"]},{"company":"Deloitte Polska","job_title":"Cloud Architect - Cloud&Engineering","location":"Multiple locations offer (6)","tags":["Azure","PowerShell"]},{"company":"Affirm","job_title":"Software Engineer, Backend (Online Storage)","location":"Multiple locations offer (16)","tags":["Python","Kotlin","Scala","MySQL","Kafka"]},{"company":"Affirm","job_title":"Software Engineer (Service Infrastructure)","location":"Multiple locations offer (16)","tags":["AWS"]},{"company":"Affirm","job_title":"Staff Software Engineer, Backend (Developer Productivity)","location":"Multiple locations offer (16)","tags":[]},{"company":"Bright Inventions","job_title":"Fullstack Developer (Node.js + React)","location":"Gdańsk (Poland)","tags":["TypeScript","JavaScript","Node.js","React","AWS"]},{"company":"Bright Inventions","job_title":"Senior Backend Developer (TS, Node.js)","location":"Gdańsk (Poland)","tags":["TypeScript","JavaScript","Node.js","NestJS"]},{"company":"Bright Inventions","job_title":"DevOps Engineer","location":"Gdańsk (Poland)","tags":["AWS","Kubernetes","Terraform","PostgreSQL","MongdoDB","Docker"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"Senior Service Management Lead (Wealth & Personal Banking)","location":"Krak\xf3w (Poland)","tags":["Microsoft Office Suite","Clarity Design System"]},{"company":"iDeals","job_title":"Senior UI/UX Designer (Web projects)","location":"Warszawa (Poland)","tags":["HTML","CSS","JavaScript"]},{"company":"ING Hubs Poland","job_title":"DevOps Engineer - Windows Server Administrator","location":"Katowice (Poland)","tags":["PowerShell"]},{"company":"HCL Poland","job_title":"Software administrator - Developer","location":"Wrocław (Poland)","tags":["Oracle","SQL"]},{"company":"Instytut Łączności-Państwowy Instytut Badawczy","job_title":"Administrator Linux / PostgreSQL","location":"Warszawa (Polska)","tags":["PostgreSQL"]},{"company":"DEVQUBE sp. z o.o.","job_title":"Frontend Developer Angular with German","location":"Oferta w wielu lokalizacjach (2)","tags":["Angular","TypeScript","JavaScript","CSS","HTML"]},{"company":"Deloitte CE BSC Rzesz\xf3w","job_title":"Junior Anaplan Developer","location":"Rzesz\xf3w (Poland)","tags":["VBA","Python"]},{"company":"PIT-RADWAR S.A. ","job_title":"Specjalista ds. zarządzania konfiguracją oprogramowania (bezzałogowe statki powietrzne - UAV)","location":"Warszawa (Polska)","tags":[]},{"company":"ASTEK Polska","job_title":"Analityk Biznesowo-Systemowy","location":"Warszawa (Polska)","tags":["SQL","MSOffice","SAS"]},{"company":"ING Bank Śląski S.A.","job_title":"Starszy Specjalista Analityk - Ryzyko Kredytowe","location":"Katowice (Polska)","tags":["Python","Power BI"]},{"company":"Dynatrace Sp. z o.o.","job_title":"Software Engineer for Cloud Monitoring","location":"Gdańsk (Poland)","tags":["Python","Java"]},{"company":"CRE Polskie ePłatności","job_title":"Administrator system\xf3w Linux i sieci","location":"Krak\xf3w (Polska)","tags":["MySQL(MariaDB)","Apache","Postfix","Dovecot","NFS","Samba","Bash","Perl","PostgreSQL","Ubuntu","Debian","CentOS"]},{"company":"Dynatrace Sp. z o.o.","job_title":"Linux Desktop Engineer","location":"Gdańsk (Poland)","tags":["Linux"]},{"company":"Dynatrace Sp. z o.o.","job_title":"Senior Software Engineer for Access Control","location":"Gdańsk (Poland)","tags":["Java","MySQL","PostgreSQL","AWS"]},{"company":"Dynatrace Sp. z o.o.","job_title":"Principal Software Engineer (Java)","location":"Gdańsk (Poland)","tags":["Java","Python","Gradle","Kubernetes"]},{"company":"Dynatrace Sp. z o.o.","job_title":"Senior Java Engineer with SQL","location":"Gdańsk (Poland)","tags":["SQL","Java"]},{"company":"CKSource","job_title":"PHP/Drupal Developer","location":"Multiple locations offer (16)","tags":["Drupal 8+","JavaScript","PHP","CSS","Symfony","HTML"]},{"company":"Dynatrace Sp. z o.o.","job_title":"Senior Software Engineer (Java)","location":"Gdańsk (Poland)","tags":["Java"]},{"company":"British American Tobacco","job_title":"SAP ATTP Platform Engineer","location":"Warszawa (Poland)","tags":["SAP ATTP"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"IT Infrastructure Architect (Connected Industry)","location":"Multiple locations offer (2)","tags":["SAP"]},{"company":"Grupa Sp\xf3łek Danone Polska ","job_title":"Program Stażowy DAN One w Zespole IT&Data - Governance&Performance","location":"Warszawa (Poland)","tags":[]},{"company":"Enersys Sp. z o.o.","job_title":"Global IT Integrations Lead (can be remote)","location":"Bielsko-Biała (Poland)","tags":["JavaScript"]},{"company":"HARMAN ","job_title":"Java SE Architect","location":"Ł\xf3dź (Poland)","tags":["Java"]},{"company":"POLON-ALFA S.A.","job_title":"Konstruktor - Elektronik","location":"Bydgoszcz (Polska)","tags":["C","C++"]},{"company":"Rockwell Automation","job_title":"Product Owner","location":"Katowice (Poland)","tags":[]},{"company":"HARMAN ","job_title":"Scrum Master","location":"Ł\xf3dź (Poland)","tags":["Jira","Agile","Scrum"]},{"company":"PIT-RADWAR S.A. ","job_title":"Starszy Programista C/C++ (systemy Embedded)","location":"Warszawa (Polska)","tags":["C++","Git","Linux","CMake","TCP","UDP","Multicast"]},{"company":"GGS GO GLOBAL SERVICES SP Z O O","job_title":"Application Support Specialist","location":"Krak\xf3w (Poland)","tags":["SQL","Jira","SSIS","SSRS"]},{"company":"Foreto","job_title":"WordPress Developer","location":"Gdańsk (Polska)","tags":["WordPress","WooCommerce","PHP"]},{"company":"EXATEL","job_title":"Architekt Oprogramowania","location":"Warszawa (Polska)","tags":[]},{"company":"Foreto","job_title":"PHP Developer","location":"Gdańsk (Polska)","tags":["PHP","SQL","Git","Laravel","Symfony","Yii"]},{"company":"Foreto","job_title":"React Developer","location":"Gdańsk (Polska)","tags":["React.js"]},{"company":"SILENT EIGHT PTE. LTD.","job_title":"Senior Python Developer","location":"Multiple locations offer (16)","tags":["Python","Pandas","PySpark","Docker","Git","SQL"]},{"company":"Deloitte Polska","job_title":"Azure Cloud Engineer - Cloud&Engineering","location":"Oferta w wielu lokalizacjach (7)","tags":["Azure","Terraform","ARM","Ansible","Python","PowerShell","Bash","Go","PostgreSQL","MySQL","MS SQL","Oracle","MongoDB","ElasticSearch","SQL","Java","Node.js",".Net","Kubernetes"]},{"company":"PIT-RADWAR S.A. ","job_title":"Projektant - Programista VHDL, C++","location":"Warszawa (Polska)","tags":["VHDL","C","GIT","FPGA"]},{"company":"Centrum e-Zdrowia","job_title":"Zastępca Kierownika Wydziału Architektury i Analizy Biznesowej","location":"Warszawa (Polska)","tags":["BPMN","UML"]},{"company":"Sieć Badawcza Łukasiewicz – Poznański Instytut Technologiczny","job_title":"Gł\xf3wny specjalista ds. projektowania i programowania system\xf3w IT","location":"Poznań (Polska)","tags":["Java","Git","GitLab"]},{"company":"ENERGA – OPERATOR S.A.","job_title":"Specjalista/Specjalista Wiodący/ Gł\xf3wny Specjalista ds. Analizy Danych","location":"Gdańsk (Polska)","tags":["SQL"]},{"company":"Deloitte Polska","job_title":"Senior Integration Developer - Cloud&Engineering","location":"Oferta w wielu lokalizacjach (5)","tags":["Python","Java","WSO2","Mulesoft","Tibco","Dell Boomi","SOAP","REST","SVN","Git","SQL","UML","BPMN"]},{"company":"Deloitte Polska","job_title":"Cloud Architect - Cloud&Engineering","location":"Oferta w wielu lokalizacjach (6)","tags":["MS Azure","AWS","GCP","CloudFormation","Terraform","Arm","Docker","Kubernetes"]},{"company":"Hitachi Energy Services Sp. z o.o. ","job_title":"Senior Quality Assurance Engineer for Digital Force","location":"Krak\xf3w (Poland)","tags":["SaaS","JMeter","AppDynamics","FitNesse","Appium","RSpec","Selenium/Webdriver","Capybara","Java","C#","Selenium","JavaScript","Perl","PHP","Shell Scripting","Python","Jira","Adobe Illustrator","Zephyr","Agile"]},{"company":"Hitachi Energy Services Sp. z o.o. ","job_title":"Internship - Software Engineer","location":"Krak\xf3w (Poland)","tags":["SQL","Agile"]},{"company":"Hitachi Energy Services Sp. z o.o. ","job_title":"IT SAP Data Manager","location":"Krak\xf3w (Poland)","tags":["SAP","SAP HANA"]},{"company":"Hitachi Energy Services Sp. z o.o. ","job_title":"IT Application Manager – Workday","location":"Krak\xf3w (Poland)","tags":["Workday"]},{"company":"WEBCON Sp. z o.o.","job_title":"Konsultant ds. Wdrożeń","location":"Krak\xf3w (Polska)","tags":["SQL"]},{"company":"Dynatrace Sp. z o.o.","job_title":"Senior JavaScript Fullstack Engineer","location":"Gdańsk (Poland)","tags":["TypeScript","Angular","Java","JavaScript"]},{"company":"Hapag-Lloyd AG","job_title":"IAM Specialist","location":"Gdańsk (Poland)","tags":["SQL"]},{"company":"Sieć Badawcza Łukasiewicz – Poznański Instytut Technologiczny","job_title":"Gł\xf3wny specjalista ds. projektowania i programowania system\xf3w IT – Full Stack Developer","location":"Poznań (Polska)","tags":["PHP","JavaScript","SQL","Elasticsearch","MongoDB","Docker"]},{"company":"EcoVadis Polska Sp. z o. o.","job_title":"Engineering Manager","location":"Warszawa (Poland)","tags":["Azure",".NET","React.js"]},{"company":"EcoVadis Polska Sp. z o. o.","job_title":"Software Engineering Technical Lead","location":"Warszawa (Poland)","tags":["Agile","Scrum","REST","SQL"]},{"company":"Hapag-Lloyd AG","job_title":"Junior Atlassian Specialist","location":"Gdańsk (Poland)","tags":["Jira Software","Jira Service Management","Confluence"]},{"company":"Sieć Badawcza Łukasiewicz – Poznański Instytut Technologiczny","job_title":"Specjalista ds. projektowania i programowania system\xf3w IT","location":"Poznań (Polska)","tags":["SQL","HTML","Docker"]},{"company":"Hapag-Lloyd AG","job_title":"System Administrator (ITSE)","location":"Gdańsk (Poland)","tags":["Red Hat","Bash","PostgreSQL","AD"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"SAP MM Consultant","location":"Multiple locations offer (3)","tags":["SAP","SAP HANA"]},{"company":"SoftServe","job_title":"Solution Architect","location":"Multiple locations offer (7)","tags":["AWS","Python","GCP","JavaScript","Java","Azure"]},{"company":"SoftServe","job_title":"Senior Big Data Engineer (Python + AWS)","location":"Multiple locations offer (8)","tags":["SQL","Python","Snowflake","Apache Airflow","Flink"]},{"company":"SoftServe","job_title":"Senior Big Data Engineer (Snowflake)","location":"Multiple locations offer (8)","tags":["SQL","Snowflake"]},{"company":"SoftServe","job_title":"Product Manager (AI/ML)","location":"Multiple locations offer (7)","tags":["SDLC","MLOps","AI"]},{"company":"SoftServe","job_title":"Azure Senior/Lead DevOps/Cloud Architect","location":"Multiple locations offer (11)","tags":["Linux","Docker","Azure"]},{"company":"SoftServe","job_title":"Senior DevOps Engineer (Kubernetes)","location":"Multiple locations offer (10)","tags":["Python","Kubernetes","Docker","Jenkins"]},{"company":"SoftServe","job_title":"Middle Golang Software Engineer","location":"Multiple locations offer (6)","tags":["Git","Linux","Spark","Kafka","Go"]},{"company":"SoftServe","job_title":"GCP Senior/Lead DevOps/Cloud Architect","location":"Multiple locations offer (11)","tags":["Linux","Docker","Jenkins","Git","Python","Kubernetes"]},{"company":"SoftServe","job_title":"Trainee Software Engineer in Test Python","location":"Multiple locations offer (7)","tags":["Python","Git","Scrum","Jira","Linux","CI/CD","Jenkins"]},{"company":"SoftServe","job_title":"SDET Unreal engine - Automation team","location":"Multiple locations offer (7)","tags":["C++"]},{"company":"SoftServe","job_title":"Remote Senior BA (Low-Code Platforms)","location":"Multiple locations offer (5)","tags":["UML","Jira","BPMN","SQL"]},{"company":"ITIS Sp. z o.o.","job_title":"Analityk Biznesowy / Biznesowo-Systemowy","location":"mazowieckie (Polska)","tags":[]},{"company":"Merit Poland Sp z o. o.","job_title":"Software System Test Developer","location":"Krak\xf3w (Poland)","tags":["C","C++"]},{"company":"Merit Poland Sp z o. o.","job_title":"Junior Software System Test Developer","location":"Krak\xf3w (Poland)","tags":["C","C++"]},{"company":"Asseco Business Solutions S.A. ","job_title":"Specjalista ds. wdrożeń ERP","location":"Oferta w wielu lokalizacjach (8)","tags":["SQL"]},{"company":"PGE Energia Ciepła S.A.","job_title":"Specjalista ds. Koordynacji Usług ICT - serwis","location":"Oferta w wielu lokalizacjach (2)","tags":["MS Office","MS Project","Jira","SAP","Webcon"]},{"company":"HITACHI VANTARA","job_title":"Data Engineer","location":"Krak\xf3w (Poland)","tags":["SQL","Oracle","PostgreSQL","Python"]},{"company":"HITACHI VANTARA","job_title":"Cloud Infrastructure Engineer","location":"Krak\xf3w (Poland)","tags":["AWS/GCP","ECS","Jenkins","GitHub","Docker"]},{"company":"CREDIT SUISSE Poland","job_title":"Security Architect Identity and Access Management","location":"Warszawa (Poland)","tags":[]},{"company":"SILENT EIGHT PTE. LTD.","job_title":"Web Developer","location":"Multiple locations offer (16)","tags":["Next.js","React.js"]},{"company":"Sii Sp. z o.o.","job_title":"Security Architect","location":"Multiple locations offer (3)","tags":["CISCO","DLP","DAM","IAM/IDM","IPS/IDS","SIEM","TCP/IP","SSL"]},{"company":"Sii Sp. z o.o.","job_title":"Desktop .NET Developer – WPF/WCF","location":"Oferta w wielu lokalizacjach (2)","tags":["C#",".NET","WPF","WCF","Git","SVN"]},{"company":"Analizy Online S.A.","job_title":"Backend Developer (.NET)","location":"Warszawa (Polska)","tags":[".NET",".NET Core","Microsoft SQL Server","PostgreSQL","Git"]},{"company":"GoWork.pl Serwis Pracy","job_title":"PHP Developer","location":"Warszawa (Polska)","tags":["PHP7+","PHPUnit","OOP"]},{"company":"T-Mobile","job_title":"Specjalista/-tka ds. Architektury System\xf3w Bezpieczeństwa","location":"Warszawa (Polska)","tags":["Forinet","F5","Cisco"]},{"company":"T-Mobile","job_title":"Frontend Developer","location":"Warszawa (Polska)","tags":["Vue.js","CSS","Git","JavaScript"]},{"company":"T-Mobile","job_title":"Inżynier/-ka Bezpieczeństwa Sieciowego","location":"Warszawa (Polska)","tags":["Fortinet","Palo Alto","Cisco","Agile"]},{"company":"T-Mobile","job_title":"Analityk/ -czka SOC-L2","location":"Warszawa (Polska)","tags":[]},{"company":"T-Mobile","job_title":"Senior FrontEnd Developer","location":"Warszawa (Polska)","tags":["DevOps","HTTP","HTML5","CSS3","JavaScript"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Cloud Service Engineer - Bosch Hybrid Cloud Platform","location":"Multiple locations offer (3)","tags":["Java","Bash","Python","Git","Jenkins","Concourse","Kubernetes","OpenShift"]},{"company":"ITligent Group Sp. z o.o.","job_title":"PHP Backend Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["PHP 7/8","OOP","MVC","Symfony 4/5","RestApi’s","MySQL","SQAP","PostgreSQL","PHPUnit","Docker","Redis","Google Cloud Platform","Git"]},{"company":"SILENT EIGHT PTE. LTD.","job_title":"Python Developer","location":"Multiple locations offer (16)","tags":["Python","Docker","Git","SQL"]},{"company":"SILENT EIGHT PTE. LTD.","job_title":"Data Engineer","location":"Multiple locations offer (16)","tags":["SQL","Workday","Anaplan","Zuora","Python"]},{"company":"Aon","job_title":"Disaster Recovery Professional","location":"Multiple locations offer (16)","tags":[]},{"company":"SILENT EIGHT PTE. LTD.","job_title":"Machine Learning Operations Engineer","location":"Multiple locations offer (16)","tags":["Python","AWS","Microsoft Azure","Google Cloud Platform"]},{"company":"Sieć Badawcza ŁUKASIEWICZ – PORT Polski Ośrodek Rozwoju Technologii","job_title":"Administrator Sieci","location":"Wrocław (Polska)","tags":["Windows","Linux","CISCO"]},{"company":"PRO MAGIS sp. z o.o.","job_title":"Tester oprogramowania","location":"Wrocław (Polska)","tags":["Git","Cucumber.js","Selenium"]},{"company":"Whoohoo Poland Sp. z o.o.","job_title":"Staż - Junior Salesforce Developer","location":"Wrocław (Polska)","tags":[]},{"company":"SIMCORP SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Software Engineer (Developer)","location":"Warszawa (Poland)","tags":["C#","SQL","CI/CD","TeamCity","Git"]},{"company":"Nexio Management Sp. z o.o.","job_title":"Analityk systemowy","location":"Oferta w wielu lokalizacjach (2)","tags":["Enterprise Architect","Jira","UML","BPMN","SoapUI","RestAPI"]},{"company":"ING Bank Śląski S.A.","job_title":"Tester automatyzujący w zespole Ferrytowym","location":"Oferta w wielu lokalizacjach (16)","tags":["Java","Selenium","SQL","Azure","Selenide","REST API"]},{"company":"ING Bank Śląski S.A.","job_title":"Wiodący Tester Automatyzujący - Tribe Aplikacji Biznesowych","location":"Oferta w wielu lokalizacjach (16)","tags":["Java","Selenium","Postman","Soap UI","REST Assured","SQL"]},{"company":"SIMCORP SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Software Engineer (QA)","location":"Warszawa (Poland)","tags":[]},{"company":"QIAGEN BUSINESS SERVICES","job_title":"IT Specialist - Connectivity and Integration","location":"Wrocław (Poland)","tags":["Java"]},{"company":"VIG Polska Sp. z o.o., Vienna Insurance Group","job_title":"Serwisant IT","location":"Warszawa (Polska)","tags":[]},{"company":"Asseco Business Solutions S.A. ","job_title":"Backend Web Developer (.Net Core/ C#)","location":"Warszawa (Polska)","tags":["T-SQL","C#"]},{"company":"Asseco Business Solutions S.A.","job_title":"Programista C#/.NET","location":"Warszawa (Polska)","tags":[".NET","C#","SQL Server"]},{"company":"Asseco Business Solutions S.A.","job_title":"Programista SQL (systemy WMS)","location":"Lublin (Polska)","tags":["T-SQL"]},{"company":"ING Bank Śląski S.A.","job_title":"Test Developer - Operation Area","location":"Multiple locations offer (16)","tags":["Java","Selenium"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"Manager - Compliance Analytics","location":"Krak\xf3w (Poland)","tags":["SQL","Python"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"Assistant Vice President - Compliance Analytics","location":"Krak\xf3w (Poland)","tags":["SQL","Python"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"Lead Assistant Vice President - Compliance Analytics","location":"Krak\xf3w (Poland)","tags":["SQL","Python"]},{"company":"Asseco Poland S.A.","job_title":"Specjalista ds. serwisu IT","location":"Warszawa (Polska)","tags":[]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Junior IT Infrastructure Specialist","location":"Ł\xf3dź (Poland)","tags":["HTML","Apache Airflow","JavaScript","Linux"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Senior Software Developer","location":"Warszawa (Poland)","tags":["Python","Perl","JavaScript"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Software Developer Service Management","location":"Warszawa (Poland)","tags":["Python","Perl","JavaScript"]},{"company":"Booksy International Sp. z o.o.","job_title":"Scrum Master","location":"Oferta w wielu lokalizacjach (16)","tags":["Agile"]},{"company":"Samsung R&D Institute Poland","job_title":"Machine Learning Platform Engineer for Recommendation Systems in AI Team","location":"Warszawa (Poland)","tags":["Python","Scala","Big Data & Cloud Technologies: PySpark, Hadoop, AWS","ML/DL frameworks: PyTorch, Pandas, SciPy ecosystem, Keras, Tensorflow","Linux with shell scripting","Code versioning and CI/CD automation e.g.: Git and GitHub Actions"]},{"company":"AstraZeneca Pharma","job_title":"Commercial Data Tooling Steward","location":"Multiple locations offer (2)","tags":[]},{"company":"PSE S.A.","job_title":"Specjalista / Specjalistka w Wydziale Teleinformatyki","location":"Warszawa (Polska)","tags":[]},{"company":"AC SOFTWARE sp. z o.o.","job_title":"Programista Android","location":"dolnośląskie (Polska)","tags":["Android","Java","SQLite","(JNI","RestAPI","Android Studio","GIT","Travis/Drone"]},{"company":"AC SOFTWARE sp. z o.o.","job_title":"Programista iOS","location":"dolnośląskie (Polska)","tags":["Objective-C","Code Data","CocoaPods","RestAPI","GIT","Travis/Drone"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"IT System Administrator – Client Management (worldwide)","location":"Multiple locations offer (3)","tags":["SQL"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"IT Monitoring System Engineer","location":"Multiple locations offer (3)","tags":["Grafana","Nagios"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"Vice President – Wholesale Impairment and Stress Testing","location":"Krak\xf3w (Poland)","tags":["SQL","SAS","Python"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"Site Reliability Manager (Wealth & Personal Banking)","location":"Krak\xf3w (Poland)","tags":["Java","Kubernetes"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Identity & Access Management Support- Reporting Specialist","location":"Multiple locations offer (3)","tags":[]},{"company":"Centrum e-Zdrowia","job_title":"Analityk Biznesowo-Systemowy w Wydziale Architektury i Analizy Biznesowej","location":"Warszawa (Polska)","tags":["SQL","Jira","Enterprise Architect"]},{"company":"ICEO LAB PL sp. z o.o.","job_title":"Head of Growth","location":"Krak\xf3w (Polska)","tags":["Jira"]},{"company":"Bank Pocztowy S.A.","job_title":"Architekt IT Cloud","location":"Oferta w wielu lokalizacjach (15)","tags":["AWS","Azure","Terraform","Ansible"]},{"company":"KIR S.A.","job_title":"Administrator Linux (Linux, serwery aplikacyjne)","location":"Warszawa (Polska)","tags":["Red Hat","JBoss","Apache Tomcat","Oracle WebLogic","Docker","Kubernetes","GitLab"]},{"company":"Bank Pocztowy S.A.","job_title":"Inżynier DevOps Cloud","location":"Oferta w wielu lokalizacjach (15)","tags":["AWS","Azure","Terraform","Ansible","Bash","Python","Git"]},{"company":"Brown Brothers Harriman","job_title":"Systems Business Analyst II","location":"Krak\xf3w (Poland)","tags":[]},{"company":"Airbus Navblue","job_title":"Mid Tester - focus on manual testing","location":"Multiple locations offer (3)","tags":["Test Cases","Gherkin","Functional Testing","Manual Testing"]},{"company":"Fenige Sp. z o.o.","job_title":"Java Developer","location":"Lublin (Polska)","tags":["Java","Spring Boot","Hibernate"]},{"company":"Airbus Navblue","job_title":"Mid Frontend Software Developer","location":"Multiple locations offer (3)","tags":["HTML5","C#"]},{"company":"KACZMARSKI GROUP","job_title":"Analityk CRM","location":"Wrocław (Polska)","tags":["SQL","Tableau"]},{"company":"ING Hubs Poland","job_title":"IT Cybersecurity Engineer","location":"Multiple locations offer (2)","tags":["Splunk"]},{"company":"Airbus Navblue","job_title":"Senior Fullstack Software Developer","location":"Multiple locations offer (3)","tags":["AWS","Automated Testing","Unit Testing","C#"]},{"company":"ITBoom Sp. z o.o.","job_title":"Tester Manualny","location":"Warszawa (Polska)","tags":[]},{"company":"CREDIT SUISSE Poland","job_title":"Service Portfolio Solution Architect","location":"Warszawa (Poland)","tags":[]},{"company":"Parasoft Polska Sp. z o. o.","job_title":"Software QA Engineer","location":"Krak\xf3w (Poland)","tags":[]},{"company":"Airbus Navblue","job_title":"Mid Software Developer in Test","location":"Multiple locations offer (3)","tags":["Design Patterns","SOLID Principles","Gherkin","Python"]},{"company":"NASK SP\xd3ŁKA AKCYJNA","job_title":"Administrator System\xf3w","location":"Warszawa (Polska)","tags":["Debian","Red Hat","Docker","DNS","Bash","Python"]},{"company":"NASK SP\xd3ŁKA AKCYJNA","job_title":"Administrator Aplikacji i Baz Danych","location":"Warszawa (Polska)","tags":["Linux","Windows Server","Microsoft SQL Server","PostgreSQL","PowerShell","Bash","Python"]},{"company":"NASK SP\xd3ŁKA AKCYJNA","job_title":"Administrator Kopii Bezpieczeństwa Środowisk Wirtualnych","location":"Warszawa (Polska)","tags":["Veeam","Networker"]},{"company":"SOMNIUS","job_title":"Mobile and Web developer","location":"Warszawa (Poland)","tags":["Java","TypeScript","Dart","Flutter"]},{"company":"IT Connect Sp. z o.o.","job_title":"Młodszy Specjalista IT","location":"Warszawa (Polska)","tags":["Eurolinux 8","CentOS"]},{"company":"IT Connect Sp. z o.o.","job_title":"Konstruktor elektronik - Programista C/C++","location":"Gdynia (Polska)","tags":["C++","C","ARM"]},{"company":"Airbus Navblue","job_title":"Senior Fullstack with C# & Data Management","location":"Multiple locations offer (3)","tags":["C#","Java","AWS","OOP","Jenkins"]},{"company":"Capgemini Polska","job_title":"Desktop Analyst/Consultant with German","location":"Multiple locations offer (3)","tags":[]},{"company":"Capgemini Polska","job_title":"Desktop Analyst/Consultant with German","location":"Oferta w wielu lokalizacjach (3)","tags":[]},{"company":"ASTEK Polska","job_title":"Test Automation Engineer","location":"Gdynia (Polska)","tags":["Java","Python",".NET","C#","Jira","Selenium","SQL","Git","GitLab"]},{"company":"SILENT EIGHT PTE. LTD.","job_title":"Senior Java Developer","location":"Multiple locations offer (16)","tags":["Java","Hibernate","SQL","JavaScript","Git","Maven","Gradle","Jenkins","JUnit","Spring Framework"]},{"company":"ING Bank Śląski S.A.","job_title":"IT Area Lead – Obszar Analizy Systemowo - Biznesowej","location":"Warszawa (Polska)","tags":["IT management"]},{"company":"StepStone Services Sp. z o.o.","job_title":"IT Researcher","location":"Warszawa (Poland)","tags":[]},{"company":"MERIXSTUDIO SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Senior Inbound Sales Representative","location":"Poznań (Poland)","tags":["Python","Agile","Scrum"]},{"company":"GOODYLABS","job_title":"Reliability Engineer (DevOps)","location":"Ł\xf3dź (Poland)","tags":["AWS","Azure","DigitalOcean","GCP","Ansible"]},{"company":"Aurelis Consulting Sp. z o.o.","job_title":"Senior Frontend Developer (Angular)","location":"Multiple locations offer (7)","tags":["Angular","JavaScript","TypeScript","Git"]},{"company":"Bank Millennium S.A.","job_title":"Tester Biznesowy","location":"Warszawa (Polska)","tags":[]},{"company":"Icotera Sp. z o.o.","job_title":"Testing and Quality Assurance Manager","location":"Szczecin (Poland)","tags":["Jira"]},{"company":"Samsung R&D Institute Poland","job_title":"Mobile Device Tester","location":"Warszawa (Poland)","tags":["Android System"]},{"company":"CreateCtrl Polska Sp. z o.o.","job_title":"C++ Developer","location":"Gliwice (Polska)","tags":["C++","MFC","Git"]},{"company":"TATA CONSULTANCY SERVICES LIMITED S.A. ODDZIAŁ W POLSCE","job_title":"German Speaking Service Desk Analyst","location":"Warszawa (Poland)","tags":[]},{"company":"Bank Pekao","job_title":"Administrator Systemu Hurtowni Danych Finansowych i Zarządczych","location":"Warszawa (Polska)","tags":["Unix"]},{"company":"Medicover","job_title":"Analityk Hurtowni Danych","location":"Warszawa (Polska)","tags":["T-SQL"]},{"company":"Capgemini Software Solutions Center","job_title":"Senior AR/VR Developer","location":"Poznań (Polska)","tags":["Unity","C#","SDK","Blender"]},{"company":"Capgemini Software Solutions Center","job_title":"AR/VR Developer","location":"Poznań (Polska)","tags":["Unity 3D","C#","SDK","Blender"]},{"company":"HARMAN ","job_title":"Senior Java SE Developer for Automotive","location":"Ł\xf3dź (Poland)","tags":["Java","Scrum"]},{"company":"HARMAN ","job_title":"Product Owner","location":"Ł\xf3dź (Poland)","tags":[]},{"company":"HARMAN ","job_title":"Scrum Master","location":"Ł\xf3dź (Poland)","tags":["Jira","Agile","Scrum"]},{"company":"HARMAN ","job_title":"Software Lead (Surround View, C++)","location":"Ł\xf3dź (Poland)","tags":[]},{"company":"HARMAN ","job_title":"Senior DevOps Engineer","location":"Ł\xf3dź (Poland)","tags":["Kubernetes","Docker","Python","Bash","AWS"]},{"company":"Icotera Sp. z o.o.","job_title":"Software Development Manager","location":"Multiple locations offer (2)","tags":["C"]},{"company":"Icotera Sp. z o.o.","job_title":"Senior Software Architect","location":"Szczecin (Poland)","tags":[]},{"company":"Samsung R&D Institute Poland","job_title":"Internship - Voice Intelligence Research Intern","location":"Warszawa (Poland)","tags":["Python"]},{"company":"Asseco Poland S.A.","job_title":"Analityk Biznesowo-Systemowy (obszar bankowości)","location":"Oferta w wielu lokalizacjach (16)","tags":["Enterprise Architect"]},{"company":"Booksy International Sp. z o.o.","job_title":"Senior Android Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["Android Framework","Java","Kotlin","Git","Jetpack Compose","MVVM","JUnit","Espresso"]},{"company":"Connectis_","job_title":"Cloud Solution Architect","location":"Warszawa (Poland)","tags":["AWS","Azure","Microservices"]},{"company":"Connectis_","job_title":"BI Consultant (Azure)","location":"Warszawa (Poland)","tags":["SQL","Databricks","Spark Azure Data Factory","Azure Synapse/DW","Azure Analysis Services","Power BI"]},{"company":"Deloitte CE BSC Rzesz\xf3w","job_title":"Senior Analyst Automation & Reporting Team","location":"Rzesz\xf3w (Poland)","tags":["VBA","Python"]},{"company":"PGE Obr\xf3t S.A.","job_title":"Specjalista w Zespole ds Optymalizacji i Raportowania","location":"Rzesz\xf3w (Polska)","tags":["SQL","MSSQL Server","C","C++","C#","JavaScript","TypeScript","jQuery","Lua","Python","PHP","GitHub","GitLab","Bitbucket","Fork","CLI","HTML","CSS"]},{"company":"ex7 Sp. z o.o.","job_title":"Specjalista ds. Wdrożeń","location":"Skawina (Polska)","tags":[]},{"company":"ex7 Sp. z o.o.","job_title":".NET C# Developer","location":"Skawina (Polska)","tags":[".NET","C#","SQL","T-SQL","ASO.NET","JavaScript","EntityFramework","ASP.NET"]},{"company":"ex7 Sp. z o.o.","job_title":"Helpdesk IT Specialist - Pomoc techniczna","location":"Skawina (Polska)","tags":[]},{"company":"Apator Rector Sp. z o.o.","job_title":"Programista NET (Desktop)","location":"Oferta w wielu lokalizacjach (3)","tags":[".NET",".NET Core","ASP.NET MVC","JavaScript","jQuery","TypeScript","NHibernate","PostgreSQL","SVN","Git"]},{"company":"Apator Rector Sp. z o.o.","job_title":"Programista NET (Web)","location":"Oferta w wielu lokalizacjach (3)","tags":[".NET",".NET Core","ASP.NET MVC","JavaScript","jQuery","TypeScript","NHibernate","PostgreSQL","SVN","Git"]},{"company":"APATOR S.A.","job_title":"Programista C ++","location":"Oferta w wielu lokalizacjach (3)","tags":["C++","C#","C","Python"]},{"company":"APATOR S.A.","job_title":"Lidera Zespołu IT","location":"Oferta w wielu lokalizacjach (3)","tags":["Jira","Confluence"]},{"company":"APATOR S.A.","job_title":"Programista Java","location":"Oferta w wielu lokalizacjach (3)","tags":["Java","Hibernate","Spring","SQL","Git"]},{"company":"Media Expert","job_title":".Net Fullstack Developer - Regular","location":"Warszawa (Polska)","tags":["Azure DevOps","Scrum","Code Review","Design Patterns","VS Code","VS 2022","Git","Figma"]},{"company":"Amnis Code","job_title":"Programista .NET","location":"Krak\xf3w (Polska)","tags":[".NET",".NET Core","T-SQL","PostgreSQL"]},{"company":"Revolut LTD","job_title":"Senior System Analyst","location":"Multiple locations offer (23)","tags":["Jira","Confluence"]},{"company":"Asseco Poland S.A.","job_title":"Project Manager IT","location":"Oferta w wielu lokalizacjach (2)","tags":[]},{"company":"Citi Handlowy","job_title":"Analityk ds. Infrastruktury Teleinformatycznej","location":"Warszawa (Polska)","tags":["Windows Server"]},{"company":"Rockwell Automation","job_title":"Senior JAVA Developer","location":"Katowice (Poland)","tags":["Jira","Confluence","Java","SQL","Oracle","GitLab","Maven","Jenkins"]},{"company":"Brown Brothers Harriman","job_title":"IT Internship – Business Analyst","location":"Krak\xf3w (Poland)","tags":[]},{"company":"Aon","job_title":"Financial Analyst (FP&A)","location":"Multiple locations offer (3)","tags":[]},{"company":"CREDIT SUISSE Poland","job_title":"CISO Threat Analysis Expert","location":"Wrocław (Poland)","tags":[]},{"company":"CREDIT SUISSE Poland","job_title":"Security Project Manager","location":"Warszawa (Poland)","tags":[]},{"company":"Asseco Poland S.A.","job_title":"Młodszy Administrator Systemowy","location":"Wrocław (Polska)","tags":[]},{"company":"Amelco UK Ltd","job_title":"Junior IT Support","location":"Warszawa (Poland)","tags":[]},{"company":"e-point SA","job_title":"Młodszy Administrator Sieci i System\xf3w","location":"Warszawa (Polska)","tags":["LAN","WAN"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(Model Risk Management) – AVP in Credit Risk","location":"Krak\xf3w (Poland)","tags":["Python","SAS","SQL","MATLAB","R"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(Model Risk Management) - Assistant manager in Climate Risk","location":"Krak\xf3w (Poland)","tags":["Python","SAS","MATLAB","R","SQL","C++"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(CTO ES - Distributed Compute) Senior Citrix Technical Analyst","location":"Krak\xf3w (Poland)","tags":["Citrix XenApp","XenDesktop"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(CTO ES DigiBA) Data Analyst","location":"Krak\xf3w (Poland)","tags":["Citrix XenApp"]},{"company":"Rockwell Automation","job_title":"Junior Software Test Engineer- JAVA","location":"Katowice (Poland)","tags":["Jira","Confluence","Java","SQL","Oracle","GitLab","Maven","Jenkins"]},{"company":"Rockwell Automation","job_title":"Product Security Researcher","location":"Katowice (Poland)","tags":["Python"]},{"company":"Rockwell Automation","job_title":"Software Test Engineer - JAVA","location":"Katowice (Poland)","tags":["Agile","Scrum"]},{"company":"ABB Business Services","job_title":"Młodszy Specjalista ds. Cyberbezpieczeństwa","location":"Warszawa (Polska)","tags":[]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(Cybersecurity) Senior Penetration Testing Coordinator","location":"Krak\xf3w (Poland)","tags":[]},{"company":"iDeals","job_title":"Senior DevOps Engineer","location":"Krak\xf3w (Poland)","tags":["AWS","Terraform","Grafana","Kubernetes","Elasticsearch"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(Cybersecurity) Devops Engineer","location":"Krak\xf3w (Poland)","tags":["DevOps","Agile","Automation","Kubernetes","Docker","Hashicorp Vault","Jenkins","Terraform","Ansible Tower","Puppet","Control-M","GIT Cloud platforms","Alibaba","AWS","Azure","GCP"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(Cybersecurity) Business Information Risk Officer","location":"Krak\xf3w (Poland)","tags":[]},{"company":"RTB House","job_title":"Solutions Engineer Team Leader PHP/TypeScript - Tech Support","location":"Oferta w wielu lokalizacjach (16)","tags":["PHP","Node.js","TypeScript","SQL","Git"]},{"company":"XTB S.A.","job_title":"Scrum Master","location":"Warszawa (Polska)","tags":["Scrum"]},{"company":"Lufthansa Global Business Services (LGBS)","job_title":"Customer Service Advisor with German","location":"Krak\xf3w (Poland)","tags":[]},{"company":"Raiffeisen Bank International AG (Sp\xf3łka Akcyjna) Oddział w Polsce","job_title":"Scrum Master","location":"Warszawa (Polska)","tags":["Jira","Confluence"]},{"company":"PSE S.A.","job_title":"Administrator / Administratorka Linux","location":"Konstancin-Jeziorna (Polska)","tags":[]},{"company":"Matic SA","job_title":"Senior Back - End Developer","location":"Warszawa (Poland)","tags":["PostgreSQL","MS SQL","TypeScript","SCSS","Spring","Java 8+"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"Windows Security Engineer","location":"Krak\xf3w (Poland)","tags":["Splunk","VBA","PowerShell","Jira","Confluence"]},{"company":"ZF Group","job_title":"Stażysta ze znajomością Power BI (dział Administracji HR)","location":"Oferta w wielu lokalizacjach (3)","tags":[]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Quality Engineer (ISO 9001)","location":"Multiple locations offer (3)","tags":[]},{"company":"Generali","job_title":"Tester Automatyzujący w Departamencie System\xf3w IT - MID","location":"Warszawa (Polska)","tags":["Java","Selenium"]},{"company":"PSE S.A.","job_title":"Administrator / Administratorka system\xf3w komunikacji głosowej","location":"Konstancin-Jeziorna (Polska)","tags":[]},{"company":"WASKO S.A.","job_title":"Digital Media Team Leader","location":"Gliwice (Polska)","tags":["Jira","ATL"]},{"company":"Objectivity sp. z o.o.","job_title":"Junior IT Asset Management Specialist","location":"Wrocław (Poland)","tags":[]},{"company":"XTB S.A.","job_title":"Senior Java Developer","location":"Warszawa (Polska)","tags":["Java"]},{"company":"XTB S.A.","job_title":"CI/CD Engineer","location":"Warszawa (Polska)","tags":["Jenkins","GitLab","Artifactory"]},{"company":"XTB S.A.","job_title":"Java Developer","location":"Warszawa (Polska)","tags":["Java"]},{"company":"Rockwell Automation","job_title":"Senior Software Engineer – Web Fullstack Developer","location":"Katowice (Poland)","tags":[".NET","C#","Angular","HTML","JavaScript","CSS"]},{"company":"HARMAN ","job_title":"Autosar Security Engineer","location":"Ł\xf3dź (Poland)","tags":["Autosar","C"]},{"company":"ASTEK Polska","job_title":"Senior Scrum Master","location":"Warszawa (Poland)","tags":[]},{"company":"ASTEK Polska","job_title":"Analityk Biznesowy","location":"Krak\xf3w (Polska)","tags":[]},{"company":"ASTEK Polska","job_title":"Python Developer","location":"Gdynia (Polska)","tags":["Python","Docker","Git","REST API","Linux","SAP HANA"]},{"company":"UNITY-T GROUP sp. z o.o. sp.k.","job_title":"Java Developer (systemy zarządzania ERP/CRM/workflow)","location":"Oferta w wielu lokalizacjach (43)","tags":["Java","JavaFX","PostgreSQL","Spring Boot","Spring Framework","REST","Git","IntelliJ","Gradle"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"Senior Analyst – Wholesale / Impairment Reporting","location":"Krak\xf3w (Poland)","tags":["SQL","SAS","Python"]},{"company":"Hitachi Energy Services Sp. z o.o. ","job_title":"SAP Consultant for Plant Maintenance Module with Data Objects","location":"Krak\xf3w (Poland)","tags":["SAP"]},{"company":"Craftware Sp. z o.o.","job_title":"Fullstack Developer (Java, Angular)","location":"Warszawa (Polska)","tags":["Java","Angular","JavaScript","Spring Boot","JPA","Hibernate"]},{"company":"mBank","job_title":"Administratorka/Administrator aplikacji (Linux)","location":"Warszawa (Polska)","tags":["Linux","Kubernetes","Ansible","Docker","Nagios","Zabbix","Splunk"]},{"company":"XTB S.A.","job_title":"Administrator system\xf3w Linux","location":"Warszawa (Polska)","tags":["Linux"]},{"company":"MPWiK S.A.","job_title":"Administrator systemu ERP w obszarze IT","location":"Wrocław (Polska)","tags":["SQL","Oracle"]},{"company":"XTB S.A.","job_title":"Administrator Aplikacji/DevOps","location":"Warszawa (Polska)","tags":["Python","Bash","Git","PostgreSQL","MongoDB","Zabbix","Nagios","Grafana","Kubernetes","Ansible"]},{"company":"eService Sp. z o.o.","job_title":"IT Systems Analyst","location":"Warszawa (Polska)","tags":["Oracle","ETL","OLAP","UML","SQL"]},{"company":"PwC","job_title":"Cloud Architect / Cloud Engineer","location":"Warszawa (Polska)","tags":["Azure","Docker","Kubernetes","OpenShift","Python","PowerShell","Bash"]},{"company":"Objectivity sp. z o.o.","job_title":"Software Engineer SQL","location":"Multiple locations offer (16)","tags":["SQL"]},{"company":"PwC","job_title":"Cloud Data Architect / Cloud Data Engineer","location":"Warszawa (Polska)","tags":["Azure","AWS","Google Cloud Platform","ETL","Data Lake","SQL"]},{"company":"Kemira Gdańsk Sp. z o.o.","job_title":"IT Specialist, FICO","location":"Gdańsk (Poland)","tags":["SAP","FICO"]},{"company":"EG Poland","job_title":"Młodszy Programista .NET","location":"Warszawa (Polska)","tags":["ASP.NET Core MVC","Angular","Entity Framework","Visual Studio","Git"]},{"company":"SOMNIUS","job_title":"Senior Software Engineer","location":"Warszawa (Poland)","tags":["Java","Python","TypeScript","Dart"]},{"company":"MOLECULE ONE sp. z o.o.","job_title":"JavaScript Engineer","location":"Warszawa (Poland)","tags":["TypeScript","JavaScript","React.js","Node.js"]},{"company":"Europejski Fundusz Leasingowy","job_title":"Audytor Wewnętrzny ds. Analizy Danych","location":"Wrocław (Polska)","tags":[]},{"company":"QLOC S.A.","job_title":"Administrator IT","location":"Oferta w wielu lokalizacjach (2)","tags":[]},{"company":"Huuuge Games Sp. z o.o.","job_title":"IT Support Intern","location":"Warszawa (Poland)","tags":["Jira","Confluence"]},{"company":"ING Bank Śląski S.A.","job_title":"Administrator systemu Aldon","location":"Warszawa (Polska)","tags":["AS400"]},{"company":"Asseco Business Solutions S.A.","job_title":"Android Developer","location":"Warszawa (Polska)","tags":["Android","Java","SQL"]},{"company":"Sollers Consulting","job_title":"Data Engineer","location":"Multiple locations offer (9)","tags":["OOP","DWH","SQL","Data modeling","ETL","English"]},{"company":"Sollers Consulting","job_title":"Data Architect","location":"Multiple locations offer (9)","tags":["mssql","Spark","SQL","Mongo DB","ETL","RDBMS","Data Engineering","English","Airflow","Kafka","OLTP","OLAP"]},{"company":"mBank","job_title":"Scrum Master","location":"Warszawa (Polska)","tags":["Jira","Confluence"]},{"company":"squareTec sp. j.","job_title":"Kierownik Projektu","location":"Bydgoszcz (Polska)","tags":[]},{"company":"ONWELO S.A.","job_title":"Product Owner (Machine Learning)","location":"Oferta w wielu lokalizacjach (3)","tags":[]},{"company":"squareTec sp. j.","job_title":"Specjalista ds. bezpieczeństwa IT","location":"Bydgoszcz (Polska)","tags":[]},{"company":"Sii Sp. z o.o.","job_title":"Tester Manualny","location":"Warszawa (Polska)","tags":["Postman","API"]},{"company":"Sii Sp. z o.o.","job_title":"Java Developer with AWS – banking industry","location":"Multiple locations offer (3)","tags":["Amazon AWS","Java","Spring","Oracle","PostgreSQL","MySQL","Git","Terrafrom","Kubernetes","Jenkins","Agile"]},{"company":"ING Lease","job_title":"Specialist - Process Automation Developer","location":"Oferta w wielu lokalizacjach (2)","tags":["Oracle","MS SQL","C#","HTML","SQL"]},{"company":"Billennium S.A.","job_title":"Scrum Master","location":"Oferta w wielu lokalizacjach (16)","tags":[]},{"company":"Connectis_","job_title":"Full-stack Developer (Java + React)","location":"Warszawa (Polska)","tags":["Java","Spring","React","SQL"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"SAP Technical Development Manager","location":"Multiple locations offer (3)","tags":["SAP","SAP HANA"]},{"company":" ALLIANCE AUTOMOTIVE SYSTEMS SP. Z O.O. ","job_title":"Full Stack Developer (Java, Spring)","location":"Poznań (Polska)","tags":["Java","Spring Framework","Hibernate","SQL","SOA/REST","GIT","JUnit/Mockito","PrimeFaces","Angular"]},{"company":"squareTec sp. j.","job_title":"Specjalista ds. sieci","location":"Bydgoszcz (Polska)","tags":[]},{"company":"squareTec sp. j.","job_title":"Inżynier systemowy DEV/OPS","location":"Bydgoszcz (Polska)","tags":[]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"Senior Product Designer (Wealth & Personal Banking)","location":"Krak\xf3w (Poland)","tags":[]},{"company":"DSV ISS ","job_title":"Manual Tester","location":"Warszawa (Poland)","tags":["SCRUM"]},{"company":"KIR S.A.","job_title":"Gł\xf3wny Specjalista / - stka ds. oceny i analizy ryzyka oraz bezpieczeństwa informacji","location":"Warszawa (Polska)","tags":["MS Teams","MS Office"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(GDT) Hadoop Administrator","location":"Krak\xf3w (Poland)","tags":["Safe","Scrum","Kanban","Lean"]},{"company":"KIR S.A.","job_title":"Scrum Master/Scrum Masterka","location":"Warszawa (Polska)","tags":["Jira","Teams","Mural","Agile"]},{"company":"Medicover","job_title":"Starszy Analityk Systemowy IT/Senior IT Systems Analyst","location":"Warszawa (Polska)","tags":["BPMN","UML"]},{"company":"Cyclad","job_title":".NET Developer","location":"Multiple locations offer (16)","tags":[".NET","C#","SQL","Entity Framework"]},{"company":"T-Mobile","job_title":"Analityk/-czka ds. System\xf3w Rozliczeniowych i Raportowania","location":"Warszawa (Polska)","tags":[]},{"company":"DOZ S.A.","job_title":"Specjalista ds. Helpdesk","location":"Warszawa (Polska)","tags":["SQL"]},{"company":"TRUSTED SOFTWARE SERVICES sp. z o.o.","job_title":"Senior Backend Developer (Java)","location":"Oferta w wielu lokalizacjach (16)","tags":["Java","Microservice Architecture","Spring Cloud","JUnit","BDD","REST API","SQL","Cloud"]},{"company":"TRUSTED SOFTWARE SERVICES sp. z o.o.","job_title":"React Native","location":"Oferta w wielu lokalizacjach (16)","tags":["React.js","JavaScript","Redux","Git","GitLab"]},{"company":"PIT-RADWAR S.A. ","job_title":"Administrator aplikacji","location":"Warszawa (Polska)","tags":["Windows Server","IIS","Tomcat","Apache"]},{"company":"PIT-RADWAR S.A. ","job_title":"Specjalista ds. aplikacji i baz danych","location":"Warszawa (Polska)","tags":["C#","T-SQL"]},{"company":"CodeTwo","job_title":"IT Customer Success Specialist (język angielski)","location":"Oferta w wielu lokalizacjach (2)","tags":[]},{"company":"Wieża s.c. Romuald Żarnecki, Grzegorz Wieliczko","job_title":"Informatyk Działu Helpdesk","location":"Warszawa (Polska)","tags":[]},{"company":"Centralny Ośrodek Informatyki ","job_title":"Analityk biznesowy - mObywatel/ Europejski portfel cyfrowy","location":"Warszawa (Polska)","tags":[]},{"company":"AXA Avanssur SA Oddział II w Polsce","job_title":"Praktykant w zespole programist\xf3w","location":"Warszawa (Polska)","tags":[".NET MVC","C#","JavaScript","CSS",".NET","Angular"]},{"company":"Asseco Poland S.A.","job_title":"Programista Delphi","location":"Oferta w wielu lokalizacjach (15)","tags":["SQL","PL/SQL","Delphi"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Accelerated Virtual Desktop (AVD) Consultant - Coordinator","location":"Warszawa (Poland)","tags":[]},{"company":"Brown Brothers Harriman","job_title":"Application Support Specialist","location":"Krak\xf3w (Poland)","tags":["SQL"]},{"company":"Sollers Consulting","job_title":"Snowflake Engineer","location":"Multiple locations offer (9)","tags":["Snowflake","Scala","DWH","Data lake","English","Python","SQL","ETL"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(DAO) Data and Reporting Tech Lead","location":"Krak\xf3w (Poland)","tags":["TSQL"]},{"company":"Gdańskie Wydawnictwo Oświatowe","job_title":"Programista PHP","location":"Gdańsk (Polska)","tags":["PHP","Symfony","SQL"]},{"company":"Gdańskie Wydawnictwo Oświatowe","job_title":"Programista Java Script (Angular)","location":"Gdańsk (Polska)","tags":["JavaScript","TypeScript","HTML","CSS","Git","Angular"]},{"company":"Citi Handlowy","job_title":"Analityk Danych","location":"Oferta w wielu lokalizacjach (2)","tags":["SQL"]},{"company":"Biedronka (Jeronimo Martins Polska S.A.)","job_title":"Audytor IT","location":"Warszawa (Polska)","tags":[]},{"company":"PHOENIX SYSTEMS SP Z O O","job_title":"Programista C (Kernel)","location":"Warszawa (Polska)","tags":["C"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Big Data Engineer (eBike)","location":"Warszawa (Poland)","tags":["Python","Hadoop","Kafka","Git","Jenkins","SQL","Azure DevOps"]},{"company":"Connectis_","job_title":"Android Developer","location":"Warszawa (Polska)","tags":["Android","Java","Kotlin"]},{"company":"Connectis_","job_title":"Technical Product Owner/ Business Analyst","location":"Warszawa (Polska)","tags":["Jira","Confluence"]},{"company":"Connectis_","job_title":"Frontend Developer (Angular)","location":"Warszawa (Polska)","tags":["Angular","JavaScript","TypeScript","RxJS"]},{"company":"PwC","job_title":"Business Analyst SAP S4/HANA","location":"Multiple locations offer (2)","tags":["SAP","SAP HANA","SAP MM"]},{"company":"Bank Millennium S.A.","job_title":"Manager Projekt\xf3w IT","location":"Warszawa (Polska)","tags":[]},{"company":"CREDIT SUISSE Poland","job_title":"Business Analyst Lead","location":"Wrocław (Poland)","tags":[]},{"company":"PwC","job_title":"Cloud Architect - Middle East Projects","location":"Multiple locations offer (16)","tags":["DevOps","Azure","AWS","Google Cloud Platform"]},{"company":"AllSTARSIT Poland","job_title":"Windows Automation Developer (Python or C#)","location":"Warszawa (Poland)","tags":["Python","C#","Windows Server"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"Traded Risk Quant - Python – Internship","location":"Krak\xf3w (Poland)","tags":["Python"]},{"company":"Sygnity S.A.","job_title":"Frontend Developer","location":"Oferta w wielu lokalizacjach (3)","tags":["Angular","React Native","React.js"]},{"company":"Suntech S.A.","job_title":"Młodszy programista .NET (Junior .NET software developer)","location":"Warszawa (Polska)","tags":["SCRUM","Agile","C#","Angular","Windows Forms","WPF","Xamarin","WCF","NT Service","Web Service","REST Service",".NET","Kubernetes"]},{"company":"GlobalLogic Poland","job_title":"Software Tester","location":"Multiple locations offer (3)","tags":["Java","Python","C#","C++"]},{"company":"WASKO S.A.","job_title":"Java Developer","location":"Oferta w wielu lokalizacjach (3)","tags":["Java","springboot","Node.js","Jenkins","JIRA","Docker","Sass"]},{"company":"Comp S.A. Oddział Nowy Sącz - NOVITUS Centrum Technologii Sprzedaży","job_title":"Pracownik Wsparcia Technicznego i Helpdesk","location":"Nowy Sącz (Polska)","tags":["Android"]},{"company":"KMD Poland Sp. z o.o.","job_title":"IT Service Desk Specialist","location":"Warszawa (Poland)","tags":[]},{"company":"T-Mobile","job_title":"Business Systems Analyst","location":"Warszawa (Poland)","tags":["Jira","Confluence"]},{"company":"Simplicity Recruitment","job_title":"Tester Manualny","location":"Oferta w wielu lokalizacjach (3)","tags":["Postman","Jmeter"]},{"company":"BIOGEN POLAND","job_title":"Senior Infrastructure Engineer (Office 365)","location":"Warszawa (Poland)","tags":["Office 365","PowerShell","Active Directory"]},{"company":"ABB Business Services","job_title":"Global Early Talent Program (GETP) – Information Systems","location":"Krak\xf3w (Poland)","tags":[]},{"company":"ALIOR BANK","job_title":"Tester - Specjalista ds. system\xf3w kredytowych","location":"Warszawa (Polska)","tags":[]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Microsoft Power Platform Developer","location":"Warszawa (Poland)","tags":[]},{"company":"ING Hubs Poland","job_title":"Product Owner (Data & Tools for Risk Modelling)","location":"Warszawa (Poland)","tags":[]},{"company":"ABB Business Services","job_title":"Global Early Talent Program (GETP) – Information Systems","location":"Krak\xf3w (Poland)","tags":[]},{"company":"StepStone Services Sp. z o.o.","job_title":"Data Governance Analyst","location":"Warszawa (Poland)","tags":["Software Analysis","Business Analysis","Logical Data Modelling"]},{"company":"CGI Information Systems and Management Consultants (Polska) Sp. z o.o.","job_title":"Application Support Specialist - Application Administrator","location":"Multiple locations offer (2)","tags":["Windows Server","Linux","SQL"]},{"company":"CGI Information Systems and Management Consultants (Polska) Sp. z o.o.","job_title":"Cloud BI/ETL/DevOps Consultant","location":"Warszawa (Poland)","tags":["ETL/ELT","WhereScape","Azure Data Factory","Azure SQL","Synapse Analytics","Azure DevOps","GIT"]},{"company":"Rockwell Automation","job_title":"Release Train Engineer","location":"Katowice (Poland)","tags":[]},{"company":"PEX PharmaSequence Sp. z o.o.","job_title":"Programista (Python)","location":"Warszawa (Polska)","tags":["Python","PostgreSQL","GitLab"]},{"company":"CREDIT SUISSE Poland","job_title":"Red Teaming – Operator (Experienced)","location":"Warszawa (Poland)","tags":["C","C++"]},{"company":"CGI Information Systems and Management Consultants (Polska) Sp. z o.o.","job_title":"Automatic Tester","location":"Warszawa (Polska)","tags":["UML","Java SE","HTML","Cypress","JavaScript","CSS","JDBC","Oracle","MySQL","MSSQL","Python","C#","SOA","SoapUI","SVN","Git","Selenium WebDriver","Watij","Microfocus (HP) UFT","Microfocus (HP) LoadRunner","JMeter","Microfocus (HP) ALM (Quality Center)","Enterprise Architect","Jira"]},{"company":"CO.BRICK SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Senior Angular Developer","location":"Multiple locations offer (16)","tags":["Angular","Node.js"]},{"company":"CO.BRICK SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Devops Engineer","location":"Multiple locations offer (16)","tags":["CI/CD"]},{"company":"CO.BRICK SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"PHP Developer","location":"Multiple locations offer (16)","tags":["PHP","SOLID","Symfony","MySQL","SQLite","Docker"]},{"company":"Nationale-Nederlanden","job_title":"Administrator Aplikacji","location":"Warszawa (Polska)","tags":["Windows Server","T-SQL","Red Hat","Linux"]},{"company":"NASK SP\xd3ŁKA AKCYJNA","job_title":"Administrator / Wdrożeniowiec Rozwiązań Microsoft","location":"Warszawa (Polska)","tags":["Windows Server","Active Directory","PowerShell"]},{"company":"PANDORA Jewelry Shared Services Sp. z o.o.","job_title":"Performance Management Analyst","location":"Warszawa (Poland)","tags":[]},{"company":"Samsung R&D Institute Poland","job_title":"Software Test Quality Engineer with JavaScript","location":"Warszawa (Poland)","tags":["Linux based environment","Modern JavaScript (vanilla)","Python","Node.js"]},{"company":"ZF Group","job_title":"Software Integrator (Python)","location":"Ł\xf3dź (Polska)","tags":["Jenkins","Azure DevOps","Python","Bash","Shell","Git"]},{"company":"Symfonia sp. z o.o.","job_title":"Junior .NET Developer","location":"Oferta w wielu lokalizacjach (2)","tags":["C#",".NET","SQL"]},{"company":"ASTEK Polska","job_title":"IT Tester","location":"Gdynia (Polska)","tags":["Netreveal 7.7","XML","Linux","Oracle PL/SQL"]},{"company":"ADVA Optical Networking","job_title":"IT Administrator","location":"Gdynia (Poland)","tags":["Linux","Unix","Windows Server"]},{"company":"Rockwell Automation","job_title":"Software Engineer","location":"Katowice (Poland)","tags":["TypeScript","Node.js","Angular","JavaScript","LevelDB","GraphQL","Azure"]},{"company":"WASKO S.A.","job_title":"Specjalista ds. Serwisu","location":"Oferta w wielu lokalizacjach (3)","tags":[]},{"company":"WASKO S.A.","job_title":"Architekt IT","location":"Oferta w wielu lokalizacjach (3)","tags":["Jira","JavaFX","JavaEE","ReactJS","AngularJS","BPMN","SQL","UML"]},{"company":"WASKO S.A.","job_title":"Angular Middle Frontend Developer","location":"Oferta w wielu lokalizacjach (3)","tags":["Angular","JavaScript","CSS","HTML5","responsive design"]},{"company":"WASKO S.A.","job_title":"Inżynier IT - systemy sieciowe","location":"Gliwice (Polska)","tags":["LAN/WAN/WLAN","JUNIPER","CISCO","ALCATEL","RUCKUS"]},{"company":"WASKO S.A.","job_title":"Ekspert IT","location":"Gliwice (Polska)","tags":["TCP/IP","MPLS - NOKIA","JUNIPER","CISCO","ALCATEL","RUCKUS","SECURITY BY PALO ALTO","FORTINET"]},{"company":"Branchspace sp. z o. o.","job_title":"Software Development Manager","location":"Krak\xf3w (Poland)","tags":["Java","React.js","React Native","TypeScript","SQL","noSQL","AWS","Spring Boot"]},{"company":"Branchspace sp. z o. o.","job_title":"Front-End Tech Lead","location":"Krak\xf3w (Poland)","tags":["JavaScript","TypeScript","React.js","React Native","Redux"]},{"company":"Branchspace sp. z o. o.","job_title":"Front-End Software Engineer","location":"Krak\xf3w (Poland)","tags":["React.js","Redux","JavaScript","HTML","CSS"]},{"company":"INFOKLINIKA S.A.","job_title":"Projektant/Programista PHP","location":"Warszawa (Polska)","tags":["SQL","HTML","CSS","SCSS","JavaScript","TypeScript"]},{"company":"Capgemini Software Solutions Center","job_title":"Business Architect","location":"Gdańsk (Polska)","tags":["SQL"]},{"company":"Centralny Ośrodek Informatyki ","job_title":"Analityk Biznesowo – Systemowy","location":"Oferta w wielu lokalizacjach (3)","tags":["UML","BPMN"]},{"company":"3DCONNEXION POLSKA sp. z o.o.","job_title":"Software Engineer – Apple macOS (m/f)","location":"Wrocław (Poland)","tags":["Objective-C","Swift","MacOS","C","C++","Xcode"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"SAP Document and Data Archiving Consultant","location":"Multiple locations offer (3)","tags":["SAP HANA","SAP"]},{"company":"PLAY (P4 Sp. z o.o.)","job_title":"Specjalista ds. Rozwoju Urządzeń Abonenckich – Smartfony, Tablety, Urządzenia Wearables","location":"Warszawa (Polska)","tags":["Linux","iOS","Android"]},{"company":"DSV ISS ","job_title":"EDI Support Specialist","location":"Warszawa (Poland)","tags":["SQL","Active Directory","EDIFACT","biztalk"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"DevOps engineer (Application Administrator)","location":"Multiple locations offer (3)","tags":["Azure DevOps","Docker"]},{"company":"All for One Poland","job_title":"Młodszy Konsultant IT - SAP Basis","location":"Złotniki (pow. poznański) (Polska)","tags":["SAP"]},{"company":"PLAY (P4 Sp. z o.o.)","job_title":"Specjalista ds. Rozwoju Platform Telewizyjnych i Wideo","location":"Warszawa (Polska)","tags":["Kubernetes","OpenStack","Linux"]},{"company":"ABB Business Services","job_title":".NET/ C++ Developer","location":"Krak\xf3w (Poland)","tags":[".NET","C++",".NET Core","C#","DevOps","Docker","Git"]},{"company":"Hitachi Energy Services Sp. z o.o. ","job_title":"Software Development Engineer in Test","location":"Krak\xf3w (Poland)","tags":["Azure DevOps","Jenkins","TeamCity","C#","NUnit","MS Test","xUnit","SQL","Git","PowerShell","batch","Bash"]},{"company":"T-Mobile","job_title":"Specjalista/-tka ds. System\xf3w Mobilnej Sieci Stałej","location":"Warszawa (Polska)","tags":["UNIX"]},{"company":"T-Mobile","job_title":"Specjalista/-tka ds. Sygnalizacji i Baz Danych","location":"Warszawa (Polska)","tags":[]},{"company":"PLAY (P4 Sp. z o.o.)","job_title":"Starszy Inżynier ds. Rozwoju Urządzeń Abonenckich CPE","location":"Warszawa (Polska)","tags":["Linux"]},{"company":"PLAY (P4 Sp. z o.o.)","job_title":"Inżynier ds. Rozwoju Urządzeń Abonenckich – CPE LTE","location":"Warszawa (Polska)","tags":["Linux"]},{"company":"DSV ISS ","job_title":"Junior EDI Support Specialist","location":"Warszawa (Poland)","tags":["SQL","EDIFACT","Unix","Linux"]},{"company":"ABB Business Services","job_title":".NET Developer","location":"Krak\xf3w (Poland)","tags":[".NET","C++",".NET Core","C#","DevOps","Docker","Git"]},{"company":"FIBRAIN Sp. z o.o.","job_title":"Inżynier Sieciowy","location":"Zaczernie (pow. rzeszowski) (Polska)","tags":["CCNA"]},{"company":"Cyfrowy Polsat S.A.","job_title":"Programista Python i C/C++","location":"Warszawa (Polska)","tags":["Python","C","C++","Git"]},{"company":"Samsung R&D Institute Poland","job_title":"Internship – C/C++ Intern in Mobile Security Team","location":"Warszawa (Poland)","tags":["C","C++","Python","Linux","Android"]},{"company":"SALESmanago","job_title":"Software Engineer in Test","location":"Krak\xf3w (Poland)","tags":["Python","C#","Java"]},{"company":"DSV ISS ","job_title":"Developer .NET","location":"Warszawa (Poland)","tags":["NET Framework",".NET Core","MS SQL","C#","T-SQL","Visual Studio","Server Management Studio","Git"]},{"company":"DSV ISS ","job_title":"Developer PL/SQL","location":"Warszawa (Poland)","tags":["Oracle","PL/SQL","Visual Studio","Git"]},{"company":"CloudiMed Sp. z o.o.","job_title":"Java Developer","location":"Warszawa (Polska)","tags":["SQL"]},{"company":"OKNOPLAST","job_title":"Specjalista ds. Wdrożeń IT","location":"Ochman\xf3w (pow. wielicki) (Polska)","tags":["MS SQL","My SQL"]},{"company":"Flextronics International Poland Sp. z o.o.","job_title":"Full Stack Java Developer","location":"Tczew (Poland)","tags":["Java","Spring Framework","Bootstrap","JavaScript","Vue.js","Thymeleaf","HighCharts","MySQL","MongoDB","Snowflake","Maven","Jenkins","Flyway","Jira","SonarQube","Git","Elastic Stack","ActiveMQ"]},{"company":"CloudiMed Sp. z o.o.","job_title":"Java Senior Developer","location":"Warszawa (Polska)","tags":["SQL","Hibernate","Spring Boot"]},{"company":"Samsung R&D Institute Poland","job_title":"Robot Perception Developer in Artificial Intelligence Team","location":"Warszawa (Poland)","tags":["C++","Python","OpenGL","Vulkan","OpenCV","ML Frameworks: PyTorch / Keras / Tensorflow","Robots systems: ROSx"]},{"company":"PwC","job_title":"Security Incident Response Senior Consultant","location":"Oferta w wielu lokalizacjach (3)","tags":[]},{"company":"Samsung R&D Institute Poland","job_title":"Intelligent Gaze Tracking Developer in Artificial Intelligence Team","location":"Warszawa (Poland)","tags":["C","C++","Linux","Embedded MCU","eye tracking technology"]},{"company":"Samsung R&D Institute Poland","job_title":"Projection Mapping Developer in Artificial Intelligence Team","location":"Warszawa (Poland)","tags":["C++","Vulkan","OpenCV","Linux","Windows"]},{"company":"Samsung R&D Institute Poland","job_title":"Product Manager for Business Intelligence Project in AI Team","location":"Warszawa (Poland)","tags":["POP","Balsamiq","Tableau","Superset","Google Data Studio","Python","PySpark","AWS","GCP"]},{"company":"Santander Bank Polska","job_title":"Specjalista / Specjalistka biznesowej analizy danych","location":"Oferta w wielu lokalizacjach (2)","tags":["SQL","Python"]},{"company":"Krajowy Rejestr Dług\xf3w","job_title":"Konsultant ERP - COMARCH XL","location":"Wrocław (Polska)","tags":["SQL"]},{"company":"Samsung R&D Institute Poland","job_title":"DevOps Engineer","location":"Wrocław (Poland)","tags":["CI/CD","Python","Bash","Git","Docker","Kubernetes"]},{"company":"CodeTwo","job_title":"Software Project Manager - Product Owner","location":"Oferta w wielu lokalizacjach (2)","tags":["Azure","Azure DevOps"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"SAP SD Development Consultant","location":"Warszawa (Poland)","tags":["SAP"]},{"company":"CodeTwo","job_title":"Software Quality Assurance Engineer - Software Tester","location":"Oferta w wielu lokalizacjach (2)","tags":["Azure","SQL","Visual Studio"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Senior Consultant ServiceNow Integration","location":"Warszawa (Poland)","tags":["SAP"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Full Stack Software Developer (SDV project)","location":"Warszawa (Poland)","tags":["Java",".NET","Python","Node.js","Go","Spring Boot","Git","Kubernetes","SQL","MongoDB","HTML","CSS","JavaScript","Jira","Jenkins","Confluence","Selenium","AWS"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Senior Consultant ServiceNow Configuration","location":"Multiple locations offer (3)","tags":[]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Mobile App Architect","location":"Warszawa (Poland)","tags":["Azure DevOps","Core Graphics","SVN","Git"]},{"company":"OPTOPOL Technology Sp. z o.o. - Bogdani","job_title":"Software Developer C++","location":"Zawiercie (Polska)","tags":["C++","Visual Studio"]},{"company":"C&F","job_title":"UX Designer","location":"Warszawa (Poland)","tags":["Figma","AdobeXD","UX processes"]},{"company":"OPTOPOL Technology Sp. z o.o. - Bogdani","job_title":"Software Developer C++","location":"Poznań (Polska)","tags":["C++","Visual Studio"]},{"company":"OPTOPOL Technology Sp. z o.o. - Bogdani","job_title":"Software Developer","location":"Poznań (Polska)","tags":["C++","Python"]},{"company":"Samsung R&D Institute Poland","job_title":"Spatial AI Developer in Artificial Intelligence Team","location":"Warszawa (Poland)","tags":["C","C++","Computer Vision","ML"]},{"company":"Samsung R&D Institute Poland","job_title":"Computer Vision Intern in Artificial Intelligence Team","location":"Warszawa (Poland)","tags":["C","C++"]},{"company":"Rockwell Automation","job_title":"Software Test Engineer","location":"Katowice (Poland)","tags":["Python","VB.NET","C#","Test automation","security protocol"]},{"company":"Brown Brothers Harriman","job_title":"Product Support Senior Specialist","location":"Krak\xf3w (Poland)","tags":[]},{"company":"Rockwell Automation","job_title":"Hardware Engineer","location":"Katowice (Poland)","tags":["PCB","hardware","electrical","embedded","timing analysis","Mentor Graphics"]},{"company":"Brown Brothers Harriman","job_title":"IT Project Manager (Custody Technologies)","location":"Krak\xf3w (Poland)","tags":[]},{"company":"Performance Media P.S.A.","job_title":"Junior DevOps Engineer","location":"Oferta w wielu lokalizacjach (2)","tags":["Linux","Docker"]},{"company":"ZF Group","job_title":"Programista C/C++ (systemy wbudowane)","location":"Ł\xf3dź (Polska)","tags":["C","C++"]},{"company":"Rockwell Automation","job_title":"Senior Test Engineer","location":"Katowice (Poland)","tags":["C++","C#","Python","PowerShell"]},{"company":"Objectivity sp. z o.o.","job_title":"Senior React Developer","location":"Multiple locations offer (16)","tags":["React.js","JavaScript","TypeScript","Git","HTML"]},{"company":"Comarch ","job_title":"Programista Liferay","location":"Oferta w wielu lokalizacjach (4)","tags":["SQL","Git"]},{"company":"Comarch ","job_title":"Administrator webMethods","location":"Oferta w wielu lokalizacjach (5)","tags":["SQL"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Hadoop Platform Owner","location":"Warszawa (Poland)","tags":["Kafka","Python","Hadoop"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Agile Coach - Agile Master for the global Enterprise Social Network Team","location":"Multiple locations offer (3)","tags":["Azure DevOps"]},{"company":"Objectivity sp. z o.o.","job_title":"Data Scientist Lead","location":"Multiple locations offer (16)","tags":["Python","SQL"]},{"company":"Sii Sp. z o.o.","job_title":"C++ Developer","location":"Oferta w wielu lokalizacjach (13)","tags":["C++","Qt","Linux"]},{"company":"DPD Polska","job_title":"Administrator Linux/Devops","location":"Warszawa (Polska)","tags":["Apache Tomcat","Java","Linux"]},{"company":"Billennium S.A.","job_title":"DevOps Engineer","location":"Oferta w wielu lokalizacjach (18)","tags":["Jenkins","Kubernetes","Terraform","Ansible","Docker"]},{"company":"Simplicity Recruitment","job_title":"Senior Data Engineer","location":"Multiple locations offer (3)","tags":["Kubernetes","Docker","SQL","Python"]},{"company":"Comarch ","job_title":"Security Champion","location":"Oferta w wielu lokalizacjach (3)","tags":[]},{"company":"Parasoft Polska Sp. z o. o.","job_title":"QA Automation Engineer","location":"Krak\xf3w (Poland)","tags":[]},{"company":"Sii Sp. z o.o.","job_title":"Młodszy Specjalista ds. Infrastruktury IT","location":"Jawor (Polska)","tags":["Active Directory","Windows","Office 365","Azure AD","LAN"]},{"company":"Sii Sp. z o.o.","job_title":".NET Developer – ePayment FinTech","location":"Multiple locations offer (8)","tags":["Visual Studio 2019","Rider","Confluence","ReSharper","NCrunch","Azure DevOps","Terraform","Puppet","Octopus","ASP.NET MVC"]},{"company":"All for One Poland","job_title":"Młodszy Programista SAP ABAP PP (Planowanie Produkcji)","location":"Oferta w wielu lokalizacjach (2)","tags":[]},{"company":"ITBoom Sp. z o.o.","job_title":"Senior Full Stack Developer (.Net/Angular)","location":"Warszawa (Polska)","tags":[".NET","Angular","RxJs","WordPress","TypeScript","HTML","CSS","JavaScript"]},{"company":"CO.BRICK SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Data Engineer","location":"Multiple locations offer (16)","tags":["Microsoft Azure","Microsoft SQL Server"]},{"company":"MakoLab SA","job_title":"Tester oprogramowania","location":"Oferta w wielu lokalizacjach (2)","tags":[]},{"company":"Agencja Rozwoju Przemysłu S.A.","job_title":"Specjalista ds. IT - Helpdesk","location":"Warszawa (Polska)","tags":[]},{"company":"SMARTBEES SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"IT Project Manager","location":"Oferta w wielu lokalizacjach (3)","tags":["Agile"]},{"company":"Bank Pekao","job_title":"Koordynator Sekcji System\xf3w Informacyjnych Ryzyka","location":"Warszawa (Polska)","tags":["T-SQL","MS SQL Server","SSIS","SSRS","SSAS","PowerBI","Oracle"]},{"company":"Sii Sp. z o.o.","job_title":"PKI Engineer","location":"Multiple locations offer (5)","tags":["Linux","Windows"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Group Manager IT Regional Network Engineer","location":"Multiple locations offer (3)","tags":[]},{"company":"SEB","job_title":"Data Analyst","location":"Warszawa (Poland)","tags":["SQL","Tableau","Python"]},{"company":"PROVIDENT Polska","job_title":"Junior Data Scientist & Data Scientist","location":"Warszawa (Polska)","tags":["R","Python"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(Cybersecurity) Threat and Controls Assessment Senior Analyst","location":"Krak\xf3w (Poland)","tags":[]},{"company":"PLAY (P4 Sp. z o.o.)","job_title":"Starszy Specjalista ds. Analiz Danych","location":"Warszawa (Polska)","tags":["SQL"]},{"company":"SYZYGY","job_title":"UI Designer/ka","location":"Warszawa (Polska)","tags":["Figma"]},{"company":"Bank Millennium S.A.","job_title":"Animation / Interaction / UI Designer","location":"Warszawa (Polska)","tags":["Adobe After Effects","Photoshop","Illustrator","XD","Animate"]},{"company":"Nokia","job_title":"Scrum Master","location":"Multiple locations offer (16)","tags":[]},{"company":"Deloitte CE BSC Rzesz\xf3w","job_title":"IT Linux Application Administrator","location":"Multiple locations offer (16)","tags":["Red Hat","Nginx","JBoss","Apache","PL/SQL","MySQL","PostgreSQL","Docker","Jenkins","Microsoft Azure"]},{"company":"Atos Poland Global Services Sp. z o.o.","job_title":"Junior IT Support Specialist with German","location":"Multiple locations offer (16)","tags":[]},{"company":"GFT Poland","job_title":"Contractors Process Manager","location":"Multiple locations offer (4)","tags":["SAP 4HANA"]},{"company":"e-point SA","job_title":"Regular Java Developer","location":"Warszawa (Polska)","tags":["JavaScript","MS SQL","Jira"]},{"company":"Robert Bosch sp. z o.o. Oddział w Mirkowie","job_title":"R&D Test Engineer","location":"Mirk\xf3w (pow. wrocławski) (Poland)","tags":[]},{"company":"PKP Energetyka S.A.","job_title":"Architektka / Architekt IT (Solutions Architect)","location":"Warszawa (Polska)","tags":["Archimate","UML","BPMN","TOGAF","SAP"]},{"company":"Be in iT","job_title":"Cloud Security Architect","location":"Oferta w wielu lokalizacjach (16)","tags":["Microsoft Azure","AWS","Google Cloud Platform"]},{"company":"Simplicity Recruitment","job_title":"Senior Data DevOps Engineer","location":"Multiple locations offer (3)","tags":["Kubernetes","Docker","DevOps","Git"]},{"company":"WEBCON Sp. z o.o.","job_title":"Relationship Manager (Systemy IT)","location":"Krak\xf3w (Polska)","tags":[]},{"company":"Europejski Fundusz Leasingowy","job_title":"Specjalista/ka ds. Bezpieczeństwa Informacji","location":"Wrocław (Polska)","tags":[]},{"company":"Printbox Sp. z o.o.","job_title":"IT Project Manager","location":"Krak\xf3w (Polska)","tags":[]},{"company":"ITBoom Sp. z o.o.","job_title":"Senior WordPress Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["WordPress","Node.js","React.js","Aurelia","AWS","TestCafe","Docker","Jira","Confluence","GitLab"]},{"company":"ITBoom Sp. z o.o.","job_title":"Senior .Net Developer","location":"Oferta w wielu lokalizacjach (16)","tags":[".NET","C#","Azure DevOps","SQL"]},{"company":"ITBoom Sp. z o.o.","job_title":"Senior Java Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["Java","AWS","Google Cloud Platform","Datadog","Kibana","Grafana","Prometheus","Terraform","Docker","Kubernetes"]},{"company":"ERGO Technology & Services S.A.","job_title":"Front-end Developer","location":"Multiple locations offer (16)","tags":["HTML","CSS","JavaScript","Angular","TypeScript"]},{"company":"Bank Pekao","job_title":"Ekspert - Architekt/Deweloper SAS","location":"Warszawa (Polska)","tags":["ETL","SAS"]},{"company":"Bank Pekao","job_title":"Deweloper Power BI","location":"Warszawa (Polska)","tags":["Git","Bitbucket","Jira","Tabular Editor","DAX Studio","MS SQL Server","SSRS","Power BI Desktop","Visual Studio (Data Tools)","DAX"]},{"company":"PIT-RADWAR S.A. ","job_title":"Młodszy programista (systemy wbudowane)","location":"Warszawa (Polska)","tags":["C"]},{"company":"Rockwell Automation","job_title":"Product Marketing Specjalist - Software","location":"Katowice (Poland)","tags":[]},{"company":"LeanCode sp. z o.o.","job_title":"Junior QA Automation Engineer","location":"Masovian (Poland)","tags":["Android","iOS","Flutter"]},{"company":"CREDIT SUISSE Poland","job_title":"Cloud Cybersecurity Risk Expert","location":"Wrocław (Poland)","tags":[]},{"company":"Rockwell Automation","job_title":"Senior Test Engineer","location":"Katowice (Poland)","tags":["C++","C#"]},{"company":"Santander Bank Polska","job_title":"IT System Administrator","location":"Wrocław (Polska)","tags":["PostgreSQL","Oracle","MongoDB","DB2","Jenkins","Git","Chef","Ansible"]},{"company":"Onninen Sp. z o. o.","job_title":"Specjalista Aplikacji Biznesowych w zespole Wsparcia Aplikacji IT","location":"Teolin (pow. ł\xf3dzki wschodni) (Polska)","tags":["SAP"]},{"company":"Onninen Sp. z o. o.","job_title":"Kierownik Zespołu Aplikacji IT","location":"Teolin (pow. ł\xf3dzki wschodni) (Polska)","tags":[]},{"company":"Rockwell Automation","job_title":"Senior Software Engineer - Fullstack Developer","location":"Katowice (Poland)","tags":[".NET","C#","Web API","Angular","HTML5","JavaScript","CSS"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Senior SAP Basis Administrator - Technical Consultant","location":"Multiple locations offer (3)","tags":["SAP","SAP HANA","Oracle"]},{"company":"eSky.pl S.A.","job_title":"Scrum Product Owner","location":"Oferta w wielu lokalizacjach (16)","tags":["jira"]},{"company":"Compensa Towarzystwo Ubezpieczeń na Życie S.A. Vienna Insurance Group","job_title":"Analityk systemowy","location":"Oferta w wielu lokalizacjach (3)","tags":["BPMN","UML"]},{"company":"Cyfrowy Polsat S.A.","job_title":"Programista System\xf3w Wbudowanych","location":"Wrocław (Polska)","tags":["C","C++"]},{"company":"NATEK POLAND","job_title":"Lead Azure (.NET) Developer","location":"Warszawa (Polska)","tags":["C#",".NET","ASP.NET"]},{"company":"Santander Bank Polska","job_title":"Android developer","location":"Oferta w wielu lokalizacjach (3)","tags":["Android"]},{"company":"ITBoom Sp. z o.o.","job_title":"Senior Angular Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["Angular","TypeScript","HTML","CSS","JavaScript"]},{"company":"Atos Poland Global Services Sp. z o.o.","job_title":"Critical Incident Manager","location":"Multiple locations offer (16)","tags":[]},{"company":"DSV ISS","job_title":"Junior IT Specialist","location":"Warszawa (Poland)","tags":["MSSQL query syntax"]},{"company":"Santander Bank Polska","job_title":"Chapter Leader - Android developer","location":"Oferta w wielu lokalizacjach (3)","tags":["Android"]},{"company":"CENTRUM MEDYCZNE LUXMED sp. z o.o.","job_title":"Mid Full Stack PHP Developer","location":"Lublin (Polska)","tags":["PHP 7+","jQuery","Boostrap","GIT","Symfony"]},{"company":"IBIF.PL KOWALSKI PAWEŁCZAK S.K.A.","job_title":"Młodszy specjalista SEO","location":"Lublin (Polska)","tags":["HTML","CSS","Google Search Console","Google Keyword Planner","Ahrefs","Google Analytics"]},{"company":"Asseco Business Solutions S.A.","job_title":"Tester manualny (moduł kadrowo-płacowy)","location":"Warszawa (Polska)","tags":["SQL","MS SQL"]},{"company":"Asseco Business Solutions S.A. ","job_title":"Młodszy Menadżer Projektu (wdrożenia ERP, obszar HR)","location":"Ł\xf3dź (Polska)","tags":[]},{"company":"Cyclad","job_title":"Java Developer","location":"Multiple locations offer (16)","tags":["Java","Spring Boot","Docker","Kubernetes","GitHub","Jenkins","restful APIs"]},{"company":"Asseco Business Solutions S.A.","job_title":"Programista .NET/.NET Core","location":"Oferta w wielu lokalizacjach (2)","tags":[".NET",".NET Core","Kubernetes"]},{"company":"Asseco Business Solutions S.A. ","job_title":"Młodszy programista C#","location":"Lublin (Polska)","tags":["C#",".Net","Ms SQL"]},{"company":"Craftware Sp. z o.o.","job_title":"Analityk biznesowo-systemowy","location":"Warszawa (Polska)","tags":[]},{"company":"Raben Management Services ","job_title":"PL/SQL Developer","location":"Robakowo (pow. poznański) (Polska)","tags":["PL/SQL"]},{"company":"CREDIT SUISSE Poland","job_title":"Threat Hunting Analyst","location":"Warszawa (Poland)","tags":[]},{"company":"Schenker Technology Center Warsaw Sp. z o.o.","job_title":"Software Engineer Intern","location":"Warszawa (Poland)","tags":[]},{"company":"Ringier Axel Springer Polska Sp. z o.o.","job_title":"JavaScript Engineer","location":"Oferta w wielu lokalizacjach (2)","tags":["Node.js","JavaScript","TypeScript","SQL"]},{"company":"HCL Poland","job_title":"Technical Support Agent with Polish & English","location":"Krak\xf3w (Poland)","tags":[]},{"company":"ALIOR BANK","job_title":"Automation Test Specialist","location":"Oferta w wielu lokalizacjach (3)","tags":["JSON","XML","SOAP"]},{"company":"Nokia","job_title":"BI Developer / DB Developer","location":"Multiple locations offer (16)","tags":["T-SQL"]},{"company":"Opal Transfer","job_title":"Full Stack .NET Lead Developer","location":"Multiple locations offer (17)","tags":["C#",".NET","Entity Framework","NHibernate","HTTP","API","SOAP","RESTful","Git","CI/CD"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Senior Backend Developer","location":"Warszawa (Poland)","tags":["Jira","Azure DevOps","Java","Spring Boot","Chef","Puppet","Docker","Kubernetes","Jenkins","SQL"]},{"company":"Raben Management Services ","job_title":"Administrator System\xf3w Serwerowych (Central IT Department)","location":"Robakowo (pow. poznański) (Polska)","tags":["Windows Server","Red Hat","Linux","Exchange","Veeam"]},{"company":"ING Bank Śląski S.A.","job_title":"Disaster Recovery Manager w Obszarze IT Continuity Management","location":"Katowice (Polska)","tags":["Oracle","MS SQL"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"IT Consultant","location":"Multiple locations offer (3)","tags":[]},{"company":"Bank Millennium S.A.","job_title":"Specjalista ds. Wsp\xf3łpracy z Dostawcami IT","location":"Warszawa (Polska)","tags":[]},{"company":"DOZ S.A.","job_title":"Mobile Flutter Developer","location":"Warszawa (Polska)","tags":["Flutter","Dart"]},{"company":"Goldman Sachs Poland Services Sp. z o.o.","job_title":"Internal Audit - Global Markets Operations Engineering - Vice President","location":"Warszawa (Poland)","tags":[]},{"company":"CREDIT SUISSE Poland","job_title":"Senior Java Software Developer (VP)","location":"Multiple locations offer (2)","tags":["Kubernetes","Git","Jenkins","Maven","Java","Kafka","JavaScript"]},{"company":"Sii Sp. z o.o.","job_title":"Delivery Manager – Embedded Software Delivery in Automotive","location":"Multiple locations offer (17)","tags":[]},{"company":"CREDIT SUISSE Poland","job_title":"Java Software Developer (AVP)","location":"Multiple locations offer (2)","tags":["Kubernetes","Git","Jenkins","Maven","Java","Kafka","JavaScript"]},{"company":"Lufthansa Systems","job_title":"Junior Full Stack Developer","location":"Gdańsk (Poland)","tags":["Java","Spring Boot","Angular","SQL","Git","Gradle"]},{"company":"Medicover","job_title":"DevOps Engineer","location":"Warszawa (Polska)","tags":["Azure DevOps","Kubernetes","Docker","Git","Elasticsearch","Python","Bash"]},{"company":"Goldman Sachs Poland Services Sp. z o.o.","job_title":"Internal Audit - Analytics & Reporting - Associate","location":"Warszawa (Poland)","tags":[]},{"company":"PIT-RADWAR S.A. ","job_title":"Projektant Układ\xf3w Cyfrowych","location":"Warszawa (Polska)","tags":["C","C++","C#","VHDL"]},{"company":"Goldman Sachs Poland Services Sp. z o.o.","job_title":"Internal Audit - Model Risk Audit - Analyst / Associate","location":"Warszawa (Poland)","tags":[]},{"company":"BMS sp. z o.o.","job_title":"Programista Java","location":"Oferta w wielu lokalizacjach (16)","tags":["Java","SQL","Linux"]},{"company":"Goldman Sachs Poland Services Sp. z o.o.","job_title":"Internal Audit - Technology Audit - Associate","location":"Warszawa (Poland)","tags":[]},{"company":"Egnyte Poland","job_title":"Senior Program Manager","location":"Multiple locations offer (16)","tags":["Agile","Experience in Program Management","Ability to understand technical problems"]},{"company":"Egnyte Poland","job_title":"Software Engineer - C++","location":"Poznań (Poland)","tags":["C++"]},{"company":"Egnyte Poland","job_title":"Senior Software Engineer - C++","location":"Poznań (Poland)","tags":["C++","REST API","Git"]},{"company":"Egnyte Poland","job_title":"Senior Program Manager","location":"Poznań (Poland)","tags":["Agile"]},{"company":"Egnyte Poland","job_title":"Senior Software Engineer - Java","location":"Poznań (Poland)","tags":["Java","Spring Framework","JUnit","Tomcat","SQL","RabbitMQ"]},{"company":"Egnyte Poland","job_title":"Senior Frontend Engineer","location":"Poznań (Poland)","tags":["JavaScript","React.js","webpack"]},{"company":"Better Software Group S. A.","job_title":"Senior React Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["React","JavaScript","TypeScript"]},{"company":"Better Software Group S. A.","job_title":"Angular Developer","location":"Wrocław (Polska)","tags":["Angular"]},{"company":"Better Software Group S. A.","job_title":"React Native Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["JavaScript","React","React Native"]},{"company":"Better Software Group S. A.","job_title":"Java Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["Java","AWS","SQL","NoSQL","CI/CD","Maven"]},{"company":"Motorola Solutions","job_title":"RPA Developer","location":"Krak\xf3w (Poland)","tags":["SAP","SQL"]},{"company":"PSE S.A.","job_title":"Specjalista / Specjalistka ds. sieci IP","location":"Konstancin-Jeziorna (Polska)","tags":[]},{"company":"Cyclad","job_title":"Senior Linux Administrator","location":"Katowice (Poland)","tags":["Ansible","Docker","Kubernetes"]},{"company":"KACZMARSKI GROUP","job_title":"Programista SQL","location":"Wrocław (Polska)","tags":["SQL","Git"]},{"company":"Sii Sp. z o.o.","job_title":"Junior Project Manager","location":"Częstochowa (Polska)","tags":[]},{"company":"Currenda Sp. z o. o.","job_title":"Programista .NET","location":"Sopot (Polska)","tags":["Git","PostgreSQL",".NET",".NET Web API","XML","ASP.NET MVC","C#","SQL"]},{"company":"Rossmann SDP","job_title":"Młodszy Specjalista ds. Budowania i Automatyzacji Proces\xf3w","location":"Ł\xf3dź (Polska)","tags":["JavaScript"]},{"company":"Cyclad","job_title":"Service Desk with French","location":"Lublin (Polska)","tags":[]},{"company":"APPLOVER Sp. z o.o.","job_title":"IT Business Analyst","location":"Multiple locations offer (16)","tags":[]},{"company":"KOTRAK S.A.","job_title":"Specjalista ds. wdrożeń księgowości","location":"Oferta w wielu lokalizacjach (4)","tags":[]},{"company":"Polkomtel Sp. z o.o.","job_title":"Specjalista ds. Bezpieczeństwa Teleinformatycznego","location":"Warszawa (Polska)","tags":[]},{"company":"Atos Poland Global Services Sp. z o.o.","job_title":"Windows System Engineer","location":"Multiple locations offer (16)","tags":[]},{"company":"Atos Poland Global Services Sp. z o.o.","job_title":"Wireless Network Engineer","location":"Multiple locations offer (16)","tags":[]},{"company":"Stokrotka Sp. z o.o.","job_title":"Programista C + +","location":"Lublin (Polska)","tags":["C++","Bash"]},{"company":"Branchspace sp. z o. o.","job_title":"Java Developer","location":"Krak\xf3w (Poland)","tags":["Java","Spring Framework","MongoDB","REST","JUnit"]},{"company":"ALGOMINE","job_title":"PL/SQL Developer","location":"Warszawa (Polska)","tags":["Oracle","SQL"]},{"company":"Atos Poland Global Services Sp. z o.o.","job_title":"Senior Project Manager with French","location":"Multiple locations offer (16)","tags":[]},{"company":"IT Connect Sp. z o.o.","job_title":"Analityk Customer Intelligence","location":"Warszawa (Polska)","tags":["SQL","SAS"]},{"company":"IT Connect Sp. z o.o.","job_title":"Modelarz SAS","location":"Warszawa (Polska)","tags":["SAS"]},{"company":"SK hi-tech battery materials Poland Sp. z o.o.","job_title":"Specjalista ds. IT","location":"Dąbrowa G\xf3rnicza (Polska)","tags":[]},{"company":"IT Connect Sp. z o.o.","job_title":"Analityk & Developer SAS","location":"Warszawa (Polska)","tags":["SAS","Viya"]},{"company":"Cyclad","job_title":"Automation Tester","location":"Multiple locations offer (16)","tags":["Jenkins","Docker","Robot Framework","Pandas","Jira"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"Websphere Administrator","location":"Krak\xf3w (Poland)","tags":["Apache","Tomcat","Red Hat"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"Linux and Integration Software Engineer","location":"Krak\xf3w (Poland)","tags":["Oracle","SQL","Jira","Confluence","XML","Bash"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"Production Support Specialist","location":"Krak\xf3w (Poland)","tags":["Oracle","SQL","Bash","Python"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"Performance Test Engineer","location":"Krak\xf3w (Poland)","tags":["Oracle","SQL","Bash","Python"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"IT Security Architect","location":"Krak\xf3w (Poland)","tags":[]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"IT PMO Associate Manager with French","location":"Krak\xf3w (Poland)","tags":[]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"Dynamics 365 Functional Consultant","location":"Krak\xf3w (Poland)","tags":[]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"System & Business Analyst","location":"Krak\xf3w (Poland)","tags":["SQL"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"Azure DevOps Engineer","location":"Krak\xf3w (Poland)","tags":["Azure","Azure DevOps","AppCenter","SonarCube"]},{"company":"Asseco Poland S.A.","job_title":"Programista Java","location":"Oferta w wielu lokalizacjach (16)","tags":["Java","SQL","Spring Framework"]},{"company":"Atos Poland Global Services Sp. z o.o.","job_title":"IT Project Manager","location":"Multiple locations offer (16)","tags":[]},{"company":"Atos Poland Global Services Sp. z o.o.","job_title":"Service Delivery Manager with German","location":"Multiple locations offer (16)","tags":[]},{"company":"EPAM Systems (Poland) sp. z o.o.","job_title":"Senior - Lead Test Automation Engineer with Java","location":"Multiple locations offer (16)","tags":["Java","Selenium"]},{"company":"EPAM Systems (Poland) sp. z o.o.","job_title":"Lead Azure Developer","location":"Multiple locations offer (16)","tags":["C#",".NET","Docker","Kubernetes"]},{"company":"EPAM Systems (Poland) sp. z o.o.","job_title":"Azure Cloud Lead System Engineer","location":"Multiple locations offer (16)","tags":["Azure DevOps","Windows Server","SQL","Active Directory","VMware"]},{"company":"EPAM Systems (Poland) sp. z o.o.","job_title":"AWS Cloud Lead System Engineer","location":"Multiple locations offer (16)","tags":["Linux","Bash","AWS"]},{"company":"EPAM Systems (Poland) sp. z o.o.","job_title":"Senior Azure Developer","location":"Multiple locations offer (16)","tags":["C#",".NET","Python"]},{"company":"EPAM Systems (Poland) sp. z o.o.","job_title":"Senior Data Engineer","location":"Multiple locations offer (16)","tags":["AWS","SQL","Python","Kafka"]},{"company":"Nest Bank S.A.","job_title":"Specjalista/tka ds. Analiz Sprzedaży","location":"Oferta w wielu lokalizacjach (2)","tags":["SQL"]},{"company":"Stokrotka Sp. z o.o.","job_title":"Java Backend Developer","location":"Lublin (Polska)","tags":["Java","SQL"]},{"company":"ITCARD S.A.","job_title":"Specjalista ds. Integracji System\xf3w POS","location":"Warszawa (Polska)","tags":["Systemy kasowe"]},{"company":"ING Bank Śląski S.A.","job_title":"DevOps Engineer","location":"Warszawa (Polska)","tags":["Red Hat OS"]},{"company":"DPD Polska","job_title":"Pracownik Wsparcia Działu Helpdesk","location":"Warszawa (Polska)","tags":["Active Directory"]},{"company":"Atos Poland Global Services Sp. z o.o.","job_title":"SQL Database Administrator","location":"Multiple locations offer (16)","tags":["SQL","PowerShell"]},{"company":"Atos Poland Global Services Sp. z o.o.","job_title":"French speaking Junior Engineer","location":"Multiple locations offer (16)","tags":[]},{"company":"Atos Poland Global Services Sp. z o.o.","job_title":"Trainee in IT support with German","location":"Multiple locations offer (16)","tags":[]},{"company":"SOFTWARELY SP. Z O.O.","job_title":"Android Developer","location":"Oferta w wielu lokalizacjach (3)","tags":["Android","Kotlin","Java","Gradle","Git"]},{"company":"ING Bank Śląski S.A.","job_title":"Expert DevOps Engineer","location":"Warszawa (Polska)","tags":["RedHat OS","RedHat Core OS","Ansible","Salt Stack","Satellite","Bash","Python"]},{"company":"PKP Energetyka S.A.","job_title":"Ekspertka/Ekspert IT – Administracja Bazami Danych ORACLE","location":"Warszawa (Polska)","tags":["Linux","Unix","Oracle"]},{"company":"summ-it s.a.","job_title":"Fullstack .NET Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["C#",".NET","CSS","XHTML","Oracle DB","Entity Framework","CQRS","JavaScript","TypeScript","Microsoft SQL Server"]},{"company":"Etteplan Poland Sp. z o.o.","job_title":"IT Project Manager","location":"Oferta w wielu lokalizacjach (4)","tags":[]},{"company":"Primaris Services ","job_title":"Test Automation Engineer","location":"Oferta w wielu lokalizacjach (16)","tags":["Cucumber.js","JUnit","Git","Java","Spring Boot","Maven","Jira","Selenium","Cypress"]},{"company":"Primaris Services ","job_title":"IT Business and System Analyst","location":"Oferta w wielu lokalizacjach (16)","tags":["UML","Enterprise Architect"]},{"company":"Primaris Services ","job_title":"Senior FullStack .Net Developer","location":"Oferta w wielu lokalizacjach (16)","tags":[".NET","Angular","Oracle","RabbitMQ","Azure","Jenkins"]},{"company":"Primaris Services ","job_title":"Junior FullStack .Net Developer","location":"Oferta w wielu lokalizacjach (16)","tags":[".NET Core","Angular","Microsoft SQL Server","CI/CD"]},{"company":"Nationale-Nederlanden Usługi Finansowe Sp. z o.o.","job_title":"Inżynier Cyberbezpieczeństwa","location":"Warszawa (Polska)","tags":["Windows Server","Azure DevOps","Linux"]},{"company":"Primaris Services ","job_title":"Senior Java Developer","location":"Warszawa (Polska)","tags":["Java","Spring Boot","Docker","Hibernate","Maven","Angular"]},{"company":"Elavon Financial Services","job_title":".NET Developer","location":"Warszawa (Polska)","tags":[".NET","C#","ASP.NET MVC","JavaScript","SQL"]},{"company":"Grinn Sp. z o.o.","job_title":"Embedded Software Developer","location":"Oferta w wielu lokalizacjach (2)","tags":["Linux","C","Python","Git"]},{"company":"ASTEK Polska","job_title":"Junior IT Project Manager","location":"Warszawa (Polska)","tags":[]},{"company":"NASK","job_title":"Lead Java Developer","location":"Warszawa (Polska)","tags":["Java","Spring framework","Ansible","Docker","Kubernetes","Angular","Git","GitLab","IntelliJ","Jenkins","Sonar","MongoDb","MySQL","Elastic Search","Kafka","JMQ","ESB","REST"]},{"company":"ABB Sp. z o.o.","job_title":"Backend Software Engineer - Internship","location":"Krak\xf3w (Poland)","tags":[".NET",".NET Core","C#","Git"]},{"company":"QIAGEN BUSINESS SERVICES","job_title":"Application Security & SDLC Specialist","location":"Wrocław (Poland)","tags":["Java","C#","C++"]},{"company":"IT Connect Sp. z o.o.","job_title":"Specjalista Helpdesk - Administrator IT","location":"Ł\xf3dź (Polska)","tags":["Office 365"]},{"company":"Rockwell Automation","job_title":"DevOps Engineer","location":"Katowice (Polska)","tags":["DevOps","Python","Azure","PowerShell"]},{"company":"ZF Group","job_title":"Specjalista System\xf3w MES / SCADA","location":"Gliwice (Polska)","tags":[]},{"company":"Rockwell Automation","job_title":"R&D Embedded Software Engineer Intern","location":"Katowice (Polska)","tags":["C++","C","Git","SVN","Firmware","Embedded"]},{"company":"LSI Software S.A.","job_title":"Konsultant/ka ds. Wdrożeń Oprogramowania","location":"Oferta w wielu lokalizacjach (3)","tags":["SQL"]},{"company":"TRUSTED SOFTWARE SERVICES sp. z o.o.","job_title":"Fullstack Developer (Java + Angular)","location":"Oferta w wielu lokalizacjach (16)","tags":["Java","Spring Boot","Angular","PostgreSQL","Hibernate"]},{"company":"TRUSTED SOFTWARE SERVICES sp. z o.o.","job_title":"Angular Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["Angular","TypeScript","JavaScript","HTML","CSS","Git"]},{"company":"TRUSTED SOFTWARE SERVICES sp. z o.o.","job_title":"Java Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["Java","Spring Boot","Microservices","Hibernate","Solid","SQL"]},{"company":"TRUSTED SOFTWARE SERVICES sp. z o.o.","job_title":"Software Architect (Java)","location":"Oferta w wielu lokalizacjach (16)","tags":["Java","Kafka","Spring Boot","Docker","MongoDB","Scrum","Google Cloud Platform","Microservices"]},{"company":"ABB Sp. z o.o.","job_title":"Specjalista ds. Cyberbezpieczeństwa","location":"Wrocław (Polska)","tags":["Active Directory"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"Senior Creative Technologist (Wealth & Personal Banking IT)","location":"Krak\xf3w (Poland)","tags":["React","Angular","Vue.js","API","iOS","Android"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"Global Head of GPB & Wealth Distributed Computing (Wealth & Personal Banking IT)","location":"Krak\xf3w (Poland)","tags":["Unix"]},{"company":"TRUSTED SOFTWARE SERVICES sp. z o.o.","job_title":"Fullstack Developer (.NET + Angular)","location":"Oferta w wielu lokalizacjach (16)","tags":[".NET","Angular","JavaScript","TypeScript","CSS","Azure","SQL Server"]},{"company":"Circdata Polska Sp. z o. o.","job_title":"Senior front-end Developer (React)","location":"Krak\xf3w (Poland)","tags":["React.js","TypeScript","JavaScript","HTML","CSS","Rest API"]},{"company":"Circdata Polska Sp. z o. o.","job_title":"Junior System Support Specialist","location":"Krak\xf3w (Polska)","tags":[]},{"company":"Circdata Polska Sp. z o. o.","job_title":"Manual QA Engineer","location":"Krak\xf3w (Poland)","tags":[]},{"company":"Bank Millennium S.A.","job_title":"Specjalista ds. Wdrożenia Systemu Informatycznego","location":"Warszawa (Polska)","tags":["Microsoft Azure"]},{"company":"ASTEK Polska","job_title":"Test Automation Specialist","location":"Warszawa (Poland)","tags":[]},{"company":"Bank Millennium S.A.","job_title":"Specjalista ds. Serwisu Systemu Internetowego","location":"Warszawa (Polska)","tags":["Linux","Windows Server"]},{"company":"Lufthansa Systems","job_title":"React Frontend Developer","location":"Gdańsk (Poland)","tags":["React.js","Redux","Angular","JavaScript","Jira","UX/UI"]},{"company":"ALIOR BANK","job_title":"Database Administrator","location":"Oferta w wielu lokalizacjach (3)","tags":["MySQL"]},{"company":"ZF Group","job_title":"Mobile Device Administrator","location":"Multiple locations offer (3)","tags":[]},{"company":"Netia","job_title":"Analityk System\xf3w Integracji","location":"Warszawa (Polska)","tags":["ESB","BPM","IBM Integration Bus","XML","XSL","J2EE","WebServices","Java","SVN","Git","Unix","Oracle","UML","JBoss Application Ser","WildFly","IBM WebSphere","MQ","Business Integration","Message Broker"]},{"company":"ASTEK Polska","job_title":"Senior Project Manager","location":"Warszawa (Poland)","tags":[]},{"company":"Circdata Polska Sp. z o. o.","job_title":"Talent and HR Manager","location":"Krak\xf3w (Poland)","tags":[]},{"company":"Grupa Sp\xf3łek Danone Polska ","job_title":"Internship Program Dan One in IT & Data - Data & Analytics (Commercial & Industrial team)","location":"Warszawa (Poland)","tags":[]},{"company":"SILVAIR SP. Z O.O.","job_title":"Product Support Engineer","location":"Multiple locations offer (3)","tags":[]},{"company":"EUVIC Sp. z o.o","job_title":".NET Developer","location":"Białystok (Poland)","tags":[".NET Core",".NET","SQL","Visual Studio"]},{"company":"KPMG","job_title":".NET Developer","location":"Warszawa (Polska)","tags":["C#",".NET",".NET Core","HTML","JavaScript","CSS","Ajax","Bootstrap","Razor","Blazor","MS SQL"]},{"company":"Hitachi Energy Poland Sp. z o.o.","job_title":"Algorithmic Quantitative Developer (Data Science)","location":"Krak\xf3w (Poland)","tags":["Python","TensorFlow","Pandas","scikit-learn","Numpy","Azure DevOps","Git","Docker","SCRUM","SAFe"]},{"company":"Centralny Ośrodek Informatyki ","job_title":"Senior Mobile Developer (Android/iOS)","location":"Oferta w wielu lokalizacjach (3)","tags":["Android Jetpack","Coroutines","Hilt","LiveData","Firebase","SwiftUI","Combine","Async Await","Metal","Apple Push Notification Service","CommonCrypto"]},{"company":"RST","job_title":"Senior React Native Developer","location":"Oferta w wielu lokalizacjach (2)","tags":["HTML","CSS","React","ECMAScript","React Native"]},{"company":"Nexteer Automotive Poland Sp. z o.o.","job_title":"Asystent działu IT","location":"Oferta w wielu lokalizacjach (2)","tags":["SQL","C#","ASP .Net"]},{"company":"DTIQ POLAND SP. Z O.O.","job_title":"Pracownik wsparcia klienta z językiem hiszpańskim","location":"Gliwice (Polska)","tags":[]},{"company":"DTIQ POLAND SP. Z O.O.","job_title":"IT Administrator","location":"Gliwice (Poland)","tags":[]},{"company":"SOFTWARELY SP. Z O.O.","job_title":"Android Mobile Developer","location":"Warszawa (Polska)","tags":["Android","Android SDK"]},{"company":"SOFTWARELY SP. Z O.O.","job_title":"Fullstack PHP developer","location":"Warszawa (Polska)","tags":["PHP","Laravel","MySQL","TypeScript","Vue.js"]},{"company":"SOFTWARELY SP. Z O.O.","job_title":"Java Developer","location":"Warszawa (Polska)","tags":["Java","Spring Framework","Hibernate","HTTP","REST","SQL"]},{"company":"SOFTWARELY SP. Z O.O.","job_title":"Senior Java Developer","location":"Warszawa (Polska)","tags":["Java","Spring Boot","HTTP","REST","SQL"]},{"company":"SOFTWARELY SP. Z O.O.","job_title":"PHP developer","location":"Warszawa (Polska)","tags":["PHP","Laravel","MySQL"]},{"company":"Booksy International Sp. z o.o.","job_title":"Data Analyst","location":"Multiple locations offer (16)","tags":["BigQuery","Google Cloud Storage","Cloud Composer / Apache Airflow","CloudSQL / PostgresSQL"]},{"company":"Objectivity sp. z o.o.","job_title":".Net Software Engineer","location":"Multiple locations offer (16)","tags":["C#","TypeScript","Git","React.js",".NET"]},{"company":"Diebold Nixdorf","job_title":"1st Level Support Spezialisten mit Deutsch (m/f/d)","location":"Szczecin (Poland)","tags":[]},{"company":"Rockwell Automation","job_title":"Performance Engineering Intern","location":"Katowice (Polska)","tags":["C++","C"]},{"company":"SCANDIWEB","job_title":"Senior Web Developer","location":"Warszawa (Poland)","tags":["MySQL","CSS","HTML","jQuery","PHP","React.js"]},{"company":"PKN ORLEN S.A.","job_title":"Specjalista w Zespole Reagowania na Incydenty Cyberbezpieczeństwa​","location":"Warszawa (Polska)","tags":[]},{"company":"Asseco Business Solutions S.A. ","job_title":"Młodszy specjalista ds. baz danych","location":"Lublin (Polska)","tags":["SQL","T-SQL"]},{"company":"ABB Business Services","job_title":"IS Support Specialist","location":"Krak\xf3w (Poland)","tags":["SaaS"]},{"company":"e-point SA","job_title":"Senior Java Developer","location":"Warszawa (Polska)","tags":["Java"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Microsoft BI Data Engineer","location":"Warszawa (Poland)","tags":["SQL","Azure SQL","Git"]},{"company":"Diebold Nixdorf","job_title":"Technical Product Owner","location":"Katowice (Poland)","tags":[]},{"company":"Be in iT","job_title":"GCP Data Architect","location":"Oferta w wielu lokalizacjach (16)","tags":["Google Cloud Platform","CI/CD","Java","Python"]},{"company":"Sii Sp. z o.o.","job_title":"Analityk Systemowy – sektor bankowy","location":"Oferta w wielu lokalizacjach (17)","tags":["Enterprise Architect","UML","REST API","SQL"]},{"company":"CHEFS CULINAR SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Kierownik Projektu Wdrożeniowego - SAP","location":"Oferta w wielu lokalizacjach (3)","tags":["SAP"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(Cybersecurity) Cybersecurity Analyst - GCB 6","location":"Krak\xf3w (Poland)","tags":[]},{"company":"Ziflow Limited","job_title":"Quality Engineer","location":"Multiple locations offer (3)","tags":["CI/CD","Java","Jenkins","Git"]},{"company":"Bank Pekao","job_title":"Senior Data Scientist","location":"Oferta w wielu lokalizacjach (2)","tags":["SQL","Python","Hadoop","PySpark","Hive","Git","Kedro","ML Flow"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Microsoft Power BI Developer","location":"Warszawa (Poland)","tags":["SQL","Azure DevOps","Git"]},{"company":"eSky.pl S.A.","job_title":"Data Engineer","location":"Oferta w wielu lokalizacjach (16)","tags":["Python","Google Cloud Platform","Apache Airflow","Grafana","MongoDB","PostgreSQL","SQL Server"]},{"company":"Samsung R&D Institute Poland","job_title":"Internship - Linux Developer in Automotive","location":"Warszawa (Poland)","tags":["C/C++","Java","Linux/Android","Yocto","Atlassian tools","GIT"]},{"company":"Samsung R&D Institute Poland","job_title":"Front-End Engineer for Cloud Services","location":"Warszawa (Poland)","tags":["TypeScript","SCSS","React + Formik","Redux","Jest","Cypress"]},{"company":"Samsung R&D Institute Poland","job_title":"Internship – Javascript Intern for Mobile Solutions","location":"Warszawa (Poland)","tags":[]},{"company":"AXA Avanssur SA Oddział II w Polsce","job_title":"Praktykant w zespole automatyzacji test\xf3w","location":"Warszawa (Polska)","tags":["C#",".NET","JavaScript"]},{"company":"Centralny Ośrodek Informatyki ","job_title":"Remote Senior Mobile Developer (Android/iOS)","location":"Warszawa (Polska)","tags":["Kotlin","Swift","SQL","HTTP","Web Services","REST"]},{"company":"Santander Bank Polska","job_title":"UX designer","location":"Poznań (Polska)","tags":["Axure","Figma","Sketch"]},{"company":"Sii Sp. z o.o.","job_title":"Specjalista ds. Dokumentacji Projektowej","location":"Katowice (Polska)","tags":[]},{"company":"Prime Force Sp. z o.o.","job_title":"System Architect z językiem niemieckim","location":"Oferta w wielu lokalizacjach (16)","tags":[]},{"company":"Prime Force Sp. z o.o.","job_title":"Specjalista QA z językiem niemieckim","location":"Oferta w wielu lokalizacjach (16)","tags":[]},{"company":"Atende S.A.","job_title":"Starszy programista Java","location":"Oferta w wielu lokalizacjach (49)","tags":["Java","Docker","Linux","Spring Framework"]},{"company":"Pivotal Polska Sp. z o.o.","job_title":"Analityk Systemowo-Biznesowy","location":"Warszawa (Polska)","tags":["BPMN"]},{"company":"AXA Avanssur SA Oddział II w Polsce","job_title":"Junior Data Engineer with Java/Scala","location":"Warszawa (Polska)","tags":["Java","SQL","Scala","DataFrame API","CI/CD","DevOps"]},{"company":"Nokia","job_title":"Working Student, Lab Support","location":"Wrocław (Poland)","tags":[]},{"company":"ALIOR BANK","job_title":"Specjalista ds. Rozwoju Biznesowego System\xf3w Ryzyka","location":"Warszawa (Polska)","tags":["REST","SOAP","JIRA","Conluence"]},{"company":"Santander Bank Polska","job_title":"Fullstack Developer","location":"Oferta w wielu lokalizacjach (3)","tags":["Java","Angular"]},{"company":"Asco","job_title":"FullStack React Developer (Node.js)","location":"Krak\xf3w (Polska)","tags":["JavaScript","HTML","CSS","Git"]},{"company":"wonga.pl Sp. z o.o.","job_title":"UX Designer","location":"Warszawa (Polska)","tags":["HTML","CSS"]},{"company":"Sente S.A.","job_title":"Specjalista ds. wdrożeń IT (produkcja)","location":"Wrocław (Polska)","tags":["SQL"]},{"company":"Nationale-Nederlanden","job_title":"Administrator Aplikacji","location":"Warszawa (Polska)","tags":["Elasticsearch","Grafana","Prometheus","Ansible"]},{"company":"Bank Pekao","job_title":"Ekspert ds. Utrzymania Aplikacji w Zespole Utrzymania i Zarządzania Platformą Multichannel","location":"Ł\xf3dź (Polska)","tags":["Java","Git","CI/CD"]},{"company":"Symfonia sp. z o.o.","job_title":"Tester automatyzujący","location":"Oferta w wielu lokalizacjach (11)","tags":["HTML","JavaScript"]},{"company":"Bank Pekao","job_title":"Inżynier DevOps w Biurze Platformy Technologicznej","location":"Oferta w wielu lokalizacjach (2)","tags":["Ansible","Docker","Kubernetes","Jenkins","Terraform","Git","ArgoCD","Grafana","Prometheus"]},{"company":"DEVQUBE sp. z o.o.","job_title":"Project Manager","location":"Oferta w wielu lokalizacjach (2)","tags":[]},{"company":"Bank Millennium S.A.","job_title":"Programista .NET","location":"Warszawa (Polska)","tags":[".NET Core","Entity Framework","SQL","Git","REST"]},{"company":"Biedronka (Jeronimo Martins Polska S.A.)","job_title":"SAP Functional Manager (SuccessFactors)","location":"Warszawa (Poland)","tags":[]},{"company":"Samsung R&D Institute Poland","job_title":"Frontend Developer in Research and Development Center","location":"Warszawa (Poland)","tags":["TypeScript","JavaScript","HTML","SCSS/CSS","React","Webpack","NodeJS"]},{"company":"Samsung R&D Institute Poland","job_title":"Python / Django Backend Developer","location":"Warszawa (Poland)","tags":["Python","Django"]},{"company":"Capgemini Polska","job_title":"IT Support Agent with Dutch","location":"Multiple locations offer (14)","tags":[]},{"company":"Polkomtel Sp. z o.o.","job_title":"Administrator System\xf3w Business Intelligence","location":"Warszawa (Polska)","tags":[]},{"company":"StepStone Services Sp. z o.o.","job_title":"Data Governance Architect","location":"Warszawa (Poland)","tags":["Logical Data Modelling","Data Architecture","Software Architecture"]},{"company":"Capgemini Polska","job_title":"IT Support Agent with Czech","location":"Multiple locations offer (14)","tags":[]},{"company":"Polkomtel Sp. z o.o.","job_title":"Projektant Integracji","location":"Warszawa (Polska)","tags":["Java"]},{"company":"Samsung R&D Institute Poland","job_title":"Internship – Deep Learning Intern for Audio Projects in Artificial Intelligence Team","location":"Warszawa (Poland)","tags":["Python","C/C+","PyTorch","TensorFlow","Machine learning frameworks: scikit-learn"]},{"company":"ZF Group","job_title":"Technical Leader","location":"Multiple locations offer (2)","tags":[]},{"company":"Fortum Service Poland Sp. z o.o. ","job_title":".NET core / C# developer","location":"Wrocław (Poland)","tags":["C#",".NET Core","Git"]},{"company":"Booksy International Sp. z o.o.","job_title":"Senior JavaScript Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["JavaScript","TypeScript","Vue 2.x","Vue 3.x","Vuex/Pinia","Jest","Cypress","Vue.js"]},{"company":"Adform Sp. z o.o.","job_title":"Lead Portfolio Analyst","location":"Warszawa (Poland)","tags":["Jira","Power Query","Tableau"]},{"company":"Citi Handlowy","job_title":"Starszy Administrator System\xf3w Informatycznych","location":"Warszawa (Polska)","tags":["Oracle"]},{"company":"Centralny Ośrodek Informatyki ","job_title":"Specjalista ds. test\xf3w automatycznych","location":"Oferta w wielu lokalizacjach (3)","tags":["Java","Jenkins","Git","Maven","JUnit","SoapUI","JMeter","Gradle","Bash","SQL","XML","PLSQL","Jira","Zephyr"]},{"company":"AXA Avanssur SA Oddział II w Polsce","job_title":"Młodszy Administrator Baz Danych","location":"Warszawa (Polska)","tags":["SQL","T-SQL"]},{"company":"Sii Sp. z o.o.","job_title":"C# Test Developer","location":"Multiple locations offer (12)","tags":["C#",".NET","Selenium Web Driver","Selenium Grid","BDD","Specflow","REST services","CI/CD","Git"]},{"company":"HCL Poland","job_title":"Technical Support Agent with Portuguese & English","location":"Wrocław (Poland)","tags":[]},{"company":"Media Press ","job_title":"Administrator System\xf3w IT","location":"Oferta w wielu lokalizacjach (2)","tags":["Active Directory","SharePoint","Linux"]},{"company":"Wunderman Thompson Technology","job_title":"Sitecore Developer","location":"Multiple locations offer (3)","tags":["C#","ASP.NET MVC",".NET Core","Sitecore CMS","SXA","Microsoft SQL Server","Microsoft Azure","AWS"]},{"company":"mBank","job_title":"Inżynier(-ka) DevOps Cloud","location":"Warszawa (Polska)","tags":["PowerShell","Bash","Terraform","Azure DevOps"]},{"company":"T-Mobile","job_title":"Mł. Specjalista/-ka ds. Bezpieczeństwa – 1. Linia SOC","location":"Warszawa (Polska)","tags":["Unix"]},{"company":"Huuuge Games Sp. z o.o.","job_title":"DevOps Engineer","location":"Warszawa (Poland)","tags":["Kubernetes","Docker","AWS","Python","Kotlin","Bash","Jenkins","Git"]},{"company":"INUITS ","job_title":"Remote Front-End Developer (Vue.js)","location":"Multiple locations offer (16)","tags":["HTML","Vue.js","CSS","ES6+","JavaScript"]},{"company":"ABB Business Services","job_title":"C#/Azure developer for Marine","location":"Krak\xf3w (Poland)","tags":["C#",".NET","Microsoft Azure","Docker"]},{"company":"ABB Business Services","job_title":"IS Functional Analyst","location":"Krak\xf3w (Poland)","tags":[]},{"company":"ALTEN Polska","job_title":".NET Developer","location":"Oferta w wielu lokalizacjach (5)","tags":[".NET","Azure/AWS/GCP","MSSQL/PostgreSQL/MongoDB","React/Angular"]},{"company":"DevsData LLC","job_title":"Site Reliability Engineer","location":"Multiple locations offer (16)","tags":["Java","TypeScript","JavaScript","Python","Go","Terraform","Git","Bash"]},{"company":"ALTEN Polska","job_title":"Tester automatyzujący z Java","location":"Oferta w wielu lokalizacjach (5)","tags":["Selenium WebDriver/Cucumber/Appium","Java"]},{"company":"DevsData LLC","job_title":"Mid/Senior Fullstack with PHP","location":"Multiple locations offer (16)","tags":["PHP","Symfony"]},{"company":"DevsData LLC","job_title":"Data Engineer","location":"Multiple locations offer (16)","tags":["MySQL","Oracle","PostgreSQL","Python","Scala","Apache Airflow"]},{"company":"Platige Image S.A.","job_title":".NET Developer","location":"Warszawa (Polska)","tags":[".NET","C#","MySQL","Git"]},{"company":"HCL Poland","job_title":"Cloud Engineer","location":"Warszawa (Polska)","tags":["Java","AWS","Spring Framework","Python","Spark","Oracle","MySQL"]},{"company":"ALTEN Polska","job_title":"PHP Developer","location":"Oferta w wielu lokalizacjach (5)","tags":["PostgreSQL","MySQL","MongoDB","Symfony","REST API"]},{"company":"Sii Sp. z o.o.","job_title":"PLC Programmer – Siemens, Beckhoff, Allen-Bradley","location":"Multiple locations offer (11)","tags":[]},{"company":"Sii Sp. z o.o.","job_title":"Installer Developer","location":"Oferta w wielu lokalizacjach (17)","tags":["MSI","Nuget","RPM / DEB","Conda","C#","Python"]},{"company":"Sii Sp. z o.o.","job_title":"C++ Developer with Qt","location":"Oferta w wielu lokalizacjach (6)","tags":["C++","Qt"]},{"company":"DevsData LLC","job_title":"Junior Ruby on Rails Developer","location":"Multiple locations offer (16)","tags":["Ruby on Rails","PostgreSQL","HTML","JavaScript","REST API"]},{"company":"DevsData LLC","job_title":"Algorithms Java Developer","location":"Multiple locations offer (16)","tags":["Java"]},{"company":"DevsData LLC","job_title":"Data Engineer (Python)","location":"Multiple locations offer (16)","tags":["Python","SQL"]},{"company":"DevsData LLC","job_title":"Java & Machine Learning Engineer (in Tokyo)","location":"Multiple locations offer (16)","tags":["Python","Java","Scala","C++","Jenkins","GitHub","Jira"]},{"company":"DevsData LLC","job_title":"ML Researcher (Agriculture)","location":"Multiple locations offer (16)","tags":["Python"]},{"company":"DevsData LLC","job_title":"Mid DevOps Engineer","location":"Multiple locations offer (16)","tags":["AWS","Python","Kubernetes"]},{"company":"DevsData LLC","job_title":"Senior Fullstack Developer","location":"Multiple locations offer (16)","tags":["Java","Spring","React","DevOps development","Jenkins","Junit","Jasmin","Mockito","Protractor"]},{"company":"DevsData LLC","job_title":"Senior C++ Developer","location":"Warszawa (Poland)","tags":["C++","Agile","NUnit","JUnit"]},{"company":"DevsData LLC","job_title":"Junior C++ Developer","location":"Warszawa (Poland)","tags":["C++","NUnit","JUnit","CMake","Git"]},{"company":"ALIOR BANK","job_title":"Cloud Security Engineer","location":"Oferta w wielu lokalizacjach (3)","tags":[]},{"company":"AXXIOME HEALTH POLSKA SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"IAM Consultant","location":"Oferta w wielu lokalizacjach (2)","tags":["SAP","IAM","SAP Identity Authentication Services","SAP Identity Access Governance","SAP Identity Provisioning Service","Identity and Access Management"]},{"company":"Bank Millennium S.A.","job_title":"Senior Linux Administrator","location":"Warszawa (Polska)","tags":["Ansible","Puppet","DevOps","Bash","PowerShell","PowerCli","Tower","Linux/UNIX"]},{"company":"Print&Display (Polska) Sp. z o.o.","job_title":"Administrator IT","location":"Warszawa (Polska)","tags":["LAN","Ubuntu","CentOS","VMware","Linux","Windows Server"]},{"company":"Bank Millennium S.A.","job_title":"Analityk Systemowy w Obszarze Rozwoju Aplikacji IT","location":"Oferta w wielu lokalizacjach (2)","tags":["SOA","REST","SoapUI","postman","UML"]},{"company":"ArcelorMittal Poland S.A.","job_title":"Data Architect","location":"Dąbrowa G\xf3rnicza (Poland)","tags":["SQL","ETL"]},{"company":"ArcelorMittal Poland S.A.","job_title":"Data Engineer","location":"Dąbrowa G\xf3rnicza (Poland)","tags":["SQL","ETL","Power BI","C#","Visual Basic","Python"]},{"company":"ArcelorMittal Poland S.A.","job_title":"Specjalista ds. projektowania automatyki","location":"Krak\xf3w (Polska)","tags":[]},{"company":"ArcelorMittal Poland S.A.","job_title":"Specjalista ds. modeli","location":"Krak\xf3w (Polska)","tags":["C#","C++"]},{"company":"Wyższa Szkoła Kształcenia Zawodowego","job_title":"Specjalista ds. cyberbezpieczeństwa IT","location":"Wrocław (Polska)","tags":["MS Windows Server, Linux/Unix Server, rodziny protokoł\xf3w TCP/IP i usług sieciowych, znajomości zagrożeń sieciowych oraz system\xf3w bezpieczeństwa np. firewall, WAF, IPS/IDS, VPN, DLP, antyDDOS, itp."]},{"company":"ArcelorMittal Poland S.A.","job_title":"C# Developer","location":"Krak\xf3w (Polska)","tags":["C#","WCF","TCP Socket","Winform","MsSQL","TFS","Git"]},{"company":"C&F","job_title":"Scrum Master","location":"Warszawa (Poland)","tags":["Scrum","Agile"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"Cloud DevOps Engineer","location":"Krak\xf3w (Poland)","tags":["Jenkins","Ansible","Nginx","SQL"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"Web Developer (Front-end)","location":"Krak\xf3w (Poland)","tags":["React","JavaScript","Azure","GCP"]},{"company":"Bank Millennium S.A.","job_title":"Analityk Systemowy w Zespole Utrzymania Aplikacji","location":"Oferta w wielu lokalizacjach (2)","tags":["UML, JIRA, ITIL, WebServices"]},{"company":"Sescom S.A.","job_title":"Data Engineer (Inżynier danych)","location":"Gdańsk (Polska)","tags":["SQL","Python","Java","Kafka","Airflow","Pentaho"]},{"company":"HEINEKEN Global Shared Services","job_title":"Senior Technology Specialist - HANA/Azure","location":"Krak\xf3w (Poland)","tags":["SQL"]},{"company":"Sii Sp. z o.o.","job_title":"C++ Developer with SQL","location":"Oferta w wielu lokalizacjach (4)","tags":["C++","SQL"]},{"company":"Bank Millennium S.A.","job_title":"Analityk Systemowy w Zespole Rozwoju Aplikacji","location":"Warszawa (Polska)","tags":["BPMN, UML, SQL, JIRA, Low-Code platforms"]},{"company":"Sii Sp. z o.o.","job_title":"C++ Embedded Developer","location":"Oferta w wielu lokalizacjach (8)","tags":["C++","RTOS","Embedded"]},{"company":"SOFTWARELY SP. Z O.O.","job_title":"Tester Automatyzujący","location":"Warszawa (Polska)","tags":["Python","Java","Selenium"]},{"company":"QAD Polska Sp. z o.o.","job_title":"Senior Quality Analyst","location":"Wrocław (Poland)","tags":[]},{"company":"SOFTWARELY SP. Z O.O.","job_title":"Angular Developer","location":"Warszawa (Polska)","tags":["Angular","TypeScript","HTML","SASS","npm","webpack","RxJS","CSS","Git","Material UI"]},{"company":"Bank Millennium S.A.","job_title":"Flutter Developer","location":"Warszawa (Polska)","tags":["iOS","Android","Git"]},{"company":"Centrum e-Zdrowia","job_title":"Kierownik Projektu w Wydziale Zarządzania Projektami z obszaru polityki lekowej, kadr i szkolnictwa medycznego oraz transplantologii","location":"Warszawa (Polska)","tags":["Confluence","Jira","MS Project"]},{"company":"Centrum e-Zdrowia","job_title":"Od Młodszego Analityka do Analityka w Wydziale Monitorowania i Raport\xf3w","location":"Warszawa (Polska)","tags":["R","Python","SAS","SQL","Power BI"]},{"company":"Centrum e-Zdrowia","job_title":"Analityk ds. wsp\xf3łpracy z Komisją Europejską w Wydziale Rozwoju","location":"Warszawa (Polska)","tags":["UML","BPMN","SQL","SOA","Balsamiq","Zepplin","SoapUI","Enterprise Architekt","Jira"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Microsoft 365 Adoption & People Change Manager","location":"Ł\xf3dź (Poland)","tags":[]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Backend Engineer (M/F)","location":"Warszawa (Poland)","tags":["Java","Spring Boot","Angular","TypeScript","Terraform","Kubernetes"]},{"company":"Connectis_","job_title":"Senior Java Software Engineer","location":"Warszawa (Polska)","tags":["Java","Spring","Azure","Docker","Kubernetes"]},{"company":"ArcelorMittal Poland S.A.","job_title":"Specjalista ds. modeli","location":"Dąbrowa G\xf3rnicza (Polska)","tags":["C#","C++"]},{"company":"Nationale-Nederlanden","job_title":"Architekt Danych","location":"Warszawa (Polska)","tags":["Enterprise Architect","PostgreSQL","Microsoft SQL Server","Oracle","Microsoft Azure"]},{"company":"ING Bank Śląski S.A.","job_title":"Data Scientist - Expert Team Smart Solution","location":"Katowice (Polska)","tags":["Python","Machine Learning","Git"]},{"company":"Medicover","job_title":"Koordynator Zespołu Rozwoju System\xf3w Sportowych IT​","location":"Warszawa (Polska)","tags":[]},{"company":"Medicover","job_title":"Starszy Kierownik Projekt\xf3w IT/Senior Project Manager IT","location":"Warszawa (Polska)","tags":[]},{"company":"ING Bank Śląski S.A.","job_title":"Frontend Developer w Tribe Aplikacji dla Klient\xf3w Indywidualnych","location":"Oferta w wielu lokalizacjach (16)","tags":["WebComponents","HTML5","CSS3","JavaScript","ECMAScript","NodeJS"]},{"company":"Medicover","job_title":"Starszy Analityk Biznesowy IT/ Senior IT Business Analyst​","location":"Warszawa (Polska)","tags":["BPMN","UML","Enterprise Architect"]},{"company":"AURORA CREATION sp. z o.o.","job_title":"Front-end Magento 2 Developer","location":"Białystok (Polska)","tags":["Magento","HTML","JavaScript","CSS","Git","Gulp","webpack","Grunt","Rest","GraphQL"]},{"company":"SOFTIQ sp. z o.o.","job_title":"Data Engineer","location":"Multiple locations offer (3)","tags":["SQL","R","Python"]},{"company":"SOFTIQ sp. z o.o.","job_title":"Software Integration Developer","location":"Oferta w wielu lokalizacjach (3)","tags":["web services","XML/XSD","SQL","API"]},{"company":"FLOTA PLUS","job_title":"Analityk Biznesowy","location":"Warszawa (Polska)","tags":["SQL","Python"]},{"company":"DPD Polska","job_title":"Młodszy Administrator Serwer\xf3w Windows","location":"Warszawa (Polska)","tags":["Windows Server","Active Directory","Exchange","IIS Hyper"]},{"company":"Rossmann SDP","job_title":"Grafik","location":"Ł\xf3dź (Polska)","tags":["Adobe Photoshop","Adobe Illustrator"]},{"company":"Grupa Pracuj","job_title":"Administrator Aplikacji i System\xf3w IT/ Administratorka Aplikacji i System\xf3w IT","location":"Warszawa (Polska)","tags":["Sharepoint Online","Microsoft 365","Azure AD","Intune","One Drive","PowerShell","JIRA","Confluence"]},{"company":"Connectis_","job_title":"Data Engineer/BI Developer","location":"Warszawa (Poland)","tags":["Azure SQL","Data lake","data fa","Snowflake Data Cloud","databricks","SSIS","Power Bi","SQL Server","SSAS"]},{"company":"Connectis_","job_title":"iOS Developer","location":"Warszawa (Polska)","tags":["iOS","Swift","RxCocoa or Combine"]},{"company":"Connectis_","job_title":"Tester Manualny","location":"Warszawa (Polska)","tags":["API"]},{"company":"Wazdan Solutions Sp. z o.o.","job_title":"Inżynier Monitoringu Technicznego","location":"Opole (Polska)","tags":[]},{"company":"Cyclad","job_title":"Analityk Systemowy","location":"Oferta w wielu lokalizacjach (16)","tags":["SQL","UML","Enterprise Architect","Visio","Azure DevOps","Jira","Confluence"]},{"company":"PRAGMAGO SA","job_title":"Data Scientist (Modelowanie & Analiza)","location":"Katowice (Polska)","tags":["Python","R","SQL"]},{"company":"ING Lease","job_title":"Analityk Systemowo-Biznesowy - aplikacja backoffice","location":"Warszawa (Polska)","tags":["BPMN","UML","SQL"]},{"company":"Trans.eu Group S.A. ","job_title":"Data Scientist","location":"Wrocław (Polska)","tags":["Python","Git","AWS","Snowflake Data Cloud"]},{"company":"Sii Sp. z o.o.","job_title":"Big Data Engineer with Scala – Fintech","location":"Oferta w wielu lokalizacjach (4)","tags":["Scala","Spark","Kafka"]},{"company":"Telejur Sp. z o.o.","job_title":"Java Developer","location":"Ł\xf3dź (Polska)","tags":["SQL","Java"]},{"company":"Wazdan Solutions Sp. z o.o.","job_title":"Programista C++","location":"Oferta w wielu lokalizacjach (16)","tags":["C++","Microsoft Excel"]},{"company":"Wazdan Solutions Sp. z o.o.","job_title":"Programista automatyzacji test\xf3w Java","location":"Oferta w wielu lokalizacjach (16)","tags":["Selenium"]},{"company":"Wazdan Solutions Sp. z o.o.","job_title":"Programista Java","location":"Oferta w wielu lokalizacjach (16)","tags":["Java"]},{"company":"Citi Handlowy","job_title":"Manager zespołu Data Science","location":"Warszawa (Polska)","tags":["Python","SQL","SAS"]},{"company":"SYZYGY","job_title":"Test Automation Engineer","location":"Warszawa (Polska)","tags":["TypeScript","Jira","Webdriver.IO","Angular","Jenkins","Cucumber.js"]},{"company":"LUX MED Sp. z o.o.","job_title":"Programista Front-end (Angular)","location":"Warszawa (Polska)","tags":["Angular","HTML","SCSS","Bootstrap","TypeScript","RxJs","REST","Git"]},{"company":"Booksy International Sp. z o.o.","job_title":"Senior Python Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["Elasticsearch","SQL","PostgreSQL","Docker","Django","Django Rest Framework"]},{"company":"ASTEK Polska","job_title":"Senior R Developer","location":"Warszawa (Poland)","tags":["R","R-markdown","R Studio"]},{"company":"LUX MED Sp. z o.o.","job_title":"Administrator System\xf3w Linux","location":"Warszawa (Polska)","tags":["Linux Centos 7 i 8","Oracle Linux 8","VMware 6.5 i 6.7","Cloud","IaaC: Terraform","Chef","SAN: Macierze i przełączniki"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(CTO Telco) Scrum Master","location":"Krak\xf3w (Poland)","tags":["Jira","Scrum","Agile"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Siemens NX Developer (Engineering)","location":"Warszawa (Poland)","tags":["C++","C#","SQL","Azure DevOps"]},{"company":"Demant Technology Centre Sp. z o.o. ","job_title":"Java Developer","location":"Warszawa (Poland)","tags":["Java 8 SE","RCP","EMF","Eclipse Platform/OSGi","Maven"]},{"company":"VIG Polska Sp. z o.o., Vienna Insurance Group","job_title":"Solution Architect","location":"Warszawa (Polska)","tags":["Sparx Enterprise Architect"]},{"company":"Pru/Prudential","job_title":"Junior Programista PL SQL - Specjalista ds. Utrzymania System\xf3w","location":"Gdańsk (Polska)","tags":["Oracle","SQL","PL/SQL"]},{"company":"RECRU.TO SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Java Mentor","location":"Krak\xf3w (Polska)","tags":["Java"]},{"company":"Pru/Prudential","job_title":"Programista PL SQL - Specjalista ds. Utrzymania System\xf3w","location":"Gdańsk (Polska)","tags":["Oracle","SQL","PL/SQL"]},{"company":"Objectivity sp. z o.o.","job_title":"IT Systems Engineer","location":"Multiple locations offer (16)","tags":["Ansible","PowerShell","Terraform","AAD"]},{"company":"Grupa Inter Cars","job_title":"Starszy architekt rozwiązań informatycznych","location":"Warszawa (Polska)","tags":["ERP"]},{"company":"DSV ISS ","job_title":"Senior IT Storage Specialist","location":"Warszawa (Poland)","tags":["PowerShell","Java","Python"]},{"company":"Panek S.A.","job_title":"Project Manager IT","location":"Warszawa (Polska)","tags":["Agile","Jira"]},{"company":"mBank","job_title":"Inżynier DevOps","location":"Oferta w wielu lokalizacjach (2)","tags":["Linux","Windows"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"SAP EWM/WM Process Consultant","location":"Multiple locations offer (16)","tags":["SAP"]},{"company":"Euvic IT ","job_title":"Młodszy Specjalista Service Desk","location":"Płock (Polska)","tags":[]},{"company":"CREDIT SUISSE Poland","job_title":"Security Architect","location":"Warszawa (Poland)","tags":[]},{"company":"PHOENIX CONTACT WIELKOPOLSKA Sp. z o.o.","job_title":"Full Stack Developer","location":"Oferta w wielu lokalizacjach (2)","tags":[".NET framework","C#","Visual Studio","Frontend Framework","Entity Framework","ASP.NET"]},{"company":"Cyclad","job_title":"Frontend Developer (Angular)","location":"Multiple locations offer (16)","tags":["Angular","TypeScript","JavaScript","HTML","CSS"]},{"company":"ING Bank Śląski S.A.","job_title":"Frontend Developer w Tribe Aplikacji Biznesowych","location":"Oferta w wielu lokalizacjach (16)","tags":["WebComponents","HTML5","CSS3","JavaScript","ECMAScript","NodeJS"]},{"company":"EPAM Systems (Poland) sp. z o.o.","job_title":"Senior Ruby on Rails Developer","location":"Multiple locations offer (16)","tags":["Ruby on Rails"]},{"company":"EPAM Systems (Poland) sp. z o.o.","job_title":"Senior Big Data Developer","location":"Multiple locations offer (16)","tags":["Java","Scala","Python"]},{"company":"EPAM Systems (Poland) sp. z o.o.","job_title":"Senior - Lead Automation Engineer with C#","location":"Multiple locations offer (16)","tags":["C#",".NET","Azure DevOps","GitLab","Jira","Jenkins"]},{"company":"EPAM Systems (Poland) sp. z o.o.","job_title":"Senior .NET Software Engineer","location":"Multiple locations offer (16)","tags":["C#",".NET",".NET Core","SQL"]},{"company":"Samsung R&D Institute Poland","job_title":"Internship - Linguist with German","location":"Warszawa (Poland)","tags":["Natural Language Understanding (NLU)","Training & test data collection, text corpus processing"]},{"company":"Rossmann SDP","job_title":"Backend Developer","location":"Oferta w wielu lokalizacjach (18)","tags":[".NET Core","C#","Visual Studio","Docker","Microsoft SQL Server","Git"]},{"company":"Samsung R&D Institute Poland","job_title":"Language Expert with German","location":"Warszawa (Poland)","tags":["Bash","Python","Ruby"]},{"company":"Infocomp Sp. z o.o.","job_title":"Inżynier Danych (Data Engineer)","location":"Toruń (Polska)","tags":["Oracle","MySQL","SQL"]},{"company":"Bank Pekao","job_title":"Programista Web Frontend Angular","location":"Warszawa (Polska)","tags":["JavaScript","Angular","HTML5","CSS","Java","Spring","Hibernate"]},{"company":"Objectivity sp. z o.o.","job_title":".NET Developer","location":"Multiple locations offer (16)","tags":[".NET","NoSQL","Angular","React Native",".NET Core","SQL","C#"]},{"company":"Bank Pekao","job_title":"Programista WEB Angular (OmniCash)","location":"Warszawa (Polska)","tags":["JavaScript","Angular","HTML5","CSS","Java","Spring","Hibernate"]},{"company":"Lufthansa Systems","job_title":"Full Stack Developer","location":"Gdańsk (Poland)","tags":["Java 8","Java 11","Java Swing","Junit","Mockito","Apache Maven"]},{"company":"PwC","job_title":"UX Chapter Lead","location":"Warszawa (Poland)","tags":["Adobe Creative Suite","Miro","Sketch","InVision"]},{"company":"TEACODE","job_title":"UX / Product Designer","location":"Multiple locations offer (20)","tags":["Figma","Sketch","Adobe Creative Software","Zeplin","InVision"]},{"company":"All Good S.A.","job_title":"PHP Developer","location":"Szczecin (Polska)","tags":["PHP","Symfony","MySQL","JavaScript","CSS","HTML","Git"]},{"company":"TEACODE","job_title":"Fullstack Developer","location":"Multiple locations offer (20)","tags":["React.js","Node.js"]},{"company":"Raben Management Services ","job_title":"Workflow System Specialist (Workflow Deweloper)","location":"Oferta w wielu lokalizacjach (16)","tags":["SQL","JavaScript","Agile","PMI","BPMN","UML","Low - Code","Webcon","SOAP WebServicesWorkflow"]},{"company":"Raben Management Services ","job_title":"IT Specialist for Warehouse System Support (IT Team for the WMS)","location":"Oferta w wielu lokalizacjach (16)","tags":["SQL"]},{"company":"Spyrosoft S.A. ","job_title":"Senior Automotive Test Engineer","location":"Multiple locations offer (16)","tags":["Git","Vector tools","CAN","CANoe","V-Model","A-SPICE"]},{"company":"Port Lotniczy Rzesz\xf3w-Jasionka Sp. z o.o.","job_title":"Specjalista Ds. System\xf3w Teleinformatycznych I Cyberbezpieczeństwa","location":"Jasionka (pow. rzeszowski) (Polska)","tags":["IT/Cyberbezpieczeństwo"]},{"company":"SALESmanago","job_title":"UX/UI Designer","location":"Krak\xf3w (Poland)","tags":["Figma","UX/UI","Web Applications","UX Research"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"IT Compliance & Security Manager MS 365","location":"Ł\xf3dź (Poland)","tags":[]},{"company":"Samsung R&D Institute Poland","job_title":"Machine Learning Engineer for Recommendation Systems in AI Team","location":"Warszawa (Poland)","tags":["Python","Scala","Big Data & Cloud Technologies: PySpark, Hadoop, AWS","ML/DL frameworks: PyTorch, Pandas, SciPy ecosystem, Keras, Tensorflow","Linux with shell scripting","Code versioning and CI/CD automation e.g.: Git and GitHub Actions"]},{"company":"Nokia","job_title":"Cloud Infrastructure Working Student","location":"Multiple locations offer (16)","tags":["AWS","OS-level virtualization","container orchestration","virtual resources","Telco cloud","Azure","GCP"]},{"company":"Fideltronik Poland Sp. z o.o.","job_title":"Inżynier Programista Embedded","location":"Gdańsk (Polska)","tags":["C++","C","GSM","GPS"]},{"company":"StepStone Services Sp. z o.o.","job_title":"Big Data Developer","location":"Warszawa (Poland)","tags":["Java","Scala","Python","AWS","Terraform","Apache Spark"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"Database Specialist MSSQL (CTO Germany - ES)","location":"Krak\xf3w (Poland)","tags":["MSSQL","Jira","Confluence"]},{"company":"CREDIT SUISSE Poland","job_title":"Team Lead for Market Risk Reporting and Analysis","location":"Wrocław (Poland)","tags":[]},{"company":"DOZ S.A.","job_title":"Data Modeler","location":"Ł\xf3dź (Polska)","tags":["SQL"]},{"company":"Cyfrowy Polsat S.A.","job_title":"Inżynier ds. Radiokomunikacji 5G/4G/3G/2G","location":"Warszawa (Polska)","tags":[]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Data Security and Access Management Specialist","location":"Warszawa (Poland)","tags":[]},{"company":"EWL S.A","job_title":"Scrum Master","location":"Oferta w wielu lokalizacjach (16)","tags":[]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Monitoring Expert (eBike)","location":"Warszawa (Poland)","tags":["Hadoop","Oracle"]},{"company":"Nokia","job_title":"5G R&D Engineer Working Student","location":"Multiple locations offer (16)","tags":["C++"]},{"company":"PwC","job_title":"Salesforce Configuration Analyst","location":"Multiple locations offer (2)","tags":["Salesforce","CRM","configurations","integrations","tools development","MS Office"]},{"company":"Sieć Badawcza Łukasiewicz – Instytut Lotnictwa","job_title":"Inżynier - Data Scientist","location":"Warszawa (Polska)","tags":["R","Python"]},{"company":"HEINEKEN Global Shared Services","job_title":"Technology Specialist - Product Architect Media","location":"Krak\xf3w (Poland)","tags":[]},{"company":"Parasoft Polska Sp. z o. o.","job_title":".NET Software Engineer","location":"Krak\xf3w (Poland)","tags":[".NET","C#","NUnit","XUnit","Visual Studio","Git"]},{"company":"Parasoft Polska Sp. z o. o.","job_title":"Java Software Engineer","location":"Multiple locations offer (3)","tags":["Java","Junit","Eclipse","IntelliJ","Git"]},{"company":"Biedronka (Jeronimo Martins Polska S.A.)","job_title":"Systems Integration Specialist","location":"Warszawa (Polska)","tags":["SAP PI"]},{"company":"ZF Group","job_title":"Inżynier Testowania (LabView)","location":"Częstochowa (Polska)","tags":["Python"]},{"company":"F.H.U. Studioars","job_title":"Młodszy Programista Fullstack JS/PHP","location":"Krak\xf3w (Polska)","tags":["JavaScript","HTML","CSS","SQL","Vue.js","Node.js","Express"]},{"company":"Diebold Nixdorf","job_title":"C++ Software Engineer","location":"Katowice (Poland)","tags":["Visual Studio 2019","Microsoft SQL Server","CI/CD: Jenkins","Git","Jira","Confluence"]},{"company":"Diebold Nixdorf","job_title":"Quality Assurance - Test Engineer","location":"Katowice (Poland)","tags":["Jira","Confluence"]},{"company":"Diebold Nixdorf","job_title":"Backend Software Engineer","location":"Katowice (Poland)","tags":[".NET Core","Web API","SignalR","Redis","RabbitMQ","MassTransit","Jenkins","Docker","Git","Jira","Confluence","Azure Synapse"]},{"company":"MOTIONVFX sp. z o.o.","job_title":"Software Developer (video applications)","location":"Multiple locations offer (16)","tags":["C","C++"]},{"company":"Be in iT","job_title":"Lead GCP Data Engineer","location":"Oferta w wielu lokalizacjach (16)","tags":["Google Cloud Platform","Scala","Python","Java"]},{"company":"Be in iT","job_title":"SQL Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["SQL","MS SQL","SSIS"]},{"company":"Be in iT","job_title":"GCP Data Engineer","location":"Oferta w wielu lokalizacjach (16)","tags":["Java","Python","Google Cloud Platform"]},{"company":"smallbs","job_title":"Programista Frontend (React)","location":"Rzesz\xf3w (Polska)","tags":["React","HTML","CSS"]},{"company":"ADHD INTERACTIVE SDN SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ SP\xd3ŁKA KOMANDYTOWA","job_title":"IT Project Manager","location":"Poznań (Polska)","tags":["Jira","Trello","Zoho"]},{"company":"IT Connect Sp. z o.o.","job_title":"Product Manager","location":"Warszawa (Polska)","tags":["Big Data","Power BI"]},{"company":"Ringier Axel Springer Polska Sp. z o.o.","job_title":"Senior Backend Engineer - Node.js","location":"Oferta w wielu lokalizacjach (3)","tags":["Node.js","JavaScript","Microserwisy","SQL","NoSQL"]},{"company":"LUX MED Sp. z o.o.","job_title":"Programista Front-end (Magento2)","location":"Warszawa (Polska)","tags":["HTML5","CSS","LESS","SASS","Magento2","Knockout.js","JavaScript","npm/yarn","grunt/gulp","Bootstrap 4+","Responsive Web Design","REST","Git"]},{"company":"ALIOR BANK","job_title":"Specjalista ds. Bezpieczeństwa IT w zespole utrzymania bezpieczeństwa IT","location":"Oferta w wielu lokalizacjach (3)","tags":[]},{"company":"SCD AUTOMATION SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Junior PLC Programmer","location":"Poznań (Polska)","tags":[]},{"company":"Samsung R&D Institute Poland","job_title":"C/C++ Developer for 5G RAN (Mid-level)","location":"Krak\xf3w (Poland)","tags":["C","C++","Python","Yang","Kubernetes","Docker","Microservice Architecture","OpenStack","CI/CD"]},{"company":"Systell sp\xf3łka z ograniczoną odpowiedzialnością sp.k.","job_title":"React Developer","location":"Poznań (Polska)","tags":[]},{"company":"Capgemini Software Solutions Center","job_title":"Performance Tester","location":"Oferta w wielu lokalizacjach (3)","tags":["Java/JS/C#","Jmeter","Docker/Jenkins","WebServices"]},{"company":"Capgemini Software Solutions Center","job_title":"Senior BigData Expert","location":"Oferta w wielu lokalizacjach (3)","tags":["Cloudera","Spark","Kafka","Hive"]},{"company":"Capgemini Software Solutions Center","job_title":"Testing Delivery Manager","location":"Gdańsk (Polska)","tags":[]},{"company":"Capgemini Software Solutions Center","job_title":"SecOps Tester","location":"Oferta w wielu lokalizacjach (3)","tags":["Java","JavaScript","C#","Bash","Burp","Jenkins","Docker","Kubernetes"]},{"company":"Capgemini Polska","job_title":"Guidewire Developer","location":"Multiple locations offer (6)","tags":["Java","Angular JS"]},{"company":"BPO SERVICES sp. z o.o.","job_title":"IT Operator with SQL","location":"Biskupice Podg\xf3rne (pow. wrocławski) (Polska)","tags":["Microsoft SQL Server","MySQL","SQL"]},{"company":"PwC","job_title":"Azure Cloud Architect / Cloud Engineer","location":"Oferta w wielu lokalizacjach (16)","tags":["Azure"]},{"company":"Samsung R&D Institute Poland","job_title":"Senior C++ / C# Software Developer","location":"Warszawa (Poland)","tags":["C++","OpenGL","Git","GitHub","Jira","Gerrit","C#"]},{"company":"Capgemini Software Solutions Center","job_title":"Senior AWS Data Architect","location":"Oferta w wielu lokalizacjach (3)","tags":["AWS","Python","SQL","Bash","IaC"]},{"company":"Capgemini Software Solutions Center","job_title":"Project Manager","location":"Poznań (Polska)","tags":["SDLC"]},{"company":"ALIOR BANK","job_title":"Młodszy Specjalista ds. Automatyzacji Proces\xf3w","location":"Gdańsk (Polska)","tags":["SQL","Power Query","MS Office"]},{"company":"ALIOR BANK","job_title":"Applications Administrator","location":"Gdańsk (Polska)","tags":[]},{"company":"ALIOR BANK","job_title":"Linux Administrator","location":"Oferta w wielu lokalizacjach (3)","tags":["UNIX","Linux"]},{"company":"ALIOR BANK","job_title":"Ekspert ds. Bezpieczeństwa IT w Zespole Rozwoju Bezpieczeństwa IT","location":"Oferta w wielu lokalizacjach (3)","tags":[]},{"company":"ALIOR BANK","job_title":"Ekspert ds. Audytu IT i Ryzyka Operacyjnego","location":"Oferta w wielu lokalizacjach (3)","tags":[]},{"company":"Deloitte CE BSC Rzesz\xf3w","job_title":"IT Security Engineer","location":"Multiple locations offer (16)","tags":["PowerShell","Python"]},{"company":" VlogIT Sp. z o.o.","job_title":"Programista iOS","location":"Oferta w wielu lokalizacjach (3)","tags":["Swift","iOS"]},{"company":" VlogIT Sp. z o.o.","job_title":"Programista Android","location":"Oferta w wielu lokalizacjach (3)","tags":["Kotlin","Java","Android"]},{"company":"ITECHART GROUP sp. z o.o.","job_title":"Middle Data Engineer","location":"Ł\xf3dź (Poland)","tags":["Spark","Kafka","SQL","Python","Java","Scala","Golang","AWS","GCP","Azure","ETL","Docker","Kubernetes"]},{"company":"ITECHART GROUP sp. z o.o.","job_title":"Senior Golang Developer","location":"Wrocław (Poland)","tags":["Kubernetes","Docker","AWS","Google Cloud Platform","Travis","MongoDB","Elasticsearch","Neo4j","Redis","PostgreSQL","MySQL","gRPC","RabbitMQ","Kafka","REST","Agile"]},{"company":"Viessmann R&D Center","job_title":"Software Architect for EMS (Embedded/Backend/Frontend)","location":"Wrocław (Poland)","tags":["scrum","kanban","Git","Jira","Bitbucket"]},{"company":"DEVQUBE sp. z o.o.","job_title":"Frontend Developer","location":"Multiple locations offer (16)","tags":["JavaScript","Angular","React.js","Vue.js"]},{"company":"Emitel S.A.","job_title":"Starszy Specjalista ds. System\xf3w Informatycznych / Administrator Windows (k/m)","location":"Oferta w wielu lokalizacjach (2)","tags":["Windows Server","MS Exchange","MS SQL Server","Active Directory","VMware"]},{"company":"Cyclad","job_title":"Network Administrator","location":"Katowice (Poland)","tags":["Cisco","Palo Alto","Dell"]},{"company":"APLIKACJE KRYTYCZNE sp. z o.o.","job_title":"Analityk Biznesowy","location":"Warszawa (Polska)","tags":[]},{"company":"CLAUDE ICT POLAND SP Z O O","job_title":"Inżynier ds. Wewnętrznego Wsparcia Technicznego","location":"Gliwice (Polska)","tags":["Red Hat","CentOS","Debian"]},{"company":"Citi Handlowy","job_title":"Menedżer Biura Operacji ds. Bezpieczeństwa Informacji (VP)","location":"Warszawa (Polska)","tags":[]},{"company":"PIT-RADWAR S.A. ","job_title":"Programista C++ (Local Air Picture)","location":"Warszawa (Polska)","tags":["C++","MATLAB"]},{"company":"AstraZeneca Pharma","job_title":"Resourcing Project Expert (18 months secondment/fixed term contract)","location":"Multiple locations offer (2)","tags":[]},{"company":"ERGO Technology & Services S.A.","job_title":"Junior ABAP Developer","location":"Multiple locations offer (2)","tags":["SAP ABAP"]},{"company":"DSV ISS","job_title":"IT Senior Manager, Strategy and Transformation","location":"Warszawa (Poland)","tags":[]},{"company":"Nexio Management Sp. z o.o.","job_title":"Architekt IT","location":"Oferta w wielu lokalizacjach (16)","tags":[]},{"company":"HCL Poland","job_title":"Java Developer - API","location":"Warszawa (Polska)","tags":["Java","C++","Python","Spring Framework","Oracle","MySQL","Eclipse","Jenkins"]},{"company":"Generali","job_title":"Specjalista ds. Bezpieczeństwa IT","location":"Oferta w wielu lokalizacjach (3)","tags":["SIEM","DLP","EDR","Nessus"]},{"company":"ING Hubs Poland","job_title":"Python Developer with SQL","location":"Katowice (Poland)","tags":["Python","SQL","Bash","Git"]},{"company":"Soflab Technology Sp. z o.o.","job_title":"Tester","location":"Oferta w wielu lokalizacjach (3)","tags":["SQL"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Storage and File Service Engineer","location":"Multiple locations offer (3)","tags":[]},{"company":"Tomma Diagnostyka Obrazowa S.A.","job_title":"Młodszy Specjalista ds. Obsługi Zgłoszeń IT (K/M)","location":"Poznań (Polska)","tags":["SQL"]},{"company":"Tomma Diagnostyka Obrazowa S.A.","job_title":"Administrator System\xf3w IT (Hardware) (K/M)","location":"Poznań (Polska)","tags":["Windows Server"]},{"company":"Tomma Diagnostyka Obrazowa S.A.","job_title":"Młodszy Administrator System\xf3w IT (Sieci Komputerowe) (K/M)","location":"Poznań (Polska)","tags":["Windows Server"]},{"company":"KMD Poland Sp. z o.o.","job_title":"Senior SOC Specialist","location":"Warszawa (Poland)","tags":[]},{"company":"L\xf6dige Poland Sp. z o.o.","job_title":"Programista PLC","location":"Tychy (Polska)","tags":[]},{"company":"PKN ORLEN S.A.","job_title":"Specjalista w Dziale Cyberbezpieczeństwa OT​","location":"Oferta w wielu lokalizacjach (3)","tags":["IDS","IPS","NGFW","AV","SIEM","AWL","IAM","Środowiska Wirtualne","Skanery podatności"]},{"company":"Rossmann SDP","job_title":"Analityk ds. Optymalizacji Proces\xf3w – Drogerie","location":"Ł\xf3dź (Polska)","tags":[]},{"company":"Bank Pekao","job_title":"Architekt - Senior Java Developer w Departamencie Rozwoju System\xf3w Biznesowych","location":"Warszawa (Polska)","tags":["Java","Spring Boot","Docker","Kubernetes","Apache Kafka","MQ","Jira","Confluence","Git","Maven","Jenkins","JUnit","DevOps"]},{"company":"Bank Pekao","job_title":"Angular Developer w Departamencie Rozwoju System\xf3w Biznesowych","location":"Warszawa (Polska)","tags":["Angular","JavaScript","HTML5","CSS3","SASS","TypeScript","RxJS","NodeJS"]},{"company":"Bank Pekao","job_title":"Analityk IT w Zespole Bankowości Elektronicznej","location":"Warszawa (Polska)","tags":["CI/CD","Jira / Confluence","Docker","Kubernetes","Enterprise Architect","SQL"]},{"company":"Bank Pekao","job_title":"Administrator DB2","location":"Ł\xf3dź (Polska)","tags":[]},{"company":"Qurate Retail Group Global Business Services","job_title":"Associate Cybersecurity Analyst (2nd shift)","location":"Krak\xf3w (Poland)","tags":["Active Directory","SAP","Oracle","CyberArk","Unix"]},{"company":"Bank Pekao","job_title":"Specjalista ds. Rozwoju i Utrzymania Systemu SCCM","location":"Ł\xf3dź (Polska)","tags":["PowerShell","VB"]},{"company":"OPONEO.PL S.A.","job_title":"Junior .NET Developer","location":"Bydgoszcz (Polska)","tags":["C#","SQL",".NET"]},{"company":"Nokia","job_title":"Linux Scripting DevOps Working Student with Bash/Python","location":"Multiple locations offer (16)","tags":["Git","Bash"]},{"company":"Cyclad","job_title":"Software Engineer C++ (travel)","location":"Multiple locations offer (16)","tags":["C++","Objective-C","Python","Azure DevOps"]},{"company":"Cyclad","job_title":"System Architect (travel)","location":"Multiple locations offer (16)","tags":["Java","Azure DevOps","Kotlin","Kubernetes","TypeScript","Android","Azure Cosmos DB"]},{"company":"Cyclad","job_title":"Business Analyst","location":"Multiple locations offer (16)","tags":["Jira","Confluence"]},{"company":"Polska Grupa Lotnicza","job_title":"Administrator System\xf3w Linux","location":"Warszawa (Polska)","tags":["Linux","VMware","Red Hat","CentOS","Bash"]},{"company":"Rockitworks Sp. z o.o.","job_title":"Developer .Net Full-stack","location":"Oferta w wielu lokalizacjach (2)","tags":[".NET","T-SQL","Microsoft SQL Server","ASP.NET","Angular","Entity Framework","NHibernate","JavaScript","jQuery","HTML","CSS","Visual Studio","Git"]},{"company":"Booksy International Sp. z o.o.","job_title":"QA Engineer","location":"Oferta w wielu lokalizacjach (16)","tags":[]},{"company":"Samsung R&D Institute Poland","job_title":"Internship - Intern in Broadcast Software Group","location":"Warszawa (Poland)","tags":["C","C++"]},{"company":"IKEA IT Service Desk Warszawa/Okęcie","job_title":"IT Support Advisor with French","location":"Warszawa (Poland)","tags":["TCP/IP","Active Directory","LAN/WLAN"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"SAP MM Consultant with German language","location":"Warszawa (Poland)","tags":["SAP"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Mac Developer","location":"Ł\xf3dź (Poland)","tags":["Bash","Python","Swift","Flutter","Docker","VMware","Jenkins"]},{"company":"NETZSCH Instrumenty Sp. z o.o","job_title":"Software Quality Assurance Manager - Software Tester","location":"Krak\xf3w (Poland)","tags":[".NET"]},{"company":"NETZSCH Instrumenty Sp. z o.o","job_title":"Back-End Software Developer – Azure & .NET","location":"Krak\xf3w (Poland)","tags":[".NET","Azure","C#","Git","Azure DevOps","Kubernetes","Docker"]},{"company":"NETZSCH Instrumenty Sp. z o.o","job_title":"Cloud Architect - Microsoft Azure","location":"Krak\xf3w (Poland)","tags":["Microsoft Azure"]},{"company":"NETZSCH Instrumenty Sp. z o.o","job_title":"Full-Stack Software Developer – Tools & Processes","location":"Krak\xf3w (Poland)","tags":[".NET","C#","C++","Azure DevOps","Visual Studio","DevOps","Qt"]},{"company":"NETZSCH Instrumenty Sp. z o.o","job_title":"Software Architect – Cloud & On Premises","location":"Krak\xf3w (Poland)","tags":[".NET","Azure","ASP.NET Core MVC"]},{"company":"NETZSCH Instrumenty Sp. z o.o","job_title":"Front-End Software Developer -.NET","location":"Krak\xf3w (Poland)","tags":[".NET","C#","HTML5","CSS3","React","Angular"]},{"company":"STARTUP DEVELOPMENT HOUSE sp. z o.o.","job_title":"Node.js Developer","location":"Warszawa (Poland)","tags":["Node.js","JavaScript"]},{"company":"STARTUP DEVELOPMENT HOUSE sp. z o.o.","job_title":"Senior Node.js Developer","location":"Warszawa (Poland)","tags":["Node.js","JavaScript"]},{"company":"STARTUP DEVELOPMENT HOUSE sp. z o.o.","job_title":"Senior React Native Developer","location":"Warszawa (Poland)","tags":["React Native","JavaScript","React.js","Kotlin","Swift","Objective-C"]},{"company":"STARTUP DEVELOPMENT HOUSE sp. z o.o.","job_title":"React Native Developer","location":"Warszawa (Poland)","tags":["React Native","JavaScript","React.js"]},{"company":"Booksy International Sp. z o.o.","job_title":"JavaScript Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["JavaScript","TypeScript","Vue 2.x","Vue 3.x","Veux","Pinia","Jest"]},{"company":"Zaven Sp. z o.o.","job_title":"Senior Database Developer","location":"Wrocław (Polska)","tags":["MS SQL Server","SQL Profiler","HammerDB","SQL Service Broker","T-SQL"]},{"company":"Zaven Sp. z o.o.","job_title":"Senior .Net Developer","location":"Wrocław (Polska)","tags":["ASP.NET MVC5","ASP.NET WEB API","Entity Framework","ASP.NET Core","T-SQL","MS SQL","Visual Studio","Azure/Azure DevOps","Azure Functions"]},{"company":"PN standard sp. z o.o.","job_title":"Administrator System\xf3w IT","location":"Warszawa (Polska)","tags":["Windows Server","Sieci komputerowe"]},{"company":"TELEAUDIO DWA Sp\xf3łka z ograniczoną odpowiedzialnością Sp\xf3łka Komandytowa","job_title":"Programista .NET","location":"Warszawa (Polska)","tags":[".NET Core","SQL","Angular","Elasticsearch"]},{"company":"PN standard sp. z o.o.","job_title":"Inspektor Bezpieczeństwa Teleinformatycznego","location":"Oferta w wielu lokalizacjach (2)","tags":["Windows Server","Windows Desktop"]},{"company":"LUX MED Sp. z o.o.","job_title":"Administrator Infrastruktury Sieciowej","location":"Warszawa (Polska)","tags":["Cisco","Fortinet","ManageEngine","F5","Dell"]},{"company":"ING Bank Śląski S.A.","job_title":"Analityk Systemowy IT- projekt Modułu Obsługi Kredyt\xf3w","location":"Oferta w wielu lokalizacjach (16)","tags":["UML","SQL"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"Content Developer (Wealth & Personal Banking IT)","location":"Krak\xf3w (Poland)","tags":[]},{"company":"HCL Poland","job_title":"Java Software Engineer","location":"Warszawa (Polska)","tags":["Java","OOPS","Spring Framework","Node.js"]},{"company":"Montrose Software (Polska) Sp. z o.o.","job_title":"Remote Mid C++ Developer","location":"Krak\xf3w (Poland)","tags":["C++","Git"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Frontend Engineer (M/F)","location":"Warszawa (Poland)","tags":["Java","Spring Boot","Angular","TypeScript","Terraform","Kubernetes"]},{"company":"Spacecamp ","job_title":"UX Designer","location":"Multiple locations offer (16)","tags":["UX"]},{"company":"Spacecamp ","job_title":"UX Researcher","location":"Multiple locations offer (16)","tags":["UX"]},{"company":"IT Connect Sp. z o.o.","job_title":"Architekt Systemu IT","location":"Warszawa (Polska)","tags":["TCP/IP","HTTP","DIAMETER","OpenStack","Docker","Python","Bash"]},{"company":"Jeronimo Martins Polska S.A.","job_title":"SAP Basis Administrator","location":"Kostrzyn (Poland)","tags":["SAP Basis"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"BI Development Engineer (Wealth & Personal Banking IT)","location":"Krak\xf3w (Poland)","tags":[]},{"company":"Cyclad","job_title":"Automotive Architect","location":"Multiple locations offer (16)","tags":["UML","C","C++","Android"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"Integration Engineer (Wealth & Personal Banking IT)","location":"Krak\xf3w (Poland)","tags":[]},{"company":"Be in iT","job_title":"Informatica Power Center Administrator","location":"Oferta w wielu lokalizacjach (16)","tags":["Informatica Power Center","PowerShell","PL/SQL","SoapUI"]},{"company":"Arla Global Shared Services Sp. z o.o.","job_title":"Scrum Master","location":"Gdańsk (Poland)","tags":[]},{"company":"Apator Rector Sp. z o.o.","job_title":"Kierownik Projektu","location":"Zielona G\xf3ra (Polska)","tags":["MS Project","Jira","Confluence"]},{"company":"Neontri","job_title":"Analityk Biznesowo - Systemowy","location":"Warszawa (Polska)","tags":["Jira","Confluence","UML","BPMN","SQL","Oracle"]},{"company":"Giganci Programowania sp. z o.o.","job_title":"Trener Programowania dla dzieci i młodzieży","location":"Oferta w wielu lokalizacjach (69)","tags":[]},{"company":"ING Bank Śląski S.A.","job_title":"Analityk Systemowo – Biznesowy projekt Next Gen - FE Out Procesy Kredytowe","location":"Oferta w wielu lokalizacjach (16)","tags":["SQL","Ferryt","UML","BMPN"]},{"company":"CREDIT SUISSE Poland","job_title":"Senior Credit Risk Reporting Analyst","location":"Wrocław (Poland)","tags":[]},{"company":"HEINEKEN Global Shared Services","job_title":"Technology Specialist - Front End Developer","location":"Krak\xf3w (Poland)","tags":["JavaScript","HTML & CSS","Angular","React or Vue","Git"]},{"company":"Polkomtel Sp. z o.o.","job_title":"Administrator Systemu Linux","location":"Warszawa (Polska)","tags":[]},{"company":"ING Bank Śląski S.A.","job_title":"Tester Automatyzujący","location":"Oferta w wielu lokalizacjach (16)","tags":["Postman","REST Assured","SQL","Azure","Maven","Selenium"]},{"company":"GlobalLogic Poland","job_title":"Senior QA Automation Engineer","location":"Multiple locations offer (3)","tags":["API Testing","Java","JavaScript","Selenium"]},{"company":"IT Connect Sp. z o.o.","job_title":"Tester Oprogramowania","location":"Warszawa (Polska)","tags":["Jira","Test FLO"]},{"company":"ASTEK Polska","job_title":"Dokumentalista","location":"Wrocław (Polska)","tags":[]},{"company":"Acxiom Global Service Center Polska sp. z o. o","job_title":"Remote mid/senior Big Data Infrastructure Engineer","location":"Multiple locations offer (16)","tags":["Hadoop","Perl","Python","Bash","Linux","SQL"]},{"company":"ING Bank Śląski S.A.","job_title":"Tester Automatyzujący","location":"Oferta w wielu lokalizacjach (16)","tags":["Java","Selenium"]},{"company":"PKO Leasing S.A.","job_title":"Specjalista ds. Utrzymania System\xf3w Informatycznych (Bazy Danych)","location":"Warszawa (Polska)","tags":["SQL"]},{"company":"Acxiom Global Service Center Polska sp. z o. o","job_title":"Remote mid/senior Cloud Automation Engineer (AWS/GCP)","location":"Multiple locations offer (16)","tags":["AWS","GCP","Azure","JavaScript","Python","Perl"]},{"company":"SYZYGY","job_title":"Angular Developer_ka z mindsetem DevOps","location":"Warszawa (Polska)","tags":["Angular","Unit Testing","DevOps","Node.js"]},{"company":"NASK","job_title":"Architekt/ka System\xf3w IT","location":"Warszawa (Polska)","tags":[]},{"company":"RECRU.TO SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Programista .NET","location":"Gliwice (Polska)","tags":["C#",".NET Framework","WPF","WCF","MySQL"]},{"company":"Symfonia sp. z o.o.","job_title":"Delphi Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["Delphi XE4","MS SQL"]},{"company":"QIAGEN BUSINESS SERVICES","job_title":"Senior Technical Consultant SAP Fiori/ABAP (m/f/d)","location":"Wrocław (Poland)","tags":["SAP","SAP ABAP"]},{"company":"Biuro Informacji Kredytowej","job_title":"Projektant - Programista","location":"Warszawa (Polska)","tags":["Java","Spring","Oracle","MongoDB","Microsoft Azure","ESB","BPMS","MQseries","Kafka","Redis","Angular","Docker","Kubernetes","Splunk","ELK","Scrum","OKR"]},{"company":"uPacjenta","job_title":"Senior Product Designer","location":"Multiple locations offer (2)","tags":["Agile","Scrum","Figma"]},{"company":"Acxiom Global Service Center Polska sp. z o. o","job_title":"Network Operations Engineer – NOC","location":"Multiple locations offer (16)","tags":["Cisco","Arista","Palo Alto","Fortinet","A10"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"Scrum Master (ITID End User Services)","location":"Krak\xf3w (Poland)","tags":["Scrum","Kanban","Jira","Confluence"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(CTO EUS Operations) IT Capacity and Reporting Specialist","location":"Krak\xf3w (Poland)","tags":["SQL"]},{"company":"RECRU.TO SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Programista Harbour / Clipper","location":"Krak\xf3w (Polska)","tags":["Harbour","Clipper","FoxPro","SQL"]},{"company":"Data Space Sp. z o. o.","job_title":"Technical Specialist","location":"Toruń (Polska)","tags":["IPv4","IPv6","Linux","Windows Server"]},{"company":"Unum Życie TUiR S.A.","job_title":"Specjalista ds. usług IT","location":"Warszawa (Polska)","tags":[]},{"company":"T-Mobile","job_title":"AWS Engineer","location":"Warszawa (Poland)","tags":["Python","Terraform","CDK","AWS CloudFormation","Jenkins"]},{"company":"Biuro Informacji Kredytowej","job_title":"Analityk ds. Test\xf3w","location":"Warszawa (Polska)","tags":["Jira","Confluence","Swagger","JSON","YAML"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Full Stack Software Developer","location":"Warszawa (Poland)","tags":["Java",".NET","Python","Node.js","Go","Docker","Git","Kubernetes","SQL","MongoDB","Angular","HTML","CSS","JavaScript","Jenkins"]},{"company":"Bankowy Fundusz Gwarancyjny","job_title":"Specjalista w Wydziale Wsparcia Teleinformatycznego w Departamencie Informatyki","location":"Warszawa (Polska)","tags":["Active Directory"]},{"company":"BNY Mellon Poland","job_title":"Full-time Graduate Program Securities Services and Digital Wroclaw","location":"Wrocław (Poland)","tags":[]},{"company":"MHC Mobility sp. z o.o.","job_title":"IT Specialist","location":"Warszawa (Poland)","tags":["Active Directory","Citrix","Nutanix","Print Server","MSSQL"]},{"company":"SOFTIQ sp. z o.o.","job_title":"Java Developer","location":"Oferta w wielu lokalizacjach (3)","tags":["SQL","PostgreSQL","Oracle","Spring Boot","Maven","Gradle","Git","Continous Integration/Delivery","API REST/SOAP"]},{"company":"BNY Mellon Poland","job_title":"2023 Summer Internship Program in Technology: Student Technology, Agile & Readiness Training (S.T.A.R.T)","location":"Wrocław (Poland)","tags":["Java"]},{"company":"BNY Mellon Poland","job_title":"2023 Full Time Graduate Program (SETUP) in Technology at BNY Mellon Poland","location":"Wrocław (Poland)","tags":["Java"]},{"company":"Affirm","job_title":"Senior Software Engineer, Machine Learning (Credit Engineering)","location":"Multiple locations offer (16)","tags":["Python","Docker","Kafka"]},{"company":"Bank Millennium S.A.","job_title":"IT Service Desk Team Leader","location":"Warszawa (Polska)","tags":["Windows 10","MS Office 365"]},{"company":"BNY Mellon Poland","job_title":"Senior Analyst - Data Management & Quantitative Analysis","location":"Wrocław (Poland)","tags":["C/C++","C#","Java","FORTRAN","MATLAB","SAS"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Platform / Build Engineer for Hosted Web Applications","location":"Multiple locations offer (3)","tags":["Docker","Java","Jira"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Solution Architect - Consultant – IT Super Hero but paid","location":"Multiple locations offer (3)","tags":["Azure DevOps"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"DevOps #LikeABosch","location":"Multiple locations offer (3)","tags":["Linux","Ansible","Splunk","Python","Bash"]},{"company":"Affirm","job_title":"Senior Staff Engineer (Service Infrastructure)","location":"Multiple locations offer (16)","tags":["AWS","Kubernetes"]},{"company":"Affirm","job_title":"Senior Staff Software Engineer, Backend (Developer Productivity)","location":"Multiple locations offer (16)","tags":["AWS","Kubernetes"]},{"company":"Affirm","job_title":"Software Engineer, Backend (Debit+)","location":"Multiple locations offer (16)","tags":[]},{"company":"Affirm","job_title":"Software Engineer, Backend (Debit+ Risk)","location":"Multiple locations offer (16)","tags":[]},{"company":"Affirm","job_title":"Software Engineer, Backend (Developer Productivity)","location":"Multiple locations offer (16)","tags":[]},{"company":"Affirm","job_title":"Software Engineer, Backend (Financial Reporting)","location":"Multiple locations offer (16)","tags":[]},{"company":"Nippon Seiki (Europe) B.V. sp z o.o. oddział w Polsce","job_title":"Junior Software Engineer (Automotive)","location":"Gdańsk (Poland)","tags":["C"]},{"company":"ERGO Technology & Services S.A.","job_title":"ETL Developer (IBM DataStage)","location":"Gdańsk (Poland)","tags":[]},{"company":"Affirm","job_title":"Staff Software Engineer, Backend (Financial Reporting)","location":"Multiple locations offer (16)","tags":[]},{"company":"Affirm","job_title":"Staff Software Engineer, Backend (Online Storage)","location":"Multiple locations offer (16)","tags":["Python","Kotlin","Scala"]},{"company":"PIT-RADWAR S.A. ","job_title":"Młodszy Programista C/C++","location":"Warszawa (Polska)","tags":["C","C++"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(Investment Banking Tech) Senior Java Engineer in GFX Trade Reporting","location":"Krak\xf3w (Poland)","tags":["Java"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(Investment Banking Tech) Senior Software Engineer (Java) in Surveillance IT","location":"Krak\xf3w (Poland)","tags":["Java","Spring Boot","Spring","TDD","Bash","Linux"]},{"company":"Bank Pekao","job_title":"Specjalista ds. Monitorowania System\xf3w","location":"Ł\xf3dź (Polska)","tags":[]},{"company":"ASTEK Polska","job_title":"Java Developer","location":"Warszawa (Polska)","tags":["Java","Spring Boot","Spring Framework","Hibernate","Azure DevOps"]},{"company":"SOFTWARE MIND","job_title":"Back-end Software Engineer (Java)","location":"Multiple locations offer (16)","tags":["Java","Spring","Kafka","AWS","Docker","Terraform","SQL","MongoDB","WebSockets","GitLab","REST"]},{"company":"SOFTWARE MIND","job_title":"Back-end Software Engineer (PHP)","location":"Krak\xf3w (Poland)","tags":["PHP","JavaScript","CI/CD","SQL","Karma","Jasmine","Psalm","PHPStan","PHPUnit"]},{"company":"SOFTWARE MIND","job_title":"Solution Architect","location":"Krak\xf3w (Poland)","tags":["C#",".NET Core","Docker","JavaScript","SQL","Kubernetes"]},{"company":"NORDEA Bank Abp SA Oddział w Polsce","job_title":"Information Analyst - Data Steward","location":"Multiple locations offer (2)","tags":["SQL"]},{"company":"BIOGEN POLAND","job_title":"SDTM Programmer/Analyst","location":"Warszawa (Poland)","tags":["SAS"]},{"company":"Faurecia Automotive Polska S.A.","job_title":"Specjalista IT","location":"Gorz\xf3w Wielkopolski (Polska)","tags":["Windows Server","VMware"]},{"company":"GroMar Sp. z o.o.","job_title":"PHP Developer","location":"Ł\xf3dź (Polska)","tags":["PHP","JavaScript","Symfony","React.js","PostgreSQL"]},{"company":"Reply Polska Sp. z o.o.","job_title":"Embedded Software Engineer in Automotive Industry","location":"Katowice (Poland)","tags":["C","C++","AWS","Microsoft","Jira","Enterprise Architect"]},{"company":"RECRU.TO SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Product Owner","location":"Warszawa (Polska)","tags":["Scrum","Agile","Jira","DevOps","Redmine","SQL"]},{"company":"Zakłady Automatyki KOMBUD S.A.","job_title":"Programista C++","location":"Radom (Polska)","tags":["C++","Visual Studio","Git"]},{"company":"Bank Pekao","job_title":"Manager Zespołu Inżynierii Danych","location":"Warszawa (Polska)","tags":["ETL","Ab Initio"]},{"company":"Asseco Business Solutions S.A.","job_title":"IT Sales Development Representative","location":"Lublin (Poland)","tags":[]},{"company":"AstraZeneca Pharma","job_title":"Operational Excellence Leader - Europe","location":"Warszawa (Poland)","tags":[]},{"company":"Sii Sp. z o.o.","job_title":"Java Test Developer","location":"Multiple locations offer (10)","tags":["Java","Selenium WebDriver"]},{"company":"Instytut Łączności-Państwowy Instytut Badawczy","job_title":"Starszy Programista Java","location":"Warszawa (Polska)","tags":["Java"]},{"company":"RECRU.TO SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Specjalista ds. hurtowni danych","location":"Warszawa (Polska)","tags":["SQL","ETL","BI"]},{"company":"RECRU.TO SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Programista baz danych","location":"Lublin (Polska)","tags":["Microsoft SQL Server",".NET","C#","Git"]},{"company":"PIT-RADWAR S.A. ","job_title":"Projektant - Inżynier test\xf3w automatycznych","location":"Warszawa (Polska)","tags":[]},{"company":"Bee Talents","job_title":"Backend Software Engineer","location":"Poznań (Poland)","tags":["Java","Spring Boot","REST","Docker","Kubernetes"]},{"company":"Bee Talents","job_title":"Senior Software Engineer - Mobile","location":"Poznań (Poland)","tags":["Java","Kotlin","SOLID","KISS","DRY","Clean Architecture"]},{"company":"Acxiom Global Service Center Polska sp. z o. o","job_title":"Tester (REST API/Databases)","location":"Multiple locations offer (16)","tags":["SQL","REST API","MongoDB","MSSQL","Jenkins","Git","TestRail"]},{"company":"Objectivity sp. z o.o.","job_title":"DevOps Engineer with Azure","location":"Multiple locations offer (16)","tags":["Git","Docker","Kubernetes","Babel","PowerShell"]},{"company":"Objectivity sp. z o.o.","job_title":"DevOps Engineer with AWS","location":"Multiple locations offer (16)","tags":["Git","Windows Server","Linux"]},{"company":"Bank Millennium S.A.","job_title":"Młodszy Tester Aplikacji","location":"Warszawa (Polska)","tags":[]},{"company":"UNITY-T GROUP sp. z o.o. sp.k.","job_title":"Programista PHP","location":"Warszawa (Polska)","tags":["PHP","JavaScript","SQL"]},{"company":"ANGRY NERDS","job_title":"Delivery Manager","location":"Oferta w wielu lokalizacjach (16)","tags":["Azure DevOps","Jira","Trello"]},{"company":"ANGRY NERDS","job_title":"IT Project Manager","location":"Oferta w wielu lokalizacjach (16)","tags":[".NET","Angular","React.js","iOS","Android","Azure DevOps","Jira","Confluence","Git"]},{"company":"ANGRY NERDS","job_title":"Senior DevOps Engineer","location":"Oferta w wielu lokalizacjach (16)","tags":["Microsoft Azure","AWS","Azure DevOps","Docker","Kubernetes"]},{"company":"ANGRY NERDS","job_title":"UX/UI Designer","location":"Oferta w wielu lokalizacjach (16)","tags":["Figma"]},{"company":"ANGRY NERDS","job_title":"Junior iOS Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["iOS","CocoaPods","Swift Package Manager","Carthage"]},{"company":"Nandi","job_title":"Dynamic CRM Engineer","location":"Multiple locations offer (6)","tags":["Dynamic CRM"]},{"company":"StepStone Services Sp. z o.o.","job_title":"Java Developer (Big Data)","location":"Warszawa (Polska)","tags":["Java"]},{"company":"Samsung R&D Institute Poland","job_title":"Internsip - LTE/5G Mobile Telecommunication Intern","location":"Warszawa (Poland)","tags":["UMTS","LTE","5G"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"SAP PP Consultant with German language","location":"Warszawa (Poland)","tags":["SAP"]},{"company":"Deloitte Polska","job_title":"SAP EWM Lead","location":"Multiple locations offer (7)","tags":["SAP EWM"]},{"company":"Affirm","job_title":"Staff Software Engineer, Backend (Purchasing)","location":"Multiple locations offer (16)","tags":["Python","RPC2","Redis","MySQL","AWS","Phabricator","Github"]},{"company":"Affirm","job_title":"Senior Product Manager, Trust & Safety Foundations","location":"Multiple locations offer (16)","tags":["Python"]},{"company":"Spyrosoft S.A. ","job_title":"C/C++ Software Engineer for Compiler","location":"Multiple locations offer (16)","tags":["C++","C"]},{"company":"Spyrosoft S.A. ","job_title":"Node.js Developer","location":"Multiple locations offer (16)","tags":["Node.js"]},{"company":"Feedink Sp. z o.o.","job_title":"Back-End Developer","location":"Warszawa (Polska)","tags":["PHP","Symfony","PostgreSQL","Docker"]},{"company":"DEPILACJA.PL sp. z o.o.","job_title":"Programista C/C++/Python","location":"Warszawa (Polska)","tags":["C++","Python","C","Git"]},{"company":"AWESOME BYTES sp. z o.o.","job_title":"Mid/ Regular Salesforce Developer","location":"Ł\xf3dź (Polska)","tags":["Salesforce","Java","Apex","CSS","HTML","JavaScript"]},{"company":"AWESOME BYTES sp. z o.o.","job_title":"Senior Salesforce Developer","location":"Ł\xf3dź (Polska)","tags":["Salesforce","Java","Apex","CSS","HTML","JavaScript","REST"]},{"company":"RST","job_title":"Software Tester (Automation)","location":"Oferta w wielu lokalizacjach (2)","tags":["Selenium","Java","Git"]},{"company":"RST","job_title":"Node.js Developer","location":"Oferta w wielu lokalizacjach (2)","tags":["TypeScript","Design Patterns"]},{"company":"RST","job_title":"Solution Architect","location":"Oferta w wielu lokalizacjach (2)","tags":["Kubernetes","Java","Azure"]},{"company":"COIG","job_title":"Technik IT","location":"Oferta w wielu lokalizacjach (2)","tags":[]},{"company":"Media Press ","job_title":"Programista .NET C#","location":"Oferta w wielu lokalizacjach (2)","tags":["C#","PostgreSQL",".NET Core"]},{"company":"ING Bank Śląski S.A.","job_title":"Java Developer - automatyzacja proces\xf3w","location":"Oferta w wielu lokalizacjach (16)","tags":["Java","REST API","SQL","Kafka","Spring Boot","Maven"]},{"company":"ING Bank Śląski S.A.","job_title":"Java Developer – Wsparcie Proces\xf3w Kredytowych","location":"Oferta w wielu lokalizacjach (16)","tags":["Java 8+","Spring Framework","Spring Boot","Apache Kafka","Oracle","PostgreSQL","NoSQL"]},{"company":"EY Global Delivery Services","job_title":"IoT Technologies Senior Developer","location":"Wrocław (Poland)","tags":["Microsoft Azure","Amazon AWS","Google Cloud"]},{"company":"EY Global Delivery Services","job_title":"Senior Test Automation Engineer","location":"Wrocław (Poland)","tags":["Java","SQL","Jira / Azure DevOps","Git","SVN"]},{"company":"DOBRYMECHANIK.PL SPOŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Designer UI/UX","location":"Warszawa (Polska)","tags":["iOS","Android","responsive web"]},{"company":"Lufthansa Systems","job_title":"Java/Kotlin Developer","location":"Gdańsk (Poland)","tags":["Spring Framework","Kotlin","Git","CI/CD","MongoDB","CosmosDB"]},{"company":"ING Bank Śląski S.A.","job_title":"Java Developer - Aplikacja Onboardingu Klient\xf3w Biznesowych","location":"Oferta w wielu lokalizacjach (16)","tags":["Java 11+","Spring Framework","Spring Boot"]},{"company":"Simplicity Recruitment","job_title":"Senior iOS Developer","location":"Oferta w wielu lokalizacjach (2)","tags":["iOS","Swift"]},{"company":"LINGUA HOUSE sp. z o.o.","job_title":"UI/UX Designer","location":"Multiple locations offer (16)","tags":["Figma","Sketch","Adobe InDesign"]},{"company":"ING Bank Śląski S.A.","job_title":"Java Developer w Departamencie Aplikacji Detalicznych","location":"Oferta w wielu lokalizacjach (16)","tags":["Java11","Spring Boot"]},{"company":" VlogIT Sp. z o.o.","job_title":"Młodszy Inżynier DevOps (AWS)","location":"Oferta w wielu lokalizacjach (16)","tags":["Python","Cloud","DevOps","IaC"]},{"company":"Lufthansa Systems","job_title":"Java Developer (Spring)","location":"Gdańsk (Poland)","tags":["Java","Spring Boot","Spring Framework","Git","CI/CD","Maven"]},{"company":"Connectis_","job_title":"C++ Developer","location":"Warszawa (Polska)","tags":["C++","mikroserwisy"]},{"company":"ING Bank Śląski S.A.","job_title":"Java Developer w Projekcie - Moduł Obsługi Kredyt\xf3w","location":"Oferta w wielu lokalizacjach (16)","tags":["Java 11","SpringBoot"]},{"company":"LAURENS COSTER sp. z o.o.","job_title":"Digital Analyst","location":"Multiple locations offer (2)","tags":["Google Analytics","Google Tag Manager","HTML","JavaScript"]},{"company":"Bank Pekao","job_title":"Administrator Systemu w Biurze Wsparcia Użytkownika","location":"Oferta w wielu lokalizacjach (2)","tags":[]},{"company":"Instytut Łączności-Państwowy Instytut Badawczy","job_title":"Specjalista . ds. jakości oprogramowania","location":"Warszawa (Polska)","tags":["Java","Selenium"]},{"company":"Instytut Łączności-Państwowy Instytut Badawczy","job_title":"Inżynier DevOps","location":"Warszawa (Polska)","tags":["GitLab","SVN","Jenkins","Maven","Docker","Kafka","MySQL","PostgreSQL"]},{"company":"DATAWIN GmbH Sp. z o.o. Oddział w Polsce","job_title":"Embedded Linux Software Developer","location":"Gliwice (Poland)","tags":["C","C++"]},{"company":"Instytut Łączności-Państwowy Instytut Badawczy","job_title":"Backend Developer","location":"Warszawa (Polska)","tags":["Java","JavaScript","webpack","Git","Kubernetes","Docker","Jenkins","GitLab"]},{"company":"DATAWIN GmbH Sp. z o.o. Oddział w Polsce","job_title":"C/C++ Embedded Developer","location":"Gliwice (Poland)","tags":["C","C++"]},{"company":"Instytut Łączności-Państwowy Instytut Badawczy","job_title":"Analityk IT","location":"Warszawa (Polska)","tags":[]},{"company":"Instytut Łączności-Państwowy Instytut Badawczy","job_title":"Programista Java","location":"Warszawa (Polska)","tags":["Java"]},{"company":"Lufthansa Systems","job_title":"Java and Reactive Programming","location":"Gdańsk (Poland)","tags":["Java","Spring Boot","Spring Framework","PAAS","SAAS","Cloud Storage","NoSql","DevOps"]},{"company":"Shiji Poland","job_title":"Cybersecurity - SOC/NOC Specialist","location":"Katowice (Poland)","tags":[]},{"company":"Vewd Software","job_title":"C++ Developer","location":"Multiple locations offer (2)","tags":["C++"]},{"company":"Connectis_","job_title":"Technical Product Owner/ Business Analyst","location":"Warszawa (Polska)","tags":["Jira","Confluence"]},{"company":"DPD Polska","job_title":"Specjalista ds. Bezpieczeństwa System\xf3w Informatycznych","location":"Warszawa (Polska)","tags":[]},{"company":"emagine sp. z o.o.","job_title":"IT Support Assistant","location":"Krak\xf3w (Poland)","tags":[]},{"company":"Euvic IT ","job_title":"Specjalista Service Desk","location":"Oferta w wielu lokalizacjach (2)","tags":[]},{"company":"NOVELPAY","job_title":"Android Developer","location":"Warszawa (Polska)","tags":["Java","Kotlin","Android SDK","RxJava 2","Retrofit"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"Product Analyst (Wealth & Personal Banking IT)","location":"Krak\xf3w (Poland)","tags":["Agile","Confluence","Jira","Splunk","AWS","Looker"]},{"company":"Systell sp\xf3łka z ograniczoną odpowiedzialnością sp.k.","job_title":"Product Manager/ Self-Service SaaS","location":"Poznań (Polska)","tags":["OTRS","Teams"]},{"company":"Objectivity sp. z o.o.","job_title":"Cloud Architect","location":"Multiple locations offer (16)","tags":["Azure","AWS","DevOps","Terraform","Ansible","Docker"]},{"company":"Bank Pekao","job_title":"Developer Platformy Ab Initio","location":"Warszawa (Polska)","tags":["Ab Initio","Bash","Shell","ETL"]},{"company":"Objectivity sp. z o.o.","job_title":"Java Technical Architect","location":"Multiple locations offer (16)","tags":["Java","Spring Framework","AWS","Angular","React.js","software architecture","English"]},{"company":"Objectivity sp. z o.o.","job_title":"(Cloud) Solution Architect","location":"Multiple locations offer (16)","tags":["Azure","CI/CD","AWS","REST API"]},{"company":"Objectivity sp. z o.o.","job_title":".Net/Azure Technical Architect","location":"Multiple locations offer (16)","tags":["C#",".NET","Azure","Microservices","REST API","Software Architecture","design patterns","analytical skills","CI/CD","English"]},{"company":"SCANDIWEB","job_title":"Junior Web Developer","location":"Multiple locations offer (16)","tags":["PHP","HTML","CSS","jQuery","MySQL"]},{"company":"Connectis_","job_title":"Tester Manualny","location":"Oferta w wielu lokalizacjach (2)","tags":["API"]},{"company":"Samsung R&D Institute Poland","job_title":"Internship - C/C++ Intern","location":"Warszawa (Poland)","tags":["C","C++","GitHub","Gerrit"]},{"company":"Be in iT","job_title":"Senior DataStage Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["IBM DataStage","SQL"]},{"company":"Nexio Management Sp. z o.o.","job_title":"Starszy Analityk Biznesowo-Systemowy","location":"Oferta w wielu lokalizacjach (3)","tags":["UML","BPMN","Enterprise Architect"]},{"company":"OPITZ CONSULTING Polska Sp. z o.o. ","job_title":"Associate System Engineer z językiem niemieckim","location":"Krak\xf3w (Polska)","tags":["Linux","Oracle","MSSQL"]},{"company":"PIT-RADWAR S.A. ","job_title":"Programista (Data Distribution Service)","location":"Warszawa (Polska)","tags":["C++"]},{"company":"TRUSTED SOFTWARE SERVICES sp. z o.o.","job_title":"Analityk Biznesowo-Systemowy","location":"Oferta w wielu lokalizacjach (16)","tags":["LDAP"]},{"company":"Affirm","job_title":"Senior Backend Engineer - Financial Crimes","location":"Multiple locations offer (16)","tags":["Python","Kotlin"]},{"company":"Affirm","job_title":"Senior Engineering Manager, Backend (Online Storage)","location":"Multiple locations offer (16)","tags":["Python"]},{"company":"Affirm","job_title":"Senior Software Engineer, Backend (Financial Reporting)","location":"Multiple locations offer (16)","tags":["Python","AWS"]},{"company":"Polkomtel Sp. z o.o.","job_title":"Inżynier ds. Zarządzania Siecią (Sieć Transportowa)","location":"Warszawa (Polska)","tags":[]},{"company":"Affirm","job_title":"Senior Software Engineer, Backend (Purchasing)","location":"Multiple locations offer (16)","tags":["Python","RPC2","Redis","MySQL","AWS","Github"]},{"company":"Affirm","job_title":"Engineering Manager, Machine Learning (Credit Engineering)","location":"Multiple locations offer (16)","tags":["SQL"]},{"company":"Affirm","job_title":"Senior Staff, Cloud Security Architect","location":"Multiple locations offer (16)","tags":["AWS","Jenkins","GitLab","Docker","Kubernetes"]},{"company":"TRUSTED SOFTWARE SERVICES sp. z o.o.","job_title":"Junior Java Developer","location":"Warszawa (Polska)","tags":["Java","Spring Boot","Docker","Git"]},{"company":"Affirm","job_title":"Staff Security Engineer, Security Architecture","location":"Multiple locations offer (16)","tags":["Python","Java","AWS"]},{"company":"Affirm","job_title":"Staff Software Engineer (Service Infrastructure)","location":"Multiple locations offer (16)","tags":["Python","AWS"]},{"company":"Affirm","job_title":"Engineering Manager, Backend (Financial Reporting)","location":"Multiple locations offer (16)","tags":[]},{"company":"Affirm","job_title":"Engineering Manager, Backend (Purchasing)","location":"Multiple locations offer (16)","tags":["Python"]},{"company":"Affirm","job_title":"Engineering Manager - Financial Crimes","location":"Multiple locations offer (16)","tags":[]},{"company":"Sunscrapers Sp. z o.o.","job_title":"Senior Python Developer","location":"Multiple locations offer (16)","tags":["Python","SQL","Django","REST API","PostgreSQL","Kubernetes"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"IT Product Manager","location":"Multiple locations offer (3)","tags":[]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Technical Enablement Manager","location":"Warszawa (Poland)","tags":[]},{"company":"Asseco Business Solutions S.A. ","job_title":"Młodszy specjalista ds. wdrożeń ERP","location":"Słupsk (Polska)","tags":[]},{"company":"Robert Bosch Sp. z o.o.","job_title":"IT Development Lead","location":"Warszawa (Poland)","tags":[]},{"company":"QIAGEN BUSINESS SERVICES","job_title":"Associate Director - Cyber Security Operations (m/f/d)","location":"Wrocław (Poland)","tags":[]},{"company":"Schenker Technology Center Warsaw Sp. z o.o.","job_title":"Senior Scrum Master","location":"Warszawa (Poland)","tags":[]},{"company":"UNITY-T GROUP sp. z o.o. sp.k.","job_title":"Junior SQL Developer","location":"Warszawa (Polska)","tags":["MS SQL","Jira","Git","GitLab","SQL","OLTP"]},{"company":"SILENT EIGHT PTE. LTD.","job_title":"Director of Software Engineering","location":"Multiple locations offer (16)","tags":["Jira","Confluence"]},{"company":"SOLVD POLAND sp. z o.o.","job_title":"React Native Developer","location":"Multiple locations offer (16)","tags":["React Native","Node.js"]},{"company":"PSE S.A.","job_title":"Lider / Liderka w obszarze monitorowania ITC","location":"Konstancin-Jeziorna (Polska)","tags":[]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Security Software Developer","location":"Warszawa (Poland)","tags":[]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Java Developer","location":"Multiple locations offer (3)","tags":["Java","HTML","Git","Azure DevOps"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"DevOps Engineer - Automotive projects","location":"Warszawa (Poland)","tags":["Azure DevOps","Jenkins","Kubernetes","PostgreSQL","Kafka","Java","Docker","npm"]},{"company":"DSV ISS","job_title":"Development & Tools IT Specialist","location":"Warszawa (Poland)","tags":["PowerShell","Python","Tableau"]},{"company":"Samsung R&D Institute Poland","job_title":"Junior Python Test Automation Engineer","location":"Warszawa (Poland)","tags":["Python"]},{"company":"Samsung R&D Institute Poland","job_title":"Natural Language Processing Engineer in Artificial Intelligence Team","location":"Warszawa (Poland)","tags":["AI","NLP","Python or Java or C++","Linux"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Software Lead – Robotics & Autonomous Systems","location":"Warszawa (Poland)","tags":["Docker"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Cloud Operation Engineer","location":"Multiple locations offer (3)","tags":["Bash","PowerShell","Git","Ansible"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"SAP ABAP Developer","location":"Multiple locations offer (3)","tags":["SAP","HTML","JavaScript","Node.js"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"DevOps Engineer","location":"Multiple locations offer (3)","tags":["Docker","Kubernetes","Jenkins","Git","Bash","Python","Java","C#"]},{"company":"StepStone Services Sp. z o.o.","job_title":"Product Owner – Data Platform","location":"Warszawa (Poland)","tags":[]},{"company":"Simplicity Recruitment","job_title":"Solution Architect","location":"mazowieckie (Polska)","tags":[]},{"company":"BlueSoft Sp. z o.o.","job_title":"Appian Developer","location":"Warszawa (Poland)","tags":["RPA","BPM"]},{"company":"BlueSoft Sp. z o.o.","job_title":"Android Developer","location":"Warszawa (Polska)","tags":["Kotlin","Java Android","Security","REST","MVVM","GIT","Cucumber","Android Studio","Jira"]},{"company":"PwC","job_title":"SAP BW & BI Senior Consultant","location":"Oferta w wielu lokalizacjach (3)","tags":["SAP"]},{"company":"Herbalife Nutrition GBSC Krak\xf3w Sp. z o.o.","job_title":"Threat Hunter - EMEA","location":"Krak\xf3w (Poland)","tags":[]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Embedded Hardware Penetration Tester","location":"Warszawa (Poland)","tags":["C","C++","Java","Python"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"SAP S/4 HANA Development Lead - Commerical, Financial & local B2P","location":"Warszawa (Poland)","tags":["SAP"]},{"company":"DPDgroup IT Solutions sp. z o.o.","job_title":"Tester with SQL / Python skills","location":"Warszawa (Poland)","tags":["Python","SQL","Git","Jira","Agile","Scrum"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"RPA Process Controller","location":"Krak\xf3w (Poland)","tags":["RPA"]},{"company":"Electricity Exchange DAC t/a VIOTAS","job_title":"Senior Networking & Protocol Specialist","location":"Krak\xf3w (Poland)","tags":[]},{"company":"ERGO Technology & Services S.A.","job_title":"IT Specialist (MS Exchange)","location":"Multiple locations offer (16)","tags":[]},{"company":"IT Connect Sp. z o.o.","job_title":"Incident Manager","location":"Warszawa (Poland)","tags":["Matrixx","Linux/Unix","Jira","Confluence","GitLab","Curl","PostgressSQL","MongoDB","Putty"]},{"company":"JohnnyBros Sp. z o.o. ","job_title":"Junior Ruby on Rails Developer","location":"Gdańsk (Polska)","tags":["Ruby on Rails"]},{"company":"Deloitte Polska","job_title":"Front End Developer","location":"Warszawa (Polska)","tags":["JavaScript","HTML","CSS","Docker","Azure","Figma","Flask","Django",".NET"]},{"company":"Deloitte Polska","job_title":"Python Web App Developer","location":"Warszawa (Polska)","tags":["Python","Flask","Django","Git"]},{"company":"Deloitte Polska","job_title":"Project Manager","location":"Warszawa (Polska)","tags":["Azure"]},{"company":"Master Care Sp. z o.o.","job_title":"Senior Java Developer","location":"Krak\xf3w (Polska)","tags":["Java","Spring Framework","Docker","Kubernetes","Kafka","Apache ActiveMQ"]},{"company":"Master Care Sp. z o.o.","job_title":"Analityk biznesowy","location":"Oferta w wielu lokalizacjach (2)","tags":["BPMN"]},{"company":"Master Care Sp. z o.o.","job_title":"Specjalista ds. paszportyzacji","location":"Warszawa (Polska)","tags":["PostgreSQL"]},{"company":"Master Care Sp. z o.o.","job_title":"Senior iOS Developer","location":"Krak\xf3w (Polska)","tags":["iOS","Swift","Firebase","GitLab","Confluence","Git"]},{"company":"Master Care Sp. z o.o.","job_title":"Senior Android Developer","location":"Krak\xf3w (Polska)","tags":["Android","Gradle","Kotlin","Git","GitLab","Docker"]},{"company":"MAP solutions Sp. z o.o.","job_title":"Programista .NET/C#","location":"Legionowo (Polska)","tags":[".NET",".NET Core","C#","Visual Studio","Git","SQL Server"]},{"company":"Suntech S.A.","job_title":"Quality Assurance Manager","location":"Warszawa (Polska)","tags":["SCRUM","SQL","TFS","Azure DevOps","JIRA","REST","SOAP","Python"]},{"company":"Hutchinson Poland Sp. z o.o. - Zakład Ł\xf3dź 2","job_title":"Programista WinDEV","location":"Ł\xf3dź (Polska)","tags":["MSSQL","HFSQL","WinDEV"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Java Software Developer (Electronic Engineeing)","location":"Multiple locations offer (3)","tags":["Java","TeamCity"]},{"company":"Metrosoft Polska Sp. z o. o.","job_title":"Senior IT Project Manager","location":"Krak\xf3w (Polska)","tags":["Kotlin","Java 8","Spring Framework","JavaScript","Angular","MS-SQL Server","Jenkins","Git"]},{"company":"Connectis_","job_title":"Senior Java Developer","location":"Warszawa (Polska)","tags":["Java","AWS","Spring Boot","SpringData","SpringCloud","k8s","Docker","Git"]},{"company":"Verestro S.A. ","job_title":"iOS Developer","location":"lubelskie (Polska)","tags":["iOS","Swift","Git"]},{"company":"Connectis_","job_title":"Analityk Biznesowy","location":"Warszawa (Polska)","tags":["BPMN","UML","Enterprise Architect","Jira","Confluence","Agile","Scrum"]},{"company":"eService Sp. z o.o.","job_title":"Senior ORACLE Developer","location":"Warszawa (Polska)","tags":["Oracle","SQL","PL/SQL","ORACLE FORMS","ORACLE REPORTS"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Java Developer","location":"Warszawa (Poland)","tags":["Java","Spring Boot","Kafka","Azure DevOps"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Java Developer - Backend","location":"Warszawa (Poland)","tags":["Jenkins","Git","Spring Boot"]},{"company":"JohnnyBros Sp. z o.o. ","job_title":"Junior Ruby on Rails Developer","location":"Gdańsk (Polska)","tags":["Ruby on Rails"]},{"company":"HR WISE sp. z o. o. ","job_title":"IT Server Specialist","location":"Niepołomice (Polska)","tags":["VMware","Windows Server","Linux"]},{"company":"HR WISE sp. z o. o. ","job_title":"IT Support","location":"Niepołomice (Polska)","tags":["Windows Server"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(Cybersecurity) Global Head of Penetration Testing","location":"Krak\xf3w (Poland)","tags":["Agile","Scrum"]},{"company":"DOZ S.A.","job_title":"Specjalista ds. Helpdesk","location":"Ł\xf3dź (Polska)","tags":[]},{"company":"ASISTWORK Sp. z o.o.","job_title":"Junior Java Developer","location":"Oferta w wielu lokalizacjach (3)","tags":["Java","SQL"]},{"company":"Allianz","job_title":"Lider ds. Utrzymania Aplikacji","location":"Warszawa (Polska)","tags":["Oracle","PL/SQL","UNIX","SQL"]},{"company":"GFT Poland","job_title":"FX Technical Lead","location":"Multiple locations offer (4)","tags":[]},{"company":"Insert S.A.","job_title":"Starszy Programista Java/Spring","location":"Wrocław (Polska)","tags":["SQL","Java","Maven"]},{"company":"Samsung R&D Institute Poland","job_title":"Java Developer with Spring/Spring Boot","location":"Warszawa (Poland)","tags":["Spring Boot"]},{"company":"Samsung R&D Institute Poland","job_title":"Open Source Engineer","location":"Warszawa (Poland)","tags":["OpenStack","Docker","Kubernetes","Python","Java"]},{"company":"Samsung R&D Institute Poland","job_title":"Android Developer","location":"Warszawa (Poland)","tags":["Java","Android"]},{"company":"Samsung R&D Institute Poland","job_title":"Technical Project Leader / Team Supervisor","location":"Warszawa (Poland)","tags":[]},{"company":"Samsung R&D Institute Poland","job_title":"UX/UI Designer","location":"Warszawa (Poland)","tags":["Adobe XD","Sketch","InVision","Axure"]},{"company":"Samsung R&D Institute Poland","job_title":"Front-End Developer with Vue.js","location":"Warszawa (Poland)","tags":["Vue.js","JavaScript","Git"]},{"company":"ATENDE INDUSTRIES SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Projektant - Analityk algorytm\xf3w","location":"Warszawa (Polska)","tags":["C++","Python"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Cloud DevOps Engineer","location":"Warszawa (Poland)","tags":["Go","Java","Bash","Python","Git","Jenkins","Concourse","Kubernetes","Docker","CentOS","OpenStack","VMware","Linux"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Senior Software Developer","location":"Warszawa (Poland)","tags":["JavaScript","Python"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"API Technical Expert","location":"Warszawa (Poland)","tags":["API","REST","OAS","Oauth","Java","JavaScript","NodeJS"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Site Reliability Engineering Expert","location":"Ł\xf3dź (Poland)","tags":["Jenkins","GitLab","Azure DevOps","Puppet","Bash","PowerShell","Grafana","SRE"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Software Architect","location":"Warszawa (Poland)","tags":["Python","Django","HTML","JavaScript","TypeScript","Docker","Kubernetes","OpenShift","Git","Jira","Jenkins"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"DevOps Engineer","location":"Warszawa (Poland)","tags":["Docker","OpenShift","Kubernetes","Bash","Git","Linux"]},{"company":"SoftBlue S.A.","job_title":"Analityk Biznesowy (projekty IT)","location":"Bydgoszcz (Polska)","tags":[]},{"company":"E NET PRODUCTION","job_title":"Software Tester","location":"Oferta w wielu lokalizacjach (16)","tags":["JavaScript","Cypress","Git"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"API Consultant","location":"Warszawa (Poland)","tags":[]},{"company":"E NET PRODUCTION","job_title":"Scrum Master","location":"Oferta w wielu lokalizacjach (16)","tags":["Scrum"]},{"company":"DAVITA sp. z o.o.","job_title":"Administrator IT","location":"Wrocław (Polska)","tags":[]},{"company":"GSK","job_title":"Senior Engineer","location":"Poznań (Poland)","tags":["SQL","Agile","Git","C#",".NET","Java"]},{"company":"GSK","job_title":"Senior Software Engineer","location":"Poznań (Poland)","tags":["C#",".NET","REST API","GraphQL","SQL","CI/CD","Azure"]},{"company":"Samsung R&D Institute Poland","job_title":"Senior Data Scientist for Business Intelligence Project in AI Team","location":"Warszawa (Poland)","tags":["Python","PySpark","Hadoop","AWS","PyTorch","Pandas","SciPy ecosystem","Keras","TensorFlow"]},{"company":"Bank Pekao","job_title":"Analityk systemowy","location":"Warszawa (Polska)","tags":["SQL","Unix"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"SAP EWM Senior Consultant","location":"Multiple locations offer (3)","tags":["SAP","SAP HANA"]},{"company":"StepStone Services Sp. z o.o.","job_title":"Java Developer","location":"Warszawa (Polska)","tags":["Java","Spring Boot","Spring Framework","Git","Jenkins","Maven","CI/CD"]},{"company":"PwC","job_title":"Software QA Engineer - Cloud Testing","location":"Multiple locations offer (6)","tags":[]},{"company":"Rossmann SDP","job_title":"Inżynier Danych","location":"Oferta w wielu lokalizacjach (20)","tags":["NiFi","Kafka","Spark Streaming","SQL","Apache Airflow","Apache Flink"]},{"company":"Samsung R&D Institute Poland","job_title":"Data Scientist for Business Intelligence Project in AI Team","location":"Warszawa (Poland)","tags":["Python"]},{"company":"Samsung R&D Institute Poland","job_title":"Junior Data Scientist for Business Intelligence Project in AI Team","location":"Warszawa (Poland)","tags":[]},{"company":"Samsung R&D Institute Poland","job_title":"Internship - Java / Kotlin Intern","location":"Warszawa (Poland)","tags":["Java","Kotlin"]},{"company":"VOLKSWAGEN FINANCIAL SERVICES POLSKA SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Solution Architect","location":"Warszawa (Poland)","tags":["UML"]},{"company":"Bank Pekao","job_title":"Programista Cobol","location":"Warszawa (Polska)","tags":["JavaScript","HTML5","CSS","Java","Spring","COBOL"]},{"company":"PHOENIX SYSTEMS SP Z O O","job_title":"Techniczny Kierownik Projektu","location":"Warszawa (Polska)","tags":["C","Python","GNU/Linux"]},{"company":"Bank Pekao","job_title":"Programista Oracle/ETL","location":"Warszawa (Polska)","tags":["Oracle DB","SQL","PL/SQL","ETL"]},{"company":"Quantum Qguar Sp. z o.o.","job_title":"Konsultant projektowy system\xf3w IT dla logistyki","location":"Krak\xf3w (Polska)","tags":[]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Data Modeler","location":"Multiple locations offer (3)","tags":["SQL"]},{"company":"TRUMPF Huettinger Sp. z o.o.","job_title":"Specjalista ds. rozwoju i wdrażania test\xf3w (k/m)","location":"Zielonka (Polska)","tags":["C"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(GPB) Transformation – Business Analyst","location":"Krak\xf3w (Poland)","tags":["Agile","Scrum"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Storage Area Networks Engineer","location":"Multiple locations offer (3)","tags":["Python","Bash","PowerShell"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(GDT) Big Data Developer","location":"Krak\xf3w (Poland)","tags":["Big Data","Hive","Unix","Shell Scripting","SPARK","Hadoop"]},{"company":"ING Hubs Poland","job_title":"Scrum Master/IT Analyst","location":"Warszawa (Poland)","tags":[]},{"company":"ZEME SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"UX Designer (k/m)","location":"Warszawa (Polska)","tags":["Figma"]},{"company":"ING Hubs Poland","job_title":"Specialist– Model Validation Market Risk (Trading)","location":"Warszawa (Poland)","tags":["C++","Python"]},{"company":"Consdata S.A.","job_title":"Junior Fullstack Developer","location":"Oferta w wielu lokalizacjach (15)","tags":["Java","Spring","Angular","PostgreSQL","MongoDB","Kafka","CI","Docker","OpenShift"]},{"company":"Consdata S.A.","job_title":"Analityk biznesowo-systemowy","location":"Poznań (Polska)","tags":["UML","BPMN","Git","GitLab","Jira"]},{"company":"Polkomtel Sp. z o.o.","job_title":"Administrator Systemu IT","location":"Warszawa (Polska)","tags":["OpenShift","Kubernetes","RedHat","Debian","VMware vSphere"]},{"company":"INFOGAIN TECHNOLOGIES SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Network & Deployment Engineer","location":"Krak\xf3w (Poland)","tags":[]},{"company":"INFOGAIN TECHNOLOGIES SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Senior Java Engineer","location":"Krak\xf3w (Poland)","tags":["Java","Jenkins","Kubernetes","Spring Boot","Ansible","OpenShift"]},{"company":"INFOGAIN TECHNOLOGIES SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Senior DevOps Engineer","location":"Krak\xf3w (Poland)","tags":["Docker","Jenkins","Kubernetes"]},{"company":"INFOGAIN TECHNOLOGIES SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Technical Business Analyst","location":"Krak\xf3w (Poland)","tags":["SQL"]},{"company":"INFOGAIN TECHNOLOGIES SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Senior C++ Engineer","location":"Krak\xf3w (Poland)","tags":["Proto.io"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"DevOps Engineer Hadoop Platform","location":"Multiple locations offer (3)","tags":["Bash","Python","Git","Jenkins"]},{"company":"summ-it s.a.","job_title":"Data & BI Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["T-SQL","Microsoft Power BI","ETL","Azure","Python","DAX","Azure Analysis Services"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"SAP Business Consultant","location":"Multiple locations offer (3)","tags":["SAP"]},{"company":"DOZ S.A.","job_title":"Analityk Internetowy","location":"Warszawa (Polska)","tags":["Google Analytics"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"UI Developer","location":"Warszawa (Poland)","tags":["HTML","JavaScript","jQuery","Angular.js","CSS"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"IT Product Technical Consultant (SAP)","location":"Multiple locations offer (3)","tags":["SAP","SAP HANA","SAP ABAP"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Identity Management Security Consultant","location":"Multiple locations offer (3)","tags":[]},{"company":"DSV ISS ","job_title":"IT Business Analyst - Business Application","location":"Warszawa (Poland)","tags":[]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(Model Risk Management) Analyst in Credit Risk","location":"Krak\xf3w (Poland)","tags":["R","Python","SAS","MATLAB","SQL"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(Model Risk Management) Manager in Credit Risk","location":"Krak\xf3w (Poland)","tags":["R","Python","SAS","MATLAB","SQL"]},{"company":"Samsung R&D Institute Poland","job_title":"Internship – Digital TV Software Tester","location":"Warszawa (Poland)","tags":["manual testing"]},{"company":"ING Hubs Poland","job_title":"IAM DevOps Engineer","location":"Katowice (Polska)","tags":["PowerShell","Bash","Python","SQL"]},{"company":"Hapag-Lloyd AG","job_title":"SAP Test Manager","location":"Gdańsk (Poland)","tags":["SAP","Test Management"]},{"company":"Hapag-Lloyd AG","job_title":"SAP Release Manager","location":"Gdańsk (Poland)","tags":["SAP","Release Management"]},{"company":"Samsung R&D Institute Poland","job_title":"DevOps Engineer in Artificial Intelligence Team","location":"Warszawa (Poland)","tags":["Java","Python","Docker","Jenkins","Gradle","Maven"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Performance Engineer","location":"Multiple locations offer (3)","tags":[]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(Global Transformation) Digital Business Analyst – Wealth View","location":"Krak\xf3w (Poland)","tags":["Agile"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Junior SAP Basis Administrator / Technical Consultant","location":"Multiple locations offer (3)","tags":["SAP","Oracle"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"Specialist Quantitative Analyst","location":"Krak\xf3w (Poland)","tags":["C++","SQL","Python","VBA"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Go Backend Developer (eBike)","location":"Warszawa (Poland)","tags":["Azure DevOps","Azure SQL"]},{"company":"PKP Intercity S.A.","job_title":"Programista, Biuro Teleinformatyki","location":"Szczecin (Polska)","tags":["Java","PostgreSQL","Oracle","Microsoft SQL Server","Git","Android SDK","iOS SDK","Flutter"]},{"company":"ZF Group","job_title":"Inżynier oprogramowania (język C/C++)","location":"Częstochowa (Polska)","tags":["C","C++"]},{"company":"ZF Group","job_title":"Programista C++","location":"Ł\xf3dź (Polska)","tags":["C++","Linux"]},{"company":"Samsung R&D Institute Poland","job_title":"Backend Engineer for Cloud Services","location":"Warszawa (Poland)","tags":["Java","Spring Boot","Python","AWS","Spring Framework","SQL","Redis","DynamoDB"]},{"company":"Objectivity sp. z o.o.","job_title":"Software Automation Quality Engineer","location":"Multiple locations offer (16)","tags":["SQL","Jenkins","TeamCity","Selenium","Azure DevOps"]},{"company":"PKP Intercity S.A.","job_title":"Kierownik Wydziału Analiz i Test\xf3w, Biuro Teleinformatyki","location":"Warszawa (Polska)","tags":[]},{"company":"BlueSoft Sp. z o.o.","job_title":"Data Analyst","location":"Warszawa (Poland)","tags":["SQL"]},{"company":"BlueSoft Sp. z o.o.","job_title":"Frontend Developer (Angular)","location":"Warszawa (Polska)","tags":["JavaScript","TypeScript","Angular 2+","HTML","CSS","Git"]},{"company":"BlueSoft Sp. z o.o.","job_title":"Junior Java Developer","location":"Warszawa (Polska)","tags":["Spring","Hibernate","Java","Spring Boot","JPA","REST","Kubernetes","Git","Gerrit","GitLab"]},{"company":"BlueSoft Sp. z o.o.","job_title":"Junior Java Developer","location":"Warszawa (Polska)","tags":["Spring","Hibernate","Java","Spring Boot","JPA","REST","Kubernetes","Git","Gerrit","GitLab"]},{"company":"PKP Intercity S.A.","job_title":"Technik ds. telematyki kolejowej, Biuro Teleinformatyki","location":"Warszawa (Polska)","tags":[]},{"company":"PKP Intercity S.A.","job_title":"Programista, Biuro Teleinformatyki","location":"Warszawa (Polska)","tags":["Java","PostgreSQL","Oracle","Microsoft SQL Server","Git","Android SDK","iOS SDK","Flutter"]},{"company":"BlueSoft Sp. z o.o.","job_title":"Project Manager","location":"Warszawa (Polska)","tags":["MS Projekt"]},{"company":"BlueSoft Sp. z o.o.","job_title":"Tester","location":"Warszawa (Polska)","tags":["SQL","PLSQL","Jira","Zephyr","Java","JavaScript","XML"]},{"company":"AllSTARSIT Poland","job_title":"Senior Data Engineer","location":"Multiple locations offer (16)","tags":["AWS","Python","Elasticsearch"]},{"company":"AllSTARSIT Poland","job_title":"Test Engineer","location":"Multiple locations offer (16)","tags":["Python","SQL"]},{"company":"AllSTARSIT Poland","job_title":"Test Automation Engineer","location":"Multiple locations offer (16)","tags":["Java"]},{"company":"AllSTARSIT Poland","job_title":"DevOps Engineer","location":"Multiple locations offer (16)","tags":["Python","SQL"]},{"company":"AllSTARSIT Poland","job_title":"Test Automation Engineer","location":"Multiple locations offer (16)","tags":["Python","SQL","C#"]},{"company":"AllSTARSIT Poland","job_title":"PHP developer","location":"Multiple locations offer (16)","tags":["PHP","Git","Jira"]},{"company":"Santander Bank Polska","job_title":"Programista SAP ABAP ze znajomością HCM","location":"Oferta w wielu lokalizacjach (3)","tags":["SAP"]},{"company":"GSK","job_title":"Senior Scrum Master","location":"Poznań (Poland)","tags":["Scrum","Agile","Jira"]},{"company":"Santander Bank Polska","job_title":"Java Developer","location":"Oferta w wielu lokalizacjach (3)","tags":["Java","Spring Boot","Hibernate","Git","OpenShift"]},{"company":"Santander Bank Polska","job_title":"CRM scientist","location":"Warszawa (Polska)","tags":["SAS","SQL"]},{"company":"Santander Bank Polska","job_title":"Administrator System\xf3w IT","location":"Poznań (Polska)","tags":["Chef","Jenkins","GitLab","OpenShift","Kubernetes","Docker"]},{"company":"Santander Bank Polska","job_title":"Senior IT System Administrator","location":"Wrocław (Polska)","tags":["PostgreSQL","Oracle","MongoDB","Jenkins","Chef","Git","Ansible","DB2"]},{"company":"GSK","job_title":"Tech Engineer","location":"Poznań (Poland)","tags":["At least 2 years of experience in Salesforce or Veeva CRM configuration"]},{"company":"Santander Bank Polska","job_title":"IT System Administrator (DBAops, Oracle, Postgres, Redhat)","location":"Wrocław (Polska)","tags":["Jenkins","Git","Docker","Kubernetes","PostgreSQL","Oracle"]},{"company":"Santander Bank Polska","job_title":"Ekspert ds. bezpieczeństwa IT","location":"Wrocław (Polska)","tags":["IDS/IPS","SIEM","WAF"]},{"company":"Santander Bank Polska","job_title":"Data Analyst","location":"Warszawa (Polska)","tags":["Python","SQL"]},{"company":"Nokia","job_title":"Java Software Engineer","location":"Multiple locations offer (16)","tags":["Java","Python","Node.js","JavaScript","Git","Oracle","Kafka","Kubernetes","OpenStack","VMware","Hibernate","MariaDB"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(Cybersecurity) Incident Manager","location":"Krak\xf3w (Poland)","tags":["AWS","Azure","Google"]},{"company":"Prime Engineering Poland","job_title":"Salesforce Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["Salesforce","JavaScript","Angular.js","React.js"]},{"company":"SOFTWARELY SP. Z O.O.","job_title":"Java Developer","location":"Warszawa (Polska)","tags":["Java","Hibernate","Spring"]},{"company":"IT Connect Sp. z o.o.","job_title":"Gł\xf3wny Administrator Systemu","location":"Warszawa (Polska)","tags":["Unix","Git","GitLab","CVN","CI","CD","Jenkins"]},{"company":"IT Connect Sp. z o.o.","job_title":"Java Hybris Developer","location":"Warszawa (Polska)","tags":["Java","Spring","Spring Boot","ORM","Drools","Acitivty","Comunda","PostgreSQL","Mongo","MS SQL","Oracle"]},{"company":"Santander Bank Polska","job_title":"Cyber Security Systems Engineer","location":"Oferta w wielu lokalizacjach (3)","tags":[]},{"company":"TRUSTED SOFTWARE SERVICES sp. z o.o.","job_title":"React Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["JavaScript","webpack","Babel","ESLint","TypeScript","React","CSS3","HTML5","Redux"]},{"company":"Samsung R&D Institute Poland","job_title":"Python Developer (Cloud)","location":"Krak\xf3w (Poland)","tags":["Python","Golang","Linux","Docker","Kubernetes","ArgoCD","GitHub Actions","Ceph","WekaFS","micro services","distributed systems"]},{"company":"Samsung R&D Institute Poland","job_title":"Mid DevOps Engineer (Cloud)","location":"Krak\xf3w (Poland)","tags":["Kubernetes","Linux","Docker","ArgoCD","GitHub Actions","Terraform","MetalLB","Ambassador","ELK","Python","Go","Ceph","WekaFS","micro services","distributed systems"]},{"company":"EUVIC Sp. z o.o","job_title":".NET Developer","location":"Gliwice (Polska)","tags":["C#",".NET","ASP.NET Web Forms","SQL"]},{"company":" VlogIT Sp. z o.o.","job_title":"Konsultant - Analityk Business Intelligence / Hurtowni Danych","location":"Oferta w wielu lokalizacjach (3)","tags":["SQL","Business Intelligence","ETL"]},{"company":" VlogIT Sp. z o.o.","job_title":"Data Analytics Expert/Manager","location":"Oferta w wielu lokalizacjach (3)","tags":["BI/ML/BigData/Cloud"]},{"company":"ZF Group","job_title":"IT SAP Purchasing Specialist","location":"Multiple locations offer (4)","tags":[]},{"company":"Sieć Badawcza Łukasiewicz – Poznański Instytut Technologiczny","job_title":"Analityk System\xf3w IT – Starszy Specjalista","location":"Poznań (Polska)","tags":["SQL","HTML"]},{"company":"NET PC sp. z o.o.","job_title":"Programista - Komandos IT","location":"Gdańsk (Polska)","tags":[".NET",".NET Core","Git"]},{"company":"ERGO Technology & Services S.A.","job_title":".NET Developer","location":"Multiple locations offer (2)","tags":[".NET",".NET Core","Visual Studio","Moqups","Jenkins","Git","GitLab","SoapUI","Redis","Kafka","Oracle"]},{"company":"ERGO Technology & Services S.A.","job_title":"Netscaler ADC Engineer","location":"Multiple locations offer (2)","tags":[]},{"company":"QLOC S.A.","job_title":"IT Helpdesk Specialist","location":"Warszawa (Polska)","tags":[]},{"company":"E NET PRODUCTION","job_title":"Fullstack .NET Developer","location":"Oferta w wielu lokalizacjach (16)","tags":[".NET Core","ASP.NET MVC","C#","HTML","CSS","jQuery","Angular","TypeScript","T-SQL"]},{"company":"E NET PRODUCTION","job_title":"Linux Administrator","location":"Katowice (Polska)","tags":["Bash","Python","MySQL","Docker","Debian","Proxmox"]},{"company":"E NET PRODUCTION","job_title":"PHP Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["PHP","Symfony","Zend","Laravel","MySQL"]},{"company":"SGB-BANK S.A.","job_title":"Inżynier sieciowy","location":"Poznań (Polska)","tags":["sieci LAN/WAN","protokoły routingu EIGRP, OSPF, BGP"]},{"company":"MakoLab SA","job_title":"DevOps Engineer","location":"Ł\xf3dź (Poland)","tags":["Jenkins","Docker","Linux","Unix","Shell","Python","MySQL","Postgres","Kubernetes"]},{"company":"Azimo Servicing Ltd Sp. z o.o. Oddział w Polsce","job_title":"Senior Front-end Developer","location":"Krak\xf3w (Poland)","tags":["React.js","i18n","GraphQL","Apollo"]},{"company":"COIG","job_title":"Data Scientist","location":"Oferta w wielu lokalizacjach (2)","tags":["Python","Django"]},{"company":"Telejur Sp. z o.o.","job_title":"SQL Developer - Projektant proces\xf3w ETL","location":"Ł\xf3dź (Polska)","tags":["SQL","ETL"]},{"company":"Samsung R&D Institute Poland","job_title":"5G RAN Test Automation Engineer","location":"Krak\xf3w (Poland)","tags":["Python","Selenium","ROBOT"]},{"company":"Nationale-Nederlanden Usługi Finansowe Sp. z o.o.","job_title":"Scrum Master","location":"Warszawa (Polska)","tags":["Nexus","LeSS","SAFe","Scrum"]},{"company":"PwC","job_title":"Cloud Delivery Manager","location":"Warszawa (Polska)","tags":["AWS","Google Cloud Platform","Azure"]},{"company":"SOFTWARELY SP. Z O.O.","job_title":"Java Developer","location":"Warszawa (Polska)","tags":["Spring","Java","Hibernate","Jenkins","Docker","Git","SQL"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(Investment Banking Tech) IT Delivery Head in OTC Clearing","location":"Krak\xf3w (Poland)","tags":["DevOps"]},{"company":"Polska Grupa Lotnicza","job_title":"Programista C#/ .NET","location":"Oferta w wielu lokalizacjach (3)","tags":[".NET","C#","Microsoft SQL Server","Visual Studio","Jira","JavaScript"]},{"company":"MODIVO S.A. ","job_title":"Specjalista ds. Master Data","location":"Zielona G\xf3ra (Polska)","tags":[]},{"company":"BEST S.A.","job_title":"Inżynier Danych/Data Engineer","location":"Oferta w wielu lokalizacjach (16)","tags":["SSIS","Python","C#","MS SQL"]},{"company":"KPMG","job_title":"ServiceNow Delivery Lead","location":"Multiple locations offer (7)","tags":["ServiceNow","ITSM","ITOM","CSM","ESM","HR","GRC"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"IT Controlling Consultant","location":"Multiple locations offer (3)","tags":["SAP"]},{"company":"KPMG","job_title":"ServiceNow Solution Architect","location":"Multiple locations offer (7)","tags":["JavaScript","CSS","Angular.js","ServiceNow"]},{"company":"KPMG","job_title":"ServiceNow Business Analyst","location":"Multiple locations offer (7)","tags":["ITSM","ServiceNow","SecOps","GRC","CSM","ITOM","HR","Jira"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Development Lead","location":"Multiple locations offer (3)","tags":["SQL","HTML","JavaScript","Azure SQL","Java"]},{"company":"Billennium S.A.","job_title":"People Manager","location":"Oferta w wielu lokalizacjach (18)","tags":[]},{"company":"Robert Bosch Sp. z o.o.","job_title":"SAP PLM Consultant","location":"Multiple locations offer (3)","tags":[]},{"company":"Accenture Technology","job_title":"Praktyki w obszarze ABAP","location":"Katowice (Polska)","tags":["SQL"]},{"company":"Accenture Technology","job_title":"Praktyki w obszarze SAP Consulting","location":"Krak\xf3w (Polska)","tags":[]},{"company":"Deloitte CE BSC Rzesz\xf3w","job_title":"Senior Financial Applications Technical Support","location":"Multiple locations offer (16)","tags":["SAP","SAP FI"]},{"company":"CENTRUM MEDYCZNE LUXMED sp. z o.o.","job_title":"Programista Java","location":"Lublin (Polska)","tags":["Spring 5","JavaSE","JavaEE","JPA","Maven","Git","JUnit"]},{"company":"Nokia","job_title":"Front End Developer","location":"Multiple locations offer (16)","tags":["PostgreSQL","Kafka","Grafana","GitLab","Jira","CentOS","Python","Django","Vue.js","Ansible","Redis"]},{"company":"Nokia","job_title":"L1/PHY Algorithms Developer (Matlab)","location":"Multiple locations offer (16)","tags":["MATLAB"]},{"company":"ABB Business Services","job_title":"IS Process Specialist for Change Control","location":"Krak\xf3w (Poland)","tags":["ITIL","SIAM"]},{"company":"FOSS POLSKA Sp. z o.o.","job_title":"Security Engineer","location":"Warszawa (Poland)","tags":[]},{"company":"Sii Sp. z o.o.","job_title":"Konsultant Dynamics 365/CRM","location":"Oferta w wielu lokalizacjach (5)","tags":["Dynamics 365 CRM"]},{"company":"Sii Sp. z o.o.","job_title":"Programista Dynamics 365/CRM","location":"Oferta w wielu lokalizacjach (4)","tags":["C#","JavaScript","TypeScript","HTML","CSS","Azure","ASP.NET MVC",".NET Core","Power Apps"]},{"company":"summ-it s.a.","job_title":"Cloud Database Administrator","location":"Oferta w wielu lokalizacjach (16)","tags":["T-SQL","Microsoft Azure","PL/SQL","PowerShell"]},{"company":"summ-it s.a.","job_title":"SQL Server Administrator","location":"Oferta w wielu lokalizacjach (16)","tags":["MS SQL Server","T-SQL"]},{"company":"KBJ S.A.","job_title":"SAP Fiori Developer","location":"Warszawa (Polska)","tags":["JavaScript","ABAP","FIORI","UI5","HTML5"]},{"company":"Affirm","job_title":"Senior Software Engineer, Backend (Developer Productivity)","location":"Multiple locations offer (16)","tags":["CI/CD","BuildKite","Bazel"]},{"company":"Affirm","job_title":"Senior Software Engineer, Backend (Debit+ Risk)","location":"Multiple locations offer (16)","tags":["Python"]},{"company":"Affirm","job_title":"Senior Software Engineer, Backend (Debit+)","location":"Multiple locations offer (16)","tags":["Python"]},{"company":"Affirm","job_title":"Senior Manager - Product Security","location":"Multiple locations offer (16)","tags":["Python"]},{"company":"Affirm","job_title":"Manager - Software Engineering (Service Infrastructure)","location":"Multiple locations offer (16)","tags":["AWS","Kubernetes"]},{"company":"Affirm","job_title":"Engineering Manager (Developer Productivity)","location":"Multiple locations offer (16)","tags":["CI/CD","Python"]},{"company":"Affirm","job_title":"Engineering Manager - Backend (Machine Learning Platform)","location":"Multiple locations offer (16)","tags":["Python"]},{"company":"Affirm","job_title":"Engineering Manager - Backend (Debit+)","location":"Multiple locations offer (16)","tags":["Python"]},{"company":"Affirm","job_title":"Director of Service Infrastructure","location":"Multiple locations offer (16)","tags":[]},{"company":"Britenet Sp. z o.o.","job_title":"Project Manager","location":"Oferta w wielu lokalizacjach (3)","tags":["PRINCE2","PMP","Agile"]},{"company":"T-Mobile","job_title":"TV Systems Engineer - Tribu Household","location":"Warszawa (Poland)","tags":["Jira","Confluence","Git","GitLab","IntelliJ"]},{"company":"Affirm","job_title":"Cloud Security Engineer","location":"Multiple locations offer (16)","tags":["Kubernetes","Terraform","AWS"]},{"company":"Egnyte Poland","job_title":"Product Manager – Monetization Infrastructure Team","location":"Multiple locations offer (16)","tags":["Product management experience","SaaS"]},{"company":"CLAUDE ICT POLAND SP Z O O","job_title":"Administrator Sieci i System\xf3w IT","location":"Gliwice (Polska)","tags":["Red Hat","CentOS","Debian","RabbitMQ","Bash","Python","PHP","MySQL"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Płatny Staż w dziale Service Desk z językiem niemieckim","location":"Ł\xf3dź (Polska)","tags":[]},{"company":"ERGO Technology & Services S.A.","job_title":"Security Architect","location":"Warszawa (Poland)","tags":["AWS","Azure","GCP","Windows Server","Linux","CI/CD","K8S"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"IT Service Analyst WPB","location":"Krak\xf3w (Poland)","tags":[]},{"company":"Demant Technology Centre Sp. z o.o. ","job_title":"Cloud Engineer","location":"Multiple locations offer (16)","tags":["Azure DevOps","PowerShell","C#"]},{"company":"SALESmanago","job_title":"Solution Engineer - Sales","location":"Krak\xf3w (Poland)","tags":[]},{"company":"Samsung R&D Institute Poland","job_title":"Internship - Intern in Language Data Operations Group","location":"Warszawa (Poland)","tags":["DevOps (bash, Jenkins, Docker, AWS)","Python (Django, Pandas, Jupyter)","Java (Spring)","JavaScript (Vue.js)","PostgreSQL","MySQL","Bash","GitHub"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Cloud DevOps Engineer Bosch Hybrid Cloud Platform","location":"Multiple locations offer (3)","tags":["Java","Python","Git","Jenkins","Concourse"]},{"company":"Samsung R&D Institute Poland","job_title":"Senior Software Architect for Prototyping New Solutions","location":"Warszawa (Poland)","tags":[]},{"company":"Robert Bosch Sp. z o.o.","job_title":"System Engineer - Site Reliability Engineer Bosch Private Cloud Platform","location":"Multiple locations offer (3)","tags":["Java","Python","Git","Jenkins"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"IT Infrastructure Service Architekt","location":"Multiple locations offer (3)","tags":["Backup","VMware","Docker","NAS","SAN","Power Shell","Python","Ansible"]},{"company":"Polkomtel Sp. z o.o.","job_title":"Specjalista ds. IT/OSS","location":"Warszawa (Polska)","tags":[]},{"company":"Whoohoo Poland Sp. z o.o.","job_title":"Java Backend Developer","location":"Warszawa (Poland)","tags":["Java","Kafka","Maven","Kubernetes","Git"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Golang Developer (eBike)","location":"Warszawa (Poland)","tags":["Go"]},{"company":"Samsung R&D Institute Poland","job_title":"Senior Software Architect for Prototyping New Solutions","location":"Warszawa (Poland)","tags":[]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Solution Architect","location":"Multiple locations offer (3)","tags":["MSSQL","C#",".NET","Azure"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Web Application Penetration Tester","location":"Multiple locations offer (3)","tags":["iOS","Android"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Solution Architect (ServiceNow)","location":"Multiple locations offer (3)","tags":[]},{"company":"Samsung R&D Institute Poland","job_title":"Java and Kotlin Developer in Research and Development Center","location":"Warszawa (Poland)","tags":["Java","Kotlin"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Senior Java Developer (Backend)","location":"Warszawa (Poland)","tags":["Java","Jenkins","Spring Boot","Kubernetes","OpenShift"]},{"company":"Master Care Sp. z o.o.","job_title":"Python Software Developer","location":"Warszawa (Polska)","tags":["Python"]},{"company":"Master Care Sp. z o.o.","job_title":"Senior System Engineer (Ceph)","location":"Warszawa (Polska)","tags":["Python","C++","Git","Docker"]},{"company":"HCL Poland","job_title":"Active Directory Engineer","location":"Krak\xf3w (Poland)","tags":["Active Directory"]},{"company":"SimplicITy sp. z o.o.","job_title":"Regular .NET Backend Developer","location":"Oferta w wielu lokalizacjach (16)","tags":[".NET","SQL","GIT"]},{"company":"Booksy International Sp. z o.o.","job_title":"Billing & Subscription Specialist","location":"Multiple locations offer (16)","tags":[]},{"company":"AXA Avanssur SA Oddział II w Polsce","job_title":"Junior Data Engineer z C#","location":"Warszawa (Polska)","tags":["C#","Java","SQL","Git"]},{"company":"AstraZeneca Pharma","job_title":"DevOps Tooling Lead","location":"Warszawa (Poland)","tags":["React","TypeScript","Java"]},{"company":"CreateCtrl Polska Sp. z o.o.","job_title":"Junior Frontend Developer","location":"Gliwice (Polska)","tags":["SCSS/LESS","BEM","GIT","CI/CD","RxJS","AWS Cloud","JIRA","Angular"]},{"company":"GSK","job_title":"Project Manager","location":"Poznań (Poland)","tags":[]},{"company":"GSK","job_title":"Software Developer","location":"Poznań (Poland)","tags":["VBA","Visual Basic",".NET","C#","Oracle SQL"]},{"company":"GSK","job_title":"Senior Engineer","location":"Poznań (Poland)","tags":["Agile","DevOps","Automation","CI/CD"]},{"company":"GSK","job_title":"Senior Manager, Product Owner","location":"Poznań (Poland)","tags":["Agile","ITIL"]},{"company":"GSK","job_title":"Senior Security Solutions Engineer","location":"Poznań (Poland)","tags":[]},{"company":"T-Mobile","job_title":"Junior Analityk Biznesowo-Systemowy","location":"Warszawa (Polska)","tags":["SQL","MSSql","Oracle","VBA","MS Access","PostgreSQL"]},{"company":"Sonalake sp. z o.o.","job_title":"Technical Team Leader","location":"Multiple locations offer (16)","tags":["Java","Spring","Spring Boot","AWS","JavaScript","Hibernate","Docker","Kotlin","TypeScript","React.js"]},{"company":"GSK","job_title":"PostgreSQL Database Engineer","location":"Poznań (Poland)","tags":["PostgreSQL","Azure","Agile","Oracle"]},{"company":"Comarch ","job_title":"Inżynier w kulturze Devops","location":"Oferta w wielu lokalizacjach (11)","tags":["Docker","CI/CD"]},{"company":"Nokia","job_title":"R&D Laboratories Working Student - IP Network","location":"Multiple locations offer (16)","tags":[]},{"company":"Nokia","job_title":"L1 Simulation Engineer Working Student","location":"Multiple locations offer (16)","tags":["MATLAB"]},{"company":"LBPro sp. z o.o.","job_title":"MID Programista / -ka ASP.NET (full-stack)","location":"Oferta w wielu lokalizacjach (2)","tags":["C#","HTML","JavaScript","CSS","ASP.NET MVC","ASP.NET Web API","jQuery","SQL","Git","Visual Studio","T-SQL","Bootstrap","MS-SQL","SSMS","Visual Studio Code"]},{"company":"VIG Polska Sp. z o.o., Vienna Insurance Group","job_title":"Administrator baz danych","location":"Warszawa (Polska)","tags":["SQL","Oracle"]},{"company":"VIG Polska Sp. z o.o., Vienna Insurance Group","job_title":"Specjalista ds. Bezpieczeństwa Informacji / IT Security Compliance","location":"Warszawa (Polska)","tags":["S-SDLC"]},{"company":"Polkomtel Sp. z o.o.","job_title":"Inżynier ds. Zarządzania Platformami Usług Dodanych","location":"Warszawa (Polska)","tags":["Bash"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"IT Service Analyst (Wealth & Personal Banking IT)","location":"Krak\xf3w (Poland)","tags":[]},{"company":"NASK SP\xd3ŁKA AKCYJNA","job_title":"Specjalista w Zespole Operator\xf3w System\xf3w Teleinformatycznych","location":"Warszawa (Polska)","tags":[]},{"company":"Britenet Sp. z o.o.","job_title":"Senior Database Engineer (MongoDB)","location":"Oferta w wielu lokalizacjach (16)","tags":["MongoDB","Kubernetes"]},{"company":"Spyrosoft S.A. ","job_title":"Technical Project Manager","location":"Multiple locations offer (16)","tags":[]},{"company":"Simplicity Recruitment","job_title":"IT Support Manager for HR","location":"Warszawa (Poland)","tags":["SAP"]},{"company":"GSK","job_title":"Senior Web Developer","location":"Poznań (Poland)","tags":["React"]},{"company":"Wazdan Solutions Sp. z o.o.","job_title":"Frontend Game Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["TypeScript","Git","PixiJS","webpack","Node.js"]},{"company":"T-Mobile","job_title":"Analityk/czka Biznesowy/a - Business Assurance","location":"Warszawa (Polska)","tags":["SQL","Grafana","Tableau","Microsoft Excel"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(DAO) Business Analyst","location":"Krak\xf3w (Poland)","tags":["Agile"]},{"company":"Piwik PRO S.A.","job_title":"Senior QA","location":"Oferta w wielu lokalizacjach (18)","tags":["Python","pyTest"]},{"company":"Piwik PRO S.A.","job_title":"Security Specialist","location":"Multiple locations offer (18)","tags":["cyber security","ISO 27001","SOC2"]},{"company":"Piwik PRO S.A.","job_title":"Software (Platform) Engineer","location":"Multiple locations offer (18)","tags":["Python","Golang","Cloud","Docker","Kubernetes","CI/CD"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(DAO) Data Architect Enterprise Metadata Model","location":"Krak\xf3w (Poland)","tags":[]},{"company":"Simplicity Recruitment","job_title":"Junior System Analyst (SQL)","location":"mazowieckie (Polska)","tags":["SQL"]},{"company":"Infinite Sp. z o.o.","job_title":"Konsultant ds. wdrożeń rozwiązań IT dział zagraniczny","location":"Lublin (Polska)","tags":["SQL"]},{"company":"CREDIT SUISSE Poland","job_title":".Net Developer","location":"Wrocław (Poland)","tags":["C#",".NET","SQL","Angular"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Java Developer (Back-End)","location":"Multiple locations offer (3)","tags":["Java","Spring Boot","Spring Framework","Git","Maven"]},{"company":"PAGEART Sebastian Kubat","job_title":"Web Developer","location":"Warszawa (Polska)","tags":["HTML","CSS3","JavaScript","PrestaShop","Responsive Web Design","WordPress"]},{"company":"PAGEART Sebastian Kubat","job_title":"Grafik UI/UX","location":"Warszawa (Polska)","tags":["Figma","Adobe Photoshop","Adobe Illustrator"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(Model Risk Management) Junior Quantitative Analyst in Market Risk","location":"Krak\xf3w (Poland)","tags":["SQL","Python","SAS","MATLAB"]},{"company":"9bits Sp. z o.o.","job_title":"Java Developer","location":"Lublin (Polska)","tags":["Java","Spring Boot","PostgreSQL","Git"]},{"company":"Sii Sp. z o.o.","job_title":"Programista Oracle APEX","location":"Oferta w wielu lokalizacjach (4)","tags":["Oracle","APEX","PL SQL"]},{"company":"Huuuge Games Sp. z o.o.","job_title":"NOC Analyst Intern","location":"Bydgoszcz (Poland)","tags":[]},{"company":"SOFTWARELY SP. Z O.O.","job_title":"Fullstack Developer (Java+Angular)","location":"Warszawa (Polska)","tags":["Hibernate","PostgreSQL","Git"]},{"company":"SOFTWARELY SP. Z O.O.","job_title":"Mid Java Developer","location":"Warszawa (Polska)","tags":["Java 8+","Spring","Spring Boot","Hibernate","Git","SQL","REST"]},{"company":"SOFTWARELY SP. Z O.O.","job_title":"Senior React Programmer","location":"Warszawa (Polska)","tags":["JavaScript","HTML","CSS"]},{"company":"SOFTWARELY SP. Z O.O.","job_title":"Java Developer","location":"Warszawa (Polska)","tags":["Java 8+","Spring","Spring Boot","SQL","Git","Maven","Rest API"]},{"company":"SOFTWARELY SP. Z O.O.","job_title":".NET Developer","location":"Warszawa (Polska)","tags":["SQL"]},{"company":"SOFTWARELY SP. Z O.O.","job_title":"Frontend Developer (Vue.js)","location":"Warszawa (Poland)","tags":["TypeScript","Vue.js"]},{"company":"Nationale-Nederlanden Usługi Finansowe Sp. z o.o.","job_title":"Stażysta/-tka w Zespole Hurtowni Danych","location":"Warszawa (Polska)","tags":["Azure Cloud","MS SQL"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"SAP Interface Development Lead","location":"Multiple locations offer (3)","tags":["SAP"]},{"company":"Polkomtel Sp. z o.o.","job_title":"Programista Frontend/Full-stack","location":"Warszawa (Polska)","tags":["HTML","CSS","JavaScript","Jira"]},{"company":"Creamfinance Poland Sp. z o.o. ","job_title":"Lead UI/UX Designer","location":"Warszawa (Polska)","tags":["Adobe Illustrator","Adobe InDesign","Adobe Photoshop","Adobe XD","HTML","CSS"]},{"company":"Simplicity Recruitment","job_title":"Application Support Analyst","location":"Oferta w wielu lokalizacjach (3)","tags":["SQL","Windows Services","IIS","XML"]},{"company":"E NET PRODUCTION","job_title":"Junior Services Monitoring Specialist","location":"Katowice (Polska)","tags":[]},{"company":"HCL Poland","job_title":"Technical Specialist with Polish & English","location":"Gdańsk (Poland)","tags":["Active Directory","MS Office 365"]},{"company":"Creamfinance Poland Sp. z o.o. ","job_title":"Grafik z zamiłowaniem do UX & UI","location":"Warszawa (Polska)","tags":["Adobe XD","Adobe Illustrator","Adobe Photoshop"]},{"company":"HCL Poland","job_title":"Technical Specialist with Polish & English","location":"Krak\xf3w (Poland)","tags":["Active Directory","MS Office 365"]},{"company":" VlogIT Sp. z o.o.","job_title":"Inżynier DevOps (AWS)","location":"Oferta w wielu lokalizacjach (16)","tags":["AWS","Terraform","Kubernetes","Python","Ansible","MySQL","Confluence","Jira","Git","Bitbucket","Jenkins","TeamCity"]},{"company":"Sii Sp. z o.o.","job_title":"Java/Kotlin Developer","location":"Oferta w wielu lokalizacjach (14)","tags":["Kotlin","Java","Kubernetes"]},{"company":"CUSHMAN & WAKEFIELD","job_title":"Application Support Analyst","location":"Warszawa (Poland)","tags":["Yardi"]},{"company":"Egnyte Poland","job_title":"Data Engineer","location":"Poznań (Poland)","tags":["SQL","Python","Microsoft Azure"]},{"company":"Egnyte Poland","job_title":"Product Manager","location":"Poznań (Poland)","tags":[]},{"company":"Nationale-Nederlanden Usługi Finansowe Sp. z o.o.","job_title":"Koordynator Test\xf3w","location":"Warszawa (Polska)","tags":["Jira","Confluence"]},{"company":"Egnyte Poland","job_title":"Senior Software Engineer - Node.js/React","location":"Poznań (Poland)","tags":["Node.js","React.js","JavaScript","HTML","CSS","REST API","SQL"]},{"company":"Sii Sp. z o.o.","job_title":"Scrum Master","location":"Multiple locations offer (15)","tags":[]},{"company":"TRUMPF Huettinger Sp. z o.o.","job_title":"Junior Digital Solution Developer (k/m)","location":"Warszawa (Polska)","tags":["PHP","Python","MySQL","MS SQL","Git","Visual Studio Code","Visual Basic","Power BI"]},{"company":"ZF Group","job_title":"Marketing Systems Administrator","location":"Wrocław (Poland)","tags":[]},{"company":"Objectivity sp. z o.o.","job_title":"Developer/Engineer in Test","location":"Multiple locations offer (16)","tags":["C#",".NET Core","Python","Docker","Selenium","Azure DevOps","SQL"]},{"company":"Asseco Business Solutions S.A.","job_title":"Junior Project Manager","location":"Lublin (Polska)","tags":[]},{"company":"EXATEL","job_title":"Analityk Systemowy R&D","location":"Warszawa (Polska)","tags":["Jira","UML","BPMN"]},{"company":"KACZMARSKI GROUP","job_title":"Programista .NET","location":"Wrocław (Polska)","tags":[".NET",".NET Core","C#","Git","SQL","TeamCity","ASP.NET"]},{"company":"Asseco Poland S.A.","job_title":"Konsultant/Programista ds. aplikacji bankowych","location":"Oferta w wielu lokalizacjach (16)","tags":[]},{"company":"Samsung R&D Institute Poland","job_title":"Chatbot Software Developer","location":"Warszawa (Poland)","tags":["JavaScript","Python (pandas)","Perforce","Jenkins","Git","GitHub"]},{"company":"Rossmann SDP","job_title":"Lider Zespołu IT","location":"Ł\xf3dź (Polska)","tags":["Azure DevOps","Sas 4GL","T-SQL","ETL SSIS","Data Integration Studio"]},{"company":"Rossmann SDP","job_title":"Analityk Biznesowy IT","location":"Ł\xf3dź (Polska)","tags":["TFS","Bpmn","Figma","Moqups"]},{"company":"ING Hubs Poland","job_title":"MS SQL Database Administrator","location":"Katowice (Poland)","tags":["MS SQL","PowerShell"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"IT Solution Manager for Planning Applications","location":"Multiple locations offer (3)","tags":[]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(Cybersecurity) Senior Penetration Tester","location":"Krak\xf3w (Poland)","tags":["HTML","XML","JavaScript","JSON","REST"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(Cybersecurity) Incident Manager Lead","location":"Krak\xf3w (Poland)","tags":["AWS","Azure","Google"]},{"company":"Sieć Badawcza Łukasiewicz – Poznański Instytut Technologiczny","job_title":"Administrator Microsoft 365/Sharepoint","location":"Poznań (Polska)","tags":["SharePoint","PowerShell"]},{"company":"Sii Sp. z o.o.","job_title":"System Engineer – branża telekomunikacyjna","location":"Oferta w wielu lokalizacjach (7)","tags":[]},{"company":"Capgemini Polska ","job_title":"IT Category Lead","location":"Multiple locations offer (14)","tags":[]},{"company":"Panek S.A.","job_title":"Senior Agile Coach","location":"Warszawa (Polska)","tags":["Windows","Jira","Scrum"]},{"company":"HR Project","job_title":"Junior C++ Engineer","location":"Krak\xf3w (Poland)","tags":["C++","C","Python"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Lead Developer S/4 Customer O2C (Order to Cash)","location":"Warszawa (Poland)","tags":["SAP HANA","SAP"]},{"company":"AXA Avanssur SA Oddział II w Polsce","job_title":"React Developer","location":"Warszawa (Polska)","tags":["React","React Hooks","JavaScript","TypeScript","OOP"]},{"company":"AXA Avanssur SA Oddział II w Polsce","job_title":".NET Developer","location":"Warszawa (Polska)","tags":[".NET",".NET Core","ASP.NET","Web API","SQL"]},{"company":"AXA Avanssur SA Oddział II w Polsce","job_title":"Solution Architect (Cloud)","location":"Warszawa (Poland)","tags":[".NET",".NET Core","Azure"]},{"company":" VlogIT Sp. z o.o.","job_title":"Architekt Rozwiązań Java – Lider Techniczny (API-first)","location":"Oferta w wielu lokalizacjach (16)","tags":["Java","Mikroserwisy"]},{"company":"NASK","job_title":"Scrum Master","location":"Warszawa (Polska)","tags":[]},{"company":"Danfoss","job_title":"Product Manager","location":"Multiple locations offer (3)","tags":["SAP","Salesforce"]},{"company":"KMD Poland Sp. z o.o.","job_title":"SAP ABAP Developer","location":"Multiple locations offer (16)","tags":[]},{"company":"ASTEK Polska","job_title":"Remote Senior Frontend Developer","location":"Warszawa (Poland)","tags":["JavaScript","Angular","Node.js","Ext-JS","CSS3","Backbone"]},{"company":"mBank","job_title":"Senior developer\\\\Software architect - .NET, C#, MSSQL","location":"Oferta w wielu lokalizacjach (2)","tags":[".NET","SQL","C#","Azure DevOps","Ansible"]},{"company":"ING Hubs Poland","job_title":"Stażysta w obszarze bezpieczeństwa IT","location":"Katowice (Poland)","tags":[]},{"company":"Robert Bosch Sp. z o.o.","job_title":"DevOps Engineer Cloud Machine Learning Platform","location":"Multiple locations offer (3)","tags":["SAP","Oracle"]},{"company":"Colliers Poland Sp. z o.o.","job_title":"Konsultant/Konsultantka Salesforce","location":"Warszawa (Polska)","tags":["Salesforce"]},{"company":"Biedronka (Jeronimo Martins Polska S.A.)","job_title":"Quality Management System Consultant","location":"Warszawa (Polska)","tags":[]},{"company":"Hitachi Energy Services Sp. z o.o. ","job_title":"Internship - .NET Developer","location":"Krak\xf3w (Poland)","tags":[".NET","React.js","TypeScript","REST API","SQL","PostgreSQL","Git","Azure DevOps","Kafka","Docker","Kubernetes","Prometheus","C#"]},{"company":"ZF Group","job_title":"SAP Architect / Project Manager","location":"Multiple locations offer (4)","tags":[]},{"company":"DEVQUBE sp. z o.o.","job_title":".Net Backend Developer","location":"Oferta w wielu lokalizacjach (16)","tags":[".NET",".NET Core","REST API","Git"]},{"company":"DEVQUBE sp. z o.o.","job_title":"Senior Java Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["Java","REST","JSON","Maven","Gradle","Git","Jira","Confluence","Docker","Kubernetes","Spring Boot"]},{"company":"Nationale-Nederlanden Usługi Finansowe Sp. z o.o.","job_title":"Menadżer ds. Rozwoju System\xf3w IT dla Klienta Korporacyjnego","location":"Warszawa (Polska)","tags":["GitLab","Jenkins"]},{"company":"RTB House","job_title":"Business Intelligence Developer (with Python)","location":"Warszawa (Poland)","tags":["Python","SQL","Git","Jenkins","Jira"]},{"company":"Betsys Poland sp. z o.o.","job_title":"Senior QA","location":"Katowice (Poland)","tags":["Test Automation","Cypress"]},{"company":"e-point SA","job_title":"Hybris Developer","location":"Warszawa (Polska)","tags":["SAP Hybris","Java","SQL","Docker"]},{"company":"Vectio Sp. z o.o.","job_title":"Junior Frontend Developer","location":"Warszawa (Polska)","tags":["HTML","CSS","Javascript","Vue.js","React.js","Angular"]},{"company":"Connectis_","job_title":"QA Automation Engineer","location":"Warszawa (Polska)","tags":["Java","Swift","Appium","Selenium","SQL","Github","Jenkins","Maven"]},{"company":"PW AUTOS Sp. z o.o.","job_title":"Specjalista ds. Analiz","location":"Solec Kujawski (Polska)","tags":["SQL"]},{"company":"PW AUTOS Sp. z o.o.","job_title":"Administrator systemu ERP","location":"Solec Kujawski (Polska)","tags":["SQL"]},{"company":"Hitachi Energy Services Sp. z o.o. ","job_title":"Internship – IT Analytics Services","location":"Krak\xf3w (Poland)","tags":[]},{"company":"Hitachi Energy Services Sp. z o.o. ","job_title":"Internship - DevOps Engineer","location":"Krak\xf3w (Poland)","tags":["Agile","Bash","Git","SQL"]},{"company":"INEOGROUP SP\xd3ŁKA AKCYJNA","job_title":"Młodszy Konsultant Help Desk IT/Młodszy Serwisant I Linii Wsparcia IT","location":"Warszawa (Polska)","tags":["SQL","Active Directory"]},{"company":"INEOGROUP SP\xd3ŁKA AKCYJNA","job_title":"Młodszy Specjalista ds. Serwisu","location":"Warszawa (Polska)","tags":["SQL","Active Directory"]},{"company":"CONNECT DISTRIBUTION sp. z o.o.","job_title":"IT Specialist / Informatyk","location":"Warszawa (Polska)","tags":["Windows Server"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"ABAP Developer (Master Data Management)","location":"Warszawa (Poland)","tags":["JavaScript","UML","BPMN"]},{"company":"Nationale-Nederlanden Usługi Finansowe Sp. z o.o.","job_title":"Menadżer ds. Rozwoju System\xf3w IT dla Operacji","location":"Warszawa (Polska)","tags":["GitLab","Jenkins"]},{"company":"Giełda Papier\xf3w Wartościowych w Warszawie S.A","job_title":"Ekspert ds. System\xf3w IT- Inżynier Sieci LAN/WAN","location":"Warszawa (Polska)","tags":[]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(Cybersecurity) Business Enablement Risk Lead","location":"Krak\xf3w (Poland)","tags":[]},{"company":"Sii Sp. z o.o.","job_title":"FPGA Engineer for 6G","location":"Multiple locations offer (8)","tags":[]},{"company":"Prime Engineering Poland","job_title":"Scrum Master","location":"Oferta w wielu lokalizacjach (16)","tags":["Agile"]},{"company":"Kamsoft S.A.","job_title":"Programista Java","location":"Katowice (Polska)","tags":["SQL","Java"]},{"company":"Kamsoft S.A.","job_title":"Programista Aplikacji Mobilnych","location":"Katowice (Polska)","tags":["Java","Kotlin","Soap","REST","JSON","XML"]},{"company":"COIG","job_title":"Konsultant systemu Microsoft Dynamics 365 (AX) obszaru Handlu i Logistyki","location":"Oferta w wielu lokalizacjach (2)","tags":["SQL"]},{"company":"Giełda Papier\xf3w Wartościowych w Warszawie S.A","job_title":"Product Owner","location":"Wrocław (Polska)","tags":["Jira"]},{"company":"Generali","job_title":"Analityk Systemowy w Zespole System\xf3w Życiowych i Emerytalnych","location":"Warszawa (Polska)","tags":["SQL"]},{"company":"IKEA Retail Warszawa/Okęcie","job_title":"Digital Team Leader","location":"Multiple locations offer (3)","tags":[]},{"company":"GSK","job_title":"Senior Analyst, Identity Access Management (IAM) - Governance and Monitoring","location":"Poznań (Poland)","tags":["AD","ServiceNow or similar","Technologies associated with IAM security"]},{"company":"Bank Millennium S.A.","job_title":"Specjalista UX / UX Designer","location":"Warszawa (Polska)","tags":["Axure"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Network Automation Architect","location":"Warszawa (Poland)","tags":["SQL","Jira","Jenkins","Git"]},{"company":"PwC","job_title":"Senior SAP Retail Konsultant","location":"Oferta w wielu lokalizacjach (8)","tags":["SAP"]},{"company":"PwC","job_title":"Senior S/4 HANA MM Consultant","location":"Oferta w wielu lokalizacjach (3)","tags":["SAP","SAP HANA","SAP MM"]},{"company":"PwC","job_title":"SAP ABAP Developer","location":"Oferta w wielu lokalizacjach (4)","tags":["ABAP","SAP"]},{"company":"PwC","job_title":"Senior SAP Developer - FIORI Full-Stack","location":"Oferta w wielu lokalizacjach (3)","tags":["SAP","JavaScript","HTML"]},{"company":"PwC","job_title":"Senior S/4 HANA SCM Consultant","location":"Warszawa (Polska)","tags":["SAP","SAP HANA","SAP MM"]},{"company":"PwC","job_title":"Senior S/4 HANA TM Consultant","location":"Warszawa (Polska)","tags":["SAP","SAP HANA","SAP MM"]},{"company":"PwC","job_title":"SAP Analytics Cloud Senior Consultant","location":"Oferta w wielu lokalizacjach (4)","tags":["SAP"]},{"company":"HCL Poland","job_title":"Technical Support Agent with Czech & English","location":"Krak\xf3w (Poland)","tags":[]},{"company":"HCL Poland","job_title":"Technical Support Agent with Italian & English","location":"Krak\xf3w (Poland)","tags":[]},{"company":"HCL Poland","job_title":"Technical Support Agent with Portuguese & English","location":"Krak\xf3w (Poland)","tags":[]},{"company":"RTB House","job_title":"Technical Account Manager DACH","location":"Multiple locations offer (16)","tags":["JavaScript","HTML","MS Excel"]},{"company":"POSNET POLSKA S.A.","job_title":"Product Designer (UX/UI)","location":"Warszawa (Polska)","tags":["UI/UX","Figma"]},{"company":"Rainbow Tours S.A.","job_title":"IT Project Manager","location":"Ł\xf3dź (Polska)","tags":[]},{"company":"RTB House","job_title":"Technical Account Manager New Product (APAC)","location":"Oferta w wielu lokalizacjach (16)","tags":["JavaScript","HTML","MS Excel"]},{"company":"BTC Software Systems Sp. z o.o","job_title":"Konsultant Microsoft Dynamics 365 CRM z językiem niemieckim","location":"Oferta w wielu lokalizacjach (16)","tags":[]},{"company":"ArcelorMittal Poland S.A.","job_title":"Specjalista ds. cyfryzacji, technologii i narzędzi","location":"Dąbrowa G\xf3rnicza (Poland)","tags":[]},{"company":" VlogIT Sp. z o.o.","job_title":"Architekt Rozwiązań – Lider Techniczny (front-end)","location":"Oferta w wielu lokalizacjach (16)","tags":["React.js","Next.js","Angular"]},{"company":"Santander Leasing S.A.","job_title":"Administrator system\xf3w","location":"Poznań (Polska)","tags":["Windows Server","Active Directory","Microsoft Azure","PowerShell"]},{"company":"Sii Sp. z o.o.","job_title":"Analityk Biznesowy – branża bankowa","location":"Oferta w wielu lokalizacjach (9)","tags":["BPMN","UML","SQL"]},{"company":"Asseco Business Solutions S.A.","job_title":"International Sales Manager","location":"Lublin (Poland)","tags":[]},{"company":"PGE Systemy S.A.","job_title":"Starszy Specjalista ds. Inżynierii Danych (Data Engineer)","location":"Warszawa (Polska)","tags":["Python","SQL","NoSQL","Elasticsearch","Cassandra"]},{"company":"IT Connect Sp. z o.o.","job_title":"Konsultant SAP","location":"Warszawa (Polska)","tags":["Jira","SAP","SAP FI"]},{"company":"PGE Systemy S.A.","job_title":"Starszy Specjalista ds. System\xf3w OSS","location":"Warszawa (Polska)","tags":["OSS"]},{"company":"Centrum e-Zdrowia","job_title":"Analityk Systemowy w Wydziale Rozwoju","location":"Warszawa (Polska)","tags":["UML","BPMN","SQL","SOA","SoapUI","Enterprise Architect","Jira"]},{"company":"BlueSoft Sp. z o.o.","job_title":"Analityk Systemowy","location":"Warszawa (Polska)","tags":["esterprise architect","REST","UML","BPMN","Agile","SQL","Scrum"]},{"company":"BlueSoft Sp. z o.o.","job_title":"Python Developer","location":"Warszawa (Polska)","tags":["Python 3.x","Django","REST","SQL","PostgreSQL","Angular 2+"]},{"company":"BlueSoft Sp. z o.o.","job_title":"Junior Big Data Developer","location":"Warszawa (Polska)","tags":["Spark","HDFS","Gitlab/Github","SQL"]},{"company":"TRANSITION TECHNOLOGIES-SOFTWARE SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Administrator Checkpoint","location":"Warszawa (Polska)","tags":["CheckPoint"]},{"company":"PGE Systemy S.A.","job_title":"Specjalista ds. Packet Core LTE","location":"Warszawa (Polska)","tags":["Linux"]},{"company":"TRANSITION TECHNOLOGIES-SOFTWARE SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Administrator NSX-T","location":"Warszawa (Polska)","tags":["VMware","NSX-T"]},{"company":"TRANSITION TECHNOLOGIES-SOFTWARE SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Administrator Linux","location":"Warszawa (Polska)","tags":["Linux","Apache Tomcat"]},{"company":"DevsData LLC","job_title":"Fullstack Developer (React & Node.js)","location":"Multiple locations offer (16)","tags":["React.js","TypeScript","Node.js","MongoDB"]},{"company":"Bank Pekao","job_title":"Kierownik ds. Projekt\xf3w w Biurze Projekt\xf3w i Transformacji Cyfrowej","location":"Warszawa (Polska)","tags":["PMP","Prince2","IMPA"]},{"company":"STS S.A.","job_title":"Junior Network Engineer","location":"Katowice (Polska)","tags":["Monitoring tools"]},{"company":"DSV ISS ","job_title":"Network Specialist","location":"Warszawa (Poland)","tags":["Cisco"]},{"company":"Nexio Management Sp. z o.o.","job_title":".NET Developer","location":"Warszawa (Polska)","tags":[".NET",".NET Core","ASP.NET MVC","Angular.js","JavaScript","Microsoft SQL Server","Git"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Security Assessment Engineer","location":"Multiple locations offer (3)","tags":["C","C++","Java","Python"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"User Experience Consultant","location":"Warszawa (Poland)","tags":[]},{"company":"CENTRUM MEDYCZNE LUXMED sp. z o.o.","job_title":"Tester oprogramowania - wdrożeniowiec","location":"Lublin (Polska)","tags":["Java","HTML","PHP"]},{"company":"Gdańskie Przedsiębiorstwo Energetyki Cieplnej Sp. z o.o.","job_title":"Menedżer ds. projekt\xf3w IT","location":"Gdańsk (Polska)","tags":["Oracle","SQL"]},{"company":"Samsung R&D Institute Poland","job_title":"Internship - C++ / C# Intern","location":"Warszawa (Poland)","tags":["C#","C/C++","OpenGL","Linux","Git","GitHub","Gerrit","Dotnet","MVVM","XAML"]},{"company":"ITSG sp. z o.o.","job_title":"Test Automation Engineer","location":"Multiple locations offer (16)","tags":["TypeScript","JavaScript","Jest","Cypress"]},{"company":"3mdeb Sp. z o.o.","job_title":"Project Manager","location":"Gdańsk (Polska)","tags":[]},{"company":" VlogIT Sp. z o.o.","job_title":"Analityk Systemowy","location":"Oferta w wielu lokalizacjach (16)","tags":["UML","BPMN","REST","SQL"]},{"company":"Sii Sp. z o.o.","job_title":"Programista Front-end","location":"Oferta w wielu lokalizacjach (6)","tags":["JavaScript","Scrum"]},{"company":"Sii Sp. z o.o.","job_title":"Tester Automatyzujący Java","location":"Oferta w wielu lokalizacjach (9)","tags":["Java","Selenium WebDriver"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Security Design & Consultancy Engineer","location":"Multiple locations offer (3)","tags":["Java","Python","C","C++"]},{"company":"Sii Sp. z o.o.","job_title":"Tester Manualny","location":"Oferta w wielu lokalizacjach (6)","tags":["SQL"]},{"company":"Nokia","job_title":"Fault Coordinator","location":"Multiple locations offer (16)","tags":[]},{"company":"Robert Bosch Sp. z o.o.","job_title":"IT System Administrator (Microsoft Windows)","location":"Multiple locations offer (3)","tags":["Azure DevOps","PowerShell","Python","VMware"]},{"company":"ERGO Technology & Services S.A.","job_title":"Engineering Team Lead","location":"Warszawa (Poland)","tags":[]},{"company":"Monogo Sp. z o.o.","job_title":"DevOps Engineer","location":"Multiple locations offer (4)","tags":["Java","Python","Kubernetes","Docker"]},{"company":"Capgemini Polska ","job_title":"IT Sourcing Specialist with English","location":"Krak\xf3w (Poland)","tags":[]},{"company":"PwC","job_title":"Starszy Konsultant Technology Risk","location":"Oferta w wielu lokalizacjach (3)","tags":[]},{"company":"PwC","job_title":"Cloud Security Senior Specialist","location":"Warszawa (Polska)","tags":["Microsoft Azure","Google Cloud Platform","AWS"]},{"company":"HCL Poland","job_title":"Software Discovery Specialist","location":"Krak\xf3w (Poland)","tags":[]},{"company":"HCL Poland","job_title":"Lead Software Development L3 Support Engineer - Software Developer","location":"Krak\xf3w (Poland)","tags":["Java","SQL"]},{"company":"Perform Content Poland Sp. z o.o.","job_title":"FullStack JavaScript Developer (video portals)","location":"Multiple locations offer (7)","tags":["JavaScript","TypeScript","React","AWS"]},{"company":"Kemira Gdańsk Sp. z o.o.","job_title":"IT Specialist ABAP Developer","location":"Gdańsk (Poland)","tags":["SAP","ABAP","JavaScript"]},{"company":"IT Connect Sp. z o.o.","job_title":"Architekt IT ze znajomością praktyki DevOps","location":"Warszawa (Polska)","tags":["Docker","Kubernetes"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Senior Salesforce Developer","location":"Multiple locations offer (3)","tags":["Salesforce","Git","Jenkins"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Senior Salesforce Admin","location":"Multiple locations offer (3)","tags":["Java","Salesforce"]},{"company":"Oriflame Poland Sp. z o. o.","job_title":"Email Marketing Specialist","location":"Warszawa (Poland)","tags":["HTML","CSS","Adobe Illustrator","Adobe Photoshop","Adobe InDesign"]},{"company":"DSV ISS ","job_title":"IT Change Manager, IT Governance","location":"Warszawa (Poland)","tags":["Agile"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"SAP Fiori Developer","location":"Multiple locations offer (3)","tags":["SAP","FIORI"]},{"company":"Aalberts Surface Technologies Heat Sp. z o.o.","job_title":"Specjalista ds. IT","location":"Dzierżoni\xf3w (Polska)","tags":["Linux","VMware","Juniper"]},{"company":"ArcelorMittal Poland S.A.","job_title":"IT Auditor","location":"Dąbrowa G\xf3rnicza (Poland)","tags":[]},{"company":"DIGITAL COLLIERS SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Product Owner","location":"Oferta w wielu lokalizacjach (16)","tags":["Agile","UX"]},{"company":"DIGITAL COLLIERS SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Junior Vue.Js Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["Vue.js","Vuex","Composition API","Microfrontends Architecture","TypeScript","Sass","GraphQL","REST","GitLab","AWS","GitLab CI/CD"]},{"company":"DIGITAL COLLIERS SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Vue.Js Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["Nuxt 2","Vue.js","TypeScript","JavaScript"]},{"company":"DIGITAL COLLIERS SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Junior Java/Kotlin Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["Kotlin","Ktor","Koin","GraphQL","REST","Microservices Architecture","Kubernetes","Helm","GitLab CI/CD","AWS","MongoDB","RabbitMQ","Kotest","MockK","Pact","Hexagonal Architecture"]},{"company":"Medicover","job_title":"E-commerce Specialist","location":"Warszawa (Polska)","tags":["Google Analytics"]},{"company":"DIGITAL COLLIERS SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Mid Java/ Kotlin Developer","location":"Oferta w wielu lokalizacjach (16)","tags":[]},{"company":"DIGITAL COLLIERS SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Mid/ Senior React Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["JavaScript","React.js","GraphQL","REST"]},{"company":"DIGITAL COLLIERS SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Mid/ Senior Node.Js Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["JavaScript","Node.js","GraphQL","REST API","Microservices","Mocha"]},{"company":"LSI Software S.A.","job_title":"Administrator/ka IT","location":"Ł\xf3dź (Polska)","tags":["Microsoft"]},{"company":"Ringier Axel Springer Polska Sp. z o.o.","job_title":"Scrum Master","location":"Wrocław (Polska)","tags":["Scrum","Agile"]},{"company":"LSI Software S.A.","job_title":"Android Developer","location":"Ł\xf3dź (Polska)","tags":["Kotlin","Java","REST","JSON","Dagger2","MVVM","RxJava"]},{"company":"NASK","job_title":"Tester oprogramowania w Dziale Wytwarzania Zwinnego","location":"Warszawa (Polska)","tags":["JMeter","Selenium WebDriver","TestLink","Web Services","REST","SQL"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Android Developer (eBike)","location":"Warszawa (Poland)","tags":["Kotlin"]},{"company":"Hitachi Energy Poland Sp. z o.o.","job_title":"Internship - C++ Backend Developer","location":"Krak\xf3w (Poland)","tags":["C++","Bash"]},{"company":"Samsung R&D Institute Poland","job_title":"DevOps Engineer in Voice Intelligence Research Team","location":"Warszawa (Poland)","tags":["AWS","Docker","Python","PostgreSQL","MySQL"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"QA Test Manager (Wealth & Personal Banking IT)","location":"Krak\xf3w (Poland)","tags":["Jira","Confluence"]},{"company":"Centralny Ośrodek Informatyki ","job_title":"Scrum Master","location":"Warszawa (Polska)","tags":["Scrum"]},{"company":"Senetic S.A.","job_title":"IT Service Specialist","location":"Warszawa (Polska)","tags":["Microsoft 365"]},{"company":"TRANSITION TECHNOLOGIES-SOFTWARE SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Programista front-end","location":"Oferta w wielu lokalizacjach (16)","tags":["JavaScript","Angular","Git"]},{"company":"TRANSITION TECHNOLOGIES-SOFTWARE SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Programista Java","location":"Oferta w wielu lokalizacjach (16)","tags":["Java","Spring Framework","Hibernate","REST/SOAP","ORM","serwery aplikacyjne","SQL"]},{"company":"eLeader Sp. z o.o.","job_title":"Bussiness Analyst/Project Manager IT","location":"lubelskie (Polska)","tags":[]},{"company":"Sii Sp. z o.o.","job_title":"Test Automation Engineer","location":"Multiple locations offer (2)","tags":["Selenium","Java","JavaScript","Python","C#"]},{"company":"Sii Sp. z o.o.","job_title":"C++ Developer","location":"Multiple locations offer (2)","tags":["C++","Linux"]},{"company":"Sii Sp. z o.o.","job_title":"Android Developer","location":"Multiple locations offer (2)","tags":["Java","Kotlin"]},{"company":"Netia","job_title":"Inżynier Rozwiązań Technicznych","location":"Oferta w wielu lokalizacjach (2)","tags":[]},{"company":"Better Software Group S. A.","job_title":"DevOps Engineer AWS","location":"Oferta w wielu lokalizacjach (16)","tags":["AWS","CI/CD","GitLab","Java","React","Python"]},{"company":"Netia","job_title":"Specjalista ds. Administracyjnego Wsparcia","location":"Oferta w wielu lokalizacjach (3)","tags":[]},{"company":"Better Software Group S. A.","job_title":"React Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["React","TypeScript"]},{"company":"Sii Sp. z o.o.","job_title":".NET Developer","location":"Multiple locations offer (2)","tags":[".NET","Git","SQL"]},{"company":"Sii Sp. z o.o.","job_title":"Java Developer","location":"Multiple locations offer (2)","tags":["Java","Hibernate"]},{"company":"INUITS ","job_title":"Software Developer Python","location":"Multiple locations offer (16)","tags":["Python","Linux","Automated test","Jira","CI/CD","Git","Selenium"]},{"company":"Sii Sp. z o.o.","job_title":"Front-end Developer","location":"Multiple locations offer (2)","tags":["JavaScript","Angular","Vue"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"Lead UX Designer (Wealth & Personal Banking IT)","location":"Krak\xf3w (Poland)","tags":["UX","Digital Design"]},{"company":"Sii Sp. z o.o.","job_title":"DevOps Engineer","location":"Multiple locations offer (2)","tags":["Docker","Kubernetes","Python","Bash"]},{"company":"Sii Sp. z o.o.","job_title":"Business Intelligence Developer","location":"Multiple locations offer (2)","tags":["MS SQL","Power BI"]},{"company":"Sii Sp. z o.o.","job_title":"Python Test Developer – healthcare project","location":"Multiple locations offer (6)","tags":["Python","Robot Framework","Selenium","Git"]},{"company":"Bank Millennium S.A.","job_title":"Analityk Biznesowo-Systemowy","location":"Wrocław (Polska)","tags":["SQL","Oracle","Jira","Confluence"]},{"company":"Connectis_","job_title":"Frontend Developer - Angular","location":"Warszawa (Polska)","tags":["Angular","JavaScript","TypeScript","RxJS","NgRx","TDD","npm/yarn","Webpack","Jenkins","Swagger","HTML/CSS","Bootstrap","Git","GitHub"]},{"company":"Generali","job_title":"Młodszy Administrator Baz Danych","location":"Oferta w wielu lokalizacjach (3)","tags":["Oracle"]},{"company":"Raben Management Services ","job_title":"Oracle SQL Database Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["SQL","Linux","AIX"]},{"company":"Raben Management Services ","job_title":"Transportation System Support IT Specialist (Core IT Team)","location":"Oferta w wielu lokalizacjach (16)","tags":["Linux","PL/SQL"]},{"company":"Nordcurrent Warsaw Sp. z o.o.","job_title":"Lead Developer C++","location":"Multiple locations offer (16)","tags":["C++","Jira","Git"]},{"company":"Connectis_","job_title":"Senior Java Developer","location":"Warszawa (Polska)","tags":["Java","Spring","Spring Boot","GCP","Kubernetes","Docker","Terraform","Jenkins","gRPC","SCRUM"]},{"company":"Viessmann R&D Center","job_title":"Line Manager","location":"Wrocław (Poland)","tags":["Line Manager","PM","Scrum Master"]},{"company":"OPITZ CONSULTING Polska Sp. z o.o. ","job_title":"Java Consultant z językiem niemieckim","location":"Krak\xf3w (Polska)","tags":["Java","JavaScript","Spring Boot","Hibernate","Angular","SQL","Eclipse","Jenkins"]},{"company":"PGE Obr\xf3t S.A.","job_title":"Specjalista w Zespole ds. Rozwoju i Optymalizacji","location":"Oferta w wielu lokalizacjach (2)","tags":["SQL","MSSQL Server","C","C++","C#","JavaScript","TypeScript","jQuery","Lua","Python","PHP","GitHub","GitLab","Bitbucket","Fork","CLI","HTML","CSS"]},{"company":"NORDEA Bank Abp SA Oddział w Polsce","job_title":"Senior Analyst - Controller to Market Risk Control Team","location":"Warszawa (Poland)","tags":["SQL","VBA","Python"]},{"company":"ERGO Technology & Services S.A.","job_title":"Cloud Dev Engineer","location":"Multiple locations offer (2)","tags":["AWS","Linux","Docker","Kubernetes","Ansible","Puppet","Bash","Python","Groovy","Jenkins","Jira","Confluence"]},{"company":"ERGO Technology & Services S.A.","job_title":"Software Engineer (Fullstack)","location":"Warszawa (Poland)","tags":["React.js","Node.js","JavaScript","TypeScript","SQL","Git","AWS"]},{"company":"Connectis_","job_title":"Fullstack Java Developer","location":"Warszawa (Polska)","tags":["Java","Angular","Spring Boot","Hibernate"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"IT Business Consultant for Reporting and Analytics","location":"Multiple locations offer (3)","tags":[]},{"company":"Robert Bosch Sp. z o.o.","job_title":"Technical Lead for Business Analytics","location":"Multiple locations offer (3)","tags":["Oracle SQL","SAP BW"]},{"company":"DevsData LLC","job_title":"Microsoft Dynamics CRM Developer","location":"Multiple locations offer (16)","tags":["C#",".NET","JSON","JavaScript","Microsoft Dynamics"]},{"company":"Robert Bosch Sp. z o.o.","job_title":"IT Architect – Mobility Solutions","location":"Multiple locations offer (3)","tags":[]},{"company":"JohnnyBros Sp. z o.o. ","job_title":"Frontend Developer","location":"Gdańsk (Polska)","tags":["HTML","CSS","JS","React"]},{"company":"PwC","job_title":"ServiceNow Developer/APM","location":"Multiple locations offer (3)","tags":["JavaScript","Glide","ServiceNow","API"]},{"company":"Sygnity S.A.","job_title":"Programista .NET","location":"Oferta w wielu lokalizacjach (2)","tags":["C#",".NET"]},{"company":"Sygnity S.A.","job_title":"Java Developer","location":"Oferta w wielu lokalizacjach (3)","tags":["Java","Wildfly","Postman","Jira"]},{"company":"MakoLab SA","job_title":"Programista Java","location":"Oferta w wielu lokalizacjach (2)","tags":["Java","Spring Boot","MySQL","MongoDB","SOAP","REST","SQL"]},{"company":"PwC","job_title":"Senior S/4 HANA SD Consultant","location":"Oferta w wielu lokalizacjach (3)","tags":["SAP","SAP HANA","SAP MM"]},{"company":"DevsData LLC","job_title":"PHP Developer","location":"Multiple locations offer (16)","tags":["MySQL","Git","Redis","RabbitMQ","PHP Unit","HTML","CSS","JavaScript"]},{"company":"PwC","job_title":"Tableau Developer","location":"Warszawa (Poland)","tags":["Tableau"]},{"company":"Sygnity S.A.","job_title":"Młodszy Programista Java","location":"Oferta w wielu lokalizacjach (3)","tags":["Java","Oracle","PostgreSQL","Jira","Eclipse","Git","Visual Studio"]},{"company":"Connectis_","job_title":"Dynamics365 Consultant","location":"Warszawa (Poland)","tags":["Dynamics365","PowerBI","Azure"]},{"company":"Polkomtel Sp. z o.o.","job_title":"Młodszy Specjalista ds. Obsługi System\xf3w","location":"Warszawa (Polska)","tags":[]},{"company":"Reply Polska Sp. z o.o.","job_title":"Junior Developer (IOT)","location":"Katowice (Poland)","tags":["Java","JavaScript","Python","C","C++","Angular"]},{"company":"Reply Polska Sp. z o.o.","job_title":"Junior QA Manual Tester","location":"Katowice (Poland)","tags":[]},{"company":"Reply Polska Sp. z o.o.","job_title":"Junior Business Analyst","location":"Katowice (Poland)","tags":[]},{"company":"Sescom S.A.","job_title":"Administrator System\xf3w IT","location":"Gdańsk (Polska)","tags":[]},{"company":"Fellowmind Poland Sp\xf3łka z ograniczoną odpowiedzialnością","job_title":"Project Manager - wdrożenia ERP","location":"Oferta w wielu lokalizacjach (3)","tags":[]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(Investemnt Banking Tech) Java Software Engineer Internship","location":"Krak\xf3w (Poland)","tags":["Scala","Kotlin","JavaScript",".NET"]},{"company":"Reply Polska Sp. z o.o.","job_title":"Junior Devops Engineer","location":"Katowice (Poland)","tags":["Red Hat","Ubuntu","Python","PHP","Node.js","Bash","Git"]},{"company":"Reply Polska Sp. z o.o.","job_title":"Junior Software Tester","location":"Katowice (Poland)","tags":["Jira"]},{"company":"Reply Polska Sp. z o.o.","job_title":"Młodszy programista","location":"Katowice (Polska)","tags":["Java",".NET","PHP","Python","React","Angular"]},{"company":"Reply Polska Sp. z o.o.","job_title":"Absolwent Uczelni Technicznej","location":"Katowice (Polska)","tags":[]},{"company":"Polska Grupa Lotnicza","job_title":"Młodszy administrator system\xf3w komputerowych","location":"Warszawa (Polska)","tags":[]},{"company":"Reply Polska Sp. z o.o.","job_title":"Junior QA Automation Tester","location":"Katowice (Poland)","tags":["SVN","Git","GitLab","Java","Python","SQL","HTML","CSS"]},{"company":"Reply Polska Sp. z o.o.","job_title":"Junior Software Engineer","location":"Katowice (Poland)","tags":["Node.js","Spring Boot","Flask","Django","Angular","TypeScript"]},{"company":"Reply Polska Sp. z o.o.","job_title":"Junior Software Developer","location":"Katowice (Poland)","tags":["Java","Angular",".NET","PHP"]},{"company":"JAMF","job_title":"Senior Software Engineer (C#)","location":"Katowice (Poland)","tags":["C#",".NET","C++"]},{"company":"PGE Polska Grupa Energetyczna S.A.","job_title":"Samodzielny Specjalista w Wydziale Analiz Rynkowych i Prognozowania","location":"Warszawa (Polska)","tags":["R","Python","SQL"]},{"company":"JAMF","job_title":"Front-End Engineer II","location":"Katowice (Poland)","tags":["TypeScript","Angular","JS","Clean Code","JavaScript"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(Cybersecurity) Cyber Risk Technical Manager","location":"Krak\xf3w (Poland)","tags":["CRQ"]},{"company":"JAMF","job_title":"Test Automation Engineer","location":"Katowice (Poland)","tags":["Analyzing data","Test automation"]},{"company":"Sii Sp. z o.o.","job_title":"Technik Labowy","location":"Gdańsk (Polska)","tags":["Linux","Windows Server"]},{"company":"Giełda Papier\xf3w Wartościowych w Warszawie S.A","job_title":"Starszy Analityk","location":"Warszawa (Polska)","tags":["SQL"]},{"company":"SIMCORP SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Cloud Security and Compliance Architect","location":"Warszawa (Poland)","tags":["Azure Sentinel","NIST","SOC"]},{"company":"VOLKSWAGEN FINANCIAL SERVICES POLSKA SP\xd3ŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ","job_title":"Analityk Systemowy IT - Domena Data &Analytics","location":"Warszawa (Polska)","tags":["SQL","Oracle","SAP","Jira","Confluence"]},{"company":"JAMF","job_title":"Senior Java Software Engineer","location":"Katowice (Poland)","tags":["Java","Spring Framework","Hibernate","SQL","Git","Tomcat","JPA"]},{"company":"JAMF","job_title":"Java Software Engineer II","location":"Katowice (Poland)","tags":["Spring Framework","SQL","Git","Java","Tomcat"]},{"company":"Asseco Business Solutions S.A.","job_title":"Frontend Developer","location":"Warszawa (Polska)","tags":["Angular","JavaScript","TypeScript","HTML 5","CSS3"]},{"company":"ALSTOM ZWUS sp. z o.o. ","job_title":"Junior System Architect","location":"Silesian (Poland)","tags":[]},{"company":"HCL Poland","job_title":"Software Developer (Ruby / Java)","location":"Krak\xf3w (Poland)","tags":["Ruby","Java","Agile"]},{"company":"ALSTOM ZWUS sp. z o.o. ","job_title":".Net Developer","location":"Silesian (Poland)","tags":["Git","WPF","C#","Azure DevOps","WCF"]},{"company":"STARTUP DEVELOPMENT HOUSE sp. z o.o.","job_title":"Product Designer","location":"Warszawa (Poland)","tags":[]},{"company":"Diagnostyka S.A.","job_title":"Informatyk Oddziałowy","location":"Szczecin (Polska)","tags":[]},{"company":"STARTUP DEVELOPMENT HOUSE sp. z o.o.","job_title":"Freelance Designer","location":"Warszawa (Poland)","tags":["Figma"]},{"company":"T-Mobile","job_title":"TV Solution Architect - Tribu Household","location":"Warszawa (Poland)","tags":["Confluence","Jira","GitLab","Git","IntelliJ"]},{"company":"STARTUP DEVELOPMENT HOUSE sp. z o.o.","job_title":"Senior React Developer","location":"Warszawa (Poland)","tags":["React.js","JavaScript"]},{"company":"STARTUP DEVELOPMENT HOUSE sp. z o.o.","job_title":"React Developer","location":"Warszawa (Poland)","tags":["React.js","JavaScript"]},{"company":"Robert Bosch sp. z o.o. Oddział w Mirkowie","job_title":"Specjalista ds. IT i digitalizacji proces\xf3w","location":"Mirk\xf3w (pow. wrocławski) (Polska)","tags":["PowerShell","Python"]},{"company":"STARTUP DEVELOPMENT HOUSE sp. z o.o.","job_title":"Freelance React Developer","location":"Warszawa (Poland)","tags":["React.js","JavaScript"]},{"company":"Gigaset Communications Polska","job_title":"DevOps Engineer","location":"Multiple locations offer (18)","tags":["Docker","Kubernetes","PostgreSQL","MySQL","Redis"]},{"company":"IT Connect Sp. z o.o.","job_title":"Inżynier Serwisu","location":"Oferta w wielu lokalizacjach (2)","tags":[]},{"company":"IT Connect Sp. z o.o.","job_title":"Scrum Master","location":"Warszawa (Polska)","tags":["Jira","Confluence","Miro/Mural"]},{"company":"STARTUP DEVELOPMENT HOUSE sp. z o.o.","job_title":"QA Automation Engineer","location":"Warszawa (Poland)","tags":["JavaScript","Git"]},{"company":"ZF Group","job_title":"Homologations and Type Approval Engineer (Automotive)","location":"Częstochowa (Poland)","tags":["SAP"]},{"company":"ZF Group","job_title":"Cost Estimator SBS","location":"Częstochowa (Poland)","tags":[]},{"company":"ZF Group","job_title":"Tester Oprogramowania","location":"Częstochowa (Polska)","tags":["C","C++","Python"]},{"company":"ZF Group","job_title":"Tester System\xf3w Wbudowanych (Python)","location":"Częstochowa (Polska)","tags":["Python"]},{"company":"GlobalLogic Poland","job_title":"Senior Developer in Test (Linux)","location":"Multiple locations offer (3)","tags":["Python","Linux","bash scripting"]},{"company":"ZF Group","job_title":"Project Leader","location":"Ł\xf3dź (Polska)","tags":["Agile","Waterfall"]},{"company":"ZF Group","job_title":"Programista C (Dział Algorytm\xf3w)","location":"Częstochowa (Polska)","tags":["C"]},{"company":"ZF Group","job_title":"Software Project Manager ADAS","location":"Częstochowa (Polska)","tags":["C","C++"]},{"company":"ZF Group","job_title":"Test Project Leader","location":"Częstochowa (Polska)","tags":["validation experience"]},{"company":"ZF Group","job_title":"Programista C#","location":"Częstochowa (Polska)","tags":["C#"]},{"company":"Samsung R&D Institute Poland","job_title":"Exynos Modem Tester","location":"Warszawa (Poland)","tags":["JIRA","Confluence"]},{"company":"Samsung R&D Institute Poland","job_title":"Internship - ExynosAuto Tester Engineer","location":"Warszawa (Poland)","tags":["Atlassian Tools","qTEST","Jira"]},{"company":"Inetum Polska","job_title":"Regionalny Kierownik ds. Infrastruktury IT","location":"Warszawa (Polska)","tags":["VPN","LAN","IT Service Delivery","Active Directory DNS","DHCP","Linux","Active Directory"]},{"company":"Nexio Management Sp. z o.o.","job_title":"Programista Java (Regular/Senior)","location":"Oferta w wielu lokalizacjach (17)","tags":["Java","Spring Framework","Spring Boot","SQL","REST","Git","IntelliJ","Spring Cloud","Microservices"]},{"company":"Better Software Group S. A.","job_title":"iOS Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["iOS","Swift","SwiftUI","rxSwift","iOS SDK","GraphQL"]},{"company":"Better Software Group S. A.","job_title":"Senior Angular Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["Angular"]},{"company":"Better Software Group S. A.","job_title":"IT Project Manager","location":"Wrocław (Polska)","tags":["Jira"]},{"company":"Nationale-Nederlanden Usługi Finansowe Sp. z o.o.","job_title":"Specjalista w zespole Wsparcia Użytkownik\xf3w i Aplikacji","location":"Warszawa (Polska)","tags":[]},{"company":"Better Software Group S. A.","job_title":"Senior Android Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["Android","Android SDK","Android Studio","MVVM","API REST","JSON","XML","RxJava"]},{"company":"Better Software Group S. A.","job_title":"Scala Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["Scala","Cats","http4s","Kafka","GraphQL","AWS","Elasticsearch","Redis","DynamoDB","Postgres"]},{"company":"Better Software Group S. A.","job_title":"Kotlin Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["Kotlin","Spring Boot","Kubernetes"]},{"company":"Better Software Group S. A.","job_title":"Junior React Developer","location":"Wrocław (Polska)","tags":["React","JavaScript","HTML","CSS","SASS"]},{"company":"Better Software Group S. A.","job_title":"Junior iOS Developer","location":"Wrocław (Polska)","tags":["iOS","Swift","SwiftUI"]},{"company":"Better Software Group S. A.","job_title":"Android Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["Android","Kotlin","Java","Android SDK","Android Studio","MWM","API REST","JSON","XML","RxJava"]},{"company":"Better Software Group S. A.","job_title":"Junior Android Developer","location":"Wrocław (Polska)","tags":["Android","Java","Kotlin","Android SDK","Android Studio","Git"]},{"company":"AstraZeneca Pharma","job_title":"Finance Data Specialist","location":"Warszawa (Poland)","tags":["SAP"]},{"company":"Rossmann SDP","job_title":"Software Developer C#","location":"Oferta w wielu lokalizacjach (18)","tags":["C#","T-SQL","Winforms","Devexpress","Git","TFS"]},{"company":"T-Mobile","job_title":"Mid Java Developer: Pantera CRM","location":"Warszawa (Polska)","tags":["Java","Spring Boot","js","JavaScript","SQL"]},{"company":"ITSG sp. z o.o.","job_title":"Expert JavaScript Developer","location":"Multiple locations offer (16)","tags":["JavaScript","React","Vue"]},{"company":"Bank Pekao","job_title":"Architekt Hurtowni Danych","location":"Warszawa (Polska)","tags":["Oracle DB","PL/SQL","Bash","Perl","Unix","Linux"]},{"company":"Nokia","job_title":"Technical Leader, Development","location":"Multiple locations offer (16)","tags":["C++","Python","Git","GitLab"]},{"company":"Bank Pekao","job_title":"Analityk Operacyjny Mainframe","location":"Warszawa (Polska)","tags":["system z/OS","środowisko Mainframe"]},{"company":"KACZMARSKI GROUP","job_title":"Programista Front-end","location":"Wrocław (Polska)","tags":["TypeScript","JavaScript","webpack","Node.js","React.js","LESS","CSS","HTML","Kentico","RWD","Bootstrap"]},{"company":"Bank Pekao","job_title":"Tester automatyczny","location":"Warszawa (Polska)","tags":["GIT","Java/JavaScript","SQL","CQL","SoupUI","Docker","Kubernetes"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(Cybersecurity) Cybersecurity Senior Security Researcher","location":"Krak\xf3w (Poland)","tags":["Google","Android","iOS"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(Cybersecurity) Incident Response Senior Analyst","location":"Krak\xf3w (Poland)","tags":["EnCase","FTK","Sleuthkit","Kali Linux","IDA Pro","DEFT","SANS SIFT"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(Cybersecurity) Cybersecurity Creative Manager","location":"Krak\xf3w (Poland)","tags":["SharePoint","Confluence","Jira","Adobe Suite","Mural"]},{"company":"Samsung R&D Institute Poland","job_title":"Internship – Voice Recognition Software Tester","location":"Warszawa (Poland)","tags":["manual testing"]},{"company":"TEACODE","job_title":"React.js Developer","location":"Multiple locations offer (20)","tags":["React.js","JavaScript"]},{"company":"Bank Pekao","job_title":"Programista Systemowy Mainframe","location":"Warszawa (Polska)","tags":["system z/OS","środowisko Mainframe","TSO/ISPF","DFSMS","RACF","CICS","Rexx","JCL"]},{"company":"Hitachi Energy Services Sp. z o.o. ","job_title":"IT Application Manager for Concur Travel and Expenses","location":"Krak\xf3w (Poland)","tags":["SAP"]},{"company":"HSBC Service Delivery (Polska) Sp. z o.o.","job_title":"(Cybersecurity) Cybersecurity System Integration Developer","location":"Krak\xf3w (Poland)","tags":["Java","Node.js"]},{"company":"Bank Pekao","job_title":"Programista Oracle w Hurtowni Danych","location":"Warszawa (Polska)","tags":["Oracle","SQL","PL/SQL","Informatica PowerCent"]},{"company":"Beyond.pl Sp. z o.o.","job_title":"Junior Linux Specialist (Service Desk Level 2)","location":"Poznań (Polska)","tags":["Linux"]},{"company":"Symfonia sp. z o.o.","job_title":"Project Manager","location":"Oferta w wielu lokalizacjach (16)","tags":[]},{"company":"Nokia","job_title":"Working Student - Software Engineer C/C++","location":"Multiple locations offer (16)","tags":["C++","C"]},{"company":"Nokia","job_title":"Integration & Testing Working Student","location":"Multiple locations offer (16)","tags":["Python","Bash","Perl","JIRA","Shell"]},{"company":"Nokia","job_title":"Working Student - Software Test Engineer","location":"Multiple locations offer (16)","tags":[]},{"company":"Nokia","job_title":"DevOps Engineer for Distributed Cloud Builds","location":"Multiple locations offer (16)","tags":["Bash","Python","C++","C","Kubernetes","Cloud Computing","Git","Elasticsearch","Linux"]},{"company":"Nokia","job_title":"DevOps Engineer","location":"Multiple locations offer (16)","tags":["jira","Python","C++","Git","GitLab","Kubernetes","OpenStack","Docker"]},{"company":"Nokia","job_title":"Python Developer","location":"Multiple locations offer (16)","tags":["Python","Git"]},{"company":"Nokia","job_title":"Python Developer Working Student","location":"Multiple locations offer (16)","tags":["Python","JIRA","SQL","CSS","HTML","Oracle"]},{"company":"Nokia","job_title":"Senior C/C++ Embedded Developer","location":"Multiple locations offer (16)","tags":["C++","Git","C","Python","Bash","MATLAB"]},{"company":"QUERIS SP. Z O.O.","job_title":"Technical Support","location":"Piekary Śląskie (Polska)","tags":["SQL"]},{"company":"Nokia","job_title":"Senior C++ Developer","location":"Multiple locations offer (16)","tags":["C++","GCC","Clang"]},{"company":"Nokia","job_title":"Senior DevOps Engineer","location":"Multiple locations offer (16)","tags":["Python","Bash","Perl","C","C++","Kubernetes","Docker"]},{"company":"Nokia","job_title":"Senior Python Developer","location":"Multiple locations offer (16)","tags":["Python","Git","Django","Flask"]},{"company":"Nokia","job_title":"Senior Software Test Engineer","location":"Multiple locations offer (16)","tags":["Bash","Python"]},{"company":"Nokia","job_title":"Software Test Engineer","location":"Multiple locations offer (16)","tags":["Python","Bash"]},{"company":"Nokia","job_title":"Test Automation Engineer","location":"Multiple locations offer (16)","tags":["Bash","Python","Perl","TTCN"]},{"company":"Nokia","job_title":"C Embedded Engineer","location":"Multiple locations offer (16)","tags":["Jira","Perl","Bash","Python"]},{"company":"Nokia","job_title":"Developer, High Performance C++","location":"Multiple locations offer (16)","tags":["C++","MATLAB"]},{"company":"Nokia","job_title":"C++ Working Student","location":"Multiple locations offer (16)","tags":["C++"]},{"company":"Nokia","job_title":"C++ Developer","location":"Multiple locations offer (16)","tags":["C++","JIRA","Git","GCC","Clang"]},{"company":"Nokia","job_title":"C/C++ Embedded Developer","location":"Multiple locations offer (16)","tags":["C","C++","Python","Bash","Git","MATLAB"]},{"company":"QUERIS SP. Z O.O.","job_title":"Analityk System\xf3w Produkcyjnych - Maufacturing Systems Analyst","location":"Piekary Śląskie (Polska)","tags":[]},{"company":"Dynatrace Sp. z o.o.","job_title":"Linux Desktop Engineer","location":"Multiple locations offer (16)","tags":["Active Directory","Intune","MAM","Puppet","MDM","Ansible","Microsoft 365"]},{"company":"Lufthansa Systems","job_title":"Team Leader","location":"Gdańsk (Poland)","tags":[]},{"company":"Boldare","job_title":"React Native Developer","location":"Multiple locations offer (4)","tags":["React Native","TypeScript","CSS","Webpack","Browserify","Git"]},{"company":"Boldare","job_title":"Cloud Engineer","location":"Multiple locations offer (4)","tags":["AWS","GCP","Azure","Python","Bash","Terraform","CloudFormation","Ansible","GitHub","GitLab","BitBucket","Git","Docker","Kubernetes","Rancher","EKS","GitHub Actions","BitBucket Pipelines"]},{"company":"Boldare","job_title":"Angular Developer","location":"Multiple locations offer (4)","tags":["TypeScript","CSS","webpack","Git","Browserify"]},{"company":"Etteplan Poland Sp. z o.o.","job_title":"Analityk Biznesowy IT","location":"Oferta w wielu lokalizacjach (4)","tags":[]},{"company":"Etteplan Poland Sp. z o.o.","job_title":"Embedded Software Design Engineer C/C++","location":"Oferta w wielu lokalizacjach (4)","tags":["C","C++","Agile","Scrum","Python","Yocto","RTOS","Embedded Linux","QT"]},{"company":"Etteplan Poland Sp. z o.o.","job_title":"Documentation Engineer","location":"Ł\xf3dź (Poland)","tags":[]},{"company":"Etteplan Poland Sp. z o.o.","job_title":"Hardware Verification Engineer","location":"Wrocław (Poland)","tags":[]},{"company":"ASTEK Polska","job_title":"Manual Test Engineer","location":"Wrocław (Polska)","tags":["SQL","REST API","Agile"]},{"company":"Brown Brothers Harriman","job_title":"Test Automation Engineer","location":"Krak\xf3w (Poland)","tags":[]},{"company":"Grupa Pracuj","job_title":"Product Designer (Specjalista/Specjalistka)","location":"Warszawa (Polska)","tags":["Figma"]},{"company":"Samsung R&D Institute Poland","job_title":"Internship - Python Test Automation Intern","location":"Warszawa (Poland)","tags":[]},{"company":"Spyrosoft S.A. ","job_title":"Senior Fullstack Developer","location":"Multiple locations offer (16)","tags":["JavaScript","React.js","Node.js","AWS"]},{"company":"Samsung R&D Institute Poland","job_title":"Angular Frontend Developer in Research and Development Center","location":"Warszawa (Poland)","tags":["Angular","TypeScript","JavaScript","NodeJS"]},{"company":"ARGENTA","job_title":"Specjalista ds. IT","location":"Poznań (Polska)","tags":["SQL","Windows Server","C#","PowerShell"]},{"company":"ARGENTA","job_title":"Młodszy Specjalista ds. IT","location":"Poznań (Polska)","tags":["SQL","Windows Server"]},{"company":"Samsung R&D Institute Poland","job_title":"DevOps Engineer for Cloud Services","location":"Warszawa (Poland)","tags":["AWS","Terraform","Concourse","GitHub Actions","Jenkins","SonarQube","Containers (Docker, Kubernetes)"]},{"company":"Samsung R&D Institute Poland","job_title":"Junior Mobile Telecommunication Engineer","location":"Warszawa (Poland)","tags":[]},{"company":"Asseco Poland S.A.","job_title":"Analityk Biznesowo-Systemowy","location":"Oferta w wielu lokalizacjach (14)","tags":[]},{"company":"Britenet Sp. z o.o.","job_title":"Junior Salesforce Developer - program szkoleniowy","location":"Oferta w wielu lokalizacjach (3)","tags":["Java","C#","C++","SQL","JavaScript","CSS","HTML","RWD"]},{"company":"ERGO Technology & Services S.A.","job_title":"System Analyst","location":"Multiple locations offer (2)","tags":["BPMN","UML"]},{"company":"CD PROJEKT S.A.","job_title":"Front-End Developer with React (DevOps)","location":"Warszawa (Poland)","tags":["HTML","CSS","JavaScript"]},{"company":"CD PROJEKT S.A.","job_title":"Front-End Developer with React (TechArt)","location":"Warszawa (Poland)","tags":["ReactJS","TypeScript","React","HTML5","JS/ES6","CSS3","rest","Git","SCSS"]},{"company":"CD PROJEKT S.A.","job_title":"Backend Software Engineer","location":"Warszawa (Poland)","tags":["Java","Spring Boot","Quarkus","SQL","Maven","Gradle","Git"]},{"company":"Symfonia sp. z o.o.","job_title":"Software Development Manager","location":"Oferta w wielu lokalizacjach (16)","tags":["C#",".NET","AWS","Kubernetes","Symfony","Vue.js"]},{"company":"Symfonia sp. z o.o.","job_title":"Analityk Biznesowy","location":"Warszawa (Polska)","tags":[]},{"company":"CD PROJEKT S.A.","job_title":"Frontend Developer","location":"Warszawa (Poland)","tags":["TypeScript","React"]},{"company":"CD PROJEKT S.A.","job_title":"Fullstack Web Developer","location":"Warszawa (Poland)","tags":["PHP","MySQL","Symfony","TypeScript","react"]},{"company":"Nokia","job_title":"Full-Stack Developer","location":"Multiple locations offer (16)","tags":["Python","Django","Angular","Vue.js","PostgreSQL","Kafka","Redis","Elasticsearch","Docker","Ansible","Grafana","CentOS","Ubuntu","Git","GitLab","Jira"]},{"company":"ITECHART GROUP sp. z o.o.","job_title":"Middle Data Engineer","location":"Wrocław (Poland)","tags":["Spark","Kafka","SQL","Python","Java","Scala","Golang","AWS","GCP","Azure","ETL","Docker","Kubernetes"]},{"company":"ITECHART GROUP sp. z o.o.","job_title":"Middle QA Engineer","location":"Warszawa (Poland)","tags":["Agile","SQL"]},{"company":"ITECHART GROUP sp. z o.o.","job_title":"Senior Front-end Developer","location":"Wrocław (Poland)","tags":["HTML","CSS","React.js","Angular","Vue.js","Node.js"]},{"company":"ITECHART GROUP sp. z o.o.","job_title":"Senior Devops Engineer","location":"Ł\xf3dź (Poland)","tags":["DevOps","AWS","Google Cloud Platform","Docker","Ansible","Jenkins","Terraform","CI / CD","Kubernetes","Python","Agile"]},{"company":"ITECHART GROUP sp. z o.o.","job_title":"Senior QA Automation Engineer","location":"Warszawa (Poland)","tags":["C#","JavaScript","Java","Python"]},{"company":"ITECHART GROUP sp. z o.o.","job_title":"Middle Front-end Developer","location":"Ł\xf3dź (Poland)","tags":["HTML","CSS","Agile","JavaScript","React.js","Angular","Vue.js"]},{"company":"ITECHART GROUP sp. z o.o.","job_title":"Middle iOS Developer","location":"Krak\xf3w (Poland)","tags":["Swift","RxSwift","MVVM","CI/CD"]},{"company":"ITECHART GROUP sp. z o.o.","job_title":"Middle Node.js Developer","location":"Poznań (Poland)","tags":["MySQL","PostgreSQL","Node.js","Express","JavaScript","JWT"]},{"company":"ITECHART GROUP sp. z o.o.","job_title":"Senior Java Developer","location":"Krak\xf3w (Poland)","tags":["Java"]},{"company":"ITECHART GROUP sp. z o.o.","job_title":"Senior Flutter Developer","location":"Ł\xf3dź (Poland)","tags":["Android/iOS/React Native","Dart/Flutter","OOP","Git","Gradle","Pods","Pub","Redux","BLoC"]},{"company":"ITECHART GROUP sp. z o.o.","job_title":"Middle .NET Developer","location":"Wrocław (Poland)","tags":[".NET",".NET, ASP.NET / ASP.NET MVC","MS SQL Server","JavaScript"]},{"company":"ITECHART GROUP sp. z o.o.","job_title":"Middle QA Automation Engineer","location":"Warszawa (Poland)","tags":["C#","JavaScript","Java","Python"]},{"company":"ITECHART GROUP sp. z o.o.","job_title":"Middle Java Developer","location":"Krak\xf3w (Polska)","tags":["Java","Spring","React.js","Vue.js"]},{"company":"ITECHART GROUP sp. z o.o.","job_title":"Senior React Native Developer","location":"Poznań (Poland)","tags":["React","Redux","React Native","iOS/Android"]},{"company":"LUX MED Sp. z o.o.","job_title":"Programista .NET","location":"Warszawa (Polska)","tags":[".NET","C#","HTML","CSS","Git","ASP.NET Core","REST","JavaScript/TypeScript",".NET Core","SQL Server"]},{"company":"BMS sp. z o.o.","job_title":"Młodszy Programista Java","location":"Oferta w wielu lokalizacjach (16)","tags":["Java","Spring Framework","Angular"]},{"company":"CD PROJEKT S.A.","job_title":"Senior ERP System Analyst","location":"Warszawa (Poland)","tags":[]},{"company":"CD PROJEKT S.A.","job_title":"IT Online Manager","location":"Warszawa (Poland)","tags":["Kubernetes","REST","GitLab","Docker"]},{"company":"CD PROJEKT S.A.","job_title":"Software Engineer (DevOps)","location":"Warszawa (Poland)","tags":["C#",".NET","ASP.NET","Entity Framework"]},{"company":"Symfonia sp. z o.o.","job_title":"Senior .NET Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["C#",".NET","WPF+MVVM","MS SQL","Entity Framework","LINQ","DevExpress","Azure DevOps","C++"]},{"company":"Elemy","job_title":"Business Operations Manager","location":"Multiple locations offer (16)","tags":["SQL"]},{"company":"Elemy","job_title":"Staff Software Engineer - Mobile","location":"Multiple locations offer (16)","tags":["JavaScript","TypeScript","React Native"]},{"company":"Elemy","job_title":"Senior Software Engineer (Backend)","location":"Multiple locations offer (16)","tags":["JavaScript","C"]},{"company":"Elemy","job_title":"Senior Software Engineer (DevOps)","location":"Multiple locations offer (16)","tags":["JavaScript","C","C++","Scala","Python","Go"]},{"company":"Elemy","job_title":"Senior Software Engineer (Frontend)","location":"Multiple locations offer (16)","tags":["JavaScript","HTML","CSS","Angular","React Native"]},{"company":"ASTEK Polska","job_title":"Professional / Senior DevOps","location":"Warszawa (Poland)","tags":["Kubernetes","CI/CD","GitLab or Jenkins","Git","Bash","Python"]},{"company":"Nokia","job_title":"Technical Writer","location":"Multiple locations offer (16)","tags":["CSS","HTML"]},{"company":"GRUPA NEUCA","job_title":"Senior Salesforce Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["Salesforce","HTML","CSS","JavaScript","Jira","Git","TeamCity","Jenkins","Angular","Vue.js","React.js"]},{"company":"GRUPA NEUCA","job_title":"Programista .NET","location":"Oferta w wielu lokalizacjach (16)","tags":["C#",".NET Core","SQL","ASP.NET MVC","ASP.NET Web API","HTML","CSS","JavaScript"]},{"company":"GRUPA NEUCA","job_title":"Analityk DevOps","location":"Oferta w wielu lokalizacjach (16)","tags":[]},{"company":"GRUPA NEUCA","job_title":"PHP Frontend Developer","location":"Oferta w wielu lokalizacjach (16)","tags":["PHP","Laravel","Symfony","JavaScript","Angular","React.js","Svelte","Git"]},{"company":"DevsData LLC","job_title":"Backend Engineer with Java or Scala","location":"Multiple locations offer (15)","tags":["PostgreSQL","REST API","Scala","Docker","Akka","RabbitMQ","Apache Spark"]},{"company":"Spyrosoft S.A. ","job_title":"Requirements Engineer with German","location":"Multiple locations offer (16)","tags":[]},{"company":"Grupa Pracuj","job_title":"Salesforce Administrator/ Salesforce Administratorka (Senior)","location":"Warszawa (Polska)","tags":["Salesforce","Jira","Confluence"]},{"company":"Grupa Pracuj","job_title":"Salesforce Administrator/ Salesforce Administratorka","location":"Warszawa (Polska)","tags":["Salesforce","Jira","Confluence"]},{"company":"DevsData LLC","job_title":"Senior React Developer","location":"Multiple locations offer (16)","tags":["React.js","JavaScript"]},{"company":"DevsData LLC","job_title":"Software Engineer (Python)","location":"Multiple locations offer (16)","tags":["AWS","Python","Kubernetes","Docker","Prometheus","Grafana"]},{"company":"DevsData LLC","job_title":"Mid/Senior ReactJS Developer","location":"Multiple locations offer (16)","tags":["React.js","TypeScript","PHP","Node.js"]},{"company":"DevsData LLC","job_title":"Mid/Senior NodeJS Developer","location":"Multiple locations offer (16)","tags":["TypeScript","JavaScript","React.js","webpack","PHP","Node.js","PostgreSQL","Docker"]},{"company":"DevsData LLC","job_title":"Junior DevOps Engineer","location":"Multiple locations offer (16)","tags":["Python","C#","C++"]},{"company":"Samsung R&D Institute Poland","job_title":"Java Developer in Voice Intelligence Research Team","location":"Warszawa (Poland)","tags":["Java","Android","Kotlin","Python"]},{"company":"PSI Polska","job_title":"QA Test Lead","location":"Poznań (Polska)","tags":["ISTQB"]},{"company":"Nokia","job_title":"Specification Engineer","location":"Multiple locations offer (16)","tags":["C","C++"]},{"company":"Reply Polska Sp. z o.o.","job_title":"Senior Node.JS Developer (IOT)","location":"Katowice (Poland)","tags":["JavaScript","SQL","noSQL","TypeScript","Node.js","NestJS","Scrum","Kanban","Atlassian Jira","Confluence","Git","Slack","AWS","Azure","Google Cloud Platform","MQTT","AMQP","Kafka","Websocket"]},{"company":"Samsung R&D Institute Poland","job_title":"AI Camera Pipeline Developer in Artificial Intelligence Team","location":"Warszawa (Poland)","tags":["C","C++","Python","Platforms: Android, Linux","Modules: Camera Pipeline, Neural Processing Unit"]},{"company":"Nokia","job_title":"Linux Scripting Engineer","location":"Multiple locations offer (16)","tags":["Linux","Git"]},{"company":"ASTEK Polska","job_title":"Data Base Administrator","location":"Warszawa (Poland)","tags":["MySQL","SQL","Linux"]},{"company":"ASTEK Polska","job_title":"C/C++ Developer","location":"Wrocław (Polska)","tags":["C","C++","Linux","Python","Bash"]},{"company":"Samsung R&D Institute Poland","job_title":"Samsung Health SDK Advocate with Java","location":"Warszawa (Poland)","tags":["Android","Java"]},{"company":"Comarch ","job_title":"Programista Front-end (Angular)","location":"Oferta w wielu lokalizacjach (8)","tags":["Angular","UX","UI","HTML5","CSS3","LESS","SASS","JavaScript","TypeScript"]},{"company":"Symfonia sp. z o.o.","job_title":"Scrum Master","location":"Warszawa (Polska)","tags":["Microsoft Azure"]},{"company":"APART Sp. z o.o.","job_title":".NET Developer Full Stack","location":"Suchy Las (pow. poznański) (Polska)","tags":["C#","ASP.NET MVC","Visual Studio"]},{"company":"Brown Brothers Harriman","job_title":"Technical Support Analyst","location":"Krak\xf3w (Poland)","tags":["Oracle PL/SQL","Git","Jira","Agile"]}]');

},{}]},["1lGe4","7Jfkl"], "7Jfkl", "parcelRequire30ab")

//# sourceMappingURL=index.a521242b.js.map
