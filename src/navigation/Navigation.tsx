import { useEffect, useState } from 'react';

import useCurrentUser from 'src/hooks/useCurrentUser';
import { useAppSelector } from 'src/store/hooks/hooks';

import LogInSignUpNavigation from './LogInSignUpNavigation';
import TabNavigation from './TabNavigation';

const Navigation = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const { token } = useAppSelector((state) => state.user);

  const { checkUser } = useCurrentUser(null);

  useEffect(() => {
    (async () => {
      if (!token) {
        setIsSignedIn(false);
        return;
      }

      try {
        await checkUser();
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      } finally {
        setIsSignedIn(true);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    isSignedIn ? (
      <TabNavigation />
    ) : (
      <LogInSignUpNavigation />
    )
  );
};

export default Navigation;
