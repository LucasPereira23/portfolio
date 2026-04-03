import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react';

const socialLinks = [
  { href: 'https://github.com/LucasPereira23', icon: GithubLogo },
  { href: 'https://www.instagram.com/lucaspereira727/', icon: InstagramLogo },
  { href: 'https://www.linkedin.com/in/lucas-pereira-alves-5164aa20a/', icon: LinkedinLogo },
];

function SocialLinks({ size = 28, direction = 'vertical' }) {
  const isVertical = direction === 'vertical';

  return (
    <div className={`flex ${isVertical ? 'flex-col items-center justify-center' : 'items-center justify-between'}`}>
      {socialLinks.map(({ href, icon: Icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          className={`relative top-0 ${isVertical ? 'mb-6' : ''} text-white-500 cursor-pointer hover:text-red-500 hover:transition-all duration-300 hover:duration-300 hover:top-[-2px]`}
        >
          <Icon size={size} />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
