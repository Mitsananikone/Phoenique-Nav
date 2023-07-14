import { useState, useEffect } from "react";
import  NavLink  from "./NavLink";
import { userService } from "services";


export default function DropdownFAQ() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscription = userService.user.subscribe((x) => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  // only show nav when logged in
  if (!user) return null;

const renderBreastSurgeryDropdown = () => (
  <ul className="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left w-56">
    <li className="px-3 py-1 hover:bg-gray-100">
      <NavLink href="/breast/augmentation">Breast Augmentation FAQ</NavLink>
    </li>
    <li className="px-3 py-1 hover:bg-gray-100">
      <NavLink href="/breast/lift">Breast Lift FAQ</NavLink>
    </li>
    <li className="px-3 py-1 hover:bg-gray-100">
      <NavLink href="/breast/reduction">Breast Reduction FAQ</NavLink>
    </li>
    <li className="px-3 py-1 hover:bg-gray-100">
      <NavLink href="/breast/revision">Breast Revision FAQ</NavLink>
    </li>
    <li className="px-3 py-1 hover:bg-gray-100">
      <NavLink href="/breast/explant">Breast Explant FAQ</NavLink>
    </li>
    <li className="px-3 py-1 hover:bg-gray-100">
      <NavLink href="/breast/male-breast-reduction">Male Breast Reduction FAQ</NavLink>
    </li>
    <li className="px-3 py-1 hover:bg-gray-100">
      <NavLink href="/body/mummy-makeover">Mummy Makeover FAQ</NavLink>
    </li>
    <li className="px-3 py-1 hover:bg-gray-100">
      <NavLink href="/body/tummy-tuck">Tummy Tuck FAQ</NavLink>
    </li>
    <li className="px-3 py-1 hover:bg-gray-100">
      <NavLink href="/body/labiaplasty">Labiaplasty FAQ</NavLink>
    </li>
    <li className="px-3 py-1 hover:bg-gray-100">
      <NavLink href="/body/arm-lift">Arm Lift FAQ</NavLink>
    </li>
    <li className="px-3 py-1 hover:bg-gray-100">
      <NavLink href="/body/thigh-lift">Thigh Lift FAQ</NavLink>
    </li>
    <li className="px-3 py-1 hover:bg-gray-100">
      <NavLink href="/body/weight-loss-surgery">Weight Loss Surgery FAQ</NavLink>
    </li>
    <li className="px-3 py-1 hover:bg-gray-100">
      <NavLink href="/face/rhinoplasty">Rhinoplasty FAQ</NavLink>
    </li>
    <li className="px-3 py-1 hover:bg-gray-100">
      <NavLink href="/face/facelift">Facelift FAQ</NavLink>
    </li>
    <li className="px-3 py-1 hover:bg-gray-100">
      <NavLink href="/face/eyelid-lift">Eyelid Lift FAQ</NavLink>
    </li>
    <li className="px-3 py-1 hover:bg-gray-100">
      <NavLink href="/face/ear-pinning">Ear Pinning FAQ</NavLink>
    </li>

  </ul>
);


  return (
    <div>
      <div className="group inline-block">
        <button className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center w-40">
          <span className="pr-1 font-semibold flex-1">FAQ</span>
          <span>
            <svg
              className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        </button>

        <ul className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top w-40">
          <li className="rounded-sm relative px-5 py-1 hover:bg-gray-100">
            <button className="w-full text-left flex items-center outline-none focus:outline-none">
              <span className="pr-1 flex-1">Surgery FAQ</span>
              <span className="mr-auto">
                <svg
                  className="fill-current h-4 w-4 transition duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </span>
            </button>
            {renderBreastSurgeryDropdown()}
          </li>
          <li className="rounded-sm relative px-5 py-1 hover:bg-gray-100">
            <button className="w-full text-left flex items-center outline-none focus:outline-none">
              <span className="pr-1 flex-1">Surgeons FAQ</span>
            </button>
        </li>
        <li className="rounded-sm relative px-5 py-1 hover:bg-gray-100">
            <button className="w-full text-left flex items-center outline-none focus:outline-none">
              <span className="pr-1 flex-1">Hospital FAQ</span>
            </button>
        </li>
        <li className="rounded-sm relative px-5 py-1 hover:bg-gray-100">
            <button className="w-full text-left flex items-center outline-none focus:outline-none">
              <span className="pr-1 flex-1">Recovery FAQ</span>
            </button>
        </li>
        <li className="rounded-sm relative px-5 py-1 hover:bg-gray-100">
            <button className="w-full text-left flex items-center outline-none focus:outline-none">
              <span className="pr-1 flex-1">Accomodation FAQ</span>
            </button>
        </li>
        <li className="rounded-sm relative px-5 py-1 hover:bg-gray-100">
            <button className="w-full text-left flex items-center outline-none focus:outline-none">
              <span className="pr-1 flex-1">Travel FAQ</span>
            </button>
        </li>
         
        </ul>
      </div>

      <style>
        {`
        li > ul { transform: translatex(100%) scale(0); }
        li:hover > ul { transform: translatex(101%) scale(1); }
        li > button svg { transform: rotate(-90deg); }
        li:hover > button svg { transform: rotate(-270deg); }
        .group:hover .group-hover\:scale-100 { transform: scale(1); }
        .group:hover .group-hover\:-rotate-180 { transform: rotate(180deg); }
        .scale-0 { transform: scale(0); }
        .min-w-32 { min-width: 8rem; }
      `}
      </style>
    </div>
  );
}
