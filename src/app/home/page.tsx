import GroupsIcon from "@/components/ui/Icons/GroupsIcon";
import HomeIcon from "@/components/ui/Icons/HomeIcon";
import Logo from "@/components/ui/Icons/Logo";
import MailIcon from "@/components/ui/Icons/MailIcon";
import ProfileIcon from "@/components/ui/Icons/ProfileIcon";
import SearchIcon from "@/components/ui/Icons/SearchIcon";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  BellIcon,
  BookmarkFilledIcon,
  DotsHorizontalIcon,
  ListBulletIcon,
} from "@radix-ui/react-icons";
import React from "react";

export default function page() {
  return (
    <div className=" flex min-w[100%] text-xl text-white min-h-screen bg-black">
      <div className=" min-w-[30%] border-r-[1px] p-1">
        <div className="UpperSection bg-black gap-4 flex flex-col">
          <div className="Logo p-4 w-16  rounded-full  hover:bg-neutral-900">
            <Logo width={"35px"} height={"35px"} />
          </div>
          <div className="Home flex hover:bg-neutral-900 w-fit pl-3 pr-6 py-2 rounded-full gap-5">
            <HomeIcon />
            <p>Home</p>
          </div>
          <div className="Search flex hover:bg-neutral-900 w-fit pl-3 pr-6 py-2 rounded-full gap-5">
            <SearchIcon />
            <p>Explore</p>
          </div>
          <div className="Notification flex hover:bg-neutral-900 w-fit pl-3 pr-6 py-2 rounded-full gap-5">
            <BellIcon width={"24px"} height={"24px"} />
            <p>Notification</p>
          </div>
          <div className="Lists flex hover:bg-neutral-900 w-fit pl-3 pr-6 py-2 rounded-full gap-5">
            <ListBulletIcon width={"24px"} height={"24px"} />
            <p>Lists</p>
          </div>
          <div className="Messages flex hover:bg-neutral-900 w-fit pl-3 pr-6 py-2 rounded-full gap-5">
            <MailIcon />
            <p>Messages</p>
          </div>
          <div className="Bookmarks flex hover:bg-neutral-900 w-fit pl-3 pr-6 py-2 rounded-full gap-5">
            <BookmarkFilledIcon width={"24px"} height={"24px"} />
            <p>Bookmarks</p>
          </div>
          <div className="Communities flex hover:bg-neutral-900 w-fit pl-3 pr-6 py-2 rounded-full gap-5">
            <GroupsIcon />
            <p>Communities</p>
          </div>
          <div className="Premium flex hover:bg-neutral-900 w-fit pl-3 pr-6 py-2 rounded-full gap-5">
            <Logo width={"22px"} height={"22px"} />
            <p>Premium</p>
          </div>
          <div className="Profile flex hover:bg-neutral-900 w-fit pl-3 pr-6 py-2 rounded-full gap-5">
            <ProfileIcon />
            <p>Profile</p>
          </div>
          <div className="More flex hover:bg-neutral-900 w-fit pl-3 pr-6 py-2 rounded-full gap-5">
            <div className=" border-2 rounded-full p-[1px]">
              <DotsHorizontalIcon width={"20px"} height={"20px"} />
            </div>
            <p>More</p>
          </div>
        </div>
        <div className="LowerSection  text-white   p-2 pt-10">
          <Button
            variant={"default"}
            className=" bg-[#1DA1F2] min-w-52 hover:bg-[#1684d3] py-6 text-lg"
          >
            Post
          </Button>
          <div className=" flex justify-between w-64 text-sm hover:bg-neutral-900 rounded-full items-center absolute bottom-0 p-4">
            <div className=" flex gap-3">
              <img
                className="rounded-full w-10 h-10"
                src="https://scontent.fccu16-1.fna.fbcdn.net/v/t39.30808-6/431973044_2236487036688960_9137815314925954302_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0HJ63GR6xE4AX-Nfug7&_nc_ht=scontent.fccu16-1.fna&oh=00_AfDHLLQzuHp48GGI29KLyPXGFsjs124-jQE1vcx3m-NRBQ&oe=65FB8DB8"
                alt="SA"
              />
              <div>
                <p className="font-bold">Sahil Ansari</p>
                <p className="text-neutral-500">@isahilansari</p>
              </div>
            </div>
            <DotsHorizontalIcon width={"20px"} height={"20px"} />
          </div>
        </div>
      </div>
    </div>
  );
}
