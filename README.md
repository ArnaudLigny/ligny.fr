My [Linktree](https://linktr.ee) clone powered by [Cecil](https://cecil.app), [Tailwind CSS](https://tailwindcss.com) and [Font Awesome](https://fontawesome.com).

## Install

```bash
# install Tailwind CSS
npm install
# download Cecil
curl -LO https://cecil.app/cecil.phar
```

## Usage

Add links in `content/index.md` front matter.

Build and serve:

```bash
# build CSS
npx tailwindcss -i ./assets/tailwind.css -o ./assets/styles.css --watch
# build and serve static website
php cecil.phar serve -v --clear-cache
```
