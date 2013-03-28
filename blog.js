/*
 * Blog Page
 *
 * Pagination and content search for blog entries.
 *
 * Display blog entries with a view control and use a pagination control for navigation.
 * Add a search control to search for and filter blog entries by content including date.
 * Don't allow comments.
 * Blog entries will be manually added by me with a text editor. No editing on the site.
 */
 
 /*
  * Fixture for blog entries.
  * Entries are listed in reverse chronological order.
  */
(function(){
	var ENTRIES = [
		{
			id: 11,
			imagesrc: 'images/Kiahuna.jpg',
			imagealt: 'Kiahuna Beach',
			imagetitle: 'Kiahuna Beach on Kauai, Hawaii',
			date: 'March 25, 2013',
			title: 'The 80/20 Rule for Software Development',
			text: "<p>I've seen the rule stated as 80 percent of the work takes 20 percent of the time, but that's not accurate. Someone tried to correct it by stating that after 20 percent of the work, the software appears to be 80 percent complete. The second version might help manage expectations but it doesn't really help very much with software development.</p><p>My version of the 80/20 rule is that 80 percent of the features are relatively easy to implement and the remaining 20 percent are not worth adding, at least not right away. The trick is to prioritize and choose which features to implement. It helps to resist redundancy and postpone nice but not necessary features for later releases.</p>"
		},
		{
			id: 10,
			imagesrc: 'images/blank.gif',
			imagealt: '',
			imagetitle: '',
			date: 'March 21, 2013',
			title: 'HTML to PDF',
			text: "<p>I have yet to find anything comparable to wkhtmltopdf for converting HTML to a PDF file. No other tools work as well as this shell utility.</p><p>This utility uses the webkit rending engine for the conversion, taking CSS into account when it does the conversion. There are loads of options like page size that give the tool a lot of flexibility and it's very fast.</p>"
		},
		{
			id: 9,
			imagesrc: 'images/SpoutingHorn.jpg',
			imagealt: 'Spouting Horn',
			imagetitle: 'Spouting Horn on Kauai, Hawaii',
			date: 'March 21, 2013',
			title: 'Exceptions to the Rule',
			text: "<p>Is it really so important or even possible to always write perfect code? It's more than reasonable to expect sluggish performance and broken functionality to be fixed but I don't know that it's so important to follow every standard and style convention. I like to think that there's room for some individuality in the software world.</p><p>I can think of at least one example of a good exception. The target attribute for HTML anchor tags used to be deprecated but that's no longer the case with HTML5. I continued to use the target attribute even when it was deprecated.</p>"
		},
		{
			id: 8,
			imagesrc: 'images/blank.gif',
			imagealt: '',
			imagetitle: '',
			date: 'March 20, 2013',
			title: 'Happy Vernal Equinox',
			text: "<p>Today is the first day of spring, a time of rebirth. I want to take a little break and think about life after my last job.</p><p>I'm really enjoying using CanJS. I want to continue using it and frameworks like it.</p><p>I might look at Meteor next. It looks very interesting with its clean, powerful data synchronization.</p>"
		},
		{
			id: 7,
			imagesrc: 'images/Hanalei.jpg',
			imagealt: 'Hanalei overlook',
			imagetitle: 'view of Hanalai on the island of Kauai',
			date: 'March 15, 2013',
			title: 'JavaScript Development Tools',
			text: "<p>Browser Debugging tools</p><p class='indent'>- Firebug extension for Firebug<br/>- Chrome built-in development tool<br/>- Firebug Lite extension for Safari<br/>- IE built-in development tool (F12)<br/></p><p>JSLint is useful for checking syntax.</p>"
		},
		{
			id: 6,
			imagesrc: 'images/CattleEgret.jpg',
			imagealt: 'Cattle Egret',
			imagetitle: 'cattle egret at our poipu condo on Kauai',
			date: 'March 15, 2013',
			title: 'Time-based Releases vs. Feature-based Released',
			text: "<p>Throughout my career, I have never seen feature-based software releases work. There have always been too many intangibles that interfere with even the best well-laid plans. Some projects that depended on feature-based releases were canceled and others that survived often changed to time-based releases. Periodically releasing whatever complete subset of functionality is ready to be released moves the project forward without having to wait forever for results. For complicated web applications, it's the only way to go in my opinion.</p>"
		},
		{
			id: 5,
			imagesrc: 'images/MonkSeal.jpg',
			imagealt: 'Monk Seal',
			imagetitle: 'monk seal lounging on Kiahuna Beach',
			date: 'March 15, 2013',
			title: 'Making Time for Self-learning',
			text: "<p>It's more important than ever to continuously learn new software skills. That means you have to take the time to learn. Some companies offer training but everyone is responsible for their own career development.</p><p>Maintaining a proper work/life balance is equally important to me so I compromise by reading and learning during some of my lunch breaks at work. I make some exceptions and learn at home when something interests me enough. My usual time to do so is during a three day holiday weekend or when the weather is especially unpleasant.</p>"
		},
		{
			id: 4,
			imagesrc: 'images/WailuaFalls.jpg',
			imagealt: 'Wailua Falls',
			imagetitle: 'Wailua Falls on the island of Kauai, Hawaii',
			date: 'March 15, 2013',
			title: 'The Importance of Documentation',
			text: "<p>Software design documentation is far too often neglected or not given adequate attention so I'm here to add a voice of support. Here's a list of reasons why the documentation is important:</p><p class='indent'>- No one is perfect. There are too many details to remember and convey to others.<br/>- Forgotten or missed details cause rework. Design rework can be expensive!<br/>- Documents help prevent duplication of effort when working in a team.<br/>- Documents facilitate the division of labor and flow of work.<br/>- Documents help teach. User guides teach users. Design guides teach developers.<br/></p>"
		},
		{
			id: 3,
			imagesrc: 'images/blank.gif',
			imagealt: '',
			imagetitle: '',
			date: 'March 14, 2013',
			title: 'Functional Specification Outline',
			text: "<p>I find functional specification outlines to be really, really useful. Here's how I use them:</p><p class='indent'>- add the text as code comments<br/>- use as a coding checklist so nothing is forgotten<br/>- use as a testing checklist (informal test-driven coding)<br/></p>"
		},
		{
			id: 2,
			imagesrc: 'images/RhoTer.jpg',
			imagealt: 'Rhona and Terry at Waimea Canyon',
			imagetitle: 'Rhona and Terry at Waimea Canyon on the island of Kauai, Hawaii',
			date: 'March 14, 2013',
			title: 'Website Photos',
			text: "<p>All of the photos on this website are from my honeymoon on the island of Kauai. Kauai is such a beautiful place and I wanted to share some of my experiences. I think the photos really draw the eye in and give some welcome depth to what would otherwise be just a website full of technical details.</p><p>The pictures really help put me in the right frame of mind for coding. They might not help make everyone productive but the pictures just might help put you in a good mood.</p>"
		},
		{
			id: 1,
			imagesrc: 'images/blank.gif',
			imagealt: '',
			imagetitle: '',
			date: 'March 10, 2013',
			title: 'Free Website Templates',
			text: "<p>This website template has been designed by <a href='http://www.freewebsitetemplates.com/'>Free Website Templates</a>, for free. All of the social media icons (Facebook, Twitter, Vimeo and Google+) in the footer link to the associated web page for Free Website Templates. I'm leaving the icons in the footer as a way of saying thanks for the free website template.</p>"
		}
	];

// Set variables that span multiple controllers and
// multiple functions within a controller

    var _entriesPerPage = 3,
        _pagerControl;

/*
 * Model for blog entries.
 */

	Entry = can.Model({
		findAll: 'GET /entries',
		create  : "POST /entries",
		update  : "PUT /entries/{id}",
		destroy : "DELETE /entries/{id}"
	},{});

/*
 * Model list for blog entries.
 * Add filtering by search text.
 */

	Entry.List = can.Model.List({
		filter: function(search){
			this.length;
			var entries = new Entry.List([]);
			this.each(function(entry, i){
			    var searchbox = $('#findtext').val(),
			        searchlow,
			        textlow = entry.text.toLowerCase(),
			        datelow = entry.date.toLowerCase(),
			        titlelow = entry.title.toLowerCase(),
			        everythinglow = datelow + titlelow + textlow;
			        
			    if ( searchbox ) {
			       searchbox = searchbox.toLowerCase();
			    }
			        
			    if ( search ) {
			       searchlow = search.toLowerCase();
			    } else {
			       search = 'all';
			    }

// search title, date and text and also
// allow the word 'all' to be searched

			    if ( (searchlow === 'all') && (searchbox !== 'all') ) {
			       entries.push(entry)
			    } else {
			       if ( everythinglow.indexOf(searchbox) !== -1 ) {
			          entries.push(entry)
			       }
			    }
			})

			return entries;
		}
	});   // end of Entry.List
	
/*
 * Load blog entries model data.
 * This is fixture data in this case since there's no back-end database support.
 */

	can.fixture('GET /entries', function(){
		return [ENTRIES];
	});

	// create - not used
	var id= 8;
	can.fixture("POST /entries", function(){
		// just need to send back a new id
		return {id: (id++)}
	});

	// update - not used
	can.fixture("PUT /contacts/{id}", function(){
		// just send back success
		return {};
	});

	// destroy - not used
	can.fixture("DELETE /contacts/{id}", function(){
		// just send back success
		return {};
	});

/*
 * Set up router. Use to filter by search text.
 * Default search text is blank -> all entries.
 */

	can.route( 'filter/:search' );
	can.route( '', { search: 'all' } );

/*
 * Controller for blog entries. Controls the pager controller.
 *    - create Entries control to list filtered blog entries
 *       - use EJS template with li tag for each blog entry
 *       - initially list all entries unless a filter has been set through a URL
 *    - create Pager control for pagination
 */
	Entries = can.Control({
		init: function(){
		    var entriesNew = this.options.entries.filter( can.route.attr('search') ),
		        entryCount = entriesNew.length;
		    
			this.element.html(can.view('views/entryList.ejs', {
				entries: entriesNew
			}));
			
			if ( entryCount > _entriesPerPage ) {
			    $('#entryCount').text( entryCount + " Entries" );
			} else {
			    $('#entryCount').text("");
			}
			
			_pagerControl = new Pager('#pager', {
			    entries: entriesNew
			});
		},

// filter entries again if search text has changed

		'{can.route} change': function(el, ev) {
		    var entriesNew = this.options.entries.filter( can.route.attr('search') ),
		        entryCount = entriesNew.length;
		    

// clear all previous entries

		    this.element.html("");

// add filtered entries

		    this.element.html(can.view('views/entryList.ejs', {
		       entries: entriesNew
		    }));

// remove previous Pager controller if one exists so it can be replaced

		    if ( _pagerControl ) {
		       _pagerControl.destroy();
		    }

// reset Pager controller with new list of filtered entries
			
		    if ( entryCount > _entriesPerPage ) {
		       $('#entryCount').text( entryCount + " Entries" );
		    } else if ( entryCount === 0) {
		       $('#entryCount').text("No matching entries found.");
		    } else {
		       $('#entryCount').text("");
		    }

		    _pagerControl = new Pager('#pager', {
		       entries: entriesNew
		    });
		}
	});   // end of Entries control
	
/*
 * Search (filter) control for blog entries.
 *
 * The can.route is used to filter through the URL. Links on other 
 * pages can then focus in on blog entries by specific topic with
 * search text. 
 * Add a label, text box and go button to enter search text.
 */
	Search = can.Control({
		init: function(){
		   var search = can.route.attr('search') || 'all';
		   
		   can.route.attr( 'search', search );  // set default value

		   if ( search !== 'all' ) {  // don't display 'all' in search box
		      $('#findtext').val(search);  // set value for search box
		   }
		},
		
/*
 * Attach events
 */

// search after clicking the go button

		'#findbutton click': function(el, ev) {
			can.route.attr( 'search', $('#findtext').val() );
		},
		
// search after pressing the enter key

		'#findtext keyup': function(el, ev) {
			if ( ev.keyCode == 13 ) {
			   can.route.attr( 'search', $('#findtext').val() );
			}
		}
	});   // end of Search control
	
/*
 * Pagination control for blog entries.
 *
 * Create a set of pagination links for current list of entries.
 *    - create pagination for initial list of entries
 *    - create new pagination each time the list of entries is filtered
 *    - control which entries are visible according to filter and visible entry limit
 *    - display no more than three blog entries on a page
 *    - add page links at bottom if there are more than three blog entries
 *    - left link for first entry
 *    - right link for last entry
 */
	Pager = can.Control({
		init: function(){
		   this._displayPagination( this.options.entries, 1  );
		},
		
/*
 * Attach events
 */

// change display of entries after clicking on a page link

		'.pagelink click': function(el, ev) {
		   var page = parseInt( el.attr('data-page') );

		   this._displayPagination( this.options.entries, page );
		},
		
/*
 * Helper functions
 */
 
// Display the page links and hide all but the current page of blog entries.
// entries - are the filtered blog entries to paginate
// page - is the selected page number (clicked link)

        _displayPagination: function(entries, page) {
		   var entriesNew = entries.filter( can.route.attr('search') ),
		       entryCount = entriesNew.length,
		       pageCount = Math.ceil(entryCount / _entriesPerPage),
		       entryli = $('#entries li'),
		       currentIndex;

// clear all previous page links

		   this.element.html("");

// display page links

		   if ( pageCount > 1 ) {
		     this.element.html(can.view('views/pageList.ejs', {
		        pages: pageCount
		      }));
		   }

// hide all but the current page of entries

		   entryli.each(function() {
		      $(this).hide();  // make sure all entries start out as hidden
		   });

		   for ( var i = 0; i < _entriesPerPage; i++ ) {
		      currentIndex = ( (page - 1) * _entriesPerPage ) + i;
		      entryli.eq(currentIndex).show();
		   }
		}
	});   // end of Pager control

/*
 * add div elements for each control and instantiate the control on the associated element
 *    - ul element for Entries control
 *    - div element for Search control
 *    - div element for Pager control
 */

	$(document).ready(function(){
		$.when(Entry.findAll()).then(function(entryResponse){
		   var entries = entryResponse;

// The search control must come first so a search value can be set
// in a link on another web page. The search value must be set ahead 
// of time so the entries will be filtered.

		   new Search('#search', {
		   });
			
		   new Entries('#entries', {
		      entries: entries
		   });
		});
	});
})();