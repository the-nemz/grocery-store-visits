'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require('react-helmet');

var _util = require('../_util.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_LOGO = '\n  <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="600.000000pt" height="600.000000pt" viewBox="0 0 600.000000 600.000000" preserveAspectRatio="xMidYMid meet">\n    <g transform="translate(0.000000,600.000000) scale(0.100000,-0.100000)" fill="#9bcefa" stroke="none">\n        <path d="M2805 5985 c-6 -9 -37 -19 -76 -24 -37 -5 -76 -14 -87 -20 -12 -6 -29 -11 -40 -11 -20 0 -137 -47 -203 -81 -75 -39 -85 -45 -134 -79 -157 -108 -278 -228 -369 -364 -48 -74 -136 -243 -136 -265 0 -9 -7 -25 -15 -35 -8 -11 -15 -31 -15 -44 0 -13 -5 -32 -10 -42 -6 -11 -18 -57 -27 -102 -14 -70 -18 -176 -23 -688 -5 -596 -5 -604 -25 -610 -36 -9 -112 -70 -144 -116 -43 -58 -71 -145 -71 -213 0 -56 27 -152 49 -174 6 -6 11 -15 11 -20 0 -22 91 -102 150 -130 57 -28 75 -32 150 -32 75 0 93 4 150 32 161 77 248 269 194 425 -10 29 -24 60 -31 69 -7 8 -13 19 -13 23 0 18 -97 107 -136 127 l-44 21 0 566 c0 523 2 575 20 668 11 56 24 112 29 125 5 13 17 44 26 69 99 252 291 461 530 578 35 17 65 29 153 63 64 25 223 49 322 49 99 0 258 -24 322 -49 88 -34 118 -46 153 -63 228 -111 430 -326 520 -553 83 -208 86 -245 83 -895 -3 -557 -3 -564 -23 -570 -36 -9 -112 -70 -144 -116 -43 -58 -71 -145 -71 -213 0 -56 27 -152 49 -174 6 -6 11 -15 11 -20 0 -22 91 -102 150 -130 57 -28 75 -32 150 -32 75 0 93 4 150 32 161 77 248 269 194 425 -10 29 -24 60 -31 69 -7 8 -13 19 -13 23 0 18 -97 107 -136 127 l-44 21 0 576 c0 487 -2 590 -16 662 -18 97 -40 180 -60 228 -8 18 -14 39 -14 46 0 19 -90 192 -136 262 -68 102 -166 209 -249 273 -33 25 -64 49 -70 53 -59 47 -138 96 -205 129 -60 29 -166 69 -182 69 -11 0 -28 5 -40 11 -11 6 -50 15 -87 20 -37 5 -71 16 -77 24 -17 22 -354 22 -369 0z m-935 -2615 c34 -34 40 -46 40 -82 0 -35 -6 -47 -40 -80 -57 -53 -103 -53 -160 0 -34 33 -40 45 -40 80 0 36 6 48 40 82 33 33 47 40 80 40 33 0 47 -7 80 -40z m2400 0 c34 -34 40 -46 40 -82 0 -35 -6 -47 -40 -80 -57 -53 -103 -53 -160 0 -34 33 -40 45 -40 80 0 36 6 48 40 82 33 33 47 40 80 40 33 0 47 -7 80 -40z" />\n        <path d="M597 4303 c-4 -3 -7 -857 -7 -1897 0 -1815 1 -1894 19 -1961 55 -207 222 -378 419 -431 79 -21 3844 -21 3924 0 92 24 178 76 258 156 85 85 132 166 161 277 18 70 19 134 17 1965 l-3 1893 -415 0 -415 0 0 -115 0 -115 295 -5 295 -5 3 -1765 c2 -1644 1 -1768 -15 -1815 -9 -27 -23 -57 -30 -66 -7 -8 -13 -20 -13 -25 0 -21 -98 -103 -155 -130 l-60 -29 -1885 0 -1885 0 -60 29 c-57 27 -155 109 -155 130 0 5 -6 17 -13 25 -7 9 -21 39 -30 66 -16 47 -17 171 -15 1815 l3 1765 295 5 295 5 0 115 0 115 -411 3 c-226 1 -413 -1 -417 -5z" />\n        <path d="M2154 4297 c-2 -7 -3 -60 -2 -118 l3 -104 835 0 835 0 0 115 0 115 -833 3 c-683 2 -833 0 -838 -11z" />\n        <path d="M2575 3234 c-66 -14 -135 -39 -169 -62 -52 -36 -63 -54 -50 -89 7 -23 21 -32 67 -46 46 -15 63 -26 82 -55 27 -41 64 -144 65 -179 0 -34 -49 -40 -99 -11 l-40 23 -46 -25 c-51 -28 -75 -57 -75 -93 0 -25 -77 -97 -104 -97 -14 0 -65 57 -98 111 -9 14 -19 48 -23 75 -16 104 -50 130 -129 96 -94 -42 -178 -147 -159 -200 15 -42 34 -52 85 -46 42 6 53 3 88 -21 45 -31 110 -99 110 -115 0 -19 -105 -140 -121 -140 -22 0 -44 27 -58 72 -14 43 -34 53 -65 32 -44 -28 -80 -92 -80 -142 l-1 -47 65 -5 c53 -4 65 -8 68 -23 4 -17 -19 -89 -55 -177 -27 -64 -28 -65 -73 -62 -58 4 -94 25 -114 67 -42 87 -112 46 -142 -82 -13 -56 -10 -84 14 -120 20 -31 54 -29 104 7 48 35 66 37 116 11 l37 -19 0 -143 c0 -131 -2 -144 -18 -147 -10 -2 -26 3 -35 11 -26 22 -59 29 -82 17 -25 -13 -60 -80 -60 -114 0 -66 91 -226 129 -226 6 0 29 16 51 36 21 20 47 34 57 32 18 -3 75 -141 77 -187 1 -34 -39 -60 -104 -67 -69 -8 -100 -26 -100 -61 0 -46 68 -141 122 -169 40 -21 60 -4 98 83 43 98 58 105 107 51 21 -24 71 -78 112 -120 l75 -78 -17 -35 c-10 -22 -32 -42 -59 -56 -78 -40 -87 -78 -33 -137 26 -30 47 -42 90 -52 52 -13 57 -12 83 7 25 19 27 25 24 90 -2 45 2 75 11 87 12 17 18 16 103 -27 49 -24 103 -50 121 -56 46 -18 48 -37 6 -68 -20 -16 -52 -42 -72 -60 -32 -28 -35 -34 -26 -59 13 -35 103 -97 165 -113 134 -34 219 72 145 179 -40 58 -29 64 95 49 81 -9 126 -9 208 1 125 15 128 12 100 -69 -19 -54 -19 -57 -2 -88 31 -58 109 -61 227 -9 71 31 95 70 78 128 -9 27 -23 45 -51 63 -37 24 -54 55 -29 55 19 0 192 91 230 121 45 35 62 36 87 4 34 -43 46 -83 33 -111 -6 -14 -11 -42 -11 -63 0 -138 248 -51 277 97 14 70 2 95 -55 115 -26 9 -54 17 -63 17 -22 0 -99 57 -99 74 0 7 9 21 21 32 11 10 55 64 97 121 44 59 83 103 93 103 19 0 96 -72 147 -138 37 -47 48 -50 100 -23 48 25 75 56 95 111 40 109 10 173 -70 151 -21 -6 -52 -11 -70 -11 -39 0 -143 58 -143 81 0 9 14 36 32 60 23 32 32 53 30 79 -7 138 -6 152 14 167 27 20 95 9 170 -28 111 -55 164 -26 172 96 4 63 3 66 -31 100 -41 41 -74 45 -114 11 -45 -37 -68 -46 -121 -46 -64 0 -88 20 -96 81 -5 42 -2 49 25 75 54 52 63 141 18 198 -16 20 -29 26 -58 26 -37 0 -71 23 -71 48 0 6 -9 26 -20 44 -11 18 -20 41 -20 50 0 38 70 49 135 22 50 -20 100 -11 122 22 13 21 14 33 5 72 -18 77 -50 138 -103 196 -55 61 -86 70 -124 38 -22 -18 -55 -90 -55 -120 0 -23 -57 -82 -79 -82 -28 0 -44 25 -36 58 3 16 1 40 -4 55 -14 36 -78 77 -121 77 -25 0 -45 8 -68 29 -17 17 -32 35 -32 40 0 19 68 118 100 145 17 14 39 26 49 26 28 0 64 45 58 72 -14 55 -157 158 -220 158 -13 0 -32 -9 -42 -20 -16 -18 -17 -26 -6 -95 13 -80 12 -92 -26 -172 -27 -58 -40 -63 -84 -32 -21 15 -29 29 -29 51 0 21 -10 40 -34 64 -30 30 -40 34 -89 34 -50 0 -58 -3 -80 -31 -19 -24 -30 -30 -53 -27 -28 3 -29 4 -26 58 6 142 11 160 58 209 24 25 44 51 44 57 0 6 -11 21 -24 33 -20 19 -39 23 -119 28 -80 5 -101 3 -122 -11 -38 -25 -33 -58 16 -97 l42 -33 -7 -94 c-4 -52 -11 -103 -17 -113 -13 -25 -40 -24 -72 1 -14 11 -35 20 -47 20 -25 0 -72 -23 -89 -44 -9 -10 -30 -16 -57 -16 -40 0 -44 2 -44 24 0 13 -7 43 -15 66 -19 55 -19 159 0 184 8 11 15 39 15 63 0 37 -4 45 -26 53 -26 10 -52 11 -89 4z" />\n    </g>\n  </svg>\n';

var LOGO_WITH_COMMENTS = '\n  <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="600.000000pt" height="300px" viewBox="0 0 600.000000 600.000000" <!-- ::COLOR:: --> preserveAspectRatio="xMidYMid meet">\n    <g transform="translate(0.000000,600.000000) scale(0.100000,-0.100000)" fill="inherit" stroke="none">\n        <path d="M2805 5985 c-6 -9 -37 -19 -76 -24 -37 -5 -76 -14 -87 -20 -12 -6 -29 -11 -40 -11 -20 0 -137 -47 -203 -81 -75 -39 -85 -45 -134 -79 -157 -108 -278 -228 -369 -364 -48 -74 -136 -243 -136 -265 0 -9 -7 -25 -15 -35 -8 -11 -15 -31 -15 -44 0 -13 -5 -32 -10 -42 -6 -11 -18 -57 -27 -102 -14 -70 -18 -176 -23 -688 -5 -596 -5 -604 -25 -610 -36 -9 -112 -70 -144 -116 -43 -58 -71 -145 -71 -213 0 -56 27 -152 49 -174 6 -6 11 -15 11 -20 0 -22 91 -102 150 -130 57 -28 75 -32 150 -32 75 0 93 4 150 32 161 77 248 269 194 425 -10 29 -24 60 -31 69 -7 8 -13 19 -13 23 0 18 -97 107 -136 127 l-44 21 0 566 c0 523 2 575 20 668 11 56 24 112 29 125 5 13 17 44 26 69 99 252 291 461 530 578 35 17 65 29 153 63 64 25 223 49 322 49 99 0 258 -24 322 -49 88 -34 118 -46 153 -63 228 -111 430 -326 520 -553 83 -208 86 -245 83 -895 -3 -557 -3 -564 -23 -570 -36 -9 -112 -70 -144 -116 -43 -58 -71 -145 -71 -213 0 -56 27 -152 49 -174 6 -6 11 -15 11 -20 0 -22 91 -102 150 -130 57 -28 75 -32 150 -32 75 0 93 4 150 32 161 77 248 269 194 425 -10 29 -24 60 -31 69 -7 8 -13 19 -13 23 0 18 -97 107 -136 127 l-44 21 0 576 c0 487 -2 590 -16 662 -18 97 -40 180 -60 228 -8 18 -14 39 -14 46 0 19 -90 192 -136 262 -68 102 -166 209 -249 273 -33 25 -64 49 -70 53 -59 47 -138 96 -205 129 -60 29 -166 69 -182 69 -11 0 -28 5 -40 11 -11 6 -50 15 -87 20 -37 5 -71 16 -77 24 -17 22 -354 22 -369 0z m-935 -2615 c34 -34 40 -46 40 -82 0 -35 -6 -47 -40 -80 -57 -53 -103 -53 -160 0 -34 33 -40 45 -40 80 0 36 6 48 40 82 33 33 47 40 80 40 33 0 47 -7 80 -40z m2400 0 c34 -34 40 -46 40 -82 0 -35 -6 -47 -40 -80 -57 -53 -103 -53 -160 0 -34 33 -40 45 -40 80 0 36 6 48 40 82 33 33 47 40 80 40 33 0 47 -7 80 -40z" />\n        <path d="M597 4303 c-4 -3 -7 -857 -7 -1897 0 -1815 1 -1894 19 -1961 55 -207 222 -378 419 -431 79 -21 3844 -21 3924 0 92 24 178 76 258 156 85 85 132 166 161 277 18 70 19 134 17 1965 l-3 1893 -415 0 -415 0 0 -115 0 -115 295 -5 295 -5 3 -1765 c2 -1644 1 -1768 -15 -1815 -9 -27 -23 -57 -30 -66 -7 -8 -13 -20 -13 -25 0 -21 -98 -103 -155 -130 l-60 -29 -1885 0 -1885 0 -60 29 c-57 27 -155 109 -155 130 0 5 -6 17 -13 25 -7 9 -21 39 -30 66 -16 47 -17 171 -15 1815 l3 1765 295 5 295 5 0 115 0 115 -411 3 c-226 1 -413 -1 -417 -5z" />\n        <path d="M2154 4297 c-2 -7 -3 -60 -2 -118 l3 -104 835 0 835 0 0 115 0 115 -833 3 c-683 2 -833 0 -838 -11z" />\n    </g>\n    <text font-family="Arial, Helvetica, sans-serif" font-size="150pt" x="50%" y="75%" dominant-baseline="middle" text-anchor="middle" fill="inherit"><!-- ::GSV:: --></text>\n  </svg>\n';

var Meta = function (_React$Component) {
  _inherits(Meta, _React$Component);

  function Meta(props) {
    _classCallCheck(this, Meta);

    return _possibleConstructorReturn(this, (Meta.__proto__ || Object.getPrototypeOf(Meta)).call(this, props));
  }

  _createClass(Meta, [{
    key: 'getDescription',
    value: function getDescription(factors, gsv) {
      var textFactors = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = factors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var factor = _step.value;

          if (factor.input !== null) {
            if (factor.options) {
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = factor.options[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var option = _step2.value;

                  if (option.value === factor.input) {
                    textFactors.push(option.label.toLowerCase());
                  }
                }
              } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                  }
                } finally {
                  if (_didIteratorError2) {
                    throw _iteratorError2;
                  }
                }
              }
            } else {
              textFactors.push(factor.meta.replace('[INPUT]', factor.input));
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var allTextFactors = '';
      if (textFactors.length === 1) {
        allTextFactors = textFactors[0];
      } else if (textFactors.length === 2) {
        allTextFactors = textFactors[0] + ' and ' + textFactors[1];
      } else if (textFactors.length >= 3) {
        allTextFactors = textFactors.slice(0, -1).join(', ') + ', and ' + textFactors[textFactors.length - 1];
      }

      return 'GSV Risk | An event with ' + allTextFactors + ' has COVID-19 risk comparable to ' + (0, _util.getGsvText)(gsv) + ' grocery store visits.';
    }
  }, {
    key: 'render',
    value: function render() {
      var title = 'Grocery Store Visits | Calculate COVID-19 risk in terms we all know - going to the grocery store.';
      var description = 'GSV Risk is a web application that allows you to approximate an event\'s COVID-19 risk in units we all know - grocery store visits.';
      var logo = DEFAULT_LOGO;

      if (!this.props.useDefaults) {
        var gsv = (0, _util.calculateGsv)(this.props.factors);
        title = 'GSV Risk | ' + (0, _util.getGsvText)(gsv) + ' grocery store visits!';
        description = this.getDescription(this.props.factors, gsv);
        logo = LOGO_WITH_COMMENTS.replace('<!-- ::GSV:: -->', (0, _util.getGsvText)(gsv)).replace('<!-- ::COLOR:: -->', 'fill="' + (0, _util.gsvToColor)(gsv) + '"');
      }

      return _react2.default.createElement(_reactHelmet.Helmet, {
        title: title,
        meta: [{
          name: 'og:site_name',
          content: 'GSV Risk'
        }, {
          name: 'og:title',
          content: title
        }, {
          name: 'description',
          content: description
        }, {
          name: 'og:description',
          content: description
        }, {
          name: 'og:image',
          content: 'data:image/svg+xml;utf8,' + logo
        }]
      });
    }
  }]);

  return Meta;
}(_react2.default.Component);

exports.default = Meta;