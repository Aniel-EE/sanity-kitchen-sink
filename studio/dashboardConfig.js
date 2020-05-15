export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebf0c1d5ae70a6325859bf2',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-9wtz3ec4',
                  apiId: 'be29dbaa-2d82-417a-a2fa-b8ecc8cbdccb'
                },
                {
                  buildHookId: '5ebf0c1d11c8e0571826da3b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-k3x3g64n',
                  apiId: 'b4376741-3fc0-410e-9689-2e46928e9b34'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/azamaroo/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-k3x3g64n.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
