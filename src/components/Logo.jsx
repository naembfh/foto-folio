import { Aperture } from 'lucide-react';
import Link from 'next/link';

const Logo = () => {
    return (
        <Link href="/">
            <Aperture color="#d56767" />
        </Link>
    );
};

export default Logo;