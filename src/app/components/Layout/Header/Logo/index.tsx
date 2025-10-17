import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from "next-themes";

interface HeaderProps { }
const Logo: React.FC<HeaderProps> = () => {
  const { resolvedTheme } = useTheme();
  return (
    <Link href="/">
      <Image
        src="/images/logo/logo.svg"
        alt="logo"
        width={160}
        height={50}
        style={{ width: 'auto', height: 'auto' }}
        quality={100}
        className='dark:hidden'
      />
      <Image
        src="/images/logo/logo-white.svg"
        alt="logo"
        width={160}
        height={50}
        style={{ width: 'auto', height: 'auto' }}
        quality={100}
        className='dark:block hidden'
      />
    </Link>
  );
};

export default Logo;
