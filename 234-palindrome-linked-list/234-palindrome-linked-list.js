/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (head.next === null) return head;
    let count = [];
    
    while (head !== null){
      count.push(head.val)
      head = head.next
    }
    // const rev = count.reverse().join("");
    const str = count.join("")
    console.log(count)
    // console.log(rev)
    console.log(str)
    return (count.join('') === count.reverse().join('')  );
};