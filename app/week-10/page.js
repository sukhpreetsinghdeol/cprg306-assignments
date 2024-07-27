"use client"

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";



export default function SignInPage(){

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    async function handleSignIn(){
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }
    async function handleSignOut(){
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }
    //console.dir(user);
    return(
        <main>
  
            {user ? (
                //user is logged in
                <div>
                    <p>Welcome {user.displayName}</p>
                    <p>{user.Email}</p>

                    <p>
                    <Link href="/week-10/shopping-list/" className="underline text-cyan-600 hover:text-cyan-300"> Shopping List </Link>
                    </p>
                    <button className="text-lg m-2 hover:underline" onClick={handleSignOut}>Sign Out</button>
                </div>
                
            ) : (
                // user is not logged in
                <div>
                    <button className="text-lg m-2 hover:underline" onClick={handleSignIn}>Sign In</button>
                </div>
            ) }
        </main>
    );
}