import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex justify-start p-4 md:items-center md:flex-row flex-col  min-h-screen w-full bg-black text-white ">
      <div className="min-w-[60%]">
        <div>
          <div className="py-36 flex justify-center ">
            <img
              className="w-[50px] md:w-[350px]"
              src="./images/twitter-x-logo-white.png"
              alt="Twitter.com"
            />
          </div>
        </div>
      </div>
      <div className=" flex min-w-[40%] flex-col gap-8 items-center md:items-start">
        <h2 className="text-5xl md:text-6xl font-bold pb-6">Happening now</h2>
        <h4 className=" text-2xl md:text-3xl font-bold">Join today.</h4>
        <Button className=" font-bold min-w-64" variant={"secondary"}>
          Create account
        </Button>
        <p className=" font-bold pt-6">Already have an account?</p>
        <Button className=" text-blue-500  font-bold hover:bg-black min-w-64">
          Sign in
        </Button>
      </div>
    </main>
  );
}
