const search = require('./sequential')
const {Node, List} = require('../data-structures/linked-list')

test('sequential search', () => {
  let list = new List()
  let n1 = new Node({key: 1, d: 'd1'})
  let n2 = new Node({key: 2, d: 'd2'})
  let n3 = new Node({key: 3, d: 'd3'})
  let n4 = new Node({key: 4, d: 'd4'})

  list.push(n1)

  expect(search(list, (node) => node.data.d === 'd1')).toBe(n1)

  list.push(n2)
  list.push(n3)
  list.push(n4)

  expect(search(list, (node) => node.data.d === 'd3' )).toBe(n3)
  expect(search(list, (node) => node.data.d === 'null')).toBeNull()
})
