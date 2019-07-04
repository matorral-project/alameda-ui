module.exports = {
  // Key separator used in translation keys
  contextSeparator: '_',

  // Save the \_old files
  createOldCatalogs: false,

  // Default namespace used in the i18next config
  defaultNamespace: 'alameda',

  // Default value to give to empty keys
  defaultValue: '',

  // Indentation of the catalog files
  indentation: 2,

  // Keep keys from the catalog that are no longer in code
  keepRemoved: false,

  // Key separator used in your translation keys. For example: '.'
  // When false it means the generated JSON will use simple key values
  // instead of nesting using each part of the keys.
  keySeparator: false,

  lexers: {
    js: ['JavascriptLexer'],
    jsx: ['JsxLexer'],
    default: ['JavascriptLexer']
  },

  // Control the line ending. See options at https://github.com/ryanve/eol
  lineEnding: 'auto',

  // An array of the locales in the applications
  locales: ['en', 'es'],

  // Namespace separator used in translation keys
  namespaceSeparator: ':',

  // Where to write the locale files relative to process.cwd()
  output: 'public/locales/$LOCALE/$NAMESPACE.json',

  // An array of globs that describe where to look for source files
  // relative to the location of the configuration file
  input: ['src/**/*.{js,jsx}'],

  // For react file, extract the defaultNamespace - https://react.i18next.com/components/translate-hoc.html
  // Ignored when parsing a `.jsx` file and namespace is extracted from that file.
  reactNamespace: false,

  // Whether or not to sort the catalog
  sort: true,

  // Display info about the parsing including some stats
  verbose: false
};
