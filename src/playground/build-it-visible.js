class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    toggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }

    render() {
        return (
            <div>
                <h1>VisibilityToggle</h1>
                <button onClick={this.toggleVisibility}>
                    {this.state.visibility ? "Hide Detais" : "Show Details"}
                </button>
                {
                    this.state.visibility && (
                        <div>
                            <p>These are some details now you can see!</p>
                        </div>
                    )
                }
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// console.log("App is running");

// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility;   // Just to hide and show button
//     render();
// };

// const appRoot = document.getElementById('app');

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>
//                 {visibility ? "Hide details" : "Show details"}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>These are some details now you can see!</p>
//                 </div>
//             )}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };

// render();
