const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(
    Boolean,
  ),
  presets: [
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/typescript',
    [
      '@babel/env',
      {
        modules: false,
        targets: {
          chrome: '58',
          ie: '11',
        },
      },
    ],
  ],
};
