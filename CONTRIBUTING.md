# Contributing to cli-gen-components 🤝

Thank you for your interest in contributing to cli-gen-components! This document provides guidelines for contributing to the project.

## Getting Started

1. **Fork the repository**
   ```bash
   git clone https://github.com/benshabbat/cli-gen-components.git
   cd cli-gen-components
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Link for local development**
   ```bash
   npm link
   ```

4. **Test your changes**
   ```bash
   gen-component create TestComponent -t tsx -s
   ```

## Project Structure

```
cli-gen-components/
├── src/
│   ├── index.js              # CLI entry point
│   ├── templates/
│   │   └── component-templates.js  # Component templates
│   └── utils/
│       └── file-generator.js       # File generation logic
├── examples/                 # Example generated components
├── package.json
└── README.md
```

## Development Workflow

1. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Edit files in the `src/` directory
   - Test your changes locally using `npm link`

3. **Test your changes**
   - Create test components with different options
   - Verify JSX and TSX generation
   - Check that styles are generated correctly

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add: description of your changes"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch
   - Describe your changes

## Code Style Guidelines

- Use **camelCase** for variable and function names
- Use **PascalCase** for component names
- Add comments for complex logic
- Keep functions small and focused
- Follow existing code patterns

## Adding New Features

### Adding a New Template

1. Add your template function to [src/templates/component-templates.js](src/templates/component-templates.js)
2. Update the file generator in [src/utils/file-generator.js](src/utils/file-generator.js)
3. Update the README with the new template documentation

### Adding a New CLI Command

1. Add the command in [src/index.js](src/index.js) using Commander.js
2. Implement the command logic in the appropriate utility file
3. Add tests and documentation

## Testing

Before submitting a pull request, please test:

1. **JSX Component Generation**
   ```bash
   gen-component create TestJSX -t jsx
   ```

2. **TSX Component Generation**
   ```bash
   gen-component create TestTSX -t tsx
   ```

3. **With Styles**
   ```bash
   gen-component create TestStyles -s
   ```

4. **Custom Path**
   ```bash
   gen-component create TestPath -p ./custom/path
   ```

5. **Error Handling**
   - Try creating a component with invalid name
   - Try creating a component in non-existent path
   - Try creating duplicate components

## Reporting Issues

If you find a bug or have a suggestion:

1. **Check existing issues** to avoid duplicates
2. **Create a new issue** with:
   - Clear title
   - Detailed description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Your environment (OS, Node version, etc.)

## Feature Requests

We welcome feature requests! Please:

1. Check if the feature already exists
2. Explain the use case
3. Describe the expected behavior
4. Provide examples if possible

## Questions?

Feel free to open an issue for any questions about contributing!

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing! 🎉
