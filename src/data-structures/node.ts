/**
 * Represents a node in a doubly linked list.
 * @class
 */
class Node<T> {
  /**
   * @property {T} data - The data stored in the node.
   */
  data: T;

  /**
   * @property {Node<T> | null} next - Pointer to the next node in the list.
   */
  next: Node<T> | null;

  /**
   * @property {Node<T> | null} prev - Pointer to the previous node in the list.
   */
  prev: Node<T> | null;

  /**
   * Creates a Node with two pointers (next and prev) and data.
   * @param {T} data - The data to store in the node.
   */
  constructor(data: T) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }

  /**
   * Sets the next node.
   * @param {Node<T> | null} nextNode - The next node in the list.
   */
  setNext(nextNode: Node<T> | null): void {
    this.next = nextNode;
  }

  /**
   * Sets the previous node.
   * @param {Node<T> | null} prevNode - The previous node in the list.
   */
  setPrev(prevNode: Node<T> | null): void {
    this.prev = prevNode;
  }

  /**
   * Creates a Node from an object.
   * @param {Object} obj - The object to create a node from.
   * @param {T} obj.data - The data to store in the node.
   * @returns {Node<T>} The created node.
   */
  static fromObject<T>(obj: { data: T }): Node<T> {
    return new Node(obj.data);
  }
}

export default Node;