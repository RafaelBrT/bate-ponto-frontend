const Plop = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a React component and styled template',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{kebabCase name}}/index.tsx',
        templateFile: 'templates/component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{kebabCase name}}/style.ts',
        templateFile: 'templates/style.tsx.hbs',
      },
    ],
    onComplete: () => {
      console.log('Componente gerado com sucesso!')
    },
    message: 'opa'
  })
}

export default Plop