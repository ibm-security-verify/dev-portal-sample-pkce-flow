import { nonce, setUpOIDC } from "@/app/lib/client";
import { NextResponse } from "next/server";
import { cookies } from 'next/headers'
import { generators } from "openid-client";


const codeVerifier = generators.codeVerifier();
const codeChallenge = generators.codeChallenge(codeVerifier);

//route for return URL
export async function POST(){
    const state = generators.state();
    const cookieStore = await cookies()
    cookieStore.set({name: 'cv', value: codeVerifier, httpOnly: true});
    cookieStore.set('nonce', nonce);
    cookieStore.set('state', state);

    const client = await setUpOIDC();
    // create a Authorization URL
    const authorizationUrl = client.authorizationUrl({
    scope: "openid",
    state: state,
    nonce: cookieStore.get('nonce')?.value,
    code_challenge: codeChallenge,
    code_challenge_method: "S256",
  });

  return NextResponse.json(authorizationUrl);
}