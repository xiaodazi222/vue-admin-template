const list = [
    {
        nick:'zhangsan',
        phone:12335478489,
        name:'aaaaa',
        subject:'英语',
        job:'teacher',
        year:22,
        updateTime:'2021-11-11'
    },
    {
        nick:'lisi',
        phone:12335478489,
        name:'aaaaa',
        subject:'数学',
        job:'teacher',
        year:21,
        updateTime:'2021-11-12'
    },
    {
        nick:'wangwu',
        phone:12335478489,
        name:'aaaaa',
        subject:'语文',
        job:'teacher',
        year:23,
        updateTime:'2021-11-13'
    },
]

module.exports = [
  {
    url: '/vue-admin-template/test/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          total: list.length,
          items: list
        }
      }
    }
  }
]
