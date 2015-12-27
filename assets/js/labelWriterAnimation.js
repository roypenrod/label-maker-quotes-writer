/********************************************************
    
    labelWriterAnimation.js
    
    Site: roypenrod.com
    Project: label writer quotes
    Author:  Roy Penrod    
        
    Purpose:
    
      (1) Types a quote and author string into the 
      correct html structure, then erases them after
      a delay.
      
      (2) Types a second quote and author string into
      the correct html structure, then erases them
      after a delay.
      
      (3) Types a thank you message into the correct
      html structure.
      
********************************************************/

//'use strict';


// CONSTANT DEFINITIONS 

// holds the codes for smart quotes
var QUOTE_OPEN = '&ldquo;';
var QUOTE_CLOSE = '&rdquo;';

// set this in increments of 5
// example: 90, 95, 100, 105, 110 ... 
var TYPING_DELAY = 50;

// set this in increments of 100
// example: 10000, 10100, 10200, 10300, 10400 ...
var DELAY_BEFORE_ERASING_QUOTE = 15000;

// set this in increments of 100
// example: 100, 200, 300, 400, 500 ...
var DELAY_BETWEEN_QUOTES = 300;




// -- CLASS: ContainerInfo -- //

// constructor
var ContainerInfo = function(quoteObject) {
    
    this._htmlWithContent = '';       
    
    this._containerHtmlOpen = '';
    this._containerHtmlClose = '';
    this._line1HtmlOpen = '';
    this._line2HtmlOpen = '';
    this._line3HtmlOpen = '';
    this._lineHtmlClose = '';
    this._authorHtmlOpen = '';
    this._authorHtmlClose = '';
        
    this._quote = quoteObject;
    this._width = 0;
    this._height = 0;
};


// getter or setter
ContainerInfo.prototype.htmlWithContent = function(html) {
    
    // if html is undefined, the method is a getter
    if (html === undefined) {
        return this._htmlWithContent;
        
    // if html is not undefined, the method is a setter    
    } else {
        this._htmlWithContent = html;
    }    
};


// getter or setter
ContainerInfo.prototype.containerHtmlOpen = function(html) {
    
    // if html is undefined, the method is a getter
    if (html === undefined) {
        return this._containerHtmlOpen;
    // if html is not undefined, the method is a setter
    } else {
        this._containerHtmlOpen = html;
    }
};


// getter or setter
ContainerInfo.prototype.containerHtmlClose = function(html) {
    
    // if html is undefined, the method is a getter
    if (html === undefined) {
        return this._containerHtmlClose;
    // if html is not undefined, the method is a setter
    } else {
        this._containerHtmlClose = html;
    }
};


// getter or setter
ContainerInfo.prototype.line1HtmlOpen = function(html) {
    
    // if html is undefined, the method is a getter
    if (html === undefined) {
        return this._line1HtmlOpen;
    // if html is not undefined, the method is a setter
    } else {
        this._line1HtmlOpen = html;
    }
};


// getter or setter
ContainerInfo.prototype.line2HtmlOpen = function(html) {
    
    // if html is undefined, the method is a getter
    if (html === undefined) {
        return this._line2HtmlOpen;
    // if html is not undefined, the method is a setter
    } else {
        this._line2HtmlOpen = html;
    }
};


// getter or setter
ContainerInfo.prototype.line3HtmlOpen = function(html) {
    
    // if html is undefined, the method is a getter
    if (html === undefined) {
        return this._line3HtmlOpen;
    // if html is not undefined, the method is a setter
    } else {
        this._line3HtmlOpen = html;
    }
};


// getter or setter
ContainerInfo.prototype.lineHtmlClose = function(html) {
    
    // if html is undefined, the method is a getter
    if (html === undefined) {
        return this._lineHtmlClose;
    // if html is not undefined, the method is a setter
    } else {
        this._lineHtmlClose = html;
    }
};


// getter or setter
ContainerInfo.prototype.authorHtmlOpen = function(html) {
    
    // if html is undefined, the method is a getter
    if (html === undefined) {
        return this._authorHtmlOpen;
    // if html is not undefined, the method is a setter
    } else {
        this._authorHtmlOpen = html;
    }
};


