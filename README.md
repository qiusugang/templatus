# README

- Ruby 3
- Ruby on Rails 6.1
- ActionCable
- Webpacker 6 (for Webpack 5)
- TypeScript
- Vue 3
- Vue Router
- Vuex State management
- TailwindCSS 2, HeadlessUI, HeroIcons
- GitHub Actions
- RSpec for Ruby testing
- Jest for JavaScript testing
- RuboCop
- Docker
- Sentry for error tracking (Ruby and JavaScript)

### Development

Precondition: Install and set up [puma-dev](https://github.com/puma/puma-dev) to use HTTPS for both the application and `webpack-dev-server`. Do this on macOS:

```bash
brew install puma-dev
sudo puma-dev -setup
puma-dev -install

cd rails-vue3
puma-dev link

# https://github.com/puma/puma-dev#webpack-dev-server
echo 3035 > ~/.puma-dev/webpack.rails-vue3
```

Then setup the application:

```bash
bin/setup
foreman start
```

Then you can open https://rails-vue3.test in your browser.

### Test

Run Ruby tests:

```
bin/rspec
```

Run JavaScript tests:

```
bin/yarn test
```

### Build assets for production

```
RAILS_ENV=production bin/rails webpacker:clobber webpacker:compile
Compiling...
Compiled all packs in /Users/ledermann/Projects/rails-vue3/public/packs

warn - You have enabled the JIT engine which is currently in preview.
warn - Preview features are not covered by semver, may introduce breaking changes, and can change at any time.

assets by path media/images/ 4.45 KiB
  assets by path media/images/*.svg 2.33 KiB 2 assets
  assets by path media/images/*.gz 1.13 KiB
    asset media/images/bcb6d75d927347158af5.svg.gz 902 bytes [emitted] [immutable] [compressed]
    asset media/images/f04dfe30a8ad8eb5c4e0.svg.gz 254 bytes [emitted] [immutable] [compressed]
  assets by path media/images/*.br 1020 bytes
    asset media/images/bcb6d75d927347158af5.svg.br 796 bytes [emitted] [immutable] [compressed]
    asset media/images/f04dfe30a8ad8eb5c4e0.svg.br 224 bytes [emitted] [immutable] [compressed]
assets by path js/*.js 195 KiB
  asset js/637-45abb18ae22097cc6e0a.js 178 KiB [emitted] [immutable] [minimized] (id hint: vendors) 4 related assets
  asset js/application-a5c64b638e8291189af2.js 14.5 KiB [emitted] [immutable] [minimized] (name: application) 3 related assets
  asset js/runtime-ff84c7bf06166d5ef8b7.js 1.67 KiB [emitted] [immutable] [minimized] (name: runtime) 3 related assets
asset css/application-3a543889.css 17.2 KiB [emitted] [immutable] [minimized] (name: application) 3 related assets
asset manifest.json 3.01 KiB [emitted] 2 related assets
Entrypoint application 212 KiB (294 KiB) = js/runtime-ff84c7bf06166d5ef8b7.js 1.67 KiB js/637-45abb18ae22097cc6e0a.js 178 KiB css/application-3a543889.css 17.2 KiB js/application-a5c64b638e8291189af2.js 14.5 KiB 6 auxiliary assets
orphan modules 466 KiB [orphan] 337 modules
runtime modules 3.71 KiB 8 modules
code generated modules 927 KiB (javascript) 2.33 KiB (asset) 26.2 KiB (css/mini-extract) [code generated]
  modules by path ./node_modules/ 903 KiB
    modules by path ./node_modules/@vue/ 374 KiB 4 modules
    modules by path ./node_modules/@sentry/ 303 KiB 4 modules
  modules by path ./app/packs/ 23.9 KiB (javascript) 2.33 KiB (asset) 26.2 KiB (css/mini-extract)
    asset modules 84 bytes (javascript) 2.33 KiB (asset)
      ./app/packs/images/rails.svg 42 bytes (javascript) 1.96 KiB (asset) [built] [code generated]
      ./app/packs/images/vue.svg 42 bytes (javascript) 375 bytes (asset) [built] [code generated]
    ./app/packs/entrypoints/application.js + 24 modules 23.8 KiB [built] [code generated]
    css ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./app/packs/stylesheets/application.css 26.2 KiB [code generated]
webpack 5.38.1 compiled successfully in 8402 ms
```

=> 195 KB JavaScript (minified, uncompressed)
