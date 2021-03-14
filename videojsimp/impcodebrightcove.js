/**
 * get Player CoreData
 */
function getPlayerCoreData(episodeAtvBigImg, showLogo, getVideoDetailInfoData, isLive) {

    // get video information
    if (isLive == true || isLive == "true") {
        var playerAccountId = getVideoDetailInfoData.accountId;
        var videoTier = getVideoDetailInfoData.videoTier;
        var videoTitle = getVideoDetailInfoData.videoTitle;
        var playerVideoId = getVideoDetailInfoData.videoId;
    } else if (isLive == false || isLive == "false") {
        var playerAccountId = getVideoDetailInfoData["0"].cmsinfo.account_id;
        var videoTier = getVideoDetailInfoData["0"].tier;
        if (getVideoDetailInfoData["0"].season == null || getVideoDetailInfoData["0"].season == "null") {
            var videoTitle = getVideoDetailInfoData["0"].title + " S 0 Ep 0";
        } else {
            var videoTitle = getVideoDetailInfoData["0"].title + " S" + getVideoDetailInfoData["0"].season + " Ep " + getVideoDetailInfoData["0"].episode;
        }
        var playerVideoId = getVideoDetailInfoData["0"].cmsinfo.id;
    }

    // get device id
    getDeviceId(function(deviceId) {
        // Get cms configuration data from localstorage
        var getCMSVideoInfo = localStorage.getItem("videocmsinfo");
        var parsedCMSInfoData = (JSON.parse(getCMSVideoInfo));

        // Get video cms configuration data from localstorage
        var getVideocms = parsedCMSInfoData.videocms;
        var requestorId = parsedCMSInfoData.adobe.requestor_id;

        // match videoinfo to video cmd configuration data
        function findVideoPlayerData(item) {
            return item.account_id === playerAccountId;
        }

        var searchVideoPlayerData = getVideocms.find(findVideoPlayerData);
        var playerId = searchVideoPlayerData.tv_player_id;
        var playerConfigId = searchVideoPlayerData.ssai_config_id;

        localStorage.setItem("playerShowLogo", showLogo);
        localStorage.setItem("playerTitle", videoTitle);
        localStorage.setItem("playerConfigId", playerConfigId);
        localStorage.setItem("playerVideoId", playerVideoId);

        citylineVideoPlayer(requestorId, playerId, playerConfigId, playerAccountId, playerVideoId, videoTier, videoTitle, deviceId, episodeAtvBigImg, showLogo, isLive);
    });
}

/**
 * cityline basic video player
 */

