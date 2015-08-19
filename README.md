Good Angular tutorial
https://docs.angularjs.org/tutorial

How to start node.js server
1) install nodejs for your OS
2). RUn this command in a terminal (console)
> npm install http-server -g
3). Start server
> cd /path/to/your/project
> http-server -o --cors

find your project 
http://localhost:8080/yourfile.html

install angularjs plugin
in eclipse go to Help>Install new software
next enter in "Work with" http://oss.opensagres.fr/angularjs-eclipse/0.10.0/
continue with the instruction on this page
https://github.com/angelozerr/angularjs-eclipse/wiki/Getting-Started

to run a test
navigate to directory
1). npm test


================JUST TO MAKE SURE ======================
In order to get this framework working in eclipse follow these instructions:
Install angularjs plugin for eclipse
1). In eclipse go to Help>Install new software
2). Under "Work with" enter this url http://oss.opensagres.fr/angularjs-eclipse/0.10.0/
3). Continue by following the instructions found on this page https://github.com/angelozerr/angularjs-eclipse/wiki/Getting-Started
Start you nodejs server
1) make sure nodejs is installed on your OS
2). Run this command in a terminal (console)
> npm install http-server -g
3). Start server
> cd /path/to/your/project
> http-server -o --cors

==================TESTING================================
In order to run a Unit test on this framework some of the following things need to me created.
1). Make sure nodejs is installed
2). Check that your karma.conf.js file is up to date.
3). from a terminal navigate to ..\angularjs\angularjs
4). run >npm test



===================NOTES ON BEST PRACTICES===============
good website
https://www.airpair.com/angularjs/posts/top-10-mistakes-angularjs-developers-make

business logic should live in services, not controllers.
Factories can contain objects and can be used like models in java or c#, they can contain private methods and public methods, you instantiate them with a new.

===================NOTES ON DIRECTIVES===================
Compile :

This is the phase where Angular actually compiles your directive. 
This compile function is called just once for each references to the given directive. 
For example, say you are using the ng-repeat directive. ng-repeat will have to look up 
the element it is attached to, extract the html fragment that it is attached to and create a template function.

If you have used HandleBars, underscore templates or equivalent, its like compiling 
their templates to extract out a template function. To this template function you pass 
data and the return value of that function is the html with the data in the right places.

The compilation phase is that step in Angular which returns the template function. 
This template function in angular is called the linking function.

Linking phase :

The linking phase is where you attach the data ( $scope ) to the linking function 
and it should return you the linked html. Since the directive also specifies where 
this html goes or what it changes, it is already good to go. This is the function 
where you want to make changes to the linked html, i.e the html that already has the data 
attached to it. In angular if you write code in the linking function its generally the post-link 
function (by default). It is kind of a callback that gets called after the linking function has 
linked the data with the template.

Controller :

The controller is a place where you put in some directive specific logic. This logic can 
go into the linking function as well, but then you would have to put that logic on the scope 
to make it "shareable". The problem with that is that you would then be corrupting the scope 
with your directives stuff which is not really something that is expected. So what is the 
alternative if two Directives want to talk to each other / co-operate with each other? 
Ofcourse you could put all that logic into a service and then make both these directives depend 
on that service but that just brings in one more dependency. The alternative is to provide a 
Controller for this scope ( usually isolate scope ? ) and then this controller is injected 
into another directive when that directive "requires" the other one. See tabs and panes on 
the first page of angularjs.org for an example.


========================GOOD REFERENCE WEBSITES FOR WIDGETS================
http://onehungrymind.com/angularjs-dynamic-templates/
http://jsfiddle.net/nsisodiya/WgSch/
http://plnkr.co/edit/b6G2y3yqjhxpu059ZrWB?p=preview
http://plnkr.co/edit/Q13bUt?p=preview
http://stackoverflow.com/questions/16254239/angularjs-create-dynamic-action-in-super-directive