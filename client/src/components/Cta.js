import React from 'react'

const Cta = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            header: "",
            body: "",
        }
    }
    render() {
        return (
            <div>
                <dt>
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sky-500 text-white">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                        </svg>
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
