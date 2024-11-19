// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
	plugins: ['prettier-plugin-astro'],
	arrowParens: 'avoid',
	semi: true,
	tabWidth: 2,
	printWidth: 100,
	singleQuote: false,
	jsxSingleQuote: false,
	trailingComma: 'es5',
	bracketSpacing: true,
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro'
			}
		}
	]
}
