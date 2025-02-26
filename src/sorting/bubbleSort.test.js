const bubbleSort = require('./bubbleSort')
const Node = require('../data-structures/node')
const List = require('../data-structures/linked-list')

describe('bubbleSort', () => {
  test('bubble sort', () => {
    let n1 = new Node(1)
    let n2 = new Node(2)
    let n3 = new Node(3)
  
    let l = new List()
  
    // 3 1 2
    l.push(n3)
    l.push(n1)
    l.push(n2)
  
    bubbleSort(l, (left, right) => {
      return left.data > right.data
    })
    expect(l.toString()).toEqual('1 2 3')
  })  
})