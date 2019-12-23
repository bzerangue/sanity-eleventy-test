export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
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
                  buildHookId: '5e00384aedcfad354481cb65',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-test-studio',
                  apiId: '02c5ea1a-925a-4cb9-adea-f7aed7b02b46'
                },
                {
                  buildHookId: '5e00384ad2bde56b44dc6413',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-test',
                  apiId: '32a999e7-91d5-445c-9130-f76857b0a9c7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bzerangue/sanity-eleventy-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-test.netlify.com', category: 'apps'}
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
