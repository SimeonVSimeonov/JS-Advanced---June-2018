function sortedList() {
    return {
        collection: [],
        size: 0,
        add: function (num) {
            this.collection.push(num);
            this.sort();
            this.size++;
        },
        remove: function (index) {
            if (index >= 0 && index < this.collection.length) {
                this.collection.splice(index, 1);
                this.size--;
            }
        },
        get: function (index) {
            if (index >= 0 && index < this.collection.length) {
                return this.collection[index]
            }
        },
        sort: function () {
            this.collection = this.collection.sort((a, b) => a - b);
        }

    }
}