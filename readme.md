


### 6. Answer the following questions clearly:

# Question No:1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Ans: Comparison of DOM selection methods:-

getElementById():- Use this for fast, direct access to a single element with a unique ID.


getElementsByClassName():- Use this when you need to select multiple elements based on a single class name, especially if you need the collection to update live with DOM changes.


querySelector():- Use this for flexibility when you need the first element that matches any complex CSS selector, including IDs, classes, and tag combinations.


querySelectorAll():- Use this for flexibility when you need a static list of all elements that match a complex CSS selector.



# Question No:2. How do you **create and insert a new element into the DOM**?

Ans: To create and insert a new element into the Document Object Model (DOM), 
you first use document.createElement() to create the element. 
Then, you use a method like appendChild(), 
append(), prepend(), or insertBefore()  to insert it into a specific location within the DOM. 





Question No:3. What is **Event Bubbling** and how does it work?

Ans: Event bubbling is a type of event propagation in the Document Object Model (DOM) where an event, triggered on an element, first executes on that element and then "bubbles up" through all of its parent elements. This continues until the event reaches the outermost DOM element, or the document object.

How event bubbling works:-
Event propagation in a browser consists of three phases: 
1 Capturing phase: The event starts at the window and travels down the DOM tree to the target element.
2 Target phase: The event reaches and is handled by the target element that was interacted with.
3 Bubbling phase: The event travels back up from the target element, triggering any event listeners on its parent, 4 grandparent, and other ancestors along the way. This is the default behavior for most events.



# Question No:4. What is **Event Delegation** in JavaScript? Why is it useful?

Ans: In JavaScript, event delegation is a technique that involves adding a single event listener to a parent element to manage events for its child elements. This is possible due to event bubbling, where events on a child element propagate up to its ancestors in the DOM. The delegated listener on the parent element can then identify the original child element that triggered the event using event.target and react accordingly. 

Why event delegation is useful:

1. Performance and Memory:
Attaching one listener to a parent instead of many to individual children reduces memory usage and improves performance, especially with numerous elements. 

2. Dynamically Added Elements :
Event delegation automatically handles events for child elements added to the DOM after the initial page load, eliminating the need to attach new listeners manually. 

3. Simpler Code : 
Consolidating event handling logic in one place makes code cleaner and easier to maintain. It also prevents memory leaks by not requiring manual removal of listeners when child elements are removed. 

3. Streamlined UIs :
This technique is particularly effective for components like lists and tables and is beneficial in single-page applications where the DOM is frequently updated.


# Question No:5. What is the difference between **preventDefault() and stopPropagation()** methods?

Ans: preventDefault() and stopPropagation() are two distinct JavaScript event methods used to control how events behave, but they target different aspects of the event's lifecycle. 


Comparison of preventDefault() vs. stopPropagation():

preventDefault() :
	1. Prevents the browser's default action for a given event.
    2. Does not stop the event from propagating to parent elements. Handlers on parent elements will still execute.
    3. Prevents a <form> from submitting, a link (<a>) from navigating to its href, or a checkbox from being checked.
    4. The action associated with the event.

stopPropagation() :

    1. Stops the event from "bubbling up" or "capturing down" the DOM tree.
    2. Stops the flow of the event. Handlers on parent elements will not be executed.
    3. Stops a click on a nested element (like a button) from also triggering a click event 
    on its parent container.
    4. The propagation of the event through the DOM.