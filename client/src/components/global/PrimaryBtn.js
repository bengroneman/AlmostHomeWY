import React from "react";

const PrimaryBtn = class extends React.Component {
   constructor(props) {
      super(props);
      this.link = props.link;
   }
   render() {
      return (
          <a
              className={"flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8"}
              href={this.props.link}
          >
             {this.props.children}
          </a>
      )
   }
}
export default PrimaryBtn;