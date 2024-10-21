class Comment {
  constructor(text) {
    this.text = text;
    this.votesQty = 0;
  }

  upvote() {
    this.votesQty += 1;
  }

  static mergeComments(first, second) {
    return `${first} ${second}`;
  }
}
