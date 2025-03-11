Naming Rules  for components 
  1.🎯Component Names should always starts with pascal case ;
    🎯Choose meaningful names that clearly describe the purpose of the component.
    🎯Component File Name Should Match Component Name :
        eg: ProfileCard  ,Button
        wrongway: profilecard button-> react considers these an html elements
        UserProfile.js → Contains the UserProfile component.
        Utility, Service, and Hook Files: Use camelCase

        any folder:small case
        Components& componet-files:PascalCase
        Utility, Service, and Hook Files: camelCase eg:authAPI


JSX: javascript+xml
 JSX is basically a syntax extension of JavaScript  which translate the javascript html code to  into regular JavaScript at runtime .

eg: let data=<h1>hello</h1>
        let data : javascript   
        <h1>hello</h1>: html code 

RULES : 
1.JSX expressions/elements must have one parent element.or fragment (doent creates extra spaces in the dom)
  <div>
        <h1>AIERA</h1>
    <ul>
        <li>Home</li>
        <li>about</li>
        <li>contact</li>
    </ul>
  </div>
  <> ---fragements
        <h1>AIERA</h1>
    <ul>
        <li>Home</li>
        <li>about</li>
        <li>contact</li>
    </ul>
  </>
    <React.Fragment>
        <h1>AIERA</h1>
    <ul>
        <li>Home</li>
        <li>about</li>
        <li>contact</li>
    </ul>
  </React.Fragment>

 2. In JSX, expressions like variables or calculations must be written inside curly braces { }
 comments: {/**/}
 3.We  cannot directly write if-else, loops, or declare functions inside the curly braces.but  JSX can be used inside conditional statements, loops, or functions.
 we can use Ternary operator inside jsx as conditional statement
 4.Use camelCase convention wherever possible for all Jsx attributes  .
 attibutes like 
 🧨class-clasName 
 🧨for-htmlFor
 🧨onclick-onClick
 🧨onchange-onChange
 🧨selected -defaultValue
 🧨checked -defaultChecked
 style={{backgroundColor:"red"}} //use double curlybraces and useCamelcase for properties
 5.all jsx elements must be closed 
  <img src="" alt=""/>
  <input type="text" />
