export default class MinHeap {
    public length: number;
    private data: number[];    

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }
    
    delete(): number {
        if (this.length === 0) {
            return -1;
        }
        
        const headValue = this.data[0];
        if (this.length === 1) {
            this.data = [];
            this.length--;
            return headValue;
        }

        this.length--; 
        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return headValue;
    }

    private heapifyDown(index: number): void {
        if (index >= this.length) {
            return;
        }

        const leftIndex = this.leftChild(index);
        const rightIndex = this.rightChild(index);

        if (leftIndex >= this.length) {
            return;
        }

        const lValue = this.data[leftIndex];
        const rValue = this.data[rightIndex];
        const current = this.data[index];

        if (lValue > rValue && current > rValue) {
            this.data[index] = rValue;
            this.data[rightIndex] = current;
            this.heapifyDown(rightIndex);

        } else if (rValue > lValue && current > lValue) {
            this.data[index] = lValue;
            this.data[leftIndex] = current;
            this.heapifyDown(leftIndex);
        }
    }

    private heapifyUp(index: number): void {
        if (index === 0) {
            return;
        }

        const parent = this.parent(index);
        const value = this.data[parent];
        const current = this.data[index];

        if (value > this.data[index]) {
            this.data[index] = value;
            this.data[parent] = current;
            this.heapifyUp(parent);
        }

    }

    private parent(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    private leftChild(index: number): number {
        return  (index * 2) + 1;
    }

    private rightChild(index: number): number {
        return index * 2 + 2;
    }
}   
