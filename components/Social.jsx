import Link from "next/link";
import { FaGithub, FaLinkedinIn, } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/abdullah116632" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/abdullah-al-rafi-234870282/" },
  { icon: <FaUpwork />, path: "https://www.upwork.com/freelancers/~0132ab5ef691b8822e" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {
        socials.map((item, index) => {
          return (
            <Link key={index} href={item.path} className={iconStyles}>
              {item.icon}
            </Link>
          )
        })
      }
    </div>
  );
};

export default Social;
