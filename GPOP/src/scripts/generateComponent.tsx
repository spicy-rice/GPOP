import fs from 'fs';
import path from 'path';

const componentName = process.argv[2];

if (!componentName) {
    console.error('Please provide a component name.');
    process.exit(1);
}

const componentDir = path.join(__dirname, '..', 'components', componentName);
const storiesDir = path.join(componentDir, `${componentName}.stories.tsx`);
const testDir = path.join(__dirname, '..', '__tests__', `${componentName}.test.tsx`);

if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir, { recursive: true });
}

const componentContent = `
import React from 'react';

const ${componentName}: React.FC = () => {
  return (
    <div>
      <h1>${componentName} Component</h1>
      <p>This is a default ${componentName} component.</p>
    </div>
  );
};

export default ${componentName};
`;

const storiesContent = `
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ${componentName} from './${componentName}';

export default {
  title: 'Example/${componentName}',
  component: ${componentName},
} as ComponentMeta<typeof ${componentName}>;

const Template: ComponentStory<typeof ${componentName}> = (args) => <${componentName} {...args} />;

export const Default = Template.bind({});
Default.args = {};
`;

const testContent = `
import React from 'react';
import { render, screen } from '@testing-library/react';
import ${componentName} from '../components/${componentName}/${componentName}';

test('renders ${componentName} component', () => {
  render(<${componentName} />);
  expect(screen.getByText('${componentName} Component')).toBeInTheDocument();
});
`;

fs.writeFileSync(path.join(componentDir, `${componentName}.tsx`), componentContent.trim());
fs.writeFileSync(storiesDir, storiesContent.trim());
fs.writeFileSync(testDir, testContent.trim());

console.log(`Component ${componentName} created successfully.`);