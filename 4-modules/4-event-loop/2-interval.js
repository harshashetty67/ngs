/*  - We shouldn't keep the node Event-loop busy by making Sync() calls. Always use async() calls for opertaions.
    - Keeping the node event-loop busy makes node to stuck in one action and we wont be able do any other task with node.
*/
setInterval(() => {
  console.log('Hello Event Loop!!');
}, 5000);
