module.exports = {
  plugins: [
    // eslint-disable-next-line global-require,import/no-extraneous-dependencies
    require('autoprefixer'),
    // eslint-disable-next-line global-require
    require('css-mqpacker'),
    // eslint-disable-next-line global-require
    require('cssnano')({
      preset: [
        'default', {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),
  ],
};
