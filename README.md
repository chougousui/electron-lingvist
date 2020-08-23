## electron-lingvist

A desktop version of lingvist based on electron and typescript.

## to run

```shell
npm install && npm start
```

At present, it is difficult to control the size of the web page, need to adjust it yourself.

- Zoom in `Ctrl + +`
- Zoom out `Ctrl + -`
- Reset `Ctrl + 0`

## to generate installer

At present, only the installation package on the Arch Linux x64 platform has been tested.

```shell
npm dist
pacman -U out/electron-lingvist-0.3.0.pacman
```

Although not a standard package format, it can still be installed by pacman.