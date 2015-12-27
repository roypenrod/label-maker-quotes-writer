/********************************************************
    
    app.js
    
    Site: roypenrod.com
    Project: label writer quotes
    Author:  Roy Penrod    
        
    Purpose:    
        Entry point and controller for the label writer
        animation.
      
    Dependencies:        
        jQuery
        labelWriterAnimation.js
      
********************************************************/

'use strict';

// -- DECLARATIONS -- //
var containerQuote1;
var containerQuote2;
var containerQuote3;

    

// -- FUNCTIONS -- //

// sets the properties for the container info object
function setContainerQuote1Properties() {    
    
    var quoteNumber = 1;
        
    
    // html structure
    var containerHtmlOpen = '<div id="container-quote1" class="container">';
    
    var line1HtmlOpen = '<div class="inner-container-quote quote1-line1"><p class="quote">';
    
    var line2HtmlOpen = '<div class="inner-container-quote quote1-line2"><p class="quote">';
    
    var line3HtmlOpen = '<div class="inner-container-quote quote1-line3"><p class="quote">';
    
    var lineHtmlClose = '</p></div>';
    
    var authorHtmlOpen = '<div class="inner-container-author quote1"><p class="author">'
    
    var authorHtmlClose = '</p></div>';
    
    var containerHtmlClose = '</div>';
    
        
    // holds the quote and author
    var line1 = 'Success is the ability to go from';
    var line2 = 'failure to failure without losing';
    var line3 = 'enthusiasm.';
    var author = 'Winston Churchill';
        
    
    // creates the container info object
    containerQuote1 = new ContainerInfo();
    
    
    // sets the container info object
    setContainerQuote(
        containerQuote1, 
        quoteNumber, 
        containerHtmlOpen,
        containerHtmlClose,
        line1HtmlOpen,
        line2HtmlOpen,
        line3HtmlOpen,
        lineHtmlClose,
        authorHtmlOpen,
        authorHtmlClose,
        line1, 
        line2, 
        line3, 
        author);
}


// sets the properties for the container info object
function setContainerQuote2Properties() {
        
    var quoteNumber = 2;
        
    
    // html structure
    var containerHtmlOpen = '<div id="container-quote2" class="container">';
    
    var line1HtmlOpen = '<div class="inner-container-quote quote2-line1"><p class="quote">';
    
    var line2HtmlOpen = '<div class="inner-container-quote quote2-line2"><p class="quote">';
    
    var line3HtmlOpen = '<div class="inner-container-quote quote2-line3"><p class="quote">';
    
    var lineHtmlClose = '</p></div>';
    
    var authorHtmlOpen = '<div class="inner-container-author quote2"><p class="author">'
    
    var authorHtmlClose = '</p></div>';
    
    var containerHtmlClose = '</div>';
    
    
    // holds the quote and author
    var line1 = 'Experience ... that most brutal';
    var line2 = 'of teachers.  But you learn.';
    var line3 = 'My God, do you learn.';
    var author = 'C. S. Lewis';
    
    
    // creates the container info object
    containerQuote2 = new ContainerInfo();
    
    // sets the container info object
    setContainerQuote(
        containerQuote2, 
        quoteNumber, 
        containerHtmlOpen,
        containerHtmlClose,
        line1HtmlOpen,
        line2HtmlOpen,
        line3HtmlOpen,
        lineHtmlClose,
        authorHtmlOpen,
        authorHtmlClose,
        line1, 
        line2, 
        line3, 
        author);
}


// sets the properties for the container info object
function setContainerQuote3Properties() {
        
    var quoteNumber = 3;
        
    
    // html structure
    var containerHtmlOpen = '<div id="container-quote3" class="container">';
    
    var line1HtmlOpen = '<div class="inner-container-quote quote3-line1"><p class="quote">';
    
    var line2HtmlOpen = '<div class="inner-container-quote quote3-line2"><p class="quote">';
    
    var line3HtmlOpen = '<div class="inner-container-quote quote3-line3"><p class="quote">';
    
    var lineHtmlClose = '</p></div>';
    
    var authorHtmlOpen = '<div class="inner-container-author quote3"><p class="author">'
    
    var authorHtmlClose = '</p></div>';
    
    var containerHtmlClose = '</div>';  
        

    // holds the quote and author
    var line1 = 'Thanks for watching.';
    var line2 = 'Hire me. :-)';
    var line3 = '';
    var author = '';
    
    
    // creates the container info object
    containerQuote3 = new ContainerInfo();
    
    // sets the container info object
    setContainerQuote(
        containerQuote3, 
        quoteNumber, 
        containerHtmlOpen,
        containerHtmlClose,
        line1HtmlOpen,
        line2HtmlOpen,
        line3HtmlOpen,
        lineHtmlClose,
        authorHtmlOpen,
        authorHtmlClose,
        line1, 
        line2, 
        line3, 
        author);
}


