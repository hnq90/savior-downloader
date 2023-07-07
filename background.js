!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          n.d(
            r,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "./"),
    n((n.s = 266));
})([
  function (e, t, n) {
    "use strict";
    n.r(t),
      function (e) {
        n.d(t, "query", function () {
          return s;
        }),
          n.d(t, "queryAll", function () {
            return l;
          }),
          n.d(t, "findParent", function () {
            return c;
          }),
          n.d(t, "nearestParent", function () {
            return u;
          }),
          n.d(t, "getNodePropOrEmptyString", function () {
            return d;
          }),
          n.d(t, "stripTagsExcept", function () {
            return h;
          }),
          n.d(t, "toArray", function () {
            return p;
          }),
          n.d(t, "unique", function () {
            return f;
          }),
          n.d(t, "isMatches", function () {
            return m;
          }),
          n.d(t, "getYoutubeInfo", function () {
            return g;
          }),
          n.d(t, "getYoutubeDashMPDInfo", function () {
            return v;
          }),
          n.d(t, "send", function () {
            return b;
          }),
          n.d(t, "get", function () {
            return y;
          }),
          n.d(t, "_getSize", function () {
            return _;
          }),
          n.d(t, "getSize", function () {
            return w;
          }),
          n.d(t, "logDownloadError", function () {
            return E;
          }),
          n.d(t, "beautifyFileSize", function () {
            return T;
          }),
          n.d(t, "detectMediaTypeAndExt", function () {
            return C;
          }),
          n.d(t, "getMediaType", function () {
            return x;
          }),
          n.d(t, "getProp", function () {
            return L;
          }),
          n.d(t, "call", function () {
            return R;
          }),
          n.d(t, "defined", function () {
            return O;
          }),
          n.d(t, "debounce", function () {
            return A;
          }),
          n.d(t, "flatten", function () {
            return k;
          }),
          n.d(t, "generateId", function () {
            return P;
          }),
          n.d(t, "sendMessage", function () {
            return N;
          }),
          n.d(t, "isSpecialUrls", function () {
            return M;
          }),
          n.d(t, "getFilenameFromTitleOfDownload", function () {
            return U;
          }),
          n.d(t, "getVideoId", function () {
            return q;
          }),
          n.d(t, "isValidData", function () {
            return j;
          }),
          n.d(t, "getBestFitResolution", function () {
            return B;
          }),
          n.d(t, "createMP3Resources", function () {
            return H;
          }),
          n.d(t, "splitMediaByTitle", function () {
            return V;
          }),
          n.d(t, "i18n", function () {
            return F;
          }),
          n.d(t, "isSameMedia", function () {
            return $;
          }),
          n.d(t, "isTikTok", function () {
            return Y;
          }),
          n.d(t, "cleanSymbols", function () {
            return Q;
          }),
          n.d(t, "fetchWithTimeout", function () {
            return z;
          }),
          n.d(t, "sleep", function () {
            return W;
          }),
          n.d(t, "beDefinedOr", function () {
            return G;
          });
        var r = n(1),
          i = n(6),
          o = n(2),
          a = function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, o) {
              function a(e) {
                try {
                  l(r.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function s(e) {
                try {
                  l(r.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? i(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, s);
              }
              l((r = r.apply(e, t || [])).next());
            });
          };
        function s(e, t) {
          return (t = t || document).querySelector(e);
        }
        function l(e, t) {
          var n, r;
          return p(
            null !==
              (r =
                null === (n = (t = t || document).querySelectorAll) ||
                void 0 === n
                  ? void 0
                  : n.call(t, e)) && void 0 !== r
              ? r
              : []
          );
        }
        function c(e, t) {
          for (; null !== e && e.classList && !e.classList.contains(t); )
            e = e.parentNode;
          return e;
        }
        function u(e, t) {
          var n;
          const r =
            null === (n = document.body.parentNode) || void 0 === n
              ? void 0
              : n.parentNode;
          let i = e;
          for (; null != i && i != r && !i.matches(t); ) i = i.parentElement;
          return r == i ? null : i;
        }
        function d(e, t) {
          return (e && e[t]) || "";
        }
        function h(e) {
          return e.replace(/<(?!\/?(?:b|em))[^>]+>/g, "");
        }
        function p(e) {
          return Array.prototype.slice.call(e);
        }
        function f(e) {
          return Array.from(new Set(e));
        }
        function m(e, t) {
          let n, r, i;
          if (Array.isArray(e)) {
            for (n = 0; n < e.length; ++n) if (m(e[n], t)) return !0;
            return !1;
          }
          for (n = 0, r = (t = Array.isArray(t) ? t : [t]).length; n < r; ++n)
            if (
              ((i = t[n]),
              ("string" == typeof i && -1 !== e.indexOf(i)) ||
                (i instanceof RegExp && e.match(i)))
            )
              return !0;
          return !1;
        }
        function g(e) {
          return a(this, void 0, void 0, function* () {
            return new Promise((t) => {
              EE.emit("message.background.send", {
                type: "youtube_get_info",
                data: { method: "GET", url: e },
              }),
                EE.on("youtube_get_info_result", (n) => {
                  n.data.url === e && t(n.data);
                });
            });
          });
        }
        function v(e) {
          return a(this, void 0, void 0, function* () {
            return new Promise((t) => {
              EE.emit("message.background.send", {
                type: "youtube_get_mpd_info",
                data: { url: e, method: "GET" },
              }),
                EE.on("youtube_set_mpd_info", (e) => {
                  var n, r;
                  e &&
                    "resolve" ===
                      (null === (n = e.data) || void 0 === n
                        ? void 0
                        : n.success) &&
                    t(
                      null === (r = e.data) || void 0 === r
                        ? void 0
                        : r.response
                    );
                });
            });
          });
        }
        function b(t, n, r, i, o = !1) {
          if (
            e.IS_CONTENT_SCRIPT &&
            !(function (e) {
              return [
                /www\.facebook\.com\/video\/tahoe\/async\/\d+\/\?originalmediaid=\d.+&payloadtype=primary/,
                /vnecdn\.net/,
                /vnecdn\.net\/vnexpress\/video\/.+master.m3u8$/,
                /.smamuhh1metro/,
                /gpt[0-9]+\.phimmoi\.net/,
                /vtvgiaitri\.vn/,
                /hydra/,
                /www\.facebook\.com\/api\/graphql/,
                /www.facebook.com\/video\/tahoe\/async/,
                /www\.nhaccuatui\.com\/flash\/xml\?key3/,
                /content-aapm1\.uplynk\.com/,
                /master2-eu\.playerx\.stream/,
                /i\.instagram\.com\/api\/v1\/media/,
                /s\d+\.imacdn\.com/,
              ].some((t) => e.match(t));
            })(n)
          ) {
            const e = "background_request." + P();
            return (
              EE.emit("message.background.send", {
                type: "background_request",
                data: {
                  id: e,
                  method: t,
                  url: n,
                  params: r,
                  headers: i,
                  includeCredentials: o,
                },
              }),
              new Promise((t, n) => {
                EE.on("background_request_result", (r) => {
                  const i = r.data;
                  i.id === e &&
                    ("resolve" === i.success ? t(i.response) : n(i.response));
                });
              })
            );
          }
          let a = null;
          const s = new Headers();
          if ("object" == typeof i)
            for (const e in i)
              (location.href.includes("nhaccuatui.com/video/") &&
                "X-Savior-Replace-Cookie" == e) ||
                s.append(e, i[e]);
          "object" == typeof r &&
            ((a = Object.keys(r)
              .map((e) => e + "=" + r[e])
              .join("&")),
            location.host.includes("facebook") &&
              (a = Object.keys(r)
                .map((e) => `${e}=${encodeURIComponent(r[e])}`)
                .join("&"))),
            "POST" === t &&
              s.append("Content-type", "application/x-www-form-urlencoded");
          const l = {
            method: t,
            headers: s,
            cache: "reload",
            body: a || void 0,
          };
          return (
            o && (l.credentials = "include"), fetch(n, l).then((e) => e.text())
          );
        }
        function y(e, t) {
          return b("GET", e, {}, t);
        }
        function _(e) {
          let t;
          const n = new XMLHttpRequest();
          return (
            (e = (function (e, t = "http") {
              if ("//" === e.slice(0, 2)) return t + ":" + e;
              return e;
            })(e)),
            new Promise((r, i) => {
              function o(e) {
                e ? r(e) : i(e), n.abort(), clearTimeout(t), (t = void 0);
              }
              n.open("GET", e),
                (n.onreadystatechange = function () {
                  if (this.readyState < 2) return;
                  let e = null;
                  try {
                    (e = +(this.getResponseHeader("Content-Length") || "")),
                      Number.isNaN(e) && (e = null);
                  } catch (e) {}
                  (null === e && 200 !== this.status) ||
                    (200 !== this.status && (e = null), o(e));
                }),
                n.send(null),
                (t = setTimeout(o, 1e4));
            })
          );
        }
        function w(e) {
          return new Promise((t) => {
            const n = P(),
              r = e + "_size";
            function i(i, o) {
              i == n &&
                (o
                  ? t(o)
                  : _(e)
                      .then((e) => {
                        t(e), EE.emit("media-provider.cache.put", P(), r, e);
                      })
                      .catch(() => {
                        E({
                          url: JSON.stringify(e),
                          referrer:
                            document.referrer ||
                            location.host ||
                            JSON.stringify(e),
                          error:
                            "Error: Cannot get media size or media url is wrong",
                        }),
                          t(null),
                          EE.emit("media-provider.cache.put", P(), r, null);
                      }));
            }
            EE.emit("media-provider.cache.get", n, r),
              EE.on("media-provider.cache.hit", i),
              EE.on("media-provider.cache.miss", i);
          });
        }
        function E(e) {
          o.a.log("recordCustomData", [
            { key: "savior_download_error", value: JSON.stringify(e) },
          ]);
        }
        function T(e, t = !1) {
          const n = ["B", "KB", "MB", "GB", "TB", "PB"],
            r = -1 !== window.navigator.appVersion.indexOf("Win") ? 1024 : 1e3;
          if (!e) return "";
          const i = r;
          let o;
          for (o = 0; o < n.length && e >= i; ++o) e /= i;
          const a = n[o];
          let s = Math.round(10 * e) / 10;
          return (
            t && a && "kb" === a.toLowerCase() && (s = s.toFixed(0)), s + n[o]
          );
        }
        function C(e, t = "") {
          if (
            -1 !==
            [
              "application/x-mpegurl",
              "application/vnd.apple.mpegurl",
              "audio/x-mpegurl",
              "audio/mpegurl",
            ].indexOf(t)
          )
            return (e.type = "video"), (e.ext = "m3u8"), e;
          const n = x(t, e.exts || []);
          if (n && r.a[n]) {
            e.type = n;
            const r = t.match(/mp4|webm/g);
            (e.exts && 0 !== e.exts.length) || !r || !r[0] || (e.ext = r[0]);
          }
          return M(e.url) && ((e.ext = "m3u8"), (e.exts = ["m3u8"])), e;
        }
        function x(e, t) {
          let n;
          for (const i in r.a) {
            if (((n = r.a[i]), e && e.match(n.rgxp))) return i;
            if (
              (Array.isArray(t) && S(t, n.extensions)) ||
              -1 !== n.extensions.indexOf(t)
            )
              return i;
          }
          return null;
        }
        function S(e, t) {
          const n = e.concat(t),
            r = {};
          for (let e = 0; e < n.length; ++e) {
            const t = n[e];
            if (r[t]) return t;
            r[t] = !0;
          }
          return null;
        }
        function L(e, t) {
          return (function e(t, n) {
            const r = n.shift();
            return !r ||
              ("object" != typeof t && "function" != typeof t) ||
              null === t
              ? null
              : 0 === n.length
              ? t[r]
              : e(t[r], n);
          })(e, t.split("."));
        }
        function R(e, t) {
          if (!e || e.length <= 0) return;
          const n = [].slice.call(arguments, 2);
          for (let r = 0; r < e.length; r++) e[r].apply(t, n);
        }
        function O(e) {
          return void 0 !== e;
        }
        function A(e, t, n) {
          let r,
            i = !1;
          function o() {
            if (i) return;
            const o = this,
              a = arguments;
            function s() {
              n || e.apply(o, a), (r = void 0);
            }
            r ? clearTimeout(r) : n && e.apply(o, a),
              (r = setTimeout(s, t || 100));
          }
          return (
            (o.destroy = () => {
              clearTimeout(r), (i = !0);
            }),
            o
          );
        }
        function k(e, t) {
          const n = Object.prototype.toString,
            r = [],
            i = (t && e) || e.slice();
          let o;
          if (!e.length) return r;
          o = i.pop();
          do {
            "[object Array]" === n.call(o)
              ? i.push.apply(
                  i,
                  o.filter((e) => !!e)
                )
              : r.push(o);
          } while (i.length && void 0 !== (o = i.pop()));
          return r.reverse(), r;
        }
        let I,
          D = 0;
        function P() {
          return D++;
        }
        function N(e) {
          return new Promise((t) => {
            const n = e.type + "_" + P();
            (e.id = n),
              EE.emit("message.background.send", e),
              EE.on("utils.send_message_result", (e) => {
                e.id === n && t(e.data);
              });
          });
        }
        function M(e) {
          if (!e || "object" == typeof e) return;
          return [
            /(http|https):\/\/[\s\S]*(streamasia\.|\.bongngo\.|\.manga123\.net)[\s\S]*\/playlist\/|stream\.vltv\.xyz\/m3u8\/|apix\.gooqlevideo\.com\/player|khophim18\.net\/m3u8|iamplayer\.xyz\/stream.*\/Manifest/g,
            /hls\.mediacdn\.vn\/.+\/\S+\.mp4\.json/gi,
            /hls\.(tuoitre)\.vn\/\1\/\S+\.mp4\.json/gi,
            /vdrm\.vtvgiaitri\.vn\/stream/,
            /api(-v[0-9]*)*\.soundcloud\.com\/media\/soundcloud:tracks:[0-9]+/gi,
            /https:\/\/zingmp3\.vn\/api\/v2\/.+\?id=/,
            /^\/sequence\/(play|full)\/([a-z0-9]+)/i,
            /\/video\/(\d+)\/config(\?|$)/i,
            /key[0-9]=[0-9a-f]{32}/i,
            /^\/(api|get)_video_info/,
            /\.mp4.+?\.ts\?nimblesessionid=/,
            /meo\.saku\.net\/player/,
            /get\.gooqlevideo\.com\/player/,
            /streamsb\.biz\/playlist\/json\/[a-z0-9]+\/[a-z0-9]+/i,
            /discordapp\.com\/attachments\/\d+\/\d+\/[a-z0-9_\- ]+\.mp4/,
            /cam\-hls.*\.cuoiia\.top\/cdn/,
            /vkvd\d*\.mycdn\.me/,
            /v\.douyu\.com\/api\/stream\/getStreamUrl/,
            /api\-iframe\-post\.playsex3x\.xyz\/api\/playiframe/,
            /ssplay\.net\/[a-z0-9]{2,4}\/(\d+\/(\d+)\/[a-z0-9]+\/[a-z0-9]+|[a-z\d]+\/[a-z\d]+)/i,
          ].some((t) => t.test(e));
        }
        function U(e) {
          let t = e.title || e.filename || document.title;
          const n = "." + e.ext;
          return (
            (t =
              (null == t
                ? void 0
                : t
                    .replace(/\s+/g, " ")
                    .replace(/[/\\:*?"<>|\u200c\u200d]/g, "-")) + n),
            (t = t.match(/[*~]/gi) ? "_" + t.replace(/[*~]/gi, ".") : t),
            t
          );
        }
        function q(e) {
          if (!e) return;
          const t = [
            /^https?:\/\/(?:www\.)?youtube(?:-nocookie)?(?:\.googleapis)?\.com\/(?:(?:v)|(?:embed)|(?:e))\/(?!videoseries)([^&?]+)/i,
            /https?:\/\/(?:www\.)?youtu\.be\/([^#&?]+)/i,
            /https?:\/\/(?:www\.)?youtube\.com\/.*(?:\?|&)v=([^#&?]+)/i,
            /https:\/\/(?:www\.)?youtube\.com\/shorts\/(.*)$/,
          ];
          let n;
          for (let r = 0; r < t.length; ++r)
            if ((n = e.match(t[r]))) return n[1];
          return null;
        }
        function j(e) {
          if (i.a.M3U8 && Object(r.g)(e.ext)) return !0;
          const t = e.type;
          if (!t) return !1;
          const n = r.a[t],
            o = n && n.extensions;
          return n && -1 !== o.indexOf(e.ext);
        }
        function B(e) {
          let t = 0;
          const n = r.d.length;
          for (; t < n && r.d[t] >= e; ) t++;
          return r.d[t - 1];
        }
        function H(e) {
          const t = e.filter(function (e) {
            return (
              "video" === e.type &&
              !(!i.a.DOWNLOAD.M3U8_AUDIO && ["m3u", "m3u8"].includes(e.ext)) &&
              (("object" == typeof e.url && e.url.audioUrl) ||
                "string" == typeof e.url)
            );
          });
          const n = [
              {
                bitrate: "128kbps",
                name: "Medium",
                qualityValue: 100,
                itag: "140",
              },
              {
                bitrate: "192kbps",
                name: "High",
                qualityValue: 200,
                itag: "22",
              },
              {
                bitrate: "192kbps",
                name: "High",
                qualityValue: 200,
                itag: "37",
              },
              {
                bitrate: "192kbps",
                name: "High",
                qualityValue: 200,
                itag: "38",
              },
              {
                bitrate: "192kbps",
                name: "High",
                qualityValue: 200,
                itag: "45",
              },
              {
                bitrate: "192kbps",
                name: "High",
                qualityValue: 200,
                itag: "46",
              },
              {
                bitrate: "192kbps",
                name: "High",
                qualityValue: 200,
                itag: "84",
              },
              {
                bitrate: "192kbps",
                name: "High",
                qualityValue: 200,
                itag: "85",
              },
              {
                bitrate: "192kbps",
                name: "High",
                qualityValue: 200,
                itag: "101",
              },
              {
                bitrate: "192kbps",
                name: "High",
                qualityValue: 200,
                itag: "102",
              },
              {
                bitrate: "192kbps",
                name: "High",
                qualityValue: 200,
                itag: "172",
              },
            ],
            r = "www.youtube.com" === location.host ? n : [n[0]];
          let o = [];
          if (!t.length) return o;
          return (
            V(t).forEach(function ({ media: e }) {
              let t = r.map(function (t) {
                const r = (function (e, t) {
                    t = t.toLowerCase();
                    let n = [...e];
                    const r = e.filter(function (e) {
                      return "mp4" === e.ext;
                    });
                    r.length && (n = r);
                    const i = n.filter(function (e) {
                        return (
                          e.quality && "full hd" === e.quality.toLowerCase()
                        );
                      }),
                      o = n.filter(function (e) {
                        return e.quality && "hd" === e.quality.toLowerCase();
                      }),
                      a = n.filter(function (e) {
                        return (
                          e.quality &&
                          ["normal", "medium", "standard"].includes(
                            e.quality.toLowerCase()
                          )
                        );
                      });
                    switch (t) {
                      case "high":
                        i.length
                          ? (n = i)
                          : o.length
                          ? (n = o)
                          : a.length && (n = a);
                        break;
                      case "medium":
                      default:
                        a.length
                          ? (n = a)
                          : o.length
                          ? (n = o)
                          : i.length && (n = i);
                    }
                    const s = n.filter(function (e) {
                      return "object" == typeof e.url && e.url.audioUrl;
                    });
                    s.length && (n = s);
                    return n[0];
                  })(e, t.name),
                  i = Object.assign({}, r);
                if (
                  ((i.url = i.url.audioUrl || i.url),
                  ["m3u8", "m3u"].includes(i.ext) && (i._hls = !0),
                  (i.ext = "mp3"),
                  (i.soundOnly = !0),
                  (i.quality = t.name),
                  (i.resolution = t.bitrate),
                  (i.type = "audio"),
                  (i.sortValues = { qualityValue: t.qualityValue }),
                  "www.youtube.com" === location.host)
                ) {
                  const e = i.url.audioUrl || i.url,
                    t = new URLSearchParams(e).get("itag"),
                    r = n.find((e) => e.itag === t) || n[0];
                  i.resolution !== r.bitrate &&
                    i.quality !== r.name &&
                    (i.resolution = "0kbps");
                }
                return i;
              });
              (t = t.reduce(
                (e, t) => (
                  e.some(
                    (e) => parseInt(e.resolution) >= parseInt(t.resolution)
                  ) || (e = []).push(t),
                  e
                ),
                []
              )),
                (o = o.concat(t));
            }),
            o
          );
        }
        function V(e) {
          const t = [];
          return (
            e.forEach((e) => {
              e.title || (e.title = e.filename);
              const n = e.title || e.filename,
                r = t.find((e) => e.title === n || e.filename === n);
              r ? r.media.push(e) : t.push({ media: [e], title: n });
            }),
            t
          );
        }
        try {
          I = chrome.i18n.getMessage || (() => "");
        } catch (e) {
          I = () => "";
        }
        const F = I,
          $ = (e, t) =>
            e.type === t.type &&
            ("string" != typeof e.url && "string" != typeof t.url
              ? e.url.videoUrl == t.url.videoUrl
              : e.url === t.url),
          Y = (t) => {
            var n;
            return (t =
              null !== (n = null != t ? t : e.tab_url) && void 0 !== n
                ? n
                : window.location.href).match(/^https:\/\/(www\.)?tiktok\.com/);
          },
          Q = (e) =>
            e
              ? e
                  .replaceAll(
                    /[^aAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlLmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ0-9\s\,\.\<\>\/\?\;\:\'\"\!\@\#\$\%\^\&\*\(\)\-\_\+\=\\\|]/g,
                    ""
                  )
                  .replaceAll(/\s+/g, " ")
              : e,
          z = (e, t, n) => {
            const { timeout: r } = t;
            return (
              delete t.timeout,
              r
                ? ((n = null != n ? n : new AbortController()),
                  setTimeout(() => n.abort(), r),
                  fetch(e, Object.assign({ signal: n.signal }, t)))
                : fetch(e, t)
            );
          },
          W = (e) => new Promise((t) => setTimeout(t, e));
        function G(e) {
          return (t = e) => t;
        }
      }.call(this, n(9));
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "e", function () {
        return i;
      }),
      n.d(t, "f", function () {
        return o;
      }),
      n.d(t, "g", function () {
        return a;
      }),
      n.d(t, "d", function () {
        return s;
      }),
      n.d(t, "b", function () {
        return l;
      }),
      n.d(t, "c", function () {
        return c;
      });
    const r = {
        audio: {
          title: "Audio",
          icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M3.34701 16.1464C3.91819 16.7176 4.60481 17.0032 5.40688 17.0032C6.20895 17.0032 6.89558 16.7176 7.46676 16.1464C8.03792 15.5752 8.3235 14.8886 8.3235 14.0865V5.72114H16.2603V11.7404C16.0263 11.5502 15.7699 11.4076 15.491 11.3125C15.2122 11.2174 14.913 11.1699 14.5936 11.1699C13.7915 11.1699 13.1049 11.4555 12.5337 12.0267C11.9625 12.5978 11.6769 13.2845 11.6769 14.0865C11.6769 14.8886 11.9625 15.5752 12.5337 16.1464C13.1049 16.7176 13.7915 17.0032 14.5936 17.0032C15.3957 17.0032 16.0823 16.7176 16.6535 16.1464C17.2246 15.5752 17.5102 14.8886 17.5102 14.0865V5.72114V2.99683H16.6768H16.2603H7.07355V11.7404C6.83957 11.5502 6.58316 11.4076 6.30432 11.3125C6.02547 11.2174 5.72632 11.1699 5.40688 11.1699C4.60481 11.1699 3.91819 11.4555 3.34701 12.0267C2.77582 12.5978 2.49023 13.2845 2.49023 14.0865C2.49023 14.8886 2.77582 15.5752 3.34701 16.1464Z" fill="currentColor"/>\n</svg>\n',
          rgxp: /audio/i,
          extensions: [
            "mp3",
            "flac",
            "m4a",
            "wma",
            "ogg",
            "wav",
            "aif",
            "mid",
            "opus",
          ],
          extensions_weight: [
            "mp3",
            "flac",
            "m4a",
            "wma",
            "ogg",
            "wav",
            "aif",
            "mid",
            "opus",
          ],
          ctype2extension: {
            midi: "mid",
            mp4: "m4a",
            m4a: "m4a",
            mpeg: "mp3",
            mpeg3: "mp3",
            wav: "wav",
            aiff: "aif",
            opus: "opus",
          },
        },
        video: {
          title: "Video",
          icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M3.79009 16.25C3.36914 16.25 3.01284 16.1041 2.72117 15.8125C2.42952 15.5208 2.28369 15.1645 2.28369 14.7435V5.25642C2.28369 4.83547 2.42952 4.47917 2.72117 4.1875C3.01284 3.89583 3.36914 3.75 3.79009 3.75H13.2772C13.6982 3.75 14.0545 3.89583 14.3461 4.1875C14.6378 4.47917 14.7836 4.83547 14.7836 5.25642V9.07052L17.7163 6.13785V13.8621L14.7836 10.9294V14.7435C14.7836 15.1645 14.6378 15.5208 14.3461 15.8125C14.0545 16.1041 13.6982 16.25 13.2772 16.25H3.79009ZM3.79009 15H13.2772C13.352 15 13.4135 14.9759 13.4615 14.9279C13.5096 14.8798 13.5337 14.8183 13.5337 14.7435V5.25642C13.5337 5.18162 13.5096 5.12019 13.4615 5.0721C13.4135 5.02402 13.352 4.99998 13.2772 4.99998H3.79009C3.7153 4.99998 3.65386 5.02402 3.60577 5.0721C3.55769 5.12019 3.53365 5.18162 3.53365 5.25642V14.7435C3.53365 14.8183 3.55769 14.8798 3.60577 14.9279C3.65386 14.9759 3.7153 15 3.79009 15Z" fill="currentColor"/>\n</svg>\n',
          rgxp: /video/i,
          extensions: [
            "mp4",
            "mpeg4",
            "mpg",
            "mpeg",
            "m4v",
            "avi",
            "divx",
            "mov",
            "wmv",
            "movie",
            "asf",
            "webm",
            "flv",
            "3gp",
            "m3u8",
            "m3u",
            "m4s",
            "ogv",
            "mpd",
          ],
          extensions_weight: [
            "mp4",
            "mpeg4",
            "mpg",
            "mpeg",
            "m4v",
            "avi",
            "divx",
            "mov",
            "wmv",
            "movie",
            "asf",
            "webm",
            "flv",
            "m3u8",
            "m3u",
            "3gp",
          ],
          ctype2extension: {
            mpeg: "mp4",
            mp4: "mp4",
            m4v: "mp4",
            "3gpp": "3gp",
            flv: "flv",
            quicktime: "mov",
            msvideo: "avi",
            "ms-wmv": "wmv",
            "ms-asf": "asf",
          },
        },
        no_watermark_video: {
          title: "No watermark video",
          icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21.53 7.15C21.378 7.06223 21.2055 7.01603 21.03 7.01603C20.8545 7.01603 20.682 7.06223 20.53 7.15L17 8.89C16.9715 8.11357 16.6429 7.37847 16.0834 6.83944C15.5238 6.3004 14.777 5.99948 14 6H5C4.20435 6 3.44129 6.31607 2.87868 6.87868C2.31607 7.44129 2 8.20435 2 9V15C2 15.7957 2.31607 16.5587 2.87868 17.1213C3.44129 17.6839 4.20435 18 5 18H14C14.777 18.0005 15.5238 17.6996 16.0834 17.1606C16.6429 16.6215 16.9715 15.8864 17 15.11L20.56 16.89C20.6963 16.9599 20.8468 16.9975 21 17C21.1872 17.0006 21.3709 16.9486 21.53 16.85C21.6741 16.7599 21.7929 16.6346 21.8751 16.4859C21.9574 16.3372 22.0003 16.1699 22 16V8C22.0003 7.83006 21.9574 7.66283 21.8751 7.51411C21.7929 7.36538 21.6741 7.24007 21.53 7.15ZM15 15C15 15.2652 14.8946 15.5196 14.7071 15.7071C14.5196 15.8946 14.2652 16 14 16H5C4.73478 16 4.48043 15.8946 4.29289 15.7071C4.10536 15.5196 4 15.2652 4 15V9C4 8.73478 4.10536 8.48043 4.29289 8.29289C4.48043 8.10536 4.73478 8 5 8H14C14.2652 8 14.5196 8.10536 14.7071 8.29289C14.8946 8.48043 15 8.73478 15 9V15ZM20 14.38L17 12.88V11.12L20 9.62V14.38Z" fill="currentColor"/></svg>',
          rgxp: /no watermark video/i,
          extensions: [
            "mp4",
            "mpeg4",
            "mpg",
            "mpeg",
            "m4v",
            "avi",
            "divx",
            "mov",
            "wmv",
            "movie",
            "asf",
            "webm",
            "flv",
            "3gp",
            "m3u8",
            "m3u",
            "m4s",
            "ogv",
            "mpd",
          ],
          extensions_weight: [
            "mp4",
            "mpeg4",
            "mpg",
            "mpeg",
            "m4v",
            "avi",
            "divx",
            "mov",
            "wmv",
            "movie",
            "asf",
            "webm",
            "flv",
            "m3u8",
            "m3u",
            "3gp",
          ],
          ctype2extension: {
            mpeg: "mp4",
            mp4: "mp4",
            m4v: "mp4",
            "3gpp": "3gp",
            flv: "flv",
            quicktime: "mov",
            msvideo: "avi",
            "ms-wmv": "wmv",
            "ms-asf": "asf",
          },
        },
        subtitles: {
          title: "Subtitles",
          icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M3.90869 13.6143V12.3643H11.8253V13.6143H3.90869ZM3.90869 10.2809V9.03096H16.8253V10.2809H3.90869ZM3.90869 6.94759V5.69763H16.8253V6.94759H3.90869Z" fill="currentColor"/>\n</svg>\n',
          rgxp: /subtitles/i,
          extensions: ["yt_srt"],
          extensions_weight: ["yt_srt"],
        },
      },
      i = {
        "4320p": { i18n_label: "quality_8k_uhd", label: "8K UHD", value: 1600 },
        "3072p": {
          i18n_label: "quality_4k_qfhd",
          label: "4K QFHD",
          value: 1400,
        },
        "2160p": { i18n_label: "quality_4k_uhd", label: "4K UHD", value: 1200 },
        "2048p": { i18n_label: "quality_qhd", label: "Quad HD", value: 1100 },
        "1440p": { i18n_label: "quality_qhd", label: "Quad HD", value: 1e3 },
        "1080p": { i18n_label: "quality_fhd", label: "Full HD", value: 800 },
        "720p": { i18n_label: "quality_hd", label: "HD", value: 600 },
        "540p": {
          i18n_label: "quality_standard",
          label: "Standard",
          value: 500,
        },
        "480p": {
          i18n_label: "quality_standard",
          label: "Standard",
          value: 500,
        },
        "360p": { i18n_label: "quality_medium", label: "Medium", value: 400 },
        "320p": { i18n_label: "quality_medium", label: "Medium", value: 400 },
        "270p": { i18n_label: "quality_small", label: "Small", value: 300 },
        "240p": { i18n_label: "quality_small", label: "Small", value: 200 },
        "144p": { i18n_label: "quality_mobile", label: "Mobile", value: 100 },
      },
      o = ["video", "audio", "subtitles"];
    function a(e) {
      return !!e && -1 !== ["m3u8", "m3u", "hls", "zip"].indexOf(e);
    }
    const s = [
        4320, 3072, 2160, 2048, 1440, 1080, 720, 540, 480, 360, 320, 270, 240,
        144,
      ],
      l = [
        /^(.+\.)?nixcdn\.com/im,
        /^(.+\.)?vcmedia\.vn/i,
        /^(.+\.)?kenhhd\.tv/i,
      ],
      c = [/coccoc\.com\/sitemap\.xml/i];
  },
  function (e, t, n) {
    "use strict";
    var r = n(6);
    class i {
      constructor() {
        (this.SOURCE_POPUP_PAGE = 0),
          (this.SOURCE_OPTIONS_PAGE = 10),
          (this.SOURCE_CONTENT_SCRIPT = 20),
          (this.SOURCE_BACKGROUND_PAGE = 30),
          (this.LEGACY_METRICS_NAME_MAP = {
            ButtonClicked: "TryItNowButtonClicked",
            CheckBoxClicked: "OneClickCheckbox",
          }),
          (this.PAGE_WELCOME_SCREEN = 0),
          (this.PAGE_DOWNLOADS_LIST = 1),
          (this.PAGE_ONE_CLICK_DOWNLOAD = 2),
          (this.PAGE_NO_MEDIA_FOUND = 3),
          (this.PAGE_OPTIONS = 4),
          (this.PAGE_CONTENT_SHOW_CONTROLS = 5),
          (this.PAGE_CONTENT_NO_MEDIA = 9),
          (this.DOWNLOAD_AUTO = 0),
          (this.DOWNLOAD_BUTTON = 1),
          (this.DOWNLOAD_ALL = 2),
          (this.DOWNLOAD_REQUEST_SIZE = 3),
          (this.DOWNLOAD_REQUEST_SIZE_FAILED = 4),
          (this.DOWNLOAD_SOUND_ONLY = 5),
          (this.DOWNLOAD_CANCELED = 7),
          (this.DOWNLOAD_SUBTITLES = 9),
          (this.BUTTON_MAIN = 0),
          (this.BUTTON_TRY_IT_NOW = 1),
          (this.BUTTON_SHOW_DOWNLOADS = 2),
          (this.BUTTON_HIDE_DOWNLOADS = 3),
          (this.BUTTON_DOWNLOAD_ALL = 4),
          (this.BUTTON_MORE_OPTIONS = 5),
          (this.BUTTON_CHECK_NONE = 6),
          (this.BUTTON_FAKE_QUALITY = 7),
          (this.BUTTON_DETACH = 8),
          (this.BUTTON_HIDE = 9),
          (this.CHECK_BOX_ENABLE_ONE_CLICK = 0),
          (this.CHECK_BOX_SHOW_ON_PAGE_BUTTONS = 2),
          (this.CHECK_BOX_PREFER_LAST_QUALITY = 4),
          (this.CHECK_BOX_DETACH_ENABLED = 6),
          (this.CHECK_BOX_DARK_THEM_ENABLED = 8),
          (this.PIP_DETACH_CLICK = 0),
          (this.PIP_RESTORE_CLICK = 1),
          (this.PIP_SITE_LINK_CLICK = 2),
          (this.PLAY_NOW_SHOWN = 0),
          (this.PLAY_NOW_WIDGET_CLICKED = 1),
          (this.PLAY_NOW_TOOLTIP_SHOWN = 2),
          (this.PLAY_NOW_TOOLTIP_CLOSED = 3),
          (this.PLAY_NOW_TOOLTIP_NOT_SHOW_AGAIN = 4),
          (this.PLAY_NOW_TOOLTIP_BOTTOM_SHOWN = 5),
          (this.PLAY_NOW_TOOLTIP_BOTTOM_CLOSED = 6),
          (this.PLAY_NOW_TOOLTIP_BOTTOM_NOT_SHOW_AGAIN = 7),
          (this.EXTENSION_MP4 = 1),
          (this.EXTENSION_MP3 = 2),
          (this.EXTENSION_WEBM = 3),
          (this.EXTENSION_3GP = 4),
          (this.EXTENSION_SRT = 5),
          (this.EXTENSION_OTHER = 6),
          (this.SEND_MOBILE_SHOW = 1),
          (this.SEND_MOBILE_CLICK = 2),
          (this.SEND_MOBILE_CLICK_CLOSE = 3),
          (this.SEND_MOBILE_CLICK_A = 4),
          (this.SEND_MOBILE_CLICK_G = 5),
          (this.SEND_MOBILE_CLICK_W = 6),
          (this.SEND_MOBILE_CLICK_AUDIO = 7),
          (this.SEND_MOBILE_ERROR = 9),
          (this.TURN_LIGHT_ON = 0),
          (this.TURN_LIGHT_OFF = 1),
          (this.ONBOARD_POPUP_SHOWN = 1),
          (this.ONBOARD_POPUP_SHOWN_SECOND = 1),
          (this.ONBOARD_POPUP_SHOWN_THIRD = 1),
          (this.ONBOARD_TRY_NOW_BTN_CLICK = 1),
          (this.CLOSE_ONBOARD_POPUP = 1),
          (this.TIKTOK_SHOW_POPUP = 0),
          (this.TIKTOK_SELECT_NO_WATERMARK_VIDEO = 1),
          (this.TIKTOK_SELECT_VIDEO = 2),
          (this.TIKTOK_SELECT_AUDIO = 3),
          (this.TIKTOK_DOWNLOAD_NO_WATERMARK_VIDEO = 4),
          (this.TIKTOK_DOWNLOAD_VIDEO = 5),
          (this.TIKTOK_DOWNLOAD_AUDIO = 6);
      }
      get source() {
        if (!chrome.action && !chrome.pageAction)
          return this.SOURCE_CONTENT_SCRIPT;
        switch (location.pathname) {
          case "/popup.html":
            return this.SOURCE_POPUP_PAGE;
          case "/options.html":
            return this.SOURCE_OPTIONS_PAGE;
          case "/background.js":
          case "/background.html":
            return this.SOURCE_BACKGROUND_PAGE;
          default:
            return null;
        }
      }
      _getFullName(e) {
        return "Savior." + (this.LEGACY_METRICS_NAME_MAP[e] || e);
      }
      _getTotalValue(e, t, n) {
        return 0 === e.indexOf("Refr") ||
          n ||
          "PageShown" === e ||
          "number" != typeof t
          ? t
          : t + this.source;
      }
      _doLog(e, t, n) {
        var r;
        const i = this._getFullName(t);
        if (
          !(
            parseInt(
              (null ===
                (r = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)) ||
              void 0 === r
                ? void 0
                : r[2]) || ""
            ) <= 50
          )
        )
          if (this.source === this.SOURCE_CONTENT_SCRIPT)
            EE.emit("message.background.send", {
              type: "metrics",
              method: "log",
              params: { name: t, value: n },
            });
          else if (chrome.metricsPrivate)
            switch (e) {
              case "recordSmallCount":
                chrome.metricsPrivate.recordValue(
                  {
                    metricName: i,
                    type: chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LINEAR,
                    min: 0,
                    max: 100,
                    buckets: 100,
                  },
                  n
                );
                break;
              case "recordValue":
                chrome.metricsPrivate.recordValue(
                  {
                    metricName: i,
                    type: chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LINEAR,
                    min: 0,
                    max: 1e3,
                    buckets: 1002,
                  },
                  n
                );
                break;
              case "recordCustomData":
                chrome.metricsPrivate.recordCustomData(n);
            }
          else if ("recordCustomData" === e) {
            if (n && 1 === n.length)
              return void console.info(
                "%c[Metrics] %crecordCustomData %c%s",
                "color:gray",
                "color:silver",
                "color: lightgreen",
                n[0].key,
                JSON.parse(n[0].value)
              );
            console.info("%c[Metrics]", "color:gray", "recordCustomData", n);
          } else console.info("%c[Metrics]", "color:gray", e, i, n);
      }
      static _getMethodByName(e) {
        switch (e) {
          case "Refr":
          case "RefrSE":
          case "RefrFE":
          case "RefrPin":
            return "recordValue";
          case "recordCustomData":
            return "recordCustomData";
          default:
            return "recordSmallCount";
        }
      }
      log(e, t, n) {
        try {
          const o = i._getMethodByName(e);
          if ("recordCustomData" === o && r.a.CUSTOM_METRICS_JSON)
            return void this._doLog(o, e, t);
          const a = this._getTotalValue(e, t, n);
          this._doLog(o, e, a);
        } catch (e) {
          console.error("Catched", e);
        }
      }
      logYtExtension(e) {
        switch (e.toLowerCase()) {
          case "mp4":
            this.log("YtExtension", this.EXTENSION_MP4);
            break;
          case "mp3":
            this.log("YtExtension", this.EXTENSION_MP3);
            break;
          case "webm":
            this.log("YtExtension", this.EXTENSION_WEBM);
            break;
          case "3gp":
            this.log("YtExtension", this.EXTENSION_3GP);
            break;
          case "srt":
            this.log("YtExtension", this.EXTENSION_SRT);
            break;
          default:
            this.log("YtExtension", this.EXTENSION_OTHER);
        }
      }
      logSendMobile(e) {
        this.log("SendMobile", e);
      }
      logFromContentScript(e, t) {
        this.log(e, t, !0);
      }
      logRequest(e) {
        const t = Object.keys(e).reduce(
          (t, n, r) => (t += `${r ? "&" : ""}${n}=${e[n]}`),
          "?"
        );
        navigator.sendBeacon("https://coccoc.com/log" + t);
      }
    }
    t.a = new i();
  },
  function (e, t, n) {
    "use strict";
    var r = n(5);
    const i = new (class {
      constructor() {
        (this._storage = chrome.storage.local),
          (this._handlerMap = new Map()),
          (this._options = {}),
          (this._default = {
            detach_enabled: !0,
            on_page_buttons: !0,
            min_stream_size: 30720,
            prefer_last_quality: !0,
            last_quality: void 0,
            hide_play_now_tooltip: !1,
            hide_play_now_tooltip_bottom: !1,
            instant_actions_tooltip_shown: !1,
            instant_actions_tooltip_shown_count: 0,
            instant_actions_button_download: !1,
            preferred_quality_level: r.a.DEFAULT_QUALITY_LEVEL,
            show_3gp_ext: !1,
            video_changed: !1,
          }),
          (this.loaded = !1);
        const e = this;
        chrome.storage.onChanged.addListener((t, n) => {
          var r;
          if ("local" === n) {
            for (const n in t) e._options[n] = t[n].newValue;
            for (const e in t)
              null === (r = this._handlerMap.get(e)) ||
                void 0 === r ||
                r.forEach((e) => e());
          }
        });
      }
      load() {
        const e = this;
        return new Promise((t) => {
          e._storage.get(null, (n) => {
            (e._options = n), (e.loaded = !0), t(n);
          });
        });
      }
      set(e, t) {
        const n = {};
        this.loaded &&
          ("string" == typeof e || ("number" == typeof e && void 0 !== t)) &&
          ((n[e] = t), (this._options[e] = t), this._storage.set(n));
      }
      get(e) {
        return this.loaded && e in this._options
          ? this._options[e]
          : this._default[e];
      }
      has(e) {
        return void 0 !== this._options[e];
      }
      remove(e) {
        delete this._options[e],
          this._storage.remove([e], () => {
            const e = chrome.runtime.lastError;
            e && console.error(e);
          });
      }
      addOptionChangedListener(e, t) {
        var n;
        const r =
          null !== (n = this._handlerMap.get(e)) && void 0 !== n ? n : [];
        r.push(t), this._handlerMap.set(e, r);
      }
    })();
    t.a = i;
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "d", function () {
      return l;
    }),
      n.d(t, "c", function () {
        return c;
      }),
      n.d(t, "a", function () {
        return u;
      }),
      n.d(t, "e", function () {
        return d;
      }),
      n.d(t, "b", function () {
        return h;
      });
    var r = n(1),
      i = n(0);
    const o = /([^/]+)$/i,
      a = /\.([^/.]*)$/i;
    function s(e) {
      return e && 0 !== e.indexOf("data:image")
        ? /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/\.?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(
            e
          )
        : [];
    }
    function l(e, t) {
      const n = new URL("object" == typeof e ? e.videoUrl : e);
      let r = (n.pathname.match(o) || [])[1] || "",
        s = r.split(".").map((e) => e.toLowerCase());
      (r = decodeURIComponent(r.replace(a, ""))),
        s.shift(),
        0 === s.length && Object(i.isSpecialUrls)(e) && (s = ["m3u8"]);
      const l = s[s.length - 1] || "",
        c = {
          url: e,
          protocol: n.protocol,
          host: n.host,
          port: n.port,
          pathname: n.pathname,
          filename: r,
          ext: l,
          exts: s,
          hash: n.hash,
          search: n.search,
          type: null,
        };
      if ((c.port || delete c.port, t)) {
        const e = {};
        n.search
          .replace(/^\?/, "")
          .split(/&/)
          .forEach((t) => {
            const n = t.split("=");
            e[n[0]] = n[1];
          }),
          (c.query = e);
      }
      return c;
    }
    function c(e) {
      var t;
      const n = "object" == typeof e ? e.videoUrl : e;
      let i = (null === (t = s(n)) || void 0 === t ? void 0 : t[11]) || "";
      if (!i) return "";
      const o = new Map(),
        a = ["no_watermark_video"];
      Object.keys(r.a).forEach((e) => {
        if (a.includes(e)) return;
        const t = r.a[e].extensions;
        for (let n = 0; n < t.length; n++) o.set(t[n], e);
      }),
        n.includes("googlevideo.com/videoplayback") &&
          "videoplayback" === i &&
          n.includes("mp4") &&
          (i = "video.mp4"),
        n.includes("videoplayback") &&
          "videoplayback" === i &&
          n.includes("mp4") &&
          (i = "video.mp4");
      const l = i.split("."),
        c = l.length - 1;
      if (c <= 0) return "";
      const u = l[c].toLowerCase();
      return o.get(u);
    }
    function u(e) {
      if ((e = Object.create(e)).query) {
        e.search = [];
        for (const t in e.query)
          void 0 !== e.query[t]
            ? e.search.push(t + "=" + encodeURIComponent(e.query[t]))
            : e.search.push(t);
        (e.search = "?" + e.search.join("&")), delete e.query;
      }
      return e.href;
    }
    function d(e) {
      const t = (e = e.replace(/^[#?]{1}/, "")).split("&"),
        n = {};
      return (
        t.forEach((e) => {
          const t = e.split("=");
          Object(i.defined)(t[0]) &&
            Object(i.defined)(t[1]) &&
            (n[t[0]] = decodeURIComponent(t[1].replace(/\+/g, " ")));
        }),
        n
      );
    }
    const h = (() => {
      const e = [
          "facebook.com",
          "youtube.com",
          "video.vnexpress.net",
          "mp3.zing.vn",
          "radio.zing.vn",
          "tv.zing.vn",
          "nhaccuatui.com",
          "video.thethao247.vn",
          "video.ngoisao.net",
          "xvideos.com",
          "phimmoi.net",
          "clip.vn",
          "yan.vn",
          "xem.vn",
          "pornhub.com",
          "xhamster.com",
          "dailymotion.com",
          "xnxx.com",
          "hdonline.vn",
          "phim3s.net",
          "redtube.com",
          "phim14.net",
          "soundcloud.com",
          "youporn.com",
          "vimeo.com",
          "fptplay.net",
          "haivn.com",
          "chiasenhac.com",
          "movies.hdviet.com",
          "nhac.vui.vn",
          "nhacso.net",
          "anime47.com",
          "tube8.com",
          "talktv.vn",
          "chatvl.info",
          "cohet.tv",
          "vlxx.tv",
          "hayhaytv.vn",
          "xemphimso.com",
          "vivo.vn",
          "xemvtv.net",
          "vkool.net",
          "chimsedinang.com",
          "keeng.vn",
          "vuighe.net",
          "vetv.vn",
          "xemphimon.com",
          "ixxx.com",
          "biphim.com",
          "kenhvideo.com",
          "videogame.vn",
          "phim.in",
          "voh.com.vn",
          "phimsexporn.com",
          "porn99.net",
          "news.zing.vn",
          "me.zing.vn",
          "twitter.com",
          "24h.com.vn",
          "phim.clip.vn",
          "video.ringring.vn",
          "v.nhaccuatui.com",
          "clip.vietnamnet.vn",
          "afamily.vn",
          "media.bongdaplus.vn",
          "bongdaclip.com",
          "gamek.vn",
          "phapluattp.vn",
          "hdviet.com",
          "haiivl.com",
          "chatvl.com",
          "2sao.vn",
          "videos.vietgiaitri.com",
          "nhac.vietgiaitri.com",
          "megafun.vn",
          "phim.hayhd.vn",
          "cand.com.vn",
          "ohay.tv",
          "phim.megabox.vn",
          "anhtrang.org",
          "phim.anhtrang.org",
          "8bongda.com",
          "xemphimone.com",
          "bongda365.com.vn",
          "phimhd.vn",
          "dinotube.com",
          "phimvipvn.net",
          "animeax.com",
          "phimdata.com",
          "phimnhanh.net",
          "vipphim.net",
          "phimvon.com",
          "pubvn.tv",
          "phim22.com",
          "phim7.com",
          "hayxemphim.com",
          "m-viet.com",
          "thethaoclip.com",
          "nhac.hay365.com",
          "ssphim.com",
          "phimtructuyenhd.com",
          "xuongphim.tv",
          "vino.vn/mp3",
          "haivl.io",
          "nhacvang.org",
          "starmovies.mobi",
          "clipvuivn.com",
          "phimporn.com",
          "123tv.vn",
          "phimonlinehd.net",
          "hai24h.net",
          "jax.vn",
          "kenhgioitre.net",
          "chiaseclip.net",
          "phim.xixam.com",
          "bilutv.com",
          "phimbathu.com",
          "instagram.com",
          "banhtv.com",
          "txxx.com",
          "video.vietnamnet.vn",
          "video.bongdaplus.vn",
          "creatives.livejasmin.com",
          "tv.naver.com",
          "tv.tuoitre.vn",
          "icdrama.se",
          "video.thanhnien.vn",
          "spankbang.com",
          "dmm.co.jp",
          "v.youku.com",
          "v.qq.com",
          "daikynguyenvn.com",
          "thethao247.vn",
          "e.vnexpress.net",
          "ione.vnexpress.net",
          "kenh14.vn",
          "dantri.com.vn",
          "baomoi.com",
          "emdep.vn",
          "tuoitre.vn",
          "soha.vn",
          "video.congan.com.vn",
          "cafef.vn",
          "bongda.com.vn",
          "bongdaso.com",
          "eva.vn",
          "danviet.vn",
          "cliptv.vn",
          "bbc.co.uk",
          "edition.cnn.com",
          "buzzfeed.com",
          "businessinsider.com",
          "cnet.com",
          "dailymail.co.uk",
          "bilutvx.net",
          "chill123.gotdns.ch",
        ],
        t = {};
      for (let n = 0, r = e.length; n < r; ++n) {
        const r = e[n];
        console.assert(!(r in t), 'Duplicate "' + r + '": ' + t[r] + ", " + n),
          (t[r] = n + 1);
      }
      return function (e) {
        let n = (function (e) {
            var t;
            return (null === (t = s(e)) || void 0 === t ? void 0 : t[6]) || "";
          })(e),
          r = t[n];
        for (; !r && n; ) {
          const e = n.indexOf(".") + 1;
          if (0 === e) break;
          (n = n.substr(e)), (r = t[n]);
        }
        return 100 + (0 | r);
      };
    })();
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      i = n(1);
    class o {
      constructor() {
        (this.QUALITY_TYPES = {}),
          (this.QUALITY_TYPES[o.QL_VIDEO_ULTRAHD] = {
            quality: o.QL_HIGH,
            i18n_quality: Object(r.i18n)(i.e["3072p"].i18n_label),
            qualityIndex: 8,
            size: 3072,
            videoTitle: "Super HD",
          }),
          (this.QUALITY_TYPES["4K"] = this.QUALITY_TYPES[o.QL_VIDEO_ULTRAHD]),
          (this.QUALITY_TYPES["4K UHD"] =
            this.QUALITY_TYPES[o.QL_VIDEO_ULTRAHD]),
          (this.QUALITY_TYPES[o.QL_VIDEO_ULTRAHD] = {
            quality: o.QL_HIGH,
            i18n_quality: Object(r.i18n)(i.e["2160p"].i18n_label),
            qualityIndex: 7,
            size: 2160,
            videoTitle: "Ultra HD",
          }),
          (this.QUALITY_TYPES[o.QL_VIDEO_ULTRAHD] = {
            quality: o.QL_HIGH,
            i18n_quality: Object(r.i18n)(i.e["1440p"].i18n_label),
            qualityIndex: 6,
            size: 1440,
            videoTitle: "Quad HD",
          }),
          (this.QUALITY_TYPES["Quad HD"] =
            this.QUALITY_TYPES[o.QL_VIDEO_ULTRAHD]),
          (this.QUALITY_TYPES[o.QL_VIDEO_FULLHD] = {
            quality: o.QL_HIGH,
            i18n_quality: Object(r.i18n)(i.e["1080p"].i18n_label),
            qualityIndex: 5,
            size: 1080,
            videoTitle: "Full HD",
            audioTitle: "High",
            vimeoQuality: "1080p",
            zingTag: ["1080p", "label1080"],
            dailymotionQuality: "1080p",
            clipvnQuality: "5",
          }),
          (this.QUALITY_TYPES[o.QL_HIGH] =
            this.QUALITY_TYPES[o.QL_VIDEO_FULLHD]),
          (this.QUALITY_TYPES[o.QL_HIGHEST] = Object.assign(
            {},
            this.QUALITY_TYPES[o.QL_VIDEO_FULLHD]
          )),
          (this.QUALITY_TYPES[o.QL_HIGHEST].qualityIndex += 0.01),
          (this.QUALITY_TYPES[o.QL_VIDEO_HD] = {
            quality: o.QL_HIGH,
            i18n_quality: Object(r.i18n)(i.e["720p"].i18n_label),
            qualityIndex: 4,
            size: 720,
            videoTitle: "HD",
            audioTitle: "High",
            zingTag: ["720p", "label720"],
            vimeoQuality: "720p",
            dailymotionQuality: ["hd", "720p"],
            facebookQuality: ["hd_src", "hd_src_no_ratelimit"],
            JWQuality: "highquality",
            clipvnQuality: "4",
          }),
          (this.QUALITY_TYPES[o.QL_VIDEO_STANDARD] = {
            quality: o.QL_MEDIUM,
            i18n_quality: Object(r.i18n)(i.e["480p"].i18n_label),
            qualityIndex: 3,
            size: 480,
            videoTitle: "Standard",
            audioTitle: "Standard",
            zingTag: ["480p"],
            dailymotionQuality: "480p",
            vimeoQuality: "480p",
            facebookQuality: ["sd_src", "sd_src_no_ratelimit"],
            JWQuality: "location",
            clipvnQuality: "3",
          }),
          (this.QUALITY_TYPES[o.QL_VIDEO_MEDIUM] = {
            quality: o.QL_MEDIUM,
            i18n_quality: Object(r.i18n)(i.e["360p"].i18n_label),
            qualityIndex: 2,
            size: 360,
            videoTitle: "Medium",
            audioTitle: "Medium",
            vimeoQuality: "360p",
            dailymotionQuality: "380p",
            zingTag: ["source", "360p"],
            JWQuality: "lowquality",
            clipvnQuality: "2",
          }),
          (this.QUALITY_TYPES[o.QL_VIDEO_SMALL] = {
            quality: o.QL_LOW,
            i18n_quality: Object(r.i18n)(i.e["270p"].i18n_label),
            qualityIndex: 1,
            size: 240,
            altSizes: [270],
            videoTitle: "Small",
            audioTitle: "Low",
            dailymotionQuality: "240p",
            vimeoQuality: "270p",
            zingTag: ["f", "f240"],
            clipvnQuality: "1",
          }),
          (this.QUALITY_TYPES[o.QL_LOW] = this.QUALITY_TYPES[o.QL_VIDEO_SMALL]),
          (this.QUALITY_TYPES[o.QL_VIDEO_MOBILE] = {
            quality: o.QL_LOW,
            i18n_quality: Object(r.i18n)(i.e["144p"].i18n_label),
            qualityIndex: 0,
            size: 144,
            altSizes: [180],
            videoTitle: "Mobile",
            audioTitle: "Low",
            dailymotionQuality: "144p",
            vimeoQuality: "",
            clipvnQuality: "0",
          }),
          (this.PREFERRED_QUALITY_INDEX = {}),
          (this.PREFERRED_QUALITY_INDEX[o.QL_HIGH] =
            this.QUALITY_TYPES[o.QL_VIDEO_ULTRAHD].qualityIndex),
          (this.PREFERRED_QUALITY_INDEX[o.QL_MEDIUM] =
            this.QUALITY_TYPES[o.QL_VIDEO_STANDARD].qualityIndex),
          (this.PREFERRED_QUALITY_INDEX[o.QL_LOW] =
            this.QUALITY_TYPES[o.QL_VIDEO_SMALL].qualityIndex),
          (this.DEFAULT_QUALITY_LEVEL = o.QL_HIGH),
          (this.QUALITY_LEVELS = [o.QL_HIGH, o.QL_MEDIUM, o.QL_LOW]),
          (this.VIDEO_QUALITY_LEVELS = [
            o.QL_VIDEO_ULTRAHD,
            o.QL_VIDEO_FULLHD,
            o.QL_VIDEO_HD,
            o.QL_VIDEO_STANDARD,
            o.QL_VIDEO_MEDIUM,
            o.QL_VIDEO_SMALL,
            o.QL_VIDEO_MOBILE,
          ]),
          (this.DEFAULT_QUALITY_TYPE = o.QL_VIDEO_STANDARD);
      }
      getFacebookQuality(e) {
        var t;
        return null === (t = this._getVideoQuality("facebookQuality", e)) ||
          void 0 === t
          ? void 0
          : t.videoTitle;
      }
      getDailymotionQuality(e) {
        var t;
        return null === (t = this._getVideoQuality("dailymotionQuality", e)) ||
          void 0 === t
          ? void 0
          : t.videoTitle;
      }
      getZingVideoQuality(e) {
        var t;
        return null === (t = this._getVideoQuality("zingTag", e)) ||
          void 0 === t
          ? void 0
          : t.videoTitle;
      }
      getZingAudioQuality(e) {
        var t;
        return null === (t = this._getVideoQuality("zingTag", e)) ||
          void 0 === t
          ? void 0
          : t.audioTitle;
      }
      getVimeoQuality(e) {
        var t;
        return null === (t = this._getVideoQuality("vimeoQuality", e)) ||
          void 0 === t
          ? void 0
          : t.videoTitle;
      }
      getClipvnQuality(e) {
        var t;
        return null === (t = this._getVideoQuality("clipvnQuality", e)) ||
          void 0 === t
          ? void 0
          : t.videoTitle;
      }
      getJWQuality(e) {
        var t;
        return null === (t = this._getVideoQuality("JWQuality", e)) ||
          void 0 === t
          ? void 0
          : t.videoTitle;
      }
      getQualityBySize(e) {
        var t;
        return null === (t = this._getVideoQuality("size", e)) || void 0 === t
          ? void 0
          : t.videoTitle;
      }
      getSizeByQuality(e) {
        return (this.QUALITY_TYPES[e] || {}).size || 0;
      }
      getI18nOfQuality(e) {
        var t;
        return null === (t = this.QUALITY_TYPES[e]) || void 0 === t
          ? void 0
          : t.i18n_quality;
      }
      _getVideoQuality(e, t, n) {
        for (const n in this.QUALITY_TYPES) {
          let r = this.QUALITY_TYPES[n][e];
          if ((Array.isArray(r) || (r = [r]), -1 !== r.indexOf(t)))
            return this.QUALITY_TYPES[n];
        }
        return n ? null : this.QUALITY_TYPES[this.DEFAULT_QUALITY_TYPE];
      }
      _getTypeByQualityType(e) {
        for (const t in this.QUALITY_TYPES)
          if (
            e === t ||
            e === this.QUALITY_TYPES[t].videoTitle ||
            e === this.QUALITY_TYPES[t].audioTitle
          )
            return this.QUALITY_TYPES[t];
        return this.QUALITY_TYPES[this.DEFAULT_QUALITY_TYPE];
      }
      _calculateWeight(e, t) {
        const n = i.a[e.type].extensions_weight,
          r = n.indexOf(e.ext),
          o = this._getTypeByQualityType(e.quality || "").qualityIndex;
        return r / n.length + Math.abs(t - o) / 7;
      }
      getQualityLevelByType(e) {
        return Object.keys(this.QUALITY_TYPES).indexOf(
          this._getTypeByQualityType(e).videoTitle
        );
      }
      getVideoQualityIndex(e) {
        return this.VIDEO_QUALITY_LEVELS.concat().reverse().indexOf(e);
      }
      getOneClickQualityIndex(e) {
        return this.QUALITY_LEVELS.concat().reverse().indexOf(e);
      }
      getQualityLevelByQualityType(e) {
        return this._getTypeByQualityType(e).quality;
      }
      getQualityIndexByVideoTitleQuality(e) {
        return void 0 !== this.QUALITY_TYPES[e]
          ? this.QUALITY_TYPES[e].qualityIndex
          : this.getOneClickQualityIndex(e);
      }
      getQualityNameByResolution(e) {
        const t = parseInt(e),
          n = Object.values(this.QUALITY_TYPES),
          r = n.find(
            (e) => e.size === t || (e.altSizes && e.altSizes.includes(t))
          );
        if (r) return r.videoTitle;
        const i = n.find((e) => e.size < t);
        return i ? i.videoTitle : null;
      }
      getQualityExtFromDowload(e) {
        return (
          (e.ext || "") + "/" + (e.quality || "") + "/" + (e.resolution || "")
        );
      }
      chooseBestDownload(e, t, n) {
        let r = e.length;
        if (n) {
          const t = n.split("/").filter((e) => e).length > 2;
          for (let i = 0; i < r; ++i) {
            const r = e[i],
              o = this.getQualityExtFromDowload(r);
            if (o === n) return r;
            if (t) {
              const e = n.replace(/(.+)\/.+/, "$1");
              if (o.replace(/(.+)\/.+/, "$1") === e) return r;
            }
          }
        }
        t = t || this.DEFAULT_QUALITY_LEVEL;
        let i = e.filter(
          (e) => "video" === e.type || "no_watermark_video" === e.type
        );
        (i && i.length) || (i = e), (r = i.length);
        const o = this.PREFERRED_QUALITY_INDEX[t];
        let a = 1e3,
          s = -1;
        for (let e = 0; e < r; ++e) {
          const t = i[e],
            n = this._calculateWeight(t, o);
          a > n && ((a = n), (s = e));
        }
        return i[t.toLocaleLowerCase() === n ? 0 : s];
      }
    }
    (o.QL_HIGHEST = "Highest"),
      (o.QL_HIGH = "High"),
      (o.QL_MEDIUM = "Medium"),
      (o.QL_LOW = "Low"),
      (o.QL_VIDEO_ULTRAHD = "Ultra HD"),
      (o.QL_VIDEO_FULLHD = "Full HD"),
      (o.QL_VIDEO_HD = "HD"),
      (o.QL_VIDEO_STANDARD = "Standard"),
      (o.QL_VIDEO_MEDIUM = "Medium"),
      (o.QL_VIDEO_SMALL = "Small"),
      (o.QL_VIDEO_MOBILE = "Mobile"),
      (t.a = new o());
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      function n(e) {
        return e.split(".").map((e) => parseInt(e));
      }
      function r(e, t) {
        if (!e) return !1;
        const r = t.split(" ");
        if (2 !== r.length) return !1;
        let i = -1;
        switch (r[0]) {
          case ">":
            i = 1;
            break;
          case ">=":
            i = 0;
        }
        return (
          (function (e, t) {
            let n = e[0] - t[0];
            return 0 !== n
              ? n
              : ((n = e[1] - t[1]),
                0 !== n
                  ? n
                  : ((n = e[2] - t[2]), 0 !== n || (n = e[3] - t[3]), n));
          })(e, n(r[1])) >= i
        );
      }
      const i = (function (e) {
        let t = e.match(/Chrome\/([\d.]+)/);
        t && t[1] && (t = n(t[1]));
        const i = r.bind(null, t);
        return {
          YT: { mp4: !0, m4a: !0, webm: i(">= 39.0.2171.103") },
          M3U8: i("> 62.4.3202.180"),
          SOUND_ONLY:
            i("> 55.4.2883.114") ||
            (!!t && 50 === t[0] && i("> 50.3.2661.150")),
          SUBTITLES:
            i("> 55.4.2883.114") ||
            (!!t && 50 === t[0] && i("> 50.3.2661.150")),
          PLAY_NOW_BOTTOM_TOOLTIP: i("> 55.4.2883.126"),
          IS_ADS_PIP_PARAMS: i("> 60.4.3112.120"),
          MEDIA_WEB_REQUEST: i(">= 58.4.3029.118"),
          SERP_ADD_STRUCTURES: i(">= 62.4.3202.176"),
          SERP_ADD_INNER_STRUCTURES: i(">= 64.4.3282.200"),
          MOBILE_TRANSFER_PANEL: !0,
          CUSTOM_METRICS_JSON: i(">= 64.4.3282.236"),
          DASH_DOWNLOAD: i(">= 72.0.3626.130"),
          WEB_REQUEST_EXTRA_HEADERS: i(">= 72.0.0.0"),
          NATIVE_PIP: i(">= 74.0.0.0"),
          DOWNLOAD: {
            EXTRA_DATAS: i(">= 103.0.0.0"),
            M3U8_AUDIO: i(">= 109.0.0.0"),
          },
          CHATGPT: i(">= 110.0.0.0"),
        };
      })(e.navigator.userAgent);
      t.a = i;
    }).call(this, n(9));
  },
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return a;
    }),
      n.d(t, "a", function () {
        return s;
      }),
      n.d(t, "b", function () {
        return d;
      });
    var r = n(4),
      i = n(0),
      o = n(3);
    function a(e, t) {
      return (e && e.getAttribute(t)) || "";
    }
    const s = {
        isCocCocSerp: function (e) {
          if (e)
            return Boolean(
              e.match(
                /(^(https|http):\/\/(dev[0-9]?\.)?coccoc.com\/search\?query=)(?!.*tbm).*$/i
              )
            );
        },
        isGGAds: function (e) {
          return Boolean(
            e.match(
              /^https:\/\/www\.google\.com\/afs\/ads[\s\S]+master[\-A-Za-z\-0-9]/i
            )
          );
        },
        isCocCocComposer: function (e) {
          return Boolean(
            e.match(
              /(^(https|http):\/\/(dev[0-9]?\.)?coccoc.com\/composer\?)(?!.*tbm).*$/i
            )
          );
        },
        saveQueryId: function (e) {
          o.a.remove("_serpid_on_coccoc"),
            e &&
              o.a.get("coccoc_query_id") !== e &&
              o.a.set("coccoc_query_id", e);
        },
        hasGGAdsIrames: function (e) {
          const t = Object(i.queryAll)("iframe", e);
          for (const e of t)
            if (d.isGGAdsOnCocCoc(null == e ? void 0 : e.src)) return !0;
        },
      },
      l = new RegExp(
        "^(www\\.)?google\\.((com|ac|ad|ae|al|am|as|at|az|ba|be|bf|bg|bi|bj|bs|bt|by|ca|cc|cd|cf|cat|cg|ch|ci|cl|cm|cn|cv|cz|de|dj|dk|ee|fi|dm|dz|es|fm|fr|ga|ge|gf|gg|gl|gm|gp|gr|gy|hn|hr|ht|hu|ir|iq|ie|im|io|is|it|je|ki|kg|jo|kz|la|lt|lu|lv|li|lk|md|me|mg|mk|ml|mn|ms|mu|mv|mw|nl|no|nr|nu|pl|ne|pn|ps|pt|ro|rs|ru|rw|sc|se|sh|si|sn|sm|so|tk|tl|tm|to|tn|st|sk|tt|td|vu|ws|vg|tg|us)|(co((\\.(th|id|il|in|jp|ke|ma|kr|mz|ls|nz|tz|ug|uk|uz|ve|vi|za|zm|zw|ao|ck|bw|cr))|m\\.(pr|py|qa|sa|sb|sg|sl|sv|tj|tn|tr|tw|gh|gi|gt|hk|jm|kw|lb|lc|ly|mm|mt|mx|my|na|nf|ng|ni|np|om|pa|pe|ph|pk|pg|ua|uy|vc|vn|af|ag|ai|ar|au|bd|bh|bn|bo|br|bz|kh|co|cu|cy|do|ec|eg|et|fj))))$",
        "i"
      ),
      c = /[&?]q=[^&]/i,
      u = /^https:\/\/www.google.com\/afs\/ads/i,
      d = {
        isSERPHost: function (e) {
          return Boolean(e.match(l) && !location.href.match(u));
        },
        isGGAdsOnCocCoc: function (e) {
          return Boolean(
            s.isGGAds(e) && s.isCocCocSerp(new URL(e).searchParams.get("rurl"))
          );
        },
        isYSERPHref: function (e) {
          return (
            e &&
            Boolean(e.match(/(youtube.com\/results+[\s\S]+search_query=)/g))
          );
        },
        isVideoSERPHref: function (e) {
          return Boolean(
            e.match(/(https:\/\/www.google.+\/search)+[\s\S]+(tbm=vid)/g)
          );
        },
        isImageSERPHref: function (e) {
          return Boolean(
            e.match(/(https:\/\/www.google.+\/search)+[\s\S]+(tbm=isch)/g)
          );
        },
        isSERPRequest: function (e) {
          var t, n;
          const i = Object(r.d)(e);
          return Boolean(
            this.isSERPHost(i.host) &&
              (null === (t = i.pathname) || void 0 === t
                ? void 0
                : t.match(/\/s(earch)?/i)) &&
              (null === (n = i.search) || void 0 === n ? void 0 : n.match(c))
          );
        },
        getSearchParams: function (e) {
          const t = Object(r.d)(e),
            n = Object(r.e)(t.search),
            o = Object(r.e)(t.hash || "#"),
            a = Object(i.defined)(o.q);
          return {
            _rawSearch: n,
            _rawHash: o,
            q: a ? o.q : n.q || n.query || "",
            s: a ? o.start || 0 : n.start || 0,
            tbm: a
              ? o.tbm
              : (n.tbm && "vid" != n.tbm && "isch" != n.tbm) || null,
            isXHR: n.tch,
            isHash: a,
          };
        },
      };
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    const r = [
        "/pre-roll/",
        "/preroll/",
        "/ads/",
        "||histats.com/",
        "||adnetwork.vn/",
        "||doubleclick.net/",
        "||admicro/",
        "||adnet.vn/",
        "||ds-vn.serving-sys.com/",
        "||lavanetwork.net/",
        "||video.sgame.vn:8080/",
        "blueseed.tv",
        "||new-cdn.blueseed/",
        "||vcmedia.vn/",
        "||innity.net/",
        "||serving-sys.com/",
        "||ambientplatform.vn/",
        "||gvt1.com/",
        "||comment.dantri.com.vn/",
        "||adsquangcao.com/",
        "||facebook.com/connect",
        "||facebook.com/plugins/likebox.php",
        "||facebook.com/plugins/like.php",
        "||cdn.cloudfrale.com",
        "||www990.o0-2.com",
        "||facebook.com/plugins/comments.php",
        "||facebook.com/connect/xd_arbiter",
        "||facebook.com/plugins/page.php",
        "||facebook.com/v*/plugins/*",
        "||googlesyndication.com",
        "||qccoccocmedia.vn/",
        "||coccoc.com/webhp##*",
        "||coccoc.com/welcome##*",
        "||meme.vn/##*",
        "||ads.phimnhanh.net/",
        "||adsquangcao.com/",
        "||edgecastcdn.net/",
        "||qccoccocmedia.vn/",
        "||dev-qccoccocmedia.vn/",
        "||media.adnetwork.vn/",
        "||www.google.com/maps/embed",
        "@@||vhosting.vcmedia.vn/",
        "@@||vcplayer.vcmedia.vn/",
        "@@||vscc.hosting.vcmedia.vn/",
        "@@||vscc.dantri.hosting.vcmedia.vn/",
        "@@||vscc-kenh14-hosting.vcmedia.vn/",
        "@@||hls.vcmedia.vn/",
        "##.adsbygoogle iframe",
        "###adcontainer *",
        "##.ad-container *",
        '##.facebook-top *, .fb-like-box *, iframe[title^="fb:like_box"]',
        '##iframe[title^="fb:page"]',
        '##[id^="AbdVideoPreroll"]',
        '##[data^="player-ads"]',
        '##[id^="google_ads_iframe_"]',
        "###pyv-iframe",
        "##.box-ads *",
        "##.ads *",
        "##.video-ads *",
        '##iframe[onload*="google_iframe_oncopy"]',
        '||youtube.com##[id*="sidebar-ads"] *',
        "||bit.ly/",
        '##[name*="zeroclipboard"],[data*="zeroclipboard"]',
        "||xemphimso.com/##.right-menu *",
        "###AbdPopupAd_left iframe",
        '||phim.hayhd.vn/###adsdiv iframe,div[class*="ads"] iframe',
        "||nhaccuatui.com/##.box_right *,#banner-container-bottom *",
        "||adxpansion.com/",
        "||porn99.net##.content-right *",
        "||thuvienanh.org/",
        "||xemvtv.net/###ads-slider *",
        '||yeucahat.com/##div[id^="adscont"] *',
        "||sexad.net/",
        "||ads.sex.com/",
        '||redtube.com/##div[id^="as_"] *',
        '##object[id^="abdPopup"]',
        "||adnetwork.vn/",
        '##object[data*=".adnetwork.vn/"]',
        "||phim3s.net/##.ad_location *",
        "||xhamster.com/###plAds *,.adVideo *,#adBottom *",
        "||exoclick.com/",
        "||trafficstars.com/",
        "||traffichaus.com/",
        "||trafficjunky.net/",
        "||vivo.vn##.content-right-sidebar *",
        "||pornhub.com/###pb_block *,.right-ads *",
        '||xemphimso.com/##[id^="ebAd"],#eyeDiv *',
        '||vivo.vn/##div[class*="ads"] *',
        "||phim.hayhd.vn/###block-resize-sidebar *",
        "||phim.hayhd.vn/##.container .col-sm-8+.col-sm-4 *",
        "||pornhub.com,tube8.com,youporn.com,redtube.com###pb_template *",
        "||nhac.vui.vn/##.colRight *",
        "||tube8.com/##.blockHtml *",
        "||vkool.net/##.float-ck *,.col-left *,#sidebar *, #boxes *",
        "||comment.vietid.net/comments",
        "||dantri.com.vn/comment",
        "||dantri.com.vn/##.fr.w510 *",
        '||vnexpress.net/##[id*="_BANNER_"] *, .block_banner *',
        "||vnexpress.net/authen/users/guestpost",
        '||24h.com.vn/##[id*="ADS_"] *',
        "||ngoisao.net/###right *",
        "||nhaccuatui.com/##.coverImage *",
        "||phimsexporn.com/##.balloons-ck *",
        "/twitter\\.com\\/.*cards\\/.*cardname=poll/",
        "##.twitter-tweet.twitter-tweet-rendered",
        '##[id^="preroll"] *',
        '##[id^="preroll-player_swf_0"]',
        '##[class^="preroll"] *',
        "||adpoints.media",
        "||media.yomedia.vn",
        "goldendatagroup.*",
        "||video-juice.com",
        "##.jw-flag-ads > .jw-media > .jw-video",
        "||zing.vn###highlight video",
        /[\s\S]\.danet.vn\/html\/embed/,
        /([\/\/]|_)blank|bg.mp4|manclub.mp4|AnimeTVN_P.mp4|main.mp4|init.mp4|blip2.ogg|chunklist(?!.m3u8)|([0-9]+s[^\/a-zA-z]*\.(mp4|m3u8|ogg))|black\.mp4|(wp-content\/uploads\/\d+\/\d+\/[a-zA-Z0-9\-_]+\.(mp4))|bichilltv\.com[\s\S]+\d+\.mp4/,
        "vividobj.*.cdnviet.com",
        "vcdn.media.innity.net",
        "ds-vn.serving-sys.com",
        "###video-anchor_ad iframe",
        "###pagelet_page_cover video",
        "##.jw-flag-ads-googleima.jw-flag-ads *",
        /https?:\/\/www\.phimmoi\.net\/resource\/video\/blank\d+\.mp4/,
        "ads-pd.nbcuni.com",
        /adtool-premium\/creatives/,
        /banners[\s\S]*\.trafficfactory[\s\S]*\.mp4/,
        "contentabc.com",
        "criteo.net",
        "||coccoc.com/search##video[data-savior-token]",
        "||force.com##iframe",
        '||drive.google.com##[role="main"] iframe:not([id*="video-player"])',
        "||zingmp3.vn##.Player.--z-video-ads .Player-content",
        "@@||coccoc.com^$document",
        "@@||suckhoedoisong.vn$image",
        "@@||idplanguage.com$image",
        "!PF - 2023",
        "||unreshiramor.com^",
        "!PF - 1740",
        "@@||embed.dugout.com^",
        "!PF - 2023",
        "||unreshiramor.com^$popup,third-party",
        "||hydracdn.network^$popup,third-party",
        "/about:blank#/$popup,domain=22pixx.xyz|9anime.to|disk.ly|dood.to|dood.watch|fmovies.to|gogoanime.pro|hydracdn.network|imagetwist.com|mixdrop.co|mstream.xyz|popads.net|powvideo.net|powvldeo.cc|putlocker.style|run-syndicate.com|spcdn.cc|steamplay.cc|streamtape.com|upstream.to|uptostream.com|vev.io|vev.red|vevo.io|vidcloud.co|videobin.co|videowood.tv|viditodo.com|vidoza.net|vidup.io|vortez.net|vshare.eu|watchserieshd.tv|unreshiramor.com",
        "about:blank",
        "||fdrgtt9edmej010.com",
        "||ribunews.com",
        "||itnuzleafan.com",
        "||yougotacheck.com",
        "||derevya2sh8ka09.com",
        "||syndication.realsrv.com",
        "||prismgadnarc.icu",
        "!PF - 2683",
        "dantri.com.vn#@#.ng-isolate-scope",
        "!PF-2084 - open for savior",
        '@@||video.kenh14.vn,div^$[class*="ads"]',
        "!PF - 860",
        "||buy.tinypass.com^$third-party,domain=insider.com",
        "!Not whitelist for Coc Coc adnetword in strict mode",
        "!@@||cdn2.cache.vn/banners/sspAnetTest/cc_ssp_new.js",
        "!@@||static.adconnect.vn/main.js ",
        'docs.google.com#@#iframe[src="about:blank"]',
        "@@||tuyensinh247.com/$image,third-party",
        "||jarvispopsu.com^",
        "||03ed9035a0801f.com^",
        "||widow5blackfr.com^",
        "||thanosofcos5.com^",
        "truyenaudiocv.net#$#abort-current-inline-script adblockDetect",
        "truyenaudiocv.net#@#.adsbygoogle",
        "levelmaxblock.js",
        "||se.lingoeroily.com^$third-party",
        "||aloetichansels.casa^$third-party",
        "||glixaing.com^",
        "||yonsandileer.com^",
        "||itheatmoran.com^",
        "||fieldofbachus.com^",
        "||se42ade5e3son7ing.com^",
        "||03ed9035a0801f.com^",
        "||pubmaner5.com^",
        "||susifhfh2d8ldn09.com^",
        "||osshydreigonan.com^",
        "||log.videocampaign.co^",
        "||graizoah.com^",
        "||hoanoola.net^",
        "||agacelebir.com^",
        "||se.lingoeroily.com^",
        "||gpcdreunite.casa^",
        "||zinblemedia.fuse-cloud.com^",
        "||egreephu.com^",
        "||agurgeed.net^",
        "||dartarscuspids.casa^",
        "||ayyubidgconv.casa^",
        "||sillyflowermachine.com^",
        "||stawhoph.com^",
        "||rotabol.com^",
        "||hadesleta.com^",
        "||03ed9035a0801f.com^",
        "||nyalacornily.cam^",
        "||codedexchange.com^$script,third-party",
        "||streetcoddiffident.com^$script,third-party",
        "||tsardagger.com^$script,third-party",
        "||onemboaran.com^$script,third-party",
        "||nyalacornily.cam^$script,third-party",
        "||nomorepecans.com^$script,third-party",
        "||onmarshtompor.com^$third-party",
        "||zo.ogamdidacts.com^$third-party",
        "||quenchskirmishcohere.com^$third-party",
        "||highmaidfhr.com^$third-party",
        "||kgdvs9ov3l2aasw4nuts.com^$third-party",
        "sex-hay.pro,phimsex7.net##.float-ck",
        "cdnx.stream###banner",
        "biphims.tv###overlay",
        ".onetouch7.info",
        "/asset/jquery/slim-3.2.min.js",
        "/asset/vue.min.js?ts=1&_",
        "xnxx-sex-videos.com/a$script",
        "m.phimsexsub.info,phimsexsub.info###a-player",
        "!snippet script",
        "vcomic.net#$#abort-on-property-read window.canRunAds",
        "hataphim.com#$#abort-on-property-write mdpDeBlocker",
        "xnxx-sex-videos.com#$#abort-on-property-write user_out",
        "!Fix salaphim.com",
        "@@||salaphim.com/application/player/js/vastvideoplugin.js",
        "@@||salaphim.com^*.gif$image",
        "@@||salaphim.com^*.php$xmlhttprequest",
        "!Adding rules for vieon.vn",
        "@@||imasdk.googleapis.com/js/sdkloader/ima3.js",
        "!Fix 20210906: biphimz.tv, phim33.co, vlogtruyen.net, phim7z.tv, biphims.tv, hpjav.tv, phephims.net, ailovemanga.com, vlive.tv, vidembed.cc, live90.live, fancoiphim.net, cakhiatv.live, hdzog.com, upornia.com",
        "||xq.ypocrasbywalk.com^$third-party",
        "||phim33.co$popup",
        "||phim33.co/Theme/js/popup.js",
        "||vlogtruyen.net$popup",
        "||au.withyarryish.com^$third-party",
        'hpjav.tv##iframe[src*="stunninglover.com"]',
        "fardhvarment.com^$third-party",
        "||rosteldicycle.cam^$third-party",
        "vlive.tv###loginDimmedArea",
        "vlive.tv##.ly_promotion",
        "||chaingab.net^$third-party",
        "live90.live###modalAds",
        "live90.live##.fade-ads",
        "||fancoiphim.net$popup",
        "afon/rass$script",
        "||upornia.com/niasffti/jcfxdexak.js",
        "!Fix 20210916",
        "phimhdvnz.net#$#abort-current-inline-script jQuery /#wrapper/",
        "truyentranh86.com#$#abort-on-property-read document.body",
        "201tube.tv#$#abort-on-property-read document.body",
        "hataphim.com#$#abort-on-property-write mdpDeBlocker",
        "@@||steamforvietnam.org^",
        "@@/api/tracking/*$domain=steamify.steamforvietnam.org",
        "||truyen3s.com/content/js/custom.js",
        "||truyen3s.com/content/js/script.js",
        "truyen3s.com#$#abort-on-property-read document.body",
        "truyen3s.com#$#abort-on-property-read document.documentElement",
        "@@*vast.js$domain=phimchat.vip|phimchat.club",
        "@@/video_ads.$domain=phimchat.vip|phimchat.club",
        "!Fix 20210922",
        "@@$script,xmlhttprequest,domain=napthengay.vn",
        "||bicepsseiner.com^",
        'dualeotruyen.top##[id^="popup_banner"]',
        "rakhoi1.tv,cakhia10.tv,cakhia.xyz,cakhia9.tv,rakhoi.tv,cakhiatv.live,cakhialive.tv,cakhia6.tv,cakhia8.tv,cakhia20.tv##.modal-ads",
        "rakhoi1.tv,cakhia10.tv,cakhia.xyz,cakhia9.tv,rakhoi.tv,cakhiatv.live,cakhialive.tv,cakhia6.tv,cakhia8.tv,cakhia20.tv##.slide-bar-top-live-hide-mobi",
        "rakhoi1.tv,cakhia10.tv,cakhia.xyz,cakhia9.tv,rakhoi.tv,cakhiatv.live,cakhialive.tv,cakhia6.tv,cakhia8.tv,cakhia20.tv##.footer-banner",
        'rakhoi1.tv,cakhia10.tv,cakhia.xyz,cakhia9.tv,rakhoi.tv,cakhiatv.live,cakhialive.tv,cakhia6.tv,cakhia8.tv,cakhia20.tv##div[class^="slide-bar-"]',
        "rakhoi1.tv,cakhia10.tv,cakhia.xyz,cakhia9.tv,rakhoi.tv,cakhiatv.live,cakhialive.tv,cakhia6.tv,cakhia8.tv,cakhia20.tv##.adHTML2",
        "rakhoi1.tv,cakhia10.tv,cakhia.xyz,cakhia9.tv,rakhoi.tv,cakhiatv.live,cakhialive.tv,cakhia6.tv,cakhia8.tv,cakhia20.tv##.adHTML4",
        "rakhoi1.tv,cakhia10.tv,cakhia.xyz,cakhia9.tv,rakhoi.tv,cakhiatv.live,cakhialive.tv,cakhia6.tv,cakhia8.tv,cakhia20.tv##.adHTML3",
        "xuongphim18z.net##.modal-backdrop",
        "###quang-cao",
        "xuongphim18z.net###pc-preload-modal",
        "truyentranh8.org#$#abort-on-property-read document.body",
        "vuvitv.net,animevi.net###modal-block-ads-msg",
        "vuvitv.net,animevi.net##.modal-backdrop",
        "@@/vast.$script,xmlhttprequest,domain=vuianime.net",
        "@@player.vuianime.net/ads_code",
        "bilutvx.net##.abp-ballon",
        "proporn.com##.puFloatLine",
        "/js/ads.js",
        "/asset/angular.min.js$domain=websextop.com",
        "||sexfrisk.com/bounce.js",
        "truyenqqtop.com##.left-banner",
        "/js/upload/main.v2.min.js$domain=s1.zendplace.pro",
        "z.phimsexsub.info##.clipxx",
        "xoso88.tv##.banner",
        "xoso88.tv##.ads_home",
        "!Fix 20210929",
        "xvideo-xxx.com#$#abort-on-property-write user_out",
        "/asset/angular.min.js?t=",
        "||z.phimsexsub.info/pp/puinfo.js",
        "z.phimsexsub.info###htmlctry",
        'z.phimsexsub.info##div[style*="height: 255px;"]',
        "@@/1x1.png$domain=miti.vn",
        "ngentotxsex.com#$#abort-on-property-write user_out",
        "@@||mv.vkool.net^$image",
        "!Fix 20211001",
        'phimlau.online##a[href^="///"][rel="nofollow norefferer noopener"]',
        "||mg.ratchgablet.com^$script",
        "||sofinpushpile.com^$third-party",
        "@@/advert/*$domain=nimec.gov.vn",
        "!Fix 20211006",
        "sexbombo.com#$#abort-on-property-write user_out",
        "||asg.bhabhiporn.pro^",
        "truyen86.com#$#abort-on-property-read document.body",
        "truyen86.com#$#abort-on-property-read window.canRunAds",
        "xuongphim18z.com###quang-cao",
        "xuongphim18z.com###pc-preload-modal",
        "xuongphim18z.com#$#abort-on-property-read document.cookie",
        "vivutv.net#$#abort-on-property-write popups",
        "@@||gstatic.com^$third-party,domain=google.com",
        "@@||google.com/display-ads-",
        "@@weiyun.com$generichide",
        "@@||gateway.chotot.com^",
        "||ig.lurefuleuryon.com^$script",
        "||lm.anywaypimpish.com^$script",
        "ssphim.net##.uniad-zonetype-preload-overlay",
        "ssphim.net##.uniad-zonetype-preload-container",
        "||dendrafilterednthe4edm7um.com^$script",
        "mitom2.tv#$#abort-current-inline-script jQuery popupBanners",
        "||cdn.hurirk.net/static/js/amvn.js",
        "||playersb.com/js/jquery/jquery-1.4.1.min.js",
        "violet.vn###previewad",
        "||yg.humorersingult.com^",
        "||subnhanh.net/js/ads_xx.js",
        "logo.png$popup,domain=animehay.site",
        "||olivcytyspixd.xyz^$third-party",
        "||casyxndfiyb.xyz^$third-party",
        "gamevui.vn###underplayad",
        "gamevui.vn###topplayad",
        "gamevui.vn###adindexsecond",
        "gamevui.vn###adindextop",
        "gamevui.vn###adrightthird",
        "gamevui.vn###adrighttop",
        "||hu.bathingrefont.com^$script",
        "xoilac1.tv#$#abort-current-inline-script jQuery popupBanners",
        "xoilac1.tv#$#abort-on-property-write adsRedirectPopups",
        "mitom1.tv#$#abort-current-inline-script jQuery popupBanners",
        "mitom1.tv#$#abort-on-property-read adsRedirectPopups",
        "||untimburra.com^$script",
        "||t.dtscout.com^$script",
        "javmup.net#$#abort-current-inline-script Math",
        "||lu.oppleteniffers.com^$script",
        "websosanh.vn#@#.ads-wrap",
        "||x2sfa.javgg.eu^",
        "||id.fc2-ppv.live^$script",
        "||japopav.tv/js/jquery/3.6.0/jquery-1.4.1.1.min.js",
        "||hdvietsub.net/wp-content/themes/movies/js/qcphd.js",
        'youtube.com#@#div[id^="sponsor-"]',
        "lucaphim.com,salaphim.com##.dont_show_pop_ups",
        "@@||lucaphim.com^*.php$xmlhttprequest",
        "||fw.noritesroyally.com^$script",
        "||cg.nonentnastier.com^$script",
        "||ay.cydoniarouting.com^$script",
        "xoilac2.com#$#abort-current-inline-script jQuery popupBanners",
        "xoilac2.com#$#abort-on-property-write adsRedirectPopups",
        "phimgii.net###preload-11bet-pc",
        "||lr.heavedmealock.com^",
        "motphimtv.com##.mp-adz",
        "@@$script,domain=game24h.vn",
        "game24h.vn#@#.adsbyvli",
        'game24h.vn##[data-id="vi-smartbanner-unit"]',
        "chill.popv.js$script",
        "@@$script,XMLHTTPREQUEST,domain=myreadingmanga.info",
        "iphimmoi.net###popup-giua-man-hinh",
        "iphimmoi.net#$#abort-current-inline-script $ /#btn-film-watch/",
        "dualeotruyentv.com###popup_banner_beta",
        "@@/video_ads.$domain=phimchat.vip|phimchat.xyz",
        "@@||p.jwpcdn.com/player/plugins/vast/$domain=phimchat.vip|phimchat.xyz",
        "@@||imasdk.googleapis.com^$domain=baogiaothong.vn",
        "||rw.preopensorrel.com^$script",
        "hypebeast.com#@#.ad-blocked",
        "@@/storage.adpia.vn/$image,domain=mail.google.com",
        "phephimzz.net##.mp-adz",
        "phephimzz.net##.sda-preload-popup",
        "phephimzz.net##.sda-preload-popup-overlay",
        "phimplay.com#$#abort-current-inline-script jQuery /#itro_popup/",
        "phimplay.com#$#abort-on-property-write amf",
        "@@/quangcao/*$domain=hanoicdc.gov.vn",
        "||us.operonsablate.com^",
        "phimsexkhongche.club#$#abort-on-property-write customDB",
        "sex333.net#$#abort-current-inline-script Math",
        "||kenhvn2.com/js/v3$script",
        "javhd.today###closeButton",
        "luotphim.fun,luotphim.cc,luotphim.vip,luotphimzz.com,webphim.cc#@##fakeplayer",
        "@@||luotphim*/wp-content/uploads/$media",
        "##.adsphim-popup-center",
        "chill.popv.js$script",
        "chillnew.popv.js$script",
        "jav1s.net#$#abort-current-inline-script Math",
        "||sqacbhlngoxw.com^$script,third-party",
        "||ygnnqkxheq.com^$script,third-party",
        "dood.sh#$#abort-on-property-write DoodPop",
        "/ads/ad.js",
        "vn.phimsexsub.info##.clipxx",
        "vn.phimsexsub.info#$#abort-on-property-read pss.add",
        "hentaiz.top##.position-fixed",
        "||cresfpho2ntesepapillo3.com^$script",
        "||opencoccoc.com^$script",
        "mephimtrungz.com##[id^=sponsor-]",
        "||auspiceguidance.com^$script",
        "javhdporn.net###player_3x2_container_inner",
        "adserver.*ads.*",
        "||ip.shoversnobs.com^$script",
        "||yf.seitsinlike.com^$script",
        "||yulunanews.name^$script",
        "||zf.indeftroppo.com^",
        "||ephimmoi.net/wp-content/cache/wpfc-minified/2darkmog/6lbb1.js",
        "||ephimmoi.net/wp-content/cache/wpfc-minified/jnnvv5cn/6lbb0.js",
        "xemphimvn2.com,fullfim.net,xemphimz.net,aphimmoi.org,vn2.vn,fullphim.co,phimzhay.net,vn2phim.net,vn2phim.com,motfim.net,phimvn2.net,phimvn2.org,aphimmoi.net,aphimmoi.com,xemphimvn2.net,phim.vn2.vn#$#abort-on-property-read window.google_ad_status",
        "finance.vietstock.vn###allsite_anchor_bottom",
        "sosanhgia.com##.grid-ads",
        "||fr.neebourinthrow.com^$script",
        "||je.zizzlescomplex.com^$script",
        "phim18hd.com##.top-pc-banner",
        "dualeotruyen.tv###popup_banner_beta",
        "sexdiary.xyz#$#abort-on-property-read document.body",
        "||sinmgaepu3or9a61w.com^",
        "||fofyphugi.com^",
        "||chitaglipti.pro^$script",
        "||ta3nfsordd.com^$script",
        "xnxxz.net#$#abort-current-inline-script Math /atob|break/",
        "@@/pubads.*vtvcab.vn*",
        "@@||search.spotxchange.com*vtvcab.vn*",
        "||accounts.google.com##audio",
        '||*.google.com*/search##video[src*="encrypted-vtbn0.gstatic.com/video?"]',
        "||coccoc.com/search/about-us##video",
        "||*.coccoc.com/about-us##video",
        "||*quizz.coccoc.com##video",
        "||youtube.com##.miniplayer video",
        "||onetouch.mic.gov.vn##video",
        "||onetouch.mic.gov.vn##iframe",
        "||mydns.playpdc.xyz/video/",
        "||wizardunstablecommissioner.com/watchnew",
        '||*##iframe[src*="/recaptcha/api"]',
        '||*##iframe[src*="funcaptcha.com"]',
        '||*##iframe[src*="octocaptcha.com"]',
        '||youtube.com##iframe[src^="/live_chat"]',
        '||*vnexpress.net##iframe[src*="vnexpress.net/authen"]',
        '||*##iframe[src*="/authen/users/login"]',
        '||vtc.vn##iframe[src^="javascript:"]',
      ],
      i = [
        "||mail.google.com/",
        "||docs.google.com/",
        "||dropbox.com/",
        "||meme.vn/",
      ],
      o = [
        "||soundcloud.com##.playControls",
        "||zingmp3.vn##.video-minimize video",
        "||musicbed.com##img",
        "||oxfordlearnersdictionaries.com##.audio_play_button",
        '||artgrid.io##video[id^="video_"],#main-clipvideo_9999999999999_html5_api',
        '||coccoc.com/about-us##[id^="youtube-player-"]',
        "||instagram.com/explore##video",
        "||**##audio",
      ],
      a = [
        "||fptplay.net/##.hls-playback embed",
        "||pubvn.tv/bar/threads/##iframe#player",
        "||www.24h.com.vn/###player_video_kieu_moi iframe",
        '||facebook.com/##iframe[src^="https://attachment.fbsbx.com/external_iframe.php"]',
        "||coccoc.com/search##video[data-savior-token]",
        "@@www.blogger.com/video.g?*",
        "@@www.youtube.com/embed/*",
        "@@www.dmm.co.jp/service/*",
        /i1-kinhdoanh.vnecdn.net\/.+\/.+?\.gif/,
        "@@xh.video/*",
      ],
      s = [
        /video\.fhan.*?\.fna\.fbcdn\.net/,
        "/.[\\s\\S]{0,100}dailymotion.*\\/frag\\(\\d+\\)\\//",
        "||fb88.mp4",
        /https?:\/\/(!=redirector)\.googlevideo\.com\/videoplayback?.+&source=youtube.+/,
        "||vimeocdn.com/",
        "||clip.vn/",
        "||subs.xemphimonlines.com/",
        "||dmxleo.dailymotion.com/",
        "||dmcdn.net/",
        "||nhacrap.tv/",
        "||nixcdn.com/",
        "||zdn.vn/",
        "/fptplay\\.net\\/.*?seg\\d*-frag\\d*/",
        "/hlscache\\.fptplay\\.net(?:\\.vn)?\\//",
        "/49ef4358-e34d-484f-a18e-495cd9fe3817",
        "/75247339-7897-437d-9627-55b1a1528700",
        "http://www.phimmoi.net/resource/video/blank.mp4",
        "http://xemvtv.net/kaka/blank2.mp4",
        /https?:\/\/.+\.gvt1\.com\/videoplayback\/.+/,
        /https?:\/\/.+\.2mdn\.net\/videoplayback\/.+/,
        /\.[\s\S]{0,1000}RomanoHangoutNew15s7\.mp4$/,
        /blank_video/,
        /media\/beacon\.webm/,
        /https:\/\/cdn2?\.cache\.vn\/skin\/.+\.mp4/,
        "||mail.google.com/",
        "||docs.google.com/",
        "||drive.google.com/",
        "||dropbox.com/",
        "||fptplay.net/livetv",
        "||twitch.tv",
        "@@||twitch.tv/videos/",
        "||talktv.vn",
        "@@||talktv.vn/video/",
        "garena.live",
        "www.dkn.tv",
        "xemphimso.com",
      ],
      l = [
        /^https:\/\/(www\.)?tiktok.com\/@[^/]+$/,
        /^https:\/\/(www\.)?instagram.com\//i,
        /^https:\/\/(www\.)?lazi.vn\//i,
      ],
      c = [/docs\.google\.com/, /.+\.sharepoint\.com\/:p:\//],
      u = [
        /(www\.)?youtube\.com/,
        /(www\.)?hayko\.tv/,
        /(www\.)?boyfriendtv\.com/,
        /(www\.)?kuaishou\.com/,
      ];
    t.a = new (class {
      constructor() {
        (this.extra = {}),
          this._loadRules(r),
          this._loadRules(i, "pip"),
          this._loadRules(a, "pip-allowfullscreen-false"),
          this._loadRules(s, "requests"),
          this._loadRules(o, "hide-widget"),
          this._loadRegex(l, "disallow-pip"),
          this._loadRegex(c, "disable_savior_sites");
      }
      check(e, t) {
        const n = t ? this.extra[t] : this.rules;
        return this._testRules(e, n);
      }
      checkWhite(e, t) {
        const n = t ? this.extra[t] : this.rules;
        return this._testWhiteList(e, n);
      }
      checkRegex(e, t) {
        const n = this.extra[t];
        return (
          !(!n || !Array.isArray(n) || "string" != typeof e) &&
          n.some((t) => t instanceof RegExp && t.test(e))
        );
      }
      shouldWidgetAttachToParentNode(e) {
        return u.some((t) => t.test(e));
      }
      shouldDisableSavior(e) {
        return c.some((t) => t.test(e));
      }
      _loadRules(e, t) {
        const n = this._parseFilters(e);
        t ? (this.extra[t] = n) : (this.rules = n);
      }
      _loadRegex(e, t) {
        Array.isArray(e) && t && (this.extra[t] = e);
      }
      _testRules(e, t) {
        if (!t) return !1;
        let n;
        if (
          ("string" == typeof e
            ? (n = e)
            : (e.src || e.href) && (n = e.src || e.href),
          n)
        ) {
          let e = t.wlUrls.length;
          for (let r = 0; r < e; r++) if (t.wlUrls[r].test(n)) return !1;
          e = t.blUrls.length;
          for (let r = 0; r < e; r++) if (t.blUrls[r].test(n)) return !0;
        }
        if (!(e instanceof EventTarget)) return !1;
        const r = e.ownerDocument.location.href;
        for (let n = 0; n < t.wlCosmetics.length; n++) {
          const i = t.wlCosmetics[n];
          if (
            (("~" === i.domain[0] && r.match(i.domain.substr(1))) ||
              r.match(i.domain)) &&
            i.selectors.some(e.matches.bind(e))
          )
            return !1;
        }
        for (let n = 0; n < t.blCosmetics.length; n++) {
          const i = t.blCosmetics[n];
          if (
            (("~" === i.domain[0] && r.match(i.domain.substr(1))) ||
              r.match(i.domain)) &&
            i.selectors.some(e.matches.bind(e))
          )
            return !0;
        }
        return !1;
      }
      _testWhiteList(e, t) {
        if (!t) return !1;
        let n;
        if (
          ("string" == typeof e
            ? (n = e)
            : (e.src || e.href) && (n = e.src || e.href),
          n)
        ) {
          const e = t.wlUrls.length;
          for (let r = 0; r < e; r++) if (t.wlUrls[r].test(n)) return !0;
        }
        if (!(e instanceof EventTarget)) return !1;
        const r = e.ownerDocument.location.href;
        for (let n = 0; n < t.wlCosmetics.length; n++) {
          const i = t.wlCosmetics[n];
          if (
            (("~" === i.domain[0] && r.match(i.domain.substr(1))) ||
              r.match(i.domain)) &&
            i.selectors.some(e.matches.bind(e))
          )
            return !0;
        }
        return !1;
      }
      _convertWildcard(e) {
        if (/^\/.*?\/$/.test(e) && /[[\\(){}]/.test(e))
          return new RegExp(e.replace(/^\/|\/$/g, ""), "i");
        const t = e
          .replace(/[.?+\\[{()]/g, (e) => "\\" + e)
          .replace(/\^/g, "[\\w\\d_.%-]")
          .replace(/\*/g, ".*")
          .replace(/\|\|/g, "^\\w+://([\\d\\w-]+\\.)*")
          .replace(/\|/g, "$");
        return new RegExp(t, "i");
      }
      _getParsingRegex() {
        if (this.regex) return this.regex;
        return (
          (this.regex = new RegExp(
            "^\\s*(@@)?(/(?:[^/]|\\\\/)+/|(?:[^#$]+|#(?!#))+)?(?:(#@#|##)([^$]+))?(?:\\$(.*))?\\s*$",
            "i"
          )),
          this.regex
        );
      }
      _parseFilters(e) {
        let t = e;
        "string" == typeof t && (t = t.split(/[\r\n]+/));
        const n = { blUrls: [], wlUrls: [], blCosmetics: [], wlCosmetics: [] },
          r = { "": { bl: [], wl: [] } };
        for (let e = 0; e < t.length; e++) {
          const i = t[e];
          if (/^\s*!|^\s*\[.*?\]\s*$/.test(i)) continue;
          const o = this._getParsingRegex().exec(i);
          if (!o) {
            console.warn("AdFilter: could not parse adblock rule: " + i);
            continue;
          }
          const a = {
            whitelist: o[1],
            url: o[2],
            separator: o[3],
            selector: o[4],
            comment: o[5],
          };
          if (a.separator) {
            const e = a.url ? a.url.split(/,/) : [""];
            let t;
            for (let n = 0; n < e.length; n++)
              (t = e[n]),
                t in r || (r[t] = { bl: [], wl: [] }),
                (t = r[t]),
                "#@#" === a.separator
                  ? (a.whitelist || r[""].wl.push(a.selector),
                    t[a.whitelist ? "bl" : "wl"].push(a.selector))
                  : t[a.whitelist ? "wl" : "bl"].push(a.selector);
          } else {
            if (!a.url) continue;
            const e = "@@" === a.whitelist ? n.wlUrls : n.blUrls,
              t = this._convertWildcard(a.url);
            e.push(t);
          }
        }
        const i = Object.keys(r);
        for (let e = 0; e < i.length; e++) {
          const t = i[e],
            o = r[t];
          o.bl.length &&
            n.blCosmetics.push({
              domain: this._convertWildcard(t),
              selectors: r[t].bl,
            }),
            o.wl.length &&
              n.wlCosmetics.push({
                domain: this._convertWildcard(t),
                selectors: r[t].wl,
              });
        }
        return n;
      }
    })();
  },
  function (e, t) {
    var n,
      r,
      i = (e.exports = {});
    function o() {
      throw new Error("setTimeout has not been defined");
    }
    function a() {
      throw new Error("clearTimeout has not been defined");
    }
    function s(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === o || !n) && setTimeout)
        return (n = setTimeout), setTimeout(e, 0);
      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : o;
      } catch (e) {
        n = o;
      }
      try {
        r = "function" == typeof clearTimeout ? clearTimeout : a;
      } catch (e) {
        r = a;
      }
    })();
    var l,
      c = [],
      u = !1,
      d = -1;
    function h() {
      u &&
        l &&
        ((u = !1), l.length ? (c = l.concat(c)) : (d = -1), c.length && p());
    }
    function p() {
      if (!u) {
        var e = s(h);
        u = !0;
        for (var t = c.length; t; ) {
          for (l = c, c = []; ++d < t; ) l && l[d].run();
          (d = -1), (t = c.length);
        }
        (l = null),
          (u = !1),
          (function (e) {
            if (r === clearTimeout) return clearTimeout(e);
            if ((r === a || !r) && clearTimeout)
              return (r = clearTimeout), clearTimeout(e);
            try {
              r(e);
            } catch (t) {
              try {
                return r.call(null, e);
              } catch (t) {
                return r.call(this, e);
              }
            }
          })(e);
      }
    }
    function f(e, t) {
      (this.fun = e), (this.array = t);
    }
    function m() {}
    (i.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      c.push(new f(e, t)), 1 !== c.length || u || s(p);
    }),
      (f.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (i.title = "browser"),
      (i.browser = !0),
      (i.env = {}),
      (i.argv = []),
      (i.version = ""),
      (i.versions = {}),
      (i.on = m),
      (i.addListener = m),
      (i.once = m),
      (i.off = m),
      (i.removeListener = m),
      (i.removeAllListeners = m),
      (i.emit = m),
      (i.prependListener = m),
      (i.prependOnceListener = m),
      (i.listeners = function (e) {
        return [];
      }),
      (i.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (i.cwd = function () {
        return "/";
      }),
      (i.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (i.umask = function () {
        return 0;
      });
  },
  ,
  function (e, t) {
    "function" == typeof Object.create
      ? (e.exports = function (e, t) {
          t &&
            ((e.super_ = t),
            (e.prototype = Object.create(t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })));
        })
      : (e.exports = function (e, t) {
          if (t) {
            e.super_ = t;
            var n = function () {};
            (n.prototype = t.prototype),
              (e.prototype = new n()),
              (e.prototype.constructor = e);
          }
        });
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <http://feross.org>
       * @license  MIT
       */
      var r = n(59),
        i = n(60),
        o = n(48);
      function a() {
        return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }
      function s(e, t) {
        if (a() < t) throw new RangeError("Invalid typed array length");
        return (
          l.TYPED_ARRAY_SUPPORT
            ? ((e = new Uint8Array(t)).__proto__ = l.prototype)
            : (null === e && (e = new l(t)), (e.length = t)),
          e
        );
      }
      function l(e, t, n) {
        if (!(l.TYPED_ARRAY_SUPPORT || this instanceof l))
          return new l(e, t, n);
        if ("number" == typeof e) {
          if ("string" == typeof t)
            throw new Error(
              "If encoding is specified then the first argument must be a string"
            );
          return d(this, e);
        }
        return c(this, e, t, n);
      }
      function c(e, t, n, r) {
        if ("number" == typeof t)
          throw new TypeError('"value" argument must not be a number');
        return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
          ? (function (e, t, n, r) {
              if ((t.byteLength, n < 0 || t.byteLength < n))
                throw new RangeError("'offset' is out of bounds");
              if (t.byteLength < n + (r || 0))
                throw new RangeError("'length' is out of bounds");
              t =
                void 0 === n && void 0 === r
                  ? new Uint8Array(t)
                  : void 0 === r
                  ? new Uint8Array(t, n)
                  : new Uint8Array(t, n, r);
              l.TYPED_ARRAY_SUPPORT
                ? ((e = t).__proto__ = l.prototype)
                : (e = h(e, t));
              return e;
            })(e, t, n, r)
          : "string" == typeof t
          ? (function (e, t, n) {
              ("string" == typeof n && "" !== n) || (n = "utf8");
              if (!l.isEncoding(n))
                throw new TypeError(
                  '"encoding" must be a valid string encoding'
                );
              var r = 0 | f(t, n),
                i = (e = s(e, r)).write(t, n);
              i !== r && (e = e.slice(0, i));
              return e;
            })(e, t, n)
          : (function (e, t) {
              if (l.isBuffer(t)) {
                var n = 0 | p(t.length);
                return 0 === (e = s(e, n)).length || t.copy(e, 0, 0, n), e;
              }
              if (t) {
                if (
                  ("undefined" != typeof ArrayBuffer &&
                    t.buffer instanceof ArrayBuffer) ||
                  "length" in t
                )
                  return "number" != typeof t.length || (r = t.length) != r
                    ? s(e, 0)
                    : h(e, t);
                if ("Buffer" === t.type && o(t.data)) return h(e, t.data);
              }
              var r;
              throw new TypeError(
                "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
              );
            })(e, t);
      }
      function u(e) {
        if ("number" != typeof e)
          throw new TypeError('"size" argument must be a number');
        if (e < 0) throw new RangeError('"size" argument must not be negative');
      }
      function d(e, t) {
        if ((u(t), (e = s(e, t < 0 ? 0 : 0 | p(t))), !l.TYPED_ARRAY_SUPPORT))
          for (var n = 0; n < t; ++n) e[n] = 0;
        return e;
      }
      function h(e, t) {
        var n = t.length < 0 ? 0 : 0 | p(t.length);
        e = s(e, n);
        for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
        return e;
      }
      function p(e) {
        if (e >= a())
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              a().toString(16) +
              " bytes"
          );
        return 0 | e;
      }
      function f(e, t) {
        if (l.isBuffer(e)) return e.length;
        if (
          "undefined" != typeof ArrayBuffer &&
          "function" == typeof ArrayBuffer.isView &&
          (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
        )
          return e.byteLength;
        "string" != typeof e && (e = "" + e);
        var n = e.length;
        if (0 === n) return 0;
        for (var r = !1; ; )
          switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return n;
            case "utf8":
            case "utf-8":
            case void 0:
              return B(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * n;
            case "hex":
              return n >>> 1;
            case "base64":
              return H(e).length;
            default:
              if (r) return B(e).length;
              (t = ("" + t).toLowerCase()), (r = !0);
          }
      }
      function m(e, t, n) {
        var r = !1;
        if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return "";
        if (((void 0 === n || n > this.length) && (n = this.length), n <= 0))
          return "";
        if ((n >>>= 0) <= (t >>>= 0)) return "";
        for (e || (e = "utf8"); ; )
          switch (e) {
            case "hex":
              return O(this, t, n);
            case "utf8":
            case "utf-8":
              return S(this, t, n);
            case "ascii":
              return L(this, t, n);
            case "latin1":
            case "binary":
              return R(this, t, n);
            case "base64":
              return x(this, t, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return A(this, t, n);
            default:
              if (r) throw new TypeError("Unknown encoding: " + e);
              (e = (e + "").toLowerCase()), (r = !0);
          }
      }
      function g(e, t, n) {
        var r = e[t];
        (e[t] = e[n]), (e[n] = r);
      }
      function v(e, t, n, r, i) {
        if (0 === e.length) return -1;
        if (
          ("string" == typeof n
            ? ((r = n), (n = 0))
            : n > 2147483647
            ? (n = 2147483647)
            : n < -2147483648 && (n = -2147483648),
          (n = +n),
          isNaN(n) && (n = i ? 0 : e.length - 1),
          n < 0 && (n = e.length + n),
          n >= e.length)
        ) {
          if (i) return -1;
          n = e.length - 1;
        } else if (n < 0) {
          if (!i) return -1;
          n = 0;
        }
        if (("string" == typeof t && (t = l.from(t, r)), l.isBuffer(t)))
          return 0 === t.length ? -1 : b(e, t, n, r, i);
        if ("number" == typeof t)
          return (
            (t &= 255),
            l.TYPED_ARRAY_SUPPORT &&
            "function" == typeof Uint8Array.prototype.indexOf
              ? i
                ? Uint8Array.prototype.indexOf.call(e, t, n)
                : Uint8Array.prototype.lastIndexOf.call(e, t, n)
              : b(e, [t], n, r, i)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function b(e, t, n, r, i) {
        var o,
          a = 1,
          s = e.length,
          l = t.length;
        if (
          void 0 !== r &&
          ("ucs2" === (r = String(r).toLowerCase()) ||
            "ucs-2" === r ||
            "utf16le" === r ||
            "utf-16le" === r)
        ) {
          if (e.length < 2 || t.length < 2) return -1;
          (a = 2), (s /= 2), (l /= 2), (n /= 2);
        }
        function c(e, t) {
          return 1 === a ? e[t] : e.readUInt16BE(t * a);
        }
        if (i) {
          var u = -1;
          for (o = n; o < s; o++)
            if (c(e, o) === c(t, -1 === u ? 0 : o - u)) {
              if ((-1 === u && (u = o), o - u + 1 === l)) return u * a;
            } else -1 !== u && (o -= o - u), (u = -1);
        } else
          for (n + l > s && (n = s - l), o = n; o >= 0; o--) {
            for (var d = !0, h = 0; h < l; h++)
              if (c(e, o + h) !== c(t, h)) {
                d = !1;
                break;
              }
            if (d) return o;
          }
        return -1;
      }
      function y(e, t, n, r) {
        n = Number(n) || 0;
        var i = e.length - n;
        r ? (r = Number(r)) > i && (r = i) : (r = i);
        var o = t.length;
        if (o % 2 != 0) throw new TypeError("Invalid hex string");
        r > o / 2 && (r = o / 2);
        for (var a = 0; a < r; ++a) {
          var s = parseInt(t.substr(2 * a, 2), 16);
          if (isNaN(s)) return a;
          e[n + a] = s;
        }
        return a;
      }
      function _(e, t, n, r) {
        return V(B(t, e.length - n), e, n, r);
      }
      function w(e, t, n, r) {
        return V(
          (function (e) {
            for (var t = [], n = 0; n < e.length; ++n)
              t.push(255 & e.charCodeAt(n));
            return t;
          })(t),
          e,
          n,
          r
        );
      }
      function E(e, t, n, r) {
        return w(e, t, n, r);
      }
      function T(e, t, n, r) {
        return V(H(t), e, n, r);
      }
      function C(e, t, n, r) {
        return V(
          (function (e, t) {
            for (
              var n, r, i, o = [], a = 0;
              a < e.length && !((t -= 2) < 0);
              ++a
            )
              (n = e.charCodeAt(a)),
                (r = n >> 8),
                (i = n % 256),
                o.push(i),
                o.push(r);
            return o;
          })(t, e.length - n),
          e,
          n,
          r
        );
      }
      function x(e, t, n) {
        return 0 === t && n === e.length
          ? r.fromByteArray(e)
          : r.fromByteArray(e.slice(t, n));
      }
      function S(e, t, n) {
        n = Math.min(e.length, n);
        for (var r = [], i = t; i < n; ) {
          var o,
            a,
            s,
            l,
            c = e[i],
            u = null,
            d = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
          if (i + d <= n)
            switch (d) {
              case 1:
                c < 128 && (u = c);
                break;
              case 2:
                128 == (192 & (o = e[i + 1])) &&
                  (l = ((31 & c) << 6) | (63 & o)) > 127 &&
                  (u = l);
                break;
              case 3:
                (o = e[i + 1]),
                  (a = e[i + 2]),
                  128 == (192 & o) &&
                    128 == (192 & a) &&
                    (l = ((15 & c) << 12) | ((63 & o) << 6) | (63 & a)) >
                      2047 &&
                    (l < 55296 || l > 57343) &&
                    (u = l);
                break;
              case 4:
                (o = e[i + 1]),
                  (a = e[i + 2]),
                  (s = e[i + 3]),
                  128 == (192 & o) &&
                    128 == (192 & a) &&
                    128 == (192 & s) &&
                    (l =
                      ((15 & c) << 18) |
                      ((63 & o) << 12) |
                      ((63 & a) << 6) |
                      (63 & s)) > 65535 &&
                    l < 1114112 &&
                    (u = l);
            }
          null === u
            ? ((u = 65533), (d = 1))
            : u > 65535 &&
              ((u -= 65536),
              r.push(((u >>> 10) & 1023) | 55296),
              (u = 56320 | (1023 & u))),
            r.push(u),
            (i += d);
        }
        return (function (e) {
          var t = e.length;
          if (t <= 4096) return String.fromCharCode.apply(String, e);
          var n = "",
            r = 0;
          for (; r < t; )
            n += String.fromCharCode.apply(String, e.slice(r, (r += 4096)));
          return n;
        })(r);
      }
      (t.Buffer = l),
        (t.SlowBuffer = function (e) {
          +e != e && (e = 0);
          return l.alloc(+e);
        }),
        (t.INSPECT_MAX_BYTES = 50),
        (l.TYPED_ARRAY_SUPPORT =
          void 0 !== e.TYPED_ARRAY_SUPPORT
            ? e.TYPED_ARRAY_SUPPORT
            : (function () {
                try {
                  var e = new Uint8Array(1);
                  return (
                    (e.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function () {
                        return 42;
                      },
                    }),
                    42 === e.foo() &&
                      "function" == typeof e.subarray &&
                      0 === e.subarray(1, 1).byteLength
                  );
                } catch (e) {
                  return !1;
                }
              })()),
        (t.kMaxLength = a()),
        (l.poolSize = 8192),
        (l._augment = function (e) {
          return (e.__proto__ = l.prototype), e;
        }),
        (l.from = function (e, t, n) {
          return c(null, e, t, n);
        }),
        l.TYPED_ARRAY_SUPPORT &&
          ((l.prototype.__proto__ = Uint8Array.prototype),
          (l.__proto__ = Uint8Array),
          "undefined" != typeof Symbol &&
            Symbol.species &&
            l[Symbol.species] === l &&
            Object.defineProperty(l, Symbol.species, {
              value: null,
              configurable: !0,
            })),
        (l.alloc = function (e, t, n) {
          return (function (e, t, n, r) {
            return (
              u(t),
              t <= 0
                ? s(e, t)
                : void 0 !== n
                ? "string" == typeof r
                  ? s(e, t).fill(n, r)
                  : s(e, t).fill(n)
                : s(e, t)
            );
          })(null, e, t, n);
        }),
        (l.allocUnsafe = function (e) {
          return d(null, e);
        }),
        (l.allocUnsafeSlow = function (e) {
          return d(null, e);
        }),
        (l.isBuffer = function (e) {
          return !(null == e || !e._isBuffer);
        }),
        (l.compare = function (e, t) {
          if (!l.isBuffer(e) || !l.isBuffer(t))
            throw new TypeError("Arguments must be Buffers");
          if (e === t) return 0;
          for (
            var n = e.length, r = t.length, i = 0, o = Math.min(n, r);
            i < o;
            ++i
          )
            if (e[i] !== t[i]) {
              (n = e[i]), (r = t[i]);
              break;
            }
          return n < r ? -1 : r < n ? 1 : 0;
        }),
        (l.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (l.concat = function (e, t) {
          if (!o(e))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return l.alloc(0);
          var n;
          if (void 0 === t)
            for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
          var r = l.allocUnsafe(t),
            i = 0;
          for (n = 0; n < e.length; ++n) {
            var a = e[n];
            if (!l.isBuffer(a))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            a.copy(r, i), (i += a.length);
          }
          return r;
        }),
        (l.byteLength = f),
        (l.prototype._isBuffer = !0),
        (l.prototype.swap16 = function () {
          var e = this.length;
          if (e % 2 != 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var t = 0; t < e; t += 2) g(this, t, t + 1);
          return this;
        }),
        (l.prototype.swap32 = function () {
          var e = this.length;
          if (e % 4 != 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var t = 0; t < e; t += 4)
            g(this, t, t + 3), g(this, t + 1, t + 2);
          return this;
        }),
        (l.prototype.swap64 = function () {
          var e = this.length;
          if (e % 8 != 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var t = 0; t < e; t += 8)
            g(this, t, t + 7),
              g(this, t + 1, t + 6),
              g(this, t + 2, t + 5),
              g(this, t + 3, t + 4);
          return this;
        }),
        (l.prototype.toString = function () {
          var e = 0 | this.length;
          return 0 === e
            ? ""
            : 0 === arguments.length
            ? S(this, 0, e)
            : m.apply(this, arguments);
        }),
        (l.prototype.equals = function (e) {
          if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          return this === e || 0 === l.compare(this, e);
        }),
        (l.prototype.inspect = function () {
          var e = "",
            n = t.INSPECT_MAX_BYTES;
          return (
            this.length > 0 &&
              ((e = this.toString("hex", 0, n).match(/.{2}/g).join(" ")),
              this.length > n && (e += " ... ")),
            "<Buffer " + e + ">"
          );
        }),
        (l.prototype.compare = function (e, t, n, r, i) {
          if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          if (
            (void 0 === t && (t = 0),
            void 0 === n && (n = e ? e.length : 0),
            void 0 === r && (r = 0),
            void 0 === i && (i = this.length),
            t < 0 || n > e.length || r < 0 || i > this.length)
          )
            throw new RangeError("out of range index");
          if (r >= i && t >= n) return 0;
          if (r >= i) return -1;
          if (t >= n) return 1;
          if (this === e) return 0;
          for (
            var o = (i >>>= 0) - (r >>>= 0),
              a = (n >>>= 0) - (t >>>= 0),
              s = Math.min(o, a),
              c = this.slice(r, i),
              u = e.slice(t, n),
              d = 0;
            d < s;
            ++d
          )
            if (c[d] !== u[d]) {
              (o = c[d]), (a = u[d]);
              break;
            }
          return o < a ? -1 : a < o ? 1 : 0;
        }),
        (l.prototype.includes = function (e, t, n) {
          return -1 !== this.indexOf(e, t, n);
        }),
        (l.prototype.indexOf = function (e, t, n) {
          return v(this, e, t, n, !0);
        }),
        (l.prototype.lastIndexOf = function (e, t, n) {
          return v(this, e, t, n, !1);
        }),
        (l.prototype.write = function (e, t, n, r) {
          if (void 0 === t) (r = "utf8"), (n = this.length), (t = 0);
          else if (void 0 === n && "string" == typeof t)
            (r = t), (n = this.length), (t = 0);
          else {
            if (!isFinite(t))
              throw new Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported"
              );
            (t |= 0),
              isFinite(n)
                ? ((n |= 0), void 0 === r && (r = "utf8"))
                : ((r = n), (n = void 0));
          }
          var i = this.length - t;
          if (
            ((void 0 === n || n > i) && (n = i),
            (e.length > 0 && (n < 0 || t < 0)) || t > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          r || (r = "utf8");
          for (var o = !1; ; )
            switch (r) {
              case "hex":
                return y(this, e, t, n);
              case "utf8":
              case "utf-8":
                return _(this, e, t, n);
              case "ascii":
                return w(this, e, t, n);
              case "latin1":
              case "binary":
                return E(this, e, t, n);
              case "base64":
                return T(this, e, t, n);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return C(this, e, t, n);
              default:
                if (o) throw new TypeError("Unknown encoding: " + r);
                (r = ("" + r).toLowerCase()), (o = !0);
            }
        }),
        (l.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        });
      function L(e, t, n) {
        var r = "";
        n = Math.min(e.length, n);
        for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
        return r;
      }
      function R(e, t, n) {
        var r = "";
        n = Math.min(e.length, n);
        for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
        return r;
      }
      function O(e, t, n) {
        var r = e.length;
        (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
        for (var i = "", o = t; o < n; ++o) i += j(e[o]);
        return i;
      }
      function A(e, t, n) {
        for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2)
          i += String.fromCharCode(r[o] + 256 * r[o + 1]);
        return i;
      }
      function k(e, t, n) {
        if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
        if (e + t > n)
          throw new RangeError("Trying to access beyond buffer length");
      }
      function I(e, t, n, r, i, o) {
        if (!l.isBuffer(e))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > i || t < o)
          throw new RangeError('"value" argument is out of bounds');
        if (n + r > e.length) throw new RangeError("Index out of range");
      }
      function D(e, t, n, r) {
        t < 0 && (t = 65535 + t + 1);
        for (var i = 0, o = Math.min(e.length - n, 2); i < o; ++i)
          e[n + i] =
            (t & (255 << (8 * (r ? i : 1 - i)))) >>> (8 * (r ? i : 1 - i));
      }
      function P(e, t, n, r) {
        t < 0 && (t = 4294967295 + t + 1);
        for (var i = 0, o = Math.min(e.length - n, 4); i < o; ++i)
          e[n + i] = (t >>> (8 * (r ? i : 3 - i))) & 255;
      }
      function N(e, t, n, r, i, o) {
        if (n + r > e.length) throw new RangeError("Index out of range");
        if (n < 0) throw new RangeError("Index out of range");
      }
      function M(e, t, n, r, o) {
        return o || N(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4;
      }
      function U(e, t, n, r, o) {
        return o || N(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8;
      }
      (l.prototype.slice = function (e, t) {
        var n,
          r = this.length;
        if (
          ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
          (t = void 0 === t ? r : ~~t) < 0
            ? (t += r) < 0 && (t = 0)
            : t > r && (t = r),
          t < e && (t = e),
          l.TYPED_ARRAY_SUPPORT)
        )
          (n = this.subarray(e, t)).__proto__ = l.prototype;
        else {
          var i = t - e;
          n = new l(i, void 0);
          for (var o = 0; o < i; ++o) n[o] = this[o + e];
        }
        return n;
      }),
        (l.prototype.readUIntLE = function (e, t, n) {
          (e |= 0), (t |= 0), n || k(e, t, this.length);
          for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
            r += this[e + o] * i;
          return r;
        }),
        (l.prototype.readUIntBE = function (e, t, n) {
          (e |= 0), (t |= 0), n || k(e, t, this.length);
          for (var r = this[e + --t], i = 1; t > 0 && (i *= 256); )
            r += this[e + --t] * i;
          return r;
        }),
        (l.prototype.readUInt8 = function (e, t) {
          return t || k(e, 1, this.length), this[e];
        }),
        (l.prototype.readUInt16LE = function (e, t) {
          return t || k(e, 2, this.length), this[e] | (this[e + 1] << 8);
        }),
        (l.prototype.readUInt16BE = function (e, t) {
          return t || k(e, 2, this.length), (this[e] << 8) | this[e + 1];
        }),
        (l.prototype.readUInt32LE = function (e, t) {
          return (
            t || k(e, 4, this.length),
            (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
              16777216 * this[e + 3]
          );
        }),
        (l.prototype.readUInt32BE = function (e, t) {
          return (
            t || k(e, 4, this.length),
            16777216 * this[e] +
              ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
          );
        }),
        (l.prototype.readIntLE = function (e, t, n) {
          (e |= 0), (t |= 0), n || k(e, t, this.length);
          for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
            r += this[e + o] * i;
          return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r;
        }),
        (l.prototype.readIntBE = function (e, t, n) {
          (e |= 0), (t |= 0), n || k(e, t, this.length);
          for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256); )
            o += this[e + --r] * i;
          return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o;
        }),
        (l.prototype.readInt8 = function (e, t) {
          return (
            t || k(e, 1, this.length),
            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
          );
        }),
        (l.prototype.readInt16LE = function (e, t) {
          t || k(e, 2, this.length);
          var n = this[e] | (this[e + 1] << 8);
          return 32768 & n ? 4294901760 | n : n;
        }),
        (l.prototype.readInt16BE = function (e, t) {
          t || k(e, 2, this.length);
          var n = this[e + 1] | (this[e] << 8);
          return 32768 & n ? 4294901760 | n : n;
        }),
        (l.prototype.readInt32LE = function (e, t) {
          return (
            t || k(e, 4, this.length),
            this[e] |
              (this[e + 1] << 8) |
              (this[e + 2] << 16) |
              (this[e + 3] << 24)
          );
        }),
        (l.prototype.readInt32BE = function (e, t) {
          return (
            t || k(e, 4, this.length),
            (this[e] << 24) |
              (this[e + 1] << 16) |
              (this[e + 2] << 8) |
              this[e + 3]
          );
        }),
        (l.prototype.readFloatLE = function (e, t) {
          return t || k(e, 4, this.length), i.read(this, e, !0, 23, 4);
        }),
        (l.prototype.readFloatBE = function (e, t) {
          return t || k(e, 4, this.length), i.read(this, e, !1, 23, 4);
        }),
        (l.prototype.readDoubleLE = function (e, t) {
          return t || k(e, 8, this.length), i.read(this, e, !0, 52, 8);
        }),
        (l.prototype.readDoubleBE = function (e, t) {
          return t || k(e, 8, this.length), i.read(this, e, !1, 52, 8);
        }),
        (l.prototype.writeUIntLE = function (e, t, n, r) {
          ((e = +e), (t |= 0), (n |= 0), r) ||
            I(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
          var i = 1,
            o = 0;
          for (this[t] = 255 & e; ++o < n && (i *= 256); )
            this[t + o] = (e / i) & 255;
          return t + n;
        }),
        (l.prototype.writeUIntBE = function (e, t, n, r) {
          ((e = +e), (t |= 0), (n |= 0), r) ||
            I(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
          var i = n - 1,
            o = 1;
          for (this[t + i] = 255 & e; --i >= 0 && (o *= 256); )
            this[t + i] = (e / o) & 255;
          return t + n;
        }),
        (l.prototype.writeUInt8 = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || I(this, e, t, 1, 255, 0),
            l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (l.prototype.writeUInt16LE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || I(this, e, t, 2, 65535, 0),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
              : D(this, e, t, !0),
            t + 2
          );
        }),
        (l.prototype.writeUInt16BE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || I(this, e, t, 2, 65535, 0),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
              : D(this, e, t, !1),
            t + 2
          );
        }),
        (l.prototype.writeUInt32LE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || I(this, e, t, 4, 4294967295, 0),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t + 3] = e >>> 24),
                (this[t + 2] = e >>> 16),
                (this[t + 1] = e >>> 8),
                (this[t] = 255 & e))
              : P(this, e, t, !0),
            t + 4
          );
        }),
        (l.prototype.writeUInt32BE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || I(this, e, t, 4, 4294967295, 0),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e))
              : P(this, e, t, !1),
            t + 4
          );
        }),
        (l.prototype.writeIntLE = function (e, t, n, r) {
          if (((e = +e), (t |= 0), !r)) {
            var i = Math.pow(2, 8 * n - 1);
            I(this, e, t, n, i - 1, -i);
          }
          var o = 0,
            a = 1,
            s = 0;
          for (this[t] = 255 & e; ++o < n && (a *= 256); )
            e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1),
              (this[t + o] = (((e / a) >> 0) - s) & 255);
          return t + n;
        }),
        (l.prototype.writeIntBE = function (e, t, n, r) {
          if (((e = +e), (t |= 0), !r)) {
            var i = Math.pow(2, 8 * n - 1);
            I(this, e, t, n, i - 1, -i);
          }
          var o = n - 1,
            a = 1,
            s = 0;
          for (this[t + o] = 255 & e; --o >= 0 && (a *= 256); )
            e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1),
              (this[t + o] = (((e / a) >> 0) - s) & 255);
          return t + n;
        }),
        (l.prototype.writeInt8 = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || I(this, e, t, 1, 127, -128),
            l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            e < 0 && (e = 255 + e + 1),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (l.prototype.writeInt16LE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || I(this, e, t, 2, 32767, -32768),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
              : D(this, e, t, !0),
            t + 2
          );
        }),
        (l.prototype.writeInt16BE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || I(this, e, t, 2, 32767, -32768),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
              : D(this, e, t, !1),
            t + 2
          );
        }),
        (l.prototype.writeInt32LE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || I(this, e, t, 4, 2147483647, -2147483648),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e),
                (this[t + 1] = e >>> 8),
                (this[t + 2] = e >>> 16),
                (this[t + 3] = e >>> 24))
              : P(this, e, t, !0),
            t + 4
          );
        }),
        (l.prototype.writeInt32BE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || I(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e))
              : P(this, e, t, !1),
            t + 4
          );
        }),
        (l.prototype.writeFloatLE = function (e, t, n) {
          return M(this, e, t, !0, n);
        }),
        (l.prototype.writeFloatBE = function (e, t, n) {
          return M(this, e, t, !1, n);
        }),
        (l.prototype.writeDoubleLE = function (e, t, n) {
          return U(this, e, t, !0, n);
        }),
        (l.prototype.writeDoubleBE = function (e, t, n) {
          return U(this, e, t, !1, n);
        }),
        (l.prototype.copy = function (e, t, n, r) {
          if (
            (n || (n = 0),
            r || 0 === r || (r = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            r > 0 && r < n && (r = n),
            r === n)
          )
            return 0;
          if (0 === e.length || 0 === this.length) return 0;
          if (t < 0) throw new RangeError("targetStart out of bounds");
          if (n < 0 || n >= this.length)
            throw new RangeError("sourceStart out of bounds");
          if (r < 0) throw new RangeError("sourceEnd out of bounds");
          r > this.length && (r = this.length),
            e.length - t < r - n && (r = e.length - t + n);
          var i,
            o = r - n;
          if (this === e && n < t && t < r)
            for (i = o - 1; i >= 0; --i) e[i + t] = this[i + n];
          else if (o < 1e3 || !l.TYPED_ARRAY_SUPPORT)
            for (i = 0; i < o; ++i) e[i + t] = this[i + n];
          else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
          return o;
        }),
        (l.prototype.fill = function (e, t, n, r) {
          if ("string" == typeof e) {
            if (
              ("string" == typeof t
                ? ((r = t), (t = 0), (n = this.length))
                : "string" == typeof n && ((r = n), (n = this.length)),
              1 === e.length)
            ) {
              var i = e.charCodeAt(0);
              i < 256 && (e = i);
            }
            if (void 0 !== r && "string" != typeof r)
              throw new TypeError("encoding must be a string");
            if ("string" == typeof r && !l.isEncoding(r))
              throw new TypeError("Unknown encoding: " + r);
          } else "number" == typeof e && (e &= 255);
          if (t < 0 || this.length < t || this.length < n)
            throw new RangeError("Out of range index");
          if (n <= t) return this;
          var o;
          if (
            ((t >>>= 0),
            (n = void 0 === n ? this.length : n >>> 0),
            e || (e = 0),
            "number" == typeof e)
          )
            for (o = t; o < n; ++o) this[o] = e;
          else {
            var a = l.isBuffer(e) ? e : B(new l(e, r).toString()),
              s = a.length;
            for (o = 0; o < n - t; ++o) this[o + t] = a[o % s];
          }
          return this;
        });
      var q = /[^+\/0-9A-Za-z-_]/g;
      function j(e) {
        return e < 16 ? "0" + e.toString(16) : e.toString(16);
      }
      function B(e, t) {
        var n;
        t = t || 1 / 0;
        for (var r = e.length, i = null, o = [], a = 0; a < r; ++a) {
          if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
            if (!i) {
              if (n > 56319) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              if (a + 1 === r) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              i = n;
              continue;
            }
            if (n < 56320) {
              (t -= 3) > -1 && o.push(239, 191, 189), (i = n);
              continue;
            }
            n = 65536 + (((i - 55296) << 10) | (n - 56320));
          } else i && (t -= 3) > -1 && o.push(239, 191, 189);
          if (((i = null), n < 128)) {
            if ((t -= 1) < 0) break;
            o.push(n);
          } else if (n < 2048) {
            if ((t -= 2) < 0) break;
            o.push((n >> 6) | 192, (63 & n) | 128);
          } else if (n < 65536) {
            if ((t -= 3) < 0) break;
            o.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
          } else {
            if (!(n < 1114112)) throw new Error("Invalid code point");
            if ((t -= 4) < 0) break;
            o.push(
              (n >> 18) | 240,
              ((n >> 12) & 63) | 128,
              ((n >> 6) & 63) | 128,
              (63 & n) | 128
            );
          }
        }
        return o;
      }
      function H(e) {
        return r.toByteArray(
          (function (e) {
            if (
              (e = (function (e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
              })(e).replace(q, "")).length < 2
            )
              return "";
            for (; e.length % 4 != 0; ) e += "=";
            return e;
          })(e)
        );
      }
      function V(e, t, n, r) {
        for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i)
          t[i + n] = e[i];
        return i;
      }
    }).call(this, n(9));
  },
  ,
  function (e, t, n) {
    "use strict";
    var r = Object.prototype.hasOwnProperty,
      i = "~";
    function o() {}
    function a(e, t, n) {
      (this.fn = e), (this.context = t), (this.once = n || !1);
    }
    function s(e, t, n, r, o) {
      if ("function" != typeof n)
        throw new TypeError("The listener must be a function");
      var s = new a(n, r || e, o),
        l = i ? i + t : t;
      return (
        e._events[l]
          ? e._events[l].fn
            ? (e._events[l] = [e._events[l], s])
            : e._events[l].push(s)
          : ((e._events[l] = s), e._eventsCount++),
        e
      );
    }
    function l(e, t) {
      0 == --e._eventsCount ? (e._events = new o()) : delete e._events[t];
    }
    function c() {
      (this._events = new o()), (this._eventsCount = 0);
    }
    Object.create &&
      ((o.prototype = Object.create(null)), new o().__proto__ || (i = !1)),
      (c.prototype.eventNames = function () {
        var e,
          t,
          n = [];
        if (0 === this._eventsCount) return n;
        for (t in (e = this._events))
          r.call(e, t) && n.push(i ? t.slice(1) : t);
        return Object.getOwnPropertySymbols
          ? n.concat(Object.getOwnPropertySymbols(e))
          : n;
      }),
      (c.prototype.listeners = function (e) {
        var t = i ? i + e : e,
          n = this._events[t];
        if (!n) return [];
        if (n.fn) return [n.fn];
        for (var r = 0, o = n.length, a = new Array(o); r < o; r++)
          a[r] = n[r].fn;
        return a;
      }),
      (c.prototype.listenerCount = function (e) {
        var t = i ? i + e : e,
          n = this._events[t];
        return n ? (n.fn ? 1 : n.length) : 0;
      }),
      (c.prototype.emit = function (e, t, n, r, o, a) {
        var s = i ? i + e : e;
        if (!this._events[s]) return !1;
        var l,
          c,
          u = this._events[s],
          d = arguments.length;
        if (u.fn) {
          switch ((u.once && this.removeListener(e, u.fn, void 0, !0), d)) {
            case 1:
              return u.fn.call(u.context), !0;
            case 2:
              return u.fn.call(u.context, t), !0;
            case 3:
              return u.fn.call(u.context, t, n), !0;
            case 4:
              return u.fn.call(u.context, t, n, r), !0;
            case 5:
              return u.fn.call(u.context, t, n, r, o), !0;
            case 6:
              return u.fn.call(u.context, t, n, r, o, a), !0;
          }
          for (c = 1, l = new Array(d - 1); c < d; c++) l[c - 1] = arguments[c];
          u.fn.apply(u.context, l);
        } else {
          var h,
            p = u.length;
          for (c = 0; c < p; c++)
            switch (
              (u[c].once && this.removeListener(e, u[c].fn, void 0, !0), d)
            ) {
              case 1:
                u[c].fn.call(u[c].context);
                break;
              case 2:
                u[c].fn.call(u[c].context, t);
                break;
              case 3:
                u[c].fn.call(u[c].context, t, n);
                break;
              case 4:
                u[c].fn.call(u[c].context, t, n, r);
                break;
              default:
                if (!l)
                  for (h = 1, l = new Array(d - 1); h < d; h++)
                    l[h - 1] = arguments[h];
                u[c].fn.apply(u[c].context, l);
            }
        }
        return !0;
      }),
      (c.prototype.on = function (e, t, n) {
        return s(this, e, t, n, !1);
      }),
      (c.prototype.once = function (e, t, n) {
        return s(this, e, t, n, !0);
      }),
      (c.prototype.removeListener = function (e, t, n, r) {
        var o = i ? i + e : e;
        if (!this._events[o]) return this;
        if (!t) return l(this, o), this;
        var a = this._events[o];
        if (a.fn)
          a.fn !== t || (r && !a.once) || (n && a.context !== n) || l(this, o);
        else {
          for (var s = 0, c = [], u = a.length; s < u; s++)
            (a[s].fn !== t || (r && !a[s].once) || (n && a[s].context !== n)) &&
              c.push(a[s]);
          c.length ? (this._events[o] = 1 === c.length ? c[0] : c) : l(this, o);
        }
        return this;
      }),
      (c.prototype.removeAllListeners = function (e) {
        var t;
        return (
          e
            ? ((t = i ? i + e : e), this._events[t] && l(this, t))
            : ((this._events = new o()), (this._eventsCount = 0)),
          this
        );
      }),
      (c.prototype.off = c.prototype.removeListener),
      (c.prototype.addListener = c.prototype.on),
      (c.prefixed = i),
      (c.EventEmitter = c),
      (e.exports = c);
  },
  ,
  ,
  ,
  function (e, t, n) {
    (function (e) {
      var r =
          (void 0 !== e && e) || ("undefined" != typeof self && self) || window,
        i = Function.prototype.apply;
      function o(e, t) {
        (this._id = e), (this._clearFn = t);
      }
      (t.setTimeout = function () {
        return new o(i.call(setTimeout, r, arguments), clearTimeout);
      }),
        (t.setInterval = function () {
          return new o(i.call(setInterval, r, arguments), clearInterval);
        }),
        (t.clearTimeout = t.clearInterval =
          function (e) {
            e && e.close();
          }),
        (o.prototype.unref = o.prototype.ref = function () {}),
        (o.prototype.close = function () {
          this._clearFn.call(r, this._id);
        }),
        (t.enroll = function (e, t) {
          clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
        }),
        (t.unenroll = function (e) {
          clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
        }),
        (t._unrefActive = t.active =
          function (e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 &&
              (e._idleTimeoutId = setTimeout(function () {
                e._onTimeout && e._onTimeout();
              }, t));
          }),
        n(38),
        (t.setImmediate =
          ("undefined" != typeof self && self.setImmediate) ||
          (void 0 !== e && e.setImmediate) ||
          (this && this.setImmediate)),
        (t.clearImmediate =
          ("undefined" != typeof self && self.clearImmediate) ||
          (void 0 !== e && e.clearImmediate) ||
          (this && this.clearImmediate));
    }).call(this, n(9));
  },
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    var r = n(52),
      i =
        Object.keys ||
        function (e) {
          var t = [];
          for (var n in e) t.push(n);
          return t;
        };
    e.exports = d;
    var o = Object.create(n(41));
    o.inherits = n(17);
    var a = n(78),
      s = n(64);
    o.inherits(d, a);
    for (var l = i(s.prototype), c = 0; c < l.length; c++) {
      var u = l[c];
      d.prototype[u] || (d.prototype[u] = s.prototype[u]);
    }
    function d(e) {
      if (!(this instanceof d)) return new d(e);
      a.call(this, e),
        s.call(this, e),
        e && !1 === e.readable && (this.readable = !1),
        e && !1 === e.writable && (this.writable = !1),
        (this.allowHalfOpen = !0),
        e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
        this.once("end", h);
    }
    function h() {
      this.allowHalfOpen || this._writableState.ended || r.nextTick(p, this);
    }
    function p(e) {
      e.end();
    }
    Object.defineProperty(d.prototype, "writableHighWaterMark", {
      enumerable: !1,
      get: function () {
        return this._writableState.highWaterMark;
      },
    }),
      Object.defineProperty(d.prototype, "destroyed", {
        get: function () {
          return (
            void 0 !== this._readableState &&
            void 0 !== this._writableState &&
            this._readableState.destroyed &&
            this._writableState.destroyed
          );
        },
        set: function (e) {
          void 0 !== this._readableState &&
            void 0 !== this._writableState &&
            ((this._readableState.destroyed = e),
            (this._writableState.destroyed = e));
        },
      }),
      (d.prototype._destroy = function (e, t) {
        this.push(null), this.end(), r.nextTick(t, e);
      });
  },
  ,
  ,
  ,
  function (e, t, n) {
    e.exports = i;
    var r = n(39).EventEmitter;
    function i() {
      r.call(this);
    }
    n(17)(i, r),
      (i.Readable = n(40)),
      (i.Writable = n(271)),
      (i.Duplex = n(272)),
      (i.Transform = n(273)),
      (i.PassThrough = n(274)),
      (i.Stream = i),
      (i.prototype.pipe = function (e, t) {
        var n = this;
        function i(t) {
          e.writable && !1 === e.write(t) && n.pause && n.pause();
        }
        function o() {
          n.readable && n.resume && n.resume();
        }
        n.on("data", i),
          e.on("drain", o),
          e._isStdio ||
            (t && !1 === t.end) ||
            (n.on("end", s), n.on("close", l));
        var a = !1;
        function s() {
          a || ((a = !0), e.end());
        }
        function l() {
          a || ((a = !0), "function" == typeof e.destroy && e.destroy());
        }
        function c(e) {
          if ((u(), 0 === r.listenerCount(this, "error"))) throw e;
        }
        function u() {
          n.removeListener("data", i),
            e.removeListener("drain", o),
            n.removeListener("end", s),
            n.removeListener("close", l),
            n.removeListener("error", c),
            e.removeListener("error", c),
            n.removeListener("end", u),
            n.removeListener("close", u),
            e.removeListener("close", u);
        }
        return (
          n.on("error", c),
          e.on("error", c),
          n.on("end", u),
          n.on("close", u),
          e.on("close", u),
          e.emit("pipe", n),
          e
        );
      });
  },
  function (e, t, n) {
    "use strict";
    var r = {};
    function i(e, t, n) {
      n || (n = Error);
      var i = (function (e) {
        var n, r;
        function i(n, r, i) {
          return (
            e.call(
              this,
              (function (e, n, r) {
                return "string" == typeof t ? t : t(e, n, r);
              })(n, r, i)
            ) || this
          );
        }
        return (
          (r = e),
          ((n = i).prototype = Object.create(r.prototype)),
          (n.prototype.constructor = n),
          (n.__proto__ = r),
          i
        );
      })(n);
      (i.prototype.name = n.name), (i.prototype.code = e), (r[e] = i);
    }
    function o(e, t) {
      if (Array.isArray(e)) {
        var n = e.length;
        return (
          (e = e.map(function (e) {
            return String(e);
          })),
          n > 2
            ? "one of "
                .concat(t, " ")
                .concat(e.slice(0, n - 1).join(", "), ", or ") + e[n - 1]
            : 2 === n
            ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1])
            : "of ".concat(t, " ").concat(e[0])
        );
      }
      return "of ".concat(t, " ").concat(String(e));
    }
    i(
      "ERR_INVALID_OPT_VALUE",
      function (e, t) {
        return 'The value "' + t + '" is invalid for option "' + e + '"';
      },
      TypeError
    ),
      i(
        "ERR_INVALID_ARG_TYPE",
        function (e, t, n) {
          var r, i, a, s;
          if (
            ("string" == typeof t &&
            ((i = "not "), t.substr(!a || a < 0 ? 0 : +a, i.length) === i)
              ? ((r = "must not be"), (t = t.replace(/^not /, "")))
              : (r = "must be"),
            (function (e, t, n) {
              return (
                (void 0 === n || n > e.length) && (n = e.length),
                e.substring(n - t.length, n) === t
              );
            })(e, " argument"))
          )
            s = "The ".concat(e, " ").concat(r, " ").concat(o(t, "type"));
          else {
            var l = (function (e, t, n) {
              return (
                "number" != typeof n && (n = 0),
                !(n + t.length > e.length) && -1 !== e.indexOf(t, n)
              );
            })(e, ".")
              ? "property"
              : "argument";
            s = 'The "'
              .concat(e, '" ')
              .concat(l, " ")
              .concat(r, " ")
              .concat(o(t, "type"));
          }
          return (s += ". Received type ".concat(typeof n));
        },
        TypeError
      ),
      i("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
      i("ERR_METHOD_NOT_IMPLEMENTED", function (e) {
        return "The " + e + " method is not implemented";
      }),
      i("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
      i("ERR_STREAM_DESTROYED", function (e) {
        return "Cannot call " + e + " after a stream was destroyed";
      }),
      i("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
      i("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
      i("ERR_STREAM_WRITE_AFTER_END", "write after end"),
      i(
        "ERR_STREAM_NULL_VALUES",
        "May not write null values to stream",
        TypeError
      ),
      i(
        "ERR_UNKNOWN_ENCODING",
        function (e) {
          return "Unknown encoding: " + e;
        },
        TypeError
      ),
      i(
        "ERR_STREAM_UNSHIFT_AFTER_END_EVENT",
        "stream.unshift() after end event"
      ),
      (e.exports.codes = r);
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      var r =
        Object.keys ||
        function (e) {
          var t = [];
          for (var n in e) t.push(n);
          return t;
        };
      e.exports = c;
      var i = n(94),
        o = n(98);
      n(17)(c, i);
      for (var a = r(o.prototype), s = 0; s < a.length; s++) {
        var l = a[s];
        c.prototype[l] || (c.prototype[l] = o.prototype[l]);
      }
      function c(e) {
        if (!(this instanceof c)) return new c(e);
        i.call(this, e),
          o.call(this, e),
          (this.allowHalfOpen = !0),
          e &&
            (!1 === e.readable && (this.readable = !1),
            !1 === e.writable && (this.writable = !1),
            !1 === e.allowHalfOpen &&
              ((this.allowHalfOpen = !1), this.once("end", u)));
      }
      function u() {
        this._writableState.ended || t.nextTick(d, this);
      }
      function d(e) {
        e.end();
      }
      Object.defineProperty(c.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function () {
          return this._writableState.highWaterMark;
        },
      }),
        Object.defineProperty(c.prototype, "writableBuffer", {
          enumerable: !1,
          get: function () {
            return this._writableState && this._writableState.getBuffer();
          },
        }),
        Object.defineProperty(c.prototype, "writableLength", {
          enumerable: !1,
          get: function () {
            return this._writableState.length;
          },
        }),
        Object.defineProperty(c.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              this._readableState.destroyed &&
              this._writableState.destroyed
            );
          },
          set: function (e) {
            void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              ((this._readableState.destroyed = e),
              (this._writableState.destroyed = e));
          },
        });
    }).call(this, n(15));
  },
  ,
  ,
  function (e, t, n) {
    "use strict";
    (function (e) {
      var t = n(20);
      e.EE = new t.EventEmitter();
    }).call(this, n(9));
  },
  function (e, t, n) {
    (function (e, t) {
      !(function (e, n) {
        "use strict";
        if (!e.setImmediate) {
          var r,
            i,
            o,
            a,
            s,
            l = 1,
            c = {},
            u = !1,
            d = e.document,
            h = Object.getPrototypeOf && Object.getPrototypeOf(e);
          (h = h && h.setTimeout ? h : e),
            "[object process]" === {}.toString.call(e.process)
              ? (r = function (e) {
                  t.nextTick(function () {
                    f(e);
                  });
                })
              : !(function () {
                  if (e.postMessage && !e.importScripts) {
                    var t = !0,
                      n = e.onmessage;
                    return (
                      (e.onmessage = function () {
                        t = !1;
                      }),
                      e.postMessage("", "*"),
                      (e.onmessage = n),
                      t
                    );
                  }
                })()
              ? e.MessageChannel
                ? (((o = new MessageChannel()).port1.onmessage = function (e) {
                    f(e.data);
                  }),
                  (r = function (e) {
                    o.port2.postMessage(e);
                  }))
                : d && "onreadystatechange" in d.createElement("script")
                ? ((i = d.documentElement),
                  (r = function (e) {
                    var t = d.createElement("script");
                    (t.onreadystatechange = function () {
                      f(e),
                        (t.onreadystatechange = null),
                        i.removeChild(t),
                        (t = null);
                    }),
                      i.appendChild(t);
                  }))
                : (r = function (e) {
                    setTimeout(f, 0, e);
                  })
              : ((a = "setImmediate$" + Math.random() + "$"),
                (s = function (t) {
                  t.source === e &&
                    "string" == typeof t.data &&
                    0 === t.data.indexOf(a) &&
                    f(+t.data.slice(a.length));
                }),
                e.addEventListener
                  ? e.addEventListener("message", s, !1)
                  : e.attachEvent("onmessage", s),
                (r = function (t) {
                  e.postMessage(a + t, "*");
                })),
            (h.setImmediate = function (e) {
              "function" != typeof e && (e = new Function("" + e));
              for (
                var t = new Array(arguments.length - 1), n = 0;
                n < t.length;
                n++
              )
                t[n] = arguments[n + 1];
              var i = { callback: e, args: t };
              return (c[l] = i), r(l), l++;
            }),
            (h.clearImmediate = p);
        }
        function p(e) {
          delete c[e];
        }
        function f(e) {
          if (u) setTimeout(f, 0, e);
          else {
            var t = c[e];
            if (t) {
              u = !0;
              try {
                !(function (e) {
                  var t = e.callback,
                    n = e.args;
                  switch (n.length) {
                    case 0:
                      t();
                      break;
                    case 1:
                      t(n[0]);
                      break;
                    case 2:
                      t(n[0], n[1]);
                      break;
                    case 3:
                      t(n[0], n[1], n[2]);
                      break;
                    default:
                      t.apply(void 0, n);
                  }
                })(t);
              } finally {
                p(e), (u = !1);
              }
            }
          }
        }
      })("undefined" == typeof self ? (void 0 === e ? this : e) : self);
    }).call(this, n(9), n(15));
  },
  function (e, t, n) {
    "use strict";
    var r,
      i = "object" == typeof Reflect ? Reflect : null,
      o =
        i && "function" == typeof i.apply
          ? i.apply
          : function (e, t, n) {
              return Function.prototype.apply.call(e, t, n);
            };
    r =
      i && "function" == typeof i.ownKeys
        ? i.ownKeys
        : Object.getOwnPropertySymbols
        ? function (e) {
            return Object.getOwnPropertyNames(e).concat(
              Object.getOwnPropertySymbols(e)
            );
          }
        : function (e) {
            return Object.getOwnPropertyNames(e);
          };
    var a =
      Number.isNaN ||
      function (e) {
        return e != e;
      };
    function s() {
      s.init.call(this);
    }
    (e.exports = s),
      (e.exports.once = function (e, t) {
        return new Promise(function (n, r) {
          function i(n) {
            e.removeListener(t, o), r(n);
          }
          function o() {
            "function" == typeof e.removeListener &&
              e.removeListener("error", i),
              n([].slice.call(arguments));
          }
          v(e, t, o, { once: !0 }),
            "error" !== t &&
              (function (e, t, n) {
                "function" == typeof e.on && v(e, "error", t, n);
              })(e, i, { once: !0 });
        });
      }),
      (s.EventEmitter = s),
      (s.prototype._events = void 0),
      (s.prototype._eventsCount = 0),
      (s.prototype._maxListeners = void 0);
    var l = 10;
    function c(e) {
      if ("function" != typeof e)
        throw new TypeError(
          'The "listener" argument must be of type Function. Received type ' +
            typeof e
        );
    }
    function u(e) {
      return void 0 === e._maxListeners
        ? s.defaultMaxListeners
        : e._maxListeners;
    }
    function d(e, t, n, r) {
      var i, o, a, s;
      if (
        (c(n),
        void 0 === (o = e._events)
          ? ((o = e._events = Object.create(null)), (e._eventsCount = 0))
          : (void 0 !== o.newListener &&
              (e.emit("newListener", t, n.listener ? n.listener : n),
              (o = e._events)),
            (a = o[t])),
        void 0 === a)
      )
        (a = o[t] = n), ++e._eventsCount;
      else if (
        ("function" == typeof a
          ? (a = o[t] = r ? [n, a] : [a, n])
          : r
          ? a.unshift(n)
          : a.push(n),
        (i = u(e)) > 0 && a.length > i && !a.warned)
      ) {
        a.warned = !0;
        var l = new Error(
          "Possible EventEmitter memory leak detected. " +
            a.length +
            " " +
            String(t) +
            " listeners added. Use emitter.setMaxListeners() to increase limit"
        );
        (l.name = "MaxListenersExceededWarning"),
          (l.emitter = e),
          (l.type = t),
          (l.count = a.length),
          (s = l),
          console && console.warn && console.warn(s);
      }
      return e;
    }
    function h() {
      if (!this.fired)
        return (
          this.target.removeListener(this.type, this.wrapFn),
          (this.fired = !0),
          0 === arguments.length
            ? this.listener.call(this.target)
            : this.listener.apply(this.target, arguments)
        );
    }
    function p(e, t, n) {
      var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n },
        i = h.bind(r);
      return (i.listener = n), (r.wrapFn = i), i;
    }
    function f(e, t, n) {
      var r = e._events;
      if (void 0 === r) return [];
      var i = r[t];
      return void 0 === i
        ? []
        : "function" == typeof i
        ? n
          ? [i.listener || i]
          : [i]
        : n
        ? (function (e) {
            for (var t = new Array(e.length), n = 0; n < t.length; ++n)
              t[n] = e[n].listener || e[n];
            return t;
          })(i)
        : g(i, i.length);
    }
    function m(e) {
      var t = this._events;
      if (void 0 !== t) {
        var n = t[e];
        if ("function" == typeof n) return 1;
        if (void 0 !== n) return n.length;
      }
      return 0;
    }
    function g(e, t) {
      for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
      return n;
    }
    function v(e, t, n, r) {
      if ("function" == typeof e.on) r.once ? e.once(t, n) : e.on(t, n);
      else {
        if ("function" != typeof e.addEventListener)
          throw new TypeError(
            'The "emitter" argument must be of type EventEmitter. Received type ' +
              typeof e
          );
        e.addEventListener(t, function i(o) {
          r.once && e.removeEventListener(t, i), n(o);
        });
      }
    }
    Object.defineProperty(s, "defaultMaxListeners", {
      enumerable: !0,
      get: function () {
        return l;
      },
      set: function (e) {
        if ("number" != typeof e || e < 0 || a(e))
          throw new RangeError(
            'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
              e +
              "."
          );
        l = e;
      },
    }),
      (s.init = function () {
        (void 0 !== this._events &&
          this._events !== Object.getPrototypeOf(this)._events) ||
          ((this._events = Object.create(null)), (this._eventsCount = 0)),
          (this._maxListeners = this._maxListeners || void 0);
      }),
      (s.prototype.setMaxListeners = function (e) {
        if ("number" != typeof e || e < 0 || a(e))
          throw new RangeError(
            'The value of "n" is out of range. It must be a non-negative number. Received ' +
              e +
              "."
          );
        return (this._maxListeners = e), this;
      }),
      (s.prototype.getMaxListeners = function () {
        return u(this);
      }),
      (s.prototype.emit = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
        var r = "error" === e,
          i = this._events;
        if (void 0 !== i) r = r && void 0 === i.error;
        else if (!r) return !1;
        if (r) {
          var a;
          if ((t.length > 0 && (a = t[0]), a instanceof Error)) throw a;
          var s = new Error(
            "Unhandled error." + (a ? " (" + a.message + ")" : "")
          );
          throw ((s.context = a), s);
        }
        var l = i[e];
        if (void 0 === l) return !1;
        if ("function" == typeof l) o(l, this, t);
        else {
          var c = l.length,
            u = g(l, c);
          for (n = 0; n < c; ++n) o(u[n], this, t);
        }
        return !0;
      }),
      (s.prototype.addListener = function (e, t) {
        return d(this, e, t, !1);
      }),
      (s.prototype.on = s.prototype.addListener),
      (s.prototype.prependListener = function (e, t) {
        return d(this, e, t, !0);
      }),
      (s.prototype.once = function (e, t) {
        return c(t), this.on(e, p(this, e, t)), this;
      }),
      (s.prototype.prependOnceListener = function (e, t) {
        return c(t), this.prependListener(e, p(this, e, t)), this;
      }),
      (s.prototype.removeListener = function (e, t) {
        var n, r, i, o, a;
        if ((c(t), void 0 === (r = this._events))) return this;
        if (void 0 === (n = r[e])) return this;
        if (n === t || n.listener === t)
          0 == --this._eventsCount
            ? (this._events = Object.create(null))
            : (delete r[e],
              r.removeListener &&
                this.emit("removeListener", e, n.listener || t));
        else if ("function" != typeof n) {
          for (i = -1, o = n.length - 1; o >= 0; o--)
            if (n[o] === t || n[o].listener === t) {
              (a = n[o].listener), (i = o);
              break;
            }
          if (i < 0) return this;
          0 === i
            ? n.shift()
            : (function (e, t) {
                for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                e.pop();
              })(n, i),
            1 === n.length && (r[e] = n[0]),
            void 0 !== r.removeListener &&
              this.emit("removeListener", e, a || t);
        }
        return this;
      }),
      (s.prototype.off = s.prototype.removeListener),
      (s.prototype.removeAllListeners = function (e) {
        var t, n, r;
        if (void 0 === (n = this._events)) return this;
        if (void 0 === n.removeListener)
          return (
            0 === arguments.length
              ? ((this._events = Object.create(null)), (this._eventsCount = 0))
              : void 0 !== n[e] &&
                (0 == --this._eventsCount
                  ? (this._events = Object.create(null))
                  : delete n[e]),
            this
          );
        if (0 === arguments.length) {
          var i,
            o = Object.keys(n);
          for (r = 0; r < o.length; ++r)
            "removeListener" !== (i = o[r]) && this.removeAllListeners(i);
          return (
            this.removeAllListeners("removeListener"),
            (this._events = Object.create(null)),
            (this._eventsCount = 0),
            this
          );
        }
        if ("function" == typeof (t = n[e])) this.removeListener(e, t);
        else if (void 0 !== t)
          for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
        return this;
      }),
      (s.prototype.listeners = function (e) {
        return f(this, e, !0);
      }),
      (s.prototype.rawListeners = function (e) {
        return f(this, e, !1);
      }),
      (s.listenerCount = function (e, t) {
        return "function" == typeof e.listenerCount
          ? e.listenerCount(t)
          : m.call(e, t);
      }),
      (s.prototype.listenerCount = m),
      (s.prototype.eventNames = function () {
        return this._eventsCount > 0 ? r(this._events) : [];
      });
  },
  function (e, t, n) {
    ((t = e.exports = n(78)).Stream = t),
      (t.Readable = t),
      (t.Writable = n(64)),
      (t.Duplex = n(28)),
      (t.Transform = n(82)),
      (t.PassThrough = n(270));
  },
  function (e, t, n) {
    function r(e) {
      return Object.prototype.toString.call(e);
    }
    (t.isArray = function (e) {
      return Array.isArray ? Array.isArray(e) : "[object Array]" === r(e);
    }),
      (t.isBoolean = function (e) {
        return "boolean" == typeof e;
      }),
      (t.isNull = function (e) {
        return null === e;
      }),
      (t.isNullOrUndefined = function (e) {
        return null == e;
      }),
      (t.isNumber = function (e) {
        return "number" == typeof e;
      }),
      (t.isString = function (e) {
        return "string" == typeof e;
      }),
      (t.isSymbol = function (e) {
        return "symbol" == typeof e;
      }),
      (t.isUndefined = function (e) {
        return void 0 === e;
      }),
      (t.isRegExp = function (e) {
        return "[object RegExp]" === r(e);
      }),
      (t.isObject = function (e) {
        return "object" == typeof e && null !== e;
      }),
      (t.isDate = function (e) {
        return "[object Date]" === r(e);
      }),
      (t.isError = function (e) {
        return "[object Error]" === r(e) || e instanceof Error;
      }),
      (t.isFunction = function (e) {
        return "function" == typeof e;
      }),
      (t.isPrimitive = function (e) {
        return (
          null === e ||
          "boolean" == typeof e ||
          "number" == typeof e ||
          "string" == typeof e ||
          "symbol" == typeof e ||
          void 0 === e
        );
      }),
      (t.isBuffer = n(18).Buffer.isBuffer);
  },
  function (e, t, n) {
    "use strict";
    var r = n(65).Buffer,
      i =
        r.isEncoding ||
        function (e) {
          switch ((e = "" + e) && e.toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
            case "raw":
              return !0;
            default:
              return !1;
          }
        };
    function o(e) {
      var t;
      switch (
        ((this.encoding = (function (e) {
          var t = (function (e) {
            if (!e) return "utf8";
            for (var t; ; )
              switch (e) {
                case "utf8":
                case "utf-8":
                  return "utf8";
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return "utf16le";
                case "latin1":
                case "binary":
                  return "latin1";
                case "base64":
                case "ascii":
                case "hex":
                  return e;
                default:
                  if (t) return;
                  (e = ("" + e).toLowerCase()), (t = !0);
              }
          })(e);
          if ("string" != typeof t && (r.isEncoding === i || !i(e)))
            throw new Error("Unknown encoding: " + e);
          return t || e;
        })(e)),
        this.encoding)
      ) {
        case "utf16le":
          (this.text = l), (this.end = c), (t = 4);
          break;
        case "utf8":
          (this.fillLast = s), (t = 4);
          break;
        case "base64":
          (this.text = u), (this.end = d), (t = 3);
          break;
        default:
          return (this.write = h), void (this.end = p);
      }
      (this.lastNeed = 0),
        (this.lastTotal = 0),
        (this.lastChar = r.allocUnsafe(t));
    }
    function a(e) {
      return e <= 127
        ? 0
        : e >> 5 == 6
        ? 2
        : e >> 4 == 14
        ? 3
        : e >> 3 == 30
        ? 4
        : e >> 6 == 2
        ? -1
        : -2;
    }
    function s(e) {
      var t = this.lastTotal - this.lastNeed,
        n = (function (e, t, n) {
          if (128 != (192 & t[0])) return (e.lastNeed = 0), "�";
          if (e.lastNeed > 1 && t.length > 1) {
            if (128 != (192 & t[1])) return (e.lastNeed = 1), "�";
            if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2]))
              return (e.lastNeed = 2), "�";
          }
        })(this, e);
      return void 0 !== n
        ? n
        : this.lastNeed <= e.length
        ? (e.copy(this.lastChar, t, 0, this.lastNeed),
          this.lastChar.toString(this.encoding, 0, this.lastTotal))
        : (e.copy(this.lastChar, t, 0, e.length),
          void (this.lastNeed -= e.length));
    }
    function l(e, t) {
      if ((e.length - t) % 2 == 0) {
        var n = e.toString("utf16le", t);
        if (n) {
          var r = n.charCodeAt(n.length - 1);
          if (r >= 55296 && r <= 56319)
            return (
              (this.lastNeed = 2),
              (this.lastTotal = 4),
              (this.lastChar[0] = e[e.length - 2]),
              (this.lastChar[1] = e[e.length - 1]),
              n.slice(0, -1)
            );
        }
        return n;
      }
      return (
        (this.lastNeed = 1),
        (this.lastTotal = 2),
        (this.lastChar[0] = e[e.length - 1]),
        e.toString("utf16le", t, e.length - 1)
      );
    }
    function c(e) {
      var t = e && e.length ? this.write(e) : "";
      if (this.lastNeed) {
        var n = this.lastTotal - this.lastNeed;
        return t + this.lastChar.toString("utf16le", 0, n);
      }
      return t;
    }
    function u(e, t) {
      var n = (e.length - t) % 3;
      return 0 === n
        ? e.toString("base64", t)
        : ((this.lastNeed = 3 - n),
          (this.lastTotal = 3),
          1 === n
            ? (this.lastChar[0] = e[e.length - 1])
            : ((this.lastChar[0] = e[e.length - 2]),
              (this.lastChar[1] = e[e.length - 1])),
          e.toString("base64", t, e.length - n));
    }
    function d(e) {
      var t = e && e.length ? this.write(e) : "";
      return this.lastNeed
        ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
        : t;
    }
    function h(e) {
      return e.toString(this.encoding);
    }
    function p(e) {
      return e && e.length ? this.write(e) : "";
    }
    (t.StringDecoder = o),
      (o.prototype.write = function (e) {
        if (0 === e.length) return "";
        var t, n;
        if (this.lastNeed) {
          if (void 0 === (t = this.fillLast(e))) return "";
          (n = this.lastNeed), (this.lastNeed = 0);
        } else n = 0;
        return n < e.length
          ? t
            ? t + this.text(e, n)
            : this.text(e, n)
          : t || "";
      }),
      (o.prototype.end = function (e) {
        var t = e && e.length ? this.write(e) : "";
        return this.lastNeed ? t + "�" : t;
      }),
      (o.prototype.text = function (e, t) {
        var n = (function (e, t, n) {
          var r = t.length - 1;
          if (r < n) return 0;
          var i = a(t[r]);
          if (i >= 0) return i > 0 && (e.lastNeed = i - 1), i;
          if (--r < n || -2 === i) return 0;
          if ((i = a(t[r])) >= 0) return i > 0 && (e.lastNeed = i - 2), i;
          if (--r < n || -2 === i) return 0;
          if ((i = a(t[r])) >= 0)
            return i > 0 && (2 === i ? (i = 0) : (e.lastNeed = i - 3)), i;
          return 0;
        })(this, e, t);
        if (!this.lastNeed) return e.toString("utf8", t);
        this.lastTotal = n;
        var r = e.length - (n - this.lastNeed);
        return e.copy(this.lastChar, 0, r), e.toString("utf8", t, r);
      }),
      (o.prototype.fillLast = function (e) {
        if (this.lastNeed <= e.length)
          return (
            e.copy(
              this.lastChar,
              this.lastTotal - this.lastNeed,
              0,
              this.lastNeed
            ),
            this.lastChar.toString(this.encoding, 0, this.lastTotal)
          );
        e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
          (this.lastNeed -= e.length);
      });
  },
  function (e, t, n) {
    (function (e) {
      const r = n(54);
      (t.between = (e, t, n) => {
        let r;
        if (t instanceof RegExp) {
          const n = e.match(t);
          if (!n) return "";
          r = n.index + n[0].length;
        } else {
          if (((r = e.indexOf(t)), -1 === r)) return "";
          r += t.length;
        }
        return (
          (r = (e = e.slice(r)).indexOf(n)), -1 === r ? "" : (e = e.slice(0, r))
        );
      }),
        (t.parseAbbreviatedNumber = (e) => {
          const t = e
            .replace(",", ".")
            .replace(" ", "")
            .match(/([\d,.]+)([MK]?)/);
          if (t) {
            let [, e, n] = t;
            return (
              (e = parseFloat(e)),
              Math.round("M" === n ? 1e6 * e : "K" === n ? 1e3 * e : e)
            );
          }
          return null;
        }),
        (t.cutAfterJSON = (e) => {
          let t, n;
          if (
            ("[" === e[0]
              ? ((t = "["), (n = "]"))
              : "{" === e[0] && ((t = "{"), (n = "}")),
            !t)
          )
            throw new Error(
              "Can't cut unsupported JSON (need to begin with [ or { ) but got: " +
                e[0]
            );
          let r,
            i = !1,
            o = !1,
            a = 0;
          for (r = 0; r < e.length; r++)
            if ('"' !== e[r] || o) {
              if (
                ((o = "\\" === e[r] && !o),
                !i && (e[r] === t ? a++ : e[r] === n && a--, 0 === a))
              )
                return e.substr(0, r + 1);
            } else i = !i;
          throw Error(
            "Can't cut unsupported JSON (no matching closing bracket found)"
          );
        }),
        (t.playError = (e, t, n = Error) => {
          let r = e && e.playabilityStatus;
          return r && t.includes(r.status)
            ? new n(r.reason || (r.messages && r.messages[0]))
            : null;
        }),
        (t.exposedMiniget = (e, t = {}, n) => {
          const i = r(e, n || t.requestOptions);
          return (
            "function" == typeof t.requestCallback && t.requestCallback(i), i
          );
        }),
        (t.deprecate = (e, t, n, r, i) => {
          Object.defineProperty(e, t, {
            get: () => (
              console.warn(
                `\`${r}\` will be removed in a near future release, use \`${i}\` instead.`
              ),
              n
            ),
          });
        });
      const i = n(88);
      (t.lastUpdateCheck = 0),
        (t.checkForUpdates = () =>
          !e.env.YTDL_NO_UPDATE &&
          !i.version.startsWith("0.0.0-") &&
          Date.now() - t.lastUpdateCheck >= 432e5
            ? ((t.lastUpdateCheck = Date.now()),
              r(
                "https://api.github.com/repos/fent/node-ytdl-core/releases/latest",
                { headers: { "User-Agent": "ytdl-core" } }
              )
                .text()
                .then(
                  (e) => {
                    JSON.parse(e).tag_name !== "v" + i.version &&
                      console.warn(
                        '[33mWARNING:[0m ytdl-core is out of date! Update with "npm install ytdl-core@latest".'
                      );
                  },
                  (e) => {
                    console.warn("Error checking for updates:", e.message),
                      console.warn(
                        "You can disable this check by setting the `YTDL_NO_UPDATE` env variable."
                      );
                  }
                ))
            : null);
    }).call(this, n(15));
  },
  ,
  ,
  ,
  ,
  function (e, t) {
    var n = {}.toString;
    e.exports =
      Array.isArray ||
      function (e) {
        return "[object Array]" == n.call(e);
      };
  },
  ,
  ,
  function (e, t) {
    e.exports = function (e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function () {}),
          (e.paths = []),
          e.children || (e.children = []),
          Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
              return e.l;
            },
          }),
          Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
              return e.i;
            },
          }),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      void 0 === t ||
      !t.version ||
      0 === t.version.indexOf("v0.") ||
      (0 === t.version.indexOf("v1.") && 0 !== t.version.indexOf("v1.8."))
        ? (e.exports = {
            nextTick: function (e, n, r, i) {
              if ("function" != typeof e)
                throw new TypeError('"callback" argument must be a function');
              var o,
                a,
                s = arguments.length;
              switch (s) {
                case 0:
                case 1:
                  return t.nextTick(e);
                case 2:
                  return t.nextTick(function () {
                    e.call(null, n);
                  });
                case 3:
                  return t.nextTick(function () {
                    e.call(null, n, r);
                  });
                case 4:
                  return t.nextTick(function () {
                    e.call(null, n, r, i);
                  });
                default:
                  for (o = new Array(s - 1), a = 0; a < o.length; )
                    o[a++] = arguments[a];
                  return t.nextTick(function () {
                    e.apply(null, o);
                  });
              }
            },
          })
        : (e.exports = t);
    }).call(this, n(15));
  },
  function (e, t, n) {
    "use strict";
    (t.decode = t.parse = n(276)), (t.encode = t.stringify = n(277));
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      const i = r(n(84)),
        o = r(n(284)),
        a = n(32),
        s = { "http:": i.default, "https:": o.default },
        l = new Set([301, 302, 303, 307, 308]),
        c = new Set([429, 503]),
        u = [
          "connect",
          "continue",
          "information",
          "socket",
          "timeout",
          "upgrade",
        ],
        d = ["aborted"];
      function h(e, n = {}) {
        var r;
        const i = Object.assign({}, h.defaultOptions, n),
          o = new a.PassThrough({ highWaterMark: i.highWaterMark });
        let p, f, m;
        o.destroyed = o.aborted = !1;
        let g,
          v,
          b,
          y = 0,
          _ = 0,
          w = 0,
          E = !1,
          T = 0,
          C = 0;
        if (null === (r = i.headers) || void 0 === r ? void 0 : r.Range) {
          let e = /bytes=(\d+)-(\d+)?/.exec("" + i.headers.Range);
          e && ((T = parseInt(e[1], 10)), (b = parseInt(e[2], 10)));
        }
        i.acceptEncoding &&
          (i.headers = Object.assign(
            { "Accept-Encoding": Object.keys(i.acceptEncoding).join(", ") },
            i.headers
          ));
        const x = (e) =>
            !!("HEAD" !== n.method && E && C !== v && w++ < i.maxReconnects) &&
            (((e) => {
              (m = null), (_ = 0);
              let t = i.backoff.inc,
                n = Math.min(t, i.backoff.max);
              (g = setTimeout(R, n)), o.emit("reconnect", w, e);
            })(e),
            !0),
          S = (e) => {
            if (o.destroyed) return !1;
            if (m && C > 0) return x(e.err);
            if (
              (!e.err || "ENOTFOUND" === e.err.message) &&
              _++ < i.maxRetries
            ) {
              let t =
                e.retryAfter || Math.min(_ * i.backoff.inc, i.backoff.max);
              return (g = setTimeout(R, t)), o.emit("retry", _, e.err), !0;
            }
            return !1;
          },
          L = (e, t) => {
            for (let n of t) e.on(n, o.emit.bind(o, n));
          },
          R = () => {
            let t,
              n = {};
            try {
              let r = "string" == typeof e ? new URL(e) : e;
              (n = Object.assign(
                {},
                {
                  host: r.host,
                  hostname: r.hostname,
                  path: r.pathname + r.search + r.hash,
                  port: r.port,
                  protocol: r.protocol,
                }
              )),
                r.username && (n.auth = `${r.username}:${r.password}`),
                (t = s[String(n.protocol)]);
            } catch (e) {}
            if (!t)
              return void o.emit(
                "error",
                new h.MinigetError("Invalid URL: " + e)
              );
            if ((Object.assign(n, i), E && C > 0)) {
              let e = C + T,
                t = b || "";
              n.headers = Object.assign({}, n.headers, {
                Range: `bytes=${e}-${t}`,
              });
            }
            if (i.transform) {
              try {
                n = i.transform(n);
              } catch (e) {
                return void o.emit("error", e);
              }
              if (
                (!n || n.protocol) &&
                ((t = s[String(null == n ? void 0 : n.protocol)]), !t)
              )
                return void o.emit(
                  "error",
                  new h.MinigetError(
                    "Invalid URL object from `transform` function"
                  )
                );
            }
            const r = (e) => {
                o.destroyed ||
                  o.readableEnded ||
                  (g(),
                  S({ err: e })
                    ? p.removeListener("close", a)
                    : o.emit("error", e));
              },
              a = () => {
                g(), S({});
              },
              g = () => {
                p.removeListener("close", a),
                  null == f || f.removeListener("data", _),
                  null == m || m.removeListener("end", w);
              },
              _ = (e) => {
                C += e.length;
              },
              w = () => {
                g(), x() || o.end();
              };
            (p = t.request(n, (t) => {
              if (!o.destroyed)
                if (l.has(t.statusCode)) {
                  if (y++ >= i.maxRedirects)
                    o.emit("error", new h.MinigetError("Too many redirects"));
                  else {
                    if (!t.headers.location) {
                      let e = new h.MinigetError(
                        "Redirect status code given with no location",
                        t.statusCode
                      );
                      return o.emit("error", e), void g();
                    }
                    (e = t.headers.location),
                      setTimeout(
                        R,
                        1e3 * parseInt(t.headers["retry-after"] || "0", 10)
                      ),
                      o.emit("redirect", e);
                  }
                  g();
                } else if (c.has(t.statusCode)) {
                  if (
                    !S({
                      retryAfter: parseInt(t.headers["retry-after"] || "0", 10),
                    })
                  ) {
                    let e = new h.MinigetError(
                      "Status code: " + t.statusCode,
                      t.statusCode
                    );
                    o.emit("error", e);
                  }
                  g();
                } else {
                  if (
                    t.statusCode &&
                    (t.statusCode < 200 || t.statusCode >= 400)
                  ) {
                    let e = new h.MinigetError(
                      "Status code: " + t.statusCode,
                      t.statusCode
                    );
                    return (
                      t.statusCode >= 500 ? r(e) : o.emit("error", e), void g()
                    );
                  }
                  if (
                    ((m = t), i.acceptEncoding && t.headers["content-encoding"])
                  )
                    for (let e of t.headers["content-encoding"]
                      .split(", ")
                      .reverse()) {
                      let t = i.acceptEncoding[e];
                      t && ((m = m.pipe(t())), m.on("error", r));
                    }
                  v ||
                    ((v = parseInt("" + t.headers["content-length"], 10)),
                    (E =
                      "bytes" === t.headers["accept-ranges"] &&
                      v > 0 &&
                      i.maxReconnects > 0)),
                    t.on("data", _),
                    m.on("end", w),
                    m.pipe(o, { end: !E }),
                    (f = t),
                    o.emit("response", t),
                    t.on("error", r),
                    L(t, d);
                }
            })),
              p.on("error", r),
              p.on("close", a),
              L(p, u),
              o.destroyed && A(...O),
              o.emit("request", p),
              p.end();
          };
        let O;
        o.abort = (e) => {
          console.warn(
            "`MinigetStream#abort()` has been deprecated in favor of `MinigetStream#destroy()`"
          ),
            (o.aborted = !0),
            o.emit("abort"),
            o.destroy(e);
        };
        const A = (e) => {
          p.destroy(e),
            null == m || m.unpipe(o),
            null == m || m.destroy(),
            clearTimeout(g);
        };
        return (
          (o._destroy = (...e) => {
            (o.destroyed = !0), p ? A(...e) : (O = e);
          }),
          (o.text = () =>
            new Promise((e, t) => {
              let n = "";
              o.setEncoding("utf8"),
                o.on("data", (e) => (n += e)),
                o.on("end", () => e(n)),
                o.on("error", t);
            })),
          t.nextTick(R),
          o
        );
      }
      (h.MinigetError = class extends Error {
        constructor(e, t) {
          super(e), (this.statusCode = t);
        }
      }),
        (h.defaultOptions = {
          maxRedirects: 10,
          maxRetries: 2,
          maxReconnects: 0,
          backoff: { inc: 100, max: 1e4 },
        }),
        (e.exports = h);
    }).call(this, n(15));
  },
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    (t.byteLength = function (e) {
      var t = c(e),
        n = t[0],
        r = t[1];
      return (3 * (n + r)) / 4 - r;
    }),
      (t.toByteArray = function (e) {
        var t,
          n,
          r = c(e),
          a = r[0],
          s = r[1],
          l = new o(
            (function (e, t, n) {
              return (3 * (t + n)) / 4 - n;
            })(0, a, s)
          ),
          u = 0,
          d = s > 0 ? a - 4 : a;
        for (n = 0; n < d; n += 4)
          (t =
            (i[e.charCodeAt(n)] << 18) |
            (i[e.charCodeAt(n + 1)] << 12) |
            (i[e.charCodeAt(n + 2)] << 6) |
            i[e.charCodeAt(n + 3)]),
            (l[u++] = (t >> 16) & 255),
            (l[u++] = (t >> 8) & 255),
            (l[u++] = 255 & t);
        2 === s &&
          ((t = (i[e.charCodeAt(n)] << 2) | (i[e.charCodeAt(n + 1)] >> 4)),
          (l[u++] = 255 & t));
        1 === s &&
          ((t =
            (i[e.charCodeAt(n)] << 10) |
            (i[e.charCodeAt(n + 1)] << 4) |
            (i[e.charCodeAt(n + 2)] >> 2)),
          (l[u++] = (t >> 8) & 255),
          (l[u++] = 255 & t));
        return l;
      }),
      (t.fromByteArray = function (e) {
        for (
          var t, n = e.length, i = n % 3, o = [], a = 0, s = n - i;
          a < s;
          a += 16383
        )
          o.push(u(e, a, a + 16383 > s ? s : a + 16383));
        1 === i
          ? ((t = e[n - 1]), o.push(r[t >> 2] + r[(t << 4) & 63] + "=="))
          : 2 === i &&
            ((t = (e[n - 2] << 8) + e[n - 1]),
            o.push(r[t >> 10] + r[(t >> 4) & 63] + r[(t << 2) & 63] + "="));
        return o.join("");
      });
    for (
      var r = [],
        i = [],
        o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
        a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        s = 0,
        l = a.length;
      s < l;
      ++s
    )
      (r[s] = a[s]), (i[a.charCodeAt(s)] = s);
    function c(e) {
      var t = e.length;
      if (t % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var n = e.indexOf("=");
      return -1 === n && (n = t), [n, n === t ? 0 : 4 - (n % 4)];
    }
    function u(e, t, n) {
      for (var i, o, a = [], s = t; s < n; s += 3)
        (i =
          ((e[s] << 16) & 16711680) +
          ((e[s + 1] << 8) & 65280) +
          (255 & e[s + 2])),
          a.push(
            r[((o = i) >> 18) & 63] +
              r[(o >> 12) & 63] +
              r[(o >> 6) & 63] +
              r[63 & o]
          );
      return a.join("");
    }
    (i["-".charCodeAt(0)] = 62), (i["_".charCodeAt(0)] = 63);
  },
  function (e, t) {
    /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
    (t.read = function (e, t, n, r, i) {
      var o,
        a,
        s = 8 * i - r - 1,
        l = (1 << s) - 1,
        c = l >> 1,
        u = -7,
        d = n ? i - 1 : 0,
        h = n ? -1 : 1,
        p = e[t + d];
      for (
        d += h, o = p & ((1 << -u) - 1), p >>= -u, u += s;
        u > 0;
        o = 256 * o + e[t + d], d += h, u -= 8
      );
      for (
        a = o & ((1 << -u) - 1), o >>= -u, u += r;
        u > 0;
        a = 256 * a + e[t + d], d += h, u -= 8
      );
      if (0 === o) o = 1 - c;
      else {
        if (o === l) return a ? NaN : (1 / 0) * (p ? -1 : 1);
        (a += Math.pow(2, r)), (o -= c);
      }
      return (p ? -1 : 1) * a * Math.pow(2, o - r);
    }),
      (t.write = function (e, t, n, r, i, o) {
        var a,
          s,
          l,
          c = 8 * o - i - 1,
          u = (1 << c) - 1,
          d = u >> 1,
          h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          p = r ? 0 : o - 1,
          f = r ? 1 : -1,
          m = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
        for (
          t = Math.abs(t),
            isNaN(t) || t === 1 / 0
              ? ((s = isNaN(t) ? 1 : 0), (a = u))
              : ((a = Math.floor(Math.log(t) / Math.LN2)),
                t * (l = Math.pow(2, -a)) < 1 && (a--, (l *= 2)),
                (t += a + d >= 1 ? h / l : h * Math.pow(2, 1 - d)) * l >= 2 &&
                  (a++, (l /= 2)),
                a + d >= u
                  ? ((s = 0), (a = u))
                  : a + d >= 1
                  ? ((s = (t * l - 1) * Math.pow(2, i)), (a += d))
                  : ((s = t * Math.pow(2, d - 1) * Math.pow(2, i)), (a = 0)));
          i >= 8;
          e[n + p] = 255 & s, p += f, s /= 256, i -= 8
        );
        for (
          a = (a << i) | s, c += i;
          c > 0;
          e[n + p] = 255 & a, p += f, a /= 256, c -= 8
        );
        e[n + p - f] |= 128 * m;
      });
  },
  ,
  ,
  function (e, t, n) {
    var r = n(18),
      i = r.Buffer;
    function o(e, t) {
      for (var n in e) t[n] = e[n];
    }
    function a(e, t, n) {
      return i(e, t, n);
    }
    i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
      ? (e.exports = r)
      : (o(r, t), (t.Buffer = a)),
      o(i, a),
      (a.from = function (e, t, n) {
        if ("number" == typeof e)
          throw new TypeError("Argument must not be a number");
        return i(e, t, n);
      }),
      (a.alloc = function (e, t, n) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        var r = i(e);
        return (
          void 0 !== t
            ? "string" == typeof n
              ? r.fill(t, n)
              : r.fill(t)
            : r.fill(0),
          r
        );
      }),
      (a.allocUnsafe = function (e) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        return i(e);
      }),
      (a.allocUnsafeSlow = function (e) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        return r.SlowBuffer(e);
      });
  },
  function (e, t, n) {
    "use strict";
    (function (t, r, i) {
      var o = n(52);
      function a(e) {
        var t = this;
        (this.next = null),
          (this.entry = null),
          (this.finish = function () {
            !(function (e, t, n) {
              var r = e.entry;
              e.entry = null;
              for (; r; ) {
                var i = r.callback;
                t.pendingcb--, i(n), (r = r.next);
              }
              t.corkedRequestsFree
                ? (t.corkedRequestsFree.next = e)
                : (t.corkedRequestsFree = e);
            })(t, e);
          });
      }
      e.exports = b;
      var s,
        l =
          !t.browser && ["v0.10", "v0.9."].indexOf(t.version.slice(0, 5)) > -1
            ? r
            : o.nextTick;
      b.WritableState = v;
      var c = Object.create(n(41));
      c.inherits = n(17);
      var u = { deprecate: n(81) },
        d = n(79),
        h = n(63).Buffer,
        p = i.Uint8Array || function () {};
      var f,
        m = n(80);
      function g() {}
      function v(e, t) {
        (s = s || n(28)), (e = e || {});
        var r = t instanceof s;
        (this.objectMode = !!e.objectMode),
          r && (this.objectMode = this.objectMode || !!e.writableObjectMode);
        var i = e.highWaterMark,
          c = e.writableHighWaterMark,
          u = this.objectMode ? 16 : 16384;
        (this.highWaterMark = i || 0 === i ? i : r && (c || 0 === c) ? c : u),
          (this.highWaterMark = Math.floor(this.highWaterMark)),
          (this.finalCalled = !1),
          (this.needDrain = !1),
          (this.ending = !1),
          (this.ended = !1),
          (this.finished = !1),
          (this.destroyed = !1);
        var d = !1 === e.decodeStrings;
        (this.decodeStrings = !d),
          (this.defaultEncoding = e.defaultEncoding || "utf8"),
          (this.length = 0),
          (this.writing = !1),
          (this.corked = 0),
          (this.sync = !0),
          (this.bufferProcessing = !1),
          (this.onwrite = function (e) {
            !(function (e, t) {
              var n = e._writableState,
                r = n.sync,
                i = n.writecb;
              if (
                ((function (e) {
                  (e.writing = !1),
                    (e.writecb = null),
                    (e.length -= e.writelen),
                    (e.writelen = 0);
                })(n),
                t)
              )
                !(function (e, t, n, r, i) {
                  --t.pendingcb,
                    n
                      ? (o.nextTick(i, r),
                        o.nextTick(C, e, t),
                        (e._writableState.errorEmitted = !0),
                        e.emit("error", r))
                      : (i(r),
                        (e._writableState.errorEmitted = !0),
                        e.emit("error", r),
                        C(e, t));
                })(e, n, r, t, i);
              else {
                var a = E(n);
                a ||
                  n.corked ||
                  n.bufferProcessing ||
                  !n.bufferedRequest ||
                  w(e, n),
                  r ? l(_, e, n, a, i) : _(e, n, a, i);
              }
            })(t, e);
          }),
          (this.writecb = null),
          (this.writelen = 0),
          (this.bufferedRequest = null),
          (this.lastBufferedRequest = null),
          (this.pendingcb = 0),
          (this.prefinished = !1),
          (this.errorEmitted = !1),
          (this.bufferedRequestCount = 0),
          (this.corkedRequestsFree = new a(this));
      }
      function b(e) {
        if (((s = s || n(28)), !(f.call(b, this) || this instanceof s)))
          return new b(e);
        (this._writableState = new v(e, this)),
          (this.writable = !0),
          e &&
            ("function" == typeof e.write && (this._write = e.write),
            "function" == typeof e.writev && (this._writev = e.writev),
            "function" == typeof e.destroy && (this._destroy = e.destroy),
            "function" == typeof e.final && (this._final = e.final)),
          d.call(this);
      }
      function y(e, t, n, r, i, o, a) {
        (t.writelen = r),
          (t.writecb = a),
          (t.writing = !0),
          (t.sync = !0),
          n ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite),
          (t.sync = !1);
      }
      function _(e, t, n, r) {
        n ||
          (function (e, t) {
            0 === t.length &&
              t.needDrain &&
              ((t.needDrain = !1), e.emit("drain"));
          })(e, t),
          t.pendingcb--,
          r(),
          C(e, t);
      }
      function w(e, t) {
        t.bufferProcessing = !0;
        var n = t.bufferedRequest;
        if (e._writev && n && n.next) {
          var r = t.bufferedRequestCount,
            i = new Array(r),
            o = t.corkedRequestsFree;
          o.entry = n;
          for (var s = 0, l = !0; n; )
            (i[s] = n), n.isBuf || (l = !1), (n = n.next), (s += 1);
          (i.allBuffers = l),
            y(e, t, !0, t.length, i, "", o.finish),
            t.pendingcb++,
            (t.lastBufferedRequest = null),
            o.next
              ? ((t.corkedRequestsFree = o.next), (o.next = null))
              : (t.corkedRequestsFree = new a(t)),
            (t.bufferedRequestCount = 0);
        } else {
          for (; n; ) {
            var c = n.chunk,
              u = n.encoding,
              d = n.callback;
            if (
              (y(e, t, !1, t.objectMode ? 1 : c.length, c, u, d),
              (n = n.next),
              t.bufferedRequestCount--,
              t.writing)
            )
              break;
          }
          null === n && (t.lastBufferedRequest = null);
        }
        (t.bufferedRequest = n), (t.bufferProcessing = !1);
      }
      function E(e) {
        return (
          e.ending &&
          0 === e.length &&
          null === e.bufferedRequest &&
          !e.finished &&
          !e.writing
        );
      }
      function T(e, t) {
        e._final(function (n) {
          t.pendingcb--,
            n && e.emit("error", n),
            (t.prefinished = !0),
            e.emit("prefinish"),
            C(e, t);
        });
      }
      function C(e, t) {
        var n = E(t);
        return (
          n &&
            (!(function (e, t) {
              t.prefinished ||
                t.finalCalled ||
                ("function" == typeof e._final
                  ? (t.pendingcb++, (t.finalCalled = !0), o.nextTick(T, e, t))
                  : ((t.prefinished = !0), e.emit("prefinish")));
            })(e, t),
            0 === t.pendingcb && ((t.finished = !0), e.emit("finish"))),
          n
        );
      }
      c.inherits(b, d),
        (v.prototype.getBuffer = function () {
          for (var e = this.bufferedRequest, t = []; e; )
            t.push(e), (e = e.next);
          return t;
        }),
        (function () {
          try {
            Object.defineProperty(v.prototype, "buffer", {
              get: u.deprecate(
                function () {
                  return this.getBuffer();
                },
                "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                "DEP0003"
              ),
            });
          } catch (e) {}
        })(),
        "function" == typeof Symbol &&
        Symbol.hasInstance &&
        "function" == typeof Function.prototype[Symbol.hasInstance]
          ? ((f = Function.prototype[Symbol.hasInstance]),
            Object.defineProperty(b, Symbol.hasInstance, {
              value: function (e) {
                return (
                  !!f.call(this, e) ||
                  (this === b && e && e._writableState instanceof v)
                );
              },
            }))
          : (f = function (e) {
              return e instanceof this;
            }),
        (b.prototype.pipe = function () {
          this.emit("error", new Error("Cannot pipe, not readable"));
        }),
        (b.prototype.write = function (e, t, n) {
          var r,
            i = this._writableState,
            a = !1,
            s = !i.objectMode && ((r = e), h.isBuffer(r) || r instanceof p);
          return (
            s &&
              !h.isBuffer(e) &&
              (e = (function (e) {
                return h.from(e);
              })(e)),
            "function" == typeof t && ((n = t), (t = null)),
            s ? (t = "buffer") : t || (t = i.defaultEncoding),
            "function" != typeof n && (n = g),
            i.ended
              ? (function (e, t) {
                  var n = new Error("write after end");
                  e.emit("error", n), o.nextTick(t, n);
                })(this, n)
              : (s ||
                  (function (e, t, n, r) {
                    var i = !0,
                      a = !1;
                    return (
                      null === n
                        ? (a = new TypeError(
                            "May not write null values to stream"
                          ))
                        : "string" == typeof n ||
                          void 0 === n ||
                          t.objectMode ||
                          (a = new TypeError(
                            "Invalid non-string/buffer chunk"
                          )),
                      a && (e.emit("error", a), o.nextTick(r, a), (i = !1)),
                      i
                    );
                  })(this, i, e, n)) &&
                (i.pendingcb++,
                (a = (function (e, t, n, r, i, o) {
                  if (!n) {
                    var a = (function (e, t, n) {
                      e.objectMode ||
                        !1 === e.decodeStrings ||
                        "string" != typeof t ||
                        (t = h.from(t, n));
                      return t;
                    })(t, r, i);
                    r !== a && ((n = !0), (i = "buffer"), (r = a));
                  }
                  var s = t.objectMode ? 1 : r.length;
                  t.length += s;
                  var l = t.length < t.highWaterMark;
                  l || (t.needDrain = !0);
                  if (t.writing || t.corked) {
                    var c = t.lastBufferedRequest;
                    (t.lastBufferedRequest = {
                      chunk: r,
                      encoding: i,
                      isBuf: n,
                      callback: o,
                      next: null,
                    }),
                      c
                        ? (c.next = t.lastBufferedRequest)
                        : (t.bufferedRequest = t.lastBufferedRequest),
                      (t.bufferedRequestCount += 1);
                  } else y(e, t, !1, s, r, i, o);
                  return l;
                })(this, i, s, e, t, n))),
            a
          );
        }),
        (b.prototype.cork = function () {
          this._writableState.corked++;
        }),
        (b.prototype.uncork = function () {
          var e = this._writableState;
          e.corked &&
            (e.corked--,
            e.writing ||
              e.corked ||
              e.finished ||
              e.bufferProcessing ||
              !e.bufferedRequest ||
              w(this, e));
        }),
        (b.prototype.setDefaultEncoding = function (e) {
          if (
            ("string" == typeof e && (e = e.toLowerCase()),
            !(
              [
                "hex",
                "utf8",
                "utf-8",
                "ascii",
                "binary",
                "base64",
                "ucs2",
                "ucs-2",
                "utf16le",
                "utf-16le",
                "raw",
              ].indexOf((e + "").toLowerCase()) > -1
            ))
          )
            throw new TypeError("Unknown encoding: " + e);
          return (this._writableState.defaultEncoding = e), this;
        }),
        Object.defineProperty(b.prototype, "writableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._writableState.highWaterMark;
          },
        }),
        (b.prototype._write = function (e, t, n) {
          n(new Error("_write() is not implemented"));
        }),
        (b.prototype._writev = null),
        (b.prototype.end = function (e, t, n) {
          var r = this._writableState;
          "function" == typeof e
            ? ((n = e), (e = null), (t = null))
            : "function" == typeof t && ((n = t), (t = null)),
            null != e && this.write(e, t),
            r.corked && ((r.corked = 1), this.uncork()),
            r.ending ||
              r.finished ||
              (function (e, t, n) {
                (t.ending = !0),
                  C(e, t),
                  n && (t.finished ? o.nextTick(n) : e.once("finish", n));
                (t.ended = !0), (e.writable = !1);
              })(this, r, n);
        }),
        Object.defineProperty(b.prototype, "destroyed", {
          get: function () {
            return (
              void 0 !== this._writableState && this._writableState.destroyed
            );
          },
          set: function (e) {
            this._writableState && (this._writableState.destroyed = e);
          },
        }),
        (b.prototype.destroy = m.destroy),
        (b.prototype._undestroy = m.undestroy),
        (b.prototype._destroy = function (e, t) {
          this.end(), t(e);
        });
    }).call(this, n(15), n(24).setImmediate, n(9));
  },
  function (e, t, n) {
    /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
    var r = n(18),
      i = r.Buffer;
    function o(e, t) {
      for (var n in e) t[n] = e[n];
    }
    function a(e, t, n) {
      return i(e, t, n);
    }
    i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
      ? (e.exports = r)
      : (o(r, t), (t.Buffer = a)),
      (a.prototype = Object.create(i.prototype)),
      o(i, a),
      (a.from = function (e, t, n) {
        if ("number" == typeof e)
          throw new TypeError("Argument must not be a number");
        return i(e, t, n);
      }),
      (a.alloc = function (e, t, n) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        var r = i(e);
        return (
          void 0 !== t
            ? "string" == typeof n
              ? r.fill(t, n)
              : r.fill(t)
            : r.fill(0),
          r
        );
      }),
      (a.allocUnsafe = function (e) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        return i(e);
      }),
      (a.allocUnsafeSlow = function (e) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        return r.SlowBuffer(e);
      });
  },
  function (e, t, n) {
    "use strict";
    var r =
      (this && this.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e };
      };
    const i = n(32),
      o = r(n(54)),
      a = r(n(287)),
      s = r(n(288)),
      l = n(289),
      c = n(91),
      u = { m3u8: a.default, "dash-mpd": s.default };
    let d = (e, t = {}) => {
      const n = new i.PassThrough({ highWaterMark: t.highWaterMark }),
        r = t.chunkReadahead || 3,
        a = t.liveBuffer || 2e4,
        s = t.requestOptions,
        d = u[t.parser || (/\.mpd$/.test(e) ? "dash-mpd" : "m3u8")];
      if (!d) throw TypeError(`parser '${t.parser}' not supported`);
      let h = 0;
      void 0 !== t.begin &&
        (h =
          "string" == typeof t.begin
            ? c.humanStr(t.begin)
            : Math.max(t.begin - a, 0));
      const p = (e) => {
        for (let t of [
          "abort",
          "request",
          "response",
          "redirect",
          "retry",
          "reconnect",
        ])
          e.on(t, n.emit.bind(n, t));
      };
      let f;
      const m = new l.Queue(
        (e, t) => {
          f = e;
          let r = 0;
          e.on("data", (e) => (r += e.length)),
            e.pipe(n, { end: !1 }),
            e.on("end", () => t(null, r));
        },
        { concurrency: 1 }
      );
      let g = 0,
        v = 0;
      const b = new l.Queue(
          (t, r) => {
            let i = Object.assign({}, s);
            t.range &&
              (i.headers = Object.assign({}, i.headers, {
                Range: `bytes=${t.range.start}-${t.range.end}`,
              }));
            let a = o.default(new URL(t.url, e).toString(), i);
            a.on("error", r),
              p(a),
              m.push(a, (e, i) => {
                (v += +i),
                  n.emit(
                    "progress",
                    { num: ++g, size: i, duration: t.duration, url: t.url },
                    b.total,
                    v
                  ),
                  r(null);
              });
          },
          { concurrency: r }
        ),
        y = (e) => {
          n.emit("error", e), n.end();
        };
      let _,
        w,
        E,
        T,
        C = !0,
        x = !1,
        S = !1;
      const L = (e) => {
        if (((f = null), e)) y(e);
        else if (!C && !x && !S && b.tasks.length + b.active <= _) {
          let e = Math.max(0, w - (Date.now() - T));
          (C = !0), (E = setTimeout(k, e));
        } else (!x && !S) || b.tasks.length || b.active || n.end();
      };
      let R,
        O,
        A = 0;
      const k = () => {
        (T = Date.now()), (R = o.default(e, s)), R.on("error", y), p(R);
        const n = R.pipe(new d(t.id));
        n.on("starttime", (e) => {
          A || ((A = e), "string" == typeof t.begin && h >= 0 && (h += A));
        }),
          n.on("endlist", () => {
            S = !0;
          }),
          n.on("endearly", R.unpipe.bind(R, n));
        let r = [];
        const i = (e) => {
          if (!e.init) {
            if (e.seq <= O) return;
            O = e.seq;
          }
          (h = e.time), b.push(e, L), r.push(e);
        };
        let l = [],
          c = 0;
        n.on("item", (e) => {
          let t = Object.assign({ time: A }, e);
          if (h <= t.time) i(t);
          else
            for (
              l.push(t), c += t.duration;
              l.length > 1 && c - l[0].duration > a;

            ) {
              const e = l.shift();
              c -= e.duration;
            }
          A += t.duration;
        }),
          n.on("end", () => {
            (R = null),
              !r.length &&
                l.length &&
                l.forEach((e) => {
                  i(e);
                }),
              (_ = Math.max(1, Math.ceil(0.01 * r.length))),
              (w = r.reduce((e, t) => t.duration + e, 0)),
              (C = !1),
              L(null);
          });
      };
      return (
        k(),
        (n.end = () => (
          (x = !0),
          m.die(),
          b.die(),
          clearTimeout(E),
          null == R || R.destroy(),
          null == f || f.destroy(),
          i.PassThrough.prototype.end.call(n, null),
          n
        )),
        n
      );
    };
    (d.parseTimestamp = c.humanStr), (e.exports = d);
  },
  function (e, t, n) {
    "use strict";
    var r = n(33).codes.ERR_STREAM_PREMATURE_CLOSE;
    function i() {}
    e.exports = function e(t, n, o) {
      if ("function" == typeof n) return e(t, null, n);
      n || (n = {}),
        (o = (function (e) {
          var t = !1;
          return function () {
            if (!t) {
              t = !0;
              for (
                var n = arguments.length, r = new Array(n), i = 0;
                i < n;
                i++
              )
                r[i] = arguments[i];
              e.apply(this, r);
            }
          };
        })(o || i));
      var a = n.readable || (!1 !== n.readable && t.readable),
        s = n.writable || (!1 !== n.writable && t.writable),
        l = function () {
          t.writable || u();
        },
        c = t._writableState && t._writableState.finished,
        u = function () {
          (s = !1), (c = !0), a || o.call(t);
        },
        d = t._readableState && t._readableState.endEmitted,
        h = function () {
          (a = !1), (d = !0), s || o.call(t);
        },
        p = function (e) {
          o.call(t, e);
        },
        f = function () {
          var e;
          return a && !d
            ? ((t._readableState && t._readableState.ended) || (e = new r()),
              o.call(t, e))
            : s && !c
            ? ((t._writableState && t._writableState.ended) || (e = new r()),
              o.call(t, e))
            : void 0;
        },
        m = function () {
          t.req.on("finish", u);
        };
      return (
        !(function (e) {
          return e.setHeader && "function" == typeof e.abort;
        })(t)
          ? s && !t._writableState && (t.on("end", l), t.on("close", l))
          : (t.on("complete", u),
            t.on("abort", f),
            t.req ? m() : t.on("request", m)),
        t.on("end", h),
        t.on("finish", u),
        !1 !== n.error && t.on("error", p),
        t.on("close", f),
        function () {
          t.removeListener("complete", u),
            t.removeListener("abort", f),
            t.removeListener("request", m),
            t.req && t.req.removeListener("finish", u),
            t.removeListener("end", l),
            t.removeListener("close", l),
            t.removeListener("finish", u),
            t.removeListener("end", h),
            t.removeListener("error", p),
            t.removeListener("close", f);
        }
      );
    };
  },
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    (function (e) {
      var r = n(0),
        i = n(6),
        o = n(1),
        a = n(4),
        s = n(2),
        l = n(73);
      t.a = new (class {
        constructor() {
          (this._callbacks = {}),
            (this._data = new Map()),
            chrome.downloads.onChanged.addListener((e) => {
              var t, n, i;
              const o = this._data.get(e.id);
              if (o && e.error) {
                const i = o.tid;
                (o.item.error = e.error.current),
                  "USER_CANCELED" !== e.error.current
                    ? (r.logDownloadError({
                        url: JSON.stringify(
                          null === (t = o.item) || void 0 === t ? void 0 : t.url
                        ),
                        referrer:
                          null === (n = o.item) || void 0 === n
                            ? void 0
                            : n.referrer,
                        error:
                          e.error.current || "Error: After call download API",
                      }),
                      EE.emit("download_error", {
                        tabId: i,
                        type: "download_error",
                        params: o.item,
                      }))
                    : EE.emit("finish_download", {
                        tabId: i,
                        type: "download_canceled",
                        params: o.item,
                      }),
                  this._handleError(e.error.current, o);
              }
              if (e.state && "complete" === e.state.current) {
                const t = this._data.get(e.id);
                (t.item.playable =
                  null === (i = e.playable) || void 0 === i
                    ? void 0
                    : i.current),
                  (t.item.state = "complete");
                const n = t.tid;
                EE.emit("finish_download", {
                  tabId: n,
                  type: "widget_playnow",
                  params: t.item,
                });
              }
            }),
            chrome.tabs.onRemoved.addListener((e) => {
              delete this._callbacks[e], delete this._tabMedia2id[e];
            });
        }
        processRequest(e, t, n, r) {
          switch (t) {
            case "download":
              return this.download(e, n, r);
            case "play":
              this.play(n);
          }
        }
        _handleError(e, t) {
          if (!e) return;
          if ("USER_CANCELED" === e)
            return void s.a.log("Download", s.a.DOWNLOAD_CANCELED);
          let n;
          0 === e.indexOf("SERVER_")
            ? (n = "RefrSE")
            : 0 === e.indexOf("FILE_") && (n = "RefrFE"),
            n && s.a.log(n, t.ref);
        }
        _options(t, n) {
          var a, s;
          t.filename = (
            null === (a = t.filename) || void 0 === a
              ? void 0
              : a.match(/[*~]/gi)
          )
            ? "_" + t.filename.replace(/[*~]/gi, ".")
            : t.filename;
          const c = { filename: t.filename },
            u = t.url;
          if ("object" == typeof u) {
            if (!u.videoUrl || !u.audioUrl) return;
            chrome.mediaDownload
              ? ((c.videoUrl = u.videoUrl), (c.audioUrl = u.audioUrl))
              : (c.url = u.videoUrl);
          } else c.url = u;
          if (chrome.mediaDownload) {
            const e = t.referrer;
            e && (c.referrer = e);
            const n = [c.url, c.audioUrl, c.videoUrl].filter(r.defined);
            r.isMatches(n, o.b) && (c.streamsNumber = 1),
              (t.hls || t.dashMPD) &&
                (t.hls &&
                  ((c.convertToMp4 = !0),
                  (c.streamsNumber = l.a.HLS),
                  "string" == typeof u &&
                    u.match(/khophim18\.net\/m3u8/) &&
                    (c.convertToMp4 = !1)),
                t.dashMPD && (c.streamsNumber = l.a.DASH_MPD),
                (t.skipConvert || "object" == typeof u) &&
                  delete c.convertToMp4),
              i.a.DOWNLOAD.M3U8_AUDIO &&
                "audio" === t.type &&
                (delete c.convertToMp4, (c.convertToMp3 = !0));
          }
          if (void 0 !== t.soundOnly) {
            const e = 128;
            (c.soundOnly = t.soundOnly),
              (c.soundQuality = t.resolution ? parseInt(t.resolution) : e);
          }
          t.dashMPD && t.dashVideoId && (c.videoId = "" + t.dashVideoId),
            t.play_list && (c.playList = t.play_list),
            t.hlsKeyMem &&
              c.extraData.push({ name: "hlsKeyMem", value: t.hlsKeyMem }),
            t.hls && t.dashVideoId && (c.videoId = t.dashVideoId);
          let d = {
            name: "tab_url",
            value: t.referrer || e.tab_url || (null == n ? void 0 : n.url),
          };
          d.value || (d = {}), (c.extraData = [d, ...(t.extraData || [])]);
          const h = /\.yt_srt$/i;
          return (
            (null === (s = t.filename) || void 0 === s ? void 0 : s.match(h)) &&
              ((c.isYoutubeSubtitles = !0),
              (c.filename = c.filename.replace(h, ".srt"))),
            t.skipReferrer && delete c.referrer,
            c
          );
        }
        download(e, t, n) {
          const r = this,
            o = t.referrer;
          return new Promise((l) => {
            var c, u;
            function d(n) {
              if (n) {
                (t.playId = n), (t.succeed = !0);
                const i = { tid: e, item: t },
                  c = Object(a.b)(o);
                return r._data.set(n, i), s.a.log("Refr", c), void l(i.item);
              }
              (t.error = chrome.runtime.lastError), l(t);
            }
            "object" == typeof t.url &&
              (null === (c = t.referrer) || void 0 === c
                ? void 0
                : c.match(
                    /vieon.vn|xemxx.me|www.skillshare.com|mphimmoitv\.com|hentaiz\./g
                  )) &&
              t.hls &&
              (t.hls = !1);
            const h = r._options(t, n);
            if (h)
              if (h.url) {
                h.conflictAction = "uniquify";
                const e =
                  /(https:\/\/trangtainhac\.com)|(http:\/\/animehay\.tv)|(https:\/\/salaphim\.com)|(https:\/\/lucaphim\.com)|(https:\/\/[\s\S]+\.yeuphim18x\.com)|(https:\/\/[\s\S]*hentaipro\.net)|(z[\d]+hay\.xyz)|(\.xyz\/video\.mp4\?hash=[a-z0-9]+.*&key=lbs\.cdnproxy\.xyz)|(https:\/\/vlxyz\.net)|(\/m3u8-rd\.[\s\S]+\.xyz\/m3u8)|(https:\/\/vjav\.com\/videos)/i;
                (null === (u = null == h ? void 0 : h.referrer) || void 0 === u
                  ? void 0
                  : u.match(e)) && delete h.referrer,
                  chrome.downloads.download(h, d);
              } else
                delete h.convertToMp4,
                  delete h.extraData,
                  chrome.mediaDownload.combineStreams(h, d);
            else d();
            if (h.referrer && h.referrer.includes("youtube.com")) {
              const e = h.filename.split(".").pop();
              s.a.logYtExtension(e);
            }
            if (i.a.CUSTOM_METRICS_JSON && h.referrer) {
              const e = { timestamp_ms: Date.now(), page_url: h.referrer };
              h.url
                ? (e.download_url = h.url)
                : (e.download_url = { audio: h.audioUrl, video: h.videoUrl }),
                s.a.log("recordCustomData", [
                  { key: "savior_download_start", value: JSON.stringify(e) },
                ]);
            }
          });
        }
        play(e) {
          chrome.downloads.play(e);
        }
      })();
    }).call(this, n(9));
  },
  function (e, t, n) {
    "use strict";
    var r;
    n.d(t, "a", function () {
      return r;
    }),
      (function (e) {
        (e[(e.DEFAULT = 1)] = "DEFAULT"),
          (e[(e.HLS = -42)] = "HLS"),
          (e[(e.DASH_MPD = -43)] = "DASH_MPD");
      })(r || (r = {}));
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return s;
    }),
      n.d(t, "a", function () {
        return l;
      });
    var r = n(121),
      i = n.n(r);
    class o {
      constructor() {
        (this.tests = {
          instantdownload1: {
            groups: ["DARK", "LIGHT", "DARK", "LIGHT"],
            buckets: 200,
          },
          sidebaronboarding: { groups: ["A", "B"], buckets: 5 },
          darkmodeonboarding: { groups: ["A", "B"], buckets: 20 },
        }),
          (this.cookies = {}),
          (this.forced = {});
      }
      processRequest({ testName: e }) {
        return e
          ? this.getCookies().then(this.getTest.bind(this, e))
          : Promise.reject("No test name");
      }
      getCookies() {
        return new Promise((e, t) => {
          chrome.cookies.getAll({ url: "https://coccoc.com" }, (n) => {
            const r = n.find((e) => "uid" === e.name),
              i = n.find((e) => "forceAB" === e.name);
            if (r && r.value) {
              if (((this.cookies = { uid: r.value }), i && i.value)) {
                this.cookies.forceAB = i.value;
                try {
                  const e = decodeURIComponent(this.cookies.forceAB);
                  this.forced = o.parseForcedTests(e);
                } catch (e) {
                  console.warn("Cannot parse forced tests");
                }
              }
              e();
            } else t("No uid cookie");
          });
        });
      }
      getTest(e) {
        const t = this.forced[e];
        if (void 0 !== t) {
          const n = this.tests[e] ? this.tests[e].groups[t] : null;
          return Promise.resolve({ group: t, groupName: n });
        }
        const n = this.tests[e];
        if (
          !n ||
          (n.time &&
            n.time.end &&
            (Date.parse(n.time.end) < Date.now() ||
              (n.time &&
                n.time.start &&
                Date.parse(n.time.start) > Date.now())))
        )
          return Promise.resolve({ group: null });
        const r = o.generateGroup(n.groups, n.buckets, this.cookies.uid, e);
        if (!r) return Promise.resolve({ group: null });
        const i = n.groups.indexOf(r);
        return Promise.resolve({ group: i, groupName: r });
      }
      static generateGroup(e, t, n, r = "") {
        return (
          e[
            parseInt(
              new i.a()
                .update(n + String(r))
                .digest("hex")
                .slice(-12),
              16
            ) % t
          ] || null
        );
      }
      static parseForcedTests(e) {
        return (e || "")
          .split(",")
          .filter(Boolean)
          .reduce(function (e, t) {
            const n = t.split(":");
            return (e[n[0]] = Number(n[1])), e;
          }, {});
      }
    }
    var a = new o();
    function s(e, t) {
      return new Promise((n) => {
        chrome.coccocPrivate
          ? chrome.coccocPrivate.getFeatureState(e.params.type, (r) => {
              chrome.tabs.query({ windowType: "popup" }, (i) => {
                !i.some((e) => {
                  var n;
                  return (
                    e.id ==
                    (null === (n = t.tab) || void 0 === n ? void 0 : n.id)
                  );
                }) &&
                  r.enabled &&
                  (e.params.testName
                    ? a
                        .processRequest({ testName: e.params.testName })
                        .then((e) => {
                          n({
                            type: "support_result",
                            data: {
                              abTestData: e,
                              featureData:
                                null == r ? void 0 : r.configurations,
                            },
                          });
                        })
                    : n({
                        type: "support_result",
                        data: {
                          featureData: null == r ? void 0 : r.configurations,
                        },
                      }));
              });
            })
          : n({ type: "support_result", data: chrome.coccocPrivate });
      });
    }
    function l(e, t) {
      var n;
      const r = e.params;
      (r.params.windowId =
        null === (n = t.tab) || void 0 === n ? void 0 : n.windowId),
        r.activatName
          ? chrome.coccocPrivate.getFeatureState(r.checkName, (e) => {
              var n, i, o, a;
              if (e.enabled) {
                if (
                  "sidebar" == r.checkName &&
                  r.params.predefinedIcons &&
                  (null ===
                    (o =
                      null ===
                        (i =
                          null === (n = e.configurations) || void 0 === n
                            ? void 0
                            : n.additionalProperties) || void 0 === i
                        ? void 0
                        : i.active_url) || void 0 === o
                    ? void 0
                    : o.includes(r.params.predefinedIcons))
                )
                  return;
                c(r);
              } else
                chrome.coccocPrivate.actOnFeature(
                  {
                    action: r.activatName,
                    params: {
                      windowId:
                        null === (a = t.tab) || void 0 === a
                          ? void 0
                          : a.windowId,
                    },
                  },
                  () => {
                    c(r);
                  }
                );
            })
          : c(r);
    }
    function c(e) {
      chrome.coccocPrivate.actOnFeature(
        { action: e.action, params: e.params },
        () => {}
      );
    }
  },
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    (function (t, r) {
      var i = n(52);
      e.exports = y;
      var o,
        a = n(48);
      y.ReadableState = b;
      n(39).EventEmitter;
      var s = function (e, t) {
          return e.listeners(t).length;
        },
        l = n(79),
        c = n(63).Buffer,
        u = t.Uint8Array || function () {};
      var d = Object.create(n(41));
      d.inherits = n(17);
      var h = n(267),
        p = void 0;
      p = h && h.debuglog ? h.debuglog("stream") : function () {};
      var f,
        m = n(268),
        g = n(80);
      d.inherits(y, l);
      var v = ["error", "close", "destroy", "pause", "resume"];
      function b(e, t) {
        e = e || {};
        var r = t instanceof (o = o || n(28));
        (this.objectMode = !!e.objectMode),
          r && (this.objectMode = this.objectMode || !!e.readableObjectMode);
        var i = e.highWaterMark,
          a = e.readableHighWaterMark,
          s = this.objectMode ? 16 : 16384;
        (this.highWaterMark = i || 0 === i ? i : r && (a || 0 === a) ? a : s),
          (this.highWaterMark = Math.floor(this.highWaterMark)),
          (this.buffer = new m()),
          (this.length = 0),
          (this.pipes = null),
          (this.pipesCount = 0),
          (this.flowing = null),
          (this.ended = !1),
          (this.endEmitted = !1),
          (this.reading = !1),
          (this.sync = !0),
          (this.needReadable = !1),
          (this.emittedReadable = !1),
          (this.readableListening = !1),
          (this.resumeScheduled = !1),
          (this.destroyed = !1),
          (this.defaultEncoding = e.defaultEncoding || "utf8"),
          (this.awaitDrain = 0),
          (this.readingMore = !1),
          (this.decoder = null),
          (this.encoding = null),
          e.encoding &&
            (f || (f = n(42).StringDecoder),
            (this.decoder = new f(e.encoding)),
            (this.encoding = e.encoding));
      }
      function y(e) {
        if (((o = o || n(28)), !(this instanceof y))) return new y(e);
        (this._readableState = new b(e, this)),
          (this.readable = !0),
          e &&
            ("function" == typeof e.read && (this._read = e.read),
            "function" == typeof e.destroy && (this._destroy = e.destroy)),
          l.call(this);
      }
      function _(e, t, n, r, i) {
        var o,
          a = e._readableState;
        null === t
          ? ((a.reading = !1),
            (function (e, t) {
              if (t.ended) return;
              if (t.decoder) {
                var n = t.decoder.end();
                n &&
                  n.length &&
                  (t.buffer.push(n), (t.length += t.objectMode ? 1 : n.length));
              }
              (t.ended = !0), T(e);
            })(e, a))
          : (i ||
              (o = (function (e, t) {
                var n;
                (r = t),
                  c.isBuffer(r) ||
                    r instanceof u ||
                    "string" == typeof t ||
                    void 0 === t ||
                    e.objectMode ||
                    (n = new TypeError("Invalid non-string/buffer chunk"));
                var r;
                return n;
              })(a, t)),
            o
              ? e.emit("error", o)
              : a.objectMode || (t && t.length > 0)
              ? ("string" == typeof t ||
                  a.objectMode ||
                  Object.getPrototypeOf(t) === c.prototype ||
                  (t = (function (e) {
                    return c.from(e);
                  })(t)),
                r
                  ? a.endEmitted
                    ? e.emit(
                        "error",
                        new Error("stream.unshift() after end event")
                      )
                    : w(e, a, t, !0)
                  : a.ended
                  ? e.emit("error", new Error("stream.push() after EOF"))
                  : ((a.reading = !1),
                    a.decoder && !n
                      ? ((t = a.decoder.write(t)),
                        a.objectMode || 0 !== t.length
                          ? w(e, a, t, !1)
                          : x(e, a))
                      : w(e, a, t, !1)))
              : r || (a.reading = !1));
        return (function (e) {
          return (
            !e.ended &&
            (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
          );
        })(a);
      }
      function w(e, t, n, r) {
        t.flowing && 0 === t.length && !t.sync
          ? (e.emit("data", n), e.read(0))
          : ((t.length += t.objectMode ? 1 : n.length),
            r ? t.buffer.unshift(n) : t.buffer.push(n),
            t.needReadable && T(e)),
          x(e, t);
      }
      Object.defineProperty(y.prototype, "destroyed", {
        get: function () {
          return (
            void 0 !== this._readableState && this._readableState.destroyed
          );
        },
        set: function (e) {
          this._readableState && (this._readableState.destroyed = e);
        },
      }),
        (y.prototype.destroy = g.destroy),
        (y.prototype._undestroy = g.undestroy),
        (y.prototype._destroy = function (e, t) {
          this.push(null), t(e);
        }),
        (y.prototype.push = function (e, t) {
          var n,
            r = this._readableState;
          return (
            r.objectMode
              ? (n = !0)
              : "string" == typeof e &&
                ((t = t || r.defaultEncoding) !== r.encoding &&
                  ((e = c.from(e, t)), (t = "")),
                (n = !0)),
            _(this, e, t, !1, n)
          );
        }),
        (y.prototype.unshift = function (e) {
          return _(this, e, null, !0, !1);
        }),
        (y.prototype.isPaused = function () {
          return !1 === this._readableState.flowing;
        }),
        (y.prototype.setEncoding = function (e) {
          return (
            f || (f = n(42).StringDecoder),
            (this._readableState.decoder = new f(e)),
            (this._readableState.encoding = e),
            this
          );
        });
      function E(e, t) {
        return e <= 0 || (0 === t.length && t.ended)
          ? 0
          : t.objectMode
          ? 1
          : e != e
          ? t.flowing && t.length
            ? t.buffer.head.data.length
            : t.length
          : (e > t.highWaterMark &&
              (t.highWaterMark = (function (e) {
                return (
                  e >= 8388608
                    ? (e = 8388608)
                    : (e--,
                      (e |= e >>> 1),
                      (e |= e >>> 2),
                      (e |= e >>> 4),
                      (e |= e >>> 8),
                      (e |= e >>> 16),
                      e++),
                  e
                );
              })(e)),
            e <= t.length
              ? e
              : t.ended
              ? t.length
              : ((t.needReadable = !0), 0));
      }
      function T(e) {
        var t = e._readableState;
        (t.needReadable = !1),
          t.emittedReadable ||
            (p("emitReadable", t.flowing),
            (t.emittedReadable = !0),
            t.sync ? i.nextTick(C, e) : C(e));
      }
      function C(e) {
        p("emit readable"), e.emit("readable"), O(e);
      }
      function x(e, t) {
        t.readingMore || ((t.readingMore = !0), i.nextTick(S, e, t));
      }
      function S(e, t) {
        for (
          var n = t.length;
          !t.reading &&
          !t.flowing &&
          !t.ended &&
          t.length < t.highWaterMark &&
          (p("maybeReadMore read 0"), e.read(0), n !== t.length);

        )
          n = t.length;
        t.readingMore = !1;
      }
      function L(e) {
        p("readable nexttick read 0"), e.read(0);
      }
      function R(e, t) {
        t.reading || (p("resume read 0"), e.read(0)),
          (t.resumeScheduled = !1),
          (t.awaitDrain = 0),
          e.emit("resume"),
          O(e),
          t.flowing && !t.reading && e.read(0);
      }
      function O(e) {
        var t = e._readableState;
        for (p("flow", t.flowing); t.flowing && null !== e.read(); );
      }
      function A(e, t) {
        return 0 === t.length
          ? null
          : (t.objectMode
              ? (n = t.buffer.shift())
              : !e || e >= t.length
              ? ((n = t.decoder
                  ? t.buffer.join("")
                  : 1 === t.buffer.length
                  ? t.buffer.head.data
                  : t.buffer.concat(t.length)),
                t.buffer.clear())
              : (n = (function (e, t, n) {
                  var r;
                  e < t.head.data.length
                    ? ((r = t.head.data.slice(0, e)),
                      (t.head.data = t.head.data.slice(e)))
                    : (r =
                        e === t.head.data.length
                          ? t.shift()
                          : n
                          ? (function (e, t) {
                              var n = t.head,
                                r = 1,
                                i = n.data;
                              e -= i.length;
                              for (; (n = n.next); ) {
                                var o = n.data,
                                  a = e > o.length ? o.length : e;
                                if (
                                  (a === o.length
                                    ? (i += o)
                                    : (i += o.slice(0, e)),
                                  0 === (e -= a))
                                ) {
                                  a === o.length
                                    ? (++r,
                                      n.next
                                        ? (t.head = n.next)
                                        : (t.head = t.tail = null))
                                    : ((t.head = n), (n.data = o.slice(a)));
                                  break;
                                }
                                ++r;
                              }
                              return (t.length -= r), i;
                            })(e, t)
                          : (function (e, t) {
                              var n = c.allocUnsafe(e),
                                r = t.head,
                                i = 1;
                              r.data.copy(n), (e -= r.data.length);
                              for (; (r = r.next); ) {
                                var o = r.data,
                                  a = e > o.length ? o.length : e;
                                if (
                                  (o.copy(n, n.length - e, 0, a),
                                  0 === (e -= a))
                                ) {
                                  a === o.length
                                    ? (++i,
                                      r.next
                                        ? (t.head = r.next)
                                        : (t.head = t.tail = null))
                                    : ((t.head = r), (r.data = o.slice(a)));
                                  break;
                                }
                                ++i;
                              }
                              return (t.length -= i), n;
                            })(e, t));
                  return r;
                })(e, t.buffer, t.decoder)),
            n);
        var n;
      }
      function k(e) {
        var t = e._readableState;
        if (t.length > 0)
          throw new Error('"endReadable()" called on non-empty stream');
        t.endEmitted || ((t.ended = !0), i.nextTick(I, t, e));
      }
      function I(e, t) {
        e.endEmitted ||
          0 !== e.length ||
          ((e.endEmitted = !0), (t.readable = !1), t.emit("end"));
      }
      function D(e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      }
      (y.prototype.read = function (e) {
        p("read", e), (e = parseInt(e, 10));
        var t = this._readableState,
          n = e;
        if (
          (0 !== e && (t.emittedReadable = !1),
          0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended))
        )
          return (
            p("read: emitReadable", t.length, t.ended),
            0 === t.length && t.ended ? k(this) : T(this),
            null
          );
        if (0 === (e = E(e, t)) && t.ended)
          return 0 === t.length && k(this), null;
        var r,
          i = t.needReadable;
        return (
          p("need readable", i),
          (0 === t.length || t.length - e < t.highWaterMark) &&
            p("length less than watermark", (i = !0)),
          t.ended || t.reading
            ? p("reading or ended", (i = !1))
            : i &&
              (p("do read"),
              (t.reading = !0),
              (t.sync = !0),
              0 === t.length && (t.needReadable = !0),
              this._read(t.highWaterMark),
              (t.sync = !1),
              t.reading || (e = E(n, t))),
          null === (r = e > 0 ? A(e, t) : null)
            ? ((t.needReadable = !0), (e = 0))
            : (t.length -= e),
          0 === t.length &&
            (t.ended || (t.needReadable = !0), n !== e && t.ended && k(this)),
          null !== r && this.emit("data", r),
          r
        );
      }),
        (y.prototype._read = function (e) {
          this.emit("error", new Error("_read() is not implemented"));
        }),
        (y.prototype.pipe = function (e, t) {
          var n = this,
            o = this._readableState;
          switch (o.pipesCount) {
            case 0:
              o.pipes = e;
              break;
            case 1:
              o.pipes = [o.pipes, e];
              break;
            default:
              o.pipes.push(e);
          }
          (o.pipesCount += 1), p("pipe count=%d opts=%j", o.pipesCount, t);
          var l =
            (!t || !1 !== t.end) && e !== r.stdout && e !== r.stderr ? u : y;
          function c(t, r) {
            p("onunpipe"),
              t === n &&
                r &&
                !1 === r.hasUnpiped &&
                ((r.hasUnpiped = !0),
                p("cleanup"),
                e.removeListener("close", v),
                e.removeListener("finish", b),
                e.removeListener("drain", d),
                e.removeListener("error", g),
                e.removeListener("unpipe", c),
                n.removeListener("end", u),
                n.removeListener("end", y),
                n.removeListener("data", m),
                (h = !0),
                !o.awaitDrain ||
                  (e._writableState && !e._writableState.needDrain) ||
                  d());
          }
          function u() {
            p("onend"), e.end();
          }
          o.endEmitted ? i.nextTick(l) : n.once("end", l), e.on("unpipe", c);
          var d = (function (e) {
            return function () {
              var t = e._readableState;
              p("pipeOnDrain", t.awaitDrain),
                t.awaitDrain && t.awaitDrain--,
                0 === t.awaitDrain && s(e, "data") && ((t.flowing = !0), O(e));
            };
          })(n);
          e.on("drain", d);
          var h = !1;
          var f = !1;
          function m(t) {
            p("ondata"),
              (f = !1),
              !1 !== e.write(t) ||
                f ||
                (((1 === o.pipesCount && o.pipes === e) ||
                  (o.pipesCount > 1 && -1 !== D(o.pipes, e))) &&
                  !h &&
                  (p(
                    "false write response, pause",
                    n._readableState.awaitDrain
                  ),
                  n._readableState.awaitDrain++,
                  (f = !0)),
                n.pause());
          }
          function g(t) {
            p("onerror", t),
              y(),
              e.removeListener("error", g),
              0 === s(e, "error") && e.emit("error", t);
          }
          function v() {
            e.removeListener("finish", b), y();
          }
          function b() {
            p("onfinish"), e.removeListener("close", v), y();
          }
          function y() {
            p("unpipe"), n.unpipe(e);
          }
          return (
            n.on("data", m),
            (function (e, t, n) {
              if ("function" == typeof e.prependListener)
                return e.prependListener(t, n);
              e._events && e._events[t]
                ? a(e._events[t])
                  ? e._events[t].unshift(n)
                  : (e._events[t] = [n, e._events[t]])
                : e.on(t, n);
            })(e, "error", g),
            e.once("close", v),
            e.once("finish", b),
            e.emit("pipe", n),
            o.flowing || (p("pipe resume"), n.resume()),
            e
          );
        }),
        (y.prototype.unpipe = function (e) {
          var t = this._readableState,
            n = { hasUnpiped: !1 };
          if (0 === t.pipesCount) return this;
          if (1 === t.pipesCount)
            return (
              (e && e !== t.pipes) ||
                (e || (e = t.pipes),
                (t.pipes = null),
                (t.pipesCount = 0),
                (t.flowing = !1),
                e && e.emit("unpipe", this, n)),
              this
            );
          if (!e) {
            var r = t.pipes,
              i = t.pipesCount;
            (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
            for (var o = 0; o < i; o++) r[o].emit("unpipe", this, n);
            return this;
          }
          var a = D(t.pipes, e);
          return (
            -1 === a ||
              (t.pipes.splice(a, 1),
              (t.pipesCount -= 1),
              1 === t.pipesCount && (t.pipes = t.pipes[0]),
              e.emit("unpipe", this, n)),
            this
          );
        }),
        (y.prototype.on = function (e, t) {
          var n = l.prototype.on.call(this, e, t);
          if ("data" === e) !1 !== this._readableState.flowing && this.resume();
          else if ("readable" === e) {
            var r = this._readableState;
            r.endEmitted ||
              r.readableListening ||
              ((r.readableListening = r.needReadable = !0),
              (r.emittedReadable = !1),
              r.reading ? r.length && T(this) : i.nextTick(L, this));
          }
          return n;
        }),
        (y.prototype.addListener = y.prototype.on),
        (y.prototype.resume = function () {
          var e = this._readableState;
          return (
            e.flowing ||
              (p("resume"),
              (e.flowing = !0),
              (function (e, t) {
                t.resumeScheduled ||
                  ((t.resumeScheduled = !0), i.nextTick(R, e, t));
              })(this, e)),
            this
          );
        }),
        (y.prototype.pause = function () {
          return (
            p("call pause flowing=%j", this._readableState.flowing),
            !1 !== this._readableState.flowing &&
              (p("pause"),
              (this._readableState.flowing = !1),
              this.emit("pause")),
            this
          );
        }),
        (y.prototype.wrap = function (e) {
          var t = this,
            n = this._readableState,
            r = !1;
          for (var i in (e.on("end", function () {
            if ((p("wrapped end"), n.decoder && !n.ended)) {
              var e = n.decoder.end();
              e && e.length && t.push(e);
            }
            t.push(null);
          }),
          e.on("data", function (i) {
            (p("wrapped data"),
            n.decoder && (i = n.decoder.write(i)),
            n.objectMode && null == i) ||
              ((n.objectMode || (i && i.length)) &&
                (t.push(i) || ((r = !0), e.pause())));
          }),
          e))
            void 0 === this[i] &&
              "function" == typeof e[i] &&
              (this[i] = (function (t) {
                return function () {
                  return e[t].apply(e, arguments);
                };
              })(i));
          for (var o = 0; o < v.length; o++)
            e.on(v[o], this.emit.bind(this, v[o]));
          return (
            (this._read = function (t) {
              p("wrapped _read", t), r && ((r = !1), e.resume());
            }),
            this
          );
        }),
        Object.defineProperty(y.prototype, "readableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._readableState.highWaterMark;
          },
        }),
        (y._fromList = A);
    }).call(this, n(9), n(15));
  },
  function (e, t, n) {
    e.exports = n(39).EventEmitter;
  },
  function (e, t, n) {
    "use strict";
    var r = n(52);
    function i(e, t) {
      e.emit("error", t);
    }
    e.exports = {
      destroy: function (e, t) {
        var n = this,
          o = this._readableState && this._readableState.destroyed,
          a = this._writableState && this._writableState.destroyed;
        return o || a
          ? (t
              ? t(e)
              : !e ||
                (this._writableState && this._writableState.errorEmitted) ||
                r.nextTick(i, this, e),
            this)
          : (this._readableState && (this._readableState.destroyed = !0),
            this._writableState && (this._writableState.destroyed = !0),
            this._destroy(e || null, function (e) {
              !t && e
                ? (r.nextTick(i, n, e),
                  n._writableState && (n._writableState.errorEmitted = !0))
                : t && t(e);
            }),
            this);
      },
      undestroy: function () {
        this._readableState &&
          ((this._readableState.destroyed = !1),
          (this._readableState.reading = !1),
          (this._readableState.ended = !1),
          (this._readableState.endEmitted = !1)),
          this._writableState &&
            ((this._writableState.destroyed = !1),
            (this._writableState.ended = !1),
            (this._writableState.ending = !1),
            (this._writableState.finished = !1),
            (this._writableState.errorEmitted = !1));
      },
    };
  },
  function (e, t, n) {
    (function (t) {
      function n(e) {
        try {
          if (!t.localStorage) return !1;
        } catch (e) {
          return !1;
        }
        var n = t.localStorage[e];
        return null != n && "true" === String(n).toLowerCase();
      }
      e.exports = function (e, t) {
        if (n("noDeprecation")) return e;
        var r = !1;
        return function () {
          if (!r) {
            if (n("throwDeprecation")) throw new Error(t);
            n("traceDeprecation") ? console.trace(t) : console.warn(t),
              (r = !0);
          }
          return e.apply(this, arguments);
        };
      };
    }).call(this, n(9));
  },
  function (e, t, n) {
    "use strict";
    e.exports = a;
    var r = n(28),
      i = Object.create(n(41));
    function o(e, t) {
      var n = this._transformState;
      n.transforming = !1;
      var r = n.writecb;
      if (!r)
        return this.emit(
          "error",
          new Error("write callback called multiple times")
        );
      (n.writechunk = null),
        (n.writecb = null),
        null != t && this.push(t),
        r(e);
      var i = this._readableState;
      (i.reading = !1),
        (i.needReadable || i.length < i.highWaterMark) &&
          this._read(i.highWaterMark);
    }
    function a(e) {
      if (!(this instanceof a)) return new a(e);
      r.call(this, e),
        (this._transformState = {
          afterTransform: o.bind(this),
          needTransform: !1,
          transforming: !1,
          writecb: null,
          writechunk: null,
          writeencoding: null,
        }),
        (this._readableState.needReadable = !0),
        (this._readableState.sync = !1),
        e &&
          ("function" == typeof e.transform && (this._transform = e.transform),
          "function" == typeof e.flush && (this._flush = e.flush)),
        this.on("prefinish", s);
    }
    function s() {
      var e = this;
      "function" == typeof this._flush
        ? this._flush(function (t, n) {
            l(e, t, n);
          })
        : l(this, null, null);
    }
    function l(e, t, n) {
      if (t) return e.emit("error", t);
      if ((null != n && e.push(n), e._writableState.length))
        throw new Error("Calling transform done when ws.length != 0");
      if (e._transformState.transforming)
        throw new Error("Calling transform done when still transforming");
      return e.push(null);
    }
    (i.inherits = n(17)),
      i.inherits(a, r),
      (a.prototype.push = function (e, t) {
        return (
          (this._transformState.needTransform = !1),
          r.prototype.push.call(this, e, t)
        );
      }),
      (a.prototype._transform = function (e, t, n) {
        throw new Error("_transform() is not implemented");
      }),
      (a.prototype._write = function (e, t, n) {
        var r = this._transformState;
        if (
          ((r.writecb = n),
          (r.writechunk = e),
          (r.writeencoding = t),
          !r.transforming)
        ) {
          var i = this._readableState;
          (r.needTransform || i.needReadable || i.length < i.highWaterMark) &&
            this._read(i.highWaterMark);
        }
      }),
      (a.prototype._read = function (e) {
        var t = this._transformState;
        null !== t.writechunk && t.writecb && !t.transforming
          ? ((t.transforming = !0),
            this._transform(t.writechunk, t.writeencoding, t.afterTransform))
          : (t.needTransform = !0);
      }),
      (a.prototype._destroy = function (e, t) {
        var n = this;
        r.prototype._destroy.call(this, e, function (e) {
          t(e), n.emit("close");
        });
      });
  },
  function (e, t, n) {
    (function (e) {
      !(function (t) {
        (t.parser = function (e, t) {
          return new o(e, t);
        }),
          (t.SAXParser = o),
          (t.SAXStream = s),
          (t.createStream = function (e, t) {
            return new s(e, t);
          }),
          (t.MAX_BUFFER_LENGTH = 65536);
        var r,
          i = [
            "comment",
            "sgmlDecl",
            "textNode",
            "tagName",
            "doctype",
            "procInstName",
            "procInstBody",
            "entity",
            "attribName",
            "attribValue",
            "cdata",
            "script",
          ];
        function o(e, n) {
          if (!(this instanceof o)) return new o(e, n);
          !(function (e) {
            for (var t = 0, n = i.length; t < n; t++) e[i[t]] = "";
          })(this),
            (this.q = this.c = ""),
            (this.bufferCheckPosition = t.MAX_BUFFER_LENGTH),
            (this.opt = n || {}),
            (this.opt.lowercase = this.opt.lowercase || this.opt.lowercasetags),
            (this.looseCase = this.opt.lowercase
              ? "toLowerCase"
              : "toUpperCase"),
            (this.tags = []),
            (this.closed = this.closedRoot = this.sawRoot = !1),
            (this.tag = this.error = null),
            (this.strict = !!e),
            (this.noscript = !(!e && !this.opt.noscript)),
            (this.state = E.BEGIN),
            (this.strictEntities = this.opt.strictEntities),
            (this.ENTITIES = this.strictEntities
              ? Object.create(t.XML_ENTITIES)
              : Object.create(t.ENTITIES)),
            (this.attribList = []),
            this.opt.xmlns && (this.ns = Object.create(c)),
            (this.trackPosition = !1 !== this.opt.position),
            this.trackPosition && (this.position = this.line = this.column = 0),
            C(this, "onready");
        }
        (t.EVENTS = [
          "text",
          "processinginstruction",
          "sgmldeclaration",
          "doctype",
          "comment",
          "opentagstart",
          "attribute",
          "opentag",
          "closetag",
          "opencdata",
          "cdata",
          "closecdata",
          "error",
          "end",
          "ready",
          "script",
          "opennamespace",
          "closenamespace",
        ]),
          Object.create ||
            (Object.create = function (e) {
              function t() {}
              return (t.prototype = e), new t();
            }),
          Object.keys ||
            (Object.keys = function (e) {
              var t = [];
              for (var n in e) e.hasOwnProperty(n) && t.push(n);
              return t;
            }),
          (o.prototype = {
            end: function () {
              O(this);
            },
            write: function (e) {
              if (this.error) throw this.error;
              if (this.closed)
                return R(
                  this,
                  "Cannot write after close. Assign an onready handler."
                );
              if (null === e) return O(this);
              "object" == typeof e && (e = e.toString());
              var n = 0,
                r = "";
              for (; (r = q(e, n++)), (this.c = r), r; )
                switch (
                  (this.trackPosition &&
                    (this.position++,
                    "\n" === r
                      ? (this.line++, (this.column = 0))
                      : this.column++),
                  this.state)
                ) {
                  case E.BEGIN:
                    if (((this.state = E.BEGIN_WHITESPACE), "\ufeff" === r))
                      continue;
                    U(this, r);
                    continue;
                  case E.BEGIN_WHITESPACE:
                    U(this, r);
                    continue;
                  case E.TEXT:
                    if (this.sawRoot && !this.closedRoot) {
                      for (var o = n - 1; r && "<" !== r && "&" !== r; )
                        (r = q(e, n++)) &&
                          this.trackPosition &&
                          (this.position++,
                          "\n" === r
                            ? (this.line++, (this.column = 0))
                            : this.column++);
                      this.textNode += e.substring(o, n - 1);
                    }
                    "<" !== r ||
                    (this.sawRoot && this.closedRoot && !this.strict)
                      ? (f(r) ||
                          (this.sawRoot && !this.closedRoot) ||
                          A(this, "Text data outside of root node."),
                        "&" === r
                          ? (this.state = E.TEXT_ENTITY)
                          : (this.textNode += r))
                      : ((this.state = E.OPEN_WAKA),
                        (this.startTagPosition = this.position));
                    continue;
                  case E.SCRIPT:
                    "<" === r
                      ? (this.state = E.SCRIPT_ENDING)
                      : (this.script += r);
                    continue;
                  case E.SCRIPT_ENDING:
                    "/" === r
                      ? (this.state = E.CLOSE_TAG)
                      : ((this.script += "<" + r), (this.state = E.SCRIPT));
                    continue;
                  case E.OPEN_WAKA:
                    if ("!" === r)
                      (this.state = E.SGML_DECL), (this.sgmlDecl = "");
                    else if (f(r));
                    else if (v(u, r))
                      (this.state = E.OPEN_TAG), (this.tagName = r);
                    else if ("/" === r)
                      (this.state = E.CLOSE_TAG), (this.tagName = "");
                    else if ("?" === r)
                      (this.state = E.PROC_INST),
                        (this.procInstName = this.procInstBody = "");
                    else {
                      if (
                        (A(this, "Unencoded <"),
                        this.startTagPosition + 1 < this.position)
                      ) {
                        var a = this.position - this.startTagPosition;
                        r = new Array(a).join(" ") + r;
                      }
                      (this.textNode += "<" + r), (this.state = E.TEXT);
                    }
                    continue;
                  case E.SGML_DECL:
                    "[CDATA[" === (this.sgmlDecl + r).toUpperCase()
                      ? (x(this, "onopencdata"),
                        (this.state = E.CDATA),
                        (this.sgmlDecl = ""),
                        (this.cdata = ""))
                      : this.sgmlDecl + r === "--"
                      ? ((this.state = E.COMMENT),
                        (this.comment = ""),
                        (this.sgmlDecl = ""))
                      : "DOCTYPE" === (this.sgmlDecl + r).toUpperCase()
                      ? ((this.state = E.DOCTYPE),
                        (this.doctype || this.sawRoot) &&
                          A(
                            this,
                            "Inappropriately located doctype declaration"
                          ),
                        (this.doctype = ""),
                        (this.sgmlDecl = ""))
                      : ">" === r
                      ? (x(this, "onsgmldeclaration", this.sgmlDecl),
                        (this.sgmlDecl = ""),
                        (this.state = E.TEXT))
                      : m(r)
                      ? ((this.state = E.SGML_DECL_QUOTED),
                        (this.sgmlDecl += r))
                      : (this.sgmlDecl += r);
                    continue;
                  case E.SGML_DECL_QUOTED:
                    r === this.q && ((this.state = E.SGML_DECL), (this.q = "")),
                      (this.sgmlDecl += r);
                    continue;
                  case E.DOCTYPE:
                    ">" === r
                      ? ((this.state = E.TEXT),
                        x(this, "ondoctype", this.doctype),
                        (this.doctype = !0))
                      : ((this.doctype += r),
                        "[" === r
                          ? (this.state = E.DOCTYPE_DTD)
                          : m(r) &&
                            ((this.state = E.DOCTYPE_QUOTED), (this.q = r)));
                    continue;
                  case E.DOCTYPE_QUOTED:
                    (this.doctype += r),
                      r === this.q && ((this.q = ""), (this.state = E.DOCTYPE));
                    continue;
                  case E.DOCTYPE_DTD:
                    (this.doctype += r),
                      "]" === r
                        ? (this.state = E.DOCTYPE)
                        : m(r) &&
                          ((this.state = E.DOCTYPE_DTD_QUOTED), (this.q = r));
                    continue;
                  case E.DOCTYPE_DTD_QUOTED:
                    (this.doctype += r),
                      r === this.q &&
                        ((this.state = E.DOCTYPE_DTD), (this.q = ""));
                    continue;
                  case E.COMMENT:
                    "-" === r
                      ? (this.state = E.COMMENT_ENDING)
                      : (this.comment += r);
                    continue;
                  case E.COMMENT_ENDING:
                    "-" === r
                      ? ((this.state = E.COMMENT_ENDED),
                        (this.comment = L(this.opt, this.comment)),
                        this.comment && x(this, "oncomment", this.comment),
                        (this.comment = ""))
                      : ((this.comment += "-" + r), (this.state = E.COMMENT));
                    continue;
                  case E.COMMENT_ENDED:
                    ">" !== r
                      ? (A(this, "Malformed comment"),
                        (this.comment += "--" + r),
                        (this.state = E.COMMENT))
                      : (this.state = E.TEXT);
                    continue;
                  case E.CDATA:
                    "]" === r
                      ? (this.state = E.CDATA_ENDING)
                      : (this.cdata += r);
                    continue;
                  case E.CDATA_ENDING:
                    "]" === r
                      ? (this.state = E.CDATA_ENDING_2)
                      : ((this.cdata += "]" + r), (this.state = E.CDATA));
                    continue;
                  case E.CDATA_ENDING_2:
                    ">" === r
                      ? (this.cdata && x(this, "oncdata", this.cdata),
                        x(this, "onclosecdata"),
                        (this.cdata = ""),
                        (this.state = E.TEXT))
                      : "]" === r
                      ? (this.cdata += "]")
                      : ((this.cdata += "]]" + r), (this.state = E.CDATA));
                    continue;
                  case E.PROC_INST:
                    "?" === r
                      ? (this.state = E.PROC_INST_ENDING)
                      : f(r)
                      ? (this.state = E.PROC_INST_BODY)
                      : (this.procInstName += r);
                    continue;
                  case E.PROC_INST_BODY:
                    if (!this.procInstBody && f(r)) continue;
                    "?" === r
                      ? (this.state = E.PROC_INST_ENDING)
                      : (this.procInstBody += r);
                    continue;
                  case E.PROC_INST_ENDING:
                    ">" === r
                      ? (x(this, "onprocessinginstruction", {
                          name: this.procInstName,
                          body: this.procInstBody,
                        }),
                        (this.procInstName = this.procInstBody = ""),
                        (this.state = E.TEXT))
                      : ((this.procInstBody += "?" + r),
                        (this.state = E.PROC_INST_BODY));
                    continue;
                  case E.OPEN_TAG:
                    v(d, r)
                      ? (this.tagName += r)
                      : (k(this),
                        ">" === r
                          ? P(this)
                          : "/" === r
                          ? (this.state = E.OPEN_TAG_SLASH)
                          : (f(r) || A(this, "Invalid character in tag name"),
                            (this.state = E.ATTRIB)));
                    continue;
                  case E.OPEN_TAG_SLASH:
                    ">" === r
                      ? (P(this, !0), N(this))
                      : (A(
                          this,
                          "Forward-slash in opening tag not followed by >"
                        ),
                        (this.state = E.ATTRIB));
                    continue;
                  case E.ATTRIB:
                    if (f(r)) continue;
                    ">" === r
                      ? P(this)
                      : "/" === r
                      ? (this.state = E.OPEN_TAG_SLASH)
                      : v(u, r)
                      ? ((this.attribName = r),
                        (this.attribValue = ""),
                        (this.state = E.ATTRIB_NAME))
                      : A(this, "Invalid attribute name");
                    continue;
                  case E.ATTRIB_NAME:
                    "=" === r
                      ? (this.state = E.ATTRIB_VALUE)
                      : ">" === r
                      ? (A(this, "Attribute without value"),
                        (this.attribValue = this.attribName),
                        D(this),
                        P(this))
                      : f(r)
                      ? (this.state = E.ATTRIB_NAME_SAW_WHITE)
                      : v(d, r)
                      ? (this.attribName += r)
                      : A(this, "Invalid attribute name");
                    continue;
                  case E.ATTRIB_NAME_SAW_WHITE:
                    if ("=" === r) this.state = E.ATTRIB_VALUE;
                    else {
                      if (f(r)) continue;
                      A(this, "Attribute without value"),
                        (this.tag.attributes[this.attribName] = ""),
                        (this.attribValue = ""),
                        x(this, "onattribute", {
                          name: this.attribName,
                          value: "",
                        }),
                        (this.attribName = ""),
                        ">" === r
                          ? P(this)
                          : v(u, r)
                          ? ((this.attribName = r),
                            (this.state = E.ATTRIB_NAME))
                          : (A(this, "Invalid attribute name"),
                            (this.state = E.ATTRIB));
                    }
                    continue;
                  case E.ATTRIB_VALUE:
                    if (f(r)) continue;
                    m(r)
                      ? ((this.q = r), (this.state = E.ATTRIB_VALUE_QUOTED))
                      : (A(this, "Unquoted attribute value"),
                        (this.state = E.ATTRIB_VALUE_UNQUOTED),
                        (this.attribValue = r));
                    continue;
                  case E.ATTRIB_VALUE_QUOTED:
                    if (r !== this.q) {
                      "&" === r
                        ? (this.state = E.ATTRIB_VALUE_ENTITY_Q)
                        : (this.attribValue += r);
                      continue;
                    }
                    D(this),
                      (this.q = ""),
                      (this.state = E.ATTRIB_VALUE_CLOSED);
                    continue;
                  case E.ATTRIB_VALUE_CLOSED:
                    f(r)
                      ? (this.state = E.ATTRIB)
                      : ">" === r
                      ? P(this)
                      : "/" === r
                      ? (this.state = E.OPEN_TAG_SLASH)
                      : v(u, r)
                      ? (A(this, "No whitespace between attributes"),
                        (this.attribName = r),
                        (this.attribValue = ""),
                        (this.state = E.ATTRIB_NAME))
                      : A(this, "Invalid attribute name");
                    continue;
                  case E.ATTRIB_VALUE_UNQUOTED:
                    if (!g(r)) {
                      "&" === r
                        ? (this.state = E.ATTRIB_VALUE_ENTITY_U)
                        : (this.attribValue += r);
                      continue;
                    }
                    D(this), ">" === r ? P(this) : (this.state = E.ATTRIB);
                    continue;
                  case E.CLOSE_TAG:
                    if (this.tagName)
                      ">" === r
                        ? N(this)
                        : v(d, r)
                        ? (this.tagName += r)
                        : this.script
                        ? ((this.script += "</" + this.tagName),
                          (this.tagName = ""),
                          (this.state = E.SCRIPT))
                        : (f(r) || A(this, "Invalid tagname in closing tag"),
                          (this.state = E.CLOSE_TAG_SAW_WHITE));
                    else {
                      if (f(r)) continue;
                      b(u, r)
                        ? this.script
                          ? ((this.script += "</" + r), (this.state = E.SCRIPT))
                          : A(this, "Invalid tagname in closing tag.")
                        : (this.tagName = r);
                    }
                    continue;
                  case E.CLOSE_TAG_SAW_WHITE:
                    if (f(r)) continue;
                    ">" === r
                      ? N(this)
                      : A(this, "Invalid characters in closing tag");
                    continue;
                  case E.TEXT_ENTITY:
                  case E.ATTRIB_VALUE_ENTITY_Q:
                  case E.ATTRIB_VALUE_ENTITY_U:
                    var s, l;
                    switch (this.state) {
                      case E.TEXT_ENTITY:
                        (s = E.TEXT), (l = "textNode");
                        break;
                      case E.ATTRIB_VALUE_ENTITY_Q:
                        (s = E.ATTRIB_VALUE_QUOTED), (l = "attribValue");
                        break;
                      case E.ATTRIB_VALUE_ENTITY_U:
                        (s = E.ATTRIB_VALUE_UNQUOTED), (l = "attribValue");
                    }
                    ";" === r
                      ? ((this[l] += M(this)),
                        (this.entity = ""),
                        (this.state = s))
                      : v(this.entity.length ? p : h, r)
                      ? (this.entity += r)
                      : (A(this, "Invalid character in entity name"),
                        (this[l] += "&" + this.entity + r),
                        (this.entity = ""),
                        (this.state = s));
                    continue;
                  default:
                    throw new Error(this, "Unknown state: " + this.state);
                }
              this.position >= this.bufferCheckPosition &&
                (function (e) {
                  for (
                    var n = Math.max(t.MAX_BUFFER_LENGTH, 10),
                      r = 0,
                      o = 0,
                      a = i.length;
                    o < a;
                    o++
                  ) {
                    var s = e[i[o]].length;
                    if (s > n)
                      switch (i[o]) {
                        case "textNode":
                          S(e);
                          break;
                        case "cdata":
                          x(e, "oncdata", e.cdata), (e.cdata = "");
                          break;
                        case "script":
                          x(e, "onscript", e.script), (e.script = "");
                          break;
                        default:
                          R(e, "Max buffer length exceeded: " + i[o]);
                      }
                    r = Math.max(r, s);
                  }
                  var l = t.MAX_BUFFER_LENGTH - r;
                  e.bufferCheckPosition = l + e.position;
                })(this);
              return this;
            },
            /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */ resume:
              function () {
                return (this.error = null), this;
              },
            close: function () {
              return this.write(null);
            },
            flush: function () {
              var e;
              S((e = this)),
                "" !== e.cdata && (x(e, "oncdata", e.cdata), (e.cdata = "")),
                "" !== e.script &&
                  (x(e, "onscript", e.script), (e.script = ""));
            },
          });
        try {
          r = n(32).Stream;
        } catch (e) {
          r = function () {};
        }
        var a = t.EVENTS.filter(function (e) {
          return "error" !== e && "end" !== e;
        });
        function s(e, t) {
          if (!(this instanceof s)) return new s(e, t);
          r.apply(this),
            (this._parser = new o(e, t)),
            (this.writable = !0),
            (this.readable = !0);
          var n = this;
          (this._parser.onend = function () {
            n.emit("end");
          }),
            (this._parser.onerror = function (e) {
              n.emit("error", e), (n._parser.error = null);
            }),
            (this._decoder = null),
            a.forEach(function (e) {
              Object.defineProperty(n, "on" + e, {
                get: function () {
                  return n._parser["on" + e];
                },
                set: function (t) {
                  if (!t)
                    return (
                      n.removeAllListeners(e), (n._parser["on" + e] = t), t
                    );
                  n.on(e, t);
                },
                enumerable: !0,
                configurable: !1,
              });
            });
        }
        (s.prototype = Object.create(r.prototype, {
          constructor: { value: s },
        })),
          (s.prototype.write = function (t) {
            if (
              "function" == typeof e &&
              "function" == typeof e.isBuffer &&
              e.isBuffer(t)
            ) {
              if (!this._decoder) {
                var r = n(42).StringDecoder;
                this._decoder = new r("utf8");
              }
              t = this._decoder.write(t);
            }
            return this._parser.write(t.toString()), this.emit("data", t), !0;
          }),
          (s.prototype.end = function (e) {
            return e && e.length && this.write(e), this._parser.end(), !0;
          }),
          (s.prototype.on = function (e, t) {
            var n = this;
            return (
              n._parser["on" + e] ||
                -1 === a.indexOf(e) ||
                (n._parser["on" + e] = function () {
                  var t =
                    1 === arguments.length
                      ? [arguments[0]]
                      : Array.apply(null, arguments);
                  t.splice(0, 0, e), n.emit.apply(n, t);
                }),
              r.prototype.on.call(n, e, t)
            );
          });
        var l = "http://www.w3.org/XML/1998/namespace",
          c = { xml: l, xmlns: "http://www.w3.org/2000/xmlns/" },
          u =
            /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
          d =
            /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,
          h =
            /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
          p =
            /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
        function f(e) {
          return " " === e || "\n" === e || "\r" === e || "\t" === e;
        }
        function m(e) {
          return '"' === e || "'" === e;
        }
        function g(e) {
          return ">" === e || f(e);
        }
        function v(e, t) {
          return e.test(t);
        }
        function b(e, t) {
          return !v(e, t);
        }
        var y,
          _,
          w,
          E = 0;
        for (var T in ((t.STATE = {
          BEGIN: E++,
          BEGIN_WHITESPACE: E++,
          TEXT: E++,
          TEXT_ENTITY: E++,
          OPEN_WAKA: E++,
          SGML_DECL: E++,
          SGML_DECL_QUOTED: E++,
          DOCTYPE: E++,
          DOCTYPE_QUOTED: E++,
          DOCTYPE_DTD: E++,
          DOCTYPE_DTD_QUOTED: E++,
          COMMENT_STARTING: E++,
          COMMENT: E++,
          COMMENT_ENDING: E++,
          COMMENT_ENDED: E++,
          CDATA: E++,
          CDATA_ENDING: E++,
          CDATA_ENDING_2: E++,
          PROC_INST: E++,
          PROC_INST_BODY: E++,
          PROC_INST_ENDING: E++,
          OPEN_TAG: E++,
          OPEN_TAG_SLASH: E++,
          ATTRIB: E++,
          ATTRIB_NAME: E++,
          ATTRIB_NAME_SAW_WHITE: E++,
          ATTRIB_VALUE: E++,
          ATTRIB_VALUE_QUOTED: E++,
          ATTRIB_VALUE_CLOSED: E++,
          ATTRIB_VALUE_UNQUOTED: E++,
          ATTRIB_VALUE_ENTITY_Q: E++,
          ATTRIB_VALUE_ENTITY_U: E++,
          CLOSE_TAG: E++,
          CLOSE_TAG_SAW_WHITE: E++,
          SCRIPT: E++,
          SCRIPT_ENDING: E++,
        }),
        (t.XML_ENTITIES = { amp: "&", gt: ">", lt: "<", quot: '"', apos: "'" }),
        (t.ENTITIES = {
          amp: "&",
          gt: ">",
          lt: "<",
          quot: '"',
          apos: "'",
          AElig: 198,
          Aacute: 193,
          Acirc: 194,
          Agrave: 192,
          Aring: 197,
          Atilde: 195,
          Auml: 196,
          Ccedil: 199,
          ETH: 208,
          Eacute: 201,
          Ecirc: 202,
          Egrave: 200,
          Euml: 203,
          Iacute: 205,
          Icirc: 206,
          Igrave: 204,
          Iuml: 207,
          Ntilde: 209,
          Oacute: 211,
          Ocirc: 212,
          Ograve: 210,
          Oslash: 216,
          Otilde: 213,
          Ouml: 214,
          THORN: 222,
          Uacute: 218,
          Ucirc: 219,
          Ugrave: 217,
          Uuml: 220,
          Yacute: 221,
          aacute: 225,
          acirc: 226,
          aelig: 230,
          agrave: 224,
          aring: 229,
          atilde: 227,
          auml: 228,
          ccedil: 231,
          eacute: 233,
          ecirc: 234,
          egrave: 232,
          eth: 240,
          euml: 235,
          iacute: 237,
          icirc: 238,
          igrave: 236,
          iuml: 239,
          ntilde: 241,
          oacute: 243,
          ocirc: 244,
          ograve: 242,
          oslash: 248,
          otilde: 245,
          ouml: 246,
          szlig: 223,
          thorn: 254,
          uacute: 250,
          ucirc: 251,
          ugrave: 249,
          uuml: 252,
          yacute: 253,
          yuml: 255,
          copy: 169,
          reg: 174,
          nbsp: 160,
          iexcl: 161,
          cent: 162,
          pound: 163,
          curren: 164,
          yen: 165,
          brvbar: 166,
          sect: 167,
          uml: 168,
          ordf: 170,
          laquo: 171,
          not: 172,
          shy: 173,
          macr: 175,
          deg: 176,
          plusmn: 177,
          sup1: 185,
          sup2: 178,
          sup3: 179,
          acute: 180,
          micro: 181,
          para: 182,
          middot: 183,
          cedil: 184,
          ordm: 186,
          raquo: 187,
          frac14: 188,
          frac12: 189,
          frac34: 190,
          iquest: 191,
          times: 215,
          divide: 247,
          OElig: 338,
          oelig: 339,
          Scaron: 352,
          scaron: 353,
          Yuml: 376,
          fnof: 402,
          circ: 710,
          tilde: 732,
          Alpha: 913,
          Beta: 914,
          Gamma: 915,
          Delta: 916,
          Epsilon: 917,
          Zeta: 918,
          Eta: 919,
          Theta: 920,
          Iota: 921,
          Kappa: 922,
          Lambda: 923,
          Mu: 924,
          Nu: 925,
          Xi: 926,
          Omicron: 927,
          Pi: 928,
          Rho: 929,
          Sigma: 931,
          Tau: 932,
          Upsilon: 933,
          Phi: 934,
          Chi: 935,
          Psi: 936,
          Omega: 937,
          alpha: 945,
          beta: 946,
          gamma: 947,
          delta: 948,
          epsilon: 949,
          zeta: 950,
          eta: 951,
          theta: 952,
          iota: 953,
          kappa: 954,
          lambda: 955,
          mu: 956,
          nu: 957,
          xi: 958,
          omicron: 959,
          pi: 960,
          rho: 961,
          sigmaf: 962,
          sigma: 963,
          tau: 964,
          upsilon: 965,
          phi: 966,
          chi: 967,
          psi: 968,
          omega: 969,
          thetasym: 977,
          upsih: 978,
          piv: 982,
          ensp: 8194,
          emsp: 8195,
          thinsp: 8201,
          zwnj: 8204,
          zwj: 8205,
          lrm: 8206,
          rlm: 8207,
          ndash: 8211,
          mdash: 8212,
          lsquo: 8216,
          rsquo: 8217,
          sbquo: 8218,
          ldquo: 8220,
          rdquo: 8221,
          bdquo: 8222,
          dagger: 8224,
          Dagger: 8225,
          bull: 8226,
          hellip: 8230,
          permil: 8240,
          prime: 8242,
          Prime: 8243,
          lsaquo: 8249,
          rsaquo: 8250,
          oline: 8254,
          frasl: 8260,
          euro: 8364,
          image: 8465,
          weierp: 8472,
          real: 8476,
          trade: 8482,
          alefsym: 8501,
          larr: 8592,
          uarr: 8593,
          rarr: 8594,
          darr: 8595,
          harr: 8596,
          crarr: 8629,
          lArr: 8656,
          uArr: 8657,
          rArr: 8658,
          dArr: 8659,
          hArr: 8660,
          forall: 8704,
          part: 8706,
          exist: 8707,
          empty: 8709,
          nabla: 8711,
          isin: 8712,
          notin: 8713,
          ni: 8715,
          prod: 8719,
          sum: 8721,
          minus: 8722,
          lowast: 8727,
          radic: 8730,
          prop: 8733,
          infin: 8734,
          ang: 8736,
          and: 8743,
          or: 8744,
          cap: 8745,
          cup: 8746,
          int: 8747,
          there4: 8756,
          sim: 8764,
          cong: 8773,
          asymp: 8776,
          ne: 8800,
          equiv: 8801,
          le: 8804,
          ge: 8805,
          sub: 8834,
          sup: 8835,
          nsub: 8836,
          sube: 8838,
          supe: 8839,
          oplus: 8853,
          otimes: 8855,
          perp: 8869,
          sdot: 8901,
          lceil: 8968,
          rceil: 8969,
          lfloor: 8970,
          rfloor: 8971,
          lang: 9001,
          rang: 9002,
          loz: 9674,
          spades: 9824,
          clubs: 9827,
          hearts: 9829,
          diams: 9830,
        }),
        Object.keys(t.ENTITIES).forEach(function (e) {
          var n = t.ENTITIES[e],
            r = "number" == typeof n ? String.fromCharCode(n) : n;
          t.ENTITIES[e] = r;
        }),
        t.STATE))
          t.STATE[t.STATE[T]] = T;
        function C(e, t, n) {
          e[t] && e[t](n);
        }
        function x(e, t, n) {
          e.textNode && S(e), C(e, t, n);
        }
        function S(e) {
          (e.textNode = L(e.opt, e.textNode)),
            e.textNode && C(e, "ontext", e.textNode),
            (e.textNode = "");
        }
        function L(e, t) {
          return (
            e.trim && (t = t.trim()),
            e.normalize && (t = t.replace(/\s+/g, " ")),
            t
          );
        }
        function R(e, t) {
          return (
            S(e),
            e.trackPosition &&
              (t +=
                "\nLine: " +
                e.line +
                "\nColumn: " +
                e.column +
                "\nChar: " +
                e.c),
            (t = new Error(t)),
            (e.error = t),
            C(e, "onerror", t),
            e
          );
        }
        function O(e) {
          return (
            e.sawRoot && !e.closedRoot && A(e, "Unclosed root tag"),
            e.state !== E.BEGIN &&
              e.state !== E.BEGIN_WHITESPACE &&
              e.state !== E.TEXT &&
              R(e, "Unexpected end"),
            S(e),
            (e.c = ""),
            (e.closed = !0),
            C(e, "onend"),
            o.call(e, e.strict, e.opt),
            e
          );
        }
        function A(e, t) {
          if ("object" != typeof e || !(e instanceof o))
            throw new Error("bad call to strictFail");
          e.strict && R(e, t);
        }
        function k(e) {
          e.strict || (e.tagName = e.tagName[e.looseCase]());
          var t = e.tags[e.tags.length - 1] || e,
            n = (e.tag = { name: e.tagName, attributes: {} });
          e.opt.xmlns && (n.ns = t.ns),
            (e.attribList.length = 0),
            x(e, "onopentagstart", n);
        }
        function I(e, t) {
          var n = e.indexOf(":") < 0 ? ["", e] : e.split(":"),
            r = n[0],
            i = n[1];
          return (
            t && "xmlns" === e && ((r = "xmlns"), (i = "")),
            { prefix: r, local: i }
          );
        }
        function D(e) {
          if (
            (e.strict || (e.attribName = e.attribName[e.looseCase]()),
            -1 !== e.attribList.indexOf(e.attribName) ||
              e.tag.attributes.hasOwnProperty(e.attribName))
          )
            e.attribName = e.attribValue = "";
          else {
            if (e.opt.xmlns) {
              var t = I(e.attribName, !0),
                n = t.prefix,
                r = t.local;
              if ("xmlns" === n)
                if ("xml" === r && e.attribValue !== l)
                  A(
                    e,
                    "xml: prefix must be bound to " +
                      l +
                      "\nActual: " +
                      e.attribValue
                  );
                else if (
                  "xmlns" === r &&
                  "http://www.w3.org/2000/xmlns/" !== e.attribValue
                )
                  A(
                    e,
                    "xmlns: prefix must be bound to http://www.w3.org/2000/xmlns/\nActual: " +
                      e.attribValue
                  );
                else {
                  var i = e.tag,
                    o = e.tags[e.tags.length - 1] || e;
                  i.ns === o.ns && (i.ns = Object.create(o.ns)),
                    (i.ns[r] = e.attribValue);
                }
              e.attribList.push([e.attribName, e.attribValue]);
            } else
              (e.tag.attributes[e.attribName] = e.attribValue),
                x(e, "onattribute", {
                  name: e.attribName,
                  value: e.attribValue,
                });
            e.attribName = e.attribValue = "";
          }
        }
        function P(e, t) {
          if (e.opt.xmlns) {
            var n = e.tag,
              r = I(e.tagName);
            (n.prefix = r.prefix),
              (n.local = r.local),
              (n.uri = n.ns[r.prefix] || ""),
              n.prefix &&
                !n.uri &&
                (A(e, "Unbound namespace prefix: " + JSON.stringify(e.tagName)),
                (n.uri = r.prefix));
            var i = e.tags[e.tags.length - 1] || e;
            n.ns &&
              i.ns !== n.ns &&
              Object.keys(n.ns).forEach(function (t) {
                x(e, "onopennamespace", { prefix: t, uri: n.ns[t] });
              });
            for (var o = 0, a = e.attribList.length; o < a; o++) {
              var s = e.attribList[o],
                l = s[0],
                c = s[1],
                u = I(l, !0),
                d = u.prefix,
                h = u.local,
                p = "" === d ? "" : n.ns[d] || "",
                f = { name: l, value: c, prefix: d, local: h, uri: p };
              d &&
                "xmlns" !== d &&
                !p &&
                (A(e, "Unbound namespace prefix: " + JSON.stringify(d)),
                (f.uri = d)),
                (e.tag.attributes[l] = f),
                x(e, "onattribute", f);
            }
            e.attribList.length = 0;
          }
          (e.tag.isSelfClosing = !!t),
            (e.sawRoot = !0),
            e.tags.push(e.tag),
            x(e, "onopentag", e.tag),
            t ||
              (e.noscript || "script" !== e.tagName.toLowerCase()
                ? (e.state = E.TEXT)
                : (e.state = E.SCRIPT),
              (e.tag = null),
              (e.tagName = "")),
            (e.attribName = e.attribValue = ""),
            (e.attribList.length = 0);
        }
        function N(e) {
          if (!e.tagName)
            return (
              A(e, "Weird empty close tag."),
              (e.textNode += "</>"),
              void (e.state = E.TEXT)
            );
          if (e.script) {
            if ("script" !== e.tagName)
              return (
                (e.script += "</" + e.tagName + ">"),
                (e.tagName = ""),
                void (e.state = E.SCRIPT)
              );
            x(e, "onscript", e.script), (e.script = "");
          }
          var t = e.tags.length,
            n = e.tagName;
          e.strict || (n = n[e.looseCase]());
          for (var r = n; t--; ) {
            if (e.tags[t].name === r) break;
            A(e, "Unexpected close tag");
          }
          if (t < 0)
            return (
              A(e, "Unmatched closing tag: " + e.tagName),
              (e.textNode += "</" + e.tagName + ">"),
              void (e.state = E.TEXT)
            );
          e.tagName = n;
          for (var i = e.tags.length; i-- > t; ) {
            var o = (e.tag = e.tags.pop());
            (e.tagName = e.tag.name), x(e, "onclosetag", e.tagName);
            var a = {};
            for (var s in o.ns) a[s] = o.ns[s];
            var l = e.tags[e.tags.length - 1] || e;
            e.opt.xmlns &&
              o.ns !== l.ns &&
              Object.keys(o.ns).forEach(function (t) {
                var n = o.ns[t];
                x(e, "onclosenamespace", { prefix: t, uri: n });
              });
          }
          0 === t && (e.closedRoot = !0),
            (e.tagName = e.attribValue = e.attribName = ""),
            (e.attribList.length = 0),
            (e.state = E.TEXT);
        }
        function M(e) {
          var t,
            n = e.entity,
            r = n.toLowerCase(),
            i = "";
          return e.ENTITIES[n]
            ? e.ENTITIES[n]
            : e.ENTITIES[r]
            ? e.ENTITIES[r]
            : ("#" === (n = r).charAt(0) &&
                ("x" === n.charAt(1)
                  ? ((n = n.slice(2)), (i = (t = parseInt(n, 16)).toString(16)))
                  : ((n = n.slice(1)),
                    (i = (t = parseInt(n, 10)).toString(10)))),
              (n = n.replace(/^0+/, "")),
              isNaN(t) || i.toLowerCase() !== n
                ? (A(e, "Invalid character entity"), "&" + e.entity + ";")
                : String.fromCodePoint(t));
        }
        function U(e, t) {
          "<" === t
            ? ((e.state = E.OPEN_WAKA), (e.startTagPosition = e.position))
            : f(t) ||
              (A(e, "Non-whitespace before first tag."),
              (e.textNode = t),
              (e.state = E.TEXT));
        }
        function q(e, t) {
          var n = "";
          return t < e.length && (n = e.charAt(t)), n;
        }
        (E = t.STATE),
          String.fromCodePoint ||
            ((y = String.fromCharCode),
            (_ = Math.floor),
            (w = function () {
              var e,
                t,
                n = 16384,
                r = [],
                i = -1,
                o = arguments.length;
              if (!o) return "";
              for (var a = ""; ++i < o; ) {
                var s = Number(arguments[i]);
                if (!isFinite(s) || s < 0 || s > 1114111 || _(s) !== s)
                  throw RangeError("Invalid code point: " + s);
                s <= 65535
                  ? r.push(s)
                  : ((e = 55296 + ((s -= 65536) >> 10)),
                    (t = (s % 1024) + 56320),
                    r.push(e, t)),
                  (i + 1 === o || r.length > n) &&
                    ((a += y.apply(null, r)), (r.length = 0));
              }
              return a;
            }),
            Object.defineProperty
              ? Object.defineProperty(String, "fromCodePoint", {
                  value: w,
                  configurable: !0,
                  writable: !0,
                })
              : (String.fromCodePoint = w));
      })(t);
    }).call(this, n(18).Buffer);
  },
  function (e, t, n) {
    (function (e) {
      var r = n(278),
        i = n(86),
        o = n(280),
        a = n(281),
        s = n(87),
        l = t;
      (l.request = function (t, n) {
        t = "string" == typeof t ? s.parse(t) : o(t);
        var i = -1 === e.location.protocol.search(/^https?:$/) ? "http:" : "",
          a = t.protocol || i,
          l = t.hostname || t.host,
          c = t.port,
          u = t.path || "/";
        l && -1 !== l.indexOf(":") && (l = "[" + l + "]"),
          (t.url = (l ? a + "//" + l : "") + (c ? ":" + c : "") + u),
          (t.method = (t.method || "GET").toUpperCase()),
          (t.headers = t.headers || {});
        var d = new r(t);
        return n && d.on("response", n), d;
      }),
        (l.get = function (e, t) {
          var n = l.request(e, t);
          return n.end(), n;
        }),
        (l.ClientRequest = r),
        (l.IncomingMessage = i.IncomingMessage),
        (l.Agent = function () {}),
        (l.Agent.defaultMaxSockets = 4),
        (l.globalAgent = new l.Agent()),
        (l.STATUS_CODES = a),
        (l.METHODS = [
          "CHECKOUT",
          "CONNECT",
          "COPY",
          "DELETE",
          "GET",
          "HEAD",
          "LOCK",
          "M-SEARCH",
          "MERGE",
          "MKACTIVITY",
          "MKCOL",
          "MOVE",
          "NOTIFY",
          "OPTIONS",
          "PATCH",
          "POST",
          "PROPFIND",
          "PROPPATCH",
          "PURGE",
          "PUT",
          "REPORT",
          "SEARCH",
          "SUBSCRIBE",
          "TRACE",
          "UNLOCK",
          "UNSUBSCRIBE",
        ]);
    }).call(this, n(9));
  },
  function (e, t, n) {
    (function (e) {
      (t.fetch = s(e.fetch) && s(e.ReadableStream)),
        (t.writableStream = s(e.WritableStream)),
        (t.abortController = s(e.AbortController)),
        (t.blobConstructor = !1);
      try {
        new Blob([new ArrayBuffer(1)]), (t.blobConstructor = !0);
      } catch (e) {}
      var n;
      function r() {
        if (void 0 !== n) return n;
        if (e.XMLHttpRequest) {
          n = new e.XMLHttpRequest();
          try {
            n.open("GET", e.XDomainRequest ? "/" : "https://example.com");
          } catch (e) {
            n = null;
          }
        } else n = null;
        return n;
      }
      function i(e) {
        var t = r();
        if (!t) return !1;
        try {
          return (t.responseType = e), t.responseType === e;
        } catch (e) {}
        return !1;
      }
      var o = void 0 !== e.ArrayBuffer,
        a = o && s(e.ArrayBuffer.prototype.slice);
      function s(e) {
        return "function" == typeof e;
      }
      (t.arraybuffer = t.fetch || (o && i("arraybuffer"))),
        (t.msstream = !t.fetch && a && i("ms-stream")),
        (t.mozchunkedarraybuffer =
          !t.fetch && o && i("moz-chunked-arraybuffer")),
        (t.overrideMimeType = t.fetch || (!!r() && s(r().overrideMimeType))),
        (t.vbArray = s(e.VBArray)),
        (n = null);
    }).call(this, n(9));
  },
  function (e, t, n) {
    (function (e, r, i) {
      var o = n(85),
        a = n(17),
        s = n(40),
        l = (t.readyStates = {
          UNSENT: 0,
          OPENED: 1,
          HEADERS_RECEIVED: 2,
          LOADING: 3,
          DONE: 4,
        }),
        c = (t.IncomingMessage = function (t, n, a, l) {
          var c = this;
          if (
            (s.Readable.call(c),
            (c._mode = a),
            (c.headers = {}),
            (c.rawHeaders = []),
            (c.trailers = {}),
            (c.rawTrailers = []),
            c.on("end", function () {
              e.nextTick(function () {
                c.emit("close");
              });
            }),
            "fetch" === a)
          ) {
            if (
              ((c._fetchResponse = n),
              (c.url = n.url),
              (c.statusCode = n.status),
              (c.statusMessage = n.statusText),
              n.headers.forEach(function (e, t) {
                (c.headers[t.toLowerCase()] = e), c.rawHeaders.push(t, e);
              }),
              o.writableStream)
            ) {
              var u = new WritableStream({
                write: function (e) {
                  return new Promise(function (t, n) {
                    c._destroyed
                      ? n()
                      : c.push(new r(e))
                      ? t()
                      : (c._resumeFetch = t);
                  });
                },
                close: function () {
                  i.clearTimeout(l), c._destroyed || c.push(null);
                },
                abort: function (e) {
                  c._destroyed || c.emit("error", e);
                },
              });
              try {
                return void n.body.pipeTo(u).catch(function (e) {
                  i.clearTimeout(l), c._destroyed || c.emit("error", e);
                });
              } catch (e) {}
            }
            var d = n.body.getReader();
            !(function e() {
              d.read()
                .then(function (t) {
                  if (!c._destroyed) {
                    if (t.done) return i.clearTimeout(l), void c.push(null);
                    c.push(new r(t.value)), e();
                  }
                })
                .catch(function (e) {
                  i.clearTimeout(l), c._destroyed || c.emit("error", e);
                });
            })();
          } else {
            if (
              ((c._xhr = t),
              (c._pos = 0),
              (c.url = t.responseURL),
              (c.statusCode = t.status),
              (c.statusMessage = t.statusText),
              t
                .getAllResponseHeaders()
                .split(/\r?\n/)
                .forEach(function (e) {
                  var t = e.match(/^([^:]+):\s*(.*)/);
                  if (t) {
                    var n = t[1].toLowerCase();
                    "set-cookie" === n
                      ? (void 0 === c.headers[n] && (c.headers[n] = []),
                        c.headers[n].push(t[2]))
                      : void 0 !== c.headers[n]
                      ? (c.headers[n] += ", " + t[2])
                      : (c.headers[n] = t[2]),
                      c.rawHeaders.push(t[1], t[2]);
                  }
                }),
              (c._charset = "x-user-defined"),
              !o.overrideMimeType)
            ) {
              var h = c.rawHeaders["mime-type"];
              if (h) {
                var p = h.match(/;\s*charset=([^;])(;|$)/);
                p && (c._charset = p[1].toLowerCase());
              }
              c._charset || (c._charset = "utf-8");
            }
          }
        });
      a(c, s.Readable),
        (c.prototype._read = function () {
          var e = this._resumeFetch;
          e && ((this._resumeFetch = null), e());
        }),
        (c.prototype._onXHRProgress = function () {
          var e = this,
            t = e._xhr,
            n = null;
          switch (e._mode) {
            case "text:vbarray":
              if (t.readyState !== l.DONE) break;
              try {
                n = new i.VBArray(t.responseBody).toArray();
              } catch (e) {}
              if (null !== n) {
                e.push(new r(n));
                break;
              }
            case "text":
              try {
                n = t.responseText;
              } catch (t) {
                e._mode = "text:vbarray";
                break;
              }
              if (n.length > e._pos) {
                var o = n.substr(e._pos);
                if ("x-user-defined" === e._charset) {
                  for (var a = new r(o.length), s = 0; s < o.length; s++)
                    a[s] = 255 & o.charCodeAt(s);
                  e.push(a);
                } else e.push(o, e._charset);
                e._pos = n.length;
              }
              break;
            case "arraybuffer":
              if (t.readyState !== l.DONE || !t.response) break;
              (n = t.response), e.push(new r(new Uint8Array(n)));
              break;
            case "moz-chunked-arraybuffer":
              if (((n = t.response), t.readyState !== l.LOADING || !n)) break;
              e.push(new r(new Uint8Array(n)));
              break;
            case "ms-stream":
              if (((n = t.response), t.readyState !== l.LOADING)) break;
              var c = new i.MSStreamReader();
              (c.onprogress = function () {
                c.result.byteLength > e._pos &&
                  (e.push(new r(new Uint8Array(c.result.slice(e._pos)))),
                  (e._pos = c.result.byteLength));
              }),
                (c.onload = function () {
                  e.push(null);
                }),
                c.readAsArrayBuffer(n);
          }
          e._xhr.readyState === l.DONE &&
            "ms-stream" !== e._mode &&
            e.push(null);
        });
    }).call(this, n(15), n(18).Buffer, n(9));
  },
  function (e, t, n) {
    "use strict";
    var r = n(282),
      i = n(283);
    function o() {
      (this.protocol = null),
        (this.slashes = null),
        (this.auth = null),
        (this.host = null),
        (this.port = null),
        (this.hostname = null),
        (this.hash = null),
        (this.search = null),
        (this.query = null),
        (this.pathname = null),
        (this.path = null),
        (this.href = null);
    }
    (t.parse = y),
      (t.resolve = function (e, t) {
        return y(e, !1, !0).resolve(t);
      }),
      (t.resolveObject = function (e, t) {
        return e ? y(e, !1, !0).resolveObject(t) : t;
      }),
      (t.format = function (e) {
        i.isString(e) && (e = y(e));
        return e instanceof o ? e.format() : o.prototype.format.call(e);
      }),
      (t.Url = o);
    var a = /^([a-z0-9.+-]+:)/i,
      s = /:[0-9]*$/,
      l = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
      c = ["{", "}", "|", "\\", "^", "`"].concat([
        "<",
        ">",
        '"',
        "`",
        " ",
        "\r",
        "\n",
        "\t",
      ]),
      u = ["'"].concat(c),
      d = ["%", "/", "?", ";", "#"].concat(u),
      h = ["/", "?", "#"],
      p = /^[+a-z0-9A-Z_-]{0,63}$/,
      f = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
      m = { javascript: !0, "javascript:": !0 },
      g = { javascript: !0, "javascript:": !0 },
      v = {
        http: !0,
        https: !0,
        ftp: !0,
        gopher: !0,
        file: !0,
        "http:": !0,
        "https:": !0,
        "ftp:": !0,
        "gopher:": !0,
        "file:": !0,
      },
      b = n(53);
    function y(e, t, n) {
      if (e && i.isObject(e) && e instanceof o) return e;
      var r = new o();
      return r.parse(e, t, n), r;
    }
    (o.prototype.parse = function (e, t, n) {
      if (!i.isString(e))
        throw new TypeError(
          "Parameter 'url' must be a string, not " + typeof e
        );
      var o = e.indexOf("?"),
        s = -1 !== o && o < e.indexOf("#") ? "?" : "#",
        c = e.split(s);
      c[0] = c[0].replace(/\\/g, "/");
      var y = (e = c.join(s));
      if (((y = y.trim()), !n && 1 === e.split("#").length)) {
        var _ = l.exec(y);
        if (_)
          return (
            (this.path = y),
            (this.href = y),
            (this.pathname = _[1]),
            _[2]
              ? ((this.search = _[2]),
                (this.query = t
                  ? b.parse(this.search.substr(1))
                  : this.search.substr(1)))
              : t && ((this.search = ""), (this.query = {})),
            this
          );
      }
      var w = a.exec(y);
      if (w) {
        var E = (w = w[0]).toLowerCase();
        (this.protocol = E), (y = y.substr(w.length));
      }
      if (n || w || y.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var T = "//" === y.substr(0, 2);
        !T || (w && g[w]) || ((y = y.substr(2)), (this.slashes = !0));
      }
      if (!g[w] && (T || (w && !v[w]))) {
        for (var C, x, S = -1, L = 0; L < h.length; L++) {
          -1 !== (R = y.indexOf(h[L])) && (-1 === S || R < S) && (S = R);
        }
        -1 !== (x = -1 === S ? y.lastIndexOf("@") : y.lastIndexOf("@", S)) &&
          ((C = y.slice(0, x)),
          (y = y.slice(x + 1)),
          (this.auth = decodeURIComponent(C))),
          (S = -1);
        for (L = 0; L < d.length; L++) {
          var R;
          -1 !== (R = y.indexOf(d[L])) && (-1 === S || R < S) && (S = R);
        }
        -1 === S && (S = y.length),
          (this.host = y.slice(0, S)),
          (y = y.slice(S)),
          this.parseHost(),
          (this.hostname = this.hostname || "");
        var O =
          "[" === this.hostname[0] &&
          "]" === this.hostname[this.hostname.length - 1];
        if (!O)
          for (
            var A = this.hostname.split(/\./), k = ((L = 0), A.length);
            L < k;
            L++
          ) {
            var I = A[L];
            if (I && !I.match(p)) {
              for (var D = "", P = 0, N = I.length; P < N; P++)
                I.charCodeAt(P) > 127 ? (D += "x") : (D += I[P]);
              if (!D.match(p)) {
                var M = A.slice(0, L),
                  U = A.slice(L + 1),
                  q = I.match(f);
                q && (M.push(q[1]), U.unshift(q[2])),
                  U.length && (y = "/" + U.join(".") + y),
                  (this.hostname = M.join("."));
                break;
              }
            }
          }
        this.hostname.length > 255
          ? (this.hostname = "")
          : (this.hostname = this.hostname.toLowerCase()),
          O || (this.hostname = r.toASCII(this.hostname));
        var j = this.port ? ":" + this.port : "",
          B = this.hostname || "";
        (this.host = B + j),
          (this.href += this.host),
          O &&
            ((this.hostname = this.hostname.substr(
              1,
              this.hostname.length - 2
            )),
            "/" !== y[0] && (y = "/" + y));
      }
      if (!m[E])
        for (L = 0, k = u.length; L < k; L++) {
          var H = u[L];
          if (-1 !== y.indexOf(H)) {
            var V = encodeURIComponent(H);
            V === H && (V = escape(H)), (y = y.split(H).join(V));
          }
        }
      var F = y.indexOf("#");
      -1 !== F && ((this.hash = y.substr(F)), (y = y.slice(0, F)));
      var $ = y.indexOf("?");
      if (
        (-1 !== $
          ? ((this.search = y.substr($)),
            (this.query = y.substr($ + 1)),
            t && (this.query = b.parse(this.query)),
            (y = y.slice(0, $)))
          : t && ((this.search = ""), (this.query = {})),
        y && (this.pathname = y),
        v[E] && this.hostname && !this.pathname && (this.pathname = "/"),
        this.pathname || this.search)
      ) {
        j = this.pathname || "";
        var Y = this.search || "";
        this.path = j + Y;
      }
      return (this.href = this.format()), this;
    }),
      (o.prototype.format = function () {
        var e = this.auth || "";
        e &&
          ((e = (e = encodeURIComponent(e)).replace(/%3A/i, ":")), (e += "@"));
        var t = this.protocol || "",
          n = this.pathname || "",
          r = this.hash || "",
          o = !1,
          a = "";
        this.host
          ? (o = e + this.host)
          : this.hostname &&
            ((o =
              e +
              (-1 === this.hostname.indexOf(":")
                ? this.hostname
                : "[" + this.hostname + "]")),
            this.port && (o += ":" + this.port)),
          this.query &&
            i.isObject(this.query) &&
            Object.keys(this.query).length &&
            (a = b.stringify(this.query));
        var s = this.search || (a && "?" + a) || "";
        return (
          t && ":" !== t.substr(-1) && (t += ":"),
          this.slashes || ((!t || v[t]) && !1 !== o)
            ? ((o = "//" + (o || "")),
              n && "/" !== n.charAt(0) && (n = "/" + n))
            : o || (o = ""),
          r && "#" !== r.charAt(0) && (r = "#" + r),
          s && "?" !== s.charAt(0) && (s = "?" + s),
          t +
            o +
            (n = n.replace(/[?#]/g, function (e) {
              return encodeURIComponent(e);
            })) +
            (s = s.replace("#", "%23")) +
            r
        );
      }),
      (o.prototype.resolve = function (e) {
        return this.resolveObject(y(e, !1, !0)).format();
      }),
      (o.prototype.resolveObject = function (e) {
        if (i.isString(e)) {
          var t = new o();
          t.parse(e, !1, !0), (e = t);
        }
        for (var n = new o(), r = Object.keys(this), a = 0; a < r.length; a++) {
          var s = r[a];
          n[s] = this[s];
        }
        if (((n.hash = e.hash), "" === e.href)) return (n.href = n.format()), n;
        if (e.slashes && !e.protocol) {
          for (var l = Object.keys(e), c = 0; c < l.length; c++) {
            var u = l[c];
            "protocol" !== u && (n[u] = e[u]);
          }
          return (
            v[n.protocol] &&
              n.hostname &&
              !n.pathname &&
              (n.path = n.pathname = "/"),
            (n.href = n.format()),
            n
          );
        }
        if (e.protocol && e.protocol !== n.protocol) {
          if (!v[e.protocol]) {
            for (var d = Object.keys(e), h = 0; h < d.length; h++) {
              var p = d[h];
              n[p] = e[p];
            }
            return (n.href = n.format()), n;
          }
          if (((n.protocol = e.protocol), e.host || g[e.protocol]))
            n.pathname = e.pathname;
          else {
            for (
              var f = (e.pathname || "").split("/");
              f.length && !(e.host = f.shift());

            );
            e.host || (e.host = ""),
              e.hostname || (e.hostname = ""),
              "" !== f[0] && f.unshift(""),
              f.length < 2 && f.unshift(""),
              (n.pathname = f.join("/"));
          }
          if (
            ((n.search = e.search),
            (n.query = e.query),
            (n.host = e.host || ""),
            (n.auth = e.auth),
            (n.hostname = e.hostname || e.host),
            (n.port = e.port),
            n.pathname || n.search)
          ) {
            var m = n.pathname || "",
              b = n.search || "";
            n.path = m + b;
          }
          return (n.slashes = n.slashes || e.slashes), (n.href = n.format()), n;
        }
        var y = n.pathname && "/" === n.pathname.charAt(0),
          _ = e.host || (e.pathname && "/" === e.pathname.charAt(0)),
          w = _ || y || (n.host && e.pathname),
          E = w,
          T = (n.pathname && n.pathname.split("/")) || [],
          C =
            ((f = (e.pathname && e.pathname.split("/")) || []),
            n.protocol && !v[n.protocol]);
        if (
          (C &&
            ((n.hostname = ""),
            (n.port = null),
            n.host && ("" === T[0] ? (T[0] = n.host) : T.unshift(n.host)),
            (n.host = ""),
            e.protocol &&
              ((e.hostname = null),
              (e.port = null),
              e.host && ("" === f[0] ? (f[0] = e.host) : f.unshift(e.host)),
              (e.host = null)),
            (w = w && ("" === f[0] || "" === T[0]))),
          _)
        )
          (n.host = e.host || "" === e.host ? e.host : n.host),
            (n.hostname =
              e.hostname || "" === e.hostname ? e.hostname : n.hostname),
            (n.search = e.search),
            (n.query = e.query),
            (T = f);
        else if (f.length)
          T || (T = []),
            T.pop(),
            (T = T.concat(f)),
            (n.search = e.search),
            (n.query = e.query);
        else if (!i.isNullOrUndefined(e.search)) {
          if (C)
            (n.hostname = n.host = T.shift()),
              (O =
                !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) &&
                ((n.auth = O.shift()), (n.host = n.hostname = O.shift()));
          return (
            (n.search = e.search),
            (n.query = e.query),
            (i.isNull(n.pathname) && i.isNull(n.search)) ||
              (n.path =
                (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
            (n.href = n.format()),
            n
          );
        }
        if (!T.length)
          return (
            (n.pathname = null),
            n.search ? (n.path = "/" + n.search) : (n.path = null),
            (n.href = n.format()),
            n
          );
        for (
          var x = T.slice(-1)[0],
            S =
              ((n.host || e.host || T.length > 1) &&
                ("." === x || ".." === x)) ||
              "" === x,
            L = 0,
            R = T.length;
          R >= 0;
          R--
        )
          "." === (x = T[R])
            ? T.splice(R, 1)
            : ".." === x
            ? (T.splice(R, 1), L++)
            : L && (T.splice(R, 1), L--);
        if (!w && !E) for (; L--; L) T.unshift("..");
        !w || "" === T[0] || (T[0] && "/" === T[0].charAt(0)) || T.unshift(""),
          S && "/" !== T.join("/").substr(-1) && T.push("");
        var O,
          A = "" === T[0] || (T[0] && "/" === T[0].charAt(0));
        C &&
          ((n.hostname = n.host = A ? "" : T.length ? T.shift() : ""),
          (O = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) &&
            ((n.auth = O.shift()), (n.host = n.hostname = O.shift())));
        return (
          (w = w || (n.host && T.length)) && !A && T.unshift(""),
          T.length
            ? (n.pathname = T.join("/"))
            : ((n.pathname = null), (n.path = null)),
          (i.isNull(n.pathname) && i.isNull(n.search)) ||
            (n.path =
              (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
          (n.auth = e.auth || n.auth),
          (n.slashes = n.slashes || e.slashes),
          (n.href = n.format()),
          n
        );
      }),
      (o.prototype.parseHost = function () {
        var e = this.host,
          t = s.exec(e);
        t &&
          (":" !== (t = t[0]) && (this.port = t.substr(1)),
          (e = e.substr(0, e.length - t.length))),
          e && (this.hostname = e);
      });
  },
  function (e) {
    e.exports = JSON.parse(
      '{"name":"ytdl-core","description":"YouTube video downloader in pure javascript.","keywords":["youtube","video","download"],"version":"4.9.1","repository":{"type":"git","url":"git://github.com/fent/node-ytdl-core.git"},"author":"fent <fentbox@gmail.com> (https://github.com/fent)","contributors":["Tobias Kutscha (https://github.com/TimeForANinja)","Andrew Kelley (https://github.com/andrewrk)","Mauricio Allende (https://github.com/mallendeo)","Rodrigo Altamirano (https://github.com/raltamirano)","Jim Buck (https://github.com/JimmyBoh)"],"main":"./lib/index.js","types":"./typings/index.d.ts","files":["lib","typings"],"scripts":{"test":"nyc --reporter=lcov --reporter=text-summary npm run test:unit","test:unit":"mocha --ignore test/irl-test.js test/*-test.js --timeout 4000","test:irl":"mocha --timeout 16000 test/irl-test.js","lint":"eslint ./","lint:fix":"eslint --fix ./","lint:typings":"tslint typings/index.d.ts","lint:typings:fix":"tslint --fix typings/index.d.ts"},"dependencies":{"m3u8stream":"^0.8.3","miniget":"^4.0.0","sax":"^1.1.3"},"devDependencies":{"@types/node":"^13.1.0","assert-diff":"^3.0.1","dtslint":"^3.6.14","eslint":"^6.8.0","mocha":"^7.0.0","muk-require":"^1.2.0","nock":"^13.0.4","nyc":"^15.0.0","sinon":"^9.0.0","stream-equal":"~1.1.0","typescript":"^3.9.7"},"engines":{"node":">=10"},"license":"MIT"}'
    );
  },
  function (e, t, n) {
    const r = n(43),
      i = n(285),
      o = ["mp4a", "mp3", "vorbis", "aac", "opus", "flac"],
      a = [
        "mp4v",
        "avc1",
        "Sorenson H.283",
        "MPEG-4 Visual",
        "VP8",
        "VP9",
        "H.264",
      ],
      s = (e) => e.bitrate || 0,
      l = (e) => a.findIndex((t) => e.codecs && e.codecs.includes(t)),
      c = (e) => e.audioBitrate || 0,
      u = (e) => o.findIndex((t) => e.codecs && e.codecs.includes(t)),
      d = (e, t, n) => {
        let r = 0;
        for (let i of n) if (((r = i(t) - i(e)), 0 !== r)) break;
        return r;
      },
      h = (e, t) => d(e, t, [(e) => parseInt(e.qualityLabel), s, l]),
      p = (e, t) => d(e, t, [c, u]);
    (t.sortFormats = (e, t) =>
      d(e, t, [
        (e) => +!!e.isHLS,
        (e) => +!!e.isDashMPD,
        (e) => +(e.contentLength > 0),
        (e) => +(e.hasVideo && e.hasAudio),
        (e) => +e.hasVideo,
        (e) => parseInt(e.qualityLabel) || 0,
        s,
        c,
        l,
        u,
      ])),
      (t.chooseFormat = (e, n) => {
        if ("object" == typeof n.format) {
          if (!n.format.url)
            throw Error("Invalid format given, did you use `ytdl.getInfo()`?");
          return n.format;
        }
        let r;
        n.filter && (e = t.filterFormats(e, n.filter)),
          e.some((e) => e.isHLS) && (e = e.filter((e) => e.isHLS || !e.isLive));
        const i = n.quality || "highest";
        switch (i) {
          case "highest":
            r = e[0];
            break;
          case "lowest":
            r = e[e.length - 1];
            break;
          case "highestaudio": {
            (e = t.filterFormats(e, "audio")).sort(p);
            const n = e[0],
              i = (e = e.filter((e) => 0 === p(n, e)))
                .map((e) => parseInt(e.qualityLabel) || 0)
                .sort((e, t) => e - t)[0];
            r = e.find((e) => (parseInt(e.qualityLabel) || 0) === i);
            break;
          }
          case "lowestaudio":
            (e = t.filterFormats(e, "audio")).sort(p), (r = e[e.length - 1]);
            break;
          case "highestvideo": {
            (e = t.filterFormats(e, "video")).sort(h);
            const n = e[0],
              i = (e = e.filter((e) => 0 === h(n, e)))
                .map((e) => e.audioBitrate || 0)
                .sort((e, t) => e - t)[0];
            r = e.find((e) => (e.audioBitrate || 0) === i);
            break;
          }
          case "lowestvideo":
            (e = t.filterFormats(e, "video")).sort(h), (r = e[e.length - 1]);
            break;
          default:
            r = f(i, e);
        }
        if (!r) throw Error("No such format found: " + i);
        return r;
      });
    const f = (e, t) => {
      let n = (e) => t.find((t) => "" + t.itag == "" + e);
      return Array.isArray(e) ? n(e.find((e) => n(e))) : n(e);
    };
    (t.filterFormats = (e, t) => {
      let n;
      switch (t) {
        case "videoandaudio":
        case "audioandvideo":
          n = (e) => e.hasVideo && e.hasAudio;
          break;
        case "video":
          n = (e) => e.hasVideo;
          break;
        case "videoonly":
          n = (e) => e.hasVideo && !e.hasAudio;
          break;
        case "audio":
          n = (e) => e.hasAudio;
          break;
        case "audioonly":
          n = (e) => !e.hasVideo && e.hasAudio;
          break;
        default:
          if ("function" != typeof t)
            throw TypeError(`Given filter (${t}) is not supported`);
          n = t;
      }
      return e.filter((e) => !!e.url && n(e));
    }),
      (t.addFormatMeta = (e) => (
        ((e = Object.assign({}, i[e.itag], e)).hasVideo = !!e.qualityLabel),
        (e.hasAudio = !!e.audioBitrate),
        (e.container = e.mimeType
          ? e.mimeType.split(";")[0].split("/")[1]
          : null),
        (e.codecs = e.mimeType ? r.between(e.mimeType, 'codecs="', '"') : null),
        (e.videoCodec =
          e.hasVideo && e.codecs ? e.codecs.split(", ")[0] : null),
        (e.audioCodec =
          e.hasAudio && e.codecs ? e.codecs.split(", ").slice(-1)[0] : null),
        (e.isLive = /\bsource[/=]yt_live_broadcast\b/.test(e.url)),
        (e.isHLS = /\/manifest\/hls_(variant|playlist)\//.test(e.url)),
        (e.isDashMPD = /\/manifest\/dash\//.test(e.url)),
        e
      ));
  },
  function (e, t) {
    const n = new Set([
        "youtube.com",
        "www.youtube.com",
        "m.youtube.com",
        "music.youtube.com",
        "gaming.youtube.com",
      ]),
      r = /^https?:\/\/(youtu\.be\/|(www\.)?youtube\.com\/(embed|v|shorts)\/)/;
    t.getURLVideoID = (e) => {
      const i = new URL(e);
      let a = i.searchParams.get("v");
      if (r.test(e) && !a) {
        const e = i.pathname.split("/");
        a = "youtu.be" === i.host ? e[1] : e[2];
      } else if (i.hostname && !n.has(i.hostname))
        throw Error("Not a YouTube domain");
      if (!a) throw Error("No video id found: " + e);
      if (((a = a.substring(0, 11)), !t.validateID(a)))
        throw TypeError(
          `Video id (${a}) does not match expected format (${o.toString()})`
        );
      return a;
    };
    const i = /^https?:\/\//;
    t.getVideoID = (e) => {
      if (t.validateID(e)) return e;
      if (i.test(e)) return t.getURLVideoID(e);
      throw Error("No video id found: " + e);
    };
    const o = /^[a-zA-Z0-9-_]{11}$/;
    (t.validateID = (e) => o.test(e)),
      (t.validateURL = (e) => {
        try {
          return t.getURLVideoID(e), !0;
        } catch (e) {
          return !1;
        }
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.durationStr = t.humanStr = void 0);
    const r = /^\d+$/,
      i = /^(?:(?:(\d+):)?(\d{1,2}):)?(\d{1,2})(?:\.(\d{3}))?$/,
      o = { ms: 1, s: 1e3, m: 6e4, h: 36e5 };
    (t.humanStr = (e) => {
      if ("number" == typeof e) return e;
      if (r.test(e)) return +e;
      const t = i.exec(e);
      if (t)
        return (
          +(t[1] || 0) * o.h + +(t[2] || 0) * o.m + +t[3] * o.s + +(t[4] || 0)
        );
      {
        let t = 0;
        const n = /(-?\d+)(ms|s|m|h)/g;
        let r;
        for (; null !== (r = n.exec(e)); ) t += +r[1] * o[r[2]];
        return t;
      }
    }),
      (t.durationStr = (e) => {
        let t = 0;
        const n = /(\d+(?:\.\d+)?)(S|M|H)/g;
        let r;
        for (; null !== (r = n.exec(e)); ) t += +r[1] * o[r[2].toLowerCase()];
        return t;
      });
  },
  function (e, t, n) {
    const r = n(53),
      i = n(93),
      o = n(43);
    (t.cache = new i()),
      (t.getTokens = (e, n) =>
        t.cache.getOrSet(e, async () => {
          const r = await o.exposedMiniget(e, n).text(),
            i = t.extractActions(r);
          if (!i || !i.length)
            throw Error("Could not extract signature deciphering actions");
          return t.cache.set(e, i), i;
        })),
      (t.decipher = (e, t) => {
        t = t.split("");
        for (let n = 0, r = e.length; n < r; n++) {
          let r,
            i = e[n];
          switch (i[0]) {
            case "r":
              t = t.reverse();
              break;
            case "w":
              (r = ~~i.slice(1)), (t = a(t, r));
              break;
            case "s":
              (r = ~~i.slice(1)), (t = t.slice(r));
              break;
            case "p":
              (r = ~~i.slice(1)), t.splice(0, r);
          }
        }
        return t.join("");
      });
    const a = (e, t) => {
        const n = e[0];
        return (e[0] = e[t % e.length]), (e[t] = n), e;
      },
      s = "[a-zA-Z_\\$][a-zA-Z_0-9]*",
      l =
        "(?:'[^'\\\\]*(:?\\\\[\\s\\S][^'\\\\]*)*'|\"[^\"\\\\]*(:?\\\\[\\s\\S][^\"\\\\]*)*\")",
      c = `(?:${s}|${l})`,
      u = `(?:\\.${s}|\\[${l}\\])`,
      d = ":function\\(a\\)\\{(?:return )?a\\.reverse\\(\\)\\}",
      h = ":function\\(a,b\\)\\{return a\\.slice\\(b\\)\\}",
      p = ":function\\(a,b\\)\\{a\\.splice\\(0,b\\)\\}",
      f =
        ":function\\(a,b\\)\\{var c=a\\[0\\];a\\[0\\]=a\\[b(?:%a\\.length)?\\];a\\[b(?:%a\\.length)?\\]=c(?:;return a)?\\}",
      m = new RegExp(
        `var (${s})=\\{((?:(?:${c}${d}|${c}${h}|${c}${p}|${c}${f}),?\\r?\\n?)+)\\};`
      ),
      g = new RegExp(
        `function(?: ${s})?\\(a\\)\\{a=a\\.split\\((?:''|"")\\);\\s*((?:(?:a=)?[a-zA-Z_\\$][a-zA-Z_0-9]*${u}\\(a,\\d+\\);)+)return a\\.join\\((?:''|"")\\)\\}`
      ),
      v = new RegExp(`(?:^|,)(${c})${d}`, "m"),
      b = new RegExp(`(?:^|,)(${c})${h}`, "m"),
      y = new RegExp(`(?:^|,)(${c})${p}`, "m"),
      _ = new RegExp(`(?:^|,)(${c})${f}`, "m");
    (t.extractActions = (e) => {
      const t = m.exec(e),
        n = g.exec(e);
      if (!t || !n) return null;
      const r = t[1].replace(/\$/g, "\\$"),
        i = t[2].replace(/\$/g, "\\$"),
        o = n[1].replace(/\$/g, "\\$");
      let a = v.exec(i);
      const s = a && a[1].replace(/\$/g, "\\$").replace(/\$|^'|^"|'$|"$/g, "");
      a = b.exec(i);
      const l = a && a[1].replace(/\$/g, "\\$").replace(/\$|^'|^"|'$|"$/g, "");
      a = y.exec(i);
      const c = a && a[1].replace(/\$/g, "\\$").replace(/\$|^'|^"|'$|"$/g, "");
      a = _.exec(i);
      const u = a && a[1].replace(/\$/g, "\\$").replace(/\$|^'|^"|'$|"$/g, ""),
        d = `(${[s, l, c, u].join("|")})`,
        h = new RegExp(
          `(?:a=)?${r}(?:\\.${d}|\\['${d}'\\]|\\["${d}"\\])\\(a,(\\d+)\\)`,
          "g"
        ),
        p = [];
      for (; null !== (a = h.exec(o)); ) {
        switch (a[1] || a[2] || a[3]) {
          case u:
            p.push("w" + a[4]);
            break;
          case s:
            p.push("r");
            break;
          case l:
            p.push("s" + a[4]);
            break;
          case c:
            p.push("p" + a[4]);
        }
      }
      return p;
    }),
      (t.setDownloadURL = (e, t) => {
        let n;
        if (!e.url) return;
        n = e.url;
        try {
          n = decodeURIComponent(n);
        } catch (e) {
          return;
        }
        const r = new URL(n);
        r.searchParams.set("ratebypass", "yes"),
          t && r.searchParams.set(e.sp || "signature", t),
          (e.url = r.toString());
      }),
      (t.decipherFormats = async (e, n, i) => {
        let o = {},
          a = await t.getTokens(n, i);
        return (
          e.forEach((e) => {
            let n = e.signatureCipher || e.cipher;
            n &&
              (Object.assign(e, r.parse(n)),
              delete e.signatureCipher,
              delete e.cipher);
            const i = a && e.s ? t.decipher(a, e.s) : null;
            t.setDownloadURL(e, i), (o[e.url] = e);
          }),
          o
        );
      });
  },
  function (e, t, n) {
    const { setTimeout: r } = n(24);
    e.exports = class extends Map {
      constructor(e = 1e3) {
        super(), (this.timeout = e);
      }
      set(e, t) {
        this.has(e) && clearTimeout(super.get(e).tid),
          super.set(e, {
            tid: r(this.delete.bind(this, e), this.timeout).unref(),
            value: t,
          });
      }
      get(e) {
        let t = super.get(e);
        return t ? t.value : null;
      }
      getOrSet(e, t) {
        if (this.has(e)) return this.get(e);
        {
          let n = t();
          return (
            this.set(e, n),
            (async () => {
              try {
                await n;
              } catch (t) {
                this.delete(e);
              }
            })(),
            n
          );
        }
      }
      delete(e) {
        let t = super.get(e);
        t && (clearTimeout(t.tid), super.delete(e));
      }
      clear() {
        for (let e of this.values()) clearTimeout(e.tid);
        super.clear();
      }
    };
  },
  function (e, t, n) {
    "use strict";
    (function (t, r) {
      var i;
      (e.exports = x), (x.ReadableState = C);
      n(39).EventEmitter;
      var o = function (e, t) {
          return e.listeners(t).length;
        },
        a = n(95),
        s = n(18).Buffer,
        l = t.Uint8Array || function () {};
      var c,
        u = n(293);
      c = u && u.debuglog ? u.debuglog("stream") : function () {};
      var d,
        h,
        p,
        f = n(294),
        m = n(96),
        g = n(97).getHighWaterMark,
        v = n(33).codes,
        b = v.ERR_INVALID_ARG_TYPE,
        y = v.ERR_STREAM_PUSH_AFTER_EOF,
        _ = v.ERR_METHOD_NOT_IMPLEMENTED,
        w = v.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
      n(17)(x, a);
      var E = m.errorOrDestroy,
        T = ["error", "close", "destroy", "pause", "resume"];
      function C(e, t, r) {
        (i = i || n(34)),
          (e = e || {}),
          "boolean" != typeof r && (r = t instanceof i),
          (this.objectMode = !!e.objectMode),
          r && (this.objectMode = this.objectMode || !!e.readableObjectMode),
          (this.highWaterMark = g(this, e, "readableHighWaterMark", r)),
          (this.buffer = new f()),
          (this.length = 0),
          (this.pipes = null),
          (this.pipesCount = 0),
          (this.flowing = null),
          (this.ended = !1),
          (this.endEmitted = !1),
          (this.reading = !1),
          (this.sync = !0),
          (this.needReadable = !1),
          (this.emittedReadable = !1),
          (this.readableListening = !1),
          (this.resumeScheduled = !1),
          (this.paused = !0),
          (this.emitClose = !1 !== e.emitClose),
          (this.autoDestroy = !!e.autoDestroy),
          (this.destroyed = !1),
          (this.defaultEncoding = e.defaultEncoding || "utf8"),
          (this.awaitDrain = 0),
          (this.readingMore = !1),
          (this.decoder = null),
          (this.encoding = null),
          e.encoding &&
            (d || (d = n(42).StringDecoder),
            (this.decoder = new d(e.encoding)),
            (this.encoding = e.encoding));
      }
      function x(e) {
        if (((i = i || n(34)), !(this instanceof x))) return new x(e);
        var t = this instanceof i;
        (this._readableState = new C(e, this, t)),
          (this.readable = !0),
          e &&
            ("function" == typeof e.read && (this._read = e.read),
            "function" == typeof e.destroy && (this._destroy = e.destroy)),
          a.call(this);
      }
      function S(e, t, n, r, i) {
        c("readableAddChunk", t);
        var o,
          a = e._readableState;
        if (null === t)
          (a.reading = !1),
            (function (e, t) {
              if ((c("onEofChunk"), t.ended)) return;
              if (t.decoder) {
                var n = t.decoder.end();
                n &&
                  n.length &&
                  (t.buffer.push(n), (t.length += t.objectMode ? 1 : n.length));
              }
              (t.ended = !0),
                t.sync
                  ? O(e)
                  : ((t.needReadable = !1),
                    t.emittedReadable || ((t.emittedReadable = !0), A(e)));
            })(e, a);
        else if (
          (i ||
            (o = (function (e, t) {
              var n;
              (r = t),
                s.isBuffer(r) ||
                  r instanceof l ||
                  "string" == typeof t ||
                  void 0 === t ||
                  e.objectMode ||
                  (n = new b("chunk", ["string", "Buffer", "Uint8Array"], t));
              var r;
              return n;
            })(a, t)),
          o)
        )
          E(e, o);
        else if (a.objectMode || (t && t.length > 0))
          if (
            ("string" == typeof t ||
              a.objectMode ||
              Object.getPrototypeOf(t) === s.prototype ||
              (t = (function (e) {
                return s.from(e);
              })(t)),
            r)
          )
            a.endEmitted ? E(e, new w()) : L(e, a, t, !0);
          else if (a.ended) E(e, new y());
          else {
            if (a.destroyed) return !1;
            (a.reading = !1),
              a.decoder && !n
                ? ((t = a.decoder.write(t)),
                  a.objectMode || 0 !== t.length ? L(e, a, t, !1) : k(e, a))
                : L(e, a, t, !1);
          }
        else r || ((a.reading = !1), k(e, a));
        return !a.ended && (a.length < a.highWaterMark || 0 === a.length);
      }
      function L(e, t, n, r) {
        t.flowing && 0 === t.length && !t.sync
          ? ((t.awaitDrain = 0), e.emit("data", n))
          : ((t.length += t.objectMode ? 1 : n.length),
            r ? t.buffer.unshift(n) : t.buffer.push(n),
            t.needReadable && O(e)),
          k(e, t);
      }
      Object.defineProperty(x.prototype, "destroyed", {
        enumerable: !1,
        get: function () {
          return (
            void 0 !== this._readableState && this._readableState.destroyed
          );
        },
        set: function (e) {
          this._readableState && (this._readableState.destroyed = e);
        },
      }),
        (x.prototype.destroy = m.destroy),
        (x.prototype._undestroy = m.undestroy),
        (x.prototype._destroy = function (e, t) {
          t(e);
        }),
        (x.prototype.push = function (e, t) {
          var n,
            r = this._readableState;
          return (
            r.objectMode
              ? (n = !0)
              : "string" == typeof e &&
                ((t = t || r.defaultEncoding) !== r.encoding &&
                  ((e = s.from(e, t)), (t = "")),
                (n = !0)),
            S(this, e, t, !1, n)
          );
        }),
        (x.prototype.unshift = function (e) {
          return S(this, e, null, !0, !1);
        }),
        (x.prototype.isPaused = function () {
          return !1 === this._readableState.flowing;
        }),
        (x.prototype.setEncoding = function (e) {
          d || (d = n(42).StringDecoder);
          var t = new d(e);
          (this._readableState.decoder = t),
            (this._readableState.encoding =
              this._readableState.decoder.encoding);
          for (var r = this._readableState.buffer.head, i = ""; null !== r; )
            (i += t.write(r.data)), (r = r.next);
          return (
            this._readableState.buffer.clear(),
            "" !== i && this._readableState.buffer.push(i),
            (this._readableState.length = i.length),
            this
          );
        });
      function R(e, t) {
        return e <= 0 || (0 === t.length && t.ended)
          ? 0
          : t.objectMode
          ? 1
          : e != e
          ? t.flowing && t.length
            ? t.buffer.head.data.length
            : t.length
          : (e > t.highWaterMark &&
              (t.highWaterMark = (function (e) {
                return (
                  e >= 1073741824
                    ? (e = 1073741824)
                    : (e--,
                      (e |= e >>> 1),
                      (e |= e >>> 2),
                      (e |= e >>> 4),
                      (e |= e >>> 8),
                      (e |= e >>> 16),
                      e++),
                  e
                );
              })(e)),
            e <= t.length
              ? e
              : t.ended
              ? t.length
              : ((t.needReadable = !0), 0));
      }
      function O(e) {
        var t = e._readableState;
        c("emitReadable", t.needReadable, t.emittedReadable),
          (t.needReadable = !1),
          t.emittedReadable ||
            (c("emitReadable", t.flowing),
            (t.emittedReadable = !0),
            r.nextTick(A, e));
      }
      function A(e) {
        var t = e._readableState;
        c("emitReadable_", t.destroyed, t.length, t.ended),
          t.destroyed ||
            (!t.length && !t.ended) ||
            (e.emit("readable"), (t.emittedReadable = !1)),
          (t.needReadable =
            !t.flowing && !t.ended && t.length <= t.highWaterMark),
          M(e);
      }
      function k(e, t) {
        t.readingMore || ((t.readingMore = !0), r.nextTick(I, e, t));
      }
      function I(e, t) {
        for (
          ;
          !t.reading &&
          !t.ended &&
          (t.length < t.highWaterMark || (t.flowing && 0 === t.length));

        ) {
          var n = t.length;
          if ((c("maybeReadMore read 0"), e.read(0), n === t.length)) break;
        }
        t.readingMore = !1;
      }
      function D(e) {
        var t = e._readableState;
        (t.readableListening = e.listenerCount("readable") > 0),
          t.resumeScheduled && !t.paused
            ? (t.flowing = !0)
            : e.listenerCount("data") > 0 && e.resume();
      }
      function P(e) {
        c("readable nexttick read 0"), e.read(0);
      }
      function N(e, t) {
        c("resume", t.reading),
          t.reading || e.read(0),
          (t.resumeScheduled = !1),
          e.emit("resume"),
          M(e),
          t.flowing && !t.reading && e.read(0);
      }
      function M(e) {
        var t = e._readableState;
        for (c("flow", t.flowing); t.flowing && null !== e.read(); );
      }
      function U(e, t) {
        return 0 === t.length
          ? null
          : (t.objectMode
              ? (n = t.buffer.shift())
              : !e || e >= t.length
              ? ((n = t.decoder
                  ? t.buffer.join("")
                  : 1 === t.buffer.length
                  ? t.buffer.first()
                  : t.buffer.concat(t.length)),
                t.buffer.clear())
              : (n = t.buffer.consume(e, t.decoder)),
            n);
        var n;
      }
      function q(e) {
        var t = e._readableState;
        c("endReadable", t.endEmitted),
          t.endEmitted || ((t.ended = !0), r.nextTick(j, t, e));
      }
      function j(e, t) {
        if (
          (c("endReadableNT", e.endEmitted, e.length),
          !e.endEmitted &&
            0 === e.length &&
            ((e.endEmitted = !0),
            (t.readable = !1),
            t.emit("end"),
            e.autoDestroy))
        ) {
          var n = t._writableState;
          (!n || (n.autoDestroy && n.finished)) && t.destroy();
        }
      }
      function B(e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      }
      (x.prototype.read = function (e) {
        c("read", e), (e = parseInt(e, 10));
        var t = this._readableState,
          n = e;
        if (
          (0 !== e && (t.emittedReadable = !1),
          0 === e &&
            t.needReadable &&
            ((0 !== t.highWaterMark
              ? t.length >= t.highWaterMark
              : t.length > 0) ||
              t.ended))
        )
          return (
            c("read: emitReadable", t.length, t.ended),
            0 === t.length && t.ended ? q(this) : O(this),
            null
          );
        if (0 === (e = R(e, t)) && t.ended)
          return 0 === t.length && q(this), null;
        var r,
          i = t.needReadable;
        return (
          c("need readable", i),
          (0 === t.length || t.length - e < t.highWaterMark) &&
            c("length less than watermark", (i = !0)),
          t.ended || t.reading
            ? c("reading or ended", (i = !1))
            : i &&
              (c("do read"),
              (t.reading = !0),
              (t.sync = !0),
              0 === t.length && (t.needReadable = !0),
              this._read(t.highWaterMark),
              (t.sync = !1),
              t.reading || (e = R(n, t))),
          null === (r = e > 0 ? U(e, t) : null)
            ? ((t.needReadable = t.length <= t.highWaterMark), (e = 0))
            : ((t.length -= e), (t.awaitDrain = 0)),
          0 === t.length &&
            (t.ended || (t.needReadable = !0), n !== e && t.ended && q(this)),
          null !== r && this.emit("data", r),
          r
        );
      }),
        (x.prototype._read = function (e) {
          E(this, new _("_read()"));
        }),
        (x.prototype.pipe = function (e, t) {
          var n = this,
            i = this._readableState;
          switch (i.pipesCount) {
            case 0:
              i.pipes = e;
              break;
            case 1:
              i.pipes = [i.pipes, e];
              break;
            default:
              i.pipes.push(e);
          }
          (i.pipesCount += 1), c("pipe count=%d opts=%j", i.pipesCount, t);
          var a =
            (!t || !1 !== t.end) && e !== r.stdout && e !== r.stderr ? l : g;
          function s(t, r) {
            c("onunpipe"),
              t === n &&
                r &&
                !1 === r.hasUnpiped &&
                ((r.hasUnpiped = !0),
                c("cleanup"),
                e.removeListener("close", f),
                e.removeListener("finish", m),
                e.removeListener("drain", u),
                e.removeListener("error", p),
                e.removeListener("unpipe", s),
                n.removeListener("end", l),
                n.removeListener("end", g),
                n.removeListener("data", h),
                (d = !0),
                !i.awaitDrain ||
                  (e._writableState && !e._writableState.needDrain) ||
                  u());
          }
          function l() {
            c("onend"), e.end();
          }
          i.endEmitted ? r.nextTick(a) : n.once("end", a), e.on("unpipe", s);
          var u = (function (e) {
            return function () {
              var t = e._readableState;
              c("pipeOnDrain", t.awaitDrain),
                t.awaitDrain && t.awaitDrain--,
                0 === t.awaitDrain && o(e, "data") && ((t.flowing = !0), M(e));
            };
          })(n);
          e.on("drain", u);
          var d = !1;
          function h(t) {
            c("ondata");
            var r = e.write(t);
            c("dest.write", r),
              !1 === r &&
                (((1 === i.pipesCount && i.pipes === e) ||
                  (i.pipesCount > 1 && -1 !== B(i.pipes, e))) &&
                  !d &&
                  (c("false write response, pause", i.awaitDrain),
                  i.awaitDrain++),
                n.pause());
          }
          function p(t) {
            c("onerror", t),
              g(),
              e.removeListener("error", p),
              0 === o(e, "error") && E(e, t);
          }
          function f() {
            e.removeListener("finish", m), g();
          }
          function m() {
            c("onfinish"), e.removeListener("close", f), g();
          }
          function g() {
            c("unpipe"), n.unpipe(e);
          }
          return (
            n.on("data", h),
            (function (e, t, n) {
              if ("function" == typeof e.prependListener)
                return e.prependListener(t, n);
              e._events && e._events[t]
                ? Array.isArray(e._events[t])
                  ? e._events[t].unshift(n)
                  : (e._events[t] = [n, e._events[t]])
                : e.on(t, n);
            })(e, "error", p),
            e.once("close", f),
            e.once("finish", m),
            e.emit("pipe", n),
            i.flowing || (c("pipe resume"), n.resume()),
            e
          );
        }),
        (x.prototype.unpipe = function (e) {
          var t = this._readableState,
            n = { hasUnpiped: !1 };
          if (0 === t.pipesCount) return this;
          if (1 === t.pipesCount)
            return (
              (e && e !== t.pipes) ||
                (e || (e = t.pipes),
                (t.pipes = null),
                (t.pipesCount = 0),
                (t.flowing = !1),
                e && e.emit("unpipe", this, n)),
              this
            );
          if (!e) {
            var r = t.pipes,
              i = t.pipesCount;
            (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
            for (var o = 0; o < i; o++)
              r[o].emit("unpipe", this, { hasUnpiped: !1 });
            return this;
          }
          var a = B(t.pipes, e);
          return (
            -1 === a ||
              (t.pipes.splice(a, 1),
              (t.pipesCount -= 1),
              1 === t.pipesCount && (t.pipes = t.pipes[0]),
              e.emit("unpipe", this, n)),
            this
          );
        }),
        (x.prototype.on = function (e, t) {
          var n = a.prototype.on.call(this, e, t),
            i = this._readableState;
          return (
            "data" === e
              ? ((i.readableListening = this.listenerCount("readable") > 0),
                !1 !== i.flowing && this.resume())
              : "readable" === e &&
                (i.endEmitted ||
                  i.readableListening ||
                  ((i.readableListening = i.needReadable = !0),
                  (i.flowing = !1),
                  (i.emittedReadable = !1),
                  c("on readable", i.length, i.reading),
                  i.length ? O(this) : i.reading || r.nextTick(P, this))),
            n
          );
        }),
        (x.prototype.addListener = x.prototype.on),
        (x.prototype.removeListener = function (e, t) {
          var n = a.prototype.removeListener.call(this, e, t);
          return "readable" === e && r.nextTick(D, this), n;
        }),
        (x.prototype.removeAllListeners = function (e) {
          var t = a.prototype.removeAllListeners.apply(this, arguments);
          return ("readable" !== e && void 0 !== e) || r.nextTick(D, this), t;
        }),
        (x.prototype.resume = function () {
          var e = this._readableState;
          return (
            e.flowing ||
              (c("resume"),
              (e.flowing = !e.readableListening),
              (function (e, t) {
                t.resumeScheduled ||
                  ((t.resumeScheduled = !0), r.nextTick(N, e, t));
              })(this, e)),
            (e.paused = !1),
            this
          );
        }),
        (x.prototype.pause = function () {
          return (
            c("call pause flowing=%j", this._readableState.flowing),
            !1 !== this._readableState.flowing &&
              (c("pause"),
              (this._readableState.flowing = !1),
              this.emit("pause")),
            (this._readableState.paused = !0),
            this
          );
        }),
        (x.prototype.wrap = function (e) {
          var t = this,
            n = this._readableState,
            r = !1;
          for (var i in (e.on("end", function () {
            if ((c("wrapped end"), n.decoder && !n.ended)) {
              var e = n.decoder.end();
              e && e.length && t.push(e);
            }
            t.push(null);
          }),
          e.on("data", function (i) {
            (c("wrapped data"),
            n.decoder && (i = n.decoder.write(i)),
            n.objectMode && null == i) ||
              ((n.objectMode || (i && i.length)) &&
                (t.push(i) || ((r = !0), e.pause())));
          }),
          e))
            void 0 === this[i] &&
              "function" == typeof e[i] &&
              (this[i] = (function (t) {
                return function () {
                  return e[t].apply(e, arguments);
                };
              })(i));
          for (var o = 0; o < T.length; o++)
            e.on(T[o], this.emit.bind(this, T[o]));
          return (
            (this._read = function (t) {
              c("wrapped _read", t), r && ((r = !1), e.resume());
            }),
            this
          );
        }),
        "function" == typeof Symbol &&
          (x.prototype[Symbol.asyncIterator] = function () {
            return void 0 === h && (h = n(296)), h(this);
          }),
        Object.defineProperty(x.prototype, "readableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._readableState.highWaterMark;
          },
        }),
        Object.defineProperty(x.prototype, "readableBuffer", {
          enumerable: !1,
          get: function () {
            return this._readableState && this._readableState.buffer;
          },
        }),
        Object.defineProperty(x.prototype, "readableFlowing", {
          enumerable: !1,
          get: function () {
            return this._readableState.flowing;
          },
          set: function (e) {
            this._readableState && (this._readableState.flowing = e);
          },
        }),
        (x._fromList = U),
        Object.defineProperty(x.prototype, "readableLength", {
          enumerable: !1,
          get: function () {
            return this._readableState.length;
          },
        }),
        "function" == typeof Symbol &&
          (x.from = function (e, t) {
            return void 0 === p && (p = n(297)), p(x, e, t);
          });
    }).call(this, n(9), n(15));
  },
  function (e, t, n) {
    e.exports = n(39).EventEmitter;
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      function n(e, t) {
        i(e, t), r(e);
      }
      function r(e) {
        (e._writableState && !e._writableState.emitClose) ||
          (e._readableState && !e._readableState.emitClose) ||
          e.emit("close");
      }
      function i(e, t) {
        e.emit("error", t);
      }
      e.exports = {
        destroy: function (e, o) {
          var a = this,
            s = this._readableState && this._readableState.destroyed,
            l = this._writableState && this._writableState.destroyed;
          return s || l
            ? (o
                ? o(e)
                : e &&
                  (this._writableState
                    ? this._writableState.errorEmitted ||
                      ((this._writableState.errorEmitted = !0),
                      t.nextTick(i, this, e))
                    : t.nextTick(i, this, e)),
              this)
            : (this._readableState && (this._readableState.destroyed = !0),
              this._writableState && (this._writableState.destroyed = !0),
              this._destroy(e || null, function (e) {
                !o && e
                  ? a._writableState
                    ? a._writableState.errorEmitted
                      ? t.nextTick(r, a)
                      : ((a._writableState.errorEmitted = !0),
                        t.nextTick(n, a, e))
                    : t.nextTick(n, a, e)
                  : o
                  ? (t.nextTick(r, a), o(e))
                  : t.nextTick(r, a);
              }),
              this);
        },
        undestroy: function () {
          this._readableState &&
            ((this._readableState.destroyed = !1),
            (this._readableState.reading = !1),
            (this._readableState.ended = !1),
            (this._readableState.endEmitted = !1)),
            this._writableState &&
              ((this._writableState.destroyed = !1),
              (this._writableState.ended = !1),
              (this._writableState.ending = !1),
              (this._writableState.finalCalled = !1),
              (this._writableState.prefinished = !1),
              (this._writableState.finished = !1),
              (this._writableState.errorEmitted = !1));
        },
        errorOrDestroy: function (e, t) {
          var n = e._readableState,
            r = e._writableState;
          (n && n.autoDestroy) || (r && r.autoDestroy)
            ? e.destroy(t)
            : e.emit("error", t);
        },
      };
    }).call(this, n(15));
  },
  function (e, t, n) {
    "use strict";
    var r = n(33).codes.ERR_INVALID_OPT_VALUE;
    e.exports = {
      getHighWaterMark: function (e, t, n, i) {
        var o = (function (e, t, n) {
          return null != e.highWaterMark ? e.highWaterMark : t ? e[n] : null;
        })(t, i, n);
        if (null != o) {
          if (!isFinite(o) || Math.floor(o) !== o || o < 0)
            throw new r(i ? n : "highWaterMark", o);
          return Math.floor(o);
        }
        return e.objectMode ? 16 : 16384;
      },
    };
  },
  function (e, t, n) {
    "use strict";
    (function (t, r) {
      function i(e) {
        var t = this;
        (this.next = null),
          (this.entry = null),
          (this.finish = function () {
            !(function (e, t, n) {
              var r = e.entry;
              e.entry = null;
              for (; r; ) {
                var i = r.callback;
                t.pendingcb--, i(n), (r = r.next);
              }
              t.corkedRequestsFree.next = e;
            })(t, e);
          });
      }
      var o;
      (e.exports = x), (x.WritableState = C);
      var a = { deprecate: n(81) },
        s = n(95),
        l = n(18).Buffer,
        c = t.Uint8Array || function () {};
      var u,
        d = n(96),
        h = n(97).getHighWaterMark,
        p = n(33).codes,
        f = p.ERR_INVALID_ARG_TYPE,
        m = p.ERR_METHOD_NOT_IMPLEMENTED,
        g = p.ERR_MULTIPLE_CALLBACK,
        v = p.ERR_STREAM_CANNOT_PIPE,
        b = p.ERR_STREAM_DESTROYED,
        y = p.ERR_STREAM_NULL_VALUES,
        _ = p.ERR_STREAM_WRITE_AFTER_END,
        w = p.ERR_UNKNOWN_ENCODING,
        E = d.errorOrDestroy;
      function T() {}
      function C(e, t, a) {
        (o = o || n(34)),
          (e = e || {}),
          "boolean" != typeof a && (a = t instanceof o),
          (this.objectMode = !!e.objectMode),
          a && (this.objectMode = this.objectMode || !!e.writableObjectMode),
          (this.highWaterMark = h(this, e, "writableHighWaterMark", a)),
          (this.finalCalled = !1),
          (this.needDrain = !1),
          (this.ending = !1),
          (this.ended = !1),
          (this.finished = !1),
          (this.destroyed = !1);
        var s = !1 === e.decodeStrings;
        (this.decodeStrings = !s),
          (this.defaultEncoding = e.defaultEncoding || "utf8"),
          (this.length = 0),
          (this.writing = !1),
          (this.corked = 0),
          (this.sync = !0),
          (this.bufferProcessing = !1),
          (this.onwrite = function (e) {
            !(function (e, t) {
              var n = e._writableState,
                i = n.sync,
                o = n.writecb;
              if ("function" != typeof o) throw new g();
              if (
                ((function (e) {
                  (e.writing = !1),
                    (e.writecb = null),
                    (e.length -= e.writelen),
                    (e.writelen = 0);
                })(n),
                t)
              )
                !(function (e, t, n, i, o) {
                  --t.pendingcb,
                    n
                      ? (r.nextTick(o, i),
                        r.nextTick(k, e, t),
                        (e._writableState.errorEmitted = !0),
                        E(e, i))
                      : (o(i),
                        (e._writableState.errorEmitted = !0),
                        E(e, i),
                        k(e, t));
                })(e, n, i, t, o);
              else {
                var a = O(n) || e.destroyed;
                a ||
                  n.corked ||
                  n.bufferProcessing ||
                  !n.bufferedRequest ||
                  R(e, n),
                  i ? r.nextTick(L, e, n, a, o) : L(e, n, a, o);
              }
            })(t, e);
          }),
          (this.writecb = null),
          (this.writelen = 0),
          (this.bufferedRequest = null),
          (this.lastBufferedRequest = null),
          (this.pendingcb = 0),
          (this.prefinished = !1),
          (this.errorEmitted = !1),
          (this.emitClose = !1 !== e.emitClose),
          (this.autoDestroy = !!e.autoDestroy),
          (this.bufferedRequestCount = 0),
          (this.corkedRequestsFree = new i(this));
      }
      function x(e) {
        var t = this instanceof (o = o || n(34));
        if (!t && !u.call(x, this)) return new x(e);
        (this._writableState = new C(e, this, t)),
          (this.writable = !0),
          e &&
            ("function" == typeof e.write && (this._write = e.write),
            "function" == typeof e.writev && (this._writev = e.writev),
            "function" == typeof e.destroy && (this._destroy = e.destroy),
            "function" == typeof e.final && (this._final = e.final)),
          s.call(this);
      }
      function S(e, t, n, r, i, o, a) {
        (t.writelen = r),
          (t.writecb = a),
          (t.writing = !0),
          (t.sync = !0),
          t.destroyed
            ? t.onwrite(new b("write"))
            : n
            ? e._writev(i, t.onwrite)
            : e._write(i, o, t.onwrite),
          (t.sync = !1);
      }
      function L(e, t, n, r) {
        n ||
          (function (e, t) {
            0 === t.length &&
              t.needDrain &&
              ((t.needDrain = !1), e.emit("drain"));
          })(e, t),
          t.pendingcb--,
          r(),
          k(e, t);
      }
      function R(e, t) {
        t.bufferProcessing = !0;
        var n = t.bufferedRequest;
        if (e._writev && n && n.next) {
          var r = t.bufferedRequestCount,
            o = new Array(r),
            a = t.corkedRequestsFree;
          a.entry = n;
          for (var s = 0, l = !0; n; )
            (o[s] = n), n.isBuf || (l = !1), (n = n.next), (s += 1);
          (o.allBuffers = l),
            S(e, t, !0, t.length, o, "", a.finish),
            t.pendingcb++,
            (t.lastBufferedRequest = null),
            a.next
              ? ((t.corkedRequestsFree = a.next), (a.next = null))
              : (t.corkedRequestsFree = new i(t)),
            (t.bufferedRequestCount = 0);
        } else {
          for (; n; ) {
            var c = n.chunk,
              u = n.encoding,
              d = n.callback;
            if (
              (S(e, t, !1, t.objectMode ? 1 : c.length, c, u, d),
              (n = n.next),
              t.bufferedRequestCount--,
              t.writing)
            )
              break;
          }
          null === n && (t.lastBufferedRequest = null);
        }
        (t.bufferedRequest = n), (t.bufferProcessing = !1);
      }
      function O(e) {
        return (
          e.ending &&
          0 === e.length &&
          null === e.bufferedRequest &&
          !e.finished &&
          !e.writing
        );
      }
      function A(e, t) {
        e._final(function (n) {
          t.pendingcb--,
            n && E(e, n),
            (t.prefinished = !0),
            e.emit("prefinish"),
            k(e, t);
        });
      }
      function k(e, t) {
        var n = O(t);
        if (
          n &&
          ((function (e, t) {
            t.prefinished ||
              t.finalCalled ||
              ("function" != typeof e._final || t.destroyed
                ? ((t.prefinished = !0), e.emit("prefinish"))
                : (t.pendingcb++, (t.finalCalled = !0), r.nextTick(A, e, t)));
          })(e, t),
          0 === t.pendingcb &&
            ((t.finished = !0), e.emit("finish"), t.autoDestroy))
        ) {
          var i = e._readableState;
          (!i || (i.autoDestroy && i.endEmitted)) && e.destroy();
        }
        return n;
      }
      n(17)(x, s),
        (C.prototype.getBuffer = function () {
          for (var e = this.bufferedRequest, t = []; e; )
            t.push(e), (e = e.next);
          return t;
        }),
        (function () {
          try {
            Object.defineProperty(C.prototype, "buffer", {
              get: a.deprecate(
                function () {
                  return this.getBuffer();
                },
                "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                "DEP0003"
              ),
            });
          } catch (e) {}
        })(),
        "function" == typeof Symbol &&
        Symbol.hasInstance &&
        "function" == typeof Function.prototype[Symbol.hasInstance]
          ? ((u = Function.prototype[Symbol.hasInstance]),
            Object.defineProperty(x, Symbol.hasInstance, {
              value: function (e) {
                return (
                  !!u.call(this, e) ||
                  (this === x && e && e._writableState instanceof C)
                );
              },
            }))
          : (u = function (e) {
              return e instanceof this;
            }),
        (x.prototype.pipe = function () {
          E(this, new v());
        }),
        (x.prototype.write = function (e, t, n) {
          var i,
            o = this._writableState,
            a = !1,
            s = !o.objectMode && ((i = e), l.isBuffer(i) || i instanceof c);
          return (
            s &&
              !l.isBuffer(e) &&
              (e = (function (e) {
                return l.from(e);
              })(e)),
            "function" == typeof t && ((n = t), (t = null)),
            s ? (t = "buffer") : t || (t = o.defaultEncoding),
            "function" != typeof n && (n = T),
            o.ending
              ? (function (e, t) {
                  var n = new _();
                  E(e, n), r.nextTick(t, n);
                })(this, n)
              : (s ||
                  (function (e, t, n, i) {
                    var o;
                    return (
                      null === n
                        ? (o = new y())
                        : "string" == typeof n ||
                          t.objectMode ||
                          (o = new f("chunk", ["string", "Buffer"], n)),
                      !o || (E(e, o), r.nextTick(i, o), !1)
                    );
                  })(this, o, e, n)) &&
                (o.pendingcb++,
                (a = (function (e, t, n, r, i, o) {
                  if (!n) {
                    var a = (function (e, t, n) {
                      e.objectMode ||
                        !1 === e.decodeStrings ||
                        "string" != typeof t ||
                        (t = l.from(t, n));
                      return t;
                    })(t, r, i);
                    r !== a && ((n = !0), (i = "buffer"), (r = a));
                  }
                  var s = t.objectMode ? 1 : r.length;
                  t.length += s;
                  var c = t.length < t.highWaterMark;
                  c || (t.needDrain = !0);
                  if (t.writing || t.corked) {
                    var u = t.lastBufferedRequest;
                    (t.lastBufferedRequest = {
                      chunk: r,
                      encoding: i,
                      isBuf: n,
                      callback: o,
                      next: null,
                    }),
                      u
                        ? (u.next = t.lastBufferedRequest)
                        : (t.bufferedRequest = t.lastBufferedRequest),
                      (t.bufferedRequestCount += 1);
                  } else S(e, t, !1, s, r, i, o);
                  return c;
                })(this, o, s, e, t, n))),
            a
          );
        }),
        (x.prototype.cork = function () {
          this._writableState.corked++;
        }),
        (x.prototype.uncork = function () {
          var e = this._writableState;
          e.corked &&
            (e.corked--,
            e.writing ||
              e.corked ||
              e.bufferProcessing ||
              !e.bufferedRequest ||
              R(this, e));
        }),
        (x.prototype.setDefaultEncoding = function (e) {
          if (
            ("string" == typeof e && (e = e.toLowerCase()),
            !(
              [
                "hex",
                "utf8",
                "utf-8",
                "ascii",
                "binary",
                "base64",
                "ucs2",
                "ucs-2",
                "utf16le",
                "utf-16le",
                "raw",
              ].indexOf((e + "").toLowerCase()) > -1
            ))
          )
            throw new w(e);
          return (this._writableState.defaultEncoding = e), this;
        }),
        Object.defineProperty(x.prototype, "writableBuffer", {
          enumerable: !1,
          get: function () {
            return this._writableState && this._writableState.getBuffer();
          },
        }),
        Object.defineProperty(x.prototype, "writableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._writableState.highWaterMark;
          },
        }),
        (x.prototype._write = function (e, t, n) {
          n(new m("_write()"));
        }),
        (x.prototype._writev = null),
        (x.prototype.end = function (e, t, n) {
          var i = this._writableState;
          return (
            "function" == typeof e
              ? ((n = e), (e = null), (t = null))
              : "function" == typeof t && ((n = t), (t = null)),
            null != e && this.write(e, t),
            i.corked && ((i.corked = 1), this.uncork()),
            i.ending ||
              (function (e, t, n) {
                (t.ending = !0),
                  k(e, t),
                  n && (t.finished ? r.nextTick(n) : e.once("finish", n));
                (t.ended = !0), (e.writable = !1);
              })(this, i, n),
            this
          );
        }),
        Object.defineProperty(x.prototype, "writableLength", {
          enumerable: !1,
          get: function () {
            return this._writableState.length;
          },
        }),
        Object.defineProperty(x.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._writableState && this._writableState.destroyed
            );
          },
          set: function (e) {
            this._writableState && (this._writableState.destroyed = e);
          },
        }),
        (x.prototype.destroy = d.destroy),
        (x.prototype._undestroy = d.undestroy),
        (x.prototype._destroy = function (e, t) {
          t(e);
        });
    }).call(this, n(9), n(15));
  },
  function (e, t, n) {
    "use strict";
    e.exports = u;
    var r = n(33).codes,
      i = r.ERR_METHOD_NOT_IMPLEMENTED,
      o = r.ERR_MULTIPLE_CALLBACK,
      a = r.ERR_TRANSFORM_ALREADY_TRANSFORMING,
      s = r.ERR_TRANSFORM_WITH_LENGTH_0,
      l = n(34);
    function c(e, t) {
      var n = this._transformState;
      n.transforming = !1;
      var r = n.writecb;
      if (null === r) return this.emit("error", new o());
      (n.writechunk = null),
        (n.writecb = null),
        null != t && this.push(t),
        r(e);
      var i = this._readableState;
      (i.reading = !1),
        (i.needReadable || i.length < i.highWaterMark) &&
          this._read(i.highWaterMark);
    }
    function u(e) {
      if (!(this instanceof u)) return new u(e);
      l.call(this, e),
        (this._transformState = {
          afterTransform: c.bind(this),
          needTransform: !1,
          transforming: !1,
          writecb: null,
          writechunk: null,
          writeencoding: null,
        }),
        (this._readableState.needReadable = !0),
        (this._readableState.sync = !1),
        e &&
          ("function" == typeof e.transform && (this._transform = e.transform),
          "function" == typeof e.flush && (this._flush = e.flush)),
        this.on("prefinish", d);
    }
    function d() {
      var e = this;
      "function" != typeof this._flush || this._readableState.destroyed
        ? h(this, null, null)
        : this._flush(function (t, n) {
            h(e, t, n);
          });
    }
    function h(e, t, n) {
      if (t) return e.emit("error", t);
      if ((null != n && e.push(n), e._writableState.length)) throw new s();
      if (e._transformState.transforming) throw new a();
      return e.push(null);
    }
    n(17)(u, l),
      (u.prototype.push = function (e, t) {
        return (
          (this._transformState.needTransform = !1),
          l.prototype.push.call(this, e, t)
        );
      }),
      (u.prototype._transform = function (e, t, n) {
        n(new i("_transform()"));
      }),
      (u.prototype._write = function (e, t, n) {
        var r = this._transformState;
        if (
          ((r.writecb = n),
          (r.writechunk = e),
          (r.writeencoding = t),
          !r.transforming)
        ) {
          var i = this._readableState;
          (r.needTransform || i.needReadable || i.length < i.highWaterMark) &&
            this._read(i.highWaterMark);
        }
      }),
      (u.prototype._read = function (e) {
        var t = this._transformState;
        null === t.writechunk || t.transforming
          ? (t.needTransform = !0)
          : ((t.transforming = !0),
            this._transform(t.writechunk, t.writeencoding, t.afterTransform));
      }),
      (u.prototype._destroy = function (e, t) {
        l.prototype._destroy.call(this, e, function (e) {
          t(e);
        });
      });
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    var r = n(119);
    t.a = r.getInfo;
  },
  function (e, t, n) {
    (function (t) {
      const r = n(32).PassThrough,
        i = n(275),
        o = n(43),
        a = n(89),
        s = n(90),
        l = n(92),
        c = n(54),
        u = n(66),
        { parseTimestamp: d } = n(66),
        h = (e, t) => {
          const n = p(t);
          return (
            h.getInfo(e, t).then((e) => {
              m(n, e, t);
            }, n.emit.bind(n, "error")),
            n
          );
        };
      (e.exports = h),
        (h.getBasicInfo = i.getBasicInfo),
        (h.getInfo = i.getInfo),
        (h.chooseFormat = a.chooseFormat),
        (h.filterFormats = a.filterFormats),
        (h.validateID = s.validateID),
        (h.validateURL = s.validateURL),
        (h.getURLVideoID = s.getURLVideoID),
        (h.getVideoID = s.getVideoID),
        (h.cache = {
          sig: l.cache,
          info: i.cache,
          watch: i.watchPageCache,
          cookie: i.cookieCache,
        }),
        (h.version = n(88).version);
      const p = (e) => {
          const t = new r({ highWaterMark: (e && e.highWaterMark) || 524288 });
          return (
            (t._destroy = () => {
              t.destroyed = !0;
            }),
            t
          );
        },
        f = (e, t, n) => {
          [
            "abort",
            "request",
            "response",
            "error",
            "redirect",
            "retry",
            "reconnect",
          ].forEach((n) => {
            e.prependListener(n, t.emit.bind(t, n));
          }),
            e.pipe(t, { end: n });
        },
        m = (e, t, n) => {
          n = n || {};
          let r,
            i = o.playError(t.player_response, [
              "UNPLAYABLE",
              "LIVE_STREAM_OFFLINE",
              "LOGIN_REQUIRED",
            ]);
          if (i) return void e.emit("error", i);
          if (!t.formats.length)
            return void e.emit("error", Error("This video is unavailable"));
          try {
            r = a.chooseFormat(t.formats, n);
          } catch (t) {
            return void e.emit("error", t);
          }
          if ((e.emit("info", t, r), e.destroyed)) return;
          let s,
            l = 0;
          const h = (t) => {
              (l += t.length), e.emit("progress", t.length, l, s);
            },
            p = n.dlChunkSize || 10485760;
          let m,
            g = !0;
          if (r.isHLS || r.isDashMPD)
            (m = u(r.url, {
              chunkReadahead: +t.live_chunk_readahead,
              begin: n.begin || (r.isLive && Date.now()),
              liveBuffer: n.liveBuffer,
              requestOptions: n.requestOptions,
              parser: r.isDashMPD ? "dash-mpd" : "m3u8",
              id: r.itag,
            })),
              m.on("progress", (t, n) => {
                e.emit("progress", t.size, t.num, n);
              }),
              f(m, e, g);
          else {
            const t = Object.assign({}, n.requestOptions, {
              maxReconnects: 6,
              maxRetries: 3,
              backoff: { inc: 500, max: 1e4 },
            });
            if (!(0 === p || (r.hasAudio && r.hasVideo))) {
              let i = (n.range && n.range.start) || 0,
                o = i + p;
              const a = n.range && n.range.end;
              s = n.range
                ? (a ? a + 1 : parseInt(r.contentLength)) - i
                : parseInt(r.contentLength);
              const l = () => {
                !a && o >= s && (o = 0),
                  a && o > a && (o = a),
                  (g = !o || o === a),
                  (t.headers = Object.assign({}, t.headers, {
                    Range: `bytes=${i}-${o || ""}`,
                  })),
                  (m = c(r.url, t)),
                  m.on("data", h),
                  m.on("end", () => {
                    e.destroyed ||
                      (o && o !== a && ((i = o + 1), (o += p), l()));
                  }),
                  f(m, e, g);
              };
              l();
            } else
              n.begin && (r.url += "&begin=" + d(n.begin)),
                n.range &&
                  (n.range.start || n.range.end) &&
                  (t.headers = Object.assign({}, t.headers, {
                    Range: `bytes=${n.range.start || "0"}-${n.range.end || ""}`,
                  })),
                (m = c(r.url, t)),
                m.on("response", (t) => {
                  e.destroyed ||
                    (s = s || parseInt(t.headers["content-length"]));
                }),
                m.on("data", h),
                f(m, e, g);
          }
          e._destroy = () => {
            (e.destroyed = !0), m.destroy(), m.end();
          };
        };
      h.downloadFromInfo = (e, n) => {
        const r = p(n);
        if (!e.full)
          throw Error(
            "Cannot use `ytdl.downloadFromInfo()` when called with info from `ytdl.getBasicInfo()`"
          );
        return (
          t(() => {
            m(r, e, n);
          }),
          r
        );
      };
    }).call(this, n(24).setImmediate);
  },
  function (e, t, n) {
    "use strict";
    t.a = new (class {
      constructor() {
        (this.DEFAULT_TTL = 12e5),
          (this._cache = {}),
          (this.DEFAULT_TTL = 12e5);
      }
      processRequest(e, t) {
        switch (e) {
          case "get":
            return this.get(t.key);
          case "put":
            this.put(t.key, t.value, t.ttl);
            break;
          case "delete":
            this.delete(t.key);
        }
      }
      get(e) {
        return new Promise((t, n) => {
          e in this._cache ? t(this._cache[e]) : n(null);
        });
      }
      put(e, t, n = this.DEFAULT_TTL) {
        e &&
          void 0 !== t &&
          ((n = n || this.DEFAULT_TTL),
          (this._cache[e] = t),
          setTimeout(this.delete.bind(this, e), n));
      }
      delete(e) {
        this._cache[e] && delete this._cache[e];
      }
    })();
  },
  function (e, t, n) {
    "use strict";
    var r = n(17),
      i = n(291),
      o = n(65).Buffer,
      a = new Array(16);
    function s() {
      i.call(this, 64),
        (this._a = 1732584193),
        (this._b = 4023233417),
        (this._c = 2562383102),
        (this._d = 271733878);
    }
    function l(e, t) {
      return (e << t) | (e >>> (32 - t));
    }
    function c(e, t, n, r, i, o, a) {
      return (l((e + ((t & n) | (~t & r)) + i + o) | 0, a) + t) | 0;
    }
    function u(e, t, n, r, i, o, a) {
      return (l((e + ((t & r) | (n & ~r)) + i + o) | 0, a) + t) | 0;
    }
    function d(e, t, n, r, i, o, a) {
      return (l((e + (t ^ n ^ r) + i + o) | 0, a) + t) | 0;
    }
    function h(e, t, n, r, i, o, a) {
      return (l((e + (n ^ (t | ~r)) + i + o) | 0, a) + t) | 0;
    }
    r(s, i),
      (s.prototype._update = function () {
        for (var e = a, t = 0; t < 16; ++t)
          e[t] = this._block.readInt32LE(4 * t);
        var n = this._a,
          r = this._b,
          i = this._c,
          o = this._d;
        (n = c(n, r, i, o, e[0], 3614090360, 7)),
          (o = c(o, n, r, i, e[1], 3905402710, 12)),
          (i = c(i, o, n, r, e[2], 606105819, 17)),
          (r = c(r, i, o, n, e[3], 3250441966, 22)),
          (n = c(n, r, i, o, e[4], 4118548399, 7)),
          (o = c(o, n, r, i, e[5], 1200080426, 12)),
          (i = c(i, o, n, r, e[6], 2821735955, 17)),
          (r = c(r, i, o, n, e[7], 4249261313, 22)),
          (n = c(n, r, i, o, e[8], 1770035416, 7)),
          (o = c(o, n, r, i, e[9], 2336552879, 12)),
          (i = c(i, o, n, r, e[10], 4294925233, 17)),
          (r = c(r, i, o, n, e[11], 2304563134, 22)),
          (n = c(n, r, i, o, e[12], 1804603682, 7)),
          (o = c(o, n, r, i, e[13], 4254626195, 12)),
          (i = c(i, o, n, r, e[14], 2792965006, 17)),
          (n = u(
            n,
            (r = c(r, i, o, n, e[15], 1236535329, 22)),
            i,
            o,
            e[1],
            4129170786,
            5
          )),
          (o = u(o, n, r, i, e[6], 3225465664, 9)),
          (i = u(i, o, n, r, e[11], 643717713, 14)),
          (r = u(r, i, o, n, e[0], 3921069994, 20)),
          (n = u(n, r, i, o, e[5], 3593408605, 5)),
          (o = u(o, n, r, i, e[10], 38016083, 9)),
          (i = u(i, o, n, r, e[15], 3634488961, 14)),
          (r = u(r, i, o, n, e[4], 3889429448, 20)),
          (n = u(n, r, i, o, e[9], 568446438, 5)),
          (o = u(o, n, r, i, e[14], 3275163606, 9)),
          (i = u(i, o, n, r, e[3], 4107603335, 14)),
          (r = u(r, i, o, n, e[8], 1163531501, 20)),
          (n = u(n, r, i, o, e[13], 2850285829, 5)),
          (o = u(o, n, r, i, e[2], 4243563512, 9)),
          (i = u(i, o, n, r, e[7], 1735328473, 14)),
          (n = d(
            n,
            (r = u(r, i, o, n, e[12], 2368359562, 20)),
            i,
            o,
            e[5],
            4294588738,
            4
          )),
          (o = d(o, n, r, i, e[8], 2272392833, 11)),
          (i = d(i, o, n, r, e[11], 1839030562, 16)),
          (r = d(r, i, o, n, e[14], 4259657740, 23)),
          (n = d(n, r, i, o, e[1], 2763975236, 4)),
          (o = d(o, n, r, i, e[4], 1272893353, 11)),
          (i = d(i, o, n, r, e[7], 4139469664, 16)),
          (r = d(r, i, o, n, e[10], 3200236656, 23)),
          (n = d(n, r, i, o, e[13], 681279174, 4)),
          (o = d(o, n, r, i, e[0], 3936430074, 11)),
          (i = d(i, o, n, r, e[3], 3572445317, 16)),
          (r = d(r, i, o, n, e[6], 76029189, 23)),
          (n = d(n, r, i, o, e[9], 3654602809, 4)),
          (o = d(o, n, r, i, e[12], 3873151461, 11)),
          (i = d(i, o, n, r, e[15], 530742520, 16)),
          (n = h(
            n,
            (r = d(r, i, o, n, e[2], 3299628645, 23)),
            i,
            o,
            e[0],
            4096336452,
            6
          )),
          (o = h(o, n, r, i, e[7], 1126891415, 10)),
          (i = h(i, o, n, r, e[14], 2878612391, 15)),
          (r = h(r, i, o, n, e[5], 4237533241, 21)),
          (n = h(n, r, i, o, e[12], 1700485571, 6)),
          (o = h(o, n, r, i, e[3], 2399980690, 10)),
          (i = h(i, o, n, r, e[10], 4293915773, 15)),
          (r = h(r, i, o, n, e[1], 2240044497, 21)),
          (n = h(n, r, i, o, e[8], 1873313359, 6)),
          (o = h(o, n, r, i, e[15], 4264355552, 10)),
          (i = h(i, o, n, r, e[6], 2734768916, 15)),
          (r = h(r, i, o, n, e[13], 1309151649, 21)),
          (n = h(n, r, i, o, e[4], 4149444226, 6)),
          (o = h(o, n, r, i, e[11], 3174756917, 10)),
          (i = h(i, o, n, r, e[2], 718787259, 15)),
          (r = h(r, i, o, n, e[9], 3951481745, 21)),
          (this._a = (this._a + n) | 0),
          (this._b = (this._b + r) | 0),
          (this._c = (this._c + i) | 0),
          (this._d = (this._d + o) | 0);
      }),
      (s.prototype._digest = function () {
        (this._block[this._blockOffset++] = 128),
          this._blockOffset > 56 &&
            (this._block.fill(0, this._blockOffset, 64),
            this._update(),
            (this._blockOffset = 0)),
          this._block.fill(0, this._blockOffset, 56),
          this._block.writeUInt32LE(this._length[0], 56),
          this._block.writeUInt32LE(this._length[1], 60),
          this._update();
        var e = o.allocUnsafe(16);
        return (
          e.writeInt32LE(this._a, 0),
          e.writeInt32LE(this._b, 4),
          e.writeInt32LE(this._c, 8),
          e.writeInt32LE(this._d, 12),
          e
        );
      }),
      (e.exports = s);
  },
  function (e, t, n) {
    "use strict";
    var r = n(3);
    t.a = {
      load() {
        r.a.set(
          "template-widget",
          '<div class="widget-attach hidden">\n    <div id="download-btn" class="btn-gradient relative" {{#no_downloads}}disabled{{/no_downloads}}>\n        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M9.99992 17.5041L3.60571 11.1098L4.47588 10.2188L9.37494 15.1179V2.49609H10.6249V15.1179L15.524 10.2317L16.3941 11.1098L9.99992 17.5041Z" fill="currentColor"/>\n        </svg>\n        <div class="tooltip" position="right">{{i18n_download_tooltip}}</div>\n\n        <dropdown-box class="download-box" hidden>\n            <dropdown-box-header class="mobile-content-box-header">\n                <savior-image data-src="/images/logo_cc.svg"></savior-image>\n                <h2>{{i18n_download_box_header_title}}</h2>\n                <button class="dropdown-box-closer" id="mobile-transfer-closer">\n                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                        <path d="M13.4099 11.9999L17.7099 7.70994C17.8982 7.52164 18.004 7.26624 18.004 6.99994C18.004 6.73364 17.8982 6.47825 17.7099 6.28994C17.5216 6.10164 17.2662 5.99585 16.9999 5.99585C16.7336 5.99585 16.4782 6.10164 16.2899 6.28994L11.9999 10.5899L7.70994 6.28994C7.52164 6.10164 7.26624 5.99585 6.99994 5.99585C6.73364 5.99585 6.47824 6.10164 6.28994 6.28994C6.10164 6.47825 5.99585 6.73364 5.99585 6.99994C5.99585 7.26624 6.10164 7.52164 6.28994 7.70994L10.5899 11.9999L6.28994 16.2899C6.19621 16.3829 6.12182 16.4935 6.07105 16.6154C6.02028 16.7372 5.99414 16.8679 5.99414 16.9999C5.99414 17.132 6.02028 17.2627 6.07105 17.3845C6.12182 17.5064 6.19621 17.617 6.28994 17.7099C6.3829 17.8037 6.4935 17.8781 6.61536 17.9288C6.73722 17.9796 6.86793 18.0057 6.99994 18.0057C7.13195 18.0057 7.26266 17.9796 7.38452 17.9288C7.50638 17.8781 7.61698 17.8037 7.70994 17.7099L11.9999 13.4099L16.2899 17.7099C16.3829 17.8037 16.4935 17.8781 16.6154 17.9288C16.7372 17.9796 16.8679 18.0057 16.9999 18.0057C17.132 18.0057 17.2627 17.9796 17.3845 17.9288C17.5064 17.8781 17.617 17.8037 17.7099 17.7099C17.8037 17.617 17.8781 17.5064 17.9288 17.3845C17.9796 17.2627 18.0057 17.132 18.0057 16.9999C18.0057 16.8679 17.9796 16.7372 17.9288 16.6154C17.8781 16.4935 17.8037 16.3829 17.7099 16.2899L13.4099 11.9999Z" fill="currentColor"/>\n                    </svg>\n                </button>\n            </dropdown-box-header>\n            <dropdown-box-body id="downloads" data-panel="loading">\n                <panel value="loading">\n                    <savior-row class="download-box-content-box">\n                        <svg width="20" height="20" class="loading-3-dots" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>\n                        <span>{{i18n_downloading_media}}</span>\n                    </savior-row>\n                </panel>\n\n                <panel value="media" id="downloads-media"></panel>\n\n                <panel value="no-media">\n                    <savior-row class="download-box-content-box">\n                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n                            <path d="M10.0001 5.83332C9.77907 5.83332 9.56711 5.92112 9.41083 6.0774C9.25455 6.23368 9.16675 6.44564 9.16675 6.66666V9.99999C9.16675 10.221 9.25455 10.433 9.41083 10.5892C9.56711 10.7455 9.77907 10.8333 10.0001 10.8333C10.2211 10.8333 10.4331 10.7455 10.5893 10.5892C10.7456 10.433 10.8334 10.221 10.8334 9.99999V6.66666C10.8334 6.44564 10.7456 6.23368 10.5893 6.0774C10.4331 5.92112 10.2211 5.83332 10.0001 5.83332ZM10.7668 13.0167C10.7485 12.9636 10.7233 12.9131 10.6918 12.8667L10.5918 12.7417C10.4746 12.626 10.3258 12.5477 10.1641 12.5166C10.0024 12.4854 9.83518 12.5028 9.68342 12.5667C9.58243 12.6089 9.48942 12.668 9.40842 12.7417C9.33118 12.8195 9.27008 12.9119 9.22861 13.0134C9.18714 13.1149 9.16612 13.2237 9.16675 13.3333C9.16807 13.4422 9.19072 13.5498 9.23342 13.65C9.27084 13.7534 9.33056 13.8473 9.40832 13.9251C9.48609 14.0029 9.58001 14.0626 9.68342 14.1C9.78317 14.1441 9.89103 14.1669 10.0001 14.1669C10.1091 14.1669 10.217 14.1441 10.3168 14.1C10.4202 14.0626 10.5141 14.0029 10.5918 13.9251C10.6696 13.8473 10.7293 13.7534 10.7668 13.65C10.8095 13.5498 10.8321 13.4422 10.8334 13.3333C10.8375 13.2778 10.8375 13.2221 10.8334 13.1667C10.8191 13.1135 10.7966 13.0629 10.7668 13.0167ZM10.0001 1.66666C8.35191 1.66666 6.74074 2.1554 5.37033 3.07108C3.99992 3.98675 2.93182 5.28824 2.30109 6.81096C1.67036 8.33368 1.50533 10.0092 1.82687 11.6257C2.14842 13.2423 2.94209 14.7271 4.10753 15.8925C5.27297 17.058 6.75782 17.8517 8.37433 18.1732C9.99084 18.4947 11.6664 18.3297 13.1891 17.699C14.7118 17.0683 16.0133 16.0002 16.929 14.6297C17.8447 13.2593 18.3334 11.6482 18.3334 9.99999C18.3334 8.90564 18.1179 7.82201 17.6991 6.81096C17.2803 5.79991 16.6665 4.88125 15.8926 4.10743C15.1188 3.33361 14.2002 2.71978 13.1891 2.30099C12.1781 1.8822 11.0944 1.66666 10.0001 1.66666ZM10.0001 16.6667C8.68154 16.6667 7.39261 16.2757 6.29628 15.5431C5.19996 14.8106 4.34547 13.7694 3.84089 12.5512C3.3363 11.333 3.20428 9.99259 3.46152 8.69939C3.71875 7.40618 4.35369 6.2183 5.28604 5.28594C6.21839 4.35359 7.40628 3.71866 8.69948 3.46142C9.99269 3.20419 11.3331 3.33621 12.5513 3.84079C13.7695 4.34538 14.8107 5.19986 15.5432 6.29619C16.2758 7.39252 16.6668 8.68145 16.6668 9.99999C16.6668 11.7681 15.9644 13.4638 14.7141 14.714C13.4639 15.9643 11.7682 16.6667 10.0001 16.6667Z" fill="currentColor"/>\n                        </svg>\n                        <span>{{i18n_no_media_found_widget}}</span>\n                    </savior-row>\n                </panel>\n            </dropdown-box-body>\n        </dropdown-box>\n    </div>\n\n    <button id="open-pip" class="btn-gradient" data-svg-control="off" {{^has_pip}}disabled{{/has_pip}}>\n        <svg data-value="off" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8335 2.91667H2.50016C2.27004 2.91667 2.0835 3.10322 2.0835 3.33334V13.3333C2.0835 13.5635 2.27004 13.75 2.50016 13.75H4.16683V15H2.50016C1.57969 15 0.833496 14.2538 0.833496 13.3333V3.33334C0.833496 2.41286 1.57969 1.66667 2.50016 1.66667H15.8335C16.754 1.66667 17.5002 2.41286 17.5002 3.33334V5.83334H16.2502V3.33334C16.2502 3.10322 16.0636 2.91667 15.8335 2.91667ZM5.8335 8.70371C5.8335 8.03892 6.37618 7.50001 7.04562 7.50001H17.9547C18.6241 7.50001 19.1668 8.03892 19.1668 8.70371V17.1296C19.1668 17.7944 18.6241 18.3333 17.9547 18.3333H7.04562C6.37618 18.3333 5.8335 17.7944 5.8335 17.1296V8.70371ZM9.55736 15.3027C9.45237 15.4077 9.52673 15.5872 9.67521 15.5872L14.9469 15.5872L14.9469 10.3156C14.9469 10.1671 14.7673 10.0928 14.6623 10.1978L12.8191 12.041L10.8806 10.1025C10.8155 10.0374 10.71 10.0374 10.6449 10.1025L9.46207 11.2853C9.39698 11.3503 9.39698 11.4559 9.46207 11.521L11.4006 13.4595L9.55736 15.3027Z" fill="currentColor"/>\n        </svg>\n        <svg data-value="on" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8335 2.91666H2.50016C2.27004 2.91666 2.0835 3.1032 2.0835 3.33332V13.3333C2.0835 13.5634 2.27004 13.75 2.50016 13.75H8.3335V15H2.50016C1.57969 15 0.833496 14.2538 0.833496 13.3333V3.33332C0.833496 2.41285 1.57969 1.66666 2.50016 1.66666H15.8335C16.754 1.66666 17.5002 2.41285 17.5002 3.33332V9.99999H16.2502V3.33332C16.2502 3.1032 16.0636 2.91666 15.8335 2.91666ZM10.0002 15.8334V14.1667V12.5C10.0002 12.0398 10.3733 11.6667 10.8335 11.6667H15.8335H17.5002H18.3335C18.7937 11.6667 19.1668 12.0398 19.1668 12.5V18.3334C19.1668 18.7936 18.7937 19.1667 18.3335 19.1667H10.8335C10.3733 19.1667 10.0002 18.7936 10.0002 18.3334V15.8334ZM9.20216 5.39112C9.30715 5.28612 9.23279 5.1066 9.08431 5.1066H4.27354V9.91737C4.27354 10.0659 4.45306 10.1402 4.55806 10.0352L6.22847 8.36481L7.99997 10.1363C8.06505 10.2014 8.17058 10.2014 8.23567 10.1363L9.30325 9.06873C9.36834 9.00364 9.36834 8.89811 9.30325 8.83303L7.53175 7.06152L9.20216 5.39112Z" fill="currentColor"/>\n        </svg>\n        <div class="tooltip" position="right">{{i18n_pip_button}}</div>\n    </button>\n\n    <button id="switch-light" class="btn-gradient" data-svg-control="off">\n        <svg data-value="off" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M10.0002 19.1667C9.60383 19.1667 9.2534 19.0669 8.94887 18.8675C8.64436 18.668 8.43132 18.4063 8.30976 18.0823H8.02485C7.62093 18.0823 7.27304 17.9429 6.98119 17.6643C6.68932 17.3856 6.54338 17.0535 6.54338 16.6679V13.4646C5.54687 12.8879 4.76276 11.2815 4.19105 10.3119C3.61935 9.34236 3.3335 8.3045 3.3335 7.19834C3.3335 5.42365 3.9799 3.91914 5.27271 2.68481C6.56554 1.4505 8.14136 0.833344 10.0002 0.833344C11.859 0.833344 13.4348 1.4505 14.7276 2.68481C16.0204 3.91914 16.6668 5.42365 16.6668 7.19834C16.6668 8.32385 16.381 9.36655 15.8093 10.3264C15.2376 11.2863 14.4535 12.8879 13.4569 13.4646V16.6679C13.4569 17.0535 13.311 17.3856 13.0191 17.6643C12.7273 17.9429 12.3794 18.0823 11.9755 18.0823H11.6906C11.569 18.4063 11.356 18.668 11.0515 18.8675C10.7469 19.0669 10.3965 19.1667 10.0002 19.1667ZM8.02485 16.6679H11.9755V16.6667H8.02485V16.6679ZM8.02485 16.6667H11.9755V13.9252H8.02485V16.6667ZM7.82731 12.5108H9.41137V8.93194L7.29551 6.91182L8.12361 6.12119L10.0002 7.91283L11.8767 6.12119L12.7048 6.91182L10.589 8.93194V12.5108H12.173C13.0619 12.1021 13.7862 10.6677 14.3459 9.87401C14.9055 9.08034 15.1854 8.18845 15.1854 7.19834C15.1854 5.81532 14.6833 4.64447 13.6792 3.68579C12.6751 2.72711 11.4487 2.24777 10.0002 2.24777C8.5516 2.24777 7.32526 2.72711 6.32114 3.68579C5.31702 4.64447 4.81496 5.81532 4.81496 7.19834C4.81496 8.18845 5.09479 9.08034 5.65447 9.87401C6.21414 10.6677 6.93842 12.1021 7.82731 12.5108Z" fill="currentColor"/>\n        </svg>\n        <svg data-value="on" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M10.0002 19.1667C9.60383 19.1667 9.2534 19.0669 8.94887 18.8675C8.64436 18.668 8.43132 18.4063 8.30976 18.0823H8.02485C7.62093 18.0823 7.27304 17.9429 6.98119 17.6643C6.68932 17.3856 6.54338 17.0535 6.54338 16.6679V13.4646C5.54687 12.8879 4.76276 11.2815 4.19105 10.3119C3.61935 9.34236 3.3335 8.3045 3.3335 7.19834C3.3335 5.42365 3.9799 3.91914 5.27271 2.68481C6.56554 1.4505 8.14136 0.833344 10.0002 0.833344C11.859 0.833344 13.4348 1.4505 14.7276 2.68481C16.0204 3.91914 16.6668 5.42365 16.6668 7.19834C16.6668 8.32385 16.381 9.36655 15.8093 10.3264C15.2376 11.2863 14.4535 12.8879 13.4569 13.4646V16.6679C13.4569 17.0535 13.311 17.3856 13.0191 17.6643C12.7273 17.9429 12.3794 18.0823 11.9755 18.0823H11.6906C11.569 18.4063 11.356 18.668 11.0515 18.8675C10.7469 19.0669 10.3965 19.1667 10.0002 19.1667ZM8.02485 16.6679H11.9755V16.6667H8.02485V16.6679ZM8.02485 16.6667H11.9755V13.9252H8.02485V16.6667ZM10.589 12.5108V8.93194L12.7048 6.91182L11.8767 6.12119L10.0002 7.91283L8.12361 6.12119L7.29551 6.91182L9.41137 8.93194V12.5108H10.589Z" fill="currentColor"/>\n        </svg>\n        <div class="tooltip" position="right">{{i18n_switch}}</div>\n    </button>\n\n    <div id="other-feature" class="btn-gradient relative">\n        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M9.99998 16.0576C9.65624 16.0576 9.36198 15.9353 9.11719 15.6905C8.8724 15.4457 8.75 15.1514 8.75 14.8077C8.75 14.4639 8.8724 14.1697 9.11719 13.9249C9.36198 13.6801 9.65624 13.5577 9.99998 13.5577C10.3437 13.5577 10.638 13.6801 10.8828 13.9249C11.1276 14.1697 11.25 14.4639 11.25 14.8077C11.25 15.1514 11.1276 15.4457 10.8828 15.6905C10.638 15.9353 10.3437 16.0576 9.99998 16.0576ZM9.99998 11.25C9.65624 11.25 9.36198 11.1276 9.11719 10.8828C8.8724 10.638 8.75 10.3437 8.75 10C8.75 9.65626 8.8724 9.362 9.11719 9.11721C9.36198 8.87241 9.65624 8.75002 9.99998 8.75002C10.3437 8.75002 10.638 8.87241 10.8828 9.11721C11.1276 9.362 11.25 9.65626 11.25 10C11.25 10.3437 11.1276 10.638 10.8828 10.8828C10.638 11.1276 10.3437 11.25 9.99998 11.25ZM9.99998 6.44229C9.65624 6.44229 9.36198 6.31989 9.11719 6.0751C8.8724 5.83032 8.75 5.53606 8.75 5.19231C8.75 4.84857 8.8724 4.55431 9.11719 4.30952C9.36198 4.06474 9.65624 3.94235 9.99998 3.94235C10.3437 3.94235 10.638 4.06474 10.8828 4.30952C11.1276 4.55431 11.25 4.84857 11.25 5.19231C11.25 5.53606 11.1276 5.83032 10.8828 6.0751C10.638 6.31989 10.3437 6.44229 9.99998 6.44229Z" fill="currentColor"/>\n        </svg>\n        <div class="tooltip" position="right">{{i18n_other_feature}}</div>\n        <div id="expansion" hidden="true">\n            <button id="open-mobile" {{^has_mobile}}hidden="true"{{/has_mobile}} {{#no_downloads}}hidden="true"{{/no_downloads}}>\n                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n                    <path d="M12.8942 16.875C13.2731 16.875 13.5938 16.7437 13.8562 16.4812C14.1187 16.2187 14.25 15.898 14.25 15.5192V2.48078C14.25 2.10193 14.1187 1.78125 13.8562 1.51875C13.5938 1.25625 13.2731 1.125 12.8942 1.125H7.84616V4.31246H13.125V13.6875H5.62502V12.1875H4.50004V15.5192C4.50004 15.898 4.63129 16.2187 4.89379 16.4812C5.15629 16.7437 5.47696 16.875 5.85581 16.875H12.8942ZM4.87502 10.2331L8.36539 6.74276L7.57502 5.95241L5.4375 8.08991V2.4375H4.31254V8.08991L2.17502 5.95241L1.38465 6.74276L4.87502 10.2331Z" fill="currentColor"/>\n                </svg>\n                <span>{{i18n_mobile_button}}</span>\n            </button>\n            <button id="hide-widget">\n                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n                    <path d="M4.80013 13.9904L4.00977 13.2L8.20977 8.99998L4.00977 4.79998L4.80013 4.00961L9.00013 8.20961L13.2001 4.00961L13.9905 4.79998L9.7905 8.99998L13.9905 13.2L13.2001 13.9904L9.00013 9.79035L4.80013 13.9904Z" fill="currentColor"/>\n                </svg>\n                <span>{{i18n_hide_panel}}</span>\n            </button>\n        </div>\n    </div>\n\n    <div id="mobile-wrapper" class="btn-gradient relative" hidden="true">\n        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M14.3271 18.75C14.748 18.75 15.1043 18.6041 15.396 18.3125C15.6877 18.0208 15.8335 17.6645 15.8335 17.2435V2.75642C15.8335 2.33547 15.6877 1.97917 15.396 1.6875C15.1043 1.39583 14.748 1.25 14.3271 1.25H8.71812V4.79162H14.5835V15.2083H6.25018V13.5417H5.0002V17.2435C5.0002 17.6645 5.14604 18.0208 5.4377 18.3125C5.72937 18.6041 6.08568 18.75 6.50662 18.75H14.3271ZM5.41685 11.3701L9.29504 7.49196L8.41685 6.61379L6.04183 8.98879V2.70833H4.79187V8.98879L2.41685 6.61379L1.53866 7.49196L5.41685 11.3701Z" fill="currentColor"/>\n        </svg>\n    </div>\n\n    <div id="onboard-nmp" hidden="true"></div>\n\n</div>'
        ),
          r.a.set(
            "template-sound-only-tour",
            '<div class="tour-container">\n    <div class="pointer"></div>\n    <div class="dialog-content">\n        <h2>{{i18n_title}}</h2>\n        <div class="dialog-description">\n            <p>{{{i18n_description}}}</p>\n        </div>\n        <button class="try-now">{{i18n_lets_try_btn}}</button>\n    </div>\n</div>'
          ),
          r.a.set(
            "template-list",
            '<ul class="downloads-list">\n    {{#downloads}}\n        {{>media_template}}\n    {{/downloads}}\n</ul>'
          ),
          r.a.set(
            "template-media",
            '<panel value="media" class="media-download-panel quality-selector-box">\n    {{#media_list}}\n        <div class="extension-box">\n            <div class="extensions-label">\n                {{{type_icon}}}\n                <strong>{{i18n_type}}</strong>\n            </div>\n            {{#media}}\n                <div id="media_{{id}}" data-id="{{id}}" data-quality-value="{{ext}}/{{quality}}/{{resolution}}" class="quality-label j-quality">\n                    <strong class="media-name {{type}}">\n                        {{#i18n_quality}}\n                            {{i18n_quality}}\n                        {{/i18n_quality}}\n                        {{^i18n_quality}}\n                            {{quality}}\n                        {{/i18n_quality}}\n                    </strong>\n\n                    <p class="media-sub-wrap">\n                        <span class="media-sub-info">\n                            .{{i18n_ext}}{{^i18n_ext}}{{ext}}{{/i18n_ext}}\n                        </span>\n\n                        <span class="media-sub-info">\n                            {{resolution}}\n                        </span>\n                    </p>\n                </div>\n            {{/media}}\n        </div>\n    {{/media_list}}\n</panel>'
          ),
          r.a.set(
            "template-media-popup",
            '<div class="j-media-scope media-scope" title="{{title}}">\n    <span class="filename" title="{{title}}">{{title}}</span>\n\n    <div class="select-wrapper">\n        <span class="select">\n            <span class="j-quality-option quality-option" data-item="loading" hidden>\n                <svg width="20" height="20" class="loading-3-dots" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>\n                {{i18n_downloading_media}}\n            </span>\n            {{#media}}\n                {{#media}}\n                    <span class="j-quality-option quality-option" data-quality="{{ext}}/{{quality}}/{{resolution}}" hidden>\n                        <span class="selected-type">{{i18n_type}}</span>\n                        <span class="quality-option-ext-quality">\n                            {{#i18n_quality}}\n                                {{i18n_quality}}\n                            {{/i18n_quality}}\n                            {{^i18n_quality}}\n                                {{#quality}}{{quality}}{{/quality}}\n                            {{/i18n_quality}}\n                        </span>\n                        <span class="file-size{{#size}} done{{/size}}" id="size_{{id}}">{{size}}</span>\n                    </span>\n                {{/media}}\n            {{/media}}\n        </span>\n\n        \x3c!-- Pseudo Select --\x3e\n        <div class="quality-selector-box j-quality-selector" hidden>\n            <div class="quality-selector-box-relative">\n                {{#media}}\n                    <div class="extension-box">\n                        <div class="extensions-label">\n                            {{{type_icon}}}\n                            <strong>{{i18n_type}}</strong>\n                        </div>\n                        {{#media}}\n                            <div data-quality-value="{{ext}}/{{quality}}/{{resolution}}" class="quality-label j-quality">\n                                <strong class="media-name {{type}}">\n                                    {{#i18n_quality}}\n                                        {{i18n_quality}}\n                                    {{/i18n_quality}}\n                                    {{^i18n_quality}}\n                                        {{quality}}\n                                    {{/i18n_quality}}\n                                </strong>\n\n                                <span class="media-sub-info">\n                                    .{{i18n_ext}}{{^i18n_ext}}{{ext}}{{/i18n_ext}}\n                                </span>\n\n                                <span class="media-sub-info popup j-checked-size">\n                                    {{size}}\n                                </span>\n\n                                <span class="media-sub-info">\n                                    {{resolution}}\n                                </span>\n                            </div>\n                        {{/media}}\n                    </div>\n                {{/media}}\n            </div>\n        </div>\n    </div>\n\n    {{#media}}\n        {{#media}}\n            <a title="{{title}}" class="{{#playable}}play-now-btn{{/playable}} {{^playable}}download-btn{{/playable}} {{#hide}}visible{{/hide}} j-quality-download"\n               data-quality="{{ext}}/{{quality}}/{{resolution}}"\n               data-id="{{id}}"\n               data-url="{{url}}"\n               id="media_{{id}}"\n               >\n                {{#playable}}\n                    <svg class="play-now-play-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n                        <path d="M6.41171 3.33325C6.11775 3.33325 5.8294 3.41274 5.57765 3.5631C5.30283 3.71914 5.07527 3.94559 4.91883 4.21882C4.76207 4.4926 4.68255 4.80317 4.68855 5.1179L4.68855 14.8903C4.68255 15.205 4.76207 15.5156 4.91883 15.7894C5.07647 16.0647 5.30632 16.2925 5.58397 16.4487C5.82843 16.5871 6.1042 16.662 6.38566 16.6665L6.38836 16.6665C6.69761 16.6698 7.00127 16.585 7.26337 16.4223L15.4943 11.5337L15.5027 11.5285C15.7634 11.367 15.9785 11.1424 16.1276 10.8757C16.2767 10.609 16.3549 10.3091 16.3549 10.0041C16.3549 9.69915 16.2767 9.39921 16.1276 9.13251C15.9785 8.86582 15.7635 8.64109 15.5027 8.4796L7.25313 3.56752L7.25148 3.56652C6.99838 3.41395 6.70789 3.33325 6.41171 3.33325Z" fill="white"/>\n                    </svg>\n                {{/playable}}\n            </a>\n        {{/media}}\n    {{/media}}\n</div>'
          ),
          r.a.set(
            "template-onboard-popup",
            "\n{{#img_class}}\n    <div class='popup-header'>\n        <div class='logo'></div>\n        <div class='title'>{{sidebar_onboard_title}}</div>\n        {{#close_button}}\n            <div class='close_button'>\n                <div class=\"mdiv\">\n                    <div class=\"md\"></div>\n                </div>\n            </div>\n        {{/close_button}}\n    </div>\n    <div class='feature-img'>\n        <img src='{{img_class}}'/>\n        {{#button_icon_selector_show}}\n            <div class='control'>\n                <div class='icon messenger {{#messenger_active}}active{{/messenger_active}}'></div>\n                <div class='icon zalo {{#zalo_active}}active{{/zalo_active}}'></div>\n                <div class='icon tele {{#tele_active}}active{{/tele_active}}'></div>\n                <div class='icon skype {{#skype_active}}active{{/skype_active}}'></div>\n            </div>\n        {{/button_icon_selector_show}}\n    </div>\n{{/img_class}}\n<div class='desc {{^img_class}}no_header{{/img_class}}'>\n    {{{i18n_desc_text}}}\n</div>\n<div class='bottom-control {{^img_class}}no_header{{/img_class}}'>\n    {{#pass_text}}\n        <button class='cancel-btn'>\n            {{pass_text}}\n        </button>\n    {{/pass_text}}\n    <button class='onboarding-btn'>\n        {{#button_icon}}\n            <div class='icon {{button_icon}}'></div>\n        {{/button_icon}}\n        {{i18n_try_now}}\n    </button>\n</div>"
          ),
          r.a.set(
            "template-tooltip-play-now-bottom",
            '<div class="tooltip-box tooltip-box-bottom" hidden>\n    <div class="tooltip tleft">\n        {{{i18n_play_text}}}\n        <form action="" class="not-show">\n            <input type="checkbox" name="vehicle" value="" id="play-now-not-show-check-bottom">\n            <label for="play-now-not-show-check-bottom">{{i18n_play_not_show}}</label>\n        </form>\n        <span class="closebtn" id="close-play-now-tooltip-bottom">\n            <svg width="16" height="16" focusable="false" role="img" viewBox="0 0 320 512">\n                <path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" />\n            </svg>\n        </span>\n    </div>\n</div>'
          ),
          r.a.set(
            "template-mobile-transfer-panel",
            '<dropdown-box class="transfer-to-mobile hidden">\n    <div class="mobile-content-box">\n\n        <dropdown-box-header class="mobile-content-box-header">\n            <savior-image data-src="/images/logo_cc.svg"></savior-image>\n            <h2>{{i18n_mobile_header_title}}</h2>\n            <button class="dropdown-box-closer" id="mobile-transfer-closer">\n                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                    <path d="M13.4099 11.9999L17.7099 7.70994C17.8982 7.52164 18.004 7.26624 18.004 6.99994C18.004 6.73364 17.8982 6.47825 17.7099 6.28994C17.5216 6.10164 17.2662 5.99585 16.9999 5.99585C16.7336 5.99585 16.4782 6.10164 16.2899 6.28994L11.9999 10.5899L7.70994 6.28994C7.52164 6.10164 7.26624 5.99585 6.99994 5.99585C6.73364 5.99585 6.47824 6.10164 6.28994 6.28994C6.10164 6.47825 5.99585 6.73364 5.99585 6.99994C5.99585 7.26624 6.10164 7.52164 6.28994 7.70994L10.5899 11.9999L6.28994 16.2899C6.19621 16.3829 6.12182 16.4935 6.07105 16.6154C6.02028 16.7372 5.99414 16.8679 5.99414 16.9999C5.99414 17.132 6.02028 17.2627 6.07105 17.3845C6.12182 17.5064 6.19621 17.617 6.28994 17.7099C6.3829 17.8037 6.4935 17.8781 6.61536 17.9288C6.73722 17.9796 6.86793 18.0057 6.99994 18.0057C7.13195 18.0057 7.26266 17.9796 7.38452 17.9288C7.50638 17.8781 7.61698 17.8037 7.70994 17.7099L11.9999 13.4099L16.2899 17.7099C16.3829 17.8037 16.4935 17.8781 16.6154 17.9288C16.7372 17.9796 16.8679 18.0057 16.9999 18.0057C17.132 18.0057 17.2627 17.9796 17.3845 17.9288C17.5064 17.8781 17.617 17.8037 17.7099 17.7099C17.8037 17.617 17.8781 17.5064 17.9288 17.3845C17.9796 17.2627 18.0057 17.132 18.0057 16.9999C18.0057 16.8679 17.9796 16.7372 17.9288 16.6154C17.8781 16.4935 17.8037 16.3829 17.7099 16.2899L13.4099 11.9999Z" fill="currentColor"/>\n                </svg>\n            </button>\n        </dropdown-box-header>\n\n        <savior-row class="mobile-content-body">\n            <instruction class="">\n                <div class="mobile-instruction-text">{{i18n_mobile_instruction_1}}</div>\n                <div class="mobile-instruction-image">\n                    <img src="" alt="Instruction" id="mobile-instruction-image">\n                </div>\n\n            </instruction>\n\n            <instruction class="">\n                <div class="mobile-instruction-text">{{i18n_mobile_instruction_2}}</div>\n                <savior-row class="mobile-instruction-body">\n                    <div class="mobile-switch-box">\n                        <div class="switch">\n                            <savior-row class="switch-field">\n                                <input type="radio" id="switch-video" name="send-type" value="video" checked />\n                                <label for="switch-video">\n                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                        <path d="M21.53 7.15C21.378 7.06223 21.2055 7.01603 21.03 7.01603C20.8545 7.01603 20.682 7.06223 20.53 7.15L17 8.89C16.9715 8.11357 16.6429 7.37847 16.0834 6.83944C15.5238 6.3004 14.777 5.99948 14 6H5C4.20435 6 3.44129 6.31607 2.87868 6.87868C2.31607 7.44129 2 8.20435 2 9V15C2 15.7957 2.31607 16.5587 2.87868 17.1213C3.44129 17.6839 4.20435 18 5 18H14C14.777 18.0005 15.5238 17.6996 16.0834 17.1606C16.6429 16.6215 16.9715 15.8864 17 15.11L20.56 16.89C20.6963 16.9599 20.8468 16.9975 21 17C21.1872 17.0006 21.3709 16.9486 21.53 16.85C21.6741 16.7599 21.7929 16.6346 21.8751 16.4859C21.9574 16.3372 22.0003 16.1699 22 16V8C22.0003 7.83006 21.9574 7.66283 21.8751 7.51411C21.7929 7.36538 21.6741 7.24007 21.53 7.15ZM15 15C15 15.2652 14.8946 15.5196 14.7071 15.7071C14.5196 15.8946 14.2652 16 14 16H5C4.73478 16 4.48043 15.8946 4.29289 15.7071C4.10536 15.5196 4 15.2652 4 15V9C4 8.73478 4.10536 8.48043 4.29289 8.29289C4.48043 8.10536 4.73478 8 5 8H14C14.2652 8 14.5196 8.10536 14.7071 8.29289C14.8946 8.48043 15 8.73478 15 9V15ZM20 14.38L17 12.88V11.12L20 9.62V14.38Z" fill="currentColor"/>\n                                    </svg>\n                                    <span>{{i18n_mobile_video}}</span>\n                                </label>\n                                <input type="radio" id="switch-audio" name="send-type" value="audio" />\n                                <label for="switch-audio">\n                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.18912 16.5169V10.604H8.18776V5.61749C8.18776 5.32111 8.35203 5.04979 8.62016 4.92353C9.4771 4.52001 11.5796 3.6075 14.6746 2.77104C17.518 2.00259 19.5236 1.96444 20.4954 2.01492C20.8824 2.03502 21.1615 2.36057 21.1615 2.7481V6.3786L21.1615 17.1451C21.1615 18.614 20.5079 20.2723 17.5947 20.2723C14.6815 20.2723 14.2427 18.723 14.2427 17.6784C14.2427 16.3925 15.0186 15.0767 17.2726 15.0767C18.3482 15.0767 18.8898 15.0767 19.1615 14.8501C19.4054 14.6468 19.4318 14.2609 19.4318 13.5287V7.02798C19.3448 7.03083 19.2547 7.03454 19.1615 7.03923C19.1615 7.03923 19.1615 7.03922 19.1615 7.03923C18.9361 7.05055 18.6927 7.06756 18.4318 7.0919C18.1227 7.12072 17.7891 7.15982 17.4318 7.2119C16.629 7.32893 15.7066 7.51151 14.6746 7.79042C12.7963 8.29804 11.2812 8.92844 10.1891 9.46377C10.1887 9.46399 10.1882 9.46422 10.1878 9.46444C10.0951 9.50989 10.0054 9.55466 9.91882 9.5986V20.1333C9.91882 21.6022 9.26523 23.2606 6.35201 23.2606C3.43879 23.2606 3 21.7112 3 20.6667C3 19.3807 3.77597 18.065 6.0299 18.065C7.10554 18.065 7.64713 18.065 7.91882 17.8384C8.1627 17.6351 8.18912 17.2492 8.18912 16.5169ZM7.91882 19.9636C7.7117 20.005 7.52857 20.023 7.39013 20.0342C7.00957 20.0651 6.54853 20.065 6.093 20.065C6.07196 20.065 6.05092 20.065 6.0299 20.065C5.30798 20.065 5.11805 20.2628 5.10464 20.2768C5.07571 20.3066 5 20.4093 5 20.6667C5 20.7945 5.01424 20.8857 5.03151 20.9439C5.04558 20.9913 5.05704 21.0031 5.05893 21.0051C5.06158 21.008 5.07297 21.0201 5.10096 21.0382C5.12963 21.0569 5.18351 21.087 5.27402 21.1194C5.45907 21.1858 5.79481 21.2606 6.35201 21.2606C7.42798 21.2606 7.69146 20.9662 7.72786 20.9249C7.80668 20.8356 7.91882 20.6138 7.91882 20.1333V19.9636ZM10.1891 7.25773C11.2628 6.78238 12.5934 6.28113 14.1528 5.85968C16.2301 5.2983 17.9224 5.09225 19.1615 5.03699V4.02187C18.2119 4.07644 16.8741 4.24836 15.1964 4.70177C12.91 5.31968 11.2021 5.97761 10.1878 6.41235V6.72554L10.1891 6.72457V7.25773ZM19.1615 16.9753C18.9544 17.0167 18.7713 17.0347 18.6328 17.046C18.2523 17.0768 17.7912 17.0768 17.3357 17.0767C17.3146 17.0767 17.2936 17.0767 17.2726 17.0767C16.5507 17.0767 16.3607 17.2746 16.3473 17.2885C16.3184 17.3183 16.2427 17.4211 16.2427 17.6784C16.2427 17.8062 16.2569 17.8974 16.2742 17.9556C16.2883 18.0031 16.2997 18.0149 16.3016 18.0168C16.3043 18.0197 16.3157 18.0318 16.3436 18.05C16.3723 18.0686 16.4262 18.0987 16.5167 18.1312C16.7018 18.1975 17.0375 18.2723 17.5947 18.2723C18.6707 18.2723 18.9341 17.9779 18.9705 17.9367C19.0494 17.8473 19.1615 17.6255 19.1615 17.1451V16.9753Z" fill="currentColor"/>\n                                    </svg>\n                                    <span>{{i18n_mobile_audio}}</span>\n                                </label>\n                            </savior-row>\n\n                        </div>\n                    </div>\n                    <savior-row class="mobile-qrcode mobile-default-row-gap">\n                        <div class="qrcode loading"></div>\n                    </savior-row>\n                </savior-row>\n            </instruction>\n        </savior-row>\n\n        <savior-row class="mobile-footer mobile-default-row-gap">\n            <div class="footer-text">{{i18n_mobile_panel_footer}}</div>\n            <savior-row class="download-web-stores">\n                <figure class="store google-play" id="google-play"></figure>\n                <figure class="store app-store" id="app-store"></figure>\n            </savior-row>\n        </savior-row>\n    </div>\n</dropdown-box>\n'
          ),
          r.a.set(
            "template-promote-serp",
            '<div class="promote-serp-block">\n    <div id="close">&times;</div>\n    <p>{{i18n_desc}}</p>\n\n    <div class="btn-block">\n        <button class="btn green" id="check">{{i18n_btn_check}}</button>\n        <button class="btn" id="settings">{{i18n_btn_settings}}</button>\n    </div>\n</div>'
          ),
          r.a.set(
            "template-onboard-new-panel",
            '<dropdown-box id="onboard-nmp" hidden="true">\n    <dropdown-box-body>\n        <div class="info">\n            <h2 data-text="header">{{i18n_onboard_header}}</h2>\n            <p class="" data-text="desc">{{i18n_onboard_desc}}</p>\n        </div>\n        <savior-row class="onboard-nmp-footer">\n            <step-indicator id="onboard-nmp-indicator" steps="3" current="1" controls></step-indicator>\n            <savior-row>\n                <button class="btn-chip" id="onboard-nmp-abort" >\n                    <span>{{i18n_abort}}</span>\n                </button>\n                <button class="btn-chip btn-primary" id="onboard-nmp-next" >\n                    <span>{{i18n_next}}</span>\n                </button>\n                <button class="btn-chip btn-primary" id="onboard-nmp-complete" >\n                    <span>{{i18n_complete}}</span>\n                </button>\n            </savior-row>\n        </savior-row>\n    </dropdown-box-body>\n</dropdown-box>'
          );
      },
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    n.r(t),
      function (e) {
        n(37);
        var t,
          r = n(3),
          i = n(122),
          o = n(118),
          a = n(72),
          s = n(8),
          l = n(120),
          c = (n(306), n(290), n(74)),
          u = n(2),
          d = n(0),
          h = n(1),
          p = function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, o) {
              function a(e) {
                try {
                  l(r.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function s(e) {
                try {
                  l(r.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? i(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, s);
              }
              l((r = r.apply(e, t || [])).next());
            });
          };
        function f(e, t, n) {
          e
            ? n || 0 === n
              ? chrome.tabs.sendMessage(e, t, { frameId: n })
              : chrome.tabs.sendMessage(e, t)
            : chrome.runtime.sendMessage(t);
        }
        (e.IS_CONTENT_SCRIPT = !1),
          null === (t = chrome.action) || void 0 === t || t.disable(),
          r.a.load().then(() => {
            let e;
            i.a.load(),
              chrome.storage.local.get(["onboardTrack"], (t) => {
                var n;
                (e = t.onboardTrack || {}),
                  (
                    null === (n = e.point) || void 0 === n
                      ? void 0
                      : n.forceShow
                  )
                    ? setTimeout(() => {
                        chrome.tabs.query({ active: !0 }, (t) => {
                          const n = t[0];
                          if (n) {
                            f(
                              n.id,
                              {
                                type: "open_onboarding",
                                site: "point",
                                data: e.point,
                              },
                              0
                            );
                          }
                        });
                      }, 15e3)
                    : setTimeout(() => {
                        chrome.tabs.query({ active: !0 }, (t) => {
                          const n = t[0];
                          if (n) {
                            f(
                              n.id,
                              {
                                type: "open_onboarding",
                                site: "point",
                                data: e.point,
                              },
                              0
                            );
                          }
                        });
                      }, 18e5);
              }),
              chrome.tabs.onUpdated.addListener((e, t, n) => {
                s.b &&
                  s.b.isYSERPHref(n.url) &&
                  "complete" === t.status &&
                  n.active &&
                  EE.emit("yserp_matched", e);
              });
            let t = "";
            chrome.runtime.onMessage.addListener(function (n, r, i) {
              var s, m, g, v, b, y;
              return p(this, void 0, void 0, function* () {
                const _ =
                  (null === (s = r.tab) || void 0 === s ? void 0 : s.id) || 0;
                switch ((n.id && (t = n.id), n.type)) {
                  case "promote_serp":
                    chrome.cookies.get(
                      { url: "https://coccoc.com", name: "coccoc_office" },
                      (e) => {
                        const t = { type: "promote_serp_result" };
                        e && "1" === e.value ? (t.data = !0) : (t.data = !1),
                          f(_, t);
                      }
                    );
                    break;
                  case "get_promote_serp":
                    chrome.storage.local.get(
                      ["is_promote_serp_closed"],
                      (e) => {
                        f(_, {
                          type: "get_promote_serp_result",
                          data: e.is_promote_serp_closed,
                        });
                      }
                    );
                    break;
                  case "close_promote_serp":
                    chrome.storage.local.set({ is_promote_serp_closed: 1 });
                    break;
                  case "get_onboard_track":
                    f(_, {
                      type: "onboard_track_result",
                      data: e[
                        (null === (m = null == n ? void 0 : n.params) ||
                        void 0 === m
                          ? void 0
                          : m.site) || {}
                      ],
                    });
                    break;
                  case "download": {
                    const e = {
                      type: "download.result",
                      data: yield a.a.processRequest(
                        null === (g = r.tab) || void 0 === g ? void 0 : g.id,
                        n.data.method,
                        n.data.params,
                        r.tab
                      ),
                    };
                    f(_, e);
                    break;
                  }
                  case "play_video":
                    a.a.play(n.id);
                    break;
                  case "set_feature":
                    Object(c.a)(n, r);
                    break;
                  case "is_supported": {
                    const e = yield Object(c.b)(n, r);
                    f(_, e);
                    break;
                  }
                  case "save_onboard_track":
                    (e[n.params.site] = n.params.data),
                      chrome.storage.local.set({ onboardTrack: e });
                    break;
                  case "frame_type":
                    h.c
                      .filter((e) =>
                        e.constructor.toString().includes("RegExp()")
                      )
                      .some((e) => {
                        var t;
                        return null === (t = r.url) || void 0 === t
                          ? void 0
                          : t.match(e);
                      }) ||
                      0 !== r.frameId ||
                      f(_, { type: "init_main_frame" }, 0);
                    break;
                  case "youtube_get_info":
                    try {
                      const e = {
                        type: "youtube_get_info",
                        data: yield Object(o.a)(n.data.url),
                      };
                      (e.data.url = n.data.url), f(_, e);
                    } catch (e) {
                      console.error(e),
                        f(_, {
                          type: "youtube_get_info",
                          data: { url: n.data.url },
                        });
                    }
                    break;
                  case "background_request": {
                    let e;
                    try {
                      const t = yield d.send(
                        n.data.method,
                        n.data.url,
                        n.data.params,
                        n.data.headers,
                        n.data.includeCredentials
                      );
                      e = {
                        type: "background_request_result",
                        data: {
                          success: "resolve",
                          id: n.data.id,
                          response: t,
                        },
                      };
                    } catch (t) {
                      e = {
                        type: "background_request_result",
                        data: { success: "reject", id: n.data.id, response: t },
                      };
                    }
                    f(_, e);
                    break;
                  }
                  case "youtube_get_mpd_info": {
                    let e;
                    try {
                      e = {
                        type: "youtube_set_mpd_info",
                        data: {
                          success: "resolve",
                          response: yield d.send(
                            n.data.method,
                            n.data.url,
                            n.data.params,
                            n.data.headers,
                            n.data.includeCredentials
                          ),
                        },
                      };
                    } catch (t) {
                      e = {
                        type: "youtube_set_mpd_info",
                        data: { success: "reject", response: t },
                      };
                    }
                    f(_, e);
                    break;
                  }
                  case "active_omnibox":
                    chrome.action
                      ? chrome.action.enable(
                          null === (v = r.tab) || void 0 === v ? void 0 : v.id
                        )
                      : chrome.pageAction.show(_);
                    break;
                  case "get_url":
                    chrome.webNavigation.getAllFrames({ tabId: _ }, (e) => {
                      const t = e || [],
                        r = [];
                      for (const e of t)
                        0 !== e.frameId &&
                          r.push(
                            new Promise((t) => {
                              var r;
                              chrome.tabs.sendMessage(
                                _,
                                {
                                  type: "get_inner_data",
                                  id: n.id,
                                  url:
                                    null ===
                                      (r = null == n ? void 0 : n.params) ||
                                    void 0 === r
                                      ? void 0
                                      : r.url,
                                },
                                { frameId: e.frameId },
                                (e) => {
                                  t(e);
                                }
                              );
                            })
                          );
                      Promise.all(r).then((e) => {
                        const t = e.find((e) => e && e.data);
                        t
                          ? f(_, { type: "return_inner_data", data: t }, 0)
                          : ((e[0] = e[0] || { id: n.id }),
                            f(_, { type: "return_inner_data", data: e[0] }));
                      });
                    });
                    break;
                  case "metrics":
                    if ("log" === n.method) {
                      const e = n.params;
                      u.a.logFromContentScript(e.name, e.value);
                    } else "log_request" === n.method && u.a.logRequest(n.params);
                    break;
                  case "cache.background": {
                    const e = l.a.processRequest(n.data.method, n.data.params);
                    "get" === n.data.method &&
                      (null == e ||
                        e
                          .then((e) => ({
                            type: "cache.background.hit",
                            data: { id: n.data.id, result: e },
                          }))
                          .catch(() => ({
                            type: "cache.background.miss",
                            data: { id: n.data.id },
                          }))
                          .then((e) => f(_, e)));
                    break;
                  }
                  case "inner_frame_pip":
                    chrome.webNavigation.getAllFrames({ tabId: _ }, (e) => {
                      var t, r;
                      const i = e || [],
                        o = n.params.url,
                        a = new URL(o).search,
                        s =
                          null === (t = i.find((e) => -1 == e.parentFrameId)) ||
                          void 0 === t
                            ? void 0
                            : t.url;
                      for (const e of i) {
                        const t =
                          (null == o ? void 0 : o.includes("playhydrax.com")) &&
                          (null === (r = e.url) || void 0 === r
                            ? void 0
                            : r.includes(a));
                        -1 == e.parentFrameId ||
                          (e.url != o && !t) ||
                          chrome.tabs.sendMessage(
                            _,
                            Object.assign(Object.assign({}, n.params), {
                              type: "inner_pip",
                              requestUrl: s,
                            }),
                            { frameId: e.frameId }
                          );
                      }
                    });
                    break;
                  case "pip":
                    EE.emit("pipRequest", {
                      method: n.method,
                      params: n.params,
                    });
                    break;
                  case "console.log":
                    console.log(n);
                    break;
                  case "get_matched_requests":
                    EE.emit("request_cache.get_matched_requests", { id: _ });
                    break;
                  case "get_server_time":
                    EE.emit("request_cache.get_server_time", {
                      id: _,
                      msgId: n.id,
                    });
                    break;
                  case "tiktok_get_no_watermark_video": {
                    const e = 8e3,
                      t = [
                        (t) =>
                          p(this, void 0, void 0, function* () {
                            const n = {};
                            try {
                              const r = [
                                  "https://api16-core-c-useast1a.tiktokv.com",
                                  "https://api16-core.tiktokv.com",
                                  "https://api16-core-c-useast2a.tiktokv.com",
                                  "https://api19-core-c-useast1a.tiktokv.com",
                                ],
                                i = r.map(() => new AbortController()),
                                o = [];
                              return (
                                r.forEach((r, a) => {
                                  o.push(
                                    new Promise((o, s) => {
                                      const l = new Headers();
                                      l.append(
                                        "Content-Type",
                                        "application/json"
                                      );
                                      const c = new Date().getTime();
                                      d.fetchWithTimeout(
                                        `${r}/aweme/v1/feed/?aweme_id=${t}`,
                                        {
                                          method: "GET",
                                          headers: l,
                                          timeout: e,
                                        },
                                        i[a]
                                      )
                                        .then((e) => {
                                          e.json()
                                            .then((s) => {
                                              var l, u, d, h;
                                              i.forEach((e, t) => {
                                                t !== a && e.abort();
                                              }),
                                                (n.url = `${r}/aweme/v1/feed/?aweme_id=${t}`),
                                                (n.statusCode = e.status),
                                                (n.body = {
                                                  noWatermarkUrl:
                                                    null ===
                                                      (h =
                                                        null ===
                                                          (d =
                                                            null ===
                                                              (u =
                                                                null ===
                                                                  (l =
                                                                    null == s
                                                                      ? void 0
                                                                      : s
                                                                          .aweme_list[0]) ||
                                                                void 0 === l
                                                                  ? void 0
                                                                  : l.video) ||
                                                            void 0 === u
                                                              ? void 0
                                                              : u.play_addr) ||
                                                        void 0 === d
                                                          ? void 0
                                                          : d.url_list) ||
                                                    void 0 === h
                                                      ? void 0
                                                      : h[0],
                                                }),
                                                (n.responseTime =
                                                  new Date().getTime() - c),
                                                o();
                                            })
                                            .catch(s);
                                        })
                                        .catch(s);
                                    })
                                  );
                                }),
                                yield Promise.any(o),
                                n
                              );
                            } catch (e) {
                              return (n.error = String(e)), n;
                            }
                          }),
                      ];
                    let r;
                    for (const e of t)
                      if (
                        ((r = yield e(n.originVideoId)),
                        u.a.log("recordCustomData", [
                          {
                            key: "tiktok_no_watermark",
                            value: JSON.stringify(r),
                          },
                        ]),
                        null === (b = null == r ? void 0 : r.body) ||
                        void 0 === b
                          ? void 0
                          : b.noWatermarkUrl)
                      )
                        break;
                    f(_, {
                      type: "return_inner_data",
                      data: Object.assign(Object.assign({}, n), {
                        data: {
                          url:
                            null === (y = null == r ? void 0 : r.body) ||
                            void 0 === y
                              ? void 0
                              : y.noWatermarkUrl,
                        },
                      }),
                    });
                    break;
                  }
                  case "inject_script":
                    chrome.scripting.executeScript({
                      target: { tabId: _ },
                      world: chrome.scripting.ExecutionWorld.MAIN,
                      files: [`inject/${n.file}/main-world.js`],
                    }),
                      chrome.scripting.executeScript({
                        target: { tabId: _ },
                        files: [`inject/${n.file}/index.js`],
                      });
                    break;
                  case "script_executed":
                    f(
                      _,
                      Object.assign(Object.assign({}, n), {
                        type: "return_inner_data",
                        data: Object.assign(Object.assign({}, n.data), {
                          id: t,
                        }),
                      })
                    );
                }
                return i(), !0;
              });
            }),
              EE.on("request.matched", (e) => f(e.tabId, e.data, 0)),
              EE.on("yserp_matched", (e) => f(e, { type: "yserp_metrics" })),
              EE.on("finish_download", (e) => f(e.tabId, e)),
              EE.on("download_error", (e) => f(e.tabId, e)),
              EE.on("request_cache.return_matched_requests", (e) =>
                f(e.id, { type: "request.matched", result: e.tasks }, 0)
              ),
              EE.on("request_cache.return_server_time", (e) =>
                f(
                  e.id,
                  {
                    type: "return_inner_data",
                    data: { id: e.msgId, data: e.serverTime },
                  },
                  0
                )
              );
          }),
          chrome.runtime.onMessageExternal.addListener(function (e, t, n) {
            if (!e || (t.tab && -1 === t.tab.index))
              return void console.warn("Empty external request");
            switch (e.action) {
              case "pip_url":
                EE.emit("pipRequest", { method: "pipUrl", params: e.params });
                break;
              case "custom_metrics3":
                if ("object" != typeof e.data || !Object.keys(e.data).length)
                  return void n({ status: "error", error_message: "bad_data" });
                if (void 0 === e.key || "string" != typeof e.key)
                  return void n({ status: "error", error_message: "bad_key" });
                u.a.log("recordCustomData", [
                  { key: e.key, value: JSON.stringify(e.data) },
                ]),
                  n({ status: "ok" });
            }
          });
      }.call(this, n(9));
  },
  function (e, t) {},
  function (e, t, n) {
    "use strict";
    var r = n(63).Buffer,
      i = n(269);
    (e.exports = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.head = null),
          (this.tail = null),
          (this.length = 0);
      }
      return (
        (e.prototype.push = function (e) {
          var t = { data: e, next: null };
          this.length > 0 ? (this.tail.next = t) : (this.head = t),
            (this.tail = t),
            ++this.length;
        }),
        (e.prototype.unshift = function (e) {
          var t = { data: e, next: this.head };
          0 === this.length && (this.tail = t), (this.head = t), ++this.length;
        }),
        (e.prototype.shift = function () {
          if (0 !== this.length) {
            var e = this.head.data;
            return (
              1 === this.length
                ? (this.head = this.tail = null)
                : (this.head = this.head.next),
              --this.length,
              e
            );
          }
        }),
        (e.prototype.clear = function () {
          (this.head = this.tail = null), (this.length = 0);
        }),
        (e.prototype.join = function (e) {
          if (0 === this.length) return "";
          for (var t = this.head, n = "" + t.data; (t = t.next); )
            n += e + t.data;
          return n;
        }),
        (e.prototype.concat = function (e) {
          if (0 === this.length) return r.alloc(0);
          if (1 === this.length) return this.head.data;
          for (
            var t, n, i, o = r.allocUnsafe(e >>> 0), a = this.head, s = 0;
            a;

          )
            (t = a.data),
              (n = o),
              (i = s),
              t.copy(n, i),
              (s += a.data.length),
              (a = a.next);
          return o;
        }),
        e
      );
    })()),
      i &&
        i.inspect &&
        i.inspect.custom &&
        (e.exports.prototype[i.inspect.custom] = function () {
          var e = i.inspect({ length: this.length });
          return this.constructor.name + " " + e;
        });
  },
  function (e, t) {},
  function (e, t, n) {
    "use strict";
    e.exports = o;
    var r = n(82),
      i = Object.create(n(41));
    function o(e) {
      if (!(this instanceof o)) return new o(e);
      r.call(this, e);
    }
    (i.inherits = n(17)),
      i.inherits(o, r),
      (o.prototype._transform = function (e, t, n) {
        n(null, e);
      });
  },
  function (e, t, n) {
    e.exports = n(64);
  },
  function (e, t, n) {
    e.exports = n(28);
  },
  function (e, t, n) {
    e.exports = n(40).Transform;
  },
  function (e, t, n) {
    e.exports = n(40).PassThrough;
  },
  function (e, t, n) {
    const r = n(53),
      i = n(83),
      o = n(54),
      a = n(43),
      { setTimeout: s } = n(24),
      l = n(89),
      c = n(90),
      u = n(286),
      d = n(92),
      h = n(93),
      p = "https://www.youtube.com/watch?v=";
    (t.cache = new h()),
      (t.cookieCache = new h(864e5)),
      (t.watchPageCache = new h());
    let f = "2.20210622.10.00";
    class m extends Error {}
    const g = [
      "support.google.com/youtube/?p=age_restrictions",
      "youtube.com/t/community_guidelines",
    ];
    t.getBasicInfo = async (e, t) => {
      const n = Object.assign({}, o.defaultOptions, t.requestOptions);
      (t.requestOptions = Object.assign({}, t.requestOptions, {})),
        (t.requestOptions.headers = Object.assign(
          {},
          {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36",
          },
          t.requestOptions.headers
        ));
      let r = await T(
        [e, t],
        (e) => {
          let t = a.playError(e.player_response, ["ERROR"], m),
            n = v(e.player_response);
          if (t || n) throw t || n;
          return (
            e &&
            e.player_response &&
            (e.player_response.streamingData ||
              b(e.player_response) ||
              y(e.player_response))
          );
        },
        n,
        [k, A, I]
      );
      Object.assign(r, {
        formats: D(r.player_response),
        related_videos: u.getRelatedVideos(r),
      });
      const i = u.getMedia(r),
        s = {
          author: u.getAuthor(r),
          media: i,
          likes: u.getLikes(r),
          dislikes: u.getDislikes(r),
          age_restricted: !!(
            i &&
            i.notice_url &&
            g.some((e) => i.notice_url.includes(e))
          ),
          video_url: p + e,
          storyboards: u.getStoryboards(r),
          chapters: u.getChapters(r),
        };
      return (
        (r.videoDetails = u.cleanVideoDetails(
          Object.assign(
            {},
            r.player_response &&
              r.player_response.microformat &&
              r.player_response.microformat.playerMicroformatRenderer,
            r.player_response && r.player_response.videoDetails,
            s
          ),
          r
        )),
        r
      );
    };
    const v = (e) => {
        let t = e && e.playabilityStatus;
        return t &&
          "LOGIN_REQUIRED" === t.status &&
          t.messages &&
          t.messages.filter((e) => /This is a private video/.test(e)).length
          ? new m(t.reason || (t.messages && t.messages[0]))
          : null;
      },
      b = (e) => {
        let t = e.playabilityStatus;
        return (
          t &&
          "UNPLAYABLE" === t.status &&
          t.errorScreen &&
          t.errorScreen.playerLegacyDesktopYpcOfferRenderer
        );
      },
      y = (e) => {
        let t = e.playabilityStatus;
        return t && "LIVE_STREAM_OFFLINE" === t.status;
      },
      _ = (e, t) => `${p + e}&hl=${t.lang || "en"}`,
      w = (e, n) => {
        const r = _(e, n);
        return t.watchPageCache.getOrSet(r, () =>
          a.exposedMiniget(r, n).text()
        );
      },
      E = (e) => {
        let t =
          /<script\s+src="([^"]+)"(?:\s+type="text\/javascript")?\s+name="player_ias\/base"\s*>|"jsUrl":"([^"]+)"/.exec(
            e
          );
        return t ? t[1] || t[2] : null;
      },
      T = async (e, t, n, r) => {
        let i;
        for (let o of r)
          try {
            const r = await x(o, e.concat([i]), n);
            if (
              (r.player_response &&
                ((r.player_response.videoDetails = C(
                  i && i.player_response && i.player_response.videoDetails,
                  r.player_response.videoDetails
                )),
                (r.player_response = C(
                  i && i.player_response,
                  r.player_response
                ))),
              (i = C(i, r)),
              t(i, !1))
            )
              break;
          } catch (e) {
            if (e instanceof m || o === r[r.length - 1]) throw e;
          }
        return i;
      },
      C = (e, t) => {
        if (!e || !t) return e || t;
        for (let [n, r] of Object.entries(t)) null != r && (e[n] = r);
        return e;
      },
      x = async (e, t, n) => {
        let r,
          i = 0;
        for (; i <= n.maxRetries; )
          try {
            r = await e(...t);
            break;
          } catch (e) {
            if (
              e instanceof m ||
              (e instanceof o.MinigetError && e.statusCode < 500) ||
              i >= n.maxRetries
            )
              throw e;
            let t = Math.min(++i * n.backoff.inc, n.backoff.max);
            await new Promise((e) => s(e, t));
          }
        return r;
      },
      S = /^[)\]}'\s]+/,
      L = (e, t, n) => {
        if (!n || "object" == typeof n) return n;
        try {
          return (n = n.replace(S, "")), JSON.parse(n);
        } catch (n) {
          throw Error(`Error parsing ${t} in ${e}: ${n.message}`);
        }
      },
      R = (e, t, n, r, i, o) => {
        let s = a.between(n, r, i);
        if (!s) throw Error(`Could not find ${t} in ${e}`);
        return L(e, t, a.cutAfterJSON(`${o}${s}`));
      },
      O = (e, t) => {
        const n =
          t &&
          ((t.args && t.args.player_response) ||
            t.player_response ||
            t.playerResponse ||
            t.embedded_player_response);
        return L(e, "player_response", n);
      },
      A = async (e, n) => {
        const r = Object.assign({ headers: {} }, n.requestOptions);
        let i = r.headers.Cookie || r.headers.cookie;
        r.headers = Object.assign(
          {
            "x-youtube-client-name": "1",
            "x-youtube-client-version": f,
            "x-youtube-identity-token": t.cookieCache.get(i || "browser") || "",
          },
          r.headers
        );
        const o = async (i, o) => {
          r.headers["x-youtube-identity-token"] ||
            (r.headers["x-youtube-identity-token"] = await ((e, n, r, i) =>
              t.cookieCache.getOrSet(r, async () => {
                let t = (await w(e, n)).match(
                  /(["'])ID_TOKEN\1[:,]\s?"([^"]+)"/
                );
                if (!t && i)
                  throw new m(
                    "Cookie header used in request, but unable to find YouTube identity token"
                  );
                return t && t[2];
              }))(e, n, i, o));
        };
        i && (await o(i, !0));
        const s = ((e, t) => _(e, t) + "&pbj=1")(e, n),
          l = await a.exposedMiniget(s, n, r).text();
        let c = L("watch.json", "body", l);
        if (
          ("now" === c.reload && (await o("browser", !1)),
          "now" === c.reload || !Array.isArray(c))
        )
          throw Error("Unable to retrieve video metadata in watch.json");
        let u = c.reduce((e, t) => Object.assign(t, e), {});
        return (
          (u.player_response = O("watch.json", u)),
          (u.html5player = u.player && u.player.assets && u.player.assets.js),
          u
        );
      },
      k = async (e, t) => {
        let n = await w(e, t),
          r = { page: "watch" };
        try {
          (f = a.between(n, '{"key":"cver","value":"', '"}')),
            (r.player_response = R(
              "watch.html",
              "player_response",
              n,
              /\bytInitialPlayerResponse\s*=\s*\{/i,
              "</script>",
              "{"
            ));
        } catch (e) {
          let t = R(
            "watch.html",
            "player_response",
            n,
            /\bytplayer\.config\s*=\s*{/,
            "</script>",
            "{"
          );
          r.player_response = O("watch.html", t);
        }
        return (
          (r.response = R(
            "watch.html",
            "response",
            n,
            /\bytInitialData("\])?\s*=\s*\{/i,
            "</script>",
            "{"
          )),
          (r.html5player = E(n)),
          r
        );
      },
      I = async (e, t) => {
        const n = new URL("https://www.youtube.com/get_video_info");
        n.searchParams.set("video_id", e),
          n.searchParams.set("c", "TVHTML5"),
          n.searchParams.set("cver", "7" + f.substr(1)),
          n.searchParams.set("eurl", "https://youtube.googleapis.com/v/" + e),
          n.searchParams.set("ps", "default"),
          n.searchParams.set("gl", "US"),
          n.searchParams.set("hl", t.lang || "en"),
          n.searchParams.set("html5", "1");
        const i = await a.exposedMiniget(n.toString(), t).text();
        let o = r.parse(i);
        return (o.player_response = O("get_video_info", o)), o;
      },
      D = (e) => {
        let t = [];
        return (
          e &&
            e.streamingData &&
            (t = t
              .concat(e.streamingData.formats || [])
              .concat(e.streamingData.adaptiveFormats || [])),
          t
        );
      };
    t.getInfo = async (e, n) => {
      let r = await t.getBasicInfo(e, n);
      const i =
        r.player_response &&
        r.player_response.streamingData &&
        (r.player_response.streamingData.dashManifestUrl ||
          r.player_response.streamingData.hlsManifestUrl);
      let o = [];
      if (r.formats.length) {
        if (
          ((r.html5player =
            r.html5player ||
            E(await w(e, n)) ||
            E(
              await ((e, t) => {
                const n = `${"https://www.youtube.com/embed/" + e}?hl=${
                  t.lang || "en"
                }`;
                return a.exposedMiniget(n, t).text();
              })(e, n)
            )),
          !r.html5player)
        )
          throw Error("Unable to find html5player file");
        const t = new URL(r.html5player, p).toString();
        o.push(d.decipherFormats(r.formats, t, n));
      }
      if (i && r.player_response.streamingData.dashManifestUrl) {
        let e = r.player_response.streamingData.dashManifestUrl;
        o.push(P(e, n));
      }
      if (i && r.player_response.streamingData.hlsManifestUrl) {
        let e = r.player_response.streamingData.hlsManifestUrl;
        o.push(N(e, n));
      }
      let s = await Promise.all(o);
      return (
        (r.formats = Object.values(Object.assign({}, ...s))),
        (r.formats = r.formats.map(l.addFormatMeta)),
        r.formats.sort(l.sortFormats),
        (r.full = !0),
        r
      );
    };
    const P = (e, t) =>
        new Promise((n, r) => {
          let o = {};
          const s = i.parser(!1);
          let l;
          (s.onerror = r),
            (s.onopentag = (t) => {
              if ("ADAPTATIONSET" === t.name) l = t.attributes;
              else if ("REPRESENTATION" === t.name) {
                const n = parseInt(t.attributes.ID);
                isNaN(n) ||
                  (o[e] = Object.assign(
                    {
                      itag: n,
                      url: e,
                      bitrate: parseInt(t.attributes.BANDWIDTH),
                      mimeType: `${l.MIMETYPE}; codecs="${t.attributes.CODECS}"`,
                    },
                    t.attributes.HEIGHT
                      ? {
                          width: parseInt(t.attributes.WIDTH),
                          height: parseInt(t.attributes.HEIGHT),
                          fps: parseInt(t.attributes.FRAMERATE),
                        }
                      : { audioSampleRate: t.attributes.AUDIOSAMPLINGRATE }
                  ));
              }
            }),
            (s.onend = () => {
              n(o);
            });
          const c = a.exposedMiniget(new URL(e, p).toString(), t);
          c.setEncoding("utf8"),
            c.on("error", r),
            c.on("data", (e) => {
              s.write(e);
            }),
            c.on("end", s.close.bind(s));
        }),
      N = async (e, t) => {
        e = new URL(e, p);
        const n = await a.exposedMiniget(e.toString(), t).text();
        let r = {};
        return (
          n
            .split("\n")
            .filter((e) => /^https?:\/\//.test(e))
            .forEach((e) => {
              const t = parseInt(e.match(/\/itag\/(\d+)\//)[1]);
              r[e] = { itag: t, url: e };
            }),
          r
        );
      };
    for (let e of ["getBasicInfo", "getInfo"]) {
      const n = t[e];
      t[e] = async (r, i = {}) => {
        a.checkForUpdates();
        let o = await c.getVideoID(r);
        const s = [e, o, i.lang].join("-");
        return t.cache.getOrSet(s, () => n(o, i));
      };
    }
    (t.validateID = c.validateID),
      (t.validateURL = c.validateURL),
      (t.getURLVideoID = c.getURLVideoID),
      (t.getVideoID = c.getVideoID);
  },
  function (e, t, n) {
    "use strict";
    function r(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    e.exports = function (e, t, n, o) {
      (t = t || "&"), (n = n || "=");
      var a = {};
      if ("string" != typeof e || 0 === e.length) return a;
      var s = /\+/g;
      e = e.split(t);
      var l = 1e3;
      o && "number" == typeof o.maxKeys && (l = o.maxKeys);
      var c = e.length;
      l > 0 && c > l && (c = l);
      for (var u = 0; u < c; ++u) {
        var d,
          h,
          p,
          f,
          m = e[u].replace(s, "%20"),
          g = m.indexOf(n);
        g >= 0
          ? ((d = m.substr(0, g)), (h = m.substr(g + 1)))
          : ((d = m), (h = "")),
          (p = decodeURIComponent(d)),
          (f = decodeURIComponent(h)),
          r(a, p) ? (i(a[p]) ? a[p].push(f) : (a[p] = [a[p], f])) : (a[p] = f);
      }
      return a;
    };
    var i =
      Array.isArray ||
      function (e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      };
  },
  function (e, t, n) {
    "use strict";
    var r = function (e) {
      switch (typeof e) {
        case "string":
          return e;
        case "boolean":
          return e ? "true" : "false";
        case "number":
          return isFinite(e) ? e : "";
        default:
          return "";
      }
    };
    e.exports = function (e, t, n, s) {
      return (
        (t = t || "&"),
        (n = n || "="),
        null === e && (e = void 0),
        "object" == typeof e
          ? o(a(e), function (a) {
              var s = encodeURIComponent(r(a)) + n;
              return i(e[a])
                ? o(e[a], function (e) {
                    return s + encodeURIComponent(r(e));
                  }).join(t)
                : s + encodeURIComponent(r(e[a]));
            }).join(t)
          : s
          ? encodeURIComponent(r(s)) + n + encodeURIComponent(r(e))
          : ""
      );
    };
    var i =
      Array.isArray ||
      function (e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      };
    function o(e, t) {
      if (e.map) return e.map(t);
      for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
      return n;
    }
    var a =
      Object.keys ||
      function (e) {
        var t = [];
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
        return t;
      };
  },
  function (e, t, n) {
    (function (t, r, i) {
      var o = n(85),
        a = n(17),
        s = n(86),
        l = n(40),
        c = n(279),
        u = s.IncomingMessage,
        d = s.readyStates;
      var h = (e.exports = function (e) {
        var n,
          r = this;
        l.Writable.call(r),
          (r._opts = e),
          (r._body = []),
          (r._headers = {}),
          e.auth &&
            r.setHeader(
              "Authorization",
              "Basic " + new t(e.auth).toString("base64")
            ),
          Object.keys(e.headers).forEach(function (t) {
            r.setHeader(t, e.headers[t]);
          });
        var i = !0;
        if (
          "disable-fetch" === e.mode ||
          ("requestTimeout" in e && !o.abortController)
        )
          (i = !1), (n = !0);
        else if ("prefer-streaming" === e.mode) n = !1;
        else if ("allow-wrong-content-type" === e.mode) n = !o.overrideMimeType;
        else {
          if (e.mode && "default" !== e.mode && "prefer-fast" !== e.mode)
            throw new Error("Invalid value for opts.mode");
          n = !0;
        }
        (r._mode = (function (e, t) {
          return o.fetch && t
            ? "fetch"
            : o.mozchunkedarraybuffer
            ? "moz-chunked-arraybuffer"
            : o.msstream
            ? "ms-stream"
            : o.arraybuffer && e
            ? "arraybuffer"
            : o.vbArray && e
            ? "text:vbarray"
            : "text";
        })(n, i)),
          (r._fetchTimer = null),
          r.on("finish", function () {
            r._onFinish();
          });
      });
      a(h, l.Writable),
        (h.prototype.setHeader = function (e, t) {
          var n = e.toLowerCase();
          -1 === p.indexOf(n) && (this._headers[n] = { name: e, value: t });
        }),
        (h.prototype.getHeader = function (e) {
          var t = this._headers[e.toLowerCase()];
          return t ? t.value : null;
        }),
        (h.prototype.removeHeader = function (e) {
          delete this._headers[e.toLowerCase()];
        }),
        (h.prototype._onFinish = function () {
          var e = this;
          if (!e._destroyed) {
            var n = e._opts,
              a = e._headers,
              s = null;
            "GET" !== n.method &&
              "HEAD" !== n.method &&
              (s = o.arraybuffer
                ? c(t.concat(e._body))
                : o.blobConstructor
                ? new r.Blob(
                    e._body.map(function (e) {
                      return c(e);
                    }),
                    { type: (a["content-type"] || {}).value || "" }
                  )
                : t.concat(e._body).toString());
            var l = [];
            if (
              (Object.keys(a).forEach(function (e) {
                var t = a[e].name,
                  n = a[e].value;
                Array.isArray(n)
                  ? n.forEach(function (e) {
                      l.push([t, e]);
                    })
                  : l.push([t, n]);
              }),
              "fetch" === e._mode)
            ) {
              var u = null;
              if (o.abortController) {
                var h = new AbortController();
                (u = h.signal),
                  (e._fetchAbortController = h),
                  "requestTimeout" in n &&
                    0 !== n.requestTimeout &&
                    (e._fetchTimer = r.setTimeout(function () {
                      e.emit("requestTimeout"),
                        e._fetchAbortController &&
                          e._fetchAbortController.abort();
                    }, n.requestTimeout));
              }
              r.fetch(e._opts.url, {
                method: e._opts.method,
                headers: l,
                body: s || void 0,
                mode: "cors",
                credentials: n.withCredentials ? "include" : "same-origin",
                signal: u,
              }).then(
                function (t) {
                  (e._fetchResponse = t), e._connect();
                },
                function (t) {
                  r.clearTimeout(e._fetchTimer),
                    e._destroyed || e.emit("error", t);
                }
              );
            } else {
              var p = (e._xhr = new r.XMLHttpRequest());
              try {
                p.open(e._opts.method, e._opts.url, !0);
              } catch (t) {
                return void i.nextTick(function () {
                  e.emit("error", t);
                });
              }
              "responseType" in p && (p.responseType = e._mode.split(":")[0]),
                "withCredentials" in p &&
                  (p.withCredentials = !!n.withCredentials),
                "text" === e._mode &&
                  "overrideMimeType" in p &&
                  p.overrideMimeType("text/plain; charset=x-user-defined"),
                "requestTimeout" in n &&
                  ((p.timeout = n.requestTimeout),
                  (p.ontimeout = function () {
                    e.emit("requestTimeout");
                  })),
                l.forEach(function (e) {
                  p.setRequestHeader(e[0], e[1]);
                }),
                (e._response = null),
                (p.onreadystatechange = function () {
                  switch (p.readyState) {
                    case d.LOADING:
                    case d.DONE:
                      e._onXHRProgress();
                  }
                }),
                "moz-chunked-arraybuffer" === e._mode &&
                  (p.onprogress = function () {
                    e._onXHRProgress();
                  }),
                (p.onerror = function () {
                  e._destroyed || e.emit("error", new Error("XHR error"));
                });
              try {
                p.send(s);
              } catch (t) {
                return void i.nextTick(function () {
                  e.emit("error", t);
                });
              }
            }
          }
        }),
        (h.prototype._onXHRProgress = function () {
          (function (e) {
            try {
              var t = e.status;
              return null !== t && 0 !== t;
            } catch (e) {
              return !1;
            }
          })(this._xhr) &&
            !this._destroyed &&
            (this._response || this._connect(),
            this._response._onXHRProgress());
        }),
        (h.prototype._connect = function () {
          var e = this;
          e._destroyed ||
            ((e._response = new u(
              e._xhr,
              e._fetchResponse,
              e._mode,
              e._fetchTimer
            )),
            e._response.on("error", function (t) {
              e.emit("error", t);
            }),
            e.emit("response", e._response));
        }),
        (h.prototype._write = function (e, t, n) {
          this._body.push(e), n();
        }),
        (h.prototype.abort = h.prototype.destroy =
          function () {
            (this._destroyed = !0),
              r.clearTimeout(this._fetchTimer),
              this._response && (this._response._destroyed = !0),
              this._xhr
                ? this._xhr.abort()
                : this._fetchAbortController &&
                  this._fetchAbortController.abort();
          }),
        (h.prototype.end = function (e, t, n) {
          "function" == typeof e && ((n = e), (e = void 0)),
            l.Writable.prototype.end.call(this, e, t, n);
        }),
        (h.prototype.flushHeaders = function () {}),
        (h.prototype.setTimeout = function () {}),
        (h.prototype.setNoDelay = function () {}),
        (h.prototype.setSocketKeepAlive = function () {});
      var p = [
        "accept-charset",
        "accept-encoding",
        "access-control-request-headers",
        "access-control-request-method",
        "connection",
        "content-length",
        "cookie",
        "cookie2",
        "date",
        "dnt",
        "expect",
        "host",
        "keep-alive",
        "origin",
        "referer",
        "te",
        "trailer",
        "transfer-encoding",
        "upgrade",
        "via",
      ];
    }).call(this, n(18).Buffer, n(9), n(15));
  },
  function (e, t, n) {
    var r = n(18).Buffer;
    e.exports = function (e) {
      if (e instanceof Uint8Array) {
        if (0 === e.byteOffset && e.byteLength === e.buffer.byteLength)
          return e.buffer;
        if ("function" == typeof e.buffer.slice)
          return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
      }
      if (r.isBuffer(e)) {
        for (var t = new Uint8Array(e.length), n = e.length, i = 0; i < n; i++)
          t[i] = e[i];
        return t.buffer;
      }
      throw new Error("Argument must be a Buffer");
    };
  },
  function (e, t) {
    e.exports = function () {
      for (var e = {}, t = 0; t < arguments.length; t++) {
        var r = arguments[t];
        for (var i in r) n.call(r, i) && (e[i] = r[i]);
      }
      return e;
    };
    var n = Object.prototype.hasOwnProperty;
  },
  function (e, t) {
    e.exports = {
      100: "Continue",
      101: "Switching Protocols",
      102: "Processing",
      200: "OK",
      201: "Created",
      202: "Accepted",
      203: "Non-Authoritative Information",
      204: "No Content",
      205: "Reset Content",
      206: "Partial Content",
      207: "Multi-Status",
      208: "Already Reported",
      226: "IM Used",
      300: "Multiple Choices",
      301: "Moved Permanently",
      302: "Found",
      303: "See Other",
      304: "Not Modified",
      305: "Use Proxy",
      307: "Temporary Redirect",
      308: "Permanent Redirect",
      400: "Bad Request",
      401: "Unauthorized",
      402: "Payment Required",
      403: "Forbidden",
      404: "Not Found",
      405: "Method Not Allowed",
      406: "Not Acceptable",
      407: "Proxy Authentication Required",
      408: "Request Timeout",
      409: "Conflict",
      410: "Gone",
      411: "Length Required",
      412: "Precondition Failed",
      413: "Payload Too Large",
      414: "URI Too Long",
      415: "Unsupported Media Type",
      416: "Range Not Satisfiable",
      417: "Expectation Failed",
      418: "I'm a teapot",
      421: "Misdirected Request",
      422: "Unprocessable Entity",
      423: "Locked",
      424: "Failed Dependency",
      425: "Unordered Collection",
      426: "Upgrade Required",
      428: "Precondition Required",
      429: "Too Many Requests",
      431: "Request Header Fields Too Large",
      451: "Unavailable For Legal Reasons",
      500: "Internal Server Error",
      501: "Not Implemented",
      502: "Bad Gateway",
      503: "Service Unavailable",
      504: "Gateway Timeout",
      505: "HTTP Version Not Supported",
      506: "Variant Also Negotiates",
      507: "Insufficient Storage",
      508: "Loop Detected",
      509: "Bandwidth Limit Exceeded",
      510: "Not Extended",
      511: "Network Authentication Required",
    };
  },
  function (e, t, n) {
    (function (e, r) {
      var i;
      /*! https://mths.be/punycode v1.4.1 by @mathias */ !(function (o) {
        t && t.nodeType, e && e.nodeType;
        var a = "object" == typeof r && r;
        a.global !== a && a.window !== a && a.self;
        var s,
          l = 2147483647,
          c = /^xn--/,
          u = /[^\x20-\x7E]/,
          d = /[\x2E\u3002\uFF0E\uFF61]/g,
          h = {
            overflow: "Overflow: input needs wider integers to process",
            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
            "invalid-input": "Invalid input",
          },
          p = Math.floor,
          f = String.fromCharCode;
        function m(e) {
          throw new RangeError(h[e]);
        }
        function g(e, t) {
          for (var n = e.length, r = []; n--; ) r[n] = t(e[n]);
          return r;
        }
        function v(e, t) {
          var n = e.split("@"),
            r = "";
          return (
            n.length > 1 && ((r = n[0] + "@"), (e = n[1])),
            r + g((e = e.replace(d, ".")).split("."), t).join(".")
          );
        }
        function b(e) {
          for (var t, n, r = [], i = 0, o = e.length; i < o; )
            (t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < o
              ? 56320 == (64512 & (n = e.charCodeAt(i++)))
                ? r.push(((1023 & t) << 10) + (1023 & n) + 65536)
                : (r.push(t), i--)
              : r.push(t);
          return r;
        }
        function y(e) {
          return g(e, function (e) {
            var t = "";
            return (
              e > 65535 &&
                ((t += f((((e -= 65536) >>> 10) & 1023) | 55296)),
                (e = 56320 | (1023 & e))),
              (t += f(e))
            );
          }).join("");
        }
        function _(e, t) {
          return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
        }
        function w(e, t, n) {
          var r = 0;
          for (e = n ? p(e / 700) : e >> 1, e += p(e / t); e > 455; r += 36)
            e = p(e / 35);
          return p(r + (36 * e) / (e + 38));
        }
        function E(e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            s,
            c,
            u,
            d,
            h,
            f = [],
            g = e.length,
            v = 0,
            b = 128,
            _ = 72;
          for ((n = e.lastIndexOf("-")) < 0 && (n = 0), r = 0; r < n; ++r)
            e.charCodeAt(r) >= 128 && m("not-basic"), f.push(e.charCodeAt(r));
          for (i = n > 0 ? n + 1 : 0; i < g; ) {
            for (
              o = v, a = 1, s = 36;
              i >= g && m("invalid-input"),
                ((c =
                  (h = e.charCodeAt(i++)) - 48 < 10
                    ? h - 22
                    : h - 65 < 26
                    ? h - 65
                    : h - 97 < 26
                    ? h - 97
                    : 36) >= 36 ||
                  c > p((l - v) / a)) &&
                  m("overflow"),
                (v += c * a),
                !(c < (u = s <= _ ? 1 : s >= _ + 26 ? 26 : s - _));
              s += 36
            )
              a > p(l / (d = 36 - u)) && m("overflow"), (a *= d);
            (_ = w(v - o, (t = f.length + 1), 0 == o)),
              p(v / t) > l - b && m("overflow"),
              (b += p(v / t)),
              (v %= t),
              f.splice(v++, 0, b);
          }
          return y(f);
        }
        function T(e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            s,
            c,
            u,
            d,
            h,
            g,
            v,
            y,
            E,
            T = [];
          for (g = (e = b(e)).length, t = 128, n = 0, o = 72, a = 0; a < g; ++a)
            (h = e[a]) < 128 && T.push(f(h));
          for (r = i = T.length, i && T.push("-"); r < g; ) {
            for (s = l, a = 0; a < g; ++a) (h = e[a]) >= t && h < s && (s = h);
            for (
              s - t > p((l - n) / (v = r + 1)) && m("overflow"),
                n += (s - t) * v,
                t = s,
                a = 0;
              a < g;
              ++a
            )
              if (((h = e[a]) < t && ++n > l && m("overflow"), h == t)) {
                for (
                  c = n, u = 36;
                  !(c < (d = u <= o ? 1 : u >= o + 26 ? 26 : u - o));
                  u += 36
                )
                  (E = c - d),
                    (y = 36 - d),
                    T.push(f(_(d + (E % y), 0))),
                    (c = p(E / y));
                T.push(f(_(c, 0))), (o = w(n, v, r == i)), (n = 0), ++r;
              }
            ++n, ++t;
          }
          return T.join("");
        }
        (s = {
          version: "1.4.1",
          ucs2: { decode: b, encode: y },
          decode: E,
          encode: T,
          toASCII: function (e) {
            return v(e, function (e) {
              return u.test(e) ? "xn--" + T(e) : e;
            });
          },
          toUnicode: function (e) {
            return v(e, function (e) {
              return c.test(e) ? E(e.slice(4).toLowerCase()) : e;
            });
          },
        }),
          void 0 ===
            (i = function () {
              return s;
            }.call(t, n, t, e)) || (e.exports = i);
      })();
    }).call(this, n(51)(e), n(9));
  },
  function (e, t, n) {
    "use strict";
    e.exports = {
      isString: function (e) {
        return "string" == typeof e;
      },
      isObject: function (e) {
        return "object" == typeof e && null !== e;
      },
      isNull: function (e) {
        return null === e;
      },
      isNullOrUndefined: function (e) {
        return null == e;
      },
    };
  },
  function (e, t, n) {
    var r = n(84),
      i = n(87),
      o = e.exports;
    for (var a in r) r.hasOwnProperty(a) && (o[a] = r[a]);
    function s(e) {
      if (
        ("string" == typeof e && (e = i.parse(e)),
        e.protocol || (e.protocol = "https:"),
        "https:" !== e.protocol)
      )
        throw new Error(
          'Protocol "' + e.protocol + '" not supported. Expected "https:"'
        );
      return e;
    }
    (o.request = function (e, t) {
      return (e = s(e)), r.request.call(this, e, t);
    }),
      (o.get = function (e, t) {
        return (e = s(e)), r.get.call(this, e, t);
      });
  },
  function (e, t) {
    e.exports = {
      5: {
        mimeType: 'video/flv; codecs="Sorenson H.283, mp3"',
        qualityLabel: "240p",
        bitrate: 25e4,
        audioBitrate: 64,
      },
      6: {
        mimeType: 'video/flv; codecs="Sorenson H.263, mp3"',
        qualityLabel: "270p",
        bitrate: 8e5,
        audioBitrate: 64,
      },
      13: {
        mimeType: 'video/3gp; codecs="MPEG-4 Visual, aac"',
        qualityLabel: null,
        bitrate: 5e5,
        audioBitrate: null,
      },
      17: {
        mimeType: 'video/3gp; codecs="MPEG-4 Visual, aac"',
        qualityLabel: "144p",
        bitrate: 5e4,
        audioBitrate: 24,
      },
      18: {
        mimeType: 'video/mp4; codecs="H.264, aac"',
        qualityLabel: "360p",
        bitrate: 5e5,
        audioBitrate: 96,
      },
      22: {
        mimeType: 'video/mp4; codecs="H.264, aac"',
        qualityLabel: "720p",
        bitrate: 2e6,
        audioBitrate: 192,
      },
      34: {
        mimeType: 'video/flv; codecs="H.264, aac"',
        qualityLabel: "360p",
        bitrate: 5e5,
        audioBitrate: 128,
      },
      35: {
        mimeType: 'video/flv; codecs="H.264, aac"',
        qualityLabel: "480p",
        bitrate: 8e5,
        audioBitrate: 128,
      },
      36: {
        mimeType: 'video/3gp; codecs="MPEG-4 Visual, aac"',
        qualityLabel: "240p",
        bitrate: 175e3,
        audioBitrate: 32,
      },
      37: {
        mimeType: 'video/mp4; codecs="H.264, aac"',
        qualityLabel: "1080p",
        bitrate: 3e6,
        audioBitrate: 192,
      },
      38: {
        mimeType: 'video/mp4; codecs="H.264, aac"',
        qualityLabel: "3072p",
        bitrate: 35e5,
        audioBitrate: 192,
      },
      43: {
        mimeType: 'video/webm; codecs="VP8, vorbis"',
        qualityLabel: "360p",
        bitrate: 5e5,
        audioBitrate: 128,
      },
      44: {
        mimeType: 'video/webm; codecs="VP8, vorbis"',
        qualityLabel: "480p",
        bitrate: 1e6,
        audioBitrate: 128,
      },
      45: {
        mimeType: 'video/webm; codecs="VP8, vorbis"',
        qualityLabel: "720p",
        bitrate: 2e6,
        audioBitrate: 192,
      },
      46: {
        mimeType: 'audio/webm; codecs="vp8, vorbis"',
        qualityLabel: "1080p",
        bitrate: null,
        audioBitrate: 192,
      },
      82: {
        mimeType: 'video/mp4; codecs="H.264, aac"',
        qualityLabel: "360p",
        bitrate: 5e5,
        audioBitrate: 96,
      },
      83: {
        mimeType: 'video/mp4; codecs="H.264, aac"',
        qualityLabel: "240p",
        bitrate: 5e5,
        audioBitrate: 96,
      },
      84: {
        mimeType: 'video/mp4; codecs="H.264, aac"',
        qualityLabel: "720p",
        bitrate: 2e6,
        audioBitrate: 192,
      },
      85: {
        mimeType: 'video/mp4; codecs="H.264, aac"',
        qualityLabel: "1080p",
        bitrate: 3e6,
        audioBitrate: 192,
      },
      91: {
        mimeType: 'video/ts; codecs="H.264, aac"',
        qualityLabel: "144p",
        bitrate: 1e5,
        audioBitrate: 48,
      },
      92: {
        mimeType: 'video/ts; codecs="H.264, aac"',
        qualityLabel: "240p",
        bitrate: 15e4,
        audioBitrate: 48,
      },
      93: {
        mimeType: 'video/ts; codecs="H.264, aac"',
        qualityLabel: "360p",
        bitrate: 5e5,
        audioBitrate: 128,
      },
      94: {
        mimeType: 'video/ts; codecs="H.264, aac"',
        qualityLabel: "480p",
        bitrate: 8e5,
        audioBitrate: 128,
      },
      95: {
        mimeType: 'video/ts; codecs="H.264, aac"',
        qualityLabel: "720p",
        bitrate: 15e5,
        audioBitrate: 256,
      },
      96: {
        mimeType: 'video/ts; codecs="H.264, aac"',
        qualityLabel: "1080p",
        bitrate: 25e5,
        audioBitrate: 256,
      },
      100: {
        mimeType: 'audio/webm; codecs="VP8, vorbis"',
        qualityLabel: "360p",
        bitrate: null,
        audioBitrate: 128,
      },
      101: {
        mimeType: 'audio/webm; codecs="VP8, vorbis"',
        qualityLabel: "360p",
        bitrate: null,
        audioBitrate: 192,
      },
      102: {
        mimeType: 'audio/webm; codecs="VP8, vorbis"',
        qualityLabel: "720p",
        bitrate: null,
        audioBitrate: 192,
      },
      120: {
        mimeType: 'video/flv; codecs="H.264, aac"',
        qualityLabel: "720p",
        bitrate: 2e6,
        audioBitrate: 128,
      },
      127: {
        mimeType: 'audio/ts; codecs="aac"',
        qualityLabel: null,
        bitrate: null,
        audioBitrate: 96,
      },
      128: {
        mimeType: 'audio/ts; codecs="aac"',
        qualityLabel: null,
        bitrate: null,
        audioBitrate: 96,
      },
      132: {
        mimeType: 'video/ts; codecs="H.264, aac"',
        qualityLabel: "240p",
        bitrate: 15e4,
        audioBitrate: 48,
      },
      133: {
        mimeType: 'video/mp4; codecs="H.264"',
        qualityLabel: "240p",
        bitrate: 2e5,
        audioBitrate: null,
      },
      134: {
        mimeType: 'video/mp4; codecs="H.264"',
        qualityLabel: "360p",
        bitrate: 3e5,
        audioBitrate: null,
      },
      135: {
        mimeType: 'video/mp4; codecs="H.264"',
        qualityLabel: "480p",
        bitrate: 5e5,
        audioBitrate: null,
      },
      136: {
        mimeType: 'video/mp4; codecs="H.264"',
        qualityLabel: "720p",
        bitrate: 1e6,
        audioBitrate: null,
      },
      137: {
        mimeType: 'video/mp4; codecs="H.264"',
        qualityLabel: "1080p",
        bitrate: 25e5,
        audioBitrate: null,
      },
      138: {
        mimeType: 'video/mp4; codecs="H.264"',
        qualityLabel: "4320p",
        bitrate: 135e5,
        audioBitrate: null,
      },
      139: {
        mimeType: 'audio/mp4; codecs="aac"',
        qualityLabel: null,
        bitrate: null,
        audioBitrate: 48,
      },
      140: {
        mimeType: 'audio/m4a; codecs="aac"',
        qualityLabel: null,
        bitrate: null,
        audioBitrate: 128,
      },
      141: {
        mimeType: 'audio/mp4; codecs="aac"',
        qualityLabel: null,
        bitrate: null,
        audioBitrate: 256,
      },
      151: {
        mimeType: 'video/ts; codecs="H.264, aac"',
        qualityLabel: "720p",
        bitrate: 5e4,
        audioBitrate: 24,
      },
      160: {
        mimeType: 'video/mp4; codecs="H.264"',
        qualityLabel: "144p",
        bitrate: 1e5,
        audioBitrate: null,
      },
      171: {
        mimeType: 'audio/webm; codecs="vorbis"',
        qualityLabel: null,
        bitrate: null,
        audioBitrate: 128,
      },
      172: {
        mimeType: 'audio/webm; codecs="vorbis"',
        qualityLabel: null,
        bitrate: null,
        audioBitrate: 192,
      },
      242: {
        mimeType: 'video/webm; codecs="VP9"',
        qualityLabel: "240p",
        bitrate: 1e5,
        audioBitrate: null,
      },
      243: {
        mimeType: 'video/webm; codecs="VP9"',
        qualityLabel: "360p",
        bitrate: 25e4,
        audioBitrate: null,
      },
      244: {
        mimeType: 'video/webm; codecs="VP9"',
        qualityLabel: "480p",
        bitrate: 5e5,
        audioBitrate: null,
      },
      247: {
        mimeType: 'video/webm; codecs="VP9"',
        qualityLabel: "720p",
        bitrate: 7e5,
        audioBitrate: null,
      },
      248: {
        mimeType: 'video/webm; codecs="VP9"',
        qualityLabel: "1080p",
        bitrate: 15e5,
        audioBitrate: null,
      },
      249: {
        mimeType: 'audio/webm; codecs="opus"',
        qualityLabel: null,
        bitrate: null,
        audioBitrate: 48,
      },
      250: {
        mimeType: 'audio/webm; codecs="opus"',
        qualityLabel: null,
        bitrate: null,
        audioBitrate: 64,
      },
      251: {
        mimeType: 'audio/webm; codecs="opus"',
        qualityLabel: null,
        bitrate: null,
        audioBitrate: 160,
      },
      264: {
        mimeType: 'video/mp4; codecs="H.264"',
        qualityLabel: "1440p",
        bitrate: 4e6,
        audioBitrate: null,
      },
      266: {
        mimeType: 'video/mp4; codecs="H.264"',
        qualityLabel: "2160p",
        bitrate: 125e5,
        audioBitrate: null,
      },
      271: {
        mimeType: 'video/webm; codecs="VP9"',
        qualityLabel: "1440p",
        bitrate: 9e6,
        audioBitrate: null,
      },
      272: {
        mimeType: 'video/webm; codecs="VP9"',
        qualityLabel: "4320p",
        bitrate: 2e7,
        audioBitrate: null,
      },
      278: {
        mimeType: 'video/webm; codecs="VP9"',
        qualityLabel: "144p 30fps",
        bitrate: 8e4,
        audioBitrate: null,
      },
      298: {
        mimeType: 'video/mp4; codecs="H.264"',
        qualityLabel: "720p",
        bitrate: 3e6,
        audioBitrate: null,
      },
      299: {
        mimeType: 'video/mp4; codecs="H.264"',
        qualityLabel: "1080p",
        bitrate: 55e5,
        audioBitrate: null,
      },
      300: {
        mimeType: 'video/ts; codecs="H.264, aac"',
        qualityLabel: "720p",
        bitrate: 1318e3,
        audioBitrate: 48,
      },
      302: {
        mimeType: 'video/webm; codecs="VP9"',
        qualityLabel: "720p HFR",
        bitrate: 25e5,
        audioBitrate: null,
      },
      303: {
        mimeType: 'video/webm; codecs="VP9"',
        qualityLabel: "1080p HFR",
        bitrate: 5e6,
        audioBitrate: null,
      },
      308: {
        mimeType: 'video/webm; codecs="VP9"',
        qualityLabel: "1440p HFR",
        bitrate: 1e7,
        audioBitrate: null,
      },
      313: {
        mimeType: 'video/webm; codecs="VP9"',
        qualityLabel: "2160p",
        bitrate: 13e6,
        audioBitrate: null,
      },
      315: {
        mimeType: 'video/webm; codecs="VP9"',
        qualityLabel: "2160p HFR",
        bitrate: 2e7,
        audioBitrate: null,
      },
      330: {
        mimeType: 'video/webm; codecs="VP9"',
        qualityLabel: "144p HDR, HFR",
        bitrate: 8e4,
        audioBitrate: null,
      },
      331: {
        mimeType: 'video/webm; codecs="VP9"',
        qualityLabel: "240p HDR, HFR",
        bitrate: 1e5,
        audioBitrate: null,
      },
      332: {
        mimeType: 'video/webm; codecs="VP9"',
        qualityLabel: "360p HDR, HFR",
        bitrate: 25e4,
        audioBitrate: null,
      },
      333: {
        mimeType: 'video/webm; codecs="VP9"',
        qualityLabel: "240p HDR, HFR",
        bitrate: 5e5,
        audioBitrate: null,
      },
      334: {
        mimeType: 'video/webm; codecs="VP9"',
        qualityLabel: "720p HDR, HFR",
        bitrate: 1e6,
        audioBitrate: null,
      },
      335: {
        mimeType: 'video/webm; codecs="VP9"',
        qualityLabel: "1080p HDR, HFR",
        bitrate: 15e5,
        audioBitrate: null,
      },
      336: {
        mimeType: 'video/webm; codecs="VP9"',
        qualityLabel: "1440p HDR, HFR",
        bitrate: 5e6,
        audioBitrate: null,
      },
      337: {
        mimeType: 'video/webm; codecs="VP9"',
        qualityLabel: "2160p HDR, HFR",
        bitrate: 12e6,
        audioBitrate: null,
      },
    };
  },
  function (e, t, n) {
    const r = n(43),
      i = n(53),
      { parseTimestamp: o } = n(66),
      a = "https://www.youtube.com/watch?v=",
      s = { song: { name: "Music", url: "https://music.youtube.com/" } },
      l = (e) => (e ? (e.runs ? e.runs[0].text : e.simpleText) : null);
    t.getMedia = (e) => {
      let t = {},
        n = [];
      try {
        n =
          e.response.contents.twoColumnWatchNextResults.results.results
            .contents;
      } catch (e) {}
      let r = n.find((e) => e.videoSecondaryInfoRenderer);
      if (!r) return {};
      try {
        let e = (
          r.metadataRowContainer ||
          r.videoSecondaryInfoRenderer.metadataRowContainer
        ).metadataRowContainerRenderer.rows;
        for (let n of e)
          if (n.metadataRowRenderer) {
            let e = l(n.metadataRowRenderer.title).toLowerCase(),
              r = n.metadataRowRenderer.contents[0];
            t[e] = l(r);
            let i = r.runs;
            i &&
              i[0].navigationEndpoint &&
              (t[e + "_url"] = new URL(
                i[0].navigationEndpoint.commandMetadata.webCommandMetadata.url,
                a
              ).toString()),
              e in s && ((t.category = s[e].name), (t.category_url = s[e].url));
          } else if (n.richMetadataRowRenderer) {
            let e = n.richMetadataRowRenderer.contents,
              r = e.filter(
                (e) =>
                  "RICH_METADATA_RENDERER_STYLE_BOX_ART" ===
                  e.richMetadataRenderer.style
              );
            for (let { richMetadataRenderer: e } of r) {
              let n = e;
              t.year = l(n.subtitle);
              let r = l(n.callToAction).split(" ")[1];
              (t[r] = l(n.title)),
                (t[r + "_url"] = new URL(
                  n.endpoint.commandMetadata.webCommandMetadata.url,
                  a
                ).toString()),
                (t.thumbnails = n.thumbnail.thumbnails);
            }
            let i = e.filter(
              (e) =>
                "RICH_METADATA_RENDERER_STYLE_TOPIC" ===
                e.richMetadataRenderer.style
            );
            for (let { richMetadataRenderer: e } of i) {
              let n = e;
              (t.category = l(n.title)),
                (t.category_url = new URL(
                  n.endpoint.commandMetadata.webCommandMetadata.url,
                  a
                ).toString());
            }
          }
      } catch (e) {}
      return t;
    };
    const c = (e) =>
      !(!e || !e.find((e) => "Verified" === e.metadataBadgeRenderer.tooltip));
    t.getAuthor = (e) => {
      let t,
        n,
        i = [],
        o = !1;
      try {
        let s =
          e.response.contents.twoColumnWatchNextResults.results.results.contents.find(
            (e) =>
              e.videoSecondaryInfoRenderer &&
              e.videoSecondaryInfoRenderer.owner &&
              e.videoSecondaryInfoRenderer.owner.videoOwnerRenderer
          ).videoSecondaryInfoRenderer.owner.videoOwnerRenderer;
        (t = s.navigationEndpoint.browseEndpoint.browseId),
          (i = s.thumbnail.thumbnails.map(
            (e) => ((e.url = new URL(e.url, a).toString()), e)
          )),
          (n = r.parseAbbreviatedNumber(l(s.subscriberCountText))),
          (o = c(s.badges));
      } catch (e) {}
      try {
        let s =
            e.player_response.microformat &&
            e.player_response.microformat.playerMicroformatRenderer,
          l =
            (s && s.channelId) || t || e.player_response.videoDetails.channelId,
          c = {
            id: l,
            name: s
              ? s.ownerChannelName
              : e.player_response.videoDetails.author,
            user: s ? s.ownerProfileUrl.split("/").slice(-1)[0] : null,
            channel_url: "https://www.youtube.com/channel/" + l,
            external_channel_url: s
              ? "https://www.youtube.com/channel/" + s.externalChannelId
              : "",
            user_url: s ? new URL(s.ownerProfileUrl, a).toString() : "",
            thumbnails: i,
            verified: o,
            subscriber_count: n,
          };
        return (
          i.length &&
            r.deprecate(
              c,
              "avatar",
              c.thumbnails[0].url,
              "author.avatar",
              "author.thumbnails[0].url"
            ),
          c
        );
      } catch (e) {
        return {};
      }
    };
    const u = (e, t) => {
      if (e)
        try {
          let n = l(e.viewCountText),
            i = l(e.shortViewCountText),
            s = t.find((t) => t.id === e.videoId);
          /^\d/.test(i) || (i = (s && s.short_view_count_text) || ""),
            (n = (/^\d/.test(n) ? n : i).split(" ")[0]);
          let u = e.shortBylineText.runs[0].navigationEndpoint.browseEndpoint,
            d = u.browseId,
            h = l(e.shortBylineText),
            p = (u.canonicalBaseUrl || "").split("/").slice(-1)[0],
            f = {
              id: e.videoId,
              title: l(e.title),
              published: l(e.publishedTimeText),
              author: {
                id: d,
                name: h,
                user: p,
                channel_url: "https://www.youtube.com/channel/" + d,
                user_url: "https://www.youtube.com/user/" + p,
                thumbnails: e.channelThumbnail.thumbnails.map(
                  (e) => ((e.url = new URL(e.url, a).toString()), e)
                ),
                verified: c(e.ownerBadges),
                [Symbol.toPrimitive]: () => (
                  console.warn(
                    "`relatedVideo.author` will be removed in a near future release, use `relatedVideo.author.name` instead."
                  ),
                  f.author.name
                ),
              },
              short_view_count_text: i.split(" ")[0],
              view_count: n.replace(/,/g, ""),
              length_seconds: e.lengthText
                ? Math.floor(o(l(e.lengthText)) / 1e3)
                : t && "" + t.length_seconds,
              thumbnails: e.thumbnail.thumbnails,
              richThumbnails: e.richThumbnail
                ? e.richThumbnail.movingThumbnailRenderer.movingThumbnailDetails
                    .thumbnails
                : [],
              isLive: !(
                !e.badges ||
                !e.badges.find(
                  (e) => "LIVE NOW" === e.metadataBadgeRenderer.label
                )
              ),
            };
          return (
            r.deprecate(
              f,
              "author_thumbnail",
              f.author.thumbnails[0].url,
              "relatedVideo.author_thumbnail",
              "relatedVideo.author.thumbnails[0].url"
            ),
            r.deprecate(
              f,
              "ucid",
              f.author.id,
              "relatedVideo.ucid",
              "relatedVideo.author.id"
            ),
            r.deprecate(
              f,
              "video_thumbnail",
              f.thumbnails[0].url,
              "relatedVideo.video_thumbnail",
              "relatedVideo.thumbnails[0].url"
            ),
            f
          );
        } catch (e) {}
    };
    (t.getRelatedVideos = (e) => {
      let t = [],
        n = [];
      try {
        t = e.response.webWatchNextResponseExtensionData.relatedVideoArgs
          .split(",")
          .map((e) => i.parse(e));
      } catch (e) {}
      try {
        n =
          e.response.contents.twoColumnWatchNextResults.secondaryResults
            .secondaryResults.results;
      } catch (e) {
        return [];
      }
      let r = [];
      for (let e of n || []) {
        let n = e.compactVideoRenderer;
        if (n) {
          let e = u(n, t);
          e && r.push(e);
        } else {
          let n = e.compactAutoplayRenderer || e.itemSectionRenderer;
          if (!n || !Array.isArray(n.contents)) continue;
          for (let e of n.contents) {
            let n = u(e.compactVideoRenderer, t);
            n && r.push(n);
          }
        }
      }
      return r;
    }),
      (t.getLikes = (e) => {
        try {
          let t =
            e.response.contents.twoColumnWatchNextResults.results.results.contents
              .find((e) => e.videoPrimaryInfoRenderer)
              .videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons.find(
                (e) =>
                  e.toggleButtonRenderer &&
                  "LIKE" === e.toggleButtonRenderer.defaultIcon.iconType
              );
          return parseInt(
            t.toggleButtonRenderer.defaultText.accessibility.accessibilityData.label.replace(
              /\D+/g,
              ""
            )
          );
        } catch (e) {
          return null;
        }
      }),
      (t.getDislikes = (e) => {
        try {
          let t =
            e.response.contents.twoColumnWatchNextResults.results.results.contents
              .find((e) => e.videoPrimaryInfoRenderer)
              .videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons.find(
                (e) =>
                  e.toggleButtonRenderer &&
                  "DISLIKE" === e.toggleButtonRenderer.defaultIcon.iconType
              );
          return parseInt(
            t.toggleButtonRenderer.defaultText.accessibility.accessibilityData.label.replace(
              /\D+/g,
              ""
            )
          );
        } catch (e) {
          return null;
        }
      }),
      (t.cleanVideoDetails = (e, t) => (
        (e.thumbnails = e.thumbnail.thumbnails),
        delete e.thumbnail,
        r.deprecate(
          e,
          "thumbnail",
          { thumbnails: e.thumbnails },
          "videoDetails.thumbnail.thumbnails",
          "videoDetails.thumbnails"
        ),
        (e.description = e.shortDescription || l(e.description)),
        delete e.shortDescription,
        r.deprecate(
          e,
          "shortDescription",
          e.description,
          "videoDetails.shortDescription",
          "videoDetails.description"
        ),
        (e.lengthSeconds =
          (t.player_response.microformat &&
            t.player_response.microformat.playerMicroformatRenderer
              .lengthSeconds) ||
          t.player_response.videoDetails.lengthSeconds),
        e
      )),
      (t.getStoryboards = (e) => {
        const t =
          e.player_response.storyboards &&
          e.player_response.storyboards.playerStoryboardSpecRenderer &&
          e.player_response.storyboards.playerStoryboardSpecRenderer.spec &&
          e.player_response.storyboards.playerStoryboardSpecRenderer.spec.split(
            "|"
          );
        if (!t) return [];
        const n = new URL(t.shift());
        return t.map((e, t) => {
          let [r, i, o, a, s, l, c, u] = e.split("#");
          n.searchParams.set("sigh", u),
            (o = parseInt(o, 10)),
            (a = parseInt(a, 10)),
            (s = parseInt(s, 10));
          const d = Math.ceil(o / (a * s));
          return {
            templateUrl: n.toString().replace("$L", t).replace("$N", c),
            thumbnailWidth: parseInt(r, 10),
            thumbnailHeight: parseInt(i, 10),
            thumbnailCount: o,
            interval: parseInt(l, 10),
            columns: a,
            rows: s,
            storyboardCount: d,
          };
        });
      }),
      (t.getChapters = (e) => {
        const t =
            e.response &&
            e.response.playerOverlays &&
            e.response.playerOverlays.playerOverlayRenderer,
          n =
            t &&
            t.decoratedPlayerBarRenderer &&
            t.decoratedPlayerBarRenderer.decoratedPlayerBarRenderer &&
            t.decoratedPlayerBarRenderer.decoratedPlayerBarRenderer.playerBar,
          r =
            n &&
            n.multiMarkersPlayerBarRenderer &&
            n.multiMarkersPlayerBarRenderer.markersMap,
          i =
            Array.isArray(r) &&
            r.find((e) => e.value && Array.isArray(e.value.chapters));
        if (!i) return [];
        return i.value.chapters.map((e) => ({
          title: l(e.chapterRenderer.title),
          start_time: e.chapterRenderer.timeRangeStartMillis / 1e3,
        }));
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    const r = n(32);
    class i extends r.Writable {
      constructor() {
        super(),
          (this._lastLine = ""),
          (this._seq = 0),
          (this._nextItemDuration = null),
          (this._nextItemRange = null),
          (this._lastItemRangeEnd = 0),
          this.on("finish", () => {
            this._parseLine(this._lastLine), this.emit("end");
          });
      }
      _parseAttrList(e) {
        let t,
          n = {},
          r = /([A-Z0-9-]+)=(?:"([^"]*?)"|([^,]*?))/g;
        for (; null !== (t = r.exec(e)); ) n[t[1]] = t[2] || t[3];
        return n;
      }
      _parseRange(e) {
        if (!e) return null;
        let t = e.split("@"),
          n = t[1] ? parseInt(t[1]) : this._lastItemRangeEnd + 1,
          r = { start: n, end: n + parseInt(t[0]) - 1 };
        return (this._lastItemRangeEnd = r.end), r;
      }
      _parseLine(e) {
        let t = e.match(/^#(EXT[A-Z0-9-]+)(?::(.*))?/);
        if (t) {
          const e = t[1],
            n = t[2] || "";
          switch (e) {
            case "EXT-X-PROGRAM-DATE-TIME":
              this.emit("starttime", new Date(n).getTime());
              break;
            case "EXT-X-MEDIA-SEQUENCE":
              this._seq = parseInt(n);
              break;
            case "EXT-X-MAP": {
              let e = this._parseAttrList(n);
              if (!e.URI)
                return void this.destroy(
                  new Error(
                    "`EXT-X-MAP` found without required attribute `URI`"
                  )
                );
              this.emit("item", {
                url: e.URI,
                seq: this._seq,
                init: !0,
                duration: 0,
                range: this._parseRange(e.BYTERANGE),
              });
              break;
            }
            case "EXT-X-BYTERANGE":
              this._nextItemRange = this._parseRange(n);
              break;
            case "EXTINF":
              this._nextItemDuration = Math.round(
                1e3 * parseFloat(n.split(",")[0])
              );
              break;
            case "EXT-X-ENDLIST":
              this.emit("endlist");
          }
        } else
          !/^#/.test(e) &&
            e.trim() &&
            (this.emit("item", {
              url: e.trim(),
              seq: this._seq++,
              duration: this._nextItemDuration,
              range: this._nextItemRange,
            }),
            (this._nextItemRange = null));
      }
      _write(e, t, n) {
        let r = e.toString("utf8").split("\n");
        this._lastLine && (r[0] = this._lastLine + r[0]),
          r.forEach((e, t) => {
            this.destroyed ||
              (t < r.length - 1 ? this._parseLine(e) : (this._lastLine = e));
          }),
          n();
      }
    }
    t.default = i;
  },
  function (e, t, n) {
    "use strict";
    var r =
      (this && this.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e };
      };
    Object.defineProperty(t, "__esModule", { value: !0 });
    const i = n(32),
      o = r(n(83)),
      a = n(91);
    class s extends i.Writable {
      constructor(e) {
        let t;
        super(),
          (this._parser = o.default.createStream(!1, { lowercase: !0 })),
          this._parser.on("error", this.destroy.bind(this));
        let n,
          r,
          i,
          s,
          l,
          c,
          u,
          d,
          h = 0,
          p = 0,
          f = [],
          m = !1,
          g = !1;
        const v = (t) => {
          const n = { RepresentationID: e, Number: p, Time: h };
          return t.replace(/\$(\w+)\$/g, (e, t) => "" + n[t]);
        };
        this._parser.on("opentag", (o) => {
          switch (o.name) {
            case "mpd":
              (h = o.attributes.availabilitystarttime
                ? new Date(o.attributes.availabilitystarttime).getTime()
                : 0),
                (c = "dynamic" !== o.attributes.type);
              break;
            case "period":
              (p = 0),
                (r = 1e3),
                (s = 0),
                (i = 0),
                (l = []),
                (u = 0),
                (d = a.durationStr(o.attributes.start) || 0);
              break;
            case "segmentlist":
              (p = parseInt(o.attributes.startnumber) || p),
                (r = parseInt(o.attributes.timescale) || r),
                (s = parseInt(o.attributes.duration) || s),
                (i = parseInt(o.attributes.presentationtimeoffset) || i);
              break;
            case "segmenttemplate":
              (n = o.attributes),
                (p = parseInt(o.attributes.startnumber) || p),
                (r = parseInt(o.attributes.timescale) || r);
              break;
            case "segmenttimeline":
            case "baseurl":
              t = o.name;
              break;
            case "s":
              f.push({
                duration: parseInt(o.attributes.d),
                repeat: parseInt(o.attributes.r),
                time: parseInt(o.attributes.t),
              });
              break;
            case "adaptationset":
            case "representation":
              u++,
                e || (e = o.attributes.id),
                (m = o.attributes.id === "" + e),
                m &&
                  (d && (h += d),
                  i && (h -= (i / r) * 1e3),
                  this.emit("starttime", h));
              break;
            case "initialization":
              m &&
                this.emit("item", {
                  url: l.filter((e) => !!e).join("") + o.attributes.sourceurl,
                  seq: p,
                  init: !0,
                  duration: 0,
                });
              break;
            case "segmenturl":
              if (m) {
                g = !0;
                let e = f.shift(),
                  t = (((null == e ? void 0 : e.duration) || s) / r) * 1e3;
                this.emit("item", {
                  url: l.filter((e) => !!e).join("") + o.attributes.media,
                  seq: p++,
                  duration: t,
                }),
                  (h += t);
              }
          }
        });
        const b = () => {
          c && this.emit("endlist"),
            m
              ? this.emit("end")
              : this.destroy(Error(`Representation '${e}' not found`));
        };
        this._parser.on("closetag", (e) => {
          switch (e) {
            case "adaptationset":
            case "representation":
              if ((u--, n && f.length)) {
                (g = !0),
                  n.initialization &&
                    this.emit("item", {
                      url: l.filter((e) => !!e).join("") + v(n.initialization),
                      seq: p,
                      init: !0,
                      duration: 0,
                    });
                for (let { duration: e, repeat: t, time: i } of f) {
                  (e = (e / r) * 1e3), (t = t || 1), (h = i || h);
                  for (let r = 0; r < t; r++)
                    this.emit("item", {
                      url: l.filter((e) => !!e).join("") + v(n.media),
                      seq: p++,
                      duration: e,
                    }),
                      (h += e);
                }
              }
              g &&
                (this.emit("endearly"),
                b(),
                this._parser.removeAllListeners(),
                this.removeAllListeners("finish"));
          }
        }),
          this._parser.on("text", (e) => {
            "baseurl" === t && ((l[u] = e), (t = null));
          }),
          this.on("finish", b);
      }
      _write(e, t, n) {
        this._parser.write(e), n();
      }
    }
    t.default = s;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.Queue = void 0);
    t.Queue = class {
      constructor(e, t = {}) {
        (this._worker = e),
          (this._concurrency = t.concurrency || 1),
          (this.tasks = []),
          (this.total = 0),
          (this.active = 0);
      }
      push(e, t) {
        this.tasks.push({ item: e, callback: t }), this.total++, this._next();
      }
      _next() {
        if (this.active >= this._concurrency || !this.tasks.length) return;
        const { item: e, callback: t } = this.tasks.shift();
        let n = !1;
        this.active++,
          this._worker(e, (e, r) => {
            n || (this.active--, (n = !0), null == t || t(e, r), this._next());
          });
      }
      die() {
        this.tasks = [];
      }
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(2),
      i = n(6),
      o = n(4);
    const a = 640,
      s = 480;
    const l = new (class {
      constructor() {
        chrome.tabs.onAttached.addListener((e, t) => {
          t.isFromPanel &&
            (r.a.log("Pip", r.a.PIP_RESTORE_CLICK),
            chrome.tabs.sendMessage(e, { type: "restore_tab" }));
        }),
          (this.requestActions = {
            detachTab: this.detachTab.bind(this),
            pipUrl: this.pipUrl.bind(this),
            restorePanelToTab: this.restorePanelToTab.bind(this),
          });
      }
      processRequest(e) {
        const t = e.method;
        if (t && this.requestActions[t])
          return this.requestActions[t].apply(this, arguments);
      }
      detachTab(e, t) {
        var n, a;
        const s = e.params,
          l = e.params.url
            ? e.params.url
            : null === (n = t.tab) || void 0 === n
            ? void 0
            : n.url,
          c = null === (a = t.tab) || void 0 === a ? void 0 : a.id;
        chrome.windows.create(this.getWindowOptions(s, l, c), () => {
          r.a.log("Pip", r.a.PIP_DETACH_CLICK);
          const e = Object(o.b)(l);
          if ((r.a.log("RefrPin", e), i.a.CUSTOM_METRICS_JSON)) {
            const e = { timestamp_ms: Date.now(), page_url: l };
            r.a.log("recordCustomData", [
              { key: "savior_pip_action", value: JSON.stringify(e) },
            ]);
          }
        });
      }
      pipUrl(e) {
        const t = e.params;
        var n;
        ((n = t.url),
        new Promise((e) => {
          chrome.windows.getAll({ populate: !0 }, (t) => {
            for (let r = 0; r < t.length; r++) {
              const i = t[r];
              if (
                "panel" === i.type &&
                0 !== (i.tabs || []).length &&
                (i.tabs || [])[0].url === n
              )
                return void e(!0);
            }
            e(!1);
          });
        })).then((e) => {
          if (e) return;
          const n = t.height ? t.height + 36 : s + 36,
            o = { type: "panel", width: t.width || a, height: n, url: t.url };
          t.isAds && i.a.IS_ADS_PIP_PARAMS && (o.isAds = !0),
            "Coc Coc" === navigator.vendor && (o.proportional = !0),
            chrome.windows.create(o, () => {
              r.a.log("Pip", r.a.PIP_SITE_LINK_CLICK);
            });
        });
      }
      restorePanelToTab(e, t) {
        var n;
        const r = (null === (n = t.tab) || void 0 === n ? void 0 : n.id) || 0;
        try {
          chrome.tabs.move(r, { index: -1, restoreFromPanel: !0 });
        } catch (e) {}
      }
      getWindowOptions(e, t, n) {
        const r = {
          width: e.width,
          height: (e.height || 0) + 36,
          type: "panel",
          url: t,
        };
        return (
          e.incognito && (r.incognito = !0),
          "Coc Coc" === navigator.vendor &&
            ((r.proportional = !0),
            (r.moveTabToPanel = !0),
            (r.forceAlwaysOnTop = !0),
            (r.tabId = n)),
          r
        );
      }
    })();
    EE.on("pipRequest", (e) => {
      l.processRequest(e);
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(65).Buffer,
      i = n(292).Transform;
    function o(e) {
      i.call(this),
        (this._block = r.allocUnsafe(e)),
        (this._blockSize = e),
        (this._blockOffset = 0),
        (this._length = [0, 0, 0, 0]),
        (this._finalized = !1);
    }
    n(17)(o, i),
      (o.prototype._transform = function (e, t, n) {
        var r = null;
        try {
          this.update(e, t);
        } catch (e) {
          r = e;
        }
        n(r);
      }),
      (o.prototype._flush = function (e) {
        var t = null;
        try {
          this.push(this.digest());
        } catch (e) {
          t = e;
        }
        e(t);
      }),
      (o.prototype.update = function (e, t) {
        if (
          ((function (e, t) {
            if (!r.isBuffer(e) && "string" != typeof e)
              throw new TypeError(t + " must be a string or a buffer");
          })(e, "Data"),
          this._finalized)
        )
          throw new Error("Digest already called");
        r.isBuffer(e) || (e = r.from(e, t));
        for (
          var n = this._block, i = 0;
          this._blockOffset + e.length - i >= this._blockSize;

        ) {
          for (var o = this._blockOffset; o < this._blockSize; )
            n[o++] = e[i++];
          this._update(), (this._blockOffset = 0);
        }
        for (; i < e.length; ) n[this._blockOffset++] = e[i++];
        for (var a = 0, s = 8 * e.length; s > 0; ++a)
          (this._length[a] += s),
            (s = (this._length[a] / 4294967296) | 0) > 0 &&
              (this._length[a] -= 4294967296 * s);
        return this;
      }),
      (o.prototype._update = function () {
        throw new Error("_update is not implemented");
      }),
      (o.prototype.digest = function (e) {
        if (this._finalized) throw new Error("Digest already called");
        this._finalized = !0;
        var t = this._digest();
        void 0 !== e && (t = t.toString(e)),
          this._block.fill(0),
          (this._blockOffset = 0);
        for (var n = 0; n < 4; ++n) this._length[n] = 0;
        return t;
      }),
      (o.prototype._digest = function () {
        throw new Error("_digest is not implemented");
      }),
      (e.exports = o);
  },
  function (e, t, n) {
    ((t = e.exports = n(94)).Stream = t),
      (t.Readable = t),
      (t.Writable = n(98)),
      (t.Duplex = n(34)),
      (t.Transform = n(99)),
      (t.PassThrough = n(298)),
      (t.finished = n(67)),
      (t.pipeline = n(299));
  },
  function (e, t) {},
  function (e, t, n) {
    "use strict";
    function r(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function i(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var a = n(18).Buffer,
      s = n(295).inspect,
      l = (s && s.custom) || "inspect";
    e.exports = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.head = null),
          (this.tail = null),
          (this.length = 0);
      }
      var t, n, c;
      return (
        (t = e),
        (n = [
          {
            key: "push",
            value: function (e) {
              var t = { data: e, next: null };
              this.length > 0 ? (this.tail.next = t) : (this.head = t),
                (this.tail = t),
                ++this.length;
            },
          },
          {
            key: "unshift",
            value: function (e) {
              var t = { data: e, next: this.head };
              0 === this.length && (this.tail = t),
                (this.head = t),
                ++this.length;
            },
          },
          {
            key: "shift",
            value: function () {
              if (0 !== this.length) {
                var e = this.head.data;
                return (
                  1 === this.length
                    ? (this.head = this.tail = null)
                    : (this.head = this.head.next),
                  --this.length,
                  e
                );
              }
            },
          },
          {
            key: "clear",
            value: function () {
              (this.head = this.tail = null), (this.length = 0);
            },
          },
          {
            key: "join",
            value: function (e) {
              if (0 === this.length) return "";
              for (var t = this.head, n = "" + t.data; (t = t.next); )
                n += e + t.data;
              return n;
            },
          },
          {
            key: "concat",
            value: function (e) {
              if (0 === this.length) return a.alloc(0);
              for (
                var t, n, r, i = a.allocUnsafe(e >>> 0), o = this.head, s = 0;
                o;

              )
                (t = o.data),
                  (n = i),
                  (r = s),
                  a.prototype.copy.call(t, n, r),
                  (s += o.data.length),
                  (o = o.next);
              return i;
            },
          },
          {
            key: "consume",
            value: function (e, t) {
              var n;
              return (
                e < this.head.data.length
                  ? ((n = this.head.data.slice(0, e)),
                    (this.head.data = this.head.data.slice(e)))
                  : (n =
                      e === this.head.data.length
                        ? this.shift()
                        : t
                        ? this._getString(e)
                        : this._getBuffer(e)),
                n
              );
            },
          },
          {
            key: "first",
            value: function () {
              return this.head.data;
            },
          },
          {
            key: "_getString",
            value: function (e) {
              var t = this.head,
                n = 1,
                r = t.data;
              for (e -= r.length; (t = t.next); ) {
                var i = t.data,
                  o = e > i.length ? i.length : e;
                if (
                  (o === i.length ? (r += i) : (r += i.slice(0, e)),
                  0 == (e -= o))
                ) {
                  o === i.length
                    ? (++n,
                      t.next
                        ? (this.head = t.next)
                        : (this.head = this.tail = null))
                    : ((this.head = t), (t.data = i.slice(o)));
                  break;
                }
                ++n;
              }
              return (this.length -= n), r;
            },
          },
          {
            key: "_getBuffer",
            value: function (e) {
              var t = a.allocUnsafe(e),
                n = this.head,
                r = 1;
              for (n.data.copy(t), e -= n.data.length; (n = n.next); ) {
                var i = n.data,
                  o = e > i.length ? i.length : e;
                if ((i.copy(t, t.length - e, 0, o), 0 == (e -= o))) {
                  o === i.length
                    ? (++r,
                      n.next
                        ? (this.head = n.next)
                        : (this.head = this.tail = null))
                    : ((this.head = n), (n.data = i.slice(o)));
                  break;
                }
                ++r;
              }
              return (this.length -= r), t;
            },
          },
          {
            key: l,
            value: function (e, t) {
              return s(
                this,
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? r(Object(n), !0).forEach(function (t) {
                          i(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(n)
                        )
                      : r(Object(n)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(n, t)
                          );
                        });
                  }
                  return e;
                })({}, t, { depth: 0, customInspect: !1 })
              );
            },
          },
        ]) && o(t.prototype, n),
        c && o(t, c),
        e
      );
    })();
  },
  function (e, t) {},
  function (e, t, n) {
    "use strict";
    (function (t) {
      var r;
      function i(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var o = n(67),
        a = Symbol("lastResolve"),
        s = Symbol("lastReject"),
        l = Symbol("error"),
        c = Symbol("ended"),
        u = Symbol("lastPromise"),
        d = Symbol("handlePromise"),
        h = Symbol("stream");
      function p(e, t) {
        return { value: e, done: t };
      }
      function f(e) {
        var t = e[a];
        if (null !== t) {
          var n = e[h].read();
          null !== n &&
            ((e[u] = null), (e[a] = null), (e[s] = null), t(p(n, !1)));
        }
      }
      function m(e) {
        t.nextTick(f, e);
      }
      var g = Object.getPrototypeOf(function () {}),
        v = Object.setPrototypeOf(
          (i(
            (r = {
              get stream() {
                return this[h];
              },
              next: function () {
                var e = this,
                  n = this[l];
                if (null !== n) return Promise.reject(n);
                if (this[c]) return Promise.resolve(p(void 0, !0));
                if (this[h].destroyed)
                  return new Promise(function (n, r) {
                    t.nextTick(function () {
                      e[l] ? r(e[l]) : n(p(void 0, !0));
                    });
                  });
                var r,
                  i = this[u];
                if (i)
                  r = new Promise(
                    (function (e, t) {
                      return function (n, r) {
                        e.then(function () {
                          t[c] ? n(p(void 0, !0)) : t[d](n, r);
                        }, r);
                      };
                    })(i, this)
                  );
                else {
                  var o = this[h].read();
                  if (null !== o) return Promise.resolve(p(o, !1));
                  r = new Promise(this[d]);
                }
                return (this[u] = r), r;
              },
            }),
            Symbol.asyncIterator,
            function () {
              return this;
            }
          ),
          i(r, "return", function () {
            var e = this;
            return new Promise(function (t, n) {
              e[h].destroy(null, function (e) {
                e ? n(e) : t(p(void 0, !0));
              });
            });
          }),
          r),
          g
        );
      e.exports = function (e) {
        var t,
          n = Object.create(
            v,
            (i((t = {}), h, { value: e, writable: !0 }),
            i(t, a, { value: null, writable: !0 }),
            i(t, s, { value: null, writable: !0 }),
            i(t, l, { value: null, writable: !0 }),
            i(t, c, { value: e._readableState.endEmitted, writable: !0 }),
            i(t, d, {
              value: function (e, t) {
                var r = n[h].read();
                r
                  ? ((n[u] = null), (n[a] = null), (n[s] = null), e(p(r, !1)))
                  : ((n[a] = e), (n[s] = t));
              },
              writable: !0,
            }),
            t)
          );
        return (
          (n[u] = null),
          o(e, function (e) {
            if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
              var t = n[s];
              return (
                null !== t &&
                  ((n[u] = null), (n[a] = null), (n[s] = null), t(e)),
                void (n[l] = e)
              );
            }
            var r = n[a];
            null !== r &&
              ((n[u] = null), (n[a] = null), (n[s] = null), r(p(void 0, !0))),
              (n[c] = !0);
          }),
          e.on("readable", m.bind(null, n)),
          n
        );
      };
    }).call(this, n(15));
  },
  function (e, t) {
    e.exports = function () {
      throw new Error("Readable.from is not available in the browser");
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = i;
    var r = n(99);
    function i(e) {
      if (!(this instanceof i)) return new i(e);
      r.call(this, e);
    }
    n(17)(i, r),
      (i.prototype._transform = function (e, t, n) {
        n(null, e);
      });
  },
  function (e, t, n) {
    "use strict";
    var r;
    var i = n(33).codes,
      o = i.ERR_MISSING_ARGS,
      a = i.ERR_STREAM_DESTROYED;
    function s(e) {
      if (e) throw e;
    }
    function l(e, t, i, o) {
      o = (function (e) {
        var t = !1;
        return function () {
          t || ((t = !0), e.apply(void 0, arguments));
        };
      })(o);
      var s = !1;
      e.on("close", function () {
        s = !0;
      }),
        void 0 === r && (r = n(67)),
        r(e, { readable: t, writable: i }, function (e) {
          if (e) return o(e);
          (s = !0), o();
        });
      var l = !1;
      return function (t) {
        if (!s && !l)
          return (
            (l = !0),
            (function (e) {
              return e.setHeader && "function" == typeof e.abort;
            })(e)
              ? e.abort()
              : "function" == typeof e.destroy
              ? e.destroy()
              : void o(t || new a("pipe"))
          );
      };
    }
    function c(e) {
      e();
    }
    function u(e, t) {
      return e.pipe(t);
    }
    function d(e) {
      return e.length
        ? "function" != typeof e[e.length - 1]
          ? s
          : e.pop()
        : s;
    }
    e.exports = function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      var r,
        i = d(t);
      if ((Array.isArray(t[0]) && (t = t[0]), t.length < 2))
        throw new o("streams");
      var a = t.map(function (e, n) {
        var o = n < t.length - 1;
        return l(e, o, n > 0, function (e) {
          r || (r = e), e && a.forEach(c), o || (a.forEach(c), i(r));
        });
      });
      return t.reduce(u);
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    var r = n(0),
      i = n(4),
      o = n(6),
      a = n(14),
      s = n(3),
      l = n(1);
    const c = new (class {
        constructor() {
          (this._cache = new Map()),
            (this._timeCache = new Map()),
            this.setListener();
        }
        report(e, t, n) {
          const r = (this._cache.has(e) && this._cache.get(e)) || [];
          r.push({ name: t, result: n }),
            this._cache.set(e, r),
            this.autoClean(e, t, n),
            EE.emit("request.matched", {
              tabId: e,
              data: { type: "request.matched", name: t, result: n },
            });
        }
        fbSetTime(e, t) {
          this._timeCache.set(e, t);
        }
        removeTask(e, t, n) {
          let r = this._cache.get(e);
          r &&
            r.length &&
            ((r = r.filter((e) => e.name !== t && e.result !== n)),
            0 !== r.length ? this._cache.set(e, r) : this._cache.delete(e));
        }
        autoClean(e, t, n) {
          setTimeout(() => {
            this.removeTask(e, t, n);
          }, 15e3);
        }
        setListener() {
          EE.on("request_cache.get_matched_requests", (e) => {
            var t;
            if (e.id) {
              const n =
                null === (t = this._cache.get(e.id)) || void 0 === t
                  ? void 0
                  : t.map((e) => e.result);
              EE.emit("request_cache.return_matched_requests", {
                id: e.id,
                tasks: n,
              }),
                this._cache.delete(e.id);
            }
          }),
            EE.on("request_cache.get_server_time", (e) => {
              if (e.id) {
                const t = this._timeCache.get(e.id);
                EE.emit("request_cache.return_server_time", {
                  id: e.id,
                  msgId: e.msgId,
                  serverTime: t,
                });
              }
            }),
            chrome.tabs.onRemoved.addListener((e) => {
              this._cache.delete(e);
            }),
            chrome.tabs.onUpdated.addListener((e, t) => {
              "loading" === t.status && this._cache.delete(e);
            });
        }
      })(),
      u = [
        "unicornmedia.com",
        "plist.vn-hd.com",
        "content-aaps1.uplynk.com",
        "playlist-free.vieon.vn",
      ];
    class d {
      constructor() {
        this.name = "default";
      }
      match(e, t, n) {
        var i;
        if (
          ((e) => a.a.check(e.url, "requests") || a.a.check(e.url))(t) &&
          !(
            (e.initiator &&
              e.initiator.includes("//vuighe.net") &&
              t.url.match(/playlist[\s\S]*\.m3u8/g)) ||
            ((null === (i = e.initiator) || void 0 === i
              ? void 0
              : i.match(/tvzingvn\.net|play\.play[\s\S]*(xyz|net)/g)) &&
              t.url.includes(".m3u8")) ||
            Object(r.isSpecialUrls)(t.url)
          )
        )
          return;
        if (e.url.match(/https:\/[\s\S]*phim18hd\.net\/link\/[\s\S]*\.m3u/g))
          return;
        let o = t;
        if (
          (u.some((e) => {
            var t;
            return null === (t = o.host) || void 0 === t
              ? void 0
              : t.includes(e);
          }) &&
          (Object(l.g)(o.ext) || "mpd" == o.ext)
            ? (o.type = "video")
            : (o = Object(r.detectMediaTypeAndExt)(o, n["content-type"])),
          (!Object(r.isValidData)(o) ||
            (function (e, t) {
              var n, r;
              if (
                null === (n = e.host) || void 0 === n
                  ? void 0
                  : n.includes("vlive-hls.akamaized.net")
              )
                return !0;
              if ("flv" !== e.ext && "musicmd1.keeng.net" !== e.host) return !1;
              if (
                null === (r = e.host) || void 0 === r
                  ? void 0
                  : r.includes("flv.nimo.tv")
              )
                return !0;
              const i = t.server;
              return i && -1 !== i.indexOf("icecast");
            })(o, n)) &&
            !Object(r.isSpecialUrls)(o.url))
        )
          return;
        const c = this._removeByteRequestFromUrl(e.url);
        (o.url = c.url),
          (302 === e.statusCode ||
            (function (e, t, n) {
              if (!t || Object(l.g)(e.ext) || Object(r.isSpecialUrls)(e.url))
                return !0;
              if ("vhosting.vcmedia.vn" === e.host) return !0;
              let i = +t;
              if (
                (Number.isNaN(i) && (i = null),
                "m3u8" === e.ext || (e.exts && e.exts.includes("m3u8")))
              )
                return !0;
              const o = s.a.get("min_stream_size");
              if (null !== i && i < o && !n && "mpd" != e.ext) return !1;
              if (n && n.match(/^bytes\s[1-9]\d+-\d+\/\d+/g)) {
                const t = n.split("/");
                if (t && t.length)
                  return (e.size = parseInt(t.pop() || "")), !0;
              }
              return (e.size = i || void 0), !0;
            })(o, n["content-length"], n["content-range"])) &&
            (c.hasChanged && delete o.size,
            302 === e.statusCode &&
              e.redirectUrl &&
              (o.altUrl = this._removeByteRequestFromUrl(e.redirectUrl)),
            this._reportNewMedia(e, o));
      }
      _reportNewMedia(e, t) {
        const n = this,
          r = e.tabId || -1;
        function o(e) {
          const o = Object(i.d)(e);
          (o.protocol && !o.protocol.match(/^http|^ftp/)) ||
            ("coccoc.com" === o.host && "/webhp" === o.pathname) ||
            ((t.referrer = e),
            (function (e, t, n) {
              c.report(e, t, n);
            })(r, n.name, t));
        }
        -1 === e.parentFrameId ||
        (e.initiator && e.initiator.match(/zingmp3\.vn|www\.twitch\.tv/))
          ? chrome.tabs.get(r, (e) => {
              e ? o(e.url || "") : console.log(chrome.runtime.lastError);
            })
          : chrome.webNavigation.getAllFrames({ tabId: r }, (t) => {
              if (!t) return;
              const n = t.filter((t) => {
                if (t.frameId === e.frameId && "about:blank" !== t.url)
                  return (t.url = e.url), !0;
              })[0];
              n && o(n.url);
            });
      }
      _removeByteRequestFromUrl(e) {
        let t = !1;
        if (e.match(/(googlevideo\.com)|(mycdn\.me)/g)) {
          e !==
            (e = e
              .replace(/[&?]begin=\d+/g, "")
              .replace(/&bytes=\d+-\d+/g, "")
              .replace(/&range=\d+-\d+/g, "")
              .replace(/&rn=\d+/g, "")
              .replace(/&rbuf=\d+/g, "")) && (t = !0);
        }
        return { url: e, hasChanged: t };
      }
    }
    new (class {
      constructor() {
        (this._listener = new d()), this._init();
      }
      _init() {
        const e = this._onResponseStarted.bind(this),
          t = [
            "xmlhttprequest",
            "object",
            "other",
            "script",
            "image",
            "sub_frame",
          ];
        o.a.MEDIA_WEB_REQUEST && t.push("media");
        const n = { urls: ["*://*/*"], types: t },
          r = ["requestHeaders"];
        o.a.WEB_REQUEST_EXTRA_HEADERS && r.push("extraHeaders"),
          chrome.webRequest.onBeforeRequest.addListener(
            this._onBeforeRequest.bind(this),
            n,
            ["requestBody"]
          ),
          chrome.webRequest.onBeforeRedirect.addListener(e, n, [
            "responseHeaders",
            "extraHeaders",
          ]),
          chrome.webRequest.onResponseStarted.addListener(e, n, [
            "responseHeaders",
            "extraHeaders",
          ]);
      }
      _onBeforeRequest(e) {
        var t, n, r, o, a;
        if (
          e.url.includes("https://v.douyu.com/api/stream/getStreamUrl") &&
          "https://v.douyu.com" === e.initiator
        ) {
          const a = Object(i.d)(e.url);
          this._listener.match(
            e,
            Object.assign(Object.assign({}, a), {
              url: a.url,
              ext: "m3u8",
              exts: ["m3u8"],
              params:
                null === (t = e.requestBody) || void 0 === t
                  ? void 0
                  : t.formData,
              requestMethod: e.method,
              identifier:
                null ===
                  (o =
                    null ===
                      (r =
                        null === (n = e.requestBody) || void 0 === n
                          ? void 0
                          : n.formData) || void 0 === r
                      ? void 0
                      : r.vid) || void 0 === o
                  ? void 0
                  : o[0],
            }),
            {}
          );
        }
        if (
          e.url.includes(
            "https://api-iframe-post.playsex3x.xyz/api/playiframe"
          ) &&
          "https://play.playsex3x.xyz" === e.initiator
        ) {
          const t = Object(i.d)(e.url);
          this._listener.match(
            e,
            Object.assign(Object.assign({}, t), {
              url: t.url,
              ext: "m3u8",
              exts: ["m3u8"],
              params:
                null === (a = e.requestBody) || void 0 === a
                  ? void 0
                  : a.formData,
              requestMethod: e.method,
              identifier: e.requestId,
            }),
            {}
          );
        }
        if (
          e.initiator &&
          e.initiator.includes("bschool.vn") &&
          /\.mp4.+?\.ts\?nimblesessionid=/.test(e.url)
        ) {
          const t = {};
          chrome.tabs.get(e.tabId, (n) => {
            (t["" + n.url] = e.url.split("?")[1]), chrome.storage.local.set(t);
          });
        }
      }
      _onResponseStarted(e) {
        if (e.tabId < 0 || e.statusCode > 399) return;
        const t = this._parseHeaders(e.responseHeaders || []);
        e.url.includes("graphql") &&
          c.fbSetTime(e.tabId, Date.parse(t.date || ""));
        const n = Object(i.d)(e.url);
        this._listener.match(e, n, t);
      }
      _parseHeaders(e) {
        const t = {};
        return e.length
          ? (e.forEach((e) => {
              var n;
              t[e.name.toLowerCase()] =
                null === (n = e.value) || void 0 === n
                  ? void 0
                  : n.toLowerCase();
            }),
            t)
          : {};
      }
    })();
  },
]);
