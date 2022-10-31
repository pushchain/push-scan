import React from "react";
import RequireAuth from "components/RequireAuth";

export default function Admin() {
  return (
    <RequireAuth>
      <p>Admin section</p>
    </RequireAuth>
  );
}
