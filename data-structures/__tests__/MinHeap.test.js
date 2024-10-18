import { MinHeap } from '../MinHeap.js';

describe('MinHeap', () => {
  describe('insert', () => {
    it('should insert elements into the heap and maintain min-heap property', () => {
      const heap = new MinHeap();
      heap.insert(10);
      heap.insert(20);
      heap.insert(5);
      heap.insert(30);

      // Expect the min element to be at the root
      expect(heap.peekMin()).toBe(5);
    });

    it('should maintain the correct size of the heap', () => {
      const heap = new MinHeap();
      heap.insert(1);
      heap.insert(3);
      heap.insert(5);

      // Expect size to be 3
      expect(heap.getSize()).toBe(3);
    });
  });

  describe('extractMin', () => {
    it('should extract the minimum element from the heap', () => {
      const heap = new MinHeap();
      heap.insert(10);
      heap.insert(50);
      heap.insert(20);

      // Expect 10 to be extracted first
      expect(heap.extractMin()).toBe(10);
      // Then 20, since it's now the min
      expect(heap.extractMin()).toBe(20);
    });

    it('should return null when extracting from an empty heap', () => {
      const heap = new MinHeap();
      expect(heap.extractMin()).toBeNull();
    });

    it('should maintain heap property after multiple extractions', () => {
      const heap = new MinHeap();
      heap.insert(10);
      heap.insert(40);
      heap.insert(20);
      heap.insert(30);
      heap.insert(5);

      // Extract min element, expect 5 first
      expect(heap.extractMin()).toBe(5);

      // After extracting, the new min should be 10
      expect(heap.peekMin()).toBe(10);

      // Further extraction
      expect(heap.extractMin()).toBe(10);
      expect(heap.peekMin()).toBe(20);
    });
  });

  describe('peekMin', () => {
    it('should return the minimum element without removing it', () => {
      const heap = new MinHeap();
      heap.insert(15);
      heap.insert(25);
      heap.insert(10);

      // Min is 10, but it should not be removed
      expect(heap.peekMin()).toBe(10);
      expect(heap.getSize()).toBe(3);
    });

    it('should return null when peeking into an empty heap', () => {
      const heap = new MinHeap();
      expect(heap.peekMin()).toBeNull();
    });
  });

  describe('getSize', () => {
    it('should return the correct size of the heap', () => {
      const heap = new MinHeap();
      expect(heap.getSize()).toBe(0); // Initially empty

      heap.insert(1);
      heap.insert(2);
      expect(heap.getSize()).toBe(2); // Size after insertion
    });

    it('should decrease size after extracting elements', () => {
      const heap = new MinHeap();
      heap.insert(100);
      heap.insert(200);

      expect(heap.getSize()).toBe(2); // Size before extraction

      heap.extractMin();
      expect(heap.getSize()).toBe(1); // Size after one extraction

      heap.extractMin();
      expect(heap.getSize()).toBe(0); // Size after all elements are extracted
    });
  });

  describe('isEmpty', () => {
    it('should return true when the heap is empty', () => {
      const heap = new MinHeap();
      expect(heap.isEmpty()).toBe(true);
    });

    it('should return false when the heap is not empty', () => {
      const heap = new MinHeap();
      heap.insert(50);
      expect(heap.isEmpty()).toBe(false);
    });
  });

  describe('heap property validation', () => {
    it('should maintain min-heap property after multiple insertions', () => {
      const heap = new MinHeap();
      const values = [30, 10, 50, 20, 5, 40, 60];
      values.forEach((v) => heap.insert(v));

      // After all insertions, the min value should be at the root
      expect(heap.peekMin()).toBe(5);

      // Extract elements and ensure they are in ascending order
      const extracted = [];
      while (!heap.isEmpty()) {
        extracted.push(heap.extractMin());
      }

      expect(extracted).toEqual([5, 10, 20, 30, 40, 50, 60]);
    });

    it('should maintain min-heap property after multiple insertions and extractions', () => {
      const heap = new MinHeap();
      heap.insert(60);
      heap.insert(40);
      heap.insert(80);
      heap.insert(30);
      heap.insert(90);

      expect(heap.extractMin()).toBe(30); // Extract the min element (30)
      expect(heap.peekMin()).toBe(40); // Next min element should be 40

      heap.insert(20);
      expect(heap.peekMin()).toBe(20); // Inserting 20 should make it the min

      expect(heap.extractMin()).toBe(20); // Extract the new min (20)
    });
  });
});