// stuffs all the object properties in the right places
// for the ContainerInfo object
function setContainerQuote(containerInfoObject, quoteNumber, containerHtmlOpen, containerHtmlClose, line1HtmlOpen, line2HtmlOpen, line3HtmlOpen, lineHtmlClose, authorHtmlOpen, authorHtmlClose, quoteLine1, quoteLine2, quoteLine3, quoteAuthor) {
    
    // creates the quote object and attaches it to the
    // container info object
    containerInfoObject.quote( new Quote(quoteNumber, quoteLine1, quoteLine2, quoteLine3, quoteAuthor)  );
        
    
    // sets the HTML structure for the container info object    
    containerInfoObject.containerHtmlOpen(containerHtmlOpen);
    containerInfoObject.containerHtmlClose(containerHtmlClose);
    containerInfoObject.line1HtmlOpen(line1HtmlOpen);
    containerInfoObject.line2HtmlOpen(line2HtmlOpen);
    containerInfoObject.line3HtmlOpen(line3HtmlOpen);
    containerInfoObject.lineHtmlClose(lineHtmlClose);
    containerInfoObject.authorHtmlOpen (authorHtmlOpen);
    containerInfoObject.authorHtmlClose(authorHtmlClose);
    
    // this section injects the content into the HTML structure
    var htmlWithContent = '';
    
    htmlWithContent = containerHtmlOpen;
        
    htmlWithContent += line1HtmlOpen + quoteLine1 + lineHtmlClose;
    htmlWithContent += line2HtmlOpen + quoteLine2 + lineHtmlClose;
    
    if (quoteLine3 !== '') {
        htmlWithContent += line3HtmlOpen + quoteLine3 + lineHtmlClose;
    }
    
    if (quoteAuthor !== '') {
        htmlWithContent += authorHtmlOpen + quoteAuthor + authorHtmlClose;
    }
        
    htmlWithContent += containerHtmlClose;
    
    // stores the html and content in the container info object
    containerInfoObject.htmlWithContent(htmlWithContent);
    
    
//    // sets the regular expression to search for
//    var regExp = /<p class=\"quote\"><\/p>/;
//
//
//    // holds the opening and closing parargraph tags
//    var pOpen = '<p class="quote">';
//    var pClose = '</p>';
//    
//    // replaces the first occurence of the regular expression with 
//    // line 1 of the quote
//    var replaceWith = pOpen + quoteLine1 + pClose;
//    var htmlWithContent = htmlStructure.replace(regExp, replaceWith);
//    
//    // replaces the second occurence of the regular expression with 
//    // line 2  of the quote
//    replaceWith = pOpen + quoteLine2 + pClose;
//    htmlWithContent = htmlWithContent.replace(regExp, replaceWith);
//    
//    // replaces the third occurence of the regular expression with 
//    // line 3  of the quote
//    replaceWith = pOpen + quoteLine3 + pClose;
//    
//    if (quoteLine3 !== '') {    
//        htmlWithContent = htmlWithContent.replace(regExp, replaceWith);
//    }
//    
//    // sets the regular expression for the author
//    regExp = /<p class=\"author\"><\/p>/;
//    
//    // replaces the regular expression with the author
//    pOpen = '<p class="author">';
//    replaceWith = pOpen + quoteAuthor + pClose;
//    if (quoteAuthor !== '') {
//        htmlWithContent = htmlWithContent.replace(regExp, replaceWith);
//    }
//        
//    // stores the HTML structure with content in the container info object    
//    containerInfoObject.htmlWithContent(htmlWithContent);        
}


