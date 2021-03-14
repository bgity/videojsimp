/* Copyright © 2020 Emtarang Techlabs Private Limited. All Rights Reserved. */
window.playerVersion = "2.1.22-02.02-MAINT";
"use strict";
window.instanceCounter = 0;
var canAutoPlay, isApp = !0,
    base1 = ".",
    base2 = "";
isApp && (base1 = "", base2 = "/player/");
var canAutoplayOptions = {};
const failureRetryCount = 2,
    daiFailureRetryCount = 3,
    daiFailureRetryInterval = 5;
var isWidevine = !1,
    isPlayready = !1,
    isFairplay = !1,
    isDrmSupported = !1;
window.ArrowIcon = base1 + "/assets/LogiPlayer_icons/group_arrow.png", window.closebtnicon = base1 + "/assets/LogiPlayer_icons/group-11.png", window.EpisodeIcon = base1 + "/assets/LogiPlayer_icons/group-120.png", window.backIcon = base1 + "/assets/LogiPlayer_icons/10-minus.png", window.forwardIcon = base1 + "/assets/LogiPlayer_icons/group-2.png", window.pauseIcon = base1 + "/assets/LogiPlayer_icons/pause.png", window.playIcon = base1 + "/assets/LogiPlayer_icons/play.png", window.volumeIcon = base1 + "/assets/LogiPlayer_icons/group-7.png", window.muteIcon = base1 + "/assets/LogiPlayer_icons/group-7-mute.png", window.fullscreenIcon = base1 + "/assets/LogiPlayer_icons/group-4.png", window.mwebfullscreenIcon = base1 + "/assets/LogiPlayer_icons/mweb_fullscreen.png", window.subtitleIcon = base1 + "/assets/libs/images/subtitle.png", window.thumbnailContent = base1 + "/assets/libs/json/content.json", window.qualityIcon = base1 + "/assets/LogiPlayer_icons/quality.png", window.checkmark = base1 + "/assets/LogiPlayer_icons/checkmark.png", window.settingIcon = base1 + "/assets/LogiPlayer_icons/group4.png", window.closeIcon = base1 + "/assets/LogiPlayer_icons/group-11.png", window.closeIconUI = base1 + "/assets/LogiPlayer_icons/close.png", window.qualityMobile = base1 + "/assets/LogiPlayer_icons/quality0.png", window.audioMobile = base1 + "/assets/LogiPlayer_icons/audio0.png", window.backIcon = base1 + "/assets/LogiPlayer_icons/backButton.png", window.chromecastMobile = base1 + "/assets/LogiPlayer_icons/chromecast-icon.png", window.chromecastDesktop = base1 + "/assets/LogiPlayer_icons/chromecast-icons/chromecast-icon@2x.png", window.shareIconMobile = base1 + "/assets/LogiPlayer_icons/share-icon.png", window.premiumIcon = base1 + "/assets/LogiPlayer_icons/premium.png", window.logo = base1 + "/assets/LogiPlayer_icons/sony-logo.png", window.timelineMarker_W = base1 + "/assets/LogiPlayer_icons/w.png", window.timelineMarker_S = base1 + "/assets/LogiPlayer_icons/6.png", window.timelineMarker_F = base1 + "/assets/LogiPlayer_icons/4.png", window.mwebquality = base1 + "/assets/LogiPlayer_icons/mweb-quality.png", window.mwebsubtitle = base1 + "/assets/LogiPlayer_icons/mweb-subtitle.png", window.errorScreenImage = base1 + "/assets/LogiPlayer_icons/errorImage_group-2.svg", window.videoPending = base1 + "/assets/LogiPlayer_icons/videopending-signIn.png", window.signinArrow = base1 + "/assets/LogiPlayer_icons/signinArrow.png", window.warningSign = base1 + "/assets/LogiPlayer_icons/stream-concurrency/warning-alert.png", window.exitFullscreen = base1 + "/assets/LogiPlayer_icons/exit-full-screen-icon.png", window.adBlock = base1 + "/assets/LogiPlayer_icons/visibility.svg", window.loader = "/assets/LogiPlayer_icons/sample.gif";
const CAST_RECEIVER_ID = "45FFCF42";
var logixPlayerComponent = null;

function ima_dai_method(e) {
    try {
        null == logixPlayerComponent && (logixPlayerComponent = new VideoplayerComponent), logixPlayerComponent.ima_dai_method(e)
    } catch (e) {
        console.error("Error in creating instance of videoplayerComponent: ", e)
    }
}

function iniatilizePlayer(e, t, a) {
    try {
        null == logixPlayerComponent && (logixPlayerComponent = new VideoplayerComponent), logixPlayerComponent.iniatilizePlayer(e, t, a)
    } catch (e) {
        console.error("Error in creating instance of videoplayerComponent: ", e)
    }
}

function destroyingPlayer() {
    null != logixPlayerComponent && logixPlayerComponent.destroyingPlayer(), logixPlayerComponent = null
}

function playerMute(e) {
    e && e.muted(!0)
}

function playerUnmute(e) {
    e && e.muted(!1)
}

function playerPlay(e) {
    e && e.play()
}

function playerPause(e) {
    e && e.pause()
}

function playerDestroy(e) {
    e && e.dispose()
}

function isChrome() {
    var e;
    return e = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor), console.log("isChrome :", e), e
}

function isMobile() {
    var e, t = !1;
    return e = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0), t
}
var hasEMESupport = function(e, t, a) {
    return !(!("MediaKeys" in window || "WebKitMediaKeys" in window || "MSMediaKeys" in window) || !(e || t || a))
};
try {
    drmSupport()
} catch (e) {
    console.warn("WARN: Error in checking DRM support", e)
}

function drmSupport() {
    var e = [];
    if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) return e = [{
        initDataTypes: ["cenc"]
    }], void(isDrmSupported = hasEMESupport(isWidevine, isPlayready, isFairplay = !0));
    e = [{
        initDataTypes: ["cenc"],
        audioCapabilities: [{
            contentType: 'audio/mp4;codecs="mp4a.40.2"'
        }, {
            contentType: 'audio/webm;codecs="vorbis"'
        }],
        videoCapabilities: [{
            contentType: 'video/mp4;codecs="avc1.42E01E"'
        }, {
            contentType: 'video/webm;codecs="vp9"'
        }]
    }], navigator.requestMediaKeySystemAccess("com.widevine.alpha", e).then(function(t) {
        console.log("widevine support ok"), isDrmSupported = hasEMESupport(isWidevine = !0, isPlayready, isFairplay), navigator.requestMediaKeySystemAccess("com.microsoft.playready", e).then(function(t) {
            console.log("playready support ok"), isDrmSupported = hasEMESupport(isWidevine, isPlayready = !0, isFairplay), navigator.requestMediaKeySystemAccess("com.apple.fps.1_0", e).then(function(e) {
                console.log("fairplay support ok"), isDrmSupported = hasEMESupport(isWidevine, isPlayready, isFairplay = !0)
            }).catch(function(e) {
                console.log("fairplay not supported")
            })
        }).catch(function(t) {
            console.log("playready not supported"), navigator.requestMediaKeySystemAccess("com.apple.fps.1_0", e).then(function(e) {
                isDrmSupported = hasEMESupport(isWidevine, isPlayready, isFairplay = !0), console.log("fairplay support ok")
            }).catch(function(e) {
                console.log("fairplay not supported")
            })
        })
    }).catch(function(t) {
        console.log("widevine not supported"), navigator.requestMediaKeySystemAccess("com.microsoft.playready", e).then(function(t) {
            console.log("playready support ok"), isDrmSupported = hasEMESupport(isWidevine, isPlayready = !0, isFairplay), navigator.requestMediaKeySystemAccess("com.apple.fps.1_0", e).then(function(e) {
                isDrmSupported = hasEMESupport(isWidevine, isPlayready, isFairplay = !0), console.log("fairplay support ok")
            }).catch(function(e) {
                console.log("fairplay not supported")
            })
        }).catch(function(t) {
            console.log("playready not supported"), navigator.requestMediaKeySystemAccess("com.apple.fps.1_0", e).then(function(e) {
                isDrmSupported = hasEMESupport(isWidevine, isPlayready, isFairplay = !0), console.log("fairplay support ok")
            }).catch(function(e) {
                console.log("fairplay not supported"), console.log("None of the standard DRM is SUPPORTED on this browser!!")
            })
        })
    })
}
try {
    var userAgent = navigator.userAgent.toLowerCase(),
        isMobileDevice = isMobile();
    console.log("Mobile and Android canAutoplay"), (canAutoPlay = new canAutoPlayHelper) && canAutoPlay.InitializePlugin().then(function(e) {
        canAutoplayOptions = e, console.log("Yurekha Yurekha canAutoplayOptions Success: ", canAutoplayOptions)
    }, function(e) {
        canAutoplayOptions = e, console.log("Yurekha Yurekha canAutoplayOptions Failure : ", canAutoplayOptions)
    })
} catch (e) {
    console.warn("canauto playexception", e)
}
var loadScripts = function(e, t, a) {
    var n = document.createElement("script");
    n.type = "text/javascript", n.readyState ? n.onreadystatechange = function() {
        "loaded" != n.readyState && "complete" != n.readyState || (n.onreadystatechange = null, a())
    } : n.onload = function() {
        a()
    }, n.src = e, n.id = t, document.getElementsByTagName("head")[0].appendChild(n)
};

