import React from "react";

const Hero = class extends React.Component {
    constructor(props) {
        super(props);
        this.props = {
            title: "",
            image: null,
            cta: false
        };
    }
    render() {
        return (
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
                {this.props.image &&
                    <img className="h-full w-full object-cover" src={this.props.image} alt="People working on laptops"/>
                }
              <div className="absolute inset-0 bg-gray-400 mix-blend-multiply"></div>
            </div>
            <div className="relative py-16 px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">{this.props.title}</span>
                <span className="block text-indigo-200">
                    {this.props.children}
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                <div className="space-y-4 sm:mx-auto">
                  {this.props.cta &&
                    <a href="/about" className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8">Learn More</a>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        )
    };
}

export default Hero;
