"use client";
import { authClient } from "@/lib/auth.client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const {data, isPending} = authClient.useSession()
  const user = data?.user;

  
  const handleSignOut =async () => {
    if(confirm('Are You sure to Sign-Out.')){
      await authClient.signOut();
    }
  }

  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <Link href={'/'} className="flex gap-2 items-center cursor-pointer">
          <Image
            src={"/mango.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">Mango</h3>
        </Link>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-books"}>All Books</Link>
          </li>
          <li>
            <Link href={user ? `/profile` : '/login'}>Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4">
        {!isPending && !user && (
          <ul className="flex items-center gap-5 text-sm">
            <li>
              <Link href={"/register"}>Register</Link>
            </li>
            <li>
              <Link href={"/login"}>Login</Link>
            </li>
          </ul>)
        }

          {user && <div className="flex gap-3 items-center">
            <div className="flex gap-1 items-center">
              <Avatar className="cursor-pointer select-none">
                <Avatar.Image
                  size='sm' 
                  alt={user?.name} 
                  src={user?.image}
                  referrerPolicy="no-referrer"  
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                
              </Avatar>
              <p className="text-muted text-sm border px-1 rounded-full">{user?.name}</p>
            </div>
              <Button onClick={handleSignOut} size="sm" variant="danger">SignOut</Button>
            </div>}

        </div>
        
      </nav>
    </div>
  );
};

export default Navbar;