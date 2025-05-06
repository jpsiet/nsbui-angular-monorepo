import { Injectable } from '@angular/core';
import { merge } from 'rxjs';
import { QueueService } from './queue-service';

class TreeNode<T> {
  data: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
  constructor(
    value: T,
    left: TreeNode<T> | null = null,
    right: TreeNode<T> | null = null
  ) {
    this.data = value;
    this.left = left;
    this.right = right;
  }
}

@Injectable({
  providedIn: 'root',
})
export class BSTree<T> {
  private root: TreeNode<T> | null;
  constructor(node?: TreeNode<T>) {
    this.root = node || null;
  }

  add(value: T, node: TreeNode<T> | null = this.root): TreeNode<T> {
    if (!node) {
      const root = new TreeNode<T>(value);
      if (!this.root) {
        this.root = root;
      }
      return root;
    } else {
      if (value < node.data) {
        node.left = this.add(value, node.left);
      } else {
        node.right = this.add(value, node.right);
      }
      return node;
    }
  }
  height(node: TreeNode<T> | null = this.root): number {
    if (!node) return 0;
    else {
      return Math.max(this.height(node.left), this.height(node.right)) + 1;
    }
  }
  traverse() {
    const height = this.height();
    for (let i = 0; i < height; i++) {
      this.levelInOrderTraversal(this.root);
    }
  }

  // (Left, Root, Right)
  levelInOrderTraversal(node: TreeNode<T> | null = this.root) {
    let result: T[] = [];

    if (!node) {
      return;
    }
    this.levelInOrderTraversal(node.left);
    console.log(node.data);
    // result.push(node.data);
    this.levelInOrderTraversal(node.right);
    // return result
  }
  // (Left, Root, Right)
  levelPreOrderTraversal(node: TreeNode<T> | null = this.root) {
    let result: T[] = [];

    if (!node) {
      return;
    }
    console.log(node.data);
    this.levelInOrderTraversal(node.left);
    // result.push(node.data);
    this.levelInOrderTraversal(node.right);
    // return result
  }

  // (Left, Root, Right)
  levelPostOrderTraversal(node: TreeNode<T> | null = this.root) {
    let result: T[] = [];

    if (!node) {
      return;
    }
    this.levelInOrderTraversal(node.left);
    // result.push(node.data);
    this.levelInOrderTraversal(node.right);
    console.log(node.data);
    // return result
  }

  // (Left, Root, Right)
  printLevelWise(node: TreeNode<T> | null = this.root, level: number) {
    let result: T[] = [];

    if (!node) {
      return;
    }
    if (level === 1) {
      console.log(node.data);
    }
    if (level > 1) {
      this.printLevelWise(node.left, level - 1);
      this.printLevelWise(node.right, level - 1);
    }
  }
  // with help of queue we can reduce complexity to o(n) to o(n2)
  levelOrderTraversel(node: TreeNode<number> | null) {
    // add root node
    let qsService: QueueService = new QueueService();
    let queue = qsService.getQueue<TreeNode<number>>();
    queue.add(node!);
    //console.log(queue.size())

    while (queue.size() > 0) {
      // now remove
      let tempNode: TreeNode<number> | undefined = queue.remove();

      console.log(tempNode!.data);
      if (tempNode!.left) {
        queue.add(tempNode!.left);
      }
      if (tempNode!.right) {
        queue.add(tempNode!.right);
      }
    }
  }

  printlevel() {
    let height = this.height();
    this.printLevelWise(this.root, 3);
    for (let i = 1; i < height + 1; i++) {
      this.printLevelWise(this.root, i);
    }
  }
  printQueuFromLeftSideUtil(
    node: TreeNode<number> | null,
    map: Map<number, number>,
    level: number = 0
  ) {
    if (!node) {
      return;
    }
    if (!map.has(level)) map.set(level, node.data);
    this.printQueuFromLeftSideUtil(node.left, map, level + 1);
    this.printQueuFromLeftSideUtil(node.right, map, level + 1);
  }
  printQueuFromLeftSide = (node: TreeNode<number> | null) => {
    let map: Map<number, number> = new Map();
    this.printQueuFromLeftSideUtil(node, map, 1);
    for (let item of map.values()) {
      console.log(item);
    }
  };
}
