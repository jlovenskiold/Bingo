export default {
  widgets: [
    {name: 'sanity-tutorials'},
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              sites: [
                {
                  buildHookId: '5ccadac34bd8aa1e95a6fbe1',
                  name: 'Content Studio',
                  siteId: '5fb3c494-058e-45cd-bbd6-6955582d68b6'
                },
                {
                  buildHookId: '5ccad916074b4b58ef5f85b7',
                  name: 'Blog Website',
                  siteId: '9b35752b-86c2-4911-beaa-7dd3abc64324'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jlovenskiold/Bingo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://Bingo-web.netlify.com', category: 'apps'}
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
