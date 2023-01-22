import * as React from "react";
import CoreLayout from "../components/layouts/CoreLayout";
import Hero from "../components/Hero";
import { Link } from "gatsby";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import { getHyGraphContent } from "../utils/utils";

const DonatePage = () => {
  const [donatePage, setDonatePage] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const query = `
        query DonatePage {
          donatePage(where: {id: "cld1103to7jt10cn1i53ktwc2"}) {
            id
            hero {
              subHeader
              header
            }
          }
        }
      `;
    getHyGraphContent(query).then((content) => {
      setDonatePage(content.data.donatePage);
      setLoading(false);
    });
  }, []);

  if (!loading) {
    return (
      <CoreLayout>
        <Hero title={donatePage.hero.header}></Hero>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Ways to donate
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Check, Paypal, card
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">By Mail</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  P.O. Box 44, Lander, WY, 82520.
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  Meridian Trust
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  Meridian Trust Bank , 873 Main St., Lander, WY, 82520
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Paypal</dt>
                <dd className="mt-1 text-sm text-gray-900"></dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Card</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  <Link
                    to="https://buy.stripe.com/14k8zbdg00bX6e4eUU"
                    target="_blank"
                    className="w-full inline-flex items-center justify-center py-1 px-3 bg-sky-100 border border-transparent rounded-md shadow-md text-base font-medium text-sky-800 hover:bg-gray-50 sm:w-auto"
                  >
                    Donate
                    <ExternalLinkIcon className="w-6 h-6 pl-2 " />
                  </Link>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </CoreLayout>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default DonatePage;