function citylineVideoPlayer(requestorId, playerId, playerConfigId, playerAccountId, playerVideoId, videoTier, videoTitle, deviceId, episodeAtvBigImg, showLogo, isLive) {
    console.log('From citylineVideoPlayer:');
    console.log(APP_STATE_PARAMS.USER_RIGHTS);
    if (videoTier !== 'free') {
        // check user logged in
        if (APP_STATE_PARAMS.USER_LOGGED_IN) {
            //check user entitlement
            var checkEntitlementStatus = checkEntitlementVal(APP_STATE_PARAMS.USER_RIGHTS, videoTier);
            if (checkEntitlementStatus == true || checkEntitlementStatus == "true") {
                // Add data to episode container
                var displayEpisodeInfo = '<img class="show_bg" src="' + episodeAtvBigImg + '" alt="Background"><div class="video-info"><div class="show_logo"><img class="show_logo" src="' + showLogo + '"></div><div class="title">' + videoTitle + '</div></div><div id="user-spin"></div>';
                $("div.video-error-container").html("");
                $("div.video-error-container").append(displayEpisodeInfo);
                cityTvNow.changeDepth(cityTvNow._DEPTH.EPISODES_INFO);
                var initiateAuthorizationGetData = initiateAuthorization(deviceId, requestorId, videoTier);
                if (initiateAuthorizationGetData) {
                    var getMediaTokenData = getMediaToken(deviceId, requestorId, videoTier);
                } else {
                    //
                    $("#cover-spin").css("display", "block");
                    setTimeout(function() {
                        $('#cover-spin').fadeOut();
                    }, 3000);
                    // Add data to episode error container
                    document.getElementById("show_sub_bg").src = episodeAtvBigImg;
                    document.getElementById("show_sub_logo").src = showLogo;
                    var div = document.getElementById('showSubTitle');
                    div.innerHTML += videoTitle;
                    cityTvNow.changeDepth(cityTvNow._DEPTH.SHOW_ERROR_INFO);
                }
                if (getMediaTokenData) {
                    localStorage.setItem("metaToken", getMediaTokenData);
                    if (isLive == true || isLive == "true") {
                        var playerHTML = '<video-js id="citytvplayer" data-video-id="' + playerVideoId + '"data-account="' + playerAccountId + '" data-player="' + playerId + '" preload="metadata" data-embed="default" controls="" autoplay  class="vjs-fluid active" width="100%" height="100%"></video-js>';
                        // Inject the player code into the DOM
                        document.getElementById("player").innerHTML = playerHTML;
                        // check brigtcoveplayer script file is present
                        if ($("#brightcoveJs").length > 0) {
                            document.getElementById("brightcoveJs").remove();
                        }
                        // Add and execute the player script tag
                        var playerScript = document.createElement("script");
                        playerScript.src = "https://players.brightcove.net/" + playerAccountId + "/" + playerId + "_default/index.min.js";
                        playerScript.id = "brightcoveJs";
                        // Add the script tag to the document
                        document.body.appendChild(playerScript);
                        // Call a function to play the video once player's JavaScript
                        // loaded
                        playerScript.onload = getDRMLivePlayercallback;
                    } else {
                        /*var playerHTML = '<video-js id="citytvplayer" data-video-id="' + playerVideoId + '"data-account="' + playerAccountId + '" data-player="' + playerId + '" preload="metadata" data-embed="default" controls="" autoplay  class="vjs-fluid active" width="100%" height="100%"></video-js><script async="" charset="utf-8" src="https://players.brightcove.net/5282994601001/7Epfnoc4kt_default/index.min.js"></script>';
                        // Inject the player code into the DOM
                        document.getElementById("player").innerHTML = playerHTML;
                        getDRMPlayercallback();*/
                    }
                }
            } else {
                cityTvNow.changeDepth(cityTvNow._DEPTH.UNDERSTAND_AND_CONTINUE_BUTTON);
                refreshSignInLabel();
            }
        } else {
            //disply sigin depth
            APP_STATE_PARAMS.PLAYER_STATUS = true;
            $("#cover-spin").css("display", "block");
            setTimeout(function() {
                $('#cover-spin').fadeOut();
            }, 3000);
            // change episode depth
            document.getElementById("show_bg").src = episodeAtvBigImg;
            document.getElementById("show_logo").src = showLogo;
            $("#showTitle").empty();
            var div = document.getElementById('showTitle');
            div.innerHTML += videoTitle;
            cityTvNow.changeDepth(cityTvNow._DEPTH.EPISODES_INFO);
        }
    } else {
        $("#cover-spin").css("display", "block");
        var cityplayer;
       /* cityTvNow.changeDepth(cityTvNow._DEPTH.VIDEO_PLAYER);
        var playerHTML = '<video-js id="citytvplayer" data-video-id="' + playerVideoId + '"data-account="' + playerAccountId + '" data-player="' + playerId + '" preload="metadata" data-embed="default" controls="" autoplay  class="vjs-fluid active" width="100%" height="100%"></video-js><script async="" charset="utf-8" src="https://players.brightcove.net/2226196965001/otsh5bdKs_default/index.min.js"></script>';
        // Inject the player code into the DOM
        document.getElementById("player").innerHTML = playerHTML;*/
        cityTvNow.changeDepth(cityTvNow._DEPTH.NONDRMPLAYER);
        var myPlayerEl = document.getElementById("myPlayerID");
        myPlayerEl.setAttribute('data-account', playerAccountId);
        myPlayerEl.setAttribute('data-player', playerId);
        myPlayerEl.setAttribute('data-video-id', playerVideoId);
        
        setTimeout(function() {
            $('#cover-spin').fadeOut();
        }, 3000);
        
        cityplayer = bc(myPlayerEl);
        console.log(cityplayer);
        getNonDRMPlayercallback(cityplayer);
    }
}

/**
 * check entitlement of user
 */
function checkEntitlementVal(userRightsArray, videoTier) {
        var userEntitlementArray = userRightsArray;
        var videoTierValue = userEntitlementArray.includes(videoTier);
        return videoTierValue;
    }
    /**
     * Initialize the player and start the video
     */
