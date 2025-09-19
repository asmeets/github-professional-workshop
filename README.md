
# GitHub Professional Workshop

## Overview
This repository is a simple JavaScript/Node.js project designed to demonstrate best practices in code quality, error handling, and automated testing. The project is intentionally flat and easy to navigate, making it ideal for learning, workshops, and professional code reviews.

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)

### Running the Code
No build step is required. All code runs directly with Node.js:

```sh
node example.js
node sample.js
```

### Running Tests
Tests are written using Mocha and Node's built-in `assert` module. To run all tests:

```sh
npx mocha
# or, if you have a test script in package.json:
npm test
```

Test files must:
- Reside in the `test/` directory
- End with `.test.js`
- Use `describe`/`it` and `assert` for assertions

## Error Handling
- All functions validate their inputs and throw descriptive errors for invalid data.
- Async code uses `try/catch` blocks and logs errors with context.
- Error messages are user-friendly and include relevant context for easier debugging.

## Coding Patterns
- Use `async/await` for asynchronous code.
- Prefer descriptive variable names; avoid abbreviations.
- Add JSDoc comments for exported functions (aspirational).

## Copilot Instructions
This repository includes a `.github/copilot-instructions.md` file that provides detailed, project-specific guidance for GitHub Copilot and other AI coding agents. These instructions ensure that:
- Code suggestions follow the project's error handling and validation patterns.
- Tests are written using Mocha, not Jest (contrary to some default Copilot behaviors).
- Commit messages follow a strict format (see `.github/git-commit-instructions.md`).
- No external dependencies are used unless explicitly added.

**How Copilot Instructions Are Used:**
- AI agents reference `.github/copilot-instructions.md` to align with project conventions.
- Instructions cover coding style, error handling, testing, and commit message requirements.
- This helps maintain consistency and quality, especially when using AI-assisted development.

## Contributing
1. Fork the repository and create a new branch for your feature or fix.
2. Follow the coding and testing patterns described above.
3. Ensure all tests pass before submitting a pull request.
4. Use the commit message format described in `.github/git-commit-instructions.md`.

## License
MIT License

---
