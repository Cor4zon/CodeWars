class PaginationHelper {
	constructor(collection, itemsPerPage) {
	// The constructor takes in an array of items and a integer indicating how many
	// items fit within a single page
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
	}
	itemCount() {
	 return this.collection.length;
	}
	pageCount() {
	 return Math.ceil(this.collection.length / this.itemsPerPage);
	}
	pageItemCount(pageIndex) {
	// returns the number of items on the current page. page_index is zero based.
	// this method should return -1 for pageIndex values that are out of range
    if (pageIndex >= this.pageCount() || pageIndex < 0) {
      return -1;
    }
    for (let i = 0; i < this.pageCount() - 1; i++) {
      if (i < pageIndex) {
        continue;
      }
      return this.itemsPerPage;
    }
    return this.collection.length - this.itemsPerPage * (this.pageCount() - 1);
	}
	pageIndex(itemIndex) {
	// determines what page an item is on. Zero based indexes
	// this method should return -1 for itemIndex values that are out of range
    if (itemIndex < 0 || itemIndex >= this.collection.length) {
      return -1;
    }
    let lastItemOnPage = this.itemsPerPage;
    for (let i = 0; i < this.pageCount(); i++) {
      if (itemIndex < lastItemOnPage) {
        return i;
      }
      lastItemOnPage += this.itemsPerPage;
    }
    return this.pageCount() - 1;
	}
}
