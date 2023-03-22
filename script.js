(function(){
    var script = {
 "mouseWheelEnabled": true,
 "borderRadius": 0,
 "id": "rootPlayer",
 "layout": "absolute",
 "children": [
  "this.MainViewer"
 ],
 "paddingBottom": 0,
 "backgroundPreloadEnabled": true,
 "scrollBarWidth": 10,
 "start": "this.playAudioList([this.audio_FF632B20_F1FE_0380_41ED_5D3B876B0074]); this.init()",
 "propagateClick": false,
 "verticalAlign": "top",
 "width": "100%",
 "overflow": "visible",
 "defaultVRPointer": "laser",
 "borderSize": 0,
 "desktopMipmappingEnabled": false,
 "minHeight": 20,
 "definitions": [{
 "class": "Video",
 "scaleMode": "fit_inside",
 "width": 1280,
 "label": "Untitled video - Made with Clipchamp (5)",
 "loop": false,
 "id": "video_FDAFEEA0_F216_0281_41CF_9CDD18E0D8BD",
 "thumbnailUrl": "media/video_FDAFEEA0_F216_0281_41CF_9CDD18E0D8BD_t.jpg",
 "height": 720,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_FDAFEEA0_F216_0281_41CF_9CDD18E0D8BD.mp4"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_C0781D7F_CB46_A006_41E4_EB319517AB63_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "audio": {
  "mp3Url": "media/audio_E2D0F196_EF55_C545_417E_79697BB5489F.mp3",
  "oggUrl": "media/audio_E2D0F196_EF55_C545_417E_79697BB5489F.ogg",
  "class": "AudioResource"
 },
 "class": "PanoramaAudio",
 "id": "audio_E2D0F196_EF55_C545_417E_79697BB5489F",
 "autoplay": true,
 "data": {
  "label": "record"
 }
},
{
 "class": "PlayList",
 "id": "playList_0D811115_0117_A6F7_4170_2F769A12DAF2",
 "items": [
  {
   "media": "this.video_FDD19C11_F21A_0583_41E7_FE4CDD16EF7D",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_0D811115_0117_A6F7_4170_2F769A12DAF2, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_0D811115_0117_A6F7_4170_2F769A12DAF2, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_0DC0C1A7_0117_A9D3_416F_7FA1AF7D4E90",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -40.36,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_0DED71E4_0117_A955_416E_4CAED1D4EF0B",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -85.21,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_0DE331D0_0117_A94D_4161_4FD20FDF7070",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 47.54,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_0A80E244_0117_AB55_4130_5CEA99E35040",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -135.94,
  "pitch": 0
 }
},
{
 "class": "PlayList",
 "id": "playList_0D80B115_0117_A6F7_4148_B510B1721799",
 "items": [
  {
   "media": "this.video_FDAFEEA0_F216_0281_41CF_9CDD18E0D8BD",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_0D80B115_0117_A6F7_4148_B510B1721799, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_0D80B115_0117_A6F7_4148_B510B1721799, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_0ABE8279_0117_AB3F_4144_577B8AA84314",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 90.7,
  "pitch": 0
 }
},
{
 "rollOverOpacity": 0.8,
 "fontFamily": "Arial",
 "fontColor": "#FFFFFF",
 "children": [
  {
   "label": "Enterance",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  },
  {
   "label": "Reception",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  },
  {
   "label": "Work Area",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  },
  {
   "label": "conference room",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  },
  {
   "label": "Break Zone ",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  },
  {
   "label": "Waiting Zone",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  },
  {
   "label": "Meeting Room",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "label": "Media",
 "id": "Menu_0D8DD12F_0117_A6D3_416C_516F8D919789",
 "selectedFontColor": "#FFFFFF",
 "rollOverBackgroundColor": "#000000",
 "rollOverFontColor": "#FFFFFF",
 "class": "Menu",
 "opacity": 0.4,
 "selectedBackgroundColor": "#202020",
 "backgroundColor": "#404040"
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "displayPlaybackBar": true
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_0DF2F1BC_0117_A935_416F_A621FA05C3D0",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 77,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_0DD10191_0117_A9CF_4169_3E2A7B23B733",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -72.73,
  "pitch": 0
 }
},
{
 "class": "Video",
 "scaleMode": "fit_inside",
 "width": 1280,
 "label": "Untitled video - Made with Clipchamp (3)",
 "loop": false,
 "id": "video_FC171ADD_F1F6_0283_41E9_703881627CF1",
 "thumbnailUrl": "media/video_FC171ADD_F1F6_0283_41E9_703881627CF1_t.jpg",
 "height": 720,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_FC171ADD_F1F6_0283_41E9_703881627CF1.mp4"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_0A85E256_0117_AB75_411C_2DC7E0FBADB0",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -176.03,
  "pitch": 0
 }
},
{
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "targetPitch": 0,
   "duration": 3000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out",
   "targetStereographicFactor": 0
  }
 ],
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "displayOriginPosition": {
  "class": "RotationalCameraDisplayPosition",
  "hfov": 165,
  "yaw": 0,
  "stereographicFactor": 1,
  "pitch": -90
 },
 "class": "PanoramaCamera",
 "id": "panorama_C168926A_CB46_A00E_41B3_7466514B2027_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "PlayList",
 "id": "playList_0D808115_0117_A6F7_416A_357DB4F295FE",
 "items": [
  {
   "media": "this.video_FC171ADD_F1F6_0283_41E9_703881627CF1",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_0D808115_0117_A6F7_416A_357DB4F295FE, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_0D808115_0117_A6F7_416A_357DB4F295FE, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_C1767072_CB4A_A01E_41B5_40001688B84D_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_t.jpg"
  }
 ],
 "label": "Enterance",
 "id": "panorama_C168926A_CB46_A00E_41B3_7466514B2027",
 "hfov": 360,
 "overlays": [
  "this.overlay_DB4D162C_CB7B_E00A_41E7_307A4B9F5E91",
  "this.overlay_DB3984EF_CB49_A007_41E1_1AA8C8EEE344",
  "this.overlay_C4F2CB2E_CB49_6006_41E1_1E48D1B44BCA",
  "this.overlay_D938EB43_CB8C_9F52_41BB_FB014B516FC4",
  "this.overlay_DF4168C5_CB8C_F956_41E1_00842E056BC0",
  "this.overlay_FF618EA4_EF5A_DF45_41DF_9ACC2948E6E0",
  "this.overlay_FDE4FC7D_F21A_0583_41D2_5157AEDFA2C2"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C0781D7F_CB46_A006_41E4_EB319517AB63"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "cardboardMenu": "this.Menu_0D8DD12F_0117_A6D3_416C_516F8D919789",
 "audios": [
  "this.audio_E2D0F196_EF55_C545_417E_79697BB5489F"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_t.jpg"
},
{
 "audio": {
  "mp3Url": "media/audio_FF632B20_F1FE_0380_41ED_5D3B876B0074.mp3",
  "oggUrl": "media/audio_FF632B20_F1FE_0380_41ED_5D3B876B0074.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_FF632B20_F1FE_0380_41ED_5D3B876B0074",
 "autoplay": true,
 "data": {
  "label": "morning-16294"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_0AA7E28B_0117_ABD3_4169_FA5F4C6A10E6",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 88.04,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD_t.jpg"
  }
 ],
 "label": "Waiting Zone",
 "id": "panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD",
 "hfov": 360,
 "overlays": [
  "this.overlay_DA2B3344_CB9B_AF57_41D6_B1960555C035",
  "this.overlay_D95EC0DF_CB84_A972_41D1_06F74ECD417B",
  "this.overlay_DEE2E409_CB84_A8D1_41E1_D61E2A948A2F"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -132.46,
   "class": "AdjacentPanorama",
   "yaw": -34.98,
   "panorama": "this.panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B",
   "distance": 1
  },
  {
   "backwardYaw": 94.79,
   "class": "AdjacentPanorama",
   "yaw": -91.96,
   "panorama": "this.panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4",
   "distance": 1
  },
  {
   "backwardYaw": 73.93,
   "class": "AdjacentPanorama",
   "yaw": 85.38,
   "panorama": "this.panorama_C1767072_CB4A_A01E_41B5_40001688B84D",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "cardboardMenu": "this.Menu_0D8DD12F_0117_A6D3_416C_516F8D919789",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD_t.jpg"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0781D7F_CB46_A006_41E4_EB319517AB63_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C0781D7F_CB46_A006_41E4_EB319517AB63_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0781D7F_CB46_A006_41E4_EB319517AB63_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0781D7F_CB46_A006_41E4_EB319517AB63_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0781D7F_CB46_A006_41E4_EB319517AB63_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C0781D7F_CB46_A006_41E4_EB319517AB63_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0781D7F_CB46_A006_41E4_EB319517AB63_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0781D7F_CB46_A006_41E4_EB319517AB63_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0781D7F_CB46_A006_41E4_EB319517AB63_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C0781D7F_CB46_A006_41E4_EB319517AB63_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0781D7F_CB46_A006_41E4_EB319517AB63_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0781D7F_CB46_A006_41E4_EB319517AB63_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0781D7F_CB46_A006_41E4_EB319517AB63_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C0781D7F_CB46_A006_41E4_EB319517AB63_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0781D7F_CB46_A006_41E4_EB319517AB63_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0781D7F_CB46_A006_41E4_EB319517AB63_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0781D7F_CB46_A006_41E4_EB319517AB63_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C0781D7F_CB46_A006_41E4_EB319517AB63_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0781D7F_CB46_A006_41E4_EB319517AB63_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0781D7F_CB46_A006_41E4_EB319517AB63_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0781D7F_CB46_A006_41E4_EB319517AB63_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C0781D7F_CB46_A006_41E4_EB319517AB63_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0781D7F_CB46_A006_41E4_EB319517AB63_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0781D7F_CB46_A006_41E4_EB319517AB63_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_C0781D7F_CB46_A006_41E4_EB319517AB63_t.jpg"
  }
 ],
 "label": "conference room",
 "id": "panorama_C0781D7F_CB46_A006_41E4_EB319517AB63",
 "hfov": 360,
 "overlays": [
  "this.overlay_C4797960_CBBD_9B4E_41CE_735C3901DD55",
  "this.overlay_DA98CCFB_CBBF_7932_4192_AC45098B4592",
  "this.overlay_FCEB2CFA_F216_0681_41DF_8CACCF292B64"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 139.64,
   "class": "AdjacentPanorama",
   "yaw": 44.06,
   "panorama": "this.panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B",
   "distance": 1
  },
  {
   "backwardYaw": -103,
   "class": "AdjacentPanorama",
   "yaw": 123.68,
   "panorama": "this.panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "cardboardMenu": "this.Menu_0D8DD12F_0117_A6D3_416C_516F8D919789",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_C0781D7F_CB46_A006_41E4_EB319517AB63_t.jpg"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1767072_CB4A_A01E_41B5_40001688B84D_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C1767072_CB4A_A01E_41B5_40001688B84D_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C1767072_CB4A_A01E_41B5_40001688B84D_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C1767072_CB4A_A01E_41B5_40001688B84D_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1767072_CB4A_A01E_41B5_40001688B84D_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C1767072_CB4A_A01E_41B5_40001688B84D_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C1767072_CB4A_A01E_41B5_40001688B84D_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C1767072_CB4A_A01E_41B5_40001688B84D_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1767072_CB4A_A01E_41B5_40001688B84D_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C1767072_CB4A_A01E_41B5_40001688B84D_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C1767072_CB4A_A01E_41B5_40001688B84D_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C1767072_CB4A_A01E_41B5_40001688B84D_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1767072_CB4A_A01E_41B5_40001688B84D_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C1767072_CB4A_A01E_41B5_40001688B84D_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C1767072_CB4A_A01E_41B5_40001688B84D_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C1767072_CB4A_A01E_41B5_40001688B84D_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1767072_CB4A_A01E_41B5_40001688B84D_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C1767072_CB4A_A01E_41B5_40001688B84D_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C1767072_CB4A_A01E_41B5_40001688B84D_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C1767072_CB4A_A01E_41B5_40001688B84D_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1767072_CB4A_A01E_41B5_40001688B84D_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C1767072_CB4A_A01E_41B5_40001688B84D_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C1767072_CB4A_A01E_41B5_40001688B84D_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C1767072_CB4A_A01E_41B5_40001688B84D_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_C1767072_CB4A_A01E_41B5_40001688B84D_t.jpg"
  }
 ],
 "label": "Meeting Room",
 "id": "panorama_C1767072_CB4A_A01E_41B5_40001688B84D",
 "hfov": 360,
 "overlays": [
  "this.overlay_D80ACBF7_CB8C_9F31_41D6_5C2C766FCE68"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 85.38,
   "class": "AdjacentPanorama",
   "yaw": 73.93,
   "panorama": "this.panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "cardboardMenu": "this.Menu_0D8DD12F_0117_A6D3_416C_516F8D919789",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_C1767072_CB4A_A01E_41B5_40001688B84D_t.jpg"
},
{
 "class": "Video",
 "scaleMode": "fit_inside",
 "width": 1280,
 "label": "Untitled video - Made with Clipchamp (6)",
 "loop": false,
 "id": "video_FCD2037D_F216_0383_41E2_75F6B9F286CD",
 "thumbnailUrl": "media/video_FCD2037D_F216_0383_41E2_75F6B9F286CD_t.jpg",
 "height": 720,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_FCD2037D_F216_0383_41E2_75F6B9F286CD.mp4"
 }
},
{
 "class": "Video",
 "scaleMode": "fit_inside",
 "width": 1280,
 "label": "Green Screen Chroma Key smiling young woman in formal wear talking to camera and gesturing 4K HD",
 "loop": false,
 "id": "video_FDD19C11_F21A_0583_41E7_FE4CDD16EF7D",
 "thumbnailUrl": "media/video_FDD19C11_F21A_0583_41E7_FE4CDD16EF7D_t.jpg",
 "height": 720,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_FDD19C11_F21A_0583_41E7_FE4CDD16EF7D.mp4"
 }
},
{
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "gyroscopeEnabled": true,
 "class": "PanoramaPlayer",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_0AB3A268_0117_AB5D_4121_D3A020624620",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 145.02,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_t.jpg"
  }
 ],
 "label": "Reception",
 "id": "panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B",
 "hfov": 360,
 "overlays": [
  "this.overlay_C676C1EE_CB8D_AB53_41C7_80F5B4ECF180",
  "this.overlay_C4AB1210_CB8C_A8CE_41AC_B2C0377D7720",
  "this.overlay_DAEDDD36_CB9C_BB32_41B8_08C4350F5C88",
  "this.overlay_D85E2948_CB8C_BB5E_41E5_B7567C4F4DFB",
  "this.overlay_E1C54AFD_EF5F_C4C6_41E1_855C870A5900",
  "this.overlay_FC13D2D6_F216_0280_41D6_D620F150728B"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 8.47,
   "class": "AdjacentPanorama",
   "yaw": 107.27,
   "panorama": "this.panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B",
   "distance": 1
  },
  {
   "backwardYaw": 44.06,
   "class": "AdjacentPanorama",
   "yaw": 139.64,
   "panorama": "this.panorama_C0781D7F_CB46_A006_41E4_EB319517AB63",
   "distance": 1
  },
  {
   "backwardYaw": 3.97,
   "class": "AdjacentPanorama",
   "yaw": -89.3,
   "panorama": "this.panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4",
   "distance": 1
  },
  {
   "backwardYaw": -34.98,
   "class": "AdjacentPanorama",
   "yaw": -132.46,
   "panorama": "this.panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "cardboardMenu": "this.Menu_0D8DD12F_0117_A6D3_416C_516F8D919789",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_0AD2A29C_0117_ABF5_413C_161F63B94E28",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -94.62,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_0DA74179_0117_A93F_416F_0C782B3F07EA",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -56.32,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_t.jpg"
  }
 ],
 "label": "Work Area",
 "id": "panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B",
 "hfov": 360,
 "overlays": [
  "this.overlay_C4375EDF_CB85_7972_41DB_9E233967659D",
  "this.overlay_DBD6BD23_CB8C_98D2_41A2_9F400210CB15",
  "this.overlay_E09E731E_EF55_4545_419D_CC832363D797",
  "this.overlay_E0B8E0F3_EF4B_44C2_41E8_2B9642C830E6",
  "this.overlay_FFAB5737_EF4B_4D42_41DB_F7DC669A2F8C",
  "this.overlay_E05F892F_EF4D_C542_41E6_F51D891E1886",
  "this.overlay_E1A7A58B_EF4A_CD42_41D6_800933EF8443",
  "this.overlay_E1F6D355_EF4B_45C7_41ED_3DAF19FEDD55",
  "this.overlay_E1A1C283_EF75_4743_41E4_07725761FB5F",
  "this.overlay_E1A9A2CB_EF7B_44C2_41E3_73C71531708B",
  "this.overlay_E19F6F56_EF7D_DDC2_41B2_7E6AC1C257C1",
  "this.overlay_FD1847E5_EF7B_CCC7_41D5_AAF4DDEFB738"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 123.68,
   "class": "AdjacentPanorama",
   "yaw": -103,
   "panorama": "this.panorama_C0781D7F_CB46_A006_41E4_EB319517AB63",
   "distance": 1
  },
  {
   "backwardYaw": 107.27,
   "class": "AdjacentPanorama",
   "yaw": 8.47,
   "panorama": "this.panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "cardboardMenu": "this.Menu_0D8DD12F_0117_A6D3_416C_516F8D919789",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_0A9FE232_0117_AACD_4165_C21CB9EF1CDE",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -171.53,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_0C1D51F6_0117_A935_414B_E02A86A69BEE",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -106.07,
  "pitch": 0
 }
},
{
 "class": "PlayList",
 "id": "playList_0D80C115_0117_A6F7_4162_BD20F4CDC599",
 "items": [
  {
   "media": "this.video_FCD2037D_F216_0383_41E2_75F6B9F286CD",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_0D80C115_0117_A6F7_4162_BD20F4CDC599, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_0D80C115_0117_A6F7_4162_BD20F4CDC599, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ]
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "camera": "this.panorama_C168926A_CB46_A00E_41B3_7466514B2027_camera",
   "media": "this.panorama_C168926A_CB46_A00E_41B3_7466514B2027",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_camera",
   "media": "this.panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_camera",
   "media": "this.panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C0781D7F_CB46_A006_41E4_EB319517AB63_camera",
   "media": "this.panorama_C0781D7F_CB46_A006_41E4_EB319517AB63",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4_camera",
   "media": "this.panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD_camera",
   "media": "this.panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C1767072_CB4A_A01E_41B5_40001688B84D_camera",
   "media": "this.panorama_C1767072_CB4A_A01E_41B5_40001688B84D",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ]
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4_t.jpg"
  }
 ],
 "label": "Break Zone ",
 "id": "panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4",
 "hfov": 360,
 "overlays": [
  "this.overlay_DA76C0F3_CB84_A931_41E5_F8893B4084F3",
  "this.overlay_DA0A5B6B_CB9B_9F51_41D6_C471F54278FA"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -89.3,
   "class": "AdjacentPanorama",
   "yaw": 3.97,
   "panorama": "this.panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B",
   "distance": 1
  },
  {
   "backwardYaw": -91.96,
   "class": "AdjacentPanorama",
   "yaw": 94.79,
   "panorama": "this.panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "cardboardMenu": "this.Menu_0D8DD12F_0117_A6D3_416C_516F8D919789",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4_t.jpg"
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "MainViewer",
 "playbackBarLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "width": "100%",
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "progressBorderColor": "#000000",
 "borderSize": 0,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minHeight": 50,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowVerticalLength": 0,
 "minWidth": 100,
 "paddingRight": 0,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "shadow": false,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "transitionDuration": 500,
 "height": "100%",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarHeadShadow": true,
 "class": "ViewerArea",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "progressBottom": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 },
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_DA7B6735_CB9F_F736_41B1_568B8C1C94B0",
   "yaw": 2.34,
   "pitch": -22.7,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.86
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.34,
   "hfov": 11.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.7
  }
 ],
 "id": "overlay_DB4D162C_CB7B_E00A_41E7_307A4B9F5E91",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_C4A1F8D2_CB8D_9972_41E6_2137C81DC9D5",
   "yaw": 66.16,
   "pitch": -14.93,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.1
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 66.16,
   "hfov": 6.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.93
  }
 ],
 "id": "overlay_DB3984EF_CB49_A007_41E1_1AA8C8EEE344",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_D30C7A58_CB84_997E_41C3_38A8F25574EB",
   "yaw": -61.69,
   "pitch": -22.5,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.99
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -61.69,
   "hfov": 9.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.5
  }
 ],
 "id": "overlay_C4F2CB2E_CB49_6006_41E1_1E48D1B44BCA",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_D30DBA58_CB84_997E_41BF_6D0301175DEB",
   "yaw": -103.82,
   "pitch": -16.77,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.92
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -103.82,
   "hfov": 11.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.77
  }
 ],
 "id": "overlay_D938EB43_CB8C_9F52_41BB_FB014B516FC4",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_D30DEA58_CB84_997E_41DF_3D49FA613C87",
   "yaw": 101.39,
   "pitch": -14.93,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.94
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 101.39,
   "hfov": 10.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_0_HS_4_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.93
  }
 ],
 "id": "overlay_DF4168C5_CB8C_F956_41E1_00842E056BC0",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "yaw": 13.58,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_0_HS_5_0.png",
      "width": 86,
      "class": "ImageResourceLevel",
      "height": 68
     }
    ]
   },
   "pitch": -5.11,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.6
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.58,
   "hfov": 2.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_0_HS_5_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.11
  }
 ],
 "id": "overlay_FF618EA4_EF5A_DF45_41DF_9ACC2948E6E0",
 "enabledInCardboard": true
},
{
 "class": "VideoPanoramaOverlay",
 "data": {
  "label": "Video"
 },
 "id": "overlay_FDE4FC7D_F21A_0583_41D2_5157AEDFA2C2",
 "loop": true,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_FDE4FC7D_F21A_0583_41D2_5157AEDFA2C2_t.jpg",
    "width": 1280,
    "class": "ImageResourceLevel",
    "height": 720
   }
  ]
 },
 "pitch": 4.61,
 "useHandCursor": true,
 "roll": 0.01,
 "videoVisibleOnStop": false,
 "rotationX": -17.4,
 "rotationY": -0.13,
 "yaw": 7.06,
 "vfov": 7.77,
 "blending": 0.18,
 "autoplay": true,
 "enabledInCardboard": true,
 "hfov": 13.66,
 "distance": 50,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_FDAFEEA0_F216_0281_41CF_9CDD18E0D8BD.mp4"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4, this.camera_0DED71E4_0117_A955_416E_4CAED1D4EF0B); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_D9ED1B28_CB87_78DE_41BB_069B8D8E7686",
   "yaw": -91.96,
   "pitch": -23.11,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.7
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -91.96,
   "hfov": 10.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.11
  }
 ],
 "id": "overlay_DA2B3344_CB9B_AF57_41D6_B1960555C035",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C1767072_CB4A_A01E_41B5_40001688B84D, this.camera_0C1D51F6_0117_A935_414B_E02A86A69BEE); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_D97108FA_CB85_B933_41C1_78787A0FCCE4",
   "yaw": 85.38,
   "pitch": -35.39,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.15
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 85.38,
   "hfov": 11.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.39
  }
 ],
 "id": "overlay_D95EC0DF_CB84_A972_41D1_06F74ECD417B",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B, this.camera_0DE331D0_0117_A94D_4161_4FD20FDF7070); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_D9A01072_CB84_A932_41D5_8F2C7DC192D9",
   "yaw": -34.98,
   "pitch": -15.95,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.77
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -34.98,
   "hfov": 13.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.95
  }
 ],
 "id": "overlay_DEE2E409_CB84_A8D1_41E1_D61E2A948A2F",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B, this.camera_0DF2F1BC_0117_A935_416F_A621FA05C3D0); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_DBEEB65D_CBBD_6976_41D4_5498285BDB8F",
   "yaw": 123.68,
   "pitch": -20.45,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.45
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 123.68,
   "hfov": 9.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0781D7F_CB46_A006_41E4_EB319517AB63_0_HS_1_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.45
  }
 ],
 "id": "overlay_C4797960_CBBD_9B4E_41CE_735C3901DD55",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B, this.camera_0DC0C1A7_0117_A9D3_416F_7FA1AF7D4E90); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_DBEEE65D_CBBD_6976_41E1_4BEC1533CA1F",
   "yaw": 44.06,
   "pitch": -15.14,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.46
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 44.06,
   "hfov": 8.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C0781D7F_CB46_A006_41E4_EB319517AB63_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.14
  }
 ],
 "id": "overlay_DA98CCFB_CBBF_7932_4192_AC45098B4592",
 "enabledInCardboard": true
},
{
 "class": "VideoPanoramaOverlay",
 "data": {
  "label": "Video"
 },
 "id": "overlay_FCEB2CFA_F216_0681_41DF_8CACCF292B64",
 "loop": true,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_FCEB2CFA_F216_0681_41DF_8CACCF292B64_t.jpg",
    "width": 1280,
    "class": "ImageResourceLevel",
    "height": 720
   }
  ]
 },
 "pitch": 0.22,
 "useHandCursor": true,
 "roll": 0.68,
 "videoVisibleOnStop": false,
 "rotationX": -0.22,
 "rotationY": -0.01,
 "yaw": 0.61,
 "vfov": 21.64,
 "blending": 0.19,
 "autoplay": true,
 "enabledInCardboard": true,
 "hfov": 38.46,
 "distance": 50,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_FCD2037D_F216_0383_41E2_75F6B9F286CD.mp4"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD, this.camera_0AD2A29C_0117_ABF5_413C_161F63B94E28); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_DFE12A86_CB84_F9D2_41A6_A864B0ED9FF5",
   "yaw": 73.93,
   "pitch": -38.25,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.31
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 73.93,
   "hfov": 13.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1767072_CB4A_A01E_41B5_40001688B84D_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -38.25
  }
 ],
 "id": "overlay_D80ACBF7_CB8C_9F31_41D6_5C2C766FCE68",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B, this.camera_0A9FE232_0117_AACD_4165_C21CB9EF1CDE); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_DA23E4A2_CB84_E9D2_41C9_46DA82002E85",
   "yaw": 107.27,
   "pitch": -23.32,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.67
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 107.27,
   "hfov": 7.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.32
  }
 ],
 "id": "overlay_C676C1EE_CB8D_AB53_41C7_80F5B4ECF180",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4, this.camera_0A85E256_0117_AB75_411C_2DC7E0FBADB0); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_D82AF4F6_CB84_A933_41A8_A42761D6300F",
   "yaw": -89.3,
   "pitch": -20.45,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.05
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -89.3,
   "hfov": 12.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.45
  }
 ],
 "id": "overlay_C4AB1210_CB8C_A8CE_41AC_B2C0377D7720",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C0781D7F_CB46_A006_41E4_EB319517AB63, this.camera_0A80E244_0117_AB55_4130_5CEA99E35040); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_C4B8FA74_CB84_9936_41E5_31A51E4728EB",
   "yaw": 139.64,
   "pitch": -13.7,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.42
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 139.64,
   "hfov": 7.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_0_HS_3_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.7
  }
 ],
 "id": "overlay_DAEDDD36_CB9C_BB32_41B8_08C4350F5C88",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD, this.camera_0AB3A268_0117_AB5D_4121_D3A020624620); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_D30E3A58_CB84_997E_41CE_0EF6AD396D5A",
   "yaw": -132.46,
   "pitch": -11.25,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.2
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -132.46,
   "hfov": 8.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_0_HS_5_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.25
  }
 ],
 "id": "overlay_D85E2948_CB8C_BB5E_41E5_B7567C4F4DFB",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "yaw": -0.95,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_0_HS_7_0.png",
      "width": 509,
      "class": "ImageResourceLevel",
      "height": 450
     }
    ]
   },
   "pitch": -24.75,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.88
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.95,
   "hfov": 13.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_0_HS_7_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.75
  }
 ],
 "id": "overlay_E1C54AFD_EF5F_C4C6_41E1_855C870A5900",
 "enabledInCardboard": true
},
{
 "class": "VideoPanoramaOverlay",
 "data": {
  "label": "Video"
 },
 "id": "overlay_FC13D2D6_F216_0280_41D6_D620F150728B",
 "loop": true,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_FC13D2D6_F216_0280_41D6_D620F150728B_t.jpg",
    "width": 1280,
    "class": "ImageResourceLevel",
    "height": 720
   }
  ]
 },
 "pitch": 14.25,
 "useHandCursor": true,
 "roll": 2.87,
 "videoVisibleOnStop": false,
 "rotationX": -14.51,
 "rotationY": -8.63,
 "yaw": -11.71,
 "vfov": 20.42,
 "blending": 0.19,
 "autoplay": true,
 "enabledInCardboard": true,
 "hfov": 39.3,
 "distance": 50,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_FDAFEEA0_F216_0281_41CF_9CDD18E0D8BD.mp4"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C0781D7F_CB46_A006_41E4_EB319517AB63, this.camera_0DA74179_0117_A93F_416F_0C782B3F07EA); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_C4A078D2_CB8D_9972_41B0_81470577FF22",
   "yaw": -103,
   "pitch": -21.48,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.3
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -103,
   "hfov": 9.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.48
  }
 ],
 "id": "overlay_C4375EDF_CB85_7972_41DB_9E233967659D",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B, this.camera_0DD10191_0117_A9CF_4169_3E2A7B23B733); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_C4A018D2_CB8D_9972_41D4_E676B4D63ADE",
   "yaw": 8.47,
   "pitch": -11.25,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.6
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.47,
   "hfov": 8.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.25
  }
 ],
 "id": "overlay_DBD6BD23_CB8C_98D2_41A2_9F400210CB15",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "yaw": -35.11,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0_HS_2_0.png",
      "width": 141,
      "class": "ImageResourceLevel",
      "height": 136
     }
    ]
   },
   "pitch": -13.91,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.12
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -35.11,
   "hfov": 4.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.91
  }
 ],
 "id": "overlay_E09E731E_EF55_4545_419D_CC832363D797",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "yaw": 153.28,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0_HS_3_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 122
     }
    ]
   },
   "pitch": -10.43,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.97
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 153.28,
   "hfov": 2.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ]
   },
   "pitch": -10.43
  }
 ],
 "id": "overlay_E0B8E0F3_EF4B_44C2_41E8_2B9642C830E6",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "yaw": 33.42,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0_HS_4_0.png",
      "width": 127,
      "class": "ImageResourceLevel",
      "height": 136
     }
    ]
   },
   "pitch": -12.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.75
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 33.42,
   "hfov": 3.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": -12.27
  }
 ],
 "id": "overlay_FFAB5737_EF4B_4D42_41DB_F7DC669A2F8C",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "yaw": 62.05,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0_HS_5_0.png",
      "width": 209,
      "class": "ImageResourceLevel",
      "height": 204
     }
    ]
   },
   "pitch": -19.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.91
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 62.05,
   "hfov": 5.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.84
  }
 ],
 "id": "overlay_E05F892F_EF4D_C542_41E6_F51D891E1886",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "yaw": 137.53,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0_HS_6_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 136
     }
    ]
   },
   "pitch": -15.55,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.88
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 137.53,
   "hfov": 4.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0_HS_6_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.55
  }
 ],
 "id": "overlay_E1A7A58B_EF4A_CD42_41D6_800933EF8443",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "yaw": -68.65,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0_HS_7_0.png",
      "width": 223,
      "class": "ImageResourceLevel",
      "height": 204
     }
    ]
   },
   "pitch": -21.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.21
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -68.65,
   "hfov": 6.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0_HS_7_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.89
  }
 ],
 "id": "overlay_E1F6D355_EF4B_45C7_41ED_3DAF19FEDD55",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "yaw": -143.31,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0_HS_8_0.png",
      "width": 155,
      "class": "ImageResourceLevel",
      "height": 150
     }
    ]
   },
   "pitch": -14.52,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.5
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -143.31,
   "hfov": 4.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.52
  }
 ],
 "id": "overlay_E1A1C283_EF75_4743_41E4_07725761FB5F",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "yaw": -162.74,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0_HS_9_0.png",
      "width": 59,
      "class": "ImageResourceLevel",
      "height": 68
     }
    ]
   },
   "pitch": -7.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.77
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -162.74,
   "hfov": 1.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "pitch": -7.57
  }
 ],
 "id": "overlay_E1A9A2CB_EF7B_44C2_41E3_73C71531708B",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "yaw": -156.2,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0_HS_10_0.png",
      "width": 59,
      "class": "ImageResourceLevel",
      "height": 68
     }
    ]
   },
   "pitch": -10.02,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.76
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -156.2,
   "hfov": 1.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "pitch": -10.02
  }
 ],
 "id": "overlay_E19F6F56_EF7D_DDC2_41B2_7E6AC1C257C1",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "yaw": 160.64,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0_HS_11_0.png",
      "width": 73,
      "class": "ImageResourceLevel",
      "height": 95
     }
    ]
   },
   "pitch": -7.98,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.18
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 160.64,
   "hfov": 2.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "pitch": -7.98
  }
 ],
 "id": "overlay_FD1847E5_EF7B_CCC7_41D5_AAF4DDEFB738",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B, this.camera_0ABE8279_0117_AB3F_4144_577B8AA84314); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_D97EB57C_CB9D_AB36_41DF_D6F138E0AD59",
   "yaw": 3.97,
   "pitch": -16.98,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.17
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.97,
   "hfov": 9.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.98
  }
 ],
 "id": "overlay_DA76C0F3_CB84_A931_41E5_F8893B4084F3",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD, this.camera_0AA7E28B_0117_ABD3_4169_FA5F4C6A10E6); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05b"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_D97ED57C_CB9D_AB36_41D0_E92CA4B81496",
   "yaw": 94.79,
   "pitch": -20.25,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.53
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 94.79,
   "hfov": 10.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.25
  }
 ],
 "id": "overlay_DA0A5B6B_CB9B_9F51_41D6_C471F54278FA",
 "enabledInCardboard": true
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_DA7B6735_CB9F_F736_41B1_568B8C1C94B0",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_C4A1F8D2_CB8D_9972_41E6_2137C81DC9D5",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D30C7A58_CB84_997E_41C3_38A8F25574EB",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D30DBA58_CB84_997E_41BF_6D0301175DEB",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D30DEA58_CB84_997E_41DF_3D49FA613C87",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C168926A_CB46_A00E_41B3_7466514B2027_0_HS_4_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D9ED1B28_CB87_78DE_41BB_069B8D8E7686",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D97108FA_CB85_B933_41C1_78787A0FCCE4",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D9A01072_CB84_A932_41D5_8F2C7DC192D9",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C177BA5D_CB49_A00A_41D2_C69E611505BD_0_HS_2_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_DBEEB65D_CBBD_6976_41D4_5498285BDB8F",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C0781D7F_CB46_A006_41E4_EB319517AB63_0_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_DBEEE65D_CBBD_6976_41E1_4BEC1533CA1F",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C0781D7F_CB46_A006_41E4_EB319517AB63_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_DFE12A86_CB84_F9D2_41A6_A864B0ED9FF5",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C1767072_CB4A_A01E_41B5_40001688B84D_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_DA23E4A2_CB84_E9D2_41C9_46DA82002E85",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D82AF4F6_CB84_A933_41A8_A42761D6300F",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_C4B8FA74_CB84_9936_41E5_31A51E4728EB",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_0_HS_3_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D30E3A58_CB84_997E_41CE_0EF6AD396D5A",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C173DAD5_CB49_601A_41E3_7E80B79AC36B_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_C4A078D2_CB8D_9972_41B0_81470577FF22",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_C4A018D2_CB8D_9972_41D4_E676B4D63ADE",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C1722008_CB49_600A_41B9_55B2D52F5D8B_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D97EB57C_CB9D_AB36_41DF_D6F138E0AD59",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D97ED57C_CB9D_AB36_41D0_E92CA4B81496",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C10AAF30_CB49_E019_41D8_83A2A22C62A4_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
}],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "class": "Player",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "shadow": false,
 "scripts": {
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "existsKey": function(key){  return key in window; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getKey": function(key){  return window[key]; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "registerKey": function(key, value){  window[key] = value; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Player435"
 },
 "scrollBarOpacity": 0.5,
 "downloadEnabled": false,
 "vrPolyfillScale": 0.5,
 "height": "100%"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
