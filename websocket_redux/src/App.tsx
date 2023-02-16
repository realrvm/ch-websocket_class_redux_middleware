import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

type Props = {};

export default function App({}: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "socket/connect" });

    return () => {
      dispatch({ type: "socket/disconnect" });
    };
  }, []);

  return <div>App</div>;
}
