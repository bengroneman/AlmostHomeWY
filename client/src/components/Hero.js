import React from "react";

const Hero = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            image: "",
            button: true,
        };
    }
    render() {
        return (
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">{this.props.title}</span>
            </h1>
            <p
                className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            >
                {this.props.children}
            </p>
          </div>
        );
    };
}

export default Hero;
