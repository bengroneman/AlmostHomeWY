import React from "react";

const PrimaryBtn = class extends React.Component {
   constructor(props) {
      super(props);
      this.props = {
         link: "#",
      }
   }
   render() {
      return (
          <a
              className={"group cursor-pointer my-2 inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900"}
              href={this.props.link}
          >
             {this.props.children}
          </a>
      )
   }
}
export default PrimaryBtn;