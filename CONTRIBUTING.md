# Contributing to Moodlody

Thank you for your interest in contributing to Moodlody! We welcome contributions from the community and are grateful for your support.

## 🌟 Ways to Contribute

- Report bugs and issues
- Suggest new features or enhancements
- Improve documentation
- Submit pull requests with bug fixes or new features
- Add new nature sounds
- Improve accessibility
- Optimize performance

## 🚀 Getting Started

### 1. Fork and Clone

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/relaxweb.git
   cd relaxweb
   ```

### 2. Set Up Development Environment

1. Install dependencies:
   ```bash
   yarn install
   ```

2. Start the development server:
   ```bash
   yarn dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view the app

### 3. Create a Branch

Create a new branch for your feature or bug fix:
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix-name
```

## 📝 Code Style Guidelines

### TypeScript

- Use TypeScript for all new files
- Define proper types and interfaces
- Avoid using `any` type unless absolutely necessary

### React Components

- Use functional components with hooks
- Keep components focused and single-purpose
- Use meaningful component and variable names
- Add proper TypeScript types for props

### Formatting

We use Prettier and ESLint to maintain code quality:

- **Prettier Config**:
  - Single quotes
  - No semicolons
  - 2 spaces for indentation
  - Trailing commas: none
  - Arrow function parentheses: avoid

- **Linting**:
  ```bash
  yarn lint
  ```

### File Organization

- Place new components in the `components/` directory
- Use subdirectories for related components
- Keep component files focused (one component per file)

## 🧪 Testing

Before submitting a pull request:

1. Run the linter:
   ```bash
   yarn lint
   ```

2. Build the application to ensure no errors:
   ```bash
   yarn build
   ```

3. Test your changes manually in the browser
4. Run tests (once test suite is available):
   ```bash
   yarn test
   ```

## 📤 Submitting Changes

### Commit Messages

Write clear and descriptive commit messages:

```
feat: Add volume control for individual sounds
fix: Resolve audio playback issue on Safari
docs: Update README with deployment instructions
style: Format code with Prettier
refactor: Simplify SoundPlayer component logic
test: Add unit tests for Sound component
```

Use conventional commit prefixes:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

### Pull Request Process

1. Update the README.md or documentation if needed
2. Ensure all tests pass and the app builds successfully
3. Update the PR description with:
   - What changes were made
   - Why the changes were necessary
   - Any relevant issue numbers (e.g., "Fixes #123")
4. Request review from maintainers
5. Address any feedback from code review
6. Once approved, your PR will be merged!

## 🎨 Adding New Sounds

To add a new nature sound:

1. Add the MP3 file to `public/sounds/` (keep file size reasonable)
2. Add the corresponding icon (SVG preferred) to `public/assets/`
3. Update the sounds array in `components/sound/SoundList.tsx`
4. Test the sound in the browser
5. Submit a PR with the new sound

### Sound File Guidelines

- Format: MP3
- Recommended file size: < 10MB
- Ensure the sound loops seamlessly
- Use royalty-free or properly licensed audio

## 🐛 Reporting Bugs

When reporting bugs, please include:

1. **Description**: Clear description of the issue
2. **Steps to Reproduce**: Step-by-step instructions
3. **Expected Behavior**: What should happen
4. **Actual Behavior**: What actually happens
5. **Environment**: Browser, OS, device type
6. **Screenshots**: If applicable

## 💡 Suggesting Features

When suggesting new features:

1. Check if the feature has already been requested
2. Clearly describe the feature and its benefits
3. Provide examples or mockups if possible
4. Explain why this feature would be valuable

## 🔍 Code Review Process

- All submissions require review before merging
- Reviewers may request changes or improvements
- Be open to feedback and willing to iterate
- Maintainers will merge approved PRs

## 📜 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them get started
- Focus on constructive feedback
- Respect differing viewpoints and experiences

## ❓ Questions?

If you have questions, feel free to:
- Open an issue for discussion
- Reach out to the maintainers
- Check existing issues and PRs for similar topics

## 🙏 Thank You!

Your contributions make Moodlody better for everyone. We appreciate your time and effort!

---

Happy coding! 🎵