function VideoplayerComponent() {
    var e, t, a, n, o, i, r, s, l, c, d, u, p, y, g, m, f, b, v, _, I, h, k, w, O, E = "html5Player",
        S = "main_video",
        j = E + S,
        C = null,
        L = null,
        D = document,
        P = document,
        A = "Dvr_Video",
        M = "Live",
        T = null,
        x = null,
        R = {},
        B = !1,
        N = "",
        V = null,
        F = null,
        q = null,
        U = "http://www.sonyliv.com",
        z = null,
        H = "",
        G = null,
        W = null,
        K = null,
        Y = null,
        J = null,
        X = "",
        Q = null,
        Z = !1,
        $ = 0,
        ee = 0,
        te = !1,
        ae = !1,
        ne = !1,
        oe = !1,
        ie = "1234",
        re = 0,
        se = {},
        le = {},
        ce = !1,
        de = "Chrome",
        ue = {},
        pe = " ",
        ye = null,
        ge = 0,
        me = 5,
        fe = {},
        be = !1,
        ve = {},
        _e = "Sign In",
        Ie = "videos left without sign-in",
        he = !1,
        ke = 20,
        we = 10,
        Oe = !1,
        Ee = !1,
        Se = 0,
        je = 0,
        Ce = 0,
        Le = !1,
        De = "",
        Pe = this,
        Ae = null;
    Ae = new AnalyticEngine;
    const Me = "retryCount" + (new Date).getTime();
    let Te = 0;
    try {
        sessionStorage.setItem(Me, failureRetryCount), sessionStorage.setItem("retryErrorCheck", !1)
    } catch (e) {}

    function xe() {
        var e = D.getElementById("wrapParent");
        return !(!e || 0 != e.clientHeight)
    }

    function Re(e) {
        if (!D.getElementById("ad-blocker-popup-overlay") && "SPOTLIGHT" !== e.type && (e.playbackInfo.resultObj.dai_asset_key || e.playbackInfo.resultObj.dai_asset_key_dash || e.playbackInfo.resultObj.dai_asset_key_hlsfp)) {
            var t = D;
            try {
                t.classList.add("myModal-poster"), t.style.backgroundImage = "url(" + e.playbackInfo.resultObj.posterURL + ")"
            } catch (e) {
                console.warn(e)
            }
            var a = document.createElement("DIV");
            a.setAttribute("id", "ad-blocker-popup-overlay"), a.innerHTML = "<img id='ad-blocker-back' src=\"" + window.ArrowIcon + "\">\n    <div class='ad-blocker-popup'>\n      <div class=\"ad-blocker-title\"><img class='ad-blocker-title-image' src ='" + window.adBlock + "' >\n          <div class='ad-blocker-title-text'>Ad Blocker Detected</div>\n      </div>\n      <div class='ad-blocker-description'>\n          It seems there is an Ad blocker plugin installed on your browser which is blocking the LIVE video. \n          Please disable the Ad blocker in order to play the LIVE video.\n      </div>\n      <button id='ad-blocker-button'>I have disabled Ad Blocker, Reload</button>\n    </div>", t.appendChild(a), D.getElementById("ad-blocker-button").addEventListener("click", async function() {
                try {
                    if (e.playbackInfo.resultObj.packId) {
                        const t = {
                            packId: e.playbackInfo.resultObj.packId,
                            contentId: e.assetInfo.resultObj.containers[0].metadata.contentId,
                            subType: e.assetInfo.resultObj.containers[0].metadata.objectSubtype,
                            deviceId: e.DeviceID
                        };
                        l || (l = new serviceFactory, null != e.convivaData && (e.apidata.appVersion = e.convivaData.app_version), l.initializeFactory(e.apidata)), await l.updateConcurrency(t), window.location.reload()
                    } else window.location.reload()
                } catch (e) {
                    console.warn(e)
                }
            }), D.getElementById("ad-blocker-back").addEventListener("click", async function() {
                try {
                    if (e.playbackInfo.resultObj.packId) {
                        const n = {
                            packId: e.playbackInfo.resultObj.packId,
                            contentId: e.assetInfo.resultObj.containers[0].metadata.contentId,
                            subType: e.assetInfo.resultObj.containers[0].metadata.objectSubtype,
                            deviceId: e.DeviceID
                        };
                        l || (l = new serviceFactory, null != e.convivaData && (e.apidata.appVersion = e.convivaData.app_version), l.initializeFactory(e.apidata)), await l.updateConcurrency(n), t.style.backgroundImage = "", t.classList.remove("myModal-poster"), a && a.parentElement && t.removeChild(a), e.handleBack()
                    } else t.style.backgroundImage = "", t.classList.remove("myModal-poster"), e.handleBack()
                } catch (e) {
                    console.error(e)
                }
            })
        }
    }

    function Be(t, a) {
        try {
            if (a && a.assetInfo && a.assetInfo.resultObj && a.assetInfo.resultObj.containers && a.assetInfo.resultObj.containers.length > 0) {
                var n, o, i = a.assetInfo.resultObj.containers[0].parents.filter(function(e) {
                    if (e) return "SHOW" == e.parentSubType || "GROUP_OF_BUNDLES" == e.parentType
                });
                i && i.length > 0 && (n = i[0].parentId);
                var c = a.assetInfo.resultObj.containers[0].parents.filter(function(e) {
                    if (e) return "SEASON" == e.parentSubType || "BUNDLE" == e.parentType
                });
                c && c.length > 0 && (o = c[0].parentId), null == n && (n = o)
            }
            var d, u = a.accessToken ? a.accessToken : null;
            d = Ne(a), n && l.getVodDetail(n, d, u).then(function(t) {
                r = t, console.log("Yurekha Yurekha season Bundle====", r);
                let n = r.resultObj.containers[0].containers.filter(function(e) {
                        return e.id == o
                    }),
                    i = !!n[0] && n[0].metadata.isOnAir,
                    c = a.assetInfo.resultObj.containers[0].metadata.episodeNumber;
                c = parseInt(c), i ? (ge = 0, me = n[0].episodeCount ? n[0].episodeCount : 100) : (ge = 0, me = c + 10), o && l.getSeasonData(o, d, ge, me).then(function(t) {
                    s = t, console.log("Yurekha Yurekha Episode Bundle====", s), e.initalizeCarouselData(r, s, a, !1, "initialize")
                })
            })
        } catch (e) {
            console.log("Exception Binge Watch Getting Carousel Data Fails :", e)
        }
    }

    function Ne(e) {
        try {
            const n = sessionStorage.getItem("selected_contact_id");
            for (var t = 0; t < e.profileInfo.contactMessage.length; t++) {
                var a = e.profileInfo.contactMessage[t];
                if (a.contactID == n && "Kid" === a.contactType) return !0
            }
            return !1
        } catch (e) {
            return console.warn(e), !1
        }
    }

    function Ve(e, t, a) {
        return new Promise(function(n, o) {
            var i = e;
            l.nextContent(i, t, a).then(function(e) {
                n(e)
            }, function(e) {
                o(e)
            })
        })
    }

    function Fe(e) {
        e.security_token && (l.setSecurityToken(e.security_token), null == e.seasonInfo || e.showInfo, Be(0, e))
    }

    function qe(t, a, n, o) {
        return new Promise(function(i, s) {
            "NewSeason" == n ? (ge = 0, me = 10, l.getSeasonData(t, a, ge, me).then(function(t) {
                e.initalizeCarouselData(r, t, {}, !1, n), i(t)
            })) : (me = (ge = o) + 10, l.getSeasonData(t, a, ge, me).then(function(t) {
                e.initalizeCarouselData(r, t, {}, !1, n), i(t)
            }, function(e) {
                s(e)
            }))
        })
    }
    async function Ue(e, t, a) {
        try {
            if (a.playbackInfo.resultObj.packId) {
                const e = {
                    packId: a.playbackInfo.resultObj.packId,
                    contentId: a.assetInfo.resultObj.containers[0].metadata.contentId,
                    subType: a.assetInfo.resultObj.containers[0].metadata.objectSubtype,
                    deviceId: a.DeviceID
                };
                l || (l = new serviceFactory, null != a.convivaData && (a.apidata.appVersion = a.convivaData.app_version), l.initializeFactory(a.apidata)), await l.updateConcurrency(e)
            }
        } catch (e) {
            console.error(e)
        }
        try {
            return (await e()).data
        } catch (n) {
            if (!(t > 0)) throw n;
            await new Promise(e => setTimeout(e, 5e3)), Ue(e, t - 1, a)
        }
    }
    async function ze(e, t, a) {
        try {
            let n = await Ue(e, t, a);
            a.playbackInfo = n, Pe.destroyingPlayer(), n.resultObj.dai_asset_key || n.resultObj.dai_asset_key_dash || n.resultObj.dai_asset_key_hlsfp ? Pe.ima_dai_method(a) : Pe.iniatilizePlayer("", "", a)
        } catch (e) {
            throw console.error("error" + e), e
        }
    }
    async function He(e, t, a) {
        const n = ["ACN_2408", "ACN_2411", "ACN_2412"];
        if (a && a.playbackInfo && a.playbackInfo.resultObj && void 0 !== a.playbackInfo.resultObj && 0 == Object.keys(a.playbackInfo.resultObj).length && n.includes(a.playbackInfo.errorDescription)) {
            ! function(e) {
                if (D.getElementById("concurrency-alert-overlay")) return;
                var t = D,
                    a = document.createElement("DIV");
                a.setAttribute("id", "concurrency-alert-overlay");
                var n = document.createElement("DIV");
                n.setAttribute("class", "concurrency-alert-container");
                var o = document.createElement("DIV");
                o.setAttribute("class", "concurrency-alert-close-div");
                var i = document.createElement("button");
                i.setAttribute("class", "concurrency-alert-close-button");
                var r = document.createElement("img");
                r.setAttribute("class", "concurrency-close-img"), r.setAttribute("src", window.closeIcon), i.appendChild(r), o.appendChild(i), n.appendChild(o);
                var s = document.createElement("DIV");
                s.setAttribute("class", "concurrency-warning-image-parent");
                var l = document.createElement("img");
                l.setAttribute("class", "concurrency-warning-image"), l.setAttribute("src", window.warningSign), s.appendChild(l), n.appendChild(s);
                var c = document.createElement("DIV");
                c.setAttribute("class", "concurrency-warning-message-parent");
                var d = document.createElement("span");
                d.setAttribute("id", "concurrency-warning-message"), d.innerHTML = "", c.appendChild(d), n.appendChild(c);
                var u = document.createElement("DIV");
                u.setAttribute("class", "concurrency-stopVideo-message-parent");
                var p = document.createElement("span");
                p.setAttribute("id", "concurrency-stopVideo-message"), p.innerHTML = "", u.appendChild(p), n.appendChild(u);
                var y = document.createElement("DIV");
                y.setAttribute("class", "concurrency-try-again-container");
                var g = document.createElement("button");
                g.setAttribute("id", "concurrency-try-again-btn"), g.innerHTML = "OK", y.appendChild(g), n.appendChild(y), g.addEventListener("click", function() {
                    try {
                        Pe.destroyingPlayer(), "ACN_2411" == e.playbackInfo.errorDescription ? (Ge({
                            type: "stream_concurrency_popup_click",
                            data: {
                                name: g.innerHTML,
                                apiData: e
                            }
                        }), window.location = window.location.origin + "/subscription") : (Ge({
                            type: "stream_concurrency_popup_click",
                            data: {
                                name: g.innerHTML,
                                apiData: e
                            }
                        }), e.handleBack())
                    } catch (e) {
                        console.error("exeception", e)
                    }
                    localStorage.removeItem("selectedMultiLanguage" + j), localStorage.removeItem("ismultilangaugeseleced" + j), a && a.parentElement && t.removeChild(a)
                }), r.addEventListener("click", function() {
                    try {
                        Ge({
                            type: "stream_concurrency_popup_click",
                            data: {
                                name: "Close",
                                apiData: e
                            }
                        }), Pe.destroyingPlayer(), e.handleBack()
                    } catch (e) {
                        console.error("exception", e)
                    }
                    localStorage.removeItem("selectedMultiLanguage" + j), localStorage.removeItem("ismultilangaugeseleced" + j), a && a.parentElement && t.removeChild(a)
                }), a.appendChild(n), t && t.appendChild(a)
            }(a);
            try {
                var o = JSON.parse(a.dictionary[a.playbackInfo.errorDescription]);
                o.errorDescription = a.playbackInfo.errorDescription, ye = o;
                var i = o.Text;
                try {
                    if (void 0 !== window.isCasting && window.isCasting || void 0 !== window.remotePlayer && window.remotePlayer && window.remotePlayer.isConnected) cast.framework.CastContext.getInstance().getCurrentSession().endSession(!0)
                } catch (e) {
                    console.error(e)
                }! function(e, t, a) {
                    Ge({
                        type: "stream_concurrency_popup_view",
                        data: {
                            errorCode: e,
                            errorMessage: t,
                            apiData: a
                        }
                    }), D.getElementById("concurrency-warning-message").innerHTML = e.Text, D.getElementById("concurrency-stopVideo-message").innerHTML = e.Subtext, D.getElementById("concurrency-try-again-btn").innerHTML = e.CTA || "OK", D.getElementById("concurrency-alert-overlay").style.display = "block", "ACN_2411" == e.errorDescription ? D.getElementsByClassName("concurrency-alert-close-button")[0].style.display = "block" : D.getElementsByClassName("concurrency-alert-close-button")[0].style.display = "none"
                }(o, i, a)
            } catch (e) {
                console.log(e)
            }
        }
        a && a.playbackInfo && a.playbackInfo.errorDescription && !a.playbackInfo.errorDescription.includes("200") && !n.includes(a.playbackInfo.errorDescription) && ot(e, t, a)
    }

    function Ge(e) {
        try {
            var t, a = {},
                n = e.type,
                o = e.data.apiData;
            console.log("playerMetadata:::", o);
            var i = o.convivaData && o.convivaData.grid_details && o.convivaData.grid_details.page_id ? o.convivaData.grid_details.page_id : "",
                r = o.convivaData && o.convivaData.grid_details && o.convivaData.page_name ? o.convivaData.page_name : void 0,
                s = o.assetInfo && o.assetInfo.resultObj && o.assetInfo.resultObj.containers.length > 0 && o.assetInfo.resultObj.containers[0] && o.assetInfo.resultObj.containers[0].metadata && o.assetInfo.resultObj.containers[0].metadata.contentId ? o.assetInfo.resultObj.containers[0].metadata.contentId.toString() : "",
                l = o.convivaData && o.convivaData.app_name ? o.convivaData.app_name : "",
                c = o.convivaData && o.convivaData.userType ? o.convivaData.userType : void 0,
                d = o.convivaData && o.convivaData.sub_status ? o.convivaData.sub_status : void 0,
                u = o.playbackInfo && o.playbackInfo.errorDescription ? o.playbackInfo.errorDescription : "",
                p = ye.Text,
                y = o && o.profileInfo ? o.profileInfo : void 0,
                g = i,
                m = e.data.apiData && e.data.apiData.apidata && e.data.apiData.apidata.platform ? e.data.apiData.apidata.platform : void 0,
                f = o.convivaData && o.convivaData.app_version ? o.convivaData.app_version : void 0,
                b = !(!window.remotePlayer || !window.remotePlayer.isConnected) && window.remotePlayer.isConnected;
            if ("Guest" !== c && (t = o.convivaData && o.convivaData.cp_customer_id ? o.convivaData.cp_customer_id : void 0, o.convivaData && o.convivaData.user_id ? o.convivaData.user_id : void 0), cmsdk && dataLayer) switch (n) {
                case "stream_concurrency_popup_view":
                    var v = "stream_concurrency_popup_view";
                    a.content_id = s, a.error_message = p, a.error_id = u, a.page_id = "player", a.page_category = "player_page", cmsdk.reportAppEvent(v, a), (a = {}).event = "streaming_concurrence", a.eventCategory = "Video Events", a.eventAction = "Streaming Concurrence Error", a.eventLabel = p, a.ChromeCast = b ? "Yes" : "No", a.SubscriptionStatus = d, a.AppName = l, a.Platform = m, a.Version = f, a.UserType = c, a.page_name = r, a.error_id = u, a.error_code = u, void 0 !== y && (a.CPID = t), dataLayer.push(a);
                    break;
                case "stream_concurrency_popup_click":
                    v = "stream_concurrency_popup_click";
                    var _ = e.data.name;
                    a.content_id = s, a.error_message = p, a.error_id = u, a.page_id = "player", a.page_category = "player_page", a.target_page_id = g, a.button_name = _, cmsdk.reportAppEvent(v, a)
            }
        } catch (e) {
            console.warn("Exception", e)
        }
    }

    function We(e, t, a, n) {
        localStorage.setItem("durationConsumed" + j, 0), n.assetInfo.resultObj.containers[0].metadata.emfAttributes.preview_duration && ($ = n.assetInfo.resultObj.containers[0].metadata.emfAttributes.preview_duration),
            function(e, t, a) {
                R = {
                    data: [{
                        id: e,
                        type: a
                    }],
                    deviceDetails: {
                        deviceId: t
                    }
                }
            }(V, ie, n.type), l.getPreviewDuration(R).then(function(o) {
                console.log("Get preview duration", o);
                var i = JSON.parse(o).resultObj.Items;
                if (0 != i.length && null != i[0].previewDuration) $ = i[0].previewDuration, null != i[0].durationConsumed && null != i[0].durationConsumed || (i[0].durationConsumed = 0), i[0].durationConsumed <= i[0].previewDuration ? ee = i[0].previewDuration - i[0].durationConsumed : i[0].durationConsumed >= i[0].previewDuration && (ee = i[0].durationConsumed), re = i[0].durationConsumed;
                else if (0 == i.length)
                    if (n.assetInfo.resultObj.containers[0].metadata.emfAttributes.preview_duration && "" !== n.assetInfo.resultObj.containers[0].metadata.emfAttributes.preview_duration) ee = n.assetInfo.resultObj.containers[0].metadata.emfAttributes.preview_duration;
                    else try {
                        if (n.configInfo && n.configInfo.free_preview && n.configInfo.free_preview.preview_based_classification_and_video_types)
                            for (var r = n.configInfo.free_preview.preview_based_classification_and_video_types, s = 0; s < r.length; s++)
                                if (r[s].objectSubType === n.type) {
                                    $ = parseInt(r[s].duration), ee = $, console.log("setting free preview duration from config");
                                    break
                                }
                    } catch (e) {
                        console.warn(e)
                    }
                Ke(e, t, a, n)
            }, function(e) {
                console.log("Failure of Preview Duration", e)
            })
    }

    function Ke(r, s, d, u) {
        if (isApp) {
            if (u.playbackInfo.resultObj && null != u.playbackInfo.resultObj.multiLanguageVideoURL && u.playbackInfo.resultObj.multiLanguageVideoURL.length > 0) {
                m = [], localStorage.getItem("selectedMultiLanguage" + j) ? (console.log("selectedlanguage", localStorage.getItem("selectedMultiLanguage" + j)), f = localStorage.getItem("selectedMultiLanguage" + j)) : f = "HIN";
                for (var p = 0; p < u.playbackInfo.resultObj.multiLanguageVideoURL.length; p++) m.push({
                    videoURL: u.playbackInfo.resultObj.multiLanguageVideoURL[p].videoURL,
                    contentId: u.playbackInfo.resultObj.multiLanguageVideoURL[p].contentId,
                    metadataLanguage: u.playbackInfo.resultObj.multiLanguageVideoURL[p].metadataLanguage
                }), u.playbackInfo.resultObj.multiLanguageVideoURL[p].metadataLanguage == f && (L = u.playbackInfo.resultObj.multiLanguageVideoURL[p].videoURL, null != window.xhook && l.createInterceptor(u.playbackInfo.resultObj.multiLanguageVideoURL[p].videoURL, u));
                localStorage.removeItem("selectedMultiLanguage" + j)
            } else "" === r || void 0 === r ? (localStorage.getItem("selectedMultiLanguage" + j) && (localStorage.removeItem("selectedMultiLanguage" + j), localStorage.removeItem("ismultilangaugeseleced" + j)), null != window.xhook && u.playbackInfo && u.playbackInfo.resultObj && (l.createInterceptor(u.playbackInfo.resultObj.videoURL, u), u.playbackInfo.resultObj.isTimeLineMarker && c.createInterceptor(u.playbackInfo.resultObj.dvrUrl, u)), L = u.playbackInfo.resultObj.videoURL) : "" === r && void 0 === r || (localStorage.getItem("selectedMultiLanguage" + j) && (localStorage.removeItem("selectedMultiLanguage" + j), localStorage.removeItem("ismultilangaugeseleced" + j)), null != window.xhook && (l.createInterceptor(r, u), u.playbackInfo && u.playbackInfo.resultObj && u.playbackInfo.resultObj.isTimeLineMarker && c.createInterceptor(u.playbackInfo.resultObj.dvrUrl, u)), L = r);
            n = u.assetInfo && u.assetInfo.resultObj && u.assetInfo.resultObj.containers[0].metadata && u.assetInfo.resultObj.containers[0].metadata.emfAttributes && u.assetInfo.resultObj.containers[0].metadata.emfAttributes.landscape_thumb ? u.assetInfo.resultObj.containers[0].metadata.emfAttributes.landscape_thumb : u.assetInfo && u.assetInfo.resultObj && u.assetInfo.resultObj.containers[0].metadata && u.assetInfo.resultObj.containers[0].metadata.emfAttributes && u.assetInfo.resultObj.containers[0].metadata.emfAttributes.thumbnail ? u.assetInfo.resultObj.containers[0].metadata.emfAttributes.thumbnail : "SPOTLIGHT" === u.type ? "" : window.logo, k && k.length > 0 ? (w = r, C = "https://widevine-proxy.appspot.com/proxy") : C = 1 == B ? d : ""
        } else L = D.getElementById("mySource").value, w = r, C = d || D.getElementById("myDRMKey").value, k = D.getElementById("dvrSource").value, console.log("key value", C, L);
        ! function(r, s) {
            var c, d, u = 0;
            s && s.configInfo && s.configInfo.continue_Watching && s.configInfo.continue_Watching.resume_prior_playback_time >= 5 && s.isContinueWatch && s.isContinueWatch.position && (u = s.isContinueWatch.position - s.configInfo.continue_Watching.resume_prior_playback_time);
            void 0 === s && (s = {
                assetInfo: {
                    resultObj: {
                        containers: [{
                            metadata: {
                                contentId: "1000008833",
                                duration: "4420",
                                contentSubtype: "episode"
                            }
                        }]
                    }
                }
            });
            if (console.log("playerMetadata::::::::::::::", s), isApp) {
                if (c = [], s.assetInfo && s.assetInfo.resultObj && (ue = {
                        showTitle: s.assetInfo.resultObj.containers[0].metadata.title,
                        season: s.assetInfo.resultObj.containers[0].metadata.season,
                        episodeNumber: s.assetInfo.resultObj.containers[0].metadata.episodeNumber,
                        episodeTitle: s.assetInfo.resultObj.containers[0].metadata.episodeTitle,
                        pcVodLabel: s.assetInfo.resultObj.containers[0].metadata.pcVodLabel,
                        snp_tags: s.assetInfo.resultObj.containers[0].metadata.emfAttributes.snp_tags,
                        certificate_display_time_in_sec: s.configInfo.app_player_config.certificate_display_time_in_sec
                    }), s.playbackInfo && s.playbackInfo.resultObj && s.playbackInfo.resultObj.subtitle)
                    for (var p = [], b = 0; b < s.playbackInfo.resultObj.subtitle.length; b++)
                        for (var v = 0; v <= s.configInfo.language_iso_code.length - 1; v++)
                            if (s.configInfo.language_iso_code[v].code == s.playbackInfo.resultObj.subtitle[b].subtitleLanguageName.toLowerCase()) {
                                var _ = {
                                    kind: "captions",
                                    src: s.playbackInfo.resultObj.subtitle[b].subtitleUrl,
                                    srclang: s.playbackInfo.resultObj.subtitle[b].subtitleLanguageName,
                                    label: s.configInfo.language_iso_code[v].locale_tilte
                                };
                                s.configInfo.allowed_audio_on_player && s.configInfo.allowed_audio_on_player.allowed_subtitle_languages ? s.configInfo.allowed_audio_on_player.allowed_subtitle_languages.includes(_.srclang.toLowerCase()) && (p.includes(_.srclang) || (c.push(_), p.push(_.srclang))) : p.includes(_.srclang) || (c.push(_), p.push(_.srclang))
                            }
            } else c = [{
                kind: "captions",
                src: "http://setindiapd.brightcove.com.edgesuite.net/5182475815001/2019/10/5182475815001_1903a4f0-7b46-4a89-8612-f79f8068e66b.vtt?pubId=5182475815001&videoId=6094720781001",
                srclang: "en",
                label: "English"
            }, {
                kind: "captions",
                src: "https://raw.githubusercontent.com/INRIA/mooc-accessibility-static/master/content/course/w0-s1/subtitles_fr.vtt",
                srclang: "fr",
                label: "French"
            }, {
                kind: "captions",
                src: "http://setindiapd.brightcove.com.edgesuite.net/5182475815001/2019/10/5182475815001_1903a4f0-7b46-4a89-8612-f79f8068e66b.vtt?pubId=5182475815001&videoId=6094720781001",
                srclang: "es",
                label: "Spanish"
            }];
            (function(e) {
                var t, a, n = -1,
                    o = 0,
                    i = "";
                ve = {}, null != e && null != e.playbackInfo && null != e.playbackInfo.resultObj && (i = e.playbackInfo.resultObj.sprite_image_url, isMobile() || (i = e.playbackInfo.resultObj.tv_sprite_image_url));
                let r = 160,
                    s = 90;
                try {
                    if (null != i && "" != i && i.length > 0) {
                        let e = i.split("_");
                        console.log("Sprite Extracted Properties:", e);
                        var l = e[e.length - 1].split(".");
                        null != l && l.length > 0 && (console.log("Sprite Frames:", l[0]), e.length > 3 && (r = e[e.length - 3], s = e[e.length - 2], console.log("Sprite width:", r), console.log("Sprite height:", s))), i && i.length > 0 && (isMobile() ? (n = .5, t = 200 / r, a = 113 / s, o = 42) : (n = .5, t = 350 / r, a = 197 / s, o = 30)), ve = {
                            spriteUrl: i,
                            width: r,
                            height: s,
                            framesData: l[0],
                            customScale: n,
                            customScaleW: t,
                            customScaleH: a,
                            additionalMargin: o
                        }
                    }
                } catch (e) {
                    console.log("Exception caught during extracting sprite properties", e)
                }
            })(s), d = "SPOTLIGHT" === s.type ? "" : function(e) {
                if (e && e.configInfo && e.configInfo.ads_config && (e.configInfo.ads_config.ima_ad_config.ad_server_url || e.configInfo.ads_config.ima_ad_config.mygalaxy_ad_server_url)) {
                    window.logix_vast_load_timeout = e.configInfo.ads_config.ima_ad_config.vast_load_timeout, window.logix_ad_media_load_timeout = e.configInfo.ads_config.ima_ad_config.ad_media_load_timeout, window.logix_mime_type = e.configInfo.ads_config.ima_ad_config.mime_type, N = Oe && e.configInfo.ads_config.ima_ad_config.mygalaxy_ad_server_url ? e.configInfo.ads_config.ima_ad_config.mygalaxy_ad_server_url : e.configInfo.ads_config.ima_ad_config.ad_server_url, q = e.assetInfo.resultObj.containers[0].metadata.title, F = e.assetInfo.resultObj.containers[0].metadata.contentType, V = e.assetInfo.resultObj.containers[0].metadata.contentId, z = e.platformConfig, X = e.convivaData.app_name, null != e.convivaData && (Q = e.convivaData.app_version);
                    try {
                        J = e.profileInfo.contactMessage[0].subscription.accountServiceMessage[0].serviceID
                    } catch (e) {
                        console.log("no pack found"), J = null
                    }
                    let o = "&profile_type=",
                        i = !1;
                    i = Ne(e), "SR" == l.cluster || "SRK" == l.cluster ? o += i ? "kids" : "adult" : o = "";
                    let r = "";
                    if (e && e.adtest_param && (r = "&adtest_param=" + e.adtest_param), null != q) var t = q.replace(/ /g, "_");
                    null != F && (F = F.toLowerCase());
                    var a = U + "/details/" + F + "/" + V + "/" + t;
                    a = encodeURIComponent(a);
                    var n = N.replace("{vid}", V);
                    n = (n = n.replace("{DESCRIPTION_URL_UNESC}", "description_url=" + a)).replace("{REFERRER_URL_UNESC}", X);
                    try {
                        const t = localStorage.getItem("first_party_data_gender");
                        W = t ? t.toLowerCase()[0] : null;
                        const a = localStorage.getItem("first_party_data_birthyear");
                        if (G = a ? (new Date).getYear() + 1900 - parseInt(a) : null) {
                            const t = e.configInfo.age_range;
                            let a = "";
                            t.forEach(e => {
                                G >= e.minAge && G <= e.maxAge && (a = e.minAge + "-" + e.maxAge)
                            }), G = a
                        }
                    } catch (e) {
                        W = null, G = null
                    }
                    n = n.replace("{CACHEBUSTER}", null), H = n + "&cust_params=" + encodeURIComponent("age=" + G + "&gen=" + W + "&ust=" + K + "&lng=" + Y + "&pt=" + z + "&spty=" + J + "&app_ver=" + Q + o + r)
                }
                return console.log("get ad url", H), H
            }(s);
            void 0 !== s.dictionary && null !== s.dictionary && (null != s.dictionary["1st_party_data_rule_based_video_count_pending_cta"] && (_e = s.dictionary["1st_party_data_rule_based_video_count_pending_cta"]), null != s.dictionary["1st_party_data_rule_based_video_count_pending_text"] && (Ie = s.dictionary["1st_party_data_rule_based_video_count_pending_text"]));
            if (s.configInfo && s.configInfo.first_party_data && s.configInfo.first_party_data.trigger_based)
                for (var b = 0; b < s.configInfo.first_party_data.trigger_based.length; b++)
                    if ("anonymous" == s.configInfo.first_party_data.trigger_based[b].type) {
                        s.configInfo.first_party_data.trigger_based[b].configuration && s.configInfo.first_party_data.trigger_based[b].configuration.video_watch_trigger && (void 0 !== s.configInfo.first_party_data.trigger_based[b].configuration.video_watch_trigger.count && (ke = s.configInfo.first_party_data.trigger_based[b].configuration.video_watch_trigger.count), void 0 !== s.configInfo.first_party_data.trigger_based[b].configuration.video_watch_trigger.enabled && (he = s.configInfo.first_party_data.trigger_based[b].configuration.video_watch_trigger.enabled));
                        break
                    } s.configInfo && s.configInfo.videos_pending_count_ui_timeout && (we = s.configInfo.videos_pending_count_ui_timeout);
            null == localStorage.getItem("first_party_data_video_view_counter") && localStorage.setItem("first_party_data_video_view_counter", 0);
            sessionStorage.getItem("skip_first_party_login_int") && "true" == sessionStorage.getItem("skip_first_party_login_int") && (he = !1);
            ("KBC" == s.type || "SPOTLIGHT" == s.type || null != s.profileInfo || Z && ee <= 0 || ne || !Ee) && (he = !1);
            var h = "Your free preview is over.",
                M = "To continue watching, login with your subscription ID or Subscribe Now",
                R = "Already Premium member?",
                te = "Go Premium",
                ae = "https://origin-staticv2.sonyliv.com/UI_icons/packWise/rectangle_copy_4.png",
                oe = "https://origin-staticv2.sonyliv.com/UI_icons/packWise/go_premium_crown_white.png",
                ie = "To Watch Originals, Hollywood Shows, and Sports",
                se = "100+ New Shows/Movies Every Year",
                ce = "",
                ye = "Sign in",
                ge = "/assets/LogiPlayer_icons/premium-icon.png",
                me = "/assets/LogiPlayer_icons/premium_tick_icon_unlocked.png",
                fe = window.location.origin + "/signin";
            try {
                if (null == s.profileInfo) {
                    if (s.assetInfo && s.assetInfo.resultObj && s.assetInfo.resultObj.trays && s.assetInfo.resultObj.trays.containers.length > 0)
                        for (var b = 0; b < s.assetInfo.resultObj.trays.containers.length; b++)
                            if ("Subscription Promotion" == s.assetInfo.resultObj.trays.containers[b].title) {
                                s.assetInfo.resultObj.trays.containers[b].containers && s.assetInfo.resultObj.trays.containers[b].containers.assets && s.assetInfo.resultObj.trays.containers[b].containers.assets.containers[0] && s.assetInfo.resultObj.trays.containers[b].containers.assets.containers[0].editorialMetadata && (te = s.assetInfo.resultObj.trays.containers[b].containers.assets.containers[0].editorialMetadata.button_title, ae = s.assetInfo.resultObj.trays.containers[b].containers.assets.containers[0].editorialMetadata.bg_img, s.assetInfo.resultObj.trays.containers[b].containers.assets.containers[0].editorialMetadata.big_bg_img, oe = s.assetInfo.resultObj.trays.containers[b].containers.assets.containers[0].editorialMetadata.premium_logo, ie = s.assetInfo.resultObj.trays.containers[b].containers.assets.containers[0].editorialMetadata.description, s.assetInfo.resultObj.trays.containers[b].containers.assets.containers[0].editorialMetadata.s_promotion_id, s.assetInfo.resultObj.trays.containers[b].containers.assets.containers[0].editorialMetadata.s_promotion_type, se = s.assetInfo.resultObj.trays.containers[b].containers.assets.containers[0].editorialMetadata.title, ce = s.assetInfo.resultObj.trays.containers[b].containers.assets.containers[0].editorialMetadata.button_cta);
                                break
                            }
                } else if (s.recommendedData && s.recommendedData.resultObj && s.recommendedData.resultObj.containers.length > 0)
                    for (var b = 0; b < s.recommendedData.resultObj.containers.length; b++)
                        if ("subscription_promo_layout" == s.recommendedData.resultObj.containers[b].layout) {
                            s.recommendedData.resultObj.containers[b].assets && s.recommendedData.resultObj.containers[b].assets.containers[0] && s.recommendedData.resultObj.containers[b].assets.containers[0].editorialMetadata && (te = s.recommendedData.resultObj.containers[b].assets.containers[0].editorialMetadata.button_title, ae = s.recommendedData.resultObj.containers[b].assets.containers[0].editorialMetadata.bg_img, s.recommendedData.resultObj.containers[b].assets.containers[0].editorialMetadata.big_bg_img, oe = s.recommendedData.resultObj.containers[b].assets.containers[0].editorialMetadata.premium_logo, ie = s.recommendedData.resultObj.containers[b].assets.containers[0].editorialMetadata.description, s.recommendedData.resultObj.containers[b].assets.containers[0].editorialMetadata.s_promotion_id, s.recommendedData.resultObj.containers[b].assets.containers[0].editorialMetadata.s_promotion_type, se = s.recommendedData.resultObj.containers[b].assets.containers[0].editorialMetadata.title, ce = s.recommendedData.resultObj.containers[0].assets.containers[0].editorialMetadata.button_cta);
                            break
                        }
            } catch (e) {
                console.warn(e)
            }
            s.assetInfo && s.assetInfo.resultObj && s.assetInfo.resultObj.containers[0] && s.assetInfo.resultObj.containers[0].metadata && s.assetInfo.resultObj.containers[0].metadata.emfAttributes && s.assetInfo.resultObj.containers[0].metadata.emfAttributes.icon_on_asset && (s.assetInfo.resultObj.containers[0].metadata.emfAttributes.icon_on_asset.icon_not_subscribed && (ge = s.assetInfo.resultObj.containers[0].metadata.emfAttributes.icon_on_asset.icon_not_subscribed), s.assetInfo.resultObj.containers[0].metadata.emfAttributes.icon_on_asset.icon_subscribed && (me = s.assetInfo.resultObj.containers[0].metadata.emfAttributes.icon_on_asset.icon_subscribed));
            s.dictionary && s.dictionary.free_preview_end_msg && (h = s.dictionary.free_preview_end_msg, M = "");
            s.dictionary && s.dictionary.already_member && (R = s.dictionary.already_member);
            s.dictionary && s.dictionary.sign_in && (ye = s.dictionary.sign_in);
            navigator.sayswho = (je = navigator.userAgent, Ce = je.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [], /trident/i.test(Ce[1]) ? "IE " + ((Se = /\brv[ :]+(\d+)/g.exec(je) || [])[1] || "") : "Chrome" === Ce[1] && null != (Se = je.match(/\b(OPR|Edge)\/(\d+)/)) ? Se.slice(1).join(" ").replace("OPR", "Opera") : (Ce = Ce[2] ? [Ce[1], Ce[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (Se = je.match(/version\/(\d+)/i)) && Ce.splice(1, 1, Se[1]), Ce.join(" ")));
            var Se, je, Ce;
            var Le = null;
            try {
                var Te = s.playbackInfo.resultObj.cuepoints[0].cuePointList;
                Te && Te.forEach(e => {
                    "end_credit" === e.customSlotId && (Le = e.contentTimePosition)
                })
            } catch (e) {
                console.warn(e)
            }
            T = {
                playerId: E,
                playerParentDivId: S,
                playerDivId: j,
                showSubscription: ne,
                enablePreview: Z,
                durationConsumedTime: re,
                asset_id: V,
                elapsedTime: ee,
                isPremiumUser: be,
                previewDuration: $,
                locale: le,
                ageCertification: ue,
                defaultLanguage: pe,
                audio_language_iso: y,
                video_quality_options: g,
                multi_language_data: m,
                getselectedmultiLanguage: f,
                streamManager: r,
                continueWatchingTime: u,
                fluid: !1,
                isDrm: B,
                liveSrc: w,
                src: L,
                adTagUrl: d,
                spriteImageUrlData: ve,
                subtitleList: c,
                type: "application/dash+xml",
                preload: "auto",
                newSeason: qe,
                next: Ve,
                keyMomentClick: et,
                goLiveClickFunction: Ze,
                seekBarFunction: $e,
                playbackMode_TM: De,
                service: l,
                keySystemOptions: [{
                    name: a,
                    options: {
                        serverURL: C
                    }
                }],
                plugins: {
                    httpSourceSelector: {
                        default: "auto"
                    }
                },
                poster: isApp ? n : "http://media.w3.org/2010/05/sintel/poster.png",
                analyticmetadata: s,
                playerMetadataInfo: s,
                adsConfiguration: {},
                subscriptionPromotion: {
                    SSR_freepreviewMessage: h,
                    SSR_signinMessage: M,
                    SSR_alreadyPremiumMessage: R,
                    SSR_MessagesProperties: {},
                    SSR_subscribeText: "Subscribe",
                    SSR_icon_not_subscribed: ge,
                    SSR_icon_subscribed: me,
                    SSR_goPremium: te,
                    SSR_goPremiumProperties: {
                        SSR_button: ae,
                        SSR_crownImage: oe,
                        SSR_arrowImage: "/assets/common/right-chevron.svg",
                        SSR_description: ie,
                        SSR_Title: se,
                        SSR_button_cta: ce
                    },
                    SSR_signIn: ye,
                    SSR_signinProperties: {
                        SSR_signInUrlPath: fe
                    }
                },
                videoCountPending: {
                    signIn_Text: _e,
                    pendingCount_Text: Ie,
                    enable: he,
                    startTime: 1,
                    duration: we,
                    totalVideoCount: ke,
                    remainingVideosCount: ke - localStorage.getItem("first_party_data_video_view_counter") - 1
                },
                skipButtonConfig: {
                    skip_intro_timeout_secs: s.skip_intro_timeout_secs || 30,
                    skip_recap_timeout_secs: s.skip_recap_timeout_secs || 30,
                    skip_song_timeout_secs: s.skip_song_timeout_secs || 30
                },
                skipCreditConfig: {
                    skip_credit_timeout_secs: s.end_credit_timeout_secs || s.configInfo.app_player_config.show_next_episode_overlay || 10,
                    skipCreditCuePoint: Le || null
                },
                errorHandling: {},
                failureRetryKey: Me,
                failureRetryCount: failureRetryCount,
                retrySource: ze,
                destroyingPlayer: Pe.destroyingPlayer
            };
            try {
                T.analyticmetadata.convivaData.partner_id = Oe ? "samsungMyGalaxy" : T.analyticmetadata.convivaData.partner_id
            } catch (e) {
                console.warn(e)
            }(localStorage.getItem("first_party_data_video_view_counter") < 0 || T.videoCountPending.remainingVideosCount < 0) && T.videoCountPending.enable && (console.error("Remaining pending count is already exhausted"), window.location = window.location.origin + "/signin");
            s.configInfo && s.configInfo.ads_config && s.configInfo.ads_config.ima_ad_config && (T.adsConfiguration.ad_bitrate = s.configInfo.ads_config.ima_ad_config.ad_bitrate, T.adsConfiguration.mime_type = s.configInfo.ads_config.ima_ad_config.mime_type, T.adsConfiguration.vast_load_timeout = s.configInfo.ads_config.ima_ad_config.vast_load_timeout, T.adsConfiguration.ad_media_load_timeout = s.configInfo.ads_config.ima_ad_config.ad_media_load_timeout);
            "IE" == de || navigator.userAgent.indexOf("ie") > -1 || -1 != navigator.userAgent.indexOf("edg") || navigator.userAgent.indexOf("Edge") >= 0 || navigator.userAgent.indexOf("PIXEL_UNICORN") >= 0 ? (a = "com.microsoft.playready", T.keySystemOptions[0].name = a) : navigator.sayswho.indexOf("Chrome") >= 0 || navigator.sayswho.indexOf("Firefox") >= 0 || navigator.userAgent.indexOf("Tizen") >= 0 || navigator.userAgent.indexOf("SamsungBrowser") >= 0 ? (a = "com.widevine.alpha", T.plugins.httpSourceSelector.default = "high", T.keySystemOptions[0].name = a, w && w.length > 0 && (T.src = w)) : navigator.sayswho.indexOf("Safari") >= 0 ? (a = "com.apple.fps.1_0", T.type = "application/x-mpegURL", T.keySystemOptions[0].name = a, T.keySystemOptions[0].options.audioContentType = 'audio/webm; codecs="vorbis"', T.keySystemOptions[0].options.videoContentType = 'video/webm; codecs="vp9"', T.keySystemOptions[0].options.certificateUri = "https://expressplay-test.s3.amazonaws.com/testplayer/fairplay-sony.cer") : (a = "com.microsoft.playready", T.keySystemOptions[0].name = a);
            canAutoplayOptions && (T.canAutoplayOptions = canAutoplayOptions);
            T.isLIVE = !1, T.isTimelineMarker = !1, T.isDvr = !1, T.playerMetadataInfo && T.playerMetadataInfo.playbackInfo && T.playerMetadataInfo.playbackInfo.resultObj && (T.playerMetadataInfo.playbackInfo.resultObj.isLive && (T.isLIVE = T.playerMetadataInfo.playbackInfo.resultObj.isLive), T.playerMetadataInfo.playbackInfo.resultObj.isTimeLineMarker && (T.isTimelineMarker = T.playerMetadataInfo.playbackInfo.resultObj.isTimeLineMarker), T.playerMetadataInfo.playbackInfo.resultObj.isDVR && (T.isDvr = T.playerMetadataInfo.playbackInfo.resultObj.isDVR));
            try {
                e && t ? (x = Object.create(T), (x = Object.assign(x, T)).playerParentDivId = A, x.playerDivId = x.playerId + x.playerParentDivId + O, x.src = k, x.playbackMode_TM = "dvrPlayback", e.setLogixGlobalvariable(T), t.setLogixGlobalvariable(x)) : e.setLogixGlobalvariable(T)
            } catch (e) {
                console.log("setting divid inside logixplayer", e)
            }(function(e, t, a) {
                try {
                    var n = [];
                    t.analytic_engine = Ae, "SPOTLIGHT" !== e.type && e.configInfo && e.configInfo.enable_conviva_api && 2 == parseInt(sessionStorage.getItem(t.failureRetryKey)) && (e.configInfo.enable_conviva_api && n.push("Conviva"), e.configInfo.analytics_config.enable_catch_media && n.push("CatchMedia"), n.push("GoogleAnalytic"), Ae.SetupConfig(n), Ae.ContentApiMetaDataInitialization(t.analyticmetadata, t), Ae.ConvivaStartSession(), Ae.passRetryCount(failureRetryCount, parseInt(sessionStorage.getItem(t.failureRetryKey))), console.log("opt========================>", t))
                } catch (e) {
                    console.log("Exception occurs at InitiateAnalyticCall", e)
                }
            })(s, T),
            function(a, n) {
                var r = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
                    s = D.parentElement;
                s && (s.style.display = "block", r || "SPOTLIGHT" === n.type && (s.style.width = "100%", s.style.height = "100%"));
                k && k.length > 0 && n.playbackInfo && n.playbackInfo.resultObj && n.playbackInfo.resultObj.isTimeLineMarker && (P.style.display = "none");
                if (e && t)
                    if (T.isDvr) {
                        try {
                            t.initializePlayer(x).then(function(e) {
                                console.log("player is iniatlized.....******************", e), o = e;
                                try {
                                    a && I.addContentAdClick(o.player)
                                } catch (e) {
                                    console.log("exception", e)
                                }
                                o && setTimeout(function() {
                                    o.player.pause()
                                }, 3e3), Je(e)
                            })
                        } catch (e) {
                            console.log("exception in iniatilizing dvr", e)
                        }
                        try {
                            n.playbackInfo && n.playbackInfo.resultObj && n.playbackInfo.resultObj.isTimeLineMarker && e.initializePlayer(T).then(function(e) {
                                console.log("player1 is iniatlized.....******************", e), i = e;
                                try {
                                    a && I.addContentAdClick(i.player), P.querySelector("#go_live").style.display = "none", D.querySelector("#dvr_live").style.display = "block"
                                } catch (e) {
                                    console.log("exception", e)
                                }
                                Je(e)
                            })
                        } catch (e) {
                            console.log("live player initialization", e)
                        }
                    } else e.initializePlayer(T).then(function(e) {
                        o = e;
                        try {
                            if ("SPOTLIGHT" != T.playerMetadataInfo.type) /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
                        } catch (e) {
                            console.warn("Muted exception", e)
                        }
                        T.playerMetadataInfo.spotlightPlayerInitialization && o && T.playerMetadataInfo.spotlightPlayerInitialization(o);
                        try {
                            a && I.addContentAdClick(o.player)
                        } catch (e) {
                            console.log("exception", e)
                        }
                        Je(e)
                    })
            }(r, s)
        }(s, u)
    }

    function Ye() {}

    function Je(e) {
        e.eventEmitter.addEventListener("onProgress", function(e) {
            console.log("playerProgressEvent", e.detail.event)
        }), e.eventEmitter.addEventListener("onPlaying", function(e) {
            console.log("playingEvent", e.detail.event)
        }), e.eventEmitter.addEventListener("onfullscreenChange", function(e) {}), e.eventEmitter.addEventListener("onAdstart", function(e) {
            console.log("onAdstartEvent")
        }), e.eventEmitter.addEventListener("onAdEnd", function(t) {
            console.log("onAdEndEvent"), Oe && lt(t.type, t, e)
        }), e.eventEmitter.addEventListener("onAdskip", function(e) {
            console.log("onAdskipEvent")
        }), e.eventEmitter.addEventListener("onError", function(t) {
            console.log("onErrorEvent"), Oe && !Le && lt(t.type, t, e)
        }), e.eventEmitter.addEventListener("adserror", function(e) {
            console.log("adserror")
        }), e.eventEmitter.addEventListener("onloadeddata", function(e) {
            console.log("onloadeddataEvent")
        }), e.eventEmitter.addEventListener("onloadedmetadata", function(t) {
            console.log("onloadedmetadataEvent");
            try {
                e.player && e.player.dash && e.player.dash.mediaPlayer && e.player.dash.mediaPlayer.on("error", rt), e.player && e.player.tech() && e.player.tech().on("retryplaylist", st)
            } catch (t) {
                console.warn(t)
            }
            if (T.isDvr || T.isTimelineMarker) try {
                ! function() {
                    try {
                        if (T.isTimelineMarker && null == P.querySelector("#go_live")) {
                            var e, t = document.createElement("BUTTON");
                            t.innerHTML = le.GO_LIVE, t.setAttribute("id", "go_live"), (e = P.getElementsByClassName("vjs-progress-control")[0]) && (e.appendChild(t), t.style.display = "none")
                        }
                        if (T.isDvr && !T.isTimelineMarker && null == D.querySelector("#go_live")) {
                            var t = document.createElement("BUTTON");
                            t.innerHTML = le.GO_LIVE, t.setAttribute("id", "go_live"), D.getElementsByClassName("vjs-progress-control")[0].appendChild(t), D.getElementById("go_live").style.display = "none"
                        }
                    } catch (e) {
                        console.warn(e)
                    }
                }(),
                function() {
                    try {
                        if (T.isTimelineMarker && null == D.querySelector("#seekbar")) {
                            var e = D.getElementsByClassName("vjs-control-bar")[0],
                                t = document.createElement("input");
                            t.setAttribute("type", "range"), t.setAttribute("id", "seekbar"), t.setAttribute("min", "0"), t.setAttribute("value", "100"), t.setAttribute("max", "100"), t.setAttribute("list", "steplist"), t.setAttribute("class", "logix_slider"), e.appendChild(t), T.enablePreview && (t.style.display = "none"), (videojs.browser.IS_ANY_SAFARI || navigator.platform.match("MacIntel") && videojs.browser.IS_FIREFOX) && (t.style.marginTop = "-4.9em"), D.querySelector(".vjs-control-bar .vjs-progress-control .vjs-progress-holder .vjs-play-progress").style.display = "none", D.getElementsByClassName("vjs-progress-holder")[0].style.backgroundColor = "transparent"
                        }
                    } catch (e) {
                        console.warn(e)
                    }
                }(),
                function() {
                    try {
                        if (null == D.querySelector("#dvr_live")) {
                            var e = document.createElement("BUTTON");
                            e.innerHTML = le.LIVE, e.setAttribute("id", "dvr_live"), e.setAttribute("disabled", "disabled"), D.getElementsByClassName("vjs-progress-control")[0].appendChild(e), D.getElementById("dvr_live").style.display = "block"
                        }
                    } catch (e) {
                        console.warn(e)
                    }
                }(), D.getElementsByClassName("vjs-remaining-time")[0].style.display = "none", P.getElementsByClassName("vjs-remaining-time")[0].style.display = "none", D.addEventListener("markerClick", tt), P.addEventListener("markerClick", tt);
                let e = P.getElementsByClassName("vjs-mouse-display")[0],
                    o = D.getElementsByClassName("vjs-mouse-display")[0];
                o && (o.style.bottom = "3.5em"), e && (e.style.bottom = "3.5em"), D.addEventListener("dvrSwitch", at), P.addEventListener("dvrSwitch", at);
                var a = P.querySelector("#go_live");
                a && a.addEventListener("click", Ze);
                var n = D.querySelector("#seekbar");
                n && n.addEventListener("change", $e);
                try {
                    setTimeout(function() {
                        var e = D.getElementsByClassName("logix-btn-seek-forward")[0];
                        e && (e.style.opacity = "0.5")
                    }, 2e3)
                } catch (t) {
                    console.log(t)
                }
            } catch (t) {
                console.warn(t)
            }
        }), e.eventEmitter.addEventListener("onended", function(e) {
            console.log("onendedEvent")
        }), e.eventEmitter.addEventListener("onloadstart", function(e) {
            console.log("onloadstartEvent")
        }), e.eventEmitter.addEventListener("onPlay", function(t) {
            console.log("onPlayEvent"), Oe && lt(t.type, t, e)
        }), e.eventEmitter.addEventListener("onPause", function(t) {
            console.log("onPausesEvent"), Oe && lt(t.type, t, e)
        }), e.eventEmitter.addEventListener("onTimeUpdate", function(e) {
            console.log("onTimeUpdateEvent", e.detail.event), T.isTimelineMarker ? e.detail.event.target.id.includes(A) ? (je = o.player.currentTime(), "Live" != M || o.player.paused() || o.player.pause()) : (je = i.player.currentTime(), "Dvr" != M || i.player.paused() || i.player.pause()) : je = o.player.currentTime(), (je = o.player.currentTime()) > Se && je - Se < 5 && (Ce += je - Se), Se = je
        }), e.eventEmitter.addEventListener("onAdProgress", function(e) {
            console.log("onAdProgressEvent")
        }), e.eventEmitter.addEventListener("onPlayerReady", function(e) {
            console.log("onPlayerReadyEvent")
        }), e.eventEmitter.addEventListener("onrateChange", function(e) {
            console.log("onrateChangeEvent")
        }), e.eventEmitter.addEventListener("onSuspend", function(e) {
            console.log("onsuspendEvent")
        }), e.eventEmitter.addEventListener("onStalled", function(t) {
            console.log("onStalledEvent"), Oe && !Le && lt(t.type, t, e)
        }), e.eventEmitter.addEventListener("onSeeked", function(e) {
            console.log("onseekedEvent")
        }), e.eventEmitter.addEventListener("onSeeking", function(e) {
            console.log("onseekingEvent")
        }), e.eventEmitter.addEventListener("onVolumechange", function(e) {
            console.log("onvolumechangeEvent")
        }), e.eventEmitter.addEventListener("onResolutionChange", function(e) {
            console.log("onResolutionChangeEvent")
        }), e.eventEmitter.addEventListener("onPlayerReady", function(e) {
            console.log("onPlayerReadyEvent")
        }), e.eventEmitter.addEventListener("onabort", function(e) {
            console.log("onabortevent")
        }), e.eventEmitter.addEventListener("onfirstPlay", function(t) {
            console.log("onfirstPlayEvent"), Oe && lt(t.type, t, e)
        })
    }
    var Xe;
    this.ima_dai_method = async function(e) {
        try {
            if (1 == e.configInfo.gpdr || "object" == typeof e.configInfo.gpdr && 1 == e.configInfo.gpdr.is_gdpr_country) return void Pe.iniatilizePlayer("", "", e)
        } catch (e) {}
        try {
            e.playbackInfo.resultObj.videoId && (S = e.playbackInfo.resultObj.videoId), D = document.getElementById(S), e.playbackInfo.resultObj && e.playbackInfo.resultObj.isDVR && e.playbackInfo.resultObj.isTimeLineMarker && (P = D.parentElement.querySelector("#" + A)), D.getElementById = function(e) {
                return D.querySelector("#" + CSS.escape(e))
            }
        } catch (e) {
            console.log("exception occured ", e)
        }! function(e) {
            var t = D.parentElement;
            if (D.getElementById("wrapParent")) xe() && Re(e);
            else {
                var a = document.createElement("DIV");
                a.setAttribute("id", "wrapParent"), a.innerHTML = '<div class="adBanner">This is an ad</div>', t.appendChild(a)
            }
            window.addEventListener("load", () => {
                xe() && Re(e), T && (T.adBlockerEnabled = xe)
            })
        }(e);
        try {
            await He("", null, e)
        } catch (e) {
            console.warn(e)
        }
        let t;
        b = D;
        let a = "",
            n = "";
        if (isApp) {
            e.playbackInfo && e.playbackInfo.resultObj && (t = e.playbackInfo.resultObj.dai_asset_key);
            try {
                var o = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                e.playbackInfo.resultObj.isEncrypted && (t = o ? e.playbackInfo.resultObj.dai_asset_key_hlsfp ? e.playbackInfo.resultObj.dai_asset_key_hlsfp : e.playbackInfo.resultObj.dai_asset_key : e.playbackInfo.resultObj.dai_asset_key_dash ? e.playbackInfo.resultObj.dai_asset_key_dash : e.playbackInfo.resultObj.dai_asset_key)
            } catch (a) {
                console.log(a), t = e.playbackInfo.resultObj.dai_asset_key
            }
        } else t = D.getElementById("assetKey").value, a = D.getElementById("cmsid").value, n = D.getElementById("vidoId").value;
        ! function(e, t, a, n, o) {
            I = new ImaDai;
            try {
                o.playbackInfo.resultObj.videoId ? I.setContainerDivId(o.playbackInfo.resultObj.videoId) : I.setContainerDivId(S)
            } catch (e) {
                console.log("exception setting videoid inside imadai wrapper", e)
            }
            var i = !1;
            !e || "" === e && " " === e || (i = !0, I.setAssetKey(e));
            !t || "" === t && " " === t || I.setCMSID(e);
            !a || "" === a && " " === a || I.setVideoID(e);
            Te = o.dai_max_retry || daiFailureRetryCount;
            var r = document.createElement("img");
            r.setAttribute("src", window.loader), r.setAttribute("class", "waiting-loader"), D.appendChild(r);
            var s = I.initStreamManager(n);
            i ? I.requestLiveStream() : I.requestVODStream(), v = function(e) {
                r.style.display = "none", console.log(e.detail), D.removeEventListener("loaded", v), D.removeEventListener("error", _);
                let t = e.detail;
                try {
                    console.log("old DAI URL", t), t = function(e, t) {
                        let a = t.playbackInfo.resultObj.videoURL,
                            n = e.split("originpath=")[1];
                        return a + "&originpath=" + n
                    }(t, o), console.log("new DAI URL", t)
                } catch (e) {}
                Pe.iniatilizePlayer(t, s, o)
            }, _ = function(e) {
                if (console.log("Error :", e), xe()) Re(o);
                else {
                    let t = "404";
                    try {
                        t = e.detail.getStreamData().errorMessage.split("code: ")[1]
                    } catch (e) {}
                    if (r.style.display = "block", Te > 0) {
                        if ("429" == t || 5 == t[0]) return sessionStorage.setItem(Me, 0), void Pe.iniatilizePlayer("", "", o);
                        Te -= 1, setTimeout(function() {
                            s = I.initStreamManager(n), i ? I.requestLiveStream() : I.requestVODStream()
                        }, 1e3 * (o.dai_max_retry_interval_secs || daiFailureRetryInterval))
                    } else 0 == Te && (sessionStorage.setItem(Me, 0), Pe.iniatilizePlayer("", "", o))
                }
            }, D.addEventListener("loaded", v), D.addEventListener("error", _)
        }(t, a, n, b, e)
    }, this.iniatilizePlayer = async function(a, n, o) {
        try {
            try {
                if (o.playbackInfo && o.playbackInfo.resultObj && o.playbackInfo.resultObj.isDVR && !o.playbackInfo.resultObj.dvrUrl.includes("start=")) {
                    var i = new Date,
                        r = i.getMonth() + 1,
                        s = i.getHours() - 4 + ":" + i.getMinutes() + ":" + i.getSeconds() + "+05:30&",
                        m = "?start=" + i.getFullYear() + "-" + r + "-" + i.getDate() + "T" + s,
                        f = o.playbackInfo.resultObj.dvrUrl.split("?");
                    o.playbackInfo.resultObj.dvrUrl = f[0] + m + f[1]
                }
            } catch (e) {
                console.log(e)
            }
            O = (new Date).getTime(), void 0 !== o.samsung_my_galaxy_app && (Oe = o.samsung_my_galaxy_app), Oe && void 0 !== o.samsung_freevideo_limit && (Ee = o.samsung_freevideo_limit), o.playbackInfo.resultObj.videoId && (S = o.playbackInfo.resultObj.videoId), j = E + S + O, D = document.getElementById(S), o.playbackInfo.resultObj && o.playbackInfo.resultObj.isDVR && o.playbackInfo.resultObj.isTimeLineMarker && null == (P = D.parentElement.querySelector("#" + A)) && ((b = document.createElement("DIV")).setAttribute("id", A), D.parentElement.appendChild(b), P = D.parentElement.querySelector("#" + A)), D.getElementById = function(e) {
                return D.querySelector("#" + CSS.escape(e))
            }
        } catch (e) {
            console.log("exception occured ", e)
        }
        var b;
        try {
            let e = o.profileInfo.contactMessage[0].subscription.accountServiceMessage,
                t = o.assetInfo.resultObj.containers[0].metadata.emfAttributes;
            for (var v = 0; v < e.length; v++) {
                var _ = e[v];
                t.packageid.includes(_.serviceID) && (be = !0)
            }
        } catch (e) {
            console.log(e)
        }
        window.instanceCounter = window.instanceCounter + 1, T = null;
        try {
            l || (l = new serviceFactory, null != o.convivaData && (o.apidata.appVersion = o.convivaData.app_version), l.initializeFactory(o.apidata)), o.playbackInfo && o.playbackInfo.resultObj && o.playbackInfo.resultObj.isTimeLineMarker && !c && ((c = new serviceFactory).initializeFactory(o.apidata), c.setVideoId(E + A + O), c.setLogixdocument(P))
        } catch (e) {}
        try {
            l.setConcurrencyFlag(l, !1)
        } catch (e) {}
        try {
            await He(a, n, o)
        } catch (e) {
            console.error(e)
        }
        if ("LIVE_SPORT" === o.type) try {
            var I = o.configInfo.free_preview.preview_based_classification_and_video_types;
            for (v = 0; v < I.length; v++)
                if ("LIVE_SPORT" === I[v].objectSubType) {
                    $ = parseInt(I[v].duration), o.assetInfo.resultObj.containers[0].metadata.emfAttributes.preview_duration = $, console.log("setting free preview duration from config");
                    break
                }
        } catch (e) {
            console.warn(e)
        }
        o.playbackInfo.resultObj && o.playbackInfo.resultObj.isTimeLineMarker && (De = "livePlayback");
        try {
            l || (l = new serviceFactory), l.setVideoId(j), l.setLogixdocument(D)
        } catch (e) {
            console.log("exception", e)
        }
        if (p = o.environment, l && o && (l.setSecurityToken(o.security_token), l.setAuthorization(o.accessToken)), isApp) {
            if (o.playbackInfo.resultObj && o.playbackInfo.resultObj.isDVR && o.playbackInfo.resultObj.isTimeLineMarker && (k = o.playbackInfo.resultObj.dvrUrl), g = [], o.configInfo && o.configInfo.app_player_config && o.configInfo.app_player_config.playback_quality_cfg && o.configInfo.app_player_config.playback_quality_cfg.playback_ql_options[0]) {
                var h = o.configInfo.app_player_config.playback_quality_cfg.playback_ql_options;
                for (v = 0; v < h.length; v++) g.push({
                    playback_ql_bitrate: h[v].playback_ql_bitrate,
                    playback_ql_id: h[v].playback_ql_id,
                    playback_ql_title: h[v].playback_ql_title,
                    playback_ql_render_title: h[v].playback_ql_render_title
                })
            }
            if (null != g && g.sort(function(e, t) {
                    const a = e.playback_ql_bitrate,
                        n = t.playback_ql_bitrate;
                    let o = 0;
                    return a < n ? o = 1 : a > n && (o = -1), o
                }), y = [], o.configInfo && o.configInfo.language_iso_code && o.configInfo.language_iso_code.length > 0 && (o.assetInfo && o.assetInfo.resultObj && o.assetInfo.resultObj.containers[0] && (pe = o.assetInfo.resultObj.containers[0].metadata.language), o.configInfo && o.configInfo.language_iso_code))
                for (v = 0; v <= o.configInfo.language_iso_code.length - 1; v++) y.push({
                    title: o.configInfo.language_iso_code[v].title,
                    locale_tilte: o.configInfo.language_iso_code[v].locale_tilte,
                    code: o.configInfo.language_iso_code[v].code
                })
        }
        var w = !1;
        try {
            e = new logituitPlayer, t = new logituitPlayer;
            let i = (new Date).getTime();
            if (e.calculatingPlayerTime(i), l && o && o.apidata && (null != o.convivaData && (o.apidata.appVersion = o.convivaData.app_version), l.initializeFactory(o.apidata)), TVConsole("user============", navigator.userAgent), "SPOTLIGHT" !== o.type && o.assetInfo && o.assetInfo.resultObj && !1 === o.assetInfo.resultObj.containers[0].metadata.isLive)
                if (!o || null != o.seasonInfo && null != o.showInfo) Fe(o);
                else try {
                    Fe(o)
                } catch (e) {
                    console.log("Exception occurs at Getting Carousel", e)
                }
            if (B = !1, isApp) {
                if (Z = !1, ne = !1, o && o.playbackInfo && o.playbackInfo.resultObj && (B = o.playbackInfo.resultObj.isEncrypted), ie = o.DeviceID, o.localeInfo && (le = o.localeInfo), o.assetInfo && o.assetInfo.resultObj && o.assetInfo.resultObj.containers[0]) {
                    V = o.assetInfo.resultObj.containers[0].metadata.contentId;
                    try {
                        te = o.assetInfo.resultObj.containers[0].metadata.emfAttributes.is_preview_enabled, ae = !!o.configInfo.free_preview && o.configInfo.free_preview.enable_preview
                    } catch (e) {}
                    oe = "Free" == o.assetInfo.resultObj.containers[0].metadata.emfAttributes.value
                }
                if (null != o.profileInfo || "SPOTLIGHT" === o.type || oe || (ae && te ? Z = !0 : ne = !0), null != o.profileInfo && "SPOTLIGHT" !== o.type && !oe)
                    if (d = o.profileInfo.contactMessage[0].subscription.accountServiceMessage, u = o.assetInfo.resultObj.containers[0].metadata.emfAttributes.packageid, 0 == d.length) ae && te ? Z = !0 : ne = !0;
                    else if (null != u && null != d && d.length > 0) {
                    var C = !1;
                    for (v = 0; v < d.length; v++) u.includes(d[v].serviceID) && (C = !0);
                    C || (ae && te ? Z = !0 : ne = !0)
                }
            }
            if (1 == B) {
                if (!isDrmSupported) return void
                function(e, t, a) {
                    var n = D.parentElement,
                        o = document.createElement("DIV");
                    o.setAttribute("class", "error_Screen"), o.setAttribute("id", "main_error_Screen");
                    var i = document.createElement("DIV");
                    i.setAttribute("class", "error_Screen_Image_Outerdiv");
                    var r = document.createElement("IMG");
                    r.setAttribute("class", "error_Screen_Image"), r.setAttribute("src", window.errorScreenImage), i.appendChild(r);
                    var s = document.createElement("DIV");
                    s.setAttribute("class", "error_Screen_Message"), s.innerHTML = "Drm is Not Supported By Current Browser", i.appendChild(s);
                    var l = document.createElement("DIV");
                    l.setAttribute("class", "error_Screen_Button_Outerdiv");
                    var c = document.createElement("button");
                    c.setAttribute("class", "error_Screen_retry_button"), c.innerHTML = "Back", l.appendChild(c), l.onclick = function(e) {
                        console.log("player is hit"),
                            function() {
                                try {
                                    D.parentElement.querySelector("#main_error_Screen").setAttribute("style", ""), window.history.back()
                                } catch (e) {
                                    console.error(e)
                                }
                            }()
                    }, o.appendChild(i), o.appendChild(l), n.appendChild(o), o.style.display = "block"
                }();
                var L = o.assetInfo.resultObj.containers[0].id;
                const e = o.DeviceID;
                var M = "";
                let t = function(t) {
                    var a = navigator.userAgent.toLowerCase();
                    if (ce = isMobile(), !1, !1, de = "Chrome", t = t, ce || a.match(/ipad/i) || a.match(/iphone/i) || a.match(/iPod/i)) a.match(/ipad/i) || a.match(/iphone/i) || a.match(/iPod/i) ? (isIOSDevice = !0, de = -1 != a.indexOf("CriOS") || -1 != a.indexOf("chrome") ? "Chrome" : -1 != a.indexOf("safari") || -1 != a.indexOf("Safari") ? "Safari" : a.match("fxios") || a.match("firefox") ? "FireFox" : "Chrome") : de = a.match(/android/i) ? -1 != a.indexOf("CriOS") || -1 != a.indexOf("chrome") ? "Chrome" : (a.match("fxios") || a.match("firefox"), "Chrome") : -1 != a.indexOf("CriOS") || -1 != a.indexOf("chrome") ? "Chrome" : -1 != a.indexOf("safari") || -1 != a.indexOf("Safari") ? "Safari" : a.match("fxios") || a.match("firefox") ? "FireFox" : "Chrome";
                    else {
                        var n = !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0,
                            o = !!document.documentMode,
                            i = !o && !!window.StyleMedia,
                            r = "undefined" != typeof InstallTrigger,
                            s = /constructor/i.test(window.HTMLElement) || (!window.safari || "undefined" != typeof safari && safari.pushNotification).toString();
                        s = navigator.vendor.match("Apple") && navigator.platform.match("MacIntel");
                        var l = !(!window.chrome || !window.chrome.webstore && !window.chrome.runtime),
                            c = (l || n) && !!window.CSS;
                        de = o && a.indexOf("ie") > -1 ? "IE" : i || -1 != a.indexOf("edg") || navigator.userAgent.indexOf("Edge") >= 0 ? "IE" : l && -1 != a.indexOf("chrome") ? "Chrome" : r && (-1 != a.indexOf("fxios") || a.match("firefox")) ? "Chrome" : !s || -1 == a.indexOf("safari") && -1 == a.indexOf("Safari") ? "Chrome" : "Safari";
                        var d = "Detecting browsers by ducktyping: \n";
                        d += "isFirefox: " + r + "\n", d += "isChrome: " + l + "\n", d += "isSafari: " + s + "\n", d += "isOpera: " + n + "\n", d += "isIE: " + o + "\n", d += "isEdge: " + i + "\n", d += "isBlink: " + c + "\n", console.log("Browser Agent Detail output :", d)
                    }
                    return fe = {
                        platform: "web",
                        deviceId: e,
                        actionType: "play",
                        browser: de,
                        assetId: t,
                        os: de
                    }, console.log("drmLicenceRequest =>", fe), fe
                }(L);
                l.getDRMLicence(p, t, e).then(function(e) {
                    console.log("DRM licence data", e);
                    var t = JSON.parse(e);
                    t && t.resultObj && t.resultObj.laURL && (w = t.resultObj.laURL), t && t.resultObj && t.resultObj.token && (M = t.resultObj.token), M.length > 0 && (w = w + "?ExpressPlayToken=" + M), console.log("DRM key options", w);
                    isMobile();
                    1 != Z || "SPOTLIGHT" === o.type ? Ke(a, n, w, o) : We(a, n, w, o)
                }, function(e) {
                    ot(a, n, o)
                }).catch(function(e) {
                    ot(a, n, o)
                })
            } else 1 == Z && "SPOTLIGHT" !== o.type ? We(a, n, w, o) : (console.log("No DRM clip"), Ke(a, n, w, o))
        } catch (a) {
            console.error("exeception", a), e = new logituitPlayer, t = new logituitPlayer
        }
    };
    var Qe = isMobile();

    function Ze() {
        M = "Live", D.querySelector(".vjs-control-bar .vjs-progress-control .vjs-progress-holder .vjs-play-progress").style.display = "none", D.getElementsByClassName("vjs-progress-holder")[0].style.backgroundColor = "transparent";
        var e = !1,
            a = !1,
            n = parseFloat(localStorage.getItem("volumelevel")),
            r = D.getElementById("dvr_live"),
            s = P,
            l = P.querySelector("#go_live"),
            c = D,
            d = D.getElementsByClassName("fordBackButtonClass")[0];
        if (T.isDvr && !T.isTimelineMarker) r && (r.style.display = "block"), l && (l.style.display = "none"), d && (d.style.opacity = "0.5"), o && o.player;
        else {
            try {
                o && o.player && (a = o.player.muted(), e = o.player.isFullscreen())
            } catch (e) {
                console.log(e)
            }
            t.clickedOnGoLive(se), r && (r.style.display = "block"), l && (l.style.display = "none"), c && (c.style.display = "block"), s && (s.style.display = "none");
            try {
                if (i && i.player) {
                    try {
                        a ? i.player.muted(!0) : (i.player.muted(!1), i.player.volume(n))
                    } catch (e) {
                        console.log(e)
                    }
                    if (Qe || (e ? (i.player.isFullscreen(!0), D.getElementsByClassName("custom-fullscreenIcon")[0].style.display = "none", D.getElementsByClassName("custom-exit-fullscreenIcon")[0].style.display = "block") : i.player.isFullscreen(!1)), Qe && e) D.getElementsByClassName("vjs-control-bar")[0].getElementsByClassName("vjs-fullscreen-control")[0].click();
                    o.player.pause(), i.player.focus(), i.player.play()
                }
            } catch (e) {
                console.warn(e)
            }
            D.querySelector("#seekbar").value = 100, setTimeout(function() {
                i.player.play()
            }, 500)
        }
    }

    function $e() {
        M = "Dvr";
        var e, t, a = !1,
            n = 1 * D.querySelector("#seekbar").value;
        if (T.isTimelineMarker) {
            i && i.player && (e = i.player.duration()), t = e / 100 * n;
            var r = !1,
                s = parseFloat(localStorage.getItem("volumelevel"));
            try {
                i && i.player && (r = i.player.muted(), a = i.player.isFullscreen())
            } catch (e) {
                console.log(e)
            }
            try {
                P.style.display = "block", D.style.display = "none", D.getElementById("dvr_live").style.display = "none", P.querySelector("#go_live").style.display = "block"
            } catch (e) {
                console.log(e)
            }
            try {
                if (o && o.player) {
                    try {
                        r ? o.player.muted(!0) : (o.player.muted(!1), o.player.volume(s))
                    } catch (e) {
                        console.log(e)
                    }
                    if (Qe || (a ? (o.player.isFullscreen(!0), P.getElementsByClassName("custom-fullscreenIcon")[0].style.display = "none", P.getElementsByClassName("custom-exit-fullscreenIcon")[0].style.display = "block") : o.player.isFullscreen(!1)), Qe && a) P.getElementsByClassName("vjs-control-bar")[0].getElementsByClassName("vjs-fullscreen-control")[0].click();
                    o.player.currentTime(t), i.player.pause(), o.player.focus(), o.player.play()
                }
            } catch (e) {
                console.log(e)
            }
            se = {
                dvrCurrentTime: n,
                lengthWatchedPercentage: t
            }
        } else {
            D.getElementById("dvr_live").style.display = "none", P.querySelector("#go_live").style.display = "block", D.parentElement.querySelector("#" + S).getElementsByClassName("vjs-control-bar")[0].getElementsByClassName("fordBackButtonClass")[0].style.display = "block", e = o.player.duration();
            o.player.currentTime();
            t = e / 100 * n;
            try {
                o && o.player && (o.player.currentTime(t), o.player.play(), o.player.muted(!1))
            } catch (e) {
                console.log(e)
            }
        }
    }

    function et(e, t) {
        console.log("coming to show hide dvr");
        try {
            if (i && i.player && o && o.player) {
                let n, r, s, l, c = t.time;
                "dvrPlayback" == e.playbackMode_TM ? (n = P.getElementsByClassName("vjs-marker"), r = o.player.liveTracker.liveCurrentTime()) : (n = D.getElementsByClassName("vjs-marker"), r = i.player.duration()), l = Math.floor(c / r * 100), window.screen.width > 481 && window.screen.width < 921 ? (s = "-9em", l <= 15 && (s = "-3em")) : (s = "-13em", l >= 90 ? s = "-19em" : l <= 15 && (s = "-4em"));
                for (var a = 0; a < n.length; a++)(Xe = n[a].children[0]) && (Xe.style.display = "none");
                for (a = 0; a < n.length; a++) t.key === n[a].dataset.markerKey && (Xe = n[a].children[0]) && (Xe.style.left = s, Xe.style.opacity = "1", Xe.style.display = "block", Xe.style.visibility = "visible", setTimeout(function() {
                    Xe.style.visibility = "hidden", Xe.style.transition = "visibility 0s linear 0.33s, opacity 0.33s linear", Xe.style.opacity = "0"
                }, 2500))
            }
        } catch (e) {
            console.log(e)
        }
    }
    var tt = function(e) {
            if (clearInterval(h), "dvrPlayback" == e.detail.opt.playbackMode_TM) return o.player.currentTime(e.detail.marker.time), void nt(e);
            M = "Dvr", console.log("coming to show hide dvr");
            var a = !1,
                n = !1,
                r = parseFloat(localStorage.getItem("volumelevel"));
            try {
                i && i.player && (n = i.player.muted(), a = i.player.isFullscreen())
            } catch (e) {
                console.log(e)
            }
            var s = D.getElementById("dvr_live"),
                l = P.querySelector("#go_live"),
                c = P,
                d = D;
            l && (l.style.display = "block"), s && (s.style.display = "none"), c && (c.style.display = "block"), d && (d.style.display = "none");
            try {
                if (o && o.player) {
                    try {
                        n ? o.player.muted(!0) : (o.player.muted(!1), o.player.volume(r))
                    } catch (e) {
                        console.log(e)
                    }
                    if (Qe || (a ? (o.player.isFullscreen(!0), P.getElementsByClassName("custom-fullscreenIcon")[0].style.display = "none", P.getElementsByClassName("custom-exit-fullscreenIcon")[0].style.display = "block") : o.player.isFullscreen(!1)), Qe && a) P.getElementsByClassName("vjs-control-bar")[0].getElementsByClassName("vjs-fullscreen-control")[0].click();
                    o.player.currentTime(e.detail.marker.time), i.player.pause(), o.player.focus(), o.player.play(), nt(e)
                }
            } catch (e) {
                console.log(e)
            }
            t.timelineClick(e)
        },
        at = function(e) {
            M = "Dvr";
            var t = !1,
                a = !1,
                n = parseFloat(localStorage.getItem("volumelevel"));
            try {
                i && i.player && (a = i.player.muted(), t = i.player.isFullscreen());
                var r = D.getElementById("dvr_live"),
                    s = P.querySelector("#go_live"),
                    l = P,
                    c = D;
                if (s && (s.style.display = "block"), r && (r.style.display = "none"), l && (l.style.display = "block"), c && (c.style.display = "none"), o && o.player) {
                    try {
                        a ? o.player.muted(!0) : (o.player.muted(!1), o.player.volume(n))
                    } catch (e) {
                        console.log(e)
                    }
                    if (Qe || (t ? (o.player.isFullscreen(!0), P.getElementsByClassName("custom-fullscreenIcon")[0].style.display = "none", P.getElementsByClassName("custom-exit-fullscreenIcon")[0].style.display = "block") : o.player.isFullscreen(!1)), Qe && t) P.getElementsByClassName("vjs-control-bar")[0].getElementsByClassName("vjs-fullscreen-control")[0].click();
                    o.player.currentTime(o.player.liveTracker.liveCurrentTime() - 10 * e.detail.touchcount), i.player.pause(), o.player.focus(), o.player.play()
                }
            } catch (e) {
                console.warn(e)
            }
        };

    function nt(e) {
        let t, a = e.detail.marker.time;
        h = setInterval(function() {
            if ((t = e.detail.opt.timeline_markers).length > 0)
                for (var n = t.length - 1; n >= 0; n--)
                    if (a === t[n].time) {
                        Math.ceil(o.player.currentTime()) >= t[n].markout_time && (void 0 !== t[n - 1] ? (o.player.currentTime(t[n - 1].time), a = t[n - 1].time) : (clearInterval(h), Ze()));
                        break
                    }
        }, 2e3)
    }
    async function ot(e, t, a) {
        var n = D.parentElement,
            o = document.createElement("DIV");
        o.setAttribute("class", "error_Screen"), o.setAttribute("id", "main_error_Screen");
        var i = document.createElement("DIV");
        i.setAttribute("class", "error_Screen_Image_Outerdiv");
        var r = document.createElement("IMG");
        r.setAttribute("class", "error_Screen_Image"), r.setAttribute("src", window.errorScreenImage), i.appendChild(r);
        var s = document.createElement("DIV");
        s.setAttribute("class", "error_Screen_Message"), s.innerHTML = "Seems there is some issue with this content", i.appendChild(s);
        var c = document.createElement("DIV");
        c.setAttribute("class", "error_Screen_Button_Outerdiv");
        var d = document.createElement("button");
        d.setAttribute("class", "error_Screen_retry_button");
        try {
            if (a.playbackInfo.resultObj.packId) {
                const e = {
                    packId: a.playbackInfo.resultObj.packId,
                    contentId: a.assetInfo.resultObj.containers[0].metadata.contentId,
                    subType: a.assetInfo.resultObj.containers[0].metadata.objectSubtype,
                    deviceId: a.DeviceID
                };
                l || (l = new serviceFactory, null != a.convivaData && (a.apidata.appVersion = a.convivaData.app_version), l.initializeFactory(a.apidata)), await l.updateConcurrency(e)
            }
        } catch (e) {
            console.error(e)
        }
        d.innerHTML = "Retry", c.appendChild(d), c.onclick = function(n) {
            console.log("player is hit"), async function(e, t, a, n) {
                try {
                    let e = await Ue(n.retryVideoUrl, 1, n);
                    n.playbackInfo = e, D.parentElement.querySelector("#main_error_Screen").setAttribute("style", ""), Pe.iniatilizePlayer(t, a, n)
                } catch (e) {
                    console.error(e)
                }
            }(0, e, t, a)
        }, o.appendChild(i), o.appendChild(c), n.appendChild(o), o.style.display = "block"
    }
    this.destroyingPlayer = function() {
        try {
            var a = o && o.player && o.player.currentTime() ? o.player.currentTime() : 0;
            Oe && !Le && a && lt("destroyingPlayer", "", ""), D.removeEventListener("loaded", v), D.removeEventListener("error", _), e && t && k ? (e.destroyPlayer(), t.destroyPlayer(), e = null, t = null, window.instanceCounter = window.instanceCounter - 1) : e && !k && (e.destroyPlayer(), e = null, window.instanceCounter = window.instanceCounter - 1), null != window.xhook && window.instanceCounter <= 0 && window.xhook.disable(), j && window.logixGlobalVariables.delete(j), T.isDvr && (clearInterval(h), D.removeEventListener("markerClick", tt), D.removeEventListener("dvrSwitch", at), P.removeEventListener("markerClick", tt), P.removeEventListener("dvrSwitch", at)), D.removeEventListener("audioClick", it)
        } catch (e) {
            console.log("error in Video-player-component destroyingPlayer", e)
        }
    }, this.playerMute = function(e) {
        e && e.muted(!0)
    }, this.playerUnmute = function(e) {
        e && e.muted(!1)
    }, this.playerPlay = function(e) {
        e && e.play()
    }, this.playerPause = function(e) {
        e && e.pause()
    };
    var it = function(e) {
        console.log("audio click", e);
        var t = e.detail.playerdata;
        if (void 0 !== t.assetInfo) {
            let e = "";
            try {
                e = t.playbackInfo.resultObj.dai_asset_key, t.playbackInfo.resultObj.isEncrypted && (e = isSafari ? t.playbackInfo.resultObj.dai_asset_key_hlsfp ? t.playbackInfo.resultObj.dai_asset_key_hlsfp : t.playbackInfo.resultObj.dai_asset_key : t.playbackInfo.resultObj.dai_asset_key_dash ? t.playbackInfo.resultObj.dai_asset_key_dash : t.playbackInfo.resultObj.dai_asset_key)
            } catch (t) {
                e = ""
            }
            t.playbackInfo.resultObj.isDVR, "" !== e.trim() && void 0 !== e ? Pe.ima_dai_method(t) : "" !== Ye.playback_url && Pe.iniatilizePlayer("", "", t)
        }
    };

    function rt(e) {
        Oe && !Le && lt(e.type, e, null)
    }

    function st(e) {
        Oe && !Le && lt(e.type, e, null)
    }

    function lt(e, t, a) {
        try {
            var n = {},
                i = o.player.currentTime();
            switch (i = Math.round(i), e) {
                case "onfirstPlay":
                    n = {
                        EventName: "VIDEO_PLAY",
                        Attributes: {
                            VideoID: V,
                            Brand: "samsungMyGalaxy"
                        }
                    };
                    break;
                case "onAdEnd":
                    n = {
                        EventName: "Ad Play",
                        Attributes: {
                            VideoID: V,
                            Brand: "samsungMyGalaxy"
                        }
                    };
                    break;
                case "onPlay":
                    n = {
                        EventName: "VIDEOPLAY ACTIONS",
                        Attributes: {
                            VideoID: V,
                            "Play Time": 0,
                            Brand: "samsungMyGalaxy",
                            "Action Type": "Play"
                        }
                    };
                    break;
                case "onPause":
                    n = {
                        EventName: "VIDEOPLAY ACTIONS",
                        Attributes: {
                            VideoID: V,
                            "Play Time": i,
                            Brand: "samsungMyGalaxy",
                            "Action Type": "Pause"
                        }
                    };
                    break;
                case "destroyingPlayer":
                case "retryplaylist":
                case "error":
                case "onStalled":
                case "onerror":
                    Ce = Math.round(Ce), console.log("actualWatchTime on destroy:::::::::::::::::::", Ce), n = {
                        EventName: "VIDEO_STOP",
                        Attributes: {
                            VideoID: V,
                            Brand: "samsungMyGalaxy",
                            "Play Time": Math.round(i),
                            StreamTime: Ce
                        }
                    }, Le = !0
            }
            window.JavaScriptBridge && window.JavaScriptBridge.logEvent && window.JavaScriptBridge.logEvent(JSON.stringify(n), function(e) {
                console.log("SamsungMyGalaxy App Event", e)
            })
        } catch (e) {
            console.warn("error in reportEventToMySamsung()", e)
        }
    }
    D.addEventListener("audioClick", it)
}!isChrome() || chrome && chrome.cast || loadScripts(base2 + "library/src/cast_sender.js", 678910, function() {
    loadScripts(base2 + "library/src/cast_framework.js", 456440, function() {
        var e = {};
        if (console.log("--cast-- initiating cast-player"), e.receiverApplicationId = "45FFCF42", isChrome()) try {
            chrome.cast ? e.autoJoinPolicy = chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED : console.warn("chrome cast is undefined"), e.resumeSavedSession = !0, cast.framework.CastContext.getInstance().setOptions(e), console.log(e), cast.framework ? (window.remotePlayer = new cast.framework.RemotePlayer, window.remotePlayerController = new cast.framework.RemotePlayerController(remotePlayer)) : console.log("cast frame is undefined"), window.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.IS_CONNECTED_CHANGED, function(e) {
                console.log(e), e.value ? console.log("####connection####") : console.log("####disconnection####")
            }.bind(this))
        } catch (e) {
            console.log("exception", e)
        }
    })
});