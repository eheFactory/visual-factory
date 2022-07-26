(function (React$1, ReactDOM, d3) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React$1);
    var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

    var HeadCircle = function (props) {
        return (
            React.createElement( 'circle', {
                r: props.radius, fill: props.fill, stroke: props.stroke, 'stroke-width': props.strokeWidth })
        )
    };

    var Eyes = function (props) {
        return (
            React.createElement( React.Fragment, null,
                React.createElement( 'circle', {
                    cx: -props.eyeOffsetX, cy: -props.eyeOffsetY, r: props.eyeRadius }),
                React.createElement( 'circle', {
                    cx: props.eyeOffsetX, cy: -props.eyeOffsetY, r: props.eyeRadius })
            )
        )
    };

    var Mouth = function (props) {
        var mouthArc = d3.arc()
            .innerRadius(props.mouthRadius)
            .outerRadius(props.mouthRadius + props.mouthWidth)
            .startAngle(Math.PI / 2)
            .endAngle(Math.PI * 3 / 2);

        return (
            React.createElement( 'path', { d: mouthArc() })
        )
    };

    var FaceContainer = function (ref) {
      var children = ref.children;
      var width = ref.width;
      var height = ref.height;
      var centerX = ref.centerX;
      var centerY = ref.centerY;

      return (
        React.createElement( 'svg', { width: width, height: height },
          React.createElement( 'g', { transform: ("translate(" + centerX + "," + centerY + ")") },
            children
          )
        )
      );
    };

    var Face = function (props) {
        return (
            React.createElement( React.Fragment, null,
                React.createElement( FaceContainer, {
                    width: props.width, height: props.height, centerX: props.centerX, centerY: props.centerY },
                    React.createElement( HeadCircle, {
                        radius: props.centerY - props.strokeWidth / 2, strokeWidth: props.strokeWidth, fill: props.fill, stroke: props.stroke }),
                    React.createElement( Eyes, {
                        eyeOffsetX: props.eyeOffsetX, eyeOffsetY: props.eyeOffsetY, eyeRadius: props.eyeRadius }),
                    React.createElement( Mouth, { mouthRadius: props.mouthRadius, mouthWidth: props.mouthWidth })
                )
            )
        )
    };

    var MrSmiley = function (props) {
        window.setTimeout(function () {
            window.location.reload();
        }, 500);

        return (
            props.array.map(function () { return (
                React.createElement( Face, {
                    width: props.width, height: props.height, fill: props.colors[Math.floor(Math.random()*props.colors.length)], stroke: props.colors[Math.floor(Math.random()*props.colors.length)], centerX: props.width / 2, centerY: props.height / 2, strokeWidth: 6 + Math.random() * 3, eyeOffsetX: 20 + Math.random() * 9, eyeOffsetY: 20 + Math.random() * 15, eyeRadius: 5 + Math.random() * 10, mouthWidth: 7 + Math.random() * 9, mouthRadius: 30 + Math.random() * 10 })
            ); })
        );
    };

    var width = 160;
    var height = 160;

    var array = d3.range(9*5);

    var colors = Array("yellow", "green", "blue", "purple", "red");


    var App = function () {
      return (
        React__default["default"].createElement( MrSmiley, { 
          width: width, height: height, array: array, colors: colors })
      )
    };

    var rootElement = document.getElementById('root');
    ReactDOM__default["default"].render(React__default["default"].createElement( App, null ), rootElement);

})(React, ReactDOM, d3);
//# sourceMappingURL=bundle.js.map
