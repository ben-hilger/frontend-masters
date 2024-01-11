
function qs(arr: number[], lo: number, hi: number): void {
    if (lo >= hi) {
        return;
    }

    const pivotIndex = partition(arr, lo, hi);
    
    qs(arr, lo, pivotIndex - 1);
    qs(arr, pivotIndex + 1, hi);
}

function partition(arr: number[], low: number, high: number): number {
    
    const pivot = arr[high];
    
    let index = low - 1;

    for (let i = low; i < high; i++) {
        if (arr[i] <= pivot) {
            index++;
            const temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
        }
    }

    index++;
    arr[high] = arr[index];
    arr[index] = pivot;

    return index;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
