---
id: install
title: Install DripVerse CLI
sidebar_label: Install
hide_table_of_contents: false
---

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
   │   v0.1.2         │
   │                  │
   ╰──────────────────╯

[object Promise]
Usage: drip [options] [command]

CLI to DripVerse Protocol. v0.1.2

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

## Update drip to latest version
```sh
drip update
```

