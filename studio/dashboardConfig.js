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
                  buildHookId: '608abd56843e635335a61e96',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-jiqyzter',
                  apiId: '4b8bad7b-5161-485e-bde8-12547d9834af'
                },
                {
                  buildHookId: '608abd569da190393c0e3975',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ssgcgqfs',
                  apiId: 'b63d1f1f-225b-4d07-ba55-1675f946ebf0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/meezyart/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ssgcgqfs.netlify.app', category: 'apps'}
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