// getter or setter
ContainerInfo.prototype.authorHtmlClose = function(html) {
    
    // if html is undefined, the method is a getter
    if (html === undefined) {
        return this._authorHtmlClose;
    // if html is not undefined, the method is a setter
    } else {
        this._authorHtmlClose = html;
    }
};


// getter or setter
ContainerInfo.prototype.quote = function(quoteObject) {
    
    // if quoteObject is undefined, the method is a getter
    if (quoteObject === undefined) {        
        return this._quote;
        
    // if quoteObject is not undefined, the method is a setter
    } else {
        this._quote = quoteObject;        
    }   
};


// getter or setter
ContainerInfo.prototype.width = function(containerWidth) {
    
    // if containerWidth is undefined, the method is a getter
    if (containerWidth === undefined) {
        return this._width;
    // if containerWidth is not undefined, the method is a setter
    } else {
        this._width = parseFloat(containerWidth);
    }
};


// getter or setter
ContainerInfo.prototype.height = function(containerHeight) {
    
    // if containerHeight is undefined, the method is a getter
    if (containerHeight === undefined) {
        return this._height;
    // if containerHeightis not undefined, the method is a setter
    } else {
        this._height = parseFloat(containerHeight);
    }
};


// getter
ContainerInfo.prototype.getContainerID = function() {
    
    return 'div#container-quote' + this.quote().number();
};


// centers the container 
// both horizontal and vertical
ContainerInfo.prototype.center = function() {
    
    var viewportWidth = $(window).innerWidth();
    var viewportHeight = $(window).innerHeight();
    
    var sideMargins = (viewportWidth - this.width() ) / 2;
    var topMargin = (viewportHeight - this.height() ) / 2;
    
    var containerID = this.getContainerID();
    
    $(containerID).css('marginLeft', sideMargins);
    $(containerID).css('marginRight', sideMargins);
    $(containerID).css('marginTop', topMargin);    
};


// makes the container visible
ContainerInfo.prototype.show = function() {
    
    var containerID = this.getContainerID();
    
    $(containerID).css('opacity', 1);    
};


// makes the container invisible
ContainerInfo.prototype.hide = function() {
    
    var containerID = this.getContainerID();
    
    $(containerID).css('opacity', 0);    
};



// Animation Methods

ContainerInfo.prototype.animate = function() {
    
    // inject the html structure for line 1 
    // into the main container
    $(this.getContainerID()).html(this.line1HtmlOpen() + QUOTE_OPEN + this.lineHtmlClose()); 
        
    // write Line 1
    writeLine( this.quote().line1(), 'div.quote1-line1>p.quote', this.animateStep2, this);  
};


ContainerInfo.prototype.animateStep2 = function(callingContainerInfoObject) {
    
    // inject the html structure for line 2 into the main container
    $(callingContainerInfoObject.getContainerID()).append(callingContainerInfoObject.line2HtmlOpen() + callingContainerInfoObject.lineHtmlClose());
    
    // write Line 2
    writeLine( callingContainerInfoObject.quote().line2(), 'div.quote1-line2>p.quote', callingContainerInfoObject.animateStep3, callingContainerInfoObject);    
}


ContainerInfo.prototype.animateStep3 = function(callingContainerInfoObject) {
    
    //inject the html structure for line 3 into the main container
    $(callingContainerInfoObject.getContainerID()).append(callingContainerInfoObject.line3HtmlOpen() + callingContainerInfoObject.lineHtmlClose());
    
    // write Line 3
    writeLine( callingContainerInfoObject.quote().line3(), 'div.quote1-line3>p.quote', callingContainerInfoObject.animateStep4, callingContainerInfoObject);    
}


ContainerInfo.prototype.animateStep4 = function(callingContainerInfoObject) {
    
    // add the closing smart quote
    $('div.quote1-line3>p.quote').append(QUOTE_CLOSE);
    
    callingContainerInfoObject.animateStep5(callingContainerInfoObject);
}


ContainerInfo.prototype.animateStep5 = function(callingContainerInfoObject) {
    
    //inject the html structure for author into the main container
    $(callingContainerInfoObject.getContainerID()).append(callingContainerInfoObject.authorHtmlOpen() + callingContainerInfoObject.authorHtmlClose());
        
    // write the author
    writeLine( callingContainerInfoObject.quote().author(), 'div.quote1>p.author', callingContainerInfoObject.animateStep6, callingContainerInfoObject );    
}


