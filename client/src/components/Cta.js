import React from 'react'

const Cta = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            header: "",
            body: "",
            image_url: "",
        }
    }
    render() {
        return (
            <div>
                <dt>
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sky-500 text-white">
                        {this.props.image_url !== "" &&
                            <img src={this.props.image_url} alt={"Associated CTA Image"}/>
                        }
                    </div>
                    <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{this.props.header}</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                    <p className="text-sm leading-5 text-gray-900">{this.props.body}</p>
                </dd>
            </div>
        )
    }
}

export default Cta;
