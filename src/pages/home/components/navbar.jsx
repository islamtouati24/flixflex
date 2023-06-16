import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const menu = [
    { name: "Home" },
    { name: "Stream/Buy" },
    { name: "Coming Soon" },
    { name: "About Us" },
    { name: "Contact" },
  ];
  const panelConfig = {
    focus: "true",
    className:
      "fixed inset-0 z-30 overflow-y-auto bg-white px-3 py-2 md:hidden",
  };
  return (
    <nav className="fixed inset-x-0 top-0 z-20 w-full bg-opacity-30 px-3 py-2 shadow-md backdrop-blur-lg backdrop-filter md:p-3">
      <div className="container mx-auto block flex-wrap items-center justify-start md:flex">
        <div className="flex flex-1 items-center justify-between">
          <Link to="/">
            <h3 className="text-3xl font-bold text-white">
              Flix<span className="text-red-700">Flex</span>.
            </h3>
          </Link>
          <div className="flex md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <ul
          data-menu
          className="hidden flex-wrap items-center justify-start space-x-1 text-white md:flex"
        >
          {menu.map((item) => (
            <li key={item.name}>
              <a
                href={item.name}
                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-400/10"
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <Link
              to="/login"
              className="block rounded-lg bg-red-600 px-5 py-2 text-base font-semibold leading-7 text-white hover:bg-red-700"
            >
              Login
            </Link>
          </li>
        </ul>
        <Dialog as="div" open={open} onClose={setOpen}>
          <Dialog.Panel {...panelConfig}>
            <div className="flex items-center justify-between">
              <div className="flex">
                <a href="no" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <h3 className="text-3xl font-bold text-gray-900">
                    Flix<span className="text-red-700">Flex</span>.
                  </h3>
                </a>
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {menu.map((item) => (
                    <a
                      key={item.name}
                      href={item.name}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                    >
                      {item.name}
                    </a>
                  ))}
                  <Link
                    to="/login"
                    className="block w-full rounded-lg bg-red-600 px-5 py-2 text-center text-base font-semibold leading-7 text-white hover:bg-red-700"
                  >
                    Login
                  </Link>{" "}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </nav>
  );
}