ContainerInfo.prototype.animateStep6 = function(callingContainerInfoObject) {
    
    pause(DELAY_BEFORE_ERASING_QUOTE, callingContainerInfoObject.animateStep7, callingContainerInfoObject);
}


ContainerInfo.prototype.animateStep7 = function(callingContainerInfoObject) {
    
    // erases the author
    eraseLine('div.quote1>p.author', callingContainerInfoObject.animateStep8, callingContainerInfoObject);
}


ContainerInfo.prototype.animateStep8 = function(callingContainerInfoObject) {   
    
    // remove the author container from the html structure
    $('div.quote1').remove();
    
    // erases line 3
    eraseLine('div.quote1-line3>p.quote', callingContainerInfoObject.animateStep9, callingContainerInfoObject);        
}


ContainerInfo.prototype.animateStep9 = function(callingContainerInfoObject) {
    
    // remove the line 3 container from the html structure
    $('div.quote1-line3').remove();
    
    // erases line 2
    eraseLine('div.quote1-line2>p.quote', callingContainerInfoObject.animateStep10, callingContainerInfoObject);       
}


ContainerInfo.prototype.animateStep10 = function(callingContainerInfoObject) {
        
    // remove the line 2 container from the html structure
    $('div.quote1-line2').remove();
    
    // erases line 1
    eraseLine('div.quote1-line1>p.quote', callingContainerInfoObject.animateStep11, callingContainerInfoObject);           
}


ContainerInfo.prototype.animateStep11 = function(callingContainerInfoObject) {
    
    // remove the container from the html structure
    $('div#container-quote1').remove();
    
    callingContainerInfoObject.animateStep12(callingContainerInfoObject);
}


ContainerInfo.prototype.animateStep12 = function(callingContainerInfoObject) {
    
    pause(DELAY_BETWEEN_QUOTES, callingContainerInfoObject.animateStep13, callingContainerInfoObject);
}


ContainerInfo.prototype.animateStep13 = function(callingContainerInfoObject) {
 
    // set the properties for the container info object
    // for the second quote
    setContainerQuote2Properties();
    
    // get the dimensions of the container
    getContainerQuote2Dimensions();
    
    // center the container in the viewport
    // both horizontal and vertical
    centerContainerQuote2();
    
    // clear the container of content,
    // but retains the container to keep
    // it's positioning
    clearContainerQuote2();
    
    // make the container visible so the
    // quote will show up when we start
    // the animation
    showContainerQuote2();
    
    // inject the html structure for line 1 
    // into the main container
    $(containerQuote2.getContainerID()).html(containerQuote2.line1HtmlOpen() + QUOTE_OPEN + containerQuote2.lineHtmlClose()); 
        
    // write Line 1
    writeLine( containerQuote2.quote().line1(), 'div.quote2-line1>p.quote', containerQuote2.animateStep14, containerQuote2);       
}


ContainerInfo.prototype.animateStep14 = function(callingContainerInfoObject) {
    
    // inject the html structure for line 2 into the main container
    $(callingContainerInfoObject.getContainerID()).append(callingContainerInfoObject.line2HtmlOpen() + callingContainerInfoObject.lineHtmlClose());
    
    // write Line 2
    writeLine( callingContainerInfoObject.quote().line2(), 'div.quote2-line2>p.quote', callingContainerInfoObject.animateStep15, callingContainerInfoObject);    
}


ContainerInfo.prototype.animateStep15 = function(callingContainerInfoObject) {
    
    //inject the html structure for line 3 into the main container
    $(callingContainerInfoObject.getContainerID()).append(callingContainerInfoObject.line3HtmlOpen() + callingContainerInfoObject.lineHtmlClose());
    
    // write Line 3
    writeLine( callingContainerInfoObject.quote().line3(), 'div.quote2-line3>p.quote', callingContainerInfoObject.animateStep16, callingContainerInfoObject);    
}


ContainerInfo.prototype.animateStep16 = function(callingContainerInfoObject) {
    
    // add the closing smart quote
    $('div.quote2-line3>p.quote').append(QUOTE_CLOSE);
    
    callingContainerInfoObject.animateStep17(callingContainerInfoObject);
}


