#!/usr/bin/env node

const { program } = require('commander');
const { generateComponent } = require('./utils/file-generator');
const chalk = require('chalk');
const path = require('path');

program
  .name('gen-component')
  .description('CLI tool for generating React components (JSX/TSX)')
  .version('1.0.0');

program
  .command('create <name>')
  .description('Create a new React component')
  .option('-t, --type <type>', 'Component type: jsx or tsx', 'jsx')
  .option('-p, --path <path>', 'Output path for the component', './src/components')
  .option('-c, --class', 'Create class component', false)
  .option('-k, --hook', 'Create a custom hook', false)
  .option('-x, --context', 'Create a context provider', false)
  .option('-m, --memo', 'Create a memoized component', false)
  .option('-H, --hoc', 'Create a Higher Order Component', false)
  .option('-f, --form', 'Create a form component', false)
  .option('-T, --test', 'Create a test file', false)
  .option('-a, --api', 'Create an API service', false)
  .option('--styled', 'Create a styled-component', false)
  .option('-s, --styles', 'Generate CSS module file', false)
  .action((name, options) => {
    try {
      const componentType = options.type.toLowerCase();
      
      if (!['jsx', 'tsx'].includes(componentType)) {
        console.error(chalk.red('❌ Error: Type must be either "jsx" or "tsx"'));
        process.exit(1);
      }

      // Determine template type
      let templateType = 'functional';
      if (options.hook) {
        templateType = 'hook';
      } else if (options.context) {
        templateType = 'context';
      } else if (options.class) {
        templateType = 'class';
      } else if (options.memo) {
        templateType = 'memo';
      } else if (options.hoc) {
        templateType = 'hoc';
      } else if (options.form) {
        templateType = 'form';
      } else if (options.test) {
        templateType = 'test';
      } else if (options.api) {
        templateType = 'api';
      } else if (options.styled) {
        templateType = 'styled';
      }

      const outputPath = path.resolve(process.cwd(), options.path);
      
      generateComponent({
        name,
        type: componentType,
        templateType,
        path: outputPath,
        withStyles: options.styles
      });

      console.log(chalk.green('✅ Component created successfully!'));
      console.log(chalk.blue(`📁 Location: ${outputPath}/${name}`));
    } catch (error) {
      console.error(chalk.red('❌ Error:'), error.message);
      process.exit(1);
    }
  });

program
  .command('list')
  .description('List all available templates')
  .action(() => {
    console.log(chalk.cyan('\n📋 Available Templates:\n'));
    console.log(chalk.white('  • Functional Component (JSX/TSX) - default'));
    console.log(chalk.white('  • Class Component (JSX/TSX) - use --class or -c'));
    console.log(chalk.white('  • Custom Hook (JSX/TSX) - use --hook or -k'));
    console.log(chalk.white('  • Context Provider (JSX/TSX) - use --context or -x'));
    console.log(chalk.white('  • Memoized Component (JSX/TSX) - use --memo or -m'));
    console.log(chalk.white('  • Higher Order Component (JSX/TSX) - use --hoc or -H'));
    console.log(chalk.white('  • Form Component (JSX/TSX) - use --form or -f'));
    console.log(chalk.white('  • Test File (JSX/TSX) - use --test or -T'));
    console.log(chalk.white('  • API Service (JSX/TSX) - use --api or -a'));
    console.log(chalk.white('  • Styled Component (JSX/TSX) - use --styled\n'));
    console.log(chalk.gray('Examples:'));
    console.log(chalk.gray('  gen-component create MyComponent -t tsx'));
    console.log(chalk.gray('  gen-component create MyComponent -c -s'));
    console.log(chalk.gray('  gen-component create useMyHook -k -t tsx'));
    console.log(chalk.gray('  gen-component create MyContext -x -t tsx'));
    console.log(chalk.gray('  gen-component create MyButton --styled -t tsx'));
    console.log(chalk.gray('  gen-component create LoginForm -f -t tsx'));
    console.log(chalk.gray('  gen-component create withAuth -H -t tsx'));
    console.log(chalk.gray('  gen-component create MyComponent -T -t tsx'));
    console.log(chalk.gray('  gen-component create UserService -a -t tsx\n'));
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
