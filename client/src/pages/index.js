import * as React from "react"
import CoreLayout from "../components/layouts/CoreLayout";
import Hero from "../components/Hero";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
      <CoreLayout>
        <Hero title="Almost Home">
          <p className="text-xl">Wyoming</p>
        </Hero>
        <div className="relative my-12 py-12">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-3 text-2xl font-medium text-gray-900"> Homeless to hopeful, with just a little help </span>
          </div>
        </div>

        <div className="py-12 my-12 bg-white">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">About. </h2>
            <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
              <div>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sky-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-900">Read about our mission</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
              </div>

              <div>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sky-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-900">Contact us</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
              </div>

              <div>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sky-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-900">Find ways to help</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="relative my-12 py-12">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-3 text-2xl font-semibold text-gray-900"> Help our cause </span>
          </div>
        </div>
        <div className="bg-sky-50 py-12 my-12">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
              <span className="block">Ways to help our cause</span>
              <span className="block text-sky-600">Donate, volunteer, or seek help</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link to="/" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700"> Donate </Link>
              </div>
            </div>
          </div>
        </div>
      </CoreLayout>
  )
}

export default IndexPage
