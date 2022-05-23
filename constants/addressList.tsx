export const CONTRACT_ADDRESS = {
  Multicall: "0x304De20d89914e588890AA172Aa5e33397d0c703",
  KUSDT: "0x232226878692ae76d267591b57DAf9672f33E54c",
  KUSDC: "0x65158FB6655ca366C03F0793acBB83C8968cEAE1",
  // SwapRouter: "0x93185406138Cf62294A18Fb2B553464E65962a2C",
  // SwapFactory: "0x8B7345878E2a6fEe96C973E7E7D7A376E41951d4",
  // "KUSDT/KUSDC": "0x996816282A2741b59B0eC5945982307a64fDc261",
  SwapRouter: "0x7d7dfb72E8799f5A6297e7C6Dd41f024F9b7A0D3",
  SwapFactory: "0xB2D10Cf72e6dab7090799d8519D91568fCdc3Da3",
  "KUSDT/KUSDC": "0x7b7Dff5f775a2876050Af6a62C6a506EeC3ab08a",
  FinBroker: "0x7e8DB3EF37dD8ec6091cA351C4626a4Cb8fe4290",
};

// export const CONTRACT_ADDRESS = {
//   Multicall: "0xcc515Aa7eE9Be4491c98DE68ee2147F0A063759D",
//   SwapFactory: "0x6e906dc4749642a456907decb323a0065dc6f26e",
//   SwapRouter: "0xAb30a29168D792c5e6a54E4bcF1Aec926a3b20FA",
//   YES: "0x8debbb77e8a17cffCfC0C7F1f40308886edD3f9f",
//   KKUB: "0x67ebd850304c70d983b2d1b93ea79c7cd6c3f6b5",
//   KUSDT: "0x7d984C24d2499D840eB3b7016077164e15E5faA6",
//   KUSDC: "0x77071ad51ca93fc90e77BCdECE5aa6F1B40fcb21",
//   "KUSDC/KUSDT": "0x77793814f9C49828F14058268aEb391c7ea1EB26",
//   "KUSDT/YES": "0x876655Fe1aAEC9b7BE2c81e05b4849f7D270Ab9D",
//   "KUSDC/YES": "0xF47c1659836CAF363c6AEBA6E14711b812E20E47",
//   "KKUB/YES": "0xbFB2E78Ba4ab1EEe2812291127aA795729a87d28",
//   "KUSDT/KKUB": "0x286B67516b979a8271805660D3Ac0c626F2D38e6",
// };

export const CONTRACT_NAMES = Object.entries(CONTRACT_ADDRESS).reduce<
  Record<string, string>
>((prev, cur) => {
  const [name, address]: any = cur;
  prev[address] = name;
  return prev;
}, {});

export const ADDRESS_LIST: Record<string, string> = {
  ...CONTRACT_ADDRESS,
  ...Object.values(CONTRACT_ADDRESS).reduce<Record<string, string>>(
    (prev, cur: any) => {
      prev[cur] = cur;
      return prev;
    },
    {}
  ),
};
