import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import logoImg from '../../logo.svg';
import { Cart } from '../Cart';
import { HeaderContainer } from './styles';

export function Header() {
    const { pathname } = useRouter();

    const showCartButton = pathname !== '/success';

    return (
        <HeaderContainer>
            <Link href="/">
                <Image src={logoImg} alt="" />
            </Link>
            {showCartButton && <Cart />}
        </HeaderContainer>
    );
}
