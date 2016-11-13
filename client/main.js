import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
// import '../imports/startup/accounts-config.js';
import 'meteor/jquery';
// import '../imports/vendor/d3pie.js';
import { Tasks } from '../imports/api/tasks.js';

import './layout.html';
import './group.html';
import './task.html';
i18n.setLanguage('ru');


Router.configure({
	layoutTemplate: 'layout'
});
Router.route('/list', function () {
	this.render('list', {
	}).layout('layout');
});
Router.route('/', function () {
	this.render('landing', {
	}).layout('layout');
});

Router.route('/groups', function () {
	this.render('groups', {
	}).layout('layout');
});
Template.groups.onRendered(function () {
	$('[rel=href] a').click(function(event){
		event.stopPropagation ? event.stopPropagation() : (event.cancelBubble=true);
	});
	$('[rel=href]').click(function(){
		location.href = $(this).data('href');
	});
});

Router.route('/group/add', function () {
	this.render('groupAdd', {
	}).layout('layout');
});

Router.route('/group/id', function () {
	this.render('group', {
	}).layout('layout');
});
Template.group.onRendered(function () {
	$('[rel=href] a').click(function(event){
		event.stopPropagation ? event.stopPropagation() : (event.cancelBubble=true);
	});
	$('[rel=href]').click(function(){
		location.href = $(this).data('href');
	});
});
// Template.group.onRendered(function () {
// 	var pie = new d3pie("pieChart", {
// 		"header": {
// 			"title": {
// 				"text": "Распределение голосов в команде",
// 				"fontSize": 24,
// 				"font": "open sans"
// 			},
// 			"subtitle": {
// 				"text": "Voice assets -- криптовалюта, которая нужна для голосования",
// 				"color": "#999999",
// 				"fontSize": 12,
// 				"font": "open sans"
// 			},
// 			"titleSubtitlePadding": 9
// 		},
// 		"footer": {
// 			"color": "#999999",
// 			"fontSize": 10,
// 			"font": "open sans",
// 			"location": "bottom-left"
// 		},
// 		"size": {
// 			"canvasWidth": 590,
// 			"pieOuterRadius": "69%"
// 		},
// 		"data": {
// 			"sortOrder": "value-desc",
// 			"smallSegmentGrouping": {
// 				"enabled": true
// 			},
// 			"content": [
// 				{
// 					"label": "Константин Константинопольский",
// 					"value": 264131,
// 					"color": "#f30000"
// 				},
// 				{
// 					"label": "Александр Петров",
// 					"value": 218812,
// 					"color": "#0600f3"
// 				},
// 				{
// 					"label": "Николай Журавлев",
// 					"value": 157618,
// 					"color": "#00b109"
// 				},
// 				{
// 					"label": "Аня Коваленко",
// 					"value": 114384,
// 					"color": "#67f200"
// 				},
// 				{
// 					"label": "Евгений Соловьев",
// 					"value": 95002,
// 					"color": "#ff7e00"
// 				},
// 				{
// 					"label": "Стив Джобс",
// 					"value": 78327,
// 					"color": "#8fe4fa"
// 				},
// 				{
// 					"label": "Линус Торвальдс",
// 					"value": 67706,
// 					"color": "#ff5300"
// 				},
// 				{
// 					"label": "Джеф Раскин",
// 					"value": 36344,
// 					"color": "#3854d1"
// 				},
// 				{
// 					"label": "Сережа Брин",
// 					"value": 28561,
// 					"color": "#d00ed8"
// 				},
// 				{
// 					"label": "Виталик Бутерин",
// 					"value": 24131,
// 					"color": "#7890ff"
// 				},
// 				{
// 					"label": "Ларри Пейдж",
// 					"value": 100,
// 					"color": "#01664d"
// 				},
// 				{
// 					"label": "Coldfusion",
// 					"value": 68,
// 					"color": "#e9f117"
// 				},
// 				{
// 					"label": "Марк",
// 					"value": 218812,
// 					"color": "#7ce8ca"
// 				},
// 				{
// 					"label": "Паша",
// 					"value": 157618,
// 					"color": "#9a8cf6"
// 				}
// 			]
// 		},
// 		"labels": {
// 			"outer": {
// 				"pieDistance": 32
// 			},
// 			"inner": {
// 				"hideWhenLessThanPercentage": 3
// 			},
// 			"mainLabel": {
// 				"fontSize": 11
// 			},
// 			"percentage": {
// 				"color": "#ffffff",
// 				"decimalPlaces": 0
// 			},
// 			"value": {
// 				"color": "#adadad",
// 				"fontSize": 11
// 			},
// 			"lines": {
// 				"enabled": true
// 			},
// 			"truncation": {
// 				"enabled": true
// 			}
// 		},
// 		"effects": {
// 			"pullOutSegmentOnClick": {
// 				"effect": "linear",
// 				"speed": 400,
// 				"size": 8
// 			}
// 		},
// 		"misc": {
// 			"gradient": {
// 				"enabled": true,
// 				"percentage": 100
// 			}
// 		}
// 	});
// });

Router.route('/group/id/tasks/', function () {
	this.render('tasks').layout('layout');
});
Template.tasks.onRendered(function () {
	$('[rel=href] a').click(function(event){
		event.stopPropagation ? event.stopPropagation() : (event.cancelBubble=true);
	});
	$('[rel=href]').click(function(){
		location.href = $(this).data('href');
	});
});
Template.tasks.helpers({
	tasks() {
		// Show newest tasks at the top
		return Tasks.find({
			owner: this.userId,
		});
	},
	// settings: function () {
	// 	return {
	// 		collection: Tasks,
	// 		rowsPerPage: 10,
	// 		showFilter: true,
	// 		fields: ['text']
	// 	};
	// }
});

Template.tasks.events({
	'submit .addТask'(event) {
		// Prevent default browser form submit
		event.preventDefault();

		// Get value from form element
		const target = event.target;
		const text = target.text.value;
		// check(text, String);

		// Insert a task into the collection
		// Tasks.insert({
		// 	text,
		// 	createdAt: new Date(),
		// 	owner: Meteor.userId(),
		// 	email: Meteor.users.findOne(this.userId).emails[0],
		// 	// owner: Meteor.user()._id,
		// 	// email: Meteor.user().emails[0],
		// });
		Meteor.call('tasks.insert', text);
		// Clear form
		target.text.value = '';
	},
	'click .remove'() {
		// Tasks.remove(this._id);
		console.log('remove');
		Meteor.call('tasks.remove', this._id);
	},
});

Router.route('/group/id/task/add', function () {
	this.render('taskAdd').layout('layout');
});
Router.route('/group/id/task/id', function () {
	this.render('task').layout('layout');
});

Router.route('/users/', function () {
	this.render('users').layout('layout');
});

Router.route('/user/id/', function () {
	this.render('user').layout('layout');
});
