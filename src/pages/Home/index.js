import React from "react";
import { useSelector } from "react-redux";

import Profile from "../Profile";

export default function Home() {
  const profile = useSelector((state) => state.user.user);

  return <Profile profile={profile} auth={true} />;
}
