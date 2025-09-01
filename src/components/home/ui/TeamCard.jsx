// components/TeamCard.js
import { FaFacebookSquare } from "react-icons/fa"; 
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";


const ICONS = {
  facebook: FaFacebookSquare ,
  tiktok: AiFillTikTok ,
  instagram: AiFillInstagram ,
  twitter: FaSquareXTwitter ,
};

const TeamCard = ({ name, title, image, socials }) => {
  return (
    <div className="bg-[#FFE6E1] rounded-2xl p-6 transition-transform duration-300 hover:scale-105 border-[3px] border-transparent hover:border-[3px] hover:border-[#FF8F7A] group relative overflow-hidden md:max-w-xs max-w-full w-full">
     

      {/* Image */}
      <div className="relative mx-auto pt-2 w-[217px] h-[217px] z-10 flex justify-center bg-[#F89585] rounded-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          className=" object-cover object-top"
          fill
        />
      </div>

      {/* Info */}
      <div className="text-center mt-4 z-10 relative">
        <h3 className="text-lg font-semibold text-primary mb-1">{name}</h3>
        <p className="text-sm text-[#555]">{title}</p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-4 text-[#E99292] ">
         {socials.map(({ type, url }) => {
            const Icon = ICONS[type];
            return (
              <Link
                key={type}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition text-3xl hover:text-primary"
              >
                <Icon />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
