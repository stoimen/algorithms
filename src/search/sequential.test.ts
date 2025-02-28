import List from '../data-structures/linkedList';
import Node from '../data-structures/node';
import sequentialSearch, { Predicate } from './sequentialSearch';

describe('sequentialSearch', () => {
  it('should return null for an empty list', () => {
    const list = new List<number>();
    const result = sequentialSearch(list, (node) => node.data === 42);
    expect(result).toBeNull();
  });

  it('should return the node that matches the predicate', () => {
    const list = new List<number>();
    const node1 = new Node(10);
    const node2 = new Node(20);
    const node3 = new Node(30);
    list.push(node1);
    list.push(node2);
    list.push(node3);

    const result = sequentialSearch(list, (node) => node.data === 20);
    expect(result).toBe(node2);
  });

  it('should return the first matching node if multiple nodes satisfy the predicate', () => {
    const list = new List<string>();
    const node1 = new Node("apple");
    const node2 = new Node("banana");
    const node3 = new Node("apple");
    list.push(node1);
    list.push(node2);
    list.push(node3);

    const result = sequentialSearch(list, (node) => node.data === "apple");
    expect(result).toBe(node1);
  });

  it('should return null if no node satisfies the predicate', () => {
    const list = new List<number>();
    const node1 = new Node(1);
    const node2 = new Node(2);
    list.push(node1);
    list.push(node2);

    const result = sequentialSearch(list, (node) => node.data === 3);
    expect(result).toBeNull();
  });
});
