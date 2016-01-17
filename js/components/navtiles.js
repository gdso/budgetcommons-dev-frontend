'use strict';
var React = require('react');
var GridList = require('material-ui/lib/grid-list/grid-list');
var navtile_1 = require("./navtile");
class NavTiles extends React.Component {
    render() {
        var tiles = this.props.tiles.map(function (data) {
            return React.createElement(navtile_1.NavTile, {"key": data.id, "style": data.style, "markup": data.content});
        });
        return (React.createElement(GridList, null, tiles));
    }
}
exports.NavTiles = NavTiles;