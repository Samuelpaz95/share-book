import { app } from './configureExpress/configure';

let message = "Begin with configure babel in node.js :)";
console.info(message);
let port = app.get('port');
app.listen(port);
console.log('http://localhost:' + port);
