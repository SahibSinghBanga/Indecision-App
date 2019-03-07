console.log("App.js is running!");

// JSX - Javascript XML

const app = {
    title: "Indecision App!",
    subtitle: "Put your life in hands of a computer",
    options: ['One', 'Two']
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "No Options"}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

const user = {
    name: "Andrew",
    age: 26,
    location: "New York"
}

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const user = {
    name: "Andrew",
    age: 26,
    location: "New York"
}

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

/* Commands :

   1. babel src/app.js --out-file="public/scripts/app.js" --presets=env,react --watch
   2. live-server public

   Ternary Operator :
   true ? "Andrew" : "Anonymous" => Andrew
   false ? "Andrew" : "Anonymous" => Anonymous

   Logical AND Operator
    true && "Something" => true
    false && "Something" => false

*/