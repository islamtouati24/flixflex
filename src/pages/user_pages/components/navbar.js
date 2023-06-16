import { useDispatch } from "react-redux";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";
import { logOut } from "features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import {
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const menu = [{ name: "Movies" }, { name: "Series" }];
  const panelConfig = {
    focus: "true",
    className:
      "fixed inset-0 z-30 overflow-y-auto bg-white px-3 py-2 md:hidden",
  };

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(logOut());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <nav className="fixed inset-x-0 top-0 z-20 w-full bg-opacity-30 px-3 py-2 shadow-md backdrop-blur-lg backdrop-filter">
      <div className="container mx-auto flex items-center justify-start ">
        <div className="flex flex-1 items-center justify-start space-x-4">
          <Link to="/">
            <h3 className="text-3xl font-bold text-white">
              Flix<span className="text-red-700">Flex</span>.
            </h3>
          </Link>
          <ul
            data-menu
            className="hidden items-center justify-start space-x-1 text-white sm:flex"
          >
            {menu.map((item) => (
              <li key={item.name}>
                <Link
                  to={`/${item.name}`}
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-400/10"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex sm:hidden">
            <button
              type="button"
              className="-mx-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <button
          className="rounded-md bg-red-100 p-2 text-red-600 "
          onClick={handleLogOut}
        >
          <ArrowRightOnRectangleIcon className="h-auto w-5" />
        </button>
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
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </nav>
  );
}
