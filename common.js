!(function (t) {
  var e = {};
  function n(i) {
    if (e[i]) return e[i].exports;
    var r = (e[i] = { i: i, l: !1, exports: {} });
    return t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, i) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          n.d(
            i,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return i;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = "./"),
    n((n.s = 302));
})({
  0: function (t, e, n) {
    "use strict";
    n.r(e),
      function (t) {
        n.d(e, "query", function () {
          return u;
        }),
          n.d(e, "queryAll", function () {
            return s;
          }),
          n.d(e, "findParent", function () {
            return l;
          }),
          n.d(e, "nearestParent", function () {
            return c;
          }),
          n.d(e, "getNodePropOrEmptyString", function () {
            return d;
          }),
          n.d(e, "stripTagsExcept", function () {
            return p;
          }),
          n.d(e, "toArray", function () {
            return f;
          }),
          n.d(e, "unique", function () {
            return h;
          }),
          n.d(e, "isMatches", function () {
            return m;
          }),
          n.d(e, "getYoutubeInfo", function () {
            return _;
          }),
          n.d(e, "getYoutubeDashMPDInfo", function () {
            return g;
          }),
          n.d(e, "send", function () {
            return O;
          }),
          n.d(e, "get", function () {
            return v;
          }),
          n.d(e, "_getSize", function () {
            return E;
          }),
          n.d(e, "getSize", function () {
            return y;
          }),
          n.d(e, "logDownloadError", function () {
            return T;
          }),
          n.d(e, "beautifyFileSize", function () {
            return C;
          }),
          n.d(e, "detectMediaTypeAndExt", function () {
            return b;
          }),
          n.d(e, "getMediaType", function () {
            return w;
          }),
          n.d(e, "getProp", function () {
            return S;
          }),
          n.d(e, "call", function () {
            return A;
          }),
          n.d(e, "defined", function () {
            return P;
          }),
          n.d(e, "debounce", function () {
            return I;
          }),
          n.d(e, "flatten", function () {
            return D;
          }),
          n.d(e, "generateId", function () {
            return k;
          }),
          n.d(e, "sendMessage", function () {
            return R;
          }),
          n.d(e, "isSpecialUrls", function () {
            return M;
          }),
          n.d(e, "getFilenameFromTitleOfDownload", function () {
            return U;
          }),
          n.d(e, "getVideoId", function () {
            return H;
          }),
          n.d(e, "isValidData", function () {
            return B;
          }),
          n.d(e, "getBestFitResolution", function () {
            return V;
          }),
          n.d(e, "createMP3Resources", function () {
            return W;
          }),
          n.d(e, "splitMediaByTitle", function () {
            return q;
          }),
          n.d(e, "i18n", function () {
            return K;
          }),
          n.d(e, "isSameMedia", function () {
            return j;
          }),
          n.d(e, "isTikTok", function () {
            return G;
          }),
          n.d(e, "cleanSymbols", function () {
            return Y;
          }),
          n.d(e, "fetchWithTimeout", function () {
            return X;
          }),
          n.d(e, "sleep", function () {
            return z;
          }),
          n.d(e, "beDefinedOr", function () {
            return F;
          });
        var i = n(1),
          r = n(6),
          o = n(2),
          a = function (t, e, n, i) {
            return new (n || (n = Promise))(function (r, o) {
              function a(t) {
                try {
                  s(i.next(t));
                } catch (t) {
                  o(t);
                }
              }
              function u(t) {
                try {
                  s(i.throw(t));
                } catch (t) {
                  o(t);
                }
              }
              function s(t) {
                var e;
                t.done
                  ? r(t.value)
                  : ((e = t.value),
                    e instanceof n
                      ? e
                      : new n(function (t) {
                          t(e);
                        })).then(a, u);
              }
              s((i = i.apply(t, e || [])).next());
            });
          };
        function u(t, e) {
          return (e = e || document).querySelector(t);
        }
        function s(t, e) {
          var n, i;
          return f(
            null !==
              (i =
                null === (n = (e = e || document).querySelectorAll) ||
                void 0 === n
                  ? void 0
                  : n.call(e, t)) && void 0 !== i
              ? i
              : []
          );
        }
        function l(t, e) {
          for (; null !== t && t.classList && !t.classList.contains(e); )
            t = t.parentNode;
          return t;
        }
        function c(t, e) {
          var n;
          const i =
            null === (n = document.body.parentNode) || void 0 === n
              ? void 0
              : n.parentNode;
          let r = t;
          for (; null != r && r != i && !r.matches(e); ) r = r.parentElement;
          return i == r ? null : r;
        }
        function d(t, e) {
          return (t && t[e]) || "";
        }
        function p(t) {
          return t.replace(/<(?!\/?(?:b|em))[^>]+>/g, "");
        }
        function f(t) {
          return Array.prototype.slice.call(t);
        }
        function h(t) {
          return Array.from(new Set(t));
        }
        function m(t, e) {
          let n, i, r;
          if (Array.isArray(t)) {
            for (n = 0; n < t.length; ++n) if (m(t[n], e)) return !0;
            return !1;
          }
          for (n = 0, i = (e = Array.isArray(e) ? e : [e]).length; n < i; ++n)
            if (
              ((r = e[n]),
              ("string" == typeof r && -1 !== t.indexOf(r)) ||
                (r instanceof RegExp && t.match(r)))
            )
              return !0;
          return !1;
        }
        function _(t) {
          return a(this, void 0, void 0, function* () {
            return new Promise((e) => {
              EE.emit("message.background.send", {
                type: "youtube_get_info",
                data: { method: "GET", url: t },
              }),
                EE.on("youtube_get_info_result", (n) => {
                  n.data.url === t && e(n.data);
                });
            });
          });
        }
        function g(t) {
          return a(this, void 0, void 0, function* () {
            return new Promise((e) => {
              EE.emit("message.background.send", {
                type: "youtube_get_mpd_info",
                data: { url: t, method: "GET" },
              }),
                EE.on("youtube_set_mpd_info", (t) => {
                  var n, i;
                  t &&
                    "resolve" ===
                      (null === (n = t.data) || void 0 === n
                        ? void 0
                        : n.success) &&
                    e(
                      null === (i = t.data) || void 0 === i
                        ? void 0
                        : i.response
                    );
                });
            });
          });
        }
        function O(e, n, i, r, o = !1) {
          if (
            t.IS_CONTENT_SCRIPT &&
            !(function (t) {
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
              ].some((e) => t.match(e));
            })(n)
          ) {
            const t = "background_request." + k();
            return (
              EE.emit("message.background.send", {
                type: "background_request",
                data: {
                  id: t,
                  method: e,
                  url: n,
                  params: i,
                  headers: r,
                  includeCredentials: o,
                },
              }),
              new Promise((e, n) => {
                EE.on("background_request_result", (i) => {
                  const r = i.data;
                  r.id === t &&
                    ("resolve" === r.success ? e(r.response) : n(r.response));
                });
              })
            );
          }
          let a = null;
          const u = new Headers();
          if ("object" == typeof r)
            for (const t in r)
              (location.href.includes("nhaccuatui.com/video/") &&
                "X-Savior-Replace-Cookie" == t) ||
                u.append(t, r[t]);
          "object" == typeof i &&
            ((a = Object.keys(i)
              .map((t) => t + "=" + i[t])
              .join("&")),
            location.host.includes("facebook") &&
              (a = Object.keys(i)
                .map((t) => `${t}=${encodeURIComponent(i[t])}`)
                .join("&"))),
            "POST" === e &&
              u.append("Content-type", "application/x-www-form-urlencoded");
          const s = {
            method: e,
            headers: u,
            cache: "reload",
            body: a || void 0,
          };
          return (
            o && (s.credentials = "include"), fetch(n, s).then((t) => t.text())
          );
        }
        function v(t, e) {
          return O("GET", t, {}, e);
        }
        function E(t) {
          let e;
          const n = new XMLHttpRequest();
          return (
            (t = (function (t, e = "http") {
              if ("//" === t.slice(0, 2)) return e + ":" + t;
              return t;
            })(t)),
            new Promise((i, r) => {
              function o(t) {
                t ? i(t) : r(t), n.abort(), clearTimeout(e), (e = void 0);
              }
              n.open("GET", t),
                (n.onreadystatechange = function () {
                  if (this.readyState < 2) return;
                  let t = null;
                  try {
                    (t = +(this.getResponseHeader("Content-Length") || "")),
                      Number.isNaN(t) && (t = null);
                  } catch (t) {}
                  (null === t && 200 !== this.status) ||
                    (200 !== this.status && (t = null), o(t));
                }),
                n.send(null),
                (e = setTimeout(o, 1e4));
            })
          );
        }
        function y(t) {
          return new Promise((e) => {
            const n = k(),
              i = t + "_size";
            function r(r, o) {
              r == n &&
                (o
                  ? e(o)
                  : E(t)
                      .then((t) => {
                        e(t), EE.emit("media-provider.cache.put", k(), i, t);
                      })
                      .catch(() => {
                        T({
                          url: JSON.stringify(t),
                          referrer:
                            document.referrer ||
                            location.host ||
                            JSON.stringify(t),
                          error:
                            "Error: Cannot get media size or media url is wrong",
                        }),
                          e(null),
                          EE.emit("media-provider.cache.put", k(), i, null);
                      }));
            }
            EE.emit("media-provider.cache.get", n, i),
              EE.on("media-provider.cache.hit", r),
              EE.on("media-provider.cache.miss", r);
          });
        }
        function T(t) {
          o.a.log("recordCustomData", [
            { key: "savior_download_error", value: JSON.stringify(t) },
          ]);
        }
        function C(t, e = !1) {
          const n = ["B", "KB", "MB", "GB", "TB", "PB"],
            i = -1 !== window.navigator.appVersion.indexOf("Win") ? 1024 : 1e3;
          if (!t) return "";
          const r = i;
          let o;
          for (o = 0; o < n.length && t >= r; ++o) t /= r;
          const a = n[o];
          let u = Math.round(10 * t) / 10;
          return (
            e && a && "kb" === a.toLowerCase() && (u = u.toFixed(0)), u + n[o]
          );
        }
        function b(t, e = "") {
          if (
            -1 !==
            [
              "application/x-mpegurl",
              "application/vnd.apple.mpegurl",
              "audio/x-mpegurl",
              "audio/mpegurl",
            ].indexOf(e)
          )
            return (t.type = "video"), (t.ext = "m3u8"), t;
          const n = w(e, t.exts || []);
          if (n && i.a[n]) {
            t.type = n;
            const i = e.match(/mp4|webm/g);
            (t.exts && 0 !== t.exts.length) || !i || !i[0] || (t.ext = i[0]);
          }
          return M(t.url) && ((t.ext = "m3u8"), (t.exts = ["m3u8"])), t;
        }
        function w(t, e) {
          let n;
          for (const r in i.a) {
            if (((n = i.a[r]), t && t.match(n.rgxp))) return r;
            if (
              (Array.isArray(e) && N(e, n.extensions)) ||
              -1 !== n.extensions.indexOf(e)
            )
              return r;
          }
          return null;
        }
        function N(t, e) {
          const n = t.concat(e),
            i = {};
          for (let t = 0; t < n.length; ++t) {
            const e = n[t];
            if (i[e]) return e;
            i[e] = !0;
          }
          return null;
        }
        function S(t, e) {
          return (function t(e, n) {
            const i = n.shift();
            return !i ||
              ("object" != typeof e && "function" != typeof e) ||
              null === e
              ? null
              : 0 === n.length
              ? e[i]
              : t(e[i], n);
          })(t, e.split("."));
        }
        function A(t, e) {
          if (!t || t.length <= 0) return;
          const n = [].slice.call(arguments, 2);
          for (let i = 0; i < t.length; i++) t[i].apply(e, n);
        }
        function P(t) {
          return void 0 !== t;
        }
        function I(t, e, n) {
          let i,
            r = !1;
          function o() {
            if (r) return;
            const o = this,
              a = arguments;
            function u() {
              n || t.apply(o, a), (i = void 0);
            }
            i ? clearTimeout(i) : n && t.apply(o, a),
              (i = setTimeout(u, e || 100));
          }
          return (
            (o.destroy = () => {
              clearTimeout(i), (r = !0);
            }),
            o
          );
        }
        function D(t, e) {
          const n = Object.prototype.toString,
            i = [],
            r = (e && t) || t.slice();
          let o;
          if (!t.length) return i;
          o = r.pop();
          do {
            "[object Array]" === n.call(o)
              ? r.push.apply(
                  r,
                  o.filter((t) => !!t)
                )
              : i.push(o);
          } while (r.length && void 0 !== (o = r.pop()));
          return i.reverse(), i;
        }
        let L,
          x = 0;
        function k() {
          return x++;
        }
        function R(t) {
          return new Promise((e) => {
            const n = t.type + "_" + k();
            (t.id = n),
              EE.emit("message.background.send", t),
              EE.on("utils.send_message_result", (t) => {
                t.id === n && e(t.data);
              });
          });
        }
        function M(t) {
          if (!t || "object" == typeof t) return;
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
          ].some((e) => e.test(t));
        }
        function U(t) {
          let e = t.title || t.filename || document.title;
          const n = "." + t.ext;
          return (
            (e =
              (null == e
                ? void 0
                : e
                    .replace(/\s+/g, " ")
                    .replace(/[/\\:*?"<>|\u200c\u200d]/g, "-")) + n),
            (e = e.match(/[*~]/gi) ? "_" + e.replace(/[*~]/gi, ".") : e),
            e
          );
        }
        function H(t) {
          if (!t) return;
          const e = [
            /^https?:\/\/(?:www\.)?youtube(?:-nocookie)?(?:\.googleapis)?\.com\/(?:(?:v)|(?:embed)|(?:e))\/(?!videoseries)([^&?]+)/i,
            /https?:\/\/(?:www\.)?youtu\.be\/([^#&?]+)/i,
            /https?:\/\/(?:www\.)?youtube\.com\/.*(?:\?|&)v=([^#&?]+)/i,
            /https:\/\/(?:www\.)?youtube\.com\/shorts\/(.*)$/,
          ];
          let n;
          for (let i = 0; i < e.length; ++i)
            if ((n = t.match(e[i]))) return n[1];
          return null;
        }
        function B(t) {
          if (r.a.M3U8 && Object(i.g)(t.ext)) return !0;
          const e = t.type;
          if (!e) return !1;
          const n = i.a[e],
            o = n && n.extensions;
          return n && -1 !== o.indexOf(t.ext);
        }
        function V(t) {
          let e = 0;
          const n = i.d.length;
          for (; e < n && i.d[e] >= t; ) e++;
          return i.d[e - 1];
        }
        function W(t) {
          const e = t.filter(function (t) {
            return (
              "video" === t.type &&
              !(!r.a.DOWNLOAD.M3U8_AUDIO && ["m3u", "m3u8"].includes(t.ext)) &&
              (("object" == typeof t.url && t.url.audioUrl) ||
                "string" == typeof t.url)
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
            i = "www.youtube.com" === location.host ? n : [n[0]];
          let o = [];
          if (!e.length) return o;
          return (
            q(e).forEach(function ({ media: t }) {
              let e = i.map(function (e) {
                const i = (function (t, e) {
                    e = e.toLowerCase();
                    let n = [...t];
                    const i = t.filter(function (t) {
                      return "mp4" === t.ext;
                    });
                    i.length && (n = i);
                    const r = n.filter(function (t) {
                        return (
                          t.quality && "full hd" === t.quality.toLowerCase()
                        );
                      }),
                      o = n.filter(function (t) {
                        return t.quality && "hd" === t.quality.toLowerCase();
                      }),
                      a = n.filter(function (t) {
                        return (
                          t.quality &&
                          ["normal", "medium", "standard"].includes(
                            t.quality.toLowerCase()
                          )
                        );
                      });
                    switch (e) {
                      case "high":
                        r.length
                          ? (n = r)
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
                          : r.length && (n = r);
                    }
                    const u = n.filter(function (t) {
                      return "object" == typeof t.url && t.url.audioUrl;
                    });
                    u.length && (n = u);
                    return n[0];
                  })(t, e.name),
                  r = Object.assign({}, i);
                if (
                  ((r.url = r.url.audioUrl || r.url),
                  ["m3u8", "m3u"].includes(r.ext) && (r._hls = !0),
                  (r.ext = "mp3"),
                  (r.soundOnly = !0),
                  (r.quality = e.name),
                  (r.resolution = e.bitrate),
                  (r.type = "audio"),
                  (r.sortValues = { qualityValue: e.qualityValue }),
                  "www.youtube.com" === location.host)
                ) {
                  const t = r.url.audioUrl || r.url,
                    e = new URLSearchParams(t).get("itag"),
                    i = n.find((t) => t.itag === e) || n[0];
                  r.resolution !== i.bitrate &&
                    r.quality !== i.name &&
                    (r.resolution = "0kbps");
                }
                return r;
              });
              (e = e.reduce(
                (t, e) => (
                  t.some(
                    (t) => parseInt(t.resolution) >= parseInt(e.resolution)
                  ) || (t = []).push(e),
                  t
                ),
                []
              )),
                (o = o.concat(e));
            }),
            o
          );
        }
        function q(t) {
          const e = [];
          return (
            t.forEach((t) => {
              t.title || (t.title = t.filename);
              const n = t.title || t.filename,
                i = e.find((t) => t.title === n || t.filename === n);
              i ? i.media.push(t) : e.push({ media: [t], title: n });
            }),
            e
          );
        }
        try {
          L = chrome.i18n.getMessage || (() => "");
        } catch (t) {
          L = () => "";
        }
        const K = L,
          j = (t, e) =>
            t.type === e.type &&
            ("string" != typeof t.url && "string" != typeof e.url
              ? t.url.videoUrl == e.url.videoUrl
              : t.url === e.url),
          G = (e) => {
            var n;
            return (e =
              null !== (n = null != e ? e : t.tab_url) && void 0 !== n
                ? n
                : window.location.href).match(/^https:\/\/(www\.)?tiktok\.com/);
          },
          Y = (t) =>
            t
              ? t
                  .replaceAll(
                    /[^aAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlLmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ0-9\s\,\.\<\>\/\?\;\:\'\"\!\@\#\$\%\^\&\*\(\)\-\_\+\=\\\|]/g,
                    ""
                  )
                  .replaceAll(/\s+/g, " ")
              : t,
          X = (t, e, n) => {
            const { timeout: i } = e;
            return (
              delete e.timeout,
              i
                ? ((n = null != n ? n : new AbortController()),
                  setTimeout(() => n.abort(), i),
                  fetch(t, Object.assign({ signal: n.signal }, e)))
                : fetch(t, e)
            );
          },
          z = (t) => new Promise((e) => setTimeout(e, t));
        function F(t) {
          return (e = t) => e;
        }
      }.call(this, n(9));
  },
  1: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return i;
    }),
      n.d(e, "e", function () {
        return r;
      }),
      n.d(e, "f", function () {
        return o;
      }),
      n.d(e, "g", function () {
        return a;
      }),
      n.d(e, "d", function () {
        return u;
      }),
      n.d(e, "b", function () {
        return s;
      }),
      n.d(e, "c", function () {
        return l;
      });
    const i = {
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
      r = {
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
    function a(t) {
      return !!t && -1 !== ["m3u8", "m3u", "hls", "zip"].indexOf(t);
    }
    const u = [
        4320, 3072, 2160, 2048, 1440, 1080, 720, 540, 480, 360, 320, 270, 240,
        144,
      ],
      s = [
        /^(.+\.)?nixcdn\.com/im,
        /^(.+\.)?vcmedia\.vn/i,
        /^(.+\.)?kenhhd\.tv/i,
      ],
      l = [/coccoc\.com\/sitemap\.xml/i];
  },
  13: function (t, e, n) {
    t.exports = (function () {
      "use strict";
      /*!
       * mustache.js - Logic-less {{mustache}} templates with JavaScript
       * http://github.com/janl/mustache.js
       */ var t = Object.prototype.toString,
        e =
          Array.isArray ||
          function (e) {
            return "[object Array]" === t.call(e);
          };
      function n(t) {
        return "function" == typeof t;
      }
      function i(t) {
        return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
      }
      function r(t, e) {
        return null != t && "object" == typeof t && e in t;
      }
      var o = RegExp.prototype.test,
        a = /\S/;
      function u(t) {
        return !(function (t, e) {
          return o.call(t, e);
        })(a, t);
      }
      var s = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
          "/": "&#x2F;",
          "`": "&#x60;",
          "=": "&#x3D;",
        },
        l = /\s*/,
        c = /\s+/,
        d = /\s*=/,
        p = /\s*\}/,
        f = /#|\^|\/|>|\{|&|=|!/;
      function h(t) {
        (this.string = t), (this.tail = t), (this.pos = 0);
      }
      function m(t, e) {
        (this.view = t), (this.cache = { ".": this.view }), (this.parent = e);
      }
      function _() {
        this.cache = {};
      }
      (h.prototype.eos = function () {
        return "" === this.tail;
      }),
        (h.prototype.scan = function (t) {
          var e = this.tail.match(t);
          if (!e || 0 !== e.index) return "";
          var n = e[0];
          return (
            (this.tail = this.tail.substring(n.length)),
            (this.pos += n.length),
            n
          );
        }),
        (h.prototype.scanUntil = function (t) {
          var e,
            n = this.tail.search(t);
          switch (n) {
            case -1:
              (e = this.tail), (this.tail = "");
              break;
            case 0:
              e = "";
              break;
            default:
              (e = this.tail.substring(0, n)),
                (this.tail = this.tail.substring(n));
          }
          return (this.pos += e.length), e;
        }),
        (m.prototype.push = function (t) {
          return new m(t, this);
        }),
        (m.prototype.lookup = function (t) {
          var e,
            i,
            o,
            a = this.cache;
          if (a.hasOwnProperty(t)) e = a[t];
          else {
            for (var u, s, l, c = this, d = !1; c; ) {
              if (t.indexOf(".") > 0)
                for (
                  u = c.view, s = t.split("."), l = 0;
                  null != u && l < s.length;

                )
                  l === s.length - 1 &&
                    (d =
                      r(u, s[l]) ||
                      ((i = u),
                      (o = s[l]),
                      null != i &&
                        "object" != typeof i &&
                        i.hasOwnProperty &&
                        i.hasOwnProperty(o))),
                    (u = u[s[l++]]);
              else (u = c.view[t]), (d = r(c.view, t));
              if (d) {
                e = u;
                break;
              }
              c = c.parent;
            }
            a[t] = e;
          }
          return n(e) && (e = e.call(this.view)), e;
        }),
        (_.prototype.clearCache = function () {
          this.cache = {};
        }),
        (_.prototype.parse = function (t, n) {
          var r = this.cache,
            o = t + ":" + (n || g.tags).join(":"),
            a = r[o];
          return (
            null == a &&
              (a = r[o] =
                (function (t, n) {
                  if (!t) return [];
                  var r,
                    o,
                    a,
                    s = !1,
                    m = [],
                    _ = [],
                    O = [],
                    v = !1,
                    E = !1,
                    y = "",
                    T = 0;
                  function C() {
                    if (v && !E) for (; O.length; ) delete _[O.pop()];
                    else O = [];
                    (v = !1), (E = !1);
                  }
                  function b(t) {
                    if (
                      ("string" == typeof t && (t = t.split(c, 2)),
                      !e(t) || 2 !== t.length)
                    )
                      throw new Error("Invalid tags: " + t);
                    (r = new RegExp(i(t[0]) + "\\s*")),
                      (o = new RegExp("\\s*" + i(t[1]))),
                      (a = new RegExp("\\s*" + i("}" + t[1])));
                  }
                  b(n || g.tags);
                  for (var w, N, S, A, P, I, D = new h(t); !D.eos(); ) {
                    if (((w = D.pos), (S = D.scanUntil(r))))
                      for (var L = 0, x = S.length; L < x; ++L)
                        u((A = S.charAt(L)))
                          ? (O.push(_.length), (y += A))
                          : ((E = !0), (s = !0), (y += " ")),
                          _.push(["text", A, w, w + 1]),
                          (w += 1),
                          "\n" === A && (C(), (y = ""), (T = 0), (s = !1));
                    if (!D.scan(r)) break;
                    if (
                      ((v = !0),
                      (N = D.scan(f) || "name"),
                      D.scan(l),
                      "=" === N
                        ? ((S = D.scanUntil(d)), D.scan(d), D.scanUntil(o))
                        : "{" === N
                        ? ((S = D.scanUntil(a)),
                          D.scan(p),
                          D.scanUntil(o),
                          (N = "&"))
                        : (S = D.scanUntil(o)),
                      !D.scan(o))
                    )
                      throw new Error("Unclosed tag at " + D.pos);
                    if (
                      ((P =
                        ">" == N
                          ? [N, S, w, D.pos, y, T, s]
                          : [N, S, w, D.pos]),
                      T++,
                      _.push(P),
                      "#" === N || "^" === N)
                    )
                      m.push(P);
                    else if ("/" === N) {
                      if (!(I = m.pop()))
                        throw new Error('Unopened section "' + S + '" at ' + w);
                      if (I[1] !== S)
                        throw new Error(
                          'Unclosed section "' + I[1] + '" at ' + w
                        );
                    } else
                      "name" === N || "{" === N || "&" === N
                        ? (E = !0)
                        : "=" === N && b(S);
                  }
                  if ((C(), (I = m.pop())))
                    throw new Error(
                      'Unclosed section "' + I[1] + '" at ' + D.pos
                    );
                  return (function (t) {
                    for (
                      var e, n = [], i = n, r = [], o = 0, a = t.length;
                      o < a;
                      ++o
                    )
                      switch ((e = t[o])[0]) {
                        case "#":
                        case "^":
                          i.push(e), r.push(e), (i = e[4] = []);
                          break;
                        case "/":
                          (r.pop()[5] = e[2]),
                            (i = r.length > 0 ? r[r.length - 1][4] : n);
                          break;
                        default:
                          i.push(e);
                      }
                    return n;
                  })(
                    (function (t) {
                      for (var e, n, i = [], r = 0, o = t.length; r < o; ++r)
                        (e = t[r]) &&
                          ("text" === e[0] && n && "text" === n[0]
                            ? ((n[1] += e[1]), (n[3] = e[3]))
                            : (i.push(e), (n = e)));
                      return i;
                    })(_)
                  );
                })(t, n)),
            a
          );
        }),
        (_.prototype.render = function (t, e, n, i) {
          var r = this.parse(t, i),
            o = e instanceof m ? e : new m(e, void 0);
          return this.renderTokens(r, o, n, t, i);
        }),
        (_.prototype.renderTokens = function (t, e, n, i, r) {
          for (var o, a, u, s = "", l = 0, c = t.length; l < c; ++l)
            (u = void 0),
              "#" === (a = (o = t[l])[0])
                ? (u = this.renderSection(o, e, n, i))
                : "^" === a
                ? (u = this.renderInverted(o, e, n, i))
                : ">" === a
                ? (u = this.renderPartial(o, e, n, r))
                : "&" === a
                ? (u = this.unescapedValue(o, e))
                : "name" === a
                ? (u = this.escapedValue(o, e))
                : "text" === a && (u = this.rawValue(o)),
              void 0 !== u && (s += u);
          return s;
        }),
        (_.prototype.renderSection = function (t, i, r, o) {
          var a = this,
            u = "",
            s = i.lookup(t[1]);
          if (s) {
            if (e(s))
              for (var l = 0, c = s.length; l < c; ++l)
                u += this.renderTokens(t[4], i.push(s[l]), r, o);
            else if (
              "object" == typeof s ||
              "string" == typeof s ||
              "number" == typeof s
            )
              u += this.renderTokens(t[4], i.push(s), r, o);
            else if (n(s)) {
              if ("string" != typeof o)
                throw new Error(
                  "Cannot use higher-order sections without the original template"
                );
              null !=
                (s = s.call(i.view, o.slice(t[3], t[5]), function (t) {
                  return a.render(t, i, r);
                })) && (u += s);
            } else u += this.renderTokens(t[4], i, r, o);
            return u;
          }
        }),
        (_.prototype.renderInverted = function (t, n, i, r) {
          var o = n.lookup(t[1]);
          if (!o || (e(o) && 0 === o.length))
            return this.renderTokens(t[4], n, i, r);
        }),
        (_.prototype.indentPartial = function (t, e, n) {
          for (
            var i = e.replace(/[^ \t]/g, ""), r = t.split("\n"), o = 0;
            o < r.length;
            o++
          )
            r[o].length && (o > 0 || !n) && (r[o] = i + r[o]);
          return r.join("\n");
        }),
        (_.prototype.renderPartial = function (t, e, i, r) {
          if (i) {
            var o = n(i) ? i(t[1]) : i[t[1]];
            if (null != o) {
              var a = t[6],
                u = t[5],
                s = t[4],
                l = o;
              return (
                0 == u && s && (l = this.indentPartial(o, s, a)),
                this.renderTokens(this.parse(l, r), e, i, l)
              );
            }
          }
        }),
        (_.prototype.unescapedValue = function (t, e) {
          var n = e.lookup(t[1]);
          if (null != n) return n;
        }),
        (_.prototype.escapedValue = function (t, e) {
          var n = e.lookup(t[1]);
          if (null != n) return g.escape(n);
        }),
        (_.prototype.rawValue = function (t) {
          return t[1];
        });
      var g = {
          name: "mustache.js",
          version: "3.2.1",
          tags: ["{{", "}}"],
          clearCache: void 0,
          escape: void 0,
          parse: void 0,
          render: void 0,
          to_html: void 0,
          Scanner: void 0,
          Context: void 0,
          Writer: void 0,
        },
        O = new _();
      return (
        (g.clearCache = function () {
          return O.clearCache();
        }),
        (g.parse = function (t, e) {
          return O.parse(t, e);
        }),
        (g.render = function (t, n, i, r) {
          if ("string" != typeof t)
            throw new TypeError(
              'Invalid template! Template should be a "string" but "' +
                (e((o = t)) ? "array" : typeof o) +
                '" was given as the first argument for mustache#render(template, view, partials)'
            );
          var o;
          return O.render(t, n, i, r);
        }),
        (g.to_html = function (t, e, i, r) {
          var o = g.render(t, e, i);
          if (!n(r)) return o;
          r(o);
        }),
        (g.escape = function (t) {
          return String(t).replace(/[&<>"'`=\/]/g, function (t) {
            return s[t];
          });
        }),
        (g.Scanner = h),
        (g.Context = m),
        (g.Writer = _),
        g
      );
    })();
  },
  2: function (t, e, n) {
    "use strict";
    var i = n(6);
    class r {
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
      _getFullName(t) {
        return "Savior." + (this.LEGACY_METRICS_NAME_MAP[t] || t);
      }
      _getTotalValue(t, e, n) {
        return 0 === t.indexOf("Refr") ||
          n ||
          "PageShown" === t ||
          "number" != typeof e
          ? e
          : e + this.source;
      }
      _doLog(t, e, n) {
        var i;
        const r = this._getFullName(e);
        if (
          !(
            parseInt(
              (null ===
                (i = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)) ||
              void 0 === i
                ? void 0
                : i[2]) || ""
            ) <= 50
          )
        )
          if (this.source === this.SOURCE_CONTENT_SCRIPT)
            EE.emit("message.background.send", {
              type: "metrics",
              method: "log",
              params: { name: e, value: n },
            });
          else if (chrome.metricsPrivate)
            switch (t) {
              case "recordSmallCount":
                chrome.metricsPrivate.recordValue(
                  {
                    metricName: r,
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
                    metricName: r,
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
          else if ("recordCustomData" === t) {
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
          } else console.info("%c[Metrics]", "color:gray", t, r, n);
      }
      static _getMethodByName(t) {
        switch (t) {
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
      log(t, e, n) {
        try {
          const o = r._getMethodByName(t);
          if ("recordCustomData" === o && i.a.CUSTOM_METRICS_JSON)
            return void this._doLog(o, t, e);
          const a = this._getTotalValue(t, e, n);
          this._doLog(o, t, a);
        } catch (t) {
          console.error("Catched", t);
        }
      }
      logYtExtension(t) {
        switch (t.toLowerCase()) {
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
      logSendMobile(t) {
        this.log("SendMobile", t);
      }
      logFromContentScript(t, e) {
        this.log(t, e, !0);
      }
      logRequest(t) {
        const e = Object.keys(t).reduce(
          (e, n, i) => (e += `${i ? "&" : ""}${n}=${t[n]}`),
          "?"
        );
        navigator.sendBeacon("https://coccoc.com/log" + e);
      }
    }
    e.a = new r();
  },
  302: function (t, e, n) {
    n(13), (t.exports = n(0));
  },
  6: function (t, e, n) {
    "use strict";
    (function (t) {
      function n(t) {
        return t.split(".").map((t) => parseInt(t));
      }
      function i(t, e) {
        if (!t) return !1;
        const i = e.split(" ");
        if (2 !== i.length) return !1;
        let r = -1;
        switch (i[0]) {
          case ">":
            r = 1;
            break;
          case ">=":
            r = 0;
        }
        return (
          (function (t, e) {
            let n = t[0] - e[0];
            return 0 !== n
              ? n
              : ((n = t[1] - e[1]),
                0 !== n
                  ? n
                  : ((n = t[2] - e[2]), 0 !== n || (n = t[3] - e[3]), n));
          })(t, n(i[1])) >= r
        );
      }
      const r = (function (t) {
        let e = t.match(/Chrome\/([\d.]+)/);
        e && e[1] && (e = n(e[1]));
        const r = i.bind(null, e);
        return {
          YT: { mp4: !0, m4a: !0, webm: r(">= 39.0.2171.103") },
          M3U8: r("> 62.4.3202.180"),
          SOUND_ONLY:
            r("> 55.4.2883.114") ||
            (!!e && 50 === e[0] && r("> 50.3.2661.150")),
          SUBTITLES:
            r("> 55.4.2883.114") ||
            (!!e && 50 === e[0] && r("> 50.3.2661.150")),
          PLAY_NOW_BOTTOM_TOOLTIP: r("> 55.4.2883.126"),
          IS_ADS_PIP_PARAMS: r("> 60.4.3112.120"),
          MEDIA_WEB_REQUEST: r(">= 58.4.3029.118"),
          SERP_ADD_STRUCTURES: r(">= 62.4.3202.176"),
          SERP_ADD_INNER_STRUCTURES: r(">= 64.4.3282.200"),
          MOBILE_TRANSFER_PANEL: !0,
          CUSTOM_METRICS_JSON: r(">= 64.4.3282.236"),
          DASH_DOWNLOAD: r(">= 72.0.3626.130"),
          WEB_REQUEST_EXTRA_HEADERS: r(">= 72.0.0.0"),
          NATIVE_PIP: r(">= 74.0.0.0"),
          DOWNLOAD: {
            EXTRA_DATAS: r(">= 103.0.0.0"),
            M3U8_AUDIO: r(">= 109.0.0.0"),
          },
          CHATGPT: r(">= 110.0.0.0"),
        };
      })(t.navigator.userAgent);
      e.a = r;
    }).call(this, n(9));
  },
  9: function (t, e) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (n = window);
    }
    t.exports = n;
  },
});
