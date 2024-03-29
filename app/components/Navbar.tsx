import Link from "next/link"
export default function Navbar(){
    return(
    <nav className="bg-slate-100 px-24 py-16 mb-8">
        <h1 className= "mb-2 font-bold w-3/5">Authorization code grant type with Proof Key for Code Exchange (PKCE)</h1>
        <p className="mb-2 text-lg">The sample app is using <span className="text-blue-600">
            <Link href="https://github.com/panva/node-openid-client/blob/main/docs/README.md" target="_blank" title="NPM OpenID client library">openid-client</Link>
        </span> library.
        </p>
    </nav> 
    )
}