import * as Dialog from '@radix-ui/react-dialog';
import { CartButton } from '../CartButton';
import {
    CartClose,
    CartContent,
    CartFinalization,
    CartProduct,
    CartProductDetails,
    CartProductImage,
    FinalizationDetails
} from './styles';
import { X } from 'phosphor-react';
import Image from 'next/image';

export function Cart() {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <CartButton />
            </Dialog.Trigger>
            <Dialog.Portal>
                <CartContent>
                    <CartClose>
                        <X size={24} weight="bold" />
                    </CartClose>
                    <h2>Sacola de Compras</h2>

                    <section>
                        {/* <p>Parece que seu carrinho está vazio : (</p> */}
                        <CartProduct>
                            <CartProductImage>
                                <Image
                                    width={100}
                                    height={93}
                                    src="https://s3-alpha-sig.figma.com/img/387d/13ce/de131bd1ccf9bbe6b2331e88d3df20cd?Expires=1670198400&Signature=e7KOATmSmCmedUjnL16weTD-b7GlmxYq4UqaRsDD5zbJA-F14nH9FrtusNb87cbjj7o4M5b-gH~nmCvu5A18rf1SsK2a859o5ESHdDOFAHIGXrPwxVETlNKzDO9S9ZtjefW1ktKmQEC6sj30zeW3f4KN2Jn1ewLnut8XskGvdjbGcedLSzuLeQPnqU~n-MHJgPQWvX79PLd~EBumg06W3jGDUFb79LXDO23J~F4halzQmzGdMAInek4O-tdPbzBkT953EhIDyPWrTtC71bpQRT~U~BxFxTEqLZa~NRWTy6QKA4isE-sso3xtbvT~kBqbnqulfO5k76~ZfG5~xQAICA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                                    alt=""
                                />
                            </CartProductImage>
                            <CartProductDetails>
                                <p>Product 1</p>
                                <strong>R$ 50,00</strong>
                                <button>Remover</button>
                            </CartProductDetails>
                        </CartProduct>
                    </section>
                    <CartFinalization>
                        <FinalizationDetails>
                            <div>
                                <span>Quantidade</span>
                                <p>3 itens</p>
                            </div>
                            <div>
                                <span>Valor total</span>
                                <p>R$ 100,00</p>
                            </div>
                        </FinalizationDetails>
                        <button>Finalizar Compra</button>
                    </CartFinalization>
                </CartContent>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
