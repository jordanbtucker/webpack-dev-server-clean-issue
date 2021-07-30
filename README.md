# webpack-dev-server-clean-issue

This package demonstrates an
[issue](https://github.com/webpack/webpack-dev-server/issues/3578) in
[`webpack-dev-server@4.0.0-rc.0`](https://github.com/webpack/webpack-dev-server/releases/tag/v4.0.0-rc.0)
where it does not honor webpack's
[`output.clean`](https://webpack.js.org/configuration/output/#outputclean)
option when using webpack-dev-server's
[`devMiddleware.writeToDisk`](https://webpack.js.org/configuration/dev-server/#devserverwritetodisk-)
option.

## Demonstration

To demonstrate this issue, clone this repository and install its dependencies.

```
git clone https://github.com/jordanbtucker/webpack-dev-server-clean-issue.git
cd webpack-dev-server-clean-issue
npm install
```

Next, run the `build` NPM script, which will create a file called `delete-me` in
the `dist` directory, followed by running `webpack`. Once that has completed,
only the `main.js` file should exist in the `dist` directory as expected.

```
npm run build
```

Finally, run the `serve` NPM script, which will also create a file called
`delete-me` in the `dist` directory, but follow this with a `webpack serve`
command. Once completed, notice that the `delete-me` file still exists in the
`dist` directory.

```
npm run serve
```

## Notes

I debated on whether this is a bug in webpack or webpack-dev-server. This bug
did not exist until the release of webpack@5, which added the `output.clean`
option. Before this, `clean-webpack-plugin` was the defacto package for cleaning
the output directory, and it still works with any combination of webpack v4 or
v5 and webpack-dev-server v3 and v4. However, since webpack's `output.clean`
works when building, and since webpack-dev-server only needs to care about that
option when `writeToDisk` is also enabled, I decided it's likely a bug with
webpack-dev-server not checking for the `output.clean` option.
