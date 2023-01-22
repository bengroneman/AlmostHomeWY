import React from "react";
import PrimaryBtn from "./global/PrimaryBtn";

const Hero = class extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      title: "Title",
      subTitle: "SubTitle",
      image: null,
      cta: false,
    };
  }
  render() {
    return (
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              {this.props.image && (
                <img
                  className="h-full w-full object-cover"
                  src={this.props.image}
                  alt="People working on laptops"
                />
              )}
              <div className="absolute inset-0 bg-gray-400 mix-blend-multiply"></div>
            </div>
            <div className="relative py-16 px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">{this.props.title}</span>
                <span className="block text-indigo-200">
                  {this.props.children}
                </span>
              </h1>
              <h2 className="text-center text-2xl font-semibold tracking-light text-indigo-200 mt-2">
                {this.props.subTitle}
              </h2>
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                <div className="space-y-4 sm:mx-auto">
                  {this.props.cta && (
                    <PrimaryBtn link={"/about"}>Learn More</PrimaryBtn>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Hero;
