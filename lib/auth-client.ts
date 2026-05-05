import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://suncart-assignment-8.vercel.app/"

})

export const data = await authClient.signIn.social({
    provider: "google",
  });

export const { signIn, signUp, signOut, useSession } = createAuthClient()