
import {HomeIcon} from '@primer/octicons-react'

import Link from "next/link";
import { ActiveLink } from '../Active-Link/ActiveLink';



const navItems=[
  {path:'/abaout',text:'Abaout'},
  {path:'/pricing',text:'Pricing'},
  {path:'/contact',text:'Contact'}
]

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded w-full">
      
      <Link href={'/'} className='flex items-center'>
      <HomeIcon className='mr-2'/>
      <span> Home </span>
        </Link>
      

      <div className="flex flex-1"></div>

      {
        navItems.map(navItem=>(
          <ActiveLink key={navItem.path} {...navItem}/>
        ))
      }
    </nav>
  );
};
