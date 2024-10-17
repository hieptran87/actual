module.exports = {
  input: ['src/**/*.{js,jsx,ts,tsx}', '../loot-core/src/**/*.{js,jsx,ts,tsx}'],
  output: 'src/locale/$LOCALE.json',
  locales: ['en','vi'],
  sort: true,
  keySeparator: false,
  namespaceSeparator: false,
  defaultValue: (locale, ns, key, value) => {
    if (locale === 'en' || locale === 'vi') {
      return value || key;
    }
    return '';
  },
};
