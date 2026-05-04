"use client";
import { authClient } from "@/lib/auth.client";
import { Avatar, Button, Dropdown, Label } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { BiMenu } from "react-icons/bi";

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
        <div className="flex gap-1 items-center">
          <div className="md:hidden">
            <Dropdown>
              <Dropdown.Trigger>

                <span aria-label="Menu">
                  <BiMenu className="text-3xl bg-black/15 rounded-sm" />
                </span>
                
              </Dropdown.Trigger>

              <Dropdown.Popover className={'rounded-sm'}>
                <Dropdown.Menu
                  onAction={(key) => {
                    console.log(`Selected: ${key}`);
                  }}
                >
                  <Dropdown.Item id="new-file">
                    <Link href={"/"}>Home</Link>
                  </Dropdown.Item>

                  <Dropdown.Item id="copy-link">
                    <Link href={"/all-books"}>All Books</Link>
                  </Dropdown.Item>

                  <Dropdown.Item id="edit-file">
                    <Link href={user ? `/profile` : '/login'}>Profile</Link>
                  </Dropdown.Item>

                  
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          </div>


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
        </div>

        <ul className="hidden md:flex items-center gap-5 text-sm">
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
              <p className="hidden md:block text-muted text-sm border px-1 rounded-full">{user?.name}</p>
            </div>
              <Button onClick={handleSignOut} size="sm" variant="danger">SignOut</Button>
            </div>}

        </div>
        
      </nav>
    </div>
  );
};

export default Navbar;