// gets the dimensions of the container
function getContainerQuote1Dimensions() {
        
    // checks to see if the container exists in the DOM tree
    if ( doesContainerExist(1) ) {
        // get the dimensions of the container
        containerQuote1.width( $('#container-quote1').css('width') );
        containerQuote1.height( $('#container-quote1').css('height') );
    } else {
        // creates the container
        $('body').html(containerQuote1.htmlWithContent() );

        // makes the created container invisible
        containerQuote1.hide();        
                
        // get the dimensions of the container
        containerQuote1.width( $('#container-quote1').css('width') );
        containerQuote1.height( $('#container-quote1').css('height') );
    }    
}


// gets the dimensions of the container
function getContainerQuote2Dimensions() {
        
    // checks to see if the container exists in the DOM tree
    if ( doesContainerExist(2) ) {
        // get the dimensions of the container
        containerQuote2.width( $('#container-quote2').css('width') );
        containerQuote2.height( $('#container-quote2').css('height') );
    } else {
        // creates the container
        $('body').html(containerQuote2.htmlWithContent() );

        // makes the created container invisible
        containerQuote2.hide();        
                
        // get the dimensions of the container
        containerQuote2.width( $('#container-quote2').css('width') );
        containerQuote2.height( $('#container-quote2').css('height') );
    }    
}


// gets the dimensions of the container
function getContainerQuote3Dimensions() {
        
    // checks to see if the container exists in the DOM tree
    if ( doesContainerExist(3) ) {
        // get the dimensions of the container
        containerQuote3.width( $('#container-quote3').css('width') );
        containerQuote3.height( $('#container-quote3').css('height') );
    } else {
        // creates the container
        $('body').html(containerQuote3.htmlWithContent() );

        // makes the created container invisible
        containerQuote3.hide();        
                
        // get the dimensions of the container
        containerQuote3.width( $('#container-quote3').css('width') );
        containerQuote3.height( $('#container-quote3').css('height') );
    }    
}


// checks to see if the container exists within the DOM tree
// returns true if it exists, false if it does not exist
function doesContainerExist(quoteNumber) {
    
    var divID = 'div#container-quote' + quoteNumber;
    
    var exist = $('body').has(divID);
    
    if (exist.length) {
        return true;
    } else {
        return false;
    }    
}


// centers the container
// both horizontal and vertical
function centerContainerQuote1() {
    
    containerQuote1.center();
}


// centers the container
// both horizontal and vertical
function centerContainerQuote2() {
    
    containerQuote2.center();
}


// centers the container
// both horizontal and vertical
function centerContainerQuote3() {
    
    containerQuote3.center();
}


// removes everything from the container
function clearContainerQuote1() {
    
    $(containerQuote1.getContainerID()).html('');    
}


// removes everything from the container
function clearContainerQuote2() {
    
    $(containerQuote2.getContainerID()).html('');    
}


// removes everything from the container
function clearContainerQuote3() {
    
    $(containerQuote3.getContainerID()).html('');    
}


// makes the container visible
function showContainerQuote1() {
    
    containerQuote1.show();    
}


// makes the container visible
function showContainerQuote2() {
    
    containerQuote2.show();    
}


// makes the container visible
function showContainerQuote3() {
    
    containerQuote3.show();    
}


// starts the animation with quote1
function startAnimation() {
        
    containerQuote1.animate();
    
}


// -- ENTRY POINT -- //

$("document").ready( function() {    
    
    // I structured it this way so
    // you can see the algorithm
    // for what happens with a quote.
    
    // The rest of the alogorithm is 
    // hidden in the animation steps.
    // I had to use callbacks to 
    // get past the asynchronous nature
    // of jQuery calls.
        
    
    // set the properties for the container info object
    // for the first quote
    setContainerQuote1Properties();
    
    
    // get the dimensions of the container
    getContainerQuote1Dimensions();
    
    
    // center the container in the viewport
    // both horizontal and vertical
    centerContainerQuote1();
    
    
    // clear the container of content,
    // but retain the container to keep
    // it's positioning
    clearContainerQuote1();
    
    
    // make the container visible so the
    // quote will show up when we start
    // the animation
    showContainerQuote1();
        
    // starts the animation
    startAnimation();
    
});

$(window).resize( function() {
    // reloads the page when the window is resized
    window.location = window.location.pathname;
});

// -- END ENTRY POINT -- //