function getDRMPlayercallback() {

    var cityplayer;
    var vTag = document.getElementsByTagName('video-js')[0];
    var cityLineShowLogo = localStorage.getItem("playerShowLogo");
    var videoTitle = localStorage.getItem("playerTitle");
    var playerConfigId = localStorage.getItem("playerConfigId");
    var playerVideoId = localStorage.getItem("playerVideoId");
    var metaToken = localStorage.getItem("metaToken");

    cityplayer = bc(vTag);
    // set catalog param to call drm video
    var catalogParams = {};
    catalogParams.id = playerVideoId;
    catalogParams.adConfigId = playerConfigId;
    catalogParams.tveToken = metaToken;

    cityplayer.catalog.getVideo(catalogParams, function(error, video) {
        const {
            sources
        } = video;
        const ssai_source = {};
        for (var i = 0; i < sources.length; i += 1) {
            if (sources[i].key_systems) {
                if (sources[i].key_systems['com.widevine.alpha']) {
                    ssai_source.type = 'application/dash+xml';
                    ssai_source.keySystems = {
                        'com.widevine.alpha': sources[i].key_systems['com.widevine.alpha'].license_url,
                    };
                    ssai_source.src = sources[i].src;
                    ssai_source.vmap = sources[i].vmap;
                    break;
                }
            }
        }
        video.sources = [dash_source];
        // deal with error
        cityplayer.catalog.load(video);
    });

    customCityPlayer(cityplayer, cityLineShowLogo, videoTitle);
    cityTvNow.changeDepth(cityTvNow._DEPTH.VIDEO_PLAYER);
}

/**
 * Initialize the player and start drm protected video
 */
function getNonDRMPlayercallback(cityplayer) {
    var cityLineShowLogo = localStorage.getItem("playerShowLogo");
    var videoTitle = localStorage.getItem("playerTitle");
    customCityPlayer(cityplayer, cityLineShowLogo, videoTitle);
}

/**
 * Initialize the player and start the live video
 */
function getDRMLivePlayercallback() {

    var cityplayer;
    var vTag = document.getElementsByTagName('video-js')[0];

    var cityLineShowLogo = localStorage.getItem("playerShowLogo");
    var videoTitle = localStorage.getItem("playerTitle");
    var playerConfigId = localStorage.getItem("playerConfigId");
    var playerVideoId = localStorage.getItem("playerVideoId");
    var metaToken = localStorage.getItem("metaToken");
    var cityLineShowLogo = "";
    cityplayer = bc(vTag);
    var catalogParams = {};
    catalogParams.id = playerVideoId;
    catalogParams.adConfigId = playerConfigId;
    catalogParams.tveToken = metaToken;
    cityplayer.catalog.getVideo(catalogParams, function(error, video) {
        const dash_source = {};
        if (video.sources) {
            video.sources.forEach(function(source, index) {
                if (source.type && source.type === 'application/dash+xml') {
                    dash_source.src = source.src.replace('https://citylive.akamaized.net', 'https://citytv-live-drm-citytvlivedrmprod.streaming.mediaservices.windows.net');
                    dash_source.type = source.type;
                }
            });
        }
        video.sources = [dash_source];
        cityplayer.catalog.load(video);
    });
    customCityPlayer(cityplayer, cityLineShowLogo, videoTitle);
    cityTvNow.changeDepth(cityTvNow._DEPTH.VIDEO_PLAYER);
}

/**
 * player main custom function to add custom buttons
 */
function customCityPlayer(cityplayer, cityLineShowLogo, videoTitle) {

        // define option parameter
        var options = {};
        options.logo = cityLineShowLogo;
        options.title = videoTitle;
        // player custom buttons and info components
        playerCustomButtonComponent(cityplayer);
        // playerVideoInformationComponent(cityplayer, options);
        // player seekbar,toggle and events components
        //playerSeekControlComponent(cityplayer);
        playerSeekbarToggleEvents(cityplayer);
        playerClickevent(cityplayer);
    }
    /**
     * custom back and ccbutton function
     */
