import {useState, useEffect, useMemo} from 'react';
import {
  listenOrientationChange,
  removeOrientationListener,
} from 'react-native-responsive-screen';

export default () => {
  const setState = useState({})[1];
  const fakeThis = useMemo(() => ({setState}), [setState]);
  useEffect(() => {
    listenOrientationChange(fakeThis);
    return removeOrientationListener;
  }, [fakeThis]);
};
