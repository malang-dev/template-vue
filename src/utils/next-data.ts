export function NextData<T>(arr: T[], currentData: T) {
  const currentIndex: number = arr.indexOf(currentData);
  const data = currentIndex + 1 < arr.length ? arr[currentIndex + 1] : arr[0];
  return data;
}
