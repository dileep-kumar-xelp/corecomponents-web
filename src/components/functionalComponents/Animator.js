import React from "react";
import ReactDOM from "react-dom";
export default class Animator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            style: {
                fontSize: 60,
                opacity: 0,
                transition: "all 2s ease"
            }
        };
    }

    componentWillReceiveProps(newProps) {
        // check for the mounted props
        if (!newProps.mounted) return this.unMountStyle(); // call outro animation when mounted prop is false
        this.setState({
            // remount the node when the mounted prop is true
            show: true
        });
        setTimeout(this.mountStyle, 10); // call the into animation
    }

    unMountStyle = () => {
        this.setState({
            style: {
                fontSize: 60,
                opacity: 0,
                transition: "all 1s ease"
            }
        });
    };

    mountStyle = () => {
        this.setState({
            style: {
                fontSize: 60,
                opacity: 1,
                transition: "all 1s ease"
            }
        });
    };

    componentDidMount() {
        this.node = ReactDOM.findDOMNode(this);
        console.log();
        this.node.ontransitionend = event => {
            this.transitionEnd(event);
        };
        console.log(this.node.classList);
        setTimeout(this.mountStyle, 10); // call the into animation
    }

    transitionEnd(event) {
        console.log("transition ended");
        // if (!this.props.mounted) {
        //     this.setState({
        //         show: false
        //     });
        // }
    }

    render() {
        return (
            this.state.show && (
                <h1
                    className="lolcage lol"
                    style={this.state.style}
                    onTransitionEnd={this.transitionEnd}
                    onClick={() => {
                        this.setState({ mounted: !this.state.mounted });
                    }}
                >
                    Hello
                </h1>
            )
        );
    }
}

//   class Parent extends React.Component{
//     constructor(props){
//       super(props)
//       this.buttonClick = this.buttonClick.bind(this)
//       this.state = {
//         showChild: true,
//       }
//     }
//     buttonClick(){
//       this.setState({
//         showChild: !this.state.showChild
//       })
//     }
//     render(){
//       return <div>
//           <App onTransitionEnd={this.transitionEnd} mounted={this.state.showChild}/>
//           <button onClick={this.buttonClick}>{this.state.showChild ? 'Unmount': 'Mount'}</button>
//         </div>
//     }
//   }
