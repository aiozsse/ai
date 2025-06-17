"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link"

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center space-y-4">
      <h1 className="text-2xl font-bold">Dominique Castaneda AI</h1>
      <div className="flex space-x-4">
        <Link href="/sign-in">
          <Button variant="white">Login</Button>
        </Link>
        <Link href="/sign-up">
          <Button variant="white">Register</Button>
        </Link>
      </div>
    </div>
  );
};

/*const LandingPage = () => {
    return (
        <div>
            Dominique Castaneda 
            <div>
                <Link href="/sign-in">
                    <Button variant="white">
                        Login
                    </Button>
                </Link>
                <Link href="/sign-up">
                    <Button variant="white">
                        Register
                    </Button>
                </Link>
            </div>
        </div>
    );
}*/

export default LandingPage;