---
id: install
title: Install DripVerse CLI
sidebar_label: Install
hide_table_of_contents: false
---

:::info
Currently works only on Polygon Testnet.
:::

## Install
```sh
npm i -g dripverse-cli
```

## Help
```sh
drip --help
```

Response:
```

   ╭ Drip CLI [alpha] ╮
   │                  │
   │   v0.1.0         │
   │                  │
   ╰──────────────────╯

[object Promise]
Usage: drip [options] [command]

CLI to DripVerse Protocol. v0.1.0

Options:
  -V, --version                 output the version number
  -h, --help                    display help for command

Commands:
  info                          Info about this tool.
  init                          Initialise <drip>
  update                        Update drip to latest available stable version.
  upload [options] <path>       Upload File to IPFS
  status <cid>                  Check Status of IPFS file or directory.
  mint [options] <path> <name>  Mint NFT
  help [command]                display help for command
```

## Initialise
```sh
drip init
```

### Update values on config file on your favorite editor:
```sh
vim ~/.drip
```


## Update drip to latest version
```sh
drip update
```

