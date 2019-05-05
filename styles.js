(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles/styles.scss":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles/styles.scss ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "[data-simplebar] {\n    position: relative;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-content: flex-start;\n    align-items: flex-start;\n}\n\n.simplebar-wrapper {\n    overflow: hidden;\n    width: inherit;\n    height: inherit;\n    max-width: inherit;\n    max-height: inherit;\n}\n\n.simplebar-mask {\n    direction: inherit;\n    position: absolute;\n    overflow: hidden;\n    padding: 0;\n    margin: 0;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    width: auto !important;\n    height: auto !important;\n    z-index: 0;\n}\n\n.simplebar-offset {\n    direction: inherit !important;\n    box-sizing: inherit !important;\n    resize: none !important;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    padding: 0;\n    margin: 0;\n    -webkit-overflow-scrolling: touch;\n}\n\n.simplebar-content-wrapper {\n    direction: inherit;\n    box-sizing: border-box !important;\n    position: relative;\n    display: block;\n    height: 100%; /* Required for horizontal native scrollbar to not appear if parent is taller than natural height */\n    width: auto;\n    visibility: visible;\n    overflow: auto; /* Scroll on this element otherwise element can't have a padding applied properly */\n    max-width: 100%; /* Not required for horizontal scroll to trigger */\n    max-height: 100%; /* Needed for vertical scroll to trigger */\n}\n\n.simplebar-content:before,\n.simplebar-content:after {\n    content: \" \";\n    display: table;\n}\n\n.simplebar-placeholder {\n    max-height: 100%;\n    max-width: 100%;\n    width: 100%;\n    pointer-events: none;\n}\n\n.simplebar-height-auto-observer-wrapper {\n    box-sizing: inherit !important;\n    height: 100%;\n    width: inherit;\n    max-width: 1px;\n    position: relative;\n    float: left;\n    max-height: 1px;\n    overflow: hidden;\n    z-index: -1;\n    padding: 0;\n    margin: 0;\n    pointer-events: none;\n    flex-grow: inherit;\n    flex-shrink: 0;\n    flex-basis: 0;\n}\n\n.simplebar-height-auto-observer {\n    box-sizing: inherit;\n    display: block;\n    opacity: 0;\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 1000%;\n    width: 1000%;\n    min-height: 1px;\n    min-width: 1px;\n    overflow: hidden;\n    pointer-events: none;\n    z-index: -1;\n}\n\n.simplebar-track {\n    z-index: 1;\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    pointer-events: none;\n    overflow: hidden;\n}\n\n[data-simplebar].simplebar-dragging .simplebar-track {\n  pointer-events: all;\n}\n\n.simplebar-scrollbar {\n    position: absolute;\n    right: 2px;\n    width: 7px;\n    min-height: 10px;\n}\n\n.simplebar-scrollbar:before {\n    position: absolute;\n    content: \"\";\n    background: black;\n    border-radius: 7px;\n    left: 0;\n    right: 0;\n    opacity: 0;\n    transition: opacity 0.2s linear;\n}\n\n.simplebar-track .simplebar-scrollbar.simplebar-visible:before {\n    /* When hovered, remove all transitions from drag handle */\n    opacity: 0.5;\n    transition: opacity 0s linear;\n}\n\n.simplebar-track.simplebar-vertical {\n    top: 0;\n    width: 11px;\n}\n\n.simplebar-track.simplebar-vertical .simplebar-scrollbar:before {\n    top: 2px;\n    bottom: 2px;\n}\n\n.simplebar-track.simplebar-horizontal {\n    left: 0;\n    height: 11px;\n}\n\n.simplebar-track.simplebar-horizontal .simplebar-scrollbar:before {\n    height: 100%;\n    left: 2px;\n    right: 2px;\n}\n\n.simplebar-track.simplebar-horizontal .simplebar-scrollbar {\n    right: auto;\n    left: 0;\n    top: 2px;\n    height: 7px;\n    min-height: 0;\n    min-width: 10px;\n    width: auto;\n}\n\n/* Rtl support */\n\n[data-simplebar-direction=\"rtl\"] .simplebar-track.simplebar-vertical {\n    right: auto;\n    left: 0;\n}\n\n.hs-dummy-scrollbar-size {\n    direction: rtl;\n    position: fixed;\n    opacity: 0;\n    visibility: hidden;\n    height: 500px;\n    width: 500px;\n    overflow-y: hidden;\n    overflow-x: scroll;\n}\n\n* {\n  box-sizing: border-box; }\n\nhtml,\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\np {\n  margin: 0;\n  padding: 0; }\n\nbody {\n  background: #82cc8e;\n  color: #5c5c5c;\n  font-family: 'Montserrat', sans-serif;\n  min-height: 100vh;\n  width: 100%; }\n\nh1 {\n  font-size: 40px;\n  margin: 0;\n  padding: 0; }\n\na:active, a:hover, a:visited, a:link {\n  color: #5c5c5c;\n  text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9zaW1wbGViYXIvZGlzdC9zaW1wbGViYXIuY3NzIiwic3JjL3N0eWxlcy9DOlxcUHJvamVjdHNcXHNscGRleC9zcmNcXHN0eWxlc1xcc3R5bGVzLnNjc3MiLCJzcmMvc3R5bGVzL0M6XFxQcm9qZWN0c1xcc2xwZGV4L3NyY1xcc3R5bGVzXFx2YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsU0FBUztJQUNULE9BQU87SUFDUCxNQUFNO0lBQ04sU0FBUztJQUNULFFBQVE7SUFDUixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFNBQVM7SUFDVCxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWSxFQUFFLG1HQUFtRztJQUNqSCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGNBQWMsRUFBRSxtRkFBbUY7SUFDbkcsZUFBZSxFQUFFLGtEQUFrRDtJQUNuRSxnQkFBZ0IsRUFBRSwwQ0FBMEM7QUFDaEU7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsU0FBUztJQUNULG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7SUFDViwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSwwREFBMEQ7SUFDMUQsWUFBWTtJQUNaLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLE1BQU07SUFDTixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsV0FBVztBQUNmOztBQUVBO0lBQ0ksT0FBTztJQUNQLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQSxnQkFBZ0I7O0FBQ2hCO0lBQ0ksV0FBVztJQUNYLE9BQU87QUFDWDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FDM0xBO0VBQ0Usc0JBQXNCLEVBQUE7O0FBR3hCOzs7Ozs7OztFQVFFLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBR1o7RUFDRSxtQkNsQjRDO0VEbUI1QyxjQ2pCa0I7RURrQmxCLHFDQUFxQztFQUNyQyxpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBR1o7RUFLSSxjQ2xDZ0I7RURtQ2hCLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9zdHlsZXMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJbZGF0YS1zaW1wbGViYXJdIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5zaW1wbGViYXItd3JhcHBlciB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5zaW1wbGViYXItbWFzayB7XG4gICAgZGlyZWN0aW9uOiBpbmhlcml0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIHotaW5kZXg6IDA7XG59XG5cbi5zaW1wbGViYXItb2Zmc2V0IHtcbiAgICBkaXJlY3Rpb246IGluaGVyaXQgIWltcG9ydGFudDtcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgcmVzaXplOiBub25lICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG59XG5cbi5zaW1wbGViYXItY29udGVudC13cmFwcGVyIHtcbiAgICBkaXJlY3Rpb246IGluaGVyaXQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIFJlcXVpcmVkIGZvciBob3Jpem9udGFsIG5hdGl2ZSBzY3JvbGxiYXIgdG8gbm90IGFwcGVhciBpZiBwYXJlbnQgaXMgdGFsbGVyIHRoYW4gbmF0dXJhbCBoZWlnaHQgKi9cbiAgICB3aWR0aDogYXV0bztcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBTY3JvbGwgb24gdGhpcyBlbGVtZW50IG90aGVyd2lzZSBlbGVtZW50IGNhbid0IGhhdmUgYSBwYWRkaW5nIGFwcGxpZWQgcHJvcGVybHkgKi9cbiAgICBtYXgtd2lkdGg6IDEwMCU7IC8qIE5vdCByZXF1aXJlZCBmb3IgaG9yaXpvbnRhbCBzY3JvbGwgdG8gdHJpZ2dlciAqL1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7IC8qIE5lZWRlZCBmb3IgdmVydGljYWwgc2Nyb2xsIHRvIHRyaWdnZXIgKi9cbn1cblxuLnNpbXBsZWJhci1jb250ZW50OmJlZm9yZSxcbi5zaW1wbGViYXItY29udGVudDphZnRlciB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgZGlzcGxheTogdGFibGU7XG59XG5cbi5zaW1wbGViYXItcGxhY2Vob2xkZXIge1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uc2ltcGxlYmFyLWhlaWdodC1hdXRvLW9ic2VydmVyLXdyYXBwZXIge1xuICAgIGJveC1zaXppbmc6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgbWF4LXdpZHRoOiAxcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1heC1oZWlnaHQ6IDFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGZsZXgtZ3JvdzogaW5oZXJpdDtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBmbGV4LWJhc2lzOiAwO1xufVxuXG4uc2ltcGxlYmFyLWhlaWdodC1hdXRvLW9ic2VydmVyIHtcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwMCU7XG4gICAgd2lkdGg6IDEwMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgICBtaW4td2lkdGg6IDFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4uc2ltcGxlYmFyLXRyYWNrIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuW2RhdGEtc2ltcGxlYmFyXS5zaW1wbGViYXItZHJhZ2dpbmcgLnNpbXBsZWJhci10cmFjayB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG59XG5cbi5zaW1wbGViYXItc2Nyb2xsYmFyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDJweDtcbiAgICB3aWR0aDogN3B4O1xuICAgIG1pbi1oZWlnaHQ6IDEwcHg7XG59XG5cbi5zaW1wbGViYXItc2Nyb2xsYmFyOmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyO1xufVxuXG4uc2ltcGxlYmFyLXRyYWNrIC5zaW1wbGViYXItc2Nyb2xsYmFyLnNpbXBsZWJhci12aXNpYmxlOmJlZm9yZSB7XG4gICAgLyogV2hlbiBob3ZlcmVkLCByZW1vdmUgYWxsIHRyYW5zaXRpb25zIGZyb20gZHJhZyBoYW5kbGUgKi9cbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwcyBsaW5lYXI7XG59XG5cbi5zaW1wbGViYXItdHJhY2suc2ltcGxlYmFyLXZlcnRpY2FsIHtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDExcHg7XG59XG5cbi5zaW1wbGViYXItdHJhY2suc2ltcGxlYmFyLXZlcnRpY2FsIC5zaW1wbGViYXItc2Nyb2xsYmFyOmJlZm9yZSB7XG4gICAgdG9wOiAycHg7XG4gICAgYm90dG9tOiAycHg7XG59XG5cbi5zaW1wbGViYXItdHJhY2suc2ltcGxlYmFyLWhvcml6b250YWwge1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMXB4O1xufVxuXG4uc2ltcGxlYmFyLXRyYWNrLnNpbXBsZWJhci1ob3Jpem9udGFsIC5zaW1wbGViYXItc2Nyb2xsYmFyOmJlZm9yZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGxlZnQ6IDJweDtcbiAgICByaWdodDogMnB4O1xufVxuXG4uc2ltcGxlYmFyLXRyYWNrLnNpbXBsZWJhci1ob3Jpem9udGFsIC5zaW1wbGViYXItc2Nyb2xsYmFyIHtcbiAgICByaWdodDogYXV0bztcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMnB4O1xuICAgIGhlaWdodDogN3B4O1xuICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgbWluLXdpZHRoOiAxMHB4O1xuICAgIHdpZHRoOiBhdXRvO1xufVxuXG4vKiBSdGwgc3VwcG9ydCAqL1xuW2RhdGEtc2ltcGxlYmFyLWRpcmVjdGlvbj1cInJ0bFwiXSAuc2ltcGxlYmFyLXRyYWNrLnNpbXBsZWJhci12ZXJ0aWNhbCB7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgbGVmdDogMDtcbn1cblxuLmhzLWR1bW15LXNjcm9sbGJhci1zaXplIHtcbiAgICBkaXJlY3Rpb246IHJ0bDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgb3BhY2l0eTogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbn1cbiIsIkBpbXBvcnQgJ2hlbHBlcnMnLCAnc2ltcGxlYmFyL2Rpc3Qvc2ltcGxlYmFyLmNzcyc7XHJcblxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5odG1sLFxyXG5ib2R5LFxyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCxcclxuaDUsXHJcbnAge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItZ3JlZW4tbGlnaHQ7XHJcbiAgY29sb3I6ICRjb2xvci1ncmF5O1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmEge1xyXG4gICY6YWN0aXZlLFxyXG4gICY6aG92ZXIsXHJcbiAgJjp2aXNpdGVkLFxyXG4gICY6bGluayB7XHJcbiAgICBjb2xvcjogJGNvbG9yLWdyYXk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG59XHJcbiIsIiRjb2xvci1ncmVlbjogIzVlYmQ2ZDtcclxuJGNvbG9yLWdyZWVuLWxpZ2h0OiBsaWdodGVuKCRjb2xvci1ncmVlbiwgMTAlKTtcclxuXHJcbiRjb2xvci1ncmF5OiAjNWM1YzVjO1xyXG5cclxuJGhlYWRlci1oZWlnaHQ6IDE2MHB4O1xyXG4kY29udGVudC13aWR0aDogMTIwMHB4O1xyXG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src??embedded!../../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!**************************************!*\
  !*** multi ./src/styles/styles.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\slpdex\src\styles\styles.scss */"./src/styles/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map