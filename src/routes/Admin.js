import {
  Button,
  Flex,
  Heading,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import React, { useState } from "react";
import { API } from "aws-amplify";

function Admin({ user }) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsButtonDisabled(true);

    const username = e.target.username.value;
    const email = e.target.email.value;

    try {
      await API.post("adminActions", "/create-user", {
        body: {
          username,
          email,
        },
      });
    } catch (err) {
      console.log(err);
    } finally {
      setIsButtonDisabled(false);
    }
  };

  return user.signInUserSession.idToken.payload?.["cognito:groups"]?.includes(
    "admin"
  ) ? (
    <View as="main">
      <Heading style={{ marginBottom: "1rem" }} level={3}>
        Add a new user
      </Heading>
      <Flex>
        <Flex
          as="form"
          direction={{ base: "column", large: "row" }}
          onSubmit={handleFormSubmit}
        >
          <TextField
            label="username"
            name="username"
            placeholder="enter a username"
          />
          <TextField label="email" name="email" placeholder="enter an email" />
          <View alignSelf={"flex-end"}>
            <Button
              disabled={isButtonDisabled}
              type="submit"
              variation="primary"
            >
              Send
            </Button>
          </View>
        </Flex>
      </Flex>
    </View>
  ) : (
    <Heading level={3}>Contact your admin for permission</Heading>
  );
}

export default withAuthenticator(Admin, { hideSignUp: true });
