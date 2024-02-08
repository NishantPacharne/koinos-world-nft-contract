import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = "Koinos World";
  export const SYMBOL: string = "KWD";
  export const MINT_PRICE: u64 = 0;
  export const MINT_FEE: bool = false;
  export const MAX_SUPPLY: u64 = 210;
  // export const URI: string = "ipfs://bafybeifbxfsxdv5fhs3rbougveaikooybutsj655mziuhlqpjmd73ytjw4/";
  export const URI: string = "https://bafybeigsxmeaaugns46gdjc2u2pe5amntqi4hma5l3fj6slg3w5fworocu.ipfs.nftstorage.link/";
  export const OWNER: Uint8Array = Base58.decode("1D62Bo53T3V6KN4nFwsF1hicDMYs6f13JB");
  // token mint
  export const TOKEN_PAY: Uint8Array = Base58.decode("");
  export const ADDRESS_PAY: Uint8Array = Base58.decode("");
}