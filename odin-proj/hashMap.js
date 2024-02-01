class HashMap {
    constructor() {
      // Initialize an array to store buckets (key-value pairs)
      this.buckets = [];
      // Choose a prime number for hashing to improve distribution
      this.size = 31;
    }
  
    // Hashing function to convert a key into an index
    hash(key) {
      let hashCode = 0;
      const primeNumber = 31;
  
      for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
      }
  
      // Modulo to ensure the index stays within the array bounds
      return hashCode % this.size;
    }
  
    // Function to add a key-value pair to the hash map
    set(key, value) {
      const index = this.hash(key);
  
      // If the bucket at the index doesn't exist, create it
      if (!this.buckets[index]) {
        this.buckets[index] = [];
      }
  
      // Check if the key already exists in the bucket
      const bucket = this.buckets[index];
      for (const pair of bucket) {
        if (pair.key === key) {
          pair.value = value; // If the key exists, update the value
          return;
        }
      }
  
      // If the key doesn't exist, add a new key-value pair to the bucket
      bucket.push({ key, value });
    }
  
    // Function to retrieve the value associated with a key
    get(key) {
      const index = this.hash(key);
  
      // Check if the bucket at the index exists
      if (this.buckets[index]) {
        const bucket = this.buckets[index];
  
        // Look for the key in the bucket and return its value if found
        for (const pair of bucket) {
          if (pair.key === key) {
            return pair.value;
          }
        }
      }
  
      // If the key is not found, return undefined
      return undefined;
    }
  
    // Function to remove a key-value pair from the hash map
    delete(key) {
      const index = this.hash(key);
  
      // Check if the bucket at the index exists
      if (this.buckets[index]) {
        const bucket = this.buckets[index];
  
        // Find the index of the key in the bucket
        const keyIndex = bucket.findIndex(pair => pair.key === key);
  
        // If the key is found, remove the key-value pair
        if (keyIndex !== -1) {
          bucket.splice(keyIndex, 1);
        }
      }
    }
  
    // Function to check if a key exists in the hash map
    has(key) {
      const index = this.hash(key);
  
      // Check if the bucket at the index exists
      if (this.buckets[index]) {
        const bucket = this.buckets[index];
  
        // Check if the key exists in the bucket
        return bucket.some(pair => pair.key === key);
      }
  
      return false; // Key not found
    }
  
    // Function to get all keys in the hash map
    keys() {
      const allKeys = [];
  
      // Iterate through all buckets
      for (const bucket of this.buckets) {
        // If the bucket exists, add its keys to the result
        if (bucket) {
          allKeys.push(...bucket.map(pair => pair.key));
        }
      }
  
      return allKeys;
    }
  
    // Function to get all values in the hash map
    values() {
      const allValues = [];
  
      // Iterate through all buckets
      for (const bucket of this.buckets) {
        // If the bucket exists, add its values to the result
        if (bucket) {
          allValues.push(...bucket.map(pair => pair.value));
        }
      }
  
      return allValues;
    }
  }
  
  // Example usage:
  const myHashMap = new HashMap();
  myHashMap.set("name", "John");
  myHashMap.set("age", 25);
  myHashMap.set("city", "New York");
  
  console.log(myHashMap.get("name")); // Output: John
  console.log(myHashMap.has("gender")); // Output: false
  console.log(myHashMap.keys()); // Output: [ 'name', 'age', 'city' ]
  console.log(myHashMap.values()); // Output: [ 'John', 25, 'New York' ]
  