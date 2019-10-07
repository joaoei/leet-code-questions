/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let node3 = null;
    let node2 = null;
    let node1 = head;
    
    // verify if list is null or has only one element 
    if (head == null || head.next == null) {
        return head;
    } 
    
    // swap the two initial elements
    let nextNode = head.next;
    head.next = nextNode.next;
    nextNode.next = head;
    
    node2 = nextNode;
    node1 = head;

    // verify if exists two element forward
    while (node1.next != null && node1.next.next != null) {
        // swap the two elements
        let n3 = node1;
        let n2 = node1.next;
        let n1 = node1.next.next;
        
        n2.next = n1.next;
        n3.next = n1;
        n1.next = n2;
        
        node3 = n3;
        node2 = n1;
        node1 = n2;
    }

    return nextNode;
};