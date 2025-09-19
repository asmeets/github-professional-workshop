# Project Instructions for Copilot

## Coding Standards
- Use async/await instead of Promise.then()
- Always include comprehensive error handling
- Add JSDoc comments to all functions
- Use descriptive variable names, avoid abbreviations
- Prefer functional programming patterns where appropriate

## Testing Requirements  
- Use Jest for unit tests
- Aim for 80% code coverage minimum
- Test files should end with .test.js
- Include both positive and negative test cases
- Mock external dependencies

## Architecture Patterns
- Follow clean architecture principles
- Use repository pattern for data access
- Implement dependency injection where possible
- Separate business logic from presentation logic

## Error Handling
- Always use try-catch blocks for async operations
- Log errors with appropriate severity levels
- Include contextual information in error messages
- Fail gracefully with user-friendly messages