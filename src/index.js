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
  .option('-f, --functional', 'Create functional component (default)', true)
  .option('-s, --styles', 'Generate CSS module file', false)
  .action((name, options) => {
    try {
      const componentType = options.type.toLowerCase();
      
      if (!['jsx', 'tsx'].includes(componentType)) {
        console.error(chalk.red('❌ Error: Type must be either "jsx" or "tsx"'));
        process.exit(1);
      }

      const outputPath = path.resolve(process.cwd(), options.path);
      
      generateComponent({
        name,
        type: componentType,
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
    console.log(chalk.white('  • JSX - Functional Component'));
    console.log(chalk.white('  • TSX - Functional Component with TypeScript\n'));
    console.log(chalk.gray('Use: gen-component create <name> -t <jsx|tsx>\n'));
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
