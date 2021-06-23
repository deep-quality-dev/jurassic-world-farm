import { MenuEntry } from '@jurassicfarm/jurassic-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://quickswap.exchange/#/swap?outputCurrency=0x9510b145010f0eac5a3aefd9a5a07a0a14b2241d',
        external: true,
      },
      {
        label: 'Liquidity',
        href:
          'https://quickswap.exchange/#/add/BNB/0x9510b145010f0eac5a3aefd9a5a07a0a14b2241d',
        external: true,
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Vaults',
    icon: 'VaultIcon',
    href: '/vaults',
  },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'QuickSwap',
  //       href: 'https://info.quickswap.exchange/',
  //       external: true,
  //     },
  //   ],
  // },
  {
    label: 'Github',
    icon: 'GithubIcon',
    href: 'https://github.com/TheLostWorldFarm',
    external: true,
  },
  {
    label: 'Blog',
    icon: 'MediumIcon',
    href: 'https://medium.com/jurassicfarm',
    external: true,
  }
]

export default config