ContainerInfo.prototype.animateStep17 = function(callingContainerInfoObject) {
    
    //inject the html structure for author into the main container
    $(callingContainerInfoObject.getContainerID()).append(callingContainerInfoObject.authorHtmlOpen() + callingContainerInfoObject.authorHtmlClose());
        
    // write the author
    writeLine( callingContainerInfoObject.quote().author(), 'div.quote2>p.author', callingContainerInfoObject.animateStep18, callingContainerInfoObject );    
}


ContainerInfo.prototype.animateStep18 = function(callingContainerInfoObject) {

    pause(DELAY_BEFORE_ERASING_QUOTE, callingContainerInfoObject.animateStep19, callingContainerInfoObject);
}


ContainerInfo.prototype.animateStep19 = function(callingContainerInfoObject) {
    
    // erases the author
    eraseLine('div.quote2>p.author', callingContainerInfoObject.animateStep20, callingContainerInfoObject);
}


ContainerInfo.prototype.animateStep20 = function(callingContainerInfoObject) {
    
    // remove the author container from the html structure
    $('div.quote2').remove();
    
    // erases line 3
    eraseLine('div.quote2-line3>p.quote', callingContainerInfoObject.animateStep21, callingContainerInfoObject);        
}


ContainerInfo.prototype.animateStep21 = function(callingContainerInfoObject) {
    
    // remove the line 3 container from the html structure
    $('div.quote2-line3').remove();
    
    // erases line 2
    eraseLine('div.quote2-line2>p.quote', callingContainerInfoObject.animateStep22, callingContainerInfoObject);       
}


ContainerInfo.prototype.animateStep22 = function(callingContainerInfoObject) {
    
    // remove the line 2 container from the html structure
    $('div.quote2-line2').remove();
    
    // erases line 1
    eraseLine('div.quote2-line1>p.quote', callingContainerInfoObject.animateStep23, callingContainerInfoObject);       
}


ContainerInfo.prototype.animateStep23 = function(callingContainerInfoObject) {
    
    // remove the container from the html structure
    $('div#container-quote2').remove();
    
    callingContainerInfoObject.animateStep24(callingContainerInfoObject);
}


ContainerInfo.prototype.animateStep24 = function(callingContainerInfoObject) {
    
    pause(DELAY_BETWEEN_QUOTES, callingContainerInfoObject.animateStep25, callingContainerInfoObject);
}


ContainerInfo.prototype.animateStep25 = function(callingContainerInfoObject) {
    
    // set the properties for the container info object
    // for the thank you note
    setContainerQuote3Properties();
    
    // get the dimensions of the container
    getContainerQuote3Dimensions();
    
    // center the container in the viewport
    // both horizontal and vertical
    centerContainerQuote3();
    
    // clear the container of content,
    // but retains the container to keep
    // it's positioning
    clearContainerQuote3();
    
    // make the container visible so the
    // quote will show up when we start
    // the animation
    showContainerQuote3();
    
    // inject the html structure for line 1 
    // into the main container
    $(containerQuote3.getContainerID()).html(containerQuote3.line1HtmlOpen() + containerQuote3.lineHtmlClose()); 
        
    // write Line 1
    writeLine( containerQuote3.quote().line1(), 'div.quote3-line1>p.quote', containerQuote3.animateStep26, containerQuote3);           
}


ContainerInfo.prototype.animateStep26 = function(callingContainerInfoObject) {
    
    // inject the html structure for line 2 into the main container
    $(callingContainerInfoObject.getContainerID()).append(callingContainerInfoObject.line2HtmlOpen() + callingContainerInfoObject.lineHtmlClose());
    
    // write Line 2
    writeLine( callingContainerInfoObject.quote().line2(), 'div.quote3-line2>p.quote');    
}




// -- CLASS: Quote -- //

var Quote = function(number, line1, line2, line3, author) {
    
    this._number = number;
    this._line1 = line1;   
    this._line2 = line2;
    this._line3 = line3;
    this._author = author;
};


// this is a getter
Quote.prototype.number = function() {
    return this._number;
};


