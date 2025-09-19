# Git Commit Instructions

## Format Requirements
- Start each commit with the ticket number in brackets: `[ABC-123]`
- Use the conventional commit format: `type(scope): description`
	- **Types:** feat, fix, docs, style, refactor, test, chore
- Keep the first line (subject) under 50 characters
- Use the imperative mood in the subject line (e.g., "add", "fix", "update")
- Capitalize the subject line, do not end with a period
- Separate subject from body with a blank line
- Include a detailed description in the body if needed (what, why, and how)
- Wrap body lines at 72 characters for readability

## Best Practices
- Make each commit a logical, self-contained unit
- Commit only related changes; avoid mixing unrelated fixes/features
- Test your changes before committing
- Use clear, descriptive language for future reviewers
- Reference related issues or tickets using keywords (e.g., `Fixes #123`)
- Use co-author credits when pair programming (`Co-authored-by:`)
- Mention affected components, modules, or files
- Use "BREAKING CHANGE:" in the body for breaking changes
- Proofread your commit message before pushing

## Required Information
- Reference related issues or tickets
- Note breaking changes with "BREAKING CHANGE:" in the body
- Include co-author credits when pair programming
- Mention affected components, modules, or files
- Provide context for why the change was made, not just what changed

## Examples
- [ABC-123] feat(auth): add two-factor authentication
- [XYZ-456] fix(api): handle null response in user service
- [DEF-789] docs(readme): update installation instructions

## Breaking Changes
If introducing breaking changes:
- Include "BREAKING CHANGE:" in the commit body
- Clearly describe what changed, the impact, and the migration path
- Reference any related documentation updates
- Update version numbers appropriately (if applicable)