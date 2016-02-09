'use strict';
var theme = require('material-ui/lib/styles/raw-themes/light-raw-theme');
var colors = require('material-ui/lib/styles/colors');
let appnavbar = {
    title: 'Toronto Budget Commons',
    username: 'anonymous',
    accountoptions: [],
    menuoptions: [],
};
let toolsnavbar = {};
let system = {
    ischrome: /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
};
let maincols = 2;
let mainpadding = 0;
let maintiles = [
    {
        id: 6,
        content: `<h3>About Budget Commons</h3> 
		<p><em>Budget Commons</em> (this website) is an initiative coming out of Toronto's civil society 
		sector, specifically <a target="_blank" href="http://civictech.ca">Civic Tech Toronto</a>, 
		in collaboration with <a target="_blank" href="http://betterbudget.ca">Better Budget 
		Toronto<a>, among others. The purpose is to <em>support informed debate about the Toronto Budget.
		</em></p>`,
        help: `<h3>Project Background</h3>
		<p>The <a href="http://civictech.ca/projects/#torontobudgetproject" target="_blank">
		Toronto Budget Project</a> started in July 2015. Deliberations and consultations
		about scope and direction continued until August of that year, and building of foundation
		elements of the website began in December.</p>`,
        index: 0,
        route: 'about',
    },
    {
        id: 7,
        content: `<h3>The Budget Roadmap</h3>
		<p>The budget roadmap is a compilation of annual budget events that lead to the adoption of the
		City of Toronto Budget in February of each year. These events include:</p> 
		<ul>
		<li>public events, some of which include public deputations</li> 
		<li>internal city events</li>
		<li>councillor sponsored budget 'Town Halls'</li>
		<li>a participatory budget process</li>
		<li>events hosted by civil society organizations</li>
		</ul>`,
        help: `<h3>About the Budget Roadmap</h3>
		<p>In principle the budget roadmap could encompass regional councils, as well as city ridings,
		internal executive and staff consultations, and public committee meetings.The information is
		taken from a variety of sources, as well as interviews with City staff.</p>`,
        index: 1,
        route: 'timeline',
    },
    {
        id: 1,
        content: `<h3>Deputation Helper</h3>
		<p><em>[content pending]</em></p>`,
        help: `<h3>About Deputation Helper</h3>
		<p><em>[content pending]</em></p>`,
        index: 2,
        route: 'deputations',
    },
    {
        id: 9,
        content: `<h3>Budget Explorer</h3>
		<p><em>[content pending]</em></p>`,
        help: `<h3>About Budget Explorer</h3>
		<p><em>[content pending]</em></p>`,
        index: 3,
        route: 'explorer',
    },
    {
        id: 2,
        content: `<h3>Budget Resources</h3>
		<p><em>[content pending]</em></p>`,
        help: `<h3>About Budget Resources</h3>
		<p><em>[content pending]</em></p>`,
        index: 4,
        route: 'resources',
    },
    {
        id: 8,
        content: `<h3>Social Media Resources</h3>
		<p><em>[content pending]</em></p>`,
        help: `<h3>About Social Media Resources</h3>
		<p><em>[content pending]</em></p>`,
        index: 5,
        route: 'socialresources',
    },
    {
        id: 10,
        content: `<h3>Join Us!</h3>
		<p><em>[content pending]</em></p>`,
        index: 6,
        route: 'joinus',
    },
];
exports.initialstate = {
    maintiles,
    maincols,
    mainpadding,
    appnavbar,
    toolsnavbar,
    theme,
    colors,
    system,
};
