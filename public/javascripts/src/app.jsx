var $ = jQuery = require('../../libraries/jquery/dist/jquery');
var bootstrap = require('../../libraries/bootstrap-sass-official/assets/javascripts/bootstrap');

var React = require('react');
var Jobs = require('./jobs.jsx');


React.render(
    <Jobs />,
    document.getElementById('job-post')
);