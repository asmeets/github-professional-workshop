
# Copilot AI Agent Instructions for This Project

## Overview
This is a simple JavaScript/Node.js project with a focus on clear, maintainable code and robust error handling. The codebase is small and flat, with all source files at the root and tests in the `test/` directory. There is no build step; code runs directly with Node.js.

## Key Files & Structure
- `example.js`: Pure function with input validation and error throwing.
- `sample.js`: Async function using `fetch`, with try/catch and user-friendly error logging.
- `test/`: Contains test files (see below).
- `.mocharc.json`: Mocha is the actual test runner (not Jest). Tests are run with Mocha, using BDD (`describe`/`it`) and Node's `assert`.
- `.github/git-commit-instructions.md`: Strict commit message format—see file for details.

## Coding Patterns
- Use `async/await` for async code (see `sample.js`).
- Always validate function inputs and throw descriptive errors (see `example.js`).
- Use try/catch for async error handling; log errors with context.
- Prefer descriptive variable names; avoid abbreviations.
- Add JSDoc comments for exported functions (aspirational, not yet enforced).

## Testing
- **Test runner:** Mocha (not Jest). Run tests with `npx mocha` or `npm test` if configured.
- **Test files:** Must end with `.test.js` and reside in `test/`.
- Use `describe`/`it` and Node's `assert` for assertions.
- Include both positive and negative test cases (see `hello.test.js`).
- No mocking framework is currently used; add as needed.

## Error Handling
- Always validate inputs and throw errors for invalid data.
- Use try/catch for async code; log errors with context.
- Error messages should be user-friendly and include relevant context.

## Commit Conventions
- Follow `.github/git-commit-instructions.md` for commit message format (ticket prefix, conventional commits, etc.).

## Example Patterns
- Input validation:
	```js
	if (!Array.isArray(items)) throw new Error('Items must be an array');
	```
- Async/await with error handling:
	```js
	try {
		const response = await fetch(url);
		// ...
	} catch (error) {
		console.error('There has been a problem:', error);
	}
	```

## Project-Specific Notes
- No external dependencies are currently used (besides Node.js built-ins).
- No build or transpile step; code is ES6+ and runs directly.
- Tests are written for Mocha, not Jest (contrary to previous instructions).

---
Update this file as the project evolves, especially if new tools, frameworks, or conventions are introduced.