// this is a getter
Quote.prototype.line1 = function() {
    return this._line1;
};


// this is a getter
Quote.prototype.line2 = function() {
    return this._line2;
};


// this is a getter
Quote.prototype.line3 = function() {
    return this._line3;
};


// this is a getter
Quote.prototype.author = function() {
    return this._author;
};




// -- FUNCTIONS -- //

// writes the line to the container selector given
function writeLine(stringToWrite, containerSelector, callback, callingContainerInfoObject) {

    // converts the string to an array of characters
    var writeThis = stringToWrite.split('');
        
    // keeps track of the last time the function was called    
    var timeElapsed = 0;
    var lastTimeCalled = new Date().getTime();   
    
    // sets the interval timer
    var timerID = window.setInterval( writeNextCharacter, 5 );

    
    // handles writing the next character to the container selector
    // given after the delay has passed
    function writeNextCharacter() {
        var currentTime = new Date().getTime();
        var timeDifference = currentTime - lastTimeCalled;                
        timeElapsed += timeDifference;        
                
        if ( timeElapsed >= TYPING_DELAY )  {
            
            // if the array is empty, we're done
            if (writeThis.length === 0) {
                // stop the timer
                window.clearInterval(timerID);  
                
                // reset the elapsed time
                timeElapsed = 0;
                
                // saves the last time the function was called
                lastTimeCalled = currentTime;
                
                // checks to see if the callback is a function
                if ( typeof callback === 'function') {
                    // it's a function, so call it
                    callback(callingContainerInfoObject);
                }
                
                return;
                
            // if the array is not empty, grab the
            // next character and insert it into the 
            // container selector given
            } else {
                $(containerSelector).append( writeThis.shift() );    
            }          
            
            // resets the elapsed time
            timeElapsed = 0;
        }
        
        // saves the last the function was called
        lastTimeCalled = currentTime;
    }   
}


// erases the line from the container selector given
function eraseLine(containerSelector, callback, callingContainerInfoObject) {

    // keeps track of the last time the function was called    
    var timeElapsed = 0;
    var lastTimeCalled = new Date().getTime();   
    
    // sets the interval timer
    var timerID = window.setInterval( eraseNextCharacter, 5 );
    
    // handles writing everything but the erased character to the 
    // container selector given after the delay has passed
    function eraseNextCharacter() {
        var currentTime = new Date().getTime();
        var timeDifference = currentTime - lastTimeCalled;                
        timeElapsed += timeDifference;   
        
        // get the string from the container selector given
        var eraseThis = $(containerSelector).html();
        
        if ( timeElapsed >= TYPING_DELAY )  {
            
            // if the string is empty, we're done 
            if (eraseThis.length === 0) {
                
                // stop the timer
                window.clearInterval(timerID);  
                
                // reset the elapsed time
                timeElapsed = 0;
                
                // saves the last time the function was called
                lastTimeCalled = currentTime;
                
                // checks to see if the callback is a function
                if ( typeof callback === 'function') {
                    // it's a function, so call it
                    callback(callingContainerInfoObject);
                }
                
                return;
                
            // if the string is not empty, insert the
            // string into the container selector given
            } else {
                // remove the last character of the string
                eraseThis = eraseThis.slice(0, (eraseThis.length - 1) );
                
                // insert the string
                $(containerSelector).html(eraseThis);
            }
            
            // resets the elapsed time
            timeElapsed = 0;
            
        }
        
        // saves the time the function was last called
        lastTimeCalled = currentTime;
    }
}


// sets a timer and tracks it
function pause(delay, callback, callingContainerInfoObject) {

    // sets a timer and tracks it to pause between quotes
    var timeElapsed = 0;
    var lastTimeCalled = new Date().getTime();
    var timerID = window.setInterval(trackPause, 100);
    
    function trackPause() {
        var currentTime = new Date().getTime();
        var timeDifference = currentTime - lastTimeCalled;
        timeElapsed += timeDifference;
        
        // we're done 
        if (timeElapsed >= delay) {
            
            // clear timer
            window.clearInterval(timerID);
            
            // checks to see if the callback is a function
            if ( typeof callback === 'function') {
                    // it's a function, so call it
                    callback(callingContainerInfoObject);
            }            
        }
    }   
}