function playerCustomButtonComponent(player) {

    var Button = videojs.getComponent('Button');
    var CitytvBackButton = videojs.extend(Button, {
        constructor: function CitytvBackButton(player, options) {
            Button.apply(this, arguments);
            this.player_ = player;
            this.options_ = options;
        },
        buildCSSClass: function() {
            return "vjs-back-button-citytv vjs-extended-controls-citytv";
        },
        handleKeyDown: function(event) {
            if (isEventKeyCityTv(event, 'Enter')) {
                console.log("gggggggggg");
            } else if (isEventKeyCityTv(event, 'ArrowRight')) {
                player.controlBar.getChild('CitytvExtendedControlBar').getChild('CitytvBackButtontwo').el().focus();
            }
            Button.prototype.handleKeyDown.call(this, event);
        },
    });
    videojs.registerComponent('CitytvBackButton', CitytvBackButton);
    //player.getChild("controlBar").addChild("customButton", {});

    var CitytvBackButtontwo = videojs.extend(Button, {
        constructor: function CitytvBackButtontwo(player, options) {
            Button.apply(this, arguments);
            this.player_ = player;
            this.options_ = options;
        },
        buildCSSClass: function() {
            return "vjs-toggle-caption-citytv vjs-extended-controls-citytv";
        },
        handleKeyDown: function(event) {
            if (isEventKeyCityTv(event, 'Enter')) {
                console.log("gggggggggg");
            }
            Button.prototype.handleKeyDown.call(this, event);
        },
    });
    videojs.registerComponent('CitytvBackButtontwo', CitytvBackButtontwo);
    //player.getChild("controlBar").addChild("CitytvBackButtontwo", {});



    var CitytvPlayPauseButton = videojs.extend(Button, {
        constructor: function CitytvPlayPauseButton(player, options) {
            Button.apply(this, arguments);
            this.player_ = player;
            this.options_ = options;
        },
        buildCSSClass: function() {
            return "vjs-play-button-citytv vjs-extended-controls-citytv";
        },
        handleKeyDown: function(event) {
            var isPaused = this.player_.paused();
            var isPlaying = !this.player_.paused();
            if (isEventKeyCityTv(event, 'Enter')) {
                if (isPaused == true) {
                    //$('.vjs-rdm-video-info').css('opacity', '0');
                    event.preventDefault();
                    this.player_.play();
                    this.addClass("vjs-play-button-citytv");
                    this.removeClass("vjs-pause-button-citytv");
                }
                if (isPlaying == true) {
                    //$('.vjs-rdm-video-info').css('opacity', '1');
                    event.preventDefault();
                    this.player_.pause();
                    this.removeClass("vjs-play-button-citytv");
                    this.addClass("vjs-pause-button-citytv");

                }
            }
            Button.prototype.handleKeyDown.call(this, event);
        },
    });
    videojs.registerComponent('CitytvPlayPauseButton', CitytvPlayPauseButton);
    //player.getChild("controlBar").addChild("CitytvBackButtontwo", {});

    var Component = videojs.getComponent('Component');
    var CitytvExtendedControlBar = videojs.extend(Component, {
        constructor: function ExtendedControlBar(player, options) {
            Component.apply(this, arguments);
            this.addChild('CitytvBackButton', options);
            this.addChild('CitytvBackButtontwo', options);
            this.addChild('CitytvPlayPauseButton', options);
        },
        createEl: function() {
            return videojs.dom.createEl('div', {
                className: 'vjs-extended-control-bar-citytv'
            });
        },
    });
    videojs.registerComponent('CitytvExtendedControlBar', CitytvExtendedControlBar);
    player.controlBar.addChild('CitytvExtendedControlBar', {});
}


/**
 * player seekbar,toggle and events controls
 */
function playerSeekbarToggleEvents(player) {
    player.controlBar.removeChild("PlayToggle");
}


function playerClickevent(player) {

    /* player.controlBar.CitytvPlayPauseButton.on('keydown', function(event) {
         console.log("ccccccccccvvvvvvv");
     })*/

    // call when player inactive mode
    player.on('userinactive', function() {
        console.log("gggggggggggggggggggggg");
        player.controlBar.getChild('CitytvExtendedControlBar').getChild('CitytvPlayPauseButton').el().focus();
    });
    // call when player first time play
    player.one('play', function() {
        console.log("gggggggggggggggggggggg");
        player.controlBar.getChild('CitytvExtendedControlBar').getChild('CitytvPlayPauseButton').el().focus();
    });

    //call when player having error
    player.on('error', function(event) {
        this.errorDisplay.close();
        addEventListener.call('', 'keydown', function(event) {
            if (isEventKeyCityTv(event, 'Back')) {
                player.dispose();
                // check brigtcoveplayer script file is present
                if ($("#brightcoveJs").length > 0) {
                    document.getElementById("brightcoveJs").remove();
                }
            }
        }, false);
    });
}

/**
 * Samsung TV Button Controls
 */
function isEventKeyCityTv(event, nameOrCode) {

    var codes = {
        'Enter': 13,
        'ArrowUp': 38,
        'ArrowDown': 40,
        'ArrowLeft': 37,
        'ArrowRight': 39,
        'MediaRewind': 412,
        'MediaFastForward': 417,
        'MediaPlay': 415,
        'MediaPause': 19,
        'MediaStop': 413,
        'MediaRecord': 416,
        'Back': 10009,
        'MediaPlayPause': 10252
    }


    if (event && 'object' === typeof event) {
        var keyCode = event.which || event.keyCode || event.charCode;

        if (keyCode === null || keyCode === undefined) {
            return false;
        }

        if (typeof nameOrCode === 'string') {
            // check codes
            var foundNamedKey = codes[nameOrCode];
            if (foundNamedKey) {
                return foundNamedKey === keyCode;
            }
        } else if (typeof nameOrCode === 'number') {
            return nameOrCode === keyCode;
        }
        return false;
    }
};