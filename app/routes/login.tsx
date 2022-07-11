import type { LoaderFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { authenticator } from "~/utils/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/",
  });
};

export default function Login() {
  return (
    <Form action="/auth/auth0" method="post">
      <button>Login with Auth0</button>
    </Form>
  );
}
