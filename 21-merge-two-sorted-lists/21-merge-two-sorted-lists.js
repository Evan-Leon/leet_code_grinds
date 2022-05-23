/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (list1 === null && list2 === null) return null; 
    if (list1 === null) return list2;
    if (list2 === null) return list1;
    let head;
    if (list2.val < list1.val) {
        head = list2;
    } else {
        head = list1;
    }
    let current = head;
    while (list1 !== null && list2 !== null){
        let winner;
        if (list2.val < list1.val){
            winner = list2;
            list2 = list2.next;
        }else {
            winner = list1;
            list1 = list1.next;
        }
        current.next = winner;
        current = winner;
        
    }
    if (list1 === null) current.next = list2;
    if (list2 === null) current.next = list1;
    return head;
};