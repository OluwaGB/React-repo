<!DOCTYPE html>
<html>
    <head>
        <title>Test</title>
        <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin>
        </script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script> 
    </head>
    <body>
        
        <div id="container"></div>
        <div id="container2"></div>
        
        <script type="text/babel">
        ReactDOM.render(
          <h1>Hello, React!</h1>,
          document.getElementById('container')
          
        )
        ReactDOM.render(<h2>My second React</h2>,document.getElementById ("container2"))
        </script>
        <!---in a react project the index.js file is the entry point of the app ---!>
        <!---The package.json is the file for all meta data -->
    </body>
</html>
