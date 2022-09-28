import { Button, withAuthenticator } from "@aws-amplify/ui-react";
import React from "react";

function ProtectedUser({ user, signOut }) {
  return (
    <div>
      ProtectedUser <Button onClick={signOut}>log out</Button>
      <code>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </code>
    </div>
  );
}

export default withAuthenticator(ProtectedUser);
