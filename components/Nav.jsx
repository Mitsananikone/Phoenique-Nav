import { useState, useEffect } from 'react';
import { NavLink } from '.';
import { userService } from 'services';
import { DropDown } from './Dropdown';
export { Nav };


function Nav() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscription = userService.user.subscribe((x) => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  // only show nav when logged in
  if (!user) return null;

  return (
    <DropDown buttonText="Plastic Surgery"  />
  );
}
