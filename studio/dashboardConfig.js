export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5ffb34e55be517712cb1cdcb',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-hb63n1ww',
                  apiId: '7802d24c-854c-4bbf-95a2-c7ea0a542a22'
                },
                {
                  buildHookId: '5ffb34e50b762978a2030c97',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-m32pu7ve',
                  apiId: '7aa8077f-d8fc-449e-b6fd-b14a797f7690'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ErikRaude/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-m32pu7ve.netlify.app', category: 'apps'}
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
